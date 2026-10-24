// ==========================================================================
// PLUX: RULETA DE DECISIONES, BITÁCORA Y 50 HITOS DE VIAJE
// ==========================================================================

(function() {
  'use strict';

  // Helpers para evaluación automática
  function countDest() {
    return Array.isArray(window.destinos) ? window.destinos.length : 0;
  }

  function countDias() {
    if (!Array.isArray(window.destinos)) return 0;
    return window.destinos.reduce((acc, d) => acc + (d.dias ? d.dias.length : 0), 0);
  }

  function countActividades() {
    if (!Array.isArray(window.destinos)) return 0;
    let total = 0;
    window.destinos.forEach(d => {
      if (Array.isArray(d.dias)) {
        d.dias.forEach(dia => {
          if (Array.isArray(dia.eventos)) total += dia.eventos.length;
        });
      }
    });
    return total;
  }

  function maxActividadesPorDia() {
    if (!Array.isArray(window.destinos)) return 0;
    let max = 0;
    window.destinos.forEach(d => {
      if (Array.isArray(d.dias)) {
        d.dias.forEach(dia => {
          if (Array.isArray(dia.eventos) && dia.eventos.length > max) {
            max = dia.eventos.length;
          }
        });
      }
    });
    return max;
  }

  function hasKeyword(words) {
    if (!Array.isArray(window.destinos)) return false;
    for (const d of window.destinos) {
      if (!Array.isArray(d.dias)) continue;
      for (const dia of d.dias) {
        if (!Array.isArray(dia.eventos)) continue;
        for (const ev of dia.eventos) {
          const tit = (ev.titulo || '').toLowerCase();
          const notas = (ev.notas || '').toLowerCase();
          if (words.some(w => tit.includes(w) || notas.includes(w))) return true;
        }
      }
    }
    return false;
  }

  function hasLateActivity() {
    if (!Array.isArray(window.destinos)) return false;
    for (const d of window.destinos) {
      if (!Array.isArray(d.dias)) continue;
      for (const dia of d.dias) {
        if (!Array.isArray(dia.eventos)) continue;
        for (const ev of dia.eventos) {
          if (ev.hora && (ev.hora.startsWith('20:') || ev.hora.startsWith('21:') || ev.hora.startsWith('22:') || ev.hora.startsWith('23:'))) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function countMedia(type) {
    const entries = getBitacoraEntries();
    let total = 0;
    entries.forEach(e => {
      if (Array.isArray(e.media)) {
        total += e.media.filter(m => m.type === type).length;
      }
    });
    return total;
  }

  function countParticipants() {
    if (typeof window.getTripParticipants === 'function') {
      const parts = window.getTripParticipants();
      return Array.isArray(parts) ? parts.length : 1;
    }
    return 1;
  }

  function isVacaActive() {
    const toggle = document.getElementById('vaca-toggle');
    return toggle ? Boolean(toggle.checked) : false;
  }

  function hasCostosAsignados() {
    if (!Array.isArray(window.destinos)) return false;
    for (const d of window.destinos) {
      if (!Array.isArray(d.dias)) continue;
      for (const dia of d.dias) {
        if (Array.isArray(dia.eventos) && dia.eventos.some(e => Number(e.costo) > 0)) {
          return true;
        }
      }
    }
    return false;
  }

  function countCartelitos() {
    try {
      const data = localStorage.getItem('plux_cartelitos_v2');
      return data ? JSON.parse(data).length : 0;
    } catch(e) { return 0; }
  }

  function hasLinkedNotes() {
    try {
      const data = localStorage.getItem('plux_cartelitos_v2');
      if (!data) return false;
      const arr = JSON.parse(data);
      return arr.some(n => n.enlace && n.enlace.id);
    } catch(e) { return false; }
  }

  function hasInterNoteLinks() {
    try {
      const data = localStorage.getItem('plux_cartelitos_v2');
      if (!data) return false;
      const arr = JSON.parse(data);
      return arr.some(n => Array.isArray(n.connectedNoteIds) && n.connectedNoteIds.length > 0);
    } catch(e) { return false; }
  }

  function countChecklistDone() {
    try {
      let done = 0;
      const items = document.querySelectorAll('#checklist-items-container input[type="checkbox"]:checked');
      return items ? items.length : 0;
    } catch(e) { return 0; }
  }

  function countUnlockedLogros() {
    return Object.keys(getLogrosGuardados()).length;
  }

  // ========================================================================
  // CATÁLOGO DE 50 LOGROS REALES DE VIAJE
  // ========================================================================
  const CATALOGO_50_LOGROS = [
    // --- 1. RUTA Y DESTINOS (10) ---
    { id: 'l1', cat: 'Ruta', titulo: 'Primer Destino', icono: 'fa-location-dot', desc: 'Agregaste tu primera ciudad o parada al itinerario.', check: () => countDest() >= 1 },
    { id: 'l2', cat: 'Ruta', titulo: 'Doble Parada', icono: 'fa-map-pin', desc: 'Planificaste dos destinos en el mismo viaje.', check: () => countDest() >= 2 },
    { id: 'l3', cat: 'Ruta', titulo: 'Ruta Triangular', icono: 'fa-route', desc: 'Conectaste tres destinos en tu itinerario.', check: () => countDest() >= 3 },
    { id: 'l4', cat: 'Ruta', titulo: 'Circuito Completo', icono: 'fa-arrows-split-up-and-left', desc: 'Alcanzaste 5 o más destinos en un viaje.', check: () => countDest() >= 5 },
    { id: 'l5', cat: 'Ruta', titulo: 'Expedición Continental', icono: 'fa-earth-americas', desc: 'Planificaste 8 o más ciudades o escalas.', check: () => countDest() >= 8 },
    { id: 'l6', cat: 'Ruta', titulo: 'Escapada Breve', icono: 'fa-clock', desc: 'Un viaje ágil de 2 a 3 días organizados.', check: () => countDias() >= 2 },
    { id: 'l7', cat: 'Ruta', titulo: 'Semana de Aventuras', icono: 'fa-calendar-week', desc: 'Organizaste un itinerario de 7 o más días.', check: () => countDias() >= 7 },
    { id: 'l8', cat: 'Ruta', titulo: 'Gran Travesía', icono: 'fa-calendar-days', desc: 'Itinerario de 14 o más días completos.', check: () => countDias() >= 14 },
    { id: 'l9', cat: 'Ruta', titulo: 'Mes Trotamundos', icono: 'fa-compass', desc: 'Planificaste un viaje de 30 o más días.', check: () => countDias() >= 30 },
    { id: 'l10', cat: 'Ruta', titulo: 'Ruta en Marcha', icono: 'fa-person-walking-luggage', desc: 'Activaste el Modo Viaje Activo para viajar.', check: () => false },

    // --- 2. ACTIVIDADES Y EXPLORACIÓN (10) ---
    { id: 'l11', cat: 'Exploración', titulo: 'Punto de Partida', icono: 'fa-flag', desc: 'Registraste tu primera actividad en el viaje.', check: () => countActividades() >= 1 },
    { id: 'l12', cat: 'Exploración', titulo: 'Día Completo', icono: 'fa-sun', desc: 'Cargaste 3 o más actividades en una misma jornada.', check: () => maxActividadesPorDia() >= 3 },
    { id: 'l13', cat: 'Exploración', titulo: 'Jornada Intensa', icono: 'fa-bolt', desc: 'Cargaste 5 o más planes en un solo día.', check: () => maxActividadesPorDia() >= 5 },
    { id: 'l14', cat: 'Exploración', titulo: 'Caminante Urbano', icono: 'fa-shoe-prints', desc: 'Alcanzaste 10 actividades en tu itinerario.', check: () => countActividades() >= 10 },
    { id: 'l15', cat: 'Exploración', titulo: 'Guía Avanzado', icono: 'fa-map-location', desc: 'Registraste 25 actividades programadas.', check: () => countActividades() >= 25 },
    { id: 'l16', cat: 'Exploración', titulo: 'Itinerario Maestro', icono: 'fa-award', desc: 'Alcanzaste 50 actividades en tu viaje.', check: () => countActividades() >= 50 },
    { id: 'l17', cat: 'Exploración', titulo: 'Cultura e Historia', icono: 'fa-landmark', desc: 'Programaste visitas a museos o sitios arqueológicos.', check: () => hasKeyword(['museo', 'templo', 'iglesia', 'castillo', 'monumento', 'ruinas']) },
    { id: 'l18', cat: 'Exploración', titulo: 'Ruta Gastronómica', icono: 'fa-utensils', desc: 'Incluiste restaurantes, comidas típicas o mercados.', check: () => hasKeyword(['cena', 'almuerzo', 'comida', 'restaurante', 'mercado', 'tapas', 'pizza', 'sushi']) },
    { id: 'l19', cat: 'Exploración', titulo: 'Vistas Panorámicas', icono: 'fa-mountain-sun', desc: 'Agregaste miradores, torres o paseos elevados.', check: () => hasKeyword(['mirador', 'torre', 'colina', 'montaña', 'vista', 'rooftop']) },
    { id: 'l20', cat: 'Exploración', titulo: 'Noche en la Ciudad', icono: 'fa-moon', desc: 'Planificaste eventos nocturnos después de las 20:00 hs.', check: () => hasLateActivity() },

    // --- 3. BITÁCORA Y MEMORIAS (10) ---
    { id: 'l21', cat: 'Bitácora', titulo: 'Primera Página', icono: 'fa-book-open', desc: 'Escribiste tu primer relato en la Bitácora.', check: () => getBitacoraEntries().length >= 1 },
    { id: 'l22', cat: 'Bitácora', titulo: 'Relator de Rutas', icono: 'fa-pen-nib', desc: 'Guardaste 3 registros de viaje en la bitácora.', check: () => getBitacoraEntries().length >= 3 },
    { id: 'l23', cat: 'Bitácora', titulo: 'Diario Completo', icono: 'fa-book-bookmark', desc: 'Alcanzaste 5 memorias escritas en tu diario.', check: () => getBitacoraEntries().length >= 5 },
    { id: 'l24', cat: 'Bitácora', titulo: 'Cronista Experto', icono: 'fa-book', desc: 'Escribiste 10 o más relatos de expedición.', check: () => getBitacoraEntries().length >= 10 },
    { id: 'l25', cat: 'Bitácora', titulo: 'Primera Captura', icono: 'fa-camera', desc: 'Subiste tu primera fotografía a la nube.', check: () => countMedia('image') >= 1 },
    { id: 'l26', cat: 'Bitácora', titulo: 'Álbum en Marcha', icono: 'fa-images', desc: 'Subiste 5 fotografías a la bitácora.', check: () => countMedia('image') >= 5 },
    { id: 'l27', cat: 'Bitácora', titulo: 'Galería de Ruta', icono: 'fa-photo-film', desc: 'Guardaste 15 fotos de tus jornadas.', check: () => countMedia('image') >= 15 },
    { id: 'l28', cat: 'Bitácora', titulo: 'Cámara en Mano', icono: 'fa-video', desc: 'Subiste tu primer video de viaje a Cloudinary.', check: () => countMedia('video') >= 1 },
    { id: 'l29', cat: 'Bitácora', titulo: 'Cine de Expedición', icono: 'fa-film', desc: 'Subiste 3 videos a tu bitácora de viaje.', check: () => countMedia('video') >= 3 },
    { id: 'l30', cat: 'Bitácora', titulo: 'Memoria al Muro', icono: 'fa-thumbtack', desc: 'Fijaste un relato de la bitácora como nota en el lienzo.', check: () => false },

    // --- 4. GRUPO Y DECISIONES (10) ---
    { id: 'l31', cat: 'Grupo', titulo: 'Compañero de Ruta', icono: 'fa-user-group', desc: 'Compartiste tu viaje con otro viajero o amigo.', check: () => countParticipants() >= 2 },
    { id: 'l32', cat: 'Grupo', titulo: 'Expedición en Grupo', icono: 'fa-users', desc: 'Viaje planificado con 3 o más personas.', check: () => countParticipants() >= 3 },
    { id: 'l33', cat: 'Grupo', titulo: 'Cuentas Claras', icono: 'fa-wallet', desc: 'Activaste el sistema financiero de La Vaca.', check: () => isVacaActive() },
    { id: 'l34', cat: 'Grupo', titulo: 'Presupuesto Detallado', icono: 'fa-coins', desc: 'Asignaste costos estimados a tus actividades.', check: () => hasCostosAsignados() },
    { id: 'l35', cat: 'Grupo', titulo: 'El Azar Decide', icono: 'fa-dharmachakra', desc: 'Giraste la ruleta para resolver una elección.', check: () => false },
    { id: 'l36', cat: 'Grupo', titulo: 'Mesa por Suerte', icono: 'fa-plate-wheat', desc: 'Resolviste una comida con la categoría Gastronomía.', check: () => false },
    { id: 'l37', cat: 'Grupo', titulo: 'Plan Inesperado', icono: 'fa-dice', desc: 'Elegiste una actividad mediante la ruleta.', check: () => false },
    { id: 'l38', cat: 'Grupo', titulo: 'Turno de Pago', icono: 'fa-credit-card', desc: 'Sorteaste quién paga la cuenta con la ruleta.', check: () => false },
    { id: 'l39', cat: 'Grupo', titulo: 'Voz del Grupo', icono: 'fa-square-poll-vertical', desc: 'Lanzaste una encuesta en el chat grupal.', check: () => false },
    { id: 'l40', cat: 'Grupo', titulo: 'Salón de Charla', icono: 'fa-comments', desc: 'Participaste en el chat social de Plux.', check: () => false },

    // --- 5. HERRAMIENTAS Y CANVAS (10) ---
    { id: 'l41', cat: 'Canvas', titulo: 'Nota en Pantalla', icono: 'fa-note-sticky', desc: 'Creaste tu primer cartelito en el lienzo interactivo.', check: () => countCartelitos() >= 1 },
    { id: 'l42', cat: 'Canvas', titulo: 'Muro de Ideas', icono: 'fa-table-cells-large', desc: 'Organizaste 3 o más cartelitos en el canvas.', check: () => countCartelitos() >= 3 },
    { id: 'l43', cat: 'Canvas', titulo: 'Hilos Conectores', icono: 'fa-bezier-curve', desc: 'Conectaste una nota a un destino con un hilo.', check: () => hasLinkedNotes() },
    { id: 'l44', cat: 'Canvas', titulo: 'Red Orgánica', icono: 'fa-network-wired', desc: 'Uniste dos notas entre sí con enlaces flotantes.', check: () => hasInterNoteLinks() },
    { id: 'l45', cat: 'Canvas', titulo: 'Cartógrafo', icono: 'fa-map-location-dot', desc: 'Visualizaste tus destinos en el mapa interactivo.', check: () => false },
    { id: 'l46', cat: 'Canvas', titulo: 'Meteorología', icono: 'fa-cloud-sun', desc: 'Consultaste el clima en vivo de tus destinos.', check: () => false },
    { id: 'l47', cat: 'Canvas', titulo: 'Cambio de Divisa', icono: 'fa-money-bill-transfer', desc: 'Usaste el conversor multidivisa.', check: () => false },
    { id: 'l48', cat: 'Canvas', titulo: 'Sin Barreras', icono: 'fa-language', desc: 'Abriste el traductor para preparar tu viaje.', check: () => false },
    { id: 'l49', cat: 'Canvas', titulo: 'Primer Equipaje', icono: 'fa-check', desc: 'Marcaste tu primer ítem en el checklist de viaje.', check: () => countChecklistDone() >= 1 },
    { id: 'l50', cat: 'Canvas', titulo: 'Viajero Maestro', icono: 'fa-trophy', desc: 'Desbloqueaste 25 o más hitos de expedición en Plux.', check: () => countUnlockedLogros() >= 25 }
  ];

  let categoriaFiltroLogros = 'Todos';

  function getLogrosGuardados() {
    try {
      const data = localStorage.getItem('plux_logros_unlocked');
      return data ? JSON.parse(data) : {};
    } catch(e) {
      return {};
    }
  }

  function desbloquearLogro(logroId) {
    const logro = CATALOGO_50_LOGROS.find(l => l.id === logroId);
    if (!logro) return;

    const guardados = getLogrosGuardados();
    if (guardados[logroId]) return;

    guardados[logroId] = {
      unlockedAt: new Date().toISOString()
    };
    localStorage.setItem('plux_logros_unlocked', JSON.stringify(guardados));

    if (typeof window.showToast === 'function') {
      window.showToast(`Logro obtenido: ${logro.titulo}`, 'success');
    }
    renderizarLogrosModal();
  }
  window.desbloquearLogro = desbloquearLogro;

  function evaluarLogrosAutomaticos() {
    CATALOGO_50_LOGROS.forEach(l => {
      try {
        if (typeof l.check === 'function' && l.check()) {
          desbloquearLogro(l.id);
        }
      } catch(e) {}
    });
  }

  function abrirModalLogros() {
    cerrarModalesHerramientas();
    evaluarLogrosAutomaticos();
    const modal = document.getElementById('modal-logros');
    if (modal) {
      modal.style.display = 'flex';
      renderizarLogrosModal();
    }
  }
  window.abrirModalLogros = abrirModalLogros;

  function cerrarModalLogros() {
    const modal = document.getElementById('modal-logros');
    if (modal) modal.style.display = 'none';
  }
  window.cerrarModalLogros = cerrarModalLogros;

  function filtrarLogrosPorCategoria(cat) {
    categoriaFiltroLogros = cat;
    document.querySelectorAll('.logros-cat-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-cat') === cat);
    });
    renderizarLogrosModal();
  }
  window.filtrarLogrosPorCategoria = filtrarLogrosPorCategoria;

  function renderizarLogrosModal() {
    const container = document.getElementById('logros-grid-container');
    const progressFill = document.getElementById('logros-progress-fill');
    const progressText = document.getElementById('logros-progress-text');
    if (!container) return;

    const guardados = getLogrosGuardados();
    const totalCount = CATALOGO_50_LOGROS.length;
    let unlockedTotal = 0;

    CATALOGO_50_LOGROS.forEach(l => {
      if (guardados[l.id]) unlockedTotal++;
    });

    const listaFiltrada = categoriaFiltroLogros === 'Todos'
      ? CATALOGO_50_LOGROS
      : CATALOGO_50_LOGROS.filter(l => l.cat === categoriaFiltroLogros);

    container.innerHTML = '';

    listaFiltrada.forEach(l => {
      const data = guardados[l.id];
      const isUnlocked = Boolean(data);

      const dateStr = isUnlocked && data.unlockedAt 
        ? new Date(data.unlockedAt).toLocaleDateString()
        : 'Pendiente';

      const card = document.createElement('div');
      card.className = `logro-card ${isUnlocked ? 'desbloqueado' : 'bloqueado'}`;
      card.innerHTML = `
        <div class="logro-icon-bubble">
          <i class="fa-solid ${l.icono}"></i>
        </div>
        <div class="logro-info">
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <h4>${l.titulo}</h4>
            <span style="font-size:0.68rem; color:var(--gris); text-transform:uppercase;">${l.cat}</span>
          </div>
          <p>${l.desc}</p>
          <div class="logro-unlocked-date">${isUnlocked ? 'Obtenido el ' + dateStr : 'No alcanzado aún'}</div>
        </div>
      `;
      container.appendChild(card);
    });

    const percent = Math.round((unlockedTotal / totalCount) * 100);
    if (progressFill) progressFill.style.width = percent + '%';
    if (progressText) progressText.textContent = `${unlockedTotal} de ${totalCount} hitos alcanzados (${percent}%)`;
  }


  // ========================================================================
  // 2. RULETA DE DECISIONES
  // ========================================================================
  let ruletaOpciones = ['Restaurante local', 'Punto histórico', 'Cafetería', 'Mercado gastronómico', 'Caminata'];
  let ruletaAngulo = 0;
  let ruletaSpinning = false;
  const PALETA_RULETA = [
    '#2563eb', '#059669', '#d97706', '#dc2626',
    '#7c3aed', '#0891b2', '#4b5563', '#4f46e5'
  ];

  function abrirModalRuleta() {
    cerrarModalesHerramientas();
    const modal = document.getElementById('modal-ruleta');
    if (modal) {
      modal.style.display = 'flex';
      dibujarRuleta();
      renderizarOpcionesRuleta();
    }
  }
  window.abrirModalRuleta = abrirModalRuleta;

  function cerrarModalRuleta() {
    const modal = document.getElementById('modal-ruleta');
    if (modal) modal.style.display = 'none';
  }
  window.cerrarModalRuleta = cerrarModalRuleta;

  function dibujarRuleta() {
    const canvas = document.getElementById('ruleta-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = cx - 10;

    ctx.clearRect(0, 0, width, height);

    const n = ruletaOpciones.length;
    if (n === 0) {
      ctx.fillStyle = '#64748b';
      ctx.font = '500 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Añade opciones a la lista', cx, cy);
      return;
    }

    const arc = (2 * Math.PI) / n;

    for (let i = 0; i < n; i++) {
      const angle = ruletaAngulo + i * arc;
      ctx.beginPath();
      ctx.fillStyle = PALETA_RULETA[i % PALETA_RULETA.length];
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle, angle + arc);
      ctx.lineTo(cx, cy);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.save();
      ctx.fillStyle = '#ffffff';
      ctx.font = '600 13px system-ui, -apple-system, sans-serif';
      ctx.translate(cx, cy);
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = 'right';

      const label = ruletaOpciones[i].length > 16 
        ? ruletaOpciones[i].substring(0, 14) + '...' 
        : ruletaOpciones[i];
      ctx.fillText(label, radius - 18, 5);
      ctx.restore();
    }

    ctx.beginPath();
    ctx.arc(cx, cy, 24, 0, 2 * Math.PI);
    ctx.fillStyle = '#0f172a';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PLUX', cx, cy);
  }

  function playTickSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.035);
    } catch(e) {}
  }

  function girarRuleta() {
    if (ruletaSpinning || ruletaOpciones.length < 2) return;
    ruletaSpinning = true;

    const btn = document.getElementById('btn-spin-ruleta');
    if (btn) btn.disabled = true;

    const banner = document.getElementById('ruleta-winner-banner');
    if (banner) banner.style.display = 'none';

    const n = ruletaOpciones.length;
    const vueltas = 5 + Math.floor(Math.random() * 4);
    const rotacionExtra = Math.random() * 2 * Math.PI;
    const anguloTotal = vueltas * 2 * Math.PI + rotacionExtra;
    const duracion = 4000;
    const inicio = performance.now();
    const anguloInicial = ruletaAngulo;
    let ultimoTick = 0;

    function animar(ahora) {
      const t = Math.min((ahora - inicio) / duracion, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      ruletaAngulo = anguloInicial + anguloTotal * ease;

      if (ahora - ultimoTick > 90 + t * 200) {
        playTickSound();
        ultimoTick = ahora;
      }

      dibujarRuleta();

      if (t < 1) {
        requestAnimationFrame(animar);
      } else {
        ruletaSpinning = false;
        if (btn) btn.disabled = false;
        finalizarGiro();
      }
    }

    requestAnimationFrame(animar);
  }
  window.girarRuleta = girarRuleta;

  function finalizarGiro() {
    const n = ruletaOpciones.length;
    const arc = (2 * Math.PI) / n;
    const anguloNormalizado = (ruletaAngulo % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    let anguloPuntero = (3 * Math.PI / 2 - anguloNormalizado) % (2 * Math.PI);
    if (anguloPuntero < 0) anguloPuntero += 2 * Math.PI;

    const indiceGanador = Math.floor(anguloPuntero / arc) % n;
    const ganador = ruletaOpciones[indiceGanador] || ruletaOpciones[0];

    const banner = document.getElementById('ruleta-winner-banner');
    if (banner) {
      banner.innerHTML = `Opción seleccionada: <strong>${ganador}</strong>`;
      banner.style.display = 'block';
    }

    desbloquearLogro('l35'); // El Azar Decide
  }

  function renderizarOpcionesRuleta() {
    const container = document.getElementById('ruleta-options-container');
    if (!container) return;
    container.innerHTML = '';

    ruletaOpciones.forEach((opt, idx) => {
      const pill = document.createElement('div');
      pill.className = 'ruleta-option-pill';
      pill.innerHTML = `
        <span>${opt}</span>
        <button class="ruleta-del-opt-btn" onclick="window.eliminarOpcionRuleta(${idx})" title="Eliminar">&times;</button>
      `;
      container.appendChild(pill);
    });
  }

  function agregarOpcionRuleta() {
    const input = document.getElementById('ruleta-input-nueva-opcion');
    if (!input) return;
    const txt = input.value.trim();
    if (txt) {
      ruletaOpciones.push(txt);
      input.value = '';
      dibujarRuleta();
      renderizarOpcionesRuleta();
    }
  }
  window.agregarOpcionRuleta = agregarOpcionRuleta;

  function eliminarOpcionRuleta(idx) {
    if (ruletaOpciones.length <= 2) {
      if (typeof window.showToast === 'function') {
        window.showToast('La ruleta requiere al menos 2 opciones', 'info');
      }
      return;
    }
    ruletaOpciones.splice(idx, 1);
    dibujarRuleta();
    renderizarOpcionesRuleta();
  }
  window.eliminarOpcionRuleta = eliminarOpcionRuleta;

  function setPresetRuleta(tipo) {
    if (tipo === 'gastronomia') {
      ruletaOpciones = ['Restaurante local', 'Mercado gastronómico', 'Cafetería', 'Comida rápida', 'Parrilla', 'Cocina de autor'];
      desbloquearLogro('l36');
    } else if (tipo === 'actividades') {
      ruletaOpciones = ['Museo histórico', 'Mirador panorámico', 'Paseo en parque', 'Recorrido céntrico', 'Centro comercial', 'Tiempo libre'];
      desbloquearLogro('l37');
    } else if (tipo === 'pago') {
      const parts = typeof window.getTripParticipants === 'function' ? window.getTripParticipants() : [];
      if (parts && parts.length >= 2) {
        ruletaOpciones = parts.map(p => p.startsWith('@') ? p : '@' + p);
      } else {
        ruletaOpciones = ['Viajero principal', 'Acompañante 1', 'Acompañante 2', 'División equitativa'];
      }
      desbloquearLogro('l38');
    } else if (tipo === 'destinos') {
      if (Array.isArray(window.destinos) && window.destinos.length >= 2) {
        ruletaOpciones = window.destinos.map(d => d.nombre || 'Destino');
      } else {
        ruletaOpciones = ['Roma', 'Tokio', 'París', 'Nueva York', 'Buenos Aires'];
      }
    }
    dibujarRuleta();
    renderizarOpcionesRuleta();
  }
  window.setPresetRuleta = setPresetRuleta;


  // ========================================================================
  // 3. BITÁCORA DE VIAJE
  // ========================================================================
  let multimediaPendienteBitacora = [];

  function getTripStorageKey() {
    const tripId = typeof window.getCurrentTripId === 'function' ? window.getCurrentTripId() : 'global';
    return `plux_bitacora_${tripId}`;
  }

  function getBitacoraEntries() {
    try {
      const data = localStorage.getItem(getTripStorageKey());
      return data ? JSON.parse(data) : [];
    } catch(e) {
      return [];
    }
  }

  function saveBitacoraEntries(entries) {
    localStorage.setItem(getTripStorageKey(), JSON.stringify(entries));
  }

  function abrirModalBitacora() {
    cerrarModalesHerramientas();
    const modal = document.getElementById('modal-bitacora');
    if (modal) {
      modal.style.display = 'flex';
      renderizarFeedBitacora();
      ocultarEditorBitacora();
    }
  }
  window.abrirModalBitacora = abrirModalBitacora;

  function cerrarModalBitacora() {
    const modal = document.getElementById('modal-bitacora');
    if (modal) modal.style.display = 'none';
  }
  window.cerrarModalBitacora = cerrarModalBitacora;

  function mostrarEditorBitacora() {
    const form = document.getElementById('bitacora-editor-container');
    const btnNew = document.getElementById('bitacora-btn-nueva');
    if (form) form.style.display = 'flex';
    if (btnNew) btnNew.style.display = 'none';

    const fechaInput = document.getElementById('bitacora-input-fecha');
    if (fechaInput && !fechaInput.value) {
      fechaInput.value = new Date().toISOString().split('T')[0];
    }
    multimediaPendienteBitacora = [];
    renderizarPreviewMultimedia();
  }
  window.mostrarEditorBitacora = mostrarEditorBitacora;

  function ocultarEditorBitacora() {
    const form = document.getElementById('bitacora-editor-container');
    const btnNew = document.getElementById('bitacora-btn-nueva');
    if (form) form.style.display = 'none';
    if (btnNew) btnNew.style.display = 'flex';

    const tit = document.getElementById('bitacora-input-titulo');
    const txt = document.getElementById('bitacora-input-texto');
    if (tit) tit.value = '';
    if (txt) txt.value = '';
    multimediaPendienteBitacora = [];
    renderizarPreviewMultimedia();
  }
  window.ocultarEditorBitacora = ocultarEditorBitacora;

  async function handleArchivosMultimediaBitacora(event) {
    const files = event?.target?.files;
    if (!files || !files.length) return;

    const statusEl = document.getElementById('bitacora-upload-status');
    if (statusEl) statusEl.textContent = `Procesando ${files.length} archivo(s)...`;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const isVideo = file.type && file.type.startsWith('video/');
      const isImage = file.type && file.type.startsWith('image/');

      if (!isVideo && !isImage) continue;

      try {
        let url = null;
        if (typeof window.uploadToCloudinary === 'function') {
          url = await window.uploadToCloudinary(file);
        } else {
          url = await new Promise((resolve) => {
            const r = new FileReader();
            r.onload = e => resolve(e.target.result);
            r.readAsDataURL(file);
          });
        }

        if (url) {
          multimediaPendienteBitacora.push({
            type: isVideo ? 'video' : 'image',
            url: url,
            name: file.name
          });
          if (isVideo) desbloquearLogro('l28');
          else desbloquearLogro('l25');
        }
      } catch(e) {
        console.warn('Error subiendo multimedia:', e);
      }
    }

    if (statusEl) statusEl.textContent = 'Archivos cargados correctamente.';
    renderizarPreviewMultimedia();
    event.target.value = '';
  }
  window.handleArchivosMultimediaBitacora = handleArchivosMultimediaBitacora;

  function renderizarPreviewMultimedia() {
    const container = document.getElementById('bitacora-preview-media');
    if (!container) return;
    container.innerHTML = '';

    multimediaPendienteBitacora.forEach((m, idx) => {
      const box = document.createElement('div');
      box.style.position = 'relative';
      box.style.display = 'inline-block';

      if (m.type === 'video') {
        box.innerHTML = `
          <video src="${m.url}" class="bitacora-media-item" style="pointer-events:none;"></video>
          <span style="position:absolute; bottom:4px; left:4px; font-size:0.7rem; background:rgba(0,0,0,0.75); padding:2px 6px; border-radius:4px; color:#fff;">Video</span>
          <button type="button" onclick="window.eliminarMultimediaPendiente(${idx})" style="position:absolute; top:4px; right:4px; background:rgba(239,68,68,0.9); border:none; color:white; border-radius:50%; width:22px; height:22px; cursor:pointer; font-size:0.8rem;">&times;</button>
        `;
      } else {
        box.innerHTML = `
          <img src="${m.url}" class="bitacora-media-item" alt="Vista previa">
          <button type="button" onclick="window.eliminarMultimediaPendiente(${idx})" style="position:absolute; top:4px; right:4px; background:rgba(239,68,68,0.9); border:none; color:white; border-radius:50%; width:22px; height:22px; cursor:pointer; font-size:0.8rem;">&times;</button>
        `;
      }
      container.appendChild(box);
    });
  }

  function eliminarMultimediaPendiente(idx) {
    multimediaPendienteBitacora.splice(idx, 1);
    renderizarPreviewMultimedia();
  }
  window.eliminarMultimediaPendiente = eliminarMultimediaPendiente;

  function guardarEntradaBitacora() {
    const titInput = document.getElementById('bitacora-input-titulo');
    const txtInput = document.getElementById('bitacora-input-texto');
    const fechaInput = document.getElementById('bitacora-input-fecha');
    const destSelect = document.getElementById('bitacora-select-destino');

    const titulo = titInput ? titInput.value.trim() : '';
    const texto = txtInput ? txtInput.value.trim() : '';
    const fecha = fechaInput ? fechaInput.value : new Date().toISOString().split('T')[0];
    const destino = destSelect ? destSelect.value : '';

    if (!titulo && !texto) {
      if (typeof window.showToast === 'function') {
        window.showToast('Por favor ingrese un título o contenido para el registro', 'info');
      }
      return;
    }

    const nuevaEntrada = {
      id: 'entry_' + Date.now().toString(36),
      titulo: titulo || 'Registro de viaje',
      texto: texto,
      fecha: fecha,
      destino: destino,
      media: [...multimediaPendienteBitacora],
      createdAt: new Date().toISOString()
    };

    const entries = getBitacoraEntries();
    entries.unshift(nuevaEntrada);
    saveBitacoraEntries(entries);

    desbloquearLogro('l21');
    if (entries.length >= 3) desbloquearLogro('l22');
    if (entries.length >= 5) desbloquearLogro('l23');
    if (entries.length >= 10) desbloquearLogro('l24');

    if (typeof window.showToast === 'function') {
      window.showToast('Entrada guardada en la bitácora', 'success');
    }

    ocultarEditorBitacora();
    renderizarFeedBitacora();
  }
  window.guardarEntradaBitacora = guardarEntradaBitacora;

  function renderizarFeedBitacora() {
    const container = document.getElementById('bitacora-feed-container');
    if (!container) return;

    const destSelect = document.getElementById('bitacora-select-destino');
    if (destSelect && Array.isArray(window.destinos)) {
      destSelect.innerHTML = '<option value="">(Destino general)</option>';
      window.destinos.forEach(d => {
        if (d && d.nombre) {
          destSelect.innerHTML += `<option value="${d.nombre}">${d.nombre}</option>`;
        }
      });
    }

    const entries = getBitacoraEntries();
    if (!entries.length) {
      container.innerHTML = `
        <div style="text-align:center; padding:48px 20px; color:var(--gris, #94a3b8);">
          <div style="font-size:2.2rem; margin-bottom:12px; opacity:0.6;"><i class="fa-solid fa-book-bookmark"></i></div>
          <h3 style="margin:0 0 6px 0; color:#fff; font-weight:600;">Sin registros de viaje</h3>
          <p style="margin:0 0 16px 0; font-size:0.88rem;">Documenta memorias, notas de ruta, fotos y videos de tus jornadas.</p>
          <button class="bitacora-btn-primary" onclick="window.mostrarEditorBitacora()" style="margin:0 auto;">Nuevo registro</button>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    entries.forEach(e => {
      const card = document.createElement('div');
      card.className = 'bitacora-entry-card';

      let mediaHtml = '';
      if (Array.isArray(e.media) && e.media.length > 0) {
        mediaHtml = '<div class="bitacora-media-grid">';
        e.media.forEach(m => {
          if (m.type === 'video') {
            mediaHtml += `<video src="${m.url}" controls playsinline class="bitacora-video-player"></video>`;
          } else {
            mediaHtml += `<img src="${m.url}" class="bitacora-media-item" alt="Archivo adjunto" onclick="if(window.abrirFotoGrande) window.abrirFotoGrande('${m.url}', '${e.titulo.replace(/'/g, "\\'")}')">`;
          }
        });
        mediaHtml += '</div>';
      }

      const destBadge = e.destino 
        ? `<span class="bitacora-dest-badge"><i class="fa-solid fa-location-dot" style="margin-right:4px;"></i>${e.destino}</span>` 
        : '';

      card.innerHTML = `
        <div class="bitacora-entry-header">
          <h3 class="bitacora-entry-title">${e.titulo}</h3>
          <div style="display:flex; gap:6px;">
            <button onclick="window.pegarEntradaEnLienzo('${e.id}')" title="Fijar como nota en el lienzo" class="bitacora-action-btn"><i class="fa-solid fa-thumbtack"></i> Lienzo</button>
            <button onclick="window.eliminarEntradaBitacora('${e.id}')" title="Eliminar entrada" class="bitacora-action-btn bitacora-del-btn"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
        <div class="bitacora-entry-meta">
          <span><i class="fa-solid fa-calendar-day" style="margin-right:5px;"></i>${e.fecha || ''}</span>
          ${destBadge}
        </div>
        <div class="bitacora-entry-body">${e.texto}</div>
        ${mediaHtml}
      `;
      container.appendChild(card);
    });
  }

  function eliminarEntradaBitacora(id) {
    if (!confirm('¿Deseas eliminar este registro de la bitácora?')) return;
    let entries = getBitacoraEntries();
    entries = entries.filter(e => e.id !== id);
    saveBitacoraEntries(entries);
    renderizarFeedBitacora();
  }
  window.eliminarEntradaBitacora = eliminarEntradaBitacora;

  function pegarEntradaEnLienzo(id) {
    const entries = getBitacoraEntries();
    const entry = entries.find(e => e.id === id);
    if (!entry) return;

    if (typeof window.crearNotaCartelito === 'function') {
      const textoNota = `[Bitácora] ${entry.titulo}\n${entry.texto}`;
      window.crearNotaCartelito(textoNota);
      cerrarModalBitacora();
      if (typeof window.showToast === 'function') {
        window.showToast('Nota fijada en el lienzo', 'success');
      }
      desbloquearLogro('l30');
    }
  }
  window.pegarEntradaEnLienzo = pegarEntradaEnLienzo;

  function cerrarModalesHerramientas() {
    cerrarModalRuleta();
    cerrarModalBitacora();
    cerrarModalLogros();
    if (typeof window.cerrarPanelHerramientas === 'function') {
      window.cerrarPanelHerramientas();
    }
  }

  // Comprobación inicial de hitos
  setTimeout(evaluarLogrosAutomaticos, 2000);

  // Soporte directo para pruebas via URL (?tool=ruleta | bitacora | logros | herramientas)
  try {
    const params = new URLSearchParams(window.location.search);
    const tool = params.get('tool');
    if (tool === 'ruleta') abrirModalRuleta();
    else if (tool === 'bitacora') abrirModalBitacora();
    else if (tool === 'logros') abrirModalLogros();
    else if (tool === 'herramientas') {
      const p = document.getElementById('modal-panel-herramientas');
      if (p) p.style.display = 'flex';
    }
  } catch(e) {}

})();
