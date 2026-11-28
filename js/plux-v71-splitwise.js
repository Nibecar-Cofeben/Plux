/**
 * PLUX v7.1 — FINANZAS GRUPALES (SPLITWISE MULTIMONEDA COMPLETO)
 * - Asignación explícita de pagador y participantes (divididoEntre) por gasto
 * - Mapeo exacto para los 6 tipos de gasto de la tabla de Resumen
 * - Gastos grupales rápidos (crear, editar y eliminar) + personalización por ítem
 * - Persistencia por tripId + embebido automático en viajes guardados/compartidos
 * - Alta rápida inline de viajeros ("+ Agregar viajero") + soporte 5 idiomas (es/en/fr/de/it)
 * - Conversión multimoneda + algoritmo de transferencias mínimas + liquidaciones
 */
(function (root) {
  'use strict';

  const GROUP_FINANCE_KEY = 'Plux_GroupFinance_V1';

  const I18N = {
    es: {
      panel_title: '💸 Finanzas Grupales · Cuentas Claras',
      shared_total: 'Total compartido',
      travelers_unit: 'viajero(s)',
      btn_add_expense: '➕ Gasto grupal',
      btn_copy_wa: '📋 Copiar WhatsApp',
      btn_add_traveler: '+ Agregar viajero',
      add_traveler_ph: 'Nombre o @usuario del viajero...',
      add_traveler_hint: '¿Viajás en grupo? Sumá a tus acompañantes acá para repartir gastos:',
      traveler_added: '👤 Viajero agregado: {name}',
      traveler_exists: 'Ese viajero ya está en la lista.',
      traveler_empty: 'Ingresá un nombre para agregar el viajero.',
      empty_hint: 'Asigná <strong>"Pagado por"</strong> en cualquier ítem de la tabla inferior o agregá un <strong>+ Gasto grupal</strong> para calcular saldos y divisiones personalizadas automáticamente.',
      paid_label: 'Pagó',
      share_label: 'Su parte',
      in_favor: 'a favor',
      owes: 'debe',
      settled: 'Saldado',
      all_settled: '🎉 ¡Todas las cuentas están saldadas!',
      btn_mark_settled: '✅ Marcar saldado',
      quick_expenses_title: 'Gastos grupales rápidos',
      paid_by_short: 'Pagó',
      between_short: 'entre',
      settled_payments_title: 'Pagos ya saldados',
      paid_to: 'pagó a',
      btn_edit: 'Editar',
      btn_delete: 'Eliminar',
      btn_undo: 'Deshacer',
      modal_split_title: '👥 ¿Entre quiénes se divide?',
      modal_split_desc: 'Seleccioná los viajeros que comparten este gasto ({sel}/{tot}).',
      btn_done: 'Listo',
      min_one_traveler: 'Al menos 1 viajero debe participar en la división.',
      modal_add_title: '💸 Nuevo gasto grupal (Splitwise)',
      modal_edit_title: '✏️ Editar gasto grupal (Splitwise)',
      ph_title: 'Ej: Cena en Trastevere / Uber aeropuerto',
      ph_amount: 'Monto total',
      label_who_paid: '¿Quién pagó?',
      label_split_between: 'Dividido entre:',
      btn_save_new: '➕ Guardar gasto grupal',
      btn_save_edit: '💾 Guardar cambios',
      err_fill_fields: 'Completá concepto, monto mayor a 0 y al menos 1 persona.',
      toast_expense_added: '💸 Gasto grupal guardado.',
      toast_expense_updated: '✏️ Gasto grupal actualizado.',
      toast_payment_recorded: '✅ Pago registrado: {de} ➡️ {para}',
      toast_all_clear: '¡Todos al día! No hay deudas pendientes.',
      toast_copied_wa: '📋 ¡Cuentas copiadas para WhatsApp!',
      all_short: 'Todos',
      wa_header: '💸 *Cuentas Claras — Plux ({cur})*',
      wa_total: 'Total compartido',
      wa_transfers: '🔄 *Transferencias mínimas:*',
      wa_footer: '✨ _Calculado con Plux v7.1_',
      default_traveler_prefix: 'Viajero'
    },
    en: {
      panel_title: '💸 Group Finances · Splitwise',
      shared_total: 'Shared total',
      travelers_unit: 'traveler(s)',
      btn_add_expense: '➕ Group expense',
      btn_copy_wa: '📋 Copy WhatsApp',
      btn_add_traveler: '+ Add traveler',
      add_traveler_ph: 'Traveler name or @username...',
      add_traveler_hint: 'Traveling together? Add your companions here to split expenses:',
      traveler_added: '👤 Traveler added: {name}',
      traveler_exists: 'That traveler is already on the list.',
      traveler_empty: 'Enter a name to add a traveler.',
      empty_hint: 'Assign <strong>"Paid by"</strong> on any item in the table below or add a <strong>+ Group expense</strong> to automatically compute balances and custom splits.',
      paid_label: 'Paid',
      share_label: 'Share',
      in_favor: 'owed',
      owes: 'owes',
      settled: 'Settled',
      all_settled: '🎉 All accounts are settled!',
      btn_mark_settled: '✅ Mark settled',
      quick_expenses_title: 'Quick group expenses',
      paid_by_short: 'Paid by',
      between_short: 'split among',
      settled_payments_title: 'Settled payments',
      paid_to: 'paid',
      btn_edit: 'Edit',
      btn_delete: 'Delete',
      btn_undo: 'Undo',
      modal_split_title: '👥 Split between whom?',
      modal_split_desc: 'Select the travelers sharing this expense ({sel}/{tot}).',
      btn_done: 'Done',
      min_one_traveler: 'At least 1 traveler must be included in the split.',
      modal_add_title: '💸 New group expense (Splitwise)',
      modal_edit_title: '✏️ Edit group expense (Splitwise)',
      ph_title: 'E.g. Dinner in Trastevere / Airport Uber',
      ph_amount: 'Total amount',
      label_who_paid: 'Who paid?',
      label_split_between: 'Split between:',
      btn_save_new: '➕ Save group expense',
      btn_save_edit: '💾 Save changes',
      err_fill_fields: 'Enter a description, amount greater than 0, and at least 1 person.',
      toast_expense_added: '💸 Group expense saved.',
      toast_expense_updated: '✏️ Group expense updated.',
      toast_payment_recorded: '✅ Payment recorded: {de} ➡️ {para}',
      toast_all_clear: 'All settled! No pending debts.',
      toast_copied_wa: '📋 Summary copied for WhatsApp!',
      all_short: 'All',
      wa_header: '💸 *Group Split — Plux ({cur})*',
      wa_total: 'Shared total',
      wa_transfers: '🔄 *Minimum transfers:*',
      wa_footer: '✨ _Calculated with Plux v7.1_',
      default_traveler_prefix: 'Traveler'
    },
    fr: {
      panel_title: '💸 Finances de Groupe · Splitwise',
      shared_total: 'Total partagé',
      travelers_unit: 'voyageur(s)',
      btn_add_expense: '➕ Dépense de groupe',
      btn_copy_wa: '📋 Copier WhatsApp',
      btn_add_traveler: '+ Ajouter voyageur',
      add_traveler_ph: 'Nom ou @pseudo du voyageur...',
      add_traveler_hint: 'Vous voyagez à plusieurs ? Ajoutez vos compagnons ici pour partager les frais :',
      traveler_added: '👤 Voyageur ajouté : {name}',
      traveler_exists: 'Ce voyageur est déjà dans la liste.',
      traveler_empty: 'Saisissez un nom pour ajouter un voyageur.',
      empty_hint: 'Assignez <strong>« Payé par »</strong> dans le tableau ci-dessous ou ajoutez une <strong>+ Dépense de groupe</strong> pour calculer automatiquement les soldes.',
      paid_label: 'Payé',
      share_label: 'Part',
      in_favor: 'créditeur',
      owes: 'doit',
      settled: 'Soldé',
      all_settled: '🎉 Tous les comptes sont équilibrés !',
      btn_mark_settled: '✅ Marquer réglé',
      quick_expenses_title: 'Dépenses de groupe rapides',
      paid_by_short: 'Payé par',
      between_short: 'entre',
      settled_payments_title: 'Paiements déjà réglés',
      paid_to: 'a payé à',
      btn_edit: 'Modifier',
      btn_delete: 'Supprimer',
      btn_undo: 'Annuler',
      modal_split_title: '👥 Partager entre qui ?',
      modal_split_desc: 'Sélectionnez les voyageurs qui partagent cette dépense ({sel}/{tot}).',
      btn_done: 'Terminé',
      min_one_traveler: 'Au moins 1 voyageur doit participer au partage.',
      modal_add_title: '💸 Nouvelle dépense de groupe',
      modal_edit_title: '✏️ Modifier la dépense de groupe',
      ph_title: 'Ex : Dîner à Trastevere / Uber aéroport',
      ph_amount: 'Montant total',
      label_who_paid: 'Qui a payé ?',
      label_split_between: 'Partagé entre :',
      btn_save_new: '➕ Enregistrer la dépense',
      btn_save_edit: '💾 Enregistrer les modifications',
      err_fill_fields: 'Indiquez un intitulé, un montant > 0 et au moins 1 personne.',
      toast_expense_added: '💸 Dépense de groupe enregistrée.',
      toast_expense_updated: '✏️ Dépense de groupe mise à jour.',
      toast_payment_recorded: '✅ Paiement enregistré : {de} ➡️ {para}',
      toast_all_clear: 'Tout est réglé ! Aucune dette en attente.',
      toast_copied_wa: '📋 Bilan copié pour WhatsApp !',
      all_short: 'Tous',
      wa_header: '💸 *Comptes de Groupe — Plux ({cur})*',
      wa_total: 'Total partagé',
      wa_transfers: '🔄 *Virements minimums :*',
      wa_footer: '✨ _Calculé avec Plux v7.1_',
      default_traveler_prefix: 'Voyageur'
    },
    de: {
      panel_title: '💸 Gruppenfinanzen · Splitwise',
      shared_total: 'Geteilte Gesamtsumme',
      travelers_unit: 'Reisende(r)',
      btn_add_expense: '➕ Gruppenausgabe',
      btn_copy_wa: '📋 WhatsApp kopieren',
      btn_add_traveler: '+ Reisenden hinzufügen',
      add_traveler_ph: 'Name oder @Benutzername...',
      add_traveler_hint: 'In der Gruppe unterwegs? Füge Mitreisende hinzu, um Ausgaben aufzuteilen:',
      traveler_added: '👤 Reisender hinzugefügt: {name}',
      traveler_exists: 'Diese Person ist bereits in der Liste.',
      traveler_empty: 'Gib einen Namen ein, um einen Reisenden hinzuzufügen.',
      empty_hint: 'Weise in der Tabelle unten <strong>„Bezahlt von“</strong> zu oder füge eine <strong>+ Gruppenausgabe</strong> hinzu, um Salden automatisch zu berechnen.',
      paid_label: 'Bezahlt',
      share_label: 'Anteil',
      in_favor: 'Guthaben',
      owes: 'schuldet',
      settled: 'Ausgeglichen',
      all_settled: '🎉 Alle Konten sind ausgeglichen!',
      btn_mark_settled: '✅ Als bezahlt markieren',
      quick_expenses_title: 'Schnelle Gruppenausgaben',
      paid_by_short: 'Bezahlt von',
      between_short: 'geteilt durch',
      settled_payments_title: 'Bereits beglichene Zahlungen',
      paid_to: 'zahlte an',
      btn_edit: 'Bearbeiten',
      btn_delete: 'Löschen',
      btn_undo: 'Rückgängig',
      modal_split_title: '👥 Zwischen wem aufteilen?',
      modal_split_desc: 'Wähle die Reisenden aus, die diese Ausgabe teilen ({sel}/{tot}).',
      btn_done: 'Fertig',
      min_one_traveler: 'Mindestens 1 Reisender muss an der Aufteilung beteiligt sein.',
      modal_add_title: '💸 Neue Gruppenausgabe',
      modal_edit_title: '✏️ Gruppenausgabe bearbeiten',
      ph_title: 'z. B. Abendessen / Flughafen-Taxi',
      ph_amount: 'Gesamtbetrag',
      label_who_paid: 'Wer hat bezahlt?',
      label_split_between: 'Aufgeteilt zwischen:',
      btn_save_new: '➕ Ausgabe speichern',
      btn_save_edit: '💾 Änderungen speichern',
      err_fill_fields: 'Bitte Titel, Betrag > 0 und mindestens 1 Person angeben.',
      toast_expense_added: '💸 Gruppenausgabe gespeichert.',
      toast_expense_updated: '✏️ Gruppenausgabe aktualisiert.',
      toast_payment_recorded: '✅ Zahlung erfasst: {de} ➡️ {para}',
      toast_all_clear: 'Alles ausgeglichen! Keine offenen Schulden.',
      toast_copied_wa: '📋 Abrechnung für WhatsApp kopiert!',
      all_short: 'Alle',
      wa_header: '💸 *Gruppenabrechnung — Plux ({cur})*',
      wa_total: 'Geteilte Gesamtsumme',
      wa_transfers: '🔄 *Minimale Überweisungen:*',
      wa_footer: '✨ _Berechnet mit Plux v7.1_',
      default_traveler_prefix: 'Reisender'
    },
    it: {
      panel_title: '💸 Finanze di Gruppo · Splitwise',
      shared_total: 'Totale condiviso',
      travelers_unit: 'viaggiatore/i',
      btn_add_expense: '➕ Spesa di gruppo',
      btn_copy_wa: '📋 Copia WhatsApp',
      btn_add_traveler: '+ Aggiungi viaggiatore',
      add_traveler_ph: 'Nome o @utente del viaggiatore...',
      add_traveler_hint: 'Viaggi in gruppo? Aggiungi i compagni di viaggio qui per dividere le spese:',
      traveler_added: '👤 Viaggiatore aggiunto: {name}',
      traveler_exists: 'Questo viaggiatore è già nella lista.',
      traveler_empty: 'Inserisci un nome per aggiungere il viaggiatore.',
      empty_hint: 'Assegna <strong>"Pagato da"</strong> nella tabella qui sotto o aggiungi una <strong>+ Spesa di gruppo</strong> per calcolare automaticamente saldi e quote.',
      paid_label: 'Pagato',
      share_label: 'Quota',
      in_favor: 'a credito',
      owes: 'deve',
      settled: 'Saldato',
      all_settled: '🎉 Tutti i conti sono saldati!',
      btn_mark_settled: '✅ Segna saldato',
      quick_expenses_title: 'Spese di gruppo rapide',
      paid_by_short: 'Pagato da',
      between_short: 'tra',
      settled_payments_title: 'Pagamenti già saldati',
      paid_to: 'ha pagato a',
      btn_edit: 'Modifica',
      btn_delete: 'Elimina',
      btn_undo: 'Annulla',
      modal_split_title: '👥 Tra chi dividere?',
      modal_split_desc: 'Seleziona i viaggiatori che condividono questa spesa ({sel}/{tot}).',
      btn_done: 'Fatto',
      min_one_traveler: 'Almeno 1 viaggiatore deve partecipare alla divisione.',
      modal_add_title: '💸 Nuova spesa di gruppo',
      modal_edit_title: '✏️ Modifica spesa di gruppo',
      ph_title: 'Es: Cena a Trastevere / Taxi aeroporto',
      ph_amount: 'Importo totale',
      label_who_paid: 'Chi ha pagato?',
      label_split_between: 'Diviso tra:',
      btn_save_new: '➕ Salva spesa di gruppo',
      btn_save_edit: '💾 Salva modifiche',
      err_fill_fields: 'Inserisci descrizione, importo > 0 e almeno 1 persona.',
      toast_expense_added: '💸 Spesa di gruppo salvata.',
      toast_expense_updated: '✏️ Spesa di gruppo aggiornata.',
      toast_payment_recorded: '✅ Pagamento registrato: {de} ➡️ {para}',
      toast_all_clear: 'Tutto saldato! Nessun debito in sospeso.',
      toast_copied_wa: '📋 Riepilogo copiato per WhatsApp!',
      all_short: 'Tutti',
      wa_header: '💸 *Conti di Gruppo — Plux ({cur})*',
      wa_total: 'Totale condiviso',
      wa_transfers: '🔄 *Trasferimenti minimi:*',
      wa_footer: '✨ _Calcolato con Plux v7.1_',
      default_traveler_prefix: 'Viaggiatore'
    }
  };

  let isEmbeddingTrips = false;
  let forceShowTravelerForm = false;

  function getLang() {
    let lang = '';
    if (typeof root.currentLang === 'string' && root.currentLang) {
      lang = root.currentLang;
    } else {
      try {
        if (typeof currentLang !== 'undefined' && currentLang) lang = String(currentLang);
      } catch (e) {}
    }
    if (!lang && typeof root.getCurrentLang === 'function') {
      try { lang = String(root.getCurrentLang() || ''); } catch (e) {}
    }
    if (!lang) {
      try {
        if (typeof localStorage !== 'undefined') lang = localStorage.getItem('Plux_Lang') || '';
      } catch (e) {}
    }
    const clean = String(lang || 'es').toLowerCase().slice(0, 2);
    return I18N[clean] ? clean : 'es';
  }

  function loc(key, params = {}) {
    const lang = getLang();
    const dict = I18N[lang] || I18N.es;
    let str = dict[key] || I18N.es[key] || key;
    Object.keys(params).forEach((k) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(params[k]));
    });
    return str;
  }

  function esc(val) {
    if (typeof root.escapeHtml === 'function') return root.escapeHtml(val);
    return String(val == null ? '' : val)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escJsArg(val) {
    return esc(String(val == null ? '' : val).replace(/\\/g, '\\\\').replace(/'/g, "\\'"));
  }

  // Lectores seguros para variables `let` globales de script.js + propiedades en `window`/Node VM
  function getGlobalSyncCode() {
    try { if (typeof syncCode !== 'undefined' && syncCode) return String(syncCode); } catch (e) {}
    return (typeof root.syncCode === 'string' && root.syncCode) ? root.syncCode : '';
  }

  function getGlobalDestinos() {
    try { if (typeof destinos !== 'undefined' && Array.isArray(destinos)) return destinos; } catch (e) {}
    return Array.isArray(root.destinos) ? root.destinos : [];
  }

  function getGlobalNumPersonas() {
    try { if (typeof numPersonas !== 'undefined' && numPersonas) return Math.max(1, parseInt(numPersonas, 10) || 1); } catch (e) {}
    return Math.max(1, parseInt(root.numPersonas, 10) || 1);
  }

  function getGlobalListaViajeros() {
    try { if (typeof listaViajeros !== 'undefined' && Array.isArray(listaViajeros)) return listaViajeros; } catch (e) {}
    return Array.isArray(root.listaViajeros) ? root.listaViajeros : null;
  }

  function getGlobalVueltaPrecio() {
    try { if (typeof vueltaPrecioGlobal !== 'undefined') return Number(vueltaPrecioGlobal) || 0; } catch (e) {}
    return Number(root.vueltaPrecioGlobal) || 0;
  }

  function getGlobalVueltaMoneda(fallback) {
    try { if (typeof vueltaMonedaGlobal !== 'undefined' && vueltaMonedaGlobal) return String(vueltaMonedaGlobal); } catch (e) {}
    return (typeof root.vueltaMonedaGlobal === 'string' && root.vueltaMonedaGlobal) ? root.vueltaMonedaGlobal : fallback;
  }

  function getGlobalVueltaPagadoPor() {
    if (typeof root.vueltaPagadoPor === 'string' && root.vueltaPagadoPor) return root.vueltaPagadoPor;
    try { if (typeof vueltaPagadoPor !== 'undefined' && vueltaPagadoPor) return String(vueltaPagadoPor); } catch (e) {}
    return 'Todos';
  }

  function getGlobalVueltaCostos() {
    try { if (typeof vueltaCostosAdicionales !== 'undefined' && Array.isArray(vueltaCostosAdicionales)) return vueltaCostosAdicionales; } catch (e) {}
    return Array.isArray(root.vueltaCostosAdicionales) ? root.vueltaCostosAdicionales : [];
  }

  function getActiveTripKey() {
    const sc = getGlobalSyncCode();
    if (sc) return sc;
    try {
      if (typeof root.getCurrentTripId === 'function') {
        const id = root.getCurrentTripId();
        if (id) return String(id);
      }
    } catch (e) {}
    return 'active_trip';
  }

  function normalizeFinanceState(raw) {
    const cur = raw && typeof raw === 'object' ? raw : {};
    return {
      gastosGrupales: Array.isArray(cur.gastosGrupales) ? cur.gastosGrupales.map((g) => ({ ...g })) : [],
      divisionesOverrides: cur.divisionesOverrides && typeof cur.divisionesOverrides === 'object'
        ? JSON.parse(JSON.stringify(cur.divisionesOverrides))
        : {},
      liquidaciones: Array.isArray(cur.liquidaciones) ? cur.liquidaciones.map((l) => ({ ...l })) : [],
      updatedAt: cur.updatedAt || null
    };
  }

  function hasFinanceData(stateObj) {
    if (!stateObj || typeof stateObj !== 'object') return false;
    return (Array.isArray(stateObj.gastosGrupales) && stateObj.gastosGrupales.length > 0) ||
      (stateObj.divisionesOverrides && Object.keys(stateObj.divisionesOverrides).length > 0) ||
      (Array.isArray(stateObj.liquidaciones) && stateObj.liquidaciones.length > 0);
  }

  function loadAllGroupFinance() {
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem(GROUP_FINANCE_KEY);
        const parsed = raw ? JSON.parse(raw) : {};
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
      }
    } catch (e) {}
    return {};
  }

  function writeAllGroupFinance(allObj) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(GROUP_FINANCE_KEY, JSON.stringify(allObj || {}));
      }
    } catch (e) {}
  }

  function getTripFinanceState(tripKey = getActiveTripKey()) {
    const all = loadAllGroupFinance();
    const cur = all[tripKey];
    if (cur && typeof cur === 'object') {
      return normalizeFinanceState(cur);
    }
    // Fallback: si el viaje activo en storage ya trae groupFinance embebido, hidratarlo
    try {
      if (typeof root.getStoredTrips === 'function') {
        const trips = root.getStoredTrips();
        const match = Array.isArray(trips)
          ? trips.find((tr) => tr && (String(tr.tripId || '') === String(tripKey) || String(tr.syncCode || '') === String(tripKey)))
          : null;
        if (match && hasFinanceData(match.groupFinance)) {
          return normalizeFinanceState(match.groupFinance);
        }
      }
    } catch (e) {}
    return normalizeFinanceState(null);
  }

  function embedGroupFinanceIntoTrips(tripsArray) {
    if (!Array.isArray(tripsArray)) return tripsArray;
    const all = loadAllGroupFinance();
    let localChanged = false;

    const result = tripsArray.map((tr) => {
      if (!tr || typeof tr !== 'object') return tr;
      const keys = [tr.syncCode, tr.tripId].filter(Boolean).map(String);
      let localState = null;
      for (const k of keys) {
        if (hasFinanceData(all[k])) {
          localState = normalizeFinanceState(all[k]);
          break;
        }
      }
      const tripState = hasFinanceData(tr.groupFinance) ? normalizeFinanceState(tr.groupFinance) : null;

      if (localState) {
        // Si el viaje ya traía uno más nuevo, respetar el más nuevo
        if (tripState && tripState.updatedAt && localState.updatedAt && tripState.updatedAt > localState.updatedAt) {
          keys.forEach((k) => { all[k] = tripState; });
          localChanged = true;
          return { ...tr, groupFinance: tripState };
        }
        return { ...tr, groupFinance: localState };
      }
      if (tripState) {
        keys.forEach((k) => { all[k] = tripState; });
        localChanged = true;
        return { ...tr, groupFinance: tripState };
      }
      return tr;
    });

    if (localChanged) {
      writeAllGroupFinance(all);
    }
    return result;
  }

  function hydrateGroupFinanceFromTrip(tripObj, explicitKey = null) {
    if (!tripObj || typeof tripObj !== 'object' || !hasFinanceData(tripObj.groupFinance)) return false;
    const targetKey = String(explicitKey || tripObj.syncCode || tripObj.tripId || getActiveTripKey());
    if (!targetKey) return false;
    const incoming = normalizeFinanceState(tripObj.groupFinance);
    const all = loadAllGroupFinance();
    const existing = hasFinanceData(all[targetKey]) ? normalizeFinanceState(all[targetKey]) : null;
    if (existing && existing.updatedAt && incoming.updatedAt && existing.updatedAt > incoming.updatedAt) {
      return false;
    }
    all[targetKey] = incoming;
    if (tripObj.tripId && String(tripObj.tripId) !== targetKey) {
      all[String(tripObj.tripId)] = incoming;
    }
    writeAllGroupFinance(all);
    if (root.PluxIDB && typeof root.PluxIDB.mirrorGroupFinance === 'function') {
      void root.PluxIDB.mirrorGroupFinance(targetKey, incoming);
    }
    return true;
  }

  function saveTripFinanceState(stateObj, tripKey = getActiveTripKey()) {
    const normalized = normalizeFinanceState({
      ...stateObj,
      updatedAt: new Date().toISOString()
    });
    const cleanKey = String(tripKey || getActiveTripKey());
    const all = loadAllGroupFinance();
    all[cleanKey] = normalized;
    writeAllGroupFinance(all);

    // Sincronizar copia embebida en el viaje activo dentro de Plux_trips
    try {
      if (!isEmbeddingTrips && typeof root.getStoredTrips === 'function' && typeof root.saveTrips === 'function') {
        const trips = root.getStoredTrips();
        if (Array.isArray(trips) && trips.length > 0) {
          let idx = trips.findIndex((tr) => tr && (String(tr.syncCode || '') === cleanKey || String(tr.tripId || '') === cleanKey));
          if (idx >= 0) {
            trips[idx] = { ...trips[idx], groupFinance: normalized };
            isEmbeddingTrips = true;
            try {
              root.saveTrips(trips, typeof navigator === 'undefined' ? true : navigator.onLine !== false);
            } finally {
              isEmbeddingTrips = false;
            }
          }
        }
      }
    } catch (e) {}

    // Espejar siempre en IndexedDB y encolar en outbox si está offline
    if (root.PluxIDB) {
      if (typeof root.PluxIDB.mirrorGroupFinance === 'function') {
        void root.PluxIDB.mirrorGroupFinance(cleanKey, normalized);
      }
      if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        const sc = getGlobalSyncCode();
        void root.PluxIDB.enqueueMutation('group_finance', cleanKey, {
          tripId: cleanKey,
          syncCode: sc || null,
          groupFinance: normalized
        });
      }
    }
  }

  function getTargetCurrency() {
    if (typeof root.getMonedaActiva === 'function') return root.getMonedaActiva();
    return 'EUR';
  }

  function getCurrencySymbol(cur) {
    if (typeof root.getSimboloMoneda === 'function') return root.getSimboloMoneda(cur);
    if (cur === 'USD' || cur === 'ARS') return '$';
    if (cur === 'EUR') return '€';
    return cur + ' ';
  }

  function defaultConvert(amount, fromCur, toCur) {
    if (typeof root.convertirMonto === 'function') {
      return root.convertirMonto(amount, fromCur, toCur);
    }
    return Number(amount) || 0;
  }

  function fmtMoney(amount, cur = getTargetCurrency()) {
    if (typeof root.formatMoneda === 'function') return root.formatMoneda(amount, cur);
    const sym = getCurrencySymbol(cur);
    return `${sym}${(Number(amount) || 0).toFixed(2)}`;
  }

  function isGenericTravelerName(name) {
    const s = String(name || '').trim().toLowerCase();
    return /^(viajero|traveler|voyageur|reisender|viaggiatore)(\s*\d+)?$/.test(s);
  }

  function getTripTravelersList() {
    const set = new Set();
    if (typeof root.obtenerListaViajerosTotal === 'function') {
      try {
        (root.obtenerListaViajerosTotal() || []).forEach((p) => {
          if (p && String(p).trim()) set.add(String(p).trim());
        });
      } catch (e) {}
    }
    const lv = getGlobalListaViajeros();
    if (Array.isArray(lv)) {
      lv.forEach((p) => { if (p && String(p).trim()) set.add(String(p).trim()); });
    }
    if (Array.isArray(root.colaboradoresActuales)) {
      root.colaboradoresActuales.forEach((p) => { if (p && String(p).trim()) set.add(String(p).trim()); });
    }
    if (typeof document !== 'undefined') {
      const npInput = document.getElementById('nombresPersonas');
      if (npInput && npInput.value) {
        npInput.value.split(',').forEach((p) => {
          if (p && p.trim()) set.add(p.trim());
        });
      }
    }
    if (set.size > 1) {
      // Si ya hay viajeros reales junto con el placeholder genérico "Viajero 1", limpiar el placeholder
      const nonGeneric = Array.from(set).filter((p) => !isGenericTravelerName(p));
      if (nonGeneric.length > 0) return nonGeneric;
    }
    if (set.size === 0) {
      const n = getGlobalNumPersonas();
      const prefix = loc('default_traveler_prefix');
      for (let i = 1; i <= n; i++) set.add(`${prefix} ${i}`);
    }
    return Array.from(set);
  }

  // ---------------------------------------------------------------------------
  // 0. NORMALIZACIÓN DE CLAVES DE GASTO (6 TIPOS EXACTOS DE script.js)
  // ---------------------------------------------------------------------------
  function cleanIdToken(val) {
    if (val === null || val === undefined) return '';
    const s = String(val).trim().replace(/^['"]|['"]$/g, '').trim();
    return (s === 'null' || s === 'undefined') ? '' : s;
  }

  function buildExpenseSplitKey(tipo, destId, subId, itemIndex) {
    const t = cleanIdToken(tipo);
    const d = cleanIdToken(destId);
    const s = cleanIdToken(subId);
    const i = cleanIdToken(itemIndex);
    if (t === 'tramo_transporte' || t === 'tramo_alojamiento') {
      return `${t}:${d}:${i || '0'}`;
    }
    if (t === 'evento' || t === 'costo_adicional_dia') {
      return `${t}:${d}:${s}:${i || '0'}`;
    }
    if (t === 'vuelta') {
      return 'vuelta:0:0';
    }
    if (t === 'vuelta_costo_adicional') {
      return `vuelta_costo_adicional:0:${i || '0'}`;
    }
    return `${t}:${d || '0'}:${s || '0'}:${i || '0'}`;
  }

  function parseExpenseKeyFromOnchange(onchangeSrc) {
    const src = String(onchangeSrc || '');
    const m = src.match(/actualizarGastoResumen\(\s*['"]([^'"]+)['"]\s*,\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,)]+)/);
    if (!m) return null;
    return buildExpenseSplitKey(m[1], m[2], m[3], m[4]);
  }

  // ---------------------------------------------------------------------------
  // 1. MOTOR PURO DE LIQUIDACIÓN MULTIMONEDA (TESTEABLE EN NODE VM)
  // ---------------------------------------------------------------------------
  function computeGroupSettlement(expenses, travelers, settlements = [], convertFn = defaultConvert, targetCurrency = 'EUR') {
    const travelerSet = new Set((Array.isArray(travelers) ? travelers : []).map((t) => String(t).trim()).filter(Boolean));
    const listExpenses = Array.isArray(expenses) ? expenses : [];
    const listSettlements = Array.isArray(settlements) ? settlements : [];

    listExpenses.forEach((exp) => {
      if (exp?.pagadoPor && exp.pagadoPor !== 'Todos') travelerSet.add(String(exp.pagadoPor).trim());
      if (Array.isArray(exp?.divididoEntre)) {
        exp.divididoEntre.forEach((p) => { if (p && p !== 'Todos') travelerSet.add(String(p).trim()); });
      }
    });
    listSettlements.forEach((s) => {
      if (s?.de) travelerSet.add(String(s.de).trim());
      if (s?.para) travelerSet.add(String(s.para).trim());
    });

    const participantList = Array.from(travelerSet);
    const paidByPerson = {};
    const owedByPerson = {};
    participantList.forEach((p) => {
      paidByPerson[p] = 0;
      owedByPerson[p] = 0;
    });

    let totalGroupSpend = 0;

    listExpenses.forEach((exp) => {
      if (!exp) return;
      const pagador = String(exp.pagadoPor || 'Todos').trim();
      const rawAmount = Number(exp.monto ?? exp.costoTotal ?? exp.costo ?? 0) || 0;
      if (rawAmount <= 0 || !pagador || pagador === 'Todos') return;

      const cur = exp.moneda || targetCurrency;
      const converted = Number(convertFn(rawAmount, cur, targetCurrency)) || 0;
      if (converted <= 0) return;

      totalGroupSpend += converted;
      paidByPerson[pagador] = (paidByPerson[pagador] || 0) + converted;

      let splitMembers = Array.isArray(exp.divididoEntre) && exp.divididoEntre.length > 0
        ? exp.divididoEntre.map((p) => String(p).trim()).filter((p) => participantList.includes(p))
        : participantList;
      if (splitMembers.length === 0) splitMembers = participantList;

      if (exp.pesos && typeof exp.pesos === 'object') {
        const totalWeight = splitMembers.reduce((sum, p) => sum + (Number(exp.pesos[p]) || 0), 0);
        if (totalWeight > 0) {
          splitMembers.forEach((p) => {
            const share = converted * ((Number(exp.pesos[p]) || 0) / totalWeight);
            owedByPerson[p] = (owedByPerson[p] || 0) + share;
          });
          return;
        }
      }

      const share = converted / Math.max(1, splitMembers.length);
      splitMembers.forEach((p) => {
        owedByPerson[p] = (owedByPerson[p] || 0) + share;
      });
    });

    // Aplicar liquidaciones ya saldadas (+monto al deudor que pagó, -monto al acreedor que recibió)
    let settledTotal = 0;
    const settledAdj = {};
    participantList.forEach((p) => { settledAdj[p] = 0; });

    listSettlements.forEach((s) => {
      if (!s || !s.de || !s.para) return;
      const amt = Number(convertFn(Number(s.monto) || 0, s.moneda || targetCurrency, targetCurrency)) || 0;
      if (amt <= 0) return;
      settledTotal += amt;
      settledAdj[s.de] = (settledAdj[s.de] || 0) + amt;
      settledAdj[s.para] = (settledAdj[s.para] || 0) - amt;
    });

    const netBalances = {};
    const debtors = [];
    const creditors = [];

    participantList.forEach((p) => {
      const net = +((paidByPerson[p] - owedByPerson[p]) + (settledAdj[p] || 0)).toFixed(2);
      netBalances[p] = net;
      if (net < -0.01) debtors.push({ persona: p, monto: -net });
      else if (net > 0.01) creditors.push({ persona: p, monto: net });
    });

    debtors.sort((a, b) => b.monto - a.monto);
    creditors.sort((a, b) => b.monto - a.monto);

    const transfers = [];
    let i = 0;
    let j = 0;
    while (i < debtors.length && j < creditors.length) {
      const pay = Math.min(debtors[i].monto, creditors[j].monto);
      if (pay > 0.01) {
        transfers.push({
          de: debtors[i].persona,
          para: creditors[j].persona,
          monto: +pay.toFixed(2)
        });
      }
      debtors[i].monto -= pay;
      creditors[j].monto -= pay;
      if (debtors[i].monto <= 0.01) i++;
      if (creditors[j].monto <= 0.01) j++;
    }

    return {
      travelers: participantList,
      paidByPerson,
      owedByPerson,
      netBalances,
      transfers,
      totalGroupSpend: +totalGroupSpend.toFixed(2),
      settledTotal: +settledTotal.toFixed(2),
      currency: targetCurrency
    };
  }

  // ---------------------------------------------------------------------------
  // 2. RECOLECCIÓN DE GASTOS DEL VIAJE ACTUAL (6 TIPOS + GRUPALES RÁPIDOS)
  // ---------------------------------------------------------------------------
  function collectAllTripExpensesForSplit() {
    const tripState = getTripFinanceState();
    const overrides = tripState.divisionesOverrides || {};
    const dests = getGlobalDestinos();
    const travelers = getTripTravelersList();
    const targetCur = getTargetCurrency();
    const multPersonas = Math.max(1, getGlobalNumPersonas() || travelers.length || 1);
    const items = [];

    dests.forEach((dest) => {
      if (!dest) return;
      (dest.tramos || []).forEach((tramo, tIdx) => {
        if (!tramo) return;
        const pTransp = Number(tramo.precio) || 0;
        const mult = tramo.modoPrecio === 'total' ? 1 : multPersonas;
        if (pTransp > 0) {
          const paidVal = tramo.montoPagado !== undefined && Number(tramo.montoPagado) > 0
            ? Number(tramo.montoPagado)
            : pTransp * mult;
          const key = buildExpenseSplitKey('tramo_transporte', dest.id, null, tIdx);
          items.push({
            key,
            concepto: `${tramo.medio || 'Traslado'} → ${dest.nombre}`,
            monto: paidVal,
            moneda: tramo.moneda || targetCur,
            pagadoPor: tramo.pagadoPor || 'Todos',
            divididoEntre: overrides[key] || travelers
          });
        }
        const pAloj = Number(tramo.precioAlojamiento) || 0;
        if (pAloj > 0) {
          const key = buildExpenseSplitKey('tramo_alojamiento', dest.id, null, tIdx);
          items.push({
            key,
            concepto: `Alojamiento en ${dest.nombre}`,
            monto: pAloj * mult,
            moneda: tramo.monedaAlojamiento || tramo.moneda || targetCur,
            pagadoPor: tramo.alojamientoPagadoPor || 'Todos',
            divididoEntre: overrides[key] || travelers
          });
        }
      });

      (dest.dias || []).forEach((dia) => {
        if (!dia) return;
        (dia.eventos || []).forEach((ev, eIdx) => {
          const c = Number(ev?.costo) || 0;
          if (c > 0) {
            const key = buildExpenseSplitKey('evento', dest.id, dia.id, eIdx);
            items.push({
              key,
              concepto: ev.titulo || 'Actividad',
              monto: c * multPersonas,
              moneda: ev.moneda || targetCur,
              pagadoPor: ev.pagadoPor || 'Todos',
              divididoEntre: overrides[key] || travelers
            });
          }
        });
        (dia.costosAdicionales || []).forEach((ca, cIdx) => {
          const c = Number(ca?.precio) || 0;
          if (c > 0) {
            const key = buildExpenseSplitKey('costo_adicional_dia', dest.id, dia.id, cIdx);
            items.push({
              key,
              concepto: ca.concepto || ca.descripcion || 'Gasto adicional',
              monto: c,
              moneda: ca.moneda || targetCur,
              pagadoPor: ca.pagadoPor || 'Todos',
              divididoEntre: overrides[key] || travelers
            });
          }
        });
      });
    });

    const vueltaPrecio = getGlobalVueltaPrecio();
    if (vueltaPrecio > 0) {
      const key = buildExpenseSplitKey('vuelta', null, null, null);
      items.push({
        key,
        concepto: 'Regreso',
        monto: vueltaPrecio * multPersonas,
        moneda: getGlobalVueltaMoneda(targetCur),
        pagadoPor: getGlobalVueltaPagadoPor(),
        divididoEntre: overrides[key] || travelers
      });
    }

    getGlobalVueltaCostos().forEach((vc, idx) => {
      const c = Number(vc?.precio) || 0;
      if (c > 0) {
        const key = buildExpenseSplitKey('vuelta_costo_adicional', null, null, idx);
        items.push({
          key,
          concepto: vc.concepto || vc.descripcion || 'Extra regreso',
          monto: c,
          moneda: vc.moneda || targetCur,
          pagadoPor: vc.pagadoPor || 'Todos',
          divididoEntre: overrides[key] || travelers
        });
      }
    });

    tripState.gastosGrupales.forEach((gg) => {
      if (!gg) return;
      items.push({
        key: `group:${gg.id}`,
        isGroupExtra: true,
        id: gg.id,
        concepto: gg.concepto,
        categoria: gg.categoria || 'Comida / Varios',
        monto: Number(gg.monto) || 0,
        moneda: gg.moneda || targetCur,
        pagadoPor: gg.pagadoPor || 'Todos',
        divididoEntre: Array.isArray(gg.divididoEntre) && gg.divididoEntre.length > 0 ? gg.divididoEntre : travelers
      });
    });

    return { items, tripState, travelers, targetCur };
  }

  // ---------------------------------------------------------------------------
  // 3. ACCIONES INTERACTIVAS DE UI (CREAR, EDITAR, ELIMINAR, VIAJEROS, SALDAR)
  // ---------------------------------------------------------------------------
  function addGroupExpense(data) {
    const tripState = getTripFinanceState();
    const newItem = {
      id: 'gg_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      concepto: String(data.concepto || 'Gasto grupal').trim(),
      categoria: String(data.categoria || 'Comida / Grupo'),
      monto: Math.max(0, parseFloat(data.monto) || 0),
      moneda: String(data.moneda || getTargetCurrency()),
      pagadoPor: String(data.pagadoPor || 'Todos'),
      divididoEntre: Array.isArray(data.divididoEntre) && data.divididoEntre.length > 0 ? data.divididoEntre : getTripTravelersList(),
      fecha: new Date().toISOString().slice(0, 10)
    };
    tripState.gastosGrupales.push(newItem);
    saveTripFinanceState(tripState);
    if (typeof root.showToast === 'function') {
      root.showToast(loc('toast_expense_added'), 'success');
    }
    if (typeof root.renderResumen === 'function') root.renderResumen();
    else renderPanel();
    return newItem;
  }

  function updateGroupExpense(id, data) {
    const tripState = getTripFinanceState();
    const idx = tripState.gastosGrupales.findIndex((g) => g && g.id === id);
    if (idx === -1) return null;
    const prev = tripState.gastosGrupales[idx];
    const updated = {
      ...prev,
      concepto: data.concepto !== undefined ? String(data.concepto).trim() : prev.concepto,
      categoria: data.categoria !== undefined ? String(data.categoria) : prev.categoria,
      monto: data.monto !== undefined ? Math.max(0, parseFloat(data.monto) || 0) : prev.monto,
      moneda: data.moneda !== undefined ? String(data.moneda) : prev.moneda,
      pagadoPor: data.pagadoPor !== undefined ? String(data.pagadoPor) : prev.pagadoPor,
      divididoEntre: Array.isArray(data.divididoEntre) && data.divididoEntre.length > 0
        ? [...data.divididoEntre]
        : prev.divididoEntre,
      updatedAt: new Date().toISOString()
    };
    tripState.gastosGrupales[idx] = updated;
    saveTripFinanceState(tripState);
    if (typeof root.showToast === 'function') {
      root.showToast(loc('toast_expense_updated'), 'success');
    }
    if (typeof root.renderResumen === 'function') root.renderResumen();
    else renderPanel();
    return updated;
  }

  function deleteGroupExpense(id) {
    const tripState = getTripFinanceState();
    tripState.gastosGrupales = tripState.gastosGrupales.filter((g) => g && g.id !== id);
    saveTripFinanceState(tripState);
    if (typeof root.renderResumen === 'function') root.renderResumen();
    else renderPanel();
  }

  function addTravelerInline(rawName) {
    let val = rawName;
    if (val === undefined && typeof document !== 'undefined') {
      const inp = document.getElementById('plux-v71-add-traveler-input');
      val = inp ? inp.value : '';
    }
    const clean = String(val || '').replace(/,/g, '').trim();
    if (!clean) {
      if (typeof root.showToast === 'function') root.showToast(loc('traveler_empty'), 'info');
      return false;
    }

    const norm = clean.toLowerCase().replace(/^@/, '');
    const existingList = getTripTravelersList();
    if (existingList.some((v) => String(v).toLowerCase().replace(/^@/, '') === norm)) {
      if (typeof root.showToast === 'function') root.showToast(loc('traveler_exists'), 'info');
      return false;
    }

    let addedViaCore = false;
    if (typeof root.agregarViajeroChip === 'function') {
      try {
        root.agregarViajeroChip(clean);
        const after = getTripTravelersList();
        addedViaCore = after.some((v) => String(v).toLowerCase().replace(/^@/, '') === norm);
      } catch (e) {}
    }

    if (!addedViaCore) {
      // Sincronizar con listaViajeros (lexical o window) y #nombresPersonas
      let targetList = getGlobalListaViajeros();
      if (!targetList) {
        root.listaViajeros = Array.isArray(root.listaViajeros) ? root.listaViajeros : [];
        targetList = root.listaViajeros;
      }
      if (!targetList.some((v) => String(v).toLowerCase().replace(/^@/, '') === norm)) {
        targetList.push(clean);
      }
      if (Array.isArray(root.listaViajeros) && root.listaViajeros !== targetList) {
        if (!root.listaViajeros.some((v) => String(v).toLowerCase().replace(/^@/, '') === norm)) {
          root.listaViajeros.push(clean);
        }
      }
      if (typeof document !== 'undefined') {
        const npInput = document.getElementById('nombresPersonas');
        if (npInput) {
          npInput.value = targetList.join(', ');
        }
        const numInput = document.getElementById('numPersonas');
        if (numInput && targetList.length > (parseInt(numInput.value, 10) || 1)) {
          numInput.value = String(targetList.length);
        }
      }
      if (typeof root.renderTravelerChips === 'function') {
        try { root.renderTravelerChips(); } catch (e) {}
      }
      if (typeof root.autoSave === 'function') {
        try { root.autoSave(); } catch (e) {}
      }
    }

    if (typeof document !== 'undefined') {
      const inp = document.getElementById('plux-v71-add-traveler-input');
      if (inp) inp.value = '';
    }
    if (typeof root.showToast === 'function') {
      root.showToast(loc('traveler_added', { name: clean }), 'success');
    }
    if (typeof root.renderResumen === 'function') root.renderResumen();
    else renderPanel();
    return true;
  }

  function toggleInlineTravelerForm() {
    forceShowTravelerForm = !forceShowTravelerForm;
    renderPanel();
    if (forceShowTravelerForm && typeof document !== 'undefined') {
      setTimeout(() => document.getElementById('plux-v71-add-traveler-input')?.focus(), 30);
    }
  }

  function settleTransfer(de, para, monto) {
    const tripState = getTripFinanceState();
    tripState.liquidaciones.push({
      id: 'liq_' + Date.now(),
      de,
      para,
      monto: Number(monto) || 0,
      moneda: getTargetCurrency(),
      fecha: new Date().toISOString().slice(0, 10)
    });
    saveTripFinanceState(tripState);
    if (typeof root.showToast === 'function') {
      root.showToast(loc('toast_payment_recorded', { de, para }), 'success');
    }
    renderPanel();
  }

  function undoSettlement(id) {
    const tripState = getTripFinanceState();
    tripState.liquidaciones = tripState.liquidaciones.filter((l) => l && l.id !== id);
    saveTripFinanceState(tripState);
    renderPanel();
  }

  function toggleExpenseSplitMember(expenseKey, personName) {
    const tripState = getTripFinanceState();
    const travelers = getTripTravelersList();
    const current = Array.isArray(tripState.divisionesOverrides[expenseKey])
      ? [...tripState.divisionesOverrides[expenseKey]]
      : [...travelers];

    const idx = current.indexOf(personName);
    if (idx >= 0) {
      if (current.length <= 1) {
        if (typeof root.showToast === 'function') root.showToast(loc('min_one_traveler'), 'info');
        return;
      }
      current.splice(idx, 1);
    } else {
      current.push(personName);
    }

    tripState.divisionesOverrides[expenseKey] = current;
    saveTripFinanceState(tripState);
    openSplitPickerModal(expenseKey);
    renderPanel();
  }

  function openSplitPickerModal(expenseKey) {
    if (typeof document === 'undefined') return;
    const prev = document.getElementById('plux-v71-split-picker-modal');
    if (prev) prev.remove();

    const travelers = getTripTravelersList();
    const tripState = getTripFinanceState();
    const selected = Array.isArray(tripState.divisionesOverrides[expenseKey])
      ? tripState.divisionesOverrides[expenseKey]
      : travelers;

    const modal = document.createElement('div');
    modal.id = 'plux-v71-split-picker-modal';
    modal.className = 'plux-v71-modal';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    const chips = travelers.map((p) => {
      const isSel = selected.includes(p);
      return `<button type="button" class="plux-v71-person-chip ${isSel ? 'selected' : ''}" onclick="window.PluxSplitwise.toggleExpenseSplitMember('${escJsArg(expenseKey)}', '${escJsArg(p)}')">${isSel ? '✓ ' : ''}${esc(p)}</button>`;
    }).join('');

    modal.innerHTML = `
      <div class="plux-v71-modal-card" style="max-width:430px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h3 style="margin:0; font-size:1.02rem;">${esc(loc('modal_split_title'))}</h3>
          <button type="button" class="plux-v71-action-btn" onclick="document.getElementById('plux-v71-split-picker-modal').remove()">✕</button>
        </div>
        <p style="margin:0 0 12px 0; font-size:0.82rem; color:var(--gris, #94a3b8);">${esc(loc('modal_split_desc', { sel: selected.length, tot: travelers.length }))}</p>
        <div class="plux-v71-chips-toggle">${chips}</div>
        <div style="margin-top:16px; text-align:right;">
          <button type="button" class="plux-v71-action-btn plux-v71-action-btn--primary" onclick="document.getElementById('plux-v71-split-picker-modal').remove(); window.renderResumen && window.renderResumen();">${esc(loc('btn_done'))}</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function openAddGroupExpenseModal(editingId = null) {
    if (typeof document === 'undefined') return;
    const prev = document.getElementById('plux-v71-group-exp-modal');
    if (prev) prev.remove();

    const tripState = getTripFinanceState();
    const editingItem = editingId
      ? tripState.gastosGrupales.find((g) => g && g.id === editingId) || null
      : null;

    const travelers = [...getTripTravelersList()];
    if (editingItem) {
      if (editingItem.pagadoPor && editingItem.pagadoPor !== 'Todos' && !travelers.includes(editingItem.pagadoPor)) {
        travelers.push(editingItem.pagadoPor);
      }
      if (Array.isArray(editingItem.divididoEntre)) {
        editingItem.divididoEntre.forEach((m) => {
          if (m && !travelers.includes(m)) travelers.push(m);
        });
      }
    }

    const activeCur = editingItem ? (editingItem.moneda || getTargetCurrency()) : getTargetCurrency();
    const currencies = ['EUR', 'USD', 'ARS', 'BRL', 'GBP', 'JPY', 'MXN', 'CLP', 'UYU'];
    if (!currencies.includes(activeCur)) currencies.unshift(activeCur);

    const selectedMembers = editingItem && Array.isArray(editingItem.divididoEntre) && editingItem.divididoEntre.length > 0
      ? editingItem.divididoEntre
      : travelers;

    const modal = document.createElement('div');
    modal.id = 'plux-v71-group-exp-modal';
    modal.className = 'plux-v71-modal';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    const payerOptions = travelers.map((p) =>
      `<option value="${esc(p)}" ${editingItem && editingItem.pagadoPor === p ? 'selected' : ''}>${esc(p)}</option>`
    ).join('');
    const curOptions = currencies.map((c) =>
      `<option value="${c}" ${c === activeCur ? 'selected' : ''}>${c}</option>`
    ).join('');
    const splitChecks = travelers.map((p) => {
      const checked = selectedMembers.includes(p) ? 'checked' : '';
      return `
        <label style="display:inline-flex; align-items:center; gap:5px; padding:5px 10px; border-radius:999px; border:1px solid var(--border,#334155); font-size:0.78rem; cursor:pointer;">
          <input type="checkbox" class="plux-v71-gg-member" value="${esc(p)}" ${checked}> ${esc(p)}
        </label>
      `;
    }).join('');

    modal.innerHTML = `
      <div class="plux-v71-modal-card" style="max-width:480px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
          <h3 style="margin:0; font-size:1.08rem;">${esc(editingItem ? loc('modal_edit_title') : loc('modal_add_title'))}</h3>
          <button type="button" class="plux-v71-action-btn" onclick="document.getElementById('plux-v71-group-exp-modal').remove()">✕</button>
        </div>
        <input id="plux-v71-gg-edit-id" type="hidden" value="${esc(editingItem ? editingItem.id : '')}">
        <div style="display:flex; flex-direction:column; gap:10px;">
          <input id="plux-v71-gg-title" type="text" value="${esc(editingItem ? editingItem.concepto : '')}" placeholder="${esc(loc('ph_title'))}" style="padding:10px; border-radius:10px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.4); color:var(--texto,#fff);">
          <div style="display:grid; grid-template-columns:1fr 110px; gap:8px;">
            <input id="plux-v71-gg-amount" type="number" step="any" min="0" value="${editingItem ? esc(editingItem.monto) : ''}" placeholder="${esc(loc('ph_amount'))}" style="padding:10px; border-radius:10px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.4); color:var(--texto,#fff);">
            <select id="plux-v71-gg-currency" style="padding:10px; border-radius:10px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.6); color:var(--texto,#fff);">${curOptions}</select>
          </div>
          <div>
            <label style="font-size:0.78rem; color:var(--gris,#94a3b8); display:block; margin-bottom:4px;">${esc(loc('label_who_paid'))}</label>
            <select id="plux-v71-gg-payer" style="width:100%; padding:10px; border-radius:10px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.6); color:var(--texto,#fff);">${payerOptions}</select>
          </div>
          <div>
            <label style="font-size:0.78rem; color:var(--gris,#94a3b8); display:block; margin-bottom:6px;">${esc(loc('label_split_between'))}</label>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">${splitChecks}</div>
          </div>
          <button type="button" class="plux-v71-action-btn plux-v71-action-btn--primary" style="justify-content:center; padding:11px !important; font-size:0.88rem !important;" onclick="window.PluxSplitwise.submitGroupExpenseModal()">${esc(editingItem ? loc('btn_save_edit') : loc('btn_save_new'))}</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function openEditGroupExpenseModal(id) {
    return openAddGroupExpenseModal(id);
  }

  function submitGroupExpenseModal() {
    const editId = document.getElementById('plux-v71-gg-edit-id')?.value?.trim() || '';
    const concepto = document.getElementById('plux-v71-gg-title')?.value?.trim();
    const monto = parseFloat(document.getElementById('plux-v71-gg-amount')?.value || '0');
    const moneda = document.getElementById('plux-v71-gg-currency')?.value || getTargetCurrency();
    const pagadoPor = document.getElementById('plux-v71-gg-payer')?.value || 'Todos';
    const members = Array.from(document.querySelectorAll('.plux-v71-gg-member:checked')).map((el) => el.value);

    if (!concepto || !(monto > 0) || members.length === 0) {
      if (typeof root.showToast === 'function') root.showToast(loc('err_fill_fields'), 'info');
      return;
    }

    if (editId) {
      updateGroupExpense(editId, { concepto, monto, moneda, pagadoPor, divididoEntre: members });
    } else {
      addGroupExpense({ concepto, monto, moneda, pagadoPor, divididoEntre: members });
    }
    document.getElementById('plux-v71-group-exp-modal')?.remove();
  }

  // ---------------------------------------------------------------------------
  // 4. RENDER EN RESUMEN -> PRESUPUESTO Y TABLA DE GASTOS
  // ---------------------------------------------------------------------------
  function renderPanel() {
    if (typeof document === 'undefined') return;
    const container = document.getElementById('presupuesto-balances-list') || document.getElementById('resumen-gastos-lista');
    if (!container) return;

    let wrap = document.getElementById('plux-splitwise-box');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'plux-splitwise-box';
      container.parentElement?.appendChild(wrap);
    }

    const { items, tripState, travelers, targetCur } = collectAllTripExpensesForSplit();
    const settlement = computeGroupSettlement(items, travelers, tripState.liquidaciones, defaultConvert, targetCur);
    const needsTravelerQuickAdd = forceShowTravelerForm || travelers.length <= 2 || travelers.some(isGenericTravelerName);

    let html = `
      <div class="plux-v71-split-card">
        <div class="plux-v71-split-header">
          <div>
            <h4 style="margin:0; font-size:1rem; font-weight:800;">${esc(loc('panel_title'))} (${esc(targetCur)})</h4>
            <span style="font-size:0.78rem; color:var(--gris, #94a3b8);">
              ${esc(loc('shared_total'))}: <strong>${fmtMoney(settlement.totalGroupSpend, targetCur)}</strong> · ${travelers.length} ${esc(loc('travelers_unit'))}
            </span>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button type="button" class="plux-v71-action-btn plux-v71-action-btn--primary" onclick="window.PluxSplitwise.openAddGroupExpenseModal()">${esc(loc('btn_add_expense'))}</button>
            <button type="button" class="plux-v71-action-btn" onclick="window.PluxSplitwise.toggleInlineTravelerForm()" title="${esc(loc('btn_add_traveler'))}">👤 ${esc(loc('btn_add_traveler'))}</button>
            <button type="button" class="plux-v71-action-btn" onclick="window.copiarLiquidacionPlux()">${esc(loc('btn_copy_wa'))}</button>
          </div>
        </div>
    `;

    if (needsTravelerQuickAdd) {
      html += `
        <div id="plux-v71-inline-traveler-bar" style="margin-bottom:12px; padding:10px 12px; border-radius:12px; background:rgba(255,255,255,0.04); border:1px solid var(--border, #334155); display:flex; flex-direction:column; gap:8px;">
          <div style="font-size:0.76rem; color:var(--gris, #94a3b8); font-weight:700;">${esc(loc('add_traveler_hint'))}</div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <input id="plux-v71-add-traveler-input" type="text" placeholder="${esc(loc('add_traveler_ph'))}" onkeydown="if(event.key==='Enter'){event.preventDefault();window.PluxSplitwise.addTravelerInline();}" style="flex:1 1 180px; min-width:150px; padding:7px 10px; border-radius:10px; border:1px solid var(--border, #334155); background:rgba(2,6,23,0.45); color:var(--texto, #fff); font-size:0.8rem;">
            <button type="button" id="plux-v71-add-traveler-btn" class="plux-v71-action-btn plux-v71-action-btn--accent" onclick="window.PluxSplitwise.addTravelerInline()">${esc(loc('btn_add_traveler'))}</button>
          </div>
        </div>
      `;
    }

    if (settlement.totalGroupSpend <= 0 && tripState.liquidaciones.length === 0) {
      html += `
        <div style="padding:12px 14px; border-radius:12px; background:rgba(99,102,241,0.08); border:1px dashed rgba(99,102,241,0.35); font-size:0.83rem; color:var(--gris, #94a3b8);">
          ${loc('empty_hint')}
        </div>
      `;
    } else {
      html += `<div class="plux-v71-split-grid">`;
      settlement.travelers.forEach((p) => {
        const paid = settlement.paidByPerson[p] || 0;
        const owed = settlement.owedByPerson[p] || 0;
        const net = settlement.netBalances[p] || 0;
        const netColor = net > 0.01 ? '#10b981' : (net < -0.01 ? '#ef4444' : 'var(--gris, #94a3b8)');
        const netTxt = net > 0.01
          ? `+${fmtMoney(net, targetCur)} (${loc('in_favor')})`
          : (net < -0.01 ? `-${fmtMoney(Math.abs(net), targetCur)} (${loc('owes')})` : loc('settled'));
        html += `
          <div class="plux-v71-person-tile">
            <strong style="font-size:0.9rem;">${esc(p)}</strong>
            <div style="font-size:0.75rem; color:var(--gris, #94a3b8);">${esc(loc('paid_label'))}: <strong>${fmtMoney(paid, targetCur)}</strong> · ${esc(loc('share_label'))}: <strong>${fmtMoney(owed, targetCur)}</strong></div>
            <div style="font-size:0.84rem; font-weight:800; color:${netColor};">${esc(netTxt)}</div>
          </div>
        `;
      });
      html += `</div>`;

      if (settlement.transfers.length === 0) {
        html += `<div style="padding:10px 12px; border-radius:10px; background:rgba(16,185,129,0.14); color:#10b981; font-weight:800; font-size:0.85rem; text-align:center;">${esc(loc('all_settled'))}</div>`;
      } else {
        html += `<div style="display:flex; flex-direction:column; gap:8px;">`;
        settlement.transfers.forEach((tr) => {
          html += `
            <div class="plux-v71-transfer-row">
              <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:0.88rem;">
                <span style="color:#ef4444;">${esc(tr.de)}</span>
                <span>➡️</span>
                <span style="color:#10b981;">${esc(tr.para)}</span>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                <strong style="font-size:0.94rem; color:#10b981;">${fmtMoney(tr.monto, targetCur)}</strong>
                <button type="button" class="plux-v71-action-btn plux-v71-action-btn--primary" onclick="window.PluxSplitwise.settleTransfer('${escJsArg(tr.de)}', '${escJsArg(tr.para)}', ${tr.monto})">${esc(loc('btn_mark_settled'))}</button>
              </div>
            </div>
          `;
        });
        html += `</div>`;
      }
    }

    if (tripState.gastosGrupales.length > 0) {
      html += `<div style="margin-top:14px;"><div style="font-size:0.78rem; font-weight:800; color:var(--gris, #94a3b8); margin-bottom:6px;">${esc(loc('quick_expenses_title'))}</div><div style="display:flex; flex-direction:column; gap:6px;">`;
      tripState.gastosGrupales.forEach((gg) => {
        const splitLen = Array.isArray(gg.divididoEntre) ? gg.divididoEntre.length : travelers.length;
        html += `
          <div class="plux-v71-transfer-row" style="padding:7px 10px;">
            <div style="font-size:0.8rem;">
              <strong>${esc(gg.concepto)}</strong> · <span style="color:var(--gris,#94a3b8);">${esc(loc('paid_by_short'))} ${esc(gg.pagadoPor)} · ${esc(loc('between_short'))} ${splitLen}</span>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <strong>${fmtMoney(gg.monto, gg.moneda || targetCur)}</strong>
              <button type="button" class="plux-v71-action-btn" onclick="window.PluxSplitwise.openEditGroupExpenseModal('${escJsArg(gg.id)}')" title="${esc(loc('btn_edit'))}" aria-label="${esc(loc('btn_edit'))}">✏️</button>
              <button type="button" class="plux-v71-action-btn" onclick="window.PluxSplitwise.deleteGroupExpense('${escJsArg(gg.id)}')" title="${esc(loc('btn_delete'))}" aria-label="${esc(loc('btn_delete'))}">🗑️</button>
            </div>
          </div>
        `;
      });
      html += `</div></div>`;
    }

    if (tripState.liquidaciones.length > 0) {
      html += `<div style="margin-top:12px;"><div style="font-size:0.78rem; font-weight:800; color:var(--gris, #94a3b8); margin-bottom:6px;">${esc(loc('settled_payments_title'))}</div><div style="display:flex; flex-direction:column; gap:5px;">`;
      tripState.liquidaciones.forEach((l) => {
        html += `
          <div class="plux-v71-transfer-row" style="padding:6px 10px; opacity:0.88;">
            <span style="font-size:0.78rem;">✅ <strong>${esc(l.de)}</strong> ${esc(loc('paid_to'))} <strong>${esc(l.para)}</strong> ${l.fecha ? `(${esc(l.fecha)})` : ''}</span>
            <div style="display:flex; align-items:center; gap:8px;">
              <strong style="font-size:0.82rem;">${fmtMoney(l.monto, l.moneda || targetCur)}</strong>
              <button type="button" class="plux-v71-action-btn" onclick="window.PluxSplitwise.undoSettlement('${escJsArg(l.id)}')" title="${esc(loc('btn_undo'))}" aria-label="${esc(loc('btn_undo'))}">↩️</button>
            </div>
          </div>
        `;
      });
      html += `</div></div>`;
    }

    html += `</div>`;
    wrap.innerHTML = html;

    enhanceExpenseTableWithSplitButtons(tripState, travelers);
  }

  function enhanceExpenseTableWithSplitButtons(tripState, travelers) {
    if (typeof document === 'undefined') return;
    const table = document.querySelector('#resumen-gastos-tabla table.tabla-gastos');
    if (!table) return;
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    rows.forEach((tr) => {
      const triggerEl = tr.querySelector('select[onchange*="actualizarGastoResumen"], input[onchange*="actualizarGastoResumen"], select');
      const onchangeSrc = triggerEl?.getAttribute('onchange') || '';
      const key = parseExpenseKeyFromOnchange(onchangeSrc);
      if (!key) return;

      const selected = Array.isArray(tripState.divisionesOverrides?.[key])
        ? tripState.divisionesOverrides[key]
        : travelers;
      const label = selected.length === travelers.length
        ? `👥 ${loc('all_short')} (${travelers.length})`
        : `👥 ${selected.length}/${travelers.length}`;

      const tdPayer = tr.querySelector('td:nth-child(5)');
      if (!tdPayer) return;

      let btn = tdPayer.querySelector('.plux-v71-split-chip-btn');
      if (!btn) {
        btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'plux-v71-split-chip-btn';
        btn.style.marginLeft = '6px';
        tdPayer.appendChild(btn);
      }
      btn.dataset.expenseKey = key;
      btn.textContent = label;
      btn.onclick = () => openSplitPickerModal(key);
      tr.dataset.pluxV71SplitBound = '1';
    });
  }

  function installHooks() {
    root.calcularLiquidacionDeudasPlux = function () {
      const { items, tripState, travelers, targetCur } = collectAllTripExpensesForSplit();
      const res = computeGroupSettlement(items, travelers, tripState.liquidaciones, defaultConvert, targetCur);
      return {
        participantes: res.travelers,
        aportes: res.paidByPerson,
        saldos: res.netBalances,
        totalPagadoIndividual: res.totalGroupSpend,
        cuotaIdeal: res.travelers.length ? res.totalGroupSpend / res.travelers.length : 0,
        transferencias: res.transfers
      };
    };

    root.copiarLiquidacionPlux = function () {
      const data = root.calcularLiquidacionDeudasPlux();
      if (!data || data.transferencias.length === 0) {
        if (typeof root.showToast === 'function') root.showToast(loc('toast_all_clear'), 'info');
        return;
      }
      const cur = getTargetCurrency();
      const lines = [
        loc('wa_header', { cur }),
        `${loc('wa_total')}: ${fmtMoney(data.totalPagadoIndividual, cur)}`,
        '',
        loc('wa_transfers')
      ];
      data.transferencias.forEach((tr) => {
        lines.push(`• *${tr.de}* ➡️ *${tr.para}*: *${fmtMoney(tr.monto, cur)}*`);
      });
      lines.push('', loc('wa_footer'));
      const txt = lines.join('\n');
      if (root.PluxMobileBridge && typeof root.PluxMobileBridge.copyText === 'function') {
        root.PluxMobileBridge.copyText(txt);
        if (typeof root.showToast === 'function') root.showToast(loc('toast_copied_wa'), 'success');
      } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(txt).then(() => {
          if (typeof root.showToast === 'function') root.showToast(loc('toast_copied_wa'), 'success');
        }).catch(() => {});
      }
    };

    // Hook sobre saveTrips para embeber groupFinance en cada viaje guardado/exportado
    if (typeof root.saveTrips === 'function' && !root.saveTrips._pluxV71SplitHooked) {
      const origSaveTrips = root.saveTrips;
      const wrappedSaveTrips = function (tripsArr, sync) {
        if (Array.isArray(tripsArr) && !isEmbeddingTrips) {
          const enriched = embedGroupFinanceIntoTrips(tripsArr);
          return origSaveTrips.call(this, enriched, sync);
        }
        return origSaveTrips.apply(this, arguments);
      };
      wrappedSaveTrips._pluxV71SplitHooked = true;
      root.saveTrips = wrappedSaveTrips;
    }

    // Hook sobre pluxCoreAutoSave para adjuntar groupFinance al viaje activo y al respaldo collab
    if (typeof root.pluxCoreAutoSave === 'function' && !root.pluxCoreAutoSave._pluxV71SplitHooked) {
      const origCoreSave = root.pluxCoreAutoSave;
      const wrappedCoreSave = function () {
        const res = origCoreSave.apply(this, arguments);
        try {
          if (res && res.saved && res.tripData) {
            const key = String(res.tripData.syncCode || res.tripData.tripId || getActiveTripKey());
            const gf = getTripFinanceState(key);
            if (hasFinanceData(gf)) {
              res.tripData.groupFinance = gf;
              if (typeof localStorage !== 'undefined') {
                const pendingRaw = localStorage.getItem('Plux_Pending_Collab_Sync');
                if (pendingRaw && res.tripData.syncCode) {
                  const parsed = JSON.parse(pendingRaw);
                  if (parsed && parsed.syncCode === res.tripData.syncCode) {
                    const inner = typeof parsed.data === 'string' ? JSON.parse(parsed.data) : parsed.data;
                    if (inner && typeof inner === 'object') {
                      inner.groupFinance = gf;
                      parsed.data = JSON.stringify(inner);
                      localStorage.setItem('Plux_Pending_Collab_Sync', JSON.stringify(parsed));
                    }
                  }
                }
              }
            }
          }
        } catch (e) {}
        return res;
      };
      wrappedCoreSave._pluxV71SplitHooked = true;
      root.pluxCoreAutoSave = wrappedCoreSave;
    }

    // Hook sobre importarViajeString para hidratar groupFinance desde viajes compartidos/exportados
    if (typeof root.importarViajeString === 'function' && !root.importarViajeString._pluxV71SplitHooked) {
      const origImport = root.importarViajeString;
      const wrappedImport = function (jsonStr, triggerSave) {
        try {
          const parsed = typeof jsonStr === 'string' ? JSON.parse(jsonStr) : jsonStr;
          if (parsed && typeof parsed === 'object' && hasFinanceData(parsed.groupFinance)) {
            hydrateGroupFinanceFromTrip(parsed);
          }
        } catch (e) {}
        return origImport.apply(this, arguments);
      };
      wrappedImport._pluxV71SplitHooked = true;
      root.importarViajeString = wrappedImport;
    }

    // Hook sobre cargarViaje para hidratar groupFinance al cambiar de viaje local
    if (typeof root.cargarViaje === 'function' && !root.cargarViaje._pluxV71SplitHooked) {
      const origCargar = root.cargarViaje;
      const wrappedCargar = function (index) {
        try {
          if (typeof root.getStoredTrips === 'function') {
            const trips = root.getStoredTrips();
            if (Array.isArray(trips) && trips[index] && hasFinanceData(trips[index].groupFinance)) {
              hydrateGroupFinanceFromTrip(trips[index]);
            }
          }
        } catch (e) {}
        return origCargar.apply(this, arguments);
      };
      wrappedCargar._pluxV71SplitHooked = true;
      root.cargarViaje = wrappedCargar;
    }

    // Hook sobre renderResumen
    if (typeof root.renderResumen === 'function' && !root.renderResumen._pluxV71SplitHooked) {
      const orig = root.renderResumen;
      const wrapped = function () {
        const res = orig.apply(this, arguments);
        setTimeout(renderPanel, 70);
        return res;
      };
      wrapped._pluxV71SplitHooked = true;
      root.renderResumen = wrapped;
    }

    // Hook sobre setLanguage para refrescar etiquetas del panel si está visible
    if (typeof root.setLanguage === 'function' && !root.setLanguage._pluxV71SplitHooked) {
      const origSetLang = root.setLanguage;
      const wrappedSetLang = function () {
        const res = origSetLang.apply(this, arguments);
        try {
          if (typeof document !== 'undefined' && document.getElementById('plux-splitwise-box')) {
            renderPanel();
          }
        } catch (e) {}
        return res;
      };
      wrappedSetLang._pluxV71SplitHooked = true;
      root.setLanguage = wrappedSetLang;
    }
  }

  const PluxSplitwise = {
    computeGroupSettlement,
    buildExpenseSplitKey,
    parseExpenseKeyFromOnchange,
    collectAllTripExpensesForSplit,
    enhanceExpenseTableWithSplitButtons,
    getTripFinanceState,
    saveTripFinanceState,
    embedGroupFinanceIntoTrips,
    hydrateGroupFinanceFromTrip,
    addGroupExpense,
    updateGroupExpense,
    deleteGroupExpense,
    addTravelerInline,
    toggleInlineTravelerForm,
    settleTransfer,
    undoSettlement,
    toggleExpenseSplitMember,
    openSplitPickerModal,
    openAddGroupExpenseModal,
    openEditGroupExpenseModal,
    submitGroupExpenseModal,
    renderPanel,
    installHooks,
    t: loc,
    getLang
  };

  root.PluxSplitwise = PluxSplitwise;

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        installHooks();
        setTimeout(installHooks, 800);
      });
    } else {
      installHooks();
      setTimeout(installHooks, 800);
    }
  }
})(typeof window !== 'undefined' ? window : globalThis);
