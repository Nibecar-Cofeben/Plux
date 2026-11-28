/**
 * PLUX v7.1 — BÓVEDA LIGERA DE DOCUMENTOS POR BLOQUE & INGESTA RÁPIDA (Google/Apple Maps / Texto)
 * - Adjuntos ligeros por bloque del itinerario (imágenes comprimidas, PDFs en IndexedDB, QR escaneable offline, links y vouchers)
 * - Gestión limpia de Blob URLs (revokeObjectURL), pegado de capturas con Ctrl+V y compatibilidad nativa PluxMobileBridge
 * - Parser puro de enlaces de Google Maps (/place/, !3d!4d, !2d!3d, /dir/, ?q=, geo:, maps.app.goo.gl), Apple Maps y coordenadas planas
 * - Modal de ingesta rápida con botón Pegar, geocoding por lotes, integración opcional TSP y soporte 5 idiomas (es/en/fr/de/it)
 * - Hook en Pluxy ([ACCION:IMPORTAR_LUGARES:...] y detección de links en chatSend)
 */
(function (root) {
  'use strict';

  const MAX_FILE_BYTES = 8 * 1024 * 1024;
  const WALLET_KEY = 'Plux_Reservas_Wallet_V1';

  const ingestState = {
    parsedItems: [],
    destIdx: 0,
    diaIdx: 0
  };

  let activeViewerObjectUrl = null;
  let activeViewerKeyHandler = null;
  let activeVaultPasteHandler = null;

  // ---------------------------------------------------------------------------
  // 0. LOCALIZACIÓN LIGERA (5 IDIOMAS: es / en / fr / de / it)
  // ---------------------------------------------------------------------------
  const I18N = {
    es: {
      shortLinkTitle: 'Enlace corto de Google Maps',
      placeCoords: 'Lugar ({lat}, {lon})',
      pinCoords: 'Pin ({lat}, {lon})',
      ingestTitle: '📥 Importar lugares desde Google Maps o texto',
      ingestPlaceholder: 'Pegá links de Google/Apple Maps (/place/, /dir/, ?q=), coordenadas (-34.6037, -58.3816) o una lista:\n1. Coliseo - 09:30 (2h)\n- Fontana di Trevi\nhttps://www.google.com/maps/place/Pantheon/@41.8986,12.4769,17z',
      pasteBtn: '📋 Pegar',
      tspLabel: '✨ Optimizar orden por cercanía (TSP)',
      analyzeBtn: '🔍 Analizar y ubicar coordenadas',
      ingestEmptyHint: 'Pegá enlaces de Google/Apple Maps, coordenadas o una lista y tocá <strong>Analizar</strong>.',
      addStopsBtn: '➕ Agregar {count} parada(s) al itinerario',
      addToItineraryBtn: '➕ Agregar al itinerario',
      cancelBtn: 'Cancelar',
      noGps: '⚠️ Sin GPS',
      minutesTitle: 'Minutos',
      noDestinations: 'Sin destinos',
      destinationFallback: 'Destino {num}',
      dayLabel: 'Día {num}',
      quickImportedNote: 'Importado rápido',
      addedByPluxyNote: 'Agregado por Pluxy',
      toastCreateDestFirst: 'Creá un destino antes de importar paradas.',
      toastStopsAdded: '📍 Se agregaron {count} parada(s) a {dest}.',
      toastPastedFromClipboard: '📋 Contenido pegado desde el portapapeles.',
      toastClipboardEmpty: 'El portapapeles está vacío.',
      toastClipboardFallback: 'Tocá el cuadro de texto y usá Ctrl+V / Pegar.',
      toastFileTooLarge: 'El archivo supera el límite ligero de 8 MB.',
      toastInvalidUrl: 'Ingresá una URL válida (https://...).',
      toastPastedAttachment: '📋 Captura guardada en la bóveda offline.',
      toastMobileOpenFallback: 'No se pudo abrir el archivo en el visor nativo.',
      vaultModalTitle: '🔐 Bóveda offline del bloque',
      activityFallback: 'Actividad',
      vaultUploadLabel: '📎 Subir captura QR, entrada o PDF (offline IndexedDB)',
      vaultPasteHint: '💡 Tip: También podés pegar una captura de QR o boarding pass con Ctrl+V.',
      vaultQrNamePh: 'Nombre (Ej: Boarding pass)',
      vaultQrCodePh: 'Código reserva / texto QR',
      vaultQrDefaultLabel: 'Pase / Código QR',
      vaultCreateQrBtn: '📱 Crear QR',
      vaultLinkNamePh: 'Título enlace',
      vaultLinkDefaultLabel: 'Reserva online',
      vaultAddLinkBtn: '🔗 Enlace',
      vaultWalletPlaceholder: 'Vincular voucher desde Billetera...',
      vaultWalletLinkBtn: '🎫 Vincular',
      vaultEmpty: 'Todavía no hay pases, QRs ni PDFs guardados en este bloque.',
      vaultViewBtn: 'Ver',
      vaultBtnEmpty: '📎 Bóveda',
      vaultBtnDocs: '🎫 {count} doc{s}',
      vaultQrOfflineNote: 'Disponible 100% sin conexión',
      vaultMissingBinary: 'El archivo binario no está almacenado en este dispositivo.',
      vaultDownloadPdf: '⬇️ Descargar PDF',
      vaultOpenPdfNative: '📄 Abrir PDF',
      vaultShareNative: '📤 Compartir',
      vaultNativePdfHint: 'PDF guardado offline en este dispositivo. Abrilo o compartilo con tu visor nativo.',
      vaultNoCode: 'Sin código',
      vaultReservationFallback: 'Reserva',
      vaultDocumentFallback: 'Documento',
      chatDetectedMaps: '📍 Detectamos enlaces/lugares de mapas en tu mensaje.',
      chatImportBtn: '📥 Importar al itinerario'
    },
    en: {
      shortLinkTitle: 'Google Maps short link',
      placeCoords: 'Place ({lat}, {lon})',
      pinCoords: 'Pin ({lat}, {lon})',
      ingestTitle: '📥 Import places from Google Maps or text',
      ingestPlaceholder: 'Paste Google/Apple Maps links (/place/, /dir/, ?q=), coordinates (-34.6037, -58.3816), or a list:\n1. Colosseum - 09:30 (2h)\n- Trevi Fountain\nhttps://www.google.com/maps/place/Pantheon/@41.8986,12.4769,17z',
      pasteBtn: '📋 Paste',
      tspLabel: '✨ Optimize stop order by proximity (TSP)',
      analyzeBtn: '🔍 Analyze & locate coordinates',
      ingestEmptyHint: 'Paste Google/Apple Maps links, coordinates, or a list and tap <strong>Analyze</strong>.',
      addStopsBtn: '➕ Add {count} stop(s) to itinerary',
      addToItineraryBtn: '➕ Add to itinerary',
      cancelBtn: 'Cancel',
      noGps: '⚠️ No GPS',
      minutesTitle: 'Minutes',
      noDestinations: 'No destinations',
      destinationFallback: 'Destination {num}',
      dayLabel: 'Day {num}',
      quickImportedNote: 'Quick imported',
      addedByPluxyNote: 'Added by Pluxy',
      toastCreateDestFirst: 'Create a destination before importing stops.',
      toastStopsAdded: '📍 Added {count} stop(s) to {dest}.',
      toastPastedFromClipboard: '📋 Pasted content from clipboard.',
      toastClipboardEmpty: 'Clipboard is empty.',
      toastClipboardFallback: 'Tap the text box and press Ctrl+V / Paste.',
      toastFileTooLarge: 'File exceeds the lightweight 8 MB limit.',
      toastInvalidUrl: 'Enter a valid URL (https://...).',
      toastPastedAttachment: '📋 Screenshot saved to the offline vault.',
      toastMobileOpenFallback: 'Could not open the file in the native viewer.',
      vaultModalTitle: '🔐 Block offline vault',
      activityFallback: 'Activity',
      vaultUploadLabel: '📎 Upload QR screenshot, ticket or PDF (offline IndexedDB)',
      vaultPasteHint: '💡 Tip: You can also paste a QR or boarding pass screenshot with Ctrl+V.',
      vaultQrNamePh: 'Name (e.g., Boarding pass)',
      vaultQrCodePh: 'Booking code / QR text',
      vaultQrDefaultLabel: 'Pass / QR Code',
      vaultCreateQrBtn: '📱 Create QR',
      vaultLinkNamePh: 'Link title',
      vaultLinkDefaultLabel: 'Online booking',
      vaultAddLinkBtn: '🔗 Link',
      vaultWalletPlaceholder: 'Link voucher from Wallet...',
      vaultWalletLinkBtn: '🎫 Link',
      vaultEmpty: 'No passes, QRs, or PDFs saved in this block yet.',
      vaultViewBtn: 'View',
      vaultBtnEmpty: '📎 Vault',
      vaultBtnDocs: '🎫 {count} doc{s}',
      vaultQrOfflineNote: 'Available 100% offline',
      vaultMissingBinary: 'The binary file is not stored on this device.',
      vaultDownloadPdf: '⬇️ Download PDF',
      vaultOpenPdfNative: '📄 Open PDF',
      vaultShareNative: '📤 Share',
      vaultNativePdfHint: 'PDF saved offline on this device. Open or share it with your native viewer.',
      vaultNoCode: 'No code',
      vaultReservationFallback: 'Booking',
      vaultDocumentFallback: 'Document',
      chatDetectedMaps: '📍 We detected map links/places in your message.',
      chatImportBtn: '📥 Import to itinerary'
    },
    fr: {
      shortLinkTitle: 'Lien court Google Maps',
      placeCoords: 'Lieu ({lat}, {lon})',
      pinCoords: 'Pin ({lat}, {lon})',
      ingestTitle: '📥 Importer des lieux depuis Maps ou du texte',
      ingestPlaceholder: 'Collez des liens Google/Apple Maps, des coordonnées (-34.6037, -58.3816) ou une liste :\n1. Colisée - 09:30 (2h)\n- Fontaine de Trevi\nhttps://www.google.com/maps/place/Pantheon/@41.8986,12.4769,17z',
      pasteBtn: '📋 Coller',
      tspLabel: '✨ Optimiser l’ordre par proximité (TSP)',
      analyzeBtn: '🔍 Analyser et géolocaliser',
      ingestEmptyHint: 'Collez des liens Google/Apple Maps, coordonnées ou une liste puis cliquez sur <strong>Analyser</strong>.',
      addStopsBtn: '➕ Ajouter {count} étape(s) à l’itinéraire',
      addToItineraryBtn: '➕ Ajouter à l’itinéraire',
      cancelBtn: 'Annuler',
      noGps: '⚠️ Sans GPS',
      minutesTitle: 'Minutes',
      noDestinations: 'Aucune destination',
      destinationFallback: 'Destination {num}',
      dayLabel: 'Jour {num}',
      quickImportedNote: 'Importation rapide',
      addedByPluxyNote: 'Ajouté par Pluxy',
      toastCreateDestFirst: 'Créez une destination avant d’importer des étapes.',
      toastStopsAdded: '📍 {count} étape(s) ajoutée(s) à {dest}.',
      toastPastedFromClipboard: '📋 Contenu collé depuis le presse-papiers.',
      toastClipboardEmpty: 'Le presse-papiers est vide.',
      toastClipboardFallback: 'Touchez la zone de texte et utilisez Ctrl+V / Coller.',
      toastFileTooLarge: 'Le fichier dépasse la limite légère de 8 Mo.',
      toastInvalidUrl: 'Saisissez une URL valide (https://...).',
      toastPastedAttachment: '📋 Capture enregistrée dans le coffre hors ligne.',
      toastMobileOpenFallback: 'Impossible d’ouvrir le fichier dans le lecteur natif.',
      vaultModalTitle: '🔐 Coffre hors ligne du bloc',
      activityFallback: 'Activité',
      vaultUploadLabel: '📎 Ajouter une capture QR, un billet ou un PDF (IndexedDB)',
      vaultPasteHint: '💡 Astuce : Collez aussi une capture QR ou carte d’embarquement avec Ctrl+V.',
      vaultQrNamePh: 'Nom (Ex : Carte d’embarquement)',
      vaultQrCodePh: 'Code réservation / texte QR',
      vaultQrDefaultLabel: 'Billet / Code QR',
      vaultCreateQrBtn: '📱 Créer QR',
      vaultLinkNamePh: 'Titre du lien',
      vaultLinkDefaultLabel: 'Réservation en ligne',
      vaultAddLinkBtn: '🔗 Lien',
      vaultWalletPlaceholder: 'Lier un voucher du Portefeuille...',
      vaultWalletLinkBtn: '🎫 Lier',
      vaultEmpty: 'Aucun billet, QR ou PDF enregistré dans ce bloc.',
      vaultViewBtn: 'Voir',
      vaultBtnEmpty: '📎 Coffre',
      vaultBtnDocs: '🎫 {count} doc{s}',
      vaultQrOfflineNote: 'Disponible 100 % hors ligne',
      vaultMissingBinary: 'Le fichier binaire n’est pas stocké sur cet appareil.',
      vaultDownloadPdf: '⬇️ Télécharger PDF',
      vaultOpenPdfNative: '📄 Ouvrir PDF',
      vaultShareNative: '📤 Partager',
      vaultNativePdfHint: 'PDF enregistré hors ligne sur cet appareil. Ouvrez-le ou partagez-le avec votre lecteur natif.',
      vaultNoCode: 'Sans code',
      vaultReservationFallback: 'Réservation',
      vaultDocumentFallback: 'Document',
      chatDetectedMaps: '📍 Nous avons détecté des liens ou lieux de carte dans votre message.',
      chatImportBtn: '📥 Importer dans l’itinéraire'
    },
    de: {
      shortLinkTitle: 'Google Maps-Kurzlink',
      placeCoords: 'Ort ({lat}, {lon})',
      pinCoords: 'Pin ({lat}, {lon})',
      ingestTitle: '📥 Orte aus Google Maps oder Text importieren',
      ingestPlaceholder: 'Google/Apple Maps-Links, Koordinaten (-34.6037, -58.3816) oder eine Liste einfügen:\n1. Kolosseum - 09:30 (2h)\n- Trevi-Brunnen\nhttps://www.google.com/maps/place/Pantheon/@41.8986,12.4769,17z',
      pasteBtn: '📋 Einfügen',
      tspLabel: '✨ Reihenfolge nach Nähe optimieren (TSP)',
      analyzeBtn: '🔍 Analysieren & Koordinaten finden',
      ingestEmptyHint: 'Füge Google/Apple Maps-Links, Koordinaten oder eine Liste ein und tippe auf <strong>Analysieren</strong>.',
      addStopsBtn: '➕ {count} Stopp(s) zum Reiseplan hinzufügen',
      addToItineraryBtn: '➕ Zum Reiseplan hinzufügen',
      cancelBtn: 'Abbrechen',
      noGps: '⚠️ Kein GPS',
      minutesTitle: 'Minuten',
      noDestinations: 'Keine Reiseziele',
      destinationFallback: 'Reiseziel {num}',
      dayLabel: 'Tag {num}',
      quickImportedNote: 'Schnellimport',
      addedByPluxyNote: 'Von Pluxy hinzugefügt',
      toastCreateDestFirst: 'Erstelle zuerst ein Reiseziel, bevor du Stopps importierst.',
      toastStopsAdded: '📍 {count} Stopp(s) zu {dest} hinzugefügt.',
      toastPastedFromClipboard: '📋 Text aus der Zwischenablage eingefügt.',
      toastClipboardEmpty: 'Die Zwischenablage ist leer.',
      toastClipboardFallback: 'Tippe in das Textfeld und nutze Strg+V / Einfügen.',
      toastFileTooLarge: 'Die Datei überschreitet das Limit von 8 MB.',
      toastInvalidUrl: 'Gib eine gültige URL ein (https://...).',
      toastPastedAttachment: '📋 Screenshot im Offline-Tresor gespeichert.',
      toastMobileOpenFallback: 'Datei konnte nicht im nativen Viewer geöffnet werden.',
      vaultModalTitle: '🔐 Offline-Tresor des Blocks',
      activityFallback: 'Aktivität',
      vaultUploadLabel: '📎 QR-Screenshot, Ticket oder PDF hochladen (IndexedDB)',
      vaultPasteHint: '💡 Tipp: Du kannst einen QR- oder Boardingpass-Screenshot direkt mit Strg+V einfügen.',
      vaultQrNamePh: 'Name (z. B. Bordkarte)',
      vaultQrCodePh: 'Buchungscode / QR-Text',
      vaultQrDefaultLabel: 'Ticket / QR-Code',
      vaultCreateQrBtn: '📱 QR erstellen',
      vaultLinkNamePh: 'Link-Titel',
      vaultLinkDefaultLabel: 'Online-Buchung',
      vaultAddLinkBtn: '🔗 Link',
      vaultWalletPlaceholder: 'Voucher aus Wallet verknüpfen...',
      vaultWalletLinkBtn: '🎫 Verknüpfen',
      vaultEmpty: 'Noch keine Tickets, QRs oder PDFs in diesem Block gespeichert.',
      vaultViewBtn: 'Ansehen',
      vaultBtnEmpty: '📎 Tresor',
      vaultBtnDocs: '🎫 {count} Dok{s}',
      vaultQrOfflineNote: '100 % offline verfügbar',
      vaultMissingBinary: 'Die Binärdatei ist nicht auf diesem Gerät gespeichert.',
      vaultDownloadPdf: '⬇️ PDF herunterladen',
      vaultOpenPdfNative: '📄 PDF öffnen',
      vaultShareNative: '📤 Teilen',
      vaultNativePdfHint: 'PDF offline auf diesem Gerät gespeichert. Mit dem nativen Viewer öffnen oder teilen.',
      vaultNoCode: 'Kein Code',
      vaultReservationFallback: 'Buchung',
      vaultDocumentFallback: 'Dokument',
      chatDetectedMaps: '📍 Wir haben Kartenlinks oder Orte in deiner Nachricht erkannt.',
      chatImportBtn: '📥 In Reiseplan importieren'
    },
    it: {
      shortLinkTitle: 'Link breve Google Maps',
      placeCoords: 'Luogo ({lat}, {lon})',
      pinCoords: 'Pin ({lat}, {lon})',
      ingestTitle: '📥 Importa luoghi da Google Maps o testo',
      ingestPlaceholder: 'Incolla link Google/Apple Maps, coordinate (-34.6037, -58.3816) o una lista:\n1. Colosseo - 09:30 (2h)\n- Fontana di Trevi\nhttps://www.google.com/maps/place/Pantheon/@41.8986,12.4769,17z',
      pasteBtn: '📋 Incolla',
      tspLabel: '✨ Ottimizza ordine per vicinanza (TSP)',
      analyzeBtn: '🔍 Analizza e trova coordinate',
      ingestEmptyHint: 'Incolla link Google/Apple Maps, coordinate o una lista e tocca <strong>Analizza</strong>.',
      addStopsBtn: '➕ Aggiungi {count} tappa/e all’itinerario',
      addToItineraryBtn: '➕ Aggiungi all’itinerario',
      cancelBtn: 'Annulla',
      noGps: '⚠️ Senza GPS',
      minutesTitle: 'Minuti',
      noDestinations: 'Nessuna destinazione',
      destinationFallback: 'Destinazione {num}',
      dayLabel: 'Giorno {num}',
      quickImportedNote: 'Importazione rapida',
      addedByPluxyNote: 'Aggiunto da Pluxy',
      toastCreateDestFirst: 'Crea una destinazione prima di importare tappe.',
      toastStopsAdded: '📍 Aggiunte {count} tappa/e a {dest}.',
      toastPastedFromClipboard: '📋 Testo incollato dagli appunti.',
      toastClipboardEmpty: 'Gli appunti sono vuoti.',
      toastClipboardFallback: 'Tocca il campo di testo e usa Ctrl+V / Incolla.',
      toastFileTooLarge: 'Il file supera il limite leggero di 8 MB.',
      toastInvalidUrl: 'Inserisci un URL valido (https://...).',
      toastPastedAttachment: '📋 Screenshot salvato nella cassaforte offline.',
      toastMobileOpenFallback: 'Impossibile aprire il file nel visualizzatore nativo.',
      vaultModalTitle: '🔐 Cassaforte offline del blocco',
      activityFallback: 'Attività',
      vaultUploadLabel: '📎 Carica screenshot QR, biglietto o PDF (offline IndexedDB)',
      vaultPasteHint: '💡 Suggerimento: Puoi anche incollare uno screenshot QR o carta d’imbarco con Ctrl+V.',
      vaultQrNamePh: 'Nome (Es: Carta d’imbarco)',
      vaultQrCodePh: 'Codice prenotazione / testo QR',
      vaultQrDefaultLabel: 'Pass / Codice QR',
      vaultCreateQrBtn: '📱 Crea QR',
      vaultLinkNamePh: 'Titolo link',
      vaultLinkDefaultLabel: 'Prenotazione online',
      vaultAddLinkBtn: '🔗 Link',
      vaultWalletPlaceholder: 'Collega voucher dal Portafoglio...',
      vaultWalletLinkBtn: '🎫 Collega',
      vaultEmpty: 'Nessun pass, QR o PDF salvato ancora in questo blocco.',
      vaultViewBtn: 'Apri',
      vaultBtnEmpty: '📎 Cassaforte',
      vaultBtnDocs: '🎫 {count} doc{s}',
      vaultQrOfflineNote: 'Disponibile 100% offline',
      vaultMissingBinary: 'Il file binario non è salvato su questo dispositivo.',
      vaultDownloadPdf: '⬇️ Scarica PDF',
      vaultOpenPdfNative: '📄 Apri PDF',
      vaultShareNative: '📤 Condividi',
      vaultNativePdfHint: 'PDF salvato offline su questo dispositivo. Aprilo o condividilo con il visualizzatore nativo.',
      vaultNoCode: 'Senza codice',
      vaultReservationFallback: 'Prenotazione',
      vaultDocumentFallback: 'Documento',
      chatDetectedMaps: '📍 Abbiamo rilevato link o luoghi di mappe nel tuo messaggio.',
      chatImportBtn: '📥 Importa nell’itinerario'
    }
  };

  function getLang() {
    let langVal = '';
    try {
      if (typeof currentLang !== 'undefined' && currentLang) langVal = currentLang;
    } catch (e) {}
    if (!langVal && root.currentLang) langVal = root.currentLang;
    if (!langVal) {
      try {
        if (typeof localStorage !== 'undefined') langVal = localStorage.getItem('Plux_Lang') || '';
      } catch (e) {}
    }
    if (!langVal && typeof document !== 'undefined' && document.documentElement?.lang) {
      langVal = document.documentElement.lang;
    }
    const raw = String(langVal || 'es').trim().toLowerCase().slice(0, 2);
    return I18N[raw] ? raw : 'es';
  }

  function getDestinos() {
    try {
      if (typeof destinos !== 'undefined' && Array.isArray(destinos)) return destinos;
    } catch (e) {}
    return Array.isArray(root.destinos) ? root.destinos : [];
  }

  function getSyncCode() {
    try {
      if (typeof syncCode !== 'undefined' && typeof syncCode === 'string' && syncCode) return syncCode;
    } catch (e) {}
    return (typeof root.syncCode === 'string' && root.syncCode) || '';
  }

  function t(key, vars) {
    const lang = getLang();
    let str = (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;
    if (vars && typeof vars === 'object') {
      Object.keys(vars).forEach((k) => {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(vars[k]));
      });
    }
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

  function safeHttpUrl(raw) {
    const s = String(raw || '').trim();
    if (!s) return '';
    try {
      const u = new URL(s);
      if (u.protocol === 'http:' || u.protocol === 'https:') return u.href;
    } catch (e) {}
    return '';
  }

  function isValidCoord(lat, lon) {
    return (
      typeof lat === 'number' &&
      typeof lon === 'number' &&
      Number.isFinite(lat) &&
      Number.isFinite(lon) &&
      lat >= -90 && lat <= 90 &&
      lon >= -180 && lon <= 180
    );
  }

  function isPluxMobileBridgeActive() {
    if (!root.PluxMobileBridge) return false;
    if (typeof root.PluxMobileBridge.isNative === 'function') {
      try {
        return Boolean(root.PluxMobileBridge.isNative());
      } catch (e) {
        return false;
      }
    }
    return true;
  }

  function getActiveTripKey() {
    try {
      if (typeof root.getCurrentTripId === 'function') {
        const id = root.getCurrentTripId();
        if (id) return String(id);
      }
    } catch (e) {}
    return String(getSyncCode() || 'active_trip');
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve) => {
      if (!blob || typeof FileReader === 'undefined') {
        resolve('');
        return;
      }
      try {
        const reader = new FileReader();
        reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
        reader.onerror = () => resolve('');
        reader.readAsDataURL(blob);
      } catch (e) {
        resolve('');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 1. PARSERS PUROS DE GOOGLE/APPLE MAPS, COORDENADAS Y LISTAS (NODE VM SAFE)
  // ---------------------------------------------------------------------------
  function cleanDecodedPlaceName(raw) {
    if (!raw) return '';
    let s = String(raw);
    try { s = decodeURIComponent(s); } catch (e) {}
    s = s.replace(/\+/g, ' ').replace(/\s+/g, ' ').trim();
    if (/^-?\d+\.\d+\s*,\s*-?\d+\.\d+$/.test(s)) return '';
    return s;
  }

  function parseGoogleMapsUrl(rawUrl) {
    const urlStr = String(rawUrl || '').trim();
    if (!urlStr) return [];

    // 0a) Esquema geo:lat,lon (opcional ?q=Nombre)
    const geoMatch = urlStr.match(/^geo:\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)(?:\?(.+))?$/i);
    if (geoMatch) {
      const lat = parseFloat(geoMatch[1]);
      const lon = parseFloat(geoMatch[2]);
      if (!isValidCoord(lat, lon)) return [];
      let titulo = t('pinCoords', { lat: lat.toFixed(4), lon: lon.toFixed(4) });
      if (geoMatch[3]) {
        try {
          const sp = new URLSearchParams(geoMatch[3]);
          const qName = cleanDecodedPlaceName(sp.get('q') || '');
          if (qName) titulo = qName;
        } catch (e) {}
      }
      return [{
        titulo,
        lat,
        lon,
        gmapsUrl: `https://www.google.com/maps?q=${lat},${lon}`,
        needsLookup: false
      }];
    }

    // 0b) Coordenadas planas / WhatsApp: "-34.6037, -58.3816", "(-34.6037, -58.3816)", "@-34.6037,-58.3816"
    const plainCoordMatch = urlStr.match(/^\s*(?:@|\()?\s*(-?\d{1,2}\.\d+)\s*,\s*(-?\d{1,3}\.\d+)\s*\)?\s*$/);
    if (plainCoordMatch) {
      const lat = parseFloat(plainCoordMatch[1]);
      const lon = parseFloat(plainCoordMatch[2]);
      if (!isValidCoord(lat, lon)) return [];
      return [{
        titulo: t('pinCoords', { lat: lat.toFixed(4), lon: lon.toFixed(4) }),
        lat,
        lon,
        gmapsUrl: `https://www.google.com/maps?q=${lat},${lon}`,
        needsLookup: false
      }];
    }

    let u;
    try {
      u = new URL(urlStr);
    } catch (e) {
      return [];
    }

    const host = u.hostname.toLowerCase();

    // 0c) Enlaces cortos de Google Maps
    const isShort = host === 'maps.app.goo.gl' || (host === 'goo.gl' && u.pathname.startsWith('/maps'));
    if (isShort) {
      return [{
        titulo: t('shortLinkTitle'),
        lat: null,
        lon: null,
        gmapsUrl: u.href,
        needsLookup: true
      }];
    }

    // 0d) Enlaces de Apple Maps (maps.apple.com/?ll=lat,lon&q=Name, ?q=Name, ?sll=, ?coordinate=, ?daddr=)
    const isAppleMaps = host === 'maps.apple.com' || host.endsWith('.maps.apple.com');
    if (isAppleMaps) {
      let lat = null;
      let lon = null;
      let titulo = '';

      const coordCandidates = [
        u.searchParams.get('ll'),
        u.searchParams.get('coordinate'),
        u.searchParams.get('sll')
      ].filter(Boolean);

      for (const rawCoord of coordCandidates) {
        const cm = String(rawCoord).trim().match(/(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)/);
        if (cm) {
          const cLat = parseFloat(cm[1]);
          const cLon = parseFloat(cm[2]);
          if (isValidCoord(cLat, cLon)) {
            lat = cLat;
            lon = cLon;
            break;
          }
        }
      }

      const nameCandidates = [
        u.searchParams.get('q'),
        u.searchParams.get('name'),
        u.searchParams.get('address'),
        u.searchParams.get('daddr')
      ].filter(Boolean);

      for (const rawName of nameCandidates) {
        const trimmed = String(rawName).trim();
        const qCoord = trimmed.match(/^(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)$/);
        if (qCoord) {
          const cLat = parseFloat(qCoord[1]);
          const cLon = parseFloat(qCoord[2]);
          if (lat === null && isValidCoord(cLat, cLon)) {
            lat = cLat;
            lon = cLon;
          }
        } else if (!titulo) {
          titulo = cleanDecodedPlaceName(trimmed);
        }
      }

      if (!titulo && lat !== null && lon !== null) {
        titulo = t('placeCoords', { lat: lat.toFixed(4), lon: lon.toFixed(4) });
      }
      if (!titulo) return [];

      return [{
        titulo,
        lat,
        lon,
        gmapsUrl: u.href,
        needsLookup: lat === null || lon === null
      }];
    }

    const isGoogleMaps =
      host.includes('google.') &&
      (u.pathname.includes('/maps') ||
        u.searchParams.has('q') ||
        u.searchParams.has('query') ||
        u.searchParams.has('ll') ||
        u.searchParams.has('destination'));
    if (!isGoogleMaps) return [];

    const decodedHref = (() => { try { return decodeURIComponent(u.href); } catch (e) { return u.href; } })();

    // 1) Ruta /maps/dir/Parada1/Parada2/...
    const dirMatch = u.pathname.match(/\/maps\/dir\/(.+?)(?:\/@|\/data=|$)/i);
    if (dirMatch && dirMatch[1]) {
      const segments = dirMatch[1]
        .split('/')
        .map((seg) => cleanDecodedPlaceName(seg))
        .filter((seg) => seg && !seg.startsWith('@') && !seg.startsWith('data=') && seg.toLowerCase() !== 'am=t');
      if (segments.length > 0) {
        return segments.map((name) => {
          const coordInSeg = name.match(/^(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)$/);
          const cLat = coordInSeg ? parseFloat(coordInSeg[1]) : null;
          const cLon = coordInSeg ? parseFloat(coordInSeg[2]) : null;
          const validSegCoord = coordInSeg && isValidCoord(cLat, cLon);
          return {
            titulo: validSegCoord ? t('pinCoords', { lat: cLat.toFixed(4), lon: cLon.toFixed(4) }) : name,
            lat: validSegCoord ? cLat : null,
            lon: validSegCoord ? cLon : null,
            gmapsUrl: u.href,
            needsLookup: !validSegCoord
          };
        });
      }
    }

    // 2) Coordenadas exactas: !3dLAT!4dLNG -> !2dLNG!3dLAT -> @lat,lon
    let lat = null;
    let lon = null;
    const exact3d4d = decodedHref.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
    if (exact3d4d) {
      const cLat = parseFloat(exact3d4d[1]);
      const cLon = parseFloat(exact3d4d[2]);
      if (isValidCoord(cLat, cLon)) {
        lat = cLat;
        lon = cLon;
      }
    }
    if (lat === null) {
      const exact2d3d = decodedHref.match(/!2d(-?\d+(?:\.\d+)?)!3d(-?\d+(?:\.\d+)?)/);
      if (exact2d3d) {
        const cLon = parseFloat(exact2d3d[1]);
        const cLat = parseFloat(exact2d3d[2]);
        if (isValidCoord(cLat, cLon)) {
          lat = cLat;
          lon = cLon;
        }
      }
    }
    if (lat === null) {
      const atMatch = decodedHref.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
      if (atMatch) {
        const cLat = parseFloat(atMatch[1]);
        const cLon = parseFloat(atMatch[2]);
        if (isValidCoord(cLat, cLon)) {
          lat = cLat;
          lon = cLon;
        }
      }
    }

    // 3) Nombre desde /maps/place/NOMBRE/
    let titulo = '';
    const placeMatch = u.pathname.match(/\/maps\/place\/([^/@]+)/i);
    if (placeMatch && placeMatch[1]) {
      titulo = cleanDecodedPlaceName(placeMatch[1]);
    }

    // 4) Query params ?q=, ?query=, ?destination=, ?ll=
    const qParam = u.searchParams.get('q') || u.searchParams.get('query') || u.searchParams.get('destination') || '';
    const llParam = u.searchParams.get('ll') || '';
    if (lat === null && llParam) {
      const m = llParam.match(/(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)/);
      if (m) {
        const cLat = parseFloat(m[1]);
        const cLon = parseFloat(m[2]);
        if (isValidCoord(cLat, cLon)) { lat = cLat; lon = cLon; }
      }
    }
    if (qParam) {
      const qCoord = qParam.trim().match(/^(?:loc:)?\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)$/i);
      if (qCoord) {
        const cLat = parseFloat(qCoord[1]);
        const cLon = parseFloat(qCoord[2]);
        if (lat === null && isValidCoord(cLat, cLon)) { lat = cLat; lon = cLon; }
      } else if (!titulo) {
        titulo = cleanDecodedPlaceName(qParam);
      }
    }

    if (!titulo && lat !== null && lon !== null) {
      titulo = t('placeCoords', { lat: lat.toFixed(4), lon: lon.toFixed(4) });
    }

    if (!titulo) return [];

    return [{
      titulo,
      lat,
      lon,
      gmapsUrl: u.href,
      needsLookup: lat === null || lon === null
    }];
  }

  function extractTimeAndDurationFromLine(line) {
    let text = String(line || '').trim();
    let hora = '';
    let duracion = 60;

    // Hora HH:MM
    const timeMatch = text.match(/\b([01]?\d|2[0-3]):([0-5]\d)\b/);
    if (timeMatch) {
      hora = `${timeMatch[1].padStart(2, '0')}:${timeMatch[2]}`;
      text = text.replace(timeMatch[0], ' ');
    }

    // Duración ej: (2h), 90 min, 1.5h
    const durHours = text.match(/\(?\b(\d+(?:[.,]\d+)?)\s*(?:h|hs|hora|horas|hr|hrs|std)\b\)?/i);
    if (durHours) {
      duracion = Math.max(15, Math.round(parseFloat(durHours[1].replace(',', '.')) * 60));
      text = text.replace(durHours[0], ' ');
    } else {
      const durMins = text.match(/\(?\b(\d{2,3})\s*(?:min|mins|minutos|minutes|minuten|minuti|m)\b\)?/i);
      if (durMins) {
        duracion = Math.max(15, parseInt(durMins[1], 10));
        text = text.replace(durMins[0], ' ');
      }
    }

    // Coordenadas inline @lat,lon o (lat, lon) o lat, lon
    let lat = null;
    let lon = null;
    const coordMatch = text.match(/(?:@|\()?\s*(-?\d{1,2}\.\d{2,})\s*,\s*(-?\d{1,3}\.\d{2,})\s*\)?/);
    if (coordMatch) {
      const cLat = parseFloat(coordMatch[1]);
      const cLon = parseFloat(coordMatch[2]);
      if (isValidCoord(cLat, cLon)) {
        lat = cLat;
        lon = cLon;
        text = text.replace(coordMatch[0], ' ');
      }
    }

    // Limpiar viñetas, numeración y separadores residuales
    text = text
      .replace(/^[\s•*\-–—]+/, '')
      .replace(/^\d{1,2}[.)]\s*/, '')
      .replace(/^[\s\-–—:|]+|[\s\-–—:|]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    return { titulo: text, hora, duracion, lat, lon };
  }

  function parseLoosePlacesText(rawText) {
    const input = String(rawText || '').trim();
    if (!input) return [];

    const results = [];
    const lines = input.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

    lines.forEach((line) => {
      // Extraer URLs incrustadas en la línea
      const urlRegex = /(https?:\/\/[^\s]+|geo:-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?(?:\?[^\s]+)?)/gi;
      const urls = line.match(urlRegex) || [];

      if (urls.length > 0) {
        urls.forEach((u) => {
          const parsedUrlNodes = parseGoogleMapsUrl(u);
          if (parsedUrlNodes.length > 0) {
            const withoutUrl = line.replace(u, ' ').trim();
            const meta = extractTimeAndDurationFromLine(withoutUrl);
            parsedUrlNodes.forEach((node) => {
              results.push({
                titulo: (parsedUrlNodes.length === 1 && meta.titulo && node.needsLookup) ? meta.titulo : node.titulo,
                hora: meta.hora || '',
                duracion: meta.duracion || 60,
                lat: node.lat ?? meta.lat,
                lon: node.lon ?? meta.lon,
                gmapsUrl: node.gmapsUrl,
                needsLookup: (node.lat ?? meta.lat) == null || (node.lon ?? meta.lon) == null
              });
            });
          }
        });
        return;
      }

      // Si es una línea con múltiples lugares separados por coma o punto y coma (y no son coords)
      const hasCommas = line.includes(';') || (line.includes(',') && !/-?\d{1,2}\.\d{2,}\s*,\s*-?\d{1,3}\.\d{2,}/.test(line));
      const parts = hasCommas ? line.split(/[;,]/).map((s) => s.trim()).filter(Boolean) : [line];

      parts.forEach((part) => {
        const meta = extractTimeAndDurationFromLine(part);
        const hasCoords = meta.lat !== null && meta.lon !== null;
        if (meta.titulo && meta.titulo.length >= 2) {
          results.push({
            titulo: meta.titulo,
            hora: meta.hora,
            duracion: meta.duracion,
            lat: meta.lat,
            lon: meta.lon,
            gmapsUrl: hasCoords ? `https://www.google.com/maps?q=${meta.lat},${meta.lon}` : '',
            needsLookup: !hasCoords
          });
        } else if (hasCoords) {
          results.push({
            titulo: t('pinCoords', { lat: meta.lat.toFixed(4), lon: meta.lon.toFixed(4) }),
            hora: meta.hora,
            duracion: meta.duracion,
            lat: meta.lat,
            lon: meta.lon,
            gmapsUrl: `https://www.google.com/maps?q=${meta.lat},${meta.lon}`,
            needsLookup: false
          });
        }
      });
    });

    return results;
  }

  // ---------------------------------------------------------------------------
  // 2. MODAL DE INGESTA RÁPIDA + BOTÓN PEGAR + GEOCODING EN LOTES
  // ---------------------------------------------------------------------------
  async function pasteIntoIngestInput() {
    if (typeof document === 'undefined') return '';
    const textarea = document.getElementById('plux-v71-ingest-input');
    if (!textarea) return '';

    let text = '';
    let readOk = false;

    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.readText === 'function') {
      try {
        text = await navigator.clipboard.readText();
        readOk = true;
      } catch (e) {
        readOk = false;
      }
    }

    if (readOk) {
      const clean = String(text || '').trim();
      if (!clean) {
        textarea.focus();
        if (typeof root.showToast === 'function') root.showToast(t('toastClipboardEmpty'), 'info');
        return '';
      }
      const current = String(textarea.value || '').trim();
      textarea.value = current ? `${current}\n${clean}` : clean;
      if (typeof root.showToast === 'function') root.showToast(t('toastPastedFromClipboard'), 'success');
      void analyzeAndGeocodeIngestText();
      return clean;
    }

    // Fallback amable si el navegador o WebView restringe clipboard.readText()
    textarea.focus();
    if (typeof root.showToast === 'function') root.showToast(t('toastClipboardFallback'), 'info');
    return '';
  }

  async function analyzeAndGeocodeIngestText() {
    const raw = document.getElementById('plux-v71-ingest-input')?.value || '';
    const destIdx = parseInt(document.getElementById('plux-v71-ingest-dest')?.value || '0', 10) || 0;
    const diaIdx = parseInt(document.getElementById('plux-v71-ingest-day')?.value || '0', 10) || 0;
    ingestState.destIdx = destIdx;
    ingestState.diaIdx = diaIdx;

    const parsed = parseLoosePlacesText(raw);
    ingestState.parsedItems = parsed;
    renderIngestPreviewList();

    if (parsed.length === 0) return;

    const dest = getDestinos()[destIdx];
    const destName = dest?.nombre || '';
    const baseCoord = destName && typeof root.geocode === 'function' ? await root.geocode(destName) : null;

    // Geocoding en lotes de 3 para respetar límites de Photon
    const toLookup = parsed.filter((p) => p.lat == null || p.lon == null);
    for (let i = 0; i < toLookup.length; i += 3) {
      const batch = toLookup.slice(i, i + 3);
      await Promise.allSettled(batch.map(async (item) => {
        if (root.PluxRoutingMap && typeof root.PluxRoutingMap.geocodeEventPlace === 'function') {
          const coord = await root.PluxRoutingMap.geocodeEventPlace({ titulo: item.titulo }, destName, baseCoord);
          if (coord) {
            item.lat = coord.lat;
            item.lon = coord.lon;
            item.needsLookup = false;
          }
        }
      }));
      renderIngestPreviewList();
    }
  }

  function renderIngestPreviewList() {
    const box = document.getElementById('plux-v71-ingest-preview');
    const confirmBtn = document.getElementById('plux-v71-ingest-confirm');
    if (!box) return;

    if (ingestState.parsedItems.length === 0) {
      box.innerHTML = `<div style="font-size:0.8rem; color:var(--gris,#94a3b8); text-align:center; padding:12px;">${t('ingestEmptyHint')}</div>`;
      if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.textContent = t('addToItineraryBtn');
      }
      return;
    }

    if (confirmBtn) {
      confirmBtn.disabled = false;
      confirmBtn.textContent = t('addStopsBtn', { count: ingestState.parsedItems.length });
    }

    const minutesLabel = esc(t('minutesTitle'));
    const noGpsLabel = esc(t('noGps'));

    box.innerHTML = ingestState.parsedItems.map((item, idx) => {
      const hasCoords = typeof item.lat === 'number' && typeof item.lon === 'number';
      const coordBadge = hasCoords
        ? `<span style="font-size:0.7rem; color:#34d399; font-weight:700;">✅ ${item.lat.toFixed(3)},${item.lon.toFixed(3)}</span>`
        : `<span style="font-size:0.7rem; color:#fbbf24; font-weight:700;">${noGpsLabel}</span>`;
      return `
        <div class="plux-v71-ingest-row">
          <input type="text" value="${esc(item.titulo)}" onchange="window.PluxVaultIngest.updateIngestItem(${idx}, 'titulo', this.value)" style="padding:6px 8px; border-radius:8px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.45); color:var(--texto,#fff); font-size:0.8rem;">
          <input type="time" value="${esc(item.hora || '')}" onchange="window.PluxVaultIngest.updateIngestItem(${idx}, 'hora', this.value)" style="padding:5px; border-radius:8px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.45); color:var(--texto,#fff); font-size:0.78rem;">
          <input type="number" min="15" step="15" value="${item.duracion || 60}" onchange="window.PluxVaultIngest.updateIngestItem(${idx}, 'duracion', parseInt(this.value,10)||60)" style="padding:5px; border-radius:8px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.45); color:var(--texto,#fff); font-size:0.78rem;" title="${minutesLabel}">
          <div>${coordBadge}</div>
          <button type="button" class="plux-v71-action-btn" style="padding:4px 7px !important;" onclick="window.PluxVaultIngest.removeIngestItem(${idx})">×</button>
        </div>
      `;
    }).join('');
  }

  async function commitIngestedPlaces() {
    if (typeof root.checkEditPermission === 'function' && !root.checkEditPermission()) return;
    const destIdx = parseInt(document.getElementById('plux-v71-ingest-dest')?.value || String(ingestState.destIdx), 10) || 0;
    const diaIdx = parseInt(document.getElementById('plux-v71-ingest-day')?.value || String(ingestState.diaIdx), 10) || 0;
    const doTsp = Boolean(document.getElementById('plux-v71-ingest-tsp')?.checked);

    const dest = getDestinos()[destIdx];
    if (!dest) {
      if (typeof root.showToast === 'function') root.showToast(t('toastCreateDestFirst'), 'info');
      return;
    }
    if (!Array.isArray(dest.dias) || dest.dias.length === 0) {
      dest.dias = [{ id: Date.now(), eventos: [], costosAdicionales: [] }];
    }
    const dia = dest.dias[diaIdx] || dest.dias[0];
    dia.eventos = dia.eventos || [];

    const quickNote = t('quickImportedNote');
    ingestState.parsedItems.forEach((item) => {
      if (!item || !item.titulo) return;
      dia.eventos.push({
        hora: item.hora || '',
        titulo: item.titulo,
        notas: item.gmapsUrl ? `Maps: ${item.gmapsUrl}` : quickNote,
        costo: 0,
        duracion: item.duracion || 60,
        lat: typeof item.lat === 'number' ? item.lat : undefined,
        lon: typeof item.lon === 'number' ? item.lon : undefined,
        gmapsUrl: item.gmapsUrl || undefined
      });
    });

    if (doTsp && root.PluxRoutingMap && typeof root.PluxRoutingMap.optimizarOrdenDia === 'function' && dia.eventos.length >= 3) {
      await root.PluxRoutingMap.optimizarOrdenDia(destIdx, diaIdx);
    } else {
      if (typeof root.autoSave === 'function') root.autoSave();
      if (typeof root.renderDias === 'function') root.renderDias(dest.id);
    }

    document.getElementById('plux-v71-ingest-modal')?.remove();
    if (document.getElementById('modal-mapa')?.style.display !== 'none' && root.PluxRoutingMap) {
      void root.PluxRoutingMap.renderMapView();
    }
    if (typeof root.showToast === 'function') {
      root.showToast(t('toastStopsAdded', { count: ingestState.parsedItems.length, dest: dest.nombre }), 'success');
    }
  }

  function openImportModal(destIdx = 0, diaIdx = 0, prefillText = '') {
    if (typeof document === 'undefined') return;
    document.getElementById('plux-v71-ingest-modal')?.remove();

    const dests = getDestinos();
    const safeDestIdx = dests[destIdx] ? destIdx : 0;
    ingestState.destIdx = safeDestIdx;
    ingestState.diaIdx = diaIdx || 0;
    ingestState.parsedItems = prefillText ? parseLoosePlacesText(prefillText) : [];

    const destOpts = dests.length > 0
      ? dests.map((d, i) => `<option value="${i}" ${i === safeDestIdx ? 'selected' : ''}>${esc(d.nombre || t('destinationFallback', { num: i + 1 }))}</option>`).join('')
      : `<option value="0">${esc(t('noDestinations'))}</option>`;

    const buildDayOpts = (dIdx) => {
      const days = dests[dIdx]?.dias || [];
      if (days.length === 0) return `<option value="0">${esc(t('dayLabel', { num: 1 }))}</option>`;
      return days.map((_, i) => `<option value="${i}" ${i === ingestState.diaIdx ? 'selected' : ''}>${esc(t('dayLabel', { num: i + 1 }))}</option>`).join('');
    };

    const modal = document.createElement('div');
    modal.id = 'plux-v71-ingest-modal';
    modal.className = 'plux-v71-modal';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    modal.innerHTML = `
      <div class="plux-v71-modal-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h3 style="margin:0; font-size:1.08rem;">${esc(t('ingestTitle'))}</h3>
          <button type="button" class="plux-v71-action-btn" onclick="document.getElementById('plux-v71-ingest-modal').remove()">✕</button>
        </div>
        <div style="display:grid; grid-template-columns:1fr 130px; gap:8px; margin-bottom:10px;">
          <select id="plux-v71-ingest-dest" onchange="window.PluxVaultIngest.refreshIngestDays()" style="padding:8px; border-radius:10px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.6); color:var(--texto,#fff);">${destOpts}</select>
          <select id="plux-v71-ingest-day" style="padding:8px; border-radius:10px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.6); color:var(--texto,#fff);">${buildDayOpts(safeDestIdx)}</select>
        </div>
        <textarea id="plux-v71-ingest-input" rows="4" placeholder="${esc(t('ingestPlaceholder'))}" style="width:100%; padding:10px; border-radius:12px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.5); color:var(--texto,#fff); font-size:0.82rem; resize:vertical;">${esc(prefillText)}</textarea>
        <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap; margin-top:10px;">
          <label style="display:inline-flex; align-items:center; gap:6px; font-size:0.78rem; cursor:pointer;">
            <input id="plux-v71-ingest-tsp" type="checkbox" checked> ${esc(t('tspLabel'))}
          </label>
          <div style="display:inline-flex; align-items:center; gap:6px; flex-wrap:wrap;">
            <button type="button" id="plux-v71-ingest-paste-btn" class="plux-v71-action-btn" onclick="window.PluxVaultIngest.pasteIntoIngestInput()">${esc(t('pasteBtn'))}</button>
            <button type="button" class="plux-v71-action-btn plux-v71-action-btn--accent" onclick="window.PluxVaultIngest.analyzeAndGeocodeIngestText()">${esc(t('analyzeBtn'))}</button>
          </div>
        </div>
        <div id="plux-v71-ingest-preview" class="plux-v71-ingest-preview-list"></div>
        <div style="margin-top:14px; display:flex; justify-content:flex-end; gap:8px;">
          <button type="button" class="plux-v71-action-btn" onclick="document.getElementById('plux-v71-ingest-modal').remove()">${esc(t('cancelBtn'))}</button>
          <button type="button" id="plux-v71-ingest-confirm" class="plux-v71-action-btn plux-v71-action-btn--primary" onclick="window.PluxVaultIngest.commitIngestedPlaces()">${esc(t('addToItineraryBtn'))}</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    if (prefillText) {
      void analyzeAndGeocodeIngestText();
    } else {
      renderIngestPreviewList();
    }
  }

  // ---------------------------------------------------------------------------
  // 3. BÓVEDA LIGERA DE DOCUMENTOS POR BLOQUE (ev.adjuntos + PluxIDB.vault_blobs)
  // ---------------------------------------------------------------------------
  function compressImageIfNeeded(file) {
    return new Promise((resolve) => {
      const mimeType = String(file?.type || '');
      if (!file || !mimeType.startsWith('image/') || typeof document === 'undefined' || typeof FileReader === 'undefined' || typeof Image === 'undefined') {
        resolve({ blob: file, mime: mimeType || 'application/octet-stream', size: file?.size || 0 });
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 1400;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            const ratio = Math.min(maxDim / w, maxDim / h);
            w = Math.round(w * ratio);
            h = Math.round(h * ratio);
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          canvas.toBlob((outBlob) => {
            if (outBlob && outBlob.size > 0) {
              resolve({ blob: outBlob, mime: 'image/jpeg', size: outBlob.size });
            } else {
              resolve({ blob: file, mime: mimeType, size: file.size });
            }
          }, 'image/jpeg', 0.82);
        };
        img.onerror = () => resolve({ blob: file, mime: mimeType, size: file.size });
        img.src = reader.result;
      };
      reader.onerror = () => resolve({ blob: file, mime: mimeType, size: file.size });
      reader.readAsDataURL(file);
    });
  }

  function findEventRef(destId, diaId, evIdx) {
    const dest = getDestinos().find((d) => d && d.id === destId);
    const dia = (dest?.dias || []).find((d) => d && d.id === diaId);
    const ev = dia?.eventos?.[evIdx];
    return { dest, dia, ev };
  }

  function extractFileFromClipboardEvent(e) {
    const cd = e?.clipboardData || root.clipboardData;
    if (!cd) return null;

    if (cd.items && cd.items.length > 0) {
      for (let i = 0; i < cd.items.length; i++) {
        const item = cd.items[i];
        const type = String(item?.type || '').toLowerCase();
        if (item && item.kind === 'file' && (type.startsWith('image/') || type === 'application/pdf')) {
          const f = typeof item.getAsFile === 'function' ? item.getAsFile() : null;
          if (f) return f;
        }
      }
    }

    if (cd.files && cd.files.length > 0) {
      for (let i = 0; i < cd.files.length; i++) {
        const f = cd.files[i];
        const type = String(f?.type || '').toLowerCase();
        if (f && (type.startsWith('image/') || type === 'application/pdf')) {
          return f;
        }
      }
    }

    return null;
  }

  function buildPastedFileName(file) {
    const rawName = String(file?.name || '').trim();
    const isGeneric = !rawName || /^(image|blob|screenshot)\.(png|jpe?g|webp|gif)$/i.test(rawName);
    if (!isGeneric) return rawName;
    const now = new Date();
    const stamp = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
    const mime = String(file?.type || '').toLowerCase();
    if (mime.includes('pdf')) return `documento-${stamp}.pdf`;
    const ext = mime.includes('jpeg') || mime.includes('jpg') ? 'jpg' : (mime.includes('webp') ? 'webp' : 'png');
    return `captura-qr-${stamp}.${ext}`;
  }

  async function addFileAttachmentToBlock(destId, diaId, evIdx, file, opts = {}) {
    if (!file) return;
    if ((file.size || 0) > MAX_FILE_BYTES) {
      if (typeof root.showToast === 'function') root.showToast(t('toastFileTooLarge'), 'info');
      return;
    }
    const { ev } = findEventRef(destId, diaId, evIdx);
    if (!ev) return;

    const compressed = await compressImageIfNeeded(file);
    const docId = `vdoc_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    const kind = (compressed.mime || '').includes('pdf') ? 'pdf' : 'image';
    const finalName = opts.customName || file.name || t('vaultDocumentFallback');

    if (root.PluxIDB && typeof root.PluxIDB.saveVaultBlob === 'function') {
      await root.PluxIDB.saveVaultBlob({
        id: docId,
        tripId: getActiveTripKey(),
        blockKey: `${destId}_${diaId}_${evIdx}`,
        name: finalName,
        mime: compressed.mime,
        size: compressed.size,
        blob: compressed.blob
      });
    }

    ev.adjuntos = Array.isArray(ev.adjuntos) ? ev.adjuntos : [];
    ev.adjuntos.push({
      id: docId,
      name: finalName,
      kind,
      mime: compressed.mime,
      size: compressed.size,
      createdAt: new Date().toISOString()
    });

    if (typeof root.autoSave === 'function') root.autoSave();
    if (typeof root.renderEventos === 'function') root.renderEventos(destId, diaId);
    injectVaultButtonsIntoEventos(destId, diaId);
    if (opts.fromPaste && typeof root.showToast === 'function') {
      root.showToast(t('toastPastedAttachment'), 'success');
    }
    openBlockVaultModal(destId, diaId, evIdx);
  }

  function addQrOrLinkToBlock(destId, diaId, evIdx, mode) {
    const { ev } = findEventRef(destId, diaId, evIdx);
    if (!ev) return;

    if (mode === 'qr') {
      const code = document.getElementById('plux-v71-vault-qr-code')?.value?.trim();
      const label = document.getElementById('plux-v71-vault-qr-label')?.value?.trim() || t('vaultQrDefaultLabel');
      if (!code) return;
      ev.adjuntos = Array.isArray(ev.adjuntos) ? ev.adjuntos : [];
      ev.adjuntos.push({
        id: `vqr_${Date.now()}`,
        name: label,
        kind: 'qr',
        mime: 'text/plain',
        size: code.length,
        refCode: code,
        createdAt: new Date().toISOString()
      });
    } else if (mode === 'link') {
      const rawUrl = document.getElementById('plux-v71-vault-link-url')?.value?.trim();
      const safe = safeHttpUrl(rawUrl);
      const label = document.getElementById('plux-v71-vault-link-label')?.value?.trim() || t('vaultLinkDefaultLabel');
      if (!safe) {
        if (typeof root.showToast === 'function') root.showToast(t('toastInvalidUrl'), 'info');
        return;
      }
      ev.adjuntos = Array.isArray(ev.adjuntos) ? ev.adjuntos : [];
      ev.adjuntos.push({
        id: `vlnk_${Date.now()}`,
        name: label,
        kind: 'link',
        mime: 'text/uri-list',
        size: safe.length,
        url: safe,
        createdAt: new Date().toISOString()
      });
    }

    if (typeof root.autoSave === 'function') root.autoSave();
    if (typeof root.renderEventos === 'function') root.renderEventos(destId, diaId);
    injectVaultButtonsIntoEventos(destId, diaId);
    openBlockVaultModal(destId, diaId, evIdx);
  }

  function linkWalletVoucherToBlock(destId, diaId, evIdx, walletId) {
    const { ev } = findEventRef(destId, diaId, evIdx);
    if (!ev || !walletId) return;
    let list = [];
    try { list = JSON.parse(localStorage.getItem(WALLET_KEY) || '[]'); } catch (e) {}
    const v = list.find((item) => String(item.id || item._syncKey || item.codigo) === String(walletId));
    if (!v) return;

    ev.adjuntos = Array.isArray(ev.adjuntos) ? ev.adjuntos : [];
    ev.adjuntos.push({
      id: `vwal_${Date.now()}`,
      name: v.titulo || v.proveedor || `Voucher ${v.codigo || ''}`,
      kind: 'qr',
      mime: 'text/plain',
      size: 0,
      refCode: v.codigo || v.titulo || 'RESERVA',
      walletId: String(walletId),
      createdAt: new Date().toISOString()
    });
    if (typeof root.autoSave === 'function') root.autoSave();
    if (typeof root.renderEventos === 'function') root.renderEventos(destId, diaId);
    injectVaultButtonsIntoEventos(destId, diaId);
    openBlockVaultModal(destId, diaId, evIdx);
  }

  async function removeBlockAttachment(destId, diaId, evIdx, docId) {
    const { ev } = findEventRef(destId, diaId, evIdx);
    if (!ev || !Array.isArray(ev.adjuntos)) return;
    ev.adjuntos = ev.adjuntos.filter((a) => a.id !== docId);
    if (root.PluxIDB && typeof root.PluxIDB.deleteVaultBlob === 'function') {
      await root.PluxIDB.deleteVaultBlob(docId);
    }
    if (typeof root.autoSave === 'function') root.autoSave();
    if (typeof root.renderEventos === 'function') root.renderEventos(destId, diaId);
    injectVaultButtonsIntoEventos(destId, diaId);
    openBlockVaultModal(destId, diaId, evIdx);
  }

  function revokeActiveViewerObjectUrl() {
    if (!activeViewerObjectUrl) return;
    const toRevoke = activeViewerObjectUrl;
    activeViewerObjectUrl = null;
    try {
      if (typeof URL !== 'undefined' && typeof URL.revokeObjectURL === 'function') {
        URL.revokeObjectURL(toRevoke);
      }
    } catch (e) {}
  }

  function closeVaultViewer() {
    revokeActiveViewerObjectUrl();
    if (activeViewerKeyHandler && typeof document !== 'undefined') {
      document.removeEventListener('keydown', activeViewerKeyHandler);
      activeViewerKeyHandler = null;
    }
    if (typeof document !== 'undefined') {
      document.getElementById('plux-v71-vault-viewer')?.remove();
    }
  }

  function closeBlockVaultModal() {
    if (activeVaultPasteHandler && typeof document !== 'undefined') {
      document.removeEventListener('paste', activeVaultPasteHandler);
      activeVaultPasteHandler = null;
    }
    if (typeof document !== 'undefined') {
      document.getElementById('plux-v71-vault-modal')?.remove();
    }
  }

  async function openVaultAttachmentNative(destId, diaId, evIdx, docId, mode = 'open') {
    const { ev } = findEventRef(destId, diaId, evIdx);
    const att = (ev?.adjuntos || []).find((a) => a.id === docId);
    if (!att) return false;

    const blobRec = root.PluxIDB ? await root.PluxIDB.getVaultBlob(att.id) : null;
    if (!blobRec) {
      if (typeof root.showToast === 'function') root.showToast(t('vaultMissingBinary'), 'info');
      return false;
    }

    const dataUrl = blobRec.dataUrl || (blobRec.blob ? await blobToDataUrl(blobRec.blob) : '');
    const mime = att.mime || blobRec.mime || (att.kind === 'pdf' ? 'application/pdf' : 'image/jpeg');
    const safeName = att.name || (att.kind === 'pdf' ? 'documento.pdf' : 'imagen.jpg');

    if (dataUrl && root.PluxMobileBridge && typeof root.PluxMobileBridge.exportBase64File === 'function') {
      try {
        const ok = Boolean(root.PluxMobileBridge.exportBase64File(dataUrl, safeName, mime, mode || 'open'));
        if (ok) return true;
      } catch (e) {}
    }

    if (typeof root.showToast === 'function') root.showToast(t('toastMobileOpenFallback'), 'info');
    return false;
  }

  async function previewBlockAttachment(destId, diaId, evIdx, docId) {
    const { ev } = findEventRef(destId, diaId, evIdx);
    const att = (ev?.adjuntos || []).find((a) => a.id === docId);
    if (!att) return;

    const hasMobileBridge = isPluxMobileBridgeActive();

    if (att.kind === 'link' && att.url) {
      const safe = safeHttpUrl(att.url);
      if (!safe) return;
      if (hasMobileBridge && typeof root.PluxMobileBridge.openExternal === 'function') {
        root.PluxMobileBridge.openExternal(safe);
      } else if (hasMobileBridge && typeof root.PluxMobileBridge.openExternalUrl === 'function') {
        root.PluxMobileBridge.openExternalUrl(safe);
      } else if (typeof root.open === 'function') {
        root.open(safe, '_blank', 'noopener');
      }
      return;
    }

    if (typeof document === 'undefined') return;

    closeVaultViewer();

    const viewer = document.createElement('div');
    viewer.id = 'plux-v71-vault-viewer';
    viewer.className = 'plux-v71-modal';
    viewer.onclick = (e) => { if (e.target === viewer) closeVaultViewer(); };

    let bodyHtml = '';
    if (att.kind === 'qr') {
      bodyHtml = `
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:12px 0;">
          <div class="plux-v71-qr-box">
            <div id="plux-v71-qr-render"></div>
            <strong style="font-size:1rem; letter-spacing:1px;">${esc(att.refCode || '')}</strong>
          </div>
          <span style="font-size:0.78rem; color:var(--gris,#94a3b8);">${esc(t('vaultQrOfflineNote'))}</span>
        </div>
      `;
    } else {
      const blobRec = root.PluxIDB ? await root.PluxIDB.getVaultBlob(att.id) : null;
      let objUrl = '';
      if (blobRec?.blob && typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function') {
        objUrl = URL.createObjectURL(blobRec.blob);
        activeViewerObjectUrl = objUrl;
      } else if (blobRec?.dataUrl) {
        objUrl = blobRec.dataUrl;
      }

      if (!objUrl) {
        bodyHtml = `<p style="color:#fca5a5;">${esc(t('vaultMissingBinary'))}</p>`;
      } else if (att.kind === 'pdf') {
        if (hasMobileBridge) {
          const kb = att.size > 0 ? `${Math.max(1, Math.round(att.size / 1024))} KB` : '';
          bodyHtml = `
            <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:18px 12px; text-align:center;">
              <div style="font-size:2.4rem;">📄</div>
              <div style="font-weight:800; font-size:0.95rem; word-break:break-word;">${esc(att.name)}</div>
              ${kb ? `<div style="font-size:0.78rem; color:var(--gris,#94a3b8);">${esc(kb)}</div>` : ''}
              <p style="margin:0; font-size:0.8rem; color:var(--gris,#94a3b8); max-width:420px;">${esc(t('vaultNativePdfHint'))}</p>
              <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center; margin-top:4px;">
                <button type="button" class="plux-v71-action-btn plux-v71-action-btn--primary" onclick="window.PluxVaultIngest.openVaultAttachmentNative(${destId}, ${diaId}, ${evIdx}, '${esc(att.id)}', 'open')">${esc(t('vaultOpenPdfNative'))}</button>
                <button type="button" class="plux-v71-action-btn" onclick="window.PluxVaultIngest.openVaultAttachmentNative(${destId}, ${diaId}, ${evIdx}, '${esc(att.id)}', 'share')">${esc(t('vaultShareNative'))}</button>
              </div>
            </div>
          `;
        } else {
          bodyHtml = `
            <iframe src="${esc(objUrl)}" style="width:100%; height:62vh; border:none; border-radius:10px; background:#fff;"></iframe>
            <div style="margin-top:8px; text-align:right;">
              <a href="${esc(objUrl)}" download="${esc(att.name)}" class="plux-v71-action-btn plux-v71-action-btn--primary" style="text-decoration:none;">${esc(t('vaultDownloadPdf'))}</a>
            </div>
          `;
        }
      } else {
        const shareNativeBtn = hasMobileBridge && typeof root.PluxMobileBridge?.exportBase64File === 'function'
          ? `<div style="margin-top:10px; text-align:right;"><button type="button" class="plux-v71-action-btn" onclick="window.PluxVaultIngest.openVaultAttachmentNative(${destId}, ${diaId}, ${evIdx}, '${esc(att.id)}', 'share')">${esc(t('vaultShareNative'))}</button></div>`
          : '';
        bodyHtml = `<img src="${esc(objUrl)}" alt="${esc(att.name)}" style="max-width:100%; max-height:68vh; border-radius:12px; display:block; margin:0 auto;">${shareNativeBtn}`;
      }
    }

    viewer.innerHTML = `
      <div class="plux-v71-modal-card" style="max-width:680px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <strong style="font-size:0.98rem;">🎫 ${esc(att.name)}</strong>
          <button type="button" class="plux-v71-action-btn" onclick="window.PluxVaultIngest.closeVaultViewer()">✕</button>
        </div>
        ${bodyHtml}
      </div>
    `;
    document.body.appendChild(viewer);

    activeViewerKeyHandler = (e) => {
      if (e && e.key === 'Escape') closeVaultViewer();
    };
    document.addEventListener('keydown', activeViewerKeyHandler);

    if (att.kind === 'qr' && typeof root.QRCode === 'function') {
      const target = document.getElementById('plux-v71-qr-render');
      if (target) {
        new root.QRCode(target, { text: String(att.refCode || 'PLUX'), width: 210, height: 210, colorDark: '#000000', colorLight: '#ffffff' });
      }
    }
  }

  function openBlockVaultModal(destId, diaId, evIdx) {
    if (typeof document === 'undefined') return;
    closeBlockVaultModal();

    const { ev } = findEventRef(destId, diaId, evIdx);
    if (!ev) return;
    const docs = Array.isArray(ev.adjuntos) ? ev.adjuntos : [];

    let walletOpts = '';
    try {
      const wallet = JSON.parse(localStorage.getItem(WALLET_KEY) || '[]');
      if (Array.isArray(wallet) && wallet.length > 0) {
        walletOpts = wallet.map((v) => {
          const id = v.id || v._syncKey || v.codigo;
          return `<option value="${esc(id)}">${esc(v.titulo || v.proveedor || t('vaultReservationFallback'))} (${esc(v.codigo || t('vaultNoCode'))})</option>`;
        }).join('');
      }
    } catch (e) {}

    const modal = document.createElement('div');
    modal.id = 'plux-v71-vault-modal';
    modal.className = 'plux-v71-modal';
    modal.tabIndex = -1;
    modal.onclick = (e) => { if (e.target === modal) closeBlockVaultModal(); };

    const handleVaultPaste = (e) => {
      if (!e || e._pluxVaultHandled) return;
      const file = extractFileFromClipboardEvent(e);
      if (!file) return;
      e._pluxVaultHandled = true;
      if (typeof e.preventDefault === 'function') e.preventDefault();
      const customName = buildPastedFileName(file);
      void addFileAttachmentToBlock(destId, diaId, evIdx, file, { customName, fromPaste: true });
    };
    modal.addEventListener('paste', handleVaultPaste);
    activeVaultPasteHandler = handleVaultPaste;
    document.addEventListener('paste', handleVaultPaste);

    const viewLabel = esc(t('vaultViewBtn'));
    const docsHtml = docs.length === 0
      ? `<div style="padding:14px; text-align:center; color:var(--gris,#94a3b8); font-size:0.82rem;">${esc(t('vaultEmpty'))}</div>`
      : `<div class="plux-v71-vault-grid">${docs.map((d) => {
          const icon = d.kind === 'pdf' ? '📄' : (d.kind === 'qr' ? '📱' : (d.kind === 'link' ? '🔗' : '🖼️'));
          const sizeTxt = d.size > 0 ? `${Math.max(1, Math.round(d.size / 1024))} KB` : (d.refCode || 'Link');
          return `
            <div class="plux-v71-vault-item">
              <div style="font-size:1.35rem;">${icon}</div>
              <div style="font-size:0.8rem; font-weight:800; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${esc(d.name)}</div>
              <div style="font-size:0.7rem; color:var(--gris,#94a3b8);">${esc(sizeTxt)}</div>
              <div style="display:flex; gap:6px; margin-top:4px;">
                <button type="button" class="plux-v71-action-btn plux-v71-action-btn--primary" style="flex:1; justify-content:center;" onclick="window.PluxVaultIngest.previewBlockAttachment(${destId}, ${diaId}, ${evIdx}, '${esc(d.id)}')">${viewLabel}</button>
                <button type="button" class="plux-v71-action-btn" onclick="window.PluxVaultIngest.removeBlockAttachment(${destId}, ${diaId}, ${evIdx}, '${esc(d.id)}')">🗑️</button>
              </div>
            </div>
          `;
        }).join('')}</div>`;

    modal.innerHTML = `
      <div class="plux-v71-modal-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div>
            <h3 style="margin:0; font-size:1.05rem;">${esc(t('vaultModalTitle'))}</h3>
            <span style="font-size:0.78rem; color:var(--gris,#94a3b8);">${esc(ev.titulo || t('activityFallback'))}</span>
          </div>
          <button type="button" class="plux-v71-action-btn" onclick="window.PluxVaultIngest.closeBlockVaultModal()">✕</button>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px; padding:12px; border-radius:12px; background:rgba(2,6,23,0.35); border:1px solid var(--border,#334155);">
          <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; cursor:pointer; font-size:0.82rem; font-weight:700;">
            <span>${esc(t('vaultUploadLabel'))}</span>
            <input type="file" accept="image/*,application/pdf" style="max-width:210px; font-size:0.74rem;" onchange="window.PluxVaultIngest.addFileAttachmentToBlock(${destId}, ${diaId}, ${evIdx}, this.files[0])">
          </label>
          <div style="font-size:0.73rem; color:var(--gris,#94a3b8);">${esc(t('vaultPasteHint'))}</div>

          <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:6px;">
            <input id="plux-v71-vault-qr-label" type="text" placeholder="${esc(t('vaultQrNamePh'))}" style="padding:7px; border-radius:8px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.45); color:var(--texto,#fff); font-size:0.78rem;">
            <input id="plux-v71-vault-qr-code" type="text" placeholder="${esc(t('vaultQrCodePh'))}" style="padding:7px; border-radius:8px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.45); color:var(--texto,#fff); font-size:0.78rem;">
            <button type="button" class="plux-v71-action-btn plux-v71-action-btn--accent" onclick="window.PluxVaultIngest.addQrOrLinkToBlock(${destId}, ${diaId}, ${evIdx}, 'qr')">${esc(t('vaultCreateQrBtn'))}</button>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:6px;">
            <input id="plux-v71-vault-link-label" type="text" placeholder="${esc(t('vaultLinkNamePh'))}" style="padding:7px; border-radius:8px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.45); color:var(--texto,#fff); font-size:0.78rem;">
            <input id="plux-v71-vault-link-url" type="url" placeholder="https://..." style="padding:7px; border-radius:8px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.45); color:var(--texto,#fff); font-size:0.78rem;">
            <button type="button" class="plux-v71-action-btn" onclick="window.PluxVaultIngest.addQrOrLinkToBlock(${destId}, ${diaId}, ${evIdx}, 'link')">${esc(t('vaultAddLinkBtn'))}</button>
          </div>

          ${walletOpts ? `
            <div style="display:flex; gap:6px; align-items:center;">
              <select id="plux-v71-vault-wallet-sel" style="flex:1; padding:7px; border-radius:8px; border:1px solid var(--border,#334155); background:rgba(2,6,23,0.6); color:var(--texto,#fff); font-size:0.78rem;">
                <option value="">${esc(t('vaultWalletPlaceholder'))}</option>
                ${walletOpts}
              </select>
              <button type="button" class="plux-v71-action-btn" onclick="window.PluxVaultIngest.linkWalletVoucherToBlock(${destId}, ${diaId}, ${evIdx}, document.getElementById('plux-v71-vault-wallet-sel').value)">${esc(t('vaultWalletLinkBtn'))}</button>
            </div>
          ` : ''}
        </div>

        ${docsHtml}
      </div>
    `;
    document.body.appendChild(modal);
  }

  function injectVaultButtonsIntoEventos(destId, diaId) {
    if (typeof document === 'undefined') return;
    const cont = document.getElementById(`eventos-${destId}-${diaId}`);
    if (!cont) return;
    const dest = getDestinos().find((d) => d && d.id === destId);
    const dia = (dest?.dias || []).find((d) => d && d.id === diaId);
    if (!dia) return;

    const cards = cont.querySelectorAll('.evento');
    cards.forEach((card, idx) => {
      const ev = dia.eventos?.[idx];
      const actions = card.querySelector('.evento-actions');
      if (!ev || !actions) return;

      const existingBtns = actions.querySelectorAll('.plux-v71-vault-btn');
      let btn = existingBtns[0] || null;
      for (let i = 1; i < existingBtns.length; i++) {
        existingBtns[i].remove();
      }

      const count = Array.isArray(ev.adjuntos) ? ev.adjuntos.length : 0;
      if (!btn) {
        btn = document.createElement('button');
        btn.type = 'button';
        actions.appendChild(btn);
      }

      btn.className = count > 0 ? 'plux-v71-vault-btn plux-v71-vault-btn--has-docs' : 'plux-v71-vault-btn';
      btn.textContent = count > 0
        ? t('vaultBtnDocs', { count, s: count === 1 ? '' : 's' })
        : t('vaultBtnEmpty');
      btn.dataset.vaultCount = String(count);
      btn.onclick = (e) => {
        e.stopPropagation();
        openBlockVaultModal(destId, diaId, idx);
      };
    });
  }

  // ---------------------------------------------------------------------------
  // 4. HOOKS CON PLUXY IA Y RENDER DE EVENTOS
  // ---------------------------------------------------------------------------
  function installHooks() {
    if (typeof root.renderEventos === 'function' && !root.renderEventos._pluxV71VaultHooked) {
      const origRenderEv = root.renderEventos;
      const wrappedRenderEv = function (destId, diaId) {
        const res = origRenderEv.apply(this, arguments);
        injectVaultButtonsIntoEventos(destId, diaId);
        return res;
      };
      wrappedRenderEv._pluxV71VaultHooked = true;
      root.renderEventos = wrappedRenderEv;
    }

    if (typeof root.ejecutarAccionesPluxyDirectas === 'function' && !root.ejecutarAccionesPluxyDirectas._pluxV71IngestHooked) {
      const origExec = root.ejecutarAccionesPluxyDirectas;
      const wrappedExec = async function (respuesta) {
        const cleanReply = await origExec.apply(this, arguments);
        if (typeof respuesta === 'string') {
          const matches = [...respuesta.matchAll(/\[ACCION:IMPORTAR_LUGARES:([^\]]+)\]/gi)];
          for (const m of matches) {
            const parts = m[1].split('|');
            const destName = (parts[0] || '').trim();
            const rawPlaces = parts.slice(1).join('|').replace(/;/g, '\n');
            const destList = getDestinos();
            if (rawPlaces && Array.isArray(destList)) {
              let destIdx = destList.findIndex((d) => d && d.nombre.toLowerCase().includes(destName.toLowerCase()));
              if (destIdx < 0 && destName) {
                destList.push({ id: Date.now() + Math.floor(Math.random() * 500), nombre: destName, dias: [{ id: Date.now(), eventos: [], costosAdicionales: [] }], tramos: [] });
                destIdx = destList.length - 1;
              }
              if (destIdx >= 0) {
                const dest = destList[destIdx];
                if (!dest.dias || dest.dias.length === 0) dest.dias = [{ id: Date.now(), eventos: [], costosAdicionales: [] }];
                const items = parseLoosePlacesText(rawPlaces);
                const baseCoord = typeof root.geocode === 'function' ? await root.geocode(dest.nombre) : null;
                for (const item of items) {
                  if (item.lat == null && root.PluxRoutingMap) {
                    const c = await root.PluxRoutingMap.geocodeEventPlace({ titulo: item.titulo }, dest.nombre, baseCoord);
                    if (c) { item.lat = c.lat; item.lon = c.lon; }
                  }
                  dest.dias[0].eventos.push({
                    hora: item.hora || '',
                    titulo: item.titulo,
                    notas: t('addedByPluxyNote'),
                    costo: 0,
                    duracion: item.duracion || 60,
                    lat: item.lat ?? undefined,
                    lon: item.lon ?? undefined
                  });
                }
                if (typeof root.autoSave === 'function') root.autoSave();
                if (typeof root.renderDestinos === 'function') root.renderDestinos();
              }
            }
          }
        }
        return cleanReply;
      };
      wrappedExec._pluxV71IngestHooked = true;
      root.ejecutarAccionesPluxyDirectas = wrappedExec;
    }

    if (typeof root.chatSend === 'function' && !root.chatSend._pluxV71MapsHooked) {
      const origChatSend = root.chatSend;
      const wrappedChatSend = function () {
        const inputEl = document.getElementById('chat-input-text') || document.getElementById('chatInput');
        const textVal = inputEl ? inputEl.value : '';
        const res = origChatSend.apply(this, arguments);

        if (textVal && /(https?:\/\/(?:www\.)?(?:google\.[^\s/]+\/maps|maps\.app\.goo\.gl|goo\.gl\/maps|maps\.apple\.com)\S+)/i.test(textVal)) {
          setTimeout(() => {
            const container = document.getElementById('chat-messages');
            if (!container) return;
            const pill = document.createElement('div');
            pill.className = 'plux-v71-chat-ingest-pill';
            pill.innerHTML = `
              <span>${esc(t('chatDetectedMaps'))}</span>
              <button type="button" class="plux-v71-action-btn plux-v71-action-btn--primary">${esc(t('chatImportBtn'))}</button>
            `;
            pill.querySelector('button').onclick = () => openImportModal(0, 0, textVal);
            container.appendChild(pill);
            container.scrollTop = container.scrollHeight;
          }, 150);
        }
        return res;
      };
      wrappedChatSend._pluxV71MapsHooked = true;
      root.chatSend = wrappedChatSend;
    }
  }

  const PluxVaultIngest = {
    getLang,
    t,
    parseGoogleMapsUrl,
    parseLoosePlacesText,
    pasteIntoIngestInput,
    analyzeAndGeocodeIngestText,
    commitIngestedPlaces,
    openImportModal,
    openBlockVaultModal,
    closeBlockVaultModal,
    closeVaultViewer,
    openVaultAttachmentNative,
    addFileAttachmentToBlock,
    addQrOrLinkToBlock,
    linkWalletVoucherToBlock,
    removeBlockAttachment,
    previewBlockAttachment,
    injectVaultButtonsIntoEventos,
    updateIngestItem(idx, field, val) {
      if (ingestState.parsedItems[idx]) ingestState.parsedItems[idx][field] = val;
    },
    removeIngestItem(idx) {
      ingestState.parsedItems.splice(idx, 1);
      renderIngestPreviewList();
    },
    refreshIngestDays() {
      const dIdx = parseInt(document.getElementById('plux-v71-ingest-dest')?.value || '0', 10) || 0;
      const daySel = document.getElementById('plux-v71-ingest-day');
      const days = getDestinos()[dIdx]?.dias || [];
      if (daySel) {
        daySel.innerHTML = days.length === 0
          ? `<option value="0">${esc(t('dayLabel', { num: 1 }))}</option>`
          : days.map((_, i) => `<option value="${i}">${esc(t('dayLabel', { num: i + 1 }))}</option>`).join('');
      }
    },
    installHooks
  };

  root.PluxVaultIngest = PluxVaultIngest;

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
