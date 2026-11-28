/**
 * PLUX v7.1 — ENRUTAMIENTO REAL, OPTIMIZADOR TSP Y MAPA MEJORADO
 * - Cálculo de rutas y tiempos reales (a pie, transporte público, auto) vía OSRM + caché IndexedDB + fallback offline
 * - Detección de días logísticamente imposibles o ajustados
 * - Optimizador automático de orden por cercanía (Held-Karp exacto <=9, NN + 2-opt >9) con Undo 1-clic
 * - Mapa mejorado con 4 capas (Dark Matter, Voyager, Satélite, OSM), sidebar de paradas, buscador, pin directo y GPS
 * - Localización en 5 idiomas (es / en / fr / de / it)
 */
(function (root) {
  'use strict';

  const MAP_LAYER_KEY = 'Plux_Map_Layer';
  const MAP_MODE_KEY = 'Plux_Map_TravelMode';
  const GEOCODE_STORAGE_KEY = 'Plux_Offline_Geocode_Cache';

  // ---------------------------------------------------------------------------
  // 0. LOCALIZACIÓN LIGERA (ES / EN / FR / DE / IT)
  // ---------------------------------------------------------------------------
  const I18N = {
    es: {
      layer_dark: 'Oscuro',
      layer_voyager: 'Calles',
      layer_satellite: 'Satélite',
      layer_osm: 'OSM',
      mode_foot: 'A pie',
      mode_transit: 'Transporte',
      mode_driving: 'Auto',
      general_route: 'Ruta general',
      day_short: 'D{n}',
      day_label: 'Día {n}',
      search_placeholder: 'Buscar lugar para sumar al día...',
      pin: 'Pin',
      gps: 'GPS',
      my_location: 'Mi ubicación',
      optimize_cities: 'Optimizar ciudades',
      optimize_order: 'Optimizar orden',
      import_maps: 'Importar Maps',
      list: 'Lista',
      google_maps: 'Google Maps',
      stops_count: '{n} paradas',
      stops_singular: '1 parada',
      route_viable: 'Ruta viable',
      tight_count: '{n} conexión ajustada',
      impossible_count: '{n} traslado(s) no llegan a tiempo',
      tsp_saved: 'Ahorro TSP: {km} km',
      undo: 'Deshacer',
      no_geocoded_stops: 'Sin paradas geocodificadas en esta vista.',
      circular_origin: 'Salida y regreso',
      origin: 'Origen',
      days_acts: '{d} día(s) · {e} act.',
      return_to: 'Regreso a {name}',
      needs_margin: 'Necesita {travel}m (margen {gap}m)',
      tight_free: 'Justo ({gap}m libres)',
      est_abbr: '(est.)',
      approx_abbr: '(aprox.)',
      stop_fallback: 'Parada {n}',
      sort_proximity: 'Ordenar por cercanía',
      view_day_route: 'Ver ruta del día',
      import_maps_list: 'Importar Maps / Lista',
      chip_needs_margin: 'Necesita {travel} min (tenés {gap} min)',
      chip_tight: 'Conexión justa ({gap} min libres)',
      mini_summary: '{n} parada(s) · Distancia estimada: {km} km',
      open_interactive_map: 'Abrir mapa interactivo',
      need_3_day_stops: 'Necesitás al menos 3 paradas en el día para optimizar el orden.',
      need_3_geocoded: 'No se pudieron ubicar al menos 3 paradas con coordenadas para reordenar.',
      already_shortest_day: '✅ El orden actual ya es el más corto por cercanía.',
      day_optimized: '✨ Paradas optimizadas: ahorrás {km} km (~{min} min).',
      need_3_dests: 'Agregá al menos 3 destinos para optimizar la ruta general.',
      locked_cruise_order: 'Este viaje incluye paradas con orden fijo de reserva/crucero.',
      no_coords_for: 'No se encontraron coordenadas para {name}.',
      already_shortest_cities: '✅ La ruta entre ciudades ya está optimizada.',
      general_optimized: '✨ Ruta general optimizada: ahorrás {km} km.',
      order_restored: '↩️ Orden anterior restaurado.',
      select_day_for_pin: 'Elegí un día específico arriba para fijar un pin en el mapa.',
      pin_mode_hint: '📌 Tocá cualquier punto del mapa para agregar una parada a este día.',
      pin_prompt: 'Nombre del lugar para agregar al día:',
      pin_default_place: 'Lugar en {dest}',
      pin_default_point: 'Punto en {dest} ({lat}, {lon})',
      pin_manual_note: 'Pin manual ({lat}, {lon})',
      create_dest_first: 'Creá o abrí un destino primero para buscar lugares.',
      added_from_map_note: 'Agregado desde el mapa',
      added_to_day: '📍 "{query}" agregado al Día {day}.',
      geo_not_supported: 'Tu dispositivo no soporta geolocalización.',
      your_location: '📍 Tu ubicación actual',
      geo_failed: 'No se pudo obtener tu ubicación actual.'
    },
    en: {
      layer_dark: 'Dark',
      layer_voyager: 'Streets',
      layer_satellite: 'Satellite',
      layer_osm: 'OSM',
      mode_foot: 'Walk',
      mode_transit: 'Transit',
      mode_driving: 'Drive',
      general_route: 'Full route',
      day_short: 'D{n}',
      day_label: 'Day {n}',
      search_placeholder: 'Search place to add to day...',
      pin: 'Pin',
      gps: 'GPS',
      my_location: 'My location',
      optimize_cities: 'Optimize cities',
      optimize_order: 'Optimize order',
      import_maps: 'Import Maps',
      list: 'List',
      google_maps: 'Google Maps',
      stops_count: '{n} stops',
      stops_singular: '1 stop',
      route_viable: 'Feasible route',
      tight_count: '{n} tight connection',
      impossible_count: '{n} transfer(s) won\'t make it on time',
      tsp_saved: 'TSP saved: {km} km',
      undo: 'Undo',
      no_geocoded_stops: 'No geocoded stops in this view.',
      circular_origin: 'Start & return',
      origin: 'Origin',
      days_acts: '{d} day(s) · {e} act.',
      return_to: 'Return to {name}',
      needs_margin: 'Needs {travel}m ({gap}m gap)',
      tight_free: 'Tight ({gap}m free)',
      est_abbr: '(est.)',
      approx_abbr: '(approx.)',
      stop_fallback: 'Stop {n}',
      sort_proximity: 'Sort by proximity',
      view_day_route: 'View day route',
      import_maps_list: 'Import Maps / List',
      chip_needs_margin: 'Needs {travel} min ({gap} min available)',
      chip_tight: 'Tight connection ({gap} min free)',
      mini_summary: '{n} stop(s) · Est. distance: {km} km',
      open_interactive_map: 'Open interactive map',
      need_3_day_stops: 'You need at least 3 stops in the day to optimize the order.',
      need_3_geocoded: 'Could not locate at least 3 stops with coordinates to reorder.',
      already_shortest_day: '✅ The current order is already the shortest by proximity.',
      day_optimized: '✨ Stops optimized: you save {km} km (~{min} min).',
      need_3_dests: 'Add at least 3 destinations to optimize the overall route.',
      locked_cruise_order: 'This trip includes stops with a fixed booking/cruise order.',
      no_coords_for: 'No coordinates found for {name}.',
      already_shortest_cities: '✅ The route between cities is already optimized.',
      general_optimized: '✨ Overall route optimized: you save {km} km.',
      order_restored: '↩️ Previous order restored.',
      select_day_for_pin: 'Pick a specific day above to drop a pin on the map.',
      pin_mode_hint: '📌 Tap anywhere on the map to add a stop to this day.',
      pin_prompt: 'Place name to add to the day:',
      pin_default_place: 'Place in {dest}',
      pin_default_point: 'Point in {dest} ({lat}, {lon})',
      pin_manual_note: 'Manual pin ({lat}, {lon})',
      create_dest_first: 'Create or open a destination first to search places.',
      added_from_map_note: 'Added from map',
      added_to_day: '📍 "{query}" added to Day {day}.',
      geo_not_supported: 'Your device does not support geolocation.',
      your_location: '📍 Your current location',
      geo_failed: 'Could not get your current location.'
    },
    fr: {
      layer_dark: 'Sombre',
      layer_voyager: 'Rues',
      layer_satellite: 'Satellite',
      layer_osm: 'OSM',
      mode_foot: 'À pied',
      mode_transit: 'Transport',
      mode_driving: 'Voiture',
      general_route: 'Route globale',
      day_short: 'J{n}',
      day_label: 'Jour {n}',
      search_placeholder: 'Chercher un lieu à ajouter au jour...',
      pin: 'Épingle',
      gps: 'GPS',
      my_location: 'Ma position',
      optimize_cities: 'Optimiser villes',
      optimize_order: 'Optimiser l\'ordre',
      import_maps: 'Importer Maps',
      list: 'Liste',
      google_maps: 'Google Maps',
      stops_count: '{n} étapes',
      stops_singular: '1 étape',
      route_viable: 'Itinéraire viable',
      tight_count: '{n} correspondance serrée',
      impossible_count: '{n} trajet(s) trop courts',
      tsp_saved: 'Gain TSP : {km} km',
      undo: 'Annuler',
      no_geocoded_stops: 'Aucune étape géocodée dans cette vue.',
      circular_origin: 'Départ et retour',
      origin: 'Départ',
      days_acts: '{d} jour(s) · {e} act.',
      return_to: 'Retour à {name}',
      needs_margin: 'Nécessite {travel}m (marge {gap}m)',
      tight_free: 'Serré ({gap}m libres)',
      est_abbr: '(est.)',
      approx_abbr: '(env.)',
      stop_fallback: 'Étape {n}',
      sort_proximity: 'Trier par proximité',
      view_day_route: 'Voir trajet du jour',
      import_maps_list: 'Importer Maps / Liste',
      chip_needs_margin: 'Nécessite {travel} min ({gap} min dispo)',
      chip_tight: 'Correspondance serrée ({gap} min libres)',
      mini_summary: '{n} étape(s) · Distance est. : {km} km',
      open_interactive_map: 'Ouvrir la carte interactive',
      need_3_day_stops: 'Il faut au moins 3 étapes dans la journée pour optimiser l\'ordre.',
      need_3_geocoded: 'Impossible de localiser au moins 3 étapes avec coordonnées.',
      already_shortest_day: '✅ L\'ordre actuel est déjà le plus court par proximité.',
      day_optimized: '✨ Étapes optimisées : économie de {km} km (~{min} min).',
      need_3_dests: 'Ajoutez au moins 3 destinations pour optimiser l\'itinéraire global.',
      locked_cruise_order: 'Ce voyage inclut des étapes à ordre fixe (réservation/croisière).',
      no_coords_for: 'Coordonnées introuvables pour {name}.',
      already_shortest_cities: '✅ L\'itinéraire entre les villes est déjà optimisé.',
      general_optimized: '✨ Itinéraire global optimisé : économie de {km} km.',
      order_restored: '↩️ Ordre précédent restauré.',
      select_day_for_pin: 'Choisissez un jour précis ci-dessus pour placer une épingle.',
      pin_mode_hint: '📌 Touchez n\'importe quel point de la carte pour ajouter une étape.',
      pin_prompt: 'Nom du lieu à ajouter au jour :',
      pin_default_place: 'Lieu à {dest}',
      pin_default_point: 'Point à {dest} ({lat}, {lon})',
      pin_manual_note: 'Épingle manuelle ({lat}, {lon})',
      create_dest_first: 'Créez ou ouvrez d\'abord une destination pour chercher un lieu.',
      added_from_map_note: 'Ajouté depuis la carte',
      added_to_day: '📍 "{query}" ajouté au Jour {day}.',
      geo_not_supported: 'Votre appareil ne prend pas en charge la géolocalisation.',
      your_location: '📍 Votre position actuelle',
      geo_failed: 'Impossible d\'obtenir votre position actuelle.'
    },
    de: {
      layer_dark: 'Dunkel',
      layer_voyager: 'Straßen',
      layer_satellite: 'Satellit',
      layer_osm: 'OSM',
      mode_foot: 'Zu Fuß',
      mode_transit: 'ÖPNV',
      mode_driving: 'Auto',
      general_route: 'Gesamtroute',
      day_short: 'T{n}',
      day_label: 'Tag {n}',
      search_placeholder: 'Ort für diesen Tag suchen...',
      pin: 'Pin',
      gps: 'GPS',
      my_location: 'Mein Standort',
      optimize_cities: 'Städte optimieren',
      optimize_order: 'Reihenfolge optimieren',
      import_maps: 'Maps importieren',
      list: 'Liste',
      google_maps: 'Google Maps',
      stops_count: '{n} Stopps',
      stops_singular: '1 Stopp',
      route_viable: 'Machbare Route',
      tight_count: '{n} knappe Verbindung',
      impossible_count: '{n} Transfer(s) zeitlich nicht machbar',
      tsp_saved: 'TSP gespart: {km} km',
      undo: 'Rückgängig',
      no_geocoded_stops: 'Keine geokodierten Stopps in dieser Ansicht.',
      circular_origin: 'Start & Rückkehr',
      origin: 'Start',
      days_acts: '{d} Tag(e) · {e} Akt.',
      return_to: 'Rückkehr nach {name}',
      needs_margin: 'Braucht {travel}m ({gap}m Puffer)',
      tight_free: 'Knapp ({gap}m frei)',
      est_abbr: '(ca.)',
      approx_abbr: '(ca.)',
      stop_fallback: 'Stopp {n}',
      sort_proximity: 'Nach Nähe sortieren',
      view_day_route: 'Tagesroute ansehen',
      import_maps_list: 'Maps / Liste importieren',
      chip_needs_margin: 'Braucht {travel} Min. ({gap} Min. frei)',
      chip_tight: 'Knappe Verbindung ({gap} Min. frei)',
      mini_summary: '{n} Stopp(s) · Gesch. Distanz: {km} km',
      open_interactive_map: 'Interaktive Karte öffnen',
      need_3_day_stops: 'Mindestens 3 Stopps am Tag nötig, um die Reihenfolge zu optimieren.',
      need_3_geocoded: 'Es konnten nicht mindestens 3 Stopps mit Koordinaten gefunden werden.',
      already_shortest_day: '✅ Die aktuelle Reihenfolge ist bereits die kürzeste.',
      day_optimized: '✨ Stopps optimiert: {km} km gespart (~{min} Min.).',
      need_3_dests: 'Füge mindestens 3 Ziele hinzu, um die Gesamtroute zu optimieren.',
      locked_cruise_order: 'Diese Reise enthält Stopps mit fester Buchungs-/Kreuzfahrtreihenfolge.',
      no_coords_for: 'Keine Koordinaten für {name} gefunden.',
      already_shortest_cities: '✅ Die Route zwischen den Städten ist bereits optimiert.',
      general_optimized: '✨ Gesamtroute optimiert: {km} km gespart.',
      order_restored: '↩️ Vorherige Reihenfolge wiederhergestellt.',
      select_day_for_pin: 'Wähle oben einen bestimmten Tag, um einen Pin zu setzen.',
      pin_mode_hint: '📌 Tippe auf die Karte, um diesem Tag einen Stopp hinzuzufügen.',
      pin_prompt: 'Ortsname für diesen Tag:',
      pin_default_place: 'Ort in {dest}',
      pin_default_point: 'Punkt in {dest} ({lat}, {lon})',
      pin_manual_note: 'Manueller Pin ({lat}, {lon})',
      create_dest_first: 'Erstelle oder öffne zuerst ein Ziel, um Orte zu suchen.',
      added_from_map_note: 'Über die Karte hinzugefügt',
      added_to_day: '📍 "{query}" zu Tag {day} hinzugefügt.',
      geo_not_supported: 'Dein Gerät unterstützt keine Geolokalisierung.',
      your_location: '📍 Dein aktueller Standort',
      geo_failed: 'Aktueller Standort konnte nicht ermittelt werden.'
    },
    it: {
      layer_dark: 'Scuro',
      layer_voyager: 'Strade',
      layer_satellite: 'Satellite',
      layer_osm: 'OSM',
      mode_foot: 'A piedi',
      mode_transit: 'Trasporto',
      mode_driving: 'Auto',
      general_route: 'Rotta generale',
      day_short: 'G{n}',
      day_label: 'Giorno {n}',
      search_placeholder: 'Cerca luogo da aggiungere al giorno...',
      pin: 'Pin',
      gps: 'GPS',
      my_location: 'La mia posizione',
      optimize_cities: 'Ottimizza città',
      optimize_order: 'Ottimizza ordine',
      import_maps: 'Importa Maps',
      list: 'Lista',
      google_maps: 'Google Maps',
      stops_count: '{n} tappe',
      stops_singular: '1 tappa',
      route_viable: 'Percorso fattibile',
      tight_count: '{n} coincidenza stretta',
      impossible_count: '{n} trasferimento/i non arrivano in tempo',
      tsp_saved: 'Risparmio TSP: {km} km',
      undo: 'Annulla',
      no_geocoded_stops: 'Nessuna tappa geocodificata in questa vista.',
      circular_origin: 'Partenza e ritorno',
      origin: 'Partenza',
      days_acts: '{d} giorno/i · {e} att.',
      return_to: 'Ritorno a {name}',
      needs_margin: 'Serve {travel}m (margine {gap}m)',
      tight_free: 'Stretto ({gap}m liberi)',
      est_abbr: '(stima)',
      approx_abbr: '(circa)',
      stop_fallback: 'Tappa {n}',
      sort_proximity: 'Ordina per vicinanza',
      view_day_route: 'Vedi percorso del giorno',
      import_maps_list: 'Importa Maps / Lista',
      chip_needs_margin: 'Serve {travel} min ({gap} min disp.)',
      chip_tight: 'Coincidenza stretta ({gap} min liberi)',
      mini_summary: '{n} tappa/e · Distanza stimata: {km} km',
      open_interactive_map: 'Apri mappa interattiva',
      need_3_day_stops: 'Servono almeno 3 tappe nella giornata per ottimizzare l\'ordine.',
      need_3_geocoded: 'Impossibile localizzare almeno 3 tappe con coordinate.',
      already_shortest_day: '✅ L\'ordine attuale è già il più breve per vicinanza.',
      day_optimized: '✨ Tappe ottimizzate: risparmi {km} km (~{min} min).',
      need_3_dests: 'Aggiungi almeno 3 destinazioni per ottimizzare la rotta generale.',
      locked_cruise_order: 'Questo viaggio include tappe con ordine fisso di prenotazione/crociera.',
      no_coords_for: 'Coordinate non trovate per {name}.',
      already_shortest_cities: '✅ La rotta tra le città è già ottimizzata.',
      general_optimized: '✨ Rotta generale ottimizzata: risparmi {km} km.',
      order_restored: '↩️ Ordine precedente ripristinato.',
      select_day_for_pin: 'Scegli un giorno specifico in alto per fissare un pin sulla mappa.',
      pin_mode_hint: '📌 Tocca un punto della mappa per aggiungere una tappa a questo giorno.',
      pin_prompt: 'Nome del luogo da aggiungere al giorno:',
      pin_default_place: 'Luogo a {dest}',
      pin_default_point: 'Punto a {dest} ({lat}, {lon})',
      pin_manual_note: 'Pin manuale ({lat}, {lon})',
      create_dest_first: 'Crea o apri prima una destinazione per cercare luoghi.',
      added_from_map_note: 'Aggiunto dalla mappa',
      added_to_day: '📍 "{query}" aggiunto al Giorno {day}.',
      geo_not_supported: 'Il tuo dispositivo non supporta la geolocalizzazione.',
      your_location: '📍 La tua posizione attuale',
      geo_failed: 'Impossibile ottenere la tua posizione attuale.'
    }
  };

  function getDestinos() {
    try {
      // eslint-disable-next-line no-undef
      if (typeof destinos !== 'undefined' && Array.isArray(destinos)) return destinos;
    } catch (e) {}
    return Array.isArray(root.destinos) ? root.destinos : [];
  }

  function getLang() {
    let raw = '';
    try {
      // eslint-disable-next-line no-undef
      if (typeof currentLang !== 'undefined' && currentLang) raw = currentLang;
    } catch (e) {}
    if (!raw && root.currentLang) raw = root.currentLang;
    if (!raw) {
      try {
        if (typeof localStorage !== 'undefined') raw = localStorage.getItem('Plux_Lang') || '';
      } catch (e) {}
    }
    const code = String(raw || 'es').toLowerCase().slice(0, 2);
    return Object.prototype.hasOwnProperty.call(I18N, code) ? code : 'es';
  }

  function tr(key, vars) {
    const lang = getLang();
    const table = I18N[lang] || I18N.es;
    let text = Object.prototype.hasOwnProperty.call(table, key) ? table[key] : (I18N.es[key] || key);
    if (vars && typeof vars === 'object') {
      Object.keys(vars).forEach((k) => {
        text = text.split(`{${k}}`).join(String(vars[k] == null ? '' : vars[k]));
      });
    }
    return text;
  }

  const TILE_LAYERS = {
    dark: {
      labelKey: 'layer_dark',
      icon: '🌑',
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; OpenStreetMap',
      className: 'plux-v71-tiles-dark',
      maxZoom: 19
    },
    voyager: {
      labelKey: 'layer_voyager',
      icon: '🗺️',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      attribution: '&copy; Esri',
      maxZoom: 19
    },
    satellite: {
      labelKey: 'layer_satellite',
      icon: '🛰️',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: '&copy; Esri',
      maxZoom: 18
    },
    osm: {
      labelKey: 'layer_osm',
      icon: '🧭',
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; OpenStreetMap',
      maxZoom: 19
    }
  };

  const state = {
    activeDestIdx: 'all',
    activeDiaIdx: 0,
    travelMode: (typeof localStorage !== 'undefined' && localStorage.getItem(MAP_MODE_KEY)) || 'foot',
    layerKey: null,
    pinMode: false,
    sidebarOpen: true,
    v71Map: null,
    tileLayerObj: null,
    markersLayer: null,
    routesLayer: null,
    markerRefs: [],
    userLocationMarker: null,
    tspUndoStack: [],
    lastTspBanner: null
  };

  function esc(val) {
    if (typeof root.escapeHtml === 'function') return root.escapeHtml(val);
    return String(val == null ? '' : val)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function isFiniteCoord(lat, lon) {
    return typeof lat === 'number' && typeof lon === 'number' &&
      Number.isFinite(lat) && Number.isFinite(lon) &&
      lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
  }

  function isTransitOrNavStop(dest) {
    if (!dest || typeof dest !== 'object') return true;
    const nombre = String(dest.nombre || '').trim();
    if (!nombre) return true;
    if (dest.isTransit === true || dest.tipoParada === 'navegacion' || dest.tipoParada === 'transito') return true;
    if (typeof root.esDestinoNavegacion === 'function') {
      try {
        if (root.esDestinoNavegacion(nombre)) return true;
      } catch (e) {}
    }
    const n = nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    return /^(en\s+)?navegacion\b|^alta\s*mar\b|^at\s*sea\b|^sea\s*day\b|^dia\s+de\s+navegacion|^en\s+mer\b|^journee\s+en\s+mer\b|^auf\s+see\b|^seetag\b|^in\s+navigazione\b|^giorno\s+di\s+navigazione/i.test(n);
  }

  function haversineKm(a, b) {
    if (!a || !b || !isFiniteCoord(Number(a.lat), Number(a.lon)) || !isFiniteCoord(Number(b.lat), Number(b.lon))) {
      return 0;
    }
    const R = 6371;
    const toRad = (deg) => (deg * Math.PI) / 180;
    const dLat = toRad(Number(b.lat) - Number(a.lat));
    const dLon = toRad(Number(b.lon) - Number(a.lon));
    const lat1 = toRad(Number(a.lat));
    const lat2 = toRad(Number(b.lat));
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
  }

  function formatDuration(seconds) {
    const mins = Math.max(1, Math.round((Number(seconds) || 0) / 60));
    if (mins < 60) return `${mins} min`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }

  function formatDistance(meters) {
    const m = Math.max(0, Number(meters) || 0);
    if (m < 1000) return `${Math.round(m)} m`;
    return `${(m / 1000).toFixed(m >= 10000 ? 0 : 1)} km`;
  }

  function modeMeta(mode) {
    if (mode === 'driving') return { icon: '🚗', label: tr('mode_driving'), gmaps: 'driving' };
    if (mode === 'transit') return { icon: '🚌', label: tr('mode_transit'), gmaps: 'transit' };
    return { icon: '🚶', label: tr('mode_foot'), gmaps: 'walking' };
  }

  function parseMinutesOfDay(horaStr) {
    if (!horaStr || typeof horaStr !== 'string') return null;
    const m = horaStr.trim().match(/^(\d{1,2}):(\d{2})$/);
    if (!m) return null;
    const hh = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
    return hh * 60 + mm;
  }

  function getSelectedLayerKey() {
    if (state.layerKey && TILE_LAYERS[state.layerKey]) return state.layerKey;
    try {
      const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(MAP_LAYER_KEY) : null;
      if (saved && TILE_LAYERS[saved]) {
        state.layerKey = saved;
        return saved;
      }
    } catch (e) {}
    const isLight = typeof document !== 'undefined' && document.body && document.body.classList.contains('theme-claro');
    state.layerKey = isLight ? 'voyager' : 'dark';
    return state.layerKey;
  }

  // ---------------------------------------------------------------------------
  // 1. GEOCODING DE EVENTOS CON SESGO DE CIUDAD + CACHÉ LOCAL
  // ---------------------------------------------------------------------------
  function saveLocalGeoCache(key, coord) {
    if (!key || !coord || !isFiniteCoord(coord.lat, coord.lon)) return;
    root._pluxGeocodeCache = root._pluxGeocodeCache || {};
    root._pluxGeocodeCache[key] = coord;
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem(GEOCODE_STORAGE_KEY);
        const cur = raw ? JSON.parse(raw) : {};
        cur[key] = coord;
        localStorage.setItem(GEOCODE_STORAGE_KEY, JSON.stringify(cur));
      }
    } catch (e) {}
  }

  async function geocodeEventPlace(ev, destName, destCoord) {
    if (ev && isFiniteCoord(Number(ev.lat), Number(ev.lon))) {
      return { lat: Number(ev.lat), lon: Number(ev.lon), exact: true };
    }
    const cleanTitle = String(ev?.titulo || '')
      .replace(/^[\p{Emoji}\p{Extended_Pictographic}\s•\-–]+/u, '')
      .trim();
    if (!cleanTitle) return null;

    const cleanCity = String(destName || '').trim();
    const cacheKey = `${cleanTitle.toLowerCase()}__${cleanCity.toLowerCase()}`;
    root._pluxGeocodeCache = root._pluxGeocodeCache || {};
    const hit = root._pluxGeocodeCache[cacheKey];
    if (hit && isFiniteCoord(hit.lat, hit.lon)) {
      if (ev) { ev.lat = hit.lat; ev.lon = hit.lon; }
      return { lat: hit.lat, lon: hit.lon, exact: true };
    }

    const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine !== false;
    if (!isOnline || typeof fetch !== 'function') return null;

    try {
      const bias = destCoord && isFiniteCoord(destCoord.lat, destCoord.lon)
        ? `&lat=${destCoord.lat}&lon=${destCoord.lon}`
        : '';
      const q = cleanCity ? `${cleanTitle}, ${cleanCity}` : cleanTitle;
      const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = ctrl ? setTimeout(() => ctrl.abort(), 4500) : null;
      const resp = await fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=3${bias}`,
        ctrl ? { signal: ctrl.signal } : undefined
      );
      if (timer) clearTimeout(timer);

      if (resp && resp.ok) {
        const data = await resp.json();
        const feats = Array.isArray(data?.features) ? data.features : [];
        for (const f of feats) {
          const coords = f?.geometry?.coordinates;
          if (!Array.isArray(coords) || coords.length < 2) continue;
          const cand = { lat: parseFloat(coords[1]), lon: parseFloat(coords[0]) };
          if (!isFiniteCoord(cand.lat, cand.lon)) continue;
          if (destCoord && isFiniteCoord(destCoord.lat, destCoord.lon)) {
            const distKm = haversineKm(destCoord, cand);
            if (distKm > 80) continue; // descartar falsos positivos en otro continente
          }
          const resObj = { lat: cand.lat, lon: cand.lon, display_name: f.properties?.name || cleanTitle };
          saveLocalGeoCache(cacheKey, resObj);
          if (ev) {
            ev.lat = resObj.lat;
            ev.lon = resObj.lon;
          }
          return { lat: resObj.lat, lon: resObj.lon, exact: true };
        }
      }
    } catch (e) {}
    return null;
  }

  // ---------------------------------------------------------------------------
  // 2. ENRUTAMIENTO REAL (OSRM + TRANSPORTE + FALLBACK OFFLINE)
  // ---------------------------------------------------------------------------
  function buildFallbackLeg(from, to, mode) {
    const straightKm = haversineKm(from, to);
    const isLongHaul = straightKm > 600;
    const roadKm = isLongHaul ? straightKm : straightKm * 1.3;
    const distanceM = Math.round(roadKm * 1000);

    let durationS;
    if (isLongHaul) {
      durationS = Math.round((straightKm / 780) * 3600 + 3600);
    } else if (mode === 'foot') {
      durationS = Math.round((roadKm / 4.6) * 3600);
    } else if (mode === 'driving') {
      const speed = roadKm > 25 ? 72 : 32;
      durationS = Math.round((roadKm / speed) * 3600);
    } else {
      // transit
      const waitMin = roadKm > 30 ? 12 : 7;
      const speed = roadKm > 30 ? 64 : 22;
      durationS = Math.round((roadKm / speed) * 3600 + waitMin * 60);
    }

    return {
      mode,
      distanceM,
      durationS: Math.max(60, durationS),
      geometry: [[Number(from?.lat) || 0, Number(from?.lon) || 0], [Number(to?.lat) || 0, Number(to?.lon) || 0]],
      estimated: true,
      isLongHaul
    };
  }

  async function computeRouteLeg(from, to, mode = 'foot') {
    const cleanMode = mode === 'driving' || mode === 'transit' ? mode : 'foot';
    if (!from || !to || !isFiniteCoord(Number(from.lat), Number(from.lon)) || !isFiniteCoord(Number(to.lat), Number(to.lon))) {
      return buildFallbackLeg(from, to, cleanMode);
    }

    const fLat = Number(from.lat).toFixed(4);
    const fLon = Number(from.lon).toFixed(4);
    const tLat = Number(to.lat).toFixed(4);
    const tLon = Number(to.lon).toFixed(4);
    const cacheKey = `${cleanMode}:${fLat},${fLon}->${tLat},${tLon}`;

    if (root.PluxIDB && typeof root.PluxIDB.getCachedRoute === 'function') {
      try {
        const cached = await root.PluxIDB.getCachedRoute(cacheKey);
        if (cached && cached.distanceM >= 0 && Array.isArray(cached.geometry)) {
          return cached;
        }
      } catch (e) {}
    }

    const straightKm = haversineKm(from, to);
    const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine !== false;
    if (straightKm > 600 || !isOnline || typeof fetch !== 'function') {
      const fb = buildFallbackLeg(from, to, cleanMode);
      if (root.PluxIDB && typeof root.PluxIDB.saveCachedRoute === 'function') {
        void root.PluxIDB.saveCachedRoute({ key: cacheKey, ...fb });
      }
      return fb;
    }

    const osrmProfile = cleanMode === 'foot' ? 'foot' : 'driving';
    const url = `https://router.project-osrm.org/route/v1/${osrmProfile}/${from.lon},${from.lat};${to.lon},${to.lat}?overview=full&geometries=geojson`;

    try {
      const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = ctrl ? setTimeout(() => ctrl.abort(), 5000) : null;
      const res = await fetch(url, ctrl ? { signal: ctrl.signal } : undefined);
      if (timer) clearTimeout(timer);

      if (res && res.ok) {
        const data = await res.json();
        const route = data?.routes?.[0];
        if (route && Array.isArray(route.geometry?.coordinates)) {
          const distanceM = Math.round(route.distance || straightKm * 1000);
          const distKm = distanceM / 1000;
          let durationS = Math.round(route.duration || 60);
          let estimated = false;

          if (cleanMode === 'transit') {
            durationS = distKm <= 30
              ? Math.round((6 + 5) * 60 + (distKm / 22) * 3600)
              : Math.round(12 * 60 + (distKm / 68) * 3600);
            estimated = true;
          }

          const geometry = route.geometry.coordinates.map((c) => [c[1], c[0]]);
          const leg = {
            key: cacheKey,
            mode: cleanMode,
            distanceM,
            durationS: Math.max(60, durationS),
            geometry,
            estimated,
            isLongHaul: false
          };
          if (root.PluxIDB && typeof root.PluxIDB.saveCachedRoute === 'function') {
            void root.PluxIDB.saveCachedRoute(leg);
          }
          return leg;
        }
      }
    } catch (e) {}

    const fb = buildFallbackLeg(from, to, cleanMode);
    if (root.PluxIDB && typeof root.PluxIDB.saveCachedRoute === 'function') {
      void root.PluxIDB.saveCachedRoute({ key: cacheKey, ...fb });
    }
    return fb;
  }

  function evaluateDayFeasibility(events, legs) {
    const list = Array.isArray(events) ? events : [];
    const legList = Array.isArray(legs) ? legs : [];
    const results = [];
    let impossibleCount = 0;
    let tightCount = 0;

    for (let i = 0; i < legList.length; i++) {
      const a = list[i];
      const b = list[i + 1];
      const leg = legList[i];
      const travelMin = Math.ceil((Number(leg?.durationS) || 0) / 60);
      const startA = parseMinutesOfDay(a?.hora);
      const startB = parseMinutesOfDay(b?.hora);

      if (startA === null || startB === null) {
        results.push({ index: i, status: 'ok', travelMin, gapMin: null });
        continue;
      }
      const durA = parseInt(a?.duracion, 10) || 60;
      const endA = startA + durA;
      const gapMin = startB - endA;

      let status = 'ok';
      if (gapMin < 0 || travelMin > gapMin) {
        status = 'impossible';
        impossibleCount++;
      } else if ((gapMin - travelMin) < 10) {
        status = 'tight';
        tightCount++;
      }
      results.push({ index: i, status, travelMin, gapMin });
    }

    return { results, impossibleCount, tightCount, hasIssues: impossibleCount > 0 };
  }

  // ---------------------------------------------------------------------------
  // 3. OPTIMIZADOR TSP (HELD-KARP EXACTO <=9 Y NN + 2-OPT >9)
  // ---------------------------------------------------------------------------
  function routeLength(order, distMatrix) {
    let total = 0;
    for (let i = 0; i < order.length - 1; i++) {
      total += distMatrix[order[i]][order[i + 1]];
    }
    return total;
  }

  function heldKarpOpenPath(distMatrix, lockFirst, lockLast) {
    const n = distMatrix.length;
    if (n <= 2) return Array.from({ length: n }, (_, i) => i);

    const startNode = 0;
    const endNode = lockLast ? n - 1 : -1;
    const fullMask = (1 << n) - 1;

    // dp[mask * n + last] = min cost
    const size = (1 << n) * n;
    const dp = new Float64Array(size);
    const parent = new Int16Array(size);
    dp.fill(Infinity);
    parent.fill(-1);

    if (lockFirst) {
      dp[(1 << startNode) * n + startNode] = 0;
    } else {
      for (let s = 0; s < n; s++) {
        if (lockLast && s === endNode) continue;
        dp[(1 << s) * n + s] = 0;
      }
    }

    for (let mask = 1; mask <= fullMask; mask++) {
      if (lockFirst && !(mask & 1)) continue;
      for (let u = 0; u < n; u++) {
        if (!(mask & (1 << u))) continue;
        const curCost = dp[mask * n + u];
        if (!Number.isFinite(curCost)) continue;
        if (lockLast && u === endNode && mask !== fullMask) continue;

        for (let v = 0; v < n; v++) {
          if (mask & (1 << v)) continue;
          const nextMask = mask | (1 << v);
          if (lockLast && v === endNode && nextMask !== fullMask) continue;
          const nextCost = curCost + distMatrix[u][v];
          const idx = nextMask * n + v;
          if (nextCost < dp[idx]) {
            dp[idx] = nextCost;
            parent[idx] = u;
          }
        }
      }
    }

    let bestEnd = -1;
    let bestCost = Infinity;
    if (lockLast) {
      bestEnd = endNode;
      bestCost = dp[fullMask * n + endNode];
    } else {
      for (let u = 0; u < n; u++) {
        const c = dp[fullMask * n + u];
        if (c < bestCost) {
          bestCost = c;
          bestEnd = u;
        }
      }
    }

    if (bestEnd === -1 || !Number.isFinite(bestCost)) {
      return Array.from({ length: n }, (_, i) => i);
    }

    const order = new Array(n);
    let curr = bestEnd;
    let mask = fullMask;
    for (let pos = n - 1; pos >= 0; pos--) {
      order[pos] = curr;
      const prev = parent[mask * n + curr];
      mask ^= (1 << curr);
      curr = prev;
    }
    return order;
  }

  function nearestNeighborAndTwoOpt(distMatrix, lockFirst, lockLast) {
    const n = distMatrix.length;
    const visited = new Uint8Array(n);
    const start = 0;
    const order = [start];
    visited[start] = 1;
    if (lockLast && n > 1) visited[n - 1] = 1;

    while (order.length < (lockLast ? n - 1 : n)) {
      const last = order[order.length - 1];
      let best = -1;
      let bestD = Infinity;
      for (let i = 0; i < n; i++) {
        if (!visited[i] && distMatrix[last][i] < bestD) {
          bestD = distMatrix[last][i];
          best = i;
        }
      }
      if (best === -1) break;
      visited[best] = 1;
      order.push(best);
    }
    if (lockLast && n > 1) order.push(n - 1);

    // 2-opt local search
    const minI = lockFirst ? 1 : 0;
    const maxK = lockLast ? n - 2 : n - 1;
    let improved = true;
    let guard = 0;
    while (improved && guard < 200) {
      improved = false;
      guard++;
      for (let i = minI; i < maxK; i++) {
        for (let k = i + 1; k <= maxK; k++) {
          const prevI = i > 0 ? distMatrix[order[i - 1]][order[i]] : 0;
          const nextK = k < n - 1 ? distMatrix[order[k]][order[k + 1]] : 0;
          const newPrevI = i > 0 ? distMatrix[order[i - 1]][order[k]] : 0;
          const newNextK = k < n - 1 ? distMatrix[order[i]][order[k + 1]] : 0;
          if (newPrevI + newNextK + 1e-9 < prevI + nextK) {
            let l = i;
            let r = k;
            while (l < r) {
              const tmp = order[l];
              order[l] = order[r];
              order[r] = tmp;
              l++;
              r--;
            }
            improved = true;
          }
        }
      }
    }
    return order;
  }

  function optimizeStopOrder(points, options = {}) {
    const list = Array.isArray(points) ? points : [];
    const n = list.length;
    const lockFirst = options.lockFirst !== false;
    const lockLast = options.lockLast === true;

    if (n <= 2 || (lockFirst && lockLast && n <= 3)) {
      return {
        order: Array.from({ length: n }, (_, i) => i),
        originalKm: 0,
        optimizedKm: 0,
        savedKm: 0,
        savedPct: 0,
        changed: false
      };
    }

    const distMatrix = Array.from({ length: n }, () => new Float64Array(n));
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const d = haversineKm(list[i], list[j]);
        distMatrix[i][j] = d;
        distMatrix[j][i] = d;
      }
    }

    const origOrder = Array.from({ length: n }, (_, i) => i);
    const originalKm = routeLength(origOrder, distMatrix);

    const optOrder = n <= 9
      ? heldKarpOpenPath(distMatrix, lockFirst, lockLast)
      : nearestNeighborAndTwoOpt(distMatrix, lockFirst, lockLast);
    const optimizedKm = routeLength(optOrder, distMatrix);
    const savedKm = Math.max(0, originalKm - optimizedKm);
    const savedPct = originalKm > 0.01 ? Math.round((savedKm / originalKm) * 100) : 0;
    const changed = optOrder.some((v, idx) => v !== idx) && savedKm > 0.02;

    return {
      order: changed ? optOrder : origOrder,
      originalKm: +originalKm.toFixed(2),
      optimizedKm: +(changed ? optimizedKm : originalKm).toFixed(2),
      savedKm: +(changed ? savedKm : 0).toFixed(2),
      savedPct: changed ? savedPct : 0,
      changed
    };
  }

  async function optimizarOrdenDia(destIdx, diaIdx) {
    if (typeof root.checkEditPermission === 'function' && !root.checkEditPermission()) return;
    const dests = getDestinos();
    if (!dests[destIdx]) return;
    const dest = dests[destIdx];
    const dia = dest.dias && dest.dias[diaIdx];
    if (!dia || !Array.isArray(dia.eventos) || dia.eventos.length < 3) {
      if (typeof root.showToast === 'function') root.showToast(tr('need_3_day_stops'), 'info');
      return;
    }

    const baseCoord = (!isTransitOrNavStop(dest) && typeof root.geocode === 'function')
      ? await root.geocode(dest.nombre)
      : null;
    const geocoded = [];
    const withoutCoords = [];

    for (let i = 0; i < dia.eventos.length; i++) {
      const ev = dia.eventos[i];
      const c = await geocodeEventPlace(ev, isTransitOrNavStop(dest) ? '' : dest.nombre, baseCoord);
      if (c) geocoded.push({ ev, coord: c, origIdx: i });
      else withoutCoords.push(ev);
    }

    if (geocoded.length < 3) {
      if (typeof root.showToast === 'function') root.showToast(tr('need_3_geocoded'), 'info');
      return;
    }

    const result = optimizeStopOrder(geocoded.map((g) => g.coord), { lockFirst: true, lockLast: false });
    if (!result.changed) {
      if (typeof root.showToast === 'function') root.showToast(tr('already_shortest_day'), 'success');
      return;
    }

    state.tspUndoStack.push({
      type: 'day',
      destIdx,
      diaIdx,
      prevEventsJSON: JSON.stringify(dia.eventos)
    });

    const reordered = result.order.map((idx) => geocoded[idx].ev).concat(withoutCoords);
    dia.eventos = reordered;

    const estSavedMin = Math.max(1, Math.round((result.savedKm / 4.8) * 60));
    state.lastTspBanner = {
      savedKm: result.savedKm,
      savedPct: result.savedPct,
      estSavedMin
    };

    if (typeof root.autoSave === 'function') root.autoSave();
    if (typeof root.renderDias === 'function') root.renderDias(dest.id);
    if (typeof document !== 'undefined' && document.getElementById('modal-mapa')?.style.display !== 'none') {
      await renderMapView();
    }
    if (typeof root.showToast === 'function') {
      root.showToast(tr('day_optimized', { km: result.savedKm, min: estSavedMin }), 'success');
    }
  }

  async function optimizarOrdenDestinosGeneral() {
    if (typeof root.checkEditPermission === 'function' && !root.checkEditPermission()) return;
    const dests = getDestinos();
    if (!Array.isArray(dests)) return;

    const hasLockedCruise = dests.some((d) => d && (d.tipoParada === 'embarque' || d.tipoParada === 'desembarque' || d.importSyncKey));
    if (hasLockedCruise) {
      if (typeof root.showToast === 'function') root.showToast(tr('locked_cruise_order'), 'info');
      return;
    }

    // Filtrar paradas de navegación / tránsito (esDestinoNavegacion) para que nunca rompan el TSP general
    const realEntries = [];
    for (let i = 0; i < dests.length; i++) {
      const d = dests[i];
      if (!isTransitOrNavStop(d)) {
        realEntries.push({ dest: d, origIdx: i });
      }
    }

    if (realEntries.length < 3) {
      if (typeof root.showToast === 'function') root.showToast(tr('need_3_dests'), 'info');
      return;
    }

    const coords = [];
    for (let i = 0; i < realEntries.length; i++) {
      const d = realEntries[i].dest;
      const c = typeof root.geocode === 'function' ? await root.geocode(d.nombre) : null;
      if (!c || !isFiniteCoord(Number(c.lat), Number(c.lon))) {
        if (typeof root.showToast === 'function') root.showToast(tr('no_coords_for', { name: d.nombre }), 'info');
        return;
      }
      coords.push({ lat: Number(c.lat), lon: Number(c.lon) });
    }

    const lastSameAsFirst = haversineKm(coords[0], coords[coords.length - 1]) < 15;
    const result = optimizeStopOrder(coords, { lockFirst: true, lockLast: lastSameAsFirst });
    if (!result.changed) {
      if (typeof root.showToast === 'function') root.showToast(tr('already_shortest_cities'), 'success');
      return;
    }

    state.tspUndoStack.push({
      type: 'dests',
      prevDestinosJSON: JSON.stringify(dests)
    });

    // Reubicar solo los destinos reales en sus slots originales, preservando paradas de navegación/tránsito intactas
    const newDests = dests.slice();
    result.order.forEach((optIdx, pos) => {
      newDests[realEntries[pos].origIdx] = realEntries[optIdx].dest;
    });
    dests.length = 0;
    newDests.forEach((d) => dests.push(d));
    if (dests[0] && dests[0].diasTransitoPrevio > 0) {
      dests[0].diasTransitoPrevio = 0;
    }

    state.lastTspBanner = {
      savedKm: result.savedKm,
      savedPct: result.savedPct,
      estSavedMin: Math.round((result.savedKm / 80) * 60)
    };

    if (typeof root.autoSave === 'function') root.autoSave();
    if (typeof root.renderDestinos === 'function') root.renderDestinos();
    if (typeof document !== 'undefined' && document.getElementById('modal-mapa')) {
      await renderMapView();
    }
    if (typeof root.showToast === 'function') {
      root.showToast(tr('general_optimized', { km: result.savedKm }), 'success');
    }
  }

  function undoLastTsp() {
    const snap = state.tspUndoStack.pop();
    if (!snap) return;
    try {
      const dests = getDestinos();
      if (snap.type === 'day' && dests[snap.destIdx]?.dias?.[snap.diaIdx]) {
        dests[snap.destIdx].dias[snap.diaIdx].eventos = JSON.parse(snap.prevEventsJSON);
        if (typeof root.renderDias === 'function') root.renderDias(dests[snap.destIdx].id);
      } else if (snap.type === 'dests' && Array.isArray(dests)) {
        const restored = JSON.parse(snap.prevDestinosJSON);
        dests.length = 0;
        restored.forEach((d) => dests.push(d));
        if (typeof root.renderDestinos === 'function') root.renderDestinos();
      }
      state.lastTspBanner = null;
      if (typeof root.autoSave === 'function') root.autoSave();
      void renderMapView();
      if (typeof root.showToast === 'function') root.showToast(tr('order_restored'), 'info');
    } catch (e) {}
  }

  // ---------------------------------------------------------------------------
  // 4. GESTIÓN DE INSTANCIA LEAFLET Y CAPAS EN #modal-mapa
  // ---------------------------------------------------------------------------
  function ensureMapWorkspaceDOM() {
    if (typeof document === 'undefined') return null;
    const modal = document.getElementById('modal-mapa');
    const content = modal ? modal.querySelector('.mapa-content') : null;
    const mapEl = document.getElementById('map');
    if (!content || !mapEl) return null;

    // Aislamiento de estilos y altura controlada frente a reglas heredadas de styles.css e index.html
    content.classList.add('plux-v71-scope', 'plux-v71-map-modal-content');
    mapEl.style.height = '100%';
    mapEl.style.minHeight = '';

    // Eliminar barra legacy de plux-pro si existiera
    const legacyBar = document.getElementById('plux-map-day-filter-bar');
    if (legacyBar) legacyBar.remove();

    let toolbar = document.getElementById('plux-v71-map-toolbar');
    if (!toolbar) {
      toolbar = document.createElement('div');
      toolbar.id = 'plux-v71-map-toolbar';
      toolbar.className = 'plux-v71-map-toolbar';
      content.insertBefore(toolbar, mapEl);
    }

    let ribbon = document.getElementById('plux-v71-route-ribbon');
    if (!ribbon) {
      ribbon = document.createElement('div');
      ribbon.id = 'plux-v71-route-ribbon';
      ribbon.className = 'plux-v71-route-ribbon';
      ribbon.style.display = 'none';
      content.insertBefore(ribbon, mapEl);
    }

    let workspace = document.getElementById('plux-v71-map-workspace');
    if (!workspace) {
      workspace = document.createElement('div');
      workspace.id = 'plux-v71-map-workspace';
      workspace.className = 'plux-v71-map-workspace';

      const sidebar = document.createElement('div');
      sidebar.id = 'plux-v71-map-sidebar';
      sidebar.className = 'plux-v71-map-sidebar';

      const canvasWrap = document.createElement('div');
      canvasWrap.className = 'plux-v71-map-canvas-wrap';

      content.insertBefore(workspace, mapEl);
      canvasWrap.appendChild(mapEl);
      workspace.appendChild(sidebar);
      workspace.appendChild(canvasWrap);
    }

    return {
      toolbar,
      ribbon,
      workspace,
      sidebar: document.getElementById('plux-v71-map-sidebar'),
      mapEl
    };
  }

  function isLeafletMapInstance(obj) {
    return Boolean(
      obj &&
      typeof obj === 'object' &&
      !obj.nodeType &&
      typeof obj.remove === 'function' &&
      typeof obj.getContainer === 'function' &&
      typeof obj.setView === 'function'
    );
  }

  function ensureLeafletMapInstance() {
    const mapEl = typeof document !== 'undefined' ? document.getElementById('map') : null;
    if (!mapEl || typeof root.L === 'undefined') return null;

    if (state.v71Map && isLeafletMapInstance(state.v71Map) && state.v71Map.getContainer() === mapEl) {
      return state.v71Map;
    }

    // Limpiar instancia Leaflet previa (NUNCA llamar .remove() sobre el HTMLElement <div id="map"> expuesto como window.map)
    let lexicalMap = null;
    try {
      // eslint-disable-next-line no-undef
      if (typeof map !== 'undefined' && isLeafletMapInstance(map)) {
        // eslint-disable-next-line no-undef
        lexicalMap = map;
        lexicalMap.remove();
      }
    } catch (e) {}
    if (isLeafletMapInstance(root.map) && root.map !== lexicalMap) {
      try { root.map.remove(); } catch (e) {}
    }
    if (mapEl._leaflet_id) {
      try { delete mapEl._leaflet_id; } catch (e) { mapEl._leaflet_id = null; }
      mapEl.innerHTML = '';
    }

    const m = root.L.map(mapEl, { zoomControl: true, attributionControl: false }).setView([40.4168, -3.7038], 4);
    state.v71Map = m;
    root.map = m;
    state.markersLayer = root.L.layerGroup().addTo(m);
    state.routesLayer = root.L.layerGroup().addTo(m);
    root.markersLayer = state.markersLayer;
    try {
      // eslint-disable-next-line no-undef
      if (typeof map !== 'undefined') map = m;
      // eslint-disable-next-line no-undef
      if (typeof markersLayer !== 'undefined') markersLayer = state.markersLayer;
    } catch (e) {}

    applyTileLayer(m, getSelectedLayerKey());

    if (typeof m.on === 'function') {
      m.on('click', (ev) => {
        if (!state.pinMode) return;
        handleMapPinClick(ev.latlng);
      });
    }

    return m;
  }

  function applyTileLayer(mapInstance, layerKey) {
    if (!mapInstance || typeof root.L === 'undefined') return;
    const cfg = TILE_LAYERS[layerKey] || TILE_LAYERS.dark;
    if (state.tileLayerObj) {
      try { mapInstance.removeLayer(state.tileLayerObj); } catch (e) {}
    }
    state.tileLayerObj = root.L.tileLayer(cfg.url, {
      maxZoom: cfg.maxZoom,
      attribution: cfg.attribution,
      className: cfg.className || ''
    }).addTo(mapInstance);
  }

  function setMapLayer(layerKey) {
    if (!TILE_LAYERS[layerKey]) return;
    state.layerKey = layerKey;
    try { if (typeof localStorage !== 'undefined') localStorage.setItem(MAP_LAYER_KEY, layerKey); } catch (e) {}
    if (state.v71Map) applyTileLayer(state.v71Map, layerKey);
    renderToolbar();
  }

  function setTravelMode(mode) {
    state.travelMode = mode === 'driving' || mode === 'transit' ? mode : 'foot';
    try { if (typeof localStorage !== 'undefined') localStorage.setItem(MAP_MODE_KEY, state.travelMode); } catch (e) {}
    void renderMapView();
  }

  function togglePinMode() {
    if (state.activeDestIdx === 'all') {
      if (typeof root.showToast === 'function') root.showToast(tr('select_day_for_pin'), 'info');
      return;
    }
    state.pinMode = !state.pinMode;
    const mapEl = typeof document !== 'undefined' ? document.getElementById('map') : null;
    if (mapEl) mapEl.style.cursor = state.pinMode ? 'crosshair' : '';
    renderToolbar();
    if (state.pinMode && typeof root.showToast === 'function') {
      root.showToast(tr('pin_mode_hint'), 'info');
    }
  }

  function handleMapPinClick(latlng) {
    if (state.activeDestIdx === 'all') return;
    const dest = getDestinos()[state.activeDestIdx];
    const dia = dest?.dias?.[state.activeDiaIdx];
    if (!dest || !dia) return;

    const defaultName = tr('pin_default_point', {
      dest: dest.nombre,
      lat: latlng.lat.toFixed(4),
      lon: latlng.lng.toFixed(4)
    });
    const title = typeof root.prompt === 'function'
      ? root.prompt(tr('pin_prompt'), tr('pin_default_place', { dest: dest.nombre }))
      : defaultName;
    if (!title || !title.trim()) {
      state.pinMode = false;
      renderToolbar();
      return;
    }

    dia.eventos = dia.eventos || [];
    dia.eventos.push({
      hora: '',
      titulo: title.trim(),
      notas: tr('pin_manual_note', { lat: latlng.lat.toFixed(5), lon: latlng.lng.toFixed(5) }),
      costo: 0,
      duracion: 60,
      lat: +latlng.lat.toFixed(6),
      lon: +latlng.lng.toFixed(6)
    });
    state.pinMode = false;
    const mapEl = typeof document !== 'undefined' ? document.getElementById('map') : null;
    if (mapEl) mapEl.style.cursor = '';

    if (typeof root.autoSave === 'function') root.autoSave();
    if (typeof root.renderDias === 'function') root.renderDias(dest.id);
    void renderMapView();
  }

  async function addSearchedPlaceToMap() {
    const input = typeof document !== 'undefined' ? document.getElementById('plux-v71-map-search') : null;
    const query = input ? input.value.trim() : '';
    if (!query) return;

    const dests = getDestinos();
    const firstRealIdx = dests.findIndex((d) => !isTransitOrNavStop(d));
    const targetDestIdx = state.activeDestIdx === 'all' ? firstRealIdx : state.activeDestIdx;
    const dest = targetDestIdx >= 0 ? dests[targetDestIdx] : null;
    if (!dest || isTransitOrNavStop(dest)) {
      if (typeof root.showToast === 'function') root.showToast(tr('create_dest_first'), 'info');
      return;
    }
    if (!dest.dias || dest.dias.length === 0) {
      dest.dias = [{ id: Date.now(), eventos: [], costosAdicionales: [] }];
    }
    const targetDiaIdx = state.activeDestIdx === 'all' ? 0 : state.activeDiaIdx;
    const dia = dest.dias[targetDiaIdx] || dest.dias[0];

    const baseCoord = typeof root.geocode === 'function' ? await root.geocode(dest.nombre) : null;
    const fakeEv = { titulo: query };
    const coord = await geocodeEventPlace(fakeEv, dest.nombre, baseCoord);
    if (!coord) {
      if (typeof root.showToast === 'function') root.showToast(tr('no_coords_for', { name: `"${query}"` }), 'info');
      return;
    }

    dia.eventos = dia.eventos || [];
    dia.eventos.push({
      hora: '',
      titulo: query,
      notas: tr('added_from_map_note'),
      costo: 0,
      duracion: 60,
      lat: coord.lat,
      lon: coord.lon
    });
    if (input) input.value = '';
    state.activeDestIdx = targetDestIdx;
    state.activeDiaIdx = targetDiaIdx;
    if (typeof root.autoSave === 'function') root.autoSave();
    if (typeof root.renderDias === 'function') root.renderDias(dest.id);
    await renderMapView();
    if (typeof root.showToast === 'function') {
      root.showToast(tr('added_to_day', { query, day: targetDiaIdx + 1 }), 'success');
    }
  }

  function locateUserOnMap() {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      if (typeof root.showToast === 'function') root.showToast(tr('geo_not_supported'), 'info');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const m = ensureLeafletMapInstance();
        if (!m || typeof root.L === 'undefined') return;
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        if (state.userLocationMarker) {
          try { m.removeLayer(state.userLocationMarker); } catch (e) {}
        }
        state.userLocationMarker = root.L.circleMarker([lat, lon], {
          radius: 8,
          color: '#ffffff',
          weight: 3,
          fillColor: '#3b82f6',
          fillOpacity: 1
        }).addTo(m).bindPopup(esc(tr('your_location'))).openPopup();
        m.flyTo([lat, lon], 14, { duration: 0.7 });
      },
      () => {
        if (typeof root.showToast === 'function') root.showToast(tr('geo_failed'), 'info');
      },
      { enableHighAccuracy: true, timeout: 6000 }
    );
  }

  function buildGoogleMapsUrlForState() {
    const mode = modeMeta(state.travelMode).gmaps;
    const dests = getDestinos();
    const firstRealIdx = dests.findIndex((d) => !isTransitOrNavStop(d));
    const destIdx = state.activeDestIdx === 'all' ? firstRealIdx : state.activeDestIdx;
    const dest = destIdx >= 0 ? dests[destIdx] : null;
    if (!dest) return 'https://www.google.com/maps';

    if (state.activeDestIdx === 'all') {
      const stops = dests.filter((d) => !isTransitOrNavStop(d)).map((d) => d.nombre);
      if (stops.length === 0) return 'https://www.google.com/maps';
      if (stops.length === 1) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stops[0])}`;
      const origin = encodeURIComponent(stops[0]);
      const destination = encodeURIComponent(stops[stops.length - 1]);
      const wp = stops.slice(1, -1).slice(0, 8).map(encodeURIComponent).join('|');
      return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${wp ? '&waypoints=' + wp : ''}&travelmode=${mode}`;
    }

    const dia = dest.dias?.[state.activeDiaIdx];
    const paradas = [];
    if (dia && Array.isArray(dia.eventos)) {
      dia.eventos.forEach((ev) => {
        if (!ev) return;
        if (isFiniteCoord(Number(ev.lat), Number(ev.lon))) {
          paradas.push(`${Number(ev.lat).toFixed(6)},${Number(ev.lon).toFixed(6)}`);
        } else if (ev.titulo) {
          paradas.push(isTransitOrNavStop(dest) ? ev.titulo : `${ev.titulo}, ${dest.nombre}`);
        }
      });
    }
    if (paradas.length === 0) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest.nombre)}`;
    if (paradas.length === 1) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(paradas[0])}`;
    const origin = encodeURIComponent(paradas[0]);
    const destination = encodeURIComponent(paradas[paradas.length - 1]);
    const wp = paradas.slice(1, -1).slice(0, 8).map(encodeURIComponent).join('|');
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${wp ? '&waypoints=' + wp : ''}&travelmode=${mode}`;
  }

  function renderToolbar() {
    if (typeof document === 'undefined') return;
    const toolbar = document.getElementById('plux-v71-map-toolbar');
    if (!toolbar) return;

    const dests = getDestinos();
    const realDestsCount = dests.filter((d) => !isTransitOrNavStop(d)).length;
    const firstRealIdx = Math.max(0, dests.findIndex((d) => !isTransitOrNavStop(d)));
    const activeLayer = getSelectedLayerKey();

    let dayPills = `<button type="button" class="plux-v71-pill ${state.activeDestIdx === 'all' ? 'active' : ''}" onclick="window.PluxRoutingMap.selectDay('all', 0)">🌍 ${esc(tr('general_route'))}</button>`;
    dests.forEach((dest, dIdx) => {
      if (isTransitOrNavStop(dest)) return;
      (dest.dias || []).forEach((_, dayIdx) => {
        const isActive = state.activeDestIdx === dIdx && state.activeDiaIdx === dayIdx;
        const label = realDestsCount > 1
          ? `${esc(dest.nombre)} · ${esc(tr('day_short', { n: dayIdx + 1 }))}`
          : `📅 ${esc(tr('day_label', { n: dayIdx + 1 }))}`;
        dayPills += `<button type="button" class="plux-v71-pill ${isActive ? 'active' : ''}" onclick="window.PluxRoutingMap.selectDay(${dIdx}, ${dayIdx})">${label}</button>`;
      });
    });

    const modes = ['foot', 'transit', 'driving'].map((m) => {
      const mm = modeMeta(m);
      return `<button type="button" class="plux-v71-seg-btn ${state.travelMode === m ? 'active' : ''}" onclick="window.PluxRoutingMap.setTravelMode('${m}')">${mm.icon} ${esc(mm.label)}</button>`;
    }).join('');

    const layers = Object.keys(TILE_LAYERS).map((lk) => {
      const lc = TILE_LAYERS[lk];
      const title = tr(lc.labelKey);
      return `<button type="button" class="plux-v71-seg-btn ${activeLayer === lk ? 'active' : ''}" onclick="window.PluxRoutingMap.setMapLayer('${lk}')" title="${esc(title)}" aria-label="${esc(title)}">${lc.icon}</button>`;
    }).join('');

    const optLabel = state.activeDestIdx === 'all'
      ? `✨ ${esc(tr('optimize_cities'))}`
      : `✨ ${esc(tr('optimize_order'))}`;
    const importDestIdx = state.activeDestIdx === 'all' ? firstRealIdx : state.activeDestIdx;

    toolbar.innerHTML = `
      <div class="plux-v71-map-row">
        <div class="plux-v71-pills-scroll">${dayPills}</div>
        <div class="plux-v71-seg-group">${modes}</div>
        <div class="plux-v71-seg-group">${layers}</div>
      </div>
      <div class="plux-v71-map-row">
        <div class="plux-v71-map-search-wrap">
          <input id="plux-v71-map-search" class="plux-v71-map-search-input" type="text" placeholder="${esc(tr('search_placeholder'))}" onkeydown="if(event.key==='Enter'){event.preventDefault();window.PluxRoutingMap.addSearchedPlaceToMap();}">
          <button type="button" class="plux-v71-action-btn" onclick="window.PluxRoutingMap.addSearchedPlaceToMap()" aria-label="+">➕</button>
        </div>
        <div class="plux-v71-map-actions">
          <button type="button" class="plux-v71-action-btn ${state.pinMode ? 'plux-v71-action-btn--active' : ''}" onclick="window.PluxRoutingMap.togglePinMode()">📌 ${esc(tr('pin'))}</button>
          <button type="button" class="plux-v71-action-btn" onclick="window.PluxRoutingMap.locateUserOnMap()" title="${esc(tr('my_location'))}">🎯 ${esc(tr('gps'))}</button>
          <button type="button" class="plux-v71-action-btn plux-v71-action-btn--accent" onclick="window.PluxRoutingMap.optimizeCurrentView()">${optLabel}</button>
          <button type="button" class="plux-v71-action-btn" onclick="window.PluxVaultIngest && window.PluxVaultIngest.openImportModal(${importDestIdx}, ${state.activeDiaIdx})">📥 ${esc(tr('import_maps'))}</button>
          <button type="button" class="plux-v71-action-btn" onclick="window.PluxRoutingMap.toggleSidebar()">📋 ${esc(tr('list'))}</button>
          <button type="button" class="plux-v71-action-btn plux-v71-action-btn--primary" onclick="window.abrirRutaGoogleMapsActual()">🗺️ ${esc(tr('google_maps'))}</button>
        </div>
      </div>
    `;
    root._pluxActiveGoogleMapsUrl = buildGoogleMapsUrlForState();
  }

  function renderRibbonAndSidebar(points, legs, feasibility, isCircular) {
    if (typeof document === 'undefined') return;
    const ribbon = document.getElementById('plux-v71-route-ribbon');
    const sidebar = document.getElementById('plux-v71-map-sidebar');
    const totalM = legs.reduce((s, l) => s + (Number(l.distanceM) || 0), 0);
    const totalS = legs.reduce((s, l) => s + (Number(l.durationS) || 0), 0);
    const mm = modeMeta(state.travelMode);

    if (ribbon) {
      if (points.length === 0) {
        ribbon.style.display = 'none';
      } else {
        ribbon.style.display = 'flex';
        ribbon.className = `plux-v71-route-ribbon ${feasibility.hasIssues ? 'plux-v71-route-ribbon--warn' : ''}`;
        const statusHtml = feasibility.hasIssues
          ? `<span class="plux-v71-status plux-v71-status--warn">⚠️ ${esc(tr('impossible_count', { n: feasibility.impossibleCount }))}</span>`
          : (feasibility.tightCount > 0
            ? `<span class="plux-v71-status plux-v71-status--tight">⏱️ ${esc(tr('tight_count', { n: feasibility.tightCount }))}</span>`
            : `<span class="plux-v71-status plux-v71-status--ok">✅ ${esc(tr('route_viable'))}</span>`);

        const undoHtml = state.lastTspBanner && state.tspUndoStack.length > 0
          ? `<span class="plux-v71-tsp-badge">✨ ${esc(tr('tsp_saved', { km: state.lastTspBanner.savedKm }))} <button type="button" class="plux-v71-action-btn plux-v71-undo-btn" onclick="window.PluxRoutingMap.undoLastTsp()">↩️ ${esc(tr('undo'))}</button></span>`
          : '';

        const stopsLabel = points.length === 1 ? tr('stops_singular') : tr('stops_count', { n: points.length });

        ribbon.innerHTML = `
          <div class="plux-v71-ribbon-metrics">
            <strong>${mm.icon} ${esc(stopsLabel)}</strong>
            <span>📏 ${esc(formatDistance(totalM))}</span>
            <span>⏱️ ${esc(formatDuration(totalS))}</span>
            ${statusHtml}
          </div>
          ${undoHtml}
        `;
      }
    }

    if (sidebar) {
      sidebar.classList.toggle('collapsed', !state.sidebarOpen);
      if (points.length === 0) {
        sidebar.innerHTML = `<div class="plux-v71-empty-state">${esc(tr('no_geocoded_stops'))}</div>`;
        return;
      }

      let html = '';
      points.forEach((p, idx) => {
        html += `
          <div class="plux-v71-stop-card" data-stop-idx="${idx}" onclick="window.PluxRoutingMap.focusMarker(${Number(p.lat)}, ${Number(p.lon)}, ${idx})">
            <span class="plux-v71-stop-num">${idx + 1}</span>
            <div class="plux-v71-stop-meta">
              <div class="plux-v71-stop-title">${esc(p.nombre)}</div>
              <div class="plux-v71-stop-sub">${esc(p.subtitle || '')}</div>
            </div>
          </div>
        `;
        if (idx < legs.length) {
          const leg = legs[idx];
          const isReturnLeg = Boolean(leg.isCircularReturn);
          const f = feasibility.results[idx];
          const warnCls = isReturnLeg
            ? 'plux-v71-leg-connector--return'
            : (f?.status === 'impossible'
              ? 'plux-v71-leg-connector--warn'
              : (f?.status === 'tight' ? 'plux-v71-leg-connector--tight' : ''));
          const warnLabel = !isReturnLeg && f?.status === 'impossible'
            ? `⚠️ ${tr('needs_margin', { travel: f.travelMin, gap: f.gapMin })}`
            : (!isReturnLeg && f?.status === 'tight' ? `⏱️ ${tr('tight_free', { gap: f.gapMin })}` : '');
          const legModeMeta = modeMeta(leg.mode);
          const prefix = isReturnLeg
            ? `↩️ ${esc(tr('return_to', { name: leg.targetName || points[0]?.nombre || '' }))} · `
            : `${legModeMeta.icon} `;
          html += `
            <div class="plux-v71-leg-connector ${warnCls}">
              <span>${prefix}${esc(formatDuration(leg.durationS))} · ${esc(formatDistance(leg.distanceM))}${leg.estimated ? ' ' + esc(tr('est_abbr')) : ''}</span>
              ${warnLabel ? `<strong>${esc(warnLabel)}</strong>` : ''}
            </div>
          `;
        }
      });
      sidebar.innerHTML = html;
    }
  }

  async function renderMapView() {
    const dom = ensureMapWorkspaceDOM();
    if (!dom) return null;
    renderToolbar();

    const m = ensureLeafletMapInstance();
    if (!m || typeof root.L === 'undefined') return null;

    state.markersLayer.clearLayers();
    state.routesLayer.clearLayers();
    state.markerRefs = [];
    if (typeof m.eachLayer === 'function') {
      m.eachLayer((layer) => {
        if (root.L.Polyline && layer instanceof root.L.Polyline) m.removeLayer(layer);
      });
    }

    const points = [];
    const eventsRef = [];
    let isCircular = false;

    if (state.activeDestIdx === 'all') {
      if (typeof root.collectMapRoutePoints === 'function') {
        const res = await root.collectMapRoutePoints();
        isCircular = Boolean(res?.isCircular);
        const rawPts = Array.isArray(res?.puntos) ? res.puntos : [];
        rawPts.forEach((p) => {
          if (!p || p.isReturnClone || p.isCircularReturn) return;
          if (isTransitOrNavStop(p)) return;
          const lat = Number(p.lat);
          const lon = Number(p.lon);
          if (!isFiniteCoord(lat, lon)) return;
          points.push({
            lat,
            lon,
            nombre: p.nombre,
            subtitle: p.isCircularOrigin
              ? tr('circular_origin')
              : (p.isOrigin ? tr('origin') : tr('days_acts', { d: p.dias || 0, e: p.eventos || 0 })),
            isOrigin: Boolean(p.isOrigin),
            isCircularOrigin: Boolean(p.isCircularOrigin)
          });
        });
      }
    } else {
      const dest = getDestinos()[state.activeDestIdx];
      const dia = dest?.dias?.[state.activeDiaIdx];
      if (dest && dia) {
        const baseCoord = (!isTransitOrNavStop(dest) && typeof root.geocode === 'function')
          ? await root.geocode(dest.nombre)
          : null;
        const evs = dia.eventos || [];
        for (let i = 0; i < evs.length; i++) {
          const ev = evs[i];
          const coord = await geocodeEventPlace(ev, isTransitOrNavStop(dest) ? '' : dest.nombre, baseCoord);
          const angle = (i / Math.max(evs.length, 1)) * Math.PI * 2;
          const radius = 0.008 + (i % 3) * 0.003;
          const lat = coord ? coord.lat : (baseCoord ? baseCoord.lat + Math.cos(angle) * radius : null);
          const lon = coord ? coord.lon : (baseCoord ? baseCoord.lon + Math.sin(angle) * radius : null);
          if (lat !== null && lon !== null && isFiniteCoord(lat, lon)) {
            points.push({
              lat,
              lon,
              nombre: ev.titulo || tr('stop_fallback', { n: i + 1 }),
              subtitle: `${ev.hora || '--:--'} · ${ev.duracion ? ev.duracion + ' min' : dest.nombre}${coord ? '' : ' ' + tr('approx_abbr')}`
            });
            eventsRef.push(ev);
          }
        }
        if (points.length === 0 && baseCoord && isFiniteCoord(Number(baseCoord.lat), Number(baseCoord.lon))) {
          m.setView([Number(baseCoord.lat), Number(baseCoord.lon)], 13);
        }
      }
    }

    const legs = [];
    for (let i = 0; i < points.length - 1; i++) {
      // En modo ruta general, calcular en auto/vuelo para distancias largas; en modo día usar el modo elegido
      const legMode = state.activeDestIdx === 'all' && haversineKm(points[i], points[i + 1]) > 45 ? 'driving' : state.travelMode;
      const leg = await computeRouteLeg(points[i], points[i + 1], legMode);
      legs.push(leg);
    }

    // Cerrar el loop en vista de ruta general cuando la ruta es circular (sin duplicar el marcador de origen)
    if (state.activeDestIdx === 'all' && isCircular && points.length >= 2) {
      const lastPt = points[points.length - 1];
      const originPt = points[0];
      const returnMode = haversineKm(lastPt, originPt) > 45 ? 'driving' : state.travelMode;
      const retLeg = await computeRouteLeg(lastPt, originPt, returnMode);
      legs.push({
        ...retLeg,
        isCircularReturn: true,
        targetName: originPt.nombre
      });
    }

    const feasibility = evaluateDayFeasibility(eventsRef, legs.filter((l) => !l.isCircularReturn));
    const boundsLatLngs = [];

    points.forEach((p, idx) => {
      boundsLatLngs.push([p.lat, p.lon]);
      const bg = p.isCircularOrigin
        ? 'background:linear-gradient(135deg,#10b981,#0ea5e9);'
        : 'background:linear-gradient(135deg,#6366f1,#ec4899);';
      const iconHtml = `<div style="${bg} color:white; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13px; border:2px solid #fff; box-shadow:0 3px 10px rgba(0,0,0,0.45);">${idx + 1}</div>`;
      const icon = root.L.divIcon({ html: iconHtml, className: 'plux-v71-marker', iconSize: [30, 30], iconAnchor: [15, 15] });
      const marker = root.L.marker([p.lat, p.lon], { icon })
        .bindPopup(`<div style="font-family:system-ui;color:#0f172a;"><strong>${idx + 1}. ${esc(p.nombre)}</strong><br><span style="color:#4f46e5;font-size:12px;">${esc(p.subtitle)}</span></div>`);
      marker.addTo(state.markersLayer);
      state.markerRefs.push(marker);
    });

    legs.forEach((leg, idx) => {
      const isReturn = Boolean(leg.isCircularReturn);
      const f = isReturn ? null : feasibility.results[idx];
      const isWarn = f?.status === 'impossible';
      const color = isWarn
        ? '#ef4444'
        : (isReturn ? '#10b981' : (leg.isLongHaul ? '#8b5cf6' : '#38bdf8'));
      const dash = (isReturn || leg.estimated || leg.isLongHaul) ? '7, 7' : undefined;
      const poly = root.L.polyline(leg.geometry, { color, weight: isWarn ? 5 : 4, opacity: 0.9, dashArray: dash });
      poly.addTo(state.routesLayer);

      if (Array.isArray(leg.geometry) && leg.geometry.length >= 2) {
        const mid = leg.geometry[Math.floor(leg.geometry.length / 2)];
        const mm = modeMeta(leg.mode);
        const prefix = isWarn ? '⚠️ ' : (isReturn ? '↩️ ' : `${mm.icon} `);
        const badgeCls = isWarn
          ? 'plux-v71-leg-badge--warn'
          : (isReturn ? 'plux-v71-leg-badge--return' : '');
        const badgeHtml = `<div class="plux-v71-leg-badge ${badgeCls}">${prefix}${esc(formatDuration(leg.durationS))}</div>`;
        const midIcon = root.L.divIcon({ html: badgeHtml, className: '', iconSize: [72, 20], iconAnchor: [36, 10] });
        root.L.marker(mid, { icon: midIcon, interactive: false }).addTo(state.routesLayer);
      }
    });

    if (boundsLatLngs.length >= 2 && typeof root.L.latLngBounds === 'function') {
      m.fitBounds(root.L.latLngBounds(boundsLatLngs), { padding: [44, 44] });
    } else if (boundsLatLngs.length === 1) {
      m.setView(boundsLatLngs[0], 14);
    }

    setTimeout(() => { try { m.invalidateSize(); } catch (e) {} }, 120);
    renderRibbonAndSidebar(points, legs, feasibility, isCircular);

    return { points, legs, isCircular, feasibility, markers: state.markerRefs.slice() };
  }

  // ---------------------------------------------------------------------------
  // 5. HOOKS EN EDITOR DE DÍAS, EVENTOS, RESUMEN MINI-MAPA Y MODALES
  // ---------------------------------------------------------------------------
  function enhanceSingleDayInEditor(dest, destIdx, dia, diaIdx) {
    if (typeof document === 'undefined' || !dest || !dia) return;
    const evCont = document.getElementById(`eventos-${dest.id}-${dia.id}`);
    if (!evCont) return;

    // 1. Limpiar barras previas de herramientas del día para evitar cualquier duplicado
    const toolsId = `plux-v71-day-tools-${dest.id}-${dia.id}`;
    const existingById = document.getElementById(toolsId);
    if (existingById) existingById.remove();
    const parentEl = evCont.parentElement;
    if (parentEl) {
      parentEl.querySelectorAll('.plux-v71-day-tools').forEach((el) => {
        if (el.id === toolsId || el.nextElementSibling === evCont) el.remove();
      });
    }

    const toolsBar = document.createElement('div');
    toolsBar.id = toolsId;
    toolsBar.className = 'plux-v71-day-tools';
    toolsBar.innerHTML = `
      <button type="button" class="plux-v71-day-tool-btn" onclick="window.PluxRoutingMap.optimizarOrdenDia(${destIdx}, ${diaIdx})">✨ ${esc(tr('sort_proximity'))}</button>
      <button type="button" class="plux-v71-day-tool-btn" onclick="window.PluxRoutingMap.openMapOnDay(${destIdx}, ${diaIdx})">🗺️ ${esc(tr('view_day_route'))}</button>
      <button type="button" class="plux-v71-day-tool-btn" onclick="window.PluxVaultIngest && window.PluxVaultIngest.openImportModal(${destIdx}, ${diaIdx})">📥 ${esc(tr('import_maps_list'))}</button>
    `;
    if (parentEl) parentEl.insertBefore(toolsBar, evCont);

    // 2. Limpiar chips de traslado previos dentro del contenedor de eventos para evitar duplicados
    evCont.querySelectorAll('.plux-v71-leg-chip').forEach((el) => el.remove());

    // 3. Insertar chips de traslado entre eventos consecutivos que ya tienen coordenadas
    const evCards = Array.from(evCont.querySelectorAll('.evento'));
    const evs = Array.isArray(dia.eventos) ? dia.eventos : [];
    const mm = modeMeta(state.travelMode);
    for (let i = 0; i < evs.length - 1; i++) {
      const a = evs[i];
      const b = evs[i + 1];
      if (!a || !b || !isFiniteCoord(Number(a.lat), Number(a.lon)) || !isFiniteCoord(Number(b.lat), Number(b.lon))) continue;
      const leg = buildFallbackLeg({ lat: Number(a.lat), lon: Number(a.lon) }, { lat: Number(b.lat), lon: Number(b.lon) }, state.travelMode);
      const feas = evaluateDayFeasibility([a, b], [leg]);
      const f = feas.results[0];
      const isWarn = f?.status === 'impossible';
      const isTight = f?.status === 'tight';
      const chip = document.createElement('div');
      chip.className = `plux-v71-leg-chip ${isWarn ? 'plux-v71-leg-chip--warn' : (isTight ? 'plux-v71-leg-chip--tight' : '')}`;
      const statusHtml = isWarn
        ? `<strong>⚠️ ${esc(tr('chip_needs_margin', { travel: f.travelMin, gap: f.gapMin }))}</strong>`
        : (isTight ? `<strong>⏱️ ${esc(tr('chip_tight', { gap: f.gapMin }))}</strong>` : '');
      chip.innerHTML = `${mm.icon} <span>${esc(formatDuration(leg.durationS))} · ${esc(formatDistance(leg.distanceM))}</span>${statusHtml}`;
      if (evCards[i] && evCards[i].parentElement === evCont) {
        evCards[i].insertAdjacentElement('afterend', chip);
      }
    }
  }

  function enhanceDayEditorWithRouting(destId, targetDiaId) {
    if (typeof document === 'undefined') return;
    const dests = getDestinos();
    const destIdx = dests.findIndex((d) => d && d.id === destId);
    if (destIdx < 0) return;
    const dest = dests[destIdx];
    const hasTargetDia = targetDiaId !== undefined && targetDiaId !== null;

    (dest.dias || []).forEach((dia, diaIdx) => {
      if (hasTargetDia && dia.id !== targetDiaId) return;
      enhanceSingleDayInEditor(dest, destIdx, dia, diaIdx);
    });
  }

  function enhanceResumenMiniMap() {
    if (typeof document === 'undefined') return;
    const miniEl = document.getElementById('resumen-map-mini');
    if (!miniEl) return;

    setTimeout(async () => {
      if (root._resumenMap && typeof root.L !== 'undefined') {
        try {
          const cfg = TILE_LAYERS[getSelectedLayerKey()] || TILE_LAYERS.voyager;
          root._resumenMap.eachLayer((l) => {
            if (l instanceof root.L.TileLayer) root._resumenMap.removeLayer(l);
          });
          root.L.tileLayer(cfg.url, { maxZoom: cfg.maxZoom, attribution: cfg.attribution, className: cfg.className || '' }).addTo(root._resumenMap);
        } catch (e) {}
      }

      let footer = document.getElementById('plux-v71-mini-map-footer');
      if (!footer) {
        footer = document.createElement('div');
        footer.id = 'plux-v71-mini-map-footer';
        footer.className = 'plux-v71-mini-map-footer plux-v71-scope';
        miniEl.parentElement?.appendChild(footer);
      }

      let totalKm = 0;
      let countPts = 0;
      if (typeof root.collectMapRoutePoints === 'function') {
        try {
          const { puntos, isCircular } = await root.collectMapRoutePoints();
          const clean = (puntos || []).filter((p) => p && !p.isReturnClone && !p.isCircularReturn && !isTransitOrNavStop(p));
          countPts = clean.length;
          for (let i = 0; i < clean.length - 1; i++) {
            totalKm += haversineKm(clean[i], clean[i + 1]);
          }
          if (isCircular && clean.length >= 2) {
            totalKm += haversineKm(clean[clean.length - 1], clean[0]);
          }
        } catch (e) {}
      }
      footer.innerHTML = `
        <span>🧭 ${esc(tr('mini_summary', { n: countPts, km: totalKm.toFixed(1) }))}</span>
        <button type="button" class="plux-v71-action-btn plux-v71-action-btn--primary" onclick="window.abrirMapa()">🗺️ ${esc(tr('open_interactive_map'))}</button>
      `;
    }, 280);
  }

  function installHooks() {
    if (typeof root.dibujarMapa === 'function' && !root.dibujarMapa._pluxV71Hooked) {
      const wrapped = function () {
        return renderMapView();
      };
      wrapped._pluxV71Hooked = true;
      root.dibujarMapa = wrapped;
    }

    ['abrirMapa', 'abrirMapaResumen'].forEach((fnName) => {
      if (typeof root[fnName] === 'function' && !root[fnName]._pluxV71Hooked) {
        const orig = root[fnName];
        const wrapped = function () {
          const res = orig.apply(this, arguments);
          setTimeout(() => void renderMapView(), 180);
          return res;
        };
        wrapped._pluxV71Hooked = true;
        root[fnName] = wrapped;
      }
    });

    if (typeof root.renderDias === 'function' && !root.renderDias._pluxV71Hooked) {
      const origRenderDias = root.renderDias;
      const wrappedRenderDias = function (destId) {
        const res = origRenderDias.apply(this, arguments);
        enhanceDayEditorWithRouting(destId);
        return res;
      };
      wrappedRenderDias._pluxV71Hooked = true;
      root.renderDias = wrappedRenderDias;
    }

    if (typeof root.renderEventos === 'function' && !root.renderEventos._pluxV71Hooked) {
      const origRenderEventos = root.renderEventos;
      const wrappedRenderEventos = function (destId, diaId) {
        const res = origRenderEventos.apply(this, arguments);
        enhanceDayEditorWithRouting(destId, diaId);
        return res;
      };
      wrappedRenderEventos._pluxV71Hooked = true;
      root.renderEventos = wrappedRenderEventos;
    }

    if (typeof root.actualizarEvento === 'function' && !root.actualizarEvento._pluxV71Hooked) {
      const origActualizarEvento = root.actualizarEvento;
      const wrappedActualizarEvento = function (destId, diaId, evId, campo) {
        const res = origActualizarEvento.apply(this, arguments);
        if (campo === 'hora' || campo === 'duracion' || campo === 'lat' || campo === 'lon') {
          enhanceDayEditorWithRouting(destId, diaId);
        }
        return res;
      };
      wrappedActualizarEvento._pluxV71Hooked = true;
      root.actualizarEvento = wrappedActualizarEvento;
    }

    if (typeof root.renderResumen === 'function' && !root.renderResumen._pluxV71Hooked) {
      const origRenderResumen = root.renderResumen;
      const wrappedRenderResumen = function () {
        const res = origRenderResumen.apply(this, arguments);
        enhanceResumenMiniMap();
        return res;
      };
      wrappedRenderResumen._pluxV71Hooked = true;
      root.renderResumen = wrappedRenderResumen;
    }

    if (typeof root.setLanguage === 'function' && !root.setLanguage._pluxV71RoutingHooked) {
      const origSetLang = root.setLanguage;
      const wrappedSetLang = function () {
        const res = origSetLang.apply(this, arguments);
        if (typeof document !== 'undefined') {
          const modal = document.getElementById('modal-mapa');
          if (modal && modal.style.display && modal.style.display !== 'none') {
            void renderMapView();
          }
          getDestinos().forEach((d) => {
            if (d && d.id != null) enhanceDayEditorWithRouting(d.id);
          });
        }
        return res;
      };
      wrappedSetLang._pluxV71RoutingHooked = true;
      root.setLanguage = wrappedSetLang;
    }
  }

  function focusMarker(lat, lon, idx) {
    const nLat = Number(lat);
    const nLon = Number(lon);
    if (state.v71Map && isFiniteCoord(nLat, nLon)) {
      const targetZoom = state.activeDestIdx === 'all' ? 11 : 15;
      if (typeof state.v71Map.flyTo === 'function') {
        state.v71Map.flyTo([nLat, nLon], targetZoom, { duration: 0.6 });
      } else if (typeof state.v71Map.setView === 'function') {
        state.v71Map.setView([nLat, nLon], targetZoom);
      }
    }

    const mIdx = idx !== undefined && idx !== null ? Number(idx) : -1;
    const marker = (Number.isInteger(mIdx) && mIdx >= 0 && state.markerRefs[mIdx])
      ? state.markerRefs[mIdx]
      : null;
    if (marker && typeof marker.openPopup === 'function') {
      try { marker.openPopup(); } catch (e) {}
    }

    if (typeof document !== 'undefined' && Number.isInteger(mIdx) && mIdx >= 0) {
      const sb = document.getElementById('plux-v71-map-sidebar');
      if (sb) {
        sb.querySelectorAll('.plux-v71-stop-card').forEach((card, cIdx) => {
          card.classList.toggle('active', cIdx === mIdx);
        });
      }
    }
  }

  const PluxRoutingMap = {
    tr,
    getLang,
    isTransitOrNavStop,
    haversineKm,
    geocodeEventPlace,
    computeRouteLeg,
    evaluateDayFeasibility,
    optimizeStopOrder,
    optimizarOrdenDia,
    optimizarOrdenDestinosGeneral,
    undoLastTsp,
    setMapLayer,
    setTravelMode,
    togglePinMode,
    addSearchedPlaceToMap,
    locateUserOnMap,
    renderMapView,
    enhanceDayEditorWithRouting,
    getMarkerRefs() {
      return state.markerRefs.slice();
    },
    selectDay(destIdx, diaIdx) {
      state.activeDestIdx = destIdx;
      state.activeDiaIdx = diaIdx || 0;
      state.pinMode = false;
      void renderMapView();
    },
    openMapOnDay(destIdx, diaIdx) {
      state.activeDestIdx = destIdx;
      state.activeDiaIdx = diaIdx || 0;
      if (typeof root.abrirMapa === 'function') root.abrirMapa();
      setTimeout(() => void renderMapView(), 220);
    },
    optimizeCurrentView() {
      if (state.activeDestIdx === 'all') return optimizarOrdenDestinosGeneral();
      return optimizarOrdenDia(state.activeDestIdx, state.activeDiaIdx);
    },
    focusMarker,
    toggleSidebar() {
      state.sidebarOpen = !state.sidebarOpen;
      const sb = typeof document !== 'undefined' ? document.getElementById('plux-v71-map-sidebar') : null;
      if (sb) sb.classList.toggle('collapsed', !state.sidebarOpen);
      setTimeout(() => { try { state.v71Map && state.v71Map.invalidateSize(); } catch (e) {} }, 100);
    },
    installHooks
  };

  root.PluxRoutingMap = PluxRoutingMap;

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
