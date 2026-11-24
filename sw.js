/**
 * PLUX SERVICE WORKER — MODO OFFLINE 100% (v8.0)
 * App Shell + Librerías CDN + Caché de Tiles de Mapas + Caché de APIs de Viaje
 */

const SW_VERSION = 'v8.0.13';
const STATIC_CACHE = `plux-static-${SW_VERSION}`;
const CDN_CACHE = `plux-cdn-${SW_VERSION}`;
const TILES_CACHE = `plux-tiles-${SW_VERSION}`;
const API_CACHE = `plux-api-${SW_VERSION}`;

const APP_SHELL_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css',
  '/script.js',
  '/plux-pro.js',
  '/plux-logo.png',
  '/favicon.ico',
  '/pet.png',
  '/og-banner.png',
  '/static/doodles/concorde.jpg',
  '/static/doodles/minecraft.jpg',
  '/static/embajadores/mochila-al-hombro.jpg',
  '/css/plux-herramientas.css',
  '/css/plux-wrapped.css',
  '/css/plux-doodles.css',
  '/js/jspdf.umd.min.js',
  '/js/plux-i18n.js',
  '/js/plux-export-cards.js',
  '/js/plux-templates.js',
  '/js/plux-discover.js',
  '/js/plux-social-chat.js',
  '/js/plux-collab.js',
  '/js/plux-doodles.js',
  '/js/plux-herramientas.js',
  '/js/plux-wrapped.js',
  '/js/plux-offline.js',
  '/firebase/firebase-app-compat.js',
  '/firebase/firebase-auth-compat.js',
  '/firebase/firebase-database-compat.js',
  '/firebase/firebase-firestore-compat.js'
];

const CDN_RESOURCES = [
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Press+Start+2P&display=swap'
];

// Dominios que manejan su propia cola/conexión en vivo y no deben ser interceptados por el SW
const BYPASS_HOSTS = [
  'firestore.googleapis.com',
  'firebaseio.com',
  'firebaseinstallations.googleapis.com',
  'identitytoolkit.googleapis.com',
  'securetoken.googleapis.com',
  'www.googletagmanager.com',
  'www.google-analytics.com',
  'analytics.google.com',
  'pluxy.nibecar-cofeben.workers.dev',
  'text.pollinations.ai'
];

const MAP_TILE_HOSTS = [
  'server.arcgisonline.com',
  'services.arcgisonline.com',
  'tile.openstreetmap.org',
  'a.tile.openstreetmap.org',
  'b.tile.openstreetmap.org',
  'c.tile.openstreetmap.org',
  'basemaps.cartocdn.com'
];

const CACHEABLE_API_HOSTS = [
  'geocoding-api.open-meteo.com',
  'api.open-meteo.com',
  'photon.komoot.io',
  'nominatim.openstreetmap.org',
  'es.wikipedia.org',
  'api.frankfurter.app',
  'open.er-api.com',
  'api.mymemory.translated.net'
];

// 1. INSTALACIÓN: Precachear App Shell y recursos CDN
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const staticCache = await caches.open(STATIC_CACHE);
      await Promise.allSettled(
        APP_SHELL_FILES.map(async (url) => {
          try {
            const req = new Request(url, { cache: 'reload' });
            const res = await fetch(req);
            if (res && res.ok) {
              await staticCache.put(url, res);
            }
          } catch (err) {
            console.warn('[Plux SW] No se pudo precachear local:', url, err);
          }
        })
      );

      const cdnCache = await caches.open(CDN_CACHE);
      await Promise.allSettled(
        CDN_RESOURCES.map(async (url) => {
          try {
            const res = await fetch(url, { mode: 'cors' }).catch(() => fetch(url, { mode: 'no-cors' }));
            if (res && (res.ok || res.type === 'opaque')) {
              await cdnCache.put(url, res);
            }
          } catch (err) {
            console.warn('[Plux SW] No se pudo precachear CDN:', url);
          }
        })
      );

      await self.skipWaiting();
    })()
  );
});

// 2. ACTIVACIÓN: Limpiar cachés antiguos y tomar control inmediato
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const validCaches = new Set([STATIC_CACHE, CDN_CACHE, TILES_CACHE, API_CACHE]);
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!validCaches.has(key)) {
            return caches.delete(key);
          }
        })
      );
      await self.clients.claim();
    })()
  );
});

// Helper: Fetch con timeout para evitar bloqueos en redes lentas o modo avión parcial
function fetchWithTimeout(request, timeoutMs = 3500) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('SW_FETCH_TIMEOUT')), timeoutMs);
    fetch(request)
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

// Helper: Limitar cantidad de items en un caché para no saturar almacenamiento
async function trimCache(cacheName, maxItems = 650) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    if (keys.length > maxItems) {
      const toDelete = keys.slice(0, keys.length - maxItems);
      await Promise.all(toDelete.map((k) => cache.delete(k)));
    }
  } catch (e) {}
}

// 3. INTERCEPTOR FETCH
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  let url;
  try {
    url = new URL(request.url);
  } catch (e) {
    return;
  }

  if (!url.protocol.startsWith('http')) return;

  // Ignorar hosts en tiempo real (Firebase SDK usa su propio IndexedDB)
  if (BYPASS_HOSTS.some((h) => url.hostname === h || url.hostname.endsWith('.' + h))) {
    return;
  }

  const isSameOrigin = url.origin === self.location.origin;

  // A) NAVEGACIÓN HTML (App Shell): Network-First con timeout rápido -> Fallback a /index.html
  if (request.mode === 'navigate' || (isSameOrigin && request.headers.get('accept')?.includes('text/html'))) {
    event.respondWith(
      (async () => {
        try {
          const networkRes = await fetchWithTimeout(request, 3200);
          if (networkRes && networkRes.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put('/index.html', networkRes.clone());
            return networkRes;
          }
        } catch (err) {
          // Sin red o timeout: servir App Shell desde caché
        }
        const cache = await caches.open(STATIC_CACHE);
        const cachedExact = await cache.match(request, { ignoreSearch: true });
        if (cachedExact) return cachedExact;
        const cachedIndex = await cache.match('/index.html', { ignoreSearch: true }) || await cache.match('/', { ignoreSearch: true });
        if (cachedIndex) return cachedIndex;
        return new Response('<h1>Plux Modo Offline</h1><p>Recarga la página para iniciar la aplicación.</p>', {
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      })()
    );
    return;
  }

  // B) TILES DE MAPAS (ArcGIS / OSM / Carto) + Imágenes de destinos: Cache-First con guardado automático
  if (
    MAP_TILE_HOSTS.some((h) => url.hostname === h || url.hostname.endsWith('.' + h)) ||
    url.hostname.includes('unsplash.com') ||
    url.hostname.includes('wikimedia.org')
  ) {
    event.respondWith(
      (async () => {
        const tileCache = await caches.open(TILES_CACHE);
        const cached = await tileCache.match(request);
        if (cached) return cached;

        try {
          const netRes = await fetch(request);
          if (netRes && (netRes.ok || netRes.type === 'opaque')) {
            tileCache.put(request, netRes.clone());
            trimCache(TILES_CACHE, 750);
          }
          return netRes;
        } catch (err) {
          // Si falla un tile de mapa estando offline, devolver un SVG transparente con grilla sutil
          if (MAP_TILE_HOSTS.some((h) => url.hostname.includes(h))) {
            const svgTile = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="#0f172a"/>
              <path d="M0 64h256M0 128h256M0 192h256M64 0v256M128 0v256M192 0v256" stroke="#1e293b" stroke-width="1"/>
              <text x="128" y="132" fill="#475569" font-family="sans-serif" font-size="11" text-anchor="middle">Mapa Offline Plux</text>
            </svg>`;
            return new Response(svgTile, {
              status: 200,
              headers: { 'Content-Type': 'image/svg+xml' }
            });
          }
          return new Response('', { status: 408 });
        }
      })()
    );
    return;
  }

  // C) APIs DE VIAJE (Clima, Geocoding, Wikipedia, Monedas): Network-First con fallback a caché
  if (CACHEABLE_API_HOSTS.some((h) => url.hostname === h || url.hostname.endsWith('.' + h))) {
    event.respondWith(
      (async () => {
        const apiCache = await caches.open(API_CACHE);
        try {
          const netRes = await fetchWithTimeout(request, 4000);
          if (netRes && netRes.ok) {
            apiCache.put(request, netRes.clone());
            return netRes;
          }
        } catch (err) {
          // Offline fallback
        }
        const cached = await apiCache.match(request);
        if (cached) return cached;
        return new Response(JSON.stringify({ offline: true, error: 'CACHE_MISS_OFFLINE' }), {
          status: 503,
          statusText: 'Offline Cache Miss',
          headers: { 'Content-Type': 'application/json' }
        });
      })()
    );
    return;
  }

  // D) ASSETS PROPIOS DE PLUX (JS, CSS, Doodles, Imágenes): Network-First (2.5s) con fallback instantáneo al caché offline
  if (isSameOrigin) {
    event.respondWith(
      (async () => {
        const staticCache = await caches.open(STATIC_CACHE);
        const isCodeAsset = url.pathname.endsWith('.js') || url.pathname.endsWith('.css');

        if (isCodeAsset) {
          try {
            const netRes = await fetchWithTimeout(request, 2500);
            if (netRes && netRes.ok) {
              staticCache.put(url.pathname, netRes.clone());
              return netRes;
            }
          } catch (e) {}
          const cached = (await staticCache.match(request)) || (await staticCache.match(request, { ignoreSearch: true }));
          if (cached) return cached;
          return new Response('', { status: 503, statusText: 'Offline' });
        }

        // Imágenes e íconos locales: Cache-First con actualización en segundo plano
        const cached = (await staticCache.match(request)) || (await staticCache.match(request, { ignoreSearch: true }));
        const fetchPromise = fetch(request)
          .then((netRes) => {
            if (netRes && netRes.ok) {
              staticCache.put(url.pathname, netRes.clone());
            }
            return netRes;
          })
          .catch(() => null);

        if (cached) {
          event.waitUntil(fetchPromise);
          return cached;
        }

        const netRes = await fetchPromise;
        if (netRes) return netRes;
        return new Response('', { status: 503, statusText: 'Offline' });
      })()
    );
    return;
  }

  // E) LIBRERÍAS CDN EXTERNAS (Leaflet, FontAwesome, Google Fonts, jsPDF, Chart.js, etc.): Cache-First
  event.respondWith(
    (async () => {
      const cdnCache = await caches.open(CDN_CACHE);
      const cached = (await cdnCache.match(request)) || (await cdnCache.match(request, { ignoreSearch: true }));
      if (cached) return cached;

      try {
        const netRes = await fetch(request);
        if (netRes && (netRes.ok || netRes.type === 'opaque')) {
          cdnCache.put(request, netRes.clone());
        }
        return netRes;
      } catch (err) {
        return new Response('', { status: 503, statusText: 'CDN Offline' });
      }
    })()
  );
});

// Funciones matemáticas para calcular tiles XYZ de mapas alrededor de una coordenada (lat, lon)
function lon2tile(lon, zoom) {
  return Math.floor(((lon + 180) / 360) * Math.pow(2, zoom));
}
function lat2tile(lat, zoom) {
  const rad = (lat * Math.PI) / 180;
  return Math.floor(
    ((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) * Math.pow(2, zoom)
  );
}

function buildTileUrlsForCoordinate(lat, lon) {
  const urls = [];
  // Zooms estratégicos que usa Plux en abrirMapa() y filtrarMapaPorDiaPlux()
  const zoomConfigs = [
    { z: 5, radius: 1 },  // Vista regional/país
    { z: 11, radius: 1 }, // Vista área metropolitana
    { z: 12, radius: 1 }, // Vista ciudad general
    { z: 13, radius: 1 }, // Vista barrios (usada en filtrarMapaPorDiaPlux)
    { z: 14, radius: 1 }  // Vista calles/eventos
  ];

  zoomConfigs.forEach(({ z, radius }) => {
    const cx = lon2tile(lon, z);
    const cy = lat2tile(lat, z);
    const maxTile = Math.pow(2, z);
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dy = -radius; dy <= radius; dy++) {
        const x = (cx + dx + maxTile) % maxTile;
        const y = Math.max(0, Math.min(maxTile - 1, cy + dy));
        urls.push(`https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/${z}/${y}/${x}`);
      }
    }
  });
  return urls;
}

// 4. MENSAJERÍA CON EL CLIENTE (Estadísticas y Pre-descarga de Mapas para Modo Avión)
self.addEventListener('message', (event) => {
  const data = event.data || {};

  if (data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }

  if (data.type === 'GET_CACHE_STATS') {
    event.waitUntil(
      (async () => {
        const sCache = await caches.open(STATIC_CACHE);
        const cCache = await caches.open(CDN_CACHE);
        const tCache = await caches.open(TILES_CACHE);
        const aCache = await caches.open(API_CACHE);

        const [sKeys, cKeys, tKeys, aKeys] = await Promise.all([
          sCache.keys(),
          cCache.keys(),
          tCache.keys(),
          aCache.keys()
        ]);

        const payload = {
          type: 'CACHE_STATS_RESULT',
          version: SW_VERSION,
          staticCount: sKeys.length,
          cdnCount: cKeys.length,
          tilesCount: tKeys.length,
          apiCount: aKeys.length
        };

        if (event.ports && event.ports[0]) {
          event.ports[0].postMessage(payload);
        } else if (event.source) {
          event.source.postMessage(payload);
        }
      })()
    );
    return;
  }

  if (data.type === 'PRECACHE_TRIP_TILES') {
    const locations = Array.isArray(data.locations) ? data.locations : [];
    const sourceClient = event.source;

    event.waitUntil(
      (async () => {
        const tileCache = await caches.open(TILES_CACHE);
        const allItems = [];

        locations.forEach((loc) => {
          if (typeof loc.lat === 'number' && typeof loc.lon === 'number') {
            const urls = buildTileUrlsForCoordinate(loc.lat, loc.lon);
            urls.forEach((u) => allItems.push({ url: u, city: loc.nombre || 'Destino' }));
          }
        });

        // Deduplicar URLs
        const uniqueMap = new Map();
        allItems.forEach((item) => {
          if (!uniqueMap.has(item.url)) uniqueMap.set(item.url, item);
        });
        const queue = Array.from(uniqueMap.values());
        const total = queue.length;
        let loaded = 0;

        // Descargar en lotes de 6 para ser rápido sin saturar la red
        const batchSize = 6;
        for (let i = 0; i < queue.length; i += batchSize) {
          const batch = queue.slice(i, i + batchSize);
          await Promise.allSettled(
            batch.map(async (item) => {
              try {
                const existing = await tileCache.match(item.url);
                if (!existing) {
                  const res = await fetch(item.url, { mode: 'cors' }).catch(() => fetch(item.url, { mode: 'no-cors' }));
                  if (res && (res.ok || res.type === 'opaque')) {
                    await tileCache.put(item.url, res);
                  }
                }
              } catch (e) {}
              loaded++;
            })
          );

          if (sourceClient) {
            sourceClient.postMessage({
              type: 'PRECACHE_PROGRESS',
              loaded,
              total,
              city: batch[0]?.city || ''
            });
          }
        }

        if (sourceClient) {
          sourceClient.postMessage({
            type: 'PRECACHE_COMPLETE',
            loaded,
            total
          });
        }
      })()
    );
  }
});
