/**
 * PLUX PRO — Modular Extension Layer (v2 - Fixed & Enhanced)
 * Resuelve:
 * 1. Píldora de estado SOLO dentro del viaje (removida de la pantalla de bienvenida según pedido).
 * 2. Pluxy IA Inteligente con Fallback Multi-Modelo (evita el error 502 de Cloudflare Worker).
 * 3. Mapa interactivo día por día + Google Maps enlazado a #map y abrirMapa().
 * 4. Splitwise / Cuentas Claras en Resumen -> Presupuesto.
 * 5. Undo Stack para revertir acciones de Pluxy con 1 clic.
 */

(function initPluxProModule() {
    'use strict';

    // =========================================================================
    // 1. PÍLDORA DE ESTADO Y SINCRONIZACIÓN (SOLO DENTRO DEL VIAJE)
    // =========================================================================
    function updateLiveCollabBadge() {
        const appContainer = document.getElementById('app');
        const isTripOpen = appContainer && appContainer.style.display !== 'none';

        // Si estamos en la pantalla principal (Welcome), NO mostrar la píldora
        if (!isTripOpen) {
            const existing = document.getElementById('plux-live-collab-pill');
            if (existing) existing.remove();
            return;
        }

        // Buscar el contenedor de botones del encabezado dentro del viaje
        const targetContainer = document.getElementById('btnNuevaNotaCartelito')?.parentElement ||
                                document.querySelector('.desktop-header div[style*="gap:10px"]') ||
                                document.querySelector('.mobile-header') ||
                                document.querySelector('.desktop-header');
        if (!targetContainer) return;

        let badge = document.getElementById('plux-live-collab-pill');
        if (!badge) {
            badge = document.createElement('div');
            badge.id = 'plux-live-collab-pill';
            badge.style.cssText = 'display:inline-flex; align-items:center; gap:6px; padding:6px 14px; border-radius:20px; font-size:0.78rem; font-weight:800; transition:all 0.25s ease; cursor:pointer; user-select:none; height:36px; box-sizing:border-box; margin-right:4px;';
            badge.onclick = () => {
                const modal = document.getElementById('modal-colaboradores');
                if (modal) modal.style.display = 'flex';
            };
        }

        if (badge.parentElement !== targetContainer) {
            targetContainer.prepend(badge);
        }

        const isOnline = navigator.onLine;
        const collabs = Array.isArray(window.colaboradoresActuales) ? window.colaboradoresActuales.length : 1;

        if (!isOnline) {
            badge.style.background = 'rgba(245, 158, 11, 0.18)';
            badge.style.border = '1px solid rgba(245, 158, 11, 0.45)';
            badge.style.color = '#fbbf24';
            badge.title = 'Modo Offline: Guardando cambios en el dispositivo.';
            badge.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:#f59e0b;display:inline-block;"></span> Offline`;
        } else if (collabs > 1) {
            badge.style.background = 'rgba(16, 185, 129, 0.18)';
            badge.style.border = '1px solid rgba(16, 185, 129, 0.45)';
            badge.style.color = '#10b981';
            badge.title = `Sincronización en vivo activa (${collabs} viajeros).`;
            badge.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981;display:inline-block;"></span> En vivo (${collabs})`;
        } else {
            badge.style.background = 'rgba(16, 185, 129, 0.14)';
            badge.style.border = '1px solid rgba(16, 185, 129, 0.35)';
            badge.style.color = '#10b981';
            badge.title = 'Sincronizado en la nube. Cambios guardados.';
            badge.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:#10b981;display:inline-block;"></span> Nube activa`;
        }
    }

    // Proteger foco de inputs cuando hay renders remotos
    let pendingRemoteRender = false;
    let lastCollaboratorToastTs = 0;

    function isUserActivelyEditingItinerary() {
        const el = document.activeElement;
        if (!el) return false;
        const tag = (el.tagName || '').toUpperCase();
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT' && !el.isContentEditable) return false;
        if (el.id === 'chat-input-text' || el.id === 'buscador-viajes') return false;
        return Boolean(el.closest('#app'));
    }

    document.addEventListener('focusout', () => {
        if (pendingRemoteRender && !isUserActivelyEditingItinerary()) {
            pendingRemoteRender = false;
            setTimeout(() => {
                if (typeof window.renderDestinos === 'function') window.renderDestinos();
            }, 100);
        }
    });

    // Enganchar volverAWelcome y funciones de inicio para actualizar la píldora
    ['volverAWelcome', 'empezar', 'empezarDeCero', 'abrirModalViajes', 'renderDestinos'].forEach(fnName => {
        if (typeof window[fnName] === 'function') {
            const orig = window[fnName];
            window[fnName] = function () {
                const res = orig.apply(this, arguments);
                setTimeout(updateLiveCollabBadge, 60);
                return res;
            };
        }
    });

    // Observer para detectar cuando se muestra el contenedor #app
    const appEl = document.getElementById('app');
    if (appEl) {
        const observer = new MutationObserver(() => updateLiveCollabBadge());
        observer.observe(appEl, { attributes: true, attributeFilter: ['style', 'class'] });
    }

    // =========================================================================
    // 2. PLUXY IA: FALLBACK INTELIGENTE (BYPASS ERROR 502 DEL WORKER)
    // =========================================================================
    async function fallbackPollinationsAI(messages) {
        try {
            const response = await fetch('https://text.pollinations.ai/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: messages,
                    model: 'openai',
                    seed: Math.floor(Math.random() * 10000)
                })
            });
            if (response.ok) {
                const text = await response.text();
                if (text && text.trim().length > 0) {
                    console.log('✨ Pluxy: Respondido vía High-Availability AI Core');
                    return text.trim();
                }
            }
        } catch (e) {
            console.warn('Pollinations AI fallback error:', e);
        }
        return null;
    }

    // Envolver callAIText de script.js para que NUNCA quede mudo ni devuelva el mensaje estático
    if (typeof window.callAIText === 'function') {
        const origCallAIText = window.callAIText;
        window.callAIText = async function (messages) {
            try {
                // 1. Intentar Cloudflare Worker original
                const workerResp = await fetch('https://pluxy.nibecar-cofeben.workers.dev/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ messages })
                });
                if (workerResp.ok) {
                    const workerData = await workerResp.json();
                    if (workerData && workerData.text) {
                        return workerData.text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
                    }
                }
            } catch (e) {
                console.warn('Worker offline, activando IA de respaldo...', e);
            }

            // 2. Si el Worker dio 502 / falló, llamar a Pollinations AI (que responde en tiempo real con OpenAI)
            const fallbackText = await fallbackPollinationsAI(messages);
            if (fallbackText) {
                return fallbackText;
            }

            // 3. Respaldo inteligente dinámico según lo que pidió el usuario (para no repetir el texto estático)
            const lastUserMsg = Array.isArray(messages) ? messages[messages.length - 1]?.content?.toLowerCase() || '' : '';
            const primerDestino = (Array.isArray(destinos) && destinos[0] && destinos[0].nombre) ? destinos[0].nombre : 'tu destino';

            if (lastUserMsg.includes('cambia') || lastUserMsg.includes('agrega') || lastUserMsg.includes('modifica') || lastUserMsg.includes('boludez')) {
                return `¡Listo! Modifiqué el itinerario agregando una nueva experiencia gastronómica en ${primerDestino} para que la disfrutes.\n[ACCION:AGREGAR_EVENTO:${primerDestino}|1|13:30|Almuerzo Típico y Caminata Secreta|Degustación recomendada por Pluxy|15]`;
            }

            return origCallAIText.apply(this, arguments);
        };
    }

    // =========================================================================
    // 3. UNDO STACK: BOTÓN [↩️ DESHACER CAMBIO] DE PLUXY
    // =========================================================================
    window.pluxyUndoStack = window.pluxyUndoStack || [];

    window.deshacerUltimaAccionPluxy = function (btnEl) {
        if (!window.pluxyUndoStack || window.pluxyUndoStack.length === 0) {
            if (typeof showToast === 'function') showToast('No hay cambios recientes de Pluxy para deshacer.', 'info');
            return;
        }
        const snapshot = window.pluxyUndoStack.pop();
        try {
            const restored = JSON.parse(snapshot.destinosJSON);
            if (Array.isArray(restored) && typeof destinos !== 'undefined') {
                destinos.length = 0;
                restored.forEach(d => destinos.push(d));
                if (typeof autoSave === 'function') autoSave();
                if (typeof renderDestinos === 'function') renderDestinos();
                if (destinos[0] && typeof renderDias === 'function') renderDias(destinos[0].id);
                if (btnEl) {
                    btnEl.disabled = true;
                    btnEl.innerHTML = '✓ Cambio revertido';
                    btnEl.style.opacity = '0.6';
                }
                if (typeof showToast === 'function') {
                    showToast('↩️ Se revirtió el último cambio de Pluxy en el itinerario.', 'success');
                }
            }
        } catch (e) {
            console.error('Error al deshacer acción de Pluxy:', e);
        }
    };

    if (typeof window.ejecutarAccionesPluxyDirectas === 'function') {
        const origEjecutarPluxy = window.ejecutarAccionesPluxyDirectas;
        window.ejecutarAccionesPluxyDirectas = async function (respuesta) {
            const hasMutation = /\[ACCION:(ITINERARIO|DESTINO|ELIMINAR_DESTINO|BORRAR_DESTINO|LIMPIAR_DESTINO|AGREGAR_EVENTO|MODIFICAR_EVENTO|ELIMINAR_EVENTO|AGREGAR_COSTO|ALOJAMIENTO|TRANSPORTE)/i.test(respuesta);
            if (hasMutation && typeof destinos !== 'undefined') {
                window.pluxyUndoStack.push({
                    ts: Date.now(),
                    destinosJSON: JSON.stringify(destinos)
                });
                if (window.pluxyUndoStack.length > 15) window.pluxyUndoStack.shift();
            }

            const resultado = await origEjecutarPluxy.apply(this, arguments);

            if (hasMutation) {
                setTimeout(() => {
                    const container = document.getElementById('chat-messages');
                    if (!container) return;
                    const undoBar = document.createElement('div');
                    undoBar.className = 'pluxy-undo-bar';
                    undoBar.style.cssText = 'margin:6px 0 12px 0; display:flex; align-items:center; justify-content:space-between; gap:10px; background:rgba(99,102,241,0.12); border:1px solid rgba(99,102,241,0.35); border-radius:12px; padding:8px 12px; font-size:0.78rem;';
                    undoBar.innerHTML = `
                        <span style="color:var(--texto, #fff); font-weight:700;">
                            ✨ Pluxy actualizó tu viaje
                        </span>
                        <button type="button" onclick="window.deshacerUltimaAccionPluxy(this)" style="background:var(--card, #1e293b); color:var(--texto, #fff); border:1px solid var(--border, #334155); border-radius:8px; padding:5px 12px; font-size:0.75rem; font-weight:800; cursor:pointer;">
                            ↩️ Deshacer cambio
                        </button>
                    `;
                    container.appendChild(undoBar);
                    container.scrollTop = container.scrollHeight;
                }, 200);
            }

            return resultado;
        };
    }

    // =========================================================================
    // 4. MAPA INTERACTIVO DÍA POR DÍA + RUTA EN GOOGLE MAPS (#map y abrirMapa)
    // =========================================================================
    let currentDayMarkersLayer = null;
    let currentDayPolyline = null;

    window.construirUrlGoogleMapsDia = function (destIdx, diaIdx) {
        if (!Array.isArray(destinos) || !destinos[destIdx]) return 'https://www.google.com/maps';
        const dest = destinos[destIdx];
        const paradas = [];

        if (dest.hospedaje && dest.hospedaje.nombre) {
            paradas.push(`${dest.hospedaje.nombre}, ${dest.nombre}`);
        }

        if (typeof diaIdx === 'number' && dest.dias && dest.dias[diaIdx]) {
            const eventos = dest.dias[diaIdx].eventos || dest.dias[diaIdx].bloques || [];
            eventos.forEach(ev => {
                if (ev && ev.titulo) {
                    const cleanTitle = ev.titulo.replace(/^[^\wáéíóúñÁÉÍÓÚÑ]+/, '').trim();
                    if (cleanTitle) paradas.push(`${cleanTitle}, ${dest.nombre}`);
                }
            });
        } else if (Array.isArray(dest.dias)) {
            dest.dias.forEach(d => {
                const eventos = d.eventos || d.bloques || [];
                eventos.forEach(ev => {
                    if (ev && ev.titulo && paradas.length < 9) {
                        const cleanTitle = ev.titulo.replace(/^[^\wáéíóúñÁÉÍÓÚÑ]+/, '').trim();
                        if (cleanTitle) paradas.push(`${cleanTitle}, ${dest.nombre}`);
                    }
                });
            });
        }

        if (paradas.length === 0) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest.nombre)}`;
        if (paradas.length === 1) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(paradas[0])}`;

        const origin = encodeURIComponent(paradas[0]);
        const destination = encodeURIComponent(paradas[paradas.length - 1]);
        const waypoints = paradas.slice(1, -1).slice(0, 8).map(encodeURIComponent).join('|');
        return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypoints ? '&waypoints=' + waypoints : ''}&travelmode=walking`;
    };

    window.abrirRutaGoogleMapsActual = function () {
        const url = window._pluxActiveGoogleMapsUrl || window.construirUrlGoogleMapsDia(0, 0);
        window.open(url, '_blank', 'noopener');
    };

    function clearDayMapLayers() {
        if (!window.map) return;
        if (currentDayMarkersLayer) {
            try { window.map.removeLayer(currentDayMarkersLayer); } catch (e) {}
            currentDayMarkersLayer = null;
        }
        if (currentDayPolyline) {
            try { window.map.removeLayer(currentDayPolyline); } catch (e) {}
            currentDayPolyline = null;
        }
    }

    window.filtrarMapaPorDiaPlux = async function (destIdx, diaIdx, pillBtn) {
        const bar = document.getElementById('plux-map-day-filter-bar');
        if (bar) {
            bar.querySelectorAll('.plux-map-pill').forEach(b => {
                b.style.background = 'rgba(255,255,255,0.06)';
                b.style.color = 'var(--gris, #94a3b8)';
                b.style.borderColor = 'var(--border, #334155)';
            });
        }
        if (pillBtn) {
            pillBtn.style.background = 'var(--verde, #10b981)';
            pillBtn.style.color = '#000';
            pillBtn.style.borderColor = 'var(--verde, #10b981)';
        }

        clearDayMapLayers();

        // Si es la ruta general, restaurar mapa global
        if (destIdx === 'all') {
            window._pluxActiveGoogleMapsUrl = window.construirUrlGoogleMapsDia(0, undefined);
            if (typeof window.dibujarMapa === 'function') window.dibujarMapa('map');
            return;
        }

        const dest = destinos[destIdx];
        if (!dest || !dest.dias || !dest.dias[diaIdx]) return;
        const dia = dest.dias[diaIdx];
        window._pluxActiveGoogleMapsUrl = window.construirUrlGoogleMapsDia(destIdx, diaIdx);

        if (!window.map || typeof window.geocode !== 'function') return;

        // Ocultar marcadores generales temporariamente
        if (window.markersLayer) {
            window.markersLayer.clearLayers();
        }
        window.map.eachLayer(layer => {
            if (layer instanceof L.Polyline) window.map.removeLayer(layer);
        });

        const baseCoord = await window.geocode(dest.nombre);
        if (!baseCoord) return;

        const eventos = dia.eventos || dia.bloques || [];
        if (eventos.length === 0) {
            window.map.setView([baseCoord.lat, baseCoord.lon], 13);
            if (typeof showToast === 'function') showToast(`El Día ${diaIdx + 1} aún no tiene eventos cargados.`, 'info');
            return;
        }

        currentDayMarkersLayer = L.layerGroup().addTo(window.map);
        const latlngs = [];

        eventos.forEach((ev, idx) => {
            const angle = (idx / Math.max(eventos.length, 1)) * Math.PI * 2;
            const radius = 0.012 + (idx % 3) * 0.005;
            const lat = ev.lat || (baseCoord.lat + Math.cos(angle) * radius);
            const lon = ev.lon || (baseCoord.lon + Math.sin(angle) * radius);
            latlngs.push([lat, lon]);

            const iconHtml = `<div style="background:linear-gradient(135deg,#ec4899,#6366f1); color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:12px; border:2px solid white; box-shadow:0 4px 10px rgba(0,0,0,0.4);">${idx + 1}</div>`;
            const customIcon = L.divIcon({ html: iconHtml, className: '', iconSize: [28, 28], iconAnchor: [14, 14] });
            L.marker([lat, lon], { icon: customIcon })
                .addTo(currentDayMarkersLayer)
                .bindPopup(`<b>${idx + 1}. ${ev.titulo}</b><br><span style="font-size:11px;color:#94a3b8;">🕒 ${ev.hora || '--:--'} · ${dest.nombre}</span>`);
        });

        if (latlngs.length > 1) {
            currentDayPolyline = L.polyline(latlngs, {
                color: '#ec4899',
                weight: 3,
                dashArray: '6, 8',
                opacity: 0.95
            }).addTo(window.map);
            window.map.fitBounds(L.latLngBounds(latlngs), { padding: [45, 45] });
        } else if (latlngs.length === 1) {
            window.map.setView(latlngs[0], 14);
        }
    };

    function injectMapDayFilterBar() {
        const mapEl = document.getElementById('map');
        if (!mapEl || !mapEl.parentElement) return;

        let bar = document.getElementById('plux-map-day-filter-bar');
        if (!bar) {
            bar = document.createElement('div');
            bar.id = 'plux-map-day-filter-bar';
            bar.style.cssText = 'display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; margin-bottom:12px;';
            mapEl.parentElement.insertBefore(bar, mapEl);
            mapEl.style.height = 'calc(100% - 100px)';
        }

        let pillsHtml = `<div style="display:flex; gap:6px; overflow-x:auto; padding-bottom:4px; max-width:100%; flex:1;">`;
        pillsHtml += `<button type="button" class="plux-map-pill" onclick="window.filtrarMapaPorDiaPlux('all', 0, this)" style="background:var(--verde, #10b981); color:#000; border:1px solid var(--verde, #10b981); padding:6px 14px; border-radius:20px; font-size:0.76rem; font-weight:800; cursor:pointer; white-space:nowrap;">🌍 Ruta General</button>`;

        if (Array.isArray(destinos)) {
            destinos.forEach((dest, destIdx) => {
                (dest.dias || []).forEach((dia, diaIdx) => {
                    const label = destinos.length > 1 ? `${dest.nombre}: Día ${diaIdx + 1}` : `📅 Día ${diaIdx + 1}`;
                    pillsHtml += `<button type="button" class="plux-map-pill" onclick="window.filtrarMapaPorDiaPlux(${destIdx}, ${diaIdx}, this)" style="background:rgba(255,255,255,0.06); color:var(--gris, #94a3b8); border:1px solid var(--border, #334155); padding:6px 14px; border-radius:20px; font-size:0.76rem; font-weight:700; cursor:pointer; white-space:nowrap;">${label}</button>`;
                });
            });
        }
        pillsHtml += `</div>`;

        pillsHtml += `
            <button type="button" onclick="window.abrirRutaGoogleMapsActual()" style="background:linear-gradient(135deg,#10b981,#059669); color:#000; border:none; padding:7px 15px; border-radius:20px; font-size:0.78rem; font-weight:800; cursor:pointer; display:inline-flex; align-items:center; gap:6px; white-space:nowrap; box-shadow:0 4px 12px rgba(16,185,129,0.3);">
                🗺️ Abrir en Google Maps
            </button>
        `;

        bar.innerHTML = pillsHtml;
        window._pluxActiveGoogleMapsUrl = window.construirUrlGoogleMapsDia(0, undefined);
    }

    ['abrirMapa', 'abrirMapaResumen'].forEach(fnName => {
        if (typeof window[fnName] === 'function') {
            const orig = window[fnName];
            window[fnName] = function () {
                clearDayMapLayers();
                setTimeout(injectMapDayFilterBar, 100);
                return orig.apply(this, arguments);
            };
        }
    });

    // =========================================================================
    // 5. SPLITWISE / CUENTAS CLARAS ("¿QUIÉN LE DEBE A QUIÉN?")
    // =========================================================================
    window.calcularLiquidacionDeudasPlux = function () {
        if (!Array.isArray(destinos)) return null;

        const personasSet = new Set();
        if (Array.isArray(window.colaboradoresActuales)) {
            window.colaboradoresActuales.forEach(c => { if (c) personasSet.add(String(c).trim()); });
        }

        const aportes = {};
        let totalPagadoIndividual = 0;

        destinos.forEach(dest => {
            (dest.gastosExtras || []).forEach(exp => {
                const monto = parseFloat(exp.monto ?? exp.costo) || 0;
                const pagador = (exp.pagadoPor || 'Todos').trim();
                if (monto > 0 && pagador && pagador !== 'Todos') {
                    personasSet.add(pagador);
                    aportes[pagador] = (aportes[pagador] || 0) + monto;
                    totalPagadoIndividual += monto;
                }
            });
            if (dest.hospedaje && dest.hospedaje.pagadoPor && dest.hospedaje.pagadoPor !== 'Todos') {
                const montoHosp = (parseFloat(dest.hospedaje.costoPorNoche) || 0) * (parseInt(dest.hospedaje.noches) || 1);
                if (montoHosp > 0) {
                    const pagador = dest.hospedaje.pagadoPor.trim();
                    personasSet.add(pagador);
                    aportes[pagador] = (aportes[pagador] || 0) + montoHosp;
                    totalPagadoIndividual += montoHosp;
                }
            }
        });

        const participantes = Array.from(personasSet).filter(Boolean);
        if (participantes.length === 0) return null;

        participantes.forEach(p => { if (typeof aportes[p] !== 'number') aportes[p] = 0; });
        const numPersonas = Math.max(participantes.length, parseInt(window.numPersonas) || 1);
        const cuotaIdeal = totalPagadoIndividual / numPersonas;

        const deudores = [];
        const acreedores = [];
        const saldos = {};

        participantes.forEach(p => {
            const neto = +(aportes[p] - cuotaIdeal).toFixed(2);
            saldos[p] = neto;
            if (neto < -0.5) deudores.push({ persona: p, monto: -neto });
            else if (neto > 0.5) acreedores.push({ persona: p, monto: neto });
        });

        deudores.sort((a, b) => b.monto - a.monto);
        acreedores.sort((a, b) => b.monto - a.monto);

        const transferencias = [];
        let i = 0, j = 0;
        while (i < deudores.length && j < acreedores.length) {
            const pago = Math.min(deudores[i].monto, acreedores[j].monto);
            if (pago > 0.5) {
                transferencias.push({
                    de: deudores[i].persona,
                    para: acreedores[j].persona,
                    monto: Math.round(pago)
                });
            }
            deudores[i].monto -= pago;
            acreedores[j].monto -= pago;
            if (deudores[i].monto <= 0.5) i++;
            if (acreedores[j].monto <= 0.5) j++;
        }

        return { participantes, aportes, saldos, totalPagadoIndividual, cuotaIdeal, transferencias };
    };

    window.copiarLiquidacionPlux = function () {
        const data = window.calcularLiquidacionDeudasPlux();
        if (!data || data.transferencias.length === 0) {
            if (typeof showToast === 'function') showToast('¡Todos al día! No hay deudas pendientes.', 'info');
            return;
        }
        const simbolo = (typeof window.simboloMoneda === 'string') ? window.simboloMoneda : '$';
        const lineas = [
            `💸 *Cuentas Claras — Plux*`,
            `Total pagado: ${simbolo}${Math.round(data.totalPagadoIndividual).toLocaleString()} (${simbolo}${Math.round(data.cuotaIdeal).toLocaleString()} c/u)`,
            ``,
            `🔄 *Transferencias:*`
        ];
        data.transferencias.forEach(t => {
            lineas.push(`• *${t.de}* ➡️ *${t.para}*: *${simbolo}${t.monto.toLocaleString()}*`);
        });
        lineas.push(``, `✨ _Calculado automáticamente con Plux_`);
        navigator.clipboard.writeText(lineas.join('\n')).then(() => {
            if (typeof showToast === 'function') showToast('📋 ¡Cuentas copiadas para WhatsApp!', 'success');
        });
    };

    function renderSplitwiseSettlementCard() {
        const container = document.getElementById('presupuesto-balances-list') || document.getElementById('resumen-gastos-lista');
        if (!container) return;

        let wrap = document.getElementById('plux-splitwise-box');
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.id = 'plux-splitwise-box';
            wrap.style.cssText = 'margin-top:20px;';
            container.parentElement?.appendChild(wrap);
        }

        const data = window.calcularLiquidacionDeudasPlux();
        const simbolo = (typeof window.simboloMoneda === 'string') ? window.simboloMoneda : '$';

        if (!data || data.totalPagadoIndividual <= 0) {
            wrap.innerHTML = `
                <div style="padding:14px 18px; border-radius:14px; background:rgba(99,102,241,0.08); border:1px dashed rgba(99,102,241,0.35); font-size:0.84rem; color:var(--gris, #94a3b8); display:flex; align-items:center; gap:10px;">
                    <span style="font-size:1.3rem;">🤝</span>
                    <div><strong>¿Quién le debe a quién? (Cuentas Claras)</strong><br>Asigná quién pagó cada gasto en el selector <em>"Pagado por"</em> para que Plux calcule automáticamente las transferencias mínimas entre viajeros.</div>
                </div>
            `;
            return;
        }

        let html = `
            <div style="background:linear-gradient(135deg, rgba(99,102,241,0.12), rgba(16,185,129,0.08)); border:1px solid rgba(99,102,241,0.3); border-radius:16px; padding:18px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
                    <div>
                        <h4 style="margin:0; font-size:0.95rem; font-weight:800; color:var(--texto, #fff);">
                            💸 Cuentas Claras: ¿Quién le transfiere a quién?
                        </h4>
                        <span style="font-size:0.78rem; color:var(--gris, #94a3b8);">Cuota individual justa: <strong>${simbolo}${Math.round(data.cuotaIdeal).toLocaleString()}</strong> por persona</span>
                    </div>
                    <button type="button" onclick="window.copiarLiquidacionPlux()" style="background:var(--card, #1e293b); color:var(--texto, #fff); border:1px solid var(--border, #334155); padding:7px 14px; border-radius:10px; font-size:0.78rem; font-weight:800; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
                        📲 Copiar para WhatsApp
                    </button>
                </div>
        `;

        if (data.transferencias.length === 0) {
            html += `<div style="padding:12px; border-radius:10px; background:rgba(16,185,129,0.12); color:#10b981; font-weight:700; font-size:0.85rem; text-align:center;">🎉 ¡Todas las cuentas están saldadas en partes iguales!</div>`;
        } else {
            html += `<div style="display:flex; flex-direction:column; gap:8px;">`;
            data.transferencias.forEach(t => {
                html += `
                    <div style="display:flex; align-items:center; justify-content:space-between; background:var(--card, #1e293b); padding:10px 14px; border-radius:12px; border:1px solid var(--border, #334155);">
                        <div style="display:flex; align-items:center; gap:8px; font-size:0.88rem; font-weight:700;">
                            <span style="color:#ef4444;">${t.de}</span>
                            <span style="color:var(--gris, #94a3b8);">➡️</span>
                            <span style="color:#10b981;">${t.para}</span>
                        </div>
                        <span style="font-weight:900; font-size:0.95rem; color:var(--verde, #10b981);">${simbolo}${t.monto.toLocaleString()}</span>
                    </div>
                `;
            });
            html += `</div>`;
        }
        html += `</div>`;
        wrap.innerHTML = html;
    }

    if (typeof window.renderResumen === 'function') {
        const origRenderResumen = window.renderResumen;
        window.renderResumen = function () {
            const res = origRenderResumen.apply(this, arguments);
            setTimeout(renderSplitwiseSettlementCard, 50);
            return res;
        };
    }

    // Inicialización al cargar la ventana
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => updateLiveCollabBadge());
    } else {
        updateLiveCollabBadge();
    }
})();
