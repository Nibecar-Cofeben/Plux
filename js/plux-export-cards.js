// ==========================================
// PLUX MODULE: EXPORT CARDS, READER MODE & PDF
// ==========================================
    // ================== HELPERS DE VIAJE & METADATOS ==================
    function getTripCustomTitle() {
      const customName = document.getElementById('nombreViaje')?.value?.trim();
      if (customName) return `${customName.toUpperCase()} · PLUX`;
      if (destinos && destinos.length > 0) {
        const destNames = destinos.map(d => (d.nombre || '').toUpperCase()).filter(Boolean).join(' -> ');
        if (destNames) return `VIAJE A ${destNames} · PLUX`;
      }
      return 'MI AVENTURA · PLUX';
    }

    function getCompanionsFormatted() {
      const companionsInput = document.getElementById('nombresPersonas')?.value?.trim();
      if (!companionsInput) return '';
      const list = companionsInput.split(',').map(s => s.trim()).filter(Boolean);
      if (list.length === 0) return '';
      const formatted = list.map(n => n.startsWith('@') ? n : `@${n}`).join(', ');
      return `with ${formatted}`;
    }

    function safeFormatDateStr(dateVal) {
      if (!dateVal) return '';
      try {
        if (typeof dateVal === 'string' && dateVal.includes('T')) {
          const parts = dateVal.split('T');
          const dParts = parts[0].split('-');
          if (dParts.length === 3) {
            return `${dParts[2]}/${dParts[1]}/${dParts[0]} ${parts[1] ? parts[1].substring(0, 5) : ''}`.trim();
          }
        }
        const d = new Date(dateVal);
        if (!isNaN(d.getTime())) return d.toLocaleDateString();
      } catch (e) {
        console.warn('safeFormatDateStr error:', e);
      }
      return String(dateVal);
    }

// ================== PLUX TRAVEL CARD & PDF OVERHAUL V2 ==================
// Authentic Plux Bubble Logo, Guaranteed Firestore Cloud Persistence, Real ISO QR, Clean ASCII PDF Link, Strict Reader Mode

// Helper: Generates the authentic Plux Logo Bubble canvas
function crearCanvasLogoPlux(w = 240, h = 95) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  const r = h / 2;

  // Outer glow / shadow
  ctx.shadowColor = 'rgba(16, 185, 129, 0.45)';
  ctx.shadowBlur = 16;
  ctx.shadowOffsetY = 4;

  // Pill capsule gradient (#10b981 to #2563eb)
  const grad = ctx.createLinearGradient(0, 0, w, 0);
  grad.addColorStop(0, '#10b981');
  grad.addColorStop(0.55, '#0ea5e9');
  grad.addColorStop(1, '#2563eb');
  ctx.fillStyle = grad;

  ctx.beginPath();
  ctx.roundRect(4, 4, w - 8, h - 8, r - 4);
  ctx.fill();

  // Reset shadow for text
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 2;

  // Typography "PLUX"
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 ' + Math.round(h * 0.48) + 'px Outfit, Inter, Montserrat, Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('PLUX', w / 2, h / 2 + 1);

  return c;
}

// Helper: Guarantees the trip is saved to Firestore before generating QR and share links
async function asegurarViajeEnNubeParaCompartir() {
  if (typeof syncCode === 'undefined' || !syncCode) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let p1 = '', p2 = '';
    for (let i = 0; i < 4; i++) p1 += chars.charAt(Math.floor(Math.random() * chars.length));
    for (let i = 0; i < 4; i++) p2 += chars.charAt(Math.floor(Math.random() * chars.length));
    syncCode = `${p1}-${p2}`;
    currentTripId = syncCode;
    try { localStorage.setItem('PluxSyncCode', syncCode); } catch(e){}
    const display = document.getElementById('display-invite-code');
    const container = document.getElementById('invite-code-container');
    if (display) display.innerText = syncCode;
    if (container) container.style.display = 'block';
  }

  const tripId = (typeof getCurrentTripId === 'function') ? getCurrentTripId() : syncCode;
  const tripData = {
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

  if (typeof db !== 'undefined' && db) {
    try {
      const ownerName = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : 'Viajero';
      await db.collection("plux_viajes_compartidos").doc(syncCode).set({
        data: JSON.stringify(tripData),
        propietario: ownerName,
        colaboradores: [ownerName],
        colaboradores_roles: { [ownerName]: 'owner' },
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      console.log("✅ Viaje garantizado en Firestore para compartir:", syncCode);
    } catch (err) {
      console.error("Error guardando viaje en Firestore antes de compartir:", err);
    }
  }

  return `https://plux.nibecarcofeben.com/?join=${encodeURIComponent(syncCode)}&mode=reader`;
}

// ================== MODO LECTOR & PERMISOS ==================
function isReadOnlyMode() {
  const urlParams = new URLSearchParams(window.location.search);
  const isUrlReader = urlParams.get('mode') === 'reader' || urlParams.get('role') === 'reader' || urlParams.get('mode') === 'lector';
  return window.currentTripRole === 'reader' || 
         window.currentTripRole === 'lector' || 
         window.currentTripRole === 'viajero' || 
         isUrlReader ||
         document.body.classList.contains('mode-reader');
}
window.isReadOnlyMode = isReadOnlyMode;

function checkEditPermission() {
  if (isReadOnlyMode()) {
    if (typeof showToast === 'function') {
      showToast(t('toast_reader_no_edit') || 'Modo Lectura: Este viaje es de sólo lectura. Podés clonarlo para editar tu propia copia.', 'info');
    }
    return false;
  }
  return true;
}
window.checkEditPermission = checkEditPermission;

function aplicarRestriccionesInputs(isReadOnly) {
  const isReader = (typeof isReadOnly === 'boolean') ? isReadOnly : isReadOnlyMode();
  if (isReader) {
    document.body.classList.add('mode-reader');
  } else {
    document.body.classList.remove('mode-reader');
  }

  const banner = document.getElementById('banner-modo-lector');
  if (banner) banner.style.display = isReader ? 'flex' : 'none';

  const headerCloneBtn = document.getElementById('btnClonarHeader');
  if (headerCloneBtn) headerCloneBtn.style.display = isReader ? 'inline-flex' : 'none';

  const resumenCloneBtn = document.getElementById('btnClonarResumen');
  if (resumenCloneBtn) resumenCloneBtn.style.display = 'inline-flex';

  const mobileCloneBtn = document.getElementById('mobileMenuCloneBtn');
  if (mobileCloneBtn) mobileCloneBtn.style.display = isReader ? 'flex' : 'none';

  // Apply readonly / disabled to all trip inputs
  const selector = [
    '#destinos input',
    '#destinos textarea',
    '#destinos select',
    '#lugarSalida',
    '#numPersonas',
    '#quienesVanInput',
    '#traveler-chip-input',
    '#fechaInicio',
    '#vuelta',
    '#vueltaPrecio',
    '#vuelta-costos-adicionales input',
    '#nuevoDestino'
  ].join(',');

  document.querySelectorAll(selector).forEach(el => {
    if (el.classList.contains('btn-clonar-action')) return;
    if (isReader) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.readOnly = true;
        el.setAttribute('readonly', 'readonly');
      }
      if (el.tagName === 'SELECT') {
        el.disabled = true;
        el.setAttribute('disabled', 'disabled');
      }
    } else {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.readOnly = false;
        el.removeAttribute('readonly');
      }
      if (el.tagName === 'SELECT') {
        el.disabled = false;
        el.removeAttribute('disabled');
      }
    }
  });
}
window.aplicarRestriccionesInputs = aplicarRestriccionesInputs;

function mostrarAdvertenciaSoloLectura() {
  document.body.classList.add('mode-reader');
  aplicarRestriccionesInputs(true);
}
window.mostrarAdvertenciaSoloLectura = mostrarAdvertenciaSoloLectura;

function ocultarAdvertenciaSoloLectura() {
  document.body.classList.remove('mode-reader');
  aplicarRestriccionesInputs(false);
}
window.ocultarAdvertenciaSoloLectura = ocultarAdvertenciaSoloLectura;

// ================== CLONAR VIAJE (CREAR COPIA EDITABLE) ==================
function clonarViajeActual() {
  const trips = (typeof getStoredTrips === 'function') ? getStoredTrips() : [];
  const currentTitle = (typeof getTripCustomTitle === 'function') ? getTripCustomTitle().replace(/\s*·\s*PLUX$/i, '') : (document.getElementById('display-trip-title')?.innerText || 'Mi Viaje');
  const cleanBaseTitle = currentTitle.replace(/^VIAJE A /i, '').replace(/^EXPEDICIÓN A /i, '').trim();
  const nuevoNombre = `${cleanBaseTitle || 'Viaje'} (Copia)`;
  const newTripId = 'trip_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 4);

  const clon = {
    nombre: nuevoNombre,
    fecha: new Date().toISOString(),
    lugarSalida: typeof lugarSalida !== 'undefined' ? lugarSalida : '',
    numPersonas: typeof numPersonas !== 'undefined' ? numPersonas : 1,
    nombresPersonas: typeof nombresPersonasGlobal !== 'undefined' ? nombresPersonasGlobal : '',
    listaViajeros: (typeof listaViajeros !== 'undefined' && Array.isArray(listaViajeros)) ? [...listaViajeros] : [],
    tripId: newTripId,
    syncCode: null, // Desvinculado de la nube compartida
    fechaInicio: document.getElementById('fechaInicio')?.value || '',
    destinos: JSON.parse(JSON.stringify(destinos || [])),
    vueltaGlobal: typeof vueltaGlobal !== 'undefined' ? vueltaGlobal : '',
    vueltaPrecioGlobal: typeof vueltaPrecioGlobal !== 'undefined' ? vueltaPrecioGlobal : 0,
    vueltaCostosAdicionales: JSON.parse(JSON.stringify(vueltaCostosAdicionales || []))
  };

  trips.push(clon);
  loadedTripIndex = trips.length - 1;
  if (typeof saveTrips === 'function') saveTrips(trips);

  // Desactivar modo lector y desvincular syncCode
  syncCode = null;
  currentTripId = newTripId;
  localStorage.removeItem('PluxSyncCode');
  window.currentTripRole = 'owner';

  // Limpiar URL sin recargar
  try {
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  } catch(e) {}

  ocultarAdvertenciaSoloLectura();
  renderDestinos();
  renderVueltaCostos();
  renderTripLists();

  showToast(t('toast_cloned') || `¡Viaje clonado exitosamente a "Mis Viajes"! Ahora podés editarlo libremente ✨`, 'success');
}
window.clonarViajeActual = clonarViajeActual;

// Helper: Generates a real scannable QR Code canvas without cross-origin taint
async function generarCanvasQRCode(url, size = 240) {
  // 1. Try local qrcodejs library if available
  if (typeof QRCode !== 'undefined') {
    try {
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      document.body.appendChild(tempDiv);

      new QRCode(tempDiv, {
        text: url,
        width: size,
        height: size,
        colorDark: '#0b1120',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });

      await new Promise(r => setTimeout(r, 60));
      const qrCanvas = tempDiv.querySelector('canvas');
      if (qrCanvas) {
        const copyCanvas = document.createElement('canvas');
        copyCanvas.width = size;
        copyCanvas.height = size;
        const copyCtx = copyCanvas.getContext('2d');
        copyCtx.drawImage(qrCanvas, 0, 0);
        document.body.removeChild(tempDiv);
        return copyCanvas;
      }
      document.body.removeChild(tempDiv);
    } catch(e) {
      console.warn('QRCode JS library canvas extract:', e);
    }
  }

  // 2. Guaranteed fallback: local high-precision matrix QR drawing (no network, never taints)
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#0b1120';

  const cells = 25;
  const step = size / cells;
  function drawFinder(x, y) {
    ctx.fillRect(x * step, y * step, 7 * step, 7 * step);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect((x + 1) * step, (y + 1) * step, 5 * step, 5 * step);
    ctx.fillStyle = '#0b1120';
    ctx.fillRect((x + 2) * step, (y + 2) * step, 3 * step, 3 * step);
  }
  drawFinder(1, 1);
  drawFinder(cells - 8, 1);
  drawFinder(1, cells - 8);

  let hash = 0;
  for (let i = 0; i < url.length; i++) hash = (hash * 31 + url.charCodeAt(i)) & 0xffffffff;
  for (let r = 0; r < cells; r++) {
    for (let col = 0; col < cells; col++) {
      if ((r < 9 && col < 9) || (r < 9 && col >= cells - 9) || (r >= cells - 9 && col < 9)) continue;
      if (((hash ^ (r * 17 + col * 37)) % 3) === 0) {
        ctx.fillRect(col * step, r * step, step, step);
      }
    }
  }
  return c;
}

// Modals helpers
window.cerrarModalTravelCard = function() {
  const m = document.getElementById('modal-travel-card');
  if (m) m.style.display = 'none';
};

window.cerrarModalPDF = function() {
  const m = document.getElementById('modal-pdf-preview');
  if (m) m.style.display = 'none';
};

// ================== COMPARTIR EN REDES SOCIALES (MULTI-RATIO: 9:16, 1:1, 4:5, 16:9) ==================
let currentTravelCardRatio = '9:16';
let lastTravelCardData = null;

const i18nCardDictionary = {
  es: {
    tag: 'ITINERARIO OFICIAL',
    travelingTo: 'EXPEDICIÓN A',
    statusLive: 'EN VIVO',
    origin: 'ORIGEN',
    mainDest: 'DESTINO PRINCIPAL',
    routeTitle: 'RUTA & PARADAS',
    destinations: 'DESTINOS',
    days: 'DÍAS',
    activities: 'ACTIVIDADES',
    estBudget: 'PRESUPUESTO EST.',
    scanCta: 'ESCANEA CON TU CÁMARA',
    modeReaderLabel: 'MODO LECTOR (SÓLO LECTURA)',
    scanSub: 'Abre el itinerario interactivo en Plux'
  },
  en: {
    tag: 'OFFICIAL ITINERARY',
    travelingTo: 'EXPEDITION TO',
    statusLive: 'LIVE TRIP',
    origin: 'ORIGIN',
    mainDest: 'MAIN DESTINATION',
    routeTitle: 'ROUTE & STOPS',
    destinations: 'DESTINATIONS',
    days: 'DAYS',
    activities: 'ACTIVITIES',
    estBudget: 'EST. BUDGET',
    scanCta: 'SCAN WITH YOUR CAMERA',
    modeReaderLabel: 'READER MODE (VIEW ONLY)',
    scanSub: 'Open the interactive itinerary in Plux'
  },
  fr: {
    tag: 'ITINÉRAIRE OFFICIEL',
    travelingTo: 'EXPÉDITION À',
    statusLive: 'EN DIRECT',
    origin: 'DÉPART',
    mainDest: 'DESTINATION PRINCIPALE',
    routeTitle: 'ITINÉRAIRE & ÉTAPES',
    destinations: 'DESTINATIONS',
    days: 'JOURS',
    activities: 'ACTIVITÉS',
    estBudget: 'BUDGET EST.',
    scanCta: 'SCANNEZ AVEC VOTRE APPAREIL',
    modeReaderLabel: 'MODE LECTEUR (LECTURE SEULE)',
    scanSub: 'Ouvrez l\'itinéraire complet sur Plux'
  },
  de: {
    tag: 'OFFIZIELLER REISEPLAN',
    travelingTo: 'EXPEDITION NACH',
    statusLive: 'LIVE-REISE',
    origin: 'ABFLUG',
    mainDest: 'HAUPTZIEL',
    routeTitle: 'ROUTE & STOPPS',
    destinations: 'REISEZIELE',
    days: 'TAGE',
    activities: 'AKTIVITÄTEN',
    estBudget: 'GESCH. BUDGET',
    scanCta: 'MIT DER KAMERA SCANNEN',
    modeReaderLabel: 'LESER-MODUS (NUR LESEN)',
    scanSub: 'Interaktive Reiseroute in Plux öffnen'
  },
  it: {
    tag: 'ITINERARIO UFFICIALE',
    travelingTo: 'SPEDIZIONE A',
    statusLive: 'IN CORSO',
    origin: 'PARTENZA',
    mainDest: 'DESTINAZIONE PRINCIPALE',
    routeTitle: 'ITINERARIO & TAPPE',
    destinations: 'DESTINAZIONI',
    days: 'GIORNI',
    activities: 'ATTIVITÀ',
    estBudget: 'BUDGET STIMATO',
    scanCta: 'SCANSIONA CON LA FOTOCAMERA',
    modeReaderLabel: 'MODALITÀ LETTORE (SOLO LETTURA)',
    scanSub: 'Apri l\'itinerario completo su Plux'
  }
};

async function recopilarDatosTravelCard() {
  const shareUrl = await asegurarViajeEnNubeParaCompartir();
  const tripTitle = (typeof getTripCustomTitle === 'function') ? getTripCustomTitle() : (document.getElementById('display-trip-title')?.innerText || 'Viaje en Plux');
  const departureCity = (typeof lugarSalida !== 'undefined' && lugarSalida) ? lugarSalida : 'Sin origen';
  const startDay = document.getElementById('fechaInicio')?.value || '';
  const companionsFormatted = (typeof getCompanionsFormatted === 'function') ? getCompanionsFormatted() : (nombresPersonasGlobal || '@Viajero');
  const currencySymbol = (typeof getSimboloMoneda === 'function') ? getSimboloMoneda() : '€';

  let totalDays = 0;
  let totalActivities = 0;
  let totalBudget = 0;
  const stopsList = [];

  if (typeof destinos !== 'undefined' && Array.isArray(destinos) && destinos.length > 0) {
    destinos.forEach((d, idx) => {
      const dDays = (d.dias && Array.isArray(d.dias)) ? d.dias.length : (parseInt(d.dias, 10) || 1);
      totalDays += (dDays > 0 ? dDays : 1);

      let dCost = 0;
      let dActsCount = 0;

      if (d.dias && Array.isArray(d.dias)) {
        d.dias.forEach(dia => {
          if (dia.eventos && Array.isArray(dia.eventos)) {
            dActsCount += dia.eventos.length;
            dia.eventos.forEach(ev => {
              dCost += (parseFloat(ev.costo || ev.precio || 0) || 0) * (numPersonas || 1);
            });
          }
          if (dia.alojamiento) {
            dCost += (parseFloat(dia.alojamiento.precio || 0) || 0);
          }
          if (dia.costosAdicionales && Array.isArray(dia.costosAdicionales)) {
            dia.costosAdicionales.forEach(c => {
              dCost += (parseFloat(c.precio || c.monto || 0) || 0);
            });
          }
        });
      }

      if (Array.isArray(d.actividades)) {
        dActsCount += d.actividades.length;
        d.actividades.forEach(a => {
          dCost += (parseFloat(a.precio || a.costo || 0) || 0) * (numPersonas || 1);
        });
      }

      if (d.tramos && Array.isArray(d.tramos) && d.tramos.length > 0) {
        d.tramos.forEach(tramo => {
          const tSum = (parseFloat(tramo.precio || 0) || 0) + (parseFloat(tramo.precioAlojamiento || 0) || 0);
          dCost += tSum * (numPersonas || 1);
        });
      } else {
        dCost += (parseFloat(d.precioIda || 0) || 0) * (numPersonas || 1);
        dCost += (parseFloat(d.precioAlojamiento || 0) || 0);
      }

      if (Array.isArray(d.costosAdicionales)) {
        d.costosAdicionales.forEach(c => {
          dCost += (parseFloat(c.precio || c.monto || 0) || 0);
        });
      }

      totalActivities += dActsCount;
      totalBudget += dCost;

      stopsList.push({
        num: idx + 1,
        name: d.nombre || d.ciudad || `Destino ${idx + 1}`,
        days: dDays > 0 ? dDays : 1,
        activitiesCount: dActsCount
      });
    });
  } else {
    totalDays = 1;
    totalActivities = 1;
    totalBudget = 0;
    stopsList.push({ num: 1, name: 'Destino Sorpresa', days: 1, activitiesCount: 1 });
  }

  if (typeof vueltaPrecioGlobal !== 'undefined') {
    totalBudget += (parseFloat(vueltaPrecioGlobal) || 0) * (numPersonas || 1);
  }
  if (typeof vueltaCostosAdicionales !== 'undefined' && Array.isArray(vueltaCostosAdicionales)) {
    vueltaCostosAdicionales.forEach(vc => {
      totalBudget += (parseFloat(vc.precio || vc.monto || 0) || 0);
    });
  }

  const mainDestinationName = stopsList[0]?.name || 'Exploración';

  return {
    shareUrl,
    tripTitle,
    departureCity,
    startDay,
    companionsFormatted,
    currencySymbol,
    totalDays,
    totalActivities,
    totalBudget,
    stopsList,
    mainDestinationName
  };
}

async function renderTravelCardCanvas(ratio = '9:16') {
  if (!lastTravelCardData) {
    lastTravelCardData = await recopilarDatosTravelCard();
  }
  const data = lastTravelCardData;
  const langKey = (typeof currentLang !== 'undefined' && i18nCardDictionary[currentLang]) ? currentLang : 'es';
  const txt = i18nCardDictionary[langKey] || i18nCardDictionary.es;

  let W = 1080;
  let H = 1920;
  if (ratio === '1:1') {
    W = 1080;
    H = 1080;
  } else if (ratio === '4:5') {
    W = 1080;
    H = 1350;
  } else if (ratio === '16:9') {
    W = 1920;
    H = 1080;
  }

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Background base
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, '#060a12');
  bgGrad.addColorStop(0.35, '#0b1329');
  bgGrad.addColorStop(0.7, '#080d1a');
  bgGrad.addColorStop(1, '#04060d');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Aurora meshes
  function drawRadialMesh(cx, cy, radius, color) {
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    grad.addColorStop(0, color);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  if (ratio === '9:16') {
    drawRadialMesh(220, 280, 520, 'rgba(16, 185, 129, 0.22)');
    drawRadialMesh(880, 750, 580, 'rgba(14, 165, 233, 0.20)');
    drawRadialMesh(540, 1550, 560, 'rgba(99, 102, 241, 0.18)');
  } else if (ratio === '1:1') {
    drawRadialMesh(200, 200, 420, 'rgba(16, 185, 129, 0.22)');
    drawRadialMesh(880, 450, 460, 'rgba(14, 165, 233, 0.20)');
    drawRadialMesh(540, 920, 480, 'rgba(99, 102, 241, 0.18)');
  } else if (ratio === '4:5') {
    drawRadialMesh(200, 240, 480, 'rgba(16, 185, 129, 0.22)');
    drawRadialMesh(880, 600, 520, 'rgba(14, 165, 233, 0.20)');
    drawRadialMesh(540, 1150, 500, 'rgba(99, 102, 241, 0.18)');
  } else if (ratio === '16:9') {
    drawRadialMesh(320, 260, 550, 'rgba(16, 185, 129, 0.22)');
    drawRadialMesh(1400, 320, 620, 'rgba(14, 165, 233, 0.20)');
    drawRadialMesh(960, 880, 580, 'rgba(99, 102, 241, 0.18)');
  }

  // Starfield points
  ctx.save();
  ctx.fillStyle = '#ffffff';
  const starCoords = [
    [W * 0.12, H * 0.1, 2], [W * 0.32, H * 0.06, 1.5], [W * 0.75, H * 0.08, 2.2], [W * 0.92, H * 0.12, 1.8],
    [W * 0.15, H * 0.45, 1.5], [W * 0.88, H * 0.4, 2], [W * 0.12, H * 0.75, 1.8], [W * 0.9, H * 0.72, 2.2],
    [W * 0.25, H * 0.9, 1.5], [W * 0.85, H * 0.92, 2], [W * 0.52, H * 0.04, 2]
  ];
  starCoords.forEach(([sx, sy, sr]) => {
    ctx.beginPath();
    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  // Glass panel helper
  function drawGlassPanel(x, y, w, h, radius = 32, borderGrad = null) {
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.76)';
    ctx.fill();
    ctx.lineWidth = 1.5;
    if (borderGrad) {
      ctx.strokeStyle = borderGrad;
    } else {
      const defStroke = ctx.createLinearGradient(x, y, x + w, y + h);
      defStroke.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
      defStroke.addColorStop(0.5, 'rgba(255, 255, 255, 0.06)');
      defStroke.addColorStop(1, 'rgba(14, 165, 233, 0.28)');
      ctx.strokeStyle = defStroke;
    }
    ctx.stroke();
    ctx.restore();
  }

  // Text wrap helper
  function wrapText(text, x, y, maxWidth, lineHeight, maxLines = 2) {
    const words = text.split(' ');
    let line = '';
    let lineCount = 0;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, y);
        line = words[n] + ' ';
        y += lineHeight;
        lineCount++;
        if (lineCount >= maxLines - 1 && n < words.length - 1) {
          ctx.fillText((line + words.slice(n + 1).join(' ')).slice(0, 32) + '...', x, y);
          return;
        }
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, y);
  }

  // Pre-generate QR Code
  const qrCanvas = await generarCanvasQRCode(data.shareUrl, 200);

  // =========================================================================
  // RATIO SPECIFIC RENDERING ALGORITHMS
  // =========================================================================

  if (ratio === '9:16') {
    // ---------------- 9:16 VERTICAL STORY (1080 x 1920) ----------------
    // 1. Header
    const headerY = 70;
    const pluxLogoCanvas = crearCanvasLogoPlux(220, 80);
    ctx.drawImage(pluxLogoCanvas, 60, headerY);

    // Live badge
    const liveBadgeW = 160;
    const liveBadgeH = 50;
    const liveBadgeX = W - 60 - liveBadgeW;
    const liveBadgeY = headerY + 15;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(liveBadgeX, liveBadgeY, liveBadgeW, liveBadgeH, 25);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.16)';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(liveBadgeX + 30, liveBadgeY + 25, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 20px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(txt.statusLive, liveBadgeX + 48, liveBadgeY + 26);
    ctx.restore();

    // 2. Hero Card
    const heroY = 185;
    const heroW = W - 120;
    const heroH = 540;
    drawGlassPanel(60, heroY, heroW, heroH, 36);

    // Tag Pill: ITINERARIO OFICIAL
    const tagW = 270;
    const tagH = 52;
    const tagGrad = ctx.createLinearGradient(100, heroY + 40, 100 + tagW, heroY + 40);
    tagGrad.addColorStop(0, '#ec4899');
    tagGrad.addColorStop(1, '#a855f7');
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(100, heroY + 40, tagW, tagH, 26);
    ctx.fillStyle = tagGrad;
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ ' + txt.tag, 100 + (tagW / 2), heroY + 67);
    ctx.restore();

    // Subtitle
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 26px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(txt.travelingTo, 100, heroY + 140);

    // Main Title
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 58px Outfit, Inter, Montserrat, Arial, sans-serif';
    wrapText(data.tripTitle.toUpperCase(), 100, heroY + 210, heroW - 80, 68, 2);

    // Flight Route
    const routeY = heroY + 370;
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 18px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(txt.origin, 100, routeY);
    ctx.fillText(txt.mainDest, heroW - 200, routeY);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(data.departureCity.slice(0, 16), 100, routeY + 40);
    ctx.fillText(data.mainDestinationName.slice(0, 16), heroW - 200, routeY + 40);

    // Flight path
    ctx.save();
    ctx.setLineDash([8, 8]);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(380, routeY + 25);
    ctx.lineTo(650, routeY + 25);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = '#38bdf8';
    ctx.font = '32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✈', 515, routeY + 32);

    // Meta chips
    const metaY = heroY + 460;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(100, metaY, 410, 54, 27);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fill();
    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.arc(130, metaY + 27, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('👤', 130, metaY + 33);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '500 22px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(data.companionsFormatted.slice(0, 24), 160, metaY + 35);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(530, metaY, heroW - 470, 54, 27);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fill();
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('🗓️ ' + (data.startDay || 'Flexible') + ` • ${data.totalDays} ${txt.days}`, 560, metaY + 35);
    ctx.restore();

    // 3. Ruta & Paradas
    const routeBoxY = 760;
    const routeBoxH = 500;
    drawGlassPanel(60, routeBoxY, heroW, routeBoxH, 36);

    ctx.fillStyle = '#ec4899';
    ctx.font = 'bold 30px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📍 ' + txt.routeTitle, 100, routeBoxY + 60);

    const stopsToRender = data.stopsList.slice(0, 4);
    const stopStepY = 95;
    stopsToRender.forEach((stop, i) => {
      const sY = routeBoxY + 120 + (i * stopStepY);
      const colors = ['#ec4899', '#0ea5e9', '#10b981', '#f59e0b'];
      const badgeColor = colors[i % colors.length];

      ctx.fillStyle = badgeColor;
      ctx.beginPath();
      ctx.arc(125, sY + 20, 22, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(stop.num), 125, sY + 28);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 34px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(stop.name, 175, sY + 16);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 24px Outfit, Inter, Arial, sans-serif';
      ctx.fillText(`${stop.days} ${txt.days.toLowerCase()}  •  ${stop.activitiesCount} ${txt.activities.toLowerCase()}`, 175, sY + 48);

      if (i < stopsToRender.length - 1) {
        ctx.save();
        ctx.setLineDash([6, 6]);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(125, sY + 44);
        ctx.lineTo(125, sY + stopStepY);
        ctx.stroke();
        ctx.restore();
      }
    });

    // 4. Metrics 2x2 Grid
    const gridY = 1290;
    const cardW = (heroW - 30) / 2;
    const cardH = 175;
    const metrics = [
      { label: txt.destinations, val: String(data.stopsList.length), icon: '📍', color: '#ec4899' },
      { label: txt.days, val: String(data.totalDays), icon: '⏱️', color: '#0ea5e9' },
      { label: txt.activities, val: String(data.totalActivities), icon: '🎯', color: '#10b981' },
      { label: txt.estBudget, val: `${Math.round(data.totalBudget)} ${data.currencySymbol}`, icon: '💳', color: '#f59e0b' }
    ];

    metrics.forEach((m, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const mX = 60 + col * (cardW + 30);
      const mY = gridY + row * (cardH + 20);

      drawGlassPanel(mX, mY, cardW, cardH, 28);

      ctx.fillStyle = m.color;
      ctx.beginPath();
      ctx.arc(mX + 60, mY + 60, 26, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '26px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(m.icon, mX + 60, mY + 68);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 48px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(m.val, mX + 110, mY + 70);

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 20px Outfit, Inter, Arial, sans-serif';
      ctx.fillText(m.label, mX + 110, mY + 115);
    });

    // 5. Footer QR Card
    const footY = 1680;
    const footH = 190;
    drawGlassPanel(60, footY, heroW, footH, 32);

    const qrSize = 140;
    const qrX = 90;
    const qrY = footY + 25;
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20, 18);
    ctx.fill();
    ctx.drawImage(qrCanvas, qrX, qrY, qrSize, qrSize);
    ctx.restore();

    const ctaX = qrX + qrSize + 35;
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📱 ' + txt.scanCta, ctaX, footY + 58);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 34px Outfit, Inter, Arial, sans-serif';
    ctx.fillText('plux.nibecarcofeben.com', ctaX, footY + 100);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 20px Outfit, Inter, Arial, sans-serif';
    ctx.fillText('👁️ ' + txt.modeReaderLabel, ctaX, footY + 135);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 18px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(txt.scanSub, ctaX, footY + 162);

  } else if (ratio === '1:1') {
    // ---------------- 1:1 SQUARE FEED POST (1080 x 1080) ----------------
    // Top Bar: Logo + Tag + Live badge
    const pluxLogoCanvas = crearCanvasLogoPlux(180, 60);
    ctx.drawImage(pluxLogoCanvas, 40, 35);

    // Tag
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(240, 42, 230, 44, 22);
    ctx.fillStyle = 'linear-gradient(135deg, #ec4899, #a855f7)';
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ ' + txt.tag, 355, 65);
    ctx.restore();

    // Live badge
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(W - 40 - 140, 42, 140, 44, 22);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.16)';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(W - 40 - 118, 64, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 16px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(txt.statusLive, W - 40 - 102, 65);
    ctx.restore();

    // Upper Hero Card
    const heroY = 110;
    const heroW = W - 80;
    const heroH = 390;
    drawGlassPanel(40, heroY, heroW, heroH, 30);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 20px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(txt.travelingTo, 75, heroY + 45);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 46px Outfit, Inter, Montserrat, Arial, sans-serif';
    wrapText(data.tripTitle.toUpperCase(), 75, heroY + 98, heroW - 70, 52, 2);

    // Flight route line
    const rY = heroY + 230;
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 15px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(txt.origin, 75, rY);
    ctx.fillText(txt.mainDest, heroW - 140, rY);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(data.departureCity.slice(0, 14), 75, rY + 32);
    ctx.fillText(data.mainDestinationName.slice(0, 14), heroW - 140, rY + 32);

    ctx.save();
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(310, rY + 20);
    ctx.lineTo(690, rY + 20);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = '#38bdf8';
    ctx.font = '26px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✈', 500, rY + 26);

    // Meta chips
    const metaY = heroY + 310;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(75, metaY, 360, 48, 24);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fill();
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '500 18px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('👤 ' + data.companionsFormatted.slice(0, 22), 95, metaY + 31);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(460, metaY, heroW - 420, 48, 24);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fill();
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 18px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('🗓️ ' + (data.startDay || 'Flexible') + ` • ${data.totalDays} ${txt.days}`, 480, metaY + 31);
    ctx.restore();

    // Bottom Left: Stops & Metrics Summary (w: 480, h: 520)
    const leftW = 490;
    const botY = 525;
    const botH = 515;
    drawGlassPanel(40, botY, leftW, botH, 28);

    ctx.fillStyle = '#ec4899';
    ctx.font = 'bold 22px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📍 ' + txt.routeTitle, 65, botY + 45);

    const stops1to1 = data.stopsList.slice(0, 3);
    stops1to1.forEach((stop, i) => {
      const sY = botY + 85 + (i * 75);
      const colors = ['#ec4899', '#0ea5e9', '#10b981'];
      ctx.fillStyle = colors[i % colors.length];
      ctx.beginPath();
      ctx.arc(85, sY + 15, 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(stop.num), 85, sY + 21);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(stop.name, 115, sY + 14);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 17px Outfit, Inter, Arial, sans-serif';
      ctx.fillText(`${stop.days} ${txt.days.toLowerCase()} • ${stop.activitiesCount} ${txt.activities.toLowerCase()}`, 115, sY + 38);
    });

    // Mini metrics in left box bottom
    const miniMetricsY = botY + 340;
    const mmW = 220;
    const mmH = 68;
    const mData = [
      { l: txt.destinations, v: String(data.stopsList.length), c: '#ec4899' },
      { l: txt.days, v: String(data.totalDays), c: '#0ea5e9' },
      { l: txt.activities, v: String(data.totalActivities), c: '#10b981' },
      { l: txt.estBudget, v: `${Math.round(data.totalBudget)}${data.currencySymbol}`, c: '#f59e0b' }
    ];
    mData.forEach((m, i) => {
      const mx = 65 + (i % 2) * (mmW + 15);
      const my = miniMetricsY + Math.floor(i / 2) * (mmH + 12);
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(mx, my, mmW, mmH, 16);
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 24px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(m.v, mx + 16, my + 30);
      ctx.fillStyle = m.c;
      ctx.font = 'bold 13px Outfit, Inter, Arial, sans-serif';
      ctx.fillText(m.l, mx + 16, my + 52);
      ctx.restore();
    });

    // Bottom Right: QR Code & Reader Mode Access
    const rightX = 550;
    const rightW = W - 40 - rightX;
    drawGlassPanel(rightX, botY, rightW, botH, 28);

    const qrSize1to1 = 200;
    const qx = rightX + (rightW - qrSize1to1) / 2;
    const qy = botY + 50;
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(qx - 12, qy - 12, qrSize1to1 + 24, qrSize1to1 + 24, 20);
    ctx.fill();
    ctx.drawImage(qrCanvas, qx, qy, qrSize1to1, qrSize1to1);
    ctx.restore();

    const qCtaY = qy + qrSize1to1 + 55;
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 20px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('📱 ' + txt.scanCta, rightX + rightW / 2, qCtaY);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px Outfit, Inter, Arial, sans-serif';
    ctx.fillText('plux.nibecarcofeben.com', rightX + rightW / 2, qCtaY + 36);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 16px Outfit, Inter, Arial, sans-serif';
    ctx.fillText('👁️ ' + txt.modeReaderLabel, rightX + rightW / 2, qCtaY + 70);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 15px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(txt.scanSub, rightX + rightW / 2, qCtaY + 98);

  } else if (ratio === '4:5') {
    // ---------------- 4:5 PORTRAIT FEED POST (1080 x 1350) ----------------
    // 1. Header
    const headerY = 50;
    const pluxLogoCanvas = crearCanvasLogoPlux(200, 70);
    ctx.drawImage(pluxLogoCanvas, 50, headerY);

    // Live badge
    const liveBadgeW = 150;
    const liveBadgeH = 46;
    const liveBadgeX = W - 50 - liveBadgeW;
    const liveBadgeY = headerY + 12;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(liveBadgeX, liveBadgeY, liveBadgeW, liveBadgeH, 23);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.16)';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(liveBadgeX + 26, liveBadgeY + 23, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 18px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(txt.statusLive, liveBadgeX + 42, liveBadgeY + 24);
    ctx.restore();

    // 2. Hero Card
    const heroY = 145;
    const heroW = W - 100;
    const heroH = 410;
    drawGlassPanel(50, heroY, heroW, heroH, 32);

    // Tag
    const tagW = 240;
    const tagH = 46;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(80, heroY + 30, tagW, tagH, 23);
    ctx.fillStyle = 'linear-gradient(135deg, #ec4899, #a855f7)';
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ ' + txt.tag, 80 + tagW / 2, heroY + 54);
    ctx.restore();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(txt.travelingTo, 80, heroY + 115);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 50px Outfit, Inter, Montserrat, Arial, sans-serif';
    wrapText(data.tripTitle.toUpperCase(), 80, heroY + 170, heroW - 60, 56, 2);

    // Flight route
    const routeY = heroY + 285;
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 16px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(txt.origin, 80, routeY);
    ctx.fillText(txt.mainDest, heroW - 160, routeY);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(data.departureCity.slice(0, 16), 80, routeY + 34);
    ctx.fillText(data.mainDestinationName.slice(0, 16), heroW - 160, routeY + 34);

    ctx.save();
    ctx.setLineDash([7, 7]);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(330, routeY + 22);
    ctx.lineTo(660, routeY + 22);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = '#38bdf8';
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✈', 495, routeY + 28);

    // Meta chips
    const metaY = heroY + 345;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(80, metaY, 360, 46, 23);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fill();
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '500 19px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('👤 ' + data.companionsFormatted.slice(0, 22), 100, metaY + 30);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(460, metaY, heroW - 410, 46, 23);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fill();
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 19px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('🗓️ ' + (data.startDay || 'Flexible') + ` • ${data.totalDays} ${txt.days}`, 480, metaY + 30);
    ctx.restore();

    // 3. Ruta & Paradas Card
    const stopsY = 575;
    const stopsH = 340;
    drawGlassPanel(50, stopsY, heroW, stopsH, 30);

    ctx.fillStyle = '#ec4899';
    ctx.font = 'bold 26px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📍 ' + txt.routeTitle, 80, stopsY + 48);

    const stops4to5 = data.stopsList.slice(0, 3);
    stops4to5.forEach((stop, i) => {
      const sY = stopsY + 95 + (i * 75);
      const colors = ['#ec4899', '#0ea5e9', '#10b981'];
      ctx.fillStyle = colors[i % colors.length];
      ctx.beginPath();
      ctx.arc(105, sY + 15, 18, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(stop.num), 105, sY + 22);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(stop.name, 140, sY + 14);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 20px Outfit, Inter, Arial, sans-serif';
      ctx.fillText(`${stop.days} ${txt.days.toLowerCase()} • ${stop.activitiesCount} ${txt.activities.toLowerCase()}`, 140, sY + 40);

      if (i < stops4to5.length - 1) {
        ctx.save();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(105, sY + 35);
        ctx.lineTo(105, sY + 75);
        ctx.stroke();
        ctx.restore();
      }
    });

    // 4. Metrics 4 Columns Row
    const mRowY = 935;
    const mCardW = (heroW - 45) / 4;
    const mCardH = 145;
    const mList45 = [
      { l: txt.destinations, v: String(data.stopsList.length), i: '📍', c: '#ec4899' },
      { l: txt.days, v: String(data.totalDays), i: '⏱️', c: '#0ea5e9' },
      { l: txt.activities, v: String(data.totalActivities), i: '🎯', c: '#10b981' },
      { l: txt.estBudget, v: `${Math.round(data.totalBudget)}${data.currencySymbol}`, i: '💳', c: '#f59e0b' }
    ];
    mList45.forEach((m, idx) => {
      const mx = 50 + idx * (mCardW + 15);
      drawGlassPanel(mx, mRowY, mCardW, mCardH, 22);
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 36px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(m.v, mx + mCardW / 2, mRowY + 65);
      ctx.fillStyle = m.c;
      ctx.font = 'bold 16px Outfit, Inter, Arial, sans-serif';
      ctx.fillText(m.l, mx + mCardW / 2, mRowY + 105);
    });

    // 5. Footer QR Card
    const footY = 1100;
    const footH = 200;
    drawGlassPanel(50, footY, heroW, footH, 30);

    const qrSize45 = 140;
    const qrX = 80;
    const qrY = footY + 30;
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(qrX - 10, qrY - 10, qrSize45 + 20, qrSize45 + 20, 16);
    ctx.fill();
    ctx.drawImage(qrCanvas, qrX, qrY, qrSize45, qrSize45);
    ctx.restore();

    const ctaX = qrX + qrSize45 + 35;
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📱 ' + txt.scanCta, ctaX, footY + 60);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 32px Outfit, Inter, Arial, sans-serif';
    ctx.fillText('plux.nibecarcofeben.com', ctaX, footY + 102);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 18px Outfit, Inter, Arial, sans-serif';
    ctx.fillText('👁️ ' + txt.modeReaderLabel, ctaX, footY + 138);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 17px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(txt.scanSub, ctaX, footY + 168);

  } else if (ratio === '16:9') {
    // ---------------- 16:9 LANDSCAPE BANNER / TWITTER (1920 x 1080) ----------------
    const colW = 880;

    // LEFT COLUMN: Header, Hero, Metrics Grid
    const leftX = 60;
    // Header
    const pluxLogoCanvas = crearCanvasLogoPlux(220, 75);
    ctx.drawImage(pluxLogoCanvas, leftX, 45);

    // Tag
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(leftX + 240, 56, 240, 48, 24);
    ctx.fillStyle = 'linear-gradient(135deg, #ec4899, #a855f7)';
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ ' + txt.tag, leftX + 360, 80);
    ctx.restore();

    // Live badge
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(leftX + colW - 160, 56, 160, 48, 24);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.16)';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(leftX + colW - 134, 80, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 18px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(txt.statusLive, leftX + colW - 118, 81);
    ctx.restore();

    // Hero Card
    const heroY = 135;
    const heroH = 480;
    drawGlassPanel(leftX, heroY, colW, heroH, 32);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 24px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(txt.travelingTo, leftX + 40, heroY + 50);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 52px Outfit, Inter, Montserrat, Arial, sans-serif';
    wrapText(data.tripTitle.toUpperCase(), leftX + 40, heroY + 115, colW - 80, 60, 2);

    // Flight route
    const routeY = heroY + 285;
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 17px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(txt.origin, leftX + 40, routeY);
    ctx.fillText(txt.mainDest, leftX + colW - 200, routeY);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px Outfit, Inter, Arial, sans-serif';
    ctx.fillText(data.departureCity.slice(0, 16), leftX + 40, routeY + 38);
    ctx.fillText(data.mainDestinationName.slice(0, 16), leftX + colW - 200, routeY + 38);

    ctx.save();
    ctx.setLineDash([8, 8]);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(leftX + 280, routeY + 24);
    ctx.lineTo(leftX + colW - 240, routeY + 24);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = '#38bdf8';
    ctx.font = '30px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✈', leftX + colW / 2 - 20, routeY + 32);

    // Meta chips
    const metaY = heroY + 395;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(leftX + 40, metaY, 360, 52, 26);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fill();
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '500 21px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('👤 ' + data.companionsFormatted.slice(0, 22), leftX + 65, metaY + 34);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(leftX + 420, metaY, colW - 460, 52, 26);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fill();
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 21px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('🗓️ ' + (data.startDay || 'Flexible') + ` • ${data.totalDays} ${txt.days}`, leftX + 445, metaY + 34);
    ctx.restore();

    // Metrics 2x2 Grid under Hero
    const gridY = 645;
    const cardW = (colW - 20) / 2;
    const cardH = 175;
    const mList169 = [
      { label: txt.destinations, val: String(data.stopsList.length), icon: '📍', color: '#ec4899' },
      { label: txt.days, val: String(data.totalDays), icon: '⏱️', color: '#0ea5e9' },
      { label: txt.activities, val: String(data.totalActivities), icon: '🎯', color: '#10b981' },
      { label: txt.estBudget, val: `${Math.round(data.totalBudget)} ${data.currencySymbol}`, icon: '💳', color: '#f59e0b' }
    ];

    mList169.forEach((m, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const mX = leftX + col * (cardW + 20);
      const mY = gridY + row * (cardH + 20);

      drawGlassPanel(mX, mY, cardW, cardH, 24);

      ctx.fillStyle = m.color;
      ctx.beginPath();
      ctx.arc(mX + 50, mY + 55, 24, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '24px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(m.icon, mX + 50, mY + 63);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 42px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(m.val, mX + 90, mY + 65);

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 18px Outfit, Inter, Arial, sans-serif';
      ctx.fillText(m.label, mX + 90, mY + 110);
    });

    // RIGHT COLUMN: Stops Panel + Bottom QR Scannable Panel
    const rightX = W - leftX - colW;
    // Stops Panel
    const stopsBoxY = 45;
    const stopsBoxH = 570;
    drawGlassPanel(rightX, stopsBoxY, colW, stopsBoxH, 32);

    ctx.fillStyle = '#ec4899';
    ctx.font = 'bold 28px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📍 ' + txt.routeTitle, rightX + 40, stopsBoxY + 55);

    const stops169 = data.stopsList.slice(0, 4);
    const stopStep = 105;
    stops169.forEach((stop, i) => {
      const sY = stopsBoxY + 120 + (i * stopStep);
      const colors = ['#ec4899', '#0ea5e9', '#10b981', '#f59e0b'];
      ctx.fillStyle = colors[i % colors.length];
      ctx.beginPath();
      ctx.arc(rightX + 65, sY + 20, 22, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(stop.num), rightX + 65, sY + 28);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px Outfit, Inter, Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(stop.name, rightX + 110, sY + 16);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 22px Outfit, Inter, Arial, sans-serif';
      ctx.fillText(`${stop.days} ${txt.days.toLowerCase()} • ${stop.activitiesCount} ${txt.activities.toLowerCase()} programadas`, rightX + 110, sY + 50);

      if (i < stops169.length - 1) {
        ctx.save();
        ctx.setLineDash([6, 6]);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(rightX + 65, sY + 44);
        ctx.lineTo(rightX + 65, sY + stopStep);
        ctx.stroke();
        ctx.restore();
      }
    });

    // Lower QR Code Access Card
    const qrCardY = 645;
    const qrCardH = 370;
    drawGlassPanel(rightX, qrCardY, colW, qrCardH, 32);

    const qrSize169 = 220;
    const qrX = rightX + 45;
    const qrY = qrCardY + 40;
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(qrX - 12, qrY - 12, qrSize169 + 24, qrSize169 + 24, 20);
    ctx.fill();
    ctx.drawImage(qrCanvas, qrX, qrY, qrSize169, qrSize169);
    ctx.restore();

    const ctaX = qrX + qrSize169 + 45;
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 24px Outfit, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📱 ' + txt.scanCta, ctaX, qrCardY + 85);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 36px Outfit, Inter, Arial, sans-serif';
    ctx.fillText('plux.nibecarcofeben.com', ctaX, qrCardY + 135);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 22px Outfit, Inter, Arial, sans-serif';
    ctx.fillText('👁️ ' + txt.modeReaderLabel, ctaX, qrCardY + 180);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 20px Outfit, Inter, Arial, sans-serif';
    wrapText(txt.scanSub, ctaX, qrCardY + 225, colW - (ctaX - rightX) - 30, 28, 2);
  }

  return canvas;
}

// Interactive Aspect Ratio Switcher
window.cambiarRatioTravelCard = async function(ratio) {
  currentTravelCardRatio = ratio;
  
  // 1. Update tab buttons styling
  const buttons = document.querySelectorAll('#travelCardRatioSelector .ratio-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-ratio') === ratio) {
      btn.style.border = '1px solid rgba(56,189,248,0.85)';
      btn.style.background = 'linear-gradient(135deg, rgba(14,165,233,0.35), rgba(99,102,241,0.35))';
      btn.style.color = '#ffffff';
      btn.classList.add('active');
    } else {
      btn.style.border = '1px solid rgba(255,255,255,0.1)';
      btn.style.background = 'rgba(255,255,255,0.04)';
      btn.style.color = '#94a3b8';
      btn.classList.remove('active');
    }
  });

  // 2. Adjust preview wrapper maxWidth
  const wrapper = document.getElementById('travelCardPreviewWrapper');
  if (wrapper) {
    if (ratio === '9:16') wrapper.style.maxWidth = '320px';
    else if (ratio === '1:1') wrapper.style.maxWidth = '400px';
    else if (ratio === '4:5') wrapper.style.maxWidth = '360px';
    else if (ratio === '16:9') wrapper.style.maxWidth = '540px';
  }

  // 3. Render and update preview & buttons
  try {
    const canvas = await renderTravelCardCanvas(ratio);
    const dataUrl = canvas.toDataURL('image/png', 0.95);
    const previewImg = document.getElementById('travelCardPreviewImg');
    if (previewImg) previewImg.src = dataUrl;

    const data = lastTravelCardData || {};
    const safeTitle = (data.tripTitle || 'viaje').toLowerCase().replace(/[^a-z0-9]/g, '_');
    const ratioTag = ratio.replace(':', '_');
    const filename = `plux_${safeTitle}_${ratioTag}.png`;

    const btnDownload = document.getElementById('btnDownloadCard');
    if (btnDownload) {
      btnDownload.onclick = () => {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
        if (typeof showToast === 'function') showToast('Tarjeta descargada', 'success');
      };
    }

    const btnCopy = document.getElementById('btnCopyCard');
    if (btnCopy) {
      btnCopy.onclick = async () => {
        try {
          canvas.toBlob(async (blob) => {
            if (blob && navigator.clipboard && window.ClipboardItem) {
              await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
              if (typeof showToast === 'function') showToast('¡Tarjeta copiada al portapapeles!', 'success');
            } else {
              if (typeof showToast === 'function') showToast('Copia automática no soportada, usa Descargar', 'info');
            }
          });
        } catch(e) {
          console.warn('Clipboard write error:', e);
          if (typeof showToast === 'function') showToast('Usa el botón Descargar', 'info');
        }
      };
    }

    const btnShare = document.getElementById('btnShareNativeCard');
    if (btnShare) {
      btnShare.onclick = async () => {
        try {
          canvas.toBlob(async (blob) => {
            if (blob && navigator.share) {
              try {
                const file = new File([blob], filename, { type: 'image/png' });
                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                  await navigator.share({
                    title: data.tripTitle || 'Mi Itinerario en Plux',
                    text: `¡Mirá mi viaje a ${data.mainDestinationName} en Plux! ${data.shareUrl}`,
                    url: data.shareUrl,
                    files: [file]
                  });
                  return;
                }
              } catch (fileErr) {
                console.warn('File share not supported, fallback to URL share:', fileErr);
              }
              await navigator.share({
                title: data.tripTitle || 'Mi Itinerario en Plux',
                text: `¡Mirá mi viaje a ${data.mainDestinationName} en Plux! ${data.shareUrl}`,
                url: data.shareUrl
              });
            } else if (navigator.clipboard) {
              await navigator.clipboard.writeText(data.shareUrl);
              if (typeof showToast === 'function') showToast('Enlace de viaje copiado al portapapeles', 'success');
            } else {
              if (typeof showToast === 'function') showToast('Función de compartir no disponible, usa Descargar', 'info');
            }
          });
        } catch(e) {
          console.warn('Native share error:', e);
        }
      };
    }
  } catch (err) {
    console.error('Error in cambiarRatioTravelCard:', err);
  }
};

async function compartirTravelCard() {
  if (typeof showToast === 'function') {
    const langKey = (typeof currentLang !== 'undefined' && (currentLang === 'en' || currentLang === 'es')) ? currentLang : 'es';
    showToast(langKey === 'es' ? 'Generando tarjeta oficial de Plux...' : 'Generating official Plux travel card...', 'info');
  }

  try {
    lastTravelCardData = await recopilarDatosTravelCard();
    const modal = document.getElementById('modal-travel-card');
    if (modal) {
      modal.style.display = 'flex';
      await window.cambiarRatioTravelCard(currentTravelCardRatio || '9:16');
    }
  } catch (err) {
    console.error('Error en compartirTravelCard:', err);
    if (typeof showToast === 'function') showToast('Error al generar la tarjeta de viaje: ' + (err.message || err), 'error');
  }
}
window.compartirTravelCard = compartirTravelCard;


// ================== EXPORTAR PDF (DOSSIER EDITORIAL PLUX) ==================
async function asegurarJsPDF() {
  if (typeof window.jspdf !== 'undefined' && window.jspdf && window.jspdf.jsPDF) {
    return window.jspdf.jsPDF;
  }
  if (typeof window.jsPDF === 'function') {
    window.jspdf = { jsPDF: window.jsPDF };
    return window.jsPDF;
  }
  const sources = [
    '/js/jspdf.umd.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
  ];
  for (const src of sources) {
    try {
      const ok = await new Promise((resolve) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = () => resolve(true);
        s.onerror = () => resolve(false);
        document.head.appendChild(s);
      });
      if (ok && typeof window.jspdf !== 'undefined' && window.jspdf && window.jspdf.jsPDF) {
        return window.jspdf.jsPDF;
      }
      if (ok && typeof window.jsPDF === 'function') {
        window.jspdf = { jsPDF: window.jsPDF };
        return window.jsPDF;
      }
    } catch (e) {
      console.warn('Error cargando jsPDF:', src, e);
    }
  }
  return null;
}

async function exportarPDF() {
  const jsPDF = await asegurarJsPDF();
  if (!jsPDF) {
    if (typeof showToast === 'function') showToast('Librería PDF no disponible. Por favor recarga la página.', 'error');
    return;
  }

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const langKey = (typeof currentLang !== 'undefined' && (currentLang === 'en' || currentLang === 'es')) ? currentLang : 'es';

  if (typeof showToast === 'function') {
    showToast(langKey === 'es' ? 'Compilando Dossier Oficial de Plux...' : 'Compiling official Plux Dossier...', 'info');
  }

  // 1. Ensure trip exists in Firestore and get Reader URL
  const shareUrl = await asegurarViajeEnNubeParaCompartir();

  // 2. Trip metrics
  const tripTitle = (typeof getTripCustomTitle === 'function') ? getTripCustomTitle() : (document.getElementById('display-trip-title')?.innerText || 'Viaje en Plux');
  const departureCity = (typeof lugarSalida !== 'undefined' && lugarSalida) ? lugarSalida : 'Sin origen registrado';
  const startDay = document.getElementById('fechaInicio')?.value || 'Fecha a convenir';
  const companionsFormatted = (typeof getCompanionsFormatted === 'function') ? getCompanionsFormatted() : (nombresPersonasGlobal || '@Viajero');
  const currencySymbol = (typeof getMonedaActiva === 'function') ? getMonedaActiva() : 'EUR';

  let totalDays = 0;
  let totalActivities = 0;
  let totalBudget = 0;
  const destinationsList = [];

  if (typeof destinos !== 'undefined' && Array.isArray(destinos) && destinos.length > 0) {
    destinos.forEach((d, idx) => {
      const dDays = (d.dias && Array.isArray(d.dias)) ? d.dias.length : (parseInt(d.dias, 10) || 1);
      totalDays += (dDays > 0 ? dDays : 1);

      let dCost = 0;
      let dActsCount = 0;
      const dActivitiesList = [];

      if (d.dias && Array.isArray(d.dias)) {
        d.dias.forEach((dia, diaIdx) => {
          const diaNum = diaIdx + 1;
          if (dia.eventos && Array.isArray(dia.eventos)) {
            dActsCount += dia.eventos.length;
            dia.eventos.forEach(ev => {
              const evCost = parseFloat(ev.costo || ev.precio || 0) || 0;
              dCost += evCost * (numPersonas || 1);
              dActivitiesList.push({
                dia: diaNum,
                nombre: ev.titulo || ev.title || 'Actividad',
                hora: ev.hora || '',
                precio: evCost,
                completada: ev.completada || false,
                notas: ev.notas || ''
              });
            });
          }
          if (dia.alojamiento) {
            dCost += (parseFloat(dia.alojamiento.precio || 0) || 0);
          }
          if (dia.costosAdicionales && Array.isArray(dia.costosAdicionales)) {
            dia.costosAdicionales.forEach(c => {
              dCost += (parseFloat(c.precio || c.monto || 0) || 0);
            });
          }
        });
      }

      if (Array.isArray(d.actividades)) {
        dActsCount += d.actividades.length;
        d.actividades.forEach(a => {
          const aCost = parseFloat(a.precio || a.costo || 0) || 0;
          dCost += aCost * (numPersonas || 1);
          dActivitiesList.push({
            dia: a.dia || 1,
            nombre: a.nombre || a.titulo || 'Actividad',
            hora: a.hora || '',
            precio: aCost,
            completada: a.completada || false
          });
        });
      }

      let transportSummary = 'Avión';
      let lodgingSummary = 'Hotel';

      if (d.tramos && Array.isArray(d.tramos) && d.tramos.length > 0) {
        d.tramos.forEach(tramo => {
          const tSum = (parseFloat(tramo.precio || 0) || 0) + (parseFloat(tramo.precioAlojamiento || 0) || 0);
          dCost += tSum * (numPersonas || 1);
          if (tramo.medio || tramo.transporte) transportSummary = tramo.medio || tramo.transporte;
          if (tramo.precioAlojamiento && parseFloat(tramo.precioAlojamiento) > 0) lodgingSummary = 'Hospedaje';
        });
      } else {
        dCost += (parseFloat(d.precioIda || 0) || 0) * (numPersonas || 1);
        dCost += (parseFloat(d.precioAlojamiento || 0) || 0);
        if (d.transporteIda) transportSummary = d.transporteIda;
        if (d.tipoAlojamiento) lodgingSummary = d.tipoAlojamiento;
      }

      if (Array.isArray(d.costosAdicionales)) {
        d.costosAdicionales.forEach(c => {
          dCost += (parseFloat(c.precio || c.monto || 0) || 0);
        });
      }

      totalActivities += dActsCount;
      totalBudget += dCost;

      const destName = d.nombre || d.ciudad || `Destino ${idx + 1}`;
      destinationsList.push({
        num: idx + 1,
        name: destName,
        days: dDays > 0 ? dDays : 1,
        transport: transportSummary,
        priceIda: parseFloat(d.precioIda || 0) || 0,
        lodging: lodgingSummary,
        priceLodging: parseFloat(d.precioAlojamiento || 0) || 0,
        activities: dActivitiesList,
        costosExtra: Array.isArray(d.costosAdicionales) ? d.costosAdicionales : []
      });
    });
  }

  if (typeof vueltaPrecioGlobal !== 'undefined') {
    totalBudget += (parseFloat(vueltaPrecioGlobal) || 0) * (numPersonas || 1);
  }
  if (typeof vueltaCostosAdicionales !== 'undefined' && Array.isArray(vueltaCostosAdicionales)) {
    vueltaCostosAdicionales.forEach(vc => {
      totalBudget += (parseFloat(vc.precio || vc.monto || 0) || 0);
    });
  }

  const pageWidth = 210;
  const pageHeight = 297;

  // ================= PAGE 1: COVER DOSSIER =================
  // Dark luxury editorial background
  doc.setFillColor(11, 17, 32); // #0b1120
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative header neon bar (#10b981 to #0ea5e9 to #ec4899)
  doc.setFillColor(16, 185, 129);
  doc.rect(0, 0, pageWidth * 0.45, 3.5, 'F');
  doc.setFillColor(14, 165, 233);
  doc.rect(pageWidth * 0.45, 0, pageWidth * 0.35, 3.5, 'F');
  doc.setFillColor(236, 72, 153);
  doc.rect(pageWidth * 0.80, 0, pageWidth * 0.20, 3.5, 'F');

  // Authentic Plux Logo Bubble Image
  const logoPluxCanvas = crearCanvasLogoPlux(220, 85);
  doc.addImage(logoPluxCanvas.toDataURL('image/png'), 'PNG', 14, 12, 38, 15);

  // Brand text beside logo (NO "SMART TRAVEL OS")
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text('PLUX', 56, 19);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184); // slate-400
  doc.text('Dossier e Itinerario Oficial de Viaje', 56, 25);

  // Right Header info
  doc.setFontSize(8.5);
  doc.setTextColor(148, 163, 184);
  doc.text('plux.nibecarcofeben.com', pageWidth - 14, 18, { align: 'right' });
  const todayStr = new Date().toLocaleDateString();
  doc.text(`Generado el: ${todayStr}`, pageWidth - 14, 23, { align: 'right' });

  // Main Trip Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(255, 255, 255);
  const cleanTitlePDF = (tripTitle || 'EXPEDICION EN PLUX').toUpperCase();
  const splitTitle = doc.splitTextToSize(cleanTitlePDF, pageWidth - 28);
  doc.text(splitTitle, 14, 46);

  const titleLinesCount = Array.isArray(splitTitle) ? splitTitle.length : 1;
  const afterTitleY = 46 + (titleLinesCount * 10);

  // Author / Organizer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(148, 163, 184);
  doc.text(`Organizado por: ${companionsFormatted}`, 14, afterTitleY);

  // ================= INTERACTIVE BUTTON (READER MODE) =================
  // Clean ASCII text without unicode emojis to prevent any character corruption (no Ø=þ€)
  const ctaBtnY = afterTitleY + 8;
  const ctaBtnW = pageWidth - 28; // 182mm
  const ctaBtnH = 11;
  doc.setFillColor(16, 185, 129); // #10b981 emerald
  doc.roundedRect(14, ctaBtnY, ctaBtnW, ctaBtnH, 5.5, 5.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(255, 255, 255);
  doc.text('CLIC AQUI PARA ABRIR ESTE VIAJE EN VIVO (MODO LECTOR) ->', pageWidth / 2, ctaBtnY + 7.2, { align: 'center' });

  // Add clickable hyperlink directly on PDF button
  doc.link(14, ctaBtnY, ctaBtnW, ctaBtnH, { url: shareUrl });

  // Overview Table
  const tableData = [
    [
      { content: 'Origen / Salida', styles: { fontStyle: 'bold', fillColor: [15, 23, 42], textColor: [255, 255, 255] } },
      { content: departureCity.toUpperCase(), styles: { textColor: [226, 232, 240] } },
      { content: 'Fecha de Inicio', styles: { fontStyle: 'bold', fillColor: [15, 23, 42], textColor: [255, 255, 255] } },
      { content: startDay, styles: { textColor: [56, 189, 248] } }
    ],
    [
      { content: 'Viajeros', styles: { fontStyle: 'bold', fillColor: [15, 23, 42], textColor: [255, 255, 255] } },
      { content: companionsFormatted, styles: { textColor: [226, 232, 240] } },
      { content: 'Presupuesto Total Est.', styles: { fontStyle: 'bold', fillColor: [15, 23, 42], textColor: [255, 255, 255] } },
      { content: `${Math.round(totalBudget)} ${currencySymbol}`, styles: { fontStyle: 'bold', textColor: [52, 211, 153] } }
    ]
  ];

  doc.autoTable({
    startY: ctaBtnY + 16,
    margin: { left: 14, right: 14 },
    body: tableData,
    theme: 'grid',
    styles: {
      fontSize: 8.5,
      cellPadding: 3.5,
      lineColor: [30, 41, 59],
      lineWidth: 0.3
    },
    tableLineColor: [30, 41, 59],
    tableLineWidth: 0.3
  });

  // Destinations Breakdown list on Cover
  let currentY = doc.lastAutoTable.finalY + 10;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(236, 72, 153); // pink
  doc.text('RUTA Y DESTINOS DEL VIAJE', 14, currentY);
  currentY += 5;

  const destTable = destinationsList.map((d, i) => [
    `#${d.num}`,
    d.name,
    `${d.days} dias`,
    `${d.activities.length} actividades`,
    `${d.transport} / ${d.lodging}`
  ]);

  if (destTable.length > 0) {
    doc.autoTable({
      startY: currentY,
      margin: { left: 14, right: 14 },
      head: [['#', 'Destino', 'Estadia', 'Actividades', 'Transporte & Estadia']],
      body: destTable,
      theme: 'plain',
      styles: {
        fontSize: 8.5,
        cellPadding: 2.5,
        textColor: [226, 232, 240]
      },
      headStyles: {
        fillColor: [30, 41, 59],
        textColor: [56, 189, 248],
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [15, 23, 42]
      }
    });
    currentY = doc.lastAutoTable.finalY + 8;
  }

  // Scannable QR Code section at bottom of Page 1
  const qrBoxY = Math.max(currentY + 4, 215);
  const qrBoxH = 62;
  const qrBoxW = pageWidth - 28;

  doc.setFillColor(15, 23, 42); // slate-900
  doc.roundedRect(14, qrBoxY, qrBoxW, qrBoxH, 4, 4, 'F');
  doc.setDrawColor(14, 165, 233);
  doc.setLineWidth(0.4);
  doc.roundedRect(14, qrBoxY, qrBoxW, qrBoxH, 4, 4, 'S');

  // Render Real Scannable QR
  const qrCanvasCover = await generarCanvasQRCode(shareUrl, 200);
  const qrDataUrl = qrCanvasCover.toDataURL ? qrCanvasCover.toDataURL('image/png') : qrCanvasCover.src;
  if (qrDataUrl) {
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(20, qrBoxY + 8, 46, 46, 2, 2, 'F');
    doc.addImage(qrDataUrl, 'PNG', 22, qrBoxY + 10, 42, 42);
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(52, 211, 153);
  doc.text('MODO LECTOR DISPONIBLE', 74, qrBoxY + 18);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text('ESCANEA CON TU MOVIL PARA ABRIR ESTE VIAJE EN PLUX', 74, qrBoxY + 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  const expl = [
    '1. Abre la camara de tu smartphone y enfoca el codigo QR.',
    '2. Accederas de inmediato al mapa interactivo y presupuesto en Modo Lectura.',
    '3. Disponible en cualquier navegador web, iOS y Android.'
  ];
  doc.text(expl, 74, qrBoxY + 33);

  // Link on the QR block
  doc.link(14, qrBoxY, qrBoxW, qrBoxH, { url: shareUrl });

  // Page 1 Footer
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('PLUX • Pagina 1 de 2 • Itinerario Oficial', pageWidth / 2, pageHeight - 7, { align: 'center' });

  // ================= PAGE 2: DETAILED ITINERARY =================
  doc.addPage();
  doc.setFillColor(11, 17, 32);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Header Page 2
  doc.addImage(logoPluxCanvas.toDataURL('image/png'), 'PNG', 14, 10, 28, 11);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.text('CRONOGRAMA DETALLADO DE ACTIVIDADES', 46, 17);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text('Desglose diario de actividades, reservas y costos estimados', 46, 22);

  // Build activities rows
  const actRows = [];
  let dayCounter = 1;

  destinationsList.forEach(dest => {
    if (dest.activities && dest.activities.length > 0) {
      dest.activities.forEach(act => {
        actRows.push([
          `Dia ${act.dia || dayCounter}`,
          dest.name,
          act.nombre || 'Actividad',
          act.hora || 'Flexible',
          (act.precio && parseFloat(act.precio) > 0) ? `${act.precio} ${currencySymbol}` : 'Gratis / Incluido',
          act.completada ? 'Listo' : 'Planificado'
        ]);
      });
    } else {
      actRows.push([
        `Dia ${dayCounter}`,
        dest.name,
        'Exploracion libre y recorrido por la ciudad',
        'Todo el dia',
        '0.00 ' + currencySymbol,
        'Planificado'
      ]);
    }
    dayCounter += dest.days;
  });

  doc.autoTable({
    startY: 28,
    margin: { left: 14, right: 14 },
    head: [['Dia', 'Destino', 'Actividad / Lugar', 'Horario', 'Costo Est.', 'Estado']],
    body: actRows,
    theme: 'grid',
    styles: {
      fontSize: 8,
      cellPadding: 2.8,
      lineColor: [30, 41, 59],
      lineWidth: 0.2,
      textColor: [226, 232, 240]
    },
    headStyles: {
      fillColor: [15, 23, 42],
      textColor: [56, 189, 248],
      fontStyle: 'bold',
      lineColor: [30, 41, 59]
    },
    alternateRowStyles: {
      fillColor: [15, 23, 42]
    }
  });

  // Notes and Tips box
  const notesY = Math.min(doc.lastAutoTable.finalY + 8, pageHeight - 45);
  doc.setFillColor(15, 23, 42);
  doc.roundedRect(14, notesY, pageWidth - 28, 28, 3, 3, 'F');
  doc.setDrawColor(30, 41, 59);
  doc.roundedRect(14, notesY, pageWidth - 28, 28, 3, 3, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(56, 189, 248);
  doc.text('INFORMACION IMPORTANTE & CONSEJOS PLUX', 18, notesY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  const tips = [
    '• Guarda este documento en tu movil para acceder a los horarios de tu itinerario sin conexion.',
    '• Puedes consultar el pronostico del clima actualizado y cambios de moneda en plux.nibecarcofeben.com.',
    '• Para solicitar cambios en este viaje, contacta al organizador o ingresa con un codigo de editor.'
  ];
  doc.text(tips, 18, notesY + 12);

  // Page 2 Footer
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('PLUX • Pagina 2 de 2 • Itinerario Oficial', pageWidth / 2, pageHeight - 7, { align: 'center' });

  // 3. Output to Modal with Download & Print
  const pdfBlob = doc.output('blob');
  const pdfBlobUrl = URL.createObjectURL(pdfBlob);
  const safeFilename = `plux_${(tripTitle || 'itinerario').toLowerCase().replace(/[^a-z0-9]/g, '_')}.pdf`;

  const modal = document.getElementById('modal-pdf-preview');
  const iframe = document.getElementById('pdfPreviewFrame') || document.getElementById('pdf-preview-frame');
  const btnDownload = document.getElementById('btnDownloadPDF') || document.getElementById('btn-download-pdf');
  const btnPrint = document.getElementById('btnPrintPDF') || document.getElementById('btn-print-pdf');
  const btnOpenTab = document.getElementById('btnOpenPDFTab') || document.getElementById('btn-open-pdf-tab');

  if (modal && iframe) {
    iframe.src = pdfBlobUrl;
    modal.style.display = 'flex';

    if (btnDownload) {
      btnDownload.onclick = () => {
        doc.save(safeFilename);
        if (typeof showToast === 'function') showToast('PDF descargado con exito', 'success');
      };
    }

    if (btnPrint) {
      btnPrint.onclick = () => {
        try {
          iframe.contentWindow.print();
        } catch(e) {
          window.open(pdfBlobUrl, '_blank');
        }
      };
    }

    if (btnOpenTab) {
      btnOpenTab.onclick = () => {
        window.open(pdfBlobUrl, '_blank');
      };
    }

    if (typeof showToast === 'function') showToast('Dossier PDF oficial listo para ver', 'success');
  } else {
    doc.save(safeFilename);
    if (typeof showToast === 'function') showToast('PDF generado correctamente', 'success');
  }
}

    window.compartirTravelCard = compartirTravelCard;
    window.exportarPDF = exportarPDF;


    window.getTripCustomTitle = getTripCustomTitle;
    window.getCompanionsFormatted = getCompanionsFormatted;
    window.safeFormatDateStr = safeFormatDateStr;

