/**
 * PLUX v7.1 — OFFLINE-FIRST ENGINE (IndexedDB + Outbox + Route/Vault Storage)
 * Persistencia local robusta sin límite de 5MB, cola FIFO de sincronización diferida
 * hacia Firestore (viajes, viajes compartidos, gastos, Splitwise, checklists) y respaldo de blobs/rutas.
 */
(function (root) {
  'use strict';

  const DB_NAME = 'PluxOfflineDB';
  const DB_VERSION = 2;
  const STORES = {
    TRIPS: 'trips',
    OUTBOX: 'outbox',
    VAULT: 'vault_blobs',
    ROUTES: 'route_cache',
    META: 'meta_state'
  };
  const ROUTE_TTL_MS = 14 * 24 * 60 * 60 * 1000;
  const GROUP_FINANCE_KEY = 'Plux_GroupFinance_V1';
  const CHECKLIST_KEY = 'PluxChecklist_V2';
  const PENDING_SYNC_KEY = 'Plux_Pending_Cloud_Sync';
  const PENDING_COLLAB_KEY = 'Plux_Pending_Collab_Sync';
  const PENDING_IDB_COUNT_KEY = 'Plux_Pending_IDB_Outbox_Count';

  // Fallback en memoria para entornos sin IndexedDB (p.ej. incógnito estricto o Node VM)
  const memFallback = {
    trips: new Map(),
    outbox: [],
    outboxSeq: 1,
    vault_blobs: new Map(),
    route_cache: new Map(),
    meta_state: new Map()
  };

  let dbPromise = null;
  let cachedPendingCount = 0;
  let internalTripSaveDepth = 0;

  function hasIndexedDB() {
    try {
      return typeof indexedDB !== 'undefined' && indexedDB !== null;
    } catch (e) {
      return false;
    }
  }

  function isOnline() {
    try {
      return typeof navigator === 'undefined' ? true : navigator.onLine !== false;
    } catch (e) {
      return true;
    }
  }

  function getTripsStorageKey() {
    if (typeof root.TRIPS_STORAGE_KEY === 'string' && root.TRIPS_STORAGE_KEY) {
      return root.TRIPS_STORAGE_KEY;
    }
    try {
      if (typeof TRIPS_STORAGE_KEY !== 'undefined' && TRIPS_STORAGE_KEY) {
        return String(TRIPS_STORAGE_KEY);
      }
    } catch (e) {}
    return 'Plux_trips';
  }

  function getActiveSyncCode() {
    try {
      if (typeof syncCode !== 'undefined' && syncCode) return String(syncCode);
    } catch (e) {}
    if (typeof root.syncCode === 'string' && root.syncCode) return root.syncCode;
    return '';
  }

  function getActiveDestinos() {
    try {
      if (typeof destinos !== 'undefined' && Array.isArray(destinos)) return destinos;
    } catch (e) {}
    return Array.isArray(root.destinos) ? root.destinos : null;
  }

  function getFirestoreInstance() {
    if (typeof root.firebase !== 'undefined' && typeof root.firebase.firestore === 'function') {
      try {
        return root.firebase.firestore();
      } catch (e) {}
    }
    try {
      if (typeof db !== 'undefined' && db && typeof db.collection === 'function') return db;
    } catch (e) {}
    if (root.db && typeof root.db.collection === 'function') return root.db;
    return null;
  }

  function getServerTimestampValue() {
    try {
      if (root.firebase && root.firebase.firestore && root.firebase.firestore.FieldValue && typeof root.firebase.firestore.FieldValue.serverTimestamp === 'function') {
        return root.firebase.firestore.FieldValue.serverTimestamp();
      }
    } catch (e) {}
    return new Date().toISOString();
  }

  function readLocalJson(key, fallback) {
    try {
      if (typeof localStorage === 'undefined') return fallback;
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed == null ? fallback : parsed;
    } catch (e) {
      return fallback;
    }
  }

  function writeLocalJson(key, value) {
    try {
      if (typeof localStorage === 'undefined') return false;
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  function normalizeGroupFinanceState(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const gastosGrupales = Array.isArray(raw.gastosGrupales) ? raw.gastosGrupales : [];
    const divisionesOverrides = raw.divisionesOverrides && typeof raw.divisionesOverrides === 'object' ? raw.divisionesOverrides : {};
    const liquidaciones = Array.isArray(raw.liquidaciones) ? raw.liquidaciones : [];
    if (gastosGrupales.length === 0 && Object.keys(divisionesOverrides).length === 0 && liquidaciones.length === 0) {
      return null;
    }
    return {
      gastosGrupales,
      divisionesOverrides,
      liquidaciones,
      updatedAt: raw.updatedAt || new Date().toISOString()
    };
  }

  function readAllGroupFinanceLocal() {
    const parsed = readLocalJson(GROUP_FINANCE_KEY, null);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
    const mem = memFallback.meta_state.get('group_finance');
    if (mem && mem.data && typeof mem.data === 'object') return mem.data;
    return {};
  }

  function getGroupFinanceForTrip(tripId, syncCodeVal) {
    const all = readAllGroupFinanceLocal();
    const candidates = [syncCodeVal, tripId].filter(Boolean).map(String);
    for (const k of candidates) {
      const norm = normalizeGroupFinanceState(all[k]);
      if (norm) return norm;
    }
    return null;
  }

  function readChecklistLocal() {
    const parsed = readLocalJson(CHECKLIST_KEY, null);
    if (Array.isArray(parsed)) return parsed;
    const mem = memFallback.meta_state.get('checklist');
    if (mem && Array.isArray(mem.data)) return mem.data;
    return [];
  }

  function getStoredTripsSafe() {
    try {
      if (typeof root.getStoredTrips === 'function') {
        const list = root.getStoredTrips();
        if (Array.isArray(list)) return list;
      }
    } catch (e) {}
    const parsed = readLocalJson(getTripsStorageKey(), []);
    return Array.isArray(parsed) ? parsed : [];
  }

  function findStoredTripById(entityId) {
    if (!entityId) return null;
    const key = String(entityId);
    const trips = getStoredTripsSafe();
    return trips.find((tr) => tr && (String(tr.syncCode || '') === key || String(tr.tripId || '') === key)) || null;
  }

  function syncPendingCountHint(count) {
    const safeCount = Math.max(0, Number(count) || 0);
    cachedPendingCount = safeCount;
    try {
      if (typeof localStorage !== 'undefined') {
        if (safeCount > 0) {
          localStorage.setItem(PENDING_IDB_COUNT_KEY, String(safeCount));
        } else {
          localStorage.removeItem(PENDING_IDB_COUNT_KEY);
        }
      }
    } catch (e) {}
  }

  function getPendingOutboxCountSync() {
    const memPending = memFallback.outbox.filter((item) => item && item.status === 'pending').length;
    let hintCount = 0;
    try {
      if (typeof localStorage !== 'undefined') {
        hintCount = Number(localStorage.getItem(PENDING_IDB_COUNT_KEY) || 0) || 0;
      }
    } catch (e) {}
    return Math.max(cachedPendingCount, memPending, hintCount);
  }

  function openDB() {
    if (!hasIndexedDB()) return Promise.resolve(null);
    if (dbPromise) return dbPromise;

    dbPromise = new Promise((resolve) => {
      try {
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = (ev) => {
          const db = ev.target.result;
          if (!db.objectStoreNames.contains(STORES.TRIPS)) {
            db.createObjectStore(STORES.TRIPS, { keyPath: 'tripId' });
          }
          if (!db.objectStoreNames.contains(STORES.OUTBOX)) {
            const os = db.createObjectStore(STORES.OUTBOX, { keyPath: 'id', autoIncrement: true });
            os.createIndex('status', 'status', { unique: false });
          }
          if (!db.objectStoreNames.contains(STORES.VAULT)) {
            const vs = db.createObjectStore(STORES.VAULT, { keyPath: 'id' });
            vs.createIndex('tripId', 'tripId', { unique: false });
          }
          if (!db.objectStoreNames.contains(STORES.ROUTES)) {
            db.createObjectStore(STORES.ROUTES, { keyPath: 'key' });
          }
          if (!db.objectStoreNames.contains(STORES.META)) {
            db.createObjectStore(STORES.META, { keyPath: 'key' });
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => {
          dbPromise = null;
          resolve(null);
        };
      } catch (e) {
        dbPromise = null;
        resolve(null);
      }
    });
    return dbPromise;
  }

  function idbTx(storeName, mode, runner) {
    return openDB().then((db) => {
      if (!db || !db.objectStoreNames.contains(storeName)) return null;
      return new Promise((resolve, reject) => {
        try {
          const tx = db.transaction(storeName, mode);
          const store = tx.objectStore(storeName);
          let resultVal;
          const reqOrPromise = runner(store, tx);
          if (reqOrPromise && typeof reqOrPromise.then === 'function') {
            reqOrPromise.then((v) => { resultVal = v; }).catch(reject);
          } else if (reqOrPromise && 'onsuccess' in reqOrPromise) {
            reqOrPromise.onsuccess = (e) => { resultVal = e.target.result; };
            reqOrPromise.onerror = (e) => reject(e.target.error);
          }
          tx.oncomplete = () => resolve(resultVal);
          tx.onerror = (e) => reject(e.target.error);
          tx.onabort = (e) => reject(e.target.error);
        } catch (err) {
          reject(err);
        }
      });
    }).catch(() => null);
  }

  function reqToPromise(req) {
    return new Promise((resolve, reject) => {
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  // ---------------------------------------------------------------------------
  // 1. ESPEJO DE VIAJES, SPLITWISE (GROUP FINANCE) Y CHECKLIST
  // ---------------------------------------------------------------------------
  async function mirrorTrips(tripsArray) {
    if (!Array.isArray(tripsArray)) return false;
    const allFinance = readAllGroupFinanceLocal();
    const normalized = tripsArray
      .filter(Boolean)
      .map((tr, idx) => {
        const tripId = String(tr.tripId || tr.syncCode || tr.id || `trip_idx_${idx}`);
        const existingGf = normalizeGroupFinanceState(tr.groupFinance);
        const storedGf = normalizeGroupFinanceState(allFinance[tr.syncCode] || allFinance[tripId]);
        const merged = {
          ...tr,
          tripId,
          _mirroredAt: Date.now()
        };
        if (existingGf || storedGf) {
          merged.groupFinance = existingGf || storedGf;
        }
        return merged;
      });

    memFallback.trips.clear();
    normalized.forEach((t) => memFallback.trips.set(t.tripId, t));

    const db = await openDB();
    if (!db) return true;
    await idbTx(STORES.TRIPS, 'readwrite', async (store) => {
      await reqToPromise(store.clear());
      for (const t of normalized) {
        store.put(t);
      }
    });
    return true;
  }

  async function getMirroredTrips() {
    const db = await openDB();
    if (!db) {
      return Array.from(memFallback.trips.values());
    }
    const rows = await idbTx(STORES.TRIPS, 'readonly', (store) => store.getAll());
    return Array.isArray(rows) ? rows : Array.from(memFallback.trips.values());
  }

  async function mirrorGroupFinance(tripId, stateObj) {
    const all = { ...readAllGroupFinanceLocal() };
    if (tripId && stateObj && typeof stateObj === 'object') {
      all[String(tripId)] = stateObj;
    }
    const record = {
      key: 'group_finance',
      data: all,
      updatedAt: new Date().toISOString()
    };
    memFallback.meta_state.set('group_finance', record);

    const db = await openDB();
    if (db) {
      await idbTx(STORES.META, 'readwrite', (store) => store.put(record));
      // Actualizar también el espejo del viaje correspondiente si existe en trips
      if (tripId && stateObj) {
        const cleanId = String(tripId);
        const memTrip = memFallback.trips.get(cleanId);
        if (memTrip) {
          memTrip.groupFinance = stateObj;
          memTrip._mirroredAt = Date.now();
        }
        await idbTx(STORES.TRIPS, 'readwrite', async (store) => {
          const existing = await reqToPromise(store.get(cleanId));
          if (existing) {
            existing.groupFinance = stateObj;
            existing._mirroredAt = Date.now();
            await reqToPromise(store.put(existing));
          }
        });
      }
    }
    return record;
  }

  async function getMirroredGroupFinance() {
    const db = await openDB();
    if (db) {
      const row = await idbTx(STORES.META, 'readonly', (store) => store.get('group_finance'));
      if (row && row.data && typeof row.data === 'object') {
        memFallback.meta_state.set('group_finance', row);
        return row.data;
      }
    }
    const mem = memFallback.meta_state.get('group_finance');
    return mem && mem.data && typeof mem.data === 'object' ? mem.data : {};
  }

  async function mirrorChecklist(items) {
    const safeItems = Array.isArray(items) ? items : [];
    const record = {
      key: 'checklist',
      data: safeItems,
      updatedAt: new Date().toISOString()
    };
    memFallback.meta_state.set('checklist', record);

    const db = await openDB();
    if (db) {
      await idbTx(STORES.META, 'readwrite', (store) => store.put(record));
    }
    return record;
  }

  async function getMirroredChecklist() {
    const db = await openDB();
    if (db) {
      const row = await idbTx(STORES.META, 'readonly', (store) => store.get('checklist'));
      if (row && Array.isArray(row.data)) {
        memFallback.meta_state.set('checklist', row);
        return row.data;
      }
    }
    const mem = memFallback.meta_state.get('checklist');
    return mem && Array.isArray(mem.data) ? mem.data : [];
  }

  // ---------------------------------------------------------------------------
  // 2. COLA OUTBOX DE SINCRONIZACIÓN DIFERIDA
  // ---------------------------------------------------------------------------
  async function getPendingOutbox() {
    const db = await openDB();
    if (!db) {
      const memList = memFallback.outbox.filter((item) => item && item.status === 'pending').map((i) => ({ ...i }));
      syncPendingCountHint(memList.length);
      return memList;
    }
    const rows = await idbTx(STORES.OUTBOX, 'readonly', (store) => store.getAll());
    if (!Array.isArray(rows)) {
      const memList = memFallback.outbox.filter((i) => i && i.status === 'pending');
      syncPendingCountHint(memList.length);
      return memList;
    }
    const pending = rows.filter((r) => r && r.status === 'pending').sort((a, b) => (a.id || 0) - (b.id || 0));
    syncPendingCountHint(pending.length);
    return pending;
  }

  async function getPendingOutboxCount() {
    const list = await getPendingOutbox();
    return list.length;
  }

  async function enqueueMutation(entityType, entityId, payload) {
    const cleanType = String(entityType || 'trip');
    const cleanId = String(entityId || 'default');
    const record = {
      entityType: cleanType,
      entityId: cleanId,
      dedupKey: `${cleanType}:${cleanId}`,
      payload: payload === undefined ? null : payload,
      updatedAt: new Date().toISOString(),
      retries: 0,
      status: 'pending'
    };

    // Deduplicación en memoria
    const existingMemIdx = memFallback.outbox.findIndex((x) => x && x.dedupKey === record.dedupKey && x.status === 'pending');
    if (existingMemIdx >= 0) {
      memFallback.outbox[existingMemIdx] = { ...memFallback.outbox[existingMemIdx], ...record };
    } else {
      memFallback.outbox.push({ ...record, id: memFallback.outboxSeq++ });
    }
    syncPendingCountHint(Math.max(cachedPendingCount, memFallback.outbox.filter((x) => x && x.status === 'pending').length));

    const db = await openDB();
    if (db) {
      await idbTx(STORES.OUTBOX, 'readwrite', async (store) => {
        const all = await reqToPromise(store.getAll());
        const existing = (all || []).find((x) => x && x.dedupKey === record.dedupKey && x.status === 'pending');
        if (existing) {
          await reqToPromise(store.put({ ...existing, ...record, id: existing.id }));
        } else {
          await reqToPromise(store.add(record));
        }
      });
      await getPendingOutboxCount();
    }

    if (typeof root.markPendingCloudSync === 'function') {
      try { root.markPendingCloudSync(); } catch (e) {}
    }

    // Solicitar Background Sync si está disponible
    try {
      if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && 'SyncManager' in root) {
        const reg = await navigator.serviceWorker.ready;
        if (reg && reg.sync) {
          await reg.sync.register('plux-outbox-sync');
        }
      }
    } catch (e) {}

    updateOnlinePillStatus();
    return record;
  }

  let isFlushing = false;

  function embedFinanceIntoStoredTripsLocal(tripId, financeState) {
    if (typeof localStorage === 'undefined') return false;
    const norm = normalizeGroupFinanceState(financeState);
    if (!norm) return false;
    const key = String(tripId || '');
    if (!key) return false;

    const allFinance = readAllGroupFinanceLocal();
    allFinance[key] = norm;
    writeLocalJson(GROUP_FINANCE_KEY, allFinance);

    const trips = getStoredTripsSafe();
    if (!Array.isArray(trips) || trips.length === 0) return false;
    let changed = false;
    const updated = trips.map((tr) => {
      if (!tr) return tr;
      if (String(tr.tripId || '') === key || String(tr.syncCode || '') === key) {
        changed = true;
        return { ...tr, groupFinance: norm };
      }
      return tr;
    });
    if (changed) {
      internalTripSaveDepth++;
      try {
        writeLocalJson(getTripsStorageKey(), updated);
        void mirrorTrips(updated);
      } finally {
        internalTripSaveDepth = Math.max(0, internalTripSaveDepth - 1);
      }
    }
    return changed;
  }

  function buildSafeCollabPayload(entityId, payload) {
    let payloadObj = null;
    if (typeof payload === 'string') {
      try {
        payloadObj = JSON.parse(payload);
      } catch (e) {
        return { serialized: payload, parsed: null };
      }
    } else if (payload && typeof payload === 'object') {
      payloadObj = { ...payload };
    } else {
      payloadObj = {};
    }

    // Si existe un viaje completo almacenado con el mismo syncCode/tripId, preservar sus campos sin romper el esquema
    const storedTrip = findStoredTripById(entityId) || findStoredTripById(payloadObj.tripId);
    const merged = storedTrip ? { ...storedTrip, ...payloadObj } : { ...payloadObj };

    // Embeber groupFinance si existe para este viaje (sin pisar si payload ya trae uno)
    const gfFromPayload = normalizeGroupFinanceState(merged.groupFinance);
    const gfFromLocal = getGroupFinanceForTrip(merged.tripId || entityId, merged.syncCode || entityId);
    if (gfFromPayload || gfFromLocal) {
      merged.groupFinance = gfFromPayload || gfFromLocal;
    }

    // Preservar checklist si ya viene en el payload (sin inflar viajes sin checklist)
    if (Array.isArray(payloadObj.checklist) && payloadObj.checklist.length > 0) {
      merged.checklist = payloadObj.checklist;
    }

    return {
      serialized: JSON.stringify(merged),
      parsed: merged
    };
  }

  async function syncProfileExtraFieldsSafe(extraFields) {
    try {
      if (!extraFields || typeof extraFields !== 'object') return;
      if (typeof root.getPluxProfileRef !== 'function') return;
      const ref = root.getPluxProfileRef();
      if (ref && typeof ref.set === 'function') {
        await ref.set(extraFields, { merge: true });
      }
    } catch (e) {}
  }

  async function processSingleOutboxItem(item, batchContext = {}) {
    if (!item) return true;
    const { entityType, entityId, payload } = item;

    if (entityType === 'collab_trip') {
      const firestore = getFirestoreInstance();
      if (firestore && typeof firestore.collection === 'function') {
        const { serialized, parsed } = buildSafeCollabPayload(entityId, payload);
        const docPayload = {
          data: serialized,
          timestamp: getServerTimestampValue()
        };
        if (parsed && parsed.nombre) {
          docPayload.nombreViaje = String(parsed.nombre);
        }
        if (parsed && Array.isArray(parsed.destinos) && parsed.destinos.length > 0) {
          const summary = parsed.destinos.map((d) => d && d.nombre).filter(Boolean).join(', ');
          if (summary) docPayload.destinosResumen = summary;
        }
        await firestore
          .collection('plux_viajes_compartidos')
          .doc(String(entityId))
          .set(docPayload, { merge: true });
        return true;
      }
      return false;
    }

    if (entityType === 'checklist') {
      const list = Array.isArray(payload) ? payload : readChecklistLocal();
      try {
        if (Array.isArray(payload)) {
          writeLocalJson(CHECKLIST_KEY, payload);
        }
        void mirrorChecklist(list);
      } catch (e) {}
      if (typeof root.sincronizarPerfil === 'function') {
        await Promise.resolve(root.sincronizarPerfil());
      }
      if (Array.isArray(list) && list.length > 0) {
        await syncProfileExtraFieldsSafe({ checklist: list });
      }
      return true;
    }

    if (entityType === 'group_finance' || entityType === 'expense') {
      const gfCandidate = normalizeGroupFinanceState(
        payload && payload.groupFinance ? payload.groupFinance : payload
      );
      if (gfCandidate) {
        embedFinanceIntoStoredTripsLocal(entityId, gfCandidate);
        void mirrorGroupFinance(entityId, gfCandidate);
      }

      // Si pertenece a un viaje compartido con syncCode y no hay un collab_trip pendiente en este lote, reflejarlo en plux_viajes_compartidos
      const storedTrip = findStoredTripById(entityId);
      const targetSyncCode = (payload && payload.syncCode) || (storedTrip && storedTrip.syncCode) || (getActiveSyncCode() === String(entityId) ? getActiveSyncCode() : '');
      const collabAlreadyInBatch = batchContext.collabIds && batchContext.collabIds.has(String(targetSyncCode));
      if (targetSyncCode && !collabAlreadyInBatch && gfCandidate) {
        const firestore = getFirestoreInstance();
        if (firestore && typeof firestore.collection === 'function') {
          const { serialized } = buildSafeCollabPayload(targetSyncCode, storedTrip ? { ...storedTrip, groupFinance: gfCandidate } : { tripId: entityId, syncCode: targetSyncCode, groupFinance: gfCandidate });
          await firestore
            .collection('plux_viajes_compartidos')
            .doc(String(targetSyncCode))
            .set({
              data: serialized,
              timestamp: getServerTimestampValue()
            }, { merge: true });
        }
      }

      if (typeof root.sincronizarPerfil === 'function') {
        await Promise.resolve(root.sincronizarPerfil());
      }
      if (gfCandidate) {
        await syncProfileExtraFieldsSafe({ groupFinance: readAllGroupFinanceLocal() });
      }
      return true;
    }

    if (entityType === 'trip' || entityType === 'profile') {
      const gf = getGroupFinanceForTrip(entityId, getActiveSyncCode());
      if (gf) {
        embedFinanceIntoStoredTripsLocal(entityId, gf);
      }
      if (typeof root.sincronizarPerfil === 'function') {
        await Promise.resolve(root.sincronizarPerfil());
      }
      return true;
    }

    return true;
  }

  async function flushOutbox(silent = false) {
    if (!isOnline() || isFlushing) return { flushed: 0, remaining: await getPendingOutboxCount() };
    isFlushing = true;
    let flushed = 0;

    try {
      const pending = await getPendingOutbox();
      if (pending.length === 0) {
        syncPendingCountHint(0);
        updateOnlinePillStatus();
        return { flushed: 0, remaining: 0 };
      }

      const batchContext = {
        collabIds: new Set(
          pending
            .filter((p) => p && p.entityType === 'collab_trip')
            .map((p) => String(p.entityId))
        )
      };

      const db = await openDB();
      for (const item of pending) {
        try {
          const ok = await processSingleOutboxItem(item, batchContext);
          if (ok) {
            flushed++;
            memFallback.outbox = memFallback.outbox.filter((x) => !(x && x.dedupKey === item.dedupKey && (x.id === item.id || item.id === undefined)));
            if (db && item.id !== undefined) {
              await idbTx(STORES.OUTBOX, 'readwrite', (store) => store.delete(item.id));
            }
          } else {
            item.retries = (item.retries || 0) + 1;
            const memIdx = memFallback.outbox.findIndex((x) => x && x.dedupKey === item.dedupKey);
            if (memIdx >= 0) memFallback.outbox[memIdx].retries = item.retries;
            if (db && item.id !== undefined) {
              await idbTx(STORES.OUTBOX, 'readwrite', (store) => store.put(item));
            }
          }
        } catch (err) {
          item.retries = (item.retries || 0) + 1;
          const memIdx = memFallback.outbox.findIndex((x) => x && x.dedupKey === item.dedupKey);
          if (memIdx >= 0) memFallback.outbox[memIdx].retries = item.retries;
          if (db && item.id !== undefined) {
            await idbTx(STORES.OUTBOX, 'readwrite', (store) => store.put(item));
          }
        }
      }

      const remaining = await getPendingOutboxCount();
      syncPendingCountHint(remaining);
      if (remaining === 0 && typeof localStorage !== 'undefined') {
        try {
          if (!localStorage.getItem(PENDING_COLLAB_KEY)) {
            localStorage.removeItem(PENDING_SYNC_KEY);
          }
        } catch (e) {}
      }

      updateOnlinePillStatus();
      if (flushed > 0 && !silent && typeof root.showToast === 'function') {
        root.showToast(`🔄 Sincronización offline completada (${flushed} cambio${flushed === 1 ? '' : 's'}).`, 'success');
      }
      return { flushed, remaining };
    } finally {
      isFlushing = false;
    }
  }

  // ---------------------------------------------------------------------------
  // 3. BÓVEDA DE BLOBS OFFLINE (vault_blobs)
  // ---------------------------------------------------------------------------
  async function saveVaultBlob(record) {
    if (!record || !record.id) return null;
    const item = {
      id: String(record.id),
      tripId: String(record.tripId || 'default'),
      blockKey: String(record.blockKey || ''),
      name: String(record.name || 'documento'),
      mime: String(record.mime || 'application/octet-stream'),
      size: Number(record.size) || 0,
      blob: record.blob || null,
      dataUrl: record.dataUrl || null,
      createdAt: record.createdAt || new Date().toISOString()
    };
    memFallback.vault_blobs.set(item.id, item);

    const db = await openDB();
    if (db) {
      await idbTx(STORES.VAULT, 'readwrite', (store) => store.put(item));
    }
    return item;
  }

  async function getVaultBlob(id) {
    if (!id) return null;
    const cleanId = String(id);
    const db = await openDB();
    if (db) {
      const row = await idbTx(STORES.VAULT, 'readonly', (store) => store.get(cleanId));
      if (row) return row;
    }
    return memFallback.vault_blobs.get(cleanId) || null;
  }

  async function deleteVaultBlob(id) {
    if (!id) return false;
    const cleanId = String(id);
    memFallback.vault_blobs.delete(cleanId);
    const db = await openDB();
    if (db) {
      await idbTx(STORES.VAULT, 'readwrite', (store) => store.delete(cleanId));
    }
    return true;
  }

  async function listVaultBlobsByTrip(tripId) {
    const cleanTrip = String(tripId || '');
    const db = await openDB();
    if (!db) {
      return Array.from(memFallback.vault_blobs.values()).filter((x) => !cleanTrip || x.tripId === cleanTrip);
    }
    const rows = await idbTx(STORES.VAULT, 'readonly', (store) => store.getAll());
    const list = Array.isArray(rows) ? rows : Array.from(memFallback.vault_blobs.values());
    return cleanTrip ? list.filter((x) => x && x.tripId === cleanTrip) : list;
  }

  // ---------------------------------------------------------------------------
  // 4. CACHÉ PERSISTENTE DE RUTAS OSRM (route_cache)
  // ---------------------------------------------------------------------------
  async function getCachedRoute(key) {
    if (!key) return null;
    const now = Date.now();
    const memHit = memFallback.route_cache.get(key);
    if (memHit && (now - (memHit.updatedAt || 0)) < ROUTE_TTL_MS) return memHit;

    const db = await openDB();
    if (db) {
      const row = await idbTx(STORES.ROUTES, 'readonly', (store) => store.get(key));
      if (row && (now - (row.updatedAt || 0)) < ROUTE_TTL_MS) {
        memFallback.route_cache.set(key, row);
        return row;
      }
    }
    return null;
  }

  async function saveCachedRoute(record) {
    if (!record || !record.key) return null;
    const entry = { ...record, updatedAt: Date.now() };
    memFallback.route_cache.set(entry.key, entry);
    const db = await openDB();
    if (db) {
      await idbTx(STORES.ROUTES, 'readwrite', (store) => store.put(entry));
    }
    return entry;
  }

  async function getStorageStats() {
    const [trips, outbox, vaults, gfMap, checklist] = await Promise.all([
      getMirroredTrips(),
      getPendingOutbox(),
      listVaultBlobsByTrip(''),
      getMirroredGroupFinance(),
      getMirroredChecklist()
    ]);
    let routesCount = memFallback.route_cache.size;
    const db = await openDB();
    if (db) {
      const routes = await idbTx(STORES.ROUTES, 'readonly', (store) => store.getAll());
      if (Array.isArray(routes)) routesCount = routes.length;
    }
    const vaultBytes = vaults.reduce((sum, v) => sum + (Number(v.size) || 0), 0);
    return {
      tripsCount: trips.length,
      outboxPending: outbox.length,
      routesCount,
      vaultCount: vaults.length,
      vaultBytes,
      groupFinanceTripsCount: Object.keys(gfMap || {}).length,
      checklistCount: Array.isArray(checklist) ? checklist.length : 0
    };
  }

  // ---------------------------------------------------------------------------
  // 5. HOOKS NO INVASIVOS SOBRE AUTOSAVE, GASTOS, SPLITWISE Y CHECKLIST
  // ---------------------------------------------------------------------------
  function updateOnlinePillStatus() {
    if (typeof root.updateLiveCollabBadge === 'function') {
      try { root.updateLiveCollabBadge(); } catch (e) {}
    }
    if (typeof document === 'undefined') return;
    getPendingOutboxCount().then((count) => {
      const pill = document.getElementById('plux-live-collab-pill');
      if (!pill) return;
      if (!isOnline() && count > 0) {
        pill.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:#f59e0b;display:inline-block;"></span> Offline · ${count} en cola`;
      } else if (isOnline() && count > 0) {
        pill.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:#38bdf8;display:inline-block;"></span> Sincronizando (${count})...`;
      }
    }).catch(() => {});
  }

  function currentTripEntityId() {
    const sc = getActiveSyncCode();
    if (sc) return sc;
    try {
      if (typeof root.getCurrentTripId === 'function') {
        const id = root.getCurrentTripId();
        if (id) return String(id);
      }
    } catch (e) {}
    return 'active_trip';
  }

  function buildActiveCollabPayload(tripDataOverride) {
    const sc = getActiveSyncCode();
    const tid = currentTripEntityId();
    const base = (tripDataOverride && typeof tripDataOverride === 'object')
      ? { ...tripDataOverride }
      : (findStoredTripById(sc) || findStoredTripById(tid) || {});
    const activeDests = getActiveDestinos();
    if (!Array.isArray(base.destinos) && Array.isArray(activeDests)) {
      base.destinos = activeDests;
    }
    if (sc && !base.syncCode) base.syncCode = sc;
    if (tid && !base.tripId) base.tripId = tid;
    const gf = getGroupFinanceForTrip(base.tripId || tid, sc);
    if (gf) base.groupFinance = gf;
    base.updatedAt = new Date().toISOString();
    return base;
  }

  function installOfflineHooks() {
    // Hook sobre saveTrips
    if (typeof root.saveTrips === 'function' && !root.saveTrips._pluxV71IdbHooked) {
      const origSaveTrips = root.saveTrips;
      const wrappedSaveTrips = function (tripsArr) {
        const res = origSaveTrips.apply(this, arguments);
        if (Array.isArray(tripsArr)) {
          void mirrorTrips(tripsArr);
          if (!isOnline() && internalTripSaveDepth === 0) {
            const tid = currentTripEntityId();
            void enqueueMutation('trip', tid, { updatedAt: new Date().toISOString() });
          }
        }
        return res;
      };
      wrappedSaveTrips._pluxV71IdbHooked = true;
      root.saveTrips = wrappedSaveTrips;
    }

    // Hook sobre pluxCoreAutoSave
    if (typeof root.pluxCoreAutoSave === 'function' && !root.pluxCoreAutoSave._pluxV71IdbHooked) {
      const origCoreSave = root.pluxCoreAutoSave;
      const wrappedCoreSave = function () {
        const res = origCoreSave.apply(this, arguments);
        try {
          const trips = getStoredTripsSafe();
          if (trips.length > 0) {
            void mirrorTrips(trips);
          }
          if (!isOnline() && res && res.saved) {
            const tid = (res.tripData && (res.tripData.syncCode || res.tripData.tripId)) || currentTripEntityId();
            const gf = getGroupFinanceForTrip(tid, getActiveSyncCode());
            void enqueueMutation('trip', tid, {
              updatedAt: new Date().toISOString(),
              ...(gf ? { groupFinance: gf } : {})
            });
            const sc = (res.tripData && res.tripData.syncCode) || getActiveSyncCode();
            if (sc) {
              void enqueueMutation('collab_trip', sc, buildActiveCollabPayload(res.tripData));
            }
          }
        } catch (e) {}
        return res;
      };
      wrappedCoreSave._pluxV71IdbHooked = true;
      root.pluxCoreAutoSave = wrappedCoreSave;
    }

    // Hooks sobre gastos en resumen (actualizarGastoResumen y toggleEstadoPago)
    ['actualizarGastoResumen', 'toggleEstadoPago'].forEach((fnName) => {
      if (typeof root[fnName] === 'function' && !root[fnName]._pluxV71IdbHooked) {
        const origExpFn = root[fnName];
        const wrappedExpFn = function () {
          const res = origExpFn.apply(this, arguments);
          try {
            const trips = getStoredTripsSafe();
            if (trips.length > 0) void mirrorTrips(trips);
            if (!isOnline()) {
              const tid = currentTripEntityId();
              const sc = getActiveSyncCode();
              const gf = getGroupFinanceForTrip(tid, sc);
              void enqueueMutation('expense', tid, {
                updatedAt: new Date().toISOString(),
                syncCode: sc || null,
                ...(gf ? { groupFinance: gf } : {})
              });
              if (sc) {
                void enqueueMutation('collab_trip', sc, buildActiveCollabPayload());
              }
            }
          } catch (e) {}
          return res;
        };
        wrappedExpFn._pluxV71IdbHooked = true;
        root[fnName] = wrappedExpFn;
      }
    });

    // Hooks sobre Checklist offline
    ['toggleChecklistItem', 'agregarItemChecklist', 'generarChecklistIA'].forEach((fnName) => {
      if (typeof root[fnName] === 'function' && !root[fnName]._pluxV71IdbHooked) {
        const origFn = root[fnName];
        const wrappedFn = function () {
          const res = origFn.apply(this, arguments);
          const syncChecklistState = () => {
            try {
              const saved = readChecklistLocal();
              void mirrorChecklist(saved);
              if (!isOnline()) {
                void enqueueMutation('checklist', CHECKLIST_KEY, saved);
              }
            } catch (e) {}
          };
          if (res && typeof res.then === 'function') {
            res.then(syncChecklistState, syncChecklistState);
          } else {
            syncChecklistState();
          }
          return res;
        };
        wrappedFn._pluxV71IdbHooked = true;
        root[fnName] = wrappedFn;
      }
    });
  }

  // Hidratación segura si localStorage de viajes/finanzas/checklist estuviera vacío (sin violar scratch)
  async function recoverTripsFromIdbIfEmpty() {
    try {
      if (typeof localStorage === 'undefined') return;

      // 1. Refrescar conteo real de outbox en IndexedDB
      const pendingCount = await getPendingOutboxCount();
      if (pendingCount > 0 && typeof root.markPendingCloudSync === 'function') {
        try { root.markPendingCloudSync(); } catch (e) {}
      }

      // 2. Migrar cualquier Plux_Pending_Collab_Sync pendiente a la outbox de IndexedDB si falta
      const pendingCollab = readLocalJson(PENDING_COLLAB_KEY, null);
      if (pendingCollab && pendingCollab.syncCode && pendingCollab.data) {
        const currentPending = await getPendingOutbox();
        const exists = currentPending.some((x) => x.entityType === 'collab_trip' && String(x.entityId) === String(pendingCollab.syncCode));
        if (!exists) {
          await enqueueMutation('collab_trip', pendingCollab.syncCode, pendingCollab.data);
        }
      }

      // 3. Recuperar o espejar GroupFinance (Splitwise)
      const localGf = readLocalJson(GROUP_FINANCE_KEY, null);
      if (localGf && typeof localGf === 'object' && Object.keys(localGf).length > 0) {
        void mirrorGroupFinance(null, null);
      } else {
        const mirroredGf = await getMirroredGroupFinance();
        if (mirroredGf && Object.keys(mirroredGf).length > 0) {
          writeLocalJson(GROUP_FINANCE_KEY, mirroredGf);
        }
      }

      // 4. Recuperar o espejar Checklist
      const localChecklist = readLocalJson(CHECKLIST_KEY, null);
      if (Array.isArray(localChecklist) && localChecklist.length > 0) {
        void mirrorChecklist(localChecklist);
      } else {
        const mirroredChecklist = await getMirroredChecklist();
        if (Array.isArray(mirroredChecklist) && mirroredChecklist.length > 0) {
          writeLocalJson(CHECKLIST_KEY, mirroredChecklist);
        }
      }

      // 5. Recuperar viajes (sin pisar scratch explícito)
      const sessionRaw = localStorage.getItem('Plux_ActiveSession');
      if (sessionRaw) {
        const s = JSON.parse(sessionRaw);
        if (s && s.mode === 'scratch' && s.explicit) return;
      }
      const tripsKey = getTripsStorageKey();
      const existing = readLocalJson(tripsKey, []);
      if (Array.isArray(existing) && existing.length > 0) {
        void mirrorTrips(existing);
        return;
      }
      const mirrored = await getMirroredTrips();
      if (Array.isArray(mirrored) && mirrored.length > 0) {
        writeLocalJson(tripsKey, mirrored);
      }
    } catch (e) {}
  }

  if (typeof root.addEventListener === 'function') {
    root.addEventListener('online', () => {
      void flushOutbox(false);
    });
    root.addEventListener('offline', () => {
      updateOnlinePillStatus();
    });
  }

  const PluxIDB = {
    open: openDB,
    mirrorTrips,
    getMirroredTrips,
    mirrorGroupFinance,
    getMirroredGroupFinance,
    mirrorChecklist,
    getMirroredChecklist,
    enqueueMutation,
    getPendingOutbox,
    getPendingOutboxCount,
    getPendingOutboxCountSync,
    flushOutbox,
    saveVaultBlob,
    getVaultBlob,
    deleteVaultBlob,
    listVaultBlobsByTrip,
    getCachedRoute,
    saveCachedRoute,
    getStorageStats,
    installOfflineHooks,
    _buildSafeCollabPayload: buildSafeCollabPayload,
    _memFallback: memFallback
  };

  root.PluxIDB = PluxIDB;

  if (typeof document !== 'undefined') {
    const boot = () => {
      installOfflineHooks();
      void recoverTripsFromIdbIfEmpty();
      if (isOnline()) {
        setTimeout(() => void flushOutbox(true), 1800);
      }
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        boot();
        setTimeout(installOfflineHooks, 1000);
      });
    } else {
      boot();
      setTimeout(installOfflineHooks, 1000);
    }
  }
})(typeof window !== 'undefined' ? window : globalThis);
