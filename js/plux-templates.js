// ==========================================
// PLUX MODULE: TEMPLATES & COMMUNITY SEEDS
// ==========================================
    // ================== PLANTILLAS OFICIALES & COMUNIDAD ==================
    function getHeartSvg(isLiked) {
      if (isLiked) {
        return `<svg width="15" height="15" viewBox="0 0 24 24" fill="#f472b6" stroke="#f472b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
      }
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
    }

    const PLUX_OFICIAL_TEMPLATES = [
      {
        id: 'oficial_buenosaires',
        nombre: 'Buenos Aires Cultural & Gastronómico',
        descripcion: 'Obelisco, Caminito, San Telmo, La Bombonera, Cementerio de Recoleta, Puerto Madero y las mejores parrillas.',
        tags: ['3 Días', 'Tango & Asado', 'Sudamérica'],
        presupuestoAprox: '120€',
        likes: 412,
        destinos: [
          {
            nombre: 'Buenos Aires',
            dias: [
              {
                eventos: [
                  { hora: '10:00', titulo: 'Obelisco & Recorrido por Av. Corrientes', notas: 'Caminata por el centro y teatros tradicionales', costo: 0, duracion: 90 },
                  { hora: '13:00', titulo: 'Almuerzo Pizzería Güerrín', notas: 'Pizza tradicional al molde porteña', costo: 15, duracion: 60 },
                  { hora: '16:00', titulo: 'Teatro Colón & Plaza de Mayo', notas: 'Visita guiada por el teatro neoclásico', costo: 12, duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '10:30', titulo: 'Caminito & Paseo por La Boca', notas: 'Conventillos multicolor y show de tango al aire libre', costo: 0, duracion: 120 },
                  { hora: '13:00', titulo: 'Estadio La Bombonera', notas: 'Tour por el museo del club Boca Juniors', costo: 18, duracion: 90 },
                  { hora: '20:30', titulo: 'Cena en Parrilla Don Julio', notas: 'Asado argentino y carne a la parrilla', costo: 45, duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '11:00', titulo: 'Cementerio de Recoleta & El Ateneo Splendid', notas: 'Librería histórica en un teatro antiguo', costo: 5, duracion: 120 },
                  { hora: '16:00', titulo: 'Puerto Madero & Puente de la Mujer', notas: 'Paseo por los diques al atardecer', costo: 0, duracion: 90 },
                  { hora: '21:00', titulo: 'Show de Tango & Cena', notas: 'Espectáculo de tango rioplatense', costo: 50, duracion: 150 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_roma',
        nombre: 'Roma Imperial & Vaticano',
        descripcion: 'Coliseo, Trastevere, Vaticano, Panteón y Fontana di Trevi con itinerario optimizado.',
        tags: ['3 Días', 'Historia & Arte', 'Europa'],
        presupuestoAprox: '180€',
        likes: 384,
        destinos: [
          {
            nombre: 'Roma',
            dias: [
              {
                eventos: [
                  { hora: '09:00', titulo: 'Coliseo Romano & Foro Romano', notas: 'Visita arqueológica imperial y ruinas', costo: '18', duracion: 180 },
                  { hora: '13:30', titulo: 'Almuerzo tradicional en Trastevere', notas: 'Pasta carbonara artesanal en trattoria romana', costo: '25', duracion: 90 },
                  { hora: '16:30', titulo: 'Panteón de Agripa', notas: 'El templo romano mejor conservado', costo: '5', duracion: 60 }
                ]
              },
              {
                eventos: [
                  { hora: '08:30', titulo: 'Museos Vaticanos & Basílica de San Pedro', notas: 'Cúpula panorámica y arte sacro', costo: '25', duracion: 210 },
                  { hora: '12:30', titulo: 'Capilla Sixtina', notas: 'Frescos de Miguel Ángel', costo: '0', duracion: 60 },
                  { hora: '18:00', titulo: 'Fontana di Trevi al atardecer', notas: 'Tradición de lanzar la moneda a la fuente', costo: '0', duracion: 60 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Plaza de España & Villa Borghese', notas: 'Paseo por los jardines renacentistas', costo: '0', duracion: 120 },
                  { hora: '15:00', titulo: 'Castillo de Sant\'Angelo', notas: 'Vistas panorámicas sobre el río Tíber', costo: '15', duracion: 90 },
                  { hora: '20:30', titulo: 'Cena en Campo de\' Fiori', notas: 'Pizza romana y ambiente nocturno', costo: '22', duracion: 120 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_paris',
        nombre: 'París Clásico & Bohemio',
        descripcion: 'Torre Eiffel, Louvre, Sena, Montmartre, Sacré-Cœur y gastronomía parisina.',
        tags: ['3 Días', 'Romántico & Cultura', 'Europa'],
        presupuestoAprox: '220€',
        likes: 420,
        destinos: [
          {
            nombre: 'París',
            dias: [
              {
                eventos: [
                  { hora: '09:30', titulo: 'Torre Eiffel & Jardines del Trocadero', notas: 'Mirador panorámico y sesión de fotos', costo: '30', duracion: 120 },
                  { hora: '13:00', titulo: 'Almuerzo en Café de Flore', notas: 'Gastronomía tradicional en Saint-Germain', costo: '35', duracion: 90 },
                  { hora: '16:30', titulo: 'Paseo en barco por el Río Sena', notas: 'Navegación al atardecer frente a Notre-Dame', costo: '18', duracion: 75 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Museo del Louvre & Pirámide de Cristal', notas: 'La Gioconda, Venus de Milo y antigüedades', costo: '22', duracion: 180 },
                  { hora: '14:00', titulo: 'Jardín de las Tullerías', notas: 'Caminata relajante y café al aire libre', costo: '0', duracion: 60 },
                  { hora: '19:30', titulo: 'Montmartre & Basílica del Sacré-Cœur', notas: 'Barrio de pintores y vistas nocturnas', costo: '0', duracion: 150 }
                ]
              },
              {
                eventos: [
                  { hora: '10:30', titulo: 'Arco del Triunfo y Campos Elíseos', notas: 'Subida al mirador superior', costo: '16', duracion: 120 },
                  { hora: '15:00', titulo: 'Sainte-Chapelle & Barrio Latino', notas: 'Vitrales góticos deslumbrantes', costo: '13', duracion: 90 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_tokio',
        nombre: 'Tokio Tradicional & Futurista',
        descripcion: 'Shibuya Sky, templos sagrados de Asakusa, cultura anime en Akihabara y noche en Shinjuku.',
        tags: ['3 Días', 'Tecnología & Tradición', 'Asia'],
        presupuestoAprox: '150€',
        likes: 512,
        destinos: [
          {
            nombre: 'Tokio',
            dias: [
              {
                eventos: [
                  { hora: '09:30', titulo: 'Cruce de Shibuya & Estatua de Hachiko', notas: 'El paso peatonal más concurrido del mundo', costo: '0', duracion: 90 },
                  { hora: '13:00', titulo: 'Ramen artesanal en Ichiran', notas: 'Fideos tonkotsu auténticos en cabinas individuales', costo: '12', duracion: 60 },
                  { hora: '17:00', titulo: 'Mirador Shibuya Sky', notas: 'Puesta de sol y skyline futurista 360°', costo: '20', duracion: 90 }
                ]
              },
              {
                eventos: [
                  { hora: '09:00', titulo: 'Templo Senso-ji & Calle Nakamise', notas: 'El templo budista más antiguo de Tokio', costo: '0', duracion: 120 },
                  { hora: '13:30', titulo: 'Parque Ueno', notas: 'Naturaleza y santuarios históricos', costo: '0', duracion: 90 },
                  { hora: '16:00', titulo: 'Akihabara Electric Town', notas: 'Electrónica, manga y videojuegos retro', costo: '0', duracion: 180 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Santuario Meiji Jingu en Harajuku', notas: 'Bosque sagrado y puertas Torii gigantes', costo: '0', duracion: 90 },
                  { hora: '12:30', titulo: 'Calle Takeshita', notas: 'Moda urbana y crepes japoneses', costo: '8', duracion: 90 },
                  { hora: '19:30', titulo: 'Omoide Yokocho & Callejones de Shinjuku', notas: 'Yakitori y neones de Tokio nocturno', costo: '30', duracion: 150 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_nuevayork',
        nombre: 'Nueva York Iconos de Manhattan',
        descripcion: 'Times Square, Central Park, Broadway, Estatua de la Libertad, Brooklyn Bridge y High Line.',
        tags: ['3 Días', 'Urbano & Skyline', 'América'],
        presupuestoAprox: '290€',
        likes: 367,
        destinos: [
          {
            nombre: 'Nueva York',
            dias: [
              {
                eventos: [
                  { hora: '10:00', titulo: 'Times Square & Midtown', notas: 'Paseo entre rascacielos y teatros', costo: '0', duracion: 90 },
                  { hora: '14:00', titulo: 'Central Park & Bethesda Terrace', notas: 'Caminata por el parque y fotos icónicas', costo: '0', duracion: 120 },
                  { hora: '19:30', titulo: 'Musical de Broadway', notas: 'Espectáculo teatral en vivo', costo: '95', duracion: 150 }
                ]
              },
              {
                eventos: [
                  { hora: '09:00', titulo: 'Estatua de la Libertad & Ellis Island', notas: 'Ferry histórico y monumento nacional', costo: '25', duracion: 210 },
                  { hora: '14:00', titulo: 'Wall Street & 9/11 Memorial', notas: 'Distrito financiero y monumento conmemorativo', costo: '0', duracion: 120 },
                  { hora: '17:30', titulo: 'Mirador One World Observatory', notas: 'Vistas panorámicas del atardecer', costo: '44', duracion: 90 }
                ]
              },
              {
                eventos: [
                  { hora: '10:30', titulo: 'Puente de Brooklyn & DUMBO', notas: 'Cruce a pie con vistas al skyline', costo: '0', duracion: 120 },
                  { hora: '13:30', titulo: 'Almuerzo en Time Out Market', notas: 'Puestos gastronómicos en Brooklyn', costo: '25', duracion: 90 },
                  { hora: '16:30', titulo: 'High Line & Hudson Yards', notas: 'Parque elevado sobre antiguas vías de tren', costo: '0', duracion: 90 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_barcelona',
        nombre: 'Barcelona Modernista & Mediterráneo',
        descripcion: 'Sagrada Familia, Park Güell, Barrio Gótico, tapas en El Born y playa de la Barceloneta.',
        tags: ['3 Días', 'Arquitectura & Playa', 'Europa'],
        presupuestoAprox: '160€',
        likes: 295,
        destinos: [
          {
            nombre: 'Barcelona',
            dias: [
              {
                eventos: [
                  { hora: '09:30', titulo: 'Basílica de la Sagrada Familia', notas: 'Obra cumbre de Antoni Gaudí', costo: '26', duracion: 150 },
                  { hora: '13:00', titulo: 'Passeig de Gràcia & Casa Batlló', notas: 'Fachadas modernistas emblemáticas', costo: '30', duracion: 90 },
                  { hora: '20:00', titulo: 'Ruta de Tapas en El Born', notas: 'Tapas tradicionales catalanas y vino', costo: '25', duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Park Güell & Banco Ondulante', notas: 'Vistas panorámicas hacia el mar', costo: '10', duracion: 120 },
                  { hora: '14:30', titulo: 'Barrio Gótico & Catedral', notas: 'Calles medievales y plazas históricas', costo: '0', duracion: 120 },
                  { hora: '17:00', titulo: 'Mercado de la Boquería', notas: 'Frutas frescas y gastronomía local', costo: '10', duracion: 60 }
                ]
              },
              {
                eventos: [
                  { hora: '11:00', titulo: 'Playa de la Barceloneta', notas: 'Paseo marítimo y brisa mediterránea', costo: '0', duracion: 120 },
                  { hora: '16:30', titulo: 'Mirador de Montjuïc', notas: 'Vistas panorámicas sobre el puerto', costo: '0', duracion: 120 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_londres',
        nombre: 'Londres Real, Museos & Támesis',
        descripcion: 'Big Ben, London Eye, British Museum, Camden Town, Tower Bridge y Covent Garden.',
        tags: ['3 Días', 'Monarquía & Museos', 'Europa'],
        presupuestoAprox: '240€',
        likes: 310,
        destinos: [
          {
            nombre: 'Londres',
            dias: [
              {
                eventos: [
                  { hora: '09:30', titulo: 'Big Ben, Palacio de Westminster & London Eye', notas: 'Paseo por Westminster Bridge y fotos icónicas', costo: '35', duracion: 150 },
                  { hora: '13:30', titulo: 'Almuerzo en Covent Garden', notas: 'Mercado histórico y artistas callejeros', costo: '22', duracion: 90 },
                  { hora: '16:00', titulo: 'Museo Británico (British Museum)', notas: 'Piedra de Rosetta y momias egipcias', costo: '0', duracion: 150 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Tower Bridge & Torre de Londres', notas: 'Joyas de la corona y puente levadizo', costo: '33', duracion: 180 },
                  { hora: '14:00', titulo: 'Borough Market', notas: 'Street food internacional y quesos británicos', costo: '18', duracion: 90 },
                  { hora: '17:00', titulo: 'Tate Modern & Paseo Millennium Bridge', notas: 'Arte moderno con vistas a St. Paul', costo: '0', duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Cambio de Guardia en Buckingham Palace', notas: 'Ceremonia militar real', costo: '0', duracion: 120 },
                  { hora: '14:30', titulo: 'Camden Market & Regent\'s Canal', notas: 'Tiendas vintage, música y comida alternativa', costo: '15', duracion: 180 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_bariloche',
        nombre: 'Bariloche & Lagos Andinos',
        descripcion: 'Circuito Chico, Cerro Campanario, Colonia Suiza, chocolaterías y Lago Nahuel Huapi.',
        tags: ['3 Días', 'Naturaleza & Montaña', 'Patagonia'],
        presupuestoAprox: '140€',
        likes: 275,
        destinos: [
          {
            nombre: 'San Carlos de Bariloche',
            dias: [
              {
                eventos: [
                  { hora: '09:30', titulo: 'Circuito Chico & Punto Panorámico', notas: 'Recorrido por bosques y lagos patagónicos', costo: '0', duracion: 150 },
                  { hora: '13:00', titulo: 'Cerro Campanario', notas: 'Ascenso en aerosilla con las 7 mejores vistas del mundo', costo: '12', duracion: 90 },
                  { hora: '17:00', titulo: 'Chocolaterías en Centro Cívico', notas: 'Degustación de chocolate en rama artesanal', costo: '15', duracion: 90 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Cerro Catedral & Villa Catedral', notas: 'Centro de esquí y caminatas de montaña', costo: '18', duracion: 180 },
                  { hora: '14:30', titulo: 'Colonia Suiza & Curanto Tradicional', notas: 'Feria de artesanos y comida cocida bajo tierra', costo: '22', duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Navegación Puerto Blest & Cascada de los Cántaros', notas: 'Excursión lacustre en el Lago Nahuel Huapi', costo: '45', duracion: 240 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_amsterdam',
        nombre: 'Ámsterdam Canales & Molinos',
        descripcion: 'Rijksmuseum, Casa de Ana Frank, crucero por canales, Barrio Jordaan y Zaanse Schans.',
        tags: ['3 Días', 'Canales & Cultura', 'Europa'],
        presupuestoAprox: '190€',
        likes: 248,
        destinos: [
          {
            nombre: 'Ámsterdam',
            dias: [
              {
                eventos: [
                  { hora: '09:30', titulo: 'Museo Van Gogh & Museumplein', notas: 'Los Girasoles y autorretratos de Van Gogh', costo: '22', duracion: 120 },
                  { hora: '13:00', titulo: 'Paseo en barco por los canales', notas: 'Patrimonio de la Humanidad UNESCO', costo: '18', duracion: 75 },
                  { hora: '16:00', titulo: 'Barrio Jordaan & Casa de Ana Frank', notas: 'Calles pintorescas y memoria histórica', costo: '16', duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Rijksmuseum & La Ronda de Noche', notas: 'Obras maestras de Rembrandt y Vermeer', costo: '25', duracion: 150 },
                  { hora: '14:00', titulo: 'Vondelpark & Alquiler de bicicleta', notas: 'Paseo en dos ruedas por el parque central', costo: '12', duracion: 90 }
                ]
              },
              {
                eventos: [
                  { hora: '09:30', titulo: 'Excursión a Zaanse Schans', notas: 'Molinos de viento de madera y queserías', costo: '15', duracion: 210 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_madrid',
        nombre: 'Madrid Histórico & Tapas',
        descripcion: 'Plaza Mayor, Museo del Prado, Parque del Retiro, Gran Vía y La Latina.',
        tags: ['3 Días', 'Cultura & Tapas', 'Europa'],
        presupuestoAprox: '130€',
        likes: 285,
        destinos: [
          {
            nombre: 'Madrid',
            dias: [
              {
                eventos: [
                  { hora: '09:30', titulo: 'Puerta del Sol & Plaza Mayor', notas: 'Bocadillo de calamares y centro histórico', costo: '8', duracion: 120 },
                  { hora: '13:00', titulo: 'Mercado de San Miguel', notas: 'Pinchos gourmet y tapeo madrileño', costo: '20', duracion: 90 },
                  { hora: '16:00', titulo: 'Palacio Real & Jardines de Sabatini', notas: 'Visita a los salones reales', costo: '14', duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Museo Nacional del Prado', notas: 'Obras maestras de Velázquez y Goya', costo: '15', duracion: 150 },
                  { hora: '14:00', titulo: 'Parque de El Retiro & Palacio de Cristal', notas: 'Paseo en barca por el estanque', costo: '6', duracion: 120 },
                  { hora: '18:30', titulo: 'Gran Vía & Barrio de Malasaña', notas: 'Teatros, arquitectura y cafés bohemios', costo: '0', duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '11:00', titulo: 'Barrio de las Letras & Casa de Cervantes', notas: 'Calles con citas literarias doradas', costo: '0', duracion: 90 },
                  { hora: '17:30', titulo: 'Templo de Debod al atardecer', notas: 'Monumento egipcio original con vistas a la sierra', costo: '0', duracion: 90 },
                  { hora: '20:30', titulo: 'Ruta de Tapas en La Latina', notas: 'Cena de tapas en la calle Cava Baja', costo: '25', duracion: 120 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_cancun',
        nombre: 'Cancún, Cenotes & Riviera Maya',
        descripcion: 'Playas caribeñas de arena blanca, zona arqueológica de Tulum, Chichén Itzá y cenotes sagrados.',
        tags: ['4 Días', 'Caribe & Historia Maya', 'México'],
        presupuestoAprox: '210€',
        likes: 345,
        destinos: [
          {
            nombre: 'Cancún',
            dias: [
              {
                eventos: [
                  { hora: '10:00', titulo: 'Playa Delfines & Mirador de Cancún', notas: 'Foto icónica en las letras y playa turquesa', costo: '0', duracion: 120 },
                  { hora: '14:00', titulo: 'Almuerzo Mariscos en Puerto Juárez', notas: 'Tacos de pescado y ceviche caribeño', costo: '18', duracion: 90 },
                  { hora: '18:00', titulo: 'Paseo en Catamarán a Isla Mujeres', notas: 'Navegación al atardecer por aguas cristalinas', costo: '45', duracion: 180 }
                ]
              },
              {
                eventos: [
                  { hora: '08:00', titulo: 'Excursión a Chichén Itzá & Pirámide de Kukulcán', notas: 'Maravilla del Mundo Moderno y templo maya', costo: '35', duracion: 240 },
                  { hora: '14:30', titulo: 'Nado en Cenote Ik Kil', notas: 'Cenote sagrado subterráneo con aguas turquesas', costo: '15', duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '09:30', titulo: 'Ruinas de Tulum sobre el Acantilado', notas: 'Zona arqueológica maya frente al mar Caribe', costo: '12', duracion: 180 },
                  { hora: '15:00', titulo: 'Playa Paraíso & Snorkel en Arrecife', notas: 'Tortugas marinas y arrecife de coral', costo: '25', duracion: 150 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_miami',
        nombre: 'Miami Art Deco & South Beach',
        descripcion: 'Ocean Drive, Wynwood Walls, Little Havana, compras en Lincoln Road y paseo por Biscayne Bay.',
        tags: ['3 Días', 'Playa & Arte Urbano', 'Estados Unidos'],
        presupuestoAprox: '270€',
        likes: 290,
        destinos: [
          {
            nombre: 'Miami',
            dias: [
              {
                eventos: [
                  { hora: '10:00', titulo: 'Paseo Art Deco en Ocean Drive & South Beach', notas: 'Arquitectura neón icónica de los años 30', costo: '0', duracion: 120 },
                  { hora: '13:30', titulo: 'Almuerzo en Lincoln Road Mall', notas: 'Paseo peatonal y terrazas al aire libre', costo: '30', duracion: 90 },
                  { hora: '17:00', titulo: 'South Pointe Park Pier al atardecer', notas: 'Mirador de cruceros y skyline de Miami Beach', costo: '0', duracion: 90 }
                ]
              },
              {
                eventos: [
                  { hora: '10:30', titulo: 'Wynwood Walls & Distrito de Arte', notas: 'Murales gigantes de graffiti y galerías urbanas', costo: '12', duracion: 150 },
                  { hora: '14:00', titulo: 'Little Havana & Calle Ocho', notas: 'Café cubano, sándwich cubano y música en vivo', costo: '18', duracion: 120 },
                  { hora: '18:00', titulo: 'Paseo en barco por las Mansiones de Biscayne', notas: 'Star Island y vistas a Downtown Miami', costo: '32', duracion: 90 }
                ]
              },
              {
                eventos: [
                  { hora: '09:30', titulo: 'Parque Nacional de los Everglades', notas: 'Paseo en hidrodeslizador y avistamiento de caimanes', costo: '38', duracion: 210 },
                  { hora: '16:00', titulo: 'Bayside Marketplace & Noria Skyviews', notas: 'Compras y vistas panorámicas de la bahía', costo: '20', duracion: 120 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_santiago',
        nombre: 'Santiago & Cordillera de los Andes',
        descripcion: 'Cerro San Cristóbal, Sky Costanera, Palacio de La Moneda y escapada a Valparaíso y Viña del Mar.',
        tags: ['3 Días', 'Montaña & Costa Pacífica', 'Chile'],
        presupuestoAprox: '140€',
        likes: 215,
        destinos: [
          {
            nombre: 'Santiago de Chile',
            dias: [
              {
                eventos: [
                  { hora: '09:30', titulo: 'Plaza de Armas & Palacio de La Moneda', notas: 'Centro cívico e histórico de Santiago', costo: '0', duracion: 120 },
                  { hora: '13:00', titulo: 'Almuerzo en Barrio Lastarria', notas: 'Cafés gourmet y gastronomía chilena', costo: '20', duracion: 90 },
                  { hora: '16:30', titulo: 'Cerro San Cristóbal & Teleférico', notas: 'Vistas panorámicas hacia la Cordillera de los Andes', costo: '8', duracion: 120 },
                  { hora: '19:30', titulo: 'Mirador Sky Costanera', notas: 'Piso 62 del rascacielos más alto de Sudamérica', costo: '18', duracion: 90 }
                ]
              },
              {
                eventos: [
                  { hora: '09:00', titulo: 'Excursión a Valparaíso & Cerros Alegre y Concepción', notas: 'Funiculares históricos, casas multicolor y arte callejero', costo: '25', duracion: 240 },
                  { hora: '15:00', titulo: 'Paseo por Viña del Mar & Reloj de Flores', notas: 'Costanera pacífica y playas', costo: '0', duracion: 150 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'Tour de Vinos en Valle del Maipo (Concha y Toro)', notas: 'Cata y leyenda del Casillero del Diablo', costo: '30', duracion: 180 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'oficial_berlin',
        nombre: 'Berlín Histórico & Vanguardista',
        descripcion: 'Puerta de Brandeburgo, Muro de Berlín (East Side Gallery), Isla de los Museos y Alexanderplatz.',
        tags: ['3 Días', 'Historia Moderna & Underground', 'Alemania'],
        presupuestoAprox: '170€',
        likes: 260,
        destinos: [
          {
            nombre: 'Berlín',
            dias: [
              {
                eventos: [
                  { hora: '09:30', titulo: 'Puerta de Brandeburgo & Edificio del Reichstag', notas: 'Cúpula de cristal de Norman Foster', costo: '0', duracion: 150 },
                  { hora: '13:00', titulo: 'Monumento al Holocausto & Checkpoint Charlie', notas: 'Puntos emblemáticos de la Guerra Fría', costo: '0', duracion: 120 },
                  { hora: '17:00', titulo: 'Potsdamer Platz & Sony Center', notas: 'Arquitectura futurista y cúpula iluminada', costo: '0', duracion: 90 }
                ]
              },
              {
                eventos: [
                  { hora: '10:00', titulo: 'East Side Gallery & Muro de Berlín', notas: 'El tramo más largo del muro conservado con graffitis', costo: '0', duracion: 120 },
                  { hora: '13:30', titulo: 'Currywurst tradicional en Kreuzberg', notas: 'Gastronomía callejera berlinesa', costo: '8', duracion: 60 },
                  { hora: '15:30', titulo: 'Isla de los Museos & Museo de Pérgamo', notas: 'Patrimonio de la Humanidad UNESCO', costo: '19', duracion: 180 }
                ]
              },
              {
                eventos: [
                  { hora: '10:30', titulo: 'Alexanderplatz & Torre de Televisión (Fernsehturm)', notas: 'Mirador 360° sobre toda la ciudad', costo: '24', duracion: 120 },
                  { hora: '15:00', titulo: 'Barrio Hackescher Markt & Patios Secretos', notas: 'Tiendas de diseño, galerías y cafés', costo: '0', duracion: 150 }
                ]
              }
            ]
          }
        ]
      }
    ];

    const PLUX_COMUNIDAD_SEEDS = [
      {
        id: 'com_mendoza',
        nombre: 'Ruta del Vino y Montañas en Mendoza',
        autor: 'mateo_viajes',
        isExperienced: true,
        likes: 98,
        destacada: true,
        descripcion: 'Bodegas de Luján de Cuyo, degustaciones de Malbec y trekking en Cordillera de los Andes.',
        tags: ['4 Días', 'Enoturismo & Montaña', 'Argentina'],
        destinos: [
          {
            nombre: 'Mendoza',
            dias: [
              {
                eventos: [
                  { hora: '10:00', titulo: 'Bodega Catena Zapata & Degustación', notas: 'Tour guiado por viñedos y cata premium', costo: '35', duracion: 150 },
                  { hora: '13:30', titulo: 'Almuerzo de 5 pasos en bodega', notas: 'Maridaje con vinos de autor', costo: '50', duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '09:00', titulo: 'Excursión Alta Montaña & Puente del Inca', notas: 'Vistas panorámicas del Cerro Aconcagua', costo: '30', duracion: 300 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'com_amalfi',
        nombre: 'Costa Amalfitana & Capri Express',
        autor: 'sofia_globetrotter',
        isExperienced: true,
        likes: 142,
        destacada: true,
        descripcion: 'Positano, Amalfi, senderos sobre el mar y excursión en barco a la Gruta Azul de Capri.',
        tags: ['3 Días', 'Costa & Vistas', 'Italia'],
        destinos: [
          {
            nombre: 'Positano',
            dias: [
              {
                eventos: [
                  { hora: '10:00', titulo: 'Playa Grande & Casas Colgantes de Positano', notas: 'Vistas panorámicas de la costa', costo: '0', duracion: 120 },
                  { hora: '14:00', titulo: 'Ferry a Amalfi & Catedral de San Andrés', notas: 'Plaza medieval y limoncello artesanal', costo: '12', duracion: 150 }
                ]
              },
              {
                eventos: [
                  { hora: '09:00', titulo: 'Excursión en Barco a la Isla de Capri', notas: 'Gruta Azul y Farallones de Capri', costo: '45', duracion: 240 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'com_cusco',
        nombre: 'Cusco Mágico & Machu Picchu',
        autor: 'carla_nomad',
        isExperienced: true,
        likes: 115,
        destacada: true,
        descripcion: 'Plaza de Armas de Cusco, Sacsayhuamán, Mercado de Pisac y tren a la ciudadela de Machu Picchu.',
        tags: ['3 Días', 'Historia Inca & Montaña', 'Perú'],
        destinos: [
          {
            nombre: 'Cusco',
            dias: [
              {
                eventos: [
                  { hora: '10:00', titulo: 'Plaza de Armas & Barrio San Blas', notas: 'Calles empedradas y talleres de artesanos', costo: '0', duracion: 120 },
                  { hora: '14:30', titulo: 'Fortaleza de Sacsayhuamán', notas: 'Muros megalíticos incas', costo: '18', duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '09:00', titulo: 'Valle Sagrado & Mercado de Pisac', notas: 'Ruinas y textiles andinos', costo: '20', duracion: 210 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'com_rio',
        nombre: 'Fin de Semana en Río & Copacabana',
        autor: 'lucas_viajero',
        isExperienced: false,
        likes: 54,
        destacada: false,
        descripcion: 'Cristo Redentor, Pan de Azúcar, paseo por Ipanema y atardecer en Arpoador.',
        tags: ['3 Días', 'Playas & Samba', 'Brasil'],
        destinos: [
          {
            nombre: 'Río de Janeiro',
            dias: [
              {
                eventos: [
                  { hora: '09:00', titulo: 'Cristo Redentor en el Cerro del Corcovado', notas: 'Tren del Corcovado y mirador', costo: '22', duracion: 150 },
                  { hora: '15:30', titulo: 'Teleférico del Pan de Azúcar', notas: 'Vistas de la Bahía de Guanabara al atardecer', costo: '25', duracion: 120 }
                ]
              },
              {
                eventos: [
                  { hora: '11:00', titulo: 'Playa de Ipanema & Puesto 9', notas: 'Paseo en bicicleta y agua de coco', costo: '5', duracion: 120 },
                  { hora: '18:00', titulo: 'Atardecer en la Piedra de Arpoador', notas: 'Aplauso tradicional al sol cayendo en el mar', costo: '0', duracion: 60 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'com_sansebastian',
        nombre: 'Escapada Gastronómica a San Sebastián',
        autor: null,
        isExperienced: false,
        likes: 36,
        destacada: false,
        descripcion: 'Ruta de pintxos por la Parte Vieja, Playa de la Concha y Monte Igueldo.',
        tags: ['2 Días', 'Gastronomía & Mar', 'España'],
        destinos: [
          {
            nombre: 'San Sebastián',
            dias: [
              {
                eventos: [
                  { hora: '12:00', titulo: 'Paseo por la Playa de La Concha', notas: 'Bahía emblemática y paseo marítimo', costo: '0', duracion: 90 },
                  { hora: '20:00', titulo: 'Ruta de Pintxos en la Parte Vieja', notas: 'Gilda, txangurro y tarta de queso de La Viña', costo: '30', duracion: 150 }
                ]
              }
            ]
          }
        ]
      }
    ];

    let filtroComunidadActual = 'todas';
    let firestoreCommunityTemplates = [];
    let unsubscribeCommunityTemplates = null;

    function getLikedTemplatesSet() {
      try {
        return new Set(JSON.parse(localStorage.getItem('Plux_Template_Likes') || '[]'));
      } catch (e) {
        return new Set();
      }
    }

    function saveLikedTemplatesSet(set) {
      localStorage.setItem('Plux_Template_Likes', JSON.stringify(Array.from(set)));
    }

    function initCommunityTemplatesListener() {
      if (!db && typeof firebase !== 'undefined' && firebase.firestore) {
        db = firebase.firestore();
      }
      if (!db) return;
      if (unsubscribeCommunityTemplates) {
        try { unsubscribeCommunityTemplates(); } catch(e) {}
      }
      try {
        unsubscribeCommunityTemplates = db.collection("plux_plantillas_comunidad")
          .limit(80)
          .onSnapshot((snapshot) => {
            const list = [];
            snapshot.forEach(doc => {
              const data = doc.data();
              if (data && data.nombre) {
                list.push({ ...data, id: doc.id });
              }
            });
            firestoreCommunityTemplates = list;
            renderPlantillasComunidad();
          }, (err) => {
            console.warn("Snapshot error en plantillas comunidad:", err);
          });
      } catch(e) {
        console.warn("Error inicializando listener de plantillas comunidad:", e);
      }
    }
    window.initCommunityTemplatesListener = initCommunityTemplatesListener;

    function isExperiencedCreator(autorNick) {
      if (!autorNick) return false;
      const clean = autorNick.toLowerCase().replace('@', '').trim();
      const verifiedList = ['mateo_viajes', 'sofia_globetrotter', 'carla_nomad', 'plux_team', 'admin'];
      if (verifiedList.includes(clean)) return true;
      const myTemplates = getStoredTemplates();
      if (clean === (currentNickname || '').toLowerCase() && myTemplates.length >= 2) return true;
      return false;
    }

    function getCreatorBadgeHtml(autor, isExperienced = false) {
      if (!autor || autor === 'Viajero Anónimo') {
        return `<span class="tpl-author" style="color:var(--gris);">Viajero Anónimo</span>`;
      }
      const clean = autor.replace('@', '');
      const hasStar = isExperienced || isExperiencedCreator(clean);
      return `<span class="tpl-author">@${escapeHtml(clean)} ${hasStar ? '<span class="star-badge" title="Creador experimentado de Plux (múltiples plantillas)">⭐</span>' : ''}</span>`;
    }

    const INDEXNOW_KEY = 'dc826f48264d48e9b0c4f208eebc4963';
    const INDEXNOW_KEY_LOCATION = 'https://plux.nibecarcofeben.com/dc826f48264d48e9b0c4f208eebc4963.txt';

    function notificarIndexNow(targetUrl) {
      if (!targetUrl) return;
      try {
        const encUrl = encodeURIComponent(targetUrl);
        const encLoc = encodeURIComponent(INDEXNOW_KEY_LOCATION);
        const bingUrl = `https://www.bing.com/indexnow?url=${encUrl}&key=${INDEXNOW_KEY}&keyLocation=${encLoc}`;
        const apiNowUrl = `https://api.indexnow.org/indexnow?url=${encUrl}&key=${INDEXNOW_KEY}&keyLocation=${encLoc}`;

        if (typeof fetch === 'function') {
          fetch(bingUrl, { method: 'GET', mode: 'no-cors' }).catch(() => {});
          fetch(apiNowUrl, { method: 'GET', mode: 'no-cors' }).catch(() => {});
        } else if (typeof Image !== 'undefined') {
          new Image().src = bingUrl;
          new Image().src = apiNowUrl;
        }
        console.log('[IndexNow] Despacho automatico enviado a Bing para:', targetUrl);
      } catch (err) {
        console.warn('[IndexNow] Error despachando URL:', err);
      }
    }
    window.notificarIndexNow = notificarIndexNow;

    function compartirPlantillaPublica(id, nombre, event) {
      if (event) event.stopPropagation();
      const shareUrl = `https://plux.nibecarcofeben.com/join/plantillas/${id}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast(`Enlace de plantilla copiado: ${shareUrl}`, 'success');
        }).catch(() => {
          prompt('Copia el enlace de esta plantilla:', shareUrl);
        });
      } else {
        prompt('Copia el enlace de esta plantilla:', shareUrl);
      }
    }
    window.compartirPlantillaPublica = compartirPlantillaPublica;

    function switchPlantillasSubtab(subtabName) {
      const subtabs = ['oficiales', 'comunidad', 'mias'];
      subtabs.forEach(name => {
        const btn = document.getElementById(`btnSubtab${name.charAt(0).toUpperCase() + name.slice(1)}`);
        const pane = document.getElementById(`subtab-plantillas-${name}`);
        if (btn) btn.classList.toggle('active', name === subtabName);
        if (pane) {
          pane.style.display = (name === subtabName) ? 'block' : 'none';
        }
      });
      if (subtabName === 'oficiales') renderPlantillasOficiales();
      else if (subtabName === 'comunidad') {
        if (typeof initCommunityTemplatesListener === 'function') initCommunityTemplatesListener();
        renderPlantillasComunidad();
      }
      else if (subtabName === 'mias') renderMisPlantillas();
    }
    window.switchPlantillasSubtab = switchPlantillasSubtab;

    function renderPlantillasOficiales() {
      const container = document.getElementById('plantillasOficialesList');
      if (!container) return;
      container.innerHTML = '';

      const likedSet = getLikedTemplatesSet();

      PLUX_OFICIAL_TEMPLATES.forEach(tpl => {
        const isLiked = likedSet.has(tpl.id);
        const card = document.createElement('div');
        card.className = 'plantilla-card-premium';
        const daysCount = (tpl.destinos[0]?.dias || []).length;
        const eventsCount = (tpl.destinos[0]?.dias || []).reduce((acc, d) => acc + (d.eventos?.length || 0), 0);
        const votes = (tpl.likes || 0) + (isLiked ? 1 : 0);

        card.innerHTML = `
          <div>
            <div class="tpl-header">
              <span class="plantilla-badge-oficial">Plux Oficial</span>
              <span style="font-size:0.75rem; color:var(--gris);">${tpl.presupuestoAprox ? 'Aprox. ' + tpl.presupuestoAprox : ''}</span>
            </div>
            <h4 class="tpl-title" style="margin-top:8px;">${escapeHtml(tpl.nombre)}</h4>
            <p style="font-size:0.82rem; color:var(--gris); margin:4px 0 8px; line-height:1.4;">${escapeHtml(tpl.descripcion)}</p>
            <div class="plantilla-tags">
              ${(tpl.tags || []).map(t => `<span class="plantilla-tag">${escapeHtml(t)}</span>`).join('')}
              <span class="plantilla-tag" style="background:rgba(52,211,153,0.1); color:#34d399; border-color:rgba(52,211,153,0.2);">${eventsCount} actividades</span>
            </div>
          </div>
          <div class="plantilla-footer" style="display:flex; justify-content:space-between; align-items:center; gap:6px; flex-wrap:wrap;">
            <button class="plantilla-like-btn ${isLiked ? 'liked' : ''}" onclick="window.toggleLikePlantilla('${tpl.id}', event)" title="Votar plantilla">
              <span class="heart-icon-wrap">${getHeartSvg(isLiked)}</span>
              <span id="like-count-${tpl.id}" style="font-weight:700;">${votes}</span> <span style="font-size:0.75rem; color:var(--gris);">votos</span>
            </button>
            <div style="display:flex; gap:6px;">
              <button class="plantilla-save-btn" onclick="window.guardarPlantillaEnMisPlantillas('${tpl.id}', 'oficial', event)" title="Guardar copia en Mis Plantillas" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:var(--texto); font-size:0.78rem; padding:6px 10px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:4px;">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                <span>Guardar</span>
              </button>
              <button class="plantilla-clonar-btn" onclick="window.clonarPlantillaCompleta('${tpl.id}', 'oficial')">
                Clonar
              </button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    function renderPlantillasComunidad() {
      const container = document.getElementById('plantillasComunidadList');
      if (!container) return;
      container.innerHTML = '';

      const likedSet = getLikedTemplatesSet();

      // Merge Seeds with Firestore Community Templates (deduping by ID)
      const map = new Map();
      PLUX_COMUNIDAD_SEEDS.forEach(t => map.set(t.id, t));
      firestoreCommunityTemplates.forEach(t => map.set(t.id, t));

      let list = Array.from(map.values());

      if (filtroComunidadActual === 'destacadas') {
        list = list.filter(t => t.destacada);
      } else if (filtroComunidadActual === 'populares') {
        list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      } else {
        list.sort((a, b) => {
          const timeA = a.createdAt?.toDate ? a.createdAt.toDate().getTime() : (a.fecha ? new Date(a.fecha).getTime() : 0);
          const timeB = b.createdAt?.toDate ? b.createdAt.toDate().getTime() : (b.fecha ? new Date(b.fecha).getTime() : 0);
          return timeB - timeA;
        });
      }

      if (list.length === 0) {
        container.innerHTML = '<p style="color:var(--gris); grid-column:1/-1; text-align:center; padding:20px;">No se encontraron plantillas en esta categoría.</p>';
        return;
      }

      list.forEach(tpl => {
        const isLiked = likedSet.has(tpl.id);
        const card = document.createElement('div');
        card.className = 'plantilla-card-premium';
        const daysCount = (tpl.destinos && tpl.destinos[0]?.dias) ? tpl.destinos[0].dias.length : (tpl.destinos ? tpl.destinos.reduce((a,d)=>a+(d.dias?.length||0),0) : 0);
        const eventsCount = (tpl.destinos || []).reduce((acc, d) => acc + (d.dias || []).reduce((a, dia) => a + (dia.eventos?.length || 0), 0), 0);

        card.innerHTML = `
          <div>
            <div class="tpl-header">
              ${getCreatorBadgeHtml(tpl.autor, tpl.isExperienced)}
              ${tpl.destacada ? '<span class="plantilla-badge-destacada">Destacada ⭐</span>' : ''}
            </div>
            <h4 class="tpl-title" style="margin-top:8px;">${escapeHtml(tpl.nombre)}</h4>
            <p style="font-size:0.82rem; color:var(--gris); margin:4px 0 8px; line-height:1.4;">${escapeHtml(tpl.descripcion || '')}</p>
            <div class="plantilla-tags">
              ${(tpl.tags || []).map(t => `<span class="plantilla-tag">${escapeHtml(t)}</span>`).join('')}
              <span class="plantilla-tag" style="background:rgba(56,189,248,0.08); color:#38bdf8; border-color:rgba(56,189,248,0.2);">${daysCount} días</span>
              <span class="plantilla-tag" style="background:rgba(52,211,153,0.08); color:#34d399; border-color:rgba(52,211,153,0.2);">${eventsCount} actividades</span>
            </div>
          </div>
          <div class="plantilla-footer" style="display:flex; justify-content:space-between; align-items:center; gap:6px; flex-wrap:wrap;">
            <button class="plantilla-like-btn ${isLiked ? 'liked' : ''}" onclick="window.toggleLikePlantilla('${tpl.id}', event)" title="Votar plantilla">
              <span class="heart-icon-wrap">${getHeartSvg(isLiked)}</span>
              <span id="like-count-${tpl.id}" style="font-weight:700;">${tpl.likes || 0}</span> <span style="font-size:0.75rem; color:var(--gris);">votos</span>
            </button>
            <div style="display:flex; gap:6px;">
              <button class="plantilla-save-btn" onclick="window.guardarPlantillaEnMisPlantillas('${tpl.id}', 'comunidad', event)" title="Guardar copia en Mis Plantillas" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:var(--texto); font-size:0.78rem; padding:6px 10px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:4px;">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                <span>Guardar</span>
              </button>
              <button class="plantilla-share-btn" onclick="window.compartirPlantillaPublica('${tpl.id}', '${escapeHtml(tpl.nombre)}', event)" title="Compartir enlace de plantilla" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:var(--texto); font-size:0.78rem; padding:6px 10px; border-radius:8px; cursor:pointer; display:inline-flex; align-items:center; gap:4px;">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                <span>Compartir</span>
              </button>
              <button class="plantilla-clonar-btn" onclick="window.clonarPlantillaCompleta('${tpl.id}', 'comunidad')">
                Clonar
              </button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    function filtrarComunidad(filtro, btnEl) {
      filtroComunidadActual = filtro;
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      renderPlantillasComunidad();
    }
    window.filtrarComunidad = filtrarComunidad;

    function toggleLikePlantilla(tplId, event) {
      if (event) event.stopPropagation();
      const likedSet = getLikedTemplatesSet();
      const isLiked = likedSet.has(tplId);
      
      const firestoreTpl = firestoreCommunityTemplates.find(t => t.id === tplId);
      const comItem = PLUX_COMUNIDAD_SEEDS.find(t => t.id === tplId) || firestoreTpl;
      const ofItem = PLUX_OFICIAL_TEMPLATES.find(t => t.id === tplId);
      const item = comItem || ofItem;
      const countEl = document.getElementById(`like-count-${tplId}`);
      const btn = event?.currentTarget || event?.target?.closest('.plantilla-like-btn');

      if (isLiked) {
        likedSet.delete(tplId);
        if (item && item.likes > 0) item.likes -= 1;
        if (btn) {
          btn.classList.remove('liked');
          const heart = btn.querySelector('.heart-icon-wrap');
          if (heart) heart.innerHTML = getHeartSvg(false);
        }
        if (db && firestoreTpl) {
          db.collection("plux_plantillas_comunidad").doc(tplId).update({
            likes: firebase.firestore.FieldValue.increment(-1)
          }).catch(()=>{});
        }
      } else {
        likedSet.add(tplId);
        if (item) item.likes = (item.likes || 0) + 1;
        if (btn) {
          btn.classList.add('liked');
          const heart = btn.querySelector('.heart-icon-wrap');
          if (heart) heart.innerHTML = getHeartSvg(true);
        }
        if (db && firestoreTpl) {
          db.collection("plux_plantillas_comunidad").doc(tplId).update({
            likes: firebase.firestore.FieldValue.increment(1)
          }).catch(()=>{});
        }
      }
      saveLikedTemplatesSet(likedSet);
      if (countEl && item) {
        countEl.textContent = item.likes;
      }
    }
    window.toggleLikePlantilla = toggleLikePlantilla;

    function guardarPlantillaEnMisPlantillas(tplId, origin, event) {
      if (event) event.stopPropagation();
      let tpl = null;
      if (origin === 'oficial') {
        tpl = PLUX_OFICIAL_TEMPLATES.find(t => t.id === tplId);
      } else if (origin === 'comunidad') {
        tpl = firestoreCommunityTemplates.find(t => t.id === tplId) || PLUX_COMUNIDAD_SEEDS.find(t => t.id === tplId);
      }
      if (!tpl) return;
      const templates = getStoredTemplates();
      const copy = {
        id: 'tpl_' + Date.now().toString(36),
        nombre: tpl.nombre,
        fecha: new Date().toISOString(),
        autor: tpl.autor || 'Plux Oficial',
        destinos: JSON.parse(JSON.stringify(tpl.destinos || [])),
        vueltaGlobal: tpl.vueltaGlobal || '',
        vueltaPrecioGlobal: tpl.vueltaPrecioGlobal || 0,
        vueltaCostosAdicionales: tpl.vueltaCostosAdicionales || []
      };
      templates.push(copy);
      saveTemplates(templates);
      renderMisPlantillas();
      showToast(`Plantilla "${tpl.nombre}" guardada en Mis Plantillas ✨`, 'success');
    }
    window.guardarPlantillaEnMisPlantillas = guardarPlantillaEnMisPlantillas;

    function guardarComoPlantilla() {
      if (!checkEditPermission()) return;
      const input = document.getElementById('nombrePlantilla');
      let nombre = input ? input.value.trim() : '';
      if (!nombre) {
        if (destinos && destinos.length > 0) {
          nombre = `Plantilla de ${destinos.map(d => d.nombre).slice(0, 2).join(' & ')}`;
        } else {
          nombre = currentNickname ? `Plantilla de @${currentNickname}` : 'Mi Plantilla';
        }
      }

      if (!destinos || destinos.length === 0) {
        showToast('Añadí al menos un destino antes de guardar la plantilla', 'warning');
        return;
      }

      const chkPublicar = document.getElementById('chkPublicarComunidad');
      const isPublic = chkPublicar ? chkPublicar.checked : true;
      const autor = currentNickname ? `@${currentNickname.replace('@','')}` : 'Viajero Anónimo';
      const isExp = isExperiencedCreator(currentNickname);
      const tplId = 'com_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 5);
      const daysTotal = destinos.reduce((acc, d) => acc + (d.dias?.length || 0), 0);
      const eventsTotal = destinos.reduce((acc, d) => acc + (d.dias || []).reduce((a, dia) => a + (dia.eventos?.length || 0), 0), 0);

      const newTemplate = {
        id: tplId,
        nombre: nombre,
        descripcion: `Itinerario de ${daysTotal} días por ${destinos.map(d => d.nombre).slice(0, 3).join(', ')} con ${eventsTotal} actividades.`,
        tags: [
          `${daysTotal} ${daysTotal === 1 ? 'Día' : 'Días'}`,
          destinos[0]?.nombre || 'Viaje',
          'Comunidad'
        ],
        fecha: new Date().toISOString(),
        autor: autor,
        isExperienced: isExp,
        destacada: false,
        likes: 0,
        isPublic: isPublic,
        destinos: JSON.parse(JSON.stringify(destinos || [])),
        vueltaGlobal: vueltaGlobal || '',
        vueltaPrecioGlobal: vueltaPrecioGlobal || 0,
        vueltaCostosAdicionales: JSON.parse(JSON.stringify(vueltaCostosAdicionales || []))
      };

      const myTemplates = getStoredTemplates();
      myTemplates.push(newTemplate);
      saveTemplates(myTemplates, true);
      renderMisPlantillas();

      if (isPublic) {
        if (!db && typeof firebase !== 'undefined' && firebase.firestore) {
          db = firebase.firestore();
        }
        const canonicalPublicUrl = `https://plux.nibecarcofeben.com/join/plantillas/${tplId}`;
        newTemplate.publicUrl = canonicalPublicUrl;

        if (db) {
          db.collection("plux_plantillas_comunidad").doc(tplId).set({
            ...newTemplate,
            publicUrl: canonicalPublicUrl,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          }).then(() => {
            console.log("Plantilla publicada en Firestore:", tplId);
            if (typeof notificarIndexNow === 'function') {
              notificarIndexNow(canonicalPublicUrl);
            }
            if (typeof initCommunityTemplatesListener === 'function') initCommunityTemplatesListener();
          }).catch(err => {
            console.error("Error guardando plantilla pública en Firestore:", err);
          });
        } else {
          if (typeof notificarIndexNow === 'function') {
            notificarIndexNow(canonicalPublicUrl);
          }
        }
      }

      if (input) input.value = '';
      showToast(`Plantilla "${nombre}" guardada ${isPublic ? 'y despachada a IndexNow para indexacion en Bing' : ''}`, 'success');
      trackEvent('save_template', {
        template_name: nombre,
        is_public: isPublic,
        author: autor
      });
    }
    window.guardarComoPlantilla = guardarComoPlantilla;

    function eliminarPlantilla(index) {
      const templates = getStoredTemplates();
      if (!templates[index]) return;
      const removed = templates.splice(index, 1)[0];
      saveTemplates(templates, true);
      renderMisPlantillas();
      if (removed?.id && db) {
        db.collection("plux_plantillas_comunidad").doc(removed.id).delete().catch(() => {});
      }
      showToast('Plantilla eliminada', 'info');
    }
    window.eliminarPlantilla = eliminarPlantilla;

    function renderMisPlantillas() {
      const plantillasList = document.getElementById('plantillasList');
      if (!plantillasList) return;
      plantillasList.innerHTML = '';
      const templates = getStoredTemplates();

      const notice = document.getElementById('creatorBadgeNotice');
      if (notice) {
        const isExp = isExperiencedCreator(currentNickname);
        if (currentNickname) {
          notice.innerHTML = `Publicando como: <strong style="color:var(--verde);">@${escapeHtml(currentNickname)}</strong> ${isExp ? '<span style="color:#fbbf24;" title="Creador experimentado">⭐</span>' : ''}`;
        } else {
          notice.innerHTML = `Publicando como: <span style="color:var(--gris);">Viajero Anónimo (sin sesión)</span>`;
        }
      }

      if (templates.length === 0) {
        plantillasList.innerHTML = `<p style="color:var(--gris); text-align:center; padding:15px;">${t('no_plantillas')}</p>`;
      } else {
        templates.forEach((tpl, index) => {
          const item = document.createElement('div');
          item.className = 'trip-item';
          const dests = (tpl.destinos || []).map(d => d.nombre).join(', ') || 'Destino';
          const daysTotal = (tpl.destinos || []).reduce((acc, d) => acc + (d.dias?.length || 0), 0);
          item.innerHTML = `
            <div class="trip-info" onclick="window.clonarPlantillaCompleta(${index}, 'mia')" style="cursor:pointer;flex:1;">
              <div style="display:flex; align-items:center; gap:8px;">
                <h4 style="margin:0;">${escapeHtml(tpl.nombre)}</h4>
                <span class="plantilla-tag" style="font-size:0.7rem;">${daysTotal} días</span>
              </div>
              <small style="color:var(--gris);">${escapeHtml(dests)} · Click para cargar al editor</small>
            </div>
            <div class="trip-actions">
              <button onclick="event.stopPropagation(); window.clonarPlantillaCompleta(${index}, 'mia')" style="background:var(--verde); color:#030712; font-weight:600; font-size:0.75rem; padding:4px 10px; border-radius:6px; border:none; cursor:pointer;">Cargar</button>
              <button onclick="event.stopPropagation(); eliminarPlantilla(${index})" style="background:#dc2626;" title="Eliminar">×</button>
            </div>
          `;
          plantillasList.appendChild(item);
        });
      }
    }

    function clonarPlantillaCompleta(tplIdOrIndex, origin = 'oficial') {
      let tpl = null;
      if (origin === 'oficial') {
        tpl = PLUX_OFICIAL_TEMPLATES.find(t => t.id === tplIdOrIndex);
      } else if (origin === 'comunidad') {
        tpl = firestoreCommunityTemplates.find(t => t.id === tplIdOrIndex) || PLUX_COMUNIDAD_SEEDS.find(t => t.id === tplIdOrIndex);
      } else if (origin === 'mia') {
        const templates = getStoredTemplates();
        tpl = templates[tplIdOrIndex];
      }

      if (!tpl) {
        showToast('No se encontró la plantilla', 'error');
        return;
      }

      const idBase = Date.now();
      const clonedDestinos = JSON.parse(JSON.stringify(tpl.destinos || [])).map((dest, dIdx) => ({
        id: idBase + dIdx * 1000,
        nombre: dest.nombre,
        tramos: (dest.tramos || []).map((tr, trIdx) => ({
          id: idBase + dIdx * 1000 + trIdx + 50,
          medio: tr.medio || '',
          precio: tr.precio || 0,
          alojamiento: tr.alojamiento || '',
          precioAlojamiento: tr.precioAlojamiento || 0
        })),
        dias: (dest.dias || []).map((dia, diaIdx) => ({
          id: diaIdx,
          eventos: (dia.eventos || []).map((ev, evIdx) => ({
            id: idBase + dIdx * 1000 + (diaIdx + 1) * 100 + evIdx + 1,
            hora: ev.hora || '10:00',
            titulo: ev.titulo || 'Actividad',
            notas: ev.notas || '',
            costo: ev.costo || 0,
            duracion: ev.duracion || 60
          })),
          costosAdicionales: (dia.costosAdicionales || []).map((c, cIdx) => ({
            id: idBase + dIdx * 1000 + (diaIdx + 1) * 100 + cIdx + 50,
            concepto: c.concepto || '',
            precio: c.precio || 0
          }))
        }))
      }));

      destinos = clonedDestinos;
      vueltaGlobal = tpl.vueltaGlobal || '';
      vueltaPrecioGlobal = tpl.vueltaPrecioGlobal || 0;
      vueltaCostosAdicionales = tpl.vueltaCostosAdicionales || [];

      renderDestinos();
      renderVueltaCostos();
      cerrarModalViajes();
      empezar();

      if (typeof generarSelloPasaporte === 'function' && destinos[0]?.nombre) {
        generarSelloPasaporte(destinos[0].nombre);
      }

      autoSave();
      showToast(`¡Plantilla "${tpl.nombre}" clonada a tu viaje!`, 'success');
      trackEvent('clone_template', {
        template_id: String(tplIdOrIndex),
        template_name: tpl.nombre,
        origin
      });
    }
    window.clonarPlantillaCompleta = clonarPlantillaCompleta;

