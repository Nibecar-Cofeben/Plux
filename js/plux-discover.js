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
      if (!box || !content || !document.getElementById('tabBtn-reservas') || !document.getElementById('tabBtn-comunidad')) {
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
              <button class="descubrir-tab-btn" id="tabBtn-embajadores" onclick="window.cambiarTabDescubrir('embajadores')">
                <i class="fa-solid fa-award" style="color:var(--verde);"></i>
                <span id="txtTabEmbajadores">Embajadores</span>
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
              <button class="descubrir-tab-btn" id="tabBtn-reservas" onclick="window.cambiarTabDescubrir('reservas')">
                <i class="fa-solid fa-file-import"></i>
                <span id="txtTabReservas">Importar Reservas</span>
              </button>
              <button class="descubrir-tab-btn" id="tabBtn-comunidad" onclick="window.cambiarTabDescubrir('comunidad')">
                <i class="fa-solid fa-comments"></i>
                <span id="txtTabComunidad">Comunidad y Foros</span>
              </button>
            </div>

            <!-- Scrollable Tab Contents -->
            <div class="descubrir-body-container">
              <!-- Tab 1: Para ti (Contextual) -->
              <div class="descubrir-tab-pane active" id="pane-descubrir-para_ti">
                <div id="descubrir-context-content"></div>
              </div>

              <!-- Tab Embajadores Fundadores -->
              <div class="descubrir-tab-pane" id="pane-descubrir-embajadores">
                <div id="descubrir-embajadores-content"></div>
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

              <!-- Tab 5: Importar Mails y Reservas -->
              <div class="descubrir-tab-pane" id="pane-descubrir-reservas">
                <div id="descubrir-reservas-content"></div>
              </div>

              <!-- Tab 6: Comunidad: Foros y Más -->
              <div class="descubrir-tab-pane" id="pane-descubrir-comunidad">
                <div id="descubrir-comunidad-content"></div>
              </div>
            </div>
          </div>
        `;
      }
    }

    // Apertura y orquestación del modal Descubrir
    function abrirDescubrir(initialTab) {
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

      try {
        renderizarImportadorReservas();
      } catch (err) {
        console.error('Error in renderizarImportadorReservas:', err);
      }

      try {
        renderizarComunidadForos();
      } catch (err) {
        console.error('Error in renderizarComunidadForos:', err);
      }

      if (initialTab && typeof initialTab === 'string') {
        cambiarTabDescubrir(initialTab);
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

    function buildEmbajadorSpotlightBannerHtml() {
      const embs = Array.isArray(window.PLUX_EMBAJADORES) ? window.PLUX_EMBAJADORES : [];
      if (!embs.length) return '';
      const emb = embs[0];
      const seal = typeof window.getEmbajadorSealSvg === 'function' ? window.getEmbajadorSealSvg(15) : '';
      const rutas = typeof window.getEmbajadorTemplates === 'function' ? window.getEmbajadorTemplates(emb.slug) : [];
      const firstRouteId = rutas[0]?.id || 'oficial_carretera_austral_mochila';
      return `
        <div class="descubrir-embajador-banner" onclick="window.cambiarTabDescubrir('embajadores')" style="background-image:url('${escapeHtml(emb.cover)}'); margin: 0 0 20px 0;">
          <div class="descubrir-embajador-overlay"></div>
          <div class="descubrir-embajador-inner">
            <img src="${escapeHtml(emb.avatar)}" alt="${escapeHtml(emb.nombre)}" class="descubrir-embajador-avatar" />
            <div style="flex:1; min-width:220px;">
              <div class="descubrir-embajador-kicker">${seal}<span>EMBAJADOR FUNDADOR #${String(emb.numero).padStart(2, '0')} · RUTAS OFICIALES DESTACADAS</span></div>
              <div class="descubrir-embajador-name">${escapeHtml(emb.nombre)} <span style="font-weight:500; opacity:0.85;">· ${escapeHtml(emb.subtitulo)}</span></div>
              <div class="descubrir-embajador-sub">${escapeHtml(emb.especialidad)} · ${rutas.length} itinerarios reales listos para clonar offline</div>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button type="button" class="descubrir-embajador-btn" style="background:var(--verde,#10b981); color:#04120c;" onclick="event.stopPropagation(); window.clonarPlantillaCompleta && window.clonarPlantillaCompleta('${escapeHtml(firstRouteId)}', 'oficial')">
                <i class="fa-solid fa-clone"></i> Clonar Carretera Austral
              </button>
              <button type="button" class="descubrir-embajador-btn" onclick="event.stopPropagation(); window.cambiarTabDescubrir('embajadores')">
                Ver perfil y rutas <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderDescubrirEmbajadores() {
      const container = document.getElementById('descubrir-embajadores-content');
      if (!container) return;
      const embs = Array.isArray(window.PLUX_EMBAJADORES) ? window.PLUX_EMBAJADORES : [];
      const seal = typeof window.getEmbajadorSealSvg === 'function' ? window.getEmbajadorSealSvg(15) : '';

      if (!embs.length) {
        container.innerHTML = `<div style="padding:36px; text-align:center; color:var(--gris);">Próximamente nuevos Embajadores Fundadores.</div>`;
        return;
      }

      container.innerHTML = embs.map(emb => {
        const rutas = typeof window.getEmbajadorTemplates === 'function' ? window.getEmbajadorTemplates(emb.slug) : [];
        const numStr = String(emb.numero).padStart(2, '0');
        const redesHtml = (emb.redes || []).map(r => {
          const icon = r.tipo === 'youtube' ? '<i class="fa-brands fa-youtube"></i>' : (r.tipo === 'instagram' ? '<i class="fa-brands fa-instagram"></i>' : '<i class="fa-solid fa-globe"></i>');
          return `<button type="button" class="emb-pill-btn emb-pill-${escapeHtml(r.tipo)}" onclick="window.abrirRedEmbajador && window.abrirRedEmbajador('${escapeHtml(emb.slug)}', '${escapeHtml(r.label)}', '${escapeHtml(r.url)}', event)">${icon}<span>${escapeHtml(r.label)}</span></button>`;
        }).join('');

        const rutasHtml = rutas.map(tpl => {
          const daysCount = (tpl.destinos || []).reduce((acc, d) => acc + ((d.dias || []).length || 0), 0);
          const eventsCount = (tpl.destinos || []).reduce((acc, d) => acc + (d.dias || []).reduce((a, dia) => a + (dia.eventos?.length || 0), 0), 0);
          const paradas = (tpl.destinos || []).map(d => d.nombre).join(' → ');
          const originType = (tpl.id && tpl.id.startsWith('emb_')) ? 'comunidad' : 'oficial';
          const cover = tpl.coverImg || emb.cover;
          return `
            <div class="embajador-route-card" style="background:rgba(15,23,42,0.75);">
              <div class="embajador-route-cover" style="background-image:url('${escapeHtml(cover)}'); min-height:142px;">
                <div class="embajador-route-cover-overlay"></div>
                <div class="embajador-route-cover-top">
                  <span class="emb-route-tag">Oficial Destacada</span>
                  <span class="emb-route-meta">${daysCount} días · ${eventsCount} paradas ${tpl.presupuestoAprox ? '· Est. ' + escapeHtml(tpl.presupuestoAprox) : ''}</span>
                </div>
                <div class="embajador-route-cover-bottom">
                  <div class="embajador-route-title" style="font-size:1.12rem;">${escapeHtml(tpl.nombre)}</div>
                  <div class="embajador-route-stops">${escapeHtml(paradas)}</div>
                </div>
              </div>
              <div class="embajador-route-body">
                <div class="embajador-route-desc">${escapeHtml(tpl.descripcion)}</div>
                <div class="embajador-route-actions">
                  <button type="button" class="embajador-btn-clone" onclick="window.clonarPlantillaCompleta && window.clonarPlantillaCompleta('${escapeHtml(tpl.id)}', '${originType}')">
                    <i class="fa-solid fa-clone"></i> Clonar ruta en mi viaje
                  </button>
                  <button type="button" class="embajador-btn-save" onclick="window.guardarPlantillaEnMisPlantillas && window.guardarPlantillaEnMisPlantillas('${escapeHtml(tpl.id)}', '${originType}', event)">
                    <i class="fa-regular fa-bookmark"></i> Guardar
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('');

        return `
          <div style="border-radius:20px; overflow:hidden; border:1px solid rgba(16,185,129,0.32); background:rgba(15,23,42,0.85); margin-bottom:24px;">
            <div class="embajador-modal-banner" style="background-image:url('${escapeHtml(emb.cover)}'); min-height:190px; padding:24px 28px;">
              <div class="embajador-modal-banner-grad"></div>
              <div class="embajador-modal-identity">
                <img src="${escapeHtml(emb.avatar)}" alt="${escapeHtml(emb.nombre)}" class="embajador-avatar-img-lg" style="width:76px; height:76px;" />
                <div style="flex:1; min-width:200px;">
                  <div class="embajador-founder-tag">${seal}<span>EMBAJADOR FUNDADOR #${numStr}</span></div>
                  <div class="embajador-modal-name" style="font-size:1.6rem;">${escapeHtml(emb.nombre)}</div>
                  <div class="embajador-modal-sub">${escapeHtml(emb.subtitulo)} · ${escapeHtml(emb.especialidad)}</div>
                </div>
              </div>
            </div>
            <div style="padding:22px 28px 26px;">
              <div class="embajador-modal-bio" style="font-size:0.92rem; margin-bottom:16px;">${escapeHtml(emb.bio)}</div>
              <div class="embajador-modal-socials" style="margin-bottom:22px;">
                ${redesHtml}
                <button type="button" class="emb-pill-btn emb-pill-share" onclick="window.copiarLinkEmbajador && window.copiarLinkEmbajador('${escapeHtml(emb.slug)}', event)">
                  <i class="fa-solid fa-link"></i><span>Copiar enlace oficial</span>
                </button>
              </div>
              <div class="embajador-routes-heading" style="margin-bottom:14px;">Rutas oficiales destacadas de ${escapeHtml(emb.nombre)} (${rutas.length})</div>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:16px;">
                ${rutasHtml}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
    window.renderDescubrirEmbajadores = renderDescubrirEmbajadores;

    function cambiarTabDescubrir(tabKey) {
      document.querySelectorAll('.descubrir-tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.descubrir-tab-pane').forEach(pane => pane.classList.remove('active'));

      const activeBtn = document.getElementById(`tabBtn-${tabKey}`);
      const activePane = document.getElementById(`pane-descubrir-${tabKey}`);

      if (activeBtn) activeBtn.classList.add('active');
      if (activePane) activePane.classList.add('active');
      if (tabKey === 'embajadores') renderDescubrirEmbajadores();
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

        // Buscar actividades que coincidan con las ciudades del viaje (sin falsos positivos por subcadenas cortas)
        const ciudadesViaje = validDestinos
          .map(d => (d.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim())
          .filter(c => c.length >= 3);
        const actividadesRecomendadas = PLUX_CURATED_ACTIVITIES.filter(act => {
          const actCity = (act.ciudad || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
          return ciudadesViaje.some(c => actCity === c || actCity.split(/[\s,]+/).includes(c));
        });

        // Buscar escapadas
        let escapadas = [];
        for (const c of ciudadesViaje) {
          if (!c) continue;
          for (const k in PLUX_NEARBY_GETAWAYS) {
            if (c === k || k.split(/[\s,]+/).includes(c) || c.split(/[\s,]+/).includes(k)) {
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
          ${buildEmbajadorSpotlightBannerHtml()}
        `;
        html += `
          <!-- Accesos Rápidos: Importar Reservas & Comunidad y Foros -->
          <div class="descubrir-quick-modules-row">
            <div class="descubrir-module-spotlight" onclick="window.cambiarTabDescubrir('reservas')">
              <div style="display:flex; align-items:center; gap:14px;">
                <div class="descubrir-module-icon" style="background:rgba(56,189,248,0.14); color:#38bdf8; border:1px solid rgba(56,189,248,0.3);">
                  <i class="fa-solid fa-file-import"></i>
                </div>
                <div>
                  <div style="font-size:0.72rem; font-weight:800; color:#38bdf8; text-transform:uppercase; letter-spacing:0.5px;">Nuevo · Automatización</div>
                  <h4 style="margin:2px 0 4px 0; font-size:1.05rem; color:#ffffff; font-weight:800;">Importar Mails y Reservas</h4>
                  <p style="margin:0; font-size:0.82rem; color:var(--gris); line-height:1.4;">Pega confirmaciones de vuelos, Booking, Airbnb o trenes y agrégalas al itinerario en 1 clic.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="color:var(--gris);"></i>
            </div>

            <div class="descubrir-module-spotlight" onclick="window.cambiarTabDescubrir('comunidad')">
              <div style="display:flex; align-items:center; gap:14px;">
                <div class="descubrir-module-icon" style="background:rgba(16,185,129,0.14); color:var(--verde); border:1px solid rgba(16,185,129,0.3);">
                  <i class="fa-solid fa-comments"></i>
                </div>
                <div>
                  <div style="font-size:0.72rem; font-weight:800; color:var(--verde); text-transform:uppercase; letter-spacing:0.5px;">Comunidad Plux</div>
                  <h4 style="margin:2px 0 4px 0; font-size:1.05rem; color:#ffffff; font-weight:800;">Comunidad: Foros y Más</h4>
                  <p style="margin:0; font-size:0.82rem; color:var(--gris); line-height:1.4;">Debates entre viajeros, dudas por destino, presupuestos reales y consejos verificados.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="color:var(--gris);"></i>
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
              <p style="color:var(--gris); margin:0 0 12px 0;">¿Buscás qué hacer en ${escapeHtml(nombresDestinos)}?</p>
              <button class="btn-card-primary" style="max-width:280px; margin:0 auto;" onclick="window.buscarLugaresPorDestino('${escapeHtml(validDestinos[0]?.nombre || '')}')">
                <i class="fa-solid fa-magnifying-glass"></i> Buscar lugares reales
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
              <i class="fa-solid fa-compass" style="color:#818cf8; font-size:1.2rem;"></i>
              <strong style="color:#ffffff; font-size:1rem;">Buscador de Lugares y Atracciones Reales</strong>
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

          ${buildEmbajadorSpotlightBannerHtml()}

          <!-- Accesos Rápidos: Importar Reservas & Comunidad y Foros -->
          <div class="descubrir-quick-modules-row">
            <div class="descubrir-module-spotlight" onclick="window.cambiarTabDescubrir('reservas')">
              <div style="display:flex; align-items:center; gap:14px;">
                <div class="descubrir-module-icon" style="background:rgba(56,189,248,0.14); color:#38bdf8; border:1px solid rgba(56,189,248,0.3);">
                  <i class="fa-solid fa-file-import"></i>
                </div>
                <div>
                  <div style="font-size:0.72rem; font-weight:800; color:#38bdf8; text-transform:uppercase; letter-spacing:0.5px;">Nuevo · Automatización</div>
                  <h4 style="margin:2px 0 4px 0; font-size:1.05rem; color:#ffffff; font-weight:800;">Importar Mails y Reservas</h4>
                  <p style="margin:0; font-size:0.82rem; color:var(--gris); line-height:1.4;">Pega confirmaciones de vuelos, Booking, Airbnb o trenes y agrégalas al itinerario en 1 clic.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="color:var(--gris);"></i>
            </div>

            <div class="descubrir-module-spotlight" onclick="window.cambiarTabDescubrir('comunidad')">
              <div style="display:flex; align-items:center; gap:14px;">
                <div class="descubrir-module-icon" style="background:rgba(16,185,129,0.14); color:var(--verde); border:1px solid rgba(16,185,129,0.3);">
                  <i class="fa-solid fa-comments"></i>
                </div>
                <div>
                  <div style="font-size:0.72rem; font-weight:800; color:var(--verde); text-transform:uppercase; letter-spacing:0.5px;">Comunidad Plux</div>
                  <h4 style="margin:2px 0 4px 0; font-size:1.05rem; color:#ffffff; font-weight:800;">Comunidad: Foros y Más</h4>
                  <p style="margin:0; font-size:0.82rem; color:var(--gris); line-height:1.4;">Debates entre viajeros, dudas por destino, presupuestos reales y consejos verificados.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="color:var(--gris);"></i>
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

          <!-- Plantillas Sincronizadas con Tus Viajes -->
          <div class="descubrir-section-header" style="margin-top:34px;">
            <div>
              <h4><i class="fa-solid fa-layer-group" style="color:#a855f7;"></i> Plantillas de Viaje Sincronizadas</h4>
              <p>Conectadas en tiempo real con la sección Plantillas de Tus Viajes</p>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button class="btn-card-secondary" onclick="window.cambiarTabDescubrir('comunidad'); window.cambiarSubtabComunidad('itinerarios');">
                <i class="fa-solid fa-compass"></i> Ver todas aquí
              </button>
              <button class="btn-card-secondary" onclick="window.cerrarDescubrir(); if(typeof verPlantillas==='function') verPlantillas();">
                <i class="fa-solid fa-folder-open"></i> Abrir en Tus Viajes
              </button>
            </div>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
            ${(() => {
              const syncData = (typeof window.getPluxSyncedTemplatesData === 'function')
                ? window.getPluxSyncedTemplatesData()
                : { oficiales: [], comunidad: [], mias: [], likedSet: new Set() };
              const topOficiales = (syncData.oficiales || []).slice(0, 3);
              if (topOficiales.length === 0) return '';
              return topOficiales.map(tpl => {
                const isLiked = syncData.likedSet && syncData.likedSet.has(tpl.id);
                const votes = (tpl.likes || 0) + (isLiked ? 1 : 0);
                const eventsCount = (tpl.destinos || []).reduce((acc, dest) => acc + (dest.dias || []).reduce((a, d) => a + (d.eventos?.length || 0), 0), 0);
                const embBadge = (typeof window.getEmbajadorBadgeHtml === 'function') ? window.getEmbajadorBadgeHtml(tpl) : '';
                const originType = (tpl.id && tpl.id.startsWith('emb_')) ? 'comunidad' : 'oficial';
                return `
                  <div style="background:rgba(15,23,42,0.82); border:1px solid ${tpl.destacadaOficial ? 'rgba(16,185,129,0.35)' : 'rgba(255,255,255,0.09)'}; border-radius:16px; overflow:hidden; display:flex; flex-direction:column; justify-content:space-between;">
                    ${tpl.coverImg ? `<div style="height:108px; background:url('${escapeHtml(tpl.coverImg)}') center/cover no-repeat; position:relative;"><div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(9,13,22,0.12), rgba(15,23,42,0.92));"></div></div>` : ''}
                    <div style="padding:16px 18px 18px; display:flex; flex-direction:column; justify-content:space-between; gap:12px; flex:1;">
                    <div>
                      <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-bottom:6px;">
                        <span style="font-size:0.72rem; color:var(--verde); font-weight:800; text-transform:uppercase; background:rgba(16,185,129,0.12); padding:3px 9px; border-radius:20px;">${tpl.destacadaOficial ? 'Oficial Destacada' : 'Plux Oficial'} · ${(tpl.tags && tpl.tags[0]) || '3 Días'}</span>
                        <span style="font-size:0.75rem; color:var(--gris);">${tpl.presupuestoAprox ? 'Est. ' + escapeHtml(tpl.presupuestoAprox) : ''}</span>
                      </div>
                      ${embBadge ? `<div style="margin-bottom:6px;">${embBadge}</div>` : ''}
                      <h5 style="color:#ffffff; font-size:1.05rem; margin:4px 0 6px 0; font-weight:800;">${escapeHtml(tpl.nombre)}</h5>
                      <p style="font-size:0.82rem; color:var(--gris); margin:0 0 8px 0; line-height:1.45;">${escapeHtml(tpl.descripcion)}</p>
                      <span style="font-size:0.74rem; color:#38bdf8; font-weight:700;"><i class="fa-solid fa-calendar-check"></i> ${eventsCount} actividades incluidas</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:1px solid rgba(255,255,255,0.06);">
                      <button type="button" class="foro-action-btn ${isLiked ? 'voted' : ''}" onclick="window.toggleLikePlantilla && window.toggleLikePlantilla('${tpl.id}', event)">
                        <i class="fa-solid fa-heart" style="color:${isLiked ? '#f472b6' : 'inherit'};"></i> ${votes}
                      </button>
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="btn-card-secondary" style="padding:7px 11px; font-size:0.78rem;" onclick="window.guardarPlantillaEnMisPlantillas && window.guardarPlantillaEnMisPlantillas('${tpl.id}', '${originType}', event)" title="Guardar en Mis Plantillas">
                          <i class="fa-regular fa-bookmark"></i> Guardar
                        </button>
                        <button type="button" class="btn-card-primary" style="padding:7px 13px; font-size:0.8rem;" onclick="window.clonarPlantillaCompleta && window.clonarPlantillaCompleta('${tpl.id}', '${originType}')">
                          <i class="fa-solid fa-clone"></i> Clonar
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>
                `;
              }).join('');
            })()}
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
    function añadirDesdeFeed(titulo, costo = 0, duracion = '60', ciudadOpcional = '') {
      if (!titulo) return;

      if (typeof destinos === 'undefined' || !Array.isArray(destinos)) {
        window.destinos = [];
      }

      if (destinos.length === 0) {
        const destName = ciudadOpcional || 'Mi Viaje';
        destinos.push({
          id: Date.now(),
          nombre: destName,
          dias: [{ id: 0, eventos: [], costosAdicionales: [] }],
          tramos: []
        });
      }

      let targetDest = destinos[0];
      if (ciudadOpcional) {
        const norm = ciudadOpcional.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        const found = destinos.find(d => (d.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(norm));
        if (found) targetDest = found;
      }

      if (!Array.isArray(targetDest.dias) || targetDest.dias.length === 0) {
        targetDest.dias = [{ id: 0, eventos: [], costosAdicionales: [] }];
      }

      const durMin = parseInt(duracion) || 60;
      if (!Array.isArray(targetDest.dias[0].eventos)) {
        targetDest.dias[0].eventos = [];
      }

      targetDest.dias[0].eventos.push({
        hora: '10:00',
        titulo: titulo,
        notas: 'Añadido desde Descubrir Plux',
        costo: Number(costo) || 0,
        duracion: durMin
      });

      if (typeof renderDestinos === 'function') renderDestinos();
      if (typeof autoSave === 'function') autoSave();

      if (typeof window.showToast === 'function') {
        window.showToast(`"${titulo}" añadido a ${targetDest.nombre} (Día 1)`, 'success');
      }
    }

    // Búsqueda de lugares reales (Catálogo curado Plux + Wikipedia verificada, sin inventar actividades)
    async function buscarLugaresPorDestino(ciudad) {
      const qRaw = (ciudad || '').trim();
      if (!qRaw) return;
      const resultados = document.getElementById('feed-resultados');
      if (!resultados) return;

      const norm = qRaw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

      // 1. Buscar primero en el catálogo verificado de Plux
      const locales = PLUX_CURATED_ACTIVITIES.filter(act => {
        const c = (act.ciudad || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const n = (act.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return c.includes(norm) || n.includes(norm);
      });

      if (locales.length > 0) {
        let html = '<div class="descubrir-grid-actividades" style="margin-top:16px;">';
        locales.slice(0, 8).forEach(act => {
          html += renderTarjetaActividadHTML(act, true);
        });
        html += '</div>';
        resultados.innerHTML = html;
        return;
      }

      // 2. Si no está en el catálogo local, consultar lugares reales en Wikipedia (sin inventar precios ni duraciones)
      resultados.innerHTML = `<p style="color:var(--gris); padding:25px; text-align:center; font-size:1.05rem;"><i class="fa-solid fa-magnifying-glass" style="color:var(--verde);"></i> Buscando lugares reales en ${escapeHtml(qRaw)}...</p>`;

      try {
        const wikiUrl = `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(qRaw + ' turismo atracciones')}&srlimit=6&utf8=1&format=json&origin=*`;
        const resp = await fetch(wikiUrl);
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const data = await resp.json();
        const items = data?.query?.search || [];

        if (items.length === 0) {
          resultados.innerHTML = `<p style="color:var(--gris); padding:20px; text-align:center;">No encontramos lugares verificados en el catálogo para "${escapeHtml(qRaw)}". Prueba con el nombre principal de la ciudad.</p>`;
          return;
        }

        let html = '<div class="descubrir-grid-actividades" style="margin-top:16px;">';
        items.forEach(item => {
          const cleanDesc = String(item.snippet || '').replace(/<[^>]+>/g, '').trim();
          const titleEsc = escapeHtml(item.title);
          html += `
            <div class="activity-card-rich">
              <div class="activity-card-header">
                <div>
                  <span style="font-size:0.75rem; color:var(--verde); font-weight:700; text-transform:uppercase;">${escapeHtml(qRaw)}</span>
                  <h5>${titleEsc}</h5>
                </div>
                <span class="activity-card-cat-badge">Wikipedia</span>
              </div>
              <p class="activity-card-desc">${escapeHtml(cleanDesc)}...</p>
              <div class="activity-card-footer">
                <a href="https://es.wikipedia.org/wiki/${encodeURIComponent(item.title.replace(/ /g, '_'))}" target="_blank" rel="noopener noreferrer" style="font-size:0.78rem; color:#38bdf8; text-decoration:none;">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver info
                </a>
                <button class="btn-add-activity-trip" onclick="window.añadirDesdeFeed('${titleEsc}', 0, '60', '${escapeHtml(qRaw)}')">
                  <i class="fa-solid fa-plus"></i> Añadir
                </button>
              </div>
            </div>
          `;
        });
        html += '</div>';
        resultados.innerHTML = html;
      } catch (e) {
        console.error('Error buscando lugares reales:', e);
        resultados.innerHTML = '<p style="color:var(--gris); padding:20px; text-align:center;">No se pudieron consultar lugares verificados en este momento. Verifica tu conexión o busca una ciudad del catálogo.</p>';
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

// ==========================================================================
// PESTAÑA 5: CENTRO INTELIGENTE DE RESERVAS, VOUCHERS & BILLETERA (V2)
// ==========================================================================

const PLUX_RESERVAS_WALLET_KEY = 'Plux_Reservas_Wallet_V1';
let pluxDetectedReservas = [];
let pluxWalletFilter = 'todas';
let pluxWalletSearch = '';
let pluxWalletScope = 'trip'; // 'trip' | 'all'
let pluxWalletScopeUserPicked = false;
let pluxReservaInputMode = 'smart'; // 'smart' | 'express' | 'wallet'
let pluxExpressTipo = 'vuelo';
let pluxPreselectedDestino = '';
let pluxPendingImagePreview = null;
let pluxPendingImages = []; // [{ id, name, dataUrl, ocrText, status: 'pending'|'processing'|'done'|'failed', errorMsg }]
let pluxOcrInProgress = false;
let pluxLastVisionBatches = [];
let pluxLastDocReservas = [];
let pluxOcrStatusText = '';

const PLUX_IATA_CITIES = {
  EZE: 'Buenos Aires', AEP: 'Buenos Aires', COR: 'Córdoba', MDZ: 'Mendoza', BRC: 'Bariloche', IGR: 'Iguazú', USH: 'Ushuaia', SLA: 'Salta', ROS: 'Rosario', NQN: 'Neuquén', FTE: 'El Calafate',
  MAD: 'Madrid', BCN: 'Barcelona', AGP: 'Málaga', PMI: 'Palma de Mallorca', SVQ: 'Sevilla', VLC: 'Valencia', BIO: 'Bilbao', IBZ: 'Ibiza',
  FCO: 'Roma', CIA: 'Roma', MXP: 'Milán', LIN: 'Milán', VCE: 'Venecia', NAP: 'Nápoles', FLR: 'Florencia', BLQ: 'Bolonia',
  CDG: 'París', ORY: 'París', NCE: 'Niza', LYS: 'Lyon', MRS: 'Marsella',
  LHR: 'Londres', LGW: 'Londres', STN: 'Londres', LTN: 'Londres', MAN: 'Mánchester', EDI: 'Edimburgo',
  AMS: 'Ámsterdam', FRA: 'Fráncfort', MUC: 'Múnich', BER: 'Berlín', ZRH: 'Zúrich', GVA: 'Ginebra', VIE: 'Viena', PRG: 'Praga', BUD: 'Budapest', ATH: 'Atenas', LIS: 'Lisboa', OPO: 'Oporto', DUB: 'Dublín', IST: 'Estambul', BRU: 'Bruselas', CPH: 'Copenhague', ARN: 'Estocolmo', OSL: 'Oslo',
  JFK: 'Nueva York', EWR: 'Nueva York', LGA: 'Nueva York', MIA: 'Miami', FLL: 'Miami', MCO: 'Orlando', LAX: 'Los Ángeles', SFO: 'San Francisco', ORD: 'Chicago', BOS: 'Boston', LAS: 'Las Vegas', IAD: 'Washington', ATL: 'Atlanta',
  CUN: 'Cancún', MEX: 'Ciudad de México', BOG: 'Bogotá', MDE: 'Medellín', CTG: 'Cartagena', LIM: 'Lima', CUZ: 'Cusco', SCL: 'Santiago', GRU: 'São Paulo', GIG: 'Río de Janeiro', FLN: 'Florianópolis', MVD: 'Montevideo', PDP: 'Punta del Este', ASU: 'Asunción',
  NRT: 'Tokio', HND: 'Tokio', KIX: 'Osaka', ICN: 'Seúl', BKK: 'Bangkok', SIN: 'Singapur', HKG: 'Hong Kong', DXB: 'Dubái', DOH: 'Doha', SYD: 'Sídney', MEL: 'Melbourne', AKL: 'Auckland', CAI: 'El Cairo'
};

const PLUX_KNOWN_CITIES = [
  'Roma', 'Tokio', 'París', 'Barcelona', 'Madrid', 'Nueva York', 'Londres', 'Buenos Aires',
  'Ámsterdam', 'Berlín', 'Río de Janeiro', 'Cusco', 'Cancún', 'Miami', 'Bariloche', 'Mendoza',
  'Santiago', 'Florencia', 'Venecia', 'Milán', 'Lisboa', 'Praga', 'Viena', 'Budapest', 'Atenas',
  'Estambul', 'Dubái', 'Bangkok', 'Seúl', 'Kioto', 'Osaka', 'Sídney', 'Ciudad de México',
  'Bogotá', 'Cartagena', 'Medellín', 'Lima', 'Ushuaia', 'Iguazú', 'Salta', 'El Calafate',
  'Sevilla', 'Granada', 'Valencia', 'Niza', 'Múnich', 'Zúrich', 'Edimburgo', 'Dublín', 'El Cairo',
  'Buzios', 'Ilhabela', 'Camboriú', 'Camboriu', 'Punta del Este', 'Montevideo', 'Santos', 'Itajaí',
  'Salvador', 'Maceió', 'Angra dos Reis', 'Cozumel', 'Nassau', 'Civitavecchia', 'Santorini', 'Mykonos', 'Dubrovnik'
];

const PLUX_MONTH_MAP = {
  ene: 1, enero: 1, jan: 1, january: 1, gen: 1, gennaio: 1, janv: 1,
  feb: 2, febrero: 2, february: 2, febbraio: 2, fev: 2,
  mar: 3, marzo: 3, march: 3, mars: 3,
  abr: 4, abril: 4, apr: 4, april: 4, aprile: 4, avr: 4,
  may: 5, mayo: 5, maggio: 5, mai: 5,
  jun: 6, junio: 6, june: 6, giugno: 6, juin: 6,
  jul: 7, julio: 7, july: 7, luglio: 7, juil: 7,
  ago: 8, agosto: 8, aug: 8, august: 8, aout: 8,
  sep: 9, sept: 9, septiembre: 9, september: 9, settembre: 9, set: 9,
  oct: 10, octubre: 10, october: 10, ottobre: 10, out: 10,
  nov: 11, noviembre: 11, november: 11, novembre: 11,
  dic: 12, diciembre: 12, dec: 12, december: 12, dicembre: 12
};

function parseLocalNoonImporter(val) {
  const m = String(val || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
}

function diffCalendarDaysISO(isoA, isoB) {
  const d1 = parseLocalNoonImporter(isoA);
  const d2 = parseLocalNoonImporter(isoB);
  if (!d1 || !d2) return 0;
  return Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
}

function normCityKeyImporter(city) {
  return String(city || '')
    .split(',')[0]
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseAmountSmart(s) {
  if (typeof s === 'number') return isNaN(s) ? 0 : s;
  if (!s) return 0;
  let cleaned = String(s).replace(/[^\d.,]/g, '').trim();
  if (!cleaned) return 0;
  const lastDot = cleaned.lastIndexOf('.');
  const lastComma = cleaned.lastIndexOf(',');
  if (lastDot !== -1 && lastComma !== -1) {
    if (lastComma > lastDot) {
      cleaned = cleaned.replace(/\./g, '').replace(',', '.');
    } else {
      cleaned = cleaned.replace(/,/g, '');
    }
  } else if (lastComma !== -1) {
    const decLen = cleaned.length - lastComma - 1;
    cleaned = decLen === 3 ? cleaned.replace(/,/g, '') : cleaned.replace(',', '.');
  } else if (lastDot !== -1) {
    const decLen = cleaned.length - lastDot - 1;
    if (decLen === 3 && cleaned.indexOf('.') !== lastDot) {
      cleaned = cleaned.replace(/\./g, '');
    } else if (decLen === 3 && cleaned.length > 4) {
      cleaned = cleaned.replace(/\./g, '');
    }
  }
  const v = parseFloat(cleaned);
  return isNaN(v) ? 0 : v;
}

const PLUX_GENERIC_BOOKING_CODES = new Set(['', 'CONF', 'CONF-OK', 'CONF-IA', 'CRU-OK', 'EXP-OK', 'PLUX-PASS']);

function isRealBookingCode(code) {
  const c = String(code || '').trim().toUpperCase();
  return Boolean(c && c.length >= 4 && !PLUX_GENERIC_BOOKING_CODES.has(c));
}

function fnv1aHex(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}

function computeBookingSyncKey(res) {
  const tipo = String(res?.tipo || 'res').trim().toLowerCase();
  const code = String(res?.codigo || '').trim().toUpperCase();
  if (isRealBookingCode(code)) {
    return `${tipo}:${code}`;
  }
  let sig = '';
  if (Array.isArray(res?.etapas) && res.etapas.length > 0) {
    sig = res.etapas
      .filter(e => e && !e.esNavegacion)
      .map(e => `${e.fechaISO || e.diaNum || ''}|${normCityKeyImporter(e.ciudad)}`)
      .join(';');
  } else {
    sig = `${res?.fechaISO || ''}|${normCityKeyImporter(res?.ciudad)}|${String(res?.titulo || '').trim().toLowerCase()}`;
  }
  return `${tipo}:fp_${fnv1aHex(sig || 'empty')}`;
}

function esTituloBasuraOCR(titulo) {
  const t = String(titulo || '').trim();
  if (!t || t.length < 3) return true;
  // Solo símbolos o caracteres OCR repetidos
  if (/^[|\-•.\s_="'~#*]+$/.test(t)) return true;
  if (/[|]{2,}|[|]\s*[|]/.test(t)) return true;

  const nonSpace = t.replace(/\s+/g, '');
  if (nonSpace.length < 3) return true;
  const symbols = nonSpace.replace(/[a-zA-Z0-9ÁÉÍÓÚáéíóúÜüÑñ]/g, '');
  if ((symbols.length / nonSpace.length) > 0.25) return true;

  // Debe contener al menos una palabra alfabética de al menos 3 letras
  if (!/[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ]{3,}/.test(t)) return true;

  // Si todas las palabras son de 1-2 letras (ej: "La EJ IT", "- CNE my")
  const tokens = t.split(/\s+/).filter(Boolean);
  const wordsWith3Plus = tokens.filter(tok => /[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ]{3,}/.test(tok.replace(/[^a-zA-ZÁÉÍÓÚáéíóúÜüÑñ]/g, '')));
  if (wordsWith3Plus.length === 0) return true;

  return false;
}

function esTextoReservaValido(rawBlock) {
  const text = String(rawBlock || '').trim();
  if (text.length < 15) return false;

  const nonSpace = text.replace(/\s+/g, '');
  if (nonSpace.length < 10) return false;

  // Rechazar bloques donde >35% de los caracteres no-espacio son símbolos/puntuación (ruido OCR)
  const symbolChars = nonSpace.replace(/[a-zA-Z0-9ÁÉÍÓÚáéíóúÜüÑñ]/g, '');
  if ((symbolChars.length / nonSpace.length) > 0.35) return false;

  const hasPrice = /(?:USD|EUR|ARS|US\$|€)\s*\d|\d[\d.,]*\s*(?:USD|EUR|ARS|€)/i.test(text);
  const hasExplicitCode = /(?:pnr|n[uú]mero\s+de\s+reserva|c[oó]digo(?:\s+de\s+reserva|\s+de\s+referencia)?|confirmaci[oó]n|localizador|booking\s*ref|ticket(?:\s*nr|\s*no|\s*n°)?)\s*[:#.]\s*[A-Z0-9-]{4,16}/i.test(text);
  const hasCruiseKeyword = /(?:msc\s+cruceros|costa\s+cruceros|royal\s+caribbean|norwegian\s+cruise|nave\s*:|cabina\s*:|puerto\s+de\s+embarque|en\s+navegaci[oó]n)/i.test(text);
  const hasTransportHotelKeyword = /(?:vuelo\b|flight|aerol[ií]nea|hotel\b|booking\.com|airbnb|hostel|check-?in|tren\b|frecciarossa|renfe|ave\b|ouigo|alquiler\s+de\s+auto)/i.test(text);
  const hasActivityKeyword = /(?:tour\b|excursi[oó]n|visita\s+guiada|entrada\b|museo\b|civitatis|getyourguide|viator)/i.test(text);

  // Si no tiene código explícito, ni precio, ni palabra clave de reserva real, descartar
  if (!hasExplicitCode && !hasPrice && !hasCruiseKeyword && !hasTransportHotelKeyword && !hasActivityKeyword) {
    return false;
  }

  // Descartar textos de disclaimer legal, teléfonos sueltos de contacto o notas de desembarque que no son reservas
  if (/^(?:cuando\s+planees\s+tu\s+regreso|de\s+acuerdo\s+a\s+las\s+necesidades\s+operativas|tel\s*:\s*\d|reservas@)/i.test(text) && !hasExplicitCode) {
    return false;
  }

  return true;
}

function esVoucherCorruptoOCR(v) {
  if (!v || typeof v !== 'object') return true;
  if (Array.isArray(v.etapas) && v.etapas.length > 0) return false;
  const codigo = String(v.codigo || '').trim().toUpperCase();
  const costo = Number(v.costo) || 0;
  const titulo = String(v.titulo || '').trim();
  const tipo = String(v.tipo || 'actividad').toLowerCase();
  const hasRealCode = isRealBookingCode(codigo);

  // Si el título es basura OCR, SIEMPRE es corrupto (tenga fecha o no)
  if (esTituloBasuraOCR(titulo)) return true;

  // Si es actividad sin código real ni costo
  if (tipo === 'actividad' && !hasRealCode && costo === 0) {
    if (!/(?:tour|excursi[oó]n|entrada|visita|museo|ticket|pase|ferry)/i.test(titulo)) {
      return true;
    }
  }

  // Si no tiene código real ni costo ni fechas ni título de al menos 4 letras
  if (!hasRealCode && costo === 0 && !/[a-zA-ZÁÉÍÓÚáéíóúÑñ]{4,}/.test(titulo)) {
    return true;
  }

  return false;
}

function esReservaDetectadaValida(r) {
  if (!r || typeof r !== 'object') return false;
  if (Array.isArray(r.etapas) && r.etapas.length > 0) return true;
  if (esVoucherCorruptoOCR(r)) return false;

  const tipo = String(r.tipo || 'actividad').toLowerCase();
  const codigo = String(r.codigo || '').trim().toUpperCase();
  const hasRealCode = isRealBookingCode(codigo);
  const hasCosto = (Number(r.costo) || 0) > 0;
  const titulo = String(r.titulo || '').trim();

  if (esTituloBasuraOCR(titulo)) return false;

  // Para actividad: si no tiene código real ni costo, solo pasa si el título es explícitamente un tour/entrada
  if (tipo === 'actividad' && !hasRealCode && !hasCosto) {
    if (!/(?:tour|excursi[oó]n|entrada|visita|museo|ticket|pase|ferry)/i.test(titulo)) {
      return false;
    }
  }

  return true;
}

function deduplicarReservasPorSyncKey(lista) {
  const map = new Map();
  for (const r of (Array.isArray(lista) ? lista : [])) {
    if (!r || !esReservaDetectadaValida(r)) continue;
    const key = r._syncKey || computeBookingSyncKey(r);
    r._syncKey = key;
    const prev = map.get(key);
    if (!prev) {
      map.set(key, r);
    } else {
      const score = (x) =>
        (Array.isArray(x.etapas) ? x.etapas.length * 10 : 0) +
        (Number(x.costo) > 0 ? 5 : 0) +
        (isRealBookingCode(x.codigo) ? 5 : 0) +
        (x.fechaISO ? 2 : 0);
      if (score(r) >= score(prev)) map.set(key, r);
    }
  }
  return Array.from(map.values());
}

function obtenerInfoViajeActivoImportador() {
  const apiInfo = (window.pluxTripApi && typeof window.pluxTripApi.getActiveTripInfo === 'function')
    ? window.pluxTripApi.getActiveTripInfo()
    : null;
  const nombreRaw = String(apiInfo?.nombre || document.getElementById('nombreViaje')?.value || '').trim();
  const tripId = apiInfo?.tripId || null;
  const destinosCount = apiInfo
    ? Number(apiInfo.destinosCount || 0)
    : ((typeof destinos !== 'undefined' && Array.isArray(destinos)) ? destinos.length : 0);
  const hasNamedTrip = Boolean(nombreRaw && nombreRaw !== 'Viaje actual');
  const hasTrip = Boolean(tripId || destinosCount > 0 || hasNamedTrip);
  const displayLabel = hasNamedTrip
    ? nombreRaw
    : (destinosCount > 0 ? (nombreRaw || 'Viaje actual') : 'Viaje nuevo sin guardar');
  return {
    nombre: displayLabel,
    tripId,
    destinosCount,
    isTemplate: Boolean(apiInfo?.isTemplate),
    hasTrip
  };
}

function purgarVouchersCorruptosDelViajeActivo() {
  try {
    if (window.pluxTripApi?.getTripVouchers && window.pluxTripApi?.removeTripVoucher) {
      const list = window.pluxTripApi.getTripVouchers();
      if (Array.isArray(list) && list.length > 0) {
        const junkIds = list.filter(v => esVoucherCorruptoOCR(v)).map(v => v.id).filter(Boolean);
        junkIds.forEach(id => window.pluxTripApi.removeTripVoucher(id));
      }
    }

    // Purgar eventos corruptos dentro de los destinos del viaje activo
    if (typeof destinos !== 'undefined' && Array.isArray(destinos)) {
      let changed = false;
      destinos.forEach(d => {
        if (Array.isArray(d?.dias)) {
          d.dias.forEach(dia => {
            if (Array.isArray(dia?.eventos)) {
              const origLen = dia.eventos.length;
              dia.eventos = dia.eventos.filter(ev => !esTituloBasuraOCR(ev.titulo) && (!ev.codigoReserva || ev.codigoReserva !== 'CONF-OK' || !esTituloBasuraOCR(ev.titulo)));
              if (dia.eventos.length !== origLen) changed = true;
            }
          });
        }
      });

      // Purgar destino fantasma "Roma" si el viaje tiene paradas de crucero/itinerario y Roma no tiene paradas de crucero ni eventos válidos
      const hasCruise = destinos.some(d => d.tipoParada === 'embarque' || d.tipoParada === 'escala' || d.cubreParadas || (Number(d.diasTransitoPrevio) > 0));
      if (hasCruise) {
        const romaIdx = destinos.findIndex(d =>
          d && /roma/i.test(d.nombre || '') && (!d.tipoParada || d.tipoParada === 'estadia') &&
          (!Array.isArray(d.dias) || d.dias.length === 0 || d.dias.every(dia => !Array.isArray(dia.eventos) || dia.eventos.length === 0 || dia.eventos.every(ev => esTituloBasuraOCR(ev.titulo))))
        );
        if (romaIdx >= 0) {
          console.log('🧹 [Plux Importer] Purgando destino fantasma Roma creado por OCR:', destinos[romaIdx].nombre);
          destinos.splice(romaIdx, 1);
          changed = true;
        }
      }

      if (changed) {
        if (typeof renderDestinos === 'function') renderDestinos();
        if (typeof autoSave === 'function') autoSave();
      }
    }
  } catch (e) {
    console.warn('Error purgando vouchers corruptos del viaje:', e);
  }
}

function obtenerWalletReservas() {
  try {
    const raw = JSON.parse(localStorage.getItem(PLUX_RESERVAS_WALLET_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    const cleaned = raw.filter(v => !esVoucherCorruptoOCR(v));
    if (cleaned.length !== raw.length) {
      guardarWalletReservasStorage(cleaned);
    }
    return cleaned;
  } catch (e) {
    return [];
  }
}

function guardarWalletReservasStorage(lista) {
  try {
    localStorage.setItem(PLUX_RESERVAS_WALLET_KEY, JSON.stringify(lista));
  } catch (e) {
    console.warn('No se pudo guardar en localStorage:', e);
  }
}

function obtenerViajerosParaReserva() {
  if (typeof window.obtenerListaViajerosTotal === 'function') {
    const list = window.obtenerListaViajerosTotal();
    if (Array.isArray(list) && list.length > 0) return list;
  }
  if (typeof listaViajeros !== 'undefined' && Array.isArray(listaViajeros) && listaViajeros.length > 0) {
    return listaViajeros;
  }
  const nick = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : localStorage.getItem('Plux_Nickname');
  return nick ? [nick] : [];
}

function normalizarFechaTexto(rawDateStr) {
  if (!rawDateStr) return { display: '', iso: '' };
  const s = String(rawDateStr).trim();

  // Caso YYYY-MM-DD
  let m = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
  if (m) {
    const y = m[1];
    const mo = m[2].padStart(2, '0');
    const d = m[3].padStart(2, '0');
    return { display: `${d}/${mo}/${y}`, iso: `${y}-${mo}-${d}` };
  }

  // Caso DD/MM/YYYY o DD-MM-YYYY
  m = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (m) {
    const d = m[1].padStart(2, '0');
    const mo = m[2].padStart(2, '0');
    let y = m[3];
    if (y.length === 2) y = '20' + y;
    return { display: `${d}/${mo}/${y}`, iso: `${y}-${mo}-${d}` };
  }

  // Caso "15 de noviembre de 2026" o "15 nov 2026"
  m = s.match(/(\d{1,2})\s*(?:de\s+)?([a-záéíóúñ]{3,12})(?:\s*(?:de|,)?\s*(\d{4}))?/i);
  if (m) {
    const d = m[1].padStart(2, '0');
    const mKey = m[2].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const monthNum = PLUX_MONTH_MAP[mKey] || PLUX_MONTH_MAP[mKey.slice(0, 3)];
    if (monthNum) {
      const mo = String(monthNum).padStart(2, '0');
      const y = m[3] || String(new Date().getFullYear());
      return { display: `${d}/${mo}/${y}`, iso: `${y}-${mo}-${d}` };
    }
  }

  // Caso "Nov 15, 2026"
  m = s.match(/([a-z]{3,10})\s+(\d{1,2}),?\s*(\d{4})?/i);
  if (m) {
    const mKey = m[1].toLowerCase();
    const monthNum = PLUX_MONTH_MAP[mKey] || PLUX_MONTH_MAP[mKey.slice(0, 3)];
    if (monthNum) {
      const d = m[2].padStart(2, '0');
      const mo = String(monthNum).padStart(2, '0');
      const y = m[3] || String(new Date().getFullYear());
      return { display: `${d}/${mo}/${y}`, iso: `${y}-${mo}-${d}` };
    }
  }

  return { display: s, iso: '' };
}

function extraerFechasDeTexto(clean) {
  const results = [];
  // 1. Fechas con nombre de mes ("15 de noviembre de 2026", "16 nov 2026", "Nov 15, 2026")
  const regexNatural = /\b(\d{1,2}\s+(?:de\s+)?(?:ene(?:ro)?|feb(?:rero)?|mar(?:zo)?|abr(?:il)?|may(?:o)?|jun(?:io)?|jul(?:io)?|ago(?:sto)?|sep(?:tiembre|t)?|oct(?:ubre)?|nov(?:iembre)?|dic(?:iembre)?|jan(?:uary)?|february|march|apr(?:il)?|june|july|aug(?:ust)?|october|dec(?:ember)?)(?:\s+(?:de\s+)?\d{4})?)\b/gi;
  let m;
  while ((m = regexNatural.exec(clean)) !== null) {
    const norm = normalizarFechaTexto(m[1]);
    if (norm.iso && !results.some(r => r.iso === norm.iso)) {
      results.push(norm);
    }
  }
  // 2. Fechas numéricas DD/MM/YYYY o YYYY-MM-DD
  const regexNum = /\b(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2})\b/g;
  while ((m = regexNum.exec(clean)) !== null) {
    const norm = normalizarFechaTexto(m[1]);
    if (norm.iso && !results.some(r => r.iso === norm.iso)) {
      results.push(norm);
    }
  }
  return results;
}

function calcularDiaViajePorFechaISO(fechaISO, baseFechaISO) {
  if (!fechaISO) return 0;
  const tripStartEl = document.getElementById('fechaInicio');
  const refISO = baseFechaISO || (tripStartEl && tripStartEl.value ? tripStartEl.value : '');
  if (!refISO) return 0;
  const d1 = parseLocalNoonImporter(refISO);
  const d2 = parseLocalNoonImporter(fechaISO);
  if (!d1 || !d2) return 0;
  const diffDays = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, Math.min(90, diffDays));
}

function generarBannerArchivosReservaHTML(customStatusMsg = '') {
  if (pluxPendingImages.length > 0) {
    const doneCount = pluxPendingImages.filter(img => img.status === 'done').length;
    const failedCount = pluxPendingImages.filter(img => img.status === 'failed').length;
    const procCount = pluxPendingImages.filter(img => img.status === 'processing').length;

    let statusSummary = '';
    if (pluxOcrInProgress) {
      statusSummary = customStatusMsg || pluxOcrStatusText || `Analizando imágenes con Vision IA (${doneCount}/${pluxPendingImages.length})...`;
    } else if (failedCount > 0) {
      statusSummary = `${pluxPendingImages.length} ${pluxPendingImages.length === 1 ? 'captura' : 'capturas'} · ${doneCount} listas · ${failedCount} fallidas`;
    } else if (doneCount > 0) {
      statusSummary = `${pluxPendingImages.length} ${pluxPendingImages.length === 1 ? 'captura' : 'capturas'} · ${doneCount} analizadas con éxito`;
    } else {
      statusSummary = `${pluxPendingImages.length} ${pluxPendingImages.length === 1 ? 'captura adjunta' : 'capturas adjuntas'}`;
    }

    return `
      <div class="reserva-status-progress">
        <span style="display:inline-flex; align-items:center; gap:7px;">
          ${pluxOcrInProgress || procCount > 0
            ? '<i class="fa-solid fa-spinner fa-spin" style="color:#38bdf8;"></i>'
            : (failedCount > 0
                ? '<i class="fa-solid fa-triangle-exclamation" style="color:#f59e0b;"></i>'
                : '<i class="fa-solid fa-circle-check" style="color:#10b981;"></i>')}
          <span>${escapeHtml(statusSummary)}</span>
        </span>
        <div style="display:inline-flex; align-items:center; gap:8px; flex-wrap:wrap;">
          ${failedCount > 0 && !pluxOcrInProgress ? `
            <button type="button" class="reserva-retry-btn" onclick="window.reintentarImagenesFallidasReserva()">
              <i class="fa-solid fa-rotate-right"></i> Reintentar fallidas (${failedCount})
            </button>
          ` : ''}
          <button type="button" onclick="window.quitarImagenReservaAdjunta()" style="background:transparent; border:none; color:var(--gris); cursor:pointer; font-size:0.75rem; padding:2px 6px;">Quitar todas</button>
        </div>
      </div>
      <div class="reserva-thumb-grid">
        ${pluxPendingImages.map((img, i) => {
          const st = img.status || 'pending';
          let badgeHtml = '';
          if (st === 'processing') {
            badgeHtml = '<span class="reserva-thumb-status reserva-thumb-status--processing reserva-thumb-status--loading" title="Analizando..."><i class="fa-solid fa-spinner fa-spin"></i></span>';
          } else if (st === 'done') {
            badgeHtml = '<span class="reserva-thumb-status reserva-thumb-status--done reserva-thumb-status--ok" title="Analizada"><i class="fa-solid fa-check"></i></span>';
          } else if (st === 'failed') {
            badgeHtml = `<span class="reserva-thumb-status reserva-thumb-status--failed" title="${escapeHtml(img.errorMsg || 'Error al analizar')}"><i class="fa-solid fa-exclamation"></i></span>`;
          }
          return `
            <div class="reserva-thumb-item">
              <img class="reserva-thumb-img" src="${img.dataUrl}" title="${escapeHtml(img.name)}" alt="${escapeHtml(img.name)}">
              <button type="button" class="reserva-thumb-remove" onclick="window.quitarImagenReservaIndividual(${i})" title="Quitar captura">&times;</button>
              ${badgeHtml}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  if (pluxPendingImagePreview) {
    return `
      <div class="reserva-status-progress">
        <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
          <div class="reserva-thumb-item">
            <img class="reserva-thumb-img" src="${pluxPendingImagePreview}" alt="Comprobante adjunto">
          </div>
          <div style="font-size:0.78rem;">Comprobante visual adjunto (quedará guardado en el voucher de tu billetera)</div>
        </div>
        <button type="button" onclick="window.quitarImagenReservaAdjunta()" style="background:transparent; border:none; color:var(--gris); cursor:pointer; font-size:1rem; padding:2px 6px;">&times;</button>
      </div>
    `;
  }
  return '';
}

function actualizarBannerArchivosReserva(customStatusMsg = '') {
  if (customStatusMsg) pluxOcrStatusText = customStatusMsg;
  else if (!pluxOcrInProgress) pluxOcrStatusText = '';
  const banner = document.getElementById('reservaFileStatusBanner');
  if (!banner) return;
  const hasAny = pluxPendingImages.length > 0 || Boolean(pluxPendingImagePreview);
  if (!hasAny) {
    banner.style.display = 'none';
    banner.innerHTML = '';
    return;
  }
  banner.style.display = 'flex';
  banner.innerHTML = generarBannerArchivosReservaHTML(customStatusMsg);
}

function abrirImportadorParaDestino(nombreDestino) {
  pluxPreselectedDestino = nombreDestino || '';
  if (typeof window.abrirDescubrir === 'function') {
    window.abrirDescubrir('reservas');
  }
}

function cambiarModoImportadorReserva(modo) {
  pluxReservaInputMode = modo || 'smart';
  renderizarImportadorReservas();
}

function renderizarImportadorReservas() {
  const container = document.getElementById('descubrir-reservas-content');
  if (!container) return;

  purgarVouchersCorruptosDelViajeActivo();
  const wallet = obtenerWalletReservas();
  const activeTrip = obtenerInfoViajeActivoImportador();
  const tripVouchers = (window.pluxTripApi?.getTripVouchers ? window.pluxTripApi.getTripVouchers() : []).filter(v => !esVoucherCorruptoOCR(v));
  const mergedKeys = new Set();
  tripVouchers.forEach(v => mergedKeys.add(v._syncKey || v.id || (v.codigo + '|' + v.titulo)));
  wallet.forEach(w => mergedKeys.add(w._syncKey || w.id || (w.codigo + '|' + w.titulo)));
  const totalWalletCount = mergedKeys.size;

  const hasActiveDestinos = (typeof destinos !== 'undefined' && Array.isArray(destinos) && destinos.length > 0);
  const fechaInicioActual = document.getElementById('fechaInicio')?.value || '';
  const viajeros = obtenerViajerosParaReserva();
  const numP = (typeof numPersonas !== 'undefined' && Number(numPersonas) > 0) ? Number(numPersonas) : 1;

  container.innerHTML = `
    <div class="descubrir-section-header" style="margin-top:4px; margin-bottom:14px;">
      <div>
        <h4><i class="fa-solid fa-file-import" style="color:#38bdf8;"></i> Centro Inteligente de Reservas & Billetera de Vouchers</h4>
        <p>Importa PDFs de pasajes, capturas de pantalla, calendarios (.ics) o mails de confirmación. Se sincroniza con Transporte, Alojamiento, Días por fecha y Presupuesto sin duplicar gastos.</p>
      </div>
      <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
        <span class="importador-active-trip-pill ${activeTrip.hasTrip ? 'has-trip' : 'new-trip'}" title="Destino de sincronización actual">
          <i class="fa-solid fa-suitcase-rolling"></i>
          ${activeTrip.hasTrip
            ? `Viaje activo: <strong>${escapeHtml(activeTrip.nombre)}</strong>`
            : `<strong>Viaje nuevo sin guardar</strong>`}
        </span>
        ${hasActiveDestinos ? `
          <button class="btn-card-secondary" onclick="window.irAlItinerarioDesdeReservas()" style="padding:9px 15px;">
            <i class="fa-solid fa-calendar-check" style="color:var(--verde);"></i> Ver itinerario (${destinos.length} ${destinos.length === 1 ? 'destino' : 'destinos'})
          </button>
        ` : ''}
      </div>
    </div>

    <!-- Selector de 3 Modos de Trabajo -->
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
      <div class="comparador-subswitch" style="margin:0;">
        <button type="button" class="subswitch-btn ${pluxReservaInputMode === 'smart' ? 'active' : ''}" onclick="window.cambiarModoImportadorReserva('smart')">
          <i class="fa-solid fa-wand-magic-sparkles"></i> Pegar Mail / Subir PDF o Captura
        </button>
        <button type="button" class="subswitch-btn ${pluxReservaInputMode === 'express' ? 'active' : ''}" onclick="window.cambiarModoImportadorReserva('express')">
          <i class="fa-solid fa-bolt"></i> Carga Rápida Manual (Express)
        </button>
        <button type="button" class="subswitch-btn ${pluxReservaInputMode === 'wallet' ? 'active' : ''}" onclick="window.cambiarModoImportadorReserva('wallet')">
          <i class="fa-solid fa-wallet"></i> Billetera de Vouchers (<span id="walletTabCountBadge">${totalWalletCount}</span>)
        </button>
      </div>

      <div class="importador-active-trip-bar" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
        <span style="display:inline-flex; align-items:center; gap:8px;">
          <i class="fa-solid fa-link" style="color:#38bdf8;"></i>
          Sincronizando con: <strong style="color:#fff; font-size:0.86rem;">${escapeHtml(activeTrip.nombre || 'Viaje actual')}</strong>
          <span style="font-size:0.75rem; color:#94a3b8;">(${activeTrip.destinosCount} ${activeTrip.destinosCount === 1 ? 'destino' : 'destinos'})</span>
        </span>
        <div style="display:flex; align-items:center; gap:10px;">
          <span><i class="fa-regular fa-calendar" style="color:#38bdf8;"></i> Inicio: <strong style="color:#fff;">${fechaInicioActual || 'Se autodetecta al importar'}</strong></span>
          <span>·</span>
          <span><i class="fa-solid fa-users" style="color:var(--verde);"></i> <strong style="color:#fff;">${numP} ${numP === 1 ? 'viajero' : 'viajeros'}</strong></span>
        </div>
      </div>
    </div>

    ${pluxReservaInputMode === 'smart' ? `
      <div class="reservas-importer-grid">
        <!-- Columna Izquierda: Entrada Multi-Formato -->
        <div class="reservas-panel-card">
          <div class="reservas-panel-title">
            <h4><i class="fa-solid fa-file-circle-plus" style="color:var(--verde);"></i> 1. Subir Comprobante o Pegar Mail</h4>
            <span style="font-size:0.74rem; color:#38bdf8; font-weight:700;">PDF · Captura PNG/JPG · ICS · EML · Texto</span>
          </div>

          <!-- Dropzone Universal con soporte Drag & Drop -->
          <div id="reservaDropzoneArea" class="reservas-dropzone-bar"
               ondragover="event.preventDefault(); this.style.borderColor='var(--verde)'; this.style.background='rgba(16,185,129,0.12)';"
               ondragleave="this.style.borderColor='rgba(56,189,248,0.4)'; this.style.background='rgba(56,189,248,0.06)';"
               ondrop="window.manejarDropArchivoReserva(event)"
               style="flex-direction:column; align-items:stretch; gap:10px; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
              <span style="font-size:0.82rem; color:#e2e8f0; font-weight:600;">
                <i class="fa-solid fa-cloud-arrow-up" style="color:#38bdf8; margin-right:6px;"></i>
                Arrastra uno o varios <strong>PDFs</strong>, <strong>capturas de pantalla</strong> o calendarios <strong>.ics</strong>:
              </span>
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <label style="cursor:pointer; background:linear-gradient(135deg, rgba(56,189,248,0.22), rgba(16,185,129,0.18)); border:1px solid rgba(56,189,248,0.45); color:#ffffff; padding:6px 12px; border-radius:8px; font-weight:700; font-size:0.78rem; display:inline-flex; align-items:center; gap:6px;">
                  <i class="fa-solid fa-images" style="color:#38bdf8;"></i> Subir PDFs / Imágenes / ICS
                  <input type="file" multiple accept=".pdf,.png,.jpg,.jpeg,.webp,.ics,.eml,.txt,.html,.json" style="display:none;" onchange="window.subirArchivoReserva(event)">
                </label>
                <button type="button" onclick="window.pegarPortapapelesReserva()" style="cursor:pointer; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.16); color:#e2e8f0; padding:6px 11px; border-radius:8px; font-weight:700; font-size:0.78rem; display:inline-flex; align-items:center; gap:5px;">
                  <i class="fa-solid fa-paste"></i> Pegar
                </button>
              </div>
            </div>
            <div id="reservaFileStatusBanner" class="reserva-status-banner" style="display:${pluxPendingImages.length > 0 || pluxPendingImagePreview ? 'flex' : 'none'};">
              ${generarBannerArchivosReservaHTML()}
            </div>
          </div>

          <textarea id="reservaRawInput" class="reserva-raw-textarea"
                    onpaste="setTimeout(() => window.analizarTextoReserva(true), 80)"
                    placeholder="Pega aquí el mail de confirmación (Iberia, Aerolíneas, LATAM, Booking.com, Airbnb, Trenitalia, Renfe, Civitatis...) o arrastra un archivo PDF o captura arriba. Si pegas varios mails separados por '---', Plux los detecta todos de una vez."></textarea>

          <div class="reservas-actions-row">
            <button type="button" class="btn-card-primary" style="flex:1.5; padding:12px 18px;" onclick="window.analizarTextoReserva()">
              <i class="fa-solid fa-bolt"></i> Detectar y Estructurar Reservas
            </button>
            <button type="button" class="btn-card-secondary" style="flex:1; padding:12px 14px;" onclick="window.analizarReservaConIA()" title="Usar IA para extraer reservas de textos libres o desordenados">
              <i class="fa-solid fa-wand-magic-sparkles" style="color:#a855f7;"></i> Extraer con IA
            </button>
            <button type="button" class="btn-card-secondary" style="padding:12px 14px;" onclick="window.limpiarImportadorReserva()" title="Limpiar">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>

        <!-- Columna Derecha: Tarjetas Detectadas y Sincronización -->
        <div class="reservas-panel-card">
          <div class="reservas-panel-title">
            <h4><i class="fa-solid fa-ticket-simple" style="color:#38bdf8;"></i> 2. Revisión, Presupuesto y Destino</h4>
            <span id="reservasDetectadasCounter" style="font-size:0.78rem; font-weight:800; color:var(--verde);"></span>
          </div>
          <div id="reservasDetectadasContainer"></div>
        </div>
      </div>
    ` : ''}

    ${pluxReservaInputMode === 'express' ? renderizarFormularioExpressReservaHTML(viajeros) : ''}

    <!-- Billetera de Vouchers Guardados (Siempre visible o expandida en modo Wallet) -->
    <div class="wallet-reservas-section" style="${pluxReservaInputMode === 'wallet' ? 'margin-top:4px; padding-top:10px; border-top:none;' : ''}">
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
        <div>
          <h4 style="margin:0; font-size:1.15rem; font-weight:800; color:#ffffff; display:flex; align-items:center; gap:8px;">
            <i class="fa-solid fa-wallet" style="color:var(--verde);"></i> Billetera Offline de Boarding Passes & Vouchers (<span id="walletCountBadge">${totalWalletCount}</span>)
          </h4>
          <p style="margin:2px 0 0 0; font-size:0.82rem; color:var(--gris);">Ordenados cronológicamente con código PNR, PIN de hotel y vista de pase completo para mostrar en recepción o embarque.</p>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
          <div id="walletScopeSwitch" class="wallet-scope-switch" role="tablist" aria-label="Alcance de vouchers">
            <button type="button" id="walletScopeBtnTrip" class="wallet-scope-btn ${pluxWalletScope === 'trip' ? 'active' : ''}" onclick="window.cambiarScopeWalletReservas('trip')">
              <i class="fa-solid fa-suitcase-rolling"></i> De este viaje (<span id="walletTripCount">0</span>)
            </button>
            <button type="button" id="walletScopeBtnAll" class="wallet-scope-btn ${pluxWalletScope === 'all' ? 'active' : ''}" onclick="window.cambiarScopeWalletReservas('all')">
              <i class="fa-solid fa-layer-group"></i> Todos los viajes (<span id="walletAllCount">${totalWalletCount}</span>)
            </button>
          </div>
          <input type="text" id="walletSearchInput" value="${escapeHtml(pluxWalletSearch)}" placeholder="Buscar por PNR, ciudad, hotel..." oninput="window.buscarEnWalletReservas(this.value)" style="background:rgba(15,23,42,0.85); border:1px solid rgba(255,255,255,0.14); border-radius:10px; padding:7px 12px; color:#fff; font-size:0.8rem; outline:none; min-width:190px;">
          ${totalWalletCount > 0 ? `
            <button type="button" class="btn-card-secondary" style="padding:7px 12px; font-size:0.78rem;" onclick="window.sincronizarTodaLaWalletAlViaje()">
              <i class="fa-solid fa-arrows-rotate" style="color:var(--verde);"></i> Volcar todas al viaje actual
            </button>
          ` : ''}
        </div>
      </div>

      <div class="descubrir-chips-filter" id="walletCategoryChips" style="margin-top:12px;">
        <button type="button" id="walletChipTodas" class="filter-chip ${pluxWalletFilter === 'todas' ? 'active' : ''}" onclick="window.filtrarWalletReservas('todas', this)">Todas (${totalWalletCount})</button>
        <button type="button" class="filter-chip ${pluxWalletFilter === 'crucero' ? 'active' : ''}" onclick="window.filtrarWalletReservas('crucero', this)"><i class="fa-solid fa-ship"></i> Cruceros</button>
        <button type="button" class="filter-chip ${pluxWalletFilter === 'vuelo' ? 'active' : ''}" onclick="window.filtrarWalletReservas('vuelo', this)"><i class="fa-solid fa-plane"></i> Vuelos</button>
        <button type="button" class="filter-chip ${pluxWalletFilter === 'hotel' ? 'active' : ''}" onclick="window.filtrarWalletReservas('hotel', this)"><i class="fa-solid fa-hotel"></i> Hoteles / Airbnb</button>
        <button type="button" class="filter-chip ${pluxWalletFilter === 'tren' ? 'active' : ''}" onclick="window.filtrarWalletReservas('tren', this)"><i class="fa-solid fa-train"></i> Trenes / Buses</button>
        <button type="button" class="filter-chip ${pluxWalletFilter === 'actividad' ? 'active' : ''}" onclick="window.filtrarWalletReservas('actividad', this)"><i class="fa-solid fa-ticket"></i> Entradas / Tours</button>
        <button type="button" class="filter-chip ${pluxWalletFilter === 'auto' ? 'active' : ''}" onclick="window.filtrarWalletReservas('auto', this)"><i class="fa-solid fa-car-side"></i> Autos</button>
      </div>

      <div id="walletReservasContainer" class="wallet-cards-grid"></div>
    </div>
  `;

  if (pluxReservaInputMode === 'smart') {
    renderizarTarjetasReservasDetectadas();
  }
  renderizarWalletReservas();
}

function renderizarFormularioExpressReservaHTML(viajeros) {
  const defaultCity = pluxPreselectedDestino || (typeof destinos !== 'undefined' && destinos[0]?.nombre) || '';
  const rawTripStart = document.getElementById('fechaInicio')?.value || '';
  const defaultDate = rawTripStart ? rawTripStart.slice(0, 10) : new Date().toISOString().slice(0, 10);

  return `
    <div class="reservas-panel-card" style="margin-bottom:20px;">
      <div class="reservas-panel-title">
        <h4><i class="fa-solid fa-bolt" style="color:var(--verde);"></i> Carga Rápida Estructurada (Sin pegar mail)</h4>
        <div class="descubrir-chips-filter">
          ${[
            { id: 'vuelo', icon: 'fa-plane', label: 'Vuelo' },
            { id: 'hotel', icon: 'fa-hotel', label: 'Hotel / Airbnb' },
            { id: 'tren', icon: 'fa-train', label: 'Tren / Bus' },
            { id: 'actividad', icon: 'fa-ticket', label: 'Entrada / Tour' },
            { id: 'auto', icon: 'fa-car-side', label: 'Alquiler Auto' }
          ].map(t => `
            <button type="button" class="filter-chip ${pluxExpressTipo === t.id ? 'active' : ''}" onclick="window.cambiarTipoExpressReserva('${t.id}')">
              <i class="fa-solid ${t.icon}"></i> ${t.label}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="voucher-fields-grid" style="grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap:12px;">
        <div class="voucher-field" style="grid-column: span 2;">
          <label>${pluxExpressTipo === 'vuelo' ? 'Aerolínea y N° de Vuelo' : (pluxExpressTipo === 'hotel' ? 'Nombre del Hotel / Airbnb' : (pluxExpressTipo === 'tren' ? 'Operador y Tren / Bus' : 'Nombre de la Actividad / Reserva'))}</label>
          <input type="text" id="expInputTitulo" placeholder="${pluxExpressTipo === 'vuelo' ? 'Ej: Iberia IB6844' : (pluxExpressTipo === 'hotel' ? 'Ej: Hotel Artemide Roma' : (pluxExpressTipo === 'tren' ? 'Ej: Trenitalia Frecciarossa 9618' : 'Ej: Entrada Coliseo y Foro Romano'))}">
        </div>

        ${(pluxExpressTipo === 'vuelo' || pluxExpressTipo === 'tren') ? `
          <div class="voucher-field">
            <label>Ciudad / Aeropuerto de Salida</label>
            <input type="text" id="expInputOrigen" placeholder="Ej: Buenos Aires (EZE)" value="${escapeHtml(document.getElementById('lugarSalida')?.value || '')}">
          </div>
        ` : ''}

        <div class="voucher-field">
          <label>${(pluxExpressTipo === 'vuelo' || pluxExpressTipo === 'tren') ? 'Ciudad de Llegada / Destino' : 'Ciudad del Viaje'}</label>
          <input type="text" id="expInputCiudad" placeholder="Ej: Roma, Madrid, Tokio..." value="${escapeHtml(defaultCity)}">
        </div>

        <div class="voucher-field">
          <label>Código PNR / Confirmación / PIN</label>
          <input type="text" id="expInputCodigo" placeholder="Ej: K8M4X9 o PIN 7391" style="font-family:monospace; font-weight:800; color:var(--verde);">
        </div>

        <div class="voucher-field">
          <label>${pluxExpressTipo === 'hotel' ? 'Fecha de Check-in' : 'Fecha'}</label>
          <input type="date" id="expInputFecha" value="${defaultDate}">
        </div>

        <div class="voucher-field">
          <label>${pluxExpressTipo === 'hotel' ? 'Hora Check-in' : 'Hora Salida / Inicio'}</label>
          <input type="time" id="expInputHora" value="${pluxExpressTipo === 'hotel' ? '15:00' : '10:00'}">
        </div>

        ${pluxExpressTipo === 'hotel' ? `
          <div class="voucher-field">
            <label>Cantidad de Noches</label>
            <input type="number" id="expInputNoches" min="1" max="60" value="3">
          </div>
        ` : `
          <div class="voucher-field">
            <label>Hora Llegada / Fin (Opcional)</label>
            <input type="time" id="expInputHoraFin" value="">
          </div>
        `}

        <div class="voucher-field">
          <label>Precio</label>
          <input type="number" id="expInputCosto" min="0" step="0.01" placeholder="0.00" value="0">
        </div>

        <div class="voucher-field">
          <label>Moneda y Tipo de Monto</label>
          <div style="display:flex; gap:6px;">
            <select id="expInputMoneda" style="width:82px;">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="ARS">ARS</option>
            </select>
            <select id="expInputModoPrecio" style="flex:1;">
              <option value="persona">Por persona</option>
              <option value="total">Total del grupo</option>
            </select>
          </div>
        </div>

        <div class="voucher-field">
          <label>Pagado por</label>
          <select id="expInputPagadoPor">
            <option value="Todos">Todos (Dividido)</option>
            ${viajeros.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('')}
          </select>
        </div>

        <div class="voucher-field" style="grid-column: 1 / -1;">
          <label>Detalles (Dirección, Terminal, Asiento, Equipaje, Punto de Encuentro)</label>
          <input type="text" id="expInputNotas" placeholder="Ej: Terminal A · Asiento 18A · 1 valija de 23kg incluida / Via Nazionale 22">
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:12px;">
        <button type="button" class="btn-card-primary" style="padding:11px 22px;" onclick="window.guardarReservaExpressDirecto()">
          <i class="fa-solid fa-calendar-plus"></i> Guardar en Billetera e Insertar al Viaje
        </button>
      </div>
    </div>
  `;
}

function cambiarTipoExpressReserva(tipo) {
  pluxExpressTipo = tipo || 'vuelo';
  renderizarImportadorReservas();
}

function guardarReservaExpressDirecto() {
  const tituloRaw = document.getElementById('expInputTitulo')?.value?.trim();
  const ciudad = document.getElementById('expInputCiudad')?.value?.trim() || '';
  const origen = document.getElementById('expInputOrigen')?.value?.trim() || '';
  const codigo = document.getElementById('expInputCodigo')?.value?.trim().toUpperCase() || 'CONF-OK';
  const fechaISO = document.getElementById('expInputFecha')?.value || '';
  const normDate = normalizarFechaTexto(fechaISO);
  const hora = document.getElementById('expInputHora')?.value || '10:00';
  const horaFin = document.getElementById('expInputHoraFin')?.value || (pluxExpressTipo === 'hotel' ? '11:00' : '');
  const noches = Math.max(1, parseInt(document.getElementById('expInputNoches')?.value) || 1);
  const costo = parseFloat(document.getElementById('expInputCosto')?.value) || 0;
  const moneda = document.getElementById('expInputMoneda')?.value || 'USD';
  const modoPrecio = document.getElementById('expInputModoPrecio')?.value || 'persona';
  const pagadoPor = document.getElementById('expInputPagadoPor')?.value || 'Todos';
  const notas = document.getElementById('expInputNotas')?.value?.trim() || 'Cargado desde Formulario Express';

  let titulo = tituloRaw;
  if (!titulo) {
    if (pluxExpressTipo === 'vuelo') titulo = `Vuelo ${origen ? origen + ' → ' : ''}${ciudad}`;
    else if (pluxExpressTipo === 'hotel') titulo = `Check-in: Alojamiento en ${ciudad}`;
    else if (pluxExpressTipo === 'tren') titulo = `Tren ${origen ? origen + ' → ' : ''}${ciudad}`;
    else titulo = `Reserva en ${ciudad}`;
  } else if (pluxExpressTipo === 'hotel' && !/check-in/i.test(titulo)) {
    titulo = `Check-in: ${titulo}`;
  }

  const res = {
    id: 'res_' + Date.now() + '_' + Math.floor(Math.random() * 999),
    tipo: pluxExpressTipo,
    titulo,
    ciudad,
    origen,
    proveedor: tituloRaw || pluxExpressTipo.toUpperCase(),
    codigo,
    fecha: normDate.display || fechaISO,
    fechaISO: normDate.iso || fechaISO,
    fechaFin: '',
    hora,
    horaFin,
    duracion: pluxExpressTipo === 'vuelo' ? 240 : (pluxExpressTipo === 'tren' ? 120 : 120),
    noches,
    costo,
    moneda,
    modoPrecio,
    pagado: true,
    pagadoPor,
    escalas: [],
    notas,
    diaIndex: calcularDiaViajePorFechaISO(normDate.iso || fechaISO),
    targetDestMode: 'auto',
    sincronizarFechaInicio: !document.getElementById('fechaInicio')?.value,
    guardarEnTransporte: pluxExpressTipo === 'vuelo' || pluxExpressTipo === 'tren' || pluxExpressTipo === 'hotel',
    expandirNoches: pluxExpressTipo === 'hotel',
    rawEmail: `${titulo}\nCiudad: ${ciudad}\nFecha: ${normDate.display}\nHora: ${hora}\nCódigo: ${codigo}\nNotas: ${notas}`,
    agregadoAlViaje: false
  };
  res._syncKey = computeBookingSyncKey(res);

  solicitarDestinoSincronizacion([res], () => {
    const targetDest = upsertBookingInTrip(res);
    res.agregadoAlViaje = true;
    guardarReservaEnWallet(res);
    finalizarSincronizacionImportacion();

    pluxReservaInputMode = 'wallet';
    renderizarImportadorReservas();
    if (typeof window.showToast === 'function') {
      window.showToast(`Reserva "${res.titulo}" sincronizada en ${targetDest ? targetDest.nombre : ciudad}`, 'success');
    }
  });
}

function limpiarImportadorReserva() {
  const input = document.getElementById('reservaRawInput');
  if (input) input.value = '';
  pluxDetectedReservas = [];
  pluxLastVisionBatches = [];
  pluxLastDocReservas = [];
  pluxPendingImagePreview = null;
  pluxPendingImages = [];
  pluxOcrInProgress = false;
  pluxOcrStatusText = '';
  actualizarBannerArchivosReserva();
  renderizarTarjetasReservasDetectadas();
}

function resetImportadorEstadoPorCambioViaje() {
  pluxDetectedReservas = [];
  pluxPendingImages = [];
  pluxPendingImagePreview = null;
  pluxLastVisionBatches = [];
  pluxLastDocReservas = [];
  pluxOcrInProgress = false;
  pluxOcrStatusText = '';
  pluxPreselectedDestino = '';
  pluxWalletScope = 'trip';
  pluxWalletScopeUserPicked = false;

  const input = document.getElementById('reservaRawInput');
  if (input) input.value = '';

  const modal = document.getElementById('modal-descubrir');
  const isModalOpen = Boolean(
    modal &&
    modal.style.display !== 'none' &&
    (typeof window.getComputedStyle !== 'function' || window.getComputedStyle(modal).display !== 'none')
  );
  if (isModalOpen && document.getElementById('descubrir-reservas-content')) {
    renderizarImportadorReservas();
  } else {
    actualizarBannerArchivosReserva();
    renderizarTarjetasReservasDetectadas();
    renderizarWalletReservas();
  }
}

function quitarImagenReservaAdjunta() {
  pluxPendingImagePreview = null;
  pluxPendingImages = [];
  pluxLastVisionBatches = [];
  pluxOcrInProgress = false;
  pluxOcrStatusText = '';
  actualizarBannerArchivosReserva();
}

function quitarImagenReservaIndividual(idx) {
  if (idx >= 0 && idx < pluxPendingImages.length) {
    pluxPendingImages.splice(idx, 1);
    pluxPendingImagePreview = pluxPendingImages[0]?.dataUrl || null;
    actualizarBannerArchivosReserva();
  }
}

async function pegarPortapapelesReserva() {
  try {
    const text = await navigator.clipboard.readText();
    const input = document.getElementById('reservaRawInput');
    if (input && text) {
      input.value = text;
      analizarTextoReserva();
    } else if (typeof window.showToast === 'function') {
      window.showToast('El portapapeles está vacío', 'info');
    }
  } catch (e) {
    if (typeof window.showToast === 'function') {
      window.showToast('Usa Ctrl+V directamente dentro del cuadro de texto', 'info');
    }
  }
}

function manejarDropArchivoReserva(event) {
  event.preventDefault();
  const dz = document.getElementById('reservaDropzoneArea');
  if (dz) {
    dz.style.borderColor = 'rgba(56,189,248,0.4)';
    dz.style.background = 'rgba(56,189,248,0.06)';
  }
  const files = event?.dataTransfer?.files ? Array.from(event.dataTransfer.files) : [];
  if (files.length > 0) {
    procesarMultiplesArchivosReserva(files);
  }
}

function subirArchivoReserva(event) {
  const files = event?.target?.files ? Array.from(event.target.files) : [];
  if (files.length > 0) {
    procesarMultiplesArchivosReserva(files);
  }
  if (event?.target) event.target.value = '';
}

function comprimirImagenParaAnalisis(file, maxSide = 1100, quality = 0.80) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function(ev) {
      const rawUrl = String(ev.target?.result || '');
      const img = new Image();
      img.onload = function() {
        try {
          let w = img.width;
          let h = img.height;
          if (w > maxSide || h > maxSide) {
            const scale = maxSide / Math.max(w, h);
            w = Math.round(w * scale);
            h = Math.round(h * scale);
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', quality));
        } catch (_) {
          resolve(rawUrl);
        }
      };
      img.onerror = () => resolve(rawUrl);
      img.src = rawUrl;
    };
    reader.readAsDataURL(file);
  });
}

function extraerJsonDeRespuestaIA(rawText) {
  if (!rawText) return null;
  let cleaned = String(rawText).trim();
  const fenceMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenceMatch) cleaned = fenceMatch[1].trim();
  try {
    return JSON.parse(cleaned);
  } catch (_) {}
  const firstBrace = cleaned.indexOf('{');
  const lastBrace = cleaned.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    try {
      return JSON.parse(cleaned.slice(firstBrace, lastBrace + 1));
    } catch (_) {}
  }
  const firstBracket = cleaned.indexOf('[');
  const lastBracket = cleaned.lastIndexOf(']');
  if (firstBracket !== -1 && lastBracket > firstBracket) {
    try {
      return JSON.parse(cleaned.slice(firstBracket, lastBracket + 1));
    } catch (_) {}
  }
  return null;
}

function esRechazoVisualExplicito(txt) {
  const s = String(txt || '').trim();
  if (!s) return true;
  return /\b(cannot view|can't view|can't see|unable to view|unable to see|i do not have access to images|no puedo ver las im[aá]genes|no tengo acceso a la imagen|no puedo visualizar la imagen)\b/i.test(s);
}

async function fetchVisionWorkerConTimeout(payload, timeoutMs = 35000) {
  const workerUrl = (typeof window.GEMINI_ENDPOINT !== 'undefined' && window.GEMINI_ENDPOINT)
    ? window.GEMINI_ENDPOINT
    : 'https://pluxy.nibecar-cofeben.workers.dev/';
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;
  try {
    const resp = await fetch(workerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller ? controller.signal : undefined,
      body: JSON.stringify(payload)
    });
    return resp;
  } finally {
    if (timer) clearTimeout(timer);
  }
}

async function analizarSubloteVisionDirecto(subImgs, retryAttempt = 0) {
  const contentParts = [
    {
      type: 'text',
      text: `Analiza estas ${subImgs.length} imágenes de viaje/reservas y responde ÚNICAMENTE con un objeto JSON válido con esta estructura exacta:
{
  "transcript": "texto visible principal separado por ---",
  "bookingMeta": {
    "tipo": "crucero|vuelo|hotel|tren|actividad|auto",
    "titulo": "",
    "proveedor": "",
    "nave": "",
    "codigo": "",
    "cabina": "",
    "moneda": "USD|EUR|ARS",
    "costo": 0,
    "montoPagado": 0,
    "saldoPendiente": 0,
    "modoPrecio": "total|persona",
    "notas": "",
    "detallesExtra": []
  },
  "stages": [
    {
      "diaNum": 1,
      "fechaRaw": "23 ENE",
      "fechaISO": "",
      "ciudad": "Buenos Aires",
      "esNavegacion": false,
      "horaLlegada": "",
      "horaSalida": "18:00",
      "notas": ""
    }
  ]
}
REGLAS CRÍTICAS:
1. Extrae SOLO la tarjeta, día o reserva PRINCIPAL enfocada/centrada en cada imagen. IGNORA por completo tarjetas vecinas parcialmente cortadas en los márgenes izquierdo o derecho.
2. Si el año NO aparece en la imagen, deja "fechaISO": "" y pon la fecha visible exacta en "fechaRaw" (ej: "23 ENE", "1 FEB").
3. Conserva "diaNum" exacto si dice "DÍA 4", "DÍA 9", etc.
4. Si dice "DESEMBARQUE CON BOTE AUXILIAR" o "servicio de tenders", escríbelo en "notas" de esa etapa.
5. Si es un vuelo/hotel/tren/actividad sin tabla de etapas, completa "bookingMeta" y opcionalmente una etapa con fecha, ciudad y horarios.`
    },
    ...subImgs.map(img => ({ type: 'image_url', image_url: { url: img.dataUrl } }))
  ];

  const payload = {
    system: 'Eres un motor Vision-AI de extracción estructurada para comprobantes, itinerarios y capturas de viaje. Responde SOLO con JSON válido sin bloques markdown.',
    messages: [{ role: 'user', content: contentParts }],
    temperature: 0.1,
    max_tokens: 4000
  };

  subImgs.forEach(img => { img.status = 'processing'; img.errorMsg = ''; });
  actualizarBannerArchivosReserva();

  try {
    const resp = await fetchVisionWorkerConTimeout(payload, 35000);
    if (!resp.ok) {
      const status = resp.status;
      let errBody = null;
      try { errBody = await resp.json(); } catch (_) {}
      // Si el worker ya reportó que todos los proveedores Vision fallaron, no reintentar en cascada 16 veces
      if (status === 502 && errBody && errBody.visionFailed) {
        if (subImgs.length > 1 && retryAttempt === 0) {
          // Intentar solo 1 imagen de muestra por si el proveedor rechazó multi-imagen; si falla, marcar todas
          const firstRes = await analizarSubloteVisionDirecto([subImgs[0]], 1);
          if (firstRes.length > 0) {
            const rest = [];
            for (let k = 1; k < subImgs.length; k++) {
              const r = await analizarSubloteVisionDirecto([subImgs[k]], 1);
              rest.push(...r);
            }
            return [...firstRes, ...rest];
          }
        }
        subImgs.forEach(img => { img.status = 'failed'; img.errorMsg = 'Vision IA no disponible (502)'; });
        actualizarBannerArchivosReserva();
        return [];
      }
      // Split immediately on payload too large / bad request with >1 image
      if ((status === 400 || status === 413) && subImgs.length > 1) {
        const mid = Math.ceil(subImgs.length / 2);
        const left = await analizarSubloteVisionDirecto(subImgs.slice(0, mid), 0);
        const right = await analizarSubloteVisionDirecto(subImgs.slice(mid), 0);
        return [...left, ...right];
      }
      // Retry once with 1.2s backoff on 429/5xx
      if ((status === 429 || status >= 500) && retryAttempt < 1) {
        await new Promise(r => setTimeout(r, 1200));
        return analizarSubloteVisionDirecto(subImgs, retryAttempt + 1);
      }
      subImgs.forEach(img => { img.status = 'failed'; img.errorMsg = `HTTP ${status}`; });
      actualizarBannerArchivosReserva();
      return [];
    }

    const data = await resp.json();
    const replyTxt = String(data.text || data.reply || '').trim();
    const parsedJson = extraerJsonDeRespuestaIA(replyTxt);

    if (parsedJson && typeof parsedJson === 'object') {
      const batchObj = Array.isArray(parsedJson)
        ? { transcript: '', bookingMeta: parsedJson[0] || {}, stages: parsedJson.flatMap(x => x?.stages || x?.etapas || []) }
        : {
            transcript: String(parsedJson.transcript || '').trim(),
            bookingMeta: (parsedJson.bookingMeta && typeof parsedJson.bookingMeta === 'object') ? parsedJson.bookingMeta : {},
            stages: Array.isArray(parsedJson.stages) ? parsedJson.stages : (Array.isArray(parsedJson.etapas) ? parsedJson.etapas : [])
          };
      subImgs.forEach(img => {
        img.status = 'done';
        img.errorMsg = '';
        if (batchObj.transcript) img.ocrText = batchObj.transcript;
      });
      actualizarBannerArchivosReserva();
      return [batchObj];
    }

    // Fallback: valid plain-text transcript (handles concise responses like "DÍA 1 - 23 ENE\nBuenos Aires\nSalida 18:00")
    if (replyTxt && !esRechazoVisualExplicito(replyTxt)) {
      const stagesFromTxt = extraerEtapasItinerarioTexto(replyTxt);
      const cruiseFromTxt = intentarParsearCruceroOItinerario(replyTxt);
      const isValidPlainText = esTextoReservaValido(replyTxt);
      if (stagesFromTxt.length > 0 || cruiseFromTxt || isValidPlainText) {
        subImgs.forEach(img => {
          img.status = 'done';
          img.errorMsg = '';
          img.ocrText = replyTxt;
        });
        actualizarBannerArchivosReserva();
        return [{
          transcript: replyTxt,
          bookingMeta: cruiseFromTxt ? {
            tipo: cruiseFromTxt.tipo,
            titulo: cruiseFromTxt.titulo,
            proveedor: cruiseFromTxt.proveedor,
            codigo: cruiseFromTxt.codigo,
            costo: cruiseFromTxt.costo,
            moneda: cruiseFromTxt.moneda
          } : {},
          stages: stagesFromTxt
        }];
      }
    }

    // Unparseable or explicit visual refusal -> retry once or split
    if (retryAttempt < 1) {
      await new Promise(r => setTimeout(r, 1200));
      return analizarSubloteVisionDirecto(subImgs, retryAttempt + 1);
    }
    if (subImgs.length > 1) {
      const mid = Math.ceil(subImgs.length / 2);
      const left = await analizarSubloteVisionDirecto(subImgs.slice(0, mid), 0);
      const right = await analizarSubloteVisionDirecto(subImgs.slice(mid), 0);
      return [...left, ...right];
    }
    subImgs.forEach(img => { img.status = 'failed'; img.errorMsg = 'Sin respuesta visual útil'; });
    actualizarBannerArchivosReserva();
    return [];
  } catch (err) {
    if (retryAttempt < 1) {
      await new Promise(r => setTimeout(r, 1200));
      return analizarSubloteVisionDirecto(subImgs, retryAttempt + 1);
    }
    if (subImgs.length > 1) {
      const mid = Math.ceil(subImgs.length / 2);
      const left = await analizarSubloteVisionDirecto(subImgs.slice(0, mid), 0);
      const right = await analizarSubloteVisionDirecto(subImgs.slice(mid), 0);
      return [...left, ...right];
    }
    subImgs.forEach(img => { img.status = 'failed'; img.errorMsg = err?.name === 'AbortError' ? 'Timeout (35s)' : (err?.message || 'Error de red'); });
    actualizarBannerArchivosReserva();
    return [];
  }
}

async function leerTextoImagenesTesseractFallback(imagesList) {
  try {
    if (!window.Tesseract) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    if (window.Tesseract) {
      const worker = await window.Tesseract.createWorker('spa+eng');
      const ocrBlocks = [];
      let unreadableCount = 0;
      for (let i = 0; i < imagesList.length; i++) {
        imagesList[i].status = 'processing';
        actualizarBannerArchivosReserva(`OCR local (offline) ${i + 1}/${imagesList.length}...`);
        const res = await worker.recognize(imagesList[i].dataUrl);
        const t = (res?.data?.text || '').trim();
        const hasUsefulStages = t ? extraerEtapasItinerarioTexto(t).length > 0 : false;
        const hasUsefulCruise = t ? Boolean(intentarParsearCruceroOItinerario(t)) : false;
        const isReadable = Boolean(t && (hasUsefulStages || hasUsefulCruise || esTextoReservaValido(t)));
        if (isReadable) {
          imagesList[i].status = 'done';
          imagesList[i].errorMsg = '';
          imagesList[i].ocrText = t;
          ocrBlocks.push(t);
        } else {
          unreadableCount += 1;
          imagesList[i].status = 'failed';
          imagesList[i].errorMsg = 'Texto ilegible en captura (OCR)';
          imagesList[i].ocrText = '';
        }
      }
      await worker.terminate();
      actualizarBannerArchivosReserva();
      if (unreadableCount > 0 && typeof window.showToast === 'function') {
        if (ocrBlocks.length === 0) {
          window.showToast(`No se pudo leer texto legible en ${unreadableCount === 1 ? 'la captura' : 'las ' + unreadableCount + ' capturas'}. Usa "Reintentar fallidas" con Vision IA o sube el PDF.`, 'error');
        } else {
          window.showToast(`${unreadableCount} ${unreadableCount === 1 ? 'captura no tuvo' : 'capturas no tuvieron'} texto legible y fueron marcadas como fallidas.`, 'info');
        }
      }
      return ocrBlocks.join('\n---\n');
    }
  } catch (e2) {
    console.warn('Error en Tesseract OCR fallback:', e2);
    imagesList.forEach(img => {
      if (img.status === 'processing' || img.status === 'pending') {
        img.status = 'failed';
        img.errorMsg = 'OCR local falló';
      }
    });
    actualizarBannerArchivosReserva();
  }
  return '';
}

async function analizarImagenesVisionDirecto(imagesList) {
  const MAX_BATCH = 3;
  const succeededBatches = [];

  if (navigator.onLine) {
    const batches = [];
    for (let i = 0; i < imagesList.length; i += MAX_BATCH) {
      batches.push(imagesList.slice(i, i + MAX_BATCH));
    }
    for (let bIdx = 0; bIdx < batches.length; bIdx++) {
      actualizarBannerArchivosReserva(`Analizando lote ${bIdx + 1} de ${batches.length} (${batches[bIdx].length} ${batches[bIdx].length === 1 ? 'imagen' : 'imágenes'}) con Vision IA...`);
      const results = await analizarSubloteVisionDirecto(batches[bIdx], 0);
      if (results.length > 0) {
        succeededBatches.push(...results);
      }
    }
    if (succeededBatches.length > 0) {
      return { batches: succeededBatches, usedFallbackOcr: false };
    }
  }

  // Fallback Tesseract SOLO si estamos offline o si fallaron TODOS los lotes Vision
  const ocrText = await leerTextoImagenesTesseractFallback(imagesList);
  if (ocrText) {
    const stages = extraerEtapasItinerarioTexto(ocrText);
    return {
      batches: [{ transcript: ocrText, bookingMeta: {}, stages }],
      usedFallbackOcr: true
    };
  }
  return { batches: [], usedFallbackOcr: false };
}

async function reintentarImagenesFallidasReserva() {
  if (pluxOcrInProgress) return;
  const failedImgs = pluxPendingImages.filter(img => img.status === 'failed');
  if (failedImgs.length === 0) return;

  pluxOcrInProgress = true;
  actualizarBannerArchivosReserva(`Reintentando ${failedImgs.length} ${failedImgs.length === 1 ? 'imagen fallida' : 'imágenes fallidas'}...`);
  try {
    const { batches } = await analizarImagenesVisionDirecto(failedImgs);
    if (batches.length > 0) {
      pluxLastVisionBatches = [...pluxLastVisionBatches, ...batches];
      const unified = unificarResultadosImportacion(pluxLastVisionBatches, pluxLastDocReservas);
      if (unified.length > 0) {
        pluxDetectedReservas = unified;
        renderizarTarjetasReservasDetectadas();
      }
      const transcripts = batches.map(b => b.transcript).filter(Boolean).join('\n---\n');
      const input = document.getElementById('reservaRawInput');
      if (input && transcripts) {
        input.value = input.value ? `${input.value.trim()}\n---\n${transcripts}` : transcripts;
      }
      if (typeof window.showToast === 'function') {
        window.showToast('Imágenes reintentadas e integradas en tu itinerario', 'success');
      }
    } else if (typeof window.showToast === 'function') {
      window.showToast('No se pudieron recuperar las imágenes fallidas. Intenta de nuevo en unos segundos.', 'error');
    }
  } finally {
    pluxOcrInProgress = false;
    actualizarBannerArchivosReserva();
  }
}

function parsearTextoDocumentoAReservas(rawText) {
  const clean = String(rawText || '').trim();
  if (!clean) return [];
  const cruiseParsed = intentarParsearCruceroOItinerario(clean);
  if (cruiseParsed) return [cruiseParsed];

  const rawBlocks = clean.split(/\n\s*---+\s*\n|\n(?=RESERVA\s+\d+\s*:)/i).map(b => b.trim()).filter(Boolean);
  const validBlocks = rawBlocks.filter(b => esTextoReservaValido(b));
  if (validBlocks.length === 0) return [];

  let earliestISO = (document.getElementById('fechaInicio')?.value || '').slice(0, 10);
  if (!earliestISO) {
    const allDates = extraerFechasDeTexto(clean).map(d => d.iso).filter(Boolean).sort();
    if (allDates.length > 0) earliestISO = allDates[0];
  }
  const parsed = validBlocks.map((b, idx) => parsearBloqueIndividualReserva(b, idx, earliestISO));
  return deduplicarReservasPorSyncKey(parsed);
}

async function procesarMultiplesArchivosReserva(files) {
  const imageFiles = [];
  const docFiles = [];

  files.forEach(f => {
    const n = (f.name || '').toLowerCase();
    if ((f.type && f.type.startsWith('image/')) || /\.(png|jpg|jpeg|webp)$/i.test(n)) {
      imageFiles.push(f);
    } else {
      docFiles.push(f);
    }
  });

  const input = document.getElementById('reservaRawInput');
  const docTextParts = [];

  // 1. Procesar PDFs, ICS, EML, TXT (deduplicando pluxLastDocReservas por _syncKey)
  for (const f of docFiles) {
    const txt = await extraerTextoArchivoDocumento(f);
    if (txt) {
      docTextParts.push(txt);
      const parsedDocs = parsearTextoDocumentoAReservas(txt);
      if (parsedDocs.length > 0) {
        pluxLastDocReservas = deduplicarReservasPorSyncKey([...pluxLastDocReservas, ...parsedDocs]);
      }
    }
  }

  if (docFiles.length > 0 && input && docTextParts.length > 0) {
    const docCombined = docTextParts.join('\n---\n').trim();
    const prevVal = input.value.trim();
    if (!prevVal) {
      input.value = docCombined;
    } else if (!prevVal.includes(docCombined.slice(0, 120))) {
      input.value = `${prevVal}\n---\n${docCombined}`;
    }
  }

  // 2. Procesar imágenes con Vision-First Direct JSON (siempre protegido con try/finally)
  let imagesHadAllFailed = false;
  if (imageFiles.length > 0) {
    pluxOcrInProgress = true;
    try {
      const compressed = [];
      for (const imgFile of imageFiles) {
        const dataUrl = await comprimirImagenParaAnalisis(imgFile, 1100, 0.80);
        compressed.push({
          id: 'img_' + Date.now() + '_' + Math.floor(Math.random() * 9999),
          name: imgFile.name,
          dataUrl,
          ocrText: '',
          status: 'pending',
          errorMsg: ''
        });
      }
      pluxPendingImages = [...pluxPendingImages, ...compressed];
      pluxPendingImagePreview = pluxPendingImages[0]?.dataUrl || null;
      actualizarBannerArchivosReserva(`Preparando ${compressed.length} ${compressed.length === 1 ? 'imagen' : 'imágenes'} para Vision IA...`);

      if (typeof window.showToast === 'function') {
        window.showToast(`Analizando ${compressed.length} ${compressed.length === 1 ? 'imagen' : 'imágenes'} con Vision IA...`, 'info');
      }

      const { batches, usedFallbackOcr } = await analizarImagenesVisionDirecto(compressed);
      imagesHadAllFailed = batches.length === 0 && compressed.every(img => img.status === 'failed');
      if (batches.length > 0) {
        pluxLastVisionBatches = [...pluxLastVisionBatches, ...batches];
        const readableTranscripts = batches
          .map(b => String(b.transcript || '').trim())
          .filter(t => t && (!usedFallbackOcr || esTextoReservaValido(t) || extraerEtapasItinerarioTexto(t).length > 0))
          .join('\n---\n');
        // No ensuciar el textarea con texto OCR crudo si ya hay un PDF/documento estructurado como ancla
        const hasAnchorDoc = pluxLastDocReservas.some(d => d.tipo === 'crucero' || (Array.isArray(d.etapas) && d.etapas.length > 0));
        if (input && readableTranscripts && !(usedFallbackOcr && hasAnchorDoc)) {
          input.value = input.value.trim() ? `${input.value.trim()}\n---\n${readableTranscripts}` : readableTranscripts;
        }
      }
    } finally {
      pluxOcrInProgress = false;
      actualizarBannerArchivosReserva();
    }
  }

  // 3. Unificar resultados (PDF + Vision batches) directamente en pluxDetectedReservas
  const unified = deduplicarReservasPorSyncKey(unificarResultadosImportacion(pluxLastVisionBatches, pluxLastDocReservas));
  if (unified.length > 0) {
    pluxDetectedReservas = unified;
    renderizarTarjetasReservasDetectadas();
    const totalStages = unified.reduce((acc, r) => acc + (Array.isArray(r.etapas) ? r.etapas.length : 0), 0);
    if (typeof window.showToast === 'function' && !(imagesHadAllFailed && docFiles.length === 0)) {
      if (totalStages > 0) {
        window.showToast(`Itinerario estructurado: ${totalStages} paradas detectadas listas para sincronizar`, 'success');
      } else {
        window.showToast(`${unified.length} ${unified.length === 1 ? 'reserva detectada' : 'reservas detectadas'} y listas para revisar`, 'success');
      }
    }
  } else if (!imagesHadAllFailed && input && input.value.trim()) {
    analizarTextoReserva();
  } else if (imageFiles.length > 0 && typeof window.showToast === 'function' && !imagesHadAllFailed) {
    window.showToast('Imágenes adjuntadas. Si alguna falló, usa "Reintentar fallidas" o "Extraer con IA".', 'info');
  }
}

function reconstructPageRows(items, yTolerance = 3.5) {
  if (!Array.isArray(items) || items.length === 0) return '';
  const cells = [];
  for (const item of items) {
    if (!item || typeof item.str !== 'string') continue;
    if (item.str.trim() === '') continue;
    const t = Array.isArray(item.transform) ? item.transform : null;
    const x = t ? Number(t[4]) : Number(item.x || 0);
    const y = t ? Number(t[5]) : Number(item.y || 0);
    const fs = (t ? (Math.abs(Number(t[0])) || Math.abs(Number(t[3]))) : 0) || Number(item.height) || 10;
    const w = typeof item.width === 'number'
      ? item.width
      : (typeof item.w === 'number' ? item.w : item.str.length * fs * 0.5);
    cells.push({ str: item.str, x, y, w, fs });
  }
  if (cells.length === 0) return '';

  // Ordenar por y descendente (arriba hacia abajo) y x ascendente para clustering determinístico
  cells.sort((a, b) => (b.y - a.y) || (a.x - b.x));

  const rows = [];
  for (const c of cells) {
    let targetRow = null;
    let bestDist = Infinity;
    for (const r of rows) {
      const dist = Math.abs(c.y - r.y);
      if (dist <= yTolerance && dist < bestDist) {
        bestDist = dist;
        targetRow = r;
      }
    }
    if (targetRow) {
      targetRow.cells.push(c);
    } else {
      rows.push({ y: c.y, cells: [c] });
    }
  }

  rows.sort((a, b) => b.y - a.y);

  const lines = [];
  for (const row of rows) {
    row.cells.sort((a, b) => a.x - b.x);
    let line = row.cells[0].str;
    let prev = row.cells[0];
    for (let i = 1; i < row.cells.length; i++) {
      const c = row.cells[i];
      const fs = prev.fs || c.fs || 10;
      const dx = c.x - (prev.x + prev.w);
      if (dx >= fs * 2.5) {
        line += '\t' + c.str;
      } else if (dx >= fs * 0.18) {
        line += ' ' + c.str;
      } else {
        line += c.str;
      }
      prev = c;
    }
    const cleanedLine = line.replace(/[ ]+$/g, '').replace(/^[ ]+/g, '');
    if (cleanedLine.trim()) lines.push(cleanedLine);
  }
  return lines.join('\n');
}

async function extraerTextoDePDFBuffer(arrayBuffer) {
  // 1. Intentar con pdf.js desde CDN usando reconstrucción espacial por filas y columnas
  try {
    if (!window.pdfjsLib) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    if (window.pdfjsLib) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const pageTexts = [];
      for (let i = 1; i <= Math.min(pdf.numPages, 15); i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const reconstructed = reconstructPageRows(content.items || [], 3.5);
        if (reconstructed) pageTexts.push(reconstructed);
      }
      const fullText = pageTexts.join('\n').trim();
      if (fullText.length > 15) {
        return fullText;
      }
    }
  } catch (e) {
    console.warn('Fallback nativo PDF activado:', e);
  }

  // 2. Fallback nativo offline
  try {
    const decoder = new TextDecoder('latin1');
    const rawStr = decoder.decode(arrayBuffer);
    const matches = [];
    const parenRegex = /\(([^()\\]{3,160})\)/g;
    let m;
    while ((m = parenRegex.exec(rawStr)) !== null) {
      const cleaned = m[1].replace(/\\r|\\n/g, ' ').replace(/[^\x20-\x7EÁÉÍÓÚáéíóúÑñ€$]/g, '').trim();
      if (cleaned.length >= 3 && /[a-zA-Z0-9]/.test(cleaned)) {
        matches.push(cleaned);
      }
    }
    return matches.join(' ');
  } catch (e2) {
    return '';
  }
}

function decodificarQuotedPrintableEml(raw) {
  return raw
    .replace(/=\r?\n/g, '')
    .replace(/=([0-9A-F]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function extraerTextoArchivoDocumento(file) {
  return new Promise(async (resolve) => {
    const name = (file.name || '').toLowerCase();
    if (name.endsWith('.pdf') || file.type === 'application/pdf') {
      if (typeof window.showToast === 'function') {
        window.showToast(`Leyendo PDF "${file.name}"...`, 'info');
      }
      const arrayBuffer = await file.arrayBuffer();
      const extracted = await extraerTextoDePDFBuffer(arrayBuffer);
      resolve(extracted || `Comprobante PDF: ${file.name}`);
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      let raw = String(e.target?.result || '');
      if (name.endsWith('.ics') || raw.includes('BEGIN:VEVENT')) {
        const blocks = raw.split('BEGIN:VEVENT').slice(1);
        const parsedIcs = blocks.map((b, idx) => {
          const sum = (b.match(/SUMMARY[^:]*:(.*)/i)?.[1] || '').trim();
          const loc = (b.match(/LOCATION[^:]*:(.*)/i)?.[1] || '').trim();
          const desc = (b.match(/DESCRIPTION[^:]*:(.*)/i)?.[1] || '').replace(/\\n/g, ' ').trim();
          const dt = (b.match(/DTSTART[^:]*:(\d{8}T?\d{0,6})/i)?.[1] || '').trim();
          let fechaFmt = '';
          let horaFmt = '10:00';
          if (dt.length >= 8) fechaFmt = `${dt.slice(6,8)}/${dt.slice(4,6)}/${dt.slice(0,4)}`;
          if (dt.includes('T') && dt.length >= 13) horaFmt = `${dt.slice(9,11)}:${dt.slice(11,13)}`;
          return `RESERVA #${idx + 1}\nActividad: ${sum}\nCiudad: ${loc}\nFecha: ${fechaFmt}\nHora: ${horaFmt}\nNotas: ${desc}`;
        }).join('\n---\n');
        if (parsedIcs) raw = parsedIcs;
      } else if (name.endsWith('.eml') || /Content-Transfer-Encoding:\s*quoted-printable/i.test(raw)) {
        raw = decodificarQuotedPrintableEml(raw);
        const tmp = document.createElement('div');
        tmp.innerHTML = raw;
        raw = tmp.innerText || tmp.textContent || raw;
      } else if (name.endsWith('.html') || raw.includes('<body') || raw.includes('<table')) {
        const tmp = document.createElement('div');
        tmp.innerHTML = raw.replace(/<\/(tr|p|div|li|h[1-6]|br)>/gi, '$&\n');
        raw = tmp.innerText || tmp.textContent || raw;
      }
      resolve(raw.trim());
    };
    reader.onerror = () => resolve('');
    reader.readAsText(file);
  });
}

async function procesarArchivoReserva(file) {
  return procesarMultiplesArchivosReserva([file]);
}

function parseMonthDayFromRaw(rawStr) {
  if (!rawStr) return null;
  const s = String(rawStr).trim();
  // YYYY-MM-DD
  let m = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
  if (m) return { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]), hasYear: true };
  // DD/MM/YYYY or DD/MM/YY
  m = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (m) {
    const y = m[3].length === 2 ? Number('20' + m[3]) : Number(m[3]);
    return { year: y, month: Number(m[2]), day: Number(m[1]), hasYear: true };
  }
  // "23 ENE" or "23 de enero 2027"
  m = s.match(/(\d{1,2})\s*(?:de\s+)?([a-záéíóúñ]{3,12})(?:\s*(?:de|,)?\s*(\d{4}))?/i);
  if (m) {
    const mKey = m[2].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const monthNum = PLUX_MONTH_MAP[mKey] || PLUX_MONTH_MAP[mKey.slice(0, 3)];
    if (monthNum) {
      return { year: m[3] ? Number(m[3]) : null, month: monthNum, day: Number(m[1]), hasYear: Boolean(m[3]) };
    }
  }
  // "ENE 23" / "Jan 23, 2027"
  m = s.match(/([a-záéíóúñ]{3,12})\s+(\d{1,2}),?\s*(\d{4})?/i);
  if (m) {
    const mKey = m[1].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const monthNum = PLUX_MONTH_MAP[mKey] || PLUX_MONTH_MAP[mKey.slice(0, 3)];
    if (monthNum) {
      return { year: m[3] ? Number(m[3]) : null, month: monthNum, day: Number(m[2]), hasYear: Boolean(m[3]) };
    }
  }
  return null;
}

function inferStageYearAndISO(stages, anchorYear = null, refDate = new Date()) {
  if (!Array.isArray(stages) || stages.length === 0) return [];
  const indexed = stages.map((st, originalIdx) => ({ st: { ...st }, originalIdx }));

  // Ordenar por diaNum si existe, luego por aparición original
  indexed.sort((a, b) => {
    const da = Number(a.st.diaNum);
    const db = Number(b.st.diaNum);
    if (da > 0 && db > 0 && da !== db) return da - db;
    return a.originalIdx - b.originalIdx;
  });

  // Determinar año base
  let baseYear = anchorYear ? Number(anchorYear) : null;
  if (!baseYear) {
    for (const { st } of indexed) {
      const pIso = parseMonthDayFromRaw(st.fechaISO);
      const pRaw = parseMonthDayFromRaw(st.fechaRaw || st.fecha);
      if (pRaw && pRaw.hasYear && pRaw.year >= 2024) {
        baseYear = pRaw.year;
        break;
      }
      if (pIso && pIso.hasYear && pIso.year >= 2024 && !st.fechaRaw) {
        baseYear = pIso.year;
        break;
      }
    }
  }

  if (!baseYear) {
    // Inferir próximo año calendario según la primera fecha sin año
    const now = refDate instanceof Date ? refDate : new Date();
    const curYear = now.getFullYear();
    const curMonth = now.getMonth() + 1;
    const curDay = now.getDate();
    let firstMD = null;
    for (const { st } of indexed) {
      const p = parseMonthDayFromRaw(st.fechaRaw || st.fecha || st.fechaISO);
      if (p && p.month && p.day) {
        firstMD = p;
        break;
      }
    }
    if (firstMD) {
      if (firstMD.month < curMonth || (firstMD.month === curMonth && firstMD.day < curDay)) {
        baseYear = curYear + 1;
      } else {
        baseYear = curYear;
      }
    } else {
      baseYear = curYear;
    }
  }

  let rollingYear = baseYear;
  let prevMonth = null;

  return indexed.map(({ st }) => {
    const pRaw = parseMonthDayFromRaw(st.fechaRaw || st.fecha);
    const pIso = parseMonthDayFromRaw(st.fechaISO);

    let y = null, mo = null, d = null;
    if (pRaw && pRaw.hasYear) {
      y = pRaw.year; mo = pRaw.month; d = pRaw.day;
      rollingYear = y;
    } else if (pRaw && !pRaw.hasYear) {
      mo = pRaw.month; d = pRaw.day;
      if (prevMonth !== null && mo < prevMonth && (prevMonth - mo) >= 6) {
        rollingYear += 1;
      }
      y = rollingYear;
    } else if (pIso && pIso.hasYear) {
      mo = pIso.month; d = pIso.day;
      if (anchorYear && pIso.year !== anchorYear && !pRaw?.hasYear) {
        if (prevMonth !== null && mo < prevMonth && (prevMonth - mo) >= 6) {
          rollingYear += 1;
        }
        y = rollingYear;
      } else {
        y = pIso.year;
        rollingYear = y;
      }
    }

    if (y && mo && d) {
      prevMonth = mo;
      const moStr = String(mo).padStart(2, '0');
      const dStr = String(d).padStart(2, '0');
      st.fechaISO = `${y}-${moStr}-${dStr}`;
      st.fecha = `${dStr}/${moStr}/${y}`;
    }
    return st;
  });
}

function compactStagesWithTransit(rawStages, options = {}) {
  const defaultTransitLabel = options.defaultTransitLabel || 'En navegación';
  const isCruise = options.isCruise !== false;
  if (!Array.isArray(rawStages) || rawStages.length === 0) {
    return { stops: [], totalDiasCalendario: 0, noches: 0 };
  }

  // Orden cronológico estable
  const sorted = [...rawStages].sort((a, b) => {
    if (a.fechaISO && b.fechaISO && a.fechaISO !== b.fechaISO) {
      return a.fechaISO.localeCompare(b.fechaISO);
    }
    const da = Number(a.diaNum) || 0;
    const db = Number(b.diaNum) || 0;
    if (da && db && da !== db) return da - db;
    return 0;
  });

  const stops = [];
  let pendingTransitDays = 0;
  let pendingTransitLabel = defaultTransitLabel;

  for (const st of sorted) {
    const cityStr = String(st.ciudad || '').trim();
    const isSea = Boolean(st.esNavegacion) || /^(?:en\s+navegaci[oó]n|navegaci[oó]n|navegando|at\s+sea|alta\s+mar|cruising)$/i.test(cityStr);
    if (isSea) {
      pendingTransitDays += 1;
      if (st.transitoEtiqueta) pendingTransitLabel = st.transitoEtiqueta;
      continue;
    }
    if (!cityStr) continue;

    const prevStop = stops[stops.length - 1] || null;
    let diasTransitoPrevio = 0;
    if (prevStop) {
      const isoGap = (prevStop.fechaISO && st.fechaISO)
        ? Math.max(0, diffCalendarDaysISO(prevStop.fechaISO, st.fechaISO) - 1)
        : 0;
      const numGap = (Number(prevStop.diaNum) > 0 && Number(st.diaNum) > Number(prevStop.diaNum))
        ? Math.max(0, Number(st.diaNum) - Number(prevStop.diaNum) - 1)
        : 0;
      diasTransitoPrevio = Math.max(
        pendingTransitDays,
        isoGap,
        numGap,
        Number(st.diasTransitoPrevio) || 0
      );
    }
    pendingTransitDays = 0;

    const cleanNote = String(st.notaParada || st.notas || '').trim();
    stops.push({
      diaNum: Number(st.diaNum) || (stops.length + 1),
      fecha: st.fecha || '',
      fechaISO: st.fechaISO || '',
      ciudad: cityStr,
      esNavegacion: false,
      diasTransitoPrevio,
      transitoEtiqueta: diasTransitoPrevio > 0 ? (st.transitoEtiqueta || pendingTransitLabel || defaultTransitLabel) : '',
      horaLlegada: String(st.horaLlegada || '').trim(),
      horaSalida: String(st.horaSalida || '').trim(),
      notaParada: cleanNote,
      notas: cleanNote,
      tipoParada: st.tipoParada || ''
    });
  }

  // Asignar tipoParada semántico
  const firstCityKey = stops.length > 0 ? normCityKeyImporter(stops[0].ciudad) : '';
  const lastCityKey = stops.length > 1 ? normCityKeyImporter(stops[stops.length - 1].ciudad) : '';
  const isCircular = stops.length >= 2 && firstCityKey && firstCityKey === lastCityKey;

  stops.forEach((s, idx) => {
    if (idx === 0) {
      s.diasTransitoPrevio = 0;
      s.transitoEtiqueta = '';
      s.tipoParada = s.tipoParada || (isCruise || isCircular ? 'embarque' : 'estadia');
      if (!s.notaParada && s.tipoParada === 'embarque') {
        s.notaParada = 'Embarque en puerto';
        s.notas = 'Embarque en puerto';
      }
    } else if (idx === stops.length - 1 && (isCruise || isCircular || (s.horaLlegada && !s.horaSalida))) {
      s.tipoParada = s.tipoParada || 'desembarque';
      if (!s.notaParada && s.tipoParada === 'desembarque') {
        s.notaParada = 'Desembarque';
        s.notas = 'Desembarque';
      }
    } else {
      s.tipoParada = s.tipoParada || (isCruise ? 'escala' : 'estadia');
    }
  });

  // Calcular total de días calendario y noches
  let totalDiasCalendario = stops.reduce((sum, s) => sum + 1 + (Number(s.diasTransitoPrevio) || 0), 0);
  if (stops.length >= 2 && stops[0].fechaISO && stops[stops.length - 1].fechaISO) {
    const span = diffCalendarDaysISO(stops[0].fechaISO, stops[stops.length - 1].fechaISO) + 1;
    if (span >= stops.length && span <= 120) {
      totalDiasCalendario = span;
    }
  }
  const noches = Math.max(0, totalDiasCalendario - 1);

  return { stops, totalDiasCalendario, noches };
}

function extraerEtapasItinerarioTexto(clean) {
  const etapas = [];
  const seenKey = new Set();

  // Normalizar paréntesis con espacios internos y saltos de línea
  const rawLines = String(clean || '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .split('\n')
    .map(l => l.replace(/^[ \t]+|[ \t]+$/g, ''))
    .filter(Boolean);

  // Caso A: Filas de tabla de crucero (acepta espacios o \t entre columnas y líneas envueltas de tenders)
  const rowRegex = /^(?:(?:lunes|martes|mi[eé]rcoles|miercoles|jueves|viernes|s[aá]bado|sabado|domingo)[\s\t]+)?(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})[\s\t]+(.+?)[\s\t]+(\d{1,2}:\d{2}|--:--)[\s\t]+(\d{1,2}:\d{2}|--:--)\s*$/i;
  const dateRowStartRegex = /^(?:(?:lunes|martes|mi[eé]rcoles|miercoles|jueves|viernes|s[aá]bado|sabado|domingo)[\s\t]+)?(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})[\s\t]+/i;
  const timesOnlyRegex = /^(\d{1,2}:\d{2}|--:--)[\s\t]+(\d{1,2}:\d{2}|--:--)$/;
  const tenderContRegex = /^\(?\s*(?:(?:servicio(?:\s+de)?|de)\s+)?(?:tenders?|bote\s+auxiliar)(?:\s*\))?$/i;
  const tenderParenLineRegex = /^\([^)]*(?:tender|bote\s+auxiliar)[^)]*\)$/i;

  for (let i = 0; i < rawLines.length; i++) {
    let line = rawLines[i];

    // Si la línea empieza con fecha de itinerario pero le faltan los horarios, unir continuación inmediata (tender y/o horarios)
    if (dateRowStartRegex.test(line) && !rowRegex.test(line)) {
      let merged = line;
      let consumed = 0;
      for (let look = 1; look <= 2 && (i + look) < rawLines.length; look++) {
        const nxt = rawLines[i + look];
        if (dateRowStartRegex.test(nxt)) break;
        if (timesOnlyRegex.test(nxt) || tenderContRegex.test(nxt) || tenderParenLineRegex.test(nxt) || /^de\s+tenders?\)$/i.test(nxt)) {
          merged += ' ' + nxt;
          consumed = look;
          if (rowRegex.test(merged)) break;
        }
      }
      if (consumed > 0 && rowRegex.test(merged)) {
        line = merged;
        i += consumed;
      }
    }

    const m = line.match(rowRegex);
    if (m) {
      const norm = normalizarFechaTexto(m[1]);
      let puertoRaw = m[2].replace(/\t+/g, ' ').replace(/\s+/g, ' ').trim();
      let notas = '';

      // Detectar nota tender completa inline: "(servicio de tenders)"
      const tenderCompleteM = puertoRaw.match(/\(([^)]*(?:tender|bote\s+auxiliar)[^)]*)\)/i);
      if (tenderCompleteM) {
        notas = tenderCompleteM[1].trim();
        puertoRaw = puertoRaw.replace(tenderCompleteM[0], '').trim();
      }

      // Detectar nota tender abierta al final por salto de línea: "Buzios, Brasil (servicio"
      const tenderOpenM = puertoRaw.match(/\(\s*servicio(?:\s+de)?\s*$/i);
      if (tenderOpenM) {
        puertoRaw = puertoRaw.replace(tenderOpenM[0], '').trim();
        notas = 'Servicio de tenders';
      }

      // Si la línea siguiente es la continuación "de tenders)" o "(servicio de tenders)", consumirla y adjuntarla a esta etapa
      if (i + 1 < rawLines.length && !dateRowStartRegex.test(rawLines[i + 1])) {
        const nextLine = rawLines[i + 1].trim();
        if (tenderContRegex.test(nextLine) || tenderParenLineRegex.test(nextLine) || /^(?:\(?\s*servicio\s+de\s+tenders?\s*\)?|de\s+tenders?\))$/i.test(nextLine)) {
          if (!notas) notas = 'Servicio de tenders';
          i += 1;
        }
      }

      // Normalizar capitalización de "servicio de tenders"
      if (notas && /^servicio\s+de\s+tenders$/i.test(notas)) {
        notas = 'Servicio de tenders';
      }

      puertoRaw = puertoRaw.replace(/\(\s*$/, '').replace(/\s+/g, ' ').trim();
      const esNav = /en\s+navegaci[oó]n|navegaci[oó]n|at\s+sea|alta\s+mar/i.test(puertoRaw);
      const llegada = m[3] === '--:--' ? '' : m[3].padStart(5, '0');
      const salida = m[4] === '--:--' ? '' : m[4].padStart(5, '0');
      const ciudad = esNav ? 'En Navegación' : puertoRaw;
      const key = `${norm.iso}|${normCityKeyImporter(ciudad)}`;
      if (norm.iso && !seenKey.has(key)) {
        seenKey.add(key);
        etapas.push({
          diaNum: etapas.length + 1,
          fecha: norm.display,
          fechaISO: norm.iso,
          ciudad,
          esNavegacion: esNav,
          horaLlegada: llegada,
          horaSalida: salida,
          notaParada: notas,
          notas
        });
      }
    }
  }

  // Caso B: Bloques de capturas tipo "DÍA 4 - 26 ENE\nRío de Janeiro\nLlegada 10:00 - Salida 20:00"
  if (etapas.length === 0) {
    const inferredYearMatch = clean.match(/\b(202[5-9]|203\d)\b/);
    const anchorYear = inferredYearMatch ? Number(inferredYearMatch[1]) : null;
    const dayBlockRegex = /D[IÍ]A\s*(\d{1,2})\s*[-·–:|•—]\s*(\d{1,2}\s+(?:de\s+)?[A-ZÁÉÍÓÚÑ]{3,12}(?:\s+(?:de\s+)?\d{4})?|\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?)([\s\S]{0,280}?)(?=D[IÍ]A\s*\d{1,2}\s*[-·–:|•—]|---|$)/gi;
    const rawDayStages = [];
    let dm;
    while ((dm = dayBlockRegex.exec(clean)) !== null) {
      const diaNum = parseInt(dm[1], 10);
      const fechaRaw = dm[2].trim();
      const body = dm[3];
      const bodyLines = body.split(/\n/).map(s => s.trim()).filter(Boolean);
      const llegadaM = body.match(/Llegada\s*(\d{1,2}:\d{2})/i);
      const salidaM = body.match(/Salida\s*(\d{1,2}:\d{2})/i);
      const esNav = /en\s+navegaci[oó]n|navegando|alta\s+mar/i.test(body);
      let ciudad = esNav
        ? 'En Navegación'
        : (bodyLines[0] || '').replace(/^(Llegada|Salida|Tu hora|DESEMBARQUE).*$/i, '').trim();
      if (!ciudad && !esNav && bodyLines.length > 1) ciudad = bodyLines[1];
      let notas = '';
      if (/desembarque\s+con\s+bote\s+auxiliar|tender/i.test(body)) notas = 'Desembarque con bote auxiliar (tenders)';
      if (/hora de embarque/i.test(body)) notas = (notas ? notas + ' · ' : '') + 'Embarque en puerto';
      if (ciudad && ciudad.length >= 2) {
        rawDayStages.push({
          diaNum,
          fechaRaw,
          ciudad,
          esNavegacion: esNav,
          horaLlegada: llegadaM ? llegadaM[1].padStart(5, '0') : '',
          horaSalida: salidaM ? salidaM[1].padStart(5, '0') : '',
          notaParada: notas,
          notas
        });
      }
    }
    const dated = inferStageYearAndISO(rawDayStages, anchorYear);
    dated.forEach(st => {
      const key = `${st.fechaISO || st.diaNum}|${normCityKeyImporter(st.ciudad)}`;
      if (!seenKey.has(key)) {
        seenKey.add(key);
        etapas.push(st);
      }
    });
  }

  return etapas;
}

function intentarParsearCruceroOItinerario(raw) {
  const clean = String(raw || '').trim();
  const isCruiseText = /(msc\s+cruceros|msc\s+splendida|costa\s+cruceros|royal\s+caribbean|norwegian\s+cruise|nave\s*:|cabina\s*:|fecha\s+de\s+embarque|fecha\s+de\s+desembarque|en\s+navegaci[oó]n|servicio\s+de\s+tenders|desembarque\s+con\s+bote\s+auxiliar)/i.test(clean);
  const rawEtapas = extraerEtapasItinerarioTexto(clean);

  if (!isCruiseText && rawEtapas.length < 2) return null;

  // Todos los regex de metadatos cortan en [^\t\n\r]+ para aislar columnas derechas en PDFs
  const naveM = clean.match(/(?:^|[\t\n\r])Nave\s*:[ \t]*([^\t\n\r]+)/i) ||
                clean.match(/\b(MSC\s+[A-ZÁÉÍÓÚÑ0-9 ]+|Costa\s+[A-ZÁÉÍÓÚÑ0-9 ]+|Symphony of the Seas|Wonder of the Seas)\b/i);
  const nave = naveM ? naveM[1].trim() : '';

  const reservaM = clean.match(/N[uú]mero\s+de\s+Reserva\s*(?:\/\s*Presupuesto)?\s*[:#][ \t]*([A-Z0-9-]{4,16})/i) ||
                   clean.match(/(?:^|[\t\n\r])(?:Reserva|Confirmaci[oó]n|Booking)\s*[:#][ \t]*([A-Z0-9-]{5,14})/i);
  const ticketM = clean.match(/Ticket\s*(?:nr|no|n°|#)?\s*[:.][ \t]*([A-Z0-9-]{5,18})/i);
  const codigo = (reservaM?.[1] || ticketM?.[1] || 'CRU-OK').toUpperCase();

  const cabinaM = clean.match(/(?:^|[\t\n\r])Cabina\s*:[ \t]*([^\t\n\r]+)/i);
  const cabinaClean = cabinaM ? cabinaM[1].replace(/[−–\-]+\s*$/g, '').trim() : '';
  const catM = clean.match(/(?:^|[\t\n\r])Categor[ií]a\s*:?[ \t]*([^\t\n\r]+)/i);
  const expM = clean.match(/(?:^|[\t\n\r])(?:Tu|Su)\s+experiencia\s*:[ \t]*([^\t\n\r]+)/i);
  const cenaM = clean.match(/(?:^|[\t\n\r])Turno\s+De\s+Cena\s*:[ \t]*([^\t\n\r*]+)/i);
  const paxCountM = clean.match(/Total\s+pasajeros\s*:[ \t]*(\d+)/i);
  const guestsSet = new Set();
  const guestsMatches = [];
  for (const gm of clean.matchAll(/\b([A-ZÁÉÍÓÚÑ]{2,},\s*[A-ZÁÉÍÓÚÑ ]+?)\s*\(fecha\s+de\s+nacimiento[\s\S]{0,20}?\d{1,2}\/\d{1,2}\/\d{2,4}\)/gi)) {
    const gName = gm[1].replace(/\s+/g, ' ').trim();
    const gKey = gName.toLowerCase();
    if (gName && !guestsSet.has(gKey)) {
      guestsSet.add(gKey);
      guestsMatches.push(gName);
    }
  }

  const embarqueFechaM = clean.match(/Fecha\s+de\s+Embarque\s*:[ \t]*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/i);
  const desembarqueFechaM = clean.match(/Fecha\s+de\s+Desembarque\s*:[ \t]*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/i);
  const puertoEmbM = clean.match(/(?:^|[\t\n\r])Puerto\s*:[ \t]*([^\t\n\r]+)/i);
  const puertoDesM = clean.match(/(?:^|[\t\n\r])Puerto\s+de\s+Desembarque\s*:[ \t]*([^\t\n\r]+)/i);
  const itinerarioTituloM = clean.match(/(?:^|[\t\n\r])Itinerario\s+de\s+crucero\s*:[ \t]*([^\t\n\r]+)/i);

  // Compactar etapas: eliminar filas "En Navegación" y convertirlas en diasTransitoPrevio sobre la parada siguiente
  const { stops: etapas, totalDiasCalendario, noches: nochesCompact } = compactStagesWithTransit(rawEtapas, { isCruise: true });

  const firstStage = etapas[0] || {};
  const lastStage = etapas[etapas.length - 1] || {};
  const embNorm = embarqueFechaM ? normalizarFechaTexto(embarqueFechaM[1]) : { display: firstStage.fecha || '', iso: firstStage.fechaISO || '' };
  const desNorm = desembarqueFechaM ? normalizarFechaTexto(desembarqueFechaM[1]) : { display: lastStage.fecha || '', iso: lastStage.fechaISO || '' };

  // Costos: distinguir Total vs Pagado vs Pendiente
  let moneda = 'USD';
  const monedaM = clean.match(/Moneda\s*:[ \t]*(EUR|ARS|USD)/i);
  if (monedaM) moneda = monedaM[1].toUpperCase();

  const totalM = clean.match(/Importe\s+total\s+a\s+pagar[^\d\n\r]*(?:\n[^\d\n\r]*)?([\d.,]+)/i) ||
                 clean.match(/(?:^|[\t\n\r])Importe\s+Total[ \t:]+([\d.,]+)/i);
  const pagadoM = clean.match(/Pago\s+al\s+momento[^\d\n\r]*([\d.,]+)/i) ||
                  clean.match(/(?:^|[\t\n\r])Pagos[ \t:]+([\d.,]+)/i);
  const saldoM = clean.match(/(?:Saldo\s+deudor|Importe\s+pendiente\s+de\s+pago)[^\d\n\r]*([\d.,]+)/i);

  const costoTotal = parseAmountSmart(totalM?.[1]);
  const montoPagado = parseAmountSmart(pagadoM?.[1]);
  const saldoPendiente = parseAmountSmart(saldoM?.[1]);
  const costo = costoTotal || (montoPagado + saldoPendiente) || 0;

  const ciudadEmb = (puertoEmbM?.[1] || firstStage.ciudad || 'Buenos Aires').trim();
  const ciudadDes = (puertoDesM?.[1] || lastStage.ciudad || ciudadEmb).trim();

  const detallesExtra = [];
  if (nave) detallesExtra.push({ label: 'Nave / Barco', value: nave });
  if (cabinaClean) detallesExtra.push({ label: 'Cabina', value: cabinaClean + (catM ? ` (${catM[1].trim()})` : '') });
  if (expM) detallesExtra.push({ label: 'Experiencia', value: expM[1].trim() + (cenaM ? ` · Cena ${cenaM[1].trim()}` : '') });
  if (ticketM) detallesExtra.push({ label: 'N° Ticket', value: ticketM[1].trim() });
  if (guestsMatches.length > 0 || paxCountM) {
    detallesExtra.push({ label: `Pasajeros (${paxCountM?.[1] || guestsMatches.length})`, value: guestsMatches.join(' · ') || `${paxCountM[1]} huéspedes` });
  }

  let noches = nochesCompact || Math.max(1, etapas.length > 1 ? etapas.length - 1 : 1);
  let diasCalendario = totalDiasCalendario || (noches + 1);
  if (embNorm.iso && desNorm.iso) {
    const diff = diffCalendarDaysISO(embNorm.iso, desNorm.iso);
    if (diff >= 1 && diff <= 90) {
      noches = diff;
      diasCalendario = diff + 1;
    }
  }

  const proveedor = /msc/i.test(clean) ? 'MSC Cruceros' : (/costa/i.test(clean) ? 'Costa Cruceros' : (nave || 'Naviera / Crucero'));
  const titulo = nave
    ? `Crucero ${nave}${itinerarioTituloM ? ' · ' + itinerarioTituloM[1].trim() : ''}`
    : `Itinerario Crucero (${diasCalendario} días · ${ciudadEmb})`;

  const notas = [
    nave ? `Nave: ${nave}` : '',
    cabinaClean ? `Cabina ${cabinaClean}` : '',
    expM ? `Experiencia ${expM[1].trim()}` : '',
    itinerarioTituloM ? `Ruta: ${itinerarioTituloM[1].trim()}` : ''
  ].filter(Boolean).join(' · ');

  const result = {
    id: 'res_cruise_' + Date.now(),
    tipo: 'crucero',
    titulo,
    ciudad: ciudadEmb,
    origen: ciudadEmb,
    ciudadDesembarque: ciudadDes,
    proveedor,
    nave,
    cabina: cabinaClean,
    codigo,
    pin: '',
    fecha: embNorm.display,
    fechaISO: embNorm.iso,
    fechaFin: desNorm.display,
    fechaFinISO: desNorm.iso,
    hora: firstStage.horaSalida || '18:00',
    horaFin: lastStage.horaLlegada || '08:00',
    duracion: noches * 24 * 60,
    noches,
    totalDiasCalendario: diasCalendario,
    rawEtapasCount: rawEtapas.length,
    costo,
    montoPagado,
    saldoPendiente,
    moneda,
    modoPrecio: 'total',
    pagado: saldoPendiente <= 0 && costo > 0,
    pagadoPor: 'Todos',
    escalas: etapas.map(e => `${e.ciudad}${e.fecha ? ' (' + e.fecha + ')' : ''}`),
    etapas,
    detallesExtra,
    notas: notas || 'Itinerario completo importado',
    diaIndex: 0,
    targetDestMode: 'auto',
    sincronizarFechaInicio: true,
    guardarEnTransporte: true,
    expandirNoches: false,
    imagePreview: pluxPendingImagePreview || null,
    imagesCount: pluxPendingImages.length,
    rawEmail: clean.slice(0, 4000),
    agregadoAlViaje: false
  };
  result._syncKey = computeBookingSyncKey(result);
  return result;
}

function unificarResultadosImportacion(visionBatches = [], docReservas = []) {
  const safeDocs = deduplicarReservasPorSyncKey(
    Array.isArray(docReservas) ? docReservas.filter(Boolean).map(d => JSON.parse(JSON.stringify(d))) : []
  );
  const safeBatches = Array.isArray(visionBatches) ? visionBatches.filter(Boolean) : [];

  // Recolectar etapas y metadatos desde los lotes Vision
  const rawVisionStages = [];
  const mergedMeta = {
    tipo: '',
    titulo: '',
    proveedor: '',
    nave: '',
    codigo: '',
    cabina: '',
    moneda: '',
    costo: 0,
    montoPagado: 0,
    saldoPendiente: 0,
    modoPrecio: '',
    notas: '',
    detallesExtra: []
  };
  const transcripts = [];

  for (const batch of safeBatches) {
    if (batch.transcript) transcripts.push(String(batch.transcript));
    const bm = batch.bookingMeta || {};
    if (bm.tipo && !mergedMeta.tipo) mergedMeta.tipo = bm.tipo;
    if (bm.titulo && !mergedMeta.titulo) mergedMeta.titulo = bm.titulo;
    if (bm.proveedor && !mergedMeta.proveedor) mergedMeta.proveedor = bm.proveedor;
    if (bm.nave && !mergedMeta.nave) mergedMeta.nave = bm.nave;
    if (isRealBookingCode(bm.codigo) && !isRealBookingCode(mergedMeta.codigo)) mergedMeta.codigo = bm.codigo;
    if (bm.cabina && !mergedMeta.cabina) mergedMeta.cabina = bm.cabina;
    if (bm.moneda && !mergedMeta.moneda) mergedMeta.moneda = bm.moneda;
    if (Number(bm.costo) > 0 && !mergedMeta.costo) mergedMeta.costo = Number(bm.costo);
    if (Number(bm.montoPagado) > 0 && !mergedMeta.montoPagado) mergedMeta.montoPagado = Number(bm.montoPagado);
    if (Number(bm.saldoPendiente) > 0 && !mergedMeta.saldoPendiente) mergedMeta.saldoPendiente = Number(bm.saldoPendiente);
    if (bm.modoPrecio && !mergedMeta.modoPrecio) mergedMeta.modoPrecio = bm.modoPrecio;
    if (bm.notas && !mergedMeta.notas) mergedMeta.notas = bm.notas;
    if (Array.isArray(bm.detallesExtra)) {
      for (const det of bm.detallesExtra) {
        if (det && det.label && det.value && !mergedMeta.detallesExtra.some(x => x.label.toLowerCase() === det.label.toLowerCase())) {
          mergedMeta.detallesExtra.push({ label: String(det.label).trim(), value: String(det.value).trim() });
        }
      }
    }

    const stagesList = Array.isArray(batch.stages) ? batch.stages : (Array.isArray(batch.etapas) ? batch.etapas : []);
    for (const st of stagesList) {
      if (!st || typeof st !== 'object') continue;
      const cityClean = String(st.ciudad || st.puerto || st.city || '').trim();
      const esNav = Boolean(st.esNavegacion) || /^(?:en\s+navegaci[oó]n|navegando|at\s+sea|alta\s+mar)$/i.test(cityClean);
      // Descartar fragmentos cortados de borde (ej. ciudad de 1 carácter o sin ciudad)
      if (!esNav && cityClean.length < 2) continue;
      rawVisionStages.push({
        diaNum: Number(st.diaNum || st.day || st.dia) || 0,
        fechaRaw: String(st.fechaRaw || st.fecha || st.date || '').trim(),
        fechaISO: String(st.fechaISO || '').trim(),
        ciudad: esNav ? 'En Navegación' : cityClean,
        esNavegacion: esNav,
        horaLlegada: String(st.horaLlegada || st.llegada || st.arrival || '').replace(/^--:--$/, '').trim(),
        horaSalida: String(st.horaSalida || st.salida || st.departure || '').replace(/^--:--$/, '').trim(),
        notaParada: String(st.notaParada || st.notas || st.notes || '').trim(),
        notas: String(st.notaParada || st.notas || st.notes || '').trim()
      });
    }
  }

  // Buscar si existe un documento PDF multi-etapa (crucero) para anclar año y mergear
  const docCruiseIdx = safeDocs.findIndex(d => d.tipo === 'crucero' || (Array.isArray(d.etapas) && d.etapas.length > 0));
  const anchorDoc = docCruiseIdx >= 0 ? safeDocs[docCruiseIdx] : null;
  let anchorYear = null;
  if (anchorDoc) {
    const mY = String(anchorDoc.fechaISO || anchorDoc.etapas?.[0]?.fechaISO || '').match(/^(\d{4})-/);
    if (mY) anchorYear = Number(mY[1]);
  }

  // Inferir año (con rollover Dic -> Ene) y deduplicar etapas Vision
  const datedVisionStages = inferStageYearAndISO(rawVisionStages, anchorYear);
  const visionByKey = new Map();
  for (const st of datedVisionStages) {
    const key = st.fechaISO || `day_${st.diaNum}_${normCityKeyImporter(st.ciudad)}`;
    const prev = visionByKey.get(key);
    if (!prev) {
      visionByKey.set(key, st);
    } else {
      // Conservar la etapa más completa (evita sobrescribir tarjeta completa con fragmento)
      if (!prev.horaLlegada && st.horaLlegada) prev.horaLlegada = st.horaLlegada;
      if (!prev.horaSalida && st.horaSalida) prev.horaSalida = st.horaSalida;
      if (!prev.diaNum && st.diaNum) prev.diaNum = st.diaNum;
      if (st.ciudad.length > prev.ciudad.length && !prev.esNavegacion) prev.ciudad = st.ciudad;
      if (st.notas && !prev.notas) {
        prev.notas = st.notas;
        prev.notaParada = st.notas;
      } else if (/tender|bote auxiliar/i.test(st.notas) && !/tender|bote auxiliar/i.test(prev.notas)) {
        prev.notas = prev.notas ? `${prev.notas} · ${st.notas}` : st.notas;
        prev.notaParada = prev.notas;
      }
    }
  }
  const dedupVisionStages = Array.from(visionByKey.values());

  // Caso 1: Hay documento PDF de crucero -> PDF es autoritativo; mergear etapas Vision válidas si hay,
  // y NUNCA emitir tarjetas basura de actividades desde transcripciones ruidosas de OCR/Vision
  if (anchorDoc) {
    if (dedupVisionStages.length > 0) {
      const mergedByISO = new Map();
      for (const pdfSt of (anchorDoc.etapas || [])) {
        const k = pdfSt.fechaISO || `pdf_${normCityKeyImporter(pdfSt.ciudad)}_${pdfSt.diaNum}`;
        mergedByISO.set(k, { ...pdfSt });
      }
      for (const vSt of dedupVisionStages) {
        if (vSt.esNavegacion) continue;
        const k = vSt.fechaISO || `vis_${normCityKeyImporter(vSt.ciudad)}_${vSt.diaNum}`;
        const existing = mergedByISO.get(k);
        if (existing) {
          // PDF es autoritativo en ciudad/horarios; Vision aporta notas/horarios faltantes
          if (!existing.horaLlegada && vSt.horaLlegada) existing.horaLlegada = vSt.horaLlegada;
          if (!existing.horaSalida && vSt.horaSalida) existing.horaSalida = vSt.horaSalida;
          if (/tender|bote auxiliar/i.test(vSt.notas) && !/tender|bote auxiliar/i.test(existing.notaParada || existing.notas || '')) {
            existing.notaParada = vSt.notas;
            existing.notas = vSt.notas;
          }
        } else {
          mergedByISO.set(k, { ...vSt });
        }
      }
      const { stops, totalDiasCalendario, noches } = compactStagesWithTransit(Array.from(mergedByISO.values()), { isCruise: true });
      anchorDoc.etapas = stops;
      anchorDoc.totalDiasCalendario = totalDiasCalendario;
      anchorDoc.noches = noches;
      anchorDoc.escalas = stops.map(e => `${e.ciudad}${e.fecha ? ' (' + e.fecha + ')' : ''}`);
    }
    if (pluxPendingImagePreview && !anchorDoc.imagePreview) anchorDoc.imagePreview = pluxPendingImagePreview;
    anchorDoc.imagesCount = pluxPendingImages.length;
    anchorDoc._syncKey = computeBookingSyncKey(anchorDoc);
    return deduplicarReservasPorSyncKey(safeDocs);
  }

  // Caso 2: Solo etapas Vision (ej. 7 fotos WhatsApp sin PDF)
  if (dedupVisionStages.length >= 2 || (dedupVisionStages.length === 1 && mergedMeta.tipo === 'crucero')) {
    const isCruise = mergedMeta.tipo === 'crucero' || !mergedMeta.tipo || dedupVisionStages.some(s => /tender|bote auxiliar|embarque/i.test(s.notas || '') || s.esNavegacion);
    const { stops, totalDiasCalendario, noches } = compactStagesWithTransit(dedupVisionStages, { isCruise });
    if (stops.length > 0) {
      const firstS = stops[0];
      const lastS = stops[stops.length - 1];
      const shipName = mergedMeta.nave || mergedMeta.proveedor || '';
      const detallesExtra = [...mergedMeta.detallesExtra];
      if (shipName && !detallesExtra.some(d => /nave|barco/i.test(d.label))) {
        detallesExtra.push({ label: 'Nave / Barco', value: shipName });
      }
      if (mergedMeta.cabina && !detallesExtra.some(d => /cabina/i.test(d.label))) {
        detallesExtra.push({ label: 'Cabina', value: mergedMeta.cabina });
      }
      const resObj = {
        id: 'res_vision_' + Date.now(),
        tipo: isCruise ? 'crucero' : (mergedMeta.tipo || 'crucero'),
        titulo: mergedMeta.titulo || (shipName ? `Crucero ${shipName}` : `Itinerario Crucero (${totalDiasCalendario} días · ${firstS.ciudad})`),
        ciudad: firstS.ciudad,
        origen: firstS.ciudad,
        ciudadDesembarque: lastS.ciudad,
        proveedor: mergedMeta.proveedor || (isCruise ? 'Crucero' : 'Itinerario'),
        nave: shipName,
        cabina: mergedMeta.cabina || '',
        codigo: isRealBookingCode(mergedMeta.codigo) ? mergedMeta.codigo.toUpperCase() : 'CRU-OK',
        pin: '',
        fecha: firstS.fecha,
        fechaISO: firstS.fechaISO,
        fechaFin: lastS.fecha,
        fechaFinISO: lastS.fechaISO,
        hora: firstS.horaSalida || firstS.horaLlegada || '18:00',
        horaFin: lastS.horaLlegada || '08:00',
        duracion: noches * 24 * 60,
        noches,
        totalDiasCalendario,
        costo: Number(mergedMeta.costo) || 0,
        montoPagado: Number(mergedMeta.montoPagado) || 0,
        saldoPendiente: Number(mergedMeta.saldoPendiente) || 0,
        moneda: mergedMeta.moneda || 'USD',
        modoPrecio: mergedMeta.modoPrecio || 'total',
        pagado: (Number(mergedMeta.saldoPendiente) || 0) <= 0 && (Number(mergedMeta.costo) || 0) > 0,
        pagadoPor: 'Todos',
        escalas: stops.map(e => `${e.ciudad}${e.fecha ? ' (' + e.fecha + ')' : ''}`),
        etapas: stops,
        detallesExtra,
        notas: mergedMeta.notas || `Itinerario extraído desde ${pluxPendingImages.length || safeBatches.length} capturas`,
        diaIndex: 0,
        targetDestMode: 'auto',
        sincronizarFechaInicio: true,
        guardarEnTransporte: true,
        expandirNoches: false,
        imagePreview: pluxPendingImagePreview || null,
        imagesCount: pluxPendingImages.length,
        rawEmail: transcripts.join('\n---\n').slice(0, 4000),
        agregadoAlViaje: false
      };
      resObj._syncKey = computeBookingSyncKey(resObj);
      // NUNCA arrastrar fragmentos de texto crudo OCR del mismo crucero como actividades separadas
      const independentDocs = safeDocs.filter(d =>
        d && isRealBookingCode(d.codigo) &&
        d.codigo !== resObj.codigo &&
        !esVoucherCorruptoOCR(d) &&
        (Number(d.costo) > 0 || d.tipo === 'vuelo' || d.tipo === 'hotel')
      );
      return deduplicarReservasPorSyncKey([...independentDocs, resObj]);
    }
  }

  const results = [...safeDocs];

  // Caso 3: Vision extrajo una reserva simple (vuelo/hotel/tren/actividad) sin múltiples etapas
  if (safeBatches.length > 0 && (mergedMeta.titulo || mergedMeta.codigo || transcripts.length > 0)) {
    const combinedTranscript = transcripts.join('\n---\n').trim();
    if (combinedTranscript && !mergedMeta.titulo) {
      const parsedFromTxt = parsearTextoDocumentoAReservas(combinedTranscript);
      results.push(...parsedFromTxt.filter(r => esReservaDetectadaValida(r)));
    } else if (mergedMeta.titulo || dedupVisionStages.length === 1) {
      const st0 = dedupVisionStages[0] || {};
      const cityVal = String(st0.ciudad || '').trim();
      const singleRes = {
        id: 'res_vision_single_' + Date.now(),
        tipo: mergedMeta.tipo || 'actividad',
        titulo: mergedMeta.titulo || (cityVal ? `Reserva en ${cityVal}` : 'Reserva'),
        ciudad: cityVal,
        _hasExplicitCity: Boolean(cityVal),
        origen: '',
        proveedor: mergedMeta.proveedor || 'Confirmación',
        codigo: isRealBookingCode(mergedMeta.codigo) ? mergedMeta.codigo.toUpperCase() : 'CONF-IA',
        pin: '',
        fecha: st0.fecha || '',
        fechaISO: st0.fechaISO || '',
        fechaFin: '',
        fechaFinISO: '',
        hora: st0.horaSalida || st0.horaLlegada || '10:00',
        horaFin: st0.horaSalida && st0.horaLlegada ? st0.horaSalida : '',
        duracion: 120,
        noches: 1,
        costo: Number(mergedMeta.costo) || 0,
        montoPagado: Number(mergedMeta.montoPagado) || 0,
        saldoPendiente: Number(mergedMeta.saldoPendiente) || 0,
        moneda: mergedMeta.moneda || 'USD',
        modoPrecio: mergedMeta.modoPrecio || 'persona',
        pagado: (Number(mergedMeta.saldoPendiente) || 0) <= 0,
        pagadoPor: 'Todos',
        escalas: [],
        etapas: [],
        detallesExtra: mergedMeta.detallesExtra,
        notas: mergedMeta.notas || st0.notas || 'Extraído con Vision IA',
        diaIndex: calcularDiaViajePorFechaISO(st0.fechaISO || ''),
        targetDestMode: 'auto',
        sincronizarFechaInicio: Boolean(st0.fechaISO) && !document.getElementById('fechaInicio')?.value,
        guardarEnTransporte: ['vuelo', 'tren', 'hotel', 'crucero'].includes(mergedMeta.tipo),
        expandirNoches: mergedMeta.tipo === 'hotel',
        imagePreview: pluxPendingImagePreview || null,
        rawEmail: combinedTranscript.slice(0, 3000),
        agregadoAlViaje: false
      };
      singleRes._syncKey = computeBookingSyncKey(singleRes);
      if (esReservaDetectadaValida(singleRes)) {
        results.push(singleRes);
      }
    }
  }

  return deduplicarReservasPorSyncKey(results);
}

function parsearBloqueIndividualReserva(text, idx = 0, earliestBatchISO = '') {
  const clean = text.trim();

  // 1. Detectar Tipo de Reserva
  let tipo = 'actividad';
  if (/(crucero|msc\s+cruceros|nave\s*:|cabina\s*:|en\s+navegaci[oó]n|desembarque\s+con\s+bote)/i.test(clean)) {
    tipo = 'crucero';
  } else if (/(vuelo|flight|aerol[ií]nea|airline|iberia|latam|ryanair|air\s*europa|lufthansa|emirates|ita\s*airways|american\s*airlines|delta|united|avianca|copa|jetsmart|flybondi|vueling|british\s*airways|air\s*france|klm|qatar|terminal\s+[a-z0-9]|\b(?:IB|AR|LA|UX|AF|LH|AZ|AA|DL|UA|FR|VY|EK|QR|BA|KL|AV|CM|FO|WJ)\s?\d{3,4}\b)/i.test(clean) && !/(frecciarossa|trenitalia|renfe|billete\s+alta\s+velocidad|shinkansen)/i.test(clean)) {
    tipo = 'vuelo';
  } else if (/(hotel|booking\.com|airbnb|hostel|alojamiento|check-in|check\s*in|check-out|habitaci[oó]n|noches|nights|loft|apartamento|resort|estancia|hospedaje)/i.test(clean)) {
    tipo = 'hotel';
  } else if (/(tren|train|trenitalia|frecciarossa|italo|renfe|ave\b|ouigo|iryo|eurostar|shinkansen|flixbus|estaci[oó]n|vag[oó]n|coche\s+\d)/i.test(clean)) {
    tipo = 'tren';
  } else if (/(alquiler\s+de\s+auto|car\s+rental|hertz|avis|europcar|sixt|budget|localiza|alamo|retiro\s+veh[ií]culo)/i.test(clean)) {
    tipo = 'auto';
  }

  // 2. Detectar Código de Reserva / PNR / Voucher + PIN (evitar falsos positivos como "CARLOS")
  let codigo = '';
  const pnrMatch = clean.match(/(?:pnr|n[uú]mero\s+de\s+reserva(?:\s*\/\s*presupuesto)?|c[oó]digo(?:\s+de\s+reserva|\s+de\s+referencia)?|n[uú]mero\s+de\s+confirmaci[oó]n|localizador|booking\s*ref)[:\s#]+([A-Z0-9-]{5,14})/i);
  if (pnrMatch && pnrMatch[1] && !/^(PARA|COPIA|ESTE|FECHA|TOTAL)$/i.test(pnrMatch[1])) {
    codigo = pnrMatch[1].toUpperCase();
  } else {
    const fallbackPnr = clean.match(/\b([A-Z0-9]{2,4}-[0-9]{4,8}|[A-Z]{2}[0-9]{3,4}[A-Z]{1,2}|[A-Z]*\d+[A-Z0-9]*)\b/);
    if (fallbackPnr && fallbackPnr[1].length >= 5 && fallbackPnr[1].length <= 12) codigo = fallbackPnr[1];
  }
  const pinMatch = clean.match(/\bPIN(?:\s+de\s+seguridad)?[:\s#]*(\d{4,6})\b/i);
  const pinCode = pinMatch ? pinMatch[1] : '';

  // 3. Detectar Códigos IATA y Ciudades (Origen, Destino, Escalas)
  let origen = '';
  let ciudad = '';
  const escalas = [];

  const escalaMatch = clean.match(/(?:escala|conexi[oó]n|layover)[:\s]+([^\n\r]+)/i);
  if (escalaMatch && escalaMatch[1]) {
    escalas.push(escalaMatch[1].trim());
  }

  const cleanWithoutEscala = clean.replace(/(?:escala|conexi[oó]n|layover)[:\s]+[^\n\r]+/gi, '');
  const iataMatches = [];
  const iataRegex = /\b([A-Z]{3})\b/g;
  let m;
  while ((m = iataRegex.exec(cleanWithoutEscala)) !== null) {
    const code = m[1];
    if (PLUX_IATA_CITIES[code] && !['USD', 'EUR', 'ARS', 'PNR', 'AVE', 'VIP', 'GPS', 'PDF', 'IVA', 'PIN', 'MSC'].includes(code)) {
      iataMatches.push({ code, city: PLUX_IATA_CITIES[code] });
    }
  }

  if (iataMatches.length >= 2) {
    origen = `${iataMatches[0].city} (${iataMatches[0].code})`;
    ciudad = iataMatches[iataMatches.length - 1].city;
  } else if (iataMatches.length === 1) {
    ciudad = iataMatches[0].city;
  }

  const explicitCity = clean.match(/(?:(?:ciudad|destino|estaci[oó]n\s+de\s+llegada|puerto)\s*:\s*|llegada\s+a\s+)([^\n\r(\-·,]+)/i);
  if (explicitCity && explicitCity[1]) {
    const candidate = explicitCity[1].trim();
    for (const kc of PLUX_KNOWN_CITIES) {
      if (candidate.toLowerCase().includes(kc.toLowerCase())) {
        ciudad = kc;
        break;
      }
    }
    if (!ciudad && candidate.length > 2 && candidate.length < 35 && /[a-zA-ZÁÉÍÓÚáéíóúÑñ]{3,}/.test(candidate) && !/^\d/.test(candidate)) {
      ciudad = candidate.replace(/\b(Termini|Santa Maria Novella|Centrale|Atocha|Sants|Gare du Nord|Fiumicino|Barajas)\b/gi, '').trim();
    }
  }

  const explicitOrigin = clean.match(/(?:origen|estaci[oó]n\s+de\s+salida|salida\s+desde)[:\s]+([^\n\r\-·,]+)/i);
  if (!origen && explicitOrigin && explicitOrigin[1]) {
    origen = explicitOrigin[1].trim();
  }

  if (!ciudad && (tipo === 'hotel' || tipo === 'vuelo' || tipo === 'tren' || tipo === 'crucero')) {
    // Solo buscar ciudad contextual precedida de preposición para evitar direcciones legales en el pie de página
    for (const kc of PLUX_KNOWN_CITIES) {
      const regexCity = new RegExp(`(?:en|hacia|a|llegada\\s+a|destino|puerto\\s+de)\\s+${kc}\\b`, 'i');
      if (regexCity.test(clean)) {
        ciudad = kc;
        break;
      }
    }
  }
  const _hasExplicitCity = Boolean(ciudad);
  if (!ciudad) {
    ciudad = '';
  }

  // 4. Detectar Fechas (Naturales y Numéricas)
  const fechasExtraidas = extraerFechasDeTexto(clean);
  const fechaObj = fechasExtraidas[0] || { display: '', iso: '' };
  const fechaFinObj = fechasExtraidas[1] || { display: '', iso: '' };
  const fecha = fechaObj.display;
  const fechaISO = fechaObj.iso;
  const fechaFin = fechaFinObj.display;
  const fechaFinISO = fechaFinObj.iso;

  // 5. Detectar Horarios (HH:MM)
  const timeMatches = [];
  const timeRegex = /\b([01]?\d|2[0-3]):([0-5]\d)\b/g;
  let tm;
  while ((tm = timeRegex.exec(clean)) !== null) {
    timeMatches.push(`${tm[1].padStart(2, '0')}:${tm[2]}`);
  }
  const hora = timeMatches[0] || (tipo === 'hotel' ? '15:00' : '10:00');
  const horaFin = timeMatches[1] || (tipo === 'hotel' ? '11:00' : '');

  // 6. Detectar Noches
  let noches = 1;
  const nochesMatch = clean.match(/(\d+)\s*(?:noches|nights|notti|nuits)/i);
  if (nochesMatch) {
    noches = Math.max(1, parseInt(nochesMatch[1]) || 1);
  } else if (tipo === 'hotel' && fechaISO && fechaFinISO) {
    const dIn = new Date(fechaISO + 'T00:00:00');
    const dOut = new Date(fechaFinISO + 'T00:00:00');
    const diff = Math.round((dOut - dIn) / (1000 * 60 * 60 * 24));
    if (diff >= 1 && diff <= 60) noches = diff;
  }

  let duracion = tipo === 'vuelo' ? 240 : (tipo === 'tren' ? 105 : (tipo === 'hotel' ? 45 : 150));
  const durMatch = clean.match(/(\d+)\s*(?:min|minutos)/i);
  if (durMatch) {
    duracion = parseInt(durMatch[1]) || duracion;
  }

  // 7. Detectar Precio y Moneda
  let costo = 0;
  let moneda = 'USD';
  const priceMatch = clean.match(/(?:total(?:\s+pagado)?|precio(?:\s+total)?|importe(?:\s+abonado)?|tarifa)[:\s]*(USD|EUR|ARS|US\$|\$|€)\s*([\d.,]+)/i) ||
                     clean.match(/(USD|EUR|ARS|€)\s*([\d.,]+)/i) ||
                     clean.match(/([\d.,]+)\s*(USD|EUR|ARS|€)/i);
  if (priceMatch) {
    const p1 = (priceMatch[1] || '').trim();
    const p2 = (priceMatch[2] || '').trim();
    const isP1Num = /^\d/.test(p1);
    const rawNum = isP1Num ? p1 : p2;
    const sym = (isP1Num ? p2 : p1).toUpperCase();
    if (sym.includes('EUR') || sym.includes('€')) moneda = 'EUR';
    else if (sym.includes('ARS')) moneda = 'ARS';
    else moneda = 'USD';
    const parsedVal = parseFloat(rawNum.replace(/\.(?=\d{3})/g, '').replace(',', '.'));
    if (!isNaN(parsedVal)) costo = parsedVal;
  }

  // 8. Detectar Proveedor y Construir Título
  let proveedor = '';
  let titulo = '';

  if (tipo === 'vuelo') {
    const flightNumMatch = clean.match(/\b(IB|AR|LA|UX|AF|LH|AZ|AA|DL|UA|FR|VY|EK|QR|BA|KL|AV|CM|FO|WJ)\s?(\d{3,4})\b/);
    const flightNum = flightNumMatch ? `${flightNumMatch[1]}${flightNumMatch[2]}` : '';
    const airlineMatch = clean.match(/(Iberia|Aerol[ií]neas Argentinas|LATAM|Air Europa|ITA Airways|Lufthansa|Air France|Ryanair|Vueling|American Airlines|Delta|United|Emirates|Qatar Airways|British Airways|Avianca|Copa Airlines|JetSMART|Flybondi)/i);
    proveedor = airlineMatch ? airlineMatch[1] : (flightNum ? `Vuelo ${flightNum}` : 'Aerolínea');
    const origShort = origen ? origen.split(' - ')[0] : 'Origen';
    titulo = `Vuelo ${flightNum ? flightNum + ' · ' : ''}${origShort}${ciudad ? ' → ' + ciudad : ''}`;
  } else if (tipo === 'hotel') {
    const propMatch = clean.match(/(?:propiedad|hotel|alojamiento)[:\s]+([^\n\r]+)/i) ||
                      clean.match(/((?:Hotel|Hostel|Loft|Apartamento|Suite|Resort)\s+[^\n\r,]+)/i);
    const propName = propMatch ? propMatch[1].trim() : (ciudad ? `Alojamiento en ${ciudad}` : 'Alojamiento Confirmado');
    proveedor = /airbnb/i.test(clean) ? 'Airbnb' : (/booking/i.test(clean) ? 'Booking.com' : 'Alojamiento Confirmado');
    titulo = `Check-in: ${propName}`;
  } else if (tipo === 'tren') {
    const trenMatch = clean.match(/(Frecciarossa\s*\d*|Trenitalia\s*\d*|Renfe\s*AVE\s*\d*|Eurostar\s*\d*|Ouigo\s*\d*|Iryo\s*\d*|Italo\s*\d*|Shinkansen\s*\w*|FlixBus\s*\w*)/i);
    proveedor = trenMatch ? trenMatch[1].trim() : 'Tren Alta Velocidad';
    const routeSuffix = origen ? `${origen}${ciudad ? ' → ' + ciudad : ''}` : (ciudad ? `Hacia ${ciudad}` : '');
    titulo = `Tren ${proveedor}${routeSuffix ? ' · ' + routeSuffix : ''}`;
  } else {
    const actMatch = clean.match(/(?:actividad|tour|entrada|excursi[oó]n|veh[ií]culo)\s*:\s*([^\n\r]+)/i);
    const firstLine = (clean.split('\n').map(l => l.trim()).find(Boolean) || '').slice(0, 68);
    titulo = actMatch ? actMatch[1].trim() : (firstLine || (ciudad ? `Reserva en ${ciudad}` : 'Reserva'));
    const provMatch = clean.match(/(GetYourGuide|Civitatis|Viator|Tiqets|Parco Archeologico|Musei Vaticani|Booking|Hertz|Avis|Europcar)/i);
    proveedor = provMatch ? provMatch[1] : 'Reserva Oficial';
  }

  // 9. Extraer Notas útiles y detalles dinámicos
  const noteParts = [];
  const detallesExtra = [];
  if (pinCode) {
    noteParts.push(`PIN: ${pinCode}`);
    detallesExtra.push({ label: 'PIN de seguridad', value: pinCode });
  }
  const addrMatch = clean.match(/(?:direcci[oó]n|ubicaci[oó]n|punto\s+de\s+encuentro)[:\s]+([^\n\r]+)/i);
  if (addrMatch) {
    noteParts.push(addrMatch[1].trim());
    detallesExtra.push({ label: 'Ubicación', value: addrMatch[1].trim() });
  }
  const seatMatch = clean.match(/(?:asiento|seat|coche|vag[oó]n|terminal)[^\n\r]*/i);
  if (seatMatch) {
    noteParts.push(seatMatch[0].trim());
    detallesExtra.push({ label: 'Asiento / Terminal', value: seatMatch[0].trim() });
  }
  const extraMatch = clean.match(/(?:notas|r[eé]gimen|equipaje|idioma\s+del\s+tour)[:\s]+([^\n\r]+)/i);
  if (extraMatch) noteParts.push(extraMatch[1].trim());

  const notas = noteParts.length > 0 ? noteParts.join(' · ') : 'Importado desde comprobante de reserva';

  const salidaActual = (document.getElementById('lugarSalida')?.value || '').trim().toLowerCase();
  const isReturnHome = (tipo === 'vuelo' || tipo === 'tren') && salidaActual.length >= 3 && ciudad.toLowerCase().includes(salidaActual);
  const diaCalculado = calcularDiaViajePorFechaISO(fechaISO, earliestBatchISO);

  const parsedRes = {
    id: 'res_' + Date.now() + '_' + idx + '_' + Math.floor(Math.random() * 999),
    tipo,
    titulo,
    ciudad,
    _hasExplicitCity,
    origen,
    proveedor,
    codigo: codigo || 'CONF-OK',
    pin: pinCode,
    fecha,
    fechaISO,
    fechaFin,
    fechaFinISO,
    hora,
    horaFin,
    duracion,
    noches,
    costo,
    moneda,
    modoPrecio: 'persona',
    pagado: true,
    pagadoPor: 'Todos',
    escalas,
    etapas: [],
    detallesExtra,
    notas,
    diaIndex: diaCalculado,
    targetDestMode: isReturnHome ? 'vuelta_casa' : 'auto',
    sincronizarFechaInicio: idx === 0 && !!fechaISO && !document.getElementById('fechaInicio')?.value,
    guardarEnTransporte: tipo === 'vuelo' || tipo === 'tren' || tipo === 'hotel' || tipo === 'crucero',
    expandirNoches: tipo === 'hotel',
    imagePreview: pluxPendingImagePreview || null,
    rawEmail: clean.slice(0, 2000),
    agregadoAlViaje: false
  };
  parsedRes._syncKey = computeBookingSyncKey(parsedRes);
  return parsedRes;
}

function analizarTextoReserva(silent = false) {
  const input = document.getElementById('reservaRawInput');
  const raw = input ? input.value.trim() : '';
  if (!raw) {
    if (!silent && typeof window.showToast === 'function') {
      window.showToast('Pega el texto de tu correo o sube un PDF/capturas primero', 'info');
    }
    return;
  }

  const parsedDocs = deduplicarReservasPorSyncKey(parsearTextoDocumentoAReservas(raw));
  pluxLastDocReservas = parsedDocs;

  if (pluxLastVisionBatches.length > 0) {
    pluxDetectedReservas = deduplicarReservasPorSyncKey(unificarResultadosImportacion(pluxLastVisionBatches, pluxLastDocReservas));
  } else {
    pluxDetectedReservas = parsedDocs;
  }
  renderizarTarjetasReservasDetectadas();

  if (!silent && typeof window.showToast === 'function') {
    if (pluxDetectedReservas.length === 0) {
      window.showToast('No se detectaron reservas válidas en el texto. Verifica que incluya destino, fecha o código de reserva.', 'info');
      return;
    }
    const firstMulti = pluxDetectedReservas.find(r => Array.isArray(r.etapas) && r.etapas.length > 0);
    if (firstMulti) {
      window.showToast(`Itinerario detectado con ${firstMulti.etapas.length} paradas (${firstMulti.totalDiasCalendario || firstMulti.etapas.length} días) listo para sincronizar`, 'success');
    } else {
      window.showToast(`${pluxDetectedReservas.length} ${pluxDetectedReservas.length === 1 ? 'reserva estructurada' : 'reservas estructuradas'} con éxito`, 'success');
    }
  }
}

async function analizarReservaConIA() {
  const input = document.getElementById('reservaRawInput');
  const raw = input ? input.value.trim() : '';
  if (!raw && pluxPendingImages.length === 0) {
    if (typeof window.showToast === 'function') {
      window.showToast('Pega el correo/texto o sube un PDF/imágenes primero', 'info');
    }
    return;
  }

  // Si hay imágenes pendientes y aún no fueron analizadas o fallaron, ejecutar Vision-First Direct JSON
  if (pluxPendingImages.length > 0 && (!raw || pluxPendingImages.some(img => img.status !== 'done'))) {
    const imgsToRun = pluxPendingImages.filter(img => img.status !== 'done');
    if (imgsToRun.length > 0 && !pluxOcrInProgress) {
      pluxOcrInProgress = true;
      try {
        actualizarBannerArchivosReserva(`Analizando ${imgsToRun.length} ${imgsToRun.length === 1 ? 'imagen' : 'imágenes'} con Vision IA...`);
        const { batches } = await analizarImagenesVisionDirecto(imgsToRun);
        if (batches.length > 0) {
          pluxLastVisionBatches = [...pluxLastVisionBatches, ...batches];
          const unified = unificarResultadosImportacion(pluxLastVisionBatches, pluxLastDocReservas);
          if (unified.length > 0) {
            pluxDetectedReservas = unified;
            renderizarTarjetasReservasDetectadas();
            if (typeof window.showToast === 'function') {
              window.showToast('Itinerario extraído directamente con Vision IA', 'success');
            }
            return;
          }
        }
      } finally {
        pluxOcrInProgress = false;
        actualizarBannerArchivosReserva();
      }
    }
  }

  if (raw) analizarTextoReserva(true);
  if (!raw) return;

  const endpoint = (typeof window.GEMINI_ENDPOINT !== 'undefined' && window.GEMINI_ENDPOINT)
    ? window.GEMINI_ENDPOINT
    : 'https://pluxy.nibecar-cofeben.workers.dev/';

  if (!navigator.onLine) {
    if (typeof window.showToast === 'function') window.showToast('Sin conexión: usando análisis local', 'info');
    return;
  }

  try {
    if (typeof window.showToast === 'function') {
      window.showToast('Extrayendo estructura completa con IA...', 'info');
    }
    const prompt = `Analiza el siguiente comprobante o conjunto de capturas de viaje (puede ser crucero, vuelo, hotel, tren, actividad o paquete completo) y extrae TODOS los datos sin limitarte a campos fijos.
Devuelve ÚNICAMENTE un JSON Array válido donde cada reserva tenga:
{
  "tipo": "crucero|vuelo|hotel|tren|actividad|auto",
  "titulo": "string descriptivo",
  "ciudad": "ciudad/puerto principal o de embarque",
  "origen": "ciudad/puerto de salida",
  "ciudadDesembarque": "ciudad/puerto final si es crucero o ida y vuelta",
  "proveedor": "compañía o naviera",
  "codigo": "código de reserva o PNR real (NO nombres de pasajeros)",
  "fecha": "DD/MM/YYYY fecha real del viaje/embarque (NO la fecha de emisión del presupuesto)",
  "fechaISO": "YYYY-MM-DD",
  "fechaFin": "DD/MM/YYYY",
  "fechaFinISO": "YYYY-MM-DD",
  "hora": "HH:MM",
  "horaFin": "HH:MM",
  "noches": 1,
  "costo": 0,
  "montoPagado": 0,
  "saldoPendiente": 0,
  "moneda": "USD|EUR|ARS",
  "modoPrecio": "total|persona",
  "notas": "resumen útil",
  "detallesExtra": [{"label":"Ej: Nave / Cabina / Pasajeros / Experiencia","value":"valor real"}],
  "etapas": [{"diaNum":1,"fecha":"DD/MM/YYYY","fechaISO":"YYYY-MM-DD","ciudad":"puerto o 'En Navegación'","esNavegacion":false,"horaLlegada":"HH:MM o ''","horaSalida":"HH:MM o ''","notas":"tenders, embarque, etc"}]
}
Texto del comprobante:
${raw.slice(0, 14000)}`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system: 'Eres un extractor estructurado de documentos de viaje. Responde SOLO con JSON válido, sin markdown ni texto adicional.',
        prompt,
        temperature: 0.1,
        max_tokens: 3500
      })
    });

    if (res.ok) {
      const data = await res.json();
      const replyText = data.reply || data.text || data.output || '';
      const parsed = extraerJsonDeRespuestaIA(replyText);
      const parsedArr = Array.isArray(parsed) ? parsed : (parsed && typeof parsed === 'object' ? [parsed] : []);
      if (parsedArr.length > 0) {
        pluxDetectedReservas = parsedArr.map((item, i) => {
          const normStart = normalizarFechaTexto(item.fechaISO || item.fecha);
          const normEnd = normalizarFechaTexto(item.fechaFinISO || item.fechaFin);
          const rawEtapasAI = Array.isArray(item.etapas) ? item.etapas.map((et, eIdx) => {
            const eNorm = normalizarFechaTexto(et.fechaISO || et.fecha);
            return {
              diaNum: Number(et.diaNum) || (eIdx + 1),
              fecha: eNorm.display || et.fecha || '',
              fechaISO: eNorm.iso || et.fechaISO || '',
              ciudad: et.ciudad || 'Destino',
              esNavegacion: Boolean(et.esNavegacion) || /navegaci[oó]n|alta\s*mar|at\s*sea/i.test(et.ciudad || ''),
              horaLlegada: et.horaLlegada || '',
              horaSalida: et.horaSalida || '',
              notaParada: et.notaParada || et.notas || '',
              notas: et.notaParada || et.notas || ''
            };
          }) : [];
          const { stops: etapasCompact, totalDiasCalendario, noches: nochesCompact } = rawEtapasAI.length > 0
            ? compactStagesWithTransit(rawEtapasAI, { isCruise: (item.tipo || '') === 'crucero' })
            : { stops: [], totalDiasCalendario: 0, noches: 0 };

          const obj = {
            id: 'res_ai_' + Date.now() + '_' + i,
            tipo: item.tipo || (etapasCompact.length > 1 ? 'crucero' : 'actividad'),
            titulo: item.titulo || 'Reserva Importada',
            ciudad: item.ciudad || etapasCompact[0]?.ciudad || 'Destino',
            origen: item.origen || '',
            ciudadDesembarque: item.ciudadDesembarque || etapasCompact[etapasCompact.length - 1]?.ciudad || '',
            proveedor: item.proveedor || 'Confirmación',
            codigo: (item.codigo || 'CONF-IA').toUpperCase(),
            pin: item.pin || '',
            fecha: normStart.display || etapasCompact[0]?.fecha || item.fecha || '',
            fechaISO: normStart.iso || etapasCompact[0]?.fechaISO || item.fechaISO || '',
            fechaFin: normEnd.display || etapasCompact[etapasCompact.length - 1]?.fecha || item.fechaFin || '',
            fechaFinISO: normEnd.iso || etapasCompact[etapasCompact.length - 1]?.fechaISO || item.fechaFinISO || '',
            hora: item.hora || etapasCompact[0]?.horaSalida || '10:00',
            horaFin: item.horaFin || etapasCompact[etapasCompact.length - 1]?.horaLlegada || '',
            duracion: Number(item.duracion) || 120,
            noches: Number(item.noches) || nochesCompact || Math.max(1, etapasCompact.length - 1),
            totalDiasCalendario: totalDiasCalendario || 0,
            costo: parseAmountSmart(item.costo),
            montoPagado: parseAmountSmart(item.montoPagado),
            saldoPendiente: parseAmountSmart(item.saldoPendiente),
            moneda: item.moneda || 'USD',
            modoPrecio: item.modoPrecio || (item.tipo === 'crucero' ? 'total' : 'persona'),
            pagado: parseAmountSmart(item.saldoPendiente) <= 0,
            pagadoPor: 'Todos',
            escalas: etapasCompact.map(e => `${e.ciudad}${e.fecha ? ' (' + e.fecha + ')' : ''}`),
            etapas: etapasCompact,
            detallesExtra: Array.isArray(item.detallesExtra) ? item.detallesExtra : [],
            notas: item.notas || 'Extraído con IA de Plux',
            diaIndex: calcularDiaViajePorFechaISO(normStart.iso || item.fechaISO),
            targetDestMode: 'auto',
            sincronizarFechaInicio: i === 0 && !document.getElementById('fechaInicio')?.value,
            guardarEnTransporte: ['vuelo', 'tren', 'hotel', 'crucero'].includes(item.tipo),
            expandirNoches: item.tipo === 'hotel',
            imagePreview: pluxPendingImagePreview || null,
            rawEmail: raw.slice(0, 3000),
            agregadoAlViaje: false
          };
          obj._syncKey = computeBookingSyncKey(obj);
          return obj;
        });
        renderizarTarjetasReservasDetectadas();
        if (typeof window.showToast === 'function') {
          window.showToast('Datos completos extraídos con Inteligencia Artificial', 'success');
        }
        return;
      }
    }
  } catch (e) {
    console.warn('Fallback heurístico local activado:', e);
  }
}

function actualizarFinanzasReservaDetectada(idx, field, value) {
  const r = pluxDetectedReservas[idx];
  if (!r) return;
  const numVal = Math.max(0, parseFloat(value) || 0);
  r[field] = numVal;
  if (field === 'costo') {
    if (Number(r.montoPagado) > 0 && Number(r.montoPagado) <= numVal) {
      r.saldoPendiente = Number((numVal - Number(r.montoPagado)).toFixed(2));
    } else if (r.pagado === false) {
      r.saldoPendiente = numVal;
    }
  } else if (field === 'montoPagado') {
    const total = Number(r.costo) || 0;
    if (total > 0) {
      r.saldoPendiente = Number(Math.max(0, total - numVal).toFixed(2));
    }
    r.pagado = (Number(r.saldoPendiente) || 0) <= 0 && numVal > 0;
  } else if (field === 'saldoPendiente') {
    r.pagado = numVal <= 0;
  }
}

function renderizarTarjetasReservasDetectadas() {
  const cont = document.getElementById('reservasDetectadasContainer');
  const counter = document.getElementById('reservasDetectadasCounter');
  if (!cont) return;

  if (!pluxDetectedReservas || pluxDetectedReservas.length === 0) {
    if (counter) counter.textContent = '';
    cont.innerHTML = `
      <div style="text-align:center; padding:42px 20px; color:var(--gris); border:1px dashed rgba(255,255,255,0.12); border-radius:16px;">
        <i class="fa-solid fa-ticket" style="font-size:2.3rem; color:rgba(56,189,248,0.45); margin-bottom:12px; display:block;"></i>
        <p style="margin:0 0 6px 0; font-weight:700; color:#e2e8f0; font-size:0.95rem;">Listo para analizar tus comprobantes</p>
        <p style="margin:0; font-size:0.82rem; line-height:1.5;">Sube uno o varios <strong>PDFs</strong>, <strong>capturas de pantalla</strong>, un calendario <strong>.ics</strong> o pega tu mail de confirmación para que Plux organice escalas, transporte, alojamiento y presupuesto sin duplicar gastos.</p>
      </div>
    `;
    return;
  }

  if (counter) {
    counter.textContent = `${pluxDetectedReservas.length} ${pluxDetectedReservas.length === 1 ? 'detectada' : 'detectadas'}`;
  }

  const tipoBadgeMap = {
    crucero: { icon: 'fa-ship', label: 'Crucero / Travesía', destPresupuesto: 'Arma paradas reales + días de navegación sin duplicar costo' },
    vuelo: { icon: 'fa-plane-departure', label: 'Vuelo / Aéreo', destPresupuesto: 'Se carga en Transporte del destino' },
    hotel: { icon: 'fa-hotel', label: 'Alojamiento', destPresupuesto: 'Se carga en Alojamiento + Check-in/out' },
    tren: { icon: 'fa-train', label: 'Tren / Bus', destPresupuesto: 'Se carga en Transporte del destino' },
    actividad: { icon: 'fa-ticket', label: 'Entrada / Tour', destPresupuesto: 'Se carga en Actividades del Día' },
    auto: { icon: 'fa-car-side', label: 'Alquiler de Auto', destPresupuesto: 'Se carga en el Día seleccionado' }
  };

  const viajeros = obtenerViajerosParaReserva();
  const numP = (typeof numPersonas !== 'undefined' && Number(numPersonas) > 0) ? Number(numPersonas) : 1;
  const destsActuales = (typeof destinos !== 'undefined' && Array.isArray(destinos)) ? destinos : [];
  const walletKeys = new Set(obtenerWalletReservas().map(w => w._syncKey || computeBookingSyncKey(w)));

  let html = '';

  if (pluxDetectedReservas.length > 1) {
    const timelineSorted = [...pluxDetectedReservas].sort((a, b) => (a.fechaISO || '9999').localeCompare(b.fechaISO || '9999'));
    html += `
      <div style="margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; background:rgba(16,185,129,0.12); border:1px solid rgba(16,185,129,0.35); padding:10px 14px; border-radius:12px;">
        <span style="font-size:0.84rem; font-weight:700; color:var(--texto);">
          <i class="fa-solid fa-layer-group" style="color:var(--verde); margin-right:6px;"></i>
          Se detectaron <strong>${pluxDetectedReservas.length} reservas</strong> con fechas y destinos sincronizados
        </span>
        <button type="button" class="btn-card-primary" style="padding:8px 14px; font-size:0.8rem;" onclick="window.importarTodasLasReservas()">
          <i class="fa-solid fa-check-double"></i> Sincronizar Todas (${pluxDetectedReservas.length})
        </button>
      </div>
      <div class="reservas-timeline-preview">
        ${timelineSorted.map(item => {
          const m = tipoBadgeMap[item.tipo] || tipoBadgeMap.actividad;
          return `<span class="reservas-timeline-chip"><i class="fa-solid ${m.icon}" style="color:var(--verde);"></i> ${escapeHtml(item.fecha ? item.fecha.slice(0,5) : 'Día ' + ((Number(item.diaIndex)||0)+1))} · ${escapeHtml(item.ciudad || item.titulo || 'Sin destino')}</span>`;
        }).join('<span style="color:var(--gris); align-self:center; font-size:0.75rem;">→</span>')}
      </div>
    `;
  }

  html += '<div class="reservas-detected-list">';

  pluxDetectedReservas.forEach((r, idx) => {
    const meta = tipoBadgeMap[r.tipo] || tipoBadgeMap.actividad;
    const isMultiStage = Array.isArray(r.etapas) && r.etapas.length > 0;
    const unitPreview = r.modoPrecio === 'total' && numP > 1 ? (Number(r.costo || 0) / numP).toFixed(2) : Number(r.costo || 0);
    const syncKey = r._syncKey || computeBookingSyncKey(r);
    const yaEnWallet = walletKeys.has(syncKey);
    const hasPartialPayment = (Number(r.montoPagado) > 0 || Number(r.saldoPendiente) > 0);
    const paidDisplay = hasPartialPayment ? Number(r.montoPagado || 0) : (r.pagado !== false ? Number(r.costo || 0) : 0);
    const pendingDisplay = hasPartialPayment ? Number(r.saldoPendiente || 0) : (r.pagado === false ? Number(r.costo || 0) : 0);
    const totalDaysLabel = r.totalDiasCalendario || (isMultiStage ? r.etapas.reduce((acc, e) => acc + 1 + (Number(e.diasTransitoPrevio) || 0), 0) : 0);

    html += `
      <div class="voucher-card" data-idx="${idx}">
        <div class="voucher-card-top">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span class="voucher-type-badge tipo-${r.tipo}">
              <i class="fa-solid ${meta.icon}"></i> ${meta.label}
            </span>
            <span style="font-size:0.72rem; color:var(--gris); background:rgba(255,255,255,0.05); padding:3px 8px; border-radius:6px;">
              ${escapeHtml(meta.destPresupuesto)}
            </span>
            ${yaEnWallet ? `<span style="font-size:0.7rem; font-weight:800; color:#fbbf24; background:rgba(251,191,36,0.14); padding:3px 8px; border-radius:6px;"><i class="fa-solid fa-wallet"></i> Ya en Billetera</span>` : ''}
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            ${r.pin ? `<span style="font-size:0.74rem; font-family:monospace; background:rgba(251,191,36,0.15); color:#fbbf24; padding:3px 7px; border-radius:6px; font-weight:800;">PIN: ${escapeHtml(r.pin)}</span>` : ''}
            <span class="voucher-pnr-pill" title="Código de reserva / PNR">
              <i class="fa-solid fa-barcode"></i> ${escapeHtml(r.codigo || 'CONF')}
            </span>
          </div>
        </div>

        <div class="voucher-card-body">
          ${isMultiStage ? `
            <!-- Cabecera compacta para itinerario multi-etapa (oculta campos de reserva simple) -->
            <div class="reserva-meta-grid">
              <div class="reserva-meta-item" style="grid-column: 1 / -1;">
                <label>Concepto / Nombre del Itinerario</label>
                <input type="text" value="${escapeHtml(r.titulo)}" oninput="window.actualizarCampoReservaDetectada(${idx}, 'titulo', this.value)">
              </div>
              <div class="reserva-meta-item">
                <label>Código de Reserva / PNR</label>
                <input type="text" value="${escapeHtml(r.codigo)}" oninput="window.actualizarCampoReservaDetectada(${idx}, 'codigo', this.value.toUpperCase())">
              </div>
              <div class="reserva-meta-item">
                <label>Fechas (${totalDaysLabel} días · ${r.noches || Math.max(0, totalDaysLabel - 1)} noches)</label>
                <input type="text" value="${escapeHtml([r.fecha, r.fechaFin].filter(Boolean).join(' → '))}" readonly>
              </div>
            </div>
          ` : `
            <!-- Campos estándar para reserva simple (vuelo, hotel, tren, actividad, auto) -->
            <div class="voucher-fields-grid">
              <div class="voucher-field voucher-field-full">
                <label>Concepto / Título en tu Itinerario</label>
                <input type="text" value="${escapeHtml(r.titulo)}" oninput="window.actualizarCampoReservaDetectada(${idx}, 'titulo', this.value)">
              </div>

              <div class="voucher-field">
                <label>Ciudad / Destino</label>
                <input type="text" value="${escapeHtml(r.ciudad)}" oninput="window.actualizarCampoReservaDetectada(${idx}, 'ciudad', this.value)">
              </div>

              <div class="voucher-field">
                <label>Ubicar en Destino del Viaje</label>
                <select onchange="window.actualizarCampoReservaDetectada(${idx}, 'targetDestMode', this.value)">
                  <option value="auto" ${r.targetDestMode === 'auto' ? 'selected' : ''}>Automático (${escapeHtml(r.ciudad || 'Sin destino')})</option>
                  ${destsActuales.map(d => `<option value="dest_${d.id}" ${r.targetDestMode === 'dest_' + d.id ? 'selected' : ''}>Destino existente: ${escapeHtml(d.nombre)}</option>`).join('')}
                  ${(r.tipo === 'vuelo' || r.tipo === 'tren') ? `<option value="vuelta_casa" ${r.targetDestMode === 'vuelta_casa' ? 'selected' : ''}>Tramo de Regreso a Casa (Vuelta Global)</option>` : ''}
                </select>
              </div>

              <div class="voucher-field">
                <label>Fecha (${r.fechaISO ? 'Calcula el Día solo' : 'DD/MM/YYYY'})</label>
                <input type="text" value="${escapeHtml(r.fecha)}" placeholder="Ej: 15/11/2026" onchange="window.actualizarFechaReservaDetectada(${idx}, this.value)">
              </div>

              <div class="voucher-field">
                <label>Día asignado en el destino</label>
                <select id="voucherDiaSelect-${idx}" onchange="window.actualizarCampoReservaDetectada(${idx}, 'diaIndex', Number(this.value))">
                  ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(dIdx => `
                    <option value="${dIdx}" ${Number(r.diaIndex) === dIdx ? 'selected' : ''}>Día ${dIdx + 1}${Number(r.diaIndex) === dIdx && r.fecha ? ` (${escapeHtml(r.fecha)})` : ''}</option>
                  `).join('')}
                </select>
              </div>

              <div class="voucher-field">
                <label>Hora Inicio / Fin</label>
                <div style="display:flex; gap:6px;">
                  <input type="text" value="${escapeHtml(r.hora)}" placeholder="10:00" style="width:50%;" oninput="window.actualizarCampoReservaDetectada(${idx}, 'hora', this.value)">
                  <input type="text" value="${escapeHtml(r.horaFin || '')}" placeholder="Fin" style="width:50%;" oninput="window.actualizarCampoReservaDetectada(${idx}, 'horaFin', this.value)">
                </div>
              </div>

              <div class="voucher-field">
                <label>Código PNR / Referencia</label>
                <input type="text" value="${escapeHtml(r.codigo)}" oninput="window.actualizarCampoReservaDetectada(${idx}, 'codigo', this.value.toUpperCase())">
              </div>

              <div class="voucher-field voucher-field-full">
                <label>Notas (Dirección, Asiento, Terminal, Escalas, Punto de encuentro)</label>
                <input type="text" value="${escapeHtml(r.notas)}" oninput="window.actualizarCampoReservaDetectada(${idx}, 'notas', this.value)">
              </div>
            </div>
          `}

          <!-- Metadatos dinámicos editables del comprobante -->
          <div style="margin-top:8px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-size:0.72rem; font-weight:700; color:#38bdf8; text-transform:uppercase; letter-spacing:0.4px;">Datos del comprobante</span>
              <button type="button" onclick="window.agregarDetalleExtraReserva(${idx})" style="background:transparent; border:1px solid rgba(148,163,184,0.3); color:var(--texto); border-radius:6px; padding:2px 8px; font-size:0.7rem; cursor:pointer;">+ Dato</button>
            </div>
            ${Array.isArray(r.detallesExtra) && r.detallesExtra.length > 0 ? `
              <div class="reserva-meta-grid">
                ${r.detallesExtra.map((det, dIdx) => `
                  <div class="reserva-meta-item">
                    <label>${escapeHtml(det.label)}</label>
                    <input type="text" value="${escapeHtml(det.value)}" oninput="window.actualizarDetalleExtraReserva(${idx}, ${dIdx}, this.value)">
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <!-- Barra Financiera Clara: Total / Pagado / Saldo pendiente -->
          <div class="reserva-finance-bar">
            <div class="reserva-finance-metric reserva-finance-pill">
              <label>Total (${r.modoPrecio === 'total' ? 'Grupal' : 'Por persona'})</label>
              <div style="display:flex; gap:5px; align-items:center;">
                <input type="number" value="${Number(r.costo || 0)}" min="0" step="0.01" style="flex:1; min-width:0;" oninput="window.actualizarFinanzasReservaDetectada(${idx}, 'costo', this.value)">
                <select class="reserva-currency-select" style="min-width:82px; width:82px; padding:6px 8px; flex-shrink:0;" onchange="window.actualizarCampoReservaDetectada(${idx}, 'moneda', this.value)">
                  <option value="USD" ${r.moneda === 'USD' ? 'selected' : ''}>USD</option>
                  <option value="EUR" ${r.moneda === 'EUR' ? 'selected' : ''}>EUR</option>
                  <option value="ARS" ${r.moneda === 'ARS' ? 'selected' : ''}>ARS</option>
                </select>
              </div>
              <select style="margin-top:4px; width:100%;" onchange="window.actualizarCampoReservaDetectada(${idx}, 'modoPrecio', this.value); window.renderizarTarjetasReservasDetectadas();">
                <option value="total" ${r.modoPrecio === 'total' ? 'selected' : ''}>Total del grupo (${numP > 1 ? '$' + unitPreview + '/p' : 'sin multiplicar'})</option>
                <option value="persona" ${r.modoPrecio === 'persona' ? 'selected' : ''}>Por persona ($${Number(r.costo || 0)} × ${numP})</option>
              </select>
            </div>

            <div class="reserva-finance-metric reserva-finance-metric--paid reserva-finance-pill">
              <label>Pagado (${escapeHtml(r.moneda || 'USD')})</label>
              <input type="number" value="${paidDisplay}" min="0" step="0.01" oninput="window.actualizarFinanzasReservaDetectada(${idx}, 'montoPagado', this.value)">
              <select style="margin-top:4px; width:100%;" onchange="window.actualizarCampoReservaDetectada(${idx}, 'pagadoPor', this.value)">
                <option value="Todos" ${r.pagadoPor === 'Todos' ? 'selected' : ''}>Pagó: Todos</option>
                ${viajeros.map(v => `<option value="${escapeHtml(v)}" ${r.pagadoPor === v ? 'selected' : ''}>Pagó: ${escapeHtml(v)}</option>`).join('')}
              </select>
            </div>

            <div class="reserva-finance-metric ${pendingDisplay > 0 ? 'reserva-finance-metric--pending' : 'reserva-finance-metric--paid'} reserva-finance-pill">
              <label>${pendingDisplay > 0 ? 'Saldo pendiente' : 'Estado de pago'}</label>
              <input type="number" value="${pendingDisplay}" min="0" step="0.01" oninput="window.actualizarFinanzasReservaDetectada(${idx}, 'saldoPendiente', this.value)">
              <div style="font-size:0.7rem; margin-top:4px; font-weight:700; color:${pendingDisplay > 0 ? '#f59e0b' : '#10b981'};">
                ${pendingDisplay > 0 ? `Falta abonar ${escapeHtml(r.moneda || 'USD')} ${pendingDisplay.toFixed(2)}` : 'Saldado completo ✓'}
              </div>
            </div>
          </div>

          <!-- Timeline de Etapas Responsivo sin Scroll Horizontal -->
          ${isMultiStage ? `
            <div class="reserva-stages-box">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:8px;">
                <span style="font-size:0.76rem; font-weight:800; color:var(--verde);">
                  <i class="fa-solid fa-route"></i> ${r.etapas.length} paradas reales · ${totalDaysLabel} días calendario
                </span>
                <span style="font-size:0.7rem; color:var(--gris);">Días de navegación se conectan automáticamente entre puertos</span>
              </div>
              <div class="reserva-stages-list">
                ${r.etapas.map((et, eIdx) => {
                  const hasTender = /tender|bote auxiliar/i.test(et.notaParada || et.notas || '');
                  const transitDays = Number(et.diasTransitoPrevio) || 0;
                  return `
                    ${transitDays > 0 ? `
                      <div class="reserva-stage-transit-pill">
                        <i class="fa-solid fa-ship"></i>
                        ${transitDays} ${transitDays === 1 ? 'día' : 'días'} · ${escapeHtml(et.transitoEtiqueta || 'En navegación')}
                      </div>
                    ` : ''}
                    <div class="reserva-stage-row">
                      <input type="text" value="${escapeHtml(et.fecha)}" onchange="window.actualizarEtapaReservaDetectada(${idx}, ${eIdx}, 'fecha', this.value)" title="Fecha">
                      <div style="display:flex; align-items:center; gap:5px; min-width:0;">
                        <input type="text" value="${escapeHtml(et.ciudad)}" oninput="window.actualizarEtapaReservaDetectada(${idx}, ${eIdx}, 'ciudad', this.value)" style="flex:1; min-width:0; font-weight:600;" title="Puerto / Ciudad">
                        ${hasTender ? '<span class="reserva-stage-tender-badge" title="Servicio de tenders / bote auxiliar">Tender</span>' : ''}
                      </div>
                      <input type="text" value="${escapeHtml(et.horaLlegada)}" placeholder="Lleg." oninput="window.actualizarEtapaReservaDetectada(${idx}, ${eIdx}, 'horaLlegada', this.value)" title="Hora de llegada">
                      <input type="text" value="${escapeHtml(et.horaSalida)}" placeholder="Sal." oninput="window.actualizarEtapaReservaDetectada(${idx}, ${eIdx}, 'horaSalida', this.value)" title="Hora de salida">
                      <button type="button" onclick="window.eliminarEtapaReservaDetectada(${idx}, ${eIdx})" title="Quitar parada" style="background:transparent; border:none; color:#f87171; cursor:pointer; font-size:0.95rem; padding:0;">&times;</button>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <div style="display:flex; flex-wrap:wrap; gap:14px; font-size:0.78rem; color:var(--gris); padding-top:4px;">
            ${r.fechaISO ? `
              <label style="display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
                <input type="checkbox" ${r.sincronizarFechaInicio ? 'checked' : ''} onchange="window.actualizarCampoReservaDetectada(${idx}, 'sincronizarFechaInicio', this.checked)">
                Usar ${escapeHtml(r.fecha)} como fecha de inicio del viaje si está vacía
              </label>
            ` : ''}
            ${r.tipo === 'hotel' ? `
              <label style="display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
                <input type="checkbox" ${r.expandirNoches ? 'checked' : ''} onchange="window.actualizarCampoReservaDetectada(${idx}, 'expandirNoches', this.checked)">
                Crear automáticamente los ${r.noches || 1} días de estadía + Check-out al final
              </label>
            ` : ''}
          </div>

          <div class="voucher-card-footer">
            <button type="button" class="btn-card-secondary" style="padding:8px 12px; font-size:0.78rem;" onclick="window.guardarSoloEnWallet(${idx})">
              <i class="fa-solid fa-bookmark"></i> Solo Billetera
            </button>

            <button type="button" class="btn-card-primary" style="padding:9px 16px; font-size:0.82rem; ${r.agregadoAlViaje ? 'background:rgba(16,185,129,0.25); color:var(--verde); border:1px solid var(--verde);' : ''}" onclick="window.importarReservaAlViaje(${idx})">
              <i class="fa-solid ${r.agregadoAlViaje ? 'fa-check' : 'fa-calendar-plus'}"></i>
              ${r.agregadoAlViaje ? 'Sincronizada (actualizar)' : 'Sincronizar con mi Viaje'}
            </button>
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  cont.innerHTML = html;
}

function actualizarCampoReservaDetectada(idx, field, value) {
  if (!pluxDetectedReservas[idx]) return;
  pluxDetectedReservas[idx][field] = value;
}

function actualizarDetalleExtraReserva(idx, detIdx, value) {
  if (!pluxDetectedReservas[idx]?.detallesExtra?.[detIdx]) return;
  pluxDetectedReservas[idx].detallesExtra[detIdx].value = value;
}

function agregarDetalleExtraReserva(idx) {
  const r = pluxDetectedReservas[idx];
  if (!r) return;
  const label = prompt('Nombre del campo (ej: Cabina, Terminal, Asiento):');
  if (!label || !label.trim()) return;
  r.detallesExtra = r.detallesExtra || [];
  r.detallesExtra.push({ label: label.trim(), value: '' });
  renderizarTarjetasReservasDetectadas();
}

function actualizarEtapaReservaDetectada(idx, etapaIdx, field, value) {
  const et = pluxDetectedReservas[idx]?.etapas?.[etapaIdx];
  if (!et) return;
  et[field] = value;
  if (field === 'fecha') {
    const n = normalizarFechaTexto(value);
    if (n.iso) {
      et.fecha = n.display;
      et.fechaISO = n.iso;
    }
  }
}

function eliminarEtapaReservaDetectada(idx, etapaIdx) {
  const r = pluxDetectedReservas[idx];
  if (!r || !Array.isArray(r.etapas)) return;
  r.etapas.splice(etapaIdx, 1);
  renderizarTarjetasReservasDetectadas();
}

function actualizarFechaReservaDetectada(idx, rawVal) {
  if (!pluxDetectedReservas[idx]) return;
  const norm = normalizarFechaTexto(rawVal);
  pluxDetectedReservas[idx].fecha = norm.display || rawVal;
  pluxDetectedReservas[idx].fechaISO = norm.iso || '';
  if (norm.iso) {
    const newDiaIdx = calcularDiaViajePorFechaISO(norm.iso);
    pluxDetectedReservas[idx].diaIndex = newDiaIdx;
    const sel = document.getElementById(`voucherDiaSelect-${idx}`);
    if (sel) sel.value = String(newDiaIdx);
  }
}

function abrirVouchersDelViaje() {
  pluxReservaInputMode = 'wallet';
  pluxWalletScope = 'trip';
  pluxWalletScopeUserPicked = true;
  if (typeof window.abrirDescubrir === 'function') {
    window.abrirDescubrir('reservas');
  }
  setTimeout(() => {
    const sec = document.querySelector('.wallet-reservas-section');
    if (sec && typeof sec.scrollIntoView === 'function') {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 120);
}

async function subirAdjuntosVoucherCloudinary(resObj) {
  if (!resObj || typeof window.uploadToCloudinary !== 'function' || !navigator.onLine) return;
  const candidates = [];
  if (Array.isArray(pluxPendingImages) && pluxPendingImages.length > 0) {
    pluxPendingImages.forEach(img => {
      if (img?.dataUrl && String(img.dataUrl).startsWith('data:')) {
        candidates.push({ name: img.name || 'comprobante.jpg', dataUrl: img.dataUrl });
      }
    });
  } else if (resObj.imagePreview && String(resObj.imagePreview).startsWith('data:')) {
    candidates.push({ name: 'voucher.jpg', dataUrl: resObj.imagePreview });
  }
  if (candidates.length === 0) return;

  try {
    const uploaded = [];
    for (const item of candidates.slice(0, 6)) {
      const blob = await (await fetch(item.dataUrl)).blob();
      const file = new File([blob], item.name, { type: blob.type || 'image/jpeg' });
      const url = await window.uploadToCloudinary(file);
      if (url && /^https?:\/\//i.test(url)) {
        uploaded.push({ name: item.name, url });
      }
    }
    if (uploaded.length > 0) {
      resObj.cloudinaryUrls = uploaded;
      resObj.imagePreview = uploaded[0].url;
      guardarReservaEnWallet(resObj);
      if (resObj.agregadoAlViaje && window.pluxTripApi?.upsertTripVoucher) {
        window.pluxTripApi.upsertTripVoucher(resObj);
      }
    }
  } catch (e) {
    console.warn('No se pudo subir adjunto del voucher a Cloudinary:', e);
  }
}

function guardarReservaEnWallet(resObj) {
  if (!resObj || esVoucherCorruptoOCR(resObj)) return;
  const wallet = obtenerWalletReservas();
  const syncKey = resObj._syncKey || computeBookingSyncKey(resObj);
  resObj._syncKey = syncKey;
  const activeTripId = window.pluxTripApi?.getActiveTripInfo?.()?.tripId || null;
  if (resObj.agregadoAlViaje && activeTripId) {
    resObj.tripId = activeTripId;
  } else if (resObj.tripId === undefined) {
    resObj.tripId = null;
  }
  const existsIdx = wallet.findIndex(w =>
    (w._syncKey && w._syncKey === syncKey) ||
    (isRealBookingCode(w.codigo) && isRealBookingCode(resObj.codigo) && w.codigo.toUpperCase() === resObj.codigo.toUpperCase() && w.tipo === resObj.tipo) ||
    w.id === resObj.id
  );
  const copy = JSON.parse(JSON.stringify(resObj));
  copy._syncKey = syncKey;
  if (copy.agregadoAlViaje) {
    copy.tripId = activeTripId || copy.tripId || null;
  }
  copy.savedAt = new Date().toISOString();
  if (existsIdx >= 0) {
    wallet[existsIdx] = copy;
  } else {
    wallet.unshift(copy);
  }
  guardarWalletReservasStorage(wallet);
  if (copy.agregadoAlViaje && window.pluxTripApi?.upsertTripVoucher) {
    window.pluxTripApi.upsertTripVoucher(copy);
  }
  renderizarWalletReservas();
}

function guardarSoloEnWallet(idx) {
  const res = pluxDetectedReservas[idx];
  if (!res) return;
  guardarReservaEnWallet(res);
  if (typeof window.showToast === 'function') {
    window.showToast(`Voucher ${res.codigo} guardado en tu Billetera Offline`, 'success');
  }
}

function setFechaInicioImportacion(isoYYYYMMDD, horaHHMM = '09:00', force = false) {
  if (!isoYYYYMMDD) return '';
  const fechaInicioInput = document.getElementById('fechaInicio');
  if (!force && fechaInicioInput && fechaInicioInput.value) return fechaInicioInput.value;
  if (window.pluxTripApi && typeof window.pluxTripApi.setTripStartDateISO === 'function') {
    return window.pluxTripApi.setTripStartDateISO(isoYYYYMMDD, horaHHMM || '09:00');
  }
  const mDate = String(isoYYYYMMDD).match(/^(\d{4}-\d{2}-\d{2})/);
  if (!mDate) return '';
  const tClean = /^\d{1,2}:\d{2}$/.test(String(horaHHMM || '').trim())
    ? String(horaHHMM).trim().padStart(5, '0')
    : '09:00';
  const normalized = `${mDate[1]}T${tClean}`;
  if (fechaInicioInput) fechaInicioInput.value = normalized;
  return normalized;
}

function bookingEstaPresenteEnViajeActual(res) {
  if (typeof destinos === 'undefined' || !Array.isArray(destinos) || destinos.length === 0) return false;
  const syncKey = res._syncKey || computeBookingSyncKey(res);
  const realCode = isRealBookingCode(res.codigo) ? res.codigo.trim().toUpperCase() : '';
  return destinos.some(d => {
    if (!d) return false;
    if (d.importSyncKey === syncKey) return true;
    if (Array.isArray(d.tramos) && d.tramos.some(t => t && (t.importSyncKey === syncKey || (realCode && String(t.codigoReserva || '').toUpperCase() === realCode)))) {
      return true;
    }
    if (Array.isArray(d.dias) && d.dias.some(dia => Array.isArray(dia?.eventos) && dia.eventos.some(ev => ev && (ev.importSyncKey === syncKey || (realCode && String(ev.codigoReserva || '').toUpperCase() === realCode))))) {
      return true;
    }
    return false;
  });
}

function finalizarSincronizacionImportacion() {
  if (window.pluxTripApi && typeof window.pluxTripApi.commitImportedTripChanges === 'function') {
    window.pluxTripApi.commitImportedTripChanges();
  } else {
    if (typeof renderDestinos === 'function') renderDestinos();
    if (typeof renderVueltaCostos === 'function') renderVueltaCostos();
    if (typeof autoSave === 'function') autoSave();
  }
}

function solicitarDestinoSincronizacion(reservasArray, onConfirm) {
  const list = Array.isArray(reservasArray) ? reservasArray.filter(Boolean) : [];
  if (list.length === 0) return;

  const hasActiveTrip = (window.pluxTripApi && typeof window.pluxTripApi.hasActiveTripContent === 'function')
    ? window.pluxTripApi.hasActiveTripContent()
    : (typeof destinos !== 'undefined' && Array.isArray(destinos) && destinos.length > 0);

  // Si el lienzo está vacío, sincronizar directamente sin modal
  if (!hasActiveTrip) {
    onConfirm('current');
    return;
  }

  // Si TODAS las reservas ya están en el viaje actual, actualizar idempotentemente in-place sin molestar
  if (list.every(r => bookingEstaPresenteEnViajeActual(r))) {
    onConfirm('current');
    return;
  }

  // Mostrar modal de elección por encima de #modal-descubrir
  const existingModal = document.getElementById('plux-sync-choice-modal');
  if (existingModal) existingModal.remove();

  const tripInfo = (window.pluxTripApi && typeof window.pluxTripApi.getActiveTripInfo === 'function')
    ? window.pluxTripApi.getActiveTripInfo()
    : {
        nombre: document.getElementById('nombreViaje')?.value?.trim() || 'tu viaje actual',
        destinosCount: (typeof destinos !== 'undefined' && Array.isArray(destinos)) ? destinos.length : 0,
        isTemplate: Boolean(window.currentTripEmbajadorSlug || window.currentTripTemplateOrigin)
      };

  const tripName = tripInfo?.nombre || 'Viaje actual';
  const destCount = Number(tripInfo?.destinosCount) || (Array.isArray(destinos) ? destinos.length : 0);
  const firstRes = list[0];
  const labelItem = list.length === 1
    ? `«${firstRes.titulo || firstRes.ciudad || 'esta reserva'}»`
    : `estas ${list.length} reservas`;

  const overlay = document.createElement('div');
  overlay.id = 'plux-sync-choice-modal';
  overlay.className = 'plux-sync-choice-modal';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');

  overlay.innerHTML = `
    <div class="plux-sync-choice-card">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
        <span style="width:36px; height:36px; border-radius:10px; background:rgba(16,185,129,0.16); color:var(--verde); display:inline-flex; align-items:center; justify-content:center; font-size:1rem; flex-shrink:0;">
          <i class="fa-solid fa-compass-drafting"></i>
        </span>
        <div>
          <h4 style="margin:0; font-size:1.05rem; font-weight:800;">¿Dónde querés sincronizar?</h4>
          <span style="font-size:0.75rem; color:var(--gris);">Tu viaje abierto «${escapeHtml(tripName)}» ya tiene ${destCount} ${destCount === 1 ? 'destino' : 'destinos'}</span>
        </div>
      </div>
      <p style="margin:8px 0 16px 0; font-size:0.84rem; line-height:1.48; opacity:0.9;">
        Podés crear un viaje nuevo limpio para ${escapeHtml(labelItem)} (manteniendo «${escapeHtml(tripName)}» intacto en <strong>Mis Viajes</strong>), o sumarla al itinerario que tenés abierto.
      </p>
      <div class="plux-sync-choice-actions">
        <button type="button" class="plux-sync-btn-primary" id="pluxSyncChoiceNewBtn">
          <i class="fa-solid fa-plus"></i> Crear viaje nuevo con esta reserva
        </button>
        <button type="button" class="plux-sync-btn-secondary" id="pluxSyncChoiceCurrentBtn">
          <i class="fa-solid fa-layer-group"></i> Sumar a «${escapeHtml(tripName)}»
        </button>
        <button type="button" class="plux-sync-btn-cancel" id="pluxSyncChoiceCancelBtn">
          Cancelar
        </button>
      </div>
    </div>
  `;

  const cleanup = () => {
    document.removeEventListener('keydown', onEsc);
    overlay.remove();
  };
  const onEsc = (e) => { if (e.key === 'Escape') cleanup(); };
  document.addEventListener('keydown', onEsc);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) cleanup(); });

  document.body.appendChild(overlay);

  const btnNew = document.getElementById('pluxSyncChoiceNewBtn');
  const btnCurrent = document.getElementById('pluxSyncChoiceCurrentBtn');
  const btnCancel = document.getElementById('pluxSyncChoiceCancelBtn');

  if (btnNew) {
    btnNew.onclick = () => {
      cleanup();
      const firstStage = Array.isArray(firstRes.etapas) && firstRes.etapas.length > 0 ? firstRes.etapas[0] : null;
      const newTripOpts = {
        nombre: firstRes.titulo || `Viaje a ${firstRes.ciudad || 'Destino'}`,
        lugarSalida: firstStage?.ciudad || firstRes.origen || firstRes.ciudad || '',
        fechaInicioISO: firstStage?.fechaISO || firstRes.fechaISO || '',
        horaInicio: firstStage?.horaSalida || firstRes.hora || '09:00'
      };
      if (window.pluxTripApi && typeof window.pluxTripApi.startCleanTripForImport === 'function') {
        window.pluxTripApi.startCleanTripForImport(newTripOpts);
      } else {
        if (typeof window.empezarDeCeroSinPrompt === 'function') {
          window.empezarDeCeroSinPrompt();
        } else {
          window.destinos = [];
          if (typeof destinos !== 'undefined' && Array.isArray(destinos)) destinos.length = 0;
        }
        const nInput = document.getElementById('nombreViaje');
        if (nInput && newTripOpts.nombre) nInput.value = newTripOpts.nombre;
        const sInput = document.getElementById('lugarSalida');
        if (sInput && newTripOpts.lugarSalida) sInput.value = newTripOpts.lugarSalida;
        if (newTripOpts.fechaInicioISO) setFechaInicioImportacion(newTripOpts.fechaInicioISO, newTripOpts.horaInicio, true);
      }
      onConfirm('new');
    };
  }

  if (btnCurrent) {
    btnCurrent.onclick = () => {
      cleanup();
      onConfirm('current');
    };
  }

  if (btnCancel) {
    btnCancel.onclick = cleanup;
  }
}

function upsertBookingInTrip(res) {
  if (!res || esVoucherCorruptoOCR(res) || !esReservaDetectadaValida(res)) {
    console.warn('⛔ [upsertBookingInTrip] Reserva corrupta o ruido OCR bloqueado:', res);
    return null;
  }
  if (typeof destinos === 'undefined' || !Array.isArray(destinos)) {
    window.destinos = [];
  }

  const syncKey = computeBookingSyncKey(res);
  res._syncKey = syncKey;
  const realCode = isRealBookingCode(res.codigo) ? res.codigo.trim().toUpperCase() : '';

  const numP = (typeof numPersonas !== 'undefined' && Number(numPersonas) > 0) ? Number(numPersonas) : 1;
  const rawCosto = Number(res.costo) || 0;
  const modoPrecio = res.modoPrecio === 'total' ? 'total' : 'persona';
  const unitCosto = (modoPrecio === 'total' && numP > 1) ? Number((rawCosto / numP).toFixed(2)) : rawCosto;
  const montoPagado = Number(res.montoPagado) || 0;
  const saldoPendiente = Number(res.saldoPendiente) || 0;

  // 1. Caso Crucero / Itinerario Multi-Etapa (modelo simplificado con diasTransitoPrevio + cubreParadas + desembarque colapsado)
  if (Array.isArray(res.etapas) && res.etapas.length > 0) {
    const { stops } = compactStagesWithTransit(res.etapas, { isCruise: res.tipo === 'crucero' });
    if (stops.length === 0) return destinos[0] || null;

    const firstStop = stops[0];
    const lastStop = stops[stops.length - 1];
    const firstValidDate = firstStop.fechaISO || res.fechaISO;
    const firstHora = firstStop.horaSalida || res.hora || '18:00';
    if (firstValidDate) {
      setFechaInicioImportacion(firstValidDate, firstHora, Boolean(res.sincronizarFechaInicio));
    }

    // Completar nombre del viaje si está vacío
    const nombreViajeEl = document.getElementById('nombreViaje');
    if (nombreViajeEl && !nombreViajeEl.value.trim() && res.titulo) {
      nombreViajeEl.value = res.titulo;
    }

    // Completar lugarSalida con el puerto de embarque
    if (firstStop && firstStop.ciudad) {
      const inputSalida = document.getElementById('lugarSalida');
      if (inputSalida) inputSalida.value = firstStop.ciudad;
      if (typeof lugarSalida !== 'undefined') lugarSalida = firstStop.ciudad;
    }

    // En ruta circular (o desembarque final en destinos[last]), dejar vueltaGlobal vacío
    const isCircularReturn = stops.length >= 2 && (
      lastStop.tipoParada === 'desembarque' ||
      normCityKeyImporter(firstStop.ciudad) === normCityKeyImporter(lastStop.ciudad)
    );
    if (isCircularReturn) {
      if (typeof vueltaGlobal !== 'undefined') vueltaGlobal = '';
      if (typeof vueltaPrecioGlobal !== 'undefined') vueltaPrecioGlobal = 0;
      const vueltaEl = document.getElementById('vuelta');
      if (vueltaEl) vueltaEl.value = '';
      const vueltaPrecioEl = document.getElementById('vueltaPrecio');
      if (vueltaPrecioEl) vueltaPrecioEl.value = 0;
    }

    const baseTs = Date.now();
    const cabinInfo = res.cabina || (res.detallesExtra || []).find(d => /cabina/i.test(d.label))?.value || '';
    const shipInfo = res.nave || (res.detallesExtra || []).find(d => /nave|barco/i.test(d.label))?.value || res.proveedor || 'Crucero';
    const currentStageKeys = new Set();
    let firstUpsertedDest = null;

    stops.forEach((st, idx) => {
      const tipoParada = st.tipoParada || (idx === 0 ? 'embarque' : (idx === stops.length - 1 ? 'desembarque' : 'escala'));
      const importStageKey = `${syncKey}#${tipoParada || 'estadia'}#${st.fechaISO || idx}`;
      currentStageKeys.add(importStageKey);

      const diasTransitoPrevio = idx === 0 ? 0 : Math.max(0, Number(st.diasTransitoPrevio) || 0);
      const transitoEtiqueta = diasTransitoPrevio > 0 ? (st.transitoEtiqueta || 'En navegación') : '';
      const notaParada = String(st.notaParada || st.notas || '').trim();
      const horarioWindow = [
        st.horaLlegada ? `Llegada ${st.horaLlegada}` : '',
        st.horaSalida ? `Salida ${st.horaSalida}` : ''
      ].filter(Boolean).join(' · ');

      // Construir eventos ancla etiquetados con importSyncKey
      const anchorEvents = [];
      if (tipoParada === 'embarque' || idx === 0) {
        anchorEvents.push({
          id: baseTs + idx * 10 + 1,
          hora: st.horaSalida || res.hora || '18:00',
          titulo: `Embarque y Zarpe · ${shipInfo}`,
          notas: [realCode ? `Reserva: ${realCode}` : '', cabinInfo ? `Cabina: ${cabinInfo}` : '', notaParada].filter(Boolean).join(' · '),
          costo: 0,
          moneda: res.moneda || 'USD',
          duracion: 120,
          codigoReserva: res.codigo,
          importSyncKey: syncKey
        });
      } else if (tipoParada === 'desembarque') {
        anchorEvents.push({
          id: baseTs + idx * 10 + 1,
          hora: st.horaLlegada || res.horaFin || '08:00',
          titulo: `Desembarque · ${shipInfo}`,
          notas: [realCode ? `Reserva: ${realCode}` : '', notaParada || 'Fin de travesía'].filter(Boolean).join(' · '),
          costo: 0,
          moneda: res.moneda || 'USD',
          duracion: 90,
          codigoReserva: res.codigo,
          importSyncKey: syncKey
        });
      } else {
        if (st.horaLlegada) {
          anchorEvents.push({
            id: baseTs + idx * 10 + 1,
            hora: st.horaLlegada,
            titulo: `Arribo a ${st.ciudad}`,
            notas: [notaParada || 'Escala en puerto', realCode ? `Ref: ${realCode}` : ''].filter(Boolean).join(' · '),
            costo: 0,
            moneda: res.moneda || 'USD',
            duracion: 60,
            codigoReserva: res.codigo,
            importSyncKey: syncKey
          });
        }
        if (st.horaSalida) {
          anchorEvents.push({
            id: baseTs + idx * 10 + 2,
            hora: st.horaSalida,
            titulo: `Zarpe desde ${st.ciudad}`,
            notas: 'Regreso al barco con anticipación',
            costo: 0,
            moneda: res.moneda || 'USD',
            duracion: 45,
            codigoReserva: res.codigo,
            importSyncKey: syncKey
          });
        }
        if (!st.horaLlegada && !st.horaSalida) {
          anchorEvents.push({
            id: baseTs + idx * 10 + 1,
            hora: '09:00',
            titulo: `Escala en ${st.ciudad}`,
            notas: notaParada,
            costo: 0,
            moneda: res.moneda || 'USD',
            duracion: 240,
            codigoReserva: res.codigo,
            importSyncKey: syncKey
          });
        }
      }

      // Tramo maestro SOLO en el destino de embarque (idx === 0)
      const masterTramoPayload = idx === 0 ? {
        id: baseTs + 9,
        medio: `${res.titulo}${realCode ? ' · Ref: ' + realCode : ''}`,
        precio: rawCosto,
        moneda: res.moneda || 'USD',
        modoPrecio,
        montoPagado,
        saldoPendiente,
        pagado: saldoPendiente <= 0 && (rawCosto > 0 ? res.pagado !== false : true),
        pagadoPor: res.pagadoPor || 'Todos',
        alojamiento: cabinInfo ? `Cabina ${cabinInfo} · ${shipInfo}` : `Camarote a bordo · ${shipInfo}`,
        precioAlojamiento: 0,
        monedaAlojamiento: res.moneda || 'USD',
        escalas: stops.map(e => `${e.ciudad}${e.fecha ? ' (' + e.fecha + ')' : ''}`),
        codigoReserva: res.codigo,
        cubreParadas: true,
        importSyncKey: syncKey
      } : null;

      // Match estricto por importStageKey (cero fusión difusa)
      let existingDest = destinos.find(d => d && d.importStageKey === importStageKey);

      if (existingDest) {
        existingDest.nombre = st.ciudad;
        existingDest.tipoParada = tipoParada;
        existingDest.diasTransitoPrevio = diasTransitoPrevio;
        existingDest.transitoEtiqueta = transitoEtiqueta;
        existingDest.horaLlegada = st.horaLlegada || '';
        existingDest.horaSalida = st.horaSalida || '';
        existingDest.notaParada = notaParada;
        existingDest.horarioEscala = horarioWindow;
        existingDest.esNavegacion = false;
        existingDest.importSyncKey = syncKey;
        existingDest.importStageKey = importStageKey;

        if (!Array.isArray(existingDest.dias) || existingDest.dias.length === 0) {
          existingDest.dias = [{ id: 0, eventos: [], costosAdicionales: [] }];
        }
        const prevEvents = Array.isArray(existingDest.dias[0].eventos) ? existingDest.dias[0].eventos : [];
        // Preservar eventos creados manualmente o por IA; reemplazar SOLO eventos con importSyncKey === syncKey
        const preservedEvents = prevEvents.filter(ev =>
          ev &&
          ev.importSyncKey !== syncKey &&
          !(realCode && ev.codigoReserva && String(ev.codigoReserva).toUpperCase() === realCode && !ev.importSyncKey)
        );
        existingDest.dias[0].eventos = [...preservedEvents, ...anchorEvents]
          .sort((a, b) => (a.hora || '99:99').localeCompare(b.hora || '99:99'));

        if (masterTramoPayload) {
          if (!Array.isArray(existingDest.tramos)) existingDest.tramos = [];
          const tIdx = existingDest.tramos.findIndex(t =>
            t && (t.importSyncKey === syncKey || (realCode && String(t.codigoReserva || '').toUpperCase() === realCode))
          );
          if (tIdx >= 0) {
            existingDest.tramos[tIdx] = { ...existingDest.tramos[tIdx], ...masterTramoPayload, id: existingDest.tramos[tIdx].id || masterTramoPayload.id };
          } else {
            existingDest.tramos.unshift(masterTramoPayload);
          }
        }
      } else {
        existingDest = {
          id: baseTs + idx * 100 + Math.floor(Math.random() * 50),
          nombre: st.ciudad,
          tipoParada,
          diasTransitoPrevio,
          transitoEtiqueta,
          horaLlegada: st.horaLlegada || '',
          horaSalida: st.horaSalida || '',
          notaParada,
          horarioEscala: horarioWindow,
          esNavegacion: false,
          importSyncKey: syncKey,
          importStageKey,
          dias: [{ id: 0, eventos: anchorEvents, costosAdicionales: [] }],
          tramos: masterTramoPayload ? [masterTramoPayload] : []
        };
        destinos.push(existingDest);
      }

      if (!firstUpsertedDest) firstUpsertedDest = existingDest;

      if (idx === 0 && typeof openTransportDestIds !== 'undefined' && openTransportDestIds.add) {
        openTransportDestIds.add(existingDest.id);
      }
      if (tipoParada === 'desembarque') {
        if (window.pluxTripApi && typeof window.pluxTripApi.collapseDestino === 'function') {
          window.pluxTripApi.collapseDestino(existingDest.id);
        } else if (typeof collapsedEditorDestinos !== 'undefined' && collapsedEditorDestinos.add) {
          collapsedEditorDestinos.add(existingDest.id);
        }
      }
    });

    // Eliminar etapas obsoletas del MISMO syncKey si el usuario quitó una parada antes de re-sincronizar
    for (let i = destinos.length - 1; i >= 0; i--) {
      const d = destinos[i];
      if (d && d.importSyncKey === syncKey && d.importStageKey && !currentStageKeys.has(d.importStageKey)) {
        destinos.splice(i, 1);
      }
    }

    res.agregadoAlViaje = true;
    return firstUpsertedDest || destinos[0];
  }

  // 2. Reserva simple: sincronizar fechaInicio si está vacía
  if (res.fechaISO) {
    setFechaInicioImportacion(res.fechaISO, res.hora || '09:00', false);
  }

  // 3. Si el usuario indicó Tramo de Regreso a Casa (Vuelta Global)
  if (res.targetDestMode === 'vuelta_casa') {
    const descVuelta = `${res.titulo}${realCode ? ' [PNR: ' + realCode + ']' : ''}${res.fecha ? ' · ' + res.fecha : ''}`;
    if (typeof vueltaGlobal !== 'undefined') vueltaGlobal = descVuelta;
    if (typeof vueltaPrecioGlobal !== 'undefined') vueltaPrecioGlobal = unitCosto;
    const vueltaEl = document.getElementById('vuelta');
    if (vueltaEl) vueltaEl.value = descVuelta;
    const vueltaPrecioEl = document.getElementById('vueltaPrecio');
    if (vueltaPrecioEl) vueltaPrecioEl.value = unitCosto;
    res.agregadoAlViaje = true;
    return { nombre: 'Regreso a Casa' };
  }

  // 4. Buscar o crear el Destino correspondiente (estricto por importSyncKey primero, luego destino explícito/ciudad)
  let targetDest = destinos.find(d => d && (
    d.importSyncKey === syncKey ||
    (Array.isArray(d.tramos) && d.tramos.some(t => t && (t.importSyncKey === syncKey || (realCode && String(t.codigoReserva || '').toUpperCase() === realCode)))) ||
    (Array.isArray(d.dias) && d.dias.some(dia => Array.isArray(dia?.eventos) && dia.eventos.some(ev => ev && ev.importSyncKey === syncKey)))
  ));

  if (!targetDest && res.targetDestMode && res.targetDestMode.startsWith('dest_')) {
    const did = Number(res.targetDestMode.replace('dest_', ''));
    targetDest = destinos.find(d => Number(d.id) === did);
  }
  const cityClean = (res.ciudad || '').trim();
  if (!targetDest && cityClean) {
    const cityKey = normCityKeyImporter(cityClean);
    targetDest = destinos.find(d => d && d.nombre && normCityKeyImporter(d.nombre) === cityKey);
  }
  // Si no se encuentra y ya hay paradas en el viaje, asociar a la parada abierta o primera parada existente
  if (!targetDest && destinos.length > 0 && (res.tipo === 'actividad' || !cityClean || res.targetDestMode === 'auto')) {
    targetDest = destinos[0];
  }
  if (!targetDest) {
    targetDest = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      nombre: cityClean || 'Destino',
      dias: [{ id: 0, eventos: [], costosAdicionales: [] }],
      tramos: []
    };
    destinos.push(targetDest);
  }

  if (!Array.isArray(targetDest.dias) || targetDest.dias.length === 0) {
    targetDest.dias = [{ id: 0, eventos: [], costosAdicionales: [] }];
  }
  if (!Array.isArray(targetDest.tramos)) {
    targetDest.tramos = [];
  }

  // 5. Asegurar cantidad de días suficientes para el día asignado
  const fechaInicioInput = document.getElementById('fechaInicio');
  let diaIdx = Math.max(0, parseInt(res.diaIndex) || 0);
  if (res.fechaISO && fechaInicioInput && fechaInicioInput.value && diaIdx === 0) {
    diaIdx = calcularDiaViajePorFechaISO(res.fechaISO, fechaInicioInput.value);
  }
  while (targetDest.dias.length <= diaIdx) {
    targetDest.dias.push({
      id: targetDest.dias.length,
      eventos: [],
      costosAdicionales: []
    });
  }

  // 6. Completar lugarSalida si está vacío y la reserva tiene origen
  if (res.origen) {
    const inputSalida = document.getElementById('lugarSalida');
    if (inputSalida && !inputSalida.value) {
      inputSalida.value = res.origen.split('(')[0].trim();
      if (typeof lugarSalida !== 'undefined') lugarSalida = inputSalida.value;
    }
  }

  // Helper interno para upsert idempotente de eventos en un día
  const upsertEventInDay = (dayObj, eventData, subKey = '') => {
    if (!Array.isArray(dayObj.eventos)) dayObj.eventos = [];
    const evKey = subKey ? `${syncKey}#${subKey}` : syncKey;
    const matchIdx = dayObj.eventos.findIndex(e =>
      e && (
        (e.importStageKey && e.importStageKey === evKey) ||
        (!subKey && e.importSyncKey === syncKey) ||
        (realCode && e.codigoReserva && String(e.codigoReserva).toUpperCase() === realCode && e.titulo === eventData.titulo)
      )
    );
    const payload = {
      ...eventData,
      importSyncKey: syncKey,
      importStageKey: evKey,
      codigoReserva: res.codigo
    };
    if (matchIdx >= 0) {
      dayObj.eventos[matchIdx] = { ...dayObj.eventos[matchIdx], ...payload, id: dayObj.eventos[matchIdx].id };
    } else {
      dayObj.eventos.push({ id: Date.now() + Math.floor(Math.random() * 999), ...payload });
    }
    dayObj.eventos.sort((a, b) => (a.hora || '99:99').localeCompare(b.hora || '99:99'));
  };

  // 7. Sincronizar según tipo sin duplicar nunca
  if (res.tipo === 'vuelo' || res.tipo === 'tren') {
    const medioTexto = `${res.titulo}${realCode ? ' · PNR: ' + realCode : ''}`;
    let existingTramo = targetDest.tramos.find(t =>
      t && (
        t.importSyncKey === syncKey ||
        (realCode && String(t.codigoReserva || '').toUpperCase() === realCode)
      )
    );
    if (!existingTramo) {
      existingTramo = targetDest.tramos.find(t => t && !t.medio && !t.precio && !t.importSyncKey);
    }
    const tramoFields = {
      medio: medioTexto,
      precio: rawCosto,
      moneda: res.moneda || 'USD',
      modoPrecio,
      montoPagado,
      saldoPendiente,
      pagado: saldoPendiente <= 0 && res.pagado !== false,
      pagadoPor: res.pagadoPor || 'Todos',
      codigoReserva: res.codigo,
      importSyncKey: syncKey
    };
    if (!existingTramo) {
      targetDest.tramos.push({
        id: Date.now() + Math.floor(Math.random() * 500),
        alojamiento: '',
        precioAlojamiento: 0,
        monedaAlojamiento: res.moneda || 'USD',
        escalas: Array.isArray(res.escalas) ? [...res.escalas] : [],
        ...tramoFields
      });
    } else {
      Object.assign(existingTramo, tramoFields);
      if (Array.isArray(res.escalas) && res.escalas.length > 0) {
        existingTramo.escalas = [...res.escalas];
      }
    }
    if (typeof openTransportDestIds !== 'undefined' && openTransportDestIds.add) {
      openTransportDestIds.add(targetDest.id);
    }

    const notaCompleta = [
      realCode ? `PNR: ${realCode}` : '',
      res.proveedor ? `Operador: ${res.proveedor}` : '',
      res.horaFin ? `Llegada: ${res.horaFin}` : '',
      res.notas || ''
    ].filter(Boolean).join(' · ');

    upsertEventInDay(targetDest.dias[diaIdx], {
      hora: res.hora || '10:00',
      titulo: res.titulo,
      notas: notaCompleta,
      costo: 0,
      moneda: res.moneda || 'USD',
      duracion: Number(res.duracion) || 180
    }, 'main');

  } else if (res.tipo === 'hotel') {
    const cleanHotelName = res.titulo.replace(/^Check-in:\s*/i, '').trim();
    const alojTexto = `${cleanHotelName} (${res.noches || 1} ${(res.noches || 1) === 1 ? 'noche' : 'noches'}${realCode ? ' · Ref: ' + realCode : ''}${res.pin ? ' · PIN: ' + res.pin : ''})`;

    let targetTramo = targetDest.tramos.find(t =>
      t && (t.importSyncKey === syncKey || (realCode && t.alojamiento && t.alojamiento.includes(realCode)))
    ) || targetDest.tramos.find(t => t && !t.alojamiento) || targetDest.tramos[0];

    const hotelFields = {
      alojamiento: alojTexto,
      precioAlojamiento: rawCosto,
      monedaAlojamiento: res.moneda || 'USD',
      modoPrecio,
      montoPagado,
      saldoPendiente,
      alojamientoPagado: saldoPendiente <= 0 && res.pagado !== false,
      alojamientoPagadoPor: res.pagadoPor || 'Todos',
      importSyncKey: syncKey
    };

    if (!targetTramo) {
      targetDest.tramos.push({
        id: Date.now() + Math.floor(Math.random() * 500),
        medio: '',
        precio: 0,
        moneda: res.moneda || 'USD',
        escalas: [],
        ...hotelFields
      });
    } else {
      Object.assign(targetTramo, hotelFields);
    }
    if (typeof openTransportDestIds !== 'undefined' && openTransportDestIds.add) {
      openTransportDestIds.add(targetDest.id);
    }

    const notaCheckin = [
      realCode ? `Confirmación: ${realCode}` : '',
      res.pin ? `PIN: ${res.pin}` : '',
      res.notas || ''
    ].filter(Boolean).join(' · ');

    upsertEventInDay(targetDest.dias[diaIdx], {
      hora: res.hora || '15:00',
      titulo: `Check-in: ${cleanHotelName}`,
      notas: notaCheckin,
      costo: 0,
      moneda: res.moneda || 'USD',
      duracion: 45
    }, 'checkin');

    if (res.expandirNoches && Number(res.noches) >= 1) {
      const checkoutDiaIdx = Math.min(30, diaIdx + Number(res.noches));
      while (targetDest.dias.length <= checkoutDiaIdx) {
        targetDest.dias.push({
          id: targetDest.dias.length,
          eventos: [],
          costosAdicionales: []
        });
      }
      upsertEventInDay(targetDest.dias[checkoutDiaIdx], {
        hora: res.horaFin || '11:00',
        titulo: `Check-out: ${cleanHotelName}`,
        notas: `Fin de estadía (${res.noches} noches)${realCode ? ' · Ref: ' + realCode : ''}`,
        costo: 0,
        moneda: res.moneda || 'USD',
        duracion: 30
      }, 'checkout');
    }

  } else {
    const notaAct = [
      realCode ? `Voucher: ${realCode}` : '',
      res.proveedor ? `Proveedor: ${res.proveedor}` : '',
      res.notas || ''
    ].filter(Boolean).join(' · ');

    upsertEventInDay(targetDest.dias[diaIdx], {
      hora: res.hora || '10:00',
      titulo: res.titulo,
      notas: notaAct,
      costo: unitCosto,
      moneda: res.moneda || 'USD',
      pagado: saldoPendiente <= 0 && res.pagado !== false,
      pagadoPor: res.pagadoPor || 'Todos',
      duracion: Number(res.duracion) || 120
    }, 'activity');
  }

  res.agregadoAlViaje = true;
  return targetDest;
}

// Alias retrocompatible hacia el nuevo upsert estricto
function insertarObjetoReservaEnViaje(res) {
  return upsertBookingInTrip(res);
}

function importarReservaAlViaje(idx) {
  const res = pluxDetectedReservas[idx];
  if (!res) return;

  solicitarDestinoSincronizacion([res], () => {
    const targetDest = upsertBookingInTrip(res);
    res.agregadoAlViaje = true;
    res.tripId = window.pluxTripApi?.getActiveTripInfo?.()?.tripId || null;
    guardarReservaEnWallet(res);
    subirAdjuntosVoucherCloudinary(res);

    finalizarSincronizacionImportacion();
    renderizarTarjetasReservasDetectadas();
    renderDescubrirParaTi();

    if (typeof window.showToast === 'function' && targetDest) {
      const stagesCount = Array.isArray(res.etapas) ? res.etapas.length : 0;
      const msg = stagesCount > 0
        ? `"${res.titulo}" sincronizado (${stagesCount} paradas)`
        : `"${res.titulo}" sincronizado en ${targetDest.nombre} (Día ${(Number(res.diaIndex) || 0) + 1})`;
      window.showToast(msg, 'success');
    }
  });
}

function importarTodasLasReservas() {
  if (!pluxDetectedReservas || pluxDetectedReservas.length === 0) return;

  solicitarDestinoSincronizacion(pluxDetectedReservas, () => {
    const activeTripId = window.pluxTripApi?.getActiveTripInfo?.()?.tripId || null;
    pluxDetectedReservas.forEach(res => {
      upsertBookingInTrip(res);
      res.agregadoAlViaje = true;
      res.tripId = activeTripId;
      guardarReservaEnWallet(res);
      subirAdjuntosVoucherCloudinary(res);
    });

    finalizarSincronizacionImportacion();
    renderizarTarjetasReservasDetectadas();
    renderDescubrirParaTi();

    if (typeof window.showToast === 'function') {
      window.showToast(`${pluxDetectedReservas.length} reservas sincronizadas en Transporte, Alojamiento e Itinerario`, 'success');
    }
  });
}

function sincronizarTodaLaWalletAlViaje() {
  const wallet = obtenerWalletReservas();
  if (wallet.length === 0) return;

  solicitarDestinoSincronizacion(wallet, () => {
    const activeTripId = window.pluxTripApi?.getActiveTripInfo?.()?.tripId || null;
    wallet.forEach(w => {
      upsertBookingInTrip(w);
      w.agregadoAlViaje = true;
      w.tripId = activeTripId;
      if (window.pluxTripApi?.upsertTripVoucher) window.pluxTripApi.upsertTripVoucher(w);
    });
    guardarWalletReservasStorage(wallet);
    finalizarSincronizacionImportacion();
    renderizarWalletReservas();
    if (typeof window.showToast === 'function') {
      window.showToast(`${wallet.length} vouchers de tu billetera sincronizados sin duplicados`, 'success');
    }
  });
}

function irAlItinerarioDesdeReservas() {
  cerrarDescubrir();
  if (typeof empezar === 'function') {
    empezar();
  }
}

function cambiarScopeWalletReservas(scope) {
  pluxWalletScope = scope === 'all' ? 'all' : 'trip';
  pluxWalletScopeUserPicked = true;
  renderizarWalletReservas();
}

function filtrarWalletReservas(cat, btnEl) {
  pluxWalletFilter = cat || 'todas';
  const parent = document.getElementById('walletCategoryChips');
  if (parent) {
    parent.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
  }
  if (btnEl) btnEl.classList.add('active');
  renderizarWalletReservas();
}

function buscarEnWalletReservas(val) {
  pluxWalletSearch = val || '';
  renderizarWalletReservas();
}

function obtenerVouchersUnificadosWallet() {
  purgarVouchersCorruptosDelViajeActivo();
  const activeTrip = obtenerInfoViajeActivoImportador();
  const activeTripId = activeTrip.tripId;
  const walletLocal = obtenerWalletReservas();
  const tripVouchers = (window.pluxTripApi?.getTripVouchers ? window.pluxTripApi.getTripVouchers() : [])
    .filter(v => !esVoucherCorruptoOCR(v));

  const mergedMap = new Map();
  tripVouchers.forEach(v => {
    const k = v._syncKey || v.id || (v.codigo + '|' + v.titulo);
    mergedMap.set(k, { ...v, _attachedToTrip: true, _belongsToActiveTrip: true });
  });
  walletLocal.forEach(w => {
    const k = w._syncKey || w.id || (w.codigo + '|' + w.titulo);
    const matchesActiveTrip = Boolean(activeTripId && w.tripId && String(w.tripId) === String(activeTripId));
    if (!mergedMap.has(k)) {
      mergedMap.set(k, { ...w, _attachedToTrip: matchesActiveTrip, _belongsToActiveTrip: matchesActiveTrip });
    }
  });
  const allVouchers = Array.from(mergedMap.values());
  const tripScopedVouchers = allVouchers.filter(v => v._belongsToActiveTrip);
  return { activeTrip, allVouchers, tripScopedVouchers };
}

function renderizarWalletReservas() {
  const cont = document.getElementById('walletReservasContainer');
  const badge = document.getElementById('walletCountBadge');
  if (!cont) return;

  const { activeTrip, allVouchers, tripScopedVouchers } = obtenerVouchersUnificadosWallet();

  // Por defecto: 'trip' si hay viaje activo (o si se abrió vía abrirVouchersDelViaje); 'all' solo si no hay viaje activo y el usuario no eligió manualmente
  if (!pluxWalletScopeUserPicked) {
    pluxWalletScope = (activeTrip.hasTrip || tripScopedVouchers.length > 0) ? 'trip' : 'all';
  }

  const tripCountEl = document.getElementById('walletTripCount');
  const allCountEl = document.getElementById('walletAllCount');
  const tabCountEl = document.getElementById('walletTabCountBadge');
  const btnTrip = document.getElementById('walletScopeBtnTrip');
  const btnAll = document.getElementById('walletScopeBtnAll');
  const chipTodas = document.getElementById('walletChipTodas');

  if (tripCountEl) tripCountEl.textContent = String(tripScopedVouchers.length);
  if (allCountEl) allCountEl.textContent = String(allVouchers.length);
  if (tabCountEl) tabCountEl.textContent = String(allVouchers.length);
  if (btnTrip) btnTrip.classList.toggle('active', pluxWalletScope === 'trip');
  if (btnAll) btnAll.classList.toggle('active', pluxWalletScope === 'all');

  const scopedWallet = pluxWalletScope === 'trip' ? tripScopedVouchers : allVouchers;
  if (badge) badge.textContent = String(scopedWallet.length);
  if (chipTodas) chipTodas.textContent = `Todas (${scopedWallet.length})`;

  // Ordenar cronológicamente por fechaISO y hora
  const sorted = [...scopedWallet].sort((a, b) => {
    const fA = a.fechaISO || '9999-99-99';
    const fB = b.fechaISO || '9999-99-99';
    if (fA !== fB) return fA.localeCompare(fB);
    return (a.hora || '99:99').localeCompare(b.hora || '99:99');
  });

  const q = pluxWalletSearch.trim().toLowerCase();
  const filtered = sorted.filter(w => {
    if (pluxWalletFilter !== 'todas' && w.tipo !== pluxWalletFilter) return false;
    if (!q) return true;
    return (w.titulo || '').toLowerCase().includes(q) ||
           (w.codigo || '').toLowerCase().includes(q) ||
           (w.ciudad || '').toLowerCase().includes(q) ||
           (w.notas || '').toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    const canShowAllHint = pluxWalletScope === 'trip' && allVouchers.length > 0;
    cont.innerHTML = `
      <div style="grid-column:1 / -1; background:rgba(255,255,255,0.02); border:1px dashed rgba(255,255,255,0.1); border-radius:14px; padding:24px; text-align:center; color:var(--gris); font-size:0.85rem;">
        ${canShowAllHint
          ? `Este viaje todavía no tiene vouchers sincronizados. Tienes <strong>${allVouchers.length}</strong> ${allVouchers.length === 1 ? 'voucher guardado' : 'vouchers guardados'} en otros viajes. <button type="button" class="btn-card-secondary" style="margin-left:8px; padding:5px 10px; font-size:0.76rem;" onclick="window.cambiarScopeWalletReservas('all')">Ver todos los viajes (${allVouchers.length})</button>`
          : 'No hay vouchers en esta vista. Cuando importes un vuelo, hotel, tren o entrada quedará guardado aquí con su código PNR y vista de pase offline.'}
      </div>
    `;
    return;
  }

  const iconMap = {
    crucero: 'fa-ship',
    vuelo: 'fa-plane',
    hotel: 'fa-hotel',
    tren: 'fa-train',
    actividad: 'fa-ticket',
    auto: 'fa-car-side'
  };

  cont.innerHTML = filtered.map(w => `
    <div class="wallet-item-card">
      <div>
        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:8px;">
          <span style="font-size:0.74rem; font-weight:800; color:#38bdf8; text-transform:uppercase;">
            <i class="fa-solid ${iconMap[w.tipo] || 'fa-ticket'}"></i> ${escapeHtml(w.ciudad || 'Viaje')} · ${escapeHtml(w.proveedor || w.tipo)}
          </span>
          <button type="button" onclick="window.copiarCodigoPNR('${escapeHtml(w.codigo || '')}')" style="background:rgba(16,185,129,0.14); border:1px solid rgba(16,185,129,0.35); color:var(--verde); border-radius:6px; padding:2px 8px; font-family:monospace; font-weight:800; font-size:0.78rem; cursor:pointer;" title="Copiar código PNR">
            <i class="fa-regular fa-copy"></i> ${escapeHtml(w.codigo || 'CONF')}
          </button>
        </div>
        <h5 style="margin:0 0 6px 0; font-size:0.96rem; color:#ffffff; font-weight:800;">${escapeHtml(w.titulo)}</h5>
        <div style="font-size:0.8rem; color:var(--gris); display:flex; flex-wrap:wrap; gap:10px; margin-bottom:6px;">
          ${w.fecha ? `<span><i class="fa-regular fa-calendar"></i> ${escapeHtml(w.fecha)}</span>` : ''}
          ${w.hora ? `<span><i class="fa-regular fa-clock"></i> ${escapeHtml(w.hora)}${w.horaFin ? ' - ' + escapeHtml(w.horaFin) : ''}</span>` : ''}
          ${w.costo ? `<span style="color:var(--verde); font-weight:700;">$${w.costo} ${escapeHtml(w.moneda || 'USD')}</span>` : ''}
          ${w.pin ? `<span style="color:#fbbf24; font-weight:700;">PIN: ${escapeHtml(w.pin)}</span>` : ''}
          ${w._attachedToTrip ? `<span style="color:#34d399; font-weight:700;"><i class="fa-solid fa-paperclip"></i> Adjunto al viaje</span>` : ''}
          ${Array.isArray(w.cloudinaryUrls) && w.cloudinaryUrls.length > 0 ? `<a href="${escapeHtml(w.cloudinaryUrls[0].url)}" target="_blank" rel="noopener" style="color:#38bdf8; font-weight:700; text-decoration:none;"><i class="fa-solid fa-cloud"></i> Nube (${w.cloudinaryUrls.length})</a>` : ''}
        </div>
        <p style="margin:0; font-size:0.78rem; color:rgba(255,255,255,0.68); line-height:1.4;">${escapeHtml(w.notas || '')}</p>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; padding-top:8px; border-top:1px solid rgba(255,255,255,0.06);">
        <div style="display:flex; gap:6px;">
          <button type="button" class="btn-card-primary" style="padding:5px 10px; font-size:0.75rem;" onclick="window.verVoucherCompletoModal('${escapeHtml(w.id)}')">
            <i class="fa-solid fa-qrcode"></i> Ver Pase
          </button>
          <button type="button" class="btn-card-secondary" style="padding:5px 10px; font-size:0.75rem;" onclick="window.reinsertarReservaWallet('${escapeHtml(w.id)}')" title="Sincronizar con el viaje actual">
            <i class="fa-solid fa-calendar-plus"></i> Al viaje
          </button>
        </div>
        <button type="button" onclick="window.eliminarReservaWallet('${escapeHtml(w.id)}')" style="background:transparent; border:none; color:var(--gris); cursor:pointer; font-size:0.82rem;" title="Eliminar de la billetera">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function verVoucherCompletoModal(id) {
  const { allVouchers } = obtenerVouchersUnificadosWallet();
  const w = allVouchers.find(item => String(item.id) === String(id));
  if (!w) return;

  const existing = document.getElementById('modal-plux-voucher-pass');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'modal-plux-voucher-pass';
  modal.style.cssText = 'position:fixed; inset:0; background:rgba(2,6,23,0.88); backdrop-filter:blur(8px); z-index:999999; display:flex; align-items:center; justify-content:center; padding:16px;';
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

  modal.innerHTML = `
    <div style="background:linear-gradient(145deg, #0f172a, #090d16); border:1px solid rgba(56,189,248,0.35); border-radius:22px; max-width:480px; width:100%; overflow:hidden; box-shadow:0 25px 70px rgba(0,0,0,0.85); color:#fff;">
      <div style="background:linear-gradient(135deg, rgba(16,185,129,0.22), rgba(56,189,248,0.22)); padding:18px 22px; border-bottom:2px dashed rgba(255,255,255,0.15); display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span style="font-size:0.72rem; font-weight:800; text-transform:uppercase; color:var(--verde); letter-spacing:1px;">PLUX BOARDING PASS / VOUCHER</span>
          <h3 style="margin:4px 0 0 0; font-size:1.15rem; font-weight:800;">${escapeHtml(w.titulo)}</h3>
        </div>
        <button type="button" onclick="document.getElementById('modal-plux-voucher-pass').remove()" style="background:rgba(255,255,255,0.08); border:none; color:#fff; width:34px; height:34px; border-radius:50%; cursor:pointer; font-size:1.1rem;">&times;</button>
      </div>

      <div style="padding:20px 22px; display:flex; flex-direction:column; gap:14px; max-height:75vh; overflow-y:auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.04); padding:14px 16px; border-radius:14px; border:1px solid rgba(255,255,255,0.08);">
          <div>
            <div style="font-size:0.7rem; color:var(--gris); text-transform:uppercase; font-weight:700;">LOCALIZADOR / PNR</div>
            <div style="font-size:1.55rem; font-family:monospace; font-weight:900; color:var(--verde); letter-spacing:2px;">${escapeHtml(w.codigo || 'CONF-OK')}</div>
          </div>
          ${w.pin ? `
            <div style="text-align:right;">
              <div style="font-size:0.7rem; color:var(--gris); text-transform:uppercase; font-weight:700;">PIN SEGURIDAD</div>
              <div style="font-size:1.3rem; font-family:monospace; font-weight:800; color:#fbbf24;">${escapeHtml(w.pin)}</div>
            </div>
          ` : `
            <button type="button" class="btn-card-secondary" onclick="window.copiarCodigoPNR('${escapeHtml(w.codigo || '')}')" style="padding:8px 12px; font-size:0.78rem;">
              <i class="fa-regular fa-copy"></i> Copiar PNR
            </button>
          `}
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:0.85rem;">
          <div style="background:rgba(255,255,255,0.03); padding:10px 12px; border-radius:10px;">
            <div style="font-size:0.7rem; color:var(--gris); text-transform:uppercase;">DESTINO / CIUDAD</div>
            <strong style="color:#fff;">${escapeHtml(w.ciudad || '-')}</strong>
          </div>
          <div style="background:rgba(255,255,255,0.03); padding:10px 12px; border-radius:10px;">
            <div style="font-size:0.7rem; color:var(--gris); text-transform:uppercase;">FECHA Y HORA</div>
            <strong style="color:#fff;">${escapeHtml(w.fecha || 'Sin fecha')} · ${escapeHtml(w.hora || '')}</strong>
          </div>
          <div style="background:rgba(255,255,255,0.03); padding:10px 12px; border-radius:10px;">
            <div style="font-size:0.7rem; color:var(--gris); text-transform:uppercase;">PROVEEDOR</div>
            <strong style="color:#38bdf8;">${escapeHtml(w.proveedor || w.tipo)}</strong>
          </div>
          <div style="background:rgba(255,255,255,0.03); padding:10px 12px; border-radius:10px;">
            <div style="font-size:0.7rem; color:var(--gris); text-transform:uppercase;">IMPORTE</div>
            <strong style="color:var(--verde);">$${w.costo || 0} ${escapeHtml(w.moneda || 'USD')} (${w.pagado !== false ? 'Pagado' : 'Pendiente'})</strong>
          </div>
        </div>

        <div style="background:rgba(255,255,255,0.03); padding:12px; border-radius:10px; font-size:0.84rem; line-height:1.5; color:#e2e8f0;">
          <div style="font-size:0.7rem; color:var(--gris); text-transform:uppercase; margin-bottom:4px; font-weight:700;">DETALLES / DIRECCIÓN / ASIENTO</div>
          ${escapeHtml(w.notas || 'Sin notas adicionales')}
        </div>

        ${w.imagePreview ? `
          <div>
            <div style="font-size:0.7rem; color:var(--gris); text-transform:uppercase; margin-bottom:6px; font-weight:700;">COMPROBANTE VISUAL ADJUNTO</div>
            <img src="${w.imagePreview}" style="width:100%; border-radius:12px; border:1px solid rgba(255,255,255,0.15);">
          </div>
        ` : ''}

        ${w.rawEmail ? `
          <details style="background:rgba(0,0,0,0.25); padding:10px 12px; border-radius:10px; border:1px solid rgba(255,255,255,0.07);">
            <summary style="cursor:pointer; font-size:0.78rem; font-weight:700; color:var(--gris);">Ver texto original del correo / voucher</summary>
            <pre style="white-space:pre-wrap; font-size:0.75rem; color:#cbd5e1; margin:8px 0 0 0; font-family:monospace; line-height:1.4;">${escapeHtml(w.rawEmail)}</pre>
          </details>
        ` : ''}

        <!-- Código de barras visual de check-in -->
        <div style="background:#ffffff; color:#0f172a; padding:12px; border-radius:12px; text-align:center;">
          <div style="height:34px; background:repeating-linear-gradient(90deg, #0f172a 0px, #0f172a 3px, transparent 3px, transparent 6px, #0f172a 6px, #0f172a 7px, transparent 7px, transparent 11px); margin-bottom:6px;"></div>
          <div style="font-family:monospace; font-size:0.78rem; font-weight:800; letter-spacing:4px;">${escapeHtml(w.codigo || 'PLUX-PASS')}</div>
        </div>

        <button type="button" class="btn-card-primary" style="width:100%; padding:10px; justify-content:center;" onclick="window.copiarResumenVoucher('${escapeHtml(w.id)}')">
          <i class="fa-solid fa-share-nodes"></i> Copiar resumen para enviar al grupo
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function copiarResumenVoucher(id) {
  const { allVouchers } = obtenerVouchersUnificadosWallet();
  const w = allVouchers.find(item => String(item.id) === String(id));
  if (!w) return;
  const lines = [
    `📌 *${w.titulo}* (${w.ciudad || 'Viaje'})`,
    `🔖 Código / PNR: *${w.codigo || 'CONF'}*${w.pin ? ` | PIN: *${w.pin}*` : ''}`,
    w.fecha ? `📅 Fecha: ${w.fecha}${w.hora ? ' · ' + w.hora : ''}` : '',
    w.notas ? `📝 ${w.notas}` : ''
  ].filter(Boolean).join('\n');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(lines);
  }
  if (typeof window.showToast === 'function') {
    window.showToast('Resumen de reserva copiado para compartir', 'success');
  }
}

function copiarCodigoPNR(codigo) {
  if (!codigo) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(codigo);
  }
  if (typeof window.showToast === 'function') {
    window.showToast(`Código ${codigo} copiado al portapapeles`, 'success');
  }
}

function reinsertarReservaWallet(id) {
  const wallet = obtenerWalletReservas();
  const tripVouchers = window.pluxTripApi?.getTripVouchers ? window.pluxTripApi.getTripVouchers() : [];
  const item = wallet.find(w => String(w.id) === String(id)) || tripVouchers.find(w => String(w.id) === String(id));
  if (!item) return;
  solicitarDestinoSincronizacion([item], () => {
    const dest = upsertBookingInTrip(item);
    item.agregadoAlViaje = true;
    item.tripId = window.pluxTripApi?.getActiveTripInfo?.()?.tripId || null;
    guardarReservaEnWallet(item);
    finalizarSincronizacionImportacion();
    if (typeof window.showToast === 'function' && dest) {
      window.showToast(`"${item.titulo}" sincronizado en ${dest.nombre}`, 'success');
    }
  });
}

function eliminarReservaWallet(id) {
  let wallet = obtenerWalletReservas();
  wallet = wallet.filter(w => String(w.id) !== String(id));
  guardarWalletReservasStorage(wallet);
  if (window.pluxTripApi?.removeTripVoucher) {
    window.pluxTripApi.removeTripVoucher(id);
  }
  renderizarWalletReservas();
}


// ==========================================================================
// PESTAÑA 6: COMUNIDAD, RED SOCIAL DE VIAJEROS, FOROS & PLANTILLAS SINCRONIZADAS
// ==========================================================================

const PLUX_FORO_STORAGE_KEY = 'Plux_Foro_Hilos_V2';
const PLUX_FORO_VOTES_KEY = 'Plux_Foro_Votes_V2';
let pluxComunidadSubtab = 'foro'; // 'foro' | 'hacks' | 'itinerarios'
let pluxForoFeedScope = 'todos'; // 'todos' | 'amigos' | 'mios'
let pluxForoCategoriaActiva = 'todas';
let pluxForoBusqueda = '';
let pluxForoOrden = 'recientes';
let pluxPlantillasSubFilter = 'todas'; // 'todas' | 'oficiales' | 'comunidad' | 'mias'
let pluxPlantillasBusqueda = '';
let pluxOpenThreads = new Set(['hilo_1']);
let pluxForoUnsubscribe = null;
let pluxFirestoreForumThreads = [];

const PLUX_STYLE_LABELS = {
  mochilero: { label: 'Mochilero y Aventura', icon: 'fa-person-hiking', color: '#34d399' },
  relax: { label: 'Relax y Playa', icon: 'fa-umbrella-beach', color: '#38bdf8' },
  cultural: { label: 'Cultural y Museos', icon: 'fa-landmark', color: '#c084fc' },
  gastronomico: { label: 'Gastronómico', icon: 'fa-utensils', color: '#fbbf24' },
  urbano: { label: 'Urbano y Noche', icon: 'fa-city', color: '#f472b6' },
  lujo: { label: 'Lujo y Confort', icon: 'fa-gem', color: '#facc15' }
};

const PLUX_INITIAL_FORUM_THREADS = [
  {
    id: 'hilo_1',
    categoria: 'Consejos y Tips',
    destino: 'Roma',
    titulo: 'Guía real para reservar Coliseo y Vaticano sin caer en revendedores',
    autor: 'mateo_viajes',
    autorNombre: 'Mateo Rossi',
    autorCiudad: 'Buenos Aires',
    autorEstilo: 'cultural',
    autorNivel: 'Explorador Nivel 4 · 6 viajes',
    autorPhoto: '',
    fecha: 'Hace 2 horas',
    timestamp: 1794350000000,
    votos: 42,
    cuerpo: 'Acabo de volver de 5 días en Roma armados con Plux. Para el Coliseo (acceso Arena), saquen la entrada exactamente 30 días antes a las 08:45 AM (hora de Italia) en la web oficial del Parco Archeologico. Cuesta €18-€24 frente a los €75 que cobran las agencias externas. Para Museos Vaticanos, el turno de las 08:00 AM te permite llegar a la Capilla Sixtina casi vacía.',
    itinerarioAdjunto: 'Roma Imperial & Vaticano (3 Días · 9 actividades)',
    plantillaIdAdjunta: 'oficial_roma',
    plantillaOriginAdjunta: 'oficial',
    respuestas: [
      { autor: 'sofia_globetrotter', autorEstilo: 'gastronomico', fecha: 'Hace 1 hora', texto: 'Totalmente de acuerdo. Sumo un dato clave: en el transporte público de Roma (bus y metro) ya no hace falta comprar billetes de papel, apoyás directo la tarjeta contactless o el celular con el sistema Tap & Go (€1.50 por 100 minutos).' },
      { autor: 'carla_nomad', autorEstilo: 'mochilero', fecha: 'Hace 35 min', texto: 'Buenísimo el dato del turno de las 08:00 AM en el Vaticano, acabo de clonar tu plantilla en mi cuenta.' }
    ]
  },
  {
    id: 'hilo_2',
    categoria: 'Presupuesto',
    destino: 'Tokio',
    titulo: '¿Vale la pena el JR Pass en Japón hoy o conviene comprar Shinkansen sueltos?',
    autor: 'carla_nomad',
    autorNombre: 'Carla Méndez',
    autorCiudad: 'Madrid',
    autorEstilo: 'mochilero',
    autorNivel: 'Nómada Nivel 5 · 9 viajes',
    autorPhoto: '',
    fecha: 'Hace 5 horas',
    timestamp: 1794340000000,
    votos: 38,
    cuerpo: 'Desde el aumento de precio del Japan Rail Pass nacional, hicimos las cuentas en el presupuesto multidivisa de Plux para la ruta clásica Tokio - Kioto - Osaka - Tokio (12 días). Comprando los tickets de Shinkansen Nozomi individuales en SmartEX gastamos casi un 32% menos que pagando el JR Pass de 7 días.',
    itinerarioAdjunto: 'Tokio Tradicional & Futurista (3 Días · 9 actividades)',
    plantillaIdAdjunta: 'oficial_tokio',
    plantillaOriginAdjunta: 'oficial',
    respuestas: [
      { autor: 'mateo_viajes', autorEstilo: 'cultural', fecha: 'Hace 3 horas', texto: 'Exacto, para la ruta dorada (Tokio-Kioto-Osaka) hoy conviene tickets sueltos + tarjeta Suica en Apple Wallet. El pase regional que sí sigue rindiendo muchísimo es el JR Kansai-Hiroshima Area Pass.' }
    ]
  },
  {
    id: 'hilo_3',
    categoria: 'Rutas e Itinerarios',
    destino: 'Mendoza',
    titulo: 'Nuestra ruta de bodegas en Luján de Cuyo y Valle de Uco + Alta Montaña',
    autor: 'sofia_globetrotter',
    autorNombre: 'Sofía Alvear',
    autorCiudad: 'Córdoba',
    autorEstilo: 'gastronomico',
    autorNivel: 'Viajera Pro Nivel 4 · 5 viajes',
    autorPhoto: '',
    fecha: 'Ayer',
    timestamp: 1794290000000,
    votos: 31,
    cuerpo: 'Les dejo adjunta nuestra ruta por Mendoza para quienes vayan este mes. Reservamos Catena Zapata y almuerzo de pasos con 3 semanas de anticipación. Si importan los mails de reserva en la pestaña Importar Reservas ya les queda todo con horario y costos divididos.',
    itinerarioAdjunto: 'Ruta del Vino y Montañas en Mendoza (Comunidad)',
    plantillaIdAdjunta: 'com_mendoza',
    plantillaOriginAdjunta: 'comunidad',
    respuestas: [
      { autor: 'lucas_viajero', autorEstilo: 'relax', fecha: 'Ayer', texto: '¡Ya me cloné la plantilla! ¿Recomiendan alquilar auto o contratar remis entre bodegas?' }
    ]
  },
  {
    id: 'hilo_4',
    categoria: 'Compañeros de Viaje',
    destino: 'Barcelona',
    titulo: 'Viaje grupal por España e Italia en noviembre: buscando tips y compartiendo gastos',
    autor: 'lucas_viajero',
    autorNombre: 'Lucas Gómez',
    autorCiudad: 'Montevideo',
    autorEstilo: 'urbano',
    autorNivel: 'Explorador Nivel 3 · 3 viajes',
    autorPhoto: '',
    fecha: 'Hace 2 días',
    timestamp: 1794200000000,
    votos: 24,
    cuerpo: 'Somos 4 amigos armando Barcelona -> París -> Roma. Estamos usando el enlace colaborativo de Plux y cargando cada reserva en su moneda original (EUR y USD). Dejo nuestra base de Barcelona por si alguien coincide en fechas.',
    itinerarioAdjunto: 'Barcelona Modernista & Mediterráneo (3 Días)',
    plantillaIdAdjunta: 'oficial_barcelona',
    plantillaOriginAdjunta: 'oficial',
    respuestas: [
      { autor: 'sofia_globetrotter', autorEstilo: 'gastronomico', fecha: 'Hace 1 día', texto: 'Para ir de Barcelona a París miren también el tren TGV Inoui directo desde Barcelona Sants hasta Paris Gare de Lyon, te ahorrás las 2 horas previas de aeropuerto.' }
    ]
  }
];

const PLUX_VERIFIED_HACKS = [
  {
    ciudad: 'Roma',
    categoria: 'Ahorro y Agua',
    titulo: 'Nasoni: Agua potable helada y gratuita en toda Roma',
    detalle: 'No compres botellas de agua de €3 frente a los monumentos. Lleva tu botella reutilizable y recárgala en cualquiera de las 2.500 fuentes públicas de hierro ("Nasoni"): el agua viene directo del acueducto de montaña.',
    votos: 84
  },
  {
    ciudad: 'Tokio',
    categoria: 'Mirador Gratis',
    titulo: 'Mirador del piso 45 del Gobierno Metropolitano de Tokio en Shinjuku',
    detalle: 'Mientras que otros observatorios cuestan $25-$30 USD, las torres del edificio de Gobierno en Shinjuku tienen entrada 100% gratuita, vista panorámica de 360° (con el Monte Fuji en días despejados) y espectáculo de luces nocturno.',
    votos: 71
  },
  {
    ciudad: 'París',
    categoria: 'Vista y Acceso',
    titulo: 'Terraza panorámica de Galeries Lafayette Haussmann sin costo',
    detalle: 'Sube hasta el último piso (piso 7) de Galeries Lafayette Haussmann: tienes una de las mejores vistas abiertas de la Ópera Garnier y la Torre Eiffel completamente gratis sin hacer fila.',
    votos: 65
  },
  {
    ciudad: 'Nueva York',
    categoria: 'Transporte',
    titulo: 'Ferry de Staten Island + Tope semanal automático OMNY en el Subway',
    detalle: 'Para ver la Estatua de la Libertad y el skyline de Manhattan al atardecer, toma el Ferry de Staten Island desde Whitehall Terminal (100% gratuito). Además, pagando el metro siempre con la misma tarjeta contactless (OMNY), a partir del viaje 12 en la semana el resto son gratis.',
    votos: 92
  },
  {
    ciudad: 'Madrid',
    categoria: 'Museos Gratis',
    titulo: 'Franjas horarias gratuitas en Museo del Prado y Reina Sofía',
    detalle: 'El Museo del Prado es gratis de lunes a sábado de 18:00 a 20:00 (domingos de 17:00 a 19:00), y el Reina Sofía (donde está el Guernica de Picasso) es gratis de lunes y miércoles a sábado de 19:00 a 21:00. Reserva el ticket gratuito online.',
    votos: 58
  },
  {
    ciudad: 'Barcelona',
    categoria: 'Entradas',
    titulo: 'Torre de la Sagrada Familia y recinto modernista de Sant Pau',
    detalle: 'Reserva la Sagrada Familia a las 09:00 AM o a las 16:30 PM para ver la luz atravesar los vitrales de colores. A solo 10 minutos caminando por la Av. Gaudí está el Recinto Modernista de Sant Pau, una joya arquitectónica casi sin turistas.',
    votos: 49
  }
];

function obtenerDatosCuentaSocialPlux() {
  const nick = (typeof currentNickname !== 'undefined' && currentNickname)
    ? currentNickname
    : (localStorage.getItem('Plux_Nickname') || '');
  const photo = localStorage.getItem('Plux_UserProfile_Photo') || '';
  let personalInfo = {};
  try {
    personalInfo = JSON.parse(localStorage.getItem('Plux_PersonalInfo') || '{}');
  } catch (e) {}

  const savedTrips = (typeof getStoredTrips === 'function') ? getStoredTrips() : [];
  const savedTemplates = (typeof getStoredTemplates === 'function') ? getStoredTemplates() : [];
  const friends = (typeof getStoredFriends === 'function') ? getStoredFriends() : [];
  const activeDests = (typeof destinos !== 'undefined' && Array.isArray(destinos)) ? destinos.filter(d => d && d.nombre) : [];

  // Contar destinos únicos entre viajes guardados y el viaje activo
  const destSet = new Set();
  savedTrips.forEach(t => (t.destinos || []).forEach(d => { if (d && d.nombre) destSet.add(d.nombre.trim().toLowerCase()); }));
  activeDests.forEach(d => destSet.add(d.nombre.trim().toLowerCase()));

  const totalTripsCount = savedTrips.length + (activeDests.length > 0 ? 1 : 0);
  const levelNum = Math.min(10, Math.max(1, 1 + Math.floor((totalTripsCount + destSet.size + savedTemplates.length) / 2)));
  const levelTitles = ['Viajero Inicial', 'Explorador Urbano', 'Trotamundos', 'Viajero Experto', 'Nómada Global', 'Leyenda Plux'];
  const levelTitle = levelTitles[Math.min(levelTitles.length - 1, Math.floor(levelNum / 2))];

  const styleKey = personalInfo.travelStyle || 'cultural';
  const styleMeta = PLUX_STYLE_LABELS[styleKey] || PLUX_STYLE_LABELS.cultural;

  return {
    isLogged: !!nick,
    nickname: nick || 'viajero_plux',
    fullname: personalInfo.fullname || nick || 'Viajero Plux',
    location: personalInfo.location || document.getElementById('lugarSalida')?.value || 'Ciudad de origen',
    bio: personalInfo.bio || 'Planificando nuevas rutas y compartiendo tips en la comunidad Plux.',
    travelStyle: styleKey,
    styleMeta,
    photo,
    savedTrips,
    savedTemplates,
    friends,
    activeDests,
    totalDestinosCount: destSet.size,
    levelNum,
    levelBadge: `${levelTitle} Nv.${levelNum} · ${totalTripsCount} ${totalTripsCount === 1 ? 'viaje' : 'viajes'}`
  };
}

function obtenerHilosForo() {
  let localList = [];
  try {
    const raw = localStorage.getItem(PLUX_FORO_STORAGE_KEY);
    if (!raw) {
      localList = JSON.parse(JSON.stringify(PLUX_INITIAL_FORUM_THREADS));
      localStorage.setItem(PLUX_FORO_STORAGE_KEY, JSON.stringify(localList));
    } else {
      localList = JSON.parse(raw);
    }
  } catch (e) {
    localList = JSON.parse(JSON.stringify(PLUX_INITIAL_FORUM_THREADS));
  }

  // Merge con hilos en vivo de Firestore sin duplicar por ID (prioridad Firestore en votos/respuestas remotas)
  const map = new Map();
  localList.forEach(h => { if (h && h.id) map.set(h.id, h); });
  pluxFirestoreForumThreads.forEach(fh => {
    if (!fh || !fh.id) return;
    const prev = map.get(fh.id);
    if (!prev) {
      map.set(fh.id, fh);
    } else {
      const mergedReplies = (fh.respuestas?.length || 0) >= (prev.respuestas?.length || 0) ? fh.respuestas : prev.respuestas;
      map.set(fh.id, { ...prev, ...fh, respuestas: mergedReplies || [] });
    }
  });
  return Array.from(map.values());
}

function initForoComunidadListener() {
  try {
    const firestoreRef = (typeof db !== 'undefined' && db) ? db : (typeof firebase !== 'undefined' && firebase.firestore ? firebase.firestore() : null);
    if (!firestoreRef || pluxForoUnsubscribe) return;
    pluxForoUnsubscribe = firestoreRef.collection('plux_foro_comunidad')
      .limit(50)
      .onSnapshot((snapshot) => {
        const remote = [];
        snapshot.forEach(doc => {
          const d = doc.data();
          if (d && d.titulo) remote.push({ ...d, id: doc.id });
        });
        pluxFirestoreForumThreads = remote;
        const modal = document.getElementById('modal-descubrir');
        if (modal && modal.style.display !== 'none' && pluxComunidadSubtab === 'foro') {
          renderizarComunidadForos();
        }
      }, () => {});
  } catch (e) {}
}

function guardarHilosForo(hilos) {
  try {
    localStorage.setItem(PLUX_FORO_STORAGE_KEY, JSON.stringify(hilos));
  } catch (e) {
    console.warn('Error guardando foro:', e);
  }
}

function obtenerVotosForo() {
  try {
    return JSON.parse(localStorage.getItem(PLUX_FORO_VOTES_KEY) || '{}');
  } catch (e) {
    return {};
  }
}

function esAmigoEnPlux(nickAutor) {
  if (!nickAutor) return false;
  const clean = nickAutor.replace(/^@/, '').trim().toLowerCase();
  const friends = (typeof getStoredFriends === 'function') ? getStoredFriends() : [];
  return friends.some(f => String(f).replace(/^@/, '').trim().toLowerCase() === clean);
}

function renderAvatarSocialHTML(nick, photoUrl, size = 38) {
  const clean = (nick || 'VP').replace(/^@/, '').trim();
  const initials = clean.slice(0, 2).toUpperCase();
  const cache = (typeof getFriendsProfilesCache === 'function') ? getFriendsProfilesCache() : {};
  const cachedPhoto = photoUrl || cache[clean.toLowerCase()]?.photoUrl || '';

  if (cachedPhoto) {
    return `<div style="width:${size}px; height:${size}px; border-radius:50%; overflow:hidden; border:2px solid var(--verde); flex-shrink:0;"><img src="${cachedPhoto}" style="width:100%; height:100%; object-fit:cover; display:block;"></div>`;
  }
  return `<div style="width:${size}px; height:${size}px; border-radius:50%; background:linear-gradient(135deg, var(--verde), #38bdf8); color:#04131a; font-weight:900; font-size:${Math.round(size * 0.38)}px; display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:0 4px 12px rgba(16,185,129,0.25);">${escapeHtml(initials)}</div>`;
}

function renderizarComunidadForos() {
  const container = document.getElementById('descubrir-comunidad-content');
  if (!container) return;

  if (typeof initCommunityTemplatesListener === 'function') {
    initCommunityTemplatesListener();
  }
  if (typeof initForoComunidadListener === 'function') {
    initForoComunidadListener();
  }

  const cuenta = obtenerDatosCuentaSocialPlux();
  const hilos = obtenerHilosForo();
  const votosMap = obtenerVotosForo();
  const syncTplData = (typeof window.getPluxSyncedTemplatesData === 'function')
    ? window.getPluxSyncedTemplatesData()
    : { oficiales: [], comunidad: [], mias: [], likedSet: new Set() };
  const totalPlantillasSincronizadas = (syncTplData.oficiales?.length || 0) + (syncTplData.comunidad?.length || 0) + (syncTplData.mias?.length || 0);

  let html = `
    <!-- TARJETA DE TU PERFIL SOCIAL CONECTADA A TU CUENTA PLUX -->
    <div class="comunidad-social-banner">
      <div style="display:flex; align-items:center; gap:14px; min-width:250px; flex:1;">
        ${renderAvatarSocialHTML(cuenta.nickname, cuenta.photo, 54)}
        <div style="min-width:0;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <strong class="comunidad-social-name" style="font-size:1.05rem;">@${escapeHtml(cuenta.nickname)}</strong>
            <span style="font-size:0.72rem; font-weight:800; padding:3px 9px; border-radius:20px; background:rgba(16,185,129,0.18); color:var(--verde); border:1px solid rgba(16,185,129,0.35);">
              <i class="fa-solid fa-medal"></i> ${escapeHtml(cuenta.levelBadge)}
            </span>
            <span style="font-size:0.72rem; font-weight:700; padding:3px 9px; border-radius:20px; background:rgba(255,255,255,0.07); color:${cuenta.styleMeta.color};">
              <i class="fa-solid ${cuenta.styleMeta.icon}"></i> ${escapeHtml(cuenta.styleMeta.label)}
            </span>
          </div>
          <p class="comunidad-social-bio" style="margin:4px 0 6px 0; font-size:0.8rem; line-height:1.35;">${escapeHtml(cuenta.bio)}</p>
          <div style="display:flex; gap:14px; flex-wrap:wrap; font-size:0.76rem; color:var(--gris);">
            <span><i class="fa-solid fa-location-dot" style="color:#38bdf8;"></i> ${escapeHtml(cuenta.location)}</span>
            <span><i class="fa-solid fa-suitcase-rolling" style="color:var(--verde);"></i> <strong>${cuenta.savedTrips.length}</strong> viajes guardados</span>
            <span><i class="fa-solid fa-earth-americas" style="color:#a855f7;"></i> <strong>${cuenta.totalDestinosCount}</strong> destinos</span>
            <span><i class="fa-solid fa-user-group" style="color:#f472b6;"></i> <strong>${cuenta.friends.length}</strong> amigos</span>
          </div>
        </div>
      </div>

      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        ${cuenta.isLogged ? `
          <button type="button" class="btn-card-secondary" style="padding:8px 12px; font-size:0.78rem;" onclick="window.cerrarDescubrir(); if(typeof abrirInfoPersonal==='function') abrirInfoPersonal(); else if(typeof abrirCuenta==='function') abrirCuenta();">
            <i class="fa-solid fa-user-pen"></i> Editar mi Perfil
          </button>
          <button type="button" class="btn-card-secondary" style="padding:8px 12px; font-size:0.78rem;" onclick="window.cerrarDescubrir(); if(typeof abrirAmigos==='function') abrirAmigos();">
            <i class="fa-solid fa-user-group" style="color:#38bdf8;"></i> Amigos (${cuenta.friends.length})
          </button>
          <button type="button" class="btn-card-secondary" style="padding:8px 12px; font-size:0.78rem;" onclick="window.cerrarDescubrir(); if(typeof toggleSocialChat==='function') toggleSocialChat();">
            <i class="fa-solid fa-comments" style="color:var(--verde);"></i> Mis Chats
          </button>
        ` : `
          <button type="button" class="btn-card-primary" style="padding:8px 14px; font-size:0.8rem;" onclick="window.cerrarDescubrir(); if(typeof abrirCuenta==='function') abrirCuenta();">
            <i class="fa-solid fa-right-to-bracket"></i> Iniciar sesión / Crear @nickname
          </button>
        `}
      </div>
    </div>

    <!-- BARRA DE NAVEGACIÓN DE LA COMUNIDAD -->
    <div class="comunidad-top-bar">
      <div class="comparador-subswitch" style="margin:0;">
        <button type="button" class="subswitch-btn ${pluxComunidadSubtab === 'foro' ? 'active' : ''}" onclick="window.cambiarSubtabComunidad('foro')">
          <i class="fa-solid fa-users-rectangle"></i> Muro Social & Foro (${hilos.length})
        </button>
        <button type="button" class="subswitch-btn ${pluxComunidadSubtab === 'itinerarios' ? 'active' : ''}" onclick="window.cambiarSubtabComunidad('itinerarios')">
          <i class="fa-solid fa-layer-group"></i> Plantillas Sincronizadas (${totalPlantillasSincronizadas})
        </button>
        <button type="button" class="subswitch-btn ${pluxComunidadSubtab === 'hacks' ? 'active' : ''}" onclick="window.cambiarSubtabComunidad('hacks')">
          <i class="fa-solid fa-lightbulb"></i> Tips & Hacks Verificados (${PLUX_VERIFIED_HACKS.length})
        </button>
      </div>

      ${pluxComunidadSubtab === 'foro' ? `
        <button type="button" class="btn-card-primary" style="padding:10px 18px;" onclick="window.toggleFormularioNuevoHilo()">
          <i class="fa-solid fa-pen-to-square"></i> Crear Publicación con mi Cuenta
        </button>
      ` : ''}
    </div>
  `;

  if (pluxComunidadSubtab === 'foro') {
    const resumenActual = cuenta.activeDests.length > 0
      ? `Viaje actual: ${cuenta.activeDests.map(d => `${d.nombre} (${(d.dias || []).length || 1}d)`).join(' → ')}`
      : '';

    html += `
      <!-- Publicador Social Conectado a tu Cuenta Plux -->
      <div id="foroNuevoHiloBox" class="foro-new-thread-box" style="display:none;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
          <div style="display:flex; align-items:center; gap:10px;">
            ${renderAvatarSocialHTML(cuenta.nickname, cuenta.photo, 36)}
            <div>
              <h4 style="margin:0; font-size:1rem; color:#ffffff; font-weight:800;">
                Publicando como <span style="color:var(--verde);">@${escapeHtml(cuenta.nickname)}</span>
              </h4>
              <span style="font-size:0.74rem; color:var(--gris);">${escapeHtml(cuenta.styleMeta.label)} · ${escapeHtml(cuenta.location)}</span>
            </div>
          </div>
          <button type="button" onclick="window.toggleFormularioNuevoHilo()" style="background:transparent; border:none; color:var(--gris); cursor:pointer; font-size:1.2rem;">&times;</button>
        </div>

        <div class="voucher-fields-grid" style="margin-bottom:12px;">
          <div class="voucher-field voucher-field-full">
            <label>Título de tu publicación, consulta o bitácora</label>
            <input type="text" id="foroInputTitulo" placeholder="Ej: Nuestra ruta y presupuesto real por Italia en tren / ¿Quién viaja a Tokio en noviembre?">
          </div>

          <div class="voucher-field">
            <label>Categoría Social</label>
            <select id="foroInputCategoria">
              <option value="Consejos y Tips">Consejos y Tips</option>
              <option value="Rutas e Itinerarios">Rutas e Itinerarios</option>
              <option value="Presupuesto">Presupuesto y Monedas</option>
              <option value="Compañeros de Viaje">Busco Compañeros de Viaje</option>
              <option value="Transporte">Transporte y Vuelos</option>
              <option value="Bitácora de Viaje">Bitácora / Experiencia Real</option>
            </select>
          </div>

          <div class="voucher-field">
            <label>Destino Relacionado</label>
            <input type="text" id="foroInputDestino" placeholder="Ej: Roma, Tokio, Europa..." value="${escapeHtml(cuenta.activeDests[0]?.nombre || 'General')}">
          </div>

          <div class="voucher-field" style="grid-column: span 2;">
            <label>Adjuntar Viaje o Plantilla de tu Cuenta (Para que otros puedan verlo o clonarlo)</label>
            <select id="foroInputAdjuntoSelect">
              ${resumenActual ? `<option value="actual|${escapeHtml(resumenActual)}">📌 ${escapeHtml(resumenActual)}</option>` : ''}
              <option value="">Sin itinerario adjunto</option>
              ${cuenta.savedTrips.map((tr, idx) => `<option value="trip_${idx}|Viaje guardado: ${escapeHtml(tr.nombre)} (${(tr.destinos || []).length} destinos)">🧳 Mi Viaje Guardado: ${escapeHtml(tr.nombre)}</option>`).join('')}
              ${cuenta.savedTemplates.map((tp, idx) => `<option value="mia_${idx}|Plantilla: ${escapeHtml(tp.nombre)}">📋 Mi Plantilla: ${escapeHtml(tp.nombre)}</option>`).join('')}
            </select>
          </div>

          <div class="voucher-field voucher-field-full">
            <label>Contenido del Post</label>
            <textarea id="foroInputCuerpo" class="reserva-raw-textarea" style="min-height:105px;" placeholder="Comparte tu experiencia, pide recomendaciones a la comunidad o invita a otros viajeros a sumarse a tu ruta..."></textarea>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <label style="display:inline-flex; align-items:center; gap:6px; font-size:0.78rem; color:var(--gris); cursor:pointer;">
            <input type="checkbox" id="foroChkPublicarPlantilla" checked>
            Si adjunto mi viaje actual, compartirlo también en Plantillas de la Comunidad
          </label>
          <div style="display:flex; gap:10px;">
            <button type="button" class="btn-card-secondary" onclick="window.toggleFormularioNuevoHilo()">Cancelar</button>
            <button type="button" class="btn-card-primary" onclick="window.publicarNuevoHiloForo()">
              <i class="fa-solid fa-paper-plane"></i> Publicar en el Muro
            </button>
          </div>
        </div>
      </div>

      <!-- Barra de Filtros Sociales (Todos / Mis Amigos / Mis Posts) + Buscador -->
      <div class="descubrir-search-filter-bar" style="margin-bottom:18px;">
        <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
          <div class="comparador-subswitch" style="margin:0;">
            <button type="button" class="subswitch-btn ${pluxForoFeedScope === 'todos' ? 'active' : ''}" onclick="window.cambiarScopeFeedForo('todos')">
              <i class="fa-solid fa-globe"></i> Explorar Todo
            </button>
            <button type="button" class="subswitch-btn ${pluxForoFeedScope === 'amigos' ? 'active' : ''}" onclick="window.cambiarScopeFeedForo('amigos')">
              <i class="fa-solid fa-user-group"></i> De mis Amigos (${cuenta.friends.length})
            </button>
            <button type="button" class="subswitch-btn ${pluxForoFeedScope === 'mios' ? 'active' : ''}" onclick="window.cambiarScopeFeedForo('mios')">
              <i class="fa-solid fa-user-check"></i> Mis Publicaciones
            </button>
          </div>

          <div class="descubrir-search-input-wrapper" style="flex:1; min-width:210px;">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" id="foroSearchInput" value="${escapeHtml(pluxForoBusqueda)}" placeholder="Buscar por destino, @usuario, tip..." oninput="window.buscarEnForo(this.value)">
          </div>

          <select onchange="window.cambiarOrdenForo(this.value)" style="background:rgba(15,23,42,0.8); border:1px solid rgba(255,255,255,0.12); color:#ffffff; border-radius:12px; padding:0 14px; font-weight:700; font-size:0.82rem; height:42px;">
            <option value="recientes" ${pluxForoOrden === 'recientes' ? 'selected' : ''}>Más recientes</option>
            <option value="votados" ${pluxForoOrden === 'votados' ? 'selected' : ''}>Más útiles</option>
            <option value="comentados" ${pluxForoOrden === 'comentados' ? 'selected' : ''}>Más respuestas</option>
          </select>
        </div>

        <div class="descubrir-chips-filter">
          ${['todas', 'Consejos y Tips', 'Rutas e Itinerarios', 'Presupuesto', 'Compañeros de Viaje', 'Transporte', 'Bitácora de Viaje'].map(cat => `
            <button type="button" class="filter-chip ${pluxForoCategoriaActiva === cat ? 'active' : ''}" onclick="window.filtrarForoPorCategoria('${cat}')">
              ${cat === 'todas' ? 'Todos los temas' : cat}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    let filteredHilos = hilos.filter(h => {
      const autorClean = (h.autor || '').replace(/^@/, '').trim().toLowerCase();
      if (pluxForoFeedScope === 'amigos' && !esAmigoEnPlux(autorClean)) return false;
      if (pluxForoFeedScope === 'mios' && autorClean !== cuenta.nickname.replace(/^@/, '').trim().toLowerCase()) return false;

      const matchCat = pluxForoCategoriaActiva === 'todas' || h.categoria === pluxForoCategoriaActiva;
      if (!matchCat) return false;
      if (!pluxForoBusqueda.trim()) return true;
      const q = pluxForoBusqueda.toLowerCase();
      return (h.titulo || '').toLowerCase().includes(q) ||
             (h.cuerpo || '').toLowerCase().includes(q) ||
             (h.destino || '').toLowerCase().includes(q) ||
             (h.autor || '').toLowerCase().includes(q);
    });

    if (pluxForoOrden === 'votados') {
      filteredHilos.sort((a, b) => (b.votos || 0) - (a.votos || 0));
    } else if (pluxForoOrden === 'comentados') {
      filteredHilos.sort((a, b) => ((b.respuestas || []).length) - ((a.respuestas || []).length));
    } else {
      filteredHilos.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    }

    html += '<div class="foro-threads-list" id="foroThreadsListContainer">';
    if (filteredHilos.length === 0) {
      html += `
        <div style="text-align:center; padding:36px 20px; color:var(--gris); border:1px dashed rgba(255,255,255,0.12); border-radius:16px;">
          ${pluxForoFeedScope === 'amigos'
            ? 'Aún no hay publicaciones de tus amigos o todavía no seguiste a ningún viajero. ¡Haz clic en "+ Seguir / Amigo" en cualquier publicación para conectar!'
            : 'No se encontraron publicaciones con ese filtro. ¡Comparte tu primera experiencia o consulta con tu cuenta!'}
        </div>
      `;
    } else {
      filteredHilos.forEach(h => {
        const isOpen = pluxOpenThreads.has(h.id);
        const voted = !!votosMap[h.id];
        const replies = Array.isArray(h.respuestas) ? h.respuestas : [];
        const autorClean = (h.autor || 'viajero').replace(/^@/, '').trim();
        const isMe = autorClean.toLowerCase() === cuenta.nickname.replace(/^@/, '').trim().toLowerCase();
        const isFriend = esAmigoEnPlux(autorClean);
        const stMeta = PLUX_STYLE_LABELS[h.autorEstilo || 'cultural'] || PLUX_STYLE_LABELS.cultural;

        html += `
          <div class="foro-thread-card">
            <!-- Cabecera Social del Autor -->
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px; flex-wrap:wrap; margin-bottom:4px;">
              <div style="display:flex; align-items:center; gap:10px; cursor:pointer;" onclick="window.verPerfilSocialViajero('${escapeHtml(autorClean)}')">
                ${renderAvatarSocialHTML(autorClean, isMe ? cuenta.photo : h.autorPhoto, 42)}
                <div>
                  <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                    <strong style="color:#ffffff; font-size:0.95rem;">@${escapeHtml(autorClean)}</strong>
                    ${isMe ? `<span style="font-size:0.68rem; background:rgba(16,185,129,0.2); color:var(--verde); padding:2px 7px; border-radius:12px; font-weight:800;">Tú</span>` : ''}
                    ${isFriend ? `<span style="font-size:0.68rem; background:rgba(56,189,248,0.18); color:#38bdf8; padding:2px 7px; border-radius:12px; font-weight:800;"><i class="fa-solid fa-user-check"></i> Amigo</span>` : ''}
                    <span style="font-size:0.7rem; color:${stMeta.color}; background:rgba(255,255,255,0.05); padding:2px 8px; border-radius:12px; font-weight:700;">
                      <i class="fa-solid ${stMeta.icon}"></i> ${escapeHtml(stMeta.label)}
                    </span>
                  </div>
                  <div style="font-size:0.74rem; color:var(--gris); margin-top:2px;">
                    ${escapeHtml(h.autorNivel || 'Viajero Plux')} ${h.autorCiudad ? `· <i class="fa-solid fa-location-dot"></i> ${escapeHtml(h.autorCiudad)}` : ''} · ${escapeHtml(h.fecha)}
                  </div>
                </div>
              </div>

              <!-- Acciones de Red Social con el Autor -->
              <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                <span class="foro-cat-badge">${escapeHtml(h.categoria)}</span>
                <span class="foro-dest-badge"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(h.destino || 'General')}</span>
                ${!isMe ? `
                  <button type="button" class="foro-action-btn" style="padding:4px 9px; font-size:0.74rem; ${isFriend ? 'border-color:#38bdf8; color:#38bdf8;' : ''}" onclick="window.toggleAmigoDesdeComunidad('${escapeHtml(autorClean)}')">
                    <i class="fa-solid ${isFriend ? 'fa-user-check' : 'fa-user-plus'}"></i> ${isFriend ? 'Amigo' : '+ Amigo'}
                  </button>
                  <button type="button" class="foro-action-btn" style="padding:4px 9px; font-size:0.74rem;" onclick="window.chatearConViajeroComunidad('${escapeHtml(autorClean)}')" title="Enviar mensaje directo a @${escapeHtml(autorClean)}">
                    <i class="fa-regular fa-paper-plane"></i> Chatear
                  </button>
                ` : `
                  <button type="button" class="foro-action-btn" style="padding:4px 9px; font-size:0.74rem; color:#f87171;" onclick="window.eliminarHiloForo('${escapeHtml(h.id)}')" title="Eliminar mi publicación">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                `}
              </div>
            </div>

            <h4 class="foro-thread-title" onclick="window.toggleRespuestasHilo('${escapeHtml(h.id)}')">${escapeHtml(h.titulo)}</h4>
            <p class="foro-thread-body">${escapeHtml(h.cuerpo)}</p>

            ${h.itinerarioAdjunto ? `
              <div style="background:rgba(168,85,247,0.1); border:1px solid rgba(168,85,247,0.3); border-radius:12px; padding:10px 14px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                <div style="display:flex; align-items:center; gap:8px; font-size:0.82rem; color:#e9d5ff; font-weight:700;">
                  <i class="fa-solid fa-route" style="color:#c084fc;"></i>
                  <span>Itinerario compartido: <strong>${escapeHtml(h.itinerarioAdjunto)}</strong></span>
                </div>
                <div style="display:flex; gap:6px;">
                  ${h.plantillaIdAdjunta ? `
                    <button type="button" class="btn-card-primary" style="padding:5px 12px; font-size:0.76rem;" onclick="window.clonarPlantillaCompleta && window.clonarPlantillaCompleta('${escapeHtml(h.plantillaIdAdjunta)}', '${escapeHtml(h.plantillaOriginAdjunta || 'oficial')}')">
                      <i class="fa-solid fa-clone"></i> Clonar ruta a mi viaje
                    </button>
                  ` : h.customDestinosAdjuntos ? `
                    <button type="button" class="btn-card-primary" style="padding:5px 12px; font-size:0.76rem;" onclick="window.clonarViajeAdjuntoDeHilo('${escapeHtml(h.id)}')">
                      <i class="fa-solid fa-clone"></i> Clonar ruta a mi viaje
                    </button>
                  ` : `
                    <button type="button" class="btn-card-secondary" style="padding:5px 12px; font-size:0.76rem;" onclick="window.empezarViajeDesdeDescubrir('${escapeHtml(h.destino || 'Roma')}')">
                      <i class="fa-solid fa-plus"></i> Armar ruta a ${escapeHtml(h.destino || 'destino')}
                    </button>
                  `}
                </div>
              </div>
            ` : ''}

            <div class="foro-thread-footer">
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <button type="button" class="foro-action-btn ${voted ? 'voted' : ''}" onclick="window.votarHiloForo('${escapeHtml(h.id)}')">
                  <i class="fa-solid fa-thumbs-up"></i> Útil (${h.votos || 0})
                </button>
                <button type="button" class="foro-action-btn" onclick="window.toggleRespuestasHilo('${escapeHtml(h.id)}')">
                  <i class="fa-regular fa-comment-dots"></i> ${replies.length} ${replies.length === 1 ? 'Comentario' : 'Comentarios'}
                </button>
                <button type="button" class="foro-action-btn" onclick="window.guardarHackEnViaje('${escapeHtml(h.titulo)}', '${escapeHtml(h.destino || 'Viaje')}')" title="Guardar este consejo como nota/evento en mi viaje">
                  <i class="fa-regular fa-bookmark"></i> Guardar en mi viaje
                </button>
              </div>
              <button type="button" class="foro-action-btn" style="font-size:0.74rem;" onclick="window.verPerfilSocialViajero('${escapeHtml(autorClean)}')">
                <i class="fa-regular fa-id-badge"></i> Ver perfil de @${escapeHtml(autorClean)}
              </button>
            </div>

            ${isOpen ? `
              <div class="foro-replies-drawer">
                <div style="font-size:0.76rem; font-weight:800; color:var(--gris); text-transform:uppercase; margin-bottom:8px;">
                  Comentarios de la Comunidad (${replies.length})
                </div>
                ${replies.length === 0 ? `
                  <p style="font-size:0.84rem; color:var(--gris); margin:0 0 12px 0;">Aún no hay comentarios. ¡Responde con tu cuenta @${escapeHtml(cuenta.nickname)}!</p>
                ` : replies.map(r => {
                  const rNick = (r.autor || 'viajero').replace(/^@/, '').trim();
                  return `
                    <div class="foro-reply-item">
                      <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.76rem; color:var(--gris); margin-bottom:4px;">
                        <div style="display:flex; align-items:center; gap:8px; cursor:pointer;" onclick="window.verPerfilSocialViajero('${escapeHtml(rNick)}')">
                          ${renderAvatarSocialHTML(rNick, r.autorPhoto || '', 24)}
                          <strong style="color:var(--verde);">@${escapeHtml(rNick)}</strong>
                        </div>
                        <div style="display:flex; align-items:center; gap:8px;">
                          <span>${escapeHtml(r.fecha)}</span>
                          <button type="button" onclick="window.chatearConViajeroComunidad('${escapeHtml(rNick)}')" style="background:transparent; border:none; color:#38bdf8; cursor:pointer; font-size:0.74rem;" title="Chatear con @${escapeHtml(rNick)}"><i class="fa-regular fa-paper-plane"></i></button>
                        </div>
                      </div>
                      <p style="margin:0; font-size:0.85rem; color:#e2e8f0; line-height:1.5; padding-left:32px;">${escapeHtml(r.texto)}</p>
                    </div>
                  `;
                }).join('')}

                <div style="display:flex; gap:10px; margin-top:12px; align-items:center; flex-wrap:wrap;">
                  ${renderAvatarSocialHTML(cuenta.nickname, cuenta.photo, 32)}
                  <input type="text" id="replyInput-${escapeHtml(h.id)}" placeholder="Comentar como @${escapeHtml(cuenta.nickname)}..." style="flex:1; min-width:200px; padding:9px 13px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14); border-radius:10px; color:#ffffff; font-size:0.84rem; outline:none;" onkeydown="if(event.key==='Enter') window.publicarRespuestaHilo('${escapeHtml(h.id)}')">
                  <button type="button" class="btn-card-primary" style="padding:8px 16px; font-size:0.82rem;" onclick="window.publicarRespuestaHilo('${escapeHtml(h.id)}')">
                    <i class="fa-solid fa-paper-plane"></i> Responder
                  </button>
                </div>
              </div>
            ` : ''}
          </div>
        `;
      });
    }
    html += '</div>';

  } else if (pluxComunidadSubtab === 'itinerarios') {
    // SECCIÓN 100% SINCRONIZADA CON TUS VIAJES -> PLANTILLAS (plux-templates.js)
    const oficiales = syncTplData.oficiales || [];
    const comunidad = syncTplData.comunidad || [];
    const mias = syncTplData.mias || [];
    const likedSet = syncTplData.likedSet || new Set();

    html += `
      <div class="descubrir-section-header" style="margin-top:4px; margin-bottom:14px;">
        <div>
          <h4><i class="fa-solid fa-layer-group" style="color:#a855f7;"></i> Plantillas de Viaje Sincronizadas con Tus Viajes</h4>
          <p>Las plantillas que votes, guardes, clones o publiques aquí están sincronizadas en tiempo real con el panel <strong>Tus Viajes → Plantillas</strong>.</p>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button type="button" class="btn-card-secondary" onclick="window.cerrarDescubrir(); if(typeof verPlantillas==='function') verPlantillas();">
            <i class="fa-solid fa-folder-open"></i> Ver en Tus Viajes
          </button>
        </div>
      </div>

      <!-- Barra para Guardar tu Viaje Actual como Plantilla (Sincronizada con Tus Viajes y Firestore) -->
      <div class="comunidad-sync-bar">
        <div style="display:flex; align-items:center; gap:10px; flex:1; min-width:240px;">
          <i class="fa-solid fa-cloud-arrow-up" style="color:var(--verde); font-size:1.3rem;"></i>
          <input type="text" id="syncInputNombrePlantilla" placeholder="Nombre para guardar tu itinerario actual como plantilla..." style="flex:1; padding:9px 12px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14); border-radius:10px; color:#fff; font-size:0.84rem; outline:none;">
        </div>
        <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
          <label style="font-size:0.78rem; color:#cbd5e1; display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
            <input type="checkbox" id="syncChkPublicarComunidad" checked> Publicar en Comunidad (@${escapeHtml(cuenta.nickname)})
          </label>
          <button type="button" class="btn-card-primary" style="padding:9px 16px; font-size:0.82rem;" onclick="window.guardarPlantillaSincronizadaDesdeDescubrir()">
            <i class="fa-solid fa-floppy-disk"></i> Guardar Plantilla
          </button>
        </div>
      </div>

      <!-- Buscador y Sub-filtros sincronizados con las 3 pestañas de Tus Viajes -->
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
        <div class="descubrir-chips-filter" style="margin-bottom:0;">
          <button type="button" class="filter-chip ${pluxPlantillasSubFilter === 'todas' ? 'active' : ''}" onclick="window.cambiarSubfiltroPlantillasDescubrir('todas')">
            Todas (${oficiales.length + comunidad.length + mias.length})
          </button>
          <button type="button" class="filter-chip ${pluxPlantillasSubFilter === 'comunidad' ? 'active' : ''}" onclick="window.cambiarSubfiltroPlantillasDescubrir('comunidad')">
            <i class="fa-solid fa-users"></i> Comunidad (${comunidad.length})
          </button>
          <button type="button" class="filter-chip ${pluxPlantillasSubFilter === 'oficiales' ? 'active' : ''}" onclick="window.cambiarSubfiltroPlantillasDescubrir('oficiales')">
            <i class="fa-solid fa-certificate"></i> Oficiales Plux (${oficiales.length})
          </button>
          <button type="button" class="filter-chip ${pluxPlantillasSubFilter === 'mias' ? 'active' : ''}" onclick="window.cambiarSubfiltroPlantillasDescubrir('mias')">
            <i class="fa-solid fa-bookmark"></i> Mis Plantillas Guardadas (${mias.length})
          </button>
        </div>
        <div class="reservas-search-box" style="min-width:220px;">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" id="plantillasSearchInput" value="${escapeHtml(pluxPlantillasBusqueda)}" placeholder="Buscar plantilla o destino..." oninput="window.buscarEnPlantillasDescubrir(this.value)">
        </div>
      </div>

      <div class="descubrir-grid-actividades">
    `;

    const itemsToRender = [];
    if (pluxPlantillasSubFilter === 'todas' || pluxPlantillasSubFilter === 'comunidad') {
      comunidad.forEach(t => itemsToRender.push({ tpl: t, origin: 'comunidad' }));
    }
    if (pluxPlantillasSubFilter === 'todas' || pluxPlantillasSubFilter === 'oficiales') {
      oficiales.forEach(t => itemsToRender.push({ tpl: t, origin: 'oficial' }));
    }
    if (pluxPlantillasSubFilter === 'todas' || pluxPlantillasSubFilter === 'mias') {
      mias.forEach((t, idx) => itemsToRender.push({ tpl: t, origin: 'mia', miaIdx: idx }));
    }

    const qTpl = (pluxPlantillasBusqueda || '').trim().toLowerCase();
    const filteredTemplates = qTpl
      ? itemsToRender.filter(({ tpl }) => {
          const destNames = (tpl.destinos || []).map(d => d.nombre || '').join(' ');
          const tagsStr = (tpl.tags || []).join(' ');
          const emb = (tpl.embajadorSlug && typeof window.getEmbajadorBySlug === 'function') ? window.getEmbajadorBySlug(tpl.embajadorSlug) : null;
          const embStr = emb ? `${emb.nombre} ${emb.subtitulo} ${emb.especialidad} embajador` : '';
          const hay = `${tpl.nombre || ''} ${tpl.descripcion || ''} ${tpl.autor || ''} ${destNames} ${tagsStr} ${embStr}`.toLowerCase();
          return hay.includes(qTpl);
        })
      : itemsToRender;

    if (filteredTemplates.length === 0) {
      html += `
        <div style="grid-column:1/-1; text-align:center; padding:32px; color:var(--gris); border:1px dashed rgba(255,255,255,0.12); border-radius:16px;">
          ${qTpl ? `No se encontraron plantillas que coincidan con "${escapeHtml(pluxPlantillasBusqueda)}".` : 'No tienes plantillas en esta categoría todavía. Puedes guardar cualquier plantilla con el botón "Guardar" o crear una desde tu viaje actual.'}
        </div>
      `;
    } else {
      filteredTemplates.forEach(({ tpl, origin, miaIdx }) => {
        const isLiked = likedSet.has(tpl.id);
        const daysCount = (tpl.destinos || []).reduce((acc, d) => acc + ((d.dias || []).length || 1), 0);
        const eventsCount = (tpl.destinos || []).reduce((acc, d) => acc + (d.dias || []).reduce((a, dia) => a + ((dia.eventos || []).length), 0), 0);
        const votes = (tpl.likes || 0) + (origin === 'oficial' && isLiked ? 1 : 0);
        const autorClean = (tpl.autor || (origin === 'oficial' ? 'Plux Oficial' : cuenta.nickname)).replace(/^@/, '');
        const embBadge = (origin === 'oficial' && typeof window.getEmbajadorBadgeHtml === 'function') ? window.getEmbajadorBadgeHtml(tpl) : '';

        html += `
          <div class="activity-card-rich" style="${tpl.destacadaOficial ? 'border-color:rgba(16,185,129,0.4);' : ''}">
            <div>
              ${tpl.coverImg ? `<div style="height:96px; margin:-16px -16px 12px -16px; border-radius:14px 14px 0 0; background:url('${escapeHtml(tpl.coverImg)}') center/cover no-repeat; position:relative;"><div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(9,13,22,0.1), rgba(15,23,42,0.85)); border-radius:14px 14px 0 0;"></div></div>` : ''}
              <div class="activity-card-header" style="margin-bottom:6px;">
                <span style="font-size:0.72rem; font-weight:800; text-transform:uppercase; padding:3px 9px; border-radius:20px; background:${origin === 'oficial' ? 'rgba(16,185,129,0.15)' : (origin === 'mia' ? 'rgba(251,191,36,0.15)' : 'rgba(56,189,248,0.15)')}; color:${origin === 'oficial' ? 'var(--verde)' : (origin === 'mia' ? '#fbbf24' : '#38bdf8')};">
                  ${origin === 'oficial' ? (tpl.destacadaOficial ? 'Oficial Destacada' : 'Plux Oficial') : (origin === 'mia' ? 'En Mis Plantillas' : `@${escapeHtml(autorClean)}`)}
                </span>
                <span style="font-size:0.75rem; color:var(--gris); font-weight:700;">${daysCount}d · ${eventsCount} act.</span>
              </div>
              ${embBadge ? `<div style="margin-bottom:6px;">${embBadge}</div>` : ''}
              <h5 style="margin:4px 0 6px 0; font-size:1.05rem; color:#fff; font-weight:800;">${escapeHtml(tpl.nombre)}</h5>
              <p class="activity-card-desc" style="margin-bottom:10px;">${escapeHtml(tpl.descripcion || `Ruta por ${(tpl.destinos || []).map(d => d.nombre).join(', ')}`)}</p>
              <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:8px;">
                ${(tpl.tags || []).map(tg => `<span style="font-size:0.7rem; background:rgba(255,255,255,0.06); color:#cbd5e1; padding:2px 8px; border-radius:8px;">${escapeHtml(tg)}</span>`).join('')}
              </div>
            </div>

            <div class="activity-card-footer" style="flex-wrap:wrap; gap:6px;">
              ${origin !== 'mia' ? `
                <button type="button" class="foro-action-btn ${isLiked ? 'voted' : ''}" onclick="window.toggleLikePlantilla && window.toggleLikePlantilla('${escapeHtml(tpl.id)}', event)">
                  <i class="fa-solid fa-heart" style="color:${isLiked ? '#f472b6' : 'inherit'};"></i> ${votes}
                </button>
              ` : `
                <button type="button" class="foro-action-btn" style="color:#f87171;" onclick="window.eliminarPlantilla && window.eliminarPlantilla(${miaIdx})">
                  <i class="fa-solid fa-trash-can"></i> Eliminar
                </button>
              `}

              <div style="display:flex; gap:6px;">
                ${tpl.id ? `
                  <button type="button" class="btn-card-secondary" style="padding:6px 9px; font-size:0.76rem;" onclick="window.compartirPlantillaPublica && window.compartirPlantillaPublica('${escapeHtml(tpl.id)}', '${origin}', event)" title="Copiar enlace de esta plantilla">
                    <i class="fa-solid fa-share-nodes"></i>
                  </button>
                ` : ''}
                ${origin !== 'mia' ? `
                  <button type="button" class="btn-card-secondary" style="padding:6px 10px; font-size:0.76rem;" onclick="window.guardarPlantillaEnMisPlantillas && window.guardarPlantillaEnMisPlantillas('${escapeHtml(tpl.id)}', '${origin}', event)" title="Guardar en Mis Plantillas (Tus Viajes)">
                    <i class="fa-regular fa-bookmark"></i> Guardar
                  </button>
                ` : ''}
                <button type="button" class="btn-add-activity-trip" onclick="window.clonarPlantillaCompleta && window.clonarPlantillaCompleta(${origin === 'mia' ? miaIdx : `'${escapeHtml(tpl.id)}'`}, '${origin}')">
                  <i class="fa-solid fa-clone"></i> Clonar
                </button>
              </div>
            </div>
          </div>
        `;
      });
    }

    html += '</div>';

  } else if (pluxComunidadSubtab === 'hacks') {
    html += `
      <div class="descubrir-section-header" style="margin-top:4px;">
        <div>
          <h4><i class="fa-solid fa-lightbulb" style="color:#fbbf24;"></i> Hacks de Viaje y Consejos Verificados por la Comunidad</h4>
          <p>Trucos reales votados por viajeros de Plux para ahorrar dinero, evitar filas y moverse como un local. Puedes sumarlos a tu viaje con 1 clic.</p>
        </div>
      </div>
      <div class="descubrir-grid-actividades">
        ${PLUX_VERIFIED_HACKS.map(hk => `
          <div class="activity-card-rich">
            <div class="activity-card-header">
              <div>
                <span style="font-size:0.74rem; color:var(--verde); font-weight:800; text-transform:uppercase;"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(hk.ciudad)}</span>
                <h5 style="margin-top:3px;">${escapeHtml(hk.titulo)}</h5>
              </div>
              <span class="activity-card-cat-badge">${escapeHtml(hk.categoria)}</span>
            </div>
            <p class="activity-card-desc">${escapeHtml(hk.detalle)}</p>
            <div class="activity-card-footer">
              <span style="font-size:0.8rem; color:#38bdf8; font-weight:700;"><i class="fa-solid fa-circle-check"></i> ${hk.votos} viajeros lo verificaron</span>
              <button type="button" class="btn-add-activity-trip" onclick="window.guardarHackEnViaje('${escapeHtml(hk.titulo)}: ${escapeHtml(hk.detalle)}', '${escapeHtml(hk.ciudad)}')">
                <i class="fa-solid fa-plus"></i> Sumar a mi viaje
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  container.innerHTML = html;
}

function refrescarPlantillasSincronizadasDescubrir() {
  const modal = document.getElementById('modal-descubrir');
  if (!modal || modal.style.display === 'none') return;
  renderDescubrirParaTi();
  if (pluxComunidadSubtab === 'itinerarios') {
    renderizarComunidadForos();
  }
}

function cambiarSubtabComunidad(sub) {
  pluxComunidadSubtab = sub || 'foro';
  renderizarComunidadForos();
}

function cambiarScopeFeedForo(scope) {
  pluxForoFeedScope = scope || 'todos';
  renderizarComunidadForos();
}

function cambiarSubfiltroPlantillasDescubrir(sub) {
  pluxPlantillasSubFilter = sub || 'todas';
  renderizarComunidadForos();
}

function guardarPlantillaSincronizadaDesdeDescubrir() {
  const input = document.getElementById('syncInputNombrePlantilla');
  const chk = document.getElementById('syncChkPublicarComunidad');
  const mainInput = document.getElementById('nombrePlantilla');
  const mainChk = document.getElementById('chkPublicarComunidad');

  if (mainInput && input) mainInput.value = input.value;
  if (mainChk && chk) mainChk.checked = chk.checked;

  if (typeof window.guardarComoPlantilla === 'function') {
    window.guardarComoPlantilla();
    if (input) input.value = '';
    renderizarComunidadForos();
  }
}

function buscarEnPlantillasDescubrir(val) {
  pluxPlantillasBusqueda = val || '';
  renderizarComunidadForos();
  const input = document.getElementById('plantillasSearchInput');
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

function filtrarForoPorCategoria(cat) {
  pluxForoCategoriaActiva = cat || 'todas';
  renderizarComunidadForos();
}

function buscarEnForo(val) {
  pluxForoBusqueda = val || '';
  renderizarComunidadForos();
  const input = document.getElementById('foroSearchInput');
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

function cambiarOrdenForo(orden) {
  pluxForoOrden = orden || 'recientes';
  renderizarComunidadForos();
}

function toggleFormularioNuevoHilo() {
  const box = document.getElementById('foroNuevoHiloBox');
  if (!box) return;
  box.style.display = (box.style.display === 'none' || !box.style.display) ? 'block' : 'none';
}

function publicarNuevoHiloForo() {
  const cuenta = obtenerDatosCuentaSocialPlux();
  const titulo = document.getElementById('foroInputTitulo')?.value?.trim();
  const categoria = document.getElementById('foroInputCategoria')?.value || 'Consejos y Tips';
  const destino = document.getElementById('foroInputDestino')?.value?.trim() || 'General';
  const adjRaw = document.getElementById('foroInputAdjuntoSelect')?.value || '';
  const cuerpo = document.getElementById('foroInputCuerpo')?.value?.trim();
  const chkTpl = document.getElementById('foroChkPublicarPlantilla')?.checked;

  if (!titulo || !cuerpo) {
    if (typeof window.showToast === 'function') {
      window.showToast('Completa el título y el mensaje para publicar', 'error');
    }
    return;
  }

  let itinerarioAdjunto = '';
  let customDestinosAdjuntos = null;

  if (adjRaw.includes('|')) {
    const [key, label] = adjRaw.split('|');
    itinerarioAdjunto = label;
    if (key === 'actual' && cuenta.activeDests.length > 0) {
      customDestinosAdjuntos = JSON.parse(JSON.stringify(cuenta.activeDests));
      if (chkTpl && typeof window.guardarComoPlantilla === 'function') {
        const mainInput = document.getElementById('nombrePlantilla');
        if (mainInput) mainInput.value = titulo.slice(0, 50);
        window.guardarComoPlantilla();
      }
    } else if (key.startsWith('trip_')) {
      const idx = parseInt(key.replace('trip_', ''), 10);
      if (cuenta.savedTrips[idx]?.destinos) {
        customDestinosAdjuntos = JSON.parse(JSON.stringify(cuenta.savedTrips[idx].destinos));
      }
    } else if (key.startsWith('mia_')) {
      const idx = parseInt(key.replace('mia_', ''), 10);
      if (cuenta.savedTemplates[idx]?.destinos) {
        customDestinosAdjuntos = JSON.parse(JSON.stringify(cuenta.savedTemplates[idx].destinos));
      }
    }
  }

  const nuevoHilo = {
    id: 'hilo_' + Date.now(),
    categoria,
    destino,
    titulo,
    autor: cuenta.nickname,
    autorNombre: cuenta.fullname,
    autorCiudad: cuenta.location,
    autorEstilo: cuenta.travelStyle,
    autorNivel: cuenta.levelBadge,
    autorPhoto: cuenta.photo,
    fecha: 'Recién publicado',
    timestamp: Date.now(),
    votos: 1,
    cuerpo,
    itinerarioAdjunto,
    customDestinosAdjuntos,
    respuestas: []
  };

  const hilos = obtenerHilosForo();
  hilos.unshift(nuevoHilo);
  guardarHilosForo(hilos);
  pluxOpenThreads.add(nuevoHilo.id);

  try {
    if (typeof firebase !== 'undefined' && firebase.firestore) {
      firebase.firestore().collection('plux_foro_comunidad').doc(nuevoHilo.id).set(nuevoHilo).catch(() => {});
    }
  } catch (e) {}

  renderizarComunidadForos();
  if (typeof window.showToast === 'function') {
    window.showToast(`Publicado en la comunidad con tu cuenta @${cuenta.nickname}`, 'success');
  }
}

function clonarViajeAdjuntoDeHilo(hiloId) {
  const hilos = obtenerHilosForo();
  const h = hilos.find(x => x.id === hiloId);
  if (!h || !Array.isArray(h.customDestinosAdjuntos) || h.customDestinosAdjuntos.length === 0) return;

  destinos = JSON.parse(JSON.stringify(h.customDestinosAdjuntos));
  if (typeof renderDestinos === 'function') renderDestinos();
  if (typeof autoSave === 'function') autoSave();
  cerrarDescubrir();
  if (typeof empezar === 'function') empezar();
  if (typeof window.showToast === 'function') {
    window.showToast(`Ruta de @${h.autor} clonada a tu planificador`, 'success');
  }
}

function eliminarHiloForo(hiloId) {
  let hilos = obtenerHilosForo();
  hilos = hilos.filter(h => h.id !== hiloId);
  guardarHilosForo(hilos);

  try {
    if (typeof firebase !== 'undefined' && firebase.firestore) {
      firebase.firestore().collection('plux_foro_comunidad').doc(hiloId).delete().catch(() => {});
    }
  } catch (e) {}

  renderizarComunidadForos();
  if (typeof window.showToast === 'function') {
    window.showToast('Publicación eliminada', 'info');
  }
}

function toggleAmigoDesdeComunidad(nickAutor) {
  if (!nickAutor) return;
  const clean = nickAutor.replace(/^@/, '').trim().toLowerCase();
  let friends = (typeof getStoredFriends === 'function') ? getStoredFriends() : [];
  const exists = friends.some(f => String(f).replace(/^@/, '').trim().toLowerCase() === clean);

  if (exists) {
    friends = friends.filter(f => String(f).replace(/^@/, '').trim().toLowerCase() !== clean);
    if (typeof saveFriends === 'function') saveFriends(friends);
    else localStorage.setItem('Plux_Amigos', JSON.stringify(friends));
    if (typeof window.showToast === 'function') {
      window.showToast(`Dejaste de seguir a @${clean}`, 'info');
    }
  } else {
    friends.push(clean);
    if (typeof saveFriends === 'function') saveFriends(friends);
    else localStorage.setItem('Plux_Amigos', JSON.stringify(friends));
    if (typeof window.showToast === 'function') {
      window.showToast(`¡Agregaste a @${clean} a tu lista de Amigos de Plux!`, 'success');
    }
  }
  if (typeof renderAmigosList === 'function') renderAmigosList();
  renderizarComunidadForos();
}

function chatearConViajeroComunidad(nickAutor) {
  if (!nickAutor) return;
  const clean = nickAutor.replace(/^@/, '').trim();
  cerrarDescubrir();
  if (typeof window.iniciarChatConUsuario === 'function') {
    window.iniciarChatConUsuario(clean);
  } else if (typeof window.toggleSocialChat === 'function') {
    window.toggleSocialChat();
  }
}

function verPerfilSocialViajero(nickAutor) {
  if (!nickAutor) return;
  const clean = nickAutor.replace(/^@/, '').trim();
  const hilos = obtenerHilosForo();
  const postsAutor = hilos.filter(h => (h.autor || '').replace(/^@/, '').toLowerCase() === clean.toLowerCase());
  const sample = postsAutor[0] || {};
  const isFriend = esAmigoEnPlux(clean);
  const stMeta = PLUX_STYLE_LABELS[sample.autorEstilo || 'cultural'] || PLUX_STYLE_LABELS.cultural;

  const existing = document.getElementById('modal-plux-social-profile');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'modal-plux-social-profile';
  modal.style.cssText = 'position:fixed; inset:0; background:rgba(2,6,23,0.86); backdrop-filter:blur(8px); z-index:999999; display:flex; align-items:center; justify-content:center; padding:16px;';
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

  modal.innerHTML = `
    <div style="background:linear-gradient(145deg, #0f172a, #090d16); border:1px solid rgba(56,189,248,0.35); border-radius:22px; max-width:440px; width:100%; padding:24px; color:#fff; box-shadow:0 25px 70px rgba(0,0,0,0.85);">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div style="display:flex; align-items:center; gap:14px;">
          ${renderAvatarSocialHTML(clean, sample.autorPhoto || '', 58)}
          <div>
            <h3 style="margin:0; font-size:1.2rem; font-weight:800;">@${escapeHtml(clean)}</h3>
            <div style="font-size:0.82rem; color:var(--gris); margin-top:2px;">${escapeHtml(sample.autorNombre || clean)} · ${escapeHtml(sample.autorCiudad || 'Comunidad Plux')}</div>
            <span style="display:inline-block; margin-top:6px; font-size:0.72rem; font-weight:800; padding:3px 9px; border-radius:20px; background:rgba(16,185,129,0.16); color:var(--verde);">
              ${escapeHtml(sample.autorNivel || 'Viajero Verificado Plux')}
            </span>
          </div>
        </div>
        <button type="button" onclick="document.getElementById('modal-plux-social-profile').remove()" style="background:transparent; border:none; color:var(--gris); font-size:1.3rem; cursor:pointer;">&times;</button>
      </div>

      <div style="margin:16px 0; padding:12px 14px; background:rgba(255,255,255,0.03); border-radius:12px; border:1px solid rgba(255,255,255,0.07); font-size:0.84rem;">
        <div style="color:${stMeta.color}; font-weight:800; margin-bottom:4px;"><i class="fa-solid ${stMeta.icon}"></i> Estilo: ${escapeHtml(stMeta.label)}</div>
        <div style="color:#cbd5e1;">Publicaciones en la comunidad: <strong>${postsAutor.length}</strong> · Destinos compartidos: <strong>${postsAutor.map(p => p.destino).filter(Boolean).join(', ') || 'Varios'}</strong></div>
      </div>

      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button type="button" class="btn-card-primary" style="flex:1; padding:10px;" onclick="window.toggleAmigoDesdeComunidad('${escapeHtml(clean)}'); document.getElementById('modal-plux-social-profile').remove();">
          <i class="fa-solid ${isFriend ? 'fa-user-check' : 'fa-user-plus'}"></i> ${isFriend ? 'En tus Amigos' : 'Agregar a Amigos'}
        </button>
        <button type="button" class="btn-card-secondary" style="flex:1; padding:10px;" onclick="document.getElementById('modal-plux-social-profile').remove(); window.chatearConViajeroComunidad('${escapeHtml(clean)}');">
          <i class="fa-regular fa-paper-plane"></i> Enviar Mensaje
        </button>
        <button type="button" class="btn-card-secondary" style="padding:10px 12px;" onclick="document.getElementById('modal-plux-social-profile').remove(); if(typeof abrirDetalleAmigo==='function') abrirDetalleAmigo('${escapeHtml(clean)}');" title="Ver ficha completa de cuenta en Firestore">
          <i class="fa-solid fa-expand"></i>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function toggleRespuestasHilo(hiloId) {
  if (pluxOpenThreads.has(hiloId)) {
    pluxOpenThreads.delete(hiloId);
  } else {
    pluxOpenThreads.add(hiloId);
  }
  renderizarComunidadForos();
}

function votarHiloForo(hiloId) {
  const hilos = obtenerHilosForo();
  const votosMap = obtenerVotosForo();
  const hilo = hilos.find(h => h.id === hiloId);
  if (!hilo) return;

  if (votosMap[hiloId]) {
    delete votosMap[hiloId];
    hilo.votos = Math.max(0, (hilo.votos || 1) - 1);
  } else {
    votosMap[hiloId] = true;
    hilo.votos = (hilo.votos || 0) + 1;
  }

  localStorage.setItem(PLUX_FORO_VOTES_KEY, JSON.stringify(votosMap));
  guardarHilosForo(hilos);

  try {
    if (typeof firebase !== 'undefined' && firebase.firestore && !String(hiloId).startsWith('hilo_seed_')) {
      firebase.firestore().collection('plux_foro_comunidad').doc(hiloId).update({ votos: hilo.votos }).catch(() => {});
    }
  } catch (e) {}

  renderizarComunidadForos();
}

function publicarRespuestaHilo(hiloId) {
  const input = document.getElementById(`replyInput-${hiloId}`);
  const texto = input ? input.value.trim() : '';
  if (!texto) return;

  const cuenta = obtenerDatosCuentaSocialPlux();
  const hilos = obtenerHilosForo();
  const hilo = hilos.find(h => h.id === hiloId);
  if (!hilo) return;

  if (!Array.isArray(hilo.respuestas)) hilo.respuestas = [];

  hilo.respuestas.push({
    autor: cuenta.nickname,
    autorPhoto: cuenta.photo,
    autorEstilo: cuenta.travelStyle,
    fecha: 'Ahora mismo',
    texto
  });

  guardarHilosForo(hilos);

  try {
    if (typeof firebase !== 'undefined' && firebase.firestore && !String(hiloId).startsWith('hilo_seed_')) {
      firebase.firestore().collection('plux_foro_comunidad').doc(hiloId).update({ respuestas: hilo.respuestas }).catch(() => {});
    }
  } catch (e) {}

  pluxOpenThreads.add(hiloId);
  renderizarComunidadForos();

  if (typeof window.showToast === 'function') {
    window.showToast(`Comentario publicado como @${cuenta.nickname}`, 'success');
  }
}

function guardarHackEnViaje(textoTip, ciudad) {
  añadirDesdeFeed(`Tip Comunidad: ${textoTip.slice(0, 95)}`, 0, '30', ciudad);
}

// Exponer funciones en window
window.abrirImportadorParaDestino = abrirImportadorParaDestino;
window.abrirVouchersDelViaje = abrirVouchersDelViaje;
window.cambiarModoImportadorReserva = cambiarModoImportadorReserva;
window.cambiarTipoExpressReserva = cambiarTipoExpressReserva;
window.guardarReservaExpressDirecto = guardarReservaExpressDirecto;
window.renderizarImportadorReservas = renderizarImportadorReservas;
window.limpiarImportadorReserva = limpiarImportadorReserva;
window.resetImportadorEstadoPorCambioViaje = resetImportadorEstadoPorCambioViaje;
window.cambiarScopeWalletReservas = cambiarScopeWalletReservas;
window.quitarImagenReservaAdjunta = quitarImagenReservaAdjunta;
window.quitarImagenReservaIndividual = quitarImagenReservaIndividual;
window.reintentarImagenesFallidasReserva = reintentarImagenesFallidasReserva;
window.pegarPortapapelesReserva = pegarPortapapelesReserva;
window.manejarDropArchivoReserva = manejarDropArchivoReserva;
window.subirArchivoReserva = subirArchivoReserva;
window.analizarTextoReserva = analizarTextoReserva;
window.analizarReservaConIA = analizarReservaConIA;
window.renderizarTarjetasReservasDetectadas = renderizarTarjetasReservasDetectadas;
window.actualizarCampoReservaDetectada = actualizarCampoReservaDetectada;
window.actualizarFinanzasReservaDetectada = actualizarFinanzasReservaDetectada;
window.actualizarDetalleExtraReserva = actualizarDetalleExtraReserva;
window.agregarDetalleExtraReserva = agregarDetalleExtraReserva;
window.actualizarEtapaReservaDetectada = actualizarEtapaReservaDetectada;
window.eliminarEtapaReservaDetectada = eliminarEtapaReservaDetectada;
window.actualizarFechaReservaDetectada = actualizarFechaReservaDetectada;
window.guardarSoloEnWallet = guardarSoloEnWallet;
window.upsertBookingInTrip = upsertBookingInTrip;
window.importarReservaAlViaje = importarReservaAlViaje;
window.importarTodasLasReservas = importarTodasLasReservas;
window.sincronizarTodaLaWalletAlViaje = sincronizarTodaLaWalletAlViaje;
window.irAlItinerarioDesdeReservas = irAlItinerarioDesdeReservas;
window.filtrarWalletReservas = filtrarWalletReservas;
window.buscarEnWalletReservas = buscarEnWalletReservas;
window.verVoucherCompletoModal = verVoucherCompletoModal;
window.copiarCodigoPNR = copiarCodigoPNR;
window.copiarResumenVoucher = copiarResumenVoucher;
window.reinsertarReservaWallet = reinsertarReservaWallet;
window.eliminarReservaWallet = eliminarReservaWallet;

// Contrato JS oficial del importador (spec §4.2)
window.pluxImporterApi = {
  reconstructPageRows,
  intentarParsearCruceroOItinerario,
  computeBookingSyncKey,
  unificarResultadosImportacion,
  esTextoReservaValido,
  esReservaDetectadaValida,
  resetImportadorEstadoPorCambioViaje
};

window.renderizarComunidadForos = renderizarComunidadForos;
window.refrescarPlantillasSincronizadasDescubrir = refrescarPlantillasSincronizadasDescubrir;
window.cambiarSubtabComunidad = cambiarSubtabComunidad;
window.cambiarScopeFeedForo = cambiarScopeFeedForo;
window.cambiarSubfiltroPlantillasDescubrir = cambiarSubfiltroPlantillasDescubrir;
window.buscarEnPlantillasDescubrir = buscarEnPlantillasDescubrir;
window.guardarPlantillaSincronizadaDesdeDescubrir = guardarPlantillaSincronizadaDesdeDescubrir;
window.filtrarForoPorCategoria = filtrarForoPorCategoria;
window.buscarEnForo = buscarEnForo;
window.cambiarOrdenForo = cambiarOrdenForo;
window.toggleFormularioNuevoHilo = toggleFormularioNuevoHilo;
window.publicarNuevoHiloForo = publicarNuevoHiloForo;
window.clonarViajeAdjuntoDeHilo = clonarViajeAdjuntoDeHilo;
window.eliminarHiloForo = eliminarHiloForo;
window.toggleAmigoDesdeComunidad = toggleAmigoDesdeComunidad;
window.chatearConViajeroComunidad = chatearConViajeroComunidad;
window.verPerfilSocialViajero = verPerfilSocialViajero;
window.toggleRespuestasHilo = toggleRespuestasHilo;
window.votarHiloForo = votarHiloForo;
window.publicarRespuestaHilo = publicarRespuestaHilo;
window.guardarHackEnViaje = guardarHackEnViaje;
