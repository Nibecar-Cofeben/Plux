// ==========================================
// PLUX MODULE: DISCOVER (DESCUBRIR 4-TABS ENGINE)
// ==========================================
    // ==========================================================================
    // REDESIGNED DESCUBRIR (CONTEXTUAL INSPIRATION & COMPARATOR SYSTEM)
    // ==========================================================================

    const PLUX_CURATED_DESTINATIONS = [
      {
        id: 'roma',
        nombre: 'Roma',
        pais: 'Italia',
        codigoPais: 'IT',
        continente: 'Europa',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
        presupuestoDia: 85,
        mejorEpoca: 'Abril a Junio / Septiembre a Octubre',
        vibe: 'Histórico, Romántico, Gastronómico',
        idioma: 'Italiano',
        moneda: 'EUR (€)',
        transporte: 'Metro y caminata',
        seguridad: 'Alta (atención con carteristas)',
        rating: 4.9,
        descripcion: 'La Ciudad Eterna deslumbra con el Coliseo, la Fontana di Trevi, el Vaticano y una gastronomía inigualable.',
        lugaresClave: ['Coliseo Romano', 'Fontana di Trevi', 'Museos Vaticanos', 'Trastevere', 'Panteón'],
        guiaUrl: '/destinies/roma/'
      },
      {
        id: 'tokio',
        nombre: 'Tokio',
        pais: 'Japón',
        codigoPais: 'JP',
        continente: 'Asia',
        estilo: 'metropolis',
        img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
        presupuestoDia: 95,
        mejorEpoca: 'Marzo a Mayo (Cerezos) / Octubre a Noviembre',
        vibe: 'Futurista, Tradicional, Alta Tecnología',
        idioma: 'Japonés',
        moneda: 'JPY (¥)',
        transporte: 'Tren y Metro de clase mundial',
        seguridad: 'Excelente (una de las más seguras)',
        rating: 5.0,
        descripcion: 'Megaciudad donde conviven templos ancestrales como Senso-ji con el cruce de Shibuya y la vanguardia de Akihabara.',
        lugaresClave: ['Cruce de Shibuya', 'Templo Senso-ji', 'Akihabara', 'Shinjuku', 'Torre de Tokio'],
        guiaUrl: '/destinies/tokio/'
      },
      {
        id: 'paris',
        nombre: 'París',
        pais: 'Francia',
        codigoPais: 'FR',
        continente: 'Europa',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
        presupuestoDia: 110,
        mejorEpoca: 'Mayo a Septiembre',
        vibe: 'Elegante, Artístico, Romántico',
        idioma: 'Francés',
        moneda: 'EUR (€)',
        transporte: 'Metro muy conectado',
        seguridad: 'Alta (precaución en zonas turísticas)',
        rating: 4.8,
        descripcion: 'La Ciudad de la Luz cautiva con la Torre Eiffel, el Museo del Louvre, Montmartre y sus cafés tradicionales.',
        lugaresClave: ['Torre Eiffel', 'Museo del Louvre', 'Catedral de Notre-Dame', 'Montmartre', 'Arco del Triunfo'],
        guiaUrl: '/destinies/paris/'
      },
      {
        id: 'barcelona',
        nombre: 'Barcelona',
        pais: 'España',
        codigoPais: 'ES',
        continente: 'Europa',
        estilo: 'playa',
        img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
        presupuestoDia: 75,
        mejorEpoca: 'Mayo a Octubre',
        vibe: 'Mediterráneo, Modernista, Costero',
        idioma: 'Español / Catalán',
        moneda: 'EUR (€)',
        transporte: 'Metro, autobús y bicicleta',
        seguridad: 'Alta (cuidado con pertenencias en Las Ramblas)',
        rating: 4.9,
        descripcion: 'Fusión única de arquitectura modernista de Gaudí, playas mediterráneas, Barrio Gótico y vibrante gastronomía.',
        lugaresClave: ['Sagrada Familia', 'Park Güell', 'Barrio Gótico', 'La Barceloneta', 'Casa Batlló'],
        guiaUrl: '/destinies/barcelona/'
      },
      {
        id: 'nuevayork',
        nombre: 'Nueva York',
        pais: 'Estados Unidos',
        codigoPais: 'US',
        continente: 'América del Norte',
        estilo: 'metropolis',
        img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
        presupuestoDia: 140,
        mejorEpoca: 'Septiembre a Noviembre / Abril a Junio',
        vibe: 'Cosmopolita, Vibrante, Teatral',
        idioma: 'Inglés',
        moneda: 'USD ($)',
        transporte: 'Metro 24 horas',
        seguridad: 'Buena en zonas turísticas',
        rating: 4.8,
        descripcion: 'La Gran Manzana nunca duerme: Times Square, Central Park, Broadway, el Puente de Brooklyn y miradores icónicos.',
        lugaresClave: ['Central Park', 'Times Square', 'Estatua de la Libertad', 'Puente de Brooklyn', 'Empire State'],
        guiaUrl: '/destinies/nuevayork/'
      },
      {
        id: 'buenosaires',
        nombre: 'Buenos Aires',
        pais: 'Argentina',
        codigoPais: 'AR',
        continente: 'América del Sur',
        estilo: 'economico',
        img: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80',
        presupuestoDia: 45,
        mejorEpoca: 'Marzo a Mayo / Septiembre a Diciembre',
        vibe: 'Bohemio, Tango, Pasión Futbolera, Asados',
        idioma: 'Español',
        moneda: 'ARS ($)',
        transporte: 'Subte, colectivos y taxis accesibles',
        seguridad: 'Moderada (cuidado de noche en ciertas zonas)',
        rating: 4.8,
        descripcion: 'La reina del Plata cautiva con su arquitectura europea, el encanto de San Telmo, los teatros de Corrientes y su gastronomía.',
        lugaresClave: ['Teatro Colón', 'San Telmo', 'Caminito La Boca', 'Puerto Madero', 'Bosques de Palermo'],
        guiaUrl: '/destinies/buenosaires/'
      },
      {
        id: 'mardelplata',
        nombre: 'Mar del Plata',
        pais: 'Argentina',
        codigoPais: 'AR',
        continente: 'América del Sur',
        estilo: 'playa',
        img: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800&q=80',
        presupuestoDia: 40,
        mejorEpoca: 'Diciembre a Marzo (verano de playa) o todo el año',
        vibe: 'Costero, Rambla Histórica, Gastronomía Marina, Teatros',
        idioma: 'Español',
        moneda: 'ARS ($)',
        transporte: 'Colectivos con tarjeta SUBE, taxis y caminatas por la costa',
        seguridad: 'Buena (precauciones estándar en zonas comerciales concurridas)',
        rating: 4.8,
        descripcion: 'La Perla del Atlántico combina kilómetros de costas, la icónica Rambla con los monumentos a los lobos marinos, cartelera teatral destacada, paseos boscosos y la mejor oferta de pescados y mariscos del país.',
        lugaresClave: ['Rambla Casino y Escultura de Lobos Marinos', 'Playa Grande y Playa Varese', 'Puerto y Banquina de Pescadores', 'Bosque Peralta Ramos', 'Torre Tanque y Barrio Los Troncos', 'Paseo de Compras Calle Güemes'],
        gastronomia: ['Pescados y mariscos en el puerto', 'Medialunas marplatenses', 'Rabas y cazuelas', 'Alfajores artesanales'],
        guiaUrl: null
      },
      {
        id: 'bariloche',
        nombre: 'Bariloche',
        pais: 'Argentina',
        codigoPais: 'AR',
        continente: 'América del Sur',
        estilo: 'aventura',
        img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&q=80',
        presupuestoDia: 55,
        mejorEpoca: 'Julio a Septiembre (temporada de nieve) / Diciembre a Marzo (lagos y senderos)',
        vibe: 'Montaña, Lagos Glaciares, Nieve, Chocolaterías Artesanales',
        idioma: 'Español',
        moneda: 'ARS ($)',
        transporte: 'Colectivos urbanos (SUBE), transfers turísticos y excursiones lacustres',
        seguridad: 'Muy buena',
        rating: 4.9,
        descripcion: 'Capital patagónica de los lagos y el turismo de aventura. Rodeada por el Parque Nacional Nahuel Huapi, ofrece paisajes andinos espectaculares, pistas de esquí en Cerro Catedral y gastronomía de montaña.',
        lugaresClave: ['Circuito Chico y Punto Panorámico', 'Cerro Campanario', 'Cerro Catedral', 'Centro Cívico', 'Colonia Suiza', 'Navegación a Puerto Blest'],
        gastronomia: ['Trucha patagónica a la manteca', 'Cordero al asador', 'Chocolates en rama', 'Cervezas artesanales'],
        guiaUrl: null
      },
      {
        id: 'mendoza',
        nombre: 'Mendoza',
        pais: 'Argentina',
        codigoPais: 'AR',
        continente: 'América del Sur',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',
        presupuestoDia: 50,
        mejorEpoca: 'Octubre a Mayo (Fiesta de la Vendimia en marzo)',
        vibe: 'Enoturismo, Cordillera de los Andes, Bodegas, Aconcagua',
        idioma: 'Español',
        moneda: 'ARS ($)',
        transporte: 'Tours a bodegas, tranvía urbano y autos de alquiler',
        seguridad: 'Buena',
        rating: 4.9,
        descripcion: 'Capital internacional del vino Malbec al pie de los Andes. Célebre por sus valles vitivinícolas de Uco, Luján y Maipú, parques arbolados y la ruta de alta montaña hacia el cerro Aconcagua.',
        lugaresClave: ['Ruta del Vino y Bodegas en Valle de Uco', 'Parque General San Martín', 'Circuito de Alta Montaña y Aconcagua', 'Puente del Inca', 'Termas de Cacheuta'],
        gastronomia: ['Cata de vinos Malbec', 'Carne a la masa', 'Empanadas mendocinas', 'Chivo al asador'],
        guiaUrl: null
      },
      {
        id: 'iguazu',
        nombre: 'Cataratas del Iguazú',
        pais: 'Argentina',
        codigoPais: 'AR',
        continente: 'América del Sur',
        estilo: 'naturaleza',
        img: 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?w=800&q=80',
        presupuestoDia: 45,
        mejorEpoca: 'Marzo a Mayo / Agosto a Noviembre',
        vibe: 'Selva Paranaense, Maravilla Natural, Cascadas Gigantes',
        idioma: 'Español / Portugués',
        moneda: 'ARS ($)',
        transporte: 'Buses al parque nacional, taxis y tren ecológico de la selva',
        seguridad: 'Muy buena',
        rating: 5.0,
        descripcion: 'Una de las 7 Maravillas Naturales del Mundo, con un conjunto de 275 saltos de agua en plena selva subtropical, coronadas por la sobrecogedora Garganta del Diablo.',
        lugaresClave: ['Garganta del Diablo', 'Circuito Superior e Inferior', 'Paseo Náutico Gran Aventura', 'Hito Tres Fronteras', 'Parque de las Aves'],
        gastronomia: ['Pescados de río (pacú y surubí)', 'Chipá calentito', 'Mbeju misionero', 'Helados de yerba mate'],
        guiaUrl: null
      },
      {
        id: 'ushuaia',
        nombre: 'Ushuaia',
        pais: 'Argentina',
        codigoPais: 'AR',
        continente: 'América del Sur',
        estilo: 'aventura',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80',
        presupuestoDia: 60,
        mejorEpoca: 'Noviembre a Marzo (verano de navegaciones) / Junio a Septiembre (nieve)',
        vibe: 'Fin del Mundo, Glaciares, Canal Beagle, Pingüineras',
        idioma: 'Español',
        moneda: 'ARS ($)',
        transporte: 'Transfers turísticos, colectivos y catamaranes',
        seguridad: 'Excelente',
        rating: 4.9,
        descripcion: 'La ciudad más austral del planeta. Ofrece travesías por el Canal Beagle, caminatas en la Laguna Esmeralda, el histórico Tren del Fin del Mundo y pistas de esquí en Cerro Castor.',
        lugaresClave: ['Parque Nacional Tierra del Fuego', 'Navegación Canal Beagle y Faro Les Eclaireurs', 'Laguna Esmeralda', 'Tren del Fin del Mundo', 'Cerro Castor'],
        gastronomia: ['Centolla fresca fueguina', 'Merluza negra', 'Cordero patagónico', 'Chocolates artesanales'],
        guiaUrl: null
      },
      {
        id: 'riodejaneiro',
        nombre: 'Río de Janeiro',
        pais: 'Brasil',
        codigoPais: 'BR',
        continente: 'América del Sur',
        estilo: 'playa',
        img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
        presupuestoDia: 55,
        mejorEpoca: 'Mayo a Octubre (clima templado) / Diciembre a Marzo (verano)',
        vibe: 'Samba, Playas Icónicas, Pan de Azúcar, Cristo Redentor',
        idioma: 'Portugués',
        moneda: 'BRL (R$)',
        transporte: 'Metro, VLT y aplicaciones oficiales de transporte',
        seguridad: 'Moderada (atención con hurtos en playas y de noche)',
        rating: 4.8,
        descripcion: 'La Ciudad Maravillosa fusiona naturaleza exuberante, playas legendarias como Copacabana e Ipanema, y monumentos célebres como el Cristo Redentor y el Pan de Azúcar.',
        lugaresClave: ['Cristo Redentor en el Corcovado', 'Pan de Azúcar', 'Playas de Ipanema y Copacabana', 'Escadaria Selarón en Lapa', 'Jardín Botánico'],
        gastronomia: ['Feijoada completa', 'Pão de queijo', 'Caipirinha en la playa', 'Açaí bowl'],
        guiaUrl: null
      },
      {
        id: 'cancun',
        nombre: 'Cancún y Riviera Maya',
        pais: 'México',
        codigoPais: 'MX',
        continente: 'América del Norte',
        estilo: 'playa',
        img: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800&q=80',
        presupuestoDia: 75,
        mejorEpoca: 'Diciembre a Abril',
        vibe: 'Mar Caribe, Cenotes Místicos, Ruinas Mayas, All Inclusive',
        idioma: 'Español',
        moneda: 'MXN ($) / USD',
        transporte: 'Vans (colectivos), taxis turísticos y transfers',
        seguridad: 'Buena en zona hotelera y parques turísticos',
        rating: 4.9,
        descripcion: 'Aguas turquesas del Caribe mexicano, playas de arena coralina blanca, cenotes sagrados subterráneos y acceso directo a maravillas arqueológicas como Chichén Itzá y Tulum.',
        lugaresClave: ['Zona Hotelera y Playa Delfines', 'Excursión a Chichén Itzá', 'Ruinas de Tulum sobre el mar', 'Isla Mujeres en catamarán', 'Cenotes de la Riviera'],
        gastronomia: ['Tacos de pescado al pastor', 'Cochinita pibil', 'Ceviche caribeño', 'Margaritas artesanales'],
        guiaUrl: null
      },
      {
        id: 'londres',
        nombre: 'Londres',
        pais: 'Reino Unido',
        codigoPais: 'GB',
        continente: 'Europa',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
        presupuestoDia: 120,
        mejorEpoca: 'Junio a Agosto',
        vibe: 'Histórico, Monárquico, Museos Gratuitos',
        idioma: 'Inglés',
        moneda: 'GBP (£)',
        transporte: 'Underground y autobuses de dos pisos',
        seguridad: 'Muy alta',
        rating: 4.9,
        descripcion: 'Capital repleta de museos de clase mundial, el Big Ben, palacios reales, mercados vintage y parques majestuosos.',
        lugaresClave: ['Big Ben', 'London Eye', 'British Museum', 'Torre de Londres', 'Camden Market'],
        guiaUrl: null
      },
      {
        id: 'madrid',
        nombre: 'Madrid',
        pais: 'España',
        codigoPais: 'ES',
        continente: 'Europa',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
        presupuestoDia: 80,
        mejorEpoca: 'Abril a Junio / Septiembre a Octubre',
        vibe: 'Tapas, Museos de Arte, Vida Nocturna',
        idioma: 'Español',
        moneda: 'EUR (€)',
        transporte: 'Metro impecable y caminata',
        seguridad: 'Muy alta',
        rating: 4.8,
        descripcion: 'Capital española famosa por el Triángulo del Arte, sus terrazas al sol, el Parque del Retiro y la animada Gran Vía.',
        lugaresClave: ['Museo del Prado', 'Parque del Retiro', 'Plaza Mayor', 'Palacio Real', 'Gran Vía'],
        guiaUrl: null
      },
      {
        id: 'amsterdam',
        nombre: 'Ámsterdam',
        pais: 'Países Bajos',
        codigoPais: 'NL',
        continente: 'Europa',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
        presupuestoDia: 95,
        mejorEpoca: 'Abril a Septiembre (Tulipanes en primavera)',
        vibe: 'Canales, Bicicletas, Vanguardia',
        idioma: 'Neerlandés / Inglés fluido',
        moneda: 'EUR (€)',
        transporte: 'Bicicleta, tranvía y barcos',
        seguridad: 'Excelente',
        rating: 4.8,
        descripcion: 'Ciudad de canales románticos, arquitectura del siglo XVII, museos de Van Gogh y Rijksmuseum, y cultura ciclista.',
        lugaresClave: ['Rijksmuseum', 'Museo Van Gogh', 'Canales de Ámsterdam', 'Casa de Ana Frank', 'Barrio Jordaan'],
        guiaUrl: null
      },
      {
        id: 'berlin',
        nombre: 'Berlín',
        pais: 'Alemania',
        codigoPais: 'DE',
        continente: 'Europa',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
        presupuestoDia: 75,
        mejorEpoca: 'Mayo a Septiembre',
        vibe: 'Alternativo, Histórico, Urbano, Clubbing',
        idioma: 'Alemán / Inglés',
        moneda: 'EUR (€)',
        transporte: 'U-Bahn, S-Bahn y trenes urbanos',
        seguridad: 'Alta',
        rating: 4.8,
        descripcion: 'Fusión de historia de la Guerra Fría, arte callejero, la Isla de los Museos y la cultura nocturna más innovadora de Europa.',
        lugaresClave: ['Puerta de Brandeburgo', 'Muro de Berlín (East Side Gallery)', 'Isla de los Museos', 'Reichstag', 'Alexanderplatz'],
        guiaUrl: null
      },
      {
        id: 'lisboa',
        nombre: 'Lisboa',
        pais: 'Portugal',
        codigoPais: 'PT',
        continente: 'Europa',
        estilo: 'economico',
        img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
        presupuestoDia: 60,
        mejorEpoca: 'Abril a Octubre',
        vibe: 'Azulejos, Fado, Miradores, Tranvías',
        idioma: 'Portugués',
        moneda: 'EUR (€)',
        transporte: 'Tranvía 28, metro y funiculares',
        seguridad: 'Excelente (una de las más seguras del mundo)',
        rating: 4.9,
        descripcion: 'La ciudad de las siete colinas sobre el río Tajo enamora con sus pasteles de Belém, tranvías amarillos y miradores con atardeceres dorados.',
        lugaresClave: ['Torre de Belém', 'Monasterio de los Jerónimos', 'Tranvía 28', 'Barrio de Alfama', 'Mirador da Senhora do Monte'],
        guiaUrl: null
      },
      {
        id: 'praga',
        nombre: 'Praga',
        pais: 'República Checa',
        codigoPais: 'CZ',
        continente: 'Europa',
        estilo: 'economico',
        img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
        presupuestoDia: 55,
        mejorEpoca: 'Mayo a Septiembre / Diciembre (Mercados navideños)',
        vibe: 'Cuento de Hadas, Gótico, Cerveza Artesanal',
        idioma: 'Checo',
        moneda: 'CZK (Kč)',
        transporte: 'Tranvía y metro muy económico',
        seguridad: 'Muy alta',
        rating: 4.9,
        descripcion: 'La ciudad de las cien torres: cruza el Puente de Carlos al amanecer, visita el Castillo de Praga y asómbrate con el Reloj Astronómico.',
        lugaresClave: ['Puente de Carlos', 'Castillo de Praga', 'Reloj Astronómico', 'Plaza de la Ciudad Vieja', 'Catedral de San Vito'],
        guiaUrl: null
      },
      {
        id: 'viena',
        nombre: 'Viena',
        pais: 'Austria',
        codigoPais: 'AT',
        continente: 'Europa',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80',
        presupuestoDia: 90,
        mejorEpoca: 'Mayo a Octubre / Diciembre',
        vibe: 'Imperial, Clásica, Vals, Café Tradicional',
        idioma: 'Alemán',
        moneda: 'EUR (€)',
        transporte: 'Tranvía Ringstrasse y metro',
        seguridad: 'Excelente (clasificada con mejor calidad de vida)',
        rating: 4.9,
        descripcion: 'Antigua capital del imperio austro-húngaro: palacios imperiales, la Ópera Estatal, tarta Sacher y los jardines de Schönbrunn.',
        lugaresClave: ['Palacio de Schönbrunn', 'Palacio Belvedere', 'Catedral de San Esteban', 'Ópera de Viena', 'Prater'],
        guiaUrl: null
      },
      {
        id: 'atenas',
        nombre: 'Atenas',
        pais: 'Grecia',
        codigoPais: 'GR',
        continente: 'Europa',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800&q=80',
        presupuestoDia: 65,
        mejorEpoca: 'Abril a Junio / Septiembre a Octubre',
        vibe: 'Mitología Clásica, Tabernas, Sol Mediterráneo',
        idioma: 'Griego',
        moneda: 'EUR (€)',
        transporte: 'Metro y caminata',
        seguridad: 'Buena',
        rating: 4.7,
        descripcion: 'Cuna de la civilización occidental y la democracia: corona la colina con la Acrópolis y piérdete por las callejuelas floridas de Plaka.',
        lugaresClave: ['Acrópolis y Partenón', 'Museo de la Acrópolis', 'Barrio Plaka', 'Templo de Zeus Olímpico', 'Monastiraki'],
        guiaUrl: null
      },
      {
        id: 'estambul',
        nombre: 'Estambul',
        pais: 'Turquía',
        codigoPais: 'TR',
        continente: 'Europa / Asia',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
        presupuestoDia: 50,
        mejorEpoca: 'Abril a Mayo / Septiembre a Noviembre',
        vibe: 'Bazar Exótico, Dos Continentes, Especias, Mezquitas',
        idioma: 'Turco',
        moneda: 'TRY (₺)',
        transporte: 'Tranvía histórico y ferris por el Bósforo',
        seguridad: 'Buena en áreas céntricas',
        rating: 4.9,
        descripcion: 'El puente entre Europa y Asia: contempla los minaretes de Santa Sofía, navega el Bósforo y regatea en el laberinto del Gran Bazar.',
        lugaresClave: ['Santa Sofía (Hagia Sophia)', 'Mezquita Azul', 'Gran Bazar', 'Palacio Topkapi', 'Crucero por el Bósforo'],
        guiaUrl: null
      },
      {
        id: 'dubai',
        nombre: 'Dubái',
        pais: 'Emiratos Árabes Unidos',
        codigoPais: 'AE',
        continente: 'Oriente Medio',
        estilo: 'metropolis',
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
        presupuestoDia: 130,
        mejorEpoca: 'Noviembre a Marzo (clima agradable)',
        vibe: 'Ultra Lujo, Rascacielos, Desierto, Vanguardia',
        idioma: 'Árabe / Inglés generalizado',
        moneda: 'AED (د.إ)',
        transporte: 'Metro climatizado y taxis',
        seguridad: 'Excepcional (casi nula delincuencia)',
        rating: 4.8,
        descripcion: 'Oasis futurista con el edificio más alto del mundo (Burj Khalifa), islas artificiales en forma de palmera y safaris en todoterreno por las dunas.',
        lugaresClave: ['Burj Khalifa', 'Dubai Mall y Fuentes', 'Palm Jumeirah', 'Safari en el Desierto', 'Dubai Marina'],
        guiaUrl: null
      },
      {
        id: 'elcairo',
        nombre: 'El Cairo',
        pais: 'Egipto',
        codigoPais: 'EG',
        continente: 'África',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80',
        presupuestoDia: 40,
        mejorEpoca: 'Octubre a Abril',
        vibe: 'Faraónico, Milenario, Desértico, Intenso',
        idioma: 'Árabe',
        moneda: 'EGP (E£)',
        transporte: 'Uber y tours con guía privado',
        seguridad: 'Moderada (recomendable con guía acreditado)',
        rating: 4.8,
        descripcion: 'La puerta a los misterios del Antiguo Egipto con las colosales Pirámides de Giza, la Gran Esfinge y los tesoros de Tutankamón junto al Nilo.',
        lugaresClave: ['Pirámides de Giza y Esfinge', 'Gran Museo Egipcio', 'Bazar Jan el-Jalili', 'Río Nilo en Faluca', 'Ciudadela de Saladino'],
        guiaUrl: null
      },
      {
        id: 'sydney',
        nombre: 'Sídney',
        pais: 'Australia',
        codigoPais: 'AU',
        continente: 'Oceanía',
        estilo: 'playa',
        img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80',
        presupuestoDia: 115,
        mejorEpoca: 'Noviembre a Marzo (Verano austral)',
        vibe: 'Surf, Bahía Espectacular, Vida al Aire Libre',
        idioma: 'Inglés',
        moneda: 'AUD ($)',
        transporte: 'Ferris icónicos por la bahía y tren',
        seguridad: 'Excelente',
        rating: 4.9,
        descripcion: 'La joya costera de Oceanía con las velas blancas de la Ópera de Sídney, el puente Harbour Bridge y la icónica playa Bondi Beach.',
        lugaresClave: ['Ópera de Sídney', 'Sydney Harbour Bridge', 'Playa Bondi', 'Darling Harbour', 'Manly Beach en ferry'],
        guiaUrl: null
      },
      {
        id: 'bangkok',
        nombre: 'Bangkok',
        pais: 'Tailandia',
        codigoPais: 'TH',
        continente: 'Asia',
        estilo: 'economico',
        img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80',
        presupuestoDia: 35,
        mejorEpoca: 'Noviembre a Febrero (estación seca y fresca)',
        vibe: 'Street Food, Templos Dorados, Mercados Flotantes, Tuk Tuks',
        idioma: 'Tailandés / Inglés turístico',
        moneda: 'THB (฿)',
        transporte: 'BTS Skytrain, barcos por el río Chao Phraya y Tuk-tuks',
        seguridad: 'Alta (atención con regateos excesivos)',
        rating: 4.8,
        descripcion: 'Capital electrizante con templos budistas recubiertos de oro como Wat Pho, mercados flotantes y la gastronomía callejera más premiada del mundo.',
        lugaresClave: ['Gran Palacio Real', 'Templo Wat Arun', 'Buda Reclinado (Wat Pho)', 'Mercado de Chatuchak', 'Khao San Road'],
        guiaUrl: null
      },
      {
        id: 'singapur',
        nombre: 'Singapur',
        pais: 'Singapur',
        codigoPais: 'SG',
        continente: 'Asia',
        estilo: 'metropolis',
        img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
        presupuestoDia: 110,
        mejorEpoca: 'Todo el año (noviembre a enero más lluvias)',
        vibe: 'Ciudad Jardín, Futurista, Limpia, Multirracial',
        idioma: 'Inglés / Mandarín / Malayo',
        moneda: 'SGD ($)',
        transporte: 'MRT ultra moderno y eficiente',
        seguridad: 'Excepcional (una de las más seguras del planeta)',
        rating: 4.9,
        descripcion: 'Utopía ecológica y moderna: los superárboles de Gardens by the Bay, el hotel Marina Bay Sands y la mejor comida de puestos Hawker.',
        lugaresClave: ['Gardens by the Bay', 'Marina Bay Sands', 'Isla Sentosa', 'Chinatown y Little India', 'Aeropuerto Jewel Changi'],
        guiaUrl: null
      },
      {
        id: 'seul',
        nombre: 'Seúl',
        pais: 'Corea del Sur',
        codigoPais: 'KR',
        continente: 'Asia',
        estilo: 'metropolis',
        img: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80',
        presupuestoDia: 75,
        mejorEpoca: 'Marzo a Mayo / Septiembre a Noviembre',
        vibe: 'K-Pop, Palacios Reales, Cosméticos, Barbacoa Coreana',
        idioma: 'Coreano',
        moneda: 'KRW (₩)',
        transporte: 'Metro súper conectado y rápido',
        seguridad: 'Excelente',
        rating: 4.9,
        descripcion: 'Epicentro del fenómeno cultural coreano: palacios Joseon donde vestirse en hanbok, barrios de moda como Hongdae y vistas desde la Torre N Seoul.',
        lugaresClave: ['Palacio Gyeongbokgung', 'Torre N Seoul', 'Aldea Bukchon Hanok', 'Distrito comercial Myeongdong', 'Hongdae'],
        guiaUrl: null
      },
      {
        id: 'bali',
        nombre: 'Bali',
        pais: 'Indonesia',
        codigoPais: 'ID',
        continente: 'Asia',
        estilo: 'playa',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
        presupuestoDia: 45,
        mejorEpoca: 'Mayo a Septiembre (temporada seca)',
        vibe: 'Espiritual, Terrazas de Arroz, Surf, Cascadas',
        idioma: 'Indonesio / Balinés',
        moneda: 'IDR (Rp)',
        transporte: 'Moto de alquiler o chofer privado económico',
        seguridad: 'Muy buena',
        rating: 4.8,
        descripcion: 'La Isla de los Dioses seduce con sus campos de arroz escalonados en Ubud, templos sobre acantilados en Uluwatu y retiros de bienestar.',
        lugaresClave: ['Terrazas de Arroz de Tegallalang', 'Templo de Uluwatu', 'Bosque de los Monos de Ubud', 'Templo Tanah Lot', 'Playas de Canggu y Seminyak'],
        guiaUrl: null
      },
      {
        id: 'cusco',
        nombre: 'Cusco y Machu Picchu',
        pais: 'Perú',
        codigoPais: 'PE',
        continente: 'América del Sur',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
        presupuestoDia: 55,
        mejorEpoca: 'Mayo a Octubre (temporada seca sin lluvias)',
        vibe: 'Místico, Incaico, Andino, Maravilla del Mundo',
        idioma: 'Español / Quechua',
        moneda: 'PEN (S/)',
        transporte: 'Tren panorámico a Aguas Calientes y tours',
        seguridad: 'Buena en circuitos turísticos',
        rating: 5.0,
        descripcion: 'Antigua capital del Imperio Inca y acceso a la enigmática ciudadela sagrada de Machu Picchu en lo alto de los Andes nubosos.',
        lugaresClave: ['Ciudadela de Machu Picchu', 'Plaza de Armas de Cusco', 'Sacsayhuamán', 'Valle Sagrado de los Incas', 'Montaña de Siete Colores (Vinicunca)'],
        guiaUrl: null
      },
      {
        id: 'ciudaddemexico',
        nombre: 'Ciudad de México',
        pais: 'México',
        codigoPais: 'MX',
        continente: 'América del Norte',
        estilo: 'gastronomia',
        img: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80',
        presupuestoDia: 50,
        mejorEpoca: 'Octubre a Abril',
        vibe: 'Tacos Legendarios, Muralismo, Museos, Colores',
        idioma: 'Español',
        moneda: 'MXN ($)',
        transporte: 'Metro, Metrobús y Uber accesible',
        seguridad: 'Moderada (muy segura en Roma, Condesa, Coyoacán y Reforma)',
        rating: 4.8,
        descripcion: 'Gigante cultural con la mayor cantidad de museos, pirámides milenarias en Teotihuacán, la casa azul de Frida Kahlo y los mejores tacos del mundo.',
        lugaresClave: ['Zócalo y Centro Histórico', 'Museo Frida Kahlo en Coyoacán', 'Bosque de Chapultepec', 'Pirámides de Teotihuacán', 'Paseo de la Reforma'],
        guiaUrl: null
      },
      {
        id: 'santiago',
        nombre: 'Santiago de Chile',
        pais: 'Chile',
        codigoPais: 'CL',
        continente: 'América del Sur',
        estilo: 'metropolis',
        img: 'https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?w=800&q=80',
        presupuestoDia: 60,
        mejorEpoca: 'Octubre a Abril / Invierno para esquiar en la cordillera',
        vibe: 'Cordillera de los Andes, Vinos, Moderno',
        idioma: 'Español',
        moneda: 'CLP ($)',
        transporte: 'Metro moderno y buses',
        seguridad: 'Alta',
        rating: 4.7,
        descripcion: 'Metrópolis enmarcada por los picos nevados de los Andes, bodegas de vino de renombre internacional y miradores como el Sky Costanera.',
        lugaresClave: ['Cerro San Cristóbal', 'Sky Costanera', 'Barrio Bellavista', 'Valle de Casablanca', 'Palacio de La Moneda'],
        guiaUrl: null
      },
      {
        id: 'sanfrancisco',
        nombre: 'San Francisco',
        pais: 'Estados Unidos',
        codigoPais: 'US',
        continente: 'América del Norte',
        estilo: 'metropolis',
        img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
        presupuestoDia: 135,
        mejorEpoca: 'Septiembre a Noviembre (menos niebla y días soleados)',
        vibe: 'Bahía Emblemática, Tranvías Históricos, Silicon Valley',
        idioma: 'Inglés',
        moneda: 'USD ($)',
        transporte: 'BART, Muni y Cable Cars históricos',
        seguridad: 'Buena en zonas turísticas',
        rating: 4.8,
        descripcion: 'Famosa por el puente colgante Golden Gate, los tranvías que trepan colinas empinadas, los leones marinos del Pier 39 y la isla prisión de Alcatraz.',
        lugaresClave: ['Golden Gate Bridge', 'Isla de Alcatraz', 'Fisherman’s Wharf (Pier 39)', 'Lombard Street', 'Chinatown'],
        guiaUrl: null
      },
      {
        id: 'miami',
        nombre: 'Miami',
        pais: 'Estados Unidos',
        codigoPais: 'US',
        continente: 'América del Norte',
        estilo: 'playa',
        img: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80',
        presupuestoDia: 125,
        mejorEpoca: 'Diciembre a Mayo',
        vibe: 'Art Déco, Playero, Glamour, Ritmo Latino',
        idioma: 'Inglés / Español extendido',
        moneda: 'USD ($)',
        transporte: 'Uber y Metromover gratuito',
        seguridad: 'Buena',
        rating: 4.7,
        descripcion: 'Capital del sol y la noche: edificios Art Déco en Ocean Drive, murales artísticos en Wynwood, aguas turquesas y compras de lujo.',
        lugaresClave: ['South Beach y Ocean Drive', 'Distrito Art Déco', 'Wynwood Walls', 'Little Havana (Calle Ocho)', 'Bayside Marketplace'],
        guiaUrl: null
      },
      {
        id: 'losangeles',
        nombre: 'Los Ángeles',
        pais: 'Estados Unidos',
        codigoPais: 'US',
        continente: 'América del Norte',
        estilo: 'metropolis',
        img: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80',
        presupuestoDia: 130,
        mejorEpoca: 'Mayo a Octubre',
        vibe: 'Cine, Famosos, Playas de Santa Mónica, Puestas de Sol',
        idioma: 'Inglés / Español',
        moneda: 'USD ($)',
        transporte: 'Auto de alquiler o Uber',
        seguridad: 'Buena en áreas residenciales y turísticas',
        rating: 4.7,
        descripcion: 'La meca del entretenimiento global: el Paseo de la Fama de Hollywood, el muelle de Santa Mónica, los canales de Venice y mansiones de Beverly Hills.',
        lugaresClave: ['Cartel de Hollywood', 'Observatorio Griffith', 'Muelle de Santa Mónica', 'Paseo de la Fama', 'Venice Beach'],
        guiaUrl: null
      },
      {
        id: 'toronto',
        nombre: 'Toronto',
        pais: 'Canadá',
        codigoPais: 'CA',
        continente: 'América del Norte',
        estilo: 'metropolis',
        img: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=800&q=80',
        presupuestoDia: 100,
        mejorEpoca: 'Mayo a Octubre',
        vibe: 'Multicultural, Moderna, Lago Ontario, Cataratas',
        idioma: 'Inglés',
        moneda: 'CAD (C$)',
        transporte: 'TTC (Metro y tranvías)',
        seguridad: 'Excelente (una de las urbes más seguras de Norteamérica)',
        rating: 4.8,
        descripcion: 'Dinámica ciudad cosmopolita coronada por la Torre CN, con islas tranquilas para pasear en kayak y excursiones a las Cataratas del Niágara.',
        lugaresClave: ['Torre CN', 'Islas de Toronto', 'Mercado St. Lawrence', 'Distrito Distillery', 'Cataratas del Niágara'],
        guiaUrl: null
      },
      {
        id: 'ciudaddelcabo',
        nombre: 'Ciudad del Cabo',
        pais: 'Sudáfrica',
        codigoPais: 'ZA',
        continente: 'África',
        estilo: 'playa',
        img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80',
        presupuestoDia: 60,
        mejorEpoca: 'Noviembre a Marzo (Verano sudafricano)',
        vibe: 'Montaña Sagrada, Dos Océanos, Pingüinos, Viñedos',
        idioma: 'Inglés / Afrikáans',
        moneda: 'ZAR (R)',
        transporte: 'Uber muy económico y auto de alquiler',
        seguridad: 'Moderada (precaución de noche)',
        rating: 4.9,
        descripcion: 'Ubicación geográfica insuperable con la silueta plana de Table Mountain, pingüinos en Boulders Beach y la mítica ruta al Cabo de Buena Esperanza.',
        lugaresClave: ['Table Mountain en teleférico', 'Cabo de Buena Esperanza', 'Playa Boulders (Pingüinos)', 'V&A Waterfront', 'Kirstenbosch Jardín Botánico'],
        guiaUrl: null
      },
      {
        id: 'marrakech',
        nombre: 'Marrakech',
        pais: 'Marruecos',
        codigoPais: 'MA',
        continente: 'África',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
        presupuestoDia: 45,
        mejorEpoca: 'Marzo a Mayo / Septiembre a Noviembre',
        vibe: 'Medina Milenaria, Riads, Especias, Lámparas Mágicas',
        idioma: 'Árabe / Francés',
        moneda: 'MAD (د.م.)',
        transporte: 'Taxis y caminata en la Medina',
        seguridad: 'Buena',
        rating: 4.8,
        descripcion: 'La Ciudad Roja te sumerge en los encantadores de serpientes de Jemaa el-Fna, la serenidad azul del Jardín Majorelle y palacios de mosaicos.',
        lugaresClave: ['Plaza Jemaa el-Fna', 'Jardín Majorelle', 'Palacio de la Bahía', 'Zocos de la Medina', 'Mezquita Koutoubia'],
        guiaUrl: null
      },
      {
        id: 'kioto',
        nombre: 'Kioto',
        pais: 'Japón',
        codigoPais: 'JP',
        continente: 'Asia',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
        presupuestoDia: 75,
        mejorEpoca: 'Noviembre (Otoño rojizo) / Abril (Cerezos)',
        vibe: 'Zen, Tradicional, Espiritual',
        idioma: 'Japonés',
        moneda: 'JPY (¥)',
        transporte: 'Autobús y tren',
        seguridad: 'Excelente',
        rating: 4.9,
        descripcion: 'Corazón cultural japonés con más de 1000 templos, el bosque de bambú de Arashiyama y los torii rojos de Fushimi Inari.',
        lugaresClave: ['Fushimi Inari-taisha', 'Kinkaku-ji (Pabellón Dorado)', 'Bosque de Bambú Arashiyama', 'Distrito Gion', 'Kiyomizu-dera'],
        guiaUrl: null
      },
      {
        id: 'venecia',
        nombre: 'Venecia',
        pais: 'Italia',
        codigoPais: 'IT',
        continente: 'Europa',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80',
        presupuestoDia: 95,
        mejorEpoca: 'Abril a Junio / Septiembre a Octubre',
        vibe: 'Góndolas, Canales sin Autos, Máscaras, Romance',
        idioma: 'Italiano',
        moneda: 'EUR (€)',
        transporte: 'Vaporetto (autobús acuático) y caminata',
        seguridad: 'Muy alta',
        rating: 4.8,
        descripcion: 'Milagro arquitectónico sobre el agua: navega en góndola por el Gran Canal, cruza el Puente de Rialto y admira los mosaicos de la Plaza San Marcos.',
        lugaresClave: ['Plaza y Basílica de San Marcos', 'Palacio Ducal', 'Puente de Rialto', 'Paseo en Góndola por el Gran Canal', 'Islas de Murano y Burano'],
        guiaUrl: null
      },
      {
        id: 'florencia',
        nombre: 'Florencia',
        pais: 'Italia',
        codigoPais: 'IT',
        continente: 'Europa',
        estilo: 'cultura',
        img: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?w=800&q=80',
        presupuestoDia: 80,
        mejorEpoca: 'Abril a Junio / Septiembre a Octubre',
        vibe: 'Renacimiento, Escultura, Bistecca, Toscana',
        idioma: 'Italiano',
        moneda: 'EUR (€)',
        transporte: 'Caminata (todo está cerca)',
        seguridad: 'Alta',
        rating: 4.9,
        descripcion: 'Cuna del Renacimiento: la cúpula de Brunelleschi en el Duomo, el David original de Miguel Ángel y atardeceres mágicos desde Piazzale Michelangelo.',
        lugaresClave: ['Catedral Santa Maria del Fiore (Duomo)', 'Galería Uffizi', 'Ponte Vecchio', 'Galería de la Academia (David)', 'Piazzale Michelangelo'],
        guiaUrl: null
      },
      {
        id: 'cartagena',
        nombre: 'Cartagena de Indias',
        pais: 'Colombia',
        codigoPais: 'CO',
        continente: 'América del Sur',
        estilo: 'playa',
        img: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=800&q=80',
        presupuestoDia: 45,
        mejorEpoca: 'Diciembre a Abril (estación seca)',
        vibe: 'Colonial Caribeño, Murallas, Palenqueras, Islas',
        idioma: 'Español',
        moneda: 'COP ($)',
        transporte: 'Taxis y caminata por la Ciudad Vieja',
        seguridad: 'Buena dentro del cordón amurallado',
        rating: 4.8,
        descripcion: 'La joya colonial del Caribe: balcones floridos, murallas defensivas de piedra coralina, el barrio de Getsemaní y lanchas a las Islas del Rosario.',
        lugaresClave: ['Ciudad Amurallada', 'Castillo de San Felipe', 'Barrio Getsemaní', 'Islas del Rosario', 'Convento de la Popa'],
        guiaUrl: null
      },
      {
        id: 'reikiavik',
        nombre: 'Reikiavik',
        pais: 'Islandia',
        codigoPais: 'IS',
        continente: 'Europa',
        estilo: 'economico',
        img: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80',
        presupuestoDia: 130,
        mejorEpoca: 'Septiembre a Marzo (Auroras Boreales) / Junio a Agosto (Sol de Medianoche)',
        vibe: 'Auroras Boreales, Géiseres, Glaciares, Aguas Termales',
        idioma: 'Islandés / Inglés generalizado',
        moneda: 'ISK (kr)',
        transporte: 'Auto de alquiler 4x4 o tours organizados',
        seguridad: 'Insuperable (país más pacífico del mundo)',
        rating: 4.9,
        descripcion: 'Capital volcánica del Ártico: relájate en las aguas lechosas de la Laguna Azul, recorre el Círculo Dorado con géiseres y admira auroras boreales.',
        lugaresClave: ['Laguna Azul (Blue Lagoon)', 'Círculo Dorado (Geysir y Gullfoss)', 'Cascada Skógafoss', 'Playa Negra de Reynisfjara', 'Iglesia Hallgrímskirkja'],
        guiaUrl: null
      }
    ];
    window.PLUX_CURATED_DESTINATIONS = PLUX_CURATED_DESTINATIONS;

    const PLUX_CURATED_ACTIVITIES = [
      {
        id: 'act-coliseo',
        ciudad: 'Roma',
        nombre: 'Tour guiado por el Coliseo y Foro Romano',
        categoria: 'imperdibles',
        duracion: '180 min',
        costo: 35,
        reserva: 'Obligatoria',
        mejorMomento: 'Mañana temprano',
        descripcion: 'Explora el anfiteatro más famoso de la historia antigua y camina por las ruinas del Foro Romano y el Palatino.',
        rating: 4.9
      },
      {
        id: 'act-vaticano',
        ciudad: 'Roma',
        nombre: 'Museos Vaticanos y Capilla Sixtina',
        categoria: 'cultura',
        duracion: '210 min',
        costo: 30,
        reserva: 'Obligatoria',
        mejorMomento: 'Tarde',
        descripcion: 'Maravíllate con las obras maestras del Renacimiento y los frescos de Miguel Ángel en la Capilla Sixtina.',
        rating: 4.9
      },
      {
        id: 'act-trevi',
        ciudad: 'Roma',
        nombre: 'Lanzar una moneda en la Fontana di Trevi',
        categoria: 'gratis',
        duracion: '45 min',
        costo: 0,
        reserva: 'Libre',
        mejorMomento: 'Noche iluminada',
        descripcion: 'Tradición icónica de Roma. Visítala de noche cuando las luces iluminan el mármol barroco con menos multitud.',
        rating: 4.8
      },
      {
        id: 'act-shibuya',
        ciudad: 'Tokio',
        nombre: 'Cruce de Shibuya y Mirador Shibuya Sky',
        categoria: 'imperdibles',
        duracion: '90 min',
        costo: 20,
        reserva: 'Recomendada',
        mejorMomento: 'Atardecer',
        descripcion: 'El cruce peatonal más concurrido del planeta visto desde la calle y desde la terraza panorámica en 360 grados.',
        rating: 4.9
      },
      {
        id: 'act-sensoji',
        ciudad: 'Tokio',
        nombre: 'Paseo por el Templo Senso-ji y Asakusa',
        categoria: 'cultura',
        duracion: '120 min',
        costo: 0,
        reserva: 'Libre',
        mejorMomento: 'Mañana',
        descripcion: 'El templo budista más antiguo de Tokio con su puerta Kaminarimon y la calle comercial Nakamise-dori.',
        rating: 4.8
      },
      {
        id: 'act-eiffel',
        ciudad: 'París',
        nombre: 'Subida a la Torre Eiffel y picnic en Campos de Marte',
        categoria: 'imperdibles',
        duracion: '120 min',
        costo: 28,
        reserva: 'Recomendada',
        mejorMomento: 'Atardecer',
        descripcion: 'Vista panorámica de todo París desde las alturas y espectáculo de luces titilantes cada hora por la noche.',
        rating: 4.9
      },
      {
        id: 'act-louvre',
        ciudad: 'París',
        nombre: 'Recorrido por el Museo del Louvre',
        categoria: 'cultura',
        duracion: '180 min',
        costo: 22,
        reserva: 'Obligatoria',
        mejorMomento: 'Mañana',
        descripcion: 'Hogar de la Gioconda, la Victoria de Samotracia y miles de obras maestras en un palacio histórico.',
        rating: 4.8
      },
      {
        id: 'act-sagrada-familia',
        ciudad: 'Barcelona',
        nombre: 'Visita a la Basílica de la Sagrada Familia',
        categoria: 'imperdibles',
        duracion: '120 min',
        costo: 26,
        reserva: 'Obligatoria',
        mejorMomento: 'Mañana con sol',
        descripcion: 'La obra cumbre de Antoni Gaudí con sus vitrales que inundan el interior de luz y columnas arbóreas.',
        rating: 5.0
      },
      {
        id: 'act-park-guell',
        ciudad: 'Barcelona',
        nombre: 'Paseo por el Park Güell de Gaudí',
        categoria: 'naturaleza',
        duracion: '120 min',
        costo: 10,
        reserva: 'Recomendada',
        mejorMomento: 'Tarde',
        descripcion: 'Parque público con mosaicos coloridos, el dragón de trencadís y vistas abiertas sobre la ciudad y el mar.',
        rating: 4.8
      },
      {
        id: 'act-central-park',
        ciudad: 'Nueva York',
        nombre: 'Recorrido en bicicleta por Central Park',
        categoria: 'naturaleza',
        duracion: '150 min',
        costo: 15,
        reserva: 'Libre',
        mejorMomento: 'Mañana',
        descripcion: 'El pulmón verde de Manhattan con Bow Bridge, Bethesda Terrace, Strawberry Fields y senderos arbolados.',
        rating: 4.9
      },
      {
        id: 'act-teatro-colon',
        ciudad: 'Buenos Aires',
        nombre: 'Visita guiada al Teatro Colón',
        categoria: 'cultura',
        duracion: '75 min',
        costo: 12,
        reserva: 'Recomendada',
        mejorMomento: 'Mediodía',
        descripcion: 'Uno de los cinco mejores teatros de ópera del mundo por su acústica perfecta y arquitectura renacentista.',
        rating: 4.9
      },
      {
        id: 'act-british-museum',
        ciudad: 'Londres',
        nombre: 'Tesoros del Museo Británico y Covent Garden',
        categoria: 'cultura',
        duracion: '180 min',
        costo: 0,
        reserva: 'Recomendada',
        mejorMomento: 'Mañana',
        descripcion: 'Admira la Piedra Rosetta, momias egipcias y esculturas del Partenón con entrada completamente gratuita.',
        rating: 4.9
      },
      {
        id: 'act-london-eye',
        ciudad: 'Londres',
        nombre: 'Vistas en la noria panorámica London Eye',
        categoria: 'imperdibles',
        duracion: '45 min',
        costo: 35,
        reserva: 'Obligatoria',
        mejorMomento: 'Atardecer',
        descripcion: 'Gira sobre el río Támesis en cápsulas de vidrio con panorámica de 360 grados de todo el horizonte londinense.',
        rating: 4.8
      },
      {
        id: 'act-prado',
        ciudad: 'Madrid',
        nombre: 'Obras maestras del Museo del Prado',
        categoria: 'cultura',
        duracion: '150 min',
        costo: 15,
        reserva: 'Recomendada',
        mejorMomento: 'Tarde',
        descripcion: 'Las Meninas de Velázquez, las Pinturas Negras de Goya y El Jardín de las Delicias de El Bosco en uno de los mejores museos del planeta.',
        rating: 4.9
      },
      {
        id: 'act-retiro',
        ciudad: 'Madrid',
        nombre: 'Paseo en barca por el Parque del Retiro y Palacio de Cristal',
        categoria: 'naturaleza',
        duracion: '90 min',
        costo: 8,
        reserva: 'Libre',
        mejorMomento: 'Tarde con sol',
        descripcion: 'Rema en el estanque grande del Retiro y maravíllate con la estructura de hierro y cristal entre castaños y jardines.',
        rating: 4.8
      },
      {
        id: 'act-amsterdam-canales',
        ciudad: 'Ámsterdam',
        nombre: 'Crucero panorámico por los Canales de Ámsterdam',
        categoria: 'imperdibles',
        duracion: '75 min',
        costo: 18,
        reserva: 'Recomendada',
        mejorMomento: 'Atardecer',
        descripcion: 'Navega bajo puentes iluminados y fachadas inclinadas del siglo XVII con audioguía histórica y copa de cortesía.',
        rating: 4.9
      },
      {
        id: 'act-van-gogh',
        ciudad: 'Ámsterdam',
        nombre: 'Visita al Museo Van Gogh',
        categoria: 'cultura',
        duracion: '120 min',
        costo: 22,
        reserva: 'Obligatoria',
        mejorMomento: 'Mañana',
        descripcion: 'La colección más grande del mundo de Vincent van Gogh, incluyendo Los Girasoles, Almendro en Flor y sus autorretratos.',
        rating: 4.9
      },
      {
        id: 'act-muro-berlin',
        ciudad: 'Berlín',
        nombre: 'Recorrido por la East Side Gallery y Checkpoint Charlie',
        categoria: 'cultura',
        duracion: '120 min',
        costo: 0,
        reserva: 'Libre',
        mejorMomento: 'Mañana',
        descripcion: 'El tramo más largo en pie del Muro de Berlín convertido en galería de arte al aire libre con murales por la paz.',
        rating: 4.8
      },
      {
        id: 'act-belem-lisboa',
        ciudad: 'Lisboa',
        nombre: 'Torre de Belém y cata de Pastéis de Belém',
        categoria: 'imperdibles',
        duracion: '120 min',
        costo: 10,
        reserva: 'Recomendada',
        mejorMomento: 'Mañana',
        descripcion: 'Monumento manuelino patrimonio de la UNESCO a orillas del Tajo y degustación de los auténticos pasteles de nata recién horneados.',
        rating: 4.9
      },
      {
        id: 'act-machu-picchu',
        ciudad: 'Cusco y Machu Picchu',
        nombre: 'Expedición guiada a la Ciudadela Sagrada de Machu Picchu',
        categoria: 'imperdibles',
        duracion: '240 min',
        costo: 65,
        reserva: 'Obligatoria',
        mejorMomento: 'Mañana temprano',
        descripcion: 'Maravilla del mundo moderno: templos de piedra tallada, terrazas agrícolas andinas y vistas místicas del Huayna Picchu.',
        rating: 5.0
      },
      {
        id: 'act-teotihuacan',
        ciudad: 'Ciudad de México',
        nombre: 'Excursión a las Pirámides de Teotihuacán',
        categoria: 'cultura',
        duracion: '300 min',
        costo: 35,
        reserva: 'Recomendada',
        mejorMomento: 'Amanecer / Mañana',
        descripcion: 'Camina por la Calzada de los Muertos y admira la colosal Pirámide del Sol y de la Luna en la mítica ciudad de los dioses.',
        rating: 4.9
      },
      {
        id: 'act-corcovado',
        ciudad: 'Río de Janeiro',
        nombre: 'Subida en tren al Cristo Redentor del Corcovado',
        categoria: 'imperdibles',
        duracion: '150 min',
        costo: 25,
        reserva: 'Obligatoria',
        mejorMomento: 'Mañana con cielo despejado',
        descripcion: 'Tren centenario que atraviesa la selva de Tijuca hasta los pies de la monumental estatua con vistas de 360 grados de toda la bahía.',
        rating: 5.0
      },
      {
        id: 'act-golden-gate',
        ciudad: 'San Francisco',
        nombre: 'Cruce a pie o en bicicleta del Puente Golden Gate',
        categoria: 'imperdibles',
        duracion: '120 min',
        costo: 0,
        reserva: 'Libre',
        mejorMomento: 'Tarde despejada',
        descripcion: 'Camina sobre las aguas del Pacífico con vistas panorámicas de la bahía, la isla de Alcatraz y el skyline de la ciudad.',
        rating: 4.9
      },
      {
        id: 'act-burj-khalifa',
        ciudad: 'Dubái',
        nombre: 'Mirador en el piso 124 del Burj Khalifa',
        categoria: 'imperdibles',
        duracion: '90 min',
        costo: 45,
        reserva: 'Obligatoria',
        mejorMomento: 'Atardecer',
        descripcion: 'Sube al ascensor más rápido del mundo hasta la cima del rascacielos más alto de la Tierra con vistas sobre el desierto y el Golfo Pérsico.',
        rating: 4.8
      },
      {
        id: 'act-giza-piramides',
        ciudad: 'El Cairo',
        nombre: 'Paseo en camello por las Pirámides de Giza y la Esfinge',
        categoria: 'imperdibles',
        duracion: '180 min',
        costo: 30,
        reserva: 'Recomendada',
        mejorMomento: 'Mañana temprano',
        descripcion: 'Contempla la Gran Pirámide de Keops, la única maravilla del mundo antiguo aún en pie, y la mítica Esfinge milenaria.',
        rating: 4.9
      },
      {
        id: 'act-gondola-venecia',
        ciudad: 'Venecia',
        nombre: 'Paseo en Góndola tradicional por los Canales Secretos',
        categoria: 'imperdibles',
        duracion: '45 min',
        costo: 80,
        reserva: 'Recomendada',
        mejorMomento: 'Atardecer',
        descripcion: 'Experiencia veneciana única navegando bajo puentes de piedra histórica con el eco de las aguas y los palacios renacentistas.',
        rating: 4.9
      },
      {
        id: 'act-david-florencia',
        ciudad: 'Florencia',
        nombre: 'David de Miguel Ángel en la Galería de la Academia',
        categoria: 'cultura',
        duracion: '90 min',
        costo: 20,
        reserva: 'Obligatoria',
        mejorMomento: 'Mañana',
        descripcion: 'Admira en persona la perfección anatómica de la escultura más célebre de la historia del arte tallada en un solo bloque de mármol de Carrara.',
        rating: 4.9
      }
    ];

    const PLUX_NEARBY_GETAWAYS = {
      'roma': [
        { nombre: 'Florencia', tiempo: '1h 30m en tren alta velocidad', desc: 'Cuna del Renacimiento, Ponte Vecchio y Galería Uffizi.' },
        { nombre: 'Tívoli (Villa de Este y Villa Adriana)', tiempo: '45 min en tren', desc: 'Jardines renacentistas con fuentes espectaculares y ruinas imperiales.' },
        { nombre: 'Nápoles y Pompeya', tiempo: '1h 10m en tren', desc: 'La mejor pizza del mundo y la ciudad romana petrificada por el Vesubio.' }
      ],
      'tokio': [
        { nombre: 'Kamakura', tiempo: '55 min en tren', desc: 'Gran Buda de bronce al aire libre, templos costeros y playas.' },
        { nombre: 'Hakone y Monte Fuji', tiempo: '1h 20m en tren', desc: 'Aguas termales onsen, vistas del Fuji y paseo en barco por el lago Ashi.' },
        { nombre: 'Nikko', tiempo: '1h 50m en tren', desc: 'Santuarios dorados en medio de bosques milenarios de cedros.' }
      ],
      'paris': [
        { nombre: 'Palacio de Versalles', tiempo: '40 min en RER C', desc: 'Salón de los Espejos y majestuosos jardines reales de Luis XIV.' },
        { nombre: 'Giverny (Casa de Monet)', tiempo: '50 min en tren', desc: 'Los jardines de nenúfares y el puente japonés que inspiraron a Monet.' },
        { nombre: 'Mont Saint-Michel', tiempo: '3h en tren/tour', desc: 'Abadía gótica sobre un islote rocoso rodeado de mareas increíbles.' }
      ],
      'barcelona': [
        { nombre: 'Montserrat', tiempo: '1h en tren', desc: 'Monasterio enclavado en montañas con formaciones rocosas únicas.' },
        { nombre: 'Girona', tiempo: '40 min en AVE', desc: 'Casco histórico medieval, murallas y locaciones de series épicas.' },
        { nombre: 'Sitges', tiempo: '35 min en tren', desc: 'Pueblo costero blanco con playas, museos y animada vida gastronómica.' }
      ],
      'nuevayork': [
        { nombre: 'Filadelfia', tiempo: '1h 20m en tren', desc: 'Campana de la Libertad, Independence Hall y los escalones de Rocky.' },
        { nombre: 'Washington D.C.', tiempo: '3h en tren', desc: 'El Capitolio, Monumento a Lincoln y los museos gratuitos del Smithsonian.' }
      ],
      'buenosaires': [
        { nombre: 'Tigre y Delta del Paraná', tiempo: '50 min en tren', desc: 'Paseo en lancha colectiva por islas fluviales y Puerto de Frutos.' },
        { nombre: 'Colonia del Sacramento (Uruguay)', tiempo: '1h 15m en ferry', desc: 'Pueblo colonial portugués empedrado frente al Río de la Plata.' },
        { nombre: 'San Antonio de Areco', tiempo: '1h 30m en auto/bus', desc: 'Cuna de la tradición gaucha, platería criolla y estancias de campo.' }
      ],
      'londres': [
        { nombre: 'Oxford y sus Universidades', tiempo: '55 min en tren', desc: 'La ciudad de las agujas soñadoras, biblioteca Bodleiana y colegios de Harry Potter.' },
        { nombre: 'Stonehenge y Bath', tiempo: '1h 20m en tren', desc: 'El milenario círculo megalítico y las termas romanas de la época georgiana.' },
        { nombre: 'Cambridge y punting por el río Cam', tiempo: '50 min en tren', desc: 'Paseo en barca tradicional de pértiga bajo el Puente de los Suspiros de Cambridge.' }
      ],
      'madrid': [
        { nombre: 'Toledo Imperial', tiempo: '30 min en tren Avant', desc: 'Ciudad de las tres culturas con el Alcázar, la Catedral gótica y callejones empedrados.' },
        { nombre: 'Segovia y su Acueducto Romano', tiempo: '28 min en AVE', desc: 'Acueducto romano bimilenario, el Alcázar de cuento de hadas y cochinillo asado.' },
        { nombre: 'Ávila y sus Murallas Medievales', tiempo: '1h 15m en tren', desc: 'El recinto amurallado medieval mejor conservado de Europa.' }
      ],
      'amsterdam': [
        { nombre: 'Zaanse Schans', tiempo: '20 min en tren', desc: 'Molinos de viento históricos en funcionamiento, zuecos de madera y queserías.' },
        { nombre: 'Haarlem', tiempo: '15 min en tren', desc: 'Pueblo holandés tradicional con museos de Frans Hals, patios floridos y plazas.' }
      ],
      'cusco': [
        { nombre: 'Valle Sagrado de los Incas (Pisac y Ollantaytambo)', tiempo: '1h en bus/tour', desc: 'Mercado artesanal andino, terrazas agrícolas incas y fortalezas monolíticas.' },
        { nombre: 'Montaña de Siete Colores (Vinicunca)', tiempo: '3h en tour', desc: 'Impresionante formación mineral multicolor a 5.000 metros sobre el nivel del mar.' }
      ],
      'ciudaddemexico': [
        { nombre: 'Canales de Xochimilco', tiempo: '45 min en metro/taxi', desc: 'Fiesta tradicional en trajineras coloridas con mariachis y comida típica.' },
        { nombre: 'Puebla Colonial', tiempo: '2h en bus', desc: 'Catedral monumental, talavera poblana y el volcán Popocatépetl de fondo.' }
      ],
      'florencia': [
        { nombre: 'Siena y San Gimignano', tiempo: '1h 10m en bus/tour', desc: 'Plaza del Campo, torres medievales de piedra y cata de vino Chianti.' },
        { nombre: 'Pisa y su Torre Inclinada', tiempo: '50 min en tren', desc: 'La Piazza dei Miracoli con la torre campanario más famosa y fotografiada del mundo.' }
      ]
    };

    // Garantizar que la estructura HTML moderna del modal Descubrir exista
    function asegurarEstructuraModalDescubrir(modal) {
      if (!modal) return;
      const box = modal.querySelector('.descubrir-modal-box');
      const content = document.getElementById('descubrir-context-content');
      if (!box || !content) {
        modal.innerHTML = `
          <div class="descubrir-modal-box">
            <!-- Top Header -->
            <div class="descubrir-header">
              <div class="descubrir-header-left">
                <button class="mobile-back-btn" onclick="window.cerrarDescubrir()">
                  <i class="fa-solid fa-arrow-left"></i>
                  <span class="txt-volver">Volver</span>
                </button>
                <div class="descubrir-title-group">
                  <h2 id="descubrirTitle"><i class="fa-solid fa-compass" style="color:var(--verde); margin-right:8px;"></i>Descubrir</h2>
                  <span class="descubrir-subtitle" id="descubrirSubtitle">Inspiración, itinerarios inteligentes y comparador</span>
                </div>
              </div>
              <span class="close-panel" onclick="window.cerrarDescubrir()">&times;</span>
            </div>

            <!-- Navigation Tabs -->
            <div class="descubrir-nav-tabs">
              <button class="descubrir-tab-btn active" id="tabBtn-para_ti" onclick="window.cambiarTabDescubrir('para_ti')">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <span id="txtTabParaTi">Para ti</span>
              </button>
              <button class="descubrir-tab-btn" id="tabBtn-destinos" onclick="window.cambiarTabDescubrir('destinos')">
                <i class="fa-solid fa-earth-americas"></i>
                <span id="txtTabDestinos">Explorar Destinos</span>
              </button>
              <button class="descubrir-tab-btn" id="tabBtn-actividades" onclick="window.cambiarTabDescubrir('actividades')">
                <i class="fa-solid fa-ticket"></i>
                <span id="txtTabActividades">Actividades</span>
              </button>
              <button class="descubrir-tab-btn" id="tabBtn-comparador" onclick="window.cambiarTabDescubrir('comparador')">
                <i class="fa-solid fa-code-compare"></i>
                <span id="txtTabComparador">Comparador</span>
              </button>
            </div>

            <!-- Scrollable Tab Contents -->
            <div class="descubrir-body-container">
              <!-- Tab 1: Para ti (Contextual) -->
              <div class="descubrir-tab-pane active" id="pane-descubrir-para_ti">
                <div id="descubrir-context-content"></div>
              </div>

              <!-- Tab 2: Explorar Destinos -->
              <div class="descubrir-tab-pane" id="pane-descubrir-destinos">
                <div class="descubrir-search-filter-bar">
                  <div class="descubrir-search-input-wrapper">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" id="destinosSearchInput" placeholder="Buscar destino por ciudad, país o estilo..." oninput="window.filtrarDestinosDescubrir(this.value)">
                  </div>
                  <div class="descubrir-chips-filter" id="destinosCategoryChips">
                    <button class="filter-chip active" onclick="window.filtrarDestinosPorTag('todos', this)">Todos</button>
                    <button class="filter-chip" onclick="window.filtrarDestinosPorTag('cultura', this)">Cultura e Historia</button>
                    <button class="filter-chip" onclick="window.filtrarDestinosPorTag('playa', this)">Playa y Sol</button>
                    <button class="filter-chip" onclick="window.filtrarDestinosPorTag('gastronomia', this)">Gastronomía</button>
                    <button class="filter-chip" onclick="window.filtrarDestinosPorTag('metropolis', this)">Grandes Ciudades</button>
                    <button class="filter-chip" onclick="window.filtrarDestinosPorTag('economico', this)">Bajo Presupuesto</button>
                  </div>
                </div>
                <div class="descubrir-grid-destinos" id="gridDestinosCatalogo"></div>
              </div>

              <!-- Tab 3: Actividades & Experiencias -->
              <div class="descubrir-tab-pane" id="pane-descubrir-actividades">
                <div class="descubrir-search-filter-bar">
                  <div class="descubrir-search-input-wrapper">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" id="actividadesSearchInput" placeholder="Buscar actividad (ej: Museo, Mirador, Tour gastronómico)..." oninput="window.filtrarActividadesDescubrir(this.value)">
                  </div>
                  <div class="descubrir-chips-filter" id="actividadesCategoryChips">
                    <button class="filter-chip active" onclick="window.filtrarActividadesPorCategoria('todas', this)">Todas</button>
                    <button class="filter-chip" onclick="window.filtrarActividadesPorCategoria('imperdibles', this)">Imperdibles</button>
                    <button class="filter-chip" onclick="window.filtrarActividadesPorCategoria('cultura', this)">Museos y Arte</button>
                    <button class="filter-chip" onclick="window.filtrarActividadesPorCategoria('gastronomia', this)">Comida y Bebida</button>
                    <button class="filter-chip" onclick="window.filtrarActividadesPorCategoria('naturaleza', this)">Aire Libre</button>
                    <button class="filter-chip" onclick="window.filtrarActividadesPorCategoria('gratis', this)">Gratis / Económicas</button>
                  </div>
                </div>
                <div class="descubrir-grid-actividades" id="gridActividadesCatalogo"></div>
              </div>

              <!-- Tab 4: Comparador (Destinos & Actividades) -->
              <div class="descubrir-tab-pane" id="pane-descubrir-comparador">
                <div class="comparador-subswitch-wrapper">
                  <div class="comparador-subswitch">
                    <button class="subswitch-btn active" id="subswitch-destinos" onclick="window.cambiarSubswitchComparador('destinos')">
                      <i class="fa-solid fa-city"></i> Comparar Destinos
                    </button>
                    <button class="subswitch-btn" id="subswitch-actividades" onclick="window.cambiarSubswitchComparador('actividades')">
                      <i class="fa-solid fa-ticket-simple"></i> Comparar Actividades
                    </button>
                  </div>
                </div>

                <!-- Subsección Comparar Destinos -->
                <div id="comparador-seccion-destinos" class="comparador-seccion active">
                  <div class="comparador-selectors-row">
                    <div class="comp-select-box">
                      <label for="compDestino1"><i class="fa-solid fa-location-dot"></i> Destino 1</label>
                      <select id="compDestino1" onchange="window.actualizarComparativaDestinos()"></select>
                    </div>
                    <div class="comp-vs-badge">VS</div>
                    <div class="comp-select-box">
                      <label for="compDestino2"><i class="fa-solid fa-location-dot"></i> Destino 2</label>
                      <select id="compDestino2" onchange="window.actualizarComparativaDestinos()"></select>
                    </div>
                    <div class="comp-select-box comp-select-optional" id="compDestino3Wrapper">
                      <label for="compDestino3"><i class="fa-solid fa-location-dot"></i> Destino 3 (Opcional)</label>
                      <select id="compDestino3" onchange="window.actualizarComparativaDestinos()"></select>
                    </div>
                  </div>
                  <div id="comparador-destinos-resultado" class="comparador-resultado-container"></div>
                </div>

                <!-- Subsección Comparar Actividades -->
                <div id="comparador-seccion-actividades" class="comparador-seccion" style="display:none;">
                  <div class="comparador-selectors-row">
                    <div class="comp-select-box">
                      <label for="compActividad1"><i class="fa-solid fa-ticket"></i> Actividad 1</label>
                      <select id="compActividad1" onchange="window.actualizarComparativaActividades()"></select>
                    </div>
                    <div class="comp-vs-badge">VS</div>
                    <div class="comp-select-box">
                      <label for="compActividad2"><i class="fa-solid fa-ticket"></i> Actividad 2</label>
                      <select id="compActividad2" onchange="window.actualizarComparativaActividades()"></select>
                    </div>
                  </div>
                  <div id="comparador-actividades-resultado" class="comparador-resultado-container"></div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    }

    // Apertura y orquestación del modal Descubrir
    function abrirDescubrir() {
      const modal = document.getElementById('modal-descubrir');
      if (!modal) return;
      asegurarEstructuraModalDescubrir(modal);
      modal.style.display = 'flex';

      try {
        renderDescubrirParaTi();
      } catch (err) {
        console.error('Error in renderDescubrirParaTi:', err);
      }

      try {
        renderCatalogoDestinos('todos');
      } catch (err) {
        console.error('Error in renderCatalogoDestinos:', err);
      }

      try {
        renderCatalogoActividades('todas');
      } catch (err) {
        console.error('Error in renderCatalogoActividades:', err);
      }

      try {
        inicializarComparador();
      } catch (err) {
        console.error('Error in inicializarComparador:', err);
      }
    }

    function cerrarDescubrir() {
      const modal = document.getElementById('modal-descubrir');
      if (modal) modal.style.display = 'none';
    }

    window.abrirDescubrir = abrirDescubrir;
    window.cerrarDescubrir = cerrarDescubrir;
    window.abrirDescubrirModalUnified = abrirDescubrir;
    window.cerrarDescubrirModalUnified = cerrarDescubrir;

    function cambiarTabDescubrir(tabKey) {
      document.querySelectorAll('.descubrir-tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.descubrir-tab-pane').forEach(pane => pane.classList.remove('active'));

      const activeBtn = document.getElementById(`tabBtn-${tabKey}`);
      const activePane = document.getElementById(`pane-descubrir-${tabKey}`);

      if (activeBtn) activeBtn.classList.add('active');
      if (activePane) activePane.classList.add('active');
    }

    // ================== PESTAÑA 1: PARA TI (CONTEXTUAL) ==================
    function renderDescubrirParaTi() {
      const container = document.getElementById('descubrir-context-content');
      if (!container) return;

      const validDestinos = (typeof destinos !== 'undefined' && Array.isArray(destinos)) 
        ? destinos.filter(d => d && typeof d.nombre === 'string' && d.nombre.trim() !== '') 
        : [];
      const hasActiveTrip = (validDestinos.length > 0) || 
                            (typeof dias !== 'undefined' && Array.isArray(dias) && dias.length > 0);

      if (hasActiveTrip) {
        // MODO B: Usuario con viaje en planificación
        const nombresDestinos = (validDestinos.length > 0) 
          ? validDestinos.map(d => d.nombre).join(', ') 
          : 'Tu viaje en curso';

        const mainCity = (validDestinos.length > 0 && validDestinos[0].nombre) ? validDestinos[0].nombre.toLowerCase().trim() : '';

        // Buscar actividades que coincidan con las ciudades del viaje
        const ciudadesViaje = validDestinos.map(d => (d.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim());
        const actividadesRecomendadas = PLUX_CURATED_ACTIVITIES.filter(act => {
          const actCity = (act.ciudad || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
          return ciudadesViaje.some(c => c && (actCity.includes(c) || c.includes(actCity)));
        });

        // Buscar escapadas
        let escapadas = [];
        for (const c of ciudadesViaje) {
          if (!c) continue;
          for (const k in PLUX_NEARBY_GETAWAYS) {
            if (c.includes(k) || k.includes(c)) {
              escapadas = escapadas.concat(PLUX_NEARBY_GETAWAYS[k]);
            }
          }
        }

        let html = `
          <!-- Active Trip Banner -->
          <div class="descubrir-hero-banner">
            <div class="descubrir-hero-banner-content">
              <div class="descubrir-hero-badge"><i class="fa-solid fa-plane-departure"></i> Viaje en Planificación</div>
              <h3>Optimizando tu aventura en ${escapeHtml(nombresDestinos)}</h3>
              <p>Basado en tu itinerario actual, te recomendamos las mejores actividades para agregar a tus días y escapadas cercanas.</p>
            </div>
            <div>
              <button class="btn-card-secondary" onclick="window.cerrarDescubrir()" style="padding:10px 18px;">
                <i class="fa-solid fa-calendar-days"></i> Ver mi itinerario
              </button>
            </div>
          </div>
        `;

        // Actividades para tus destinos
        html += `
          <div class="descubrir-section-header" style="margin-top:24px;">
            <div>
              <h4><i class="fa-solid fa-star" style="color:#fbbf24;"></i> Actividades Imperdibles para tu viaje</h4>
              <p>Selecciona y añade directamente a cualquiera de los días de tu itinerario</p>
            </div>
          </div>
        `;

        if (actividadesRecomendadas.length > 0) {
          html += '<div class="descubrir-grid-actividades">';
          actividadesRecomendadas.forEach(act => {
            html += renderTarjetaActividadHTML(act, true);
          });
          html += '</div>';
        } else {
          html += `
            <div style="background:rgba(255,255,255,0.03); border:1px dashed rgba(255,255,255,0.15); border-radius:16px; padding:24px; text-align:center;">
              <p style="color:var(--gris); margin:0 0 12px 0;">Explorando atracciones para ${escapeHtml(nombresDestinos)}...</p>
              <button class="btn-card-primary" style="max-width:280px; margin:0 auto;" onclick="window.buscarLugaresPorDestino('${escapeHtml(validDestinos[0]?.nombre || '')}')">
                <i class="fa-solid fa-sparkles"></i> Buscar actividades con IA
              </button>
            </div>
          `;
        }

        // Escapadas cercanas
        if (escapadas.length > 0) {
          html += `
            <div class="descubrir-section-header" style="margin-top:30px;">
              <div>
                <h4><i class="fa-solid fa-route" style="color:#38bdf8;"></i> Escapadas y Destinos Cercanos (Day Trips)</h4>
                <p>Lugares que puedes visitar en el día desde tus destinos principales</p>
              </div>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
          `;
          escapadas.forEach(esc => {
            html += `
              <div style="background:rgba(15,23,42,0.65); border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:18px; display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong style="color:#ffffff; font-size:1.05rem;">${escapeHtml(esc.nombre)}</strong>
                  <span style="font-size:0.72rem; color:#38bdf8; background:rgba(56,189,248,0.12); padding:3px 8px; border-radius:8px; font-weight:700;">
                    <i class="fa-solid fa-train"></i> ${escapeHtml(esc.tiempo)}
                  </span>
                </div>
                <p style="font-size:0.83rem; color:rgba(255,255,255,0.75); margin:0; line-height:1.4;">${escapeHtml(esc.desc)}</p>
                <div style="margin-top:8px; text-align:right;">
                  <button class="btn-card-secondary" style="padding:6px 14px; font-size:0.78rem;" onclick="window.añadirDesdeFeed('Excursión a ${escapeHtml(esc.nombre)}')">
                    <i class="fa-solid fa-plus"></i> Añadir excursión
                  </button>
                </div>
              </div>
            `;
          });
          html += '</div>';
        }

        // Buscador IA Integrado
        html += `
          <div style="margin-top:30px; background:rgba(15,23,42,0.7); border:1px solid rgba(99,102,241,0.25); border-radius:20px; padding:22px;">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
              <i class="fa-solid fa-brain" style="color:#818cf8; font-size:1.2rem;"></i>
              <strong style="color:#ffffff; font-size:1rem;">Búsqueda Inteligente de Lugares con IA</strong>
            </div>
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
              <input type="text" id="aiCustomSearchInput" placeholder="Escribe cualquier ciudad o atracción (ej: Trastevere, Kioto, Montmartre)..." style="flex:1; min-width:240px; padding:12px 16px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); border-radius:12px; color:white; font-size:0.9rem; outline:none;">
              <button class="btn-card-primary" style="padding:10px 22px;" onclick="window.buscarLugaresPorDestino(document.getElementById('aiCustomSearchInput').value)">
                <i class="fa-solid fa-magnifying-glass"></i> Explorar
              </button>
            </div>
            <div id="feed-resultados" style="margin-top:16px;"></div>
          </div>
        `;

        container.innerHTML = html;

      } else {
        // MODO A: Sin viaje activo (Inspira y Recomienda Destinos)
        let html = `
          <!-- Hero Banner Sin Viaje -->
          <div class="descubrir-hero-banner" style="background:linear-gradient(135deg, rgba(16,185,129,0.2), rgba(56,189,248,0.2)); border-color:rgba(16,185,129,0.35);">
            <div class="descubrir-hero-banner-content">
              <div class="descubrir-hero-badge"><i class="fa-solid fa-compass"></i> Comienza una nueva aventura</div>
              <h3>¿A dónde quieres viajar en tu próxima escapada?</h3>
              <p>Elige un destino icónico o clona un itinerario de la comunidad con presupuesto y días ya organizados.</p>
            </div>
            <div>
              <button class="btn-card-primary" onclick="window.decisionViajeNuevo(); window.cerrarDescubrir();" style="padding:12px 22px; font-size:0.9rem;">
                <i class="fa-solid fa-plus"></i> Crear viaje desde cero
              </button>
            </div>
          </div>

          <!-- Destinos Destacados en Tendencia -->
          <div class="descubrir-section-header" style="margin-top:24px;">
            <div>
              <h4><i class="fa-solid fa-fire" style="color:#f43f5e;"></i> Destinos Más Populares y en Tendencia</h4>
              <p>Guías detalladas con presupuestos diarios estimados e itinerarios recomendados</p>
            </div>
          </div>
          <div class="descubrir-grid-destinos">
        `;

        PLUX_CURATED_DESTINATIONS.slice(0, 12).forEach(dest => {
          html += renderTarjetaDestinoHTML(dest);
        });

        html += `
          </div>
          <div style="text-align:center; margin-top:24px;">
            <button class="btn-card-secondary" style="padding:12px 28px; font-size:0.92rem;" onclick="window.cambiarTabDescubrir('destinos')">
              <i class="fa-solid fa-earth-americas"></i> Ver el catálogo completo de destinos (${PLUX_CURATED_DESTINATIONS.length})
            </button>
          </div>

          <!-- Plantillas Listas para Usar -->
          <div class="descubrir-section-header" style="margin-top:34px;">
            <div>
              <h4><i class="fa-solid fa-layer-group" style="color:#a855f7;"></i> Plantillas de Viaje Listas para Usar</h4>
              <p>Empieza en segundos con un plan completo día por día</p>
            </div>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
            <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:18px; display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
              <div>
                <span style="font-size:0.75rem; color:var(--verde); font-weight:700; text-transform:uppercase;">4 Días · Italia</span>
                <h5 style="color:#ffffff; font-size:1.1rem; margin:4px 0 6px 0;">Roma Clásica e Historia</h5>
                <p style="font-size:0.82rem; color:var(--gris); margin:0;">Coliseo, Vaticano, Trastevere y paseo nocturno de fuentes.</p>
              </div>
              <button class="btn-card-primary" onclick="window.location.href='/join/plantillas/roma'">
                <i class="fa-solid fa-clone"></i> Usar Plantilla Roma
              </button>
            </div>
            <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:18px; display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
              <div>
                <span style="font-size:0.75rem; color:#38bdf8; font-weight:700; text-transform:uppercase;">7 Días · Japón</span>
                <h5 style="color:#ffffff; font-size:1.1rem; margin:4px 0 6px 0;">Tokio Futurista y Tradición</h5>
                <p style="font-size:0.82rem; color:var(--gris); margin:0;">Shibuya, Asakusa, Akihabara, miradores y gastronomía nipona.</p>
              </div>
              <button class="btn-card-primary" onclick="window.location.href='/join/plantillas/tokio'">
                <i class="fa-solid fa-clone"></i> Usar Plantilla Tokio
              </button>
            </div>
            <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:18px; display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
              <div>
                <span style="font-size:0.75rem; color:#fbbf24; font-weight:700; text-transform:uppercase;">3 Días · España</span>
                <h5 style="color:#ffffff; font-size:1.1rem; margin:4px 0 6px 0;">Barcelona y el Mediterráneo</h5>
                <p style="font-size:0.82rem; color:var(--gris); margin:0;">Sagrada Familia, Park Güell, Barrio Gótico y playa.</p>
              </div>
              <button class="btn-card-primary" onclick="window.location.href='/join/plantillas/barcelona'">
                <i class="fa-solid fa-clone"></i> Usar Plantilla Barcelona
              </button>
            </div>
          </div>
        `;

        container.innerHTML = html;
      }
    }

    // Render HTML de Tarjeta de Destino
    function renderTarjetaDestinoHTML(dest) {
      const estiloLabels = {
        cultura: 'Cultura e Historia',
        playa: 'Playa y Relax',
        gastronomia: 'Gastronomía',
        metropolis: 'Gran Metrópolis',
        economico: 'Bajo Presupuesto'
      };

      const guiaBtn = dest.guiaUrl ? `
        <button class="btn-card-secondary" onclick="window.location.href='${dest.guiaUrl}'" title="Ver guía turística completa">
          <i class="fa-solid fa-book-open"></i> Guía
        </button>
      ` : '';

      return `
        <div class="dest-card-rich">
          <div class="dest-card-rich-img" style="background-image: url('${dest.img}');">
            <div class="dest-card-rich-overlay">
              <div class="dest-card-top-badges">
                <span class="dest-country-badge">${dest.codigoPais} · ${escapeHtml(dest.pais)}</span>
                <span class="dest-rating-badge"><i class="fa-solid fa-star"></i> ${dest.rating}</span>
              </div>
            </div>
          </div>
          <div class="dest-card-rich-content">
            <div class="dest-card-title-row">
              <h5>${escapeHtml(dest.nombre)}</h5>
              <span class="dest-card-budget">~$${dest.presupuestoDia} USD / día</span>
            </div>
            <p class="dest-card-desc">${escapeHtml(dest.descripcion)}</p>
            <div class="dest-card-tags">
              <span class="dest-tag-pill"><i class="fa-solid fa-tag"></i> ${estiloLabels[dest.estilo] || dest.estilo}</span>
              <span class="dest-tag-pill"><i class="fa-solid fa-calendar"></i> ${escapeHtml(dest.mejorEpoca.split('/')[0])}</span>
            </div>
            <div class="dest-card-actions">
              <button class="btn-card-primary" onclick="window.empezarViajeDesdeDescubrir('${escapeHtml(dest.nombre)}')">
                <i class="fa-solid fa-plane"></i> Planear Viaje
              </button>
              ${guiaBtn}
              <button class="btn-card-secondary" onclick="window.seleccionarEnComparador('${dest.id}')" title="Comparar este destino">
                <i class="fa-solid fa-code-compare"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // Render HTML de Tarjeta de Actividad
    function renderTarjetaActividadHTML(act, showAddDropdown = true) {
      const catLabels = {
        imperdibles: 'Imperdible',
        cultura: 'Cultura y Arte',
        gastronomia: 'Comida y Bebida',
        naturaleza: 'Aire Libre',
        gratis: 'Gratis'
      };

      const precioTxt = act.costo === 0 ? 'Gratis' : `~$${act.costo} USD`;

      return `
        <div class="activity-card-rich">
          <div class="activity-card-header">
            <div>
              <span style="font-size:0.75rem; color:#38bdf8; font-weight:700; text-transform:uppercase;">${escapeHtml(act.ciudad)}</span>
              <h5>${escapeHtml(act.nombre)}</h5>
            </div>
            <span class="activity-card-cat-badge">${catLabels[act.categoria] || act.categoria}</span>
          </div>
          <p class="activity-card-desc">${escapeHtml(act.descripcion)}</p>
          <div class="activity-card-meta">
            <span class="activity-meta-item"><i class="fa-regular fa-clock"></i> ${escapeHtml(act.duracion)}</span>
            <span class="activity-meta-item"><i class="fa-solid fa-sun"></i> ${escapeHtml(act.mejorMomento)}</span>
            <span class="activity-meta-item"><i class="fa-solid fa-ticket"></i> ${escapeHtml(act.reserva)}</span>
          </div>
          <div class="activity-card-footer">
            <span class="activity-price-tag">${precioTxt}</span>
            <button class="btn-add-activity-trip" onclick="window.añadirDesdeFeed('${escapeHtml(act.nombre)}', ${act.costo}, '${escapeHtml(act.duracion)}')">
              <i class="fa-solid fa-plus"></i> Añadir al viaje
            </button>
          </div>
        </div>
      `;
    }

    // ================== PESTAÑA 2: EXPLORAR DESTINOS ==================
    let currentDestinosFilter = 'todos';
    let currentDestinosSearch = '';

    function renderCatalogoDestinos(tagFiltro = 'todos') {
      currentDestinosFilter = tagFiltro;
      const grid = document.getElementById('gridDestinosCatalogo');
      if (!grid) return;

      const filtrados = PLUX_CURATED_DESTINATIONS.filter(d => {
        const matchesTag = (currentDestinosFilter === 'todos') || (d.estilo === currentDestinosFilter);
        const q = currentDestinosSearch.toLowerCase().trim();
        const matchesSearch = !q || d.nombre.toLowerCase().includes(q) || d.pais.toLowerCase().includes(q) || d.continente.toLowerCase().includes(q);
        return matchesTag && matchesSearch;
      });

      if (filtrados.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; padding:40px; text-align:center; color:var(--gris);">
            <i class="fa-solid fa-magnifying-glass" style="font-size:2rem; margin-bottom:12px; display:block; opacity:0.4;"></i>
            No encontramos destinos con ese filtro. Prueba otra búsqueda.
          </div>
        `;
        return;
      }

      let html = '';
      filtrados.forEach(dest => {
        html += renderTarjetaDestinoHTML(dest);
      });
      grid.innerHTML = html;
    }

    function filtrarDestinosPorTag(tag, btnEl) {
      if (btnEl) {
        document.querySelectorAll('#destinosCategoryChips .filter-chip').forEach(c => c.classList.remove('active'));
        btnEl.classList.add('active');
      }
      renderCatalogoDestinos(tag);
    }

    function filtrarDestinosDescubrir(val) {
      currentDestinosSearch = val || '';
      renderCatalogoDestinos(currentDestinosFilter);
    }

    // ================== PESTAÑA 3: ACTIVIDADES ==================
    let currentActividadesFilter = 'todas';
    let currentActividadesSearch = '';

    function renderCatalogoActividades(catFiltro = 'todas') {
      currentActividadesFilter = catFiltro;
      const grid = document.getElementById('gridActividadesCatalogo');
      if (!grid) return;

      const filtradas = PLUX_CURATED_ACTIVITIES.filter(a => {
        const matchesCat = (currentActividadesFilter === 'todas') || (a.categoria === currentActividadesFilter);
        const q = currentActividadesSearch.toLowerCase().trim();
        const matchesSearch = !q || a.nombre.toLowerCase().includes(q) || a.ciudad.toLowerCase().includes(q) || a.descripcion.toLowerCase().includes(q);
        return matchesCat && matchesSearch;
      });

      if (filtradas.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; padding:40px; text-align:center; color:var(--gris);">
            <i class="fa-solid fa-ticket" style="font-size:2rem; margin-bottom:12px; display:block; opacity:0.4;"></i>
            No se encontraron actividades con ese criterio.
          </div>
        `;
        return;
      }

      let html = '';
      filtradas.forEach(act => {
        html += renderTarjetaActividadHTML(act);
      });
      grid.innerHTML = html;
    }

    function filtrarActividadesPorCategoria(cat, btnEl) {
      if (btnEl) {
        document.querySelectorAll('#actividadesCategoryChips .filter-chip').forEach(c => c.classList.remove('active'));
        btnEl.classList.add('active');
      }
      renderCatalogoActividades(cat);
    }

    function filtrarActividadesDescubrir(val) {
      currentActividadesSearch = val || '';
      renderCatalogoActividades(currentActividadesFilter);
    }

    // ================== PESTAÑA 4: COMPARADOR ==================
    function inicializarComparador() {
      const sel1 = document.getElementById('compDestino1');
      const sel2 = document.getElementById('compDestino2');
      const sel3 = document.getElementById('compDestino3');

      if (sel1 && sel2 && sel3) {
        let opts = '';
        PLUX_CURATED_DESTINATIONS.forEach(d => {
          opts += `<option value="${d.id}">${escapeHtml(d.nombre)} (${escapeHtml(d.pais)})</option>`;
        });
        sel1.innerHTML = opts;
        sel2.innerHTML = opts;
        sel3.innerHTML = `<option value="">-- Ninguno (Comparar 2) --</option>` + opts;

        sel1.value = 'roma';
        sel2.value = 'tokio';
        sel3.value = '';

        actualizarComparativaDestinos();
      }

      // Actividades select
      const actSel1 = document.getElementById('compActividad1');
      const actSel2 = document.getElementById('compActividad2');
      if (actSel1 && actSel2) {
        let actOpts = '';
        PLUX_CURATED_ACTIVITIES.forEach(a => {
          actOpts += `<option value="${a.id}">${escapeHtml(a.ciudad)}: ${escapeHtml(a.nombre)}</option>`;
        });
        actSel1.innerHTML = actOpts;
        actSel2.innerHTML = actOpts;

        if (PLUX_CURATED_ACTIVITIES[0]) actSel1.value = PLUX_CURATED_ACTIVITIES[0].id;
        if (PLUX_CURATED_ACTIVITIES[1]) actSel2.value = PLUX_CURATED_ACTIVITIES[1].id;

        actualizarComparativaActividades();
      }
    }

    function cambiarSubswitchComparador(tipo) {
      document.querySelectorAll('.subswitch-btn').forEach(b => b.classList.remove('active'));
      const btn = document.getElementById(`subswitch-${tipo}`);
      if (btn) btn.classList.add('active');

      const secDestinos = document.getElementById('comparador-seccion-destinos');
      const secActividades = document.getElementById('comparador-seccion-actividades');

      if (tipo === 'destinos') {
        if (secDestinos) secDestinos.style.display = 'block';
        if (secActividades) secActividades.style.display = 'none';
        actualizarComparativaDestinos();
      } else {
        if (secDestinos) secDestinos.style.display = 'none';
        if (secActividades) secActividades.style.display = 'block';
        actualizarComparativaActividades();
      }
    }

    function seleccionarEnComparador(destId) {
      cambiarTabDescubrir('comparador');
      cambiarSubswitchComparador('destinos');
      const sel2 = document.getElementById('compDestino2');
      if (sel2) {
        sel2.value = destId;
        actualizarComparativaDestinos();
      }
    }

    function actualizarComparativaDestinos() {
      const d1Id = document.getElementById('compDestino1')?.value;
      const d2Id = document.getElementById('compDestino2')?.value;
      const d3Id = document.getElementById('compDestino3')?.value;
      const resContainer = document.getElementById('comparador-destinos-resultado');
      if (!resContainer) return;

      const selected = [
        PLUX_CURATED_DESTINATIONS.find(d => d.id === d1Id),
        PLUX_CURATED_DESTINATIONS.find(d => d.id === d2Id),
        PLUX_CURATED_DESTINATIONS.find(d => d.id === d3Id)
      ].filter(Boolean);

      if (selected.length < 2) {
        resContainer.innerHTML = '<p style="color:var(--gris); text-align:center; padding:20px;">Selecciona al menos 2 destinos para comparar.</p>';
        return;
      }

      let html = '<div class="comp-matrix-grid">';
      selected.forEach(d => {
        html += `
          <div class="comp-matrix-card">
            <div class="comp-matrix-hero">
              <img src="${d.img}" alt="${escapeHtml(d.nombre)}" class="comp-matrix-hero-img">
              <div class="comp-matrix-hero-text">
                <h4>${escapeHtml(d.nombre)}</h4>
                <span>${escapeHtml(d.pais)} · ${d.codigoPais}</span>
              </div>
            </div>
            <div class="comp-metrics-list">
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-solid fa-coins"></i> Presupuesto / día</span>
                <span class="comp-metric-value highlight-green">~$${d.presupuestoDia} USD</span>
              </div>
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-solid fa-star"></i> Puntuación Plux</span>
                <span class="comp-metric-value highlight-blue">${d.rating} / 5.0</span>
              </div>
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-solid fa-cloud-sun"></i> Mejor época</span>
                <span class="comp-metric-value" style="font-size:0.75rem;">${escapeHtml(d.mejorEpoca)}</span>
              </div>
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-solid fa-heart"></i> Vibe de viaje</span>
                <span class="comp-metric-value" style="font-size:0.75rem;">${escapeHtml(d.vibe)}</span>
              </div>
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-solid fa-train-subway"></i> Movilidad</span>
                <span class="comp-metric-value">${escapeHtml(d.transporte)}</span>
              </div>
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-solid fa-shield-halved"></i> Seguridad</span>
                <span class="comp-metric-value">${escapeHtml(d.seguridad)}</span>
              </div>
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-solid fa-money-bill"></i> Moneda / Idioma</span>
                <span class="comp-metric-value">${escapeHtml(d.moneda)} / ${escapeHtml(d.idioma)}</span>
              </div>
              <div style="margin-top:6px;">
                <span class="comp-metric-label" style="margin-bottom:6px;"><i class="fa-solid fa-monument"></i> Lugares icónicos:</span>
                <div style="display:flex; flex-wrap:wrap; gap:4px;">
                  ${d.lugaresClave.map(l => `<span class="dest-tag-pill">${escapeHtml(l)}</span>`).join('')}
                </div>
              </div>
            </div>
            <div style="margin-top:auto; padding-top:12px;">
              <button class="btn-card-primary" style="width:100%;" onclick="window.empezarViajeDesdeDescubrir('${escapeHtml(d.nombre)}')">
                <i class="fa-solid fa-check"></i> Elegir ${escapeHtml(d.nombre)}
              </button>
            </div>
          </div>
        `;
      });
      html += '</div>';

      resContainer.innerHTML = html;
    }

    function actualizarComparativaActividades() {
      const a1Id = document.getElementById('compActividad1')?.value;
      const a2Id = document.getElementById('compActividad2')?.value;
      const resContainer = document.getElementById('comparador-actividades-resultado');
      if (!resContainer) return;

      const act1 = PLUX_CURATED_ACTIVITIES.find(a => a.id === a1Id);
      const act2 = PLUX_CURATED_ACTIVITIES.find(a => a.id === a2Id);

      if (!act1 || !act2) {
        resContainer.innerHTML = '<p style="color:var(--gris); text-align:center; padding:20px;">Selecciona 2 actividades para comparar.</p>';
        return;
      }

      const items = [act1, act2];
      let html = '<div class="comp-matrix-grid">';
      items.forEach(a => {
        html += `
          <div class="comp-matrix-card">
            <div class="comp-matrix-hero">
              <div style="width:48px; height:48px; background:linear-gradient(135deg, #6366f1, #8b5cf6); border-radius:12px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.4rem;">
                <i class="fa-solid fa-ticket"></i>
              </div>
              <div class="comp-matrix-hero-text">
                <h4 style="font-size:1.1rem;">${escapeHtml(a.nombre)}</h4>
                <span>${escapeHtml(a.ciudad)}</span>
              </div>
            </div>
            <p style="font-size:0.83rem; color:rgba(255,255,255,0.75); margin:0;">${escapeHtml(a.descripcion)}</p>
            <div class="comp-metrics-list">
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-solid fa-coins"></i> Costo estimado</span>
                <span class="comp-metric-value highlight-green">${a.costo === 0 ? 'Gratis' : `~$${a.costo} USD`}</span>
              </div>
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-regular fa-clock"></i> Duración sugerida</span>
                <span class="comp-metric-value">${escapeHtml(a.duracion)}</span>
              </div>
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-solid fa-sun"></i> Momento ideal</span>
                <span class="comp-metric-value highlight-blue">${escapeHtml(a.mejorMomento)}</span>
              </div>
              <div class="comp-metric-row">
                <span class="comp-metric-label"><i class="fa-solid fa-ticket"></i> Tipo de reserva</span>
                <span class="comp-metric-value">${escapeHtml(a.reserva)}</span>
              </div>
            </div>
            <div style="margin-top:auto; padding-top:12px;">
              <button class="btn-add-activity-trip" style="width:100%; justify-content:center; padding:10px;" onclick="window.añadirDesdeFeed('${escapeHtml(a.nombre)}', ${a.costo}, '${escapeHtml(a.duracion)}')">
                <i class="fa-solid fa-plus"></i> Añadir a mi itinerario
              </button>
            </div>
          </div>
        `;
      });
      html += '</div>';

      resContainer.innerHTML = html;
    }

    // Acción para empezar viaje desde un destino elegido
    function empezarViajeDesdeDescubrir(ciudad) {
      cerrarDescubrir();
      if (typeof window.decisionViajeNuevo === 'function') {
        window.decisionViajeNuevo();
      }
      setTimeout(() => {
        const destInput = document.getElementById('nuevoDestino');
        if (destInput) {
          destInput.value = ciudad;
        }
        if (typeof window.agregarDestino === 'function') {
          window.agregarDestino();
        }
        if (typeof window.showToast === 'function') {
          window.showToast(`Destino ${ciudad} añadido a tu nuevo viaje`, 'success');
        }
      }, 250);
    }

    // Acción para añadir actividad desde el feed al viaje
    function añadirDesdeFeed(titulo, costo = 0, duracion = '60') {
      if (!titulo) return;

      // Asegurar que exista al menos un día
      if (!dias || dias.length === 0) {
        if (typeof agregarDia === 'function') {
          agregarDia();
        } else {
          dias = [{ fecha: '', eventos: [] }];
        }
      }

      const durMin = parseInt(duracion) || 60;
      const targetDiaIndex = 0; // Añadir al primer día o día activo

      if (!dias[targetDiaIndex].eventos) {
        dias[targetDiaIndex].eventos = [];
      }

      dias[targetDiaIndex].eventos.push({
        hora: '10:00',
        titulo: titulo,
        notas: 'Añadido desde Descubrir Plux',
        costo: Number(costo) || 0,
        duracion: durMin,
        categoria: 'Turismo'
      });

      if (typeof renderizarEventosDia === 'function') {
        renderizarEventosDia();
      }
      if (typeof guardarViajeAutomatico === 'function') {
        guardarViajeAutomatico();
      }

      if (typeof window.showToast === 'function') {
        window.showToast(`"${titulo}" añadido a tu viaje`, 'success');
      } else {
        alert(`"${titulo}" añadido al día 1`);
      }
    }

    // Búsqueda IA asistente
    async function buscarLugaresPorDestino(ciudad) {
      if (!ciudad) return;
      const resultados = document.getElementById('feed-resultados');
      if (!resultados) return;
      resultados.innerHTML = `<p style="color:var(--gris); padding:25px; text-align:center; font-size:1.05rem; animation:pulse 1s infinite;"><i class="fa-solid fa-sparkles" style="color:var(--verde);"></i> Analizando ${escapeHtml(ciudad)} con IA...</p>`;
      
      try {
        const prompt = `Eres un experto guía turístico. Recomienda 6 lugares o actividades imperdibles en ${ciudad}. Devuelve ESTRICTAMENTE un JSON: {"lugares":[{"titulo":"Nombre","descripcion":"Breve descripción","costo":15,"duracion":"90 min"}]}`;
        const textContent = await callAI(prompt);
        if (!textContent) throw new Error('No response');
        
        const jsonStr = textContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const suggestions = JSON.parse(jsonStr);
        
        let html = '<div class="descubrir-grid-actividades" style="margin-top:16px;">';
        suggestions.lugares.forEach(p => {
          html += `
            <div class="activity-card-rich">
              <div class="activity-card-header">
                <div>
                  <span style="font-size:0.75rem; color:var(--verde); font-weight:700; text-transform:uppercase;">${escapeHtml(ciudad)}</span>
                  <h5>${escapeHtml(p.titulo)}</h5>
                </div>
                <span class="activity-card-cat-badge">Recomendado IA</span>
              </div>
              <p class="activity-card-desc">${escapeHtml(p.descripcion)}</p>
              <div class="activity-card-meta">
                <span class="activity-meta-item"><i class="fa-regular fa-clock"></i> ${escapeHtml(p.duracion || '60 min')}</span>
                <span class="activity-meta-item"><i class="fa-solid fa-coins"></i> ~$${p.costo || 0} USD</span>
              </div>
              <div class="activity-card-footer">
                <span class="activity-price-tag">${p.costo ? `~$${p.costo} USD` : 'Gratis / Consulta'}</span>
                <button class="btn-add-activity-trip" onclick="window.añadirDesdeFeed('${escapeHtml(p.titulo)}', ${p.costo || 0}, '${escapeHtml(p.duracion || '60')}')">
                  <i class="fa-solid fa-plus"></i> Añadir
                </button>
              </div>
            </div>
          `;
        });
        html += '</div>';
        resultados.innerHTML = html;
      } catch(e) {
        console.error('AI Feed Error:', e);
        resultados.innerHTML = '<p style="color:var(--gris); padding:20px; text-align:center;">No se pudo completar la consulta con IA. Intenta con otro término.</p>';
      }
    }

    // Exponer funciones en window
    window.abrirDescubrir = abrirDescubrir;
    window.cerrarDescubrir = cerrarDescubrir;
    window.cambiarTabDescubrir = cambiarTabDescubrir;
    window.renderDescubrirParaTi = renderDescubrirParaTi;
    window.renderCatalogoDestinos = renderCatalogoDestinos;
    window.renderCatalogoActividades = renderCatalogoActividades;
    window.filtrarDestinosPorTag = filtrarDestinosPorTag;
    window.filtrarDestinosDescubrir = filtrarDestinosDescubrir;
    window.filtrarActividadesPorCategoria = filtrarActividadesPorCategoria;
    window.filtrarActividadesDescubrir = filtrarActividadesDescubrir;
    window.inicializarComparador = inicializarComparador;
    window.cambiarSubswitchComparador = cambiarSubswitchComparador;
    window.seleccionarEnComparador = seleccionarEnComparador;
    window.actualizarComparativaDestinos = actualizarComparativaDestinos;
    window.actualizarComparativaActividades = actualizarComparativaActividades;
    window.empezarViajeDesdeDescubrir = empezarViajeDesdeDescubrir;
    window.añadirDesdeFeed = añadirDesdeFeed;
    window.buscarLugaresPorDestino = buscarLugaresPorDestino;

    async function verDetalleLugar(pageid, titulo) {
        const modal = document.getElementById('modal-detalle-lugar');
        const body = document.getElementById('detalleLugarBody');
        modal.style.display = 'flex';
        body.innerHTML = `<div style="text-align:center; padding:40px; color:var(--gris);">${t('weather_loading') || 'Cargando...'}</div>`;
        
        try {
            const url = `https://es.wikipedia.org/w/api.php?action=query&prop=pageimages|extracts&exintro&explaintext&pithumbsize=600&pageids=${pageid}&format=json&origin=*`;
            const resp = await fetch(url);
            const data = await resp.json();
            const page = data.query.pages[pageid];
            
            const imgSrc = (page && page.thumbnail) ? page.thumbnail.source : '';
            const summary = page ? page.extract : 'Sin descripción disponible.';
            
            body.innerHTML = `
                ${imgSrc ? `<img src="${imgSrc}" style="width:100%; border-radius:16px; margin-bottom:20px; box-shadow:0 10px 30px rgba(0,0,0,0.5);">` : ''}
                <h2 style="color:var(--rosa); margin-bottom:15px;">${titulo}</h2>
                <p style="color:var(--texto); line-height:1.6; margin-bottom:25px; font-size:1.1rem;">${summary}</p>
                <div style="display:flex; gap:10px;">
                    <button class="btn-add-feed" style="flex:1; padding:15px;" onclick="añadirDesdeFeed('${titulo.replace(/'/g, "\\'")}'); document.getElementById('modal-detalle-lugar').style.display='none';">Añadir a mi viaje</button>
                    <button class="btn-add-feed" style="background:var(--gris); flex:1;" onclick="window.open('https://es.wikipedia.org/?curid=${pageid}','_blank')">Ver en Wikipedia</button>
                </div>
            `;
        } catch(e) {
            body.innerHTML = `<p style="color:var(--gris);">Error al cargar detalles.</p>`;
        }
    }

