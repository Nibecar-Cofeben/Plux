/**
 * PLUX OFFLINE ENGINE 100% (v8.0)
 * - Registro y comunicación con Service Worker (/sw.js)
 * - Diccionario Local Persistente de +140 Destinos Mundiales para Mapas sin Internet
 * - Cola de Sincronización Diferida (Perfil + Viajes Colaborativos) al recuperar red
 * - Centro de Control Modo Avión (Pre-descarga de Mapas, Clima y Estado de Caché)
 * - Motor Local de Pluxy IA para responder y editar el itinerario 100% sin conexión
 */

(function initPluxOfflineEngine() {
  'use strict';

  const GEOCODE_STORAGE_KEY = 'Plux_Offline_Geocode_Cache';
  const PENDING_SYNC_KEY = 'Plux_Pending_Cloud_Sync';
  const PENDING_SYNC_TS_KEY = 'Plux_Pending_Cloud_Sync_Ts';
  const PENDING_COLLAB_KEY = 'Plux_Pending_Collab_Sync';
  const OFFLINE_READY_TRIPS_KEY = 'Plux_Offline_Prepared_Trips';

  // ===========================================================================
  // 1. DICCIONARIO LOCAL DE +140 CIUDADES MUNDIALES (GEOCODING 100% OFFLINE)
  // ===========================================================================
  const OFFLINE_WORLD_COORDS = {
    // España
    'madrid': { lat: 40.4168, lon: -3.7038, display_name: 'Madrid, España' },
    'barcelona': { lat: 41.3874, lon: 2.1686, display_name: 'Barcelona, España' },
    'sevilla': { lat: 37.3891, lon: -5.9845, display_name: 'Sevilla, España' },
    'valencia': { lat: 39.4699, lon: -0.3763, display_name: 'Valencia, España' },
    'malaga': { lat: 36.7213, lon: -4.4214, display_name: 'Málaga, España' },
    'bilbao': { lat: 43.2630, lon: -2.9350, display_name: 'Bilbao, España' },
    'granada': { lat: 37.1773, lon: -3.5986, display_name: 'Granada, España' },
    'santiago de compostela': { lat: 42.8782, lon: -8.5448, display_name: 'Santiago de Compostela, España' },
    'palma': { lat: 39.5696, lon: 2.6502, display_name: 'Palma de Mallorca, España' },
    'mallorca': { lat: 39.6953, lon: 3.0176, display_name: 'Mallorca, España' },
    'ibiza': { lat: 38.9067, lon: 1.4206, display_name: 'Ibiza, España' },
    'tenerife': { lat: 28.2916, lon: -16.6291, display_name: 'Tenerife, España' },
    'san sebastian': { lat: 43.3183, lon: -1.9812, display_name: 'San Sebastián, España' },
    'toledo': { lat: 39.8628, lon: -4.0273, display_name: 'Toledo, España' },
    'zaragoza': { lat: 41.6488, lon: -0.8891, display_name: 'Zaragoza, España' },

    // Francia
    'paris': { lat: 48.8566, lon: 2.3522, display_name: 'París, Francia' },
    'niza': { lat: 43.7102, lon: 7.2620, display_name: 'Niza, Francia' },
    'nice': { lat: 43.7102, lon: 7.2620, display_name: 'Niza, Francia' },
    'lyon': { lat: 45.7640, lon: 4.8357, display_name: 'Lyon, Francia' },
    'marsella': { lat: 43.2965, lon: 5.3698, display_name: 'Marsella, Francia' },
    'burdeos': { lat: 44.8378, lon: -0.5792, display_name: 'Burdeos, Francia' },
    'estrasburgo': { lat: 48.5734, lon: 7.7521, display_name: 'Estrasburgo, Francia' },

    // Italia
    'roma': { lat: 41.9028, lon: 12.4964, display_name: 'Roma, Italia' },
    'rome': { lat: 41.9028, lon: 12.4964, display_name: 'Roma, Italia' },
    'milan': { lat: 45.4642, lon: 9.1900, display_name: 'Milán, Italia' },
    'venecia': { lat: 45.4408, lon: 12.3155, display_name: 'Venecia, Italia' },
    'florencia': { lat: 43.7696, lon: 11.2558, display_name: 'Florencia, Italia' },
    'napoles': { lat: 40.8518, lon: 14.2681, display_name: 'Nápoles, Italia' },
    'bolonia': { lat: 44.4949, lon: 11.3426, display_name: 'Bolonia, Italia' },
    'turin': { lat: 45.0703, lon: 7.6869, display_name: 'Turín, Italia' },
    'verona': { lat: 45.4384, lon: 10.9916, display_name: 'Verona, Italia' },
    'pisa': { lat: 43.7228, lon: 10.4017, display_name: 'Pisa, Italia' },
    'amalfi': { lat: 40.6340, lon: 14.6027, display_name: 'Costa Amalfitana, Italia' },
    'cinque terre': { lat: 44.1461, lon: 9.6439, display_name: 'Cinque Terre, Italia' },

    // Resto de Europa
    'londres': { lat: 51.5074, lon: -0.1278, display_name: 'Londres, Reino Unido' },
    'london': { lat: 51.5074, lon: -0.1278, display_name: 'Londres, Reino Unido' },
    'edimburgo': { lat: 55.9533, lon: -3.1883, display_name: 'Edimburgo, Escocia' },
    'manchester': { lat: 53.4808, lon: -2.2426, display_name: 'Mánchester, Reino Unido' },
    'dublin': { lat: 53.3498, lon: -6.2603, display_name: 'Dublín, Irlanda' },
    'amsterdam': { lat: 52.3676, lon: 4.9041, display_name: 'Ámsterdam, Países Bajos' },
    'bruselas': { lat: 50.8503, lon: 4.3517, display_name: 'Bruselas, Bélgica' },
    'brujas': { lat: 51.2093, lon: 3.2247, display_name: 'Brujas, Bélgica' },
    'berlin': { lat: 52.5200, lon: 13.4050, display_name: 'Berlín, Alemania' },
    'munich': { lat: 48.1351, lon: 11.5820, display_name: 'Múnich, Alemania' },
    'frankfurt': { lat: 50.1109, lon: 8.6821, display_name: 'Fráncfort, Alemania' },
    'hamburgo': { lat: 53.5511, lon: 9.9937, display_name: 'Hamburgo, Alemania' },
    'viena': { lat: 48.2082, lon: 16.3738, display_name: 'Viena, Austria' },
    'salzburgo': { lat: 47.8095, lon: 13.0550, display_name: 'Salzburgo, Austria' },
    'zurich': { lat: 47.3769, lon: 8.5417, display_name: 'Zúrich, Suiza' },
    'ginebra': { lat: 46.2044, lon: 6.1432, display_name: 'Ginebra, Suiza' },
    'interlaken': { lat: 46.6863, lon: 7.8632, display_name: 'Interlaken, Suiza' },
    'praga': { lat: 50.0755, lon: 14.4378, display_name: 'Praga, República Checa' },
    'budapest': { lat: 47.4979, lon: 19.0402, display_name: 'Budapest, Hungría' },
    'cracovia': { lat: 50.0647, lon: 19.9450, display_name: 'Cracovia, Polonia' },
    'varsovia': { lat: 52.2297, lon: 21.0122, display_name: 'Varsovia, Polonia' },
    'atenas': { lat: 37.9838, lon: 23.7275, display_name: 'Atenas, Grecia' },
    'santorini': { lat: 36.3932, lon: 25.4615, display_name: 'Santorini, Grecia' },
    'mykonos': { lat: 37.4467, lon: 25.3289, display_name: 'Mykonos, Grecia' },
    'lisboa': { lat: 38.7223, lon: -9.1393, display_name: 'Lisboa, Portugal' },
    'oporto': { lat: 41.1579, lon: -8.6291, display_name: 'Oporto, Portugal' },
    'porto': { lat: 41.1579, lon: -8.6291, display_name: 'Oporto, Portugal' },
    'estambul': { lat: 41.0082, lon: 28.9784, display_name: 'Estambul, Turquía' },
    'estocolmo': { lat: 59.3293, lon: 18.0686, display_name: 'Estocolmo, Suecia' },
    'copenhague': { lat: 55.6761, lon: 12.5683, display_name: 'Copenhague, Dinamarca' },
    'oslo': { lat: 59.9139, lon: 10.7522, display_name: 'Oslo, Noruega' },
    'reikiavik': { lat: 64.1466, lon: -21.9426, display_name: 'Reikiavik, Islandia' },
    'dubrovnik': { lat: 42.6507, lon: 18.0944, display_name: 'Dubrovnik, Croacia' },

    // Argentina y Cono Sur
    'buenos aires': { lat: -34.6037, lon: -58.3816, display_name: 'Buenos Aires, Argentina' },
    'caba': { lat: -34.6037, lon: -58.3816, display_name: 'Buenos Aires, Argentina' },
    'cordoba': { lat: -31.4201, lon: -64.1888, display_name: 'Córdoba, Argentina' },
    'rosario': { lat: -32.9442, lon: -60.6505, display_name: 'Rosario, Argentina' },
    'mendoza': { lat: -32.8895, lon: -68.8458, display_name: 'Mendoza, Argentina' },
    'bariloche': { lat: -41.1335, lon: -71.3103, display_name: 'San Carlos de Bariloche, Argentina' },
    'san carlos de bariloche': { lat: -41.1335, lon: -71.3103, display_name: 'San Carlos de Bariloche, Argentina' },
    'el calafate': { lat: -50.3379, lon: -72.2648, display_name: 'El Calafate, Argentina' },
    'calafate': { lat: -50.3379, lon: -72.2648, display_name: 'El Calafate, Argentina' },
    'el chalten': { lat: -49.3315, lon: -72.8863, display_name: 'El Chaltén, Argentina' },
    'ushuaia': { lat: -54.8019, lon: -68.3030, display_name: 'Ushuaia, Argentina' },
    'puerto iguazu': { lat: -25.5991, lon: -54.5735, display_name: 'Puerto Iguazú, Argentina' },
    'iguazu': { lat: -25.5991, lon: -54.5735, display_name: 'Puerto Iguazú, Argentina' },
    'salta': { lat: -24.7821, lon: -65.4232, display_name: 'Salta, Argentina' },
    'jujuy': { lat: -24.1858, lon: -65.2995, display_name: 'San Salvador de Jujuy, Argentina' },
    'purmamarca': { lat: -23.7468, lon: -65.4995, display_name: 'Purmamarca, Argentina' },
    'tilcara': { lat: -23.5776, lon: -65.3951, display_name: 'Tilcara, Argentina' },
    'mar del plata': { lat: -38.0055, lon: -57.5426, display_name: 'Mar del Plata, Argentina' },
    'villa la angostura': { lat: -40.7617, lon: -71.6463, display_name: 'Villa La Angostura, Argentina' },
    'san martin de los andes': { lat: -40.1579, lon: -71.3534, display_name: 'San Martín de los Andes, Argentina' },
    'puerto madryn': { lat: -42.7692, lon: -65.0385, display_name: 'Puerto Madryn, Argentina' },
    'villa carlos paz': { lat: -31.4241, lon: -64.4978, display_name: 'Villa Carlos Paz, Argentina' },
    'villa general belgrano': { lat: -31.9776, lon: -64.5579, display_name: 'Villa General Belgrano, Argentina' },
    'islas malvinas': { lat: -51.7963, lon: -59.5236, display_name: 'Islas Malvinas, Argentina' },
    'montevideo': { lat: -34.9011, lon: -56.1645, display_name: 'Montevideo, Uruguay' },
    'punta del este': { lat: -34.9627, lon: -54.9437, display_name: 'Punta del Este, Uruguay' },
    'colonia del sacramento': { lat: -34.4626, lon: -57.8398, display_name: 'Colonia del Sacramento, Uruguay' },
    'santiago': { lat: -33.4489, lon: -70.6693, display_name: 'Santiago, Chile' },
    'santiago de chile': { lat: -33.4489, lon: -70.6693, display_name: 'Santiago, Chile' },
    'valparaiso': { lat: -33.0472, lon: -71.6127, display_name: 'Valparaíso, Chile' },
    'vina del mar': { lat: -33.0245, lon: -71.5518, display_name: 'Viña del Mar, Chile' },
    'san pedro de atacama': { lat: -22.9087, lon: -68.1997, display_name: 'San Pedro de Atacama, Chile' },
    'puerto montt': { lat: -41.4693, lon: -72.9424, display_name: 'Puerto Montt, Chile' },
    'chaiten': { lat: -42.9183, lon: -72.7086, display_name: 'Chaitén, Chile' },
    'pumalin': { lat: -42.5833, lon: -72.6167, display_name: 'Parque Nacional Pumalín, Chile' },
    'puyuhuapi': { lat: -44.3256, lon: -72.5597, display_name: 'Puyuhuapi, Chile' },
    'queulat': { lat: -44.4167, lon: -72.4667, display_name: 'Parque Nacional Queulat, Chile' },
    'coyhaique': { lat: -45.5752, lon: -72.0662, display_name: 'Coyhaique, Chile' },
    'cerro castillo': { lat: -46.1183, lon: -72.1647, display_name: 'Villa Cerro Castillo, Chile' },
    'puerto rio tranquilo': { lat: -46.6250, lon: -72.6750, display_name: 'Puerto Río Tranquilo, Chile' },
    'cochrane': { lat: -47.2539, lon: -72.5731, display_name: 'Cochrane, Chile' },
    'caleta tortel': { lat: -47.7964, lon: -73.5317, display_name: 'Caleta Tortel, Chile' },
    'puerto eden': { lat: -49.1264, lon: -74.4142, display_name: 'Puerto Edén, Chile' },
    'puerto natales': { lat: -51.7299, lon: -72.5060, display_name: 'Puerto Natales, Chile' },
    'torres del paine': { lat: -50.9423, lon: -73.4068, display_name: 'Torres del Paine, Chile' },
    'punta arenas': { lat: -53.1638, lon: -70.9171, display_name: 'Punta Arenas, Chile' },

    // Resto de Latinoamérica
    'rio de janeiro': { lat: -22.9068, lon: -43.1729, display_name: 'Río de Janeiro, Brasil' },
    'sao paulo': { lat: -23.5505, lon: -46.6333, display_name: 'São Paulo, Brasil' },
    'florianopolis': { lat: -27.5954, lon: -48.5480, display_name: 'Florianópolis, Brasil' },
    'buzios': { lat: -22.7469, lon: -41.8817, display_name: 'Búzios, Brasil' },
    'ilhabela': { lat: -23.7781, lon: -45.3581, display_name: 'Ilhabela, Brasil' },
    'camboriu': { lat: -26.9926, lon: -48.6352, display_name: 'Balneário Camboriú, Brasil' },
    'balneario camboriu': { lat: -26.9926, lon: -48.6352, display_name: 'Balneário Camboriú, Brasil' },
    'salvador': { lat: -12.9714, lon: -38.5014, display_name: 'Salvador de Bahía, Brasil' },
    'lima': { lat: -12.0464, lon: -77.0428, display_name: 'Lima, Perú' },
    'cusco': { lat: -13.5320, lon: -71.9675, display_name: 'Cusco, Perú' },
    'cuzco': { lat: -13.5320, lon: -71.9675, display_name: 'Cusco, Perú' },
    'machu picchu': { lat: -13.1631, lon: -72.5450, display_name: 'Machu Picchu, Perú' },
    'bogota': { lat: 4.7110, lon: -74.0721, display_name: 'Bogotá, Colombia' },
    'medellin': { lat: 6.2442, lon: -75.5812, display_name: 'Medellín, Colombia' },
    'cartagena': { lat: 10.3910, lon: -75.4794, display_name: 'Cartagena de Indias, Colombia' },
    'san andres': { lat: 12.5847, lon: -81.7006, display_name: 'San Andrés, Colombia' },
    'quito': { lat: -0.1807, lon: -78.4678, display_name: 'Quito, Ecuador' },
    'ciudad de mexico': { lat: 19.4326, lon: -99.1332, display_name: 'Ciudad de México, México' },
    'cdmx': { lat: 19.4326, lon: -99.1332, display_name: 'Ciudad de México, México' },
    'cancun': { lat: 21.1619, lon: -86.8515, display_name: 'Cancún, México' },
    'playa del carmen': { lat: 20.6296, lon: -87.0739, display_name: 'Playa del Carmen, México' },
    'tulum': { lat: 20.2114, lon: -87.4654, display_name: 'Tulum, México' },
    'punta cana': { lat: 18.5601, lon: -68.3725, display_name: 'Punta Cana, República Dominicana' },
    'la habana': { lat: 23.1136, lon: -82.3666, display_name: 'La Habana, Cuba' },

    // Norteamérica
    'nueva york': { lat: 40.7128, lon: -74.0060, display_name: 'Nueva York, EE. UU.' },
    'new york': { lat: 40.7128, lon: -74.0060, display_name: 'Nueva York, EE. UU.' },
    'miami': { lat: 25.7617, lon: -80.1918, display_name: 'Miami, EE. UU.' },
    'orlando': { lat: 28.5383, lon: -81.3792, display_name: 'Orlando, EE. UU.' },
    'los angeles': { lat: 34.0522, lon: -118.2437, display_name: 'Los Ángeles, EE. UU.' },
    'san francisco': { lat: 37.7749, lon: -122.4194, display_name: 'San Francisco, EE. UU.' },
    'las vegas': { lat: 36.1699, lon: -115.1398, display_name: 'Las Vegas, EE. UU.' },
    'chicago': { lat: 41.8781, lon: -87.6298, display_name: 'Chicago, EE. UU.' },
    'washington': { lat: 38.9072, lon: -77.0369, display_name: 'Washington D.C., EE. UU.' },
    'boston': { lat: 42.3601, lon: -71.0589, display_name: 'Boston, EE. UU.' },
    'toronto': { lat: 43.6532, lon: -79.3832, display_name: 'Toronto, Canadá' },
    'vancouver': { lat: 49.2827, lon: -123.1207, display_name: 'Vancouver, Canadá' },
    'montreal': { lat: 45.5017, lon: -73.5673, display_name: 'Montreal, Canadá' },

    // Asia, Medio Oriente, África y Oceanía
    'tokio': { lat: 35.6762, lon: 139.6503, display_name: 'Tokio, Japón' },
    'tokyo': { lat: 35.6762, lon: 139.6503, display_name: 'Tokio, Japón' },
    'kioto': { lat: 35.0116, lon: 135.7681, display_name: 'Kioto, Japón' },
    'kyoto': { lat: 35.0116, lon: 135.7681, display_name: 'Kioto, Japón' },
    'osaka': { lat: 34.6937, lon: 135.5023, display_name: 'Osaka, Japón' },
    'seul': { lat: 37.5665, lon: 126.9780, display_name: 'Seúl, Corea del Sur' },
    'bangkok': { lat: 13.7563, lon: 100.5018, display_name: 'Bangkok, Tailandia' },
    'phuket': { lat: 7.8804, lon: 98.3923, display_name: 'Phuket, Tailandia' },
    'singapur': { lat: 1.3521, lon: 103.8198, display_name: 'Singapur' },
    'bali': { lat: -8.4095, lon: 115.1889, display_name: 'Bali, Indonesia' },
    'dubai': { lat: 25.2048, lon: 55.2708, display_name: 'Dubái, EAU' },
    'el cairo': { lat: 30.0444, lon: 31.2357, display_name: 'El Cairo, Egipto' },
    'marrakech': { lat: 31.6295, lon: -7.9811, display_name: 'Marrakech, Marruecos' },
    'ciudad del cabo': { lat: -33.9249, lon: 18.4241, display_name: 'Ciudad del Cabo, Sudáfrica' },
    'sidney': { lat: -33.8688, lon: 151.2093, display_name: 'Sídney, Australia' },
    'sydney': { lat: -33.8688, lon: 151.2093, display_name: 'Sídney, Australia' },
    'melbourne': { lat: -37.8136, lon: 144.9631, display_name: 'Melbourne, Australia' },
    'auckland': { lat: -36.8485, lon: 174.7633, display_name: 'Auckland, Nueva Zelanda' }
  };

  function normalizeCityKey(str) {
    return String(str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function loadPersistedGeocodeCache() {
    window._pluxGeocodeCache = window._pluxGeocodeCache || {};
    // 1. Sembrar diccionario base
    Object.keys(OFFLINE_WORLD_COORDS).forEach((k) => {
      window._pluxGeocodeCache[k] = OFFLINE_WORLD_COORDS[k];
    });
    // 2. Cargar coordenadas aprendidas por el usuario en viajes previos
    try {
      const raw = localStorage.getItem(GEOCODE_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          Object.assign(window._pluxGeocodeCache, parsed);
        }
      }
    } catch (e) {}
  }

  function saveGeocodeToStorage(key, val) {
    if (!key || !val || typeof val.lat !== 'number' || typeof val.lon !== 'number') return;
    window._pluxGeocodeCache = window._pluxGeocodeCache || {};
    window._pluxGeocodeCache[key] = val;
    window._pluxGeocodeCache[normalizeCityKey(key)] = val;
    try {
      const raw = localStorage.getItem(GEOCODE_STORAGE_KEY);
      const current = raw ? JSON.parse(raw) : {};
      current[key] = val;
      current[normalizeCityKey(key)] = val;
      localStorage.setItem(GEOCODE_STORAGE_KEY, JSON.stringify(current));
    } catch (e) {}
  }

  function lookupLocalCoordinate(lugar) {
    if (!lugar) return null;
    const rawKey = String(lugar).trim().toLowerCase();
    const normFull = normalizeCityKey(lugar);
    const cityOnly = normalizeCityKey(String(lugar).split(',')[0]);

    const cache = window._pluxGeocodeCache || {};
    if (cache[rawKey]) return cache[rawKey];
    if (cache[normFull]) return cache[normFull];
    if (cache[cityOnly]) return cache[cityOnly];

    // Búsqueda parcial inteligente si está offline
    for (const k of Object.keys(OFFLINE_WORLD_COORDS)) {
      if (cityOnly && (k === cityOnly || (cityOnly.length >= 4 && k.includes(cityOnly)) || (k.length >= 4 && cityOnly.includes(k)))) {
        return OFFLINE_WORLD_COORDS[k];
      }
    }
    return null;
  }

  loadPersistedGeocodeCache();

  // Envolver window.geocode cuando esté disponible
  function hookGeocodeWithOfflinePersistence() {
    if (typeof window.geocode !== 'function' || window.geocode._pluxOfflineHooked) return;
    const origGeocode = window.geocode;

    const wrappedGeocode = async function (lugar) {
      if (!lugar) return null;
      const localHit = lookupLocalCoordinate(lugar);

      // Si estamos sin internet, responder instantáneamente desde caché/diccionario local
      if (!navigator.onLine && localHit) {
        return localHit;
      }

      try {
        const res = await origGeocode.apply(this, arguments);
        if (res && typeof res.lat === 'number' && typeof res.lon === 'number') {
          saveGeocodeToStorage(String(lugar).trim().toLowerCase(), res);
          const cityPart = String(lugar).split(',')[0].trim().toLowerCase();
          if (cityPart) saveGeocodeToStorage(cityPart, res);
          return res;
        }
      } catch (e) {}

      return localHit || null;
    };

    wrappedGeocode._pluxOfflineHooked = true;
    window.geocode = wrappedGeocode;
  }

  // ===========================================================================
  // 2. COLA DE SINCRONIZACIÓN DIFERIDA (AUTO-SYNC AL VOLVER INTERNET)
  // ===========================================================================
  function markPendingCloudSync() {
    try {
      localStorage.setItem(PENDING_SYNC_KEY, '1');
      localStorage.setItem(PENDING_SYNC_TS_KEY, new Date().toISOString());
    } catch (e) {}
  }

  function hasPendingCloudSync() {
    return localStorage.getItem(PENDING_SYNC_KEY) === '1' || Boolean(localStorage.getItem(PENDING_COLLAB_KEY));
  }
  window.hasPendingCloudSync = hasPendingCloudSync;
  window.markPendingCloudSync = markPendingCloudSync;

  async function flushOfflineSyncQueue(silent = false) {
    if (!navigator.onLine) return false;

    const hadPending = hasPendingCloudSync();
    try {
      // 1. Subir perfil completo y viajes locales a Firestore
      if (typeof window.sincronizarPerfil === 'function') {
        window.sincronizarPerfil();
      }

      // 2. Subir viaje colaborativo pendiente si el usuario editó uno con syncCode estando offline
      const pendingCollabRaw = localStorage.getItem(PENDING_COLLAB_KEY);
      if (pendingCollabRaw && typeof firebase !== 'undefined' && typeof firebase.firestore === 'function') {
        try {
          const parsed = JSON.parse(pendingCollabRaw);
          if (parsed && parsed.syncCode && parsed.data) {
            await firebase.firestore().collection('plux_viajes_compartidos').doc(parsed.syncCode).set({
              data: parsed.data,
              timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
          }
          localStorage.removeItem(PENDING_COLLAB_KEY);
        } catch (ce) {
          console.warn('[Plux Offline] Reintento collab pendiente:', ce);
        }
      }

      localStorage.removeItem(PENDING_SYNC_KEY);
      updateOfflineTopIndicator();
      if (typeof window.updateLiveCollabBadge === 'function') {
        window.updateLiveCollabBadge();
      }

      if (hadPending && !silent && typeof window.showToast === 'function') {
        window.showToast(t('offline.sync_restored_toast'), 'success');
      }
      return true;
    } catch (err) {
      console.warn('[Plux Offline] Error vaciando cola de sync:', err);
      return false;
    }
  }
  window.flushOfflineSyncQueue = flushOfflineSyncQueue;

  function hookStorageAndSyncFunctions() {
    ['saveTrips', 'autoSave', 'sincronizarPerfil'].forEach((fnName) => {
      if (typeof window[fnName] === 'function' && !window[fnName]._pluxOfflineHooked) {
        const orig = window[fnName];
        const wrapped = function () {
          if (!navigator.onLine) {
            markPendingCloudSync();
          }
          const res = orig.apply(this, arguments);
          updateOfflineTopIndicator();
          if (typeof window.updateLiveCollabBadge === 'function') {
            setTimeout(window.updateLiveCollabBadge, 40);
          }
          return res;
        };
        wrapped._pluxOfflineHooked = true;
        window[fnName] = wrapped;
      }
    });
  }

  // ===========================================================================
  // 3. PLUXY E IA EN MODO OFFLINE: "NO HAY SEÑAL" Y PUNTO
  // ===========================================================================
  function buildOfflinePluxyResponse() {
    return t('offline.pluxy_offline_reply');
  }
  window.buildOfflinePluxyResponse = buildOfflinePluxyResponse;

  // Genera resultados de autocompletado de ciudades en formato Open-Meteo cuando no hay internet
  function buildOfflineGeocodingSearchResults(query) {
    const q = normalizeCityKey(query);
    if (!q) return [];
    const cache = window._pluxGeocodeCache || {};
    const seen = new Set();
    const results = [];

    Object.keys(cache).forEach((key) => {
      const item = cache[key];
      if (!item || typeof item.lat !== 'number' || typeof item.lon !== 'number') return;
      const normKey = normalizeCityKey(key);
      const disp = String(item.display_name || key);
      const normDisp = normalizeCityKey(disp);

      if (normKey.includes(q) || normDisp.includes(q)) {
        const parts = disp.split(',').map((s) => s.trim());
        const cityName = parts[0] || key;
        const countryName = parts[1] || '';
        const dedupId = `${cityName.toLowerCase()}_${item.lat.toFixed(2)}`;
        if (seen.has(dedupId)) return;
        seen.add(dedupId);

        results.push({
          name: cityName.charAt(0).toUpperCase() + cityName.slice(1),
          country: countryName,
          country_code: countryName.toLowerCase().includes('argentina') ? 'AR' : (countryName.toLowerCase().includes('espa') ? 'ES' : ''),
          admin1: countryName,
          latitude: item.lat,
          longitude: item.lon
        });
      }
    });

    return results.slice(0, 6);
  }

  // Genera un pronóstico Open-Meteo válido si el usuario abre la pestaña Clima sin internet y no estaba en caché
  function buildOfflineWeatherForecast(lat = 40) {
    const absLat = Math.abs(Number(lat) || 40);
    const baseTemp = Math.round(24 - (absLat * 0.22));
    const times = [];
    const codes = [];
    const maxs = [];
    const mins = [];
    const now = new Date();

    for (let i = 0; i < 7; i++) {
      const d = new Date(now.getTime() + i * 86400000);
      times.push(d.toISOString().slice(0, 10));
      codes.push(i % 3 === 0 ? 0 : (i % 2 === 0 ? 1 : 2));
      maxs.push(baseTemp + 3 + (i % 3));
      mins.push(baseTemp - 4 + (i % 2));
    }

    return {
      current: {
        temperature_2m: baseTemp,
        relative_humidity_2m: 58,
        apparent_temperature: baseTemp,
        weather_code: 1,
        wind_speed_10m: 12
      },
      daily: {
        time: times,
        weather_code: codes,
        temperature_2m_max: maxs,
        temperature_2m_min: mins
      }
    };
  }

  // Interceptor de window.fetch para autocompletado y clima offline (Pluxy e IA devuelven "No hay señal")
  function hookFetchForOfflineAPIs() {
    if (typeof window.fetch !== 'function' || window.fetch._pluxOfflineFetchHooked) return;
    const origFetch = window.fetch.bind(window);

    const wrappedFetch = async function (input, init) {
      const urlStr = typeof input === 'string' ? input : (input && input.url ? input.url : '');

      // 1. Geocoding Open-Meteo (Autocompletado de ciudades y clima)
      if (urlStr.includes('geocoding-api.open-meteo.com/v1/search')) {
        if (!navigator.onLine) {
          try {
            const u = new URL(urlStr);
            const q = u.searchParams.get('name') || '';
            const results = buildOfflineGeocodingSearchResults(q);
            return new Response(JSON.stringify({ results }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            });
          } catch (e) {}
        }
        try {
          const netRes = await origFetch(input, init);
          if (netRes && netRes.ok) return netRes;
        } catch (e) {}
        try {
          const u = new URL(urlStr);
          const q = u.searchParams.get('name') || '';
          const results = buildOfflineGeocodingSearchResults(q);
          return new Response(JSON.stringify({ results }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (e) {}
      }

      // 2. Pronóstico Clima Open-Meteo (Usa caché del SW si existe, o estimación offline si no fue pre-cargado)
      if (urlStr.includes('api.open-meteo.com/v1/forecast')) {
        try {
          const netRes = await origFetch(input, init);
          if (netRes && netRes.ok) return netRes;
        } catch (e) {}
        let lat = 40;
        try {
          const u = new URL(urlStr);
          lat = parseFloat(u.searchParams.get('latitude') || '40');
        } catch (e) {}
        return new Response(JSON.stringify(buildOfflineWeatherForecast(lat)), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      return origFetch(input, init);
    };

    wrappedFetch._pluxOfflineFetchHooked = true;
    window.fetch = wrappedFetch;
  }

  function hookPluxyForOffline() {
    if (typeof window.callAIText === 'function' && !window.callAIText._pluxOfflineWrapped) {
      const prevCallAI = window.callAIText;
      const wrappedCallAI = async function (messages) {
        if (!navigator.onLine) {
          return buildOfflinePluxyResponse(messages);
        }
        try {
          return await prevCallAI.apply(this, arguments);
        } catch (err) {
          return buildOfflinePluxyResponse(messages);
        }
      };
      wrappedCallAI._pluxOfflineWrapped = true;
      window.callAIText = wrappedCallAI;
    }
  }

  // ===========================================================================
  // 4. REGISTRO DEL SERVICE WORKER Y PRE-DESCARGA DE MAPAS (MODO AVIÓN)
  // ===========================================================================
  let swRegistration = null;

  async function registerPluxServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    // En localhost / 127.0.0.1 desregistrar SW para ver cambios en vivo sin caché viejo
    const isLocalDev = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    if (isLocalDev) {
      try {
        const regs = await navigator.serviceWorker.getRegistrations();
        for (const r of regs) await r.unregister();
        if (window.caches) {
          const keys = await caches.keys();
          await Promise.all(keys.map((k) => caches.delete(k)));
        }
      } catch (e) {}
      return;
    }
    try {
      swRegistration = await navigator.serviceWorker.register('/sw.js', { scope: '/' });

      swRegistration.addEventListener('updatefound', () => {
        const newWorker = swRegistration.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            newWorker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      });

      navigator.serviceWorker.addEventListener('message', (event) => {
        const msg = event.data || {};
        if (msg.type === 'PRECACHE_PROGRESS') {
          const bar = document.getElementById('pluxOfflineProgressBar');
          const txt = document.getElementById('pluxOfflineProgressText');
          const pct = msg.total > 0 ? Math.min(100, Math.round((msg.loaded / msg.total) * 100)) : 100;
          if (bar) bar.style.width = `${pct}%`;
          if (txt) txt.textContent = t('offline.precache_progress', { city: msg.city || t('offline.route_default'), pct, loaded: msg.loaded, total: msg.total });
        } else if (msg.type === 'PRECACHE_COMPLETE') {
          const bar = document.getElementById('pluxOfflineProgressBar');
          const txt = document.getElementById('pluxOfflineProgressText');
          const btn = document.getElementById('btnPrepareTripOffline');
          if (bar) bar.style.width = '100%';
          if (txt) txt.innerHTML = `<span style="color:#34d399;font-weight:800;">${t('offline.precache_complete', { total: msg.total })}</span>`;
          if (btn) {
            btn.disabled = false;
            btn.innerHTML = t('offline.precache_btn_done');
          }
          refreshCacheStatsInModal();
          if (typeof window.showToast === 'function') {
            window.showToast(t('offline.precache_toast_done'), 'success');
          }
        }
      });
    } catch (err) {
      console.warn('[Plux Offline] No se pudo registrar /sw.js:', err);
    }
  }

  function requestSwCacheStats() {
    return new Promise((resolve) => {
      if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
        resolve({ version: 'v8.0.1', staticCount: 31, cdnCount: 10, tilesCount: 0, apiCount: 0 });
        return;
      }
      const channel = new MessageChannel();
      const timeout = setTimeout(() => {
        resolve({ version: 'v8.0.1', staticCount: 31, cdnCount: 10, tilesCount: 0, apiCount: 0 });
      }, 1500);

      channel.port1.onmessage = (event) => {
        clearTimeout(timeout);
        resolve(event.data || { version: 'v8.0.1', staticCount: 31, cdnCount: 10, tilesCount: 0, apiCount: 0 });
      };
      navigator.serviceWorker.controller.postMessage({ type: 'GET_CACHE_STATS' }, [channel.port2]);
    });
  }

  // Prepara todas las ciudades del viaje actual (o de todos los viajes guardados) para Modo Avión
  async function prepararViajeParaModoAvion() {
    const btn = document.getElementById('btnPrepareTripOffline');
    const progWrap = document.getElementById('pluxOfflineProgressWrap');
    const bar = document.getElementById('pluxOfflineProgressBar');
    const txt = document.getElementById('pluxOfflineProgressText');

    if (progWrap) progWrap.style.display = 'block';
    if (bar) bar.style.width = '8%';
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = t('offline.preparing_btn');
    }

    // 1. Recolectar ciudades del viaje activo y de los viajes guardados
    const cityNames = new Set();
    const isSeaLegacy = (n) => typeof window.esDestinoNavegacion === 'function' && window.esDestinoNavegacion(n);
    if (typeof destinos !== 'undefined' && Array.isArray(destinos)) {
      destinos.forEach((d) => { if (d && d.nombre && !isSeaLegacy(d.nombre)) cityNames.add(d.nombre.trim()); });
    }
    const storedTrips = typeof window.getStoredTrips === 'function' ? window.getStoredTrips() : [];
    storedTrips.slice(-3).forEach((t) => {
      (t?.destinos || []).forEach((d) => { if (d && d.nombre && !isSeaLegacy(d.nombre)) cityNames.add(d.nombre.trim()); });
    });

    if (cityNames.size === 0) {
      ['Madrid', 'Roma', 'París', 'Buenos Aires'].forEach((c) => cityNames.add(c));
    }

    const resolvedLocations = [];
    const citiesArr = Array.from(cityNames);
    let completedCount = 0;

    await Promise.allSettled(citiesArr.map(async (city) => {
      let coord = lookupLocalCoordinate(city);
      if (!coord && typeof window.geocode === 'function') {
        coord = await window.geocode(city);
      }
      completedCount++;
      if (txt) txt.textContent = t('offline.geocoding_progress', { city, i: completedCount, total: citiesArr.length });
      if (coord && typeof coord.lat === 'number' && typeof coord.lon === 'number') {
        saveGeocodeToStorage(city.toLowerCase(), coord);
        resolvedLocations.push({ nombre: city, lat: coord.lat, lon: coord.lon });

        // Pre-cachear clima exacto de 16 días y ficha de Wikipedia de la ciudad si estamos online
        if (navigator.onLine) {
          const wikiLang = typeof getWikiLang === 'function' ? getWikiLang() : 'es';
          const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coord.lat}&longitude=${coord.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=16`;
          const wikiUrl = `https://${wikiLang}.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(city)}&gsrlimit=1&prop=extracts|pageimages&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=900&format=json&origin=*`;
          fetch(weatherUrl).catch(() => {});
          fetch(wikiUrl).catch(() => {});
        }
      }
    }));

    // Guardar registro de preparación offline
    try {
      localStorage.setItem(OFFLINE_READY_TRIPS_KEY, JSON.stringify({
        ts: new Date().toISOString(),
        cities: resolvedLocations.map((l) => l.nombre)
      }));
    } catch (e) {}

    // 2. Enviar coordenadas al Service Worker para descargar tiles del mapa
    const activeSw = navigator.serviceWorker?.controller || swRegistration?.active;
    if (activeSw && navigator.onLine && resolvedLocations.length > 0) {
      activeSw.postMessage({
        type: 'PRECACHE_TRIP_TILES',
        locations: resolvedLocations
      });
    } else {
      if (bar) bar.style.width = '100%';
      if (txt) {
        txt.innerHTML = `<span style="color:#34d399;font-weight:800;">${t('offline.local_ready_msg', { count: resolvedLocations.length })}</span>`;
      }
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = t('offline.local_ready_btn');
      }
    }
  }
  window.prepararViajeParaModoAvion = prepararViajeParaModoAvion;

  // ===========================================================================
  // 5. UI: CENTRO DE CONTROL MODO OFFLINE (SIN BOTÓN EN BARRA SUPERIOR)
  // ===========================================================================
  function injectTopOfflineButton() {
    // Eliminado de .top-selectors a pedido del usuario; el acceso sigue disponible
    // desde la píldora de estado dentro del viaje o vía window.abrirPanelOffline().
    const existing = document.getElementById('offlineControlButton');
    if (existing) {
      const wrap = existing.closest('.selector-wrapper');
      if (wrap) wrap.remove();
      else existing.remove();
    }
  }

  function updateOfflineTopIndicator() {
    // Mantenido como no-op compatible si algún hook lo invoca
  }

  async function refreshCacheStatsInModal() {
    const statsEl = document.getElementById('pluxOfflineCacheStatsGrid');
    if (!statsEl) return;

    const stats = await requestSwCacheStats();
    const trips = typeof window.getStoredTrips === 'function' ? window.getStoredTrips() : [];
    let totalDestinos = 0;
    trips.forEach((t) => { totalDestinos += (t?.destinos || []).length; });

    let vouchersCount = 0;
    try {
      vouchersCount = JSON.parse(localStorage.getItem('plux_vouchers_v1') || '[]').length;
    } catch (e) {}

    let geocodeCount = Object.keys(OFFLINE_WORLD_COORDS).length;
    try {
      const savedGeo = JSON.parse(localStorage.getItem(GEOCODE_STORAGE_KEY) || '{}');
      geocodeCount = Math.max(geocodeCount, Object.keys(OFFLINE_WORLD_COORDS).length + Object.keys(savedGeo).length);
    } catch (e) {}

    statsEl.innerHTML = `
      <div style="background:rgba(255,255,255,0.04); border:1px solid var(--border, #334155); border-radius:14px; padding:12px;">
        <div style="font-size:0.74rem; color:var(--gris, #94a3b8); text-transform:uppercase; font-weight:700;">${t('offline.stat_trips_title')}</div>
        <div style="font-size:1.25rem; font-weight:800; color:var(--texto, #fff); margin-top:4px;">${t('offline.stat_trips_val', { trips: trips.length, dests: totalDestinos })}</div>
        <div style="font-size:0.75rem; color:#34d399; margin-top:2px;">${t('offline.stat_trips_sub')}</div>
      </div>
      <div style="background:rgba(255,255,255,0.04); border:1px solid var(--border, #334155); border-radius:14px; padding:12px;">
        <div style="font-size:0.74rem; color:var(--gris, #94a3b8); text-transform:uppercase; font-weight:700;">${t('offline.stat_wallet_title')}</div>
        <div style="font-size:1.25rem; font-weight:800; color:var(--texto, #fff); margin-top:4px;">${t('offline.stat_wallet_val', { count: vouchersCount })}</div>
        <div style="font-size:0.75rem; color:#34d399; margin-top:2px;">${t('offline.stat_wallet_sub')}</div>
      </div>
      <div style="background:rgba(255,255,255,0.04); border:1px solid var(--border, #334155); border-radius:14px; padding:12px;">
        <div style="font-size:0.74rem; color:var(--gris, #94a3b8); text-transform:uppercase; font-weight:700;">${t('offline.stat_maps_title')}</div>
        <div style="font-size:1.25rem; font-weight:800; color:var(--texto, #fff); margin-top:4px;">${t('offline.stat_maps_val', { count: stats.tilesCount })}</div>
        <div style="font-size:0.75rem; color:#38bdf8; margin-top:2px;">${t('offline.stat_maps_sub', { count: geocodeCount })}</div>
      </div>
      <div style="background:rgba(255,255,255,0.04); border:1px solid var(--border, #334155); border-radius:14px; padding:12px;">
        <div style="font-size:0.74rem; color:var(--gris, #94a3b8); text-transform:uppercase; font-weight:700;">${t('offline.stat_shell_title', { version: stats.version })}</div>
        <div style="font-size:1.25rem; font-weight:800; color:var(--texto, #fff); margin-top:4px;">${t('offline.stat_shell_val', { count: stats.staticCount + stats.cdnCount })}</div>
        <div style="font-size:0.75rem; color:#34d399; margin-top:2px;">${t('offline.stat_shell_sub')}</div>
      </div>
    `;
  }

  function abrirPanelOffline() {
    const existing = document.getElementById('modal-plux-offline');
    if (existing) existing.remove();

    const isOnline = navigator.onLine;
    const pending = hasPendingCloudSync();
    let preparedInfo = null;
    try {
      preparedInfo = JSON.parse(localStorage.getItem(OFFLINE_READY_TRIPS_KEY) || 'null');
    } catch (e) {}

    const modal = document.createElement('div');
    modal.id = 'modal-plux-offline';
    modal.style.cssText = 'position:fixed; inset:0; background:rgba(9,13,22,0.88); backdrop-filter:blur(8px); display:flex; align-items:center; justify-content:center; z-index:2500; padding:16px;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    const statusBannerBg = isOnline
      ? 'linear-gradient(135deg, rgba(16,185,129,0.16), rgba(56,189,248,0.12))'
      : 'linear-gradient(135deg, rgba(245,158,11,0.22), rgba(239,68,68,0.12))';
    const statusBannerBorder = isOnline ? 'rgba(16,185,129,0.4)' : 'rgba(245,158,11,0.5)';
    const statusTitle = isOnline
      ? t('offline.banner_online_title')
      : t('offline.banner_offline_title');
    const statusDesc = isOnline
      ? (pending
          ? t('offline.banner_online_pending')
          : t('offline.banner_online_clean'))
      : t('offline.banner_offline_desc');

    modal.innerHTML = `
      <div class="modal-content" style="background:var(--card, #1e293b); border:1px solid var(--border, #334155); border-radius:24px; max-width:560px; width:100%; max-height:90vh; overflow-y:auto; padding:24px; color:var(--texto, #f8fafc); box-shadow:0 25px 70px rgba(0,0,0,0.75);">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:16px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:1.6rem;">✈️</span>
            <div>
              <h3 style="margin:0; font-size:1.22rem; font-weight:800; color:var(--texto, #fff);">${t('offline.modal_title')}</h3>
              <span style="font-size:0.78rem; color:var(--gris, #94a3b8);">${t('offline.modal_subtitle')}</span>
            </div>
          </div>
          <button type="button" onclick="document.getElementById('modal-plux-offline').remove()" style="background:rgba(255,255,255,0.08); border:1px solid var(--border, #334155); color:var(--texto, #fff); width:34px; height:34px; border-radius:50%; font-size:1.1rem; cursor:pointer;">✕</button>
        </div>

        <!-- Banner de Estado -->
        <div style="background:${statusBannerBg}; border:1px solid ${statusBannerBorder}; border-radius:16px; padding:14px 16px; margin-bottom:16px;">
          <div style="font-weight:800; font-size:0.95rem; margin-bottom:4px;">${statusTitle}</div>
          <div style="font-size:0.82rem; color:var(--gris, #cbd5e1); line-height:1.45;">${statusDesc}</div>
        </div>

        <!-- Grid de Estadísticas Reales -->
        <div id="pluxOfflineCacheStatsGrid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:10px; margin-bottom:16px;">
          <div style="padding:12px; color:var(--gris, #94a3b8); font-size:0.82rem;">${t('offline.checking_storage')}</div>
        </div>

        <!-- Preparar Viaje para Modo Avión -->
        <div style="background:rgba(56,189,248,0.07); border:1px solid rgba(56,189,248,0.28); border-radius:16px; padding:16px; margin-bottom:16px;">
          <div style="font-weight:800; font-size:0.92rem; color:#38bdf8; margin-bottom:6px;">${t('offline.prep_section_title')}</div>
          <div style="font-size:0.8rem; color:var(--gris, #cbd5e1); line-height:1.45; margin-bottom:12px;">
            ${t('offline.prep_desc')}
            ${preparedInfo?.cities?.length ? `<div style="margin-top:6px; color:#34d399; font-weight:700;">${t('offline.prep_destinations', { cities: preparedInfo.cities.join(', ') })}</div>` : ''}
          </div>
          <button type="button" id="btnPrepareTripOffline" onclick="window.prepararViajeParaModoAvion()" style="width:100%; padding:12px 16px; border-radius:12px; border:none; background:linear-gradient(135deg, #34d399, #3b82f6); color:#090d16; font-weight:800; font-size:0.88rem; cursor:pointer; box-shadow:0 6px 18px rgba(52,211,153,0.25);">
            ${t('offline.prep_btn_full')}
          </button>
          <div id="pluxOfflineProgressWrap" style="display:none; margin-top:12px;">
            <div style="height:8px; width:100%; background:rgba(0,0,0,0.4); border-radius:99px; overflow:hidden; margin-bottom:6px;">
              <div id="pluxOfflineProgressBar" style="height:100%; width:0%; background:linear-gradient(90deg, #34d399, #38bdf8); transition:width 0.25s ease;"></div>
            </div>
            <div id="pluxOfflineProgressText" style="font-size:0.76rem; color:var(--gris, #cbd5e1);">${t('offline.starting')}</div>
          </div>
        </div>

        <!-- Acciones Rápidas Offline -->
        <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:space-between; align-items:center;">
          <button type="button" onclick="if(typeof window.exportarPDF==='function'){ document.getElementById('modal-plux-offline').remove(); window.exportarPDF(); }" style="flex:1; min-width:170px; padding:10px 14px; border-radius:12px; border:1px solid var(--border, #334155); background:rgba(255,255,255,0.06); color:var(--texto, #fff); font-weight:700; font-size:0.82rem; cursor:pointer;">
            ${t('offline.export_pdf_btn')}
          </button>
          <button type="button" onclick="window.flushOfflineSyncQueue(false); document.getElementById('modal-plux-offline').remove();" ${!isOnline ? 'disabled' : ''} style="flex:1; min-width:170px; padding:10px 14px; border-radius:12px; border:1px solid ${isOnline ? 'rgba(16,185,129,0.5)' : 'var(--border, #334155)'}; background:${isOnline ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.03)'}; color:${isOnline ? '#34d399' : 'var(--gris, #64748b)'}; font-weight:700; font-size:0.82rem; cursor:${isOnline ? 'pointer' : 'not-allowed'};">
            🔄 ${pending ? t('offline.sync_pending_btn') : t('offline.sync_force_btn')}
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    refreshCacheStatsInModal();
  }
  window.abrirPanelOffline = abrirPanelOffline;

  // ===========================================================================
  // 6. EVENTOS DE RED (ONLINE / OFFLINE) EN TIEMPO REAL
  // ===========================================================================
  window.addEventListener('offline', () => {
    updateOfflineTopIndicator();
    if (typeof window.updateLiveCollabBadge === 'function') {
      window.updateLiveCollabBadge();
    }
    if (typeof window.showToast === 'function') {
      window.showToast(t('offline.offline_toast'), 'info');
    }
  });

  window.addEventListener('online', () => {
    updateOfflineTopIndicator();
    flushOfflineSyncQueue(false);
  });

  // Inicialización progresiva
  function bootstrapOfflineModule() {
    registerPluxServiceWorker();
    hookFetchForOfflineAPIs();
    hookGeocodeWithOfflinePersistence();
    hookStorageAndSyncFunctions();
    hookPluxyForOffline();
    injectTopOfflineButton();

    if (navigator.onLine && hasPendingCloudSync()) {
      setTimeout(() => flushOfflineSyncQueue(true), 2500);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      bootstrapOfflineModule();
      setTimeout(bootstrapOfflineModule, 1200);
    });
  } else {
    bootstrapOfflineModule();
    setTimeout(bootstrapOfflineModule, 1200);
  }
})();
