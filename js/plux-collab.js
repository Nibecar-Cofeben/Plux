// ==========================================
// PLUX MODULE: REAL-TIME COLLABORATION, SHARING & ANTI-CLONING ENGINE
// ==========================================

window.isExternalSharedTrip = false;
window.currentTripOwner = null;
window.colaboradoresActuales = [];
window.colaboradoresRolesActuales = {};

/**
 * Helper para obtener un título y resumen limpio del viaje actual
 */
function getActiveTripMetadata() {
  let tripTitle = document.getElementById('nombreViaje')?.value?.trim();
  const trips = typeof getStoredTrips === 'function' ? getStoredTrips() : [];
  if (!tripTitle && typeof loadedTripIndex !== 'undefined' && loadedTripIndex !== null && trips[loadedTripIndex]?.nombre) {
    const savedName = trips[loadedTripIndex].nombre;
    if (savedName !== 'Viaje sin título' && savedName !== 'Untitled event') {
      tripTitle = savedName;
    }
  }
  const destNames = (typeof destinos !== 'undefined' && Array.isArray(destinos))
    ? destinos.map(d => d.nombre).filter(Boolean)
    : [];
  if (!tripTitle) {
    if (destNames.length > 0) {
      tripTitle = `Viaje a ${destNames.slice(0, 3).join(' & ')}`;
    } else if (typeof lugarSalida !== 'undefined' && lugarSalida && lugarSalida.trim()) {
      tripTitle = `Viaje desde ${lugarSalida.trim()}`;
    } else {
      tripTitle = 'Viaje en Plux';
    }
  }
  return {
    nombreViaje: tripTitle,
    destinosResumen: destNames.length > 0 ? destNames.join(', ') : 'Sin destinos aún'
  };
}

/**
 * Extrae un código limpio incluso si el usuario pega una URL entera
 */
function extractCleanSyncCode(rawInput) {
  if (!rawInput) return '';
  const trimmed = String(rawInput).trim();
  // Si pegaron una URL con ?join=CODE o /join/CODE
  try {
    if (trimmed.includes('http://') || trimmed.includes('https://') || trimmed.includes('join=')) {
      const urlMatch = trimmed.match(/[?&]join=([A-Z0-9-]+)/i) || trimmed.match(/\/join\/([A-Z0-9-]+)/i);
      if (urlMatch && urlMatch[1]) return urlMatch[1].toUpperCase();
    }
  } catch (e) {}
  return trimmed.toUpperCase();
}

/**
 * AutoSave blindado contra clonaciones accidentales
 */
function autoSave() {
  if (typeof isSyncing !== 'undefined' && isSyncing) return;
  if (typeof isReadOnlyMode === 'function' && isReadOnlyMode()) {
    return;
  }

  const hasContent = (typeof destinos !== 'undefined' && destinos && destinos.length > 0) ||
                     (typeof lugarSalida !== 'undefined' && lugarSalida && lugarSalida.trim()) ||
                     (document.getElementById('fechaInicio')?.value);
  if (!hasContent) return;

  const tripId = typeof getCurrentTripId === 'function' ? getCurrentTripId() : (syncCode || 'trip_default');
  const trips = typeof getStoredTrips === 'function' ? getStoredTrips() : [];
  const meta = getActiveTripMetadata();

  const tripData = {
    nombre: meta.nombreViaje,
    lugarSalida: typeof lugarSalida !== 'undefined' ? lugarSalida : '',
    numPersonas: typeof numPersonas !== 'undefined' ? numPersonas : 1,
    nombresPersonas: typeof nombresPersonasGlobal !== 'undefined' ? nombresPersonasGlobal : '',
    listaViajeros: (typeof listaViajeros !== 'undefined' && Array.isArray(listaViajeros)) ? [...listaViajeros] : [],
    tripId: tripId,
    fechaInicio: document.getElementById('fechaInicio')?.value || '',
    destinos: typeof destinos !== 'undefined' ? destinos : [],
    vueltaGlobal: typeof vueltaGlobal !== 'undefined' ? vueltaGlobal : '',
    vueltaPrecioGlobal: typeof vueltaPrecioGlobal !== 'undefined' ? vueltaPrecioGlobal : 0,
    vueltaCostosAdicionales: typeof vueltaCostosAdicionales !== 'undefined' ? vueltaCostosAdicionales : [],
    syncCode: syncCode || null,
    userPreferences: typeof userPreferences !== 'undefined' ? userPreferences : null,
    moneda: typeof getMonedaActiva === 'function' ? getMonedaActiva() : 'EUR',
    cartelitos: typeof getCartelitosNotas === 'function' ? [...getCartelitosNotas()] : []
  };

  lastLocalTripJson = JSON.stringify(tripData);

  // 1. Verificar si este viaje ya existe en Mis Viajes locales
  let targetIndex = -1;
  if (typeof loadedTripIndex !== 'undefined' && loadedTripIndex !== null && trips[loadedTripIndex]) {
    // Si ya tenemos un viaje abierto en loadedTripIndex, SIEMPRE actualizar ese mismo índice in-place
    targetIndex = loadedTripIndex;
  } else if (trips.length > 0) {
    targetIndex = trips.findIndex(t => t && (
      (tripId && t.tripId === tripId) ||
      (syncCode && t.syncCode === syncCode) ||
      (syncCode && t.tripId === syncCode)
    ));
  }

  // 2. Si NO es un viaje ajeno compartido (o si ya estaba guardado localmente), actualizar/guardar en localStorage
  const isOwnerOrLocal = !window.isExternalSharedTrip || targetIndex !== -1 || (window.currentTripOwner && typeof currentNickname !== 'undefined' && currentNickname && window.currentTripOwner.toLowerCase() === currentNickname.toLowerCase());

  if (isOwnerOrLocal) {
    const tripDataToSave = {
      ...tripData,
      fecha: new Date().toISOString()
    };

    if (targetIndex !== -1) {
      const existingName = trips[targetIndex].nombre;
      const keepExistingName = existingName && existingName !== 'Viaje sin título' && existingName !== 'Mi Viaje' && !document.getElementById('nombreViaje')?.value?.trim();
      trips[targetIndex] = {
        ...trips[targetIndex],
        ...tripDataToSave,
        nombre: keepExistingName ? existingName : meta.nombreViaje,
        syncCode: syncCode || trips[targetIndex].syncCode || null,
        tripId: tripId || trips[targetIndex].tripId
      };
      loadedTripIndex = targetIndex;
    } else {
      trips.push(tripDataToSave);
      loadedTripIndex = trips.length - 1;
    }

    if (typeof saveTrips === 'function') saveTrips(trips, true);
    if (typeof renderTripLists === 'function') renderTripLists();
  }

  // 3. Sincronizar en tiempo real con Firestore si hay código activo y permisos de edición
  if (typeof db !== 'undefined' && db && syncCode && window.currentTripRole !== 'viajero' && window.currentTripRole !== 'reader' && window.currentTripRole !== 'lector') {
    const updatePayload = {
      data: lastLocalTripJson,
      nombreViaje: meta.nombreViaje,
      destinosResumen: meta.destinosResumen,
      ultimaEdicionPor: (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : 'Viajero',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    if (typeof currentNickname !== 'undefined' && currentNickname) {
      updatePayload.colaboradores = firebase.firestore.FieldValue.arrayUnion(currentNickname);
    }
    db.collection("plux_viajes_compartidos").doc(syncCode).set(updatePayload, { merge: true })
      .catch(e => console.error("Error autosaving to Firestore:", e));
  }
}
window.autoSave = autoSave;

/**
 * Listener en tiempo real para edición colaborativa sin perder el foco del input activo
 */
function activarListenerNube() {
  if (!syncCode || typeof db === 'undefined' || !db) return;
  if (typeof unsubSnapshot === 'function' && unsubSnapshot) {
    unsubSnapshot();
    unsubSnapshot = null;
  }

  unsubSnapshot = db.collection("plux_viajes_compartidos").doc(syncCode)
    .onSnapshot((doc) => {
      if (!doc.exists) return;
      const docData = doc.data() || {};

      // Actualizar estado global de colaboradores y propietario en tiempo real
      if (Array.isArray(docData.colaboradores)) {
        window.colaboradoresActuales = docData.colaboradores;
      }
      if (docData.colaboradores_roles && typeof docData.colaboradores_roles === 'object') {
        window.colaboradoresRolesActuales = docData.colaboradores_roles;
      }
      if (docData.propietario) {
        window.currentTripOwner = docData.propietario;
      }

      // Actualizar rol del usuario actual en vivo si el propietario lo cambió
      const urlParams = new URLSearchParams(window.location.search);
      const isForcedReader = urlParams.get('mode') === 'reader' || urlParams.get('role') === 'reader';
      if (!isForcedReader && typeof currentNickname !== 'undefined' && currentNickname) {
        const myClean = currentNickname.toLowerCase().replace(/^@/, '');
        const ownerClean = (docData.propietario || '').toLowerCase().replace(/^@/, '');
        if (ownerClean && myClean === ownerClean) {
          window.currentTripRole = 'owner';
          if (typeof ocultarAdvertenciaSoloLectura === 'function') ocultarAdvertenciaSoloLectura();
        } else if (window.colaboradoresRolesActuales) {
          const matchedRole = window.colaboradoresRolesActuales[currentNickname] || window.colaboradoresRolesActuales[myClean];
          if (matchedRole) {
            const prevRole = window.currentTripRole;
            window.currentTripRole = matchedRole;
            if (matchedRole === 'viajero' || matchedRole === 'reader' || matchedRole === 'lector') {
              if (typeof mostrarAdvertenciaSoloLectura === 'function') mostrarAdvertenciaSoloLectura();
            } else if (prevRole === 'viajero' || prevRole === 'reader') {
              if (typeof ocultarAdvertenciaSoloLectura === 'function') ocultarAdvertenciaSoloLectura();
            }
          }
        }
      }

      // Si el modal de colaboradores está abierto, refrescar la lista en vivo
      const modalColab = document.getElementById('modal-colaboradores');
      if (modalColab && modalColab.style.display === 'flex') {
        renderListaColaboradoresDOM(docData);
      }

      // Actualizar el itinerario si cambió desde otro dispositivo/colaborador
      const remoteData = docData.data;
      if (remoteData && remoteData !== lastLocalTripJson) {
        // Proteger el input que el usuario esté editando actualmente
        const activeEl = document.activeElement;
        const isTypingInApp = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA') && document.getElementById('app')?.contains(activeEl);
        let activeInfo = null;
        if (isTypingInApp) {
          activeInfo = {
            id: activeEl.id,
            value: activeEl.value,
            selStart: activeEl.selectionStart,
            selEnd: activeEl.selectionEnd
          };
        }

        isSyncing = true;
        lastLocalTripJson = remoteData;
        if (typeof importarViajeString === 'function') {
          importarViajeString(remoteData, false);
        }

        // Si el viaje también está en Mis Viajes locales, mantenerlo actualizado sin duplicarlo
        if (typeof loadedTripIndex !== 'undefined' && loadedTripIndex !== null) {
          const trips = typeof getStoredTrips === 'function' ? getStoredTrips() : [];
          if (trips[loadedTripIndex]) {
            try {
              const parsed = JSON.parse(remoteData);
              trips[loadedTripIndex] = {
                ...trips[loadedTripIndex],
                ...parsed,
                nombre: parsed.nombre || trips[loadedTripIndex].nombre,
                syncCode: syncCode,
                tripId: syncCode
              };
              if (typeof saveTrips === 'function') saveTrips(trips, false);
            } catch (err) {}
          }
        }

        if (activeInfo && activeInfo.id) {
          const restoredEl = document.getElementById(activeInfo.id);
          if (restoredEl) {
            restoredEl.focus();
            try {
              restoredEl.setSelectionRange(activeInfo.selStart, activeInfo.selEnd);
            } catch (e) {}
          }
        }

        isSyncing = false;
      }
    }, (error) => {
      console.error("Error listening to Firestore collaboration:", error);
    });
}
window.activarListenerNube = activarListenerNube;

/**
 * Genera (o reutiliza) un código de sincronización sin clonar el viaje local
 */
async function generarCodigoInApp() {
  // Si el viaje ya tiene syncCode, no generar otro ni duplicar
  if (syncCode) {
    const display = document.getElementById('display-invite-code');
    const container = document.getElementById('invite-code-container');
    if (display) display.innerText = syncCode;
    if (container) container.style.display = 'block';
    await garantizarDocumentoColaborativoEnNube();
    activarListenerNube();
    if (typeof abrirColaboradores === 'function') abrirColaboradores();
    showToast(`Código activo: ${syncCode}`, 'info');
    return syncCode;
  }

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let part1 = '', part2 = '';
  for (let i = 0; i < 4; i++) part1 += chars.charAt(Math.floor(Math.random() * chars.length));
  for (let i = 0; i < 4; i++) part2 += chars.charAt(Math.floor(Math.random() * chars.length));
  const code = `${part1}-${part2}`;
  const oldTripId = typeof currentTripId !== 'undefined' ? currentTripId : null;

  syncCode = code;
  currentTripId = code;
  try { localStorage.setItem('PluxSyncCode', code); } catch (e) {}

  // Actualizar el viaje existente en localStorage IN-PLACE antes de autoSave para evitar que se clone
  const trips = typeof getStoredTrips === 'function' ? getStoredTrips() : [];
  if (typeof loadedTripIndex !== 'undefined' && loadedTripIndex !== null && trips[loadedTripIndex]) {
    trips[loadedTripIndex].syncCode = code;
    trips[loadedTripIndex].tripId = code;
    if (typeof saveTrips === 'function') saveTrips(trips, false);
  } else if (oldTripId && trips.length > 0) {
    const idx = trips.findIndex(t => t && t.tripId === oldTripId);
    if (idx !== -1) {
      trips[idx].syncCode = code;
      trips[idx].tripId = code;
      loadedTripIndex = idx;
      if (typeof saveTrips === 'function') saveTrips(trips, false);
    }
  }

  const display = document.getElementById('display-invite-code');
  const container = document.getElementById('invite-code-container');
  if (display) display.innerText = code;
  if (container) container.style.display = 'block';

  await garantizarDocumentoColaborativoEnNube();
  activarListenerNube();
  autoSave();

  if (typeof migrarChatALocalACodigo === 'function') {
    migrarChatALocalACodigo(code, oldTripId);
  }

  const modalColab = document.getElementById('modal-colaboradores');
  if (modalColab && modalColab.style.display === 'flex') {
    abrirColaboradores();
  }

  showToast(`Código generado: ${code}`, 'success');
  return code;
}
window.generarCodigoInApp = generarCodigoInApp;

/**
 * Garantiza que el documento en plux_viajes_compartidos exista con propietario y arrayUnion(owner)
 * sin pisar nunca la lista de colaboradores existentes.
 */
async function garantizarDocumentoColaborativoEnNube() {
  if (typeof db === 'undefined' || !db) {
    if (typeof initFirebaseAuth === 'function') await initFirebaseAuth();
  }
  if (typeof db === 'undefined' || !db || !syncCode) return;

  const ownerName = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : 'Viajero';
  const meta = getActiveTripMetadata();
  const tripId = (typeof getCurrentTripId === 'function') ? getCurrentTripId() : syncCode;

  const tripData = {
    nombre: meta.nombreViaje,
    lugarSalida: typeof lugarSalida !== 'undefined' ? lugarSalida : '',
    numPersonas: typeof numPersonas !== 'undefined' ? numPersonas : 1,
    nombresPersonas: typeof nombresPersonasGlobal !== 'undefined' ? nombresPersonasGlobal : '',
    listaViajeros: (typeof listaViajeros !== 'undefined' && Array.isArray(listaViajeros)) ? [...listaViajeros] : [],
    tripId: tripId,
    fechaInicio: document.getElementById('fechaInicio')?.value || '',
    destinos: (typeof destinos !== 'undefined' && Array.isArray(destinos)) ? destinos : [],
    vueltaGlobal: typeof vueltaGlobal !== 'undefined' ? vueltaGlobal : '',
    vueltaPrecioGlobal: typeof vueltaPrecioGlobal !== 'undefined' ? vueltaPrecioGlobal : 0,
    vueltaCostosAdicionales: typeof vueltaCostosAdicionales !== 'undefined' ? vueltaCostosAdicionales : [],
    syncCode: syncCode,
    userPreferences: typeof userPreferences !== 'undefined' ? userPreferences : {}
  };

  try {
    const docRef = db.collection("plux_viajes_compartidos").doc(syncCode);
    const existing = await docRef.get();
    const payload = {
      data: JSON.stringify(tripData),
      nombreViaje: meta.nombreViaje,
      destinosResumen: meta.destinosResumen,
      colaboradores: firebase.firestore.FieldValue.arrayUnion(ownerName),
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    if (!existing.exists || !existing.data()?.propietario) {
      payload.propietario = ownerName;
      payload[`colaboradores_roles.${ownerName}`] = 'owner';
      window.currentTripOwner = ownerName;
    } else {
      window.currentTripOwner = existing.data().propietario;
    }

    await docRef.set(payload, { merge: true });
  } catch (err) {
    console.error("Error garantizando documento colaborativo en Firestore:", err);
  }
}

/**
 * Reemplazo seguro de asegurarViajeEnNubeParaCompartir (usado por QR y tarjetas sociales)
 */
async function asegurarViajeEnNubeParaCompartir(mode = 'reader') {
  if (!syncCode) {
    await generarCodigoInApp();
  } else {
    // Asegurar que el viaje local tenga syncCode asociado sin duplicarse
    const trips = typeof getStoredTrips === 'function' ? getStoredTrips() : [];
    if (typeof loadedTripIndex !== 'undefined' && loadedTripIndex !== null && trips[loadedTripIndex]) {
      trips[loadedTripIndex].syncCode = syncCode;
      trips[loadedTripIndex].tripId = syncCode;
      if (typeof saveTrips === 'function') saveTrips(trips, false);
    }
    await garantizarDocumentoColaborativoEnNube();
  }
  const roleParam = mode === 'editor' ? '' : '&mode=reader';
  return `https://plux.nibecarcofeben.com/?join=${encodeURIComponent(syncCode)}${roleParam}`;
}
window.asegurarViajeEnNubeParaCompartir = asegurarViajeEnNubeParaCompartir;

/**
 * Renderiza el listado completo de colaboradores dentro de #lista-colaboradores
 */
function renderListaColaboradoresDOM(docData) {
  const lista = document.getElementById('lista-colaboradores');
  const inviteCodeContainer = document.getElementById('invite-code-container');
  const colabGenBtn = document.getElementById('colabGenBtn');
  if (!lista) return;

  if (syncCode) {
    const codeEl = document.getElementById('display-invite-code');
    if (codeEl) codeEl.innerText = syncCode;
    if (colabGenBtn) colabGenBtn.style.display = 'none';
    if (inviteCodeContainer) {
      inviteCodeContainer.style.display = 'block';
      // Agregar botones rápidos para copiar código y enlaces si no están
      if (!document.getElementById('plux-collab-share-actions')) {
        const actionsDiv = document.createElement('div');
        actionsDiv.id = 'plux-collab-share-actions';
        actionsDiv.style.cssText = 'display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-top:10px;';
        actionsDiv.innerHTML = `
          <button type="button" onclick="window.copiarCodigoColaborativo()" style="padding:7px 12px; border-radius:8px; border:1px solid var(--verde); background:rgba(52,211,153,0.15); color:var(--verde); font-size:0.78rem; font-weight:700; cursor:pointer;">📋 Copiar Código</button>
          <button type="button" onclick="window.copiarEnlaceColaborativo('editor')" style="padding:7px 12px; border-radius:8px; border:1px solid var(--azul); background:rgba(56,189,248,0.15); color:var(--azul); font-size:0.78rem; font-weight:700; cursor:pointer;">🔗 Link para Editar</button>
          <button type="button" onclick="window.copiarEnlaceColaborativo('reader')" style="padding:7px 12px; border-radius:8px; border:1px solid var(--border); background:rgba(255,255,255,0.06); color:var(--texto); font-size:0.78rem; font-weight:600; cursor:pointer;">👁️ Link Solo Lectura</button>
        `;
        inviteCodeContainer.appendChild(actionsDiv);
      }
    }
  } else {
    if (inviteCodeContainer) inviteCodeContainer.style.display = 'none';
    if (colabGenBtn) {
      colabGenBtn.style.display = 'block';
      colabGenBtn.textContent = (typeof t === 'function' && t('colab_gen_code') !== 'colab_gen_code') ? t('colab_gen_code') : '⚡ Generar Código de Invitación';
    }
  }

  const myName = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : 'Anónimo';
  const myClean = myName.toLowerCase().replace(/^@/, '');
  const ownerRaw = docData?.propietario || window.currentTripOwner || myName;
  const ownerClean = ownerRaw.toLowerCase().replace(/^@/, '');
  const isMeOwner = (myName !== 'Anónimo' && myClean === ownerClean) || (!docData?.propietario && !window.isExternalSharedTrip);

  const rolesMap = docData?.colaboradores_roles || window.colaboradoresRolesActuales || {};
  const rawColabs = Array.isArray(docData?.colaboradores) ? docData.colaboradores : (window.colaboradoresActuales || []);

  // Construir lista unificada sin duplicados (Propietario + Colaboradores en Firestore + Yo)
  const unifiedMap = new Map();

  function addMember(nick, defaultRole) {
    if (!nick) return;
    const clean = String(nick).trim().replace(/^@/, '');
    if (!clean) return;
    const key = clean.toLowerCase();
    if (!unifiedMap.has(key)) {
      let role = rolesMap[clean] || rolesMap[key] || defaultRole || 'editor';
      if (key === ownerClean) role = 'owner';
      unifiedMap.set(key, {
        nick: clean,
        role: role,
        isOwner: key === ownerClean,
        isMe: key === myClean
      });
    }
  }

  if (ownerRaw && ownerRaw !== 'Anónimo') addMember(ownerRaw, 'owner');
  if (myName && myName !== 'Anónimo') addMember(myName, isMeOwner ? 'owner' : (window.currentTripRole || 'editor'));
  rawColabs.forEach(c => addMember(c, 'editor'));

  // También incluir viajeros con @nickname de listaViajeros por si fueron agregados antes
  if (typeof listaViajeros !== 'undefined' && Array.isArray(listaViajeros)) {
    listaViajeros.forEach(v => {
      if (typeof v === 'string' && v.trim().startsWith('@')) {
        addMember(v.trim(), 'editor');
      }
    });
  }

  const members = Array.from(unifiedMap.values()).sort((a, b) => {
    if (a.isOwner !== b.isOwner) return a.isOwner ? -1 : 1;
    if (a.isMe !== b.isMe) return a.isMe ? -1 : 1;
    return a.nick.localeCompare(b.nick);
  });

  const friendsCache = typeof getFriendsProfilesCache === 'function' ? getFriendsProfilesCache() : {};
  const myPhoto = localStorage.getItem('Plux_UserProfile_Photo');

  let html = '';

  if (members.length === 0) {
    html += `
      <div style="display:flex; align-items:center; gap:15px; background:rgba(255,255,255,0.05); padding:12px; border-radius:12px; border:1px solid var(--border); margin-bottom:10px;">
        <div class="colab-avatar" style="background:var(--rosa); color:white; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">TÚ</div>
        <div>
          <strong style="color:var(--texto);">👤 Invitado (Tú)</strong>
          <p style="font-size:0.8rem; color:var(--verde); margin:2px 0 0 0;">En línea · Iniciá sesión con un nickname para colaborar con tu perfil</p>
        </div>
      </div>
    `;
  } else {
    members.forEach(m => {
      const cachedProfile = friendsCache[m.nick.toLowerCase()] || {};
      const avatarUrl = m.isMe ? myPhoto : cachedProfile.photoUrl;
      const initials = m.nick.substring(0, 2).toUpperCase();
      const avatarBg = m.isOwner ? 'linear-gradient(135deg, #f59e0b, #ec4899)' : (m.isMe ? 'var(--rosa)' : 'var(--azul)');

      let roleLabel = '✏️ Editor';
      let roleColor = 'var(--verde)';
      if (m.isOwner) {
        roleLabel = '👑 Propietario';
        roleColor = '#fbbf24';
      } else if (m.role === 'viajero' || m.role === 'reader' || m.role === 'lector') {
        roleLabel = '👁️ Viajero (Solo lectura)';
        roleColor = 'var(--azul)';
      }

      const safeNick = typeof escapeHtml === 'function' ? escapeHtml(m.nick) : m.nick;

      html += `
        <div style="display:flex; align-items:center; gap:12px; background:rgba(255,255,255,0.05); padding:12px; border-radius:14px; border:1px solid ${m.isOwner ? 'rgba(251,191,36,0.35)' : 'var(--border)'}; margin-bottom:10px;">
          <div class="colab-avatar" style="background:${avatarBg}; color:white; width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; overflow:hidden; flex-shrink:0;">
            ${avatarUrl ? `<img src="${avatarUrl}" style="width:100%;height:100%;object-fit:cover;">` : initials}
          </div>
          <div style="flex:1; min-width:0;">
            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
              <strong style="color:var(--texto); font-size:0.95rem;">@${safeNick}${m.isMe ? ' (Tú)' : ''}</strong>
              <span style="font-size:0.72rem; padding:2px 8px; border-radius:999px; background:rgba(255,255,255,0.07); color:${roleColor}; font-weight:700;">${roleLabel}</span>
            </div>
            <p style="font-size:0.78rem; color:var(--gris); margin:3px 0 0 0;">
              ${m.isMe ? '<span style="color:var(--verde);">● Conectado ahora</span>' : 'Sincronizado en tiempo real'}
            </p>
          </div>
          ${(isMeOwner && !m.isMe && syncCode) ? `
            <div style="display:flex; align-items:center; gap:6px;">
              <select onchange="window.cambiarRolColaborador('${safeNick}', this.value)" style="padding:5px 8px; border-radius:8px; background:var(--card); color:var(--texto); border:1px solid var(--border); font-size:0.75rem; cursor:pointer;">
                <option value="editor" ${m.role === 'editor' ? 'selected' : ''}>✏️ Editor</option>
                <option value="viajero" ${(m.role === 'viajero' || m.role === 'reader') ? 'selected' : ''}>👁️ Lectura</option>
              </select>
              <button type="button" onclick="window.eliminarColaboradorDeViaje('${safeNick}')" title="Quitar del viaje" style="background:rgba(239,68,68,0.15); color:#ef4444; border:1px solid rgba(239,68,68,0.3); border-radius:8px; width:28px; height:28px; cursor:pointer; font-weight:bold;">×</button>
            </div>
          ` : ''}
        </div>
      `;
    });
  }

  if (!syncCode) {
    html += `<p style="text-align:center; color:var(--gris); font-size:0.84rem; margin-top:10px;">Generá un código abajo o invitá directamente por @nickname para activar la edición colaborativa en tiempo real.</p>`;
  } else if (members.length <= 1) {
    html += `<p style="text-align:center; color:var(--gris); font-size:0.85rem; margin-top:12px;">Compartí el código <strong>${syncCode}</strong> o invitá a tus amigos por su @nickname.</p>`;
  }

  lista.innerHTML = html;
}

/**
 * Abre el modal de colaboradores siempre actualizado y sincronizado con Firestore
 */
async function abrirColaboradores() {
  const modal = document.getElementById('modal-colaboradores');
  if (!modal) return;
  modal.style.display = 'flex';

  // Render inmediato con lo que tenemos en memoria
  renderListaColaboradoresDOM({
    propietario: window.currentTripOwner,
    colaboradores: window.colaboradoresActuales,
    colaboradores_roles: window.colaboradoresRolesActuales
  });

  if (typeof db !== 'undefined' && db && syncCode) {
    try {
      const docSnap = await db.collection('plux_viajes_compartidos').doc(syncCode).get();
      if (docSnap.exists) {
        const data = docSnap.data() || {};
        window.colaboradoresActuales = data.colaboradores || [];
        window.colaboradoresRolesActuales = data.colaboradores_roles || {};
        window.currentTripOwner = data.propietario || window.currentTripOwner;

        // Cargar fotos de perfil de los colaboradores en segundo plano si faltan en caché
        if (typeof fetchFriendProfile === 'function' && Array.isArray(data.colaboradores)) {
          Promise.all(data.colaboradores.map(c => fetchFriendProfile(String(c).replace(/^@/, '')))).then(() => {
            if (modal.style.display === 'flex') renderListaColaboradoresDOM(data);
          }).catch(() => {});
        }

        renderListaColaboradoresDOM(data);
      } else {
        await garantizarDocumentoColaborativoEnNube();
        const freshSnap = await db.collection('plux_viajes_compartidos').doc(syncCode).get();
        if (freshSnap.exists) renderListaColaboradoresDOM(freshSnap.data());
      }
    } catch (e) {
      console.error('Error al cargar colaboradores desde Firestore:', e);
    }
  }
}
window.abrirColaboradores = abrirColaboradores;
window.abrirColab = abrirColaboradores;

function mobileActionInvitar() {
  if (typeof toggleMobileTripMenu === 'function') toggleMobileTripMenu();
  abrirColaboradores();
}
window.mobileActionInvitar = mobileActionInvitar;

/**
 * Copiar código o enlace de invitación
 */
window.copiarCodigoColaborativo = function() {
  if (!syncCode) return;
  navigator.clipboard?.writeText(syncCode).then(() => {
    showToast(`Código ${syncCode} copiado al portapapeles 📋`, 'success');
  });
};

window.copiarEnlaceColaborativo = async function(mode = 'editor') {
  const url = await asegurarViajeEnNubeParaCompartir(mode);
  navigator.clipboard?.writeText(url).then(() => {
    showToast(mode === 'editor' ? 'Enlace de edición colaborativa copiado 🔗' : 'Enlace de solo lectura copiado 👁️', 'success');
  });
};

/**
 * Permite al propietario cambiar el rol (editor / viajero) de un colaborador en tiempo real
 */
window.cambiarRolColaborador = async function(targetNick, newRole) {
  if (!syncCode || typeof db === 'undefined' || !db) return;
  const clean = String(targetNick).replace(/^@/, '').trim();
  try {
    await db.collection('plux_viajes_compartidos').doc(syncCode).set({
      colaboradores_roles: {
        ...(window.colaboradoresRolesActuales || {}),
        [clean]: newRole
      }
    }, { merge: true });
    showToast(`Rol de @${clean} actualizado a ${newRole === 'editor' ? 'Editor' : 'Solo lectura'} ✅`, 'success');
  } catch (e) {
    console.error('Error cambiando rol:', e);
    showToast('No se pudo cambiar el rol', 'error');
  }
};

/**
 * Permite al propietario quitar a un colaborador del viaje
 */
window.eliminarColaboradorDeViaje = async function(targetNick) {
  if (!syncCode || typeof db === 'undefined' || !db) return;
  const clean = String(targetNick).replace(/^@/, '').trim();
  try {
    await db.collection('plux_viajes_compartidos').doc(syncCode).update({
      colaboradores: firebase.firestore.FieldValue.arrayRemove(clean)
    });
    window.colaboradoresActuales = (window.colaboradoresActuales || []).filter(c => c.toLowerCase() !== clean.toLowerCase());
    showToast(`@${clean} fue quitado del viaje`, 'info');
    abrirColaboradores();
  } catch (e) {
    console.error('Error quitando colaborador:', e);
    showToast('Error al quitar colaborador', 'error');
  }
};

/**
 * Busca un usuario en plux_usuarios soportando @nickname y mayúsculas/minúsculas
 */
async function resolvePluxUserNickname(rawNick) {
  const stripped = String(rawNick || '').replace(/^@/, '').trim();
  if (!stripped || typeof db === 'undefined' || !db) return null;

  // 1. Probar en minúsculas (estándar en Plux)
  const lower = stripped.toLowerCase();
  const docLower = await db.collection('plux_usuarios').doc(lower).get();
  if (docLower.exists) return docLower.id;

  // 2. Probar tal cual lo escribió
  if (stripped !== lower) {
    const docExact = await db.collection('plux_usuarios').doc(stripped).get();
    if (docExact.exists) return docExact.id;
  }

  return null;
}

/**
 * Invita a un colaborador por @nickname sin clonar el viaje y garantizando que ambos vean la lista
 */
async function invitarColaboradorPorNickname() {
  const nickInput = document.getElementById('invite-nickname-input');
  const rawTarget = nickInput ? nickInput.value.trim() : '';
  if (!rawTarget) {
    showToast('Ingresá el @nickname de la persona a invitar', 'error');
    return;
  }

  const myNick = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : localStorage.getItem('Plux_Nickname');
  if (!myNick) {
    showToast('Iniciá sesión con tu cuenta o nickname para invitar amigos', 'error');
    return;
  }

  const cleanInput = rawTarget.replace(/^@/, '').trim();
  if (cleanInput.toLowerCase() === myNick.toLowerCase()) {
    showToast('Ya estás en este viaje como participante', 'info');
    return;
  }

  if (typeof db === 'undefined' || !db) {
    if (typeof initFirebaseAuth === 'function') await initFirebaseAuth();
  }
  if (typeof db === 'undefined' || !db) {
    showToast('Base de datos en la nube no disponible', 'error');
    return;
  }

  let resolvedNick = null;
  try {
    resolvedNick = await resolvePluxUserNickname(cleanInput);
    if (!resolvedNick) {
      showToast(`El usuario @${cleanInput} no existe en Plux`, 'error');
      return;
    }
  } catch (e) {
    showToast('Error al verificar el usuario', 'error');
    return;
  }

  if (!syncCode) {
    await generarCodigoInApp();
  } else {
    await garantizarDocumentoColaborativoEnNube();
  }

  try {
    const role = document.getElementById('colab-role-select')?.value || 'editor';
    const meta = getActiveTripMetadata();
    const ownerToSave = window.currentTripOwner || myNick;

    await db.collection('plux_viajes_compartidos').doc(syncCode).set({
      colaboradores: firebase.firestore.FieldValue.arrayUnion(myNick, resolvedNick),
      colaboradores_roles: {
        ...(window.colaboradoresRolesActuales || {}),
        [ownerToSave]: 'owner',
        [resolvedNick]: role
      },
      propietario: ownerToSave,
      nombreViaje: meta.nombreViaje,
      destinosResumen: meta.destinosResumen,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    const formattedNick = '@' + resolvedNick;
    if (typeof listaViajeros !== 'undefined' && !listaViajeros.some(v => v.toLowerCase().replace(/^@/, '') === resolvedNick.toLowerCase())) {
      listaViajeros.push(formattedNick);
      if (typeof window.renderTravelerChips === 'function') window.renderTravelerChips();
      autoSave();
    }
    if (typeof window.sumarUsuarioAlChatDelViaje === 'function') {
      window.sumarUsuarioAlChatDelViaje(resolvedNick, 'invitado');
    }

    showToast(`@${resolvedNick} invitado al viaje como ${role === 'editor' ? 'Editor' : 'Viajero'} ✅`, 'success');
    if (nickInput) nickInput.value = '';
    abrirColaboradores();
  } catch (e) {
    console.error('Error al invitar colaborador:', e);
    showToast('Error al enviar la invitación', 'error');
  }
}
window.invitarColaboradorPorNickname = invitarColaboradorPorNickname;

/**
 * Compartir viaje directamente desde la lista de Amigos
 */
async function compartirViajeConAmigo(friendNick) {
  const cleanFriend = String(friendNick || '').replace(/^@/, '').trim();
  if (!cleanFriend) return;
  const nickInput = document.getElementById('invite-nickname-input');
  if (nickInput) nickInput.value = cleanFriend;
  if (typeof cerrarDetalleAmigo === 'function') cerrarDetalleAmigo();
  if (typeof cerrarAmigos === 'function') cerrarAmigos();
  await invitarColaboradorPorNickname();
}
window.compartirViajeConAmigo = compartirViajeConAmigo;

/**
 * Unirse a un viaje por código desde Herramientas o Mis Viajes (sin clonarlo en "Guardados")
 */
async function unirseAViaje(inputId = 'join-code-input-herramientas') {
  const codeInput = document.getElementById(inputId);
  if (!codeInput) return;
  const code = extractCleanSyncCode(codeInput.value);
  if (!code) {
    showToast(typeof t === 'function' ? t('toast_code_invalid') : 'Código inválido', 'error');
    return;
  }
  await cargarViajeCompartido(code);
}
window.unirseAViaje = unirseAViaje;

/**
 * Carga un viaje compartido por código o enlace sin sobrescribir ni clonar viajes locales
 */
async function cargarViajeCompartido(rawCode) {
  const code = extractCleanSyncCode(rawCode);
  if (!code) return;

  if (typeof db === 'undefined' || !db) {
    if (typeof initFirebaseAuth === 'function') await initFirebaseAuth();
  }
  if (typeof db === 'undefined' || !db) {
    showToast('Base de datos no disponible', 'error');
    return;
  }

  showToast(`Conectando al viaje ${code}...`, 'info');
  try {
    const docSnap = await db.collection('plux_viajes_compartidos').doc(code).get();
    if (!docSnap.exists) {
      showToast('No se encontró ningún viaje con ese código', 'error');
      return;
    }

    const data = docSnap.data() || {};
    const owner = data.propietario || '';
    const myNick = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : '';

    // Verificar si este viaje ya pertenece a Mis Viajes guardados localmente
    const trips = typeof getStoredTrips === 'function' ? getStoredTrips() : [];
    const existingLocalIdx = trips.findIndex(t => t && (t.syncCode === code || t.tripId === code));

    if (existingLocalIdx !== -1) {
      loadedTripIndex = existingLocalIdx;
      window.isExternalSharedTrip = false;
    } else if (myNick && owner && myNick.toLowerCase() === owner.toLowerCase()) {
      window.isExternalSharedTrip = false;
    } else {
      // Es un viaje compartido por otra persona: NO clonarlo en "Guardados", mantenerlo en "Viajes compartidos con vos"
      loadedTripIndex = null;
      window.isExternalSharedTrip = true;
    }

    syncCode = code;
    currentTripId = code;
    try { localStorage.setItem('PluxSyncCode', code); } catch (e) {}

    window.currentTripOwner = owner || null;
    window.colaboradoresActuales = Array.isArray(data.colaboradores) ? data.colaboradores : [];
    window.colaboradoresRolesActuales = data.colaboradores_roles || {};

    if (data.data && typeof importarViajeString === 'function') {
      importarViajeString(data.data, false);
      lastLocalTripJson = data.data;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const isForcedReader = urlParams.get('mode') === 'reader' || urlParams.get('role') === 'reader' || urlParams.get('mode') === 'lector';
    const joiningName = myNick || 'Viajero';

    if (isForcedReader) {
      window.currentTripRole = 'reader';
      if (typeof mostrarAdvertenciaSoloLectura === 'function') mostrarAdvertenciaSoloLectura();
      showToast('Modo Lectura Activo · Podés explorar o clonar este itinerario', 'info');
    } else {
      if (myNick) {
        await db.collection('plux_viajes_compartidos').doc(code).set({
          colaboradores: firebase.firestore.FieldValue.arrayUnion(myNick)
        }, { merge: true });
        if (!window.colaboradoresActuales.includes(myNick)) {
          window.colaboradoresActuales.push(myNick);
        }
      }

      // Sincronizar todos los colaboradores en los chips de viajeros del viaje
      const allParticipants = [...window.colaboradoresActuales];
      if (owner && !allParticipants.includes(owner)) allParticipants.unshift(owner);
      allParticipants.forEach(c => {
        const norm = String(c).toLowerCase().replace(/^@/, '');
        if (norm && norm !== 'anónimo' && norm !== 'viajero') {
          if (!listaViajeros.some(v => v.toLowerCase().replace(/^@/, '') === norm)) {
            listaViajeros.push('@' + norm);
          }
        }
      });
      if (typeof window.renderTravelerChips === 'function') {
        window.renderTravelerChips();
      }

      // Determinar el rol del usuario
      if (myNick && owner && myNick.toLowerCase() === owner.toLowerCase()) {
        window.currentTripRole = 'owner';
      } else if (myNick) {
        window.currentTripRole = window.colaboradoresRolesActuales[myNick] || window.colaboradoresRolesActuales[myNick.toLowerCase()] || 'editor';
      } else {
        window.currentTripRole = 'editor';
      }

      if (window.currentTripRole === 'viajero' || window.currentTripRole === 'reader' || window.currentTripRole === 'lector') {
        if (typeof mostrarAdvertenciaSoloLectura === 'function') mostrarAdvertenciaSoloLectura();
      } else {
        if (typeof ocultarAdvertenciaSoloLectura === 'function') ocultarAdvertenciaSoloLectura();
      }
    }

    activarListenerNube();

    if (!isForcedReader) {
      if (typeof pluxChatUnsubscribe === 'function' && pluxChatUnsubscribe) {
        pluxChatUnsubscribe();
        pluxChatUnsubscribe = null;
      }
      if (typeof getTripChatChannelId === 'function') {
        pluxActiveChatId = getTripChatChannelId();
        if (typeof ensureChatChannel === 'function') ensureChatChannel();
      }
      if (typeof window.sumarUsuarioAlChatDelViaje === 'function' && myNick) {
        window.sumarUsuarioAlChatDelViaje(joiningName, 'unido');
      }
    }

    const panel = document.getElementById('modal-panel-herramientas');
    if (panel) panel.style.display = 'none';
    if (typeof cerrarModalViajes === 'function') cerrarModalViajes();
    if (typeof cerrarModalDecisionViaje === 'function') cerrarModalDecisionViaje();
    if (typeof empezar === 'function') empezar();

    showToast(`¡Conectado en tiempo real al viaje ${code}!`, 'success');
  } catch (e) {
    console.error('Error cargando viaje compartido:', e);
    showToast('Error al cargar el viaje compartido', 'error');
  }
}
window.cargarViajeCompartido = cargarViajeCompartido;

/**
 * Renderiza "Viajes compartidos con vos" con nombre real del viaje, destinos, propietario y rol
 */
async function renderSharedTripsList() {
  if (typeof currentNickname === 'undefined' || !currentNickname || typeof db === 'undefined' || !db) return;
  const section = document.getElementById('colab-trips-section');
  const list = document.getElementById('sharedTripList');
  if (!section || !list) return;

  try {
    const query = await db.collection('plux_viajes_compartidos')
      .where('colaboradores', 'array-contains', currentNickname)
      .limit(20)
      .get();

    const sharedDocs = query.docs.filter(doc => {
      const data = doc.data() || {};
      return !data.propietario || data.propietario.toLowerCase() !== currentNickname.toLowerCase();
    });

    if (sharedDocs.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    list.innerHTML = '';

    sharedDocs.forEach(doc => {
      const data = doc.data() || {};
      const code = doc.id;
      const owner = data.propietario || 'viajero';
      const roles = data.colaboradores_roles || {};
      const myRole = roles[currentNickname] || roles[currentNickname.toLowerCase()] || 'editor';

      // Extraer nombre y destinos del viaje compartido
      let tripName = data.nombreViaje || '';
      let destSummary = data.destinosResumen || '';
      if ((!tripName || !destSummary) && data.data) {
        try {
          const parsed = JSON.parse(data.data);
          if (!tripName && parsed.nombre) tripName = parsed.nombre;
          if (!destSummary && Array.isArray(parsed.destinos)) {
            destSummary = parsed.destinos.map(d => d.nombre).filter(Boolean).join(', ');
          }
          if (!tripName && destSummary) tripName = `Viaje a ${destSummary}`;
        } catch (err) {}
      }
      if (!tripName) tripName = `Viaje compartido (${code})`;

      const safeTitle = typeof escapeHtml === 'function' ? escapeHtml(tripName) : tripName;
      const safeDests = typeof escapeHtml === 'function' ? escapeHtml(destSummary || `Código: ${code}`) : (destSummary || `Código: ${code}`);
      const safeOwner = typeof escapeHtml === 'function' ? escapeHtml(owner) : owner;
      const roleBadge = (myRole === 'viajero' || myRole === 'reader') ? '👁️ Lectura' : '✏️ Editor';
      const item = document.createElement('div');
      item.className = 'trip-item';
      item.style.cursor = 'pointer';
      item.innerHTML = `
        <div class="trip-info" onclick="window.cargarViajeCompartido('${code}')" style="cursor:pointer;flex:1;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:4px;">
            <h4 style="color:var(--verde); margin:0; font-size:1.02rem; font-weight:700;">${safeTitle}</h4>
            <span style="font-size:0.68rem; padding:2px 7px; border-radius:999px; background:rgba(52,211,153,0.15); color:var(--verde); font-weight:700;">${roleBadge}</span>
            <span style="font-size:0.68rem; padding:2px 6px; border-radius:6px; background:rgba(255,255,255,0.06); color:var(--gris); font-family:monospace; border:1px solid rgba(255,255,255,0.08);" title="Código de sincronización">#${code}</span>
          </div>
          <small style="color:var(--gris); font-size:0.82rem; display:block;">
            Por <strong style="color:var(--texto);">@${safeOwner}</strong> · <span style="color:rgba(255,255,255,0.7);">${safeDests}</span>
          </small>
        </div>
        <div class="trip-actions">
          <button onclick="window.cargarViajeCompartido('${code}')" style="background:linear-gradient(135deg, var(--verde), var(--azul));color:black;font-weight:700;padding:8px 14px;border-radius:10px;border:none;cursor:pointer;">Abrir</button>
          <button onclick="window.abandonarViajeCompartido('${code}')" style="background:rgba(239,68,68,0.15);color:#ef4444;border:1px solid rgba(239,68,68,0.3);padding:8px 12px;border-radius:10px;cursor:pointer;" title="Salir del viaje">Salir</button>
        </div>
      `;
      list.appendChild(item);
    });
  } catch (e) {
    console.error('Error loading shared trips:', e);
    section.style.display = 'none';
  }
}
window.renderSharedTripsList = renderSharedTripsList;

/**
 * Modal de compartir desde Mis Viajes o desde el viaje activo (sin clonar viajes)
 */
async function abrirCompartirModal(tripIndex) {
  if (typeof tripIndex === 'number' && tripIndex !== loadedTripIndex) {
    cargarViaje(tripIndex, false);
  }
  abrirColaboradores();
}
window.abrirCompartirModal = abrirCompartirModal;
