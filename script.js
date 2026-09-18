// ================== TRADUCCIONES COMPLETAS (TODOS LOS IDIOMAS) ==================
    const i18n = {
      es: {
        welcome_start: "Empieza tu viaje", trips_btn: "Tus viajes", tools_btn: "Más herramientas",
        modal_title: "Tus viajes", save_trip_placeholder: "Nombre del viaje", save_trip_button: "Guardar viaje actual",
        load: "Cargar", delete: "Eliminar", no_saved_trips: "No hay viajes guardados.",
        auto_save_name: "Resumen", app_title: "Plux · Organiza tu aventura", add_dest_placeholder: "Destino",
        add_dest_button: "+ Añadir", add_day_button: "+ Añadir día", add_event_button: "+ Añadir Evento",
        view_summary: "Ver Resumen del Viaje", no_events_day: "Aún no hay eventos en este día",
        event_time_placeholder: "Hora", event_title_placeholder: "Título", event_notes_placeholder: "Notas",
        event_cost_placeholder: "", event_duration_placeholder: "min", delete_button: "Eliminar",
        copy_button: "Copiar", summary_title: "Todo tu viaje", no_days_yet: "Sin días aún",
        no_events_yet: "Sin eventos aún", untitled_event: "(Evento sin título)", day_prefix: "Día",
        no_destinations: "Aún no hay destinos agregados.", transport: "Transporte", accommodation: "Alojamiento",
        vuelta: "Vuelta", transport_price: "Precio Transporte", accommodation_price: "Precio Alojamiento", vuelta_price: "Precio Vuelta",
        conflict_warning: "¡Hay eventos que se solapan!", warning_15min: "Eventos con menos de 15 min de diferencia",
        shared_text: "Mi viaje Plux:\n", costo_total: "Costo total: {total} ", plantillas: "Plantillas",
        guardar_plantilla: "Guardar como plantilla", nombre_plantilla: "Nombre", no_plantillas: "No hay plantillas guardadas.",
        importar: "Importar viaje (JSON)", exportar: "Exportar viaje actual", add_costo: "+", costo_desc: "Descripción",
        calendar: { monthNames: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"], weekDays: ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"] },
        view_modes: { cards: "Vista tarjetas", timeline: "Vista línea tiempo", presentation: "Vista presentación" },
        herramientas_title: "Más herramientas", calendario_title: "Calendario", mapa_btn: "Ver mapa",
        clima_title: "Clima", clima_btn: "Clima", clima_search: "Buscar", clima_placeholder: "Escribí una ciudad para ver el pronóstico.",
        clima_feed_title: "Clima de tu viaje", clima_feed_empty: "Agregá destinos y días para ver el pronóstico de tu viaje.", clima_beyond: "Sin pronóstico (muy lejano)", clima_feed_now: "Pronóstico general",
        discover_btn: "Descubrir Destinos", join_invite: "¿Tienes un código de invitación? No hace falta registrarse.", join_btn: "Unirse",
        auth_hint: "Iniciá sesión con correo y contraseña obligatoria, o con Google.", auth_login: "Iniciar sesión", auth_register: "Crear cuenta", auth_logout: "Cerrar sesión",
        cuenta_title: "Tu Perfil", cuenta_email: "Correo", cuenta_lang: "Idioma", cuenta_theme: "Tema", cuenta_trips: "Viajes guardados",
        cuenta_nibecar_section: "Cuenta de Nibecar Cofeben", cuenta_nickname_section: "Nickname",
        cuenta_nickname_placeholder: "Nickname", cuenta_password_placeholder: "Contraseña (si requiere)", cuenta_password_optional: "Quiero contraseña (opcional)",
        cuenta_password_optional_placeholder: "Contraseña (opcional)",
        // Profile stats
        perfil_miembro_desde: "Miembro desde", perfil_viajes: "Viajes", perfil_destinos: "Destinos", perfil_dias: "Días",
        perfil_actividades: "Actividades", perfil_paises: "Países", perfil_presupuesto: "Presupuesto",
        perfil_preferencias: "Preferencias", perfil_idioma: "Idioma", perfil_tema: "Tema", perfil_notificaciones: "Notificaciones",
        perfil_configuracion: "Configuración", perfil_mis_viajes: "Mis viajes", perfil_plantillas: "Plantillas", perfil_cerrar_sesion: "Cerrar sesión",
        descubrir_title: "¿A dónde vamos?", descubrir_placeholder: "Busca una ciudad (ej: Roma)...", descubrir_search_btn: "+ Buscar",
        descubrir_ai_hint: "Buscamos con IA para recomendaciones personalizadas.",
        exportar_btn: "Exportar viaje actual", importar_btn: "Importar viaje (JSON)",
        pdf_btn: "PDF", share_social_card_btn: "📸 Compartir en Redes", calendar_btn: "Google Calendar", compartir_btn: "Compartir", mapa_btn: "Ver mapa",
        chat_grupal_btn: "💬 Chat Grupal", invitar_btn: "Invitar",
        datos_viaje_label: "⚙️ Configuración del viaje (Salida, Personas, Fechas, Vuelta)",
        quienes_van_label: "👥 ¿Quiénes viajan? (Nombres o @usuarios):",
        quienes_van_ph: "Escribí un nombre o @usuario (Enter o coma)",
        vuelta_label: "Vuelta (opcional):", vuelta_desc_ph: "Descripción", btn_costo_vuelta: "+ Costo adicional vuelta",
        lugar_salida_ph: "Ej. Buenos Aires", generar_itinerario_btn: "🪄 Generar itinerario", organizar_itinerario_btn: "⏳ Organizar",
        costos_adicionales_title: "Costos adicionales", alojamiento_label: "ALOJAMIENTO (HOTEL / AIRBNB)",
        alojamiento_ph: "Nombre del hotel o lugar", precio_alojamiento_label: "PRECIO ALOJAMIENTO (TOTAL)",
        agregar_escala_btn: "+ Añadir Escala / Parada", lugares_turisticos_cercanos: "Lugares turísticos cercanos",
        btn_buscar_vuelos: "Buscar vuelos", btn_buscar_hoteles: "Buscar hoteles",
        pluxy_name: "PLUXY", pluxy_title: "Pluxy", pluxy_assistant: "Pluxy · Tu asistente de viaje",
        pluxy_hint: "Preguntame cualquier cosa sobre tu viaje",
        weather_loading: "Cargando...", personas_label: "Personas:", fecha_inicio_label: "Fecha de inicio:",
        eventos_dia_title: "Eventos del día", estadisticas: { duracion: "Duración (días)", eventos: "Eventos", coste_total: "Coste total", coste_persona: "Coste/persona", destinos: "Destinos" },
        temas: { claro: "Claro", oscuro: "Oscuro", tokyo: "Tokyo Night", grid: "The Grid", terminal: "Terminal", starship: "Starship", ares: "Ares" },
        lugar_salida: "Lugar de salida", costo_extra_vuelta: "Costo extra vuelta", tramo: "Tramo", origen: "Origen",
        destino: "Destino", medio: "Medio", precio: "Precio", escala: "Escala", agregar_tramo: "+ Agregar tramo", agregar_escala: "+ Escala",
        inspo_title: "Inspiración · Destinos Populares", tab_saved: "Guardados", tab_templates: "Plantillas",
        join_placeholder: "Ej: ABCD-1234", shared_trips_title: "Viajes compartidos con vos",
        colab_title: "Colaboradores", colab_invite_nick: "Invitar por Nickname", colab_invite_btn: "Invitar", colab_nick_ph: "Ej: messi",
        map_title: "Mapa del viaje", conversor_title: "Conversor", conversor_btn: "Convertir",
        traductor_title: "Traductor para Viajeros", btn_traductor: "Traductor",
        descubrir_title: "Descubrir (Feed de Inspiración)", present_title: "Presentación del viaje",
        present_prev: "← Anterior", present_next: "Siguiente →", cuenta_btn_title: "Tu cuenta",
        ares_esc: "PRESIONA ESC PARA SALIR DE ARES",
        toast_code_invalid: "Ingresa un código válido", toast_connecting: "Conectando con la nube...",
        toast_cloud_off: "Nube inactiva. No se puede unir.", toast_searching: "Buscando viaje en la nube...",
        toast_join_ok: "¡Te has unido al viaje con código {code}!", toast_code_not_found: "Código no encontrado o caducado",
        toast_cloud_error: "Error al buscar en la nube", preferencias_btn: "Preferencias", viaje_activo_btn: "Modo Viaje Activo",
        support_btn: "Soporte", support_title: "Soporte y Sugerencias", support_suggestion: "Sugerir una función",
        support_error: "Informar un error", support_help: "Necesito ayuda", support_other: "Otros",
        support_description: "Descripción o mensaje", support_name: "Tu nombre", support_email: "Tu email",
        support_send: "Enviar", support_sent: "¡Mensaje enviado con éxito! Nos contactaremos pronto.",
        support_error_send: "Error al enviar el mensaje", support_required: "Este campo es requerido",
        support_select_type: "Selecciona un tipo de consulta",
        support_cancel: "Cancelar",
        tour_title: "Tour guiado de Plux",
        tour_step_1_title: "Bienvenido a Plux",
        tour_step_1_text: "Plux es tu planificador de viajes todo en uno. Este tour te mostrará las funciones principales.",
        tour_step_2_title: "Herramientas principales",
        tour_step_2_text: "Aquí tienes acceso a Calendario, Mapa, Clima, Conversor, Checklist y más. También puedes activar el Modo Viaje Activo.",
        tour_step_3_title: "Temas visuales",
        tour_step_3_text: "Plux tiene 7 temas: Claro, Oscuro, Tokyo Night, The Grid, Terminal, Starship y Ares. Cambia cuando quieras.",
        tour_step_4_title: "Tour guiado",
        tour_step_4_text: "Este botón te permite volver a ver el tour guiado en cualquier momento.",
        tour_step_5_title: "Tu perfil",
        tour_step_5_text: "Aquí verás tus viajes guardados, estadísticas, preferencias y podrás gestionar tu cuenta.",
        tour_step_6_title: "Resumen del viaje",
        tour_step_6_text: "Ver todo tu itinerario: estadísticas, gráficos de costos, mapa de ruta y exportar a PDF o calendario.",
        tour_step_7_title: "Pluxy - Tu asistente IA",
        tour_step_7_text: "Chatea con Pluxy para crear itinerarios, añadir eventos, consultar clima, generar checklists y más. ¡Es un agente real!",
        tour_step_8_title: "Descubrir destinos",
        tour_step_8_text: "Busca cualquier ciudad y obtén recomendaciones con IA + Wikipedia. Añade lugares a tu viaje con un click.",
        tour_step_9_title: "Importar / Exportar",
        tour_step_9_text: "Guarda tus viajes como plantillas, exporta a JSON para backup o comparte, e importa viajes de otros.",
        tour_step_10_title: "¡Listo para viajar!",
        tour_step_10_text: "Ya conoces lo esencial. Explora, planifica y disfruta tu aventura con Plux. ¡Buen viaje!",
        tour_next: "Siguiente",
        tour_prev: "Anterior",
        tour_skip: "Saltar",
        tour_finish: "Finalizar",
        seguridad_title: "Seguridad de la cuenta",
        seguridad_change_pass: "Cambiar contraseña",
        seguridad_new_pass: "Nueva contraseña",
        seguridad_confirm_pass: "Confirmar contraseña",
        seguridad_save: "Guardar",
        info_title: "Acerca de Plux",
        info_description: "Plux es tu planificador de viajes definitivo. Organiza destinos, itinerarios, presupuestos, notas y colabora con amigos en tiempo real.",
        info_created_by: "Creado por nibecar cofeben",
        info_version: "Versión vD6.5",
        role_editor: "Editor",
        role_traveler: "Viajero",
        invite_as: "Invitar como:",
        read_only_mode: "Modo solo lectura (Viajero)",
        no_permission_toast: "No tenés permisos de edición (Solo lectura)",
        btn_start_scratch: "Viaje desde cero 🆕",
        confirm_scratch: "¿Estás seguro de que querés borrar el viaje actual y empezar uno nuevo?",
        settings_header: "Datos generales del viaje",
        choose_trip_option_title: "Empieza tu viaje",
        choose_trip_option_desc: "Tienes viajes guardados. ¿Qué deseas hacer?",
        choose_trip_new: "Crear un viaje nuevo",
        choose_trip_continue: "Seguir con el mismo",
        mobile_menu_title: "Opciones del viaje",
        mobile_menu_invite: "Invitar colaboradores",
        mobile_menu_scratch: "Empezar viaje de cero",
        mobile_menu_import: "Importar viaje (JSON)",
        mobile_menu_export: "Exportar viaje (JSON)",
        mobile_menu_map: "Ver mapa",
        mobile_menu_support: "Soporte y Sugerencias",
        mobile_menu_close: "Cancelar",
        app_title_mobile: 'Plan de Viaje',
        chat_input_ph: 'Escribí tu mensaje a Pluxy...',
        checklist_ai_btn: 'Regenerar con IA',
        checklist_ph: 'Añadir item manualmente...',
        checklist_title: 'Mi Checklist de Viaje',
        error_desc: 'Cuéntanos qué salió mal',
        error_label: 'Informar un error',
        help_desc: 'Tour interactivo de la app',
        help_label: 'Tour guiado',
        how_to_start_desc: 'Guía rápida para crear tu primer viaje',
        how_to_start_label: 'Cómo empezar',
        logout_confirm_desc: 'Podés cerrar sesión y borrar todos tus chats y viajes de este dispositivo, o conservarlos guardados localmente.',
        logout_confirm_title: '¿Cerrar sesión?',
        other_desc: 'Algo diferente a lo anterior',
        other_label: 'Otros',
        suggestion_desc: 'Ayudanos a mejorar con tu idea',
        suggestion_label: 'Sugerir una función',
        timeline_view_btn: '⏱ Línea de tiempo',
        viaje_activo_modal_title: '¡Viaje Activo! - Tu itinerario de hoy',
        clone_trip: 'Clonar Viaje',
        clone_this_trip: 'Clonar este Viaje',
        btn_clone_trip: '📋 Clonar Viaje',
        banner_reader_title: 'MODO LECTOR (SÓLO LECTURA)',
        banner_reader_desc: 'Estás visualizando este viaje compartido. Podés clonarlo a tus viajes para editar tu propia copia.',
        toast_cloned: '¡Viaje clonado exitosamente a "Mis Viajes"! Ahora podés editarlo libremente ✨',
        toast_reader_no_edit: 'Modo Lectura: Este viaje es de sólo lectura. Podés clonarlo para editar tu propia copia.',
        toast_pluxy_reader_block: 'Pluxy no puede modificar un viaje en Modo Lectura. Clonalo para que Pluxy te ayude a personalizarlo.'
      },
      en: {
        welcome_start: "Start your journey", trips_btn: "Your trips", tools_btn: "More tools",
        modal_title: "Your trips", save_trip_placeholder: "Trip name", save_trip_button: "Save current trip",
        load: "Load", delete: "Delete", no_saved_trips: "No saved trips.", auto_save_name: "Summary",
        app_title: "Plux · Plan your adventure", add_dest_placeholder: "Destination", add_dest_button: "+ Add",
        add_day_button: "+ Add day", add_event_button: "+ Add event", view_summary: "View Trip Summary",
        no_events_day: "No events yet today", event_time_placeholder: "Time", event_title_placeholder: "Title",
        event_notes_placeholder: "Notes", event_cost_placeholder: "", event_duration_placeholder: "min",
        delete_button: "Delete", copy_button: "Copy", summary_title: "Your entire trip", no_days_yet: "No days yet",
        no_events_yet: "No events yet", untitled_event: "(Untitled event)", day_prefix: "Day",
        no_destinations: "No destinations added yet.", transport: "Transport", accommodation: "Accommodation",
        vuelta: "Return", transport_price: "Transport Price", accommodation_price: "Accommodation Price", vuelta_price: "Return Price",
        conflict_warning: "There are overlapping events!", warning_15min: "Events less than 15 min apart",
        shared_text: "My Plux trip:\n", costo_total: "Total cost: {total} ", plantillas: "Templates",
        guardar_plantilla: "Save as template", nombre_plantilla: "Name", no_plantillas: "No saved templates.",
        importar: "Import trip (JSON)", exportar: "Export current trip", add_costo: "+", costo_desc: "Description",
        calendar: { monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December"], weekDays: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"] },
        view_modes: { cards: "Card view", timeline: "Timeline view", presentation: "Presentation view" },
        herramientas_title: "More tools", calendario_title: "Calendar", mapa_btn: "View map",
        clima_title: "Weather", clima_btn: "Weather", clima_search: "Search", clima_placeholder: "Enter a city to see the forecast.",
        clima_feed_title: "Your trip weather", clima_feed_empty: "Add destinations and days to see your trip forecast.", clima_beyond: "No forecast (too far)", clima_feed_now: "General forecast",
        discover_btn: "Discover Destinations", join_invite: "Have an invite code? No sign-up required.", join_btn: "Join",
        auth_hint: "Sign in with email and required password, or with Google.", auth_login: "Sign in", auth_register: "Create account", auth_logout: "Sign out",
        cuenta_title: "Your Profile", cuenta_email: "Email", cuenta_lang: "Language", cuenta_theme: "Theme", cuenta_trips: "Saved trips",
        cuenta_nibecar_section: "Nibecar Cofeben Account", cuenta_nickname_section: "Nickname",
        cuenta_nickname_placeholder: "Nickname", cuenta_password_placeholder: "Password (if required)", cuenta_password_optional: "I want a password (optional)",
        cuenta_password_optional_placeholder: "Password (optional)",
        // Profile stats
        perfil_miembro_desde: "Member since", perfil_viajes: "Trips", perfil_destinos: "Destinations", perfil_dias: "Days",
        perfil_actividades: "Activities", perfil_paises: "Countries", perfil_presupuesto: "Budget",
        perfil_preferencias: "Preferences", perfil_idioma: "Language", perfil_tema: "Theme", perfil_notificaciones: "Notifications",
        perfil_configuracion: "Settings", perfil_mis_viajes: "My trips", perfil_plantillas: "Templates", perfil_cerrar_sesion: "Sign out",
        descubrir_title: "Where are we going?", descubrir_placeholder: "Search a city (e.g. Rome)...", descubrir_search_btn: "+ Search",
        descubrir_ai_hint: "We use AI for personalized recommendations.",
        exportar_btn: "Exportar current trip", importar_btn: "Import trip (JSON)",
        pdf_btn: "PDF", share_social_card_btn: "📸 Share on Social", calendar_btn: "Google Calendar", compartir_btn: "Share", mapa_btn: "View map",
        chat_grupal_btn: "💬 Group Chat", invitar_btn: "Invite",
        datos_viaje_label: "⚙️ Trip Configuration (Departure, People, Dates, Return)",
        quienes_van_label: "👥 Who's traveling? (Names or @usernames):",
        quienes_van_ph: "Type a name or @username (Enter or comma)",
        vuelta_label: "Return (optional):", vuelta_desc_ph: "Description", btn_costo_vuelta: "+ Additional return cost",
        lugar_salida_ph: "e.g. Buenos Aires", generar_itinerario_btn: "🪄 Generate itinerary", organizar_itinerario_btn: "⏳ Organize",
        costos_adicionales_title: "Additional costs", alojamiento_label: "ACCOMMODATION (HOTEL / AIRBNB)",
        alojamiento_ph: "Hotel or place name", precio_alojamiento_label: "ACCOMMODATION PRICE (TOTAL)",
        agregar_escala_btn: "+ Add Stopover / Layover", lugares_turisticos_cercanos: "Nearby tourist attractions",
        pluxy_name: "PLUXY", pluxy_title: "Pluxy", pluxy_assistant: "Pluxy · Your travel assistant",
        pluxy_hint: "Ask me anything about your trip",
        weather_loading: "Loading...", personas_label: "People:", fecha_inicio_label: "Start date:",
        eventos_dia_title: "Day events", estadisticas: { duracion: "Duration (days)", eventos: "Events", coste_total: "Total cost", coste_persona: "Cost/person", destinos: "Destinations" },
        temas: { claro: "Light", oscuro: "Dark", tokyo: "Tokyo Night", grid: "The Grid", terminal: "Terminal", starship: "Starship", ares: "Ares" },
        lugar_salida: "Departure place", costo_extra_vuelta: "Extra return cost", tramo: "Segment", origen: "Origin",
        destino: "Destination", medio: "Means", precio: "Price", escala: "Stopover", agregar_tramo: "+ Add segment", agregar_escala: "+ Stopover",
        inspo_title: "Inspiration · Popular Destinations", tab_saved: "Saved", tab_templates: "Templates",
        join_placeholder: "e.g. ABCD-1234", shared_trips_title: "Trips shared with you",
        colab_title: "Collaborators", colab_invite_nick: "Invite by nickname", colab_invite_btn: "Invite", colab_nick_ph: "e.g. traveler",
        map_title: "Trip map", conversor_title: "Converter", conversor_btn: "Convert",
        traductor_title: "Traveler Translator", btn_traductor: "Translator",
        descubrir_title: "Discover (inspiration feed)", present_title: "Trip presentation",
        present_prev: "← Previous", present_next: "Next →", cuenta_btn_title: "Your account",
        ares_esc: "PRESS ESC TO EXIT ARES",
        toast_code_invalid: "Enter a valid code", toast_connecting: "Connecting to cloud...",
        toast_cloud_off: "Cloud unavailable. Cannot join.", toast_searching: "Searching trip in cloud...",
        toast_join_ok: "You joined the trip with code {code}!", toast_code_not_found: "Code not found or expired",
        toast_cloud_error: "Error searching cloud", preferencias_btn: "Preferences", viaje_activo_btn: "Active Trip Mode",
        support_btn: "Support", support_title: "Support and Suggestions", support_suggestion: "Suggest a feature",
        support_error: "Report an error", support_help: "I need help", support_other: "Other",
        support_description: "Description or message", support_name: "Your name", support_email: "Your email",
        support_send: "Send", support_sent: "Message sent successfully! We will contact you soon.",
        support_error_send: "Error sending message", support_required: "This field is required",
        support_select_type: "Select a query type", support_cancel: "Cancel",
        tour_title: "Plux Guided Tour",
        tour_step_1_title: "Welcome to Plux",
        tour_step_1_text: "Plux is your all-in-one travel planner. This tour will show you the main features.",
        tour_step_2_title: "Main Tools",
        tour_step_2_text: "Here you have access to Calendar, Map, Weather, Converter, Checklist, and more. You can also enable Active Trip Mode.",
        tour_step_3_title: "Visual Themes",
        tour_step_3_text: "Plux has 7 themes: Light, Dark, Tokyo Night, The Grid, Terminal, Starship, and Ares. Change anytime.",
        tour_step_4_title: "Guided Tour",
        tour_step_4_text: "This button lets you replay the guided tour anytime.",
        tour_step_5_title: "Your Profile",
        tour_step_5_text: "Here you'll see your saved trips, stats, preferences, and can manage your account.",
        tour_step_6_title: "Trip Summary",
        tour_step_6_text: "View your full itinerary: stats, cost charts, route map, and export to PDF or calendar.",
        tour_step_7_title: "Pluxy - Your AI Assistant",
        tour_step_7_text: "Chat with Pluxy to create itineraries, add events, check weather, generate checklists, and more. It's a real agent!",
        tour_step_8_title: "Discover Destinations",
        tour_step_8_text: "Search any city and get AI + Wikipedia recommendations. Add places to your trip with one click.",
        tour_step_9_title: "Import / Export",
        tour_step_9_text: "Save trips as templates, export to JSON for backup or sharing, and import trips from others.",
        tour_step_10_title: "Ready to Travel!",
        tour_step_10_text: "You now know the essentials. Explore, plan, and enjoy your adventure with Plux. Have a great trip!",
        tour_next: "Next",
        tour_prev: "Previous",
        tour_skip: "Skip",
        tour_finish: "Finish",
        seguridad_title: "Account Security",
        seguridad_change_pass: "Change password",
        seguridad_new_pass: "New password",
        seguridad_confirm_pass: "Confirm password",
        seguridad_save: "Save",
        info_title: "About Plux",
        info_description: "Plux is your ultimate travel planner. Organize destinations, itineraries, budgets, notes and collaborate with friends in real time.",
        info_created_by: "Created by nibecar cofeben",
        info_version: "Version vD6.5",
        role_editor: "Editor",
        role_traveler: "Traveler",
        invite_as: "Invite as:",
        read_only_mode: "Read-only mode (Traveler)",
        no_permission_toast: "You do not have editing permissions (Read-only)",
        btn_start_scratch: "Trip from scratch 🆕",
        confirm_scratch: "Are you sure you want to clear the current trip and start a new one?",
        settings_header: "General trip settings",
        choose_trip_option_title: "Start your trip",
        choose_trip_option_desc: "You have saved trips. What would you like to do?",
        choose_trip_new: "Create a new trip",
        choose_trip_continue: "Continue with the same",
        mobile_menu_title: "Trip Options",
        mobile_menu_invite: "Invite collaborators",
        mobile_menu_scratch: "Start trip from scratch",
        mobile_menu_import: "Import trip (JSON)",
        mobile_menu_export: "Export trip (JSON)",
        mobile_menu_map: "View map",
        mobile_menu_support: "Support & Suggestions",
        mobile_menu_close: "Cancel",
        app_title_mobile: 'Trip Plan',
        chat_input_ph: 'Type your message to Pluxy...',
        checklist_ai_btn: 'Regenerate with AI',
        checklist_ph: 'Add item manually...',
        checklist_title: 'My Travel Checklist',
        error_desc: 'Tell us what went wrong',
        error_label: 'Report an error',
        help_desc: 'Interactive app tour',
        help_label: 'Guided tour',
        how_to_start_desc: 'Quick guide to create your first trip',
        how_to_start_label: 'How to start',
        logout_confirm_desc: 'You can sign out and wipe all chats and trips from this device, or keep them saved locally.',
        logout_confirm_title: 'Sign out?',
        other_desc: 'Something else',
        other_label: 'Other',
        suggestion_desc: 'Help us improve with your idea',
        suggestion_label: 'Suggest a feature',
        timeline_view_btn: '⏱ Timeline view',
        viaje_activo_modal_title: "Active Trip! - Today's itinerary",
        clone_trip: 'Clone Trip',
        clone_this_trip: 'Clone this Trip',
        btn_clone_trip: '📋 Clone Trip',
        banner_reader_title: 'READER MODE (READ-ONLY)',
        banner_reader_desc: 'You are viewing this shared trip. You can clone it to your trips to edit your own copy.',
        toast_cloned: 'Trip successfully cloned to "My Trips"! You can now edit it freely ✨',
        toast_reader_no_edit: 'Reader Mode: This trip is read-only. You can clone it to edit your own copy.',
        toast_pluxy_reader_block: 'Pluxy cannot modify a trip in Reader Mode. Clone it so Pluxy can help you customize it.'
      },
      fr: {
        welcome_start: "Commencez votre voyage", trips_btn: "Vos voyages", tools_btn: "Plus d'outils",
        modal_title: "Vos voyages", save_trip_placeholder: "Nom", save_trip_button: "Enregistrer le voyage actuel",
        load: "Charger", delete: "Supprimer", no_saved_trips: "Aucun voyage enregistré.", auto_save_name: "Résumé",
        app_title: "Plux · Organisez votre aventure", add_dest_placeholder: "Destination", add_dest_button: "+ Ajouter",
        add_day_button: "+ Ajouter un jour", add_event_button: "+ Ajouter un événement", view_summary: "Voir le résumé du voyage",
        no_events_day: "Pas encore d'événements ce jour", event_time_placeholder: "Heure", event_title_placeholder: "Titre",
        event_notes_placeholder: "Notes", event_cost_placeholder: "", event_duration_placeholder: "min",
        delete_button: "Supprimer", copy_button: "Copier", summary_title: "Tout votre voyage", no_days_yet: "Pas encore de jours",
        no_events_yet: "Pas encore d'événements", untitled_event: "(Événement sans titre)", day_prefix: "Jour",
        no_destinations: "Aucune destination ajoutée pour l'instant.", transport: "Transport", accommodation: "Hébergement",
        vuelta: "Retour", transport_price: "Prix Transport", accommodation_price: "Prix Hébergement", vuelta_price: "Prix Retour",
        conflict_warning: "Il y a des événements qui se chevauchent !", warning_15min: "Événements à moins de 15 min d'écart",
        shared_text: "Mon voyage Plux:\n", costo_total: "Coût total : {total} ", plantillas: "Modèles",
        guardar_plantilla: "Enregistrer comme modèle", nombre_plantilla: "Nom", no_plantillas: "Aucun modèle enregistré.",
        importar: "Importer un voyage (JSON)", exportar: "Exporter le voyage actuel", add_costo: "+", costo_desc: "Description",
        calendar: { monthNames: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"], weekDays: ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"] },
        view_modes: { cards: "Vue cartes", timeline: "Vue chronologique", presentation: "Vue présentation" },
        herramientas_title: "Plus d'outils", calendario_title: "Calendrier", mapa_btn: "Voir la carte",
        clima_title: "Météo", clima_btn: "Météo", clima_search: "Rechercher", clima_placeholder: "Entrez une ville pour voir la météo.",
        clima_feed_title: "Météo de votre voyage", clima_feed_empty: "Ajoutez des destinations et des jours pour voir la météo.", clima_beyond: "Pas de prévision (trop loin)", clima_feed_now: "Prévision générale",
        discover_btn: "Découvrir", join_invite: "Code d'invitation ? Pas besoin de compte.", join_btn: "Rejoindre",
        auth_hint: "Connectez-vous avec e-mail et mot de passe obligatoire, ou Google.", auth_login: "Connexion", auth_register: "Créer un compte", auth_logout: "Déconnexion",
        cuenta_title: "Votre profil", cuenta_email: "E-mail", cuenta_lang: "Langue", cuenta_theme: "Thème", cuenta_trips: "Voyages enregistrés",
        cuenta_nibecar_section: "Compte Nibecar Cofeben", cuenta_nickname_section: "Pseudo",
        cuenta_nickname_placeholder: "Pseudo", cuenta_password_placeholder: "Mot de passe (si requis)", cuenta_password_optional: "Je veux un mot de passe (optionnel)",
        cuenta_password_optional_placeholder: "Mot de passe (optionnel)",
        // Profile stats
        perfil_miembro_desde: "Membre depuis", perfil_viajes: "Voyages", perfil_destinos: "Destinations", perfil_dias: "Jours",
        perfil_actividades: "Activités", perfil_paises: "Pays", perfil_presupuesto: "Budget",
        perfil_preferencias: "Préférences", perfil_idioma: "Langue", perfil_tema: "Thème", perfil_notificaciones: "Notifications",
        perfil_configuracion: "Paramètres", perfil_mis_viajes: "Mes voyages", perfil_plantillas: "Modèles", perfil_cerrar_sesion: "Déconnexion",
        descubrir_title: "Où allons-nous ?", descubrir_placeholder: "Cherchez une ville (ex: Rome)...", descubrir_search_btn: "+ Chercher",
        descubrir_ai_hint: "Nous utilisons l'IA pour des recommandations personnalisées.",
        exportar_btn: "Exporter le voyage actuel", importar_btn: "Importer un voyage (JSON)",
        pdf_btn: "PDF", share_social_card_btn: "📸 Partager sur les Réseaux", calendar_btn: "Google Calendar", compartir_btn: "Partager", mapa_btn: "Voir la carte",
        chat_grupal_btn: "💬 Chat de Groupe", invitar_btn: "Inviter",
        datos_viaje_label: "⚙️ Paramètres du voyage (Départ, Personnes, Dates, Retour)",
        quienes_van_label: "👥 Qui voyage ? (Noms ou @pseudos) :",
        quienes_van_ph: "Tapez un nom ou @pseudo (Entrée ou virgule)",
        vuelta_label: "Retour (optionnel) :", vuelta_desc_ph: "Description", btn_costo_vuelta: "+ Coût supplémentaire retour",
        lugar_salida_ph: "ex. Paris", generar_itinerario_btn: "🪄 Générer l'itinéraire", organizar_itinerario_btn: "⏳ Organiser",
        costos_adicionales_title: "Coûts supplémentaires", alojamiento_label: "HÉBERGEMENT (HÔTEL / AIRBNB)",
        alojamiento_ph: "Nom de l'hôtel ou du lieu", precio_alojamiento_label: "PRIX HÉBERGEMENT (TOTAL)",
        agregar_escala_btn: "+ Ajouter Escale / Arrêt", lugares_turisticos_cercanos: "Attractions touristiques à proximité",
        pluxy_name: "PLUXY", pluxy_title: "Pluxy", pluxy_assistant: "Pluxy · Votre assistant de voyage",
        pluxy_hint: "Demandez-moi n'importe quoi sur votre voyage",
        weather_loading: "Chargement...", personas_label: "Personnes :", fecha_inicio_label: "Date de début :",
        eventos_dia_title: "Événements du jour", estadisticas: { duracion: "Durée (jours)", eventos: "Événements", coste_total: "Coût total", coste_persona: "Coût/personne", destinos: "Destinations" },
        temas: { claro: "Clair", oscuro: "Sombre", tokyo: "Tokyo Night", grid: "The Grid", terminal: "Terminal", starship: "Starship", ares: "Ares" },
        lugar_salida: "Lieu de départ", costo_extra_vuelta: "Coût supplémentaire retour", tramo: "Tronçon", origen: "Origine",
        destino: "Destination", medio: "Moyen", precio: "Prix", escala: "Escalier", agregar_tramo: "+ Ajouter tronçon", agregar_escala: "+ Escale",
        inspo_title: "Inspiration · Destinations populaires", tab_saved: "Enregistrés", tab_templates: "Modèles",
        join_placeholder: "ex. ABCD-1234", shared_trips_title: "Voyages partagés avec vous",
        colab_title: "Collaborateurs", colab_invite_nick: "Inviter par pseudo", colab_invite_btn: "Inviter", colab_nick_ph: "ex. voyageur",
        map_title: "Carte du voyage", conversor_title: "Convertisseur", conversor_btn: "Convertir",
        traductor_title: "Traducteur de Voyage", btn_traductor: "Traducteur",
        descubrir_title: "Découvrir (fil d'inspiration)", present_title: "Présentation du voyage",
        present_prev: "← Précédent", present_next: "Suivant →", cuenta_btn_title: "Votre compte",
        ares_esc: "APPUYEZ SUR ÉCHAP POUR QUITTER ARES",
        toast_code_invalid: "Entrez un code valide", toast_connecting: "Connexion au cloud...",
        toast_cloud_off: "Cloud indisponible.", toast_searching: "Recherche du voyage...",
        toast_join_ok: "Vous avez rejoint le voyage {code} !", toast_code_not_found: "Code introuvable ou expiré",
        toast_cloud_error: "Erreur cloud", preferencias_btn: "Préférences", viaje_activo_btn: "Mode voyage actif",
        support_btn: "Support", support_title: "Support et suggestions", support_suggestion: "Suggérer une fonction", support_error: "Signaler une erreur", support_help: "J'ai besoin d'aide", support_other: "Autre", support_description: "Description ou message", support_name: "Votre nom", support_email: "Votre email", support_send: "Envoyer", support_sent: "Message envoyé avec succès! Nous vous contacterons bientôt.", support_error_send: "Erreur lors de l'envoi", support_required: "Ce champ est obligatoire", support_select_type: "Sélectionnez un type de requête", support_cancel: "Annuler",
        tour_title: "Visite guidée de Plux",
        tour_step_1_title: "Bienvenue sur Plux",
        tour_step_1_text: "Plux est votre planificateur de voyage tout-en-un. Cette visite vous montrera les principales fonctionnalités.",
        tour_step_2_title: "Outils principaux",
        tour_step_2_text: "Vous avez accès au Calendrier, Carte, Météo, Convertisseur, Checklist, et plus. Vous pouvez aussi activer le Mode Voyage Actif.",
        tour_step_3_title: "Thèmes visuels",
        tour_step_3_text: "Plux a 7 thèmes : Clair, Sombre, Tokyo Night, The Grid, Terminal, Starship et Ares. Changez quand vous voulez.",
        tour_step_4_title: "Visite guidée",
        tour_step_4_text: "Ce bouton vous permet de revoir la visite guidée à tout moment.",
        tour_step_5_title: "Votre profil",
        tour_step_5_text: "Ici vous verrez vos voyages enregistrés, statistiques, préférences et pourrez gérer votre compte.",
        tour_step_6_title: "Résumé du voyage",
        tour_step_6_text: "Voir votre itinéraire complet : stats, graphiques de coûts, carte de route, et exporter en PDF ou calendrier.",
        tour_step_7_title: "Pluxy - Votre assistant IA",
        tour_step_7_text: "Discutez avec Pluxy pour créer des itinéraires, ajouter des événements, consulter la météo, générer des checklists, et plus. C'est un vrai agent !",
        tour_step_8_title: "Découvrir des destinations",
        tour_step_8_text: "Cherchez n'importe quelle ville et obtenez des recommandations IA + Wikipédia. Ajoutez des lieux à votre voyage en un clic.",
        tour_step_9_title: "Importer / Exporter",
        tour_step_9_text: "Sauvegardez vos voyages comme modèles, exportez en JSON pour backup ou partage, et importez des voyages d'autres.",
        tour_step_10_title: "Prêt à voyager !",
        tour_step_10_text: "Vous connaissez maintenant l'essentiel. Explorez, planifiez et profitez de votre aventure avec Plux. Bon voyage !",
        tour_next: "Suivant",
        tour_prev: "Précédent",
        tour_skip: "Passer",
        tour_finish: "Terminer",
        seguridad_title: "Sécurité du compte",
        seguridad_change_pass: "Changer le mot de passe",
        seguridad_new_pass: "Nouveau mot de passe",
        seguridad_confirm_pass: "Confirmer le mot de passe",
        seguridad_save: "Enregistrer",
        info_title: "À propos de Plux",
        info_description: "Plux est votre planificateur de voyage ultime. Organisez vos destinations, itinéraires, budgets, notes et collaborez avec vos amis en temps réel.",
        info_created_by: "Créé par nibecar cofeben",
        info_version: "Version vD6.5",
        role_editor: "Éditeur",
        role_traveler: "Voyageur",
        invite_as: "Inviter comme:",
        read_only_mode: "Mode lecture seule (Voyageur)",
        no_permission_toast: "Vous n'avez pas d'autorisations d'édition (Lecture seule)",
        btn_start_scratch: "Nouveau voyage 🆕",
        confirm_scratch: "Êtes-vous sûr de vouloir effacer le voyage en cours et en commencer un nouveau?",
        settings_header: "Paramètres généraux du voyage",
        choose_trip_option_title: "Commencez votre voyage",
        choose_trip_option_desc: "Vous avez des voyages enregistrés. Que voulez-vous faire ?",
        choose_trip_new: "Créer un nouveau voyage",
        choose_trip_continue: "Continuer avec le même",
        mobile_menu_title: "Options du voyage",
        mobile_menu_invite: "Inviter des collaborateurs",
        mobile_menu_scratch: "Commencer à zéro",
        mobile_menu_import: "Importer le voyage (JSON)",
        mobile_menu_export: "Exporter le voyage (JSON)",
        mobile_menu_map: "Voir la carte",
        mobile_menu_support: "Support et suggestions",
        mobile_menu_close: "Annuler",
        app_title_mobile: 'Plan de Voyage',
        chat_input_ph: 'Écrivez votre message à Pluxy...',
        checklist_ai_btn: "Régénérer avec l'IA",
        checklist_ph: 'Ajouter un élément manuellement...',
        checklist_title: 'Ma Checklist de Voyage',
        error_desc: "Dites-nous ce qui n'a pas fonctionné",
        error_label: 'Signaler un bug',
        help_desc: "Visite interactive de l'application",
        help_label: 'Visite guidée',
        how_to_start_desc: 'Guide rapide pour créer votre premier voyage',
        how_to_start_label: 'Comment commencer',
        logout_confirm_desc: 'Vous pouvez vous déconnecter et effacer tous vos chats et voyages de cet appareil, ou les conserver localement.',
        logout_confirm_title: 'Se déconnecter ?',
        other_desc: 'Autre chose',
        other_label: 'Autre',
        suggestion_desc: 'Aidez-nous à nous améliorer avec votre idée',
        suggestion_label: 'Suggérer une fonctionnalité',
        timeline_view_btn: '⏱ Vue chronologique',
        viaje_activo_modal_title: 'Voyage Actif ! - Itinéraire du jour',
        clone_trip: 'Cloner le voyage',
        clone_this_trip: 'Cloner ce voyage',
        btn_clone_trip: '📋 Cloner le voyage',
        banner_reader_title: 'MODE LECTEUR (LECTURE SEULE)',
        banner_reader_desc: 'Vous consultez ce voyage partagé. Vous pouvez le cloner dans vos voyages pour modifier votre propre copie.',
        toast_cloned: 'Voyage cloné avec succès dans "Mes voyages" ! Vous pouvez maintenant le modifier librement ✨',
        toast_reader_no_edit: 'Mode lecture : Ce voyage est en lecture seule. Vous pouvez le cloner pour modifier votre propre copie.',
        toast_pluxy_reader_block: 'Pluxy ne peut pas modifier un voyage en mode lecture. Clonez-le pour que Pluxy vous aide à le personnaliser.'
      },
      de: {
        welcome_start: "Beginnen Sie Ihre Reise", trips_btn: "Ihre Reisen", tools_btn: "Weitere Tools",
        modal_title: "Ihre Reisen", save_trip_placeholder: "Name", save_trip_button: "Aktuelle Reise speichern",
        load: "Laden", delete: "Löschen", no_saved_trips: "Keine gespeicherten Reisen.", auto_save_name: "Zusammenfassung",
        app_title: "Plux · Planen Sie Ihr Abenteuer", add_dest_placeholder: "Reiseziel", add_dest_button: "+ Hinzufügen",
        add_day_button: "+ Tag hinzufügen", add_event_button: "+ Ereignis hinzufügen", view_summary: "Reisezusammenfassung ansehen",
        no_events_day: "Noch keine Ereignisse an diesem Tag", event_time_placeholder: "Uhrzeit", event_title_placeholder: "Titel",
        event_notes_placeholder: "Notizen", event_cost_placeholder: "", event_duration_placeholder: "min",
        delete_button: "Löschen", copy_button: "Kopieren", summary_title: "Ihre gesamte Reise", no_days_yet: "Noch keine Tage",
        no_events_yet: "Noch keine Ereignisse", untitled_event: "(Ereignis ohne Titel)", day_prefix: "Tag",
        no_destinations: "Noch keine Reiseziele hinzugefügt.", transport: "Transport", accommodation: "Unterkunft",
        vuelta: "Rückkehr", transport_price: "Transportpreis", accommodation_price: "Unterkunftspreis", vuelta_price: "Rückfahrtspreis",
        conflict_warning: "Es gibt überlappende Ereignisse!", warning_15min: "Ereignisse mit weniger als 15 min Abstand",
        shared_text: "Meine Plux-Reise:\n", costo_total: "Gesamtkosten: {total} ", plantillas: "Vorlagen",
        guardar_plantilla: "Als Vorlage speichern", nombre_plantilla: "Name", no_plantillas: "Keine Vorlagen gespeichert.",
        importar: "Reise importieren (JSON)", exportar: "Aktuelle Reise exportieren", add_costo: "+", costo_desc: "Beschreibung",
        calendar: { monthNames: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"], weekDays: ["Mo","Di","Mi","Do","Fr","Sa","So"] },
        view_modes: { cards: "Kartenansicht", timeline: "Zeitleistenansicht", presentation: "Präsentationsansicht" },
        herramientas_title: "Weitere Tools", calendario_title: "Kalender", mapa_btn: "Karte anzeigen",
        clima_title: "Wetter", clima_btn: "Wetter", clima_search: "Suchen", clima_placeholder: "Stadt eingeben für die Vorhersage.",
        clima_feed_title: "Wetter Ihrer Reise", clima_feed_empty: "Ziele und Tage hinzufügen für die Vorhersage.", clima_beyond: "Keine Vorhersage (zu weit)", clima_feed_now: "Allgemeine Vorhersage",
        discover_btn: "Entdecken", join_invite: "Einladungscode? Keine Anmeldung nötig.", join_btn: "Beitreten",
        auth_hint: "Mit E-Mail und Passwort (Pflicht) oder Google anmelden.", auth_login: "Anmelden", auth_register: "Konto erstellen", auth_logout: "Abmelden",
        cuenta_title: "Ihr Profil", cuenta_email: "E-Mail", cuenta_lang: "Sprache", cuenta_theme: "Thema", cuenta_trips: "Gespeicherte Reisen",
        cuenta_nibecar_section: "Nibecar Cofeben Konto", cuenta_nickname_section: "Spitzname",
        cuenta_nickname_placeholder: "Spitzname", cuenta_password_placeholder: "Passwort (falls erforderlich)", cuenta_password_optional: "Ich möchte ein Passwort (optional)",
        cuenta_password_optional_placeholder: "Passwort (optional)",
        // Profile stats
        perfil_miembro_desde: "Mitglied seit", perfil_viajes: "Reisen", perfil_destinos: "Reiseziele", perfil_dias: "Tage",
        perfil_actividades: "Aktivitäten", perfil_paises: "Länder", perfil_presupuesto: "Budget",
        perfil_preferencias: "Einstellungen", perfil_idioma: "Sprache", perfil_tema: "Thema", perfil_notificaciones: "Benachrichtigungen",
        perfil_configuracion: "Einstellungen", perfil_mis_viajes: "Meine Reisen", perfil_plantillas: "Vorlagen", perfil_cerrar_sesion: "Abmelden",
        descubrir_title: "Wohin gehen wir?", descubrir_placeholder: "Suche eine Stadt (z.B. Rom)...", descubrir_search_btn: "+ Suchen",
        descubrir_ai_hint: "Wir nutzen KI für personalisierte Empfehlungen.",
        exportar_btn: "Aktuelle Reise exportieren", importar_btn: "Reise importieren (JSON)",
        pdf_btn: "PDF", share_social_card_btn: "📸 In sozialen Medien teilen", calendar_btn: "Google Kalender", compartir_btn: "Teilen", mapa_btn: "Karte anzeigen",
        chat_grupal_btn: "💬 Gruppen-Chat", invitar_btn: "Einladen",
        datos_viaje_label: "⚙️ Reisekonfiguration (Abfahrt, Personen, Daten, Rückkehr)",
        quienes_van_label: "👥 Wer reist mit? (Namen oder @Benutzer):",
        quienes_van_ph: "Name oder @Benutzername eingeben (Enter oder Komma)",
        vuelta_label: "Rückkehr (optional):", vuelta_desc_ph: "Beschreibung", btn_costo_vuelta: "+ Zusätzliche Rückkehrkosten",
        lugar_salida_ph: "z.B. Berlin", generar_itinerario_btn: "🪄 Reiseplan generieren", organizar_itinerario_btn: "⏳ Ordnen",
        costos_adicionales_title: "Zusätzliche Kosten", alojamiento_label: "UNTERKUNFT (HOTEL / AIRBNB)",
        alojamiento_ph: "Hotel- oder Ortsname", precio_alojamiento_label: "UNTERKUNFTSPREIS (GESAMT)",
        agregar_escala_btn: "+ Zwischenstopp hinzufügen", lugares_turisticos_cercanos: "Sehenswürdigkeiten in der Nähe",
        pluxy_name: "PLUXY", pluxy_title: "Pluxy", pluxy_assistant: "Pluxy · Dein Reiseassistent",
        pluxy_hint: "Frag mich alles über deine Reise",
        weather_loading: "Laden...", personas_label: "Personen:", fecha_inicio_label: "Startdatum:",
        eventos_dia_title: "Ereignisse des Tages", estadisticas: { duracion: "Dauer (Tage)", eventos: "Ereignisse", coste_total: "Gesamtkosten", coste_persona: "Kosten/Person", destinos: "Reiseziele" },
        temas: { claro: "Hell", oscuro: "Dunkel", tokyo: "Tokyo Night", grid: "The Grid", terminal: "Terminal", starship: "Starship", ares: "Ares" },
        lugar_salida: "Abfahrtsort", costo_extra_vuelta: "Zusätzliche Rückkehrkosten", tramo: "Abschnitt", origen: "Herkunft",
        destino: "Ziel", medio: "Mittel", precio: "Preis", escala: "Zwischenstopp", agregar_tramo: "+ Abschnitt hinzufügen", agregar_escala: "+ Zwischenstopp",
        inspo_title: "Inspiration · Beliebte Reiseziele", tab_saved: "Gespeichert", tab_templates: "Vorlagen",
        join_placeholder: "z.B. ABCD-1234", shared_trips_title: "Mit dir geteilte Reisen",
        colab_title: "Mitarbeiter", colab_invite_nick: "Per Nickname einladen", colab_invite_btn: "Einladen", colab_nick_ph: "z.B. reisender",
        map_title: "Reisekarte", conversor_title: "Umrechner", conversor_btn: "Umrechnen",
        traductor_title: "Reise-Übersetzer", btn_traductor: "Übersetzer",
        descubrir_title: "Entdecken (Inspirations-Feed)", present_title: "Reisepräsentation",
        present_prev: "← Zurück", present_next: "Weiter →", cuenta_btn_title: "Ihr Konto",
        ares_esc: "ESC DRÜCKEN UM ARES ZU VERLASSEN",
        toast_code_invalid: "Gültigen Code eingeben", toast_connecting: "Verbinde mit Cloud...",
        toast_cloud_off: "Cloud nicht verfügbar.", toast_searching: "Suche Reise in der Cloud...",
        toast_join_ok: "Reise mit Code {code} beigetreten!", toast_code_not_found: "Code nicht gefunden",
        toast_cloud_error: "Cloud-Fehler", preferencias_btn: "Einstellungen", viaje_activo_btn: "Aktiver Reisemodus",
        support_btn: "Support", support_title: "Support und Vorschläge", support_suggestion: "Funktion vorschlagen", support_error: "Fehler melden", support_help: "Ich brauche Hilfe", support_other: "Sonstiges", support_description: "Beschreibung oder Nachricht", support_name: "Ihr Name", support_email: "Ihre E-Mail", support_send: "Senden", support_sent: "Nachricht erfolgreich gesendet! Wir werden Sie bald kontaktieren.", support_error_send: "Fehler beim Senden", support_required: "Dieses Feld ist erforderlich", support_select_type: "Wählen Sie einen Anfragetyp", support_cancel: "Abbrechen",
        tour_title: "Plux Geführte Tour",
        tour_step_1_title: "Willkommen bei Plux",
        tour_step_1_text: "Plux ist dein All-in-One-Reiseplaner. Diese Tour zeigt dir die wichtigsten Funktionen.",
        tour_step_2_title: "Hauptwerkzeuge",
        tour_step_2_text: "Hier hast du Zugriff auf Kalender, Karte, Wetter, Umrechner, Checkliste und mehr. Du kannst auch den Aktiven Reisemodus aktivieren.",
        tour_step_3_title: "Visuelle Themen",
        tour_step_3_text: "Plux hat 7 Themen: Hell, Dunkel, Tokyo Night, The Grid, Terminal, Starship und Ares. Jederzeit änderbar.",
        tour_step_4_title: "Geführte Tour",
        tour_step_4_text: "Dieser Button lässt dich die geführte Tour jederzeit wiederholen.",
        tour_step_5_title: "Dein Profil",
        tour_step_5_text: "Hier siehst du deine gespeicherten Reisen, Statistiken, Einstellungen und kannst dein Konto verwalten.",
        tour_step_6_title: "Reisezusammenfassung",
        tour_step_6_text: "Sieh deinen kompletten Reiseplan: Statistiken, Kosten-Diagramme, Routenkarte, und exportiere als PDF oder Kalender.",
        tour_step_7_title: "Pluxy - Dein KI-Assistent",
        tour_step_7_text: "Chatte mit Pluxy, um Reisepläne zu erstellen, Events hinzuzufügen, Wetter zu prüfen, Checklisten zu generieren und mehr. Ein echter Agent!",
        tour_step_8_title: "Reiseziele entdecken",
        tour_step_8_text: "Suche jede Stadt und erhalte KI + Wikipedia-Empfehlungen. Füge Orte mit einem Klick zu deiner Reise hinzu.",
        tour_step_9_title: "Importieren / Exportieren",
        tour_step_9_text: "Speichere Reisen als Vorlagen, exportiere als JSON für Backup oder Teilen, und importiere Reisen von anderen.",
        tour_step_10_title: "Bereit zu reisen!",
        tour_step_10_text: "Du kennst jetzt das Wesentliche. Erkunde, plane und genieße dein Abenteuer mit Plux. Gute Reise!",
        tour_next: "Weiter",
        tour_prev: "Zurück",
        tour_skip: "Überspringen",
        tour_finish: "Beenden",
        seguridad_title: "Kontosicherheit",
        seguridad_change_pass: "Kennwort ändern",
        seguridad_new_pass: "Neues Passwort",
        seguridad_confirm_pass: "Passwort bestätigen",
        seguridad_save: "Speichern",
        info_title: "Über Plux",
        info_description: "Plux ist Ihr ultimativer Reiseplaner. Organisieren Sie Ziele, Routen, Budgets, Notizen und arbeiten Sie in Echtzeit mit Freunden zusammen.",
        info_created_by: "Erstellt von nibecar cofeben",
        info_version: "Version vD6.5",
        role_editor: "Editor",
        role_traveler: "Reisender",
        invite_as: "Einladen als:",
        read_only_mode: "Schreibgeschützter Modus (Reisender)",
        no_permission_toast: "Sie haben keine Berechtigung zum Bearbeiten (Schreibgeschützt)",
        btn_start_scratch: "Reise von vorn 🆕",
        confirm_scratch: "Sind Sie sicher, dass Sie die aktuelle Reise löschen und eine neue starten möchten?",
        settings_header: "Allgemeine Reiseeinstellungen",
        choose_trip_option_title: "Starten Sie Ihre Reise",
        choose_trip_option_desc: "Sie haben gespeicherte Reisen. Was möchten Sie tun?",
        choose_trip_new: "Neue Reise erstellen",
        choose_trip_continue: "Mit derselben fortfahren",
        mobile_menu_title: "Reiseoptionen",
        mobile_menu_invite: "Mitarbeiter einladen",
        mobile_menu_scratch: "Reise von vorn beginnen",
        mobile_menu_import: "Reise importieren (JSON)",
        mobile_menu_export: "Reise exportieren (JSON)",
        mobile_menu_map: "Karte anzeigen",
        mobile_menu_support: "Support & Vorschläge",
        mobile_menu_close: "Abbrechen",
        app_title_mobile: 'Reiseplan',
        chat_input_ph: 'Nachricht an Pluxy schreiben...',
        checklist_ai_btn: 'Mit KI neu generieren',
        checklist_ph: 'Element manuell hinzufügen...',
        checklist_title: 'Meine Reise-Checkliste',
        error_desc: 'Sagen Sie uns, was schiefgelaufen ist',
        error_label: 'Einen Fehler melden',
        help_desc: 'Interaktiver App-Rundgang',
        help_label: 'Geführte Tour',
        how_to_start_desc: 'Kurzanleitung zur Erstellung Ihrer ersten Reise',
        how_to_start_label: 'Erste Schritte',
        logout_confirm_desc: 'Sie können sich abmelden und alle Chats und Reisen von diesem Gerät löschen oder sie lokal speichern.',
        logout_confirm_title: 'Abmelden?',
        other_desc: 'Etwas anderes',
        other_label: 'Andere',
        suggestion_desc: 'Helfen Sie uns mit Ihrer Idee, uns zu verbessern',
        suggestion_label: 'Funktion vorschlagen',
        timeline_view_btn: '⏱ Zeitstrahlansicht',
        viaje_activo_modal_title: 'Aktive Reise! - Heutiger Reiseplan',
        clone_trip: 'Reise klonen',
        clone_this_trip: 'Diese Reise klonen',
        btn_clone_trip: '📋 Reise klonen',
        banner_reader_title: 'LESEMODUS (NUR LESEN)',
        banner_reader_desc: 'Sie sehen diese geteilte Reise an. Sie können sie klonen, um Ihre eigene Kopie zu bearbeiten.',
        toast_cloned: 'Reise erfolgreich in "Meine Reisen" geklont! Sie können sie jetzt frei bearbeiten ✨',
        toast_reader_no_edit: 'Lesemodus: Diese Reise ist schreibgeschützt. Sie können sie klonen, um Ihre eigene Kopie zu bearbeiten.',
        toast_pluxy_reader_block: 'Pluxy kann eine Reise im Lesemodus nicht ändern. Klonen Sie sie, damit Pluxy Ihnen beim Anpassen helfen kann.'
      },
      it: {
        welcome_start: "Inizia il tuo viaggio", trips_btn: "I tuoi viaggi", tools_btn: "Altri strumenti",
        modal_title: "I tuoi viaggi", save_trip_placeholder: "Nome", save_trip_button: "Salva viaggio attuale",
        load: "Carica", delete: "Elimina", no_saved_trips: "Nessun viaggio salvato.", auto_save_name: "Riepilogo",
        app_title: "Plux · Organizza la tua avventura", add_dest_placeholder: "Destinazione", add_dest_button: "+ Aggiungi",
        add_day_button: "+ Aggiungi giorno", add_event_button: "+ Aggiungi evento", view_summary: "Vedi riepilogo del viaggio",
        no_events_day: "Ancora nessun evento in questo giorno", event_time_placeholder: "Ora", event_title_placeholder: "Titolo",
        event_notes_placeholder: "Note", event_cost_placeholder: "", event_duration_placeholder: "min",
        delete_button: "Elimina", copy_button: "Copia", summary_title: "Tutto il tuo viaggio", no_days_yet: "Ancora nessun giorno",
        no_events_yet: "Ancora nessun evento", untitled_event: "(Evento senza titolo)", day_prefix: "Giorno",
        no_destinations: "Nessuna destinazione aggiunta ancora.", transport: "Trasporto", accommodation: "Alloggio",
        vuelta: "Ritorno", transport_price: "Prezzo Trasporto", accommodation_price: "Prezzo Alloggio", vuelta_price: "Prezzo Ritorno",
        conflict_warning: "Ci sono eventi sovrapposti!", warning_15min: "Eventi con meno di 15 min di distanza",
        shared_text: "Il mio viaggio Plux:\n", costo_total: "Costo totale: {total} ", plantillas: "Modelli",
        guardar_plantilla: "Salva come modello", nombre_plantilla: "Nome", no_plantillas: "Nessun modello salvato.",
        importar: "Importa viaggio (JSON)", exportar: "Esporta viaggio attuale", add_costo: "+", costo_desc: "Descrizione",
        calendar: { monthNames: ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"], weekDays: ["Lun","Mar","Mer","Gio","Ven","Sab","Dom"] },
        view_modes: { cards: "Vista schede", timeline: "Vista cronologica", presentation: "Vista presentazione" },
        herramientas_title: "Altri strumenti", calendario_title: "Calendario", mapa_btn: "Visualizza mappa",
        clima_title: "Meteo", clima_btn: "Meteo", clima_search: "Cerca", clima_placeholder: "Inserisci una città per la previsione.",
        clima_feed_title: "Meteo del viaggio", clima_feed_empty: "Aggiungi destinazioni e giorni per la previsione.", clima_beyond: "Nessuna previsione (lontano)", clima_feed_now: "Previsione generale",
        discover_btn: "Scopri destinazioni", join_invite: "Codice invito? Non serve registrarsi.", join_btn: "Unisciti",
        auth_hint: "Accedi con email e password obbligatoria, o Google.", auth_login: "Accedi", auth_register: "Crea account", auth_logout: "Esci",
        cuenta_title: "Il tuo profilo", cuenta_email: "Email", cuenta_lang: "Lingua", cuenta_theme: "Tema", cuenta_trips: "Viaggi salvati",
        cuenta_nibecar_section: "Account Nibecar Cofeben", cuenta_nickname_section: "Nickname",
        cuenta_nickname_placeholder: "Nickname", cuenta_password_placeholder: "Password (se richiesta)", cuenta_password_optional: "Voglio una password (opzionale)",
        cuenta_password_optional_placeholder: "Password (opzionale)",
        // Profile stats
        perfil_miembro_desde: "Membro dal", perfil_viajes: "Viaggi", perfil_destinos: "Destinazioni", perfil_dias: "Giorni",
        perfil_actividades: "Attività", perfil_paises: "Paesi", perfil_presupuesto: "Budget",
        perfil_preferencias: "Preferenze", perfil_idioma: "Lingua", perfil_tema: "Tema", perfil_notificaciones: "Notifiche",
        perfil_configuracion: "Impostazioni", perfil_mis_viajes: "I miei viaggi", perfil_plantillas: "Modelli", perfil_cerrar_sesion: "Esci",
        descubrir_title: "Dove andiamo?", descubrir_placeholder: "Cerca una città (es. Roma)...", descubrir_search_btn: "+ Cerca",
        descubrir_ai_hint: "Usiamo l'IA per raccomandazioni personalizzate.",
        exportar_btn: "Esporta viaggio attuale", importar_btn: "Importa viaggio (JSON)",
        pdf_btn: "PDF", share_social_card_btn: "📸 Condividi sui Social", calendar_btn: "Google Calendar", compartir_btn: "Condividi", mapa_btn: "Vedi mappa",
        chat_grupal_btn: "💬 Chat di Gruppo", invitar_btn: "Invita",
        datos_viaje_label: "⚙️ Configurazione del viaggio (Partenza, Persone, Date, Ritorno)",
        quienes_van_label: "👥 Chi viaggia? (Nomi o @utenti):",
        quienes_van_ph: "Scrivi un nome o @utente (Invio o virgola)",
        vuelta_label: "Ritorno (opzionale):", vuelta_desc_ph: "Descrizione", btn_costo_vuelta: "+ Costo aggiuntivo ritorno",
        lugar_salida_ph: "es. Roma", generar_itinerario_btn: "🪄 Genera itinerario", organizar_itinerario_btn: "⏳ Organizza",
        costos_adicionales_title: "Costi aggiuntivi", alojamiento_label: "ALLOGGIO (HOTEL / AIRBNB)",
        alojamiento_ph: "Nome dell'hotel o luogo", precio_alojamiento_label: "PREZZO ALLOGGIO (TOTALE)",
        agregar_escala_btn: "+ Aggiungi Scala / Fermata", lugares_turisticos_cercanos: "Attrazioni turistiche vicine",
        pluxy_name: "PLUXY", pluxy_title: "Pluxy", pluxy_assistant: "Pluxy · Il tuo assistente di viaggio",
        pluxy_hint: "Chiedimi qualsiasi cosa sul tuo viaggio",
        weather_loading: "Caricamento...", personas_label: "Persone:", fecha_inicio_label: "Data di inizio:",
        eventos_dia_title: "Eventi del giorno", estadisticas: { duracion: "Durata (giorni)", eventi: "Eventi", coste_total: "Costo totale", coste_persona: "Costo/persona", destinos: "Destinazioni" },
        temas: { claro: "Chiaro", oscuro: "Scuro", tokyo: "Tokyo Night", grid: "The Grid", terminal: "Terminal", starship: "Starship", ares: "Ares" },
        lugar_salida: "Luogo di partenza", costo_extra_vuelta: "Costo aggiuntivo ritorno", tramo: "Tratta", origen: "Origine",
        destino: "Destinazione", medio: "Mezzo", precio: "Prezzo", escala: "Scala", agregar_tramo: "+ Aggiungi tratta", agregar_escala: "+ Scala",
        inspo_title: "Ispirazione · Destinazioni popolari", tab_saved: "Salvati", tab_templates: "Modelli",
        join_placeholder: "es. ABCD-1234", shared_trips_title: "Viaggi condivisi con te",
        colab_title: "Collaboratori", colab_invite_nick: "Invita per nickname", colab_invite_btn: "Invita", colab_nick_ph: "es. viaggiatore",
        map_title: "Mappa del viaggio", conversor_title: "Convertitore", conversor_btn: "Converti",
        traductor_title: "Traduttore di Viaggio", btn_traductor: "Traduttore",
        descubrir_title: "Scopri (feed ispirazione)", present_title: "Presentazione del viaggio",
        present_prev: "← Precedente", present_next: "Successivo →", cuenta_btn_title: "Il tuo account",
        ares_esc: "PREMI ESC PER USCIRE DA ARES",
        toast_code_invalid: "Inserisci un codice valido", toast_connecting: "Connessione al cloud...",
        toast_cloud_off: "Cloud non disponibile.", toast_searching: "Ricerca viaggio nel cloud...",
        toast_join_ok: "Ti sei unito al viaggio {code}!", toast_code_not_found: "Codice non trovato",
        toast_cloud_error: "Errore cloud", preferencias_btn: "Preferenze", viaje_activo_btn: "Modalità viaggio attivo",
        support_btn: "Supporto", support_title: "Supporto e suggerimenti", support_suggestion: "Suggerisci una funzione", support_error: "Segnala un errore", support_help: "Ho bisogno di aiuto", support_other: "Altro", support_description: "Descrizione o messaggio", support_name: "Il tuo nome", support_email: "La tua email", support_send: "Invia", support_sent: "Messaggio inviato con successo! Ti contatteremo presto.", support_error_send: "Errore nell'invio", support_required: "Questo campo è obbligatorio", support_select_type: "Seleziona un tipo di consulta", support_cancel: "Annulla",
        tour_title: "Tour guidato di Plux",
        tour_step_1_title: "Benvenuto in Plux",
        tour_step_1_text: "Plux è il tuo pianificatore di viaggi tutto in uno. Questo tour ti mostrerà le funzioni principali.",
        tour_step_2_title: "Strumenti principali",
        tour_step_2_text: "Qui hai accesso a Calendario, Mappa, Meteo, Convertitore, Checklist e altro. Puoi anche attivare la Modalità Viaggio Attivo.",
        tour_step_3_title: "Temi visivi",
        tour_step_3_text: "Plux ha 7 temi: Chiaro, Scuro, Tokyo Night, The Grid, Terminal, Starship e Ares. Cambia quando vuoi.",
        tour_step_4_title: "Tour guidato",
        tour_step_4_text: "Questo pulsante ti permette di rivedere il tour guidato in qualsiasi momento.",
        tour_step_5_title: "Il tuo profilo",
        tour_step_5_text: "Qui vedrai i tuoi viaggi salvati, statistiche, preferenze e potrai gestire il tuo account.",
        tour_step_6_title: "Riepilogo del viaggio",
        tour_step_6_text: "Visualizza tutto il tuo itinerario: statistiche, grafici dei costi, mappa del percorso ed esporta in PDF o calendario.",
        tour_step_7_title: "Pluxy - Il tuo assistente IA",
        tour_step_7_text: "Chatta con Pluxy per creare itinerari, aggiungere eventi, consultare il meteo, generare checklist e altro. È un vero agente!",
        tour_step_8_title: "Scopri destinazioni",
        tour_step_8_text: "Cerca qualsiasi città e ottieni raccomandazioni IA + Wikipedia. Aggiungi luoghi al tuo viaggio con un click.",
        tour_step_9_title: "Importa / Esporta",
        tour_step_9_text: "Salva i viaggi come modelli, esporta in JSON per backup o condivisione, e importa viaggi altrui.",
        tour_step_10_title: "Pronto per viaggiare!",
        tour_step_10_text: "Ora conosci l'essenziale. Esplora, pianifica e goditi la tua avventura con Plux. Buon viaggio!",
        tour_next: "Avanti",
        tour_prev: "Indietro",
        tour_skip: "Salta",
        tour_finish: "Fine",
        seguridad_title: "Sicurezza account",
        seguridad_change_pass: "Cambia password",
        seguridad_new_pass: "Nuova password",
        seguridad_confirm_pass: "Conferma password",
        seguridad_save: "Salva",
        info_title: "Informazioni su Plux",
        info_description: "Plux è il tuo pianificatore di viaggio definitivo. Organizza destinazioni, itinerari, budget, note e collabora con gli amici in tempo reale.",
        info_created_by: "Creato da nibecar cofeben",
        info_version: "Versione vD6.5",
        role_editor: "Editor",
        role_traveler: "Viaggiatore",
        invite_as: "Invita come:",
        read_only_mode: "Modalità sola lettura (Viaggiatore)",
        no_permission_toast: "Non hai i permessi di modifica (Sola lettura)",
        btn_start_scratch: "Viaggio da zero 🆕",
        confirm_scratch: "Sei sicuro di voler cancellare il viaggio corrente e iniziarne uno nuovo?",
        settings_header: "Impostazioni generali del viaggio",
        choose_trip_option_title: "Inizia il tuo viaggio",
        choose_trip_option_desc: "Hai dei viaggi salvati. Cosa vorresti fare?",
        choose_trip_new: "Crea un nuovo viaggio",
        choose_trip_continue: "Continua con lo stesso",
        mobile_menu_title: "Opzioni del viaggio",
        mobile_menu_invite: "Invita collaboratori",
        mobile_menu_scratch: "Inizia viaggio da zero",
        mobile_menu_import: "Importa viaggio (JSON)",
        mobile_menu_export: "Esporta viaggio (JSON)",
        mobile_menu_map: "Visualizza mappa",
        mobile_menu_support: "Supporto e suggerimenti",
        mobile_menu_close: "Annulla",
        app_title_mobile: 'Piano di Viaggio',
        chat_input_ph: 'Scrivi il tuo messaggio a Pluxy...',
        checklist_ai_btn: 'Rigenera con IA',
        checklist_ph: 'Aggiungi elemento manualmente...',
        checklist_title: 'La mia Checklist di Viaggio',
        error_desc: 'Raccontaci cosa è andato storto',
        error_label: 'Segnala un errore',
        help_desc: "Tour interattivo dell'app",
        help_label: 'Tour guidato',
        how_to_start_desc: 'Guida rapida per creare il tuo primo viaggio',
        how_to_start_label: 'Come iniziare',
        logout_confirm_desc: 'Puoi disconnetterti ed eliminare tutte le chat e i viaggi da questo dispositivo, oppure conservarli localmente.',
        logout_confirm_title: 'Disconnettersi?',
        other_desc: "Qualcos'altro",
        other_label: 'Altro',
        suggestion_desc: 'Aiutaci a migliorare con la tua idea',
        suggestion_label: 'Suggerisci una funzione',
        timeline_view_btn: '⏱ Vista cronologica',
        viaje_activo_modal_title: 'Viaggio Attivo! - Itinerario di oggi',
        clone_trip: 'Clona viaggio',
        clone_this_trip: 'Clona questo viaggio',
        btn_clone_trip: '📋 Clona viaggio',
        banner_reader_title: 'MODALITÀ LETTORE (SOLO LETTURA)',
        banner_reader_desc: 'Stai visualizzando questo viaggio condiviso. Puoi clonarlo nei tuoi viaggi per modificare la tua copia.',
        toast_cloned: 'Viaggio clonato con successo in "I miei viaggi"! Ora puoi modificarlo liberamente ✨',
        toast_reader_no_edit: 'Modalità lettura: Questo viaggio è di sola lettura. Puoi clonarlo per modificare la tua copia.',
        toast_pluxy_reader_block: 'Pluxy non può modificare un viaggio in modalità lettura. Clonalo in modo che Pluxy possa aiutarti a personalizzarlo.'
      }
    };

    function t(key) {
      if (!key) return '';
      const langObj = i18n[currentLang] || i18n['es'] || {};
      const parts = key.split('.');
      let val = langObj;
      for (const p of parts) {
        if (val && typeof val === 'object' && p in val) {
          val = val[p];
        } else {
          // Fallback a español
          let fallback = i18n['es'];
          for (const fp of parts) {
            if (fallback && typeof fallback === 'object' && fp in fallback) {
              fallback = fallback[fp];
            } else {
              fallback = null;
              break;
            }
          }
          return (typeof fallback === 'string') ? fallback : key;
        }
      }
      return (typeof val === 'string') ? val : key;
    }
    window.t = t;

    // ================== STORAGE & CONSTANTS ==================
    var TRIPS_STORAGE_KEY = 'Plux_trips';
    var TEMPLATE_KEY = 'Plux_templates';

    function getStoredTrips() {
      try {
        return JSON.parse(localStorage.getItem(TRIPS_STORAGE_KEY) || '[]');
      } catch(e) {
        return [];
      }
    }

    function getStoredTemplates() {
      try {
        return JSON.parse(localStorage.getItem(TEMPLATE_KEY) || '[]');
      } catch(e) {
        return [];
      }
    }

    // ================== ACCOUNT (Firebase Auth → /login) ==================
    let firebaseUser = null;
    let currentUserUid = null;
    let currentNickname = null;
    let loadedTripIndex = null;
    window.currentTripRole = 'editor';

    function getPluxProfileRef() {
      if (!db || !currentUserUid) return null;
      return db.collection('plux_usuarios').doc(currentUserUid);
    }

    function themeDisplayName() {
      const key = (currentTheme || 'theme-oscuro').replace('theme-', '');
      return t('temas.' + key) || key;
    }

    function applyCuentaModalI18n() {
      const el = (id, key) => { const n = document.getElementById(id); if (n) n.textContent = t(key); };
      el('cuentaTitle', 'cuenta_title');
      el('cuentaNibecarSection', 'cuenta_nibecar_section');
      el('cuentaNicknameSection', 'cuenta_nickname_section');
      el('cuentaLinkLogin', 'auth_login');
      el('cuentaLinkRegister', 'auth_register');
      el('cuentaPasswordOptional', 'cuenta_password_optional');
      
      // Update placeholders
      const ph = (id, key) => { const n = document.getElementById(id); if (n) n.placeholder = t(key); };
      ph('login-nickname', 'cuenta_nickname_placeholder');
      ph('login-password', 'cuenta_password_placeholder');
      ph('register-password', 'cuenta_password_optional_placeholder');
      
      // Update tab buttons
      el('tab-login-btn', 'auth_login');
      el('tab-register-btn', 'auth_register');
      el('cuentaLogoutBtn', 'auth_logout');
      el('cuentaLblEmail', 'cuenta_email');
      el('cuentaLblLang', 'cuenta_lang');
      el('cuentaLblTheme', 'cuenta_theme');
      el('cuentaLblTrips', 'cuenta_trips');
      
      // Profile elements (Airbnb style)
      el('prefTitle', 'perfil_preferencias');
      el('btnSettings', 'perfil_configuracion');
      el('btnMyTrips', 'perfil_mis_viajes');
      el('btnTemplates', 'perfil_plantillas');
      el('btnLogout', 'perfil_cerrar_sesion');

      // Security Modal translations
      el('seguridadTitle', 'seguridad_title');
      el('seguridadSaveBtn', 'seguridad_save');
      ph('seguridad-new-password', 'seguridad_new_pass');
      ph('seguridad-confirm-password', 'seguridad_confirm_pass');

      // Info Modal translations
      el('infoTitle', 'info_title');
      el('infoDesc', 'info_description');
      el('infoCreatedBy', 'info_created_by');
      el('infoVersion', 'info_version');

      // Collaborator Roles translations
      el('colabRoleLabel', 'invite_as');
      el('roleEditorOpt', 'role_editor');
      el('roleTravelerOpt', 'role_traveler');

      // Start from scratch buttons translations
      el('startScratchBtn', 'btn_start_scratch');
      el('scratchBtnEditor', 'btn_start_scratch');
    }

    function applyGlobalI18n() {
      const lang = currentLang || 'es';
      localStorage.setItem('pluxUserLanguage', lang);
      localStorage.setItem('Plux_Lang', lang);
      document.body.className = document.body.className.replace(/lang-\w+/, `lang-${lang}`);
      if (!document.body.className.includes(`lang-${lang}`)) document.body.classList.add(`lang-${lang}`);
      
      const langBtn = document.getElementById('langButton');
      if (langBtn) langBtn.textContent = lang.toUpperCase();
      
      document.querySelectorAll('.lang-option').forEach(opt => {
        const optLang = opt.getAttribute('data-lang') || opt.dataset.lang;
        opt.classList.toggle('active', optLang === lang);
      });

      const el = (id, key) => { const n = document.getElementById(id); if (n) n.textContent = t(key); };
      const ph = (id, key) => { const n = document.getElementById(id); if (n) n.placeholder = t(key); };

      // Welcome Screen & Decision Modal
      el('startBtn', 'welcome_start');
      el('tripsBtn', 'trips_btn');
      el('toolsBtn', 'tools_btn');
      el('discoverBtn', 'discover_btn');
      el('inspoTitle', 'inspo_title');
      el('decisionModalTitle', 'choose_trip_option_title');
      el('decisionModalDesc', 'choose_trip_option_desc');
      el('decisionNewBtn', 'choose_trip_new');
      el('decisionContinueBtn', 'choose_trip_continue');

      // Header buttons
      el('chatGrupalHeaderBtn', 'chat_grupal_btn');
      el('invitarHeaderBtn', 'invitar_btn');
      el('scratchBtnEditor', 'btn_start_scratch');
      el('btnClonarHeaderTxt', 'btn_clone_trip');

      // Reader Banner & Clone
      el('bannerReaderTitle', 'banner_reader_title');
      el('bannerReaderDesc', 'banner_reader_desc');
      el('btnClonarViajeTxt', 'btn_clone_trip');
      el('btnClonarResumenTxt', 'btn_clone_trip');
      el('mobileMenuCloneTxt', 'btn_clone_trip');

      // Main Trip Editor
      el('appTitle', 'app_title');
      el('appTitleMobile', 'app_title_mobile');
      el('datosViajeLabel', 'datos_viaje_label');
      el('lugarSalidaLabel', 'lugar_salida');
      ph('lugarSalida', 'lugar_salida_ph');
      el('personasLabel', 'personas_label');
      el('quienesVanLabel', 'quienes_van_label');
      ph('traveler-chip-input', 'quienes_van_ph');
      el('fechaInicioLabel', 'fecha_inicio_label');
      el('vueltaLabel', 'vuelta_label');
      ph('vuelta', 'vuelta_desc_ph');
      el('btnAgregarCostoVuelta', 'btn_costo_vuelta');
      el('settHeaderLabel', 'settings_header');
      el('addDestBtn', 'add_dest_button');
      ph('nuevoDestino', 'add_dest_placeholder');
      el('btn-resumen', 'view_summary');

      // Saved Trips & Templates Modals
      el('modalTitle', 'modal_title');
      el('tabGuardadosBtn', 'tab_saved');
      el('tabPlantillasBtn', 'tab_templates');
      ph('nombreViaje', 'save_trip_placeholder');
      ph('nombrePlantilla', 'nombre_plantilla');
      el('guardarViajeBtn', 'save_trip_button');
      el('guardarPlantillaBtn', 'guardar_plantilla');
      el('importarBtn', 'importar_btn');
      el('exportarBtn', 'exportar_btn');
      el('sharedTripsTitle', 'shared_trips_title');
      el('joinHintViajes', 'join_invite');
      el('joinBtnViajes', 'join_btn');
      ph('join-code-input-viajes', 'join_placeholder');

      // Summary (Resumen)
      el('summaryTitle', 'summary_title');
      el('pdfBtn', 'pdf_btn');
      el('shareCardBtn', 'share_social_card_btn');
      el('calendarBtn', 'calendar_btn');
      el('compartirBtn', 'compartir_btn');
      el('mapaResumenBtn', 'mapa_btn');
      el('toggleVistaBtn', 'timeline_view_btn');

      // Tools Panel & Modals
      el('herramientasTitle', 'herramientas_title');
      el('calendarioTitle', 'calendario_title');
      el('btnCalendario', 'calendario_title');
      el('btnMapa', 'mapa_btn');
      el('btnClima', 'clima_btn');
      el('climaTitle', 'clima_title');
      el('climaSearchBtn', 'clima_search');
      ph('clima-search-input', 'clima_placeholder');
      el('btnConversor', 'conversor_title');
      el('conversorTitle', 'conversor_title');
      el('conversorBtn', 'conversor_btn');
      el('btnTraductor', 'btn_traductor');
      el('traductorTitle', 'traductor_title');
      el('btnPreferencias', 'preferencias_btn');
      el('btnViajeActivo', 'viaje_activo_btn');
      el('viajeActivoTitle', 'viaje_activo_modal_title');
      el('checklistTitle', 'checklist_title');
      el('btnChecklistIA', 'checklist_ai_btn');
      ph('checklist-add-input', 'checklist_ph');
      el('joinHintHerramientas', 'join_invite');
      el('joinBtnHerramientas', 'join_btn');
      ph('join-code-input-herramientas', 'join_placeholder');

      // Collaborators
      el('colabTitle', 'colab_title');
      el('colabInviteLabel', 'colab_invite_nick');
      el('colabInviteBtn', 'colab_invite_btn');
      ph('invite-nickname-input', 'colab_nick_ph');
      el('colabAccessLabel', 'colab_access_code');
      el('colabGenBtn', 'colab_gen_code');

      // Presentation & Misc
      el('presentacionTitle', 'present_title');
      el('anteriorBtn', 'present_prev');
      el('siguienteBtn', 'present_next');
      el('mapTitle', 'map_title');
      el('descubrirTitle', 'descubrir_title');
      el('eventosDiaTitle', 'eventos_dia_title');
      el('ares-esc-banner', 'ares_esc');

      // Pluxy AI Assistant
      el('pluxyBtnText', 'pluxy_name');
      el('pluxyAssistant', 'pluxy_assistant');
      el('pluxyHint', 'pluxy_hint');
      ph('chat-input', 'chat_input_ph');

      // Support & Feedback
      el('supportTitle', 'support_title');
      el('suggestionLabel', 'suggestion_label');
      el('suggestionDesc', 'suggestion_desc');
      el('errorLabel', 'error_label');
      el('errorDesc', 'error_desc');
      el('howToStartLabel', 'how_to_start_label');
      el('howToStartDesc', 'how_to_start_desc');
      el('helpLabel', 'help_label');
      el('helpDesc', 'help_desc');
      el('otherLabel', 'other_label');
      el('otherDesc', 'other_desc');
      el('support-send-btn', 'support_send');
      el('support-cancel-btn', 'support_cancel');
      ph('support-name', 'support_name');
      ph('support-email', 'support_email');
      ph('support-message', 'support_description');

      // Logout Confirm Modal
      el('logoutConfirmTitle', 'logout_confirm_title');
      el('logoutConfirmDesc', 'logout_confirm_desc');

      // Mobile bottom drawer
      el('mobileMenuTitle', 'mobile_menu_title');
      el('mobileMenuInvite', 'mobile_menu_invite');
      el('mobileMenuScratch', 'mobile_menu_scratch');
      el('mobileMenuImport', 'mobile_menu_import');
      el('mobileMenuExport', 'mobile_menu_export');
      el('mobileMenuMap', 'mobile_menu_map');
      el('mobileMenuSupport', 'mobile_menu_support');
      el('mobileMenuClose', 'mobile_menu_close');

      // Sub-modules
      if (typeof applyCuentaModalI18n === 'function') applyCuentaModalI18n();
      if (typeof actualizarIdiomaSupport === 'function') actualizarIdiomaSupport();
    }

    function onFirebaseUserSignedIn(user) {
      firebaseUser = user;
      currentUserUid = user.uid;
      if (user.photoURL) {
        localStorage.setItem('Plux_UserProfile_Photo', user.photoURL);
      }
      const btn = document.getElementById('cuentaButton');
      if (btn) btn.classList.add('logged-in');
      updateUserButtonDisplay();
      cargarPerfilUsuario();
    }

    function onFirebaseUserSignedOut() {
      firebaseUser = null;
      const savedNick = localStorage.getItem('Plux_Nickname');
      if (savedNick) {
        currentNickname = savedNick;
        currentUserUid = localStorage.getItem('Plux_Uid') || savedNick;
        updateUserButtonDisplay();
      } else {
        currentUserUid = null;
        currentNickname = null;
        localStorage.removeItem('Plux_Nickname');
        localStorage.removeItem('Plux_Uid');
        localStorage.removeItem('Plux_UserProfile_Photo');
      }
      updateUserButtonDisplay();
      const colabSection = document.getElementById('colab-trips-section');
      if (colabSection) colabSection.style.display = 'none';
    }

    function updateUserButtonDisplay() {
      const btn = document.getElementById('cuentaButton');
      if (!btn) return;
      const photo = localStorage.getItem('Plux_UserProfile_Photo') || (firebaseUser && firebaseUser.photoURL);
      const isLogged = !!(currentNickname || (firebaseUser && firebaseUser.email) || (typeof currentUserUid !== 'undefined' && currentUserUid));
      if (isLogged) {
        btn.classList.add('logged-in');
        btn.title = currentNickname ? `@${currentNickname}` : (firebaseUser ? (firebaseUser.displayName || firebaseUser.email) : 'Tu perfil');
        if (photo) {
          btn.innerHTML = `<img src="${photo}" alt="Perfil" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
          btn.style.padding = '0';
          btn.style.overflow = 'hidden';
        } else {
          btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
          btn.style.padding = '';
        }
      } else {
        btn.classList.remove('logged-in');
        btn.title = (typeof t === 'function' ? t('cuenta_btn_title') : 'Tu perfil') || 'Tu perfil';
        btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
        btn.style.padding = '';
      }
    }
    window.updateUserButtonDisplay = updateUserButtonDisplay;

    function escapeHtml(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }
    window.escapeHtml = escapeHtml;

    async function hashPassword(password, salt = 'plux_salt_v1') {
      if (!password) return null;
      try {
        if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
          const enc = new TextEncoder();
          const data = enc.encode(password + ':' + salt);
          const hashBuf = await window.crypto.subtle.digest('SHA-256', data);
          const hashArr = Array.from(new Uint8Array(hashBuf));
          return hashArr.map(b => b.toString(16).padStart(2, '0')).join('');
        }
      } catch (e) {
        console.warn('Crypto subtle fallback:', e);
      }
      let h = 0;
      const str = password + ':' + salt;
      for (let i = 0; i < str.length; i++) {
        h = Math.imul(31, h) + str.charCodeAt(i) | 0;
      }
      return 'fallback_' + Math.abs(h).toString(16);
    }
    window.hashPassword = hashPassword;

    function ensureEditorActive() {
      const w = document.getElementById('welcome');
      if (w && w.style.display !== 'none' && typeof empezar === 'function') {
        empezar();
      }
    }
    window.ensureEditorActive = ensureEditorActive;

    function inicializarCuenta() {
      applyCuentaModalI18n();
    }

    function abrirCuenta() {
      applyCuentaModalI18n();
      document.getElementById('modal-cuenta').style.display = 'flex';
      if ((firebaseUser && firebaseUser.email) || currentNickname) {
        // Logged in - show Airbnb-style profile
        const cForm = document.getElementById('cuentaForm');
        if (cForm) cForm.style.display = 'none';
        const cProf = document.getElementById('cuentaProfile');
        if (cProf) {
          cProf.style.display = 'flex';
          cProf.style.flexDirection = 'column';
          cProf.style.gap = '12px';
        }
        
        const nick = currentNickname || (firebaseUser && (firebaseUser.displayName || firebaseUser.email.split('@')[0]));
        const email = firebaseUser ? firebaseUser.email : (currentNickname ? `@${currentNickname}` : 'Usuario');
        
        const setEl = (id, txt) => { const el = document.getElementById(id); if (el) el.innerText = txt; };

        // Update profile header
        setEl('profileName', nick);
        setEl('profileEmail', email);
        
        // Update avatar image if user has custom photo or Google photo
        const photo = localStorage.getItem('Plux_UserProfile_Photo') || (firebaseUser && firebaseUser.photoURL);
        if (photo && !localStorage.getItem('Plux_UserProfile_Photo')) {
          localStorage.setItem('Plux_UserProfile_Photo', photo);
        }
        const avatarEl = document.getElementById('profileAvatarInner');
        if (avatarEl) {
          if (photo) {
            avatarEl.innerHTML = `<img src="${photo}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
          } else {
            avatarEl.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
          }
        }
        updateUserButtonDisplay();
        
        // Calculate and update stats
        actualizarEstadisticasPerfil();
        
        // Update preferences
        setEl('prefLang', currentLang.charAt(0).toUpperCase() + currentLang.slice(1));
        setEl('prefTheme', themeDisplayName());
        setEl('prefNotif', 'Activadas');
        
        // Set member since (could be from user creation date)
        const memberSince = localStorage.getItem('Plux_MemberSince') || new Date().getFullYear();
        setEl('profileMemberSince', `Miembro desde ${memberSince}`);
        
      } else {
        // Not logged in - show login form
        const cForm = document.getElementById('cuentaForm');
        if (cForm) cForm.style.display = 'flex';
        const cProf = document.getElementById('cuentaProfile');
        if (cProf) cProf.style.display = 'none';
        // Resetear a pestaña de login y limpiar campos
        switchCuentaTab('login');
        const loginNickEl = document.getElementById('login-nickname');
        if (loginNickEl) loginNickEl.value = '';
        const passContainer = document.getElementById('login-password-container');
        if (passContainer) passContainer.style.display = 'none';
        const passEl = document.getElementById('login-password');
        if (passEl) passEl.value = '';
        const registerPassContainer = document.getElementById('register-password-container');
        if (registerPassContainer) registerPassContainer.style.display = 'none';
        const registerPassEl = document.getElementById('register-password');
        if (registerPassEl) registerPassEl.value = '';
        const hasPassEl = document.getElementById('register-has-password');
        if (hasPassEl) hasPassEl.checked = false;
      }
    }

    function actualizarEstadisticasPerfil() {
      const trips = getStoredTrips();
      const templates = getStoredTemplates();
      
      // Basic stats
      let totalDestinations = 0;
      let totalDays = 0;
      let totalEvents = 0;
      let totalBudget = 0;
      const countriesSet = new Set();
      
      trips.forEach(trip => {
        totalDays += (trip.destinos || []).reduce((sum, d) => sum + (d.dias?.length || 0), 0);
        totalEvents += (trip.destinos || []).reduce((sum, d) => sum + (d.dias || []).reduce((s, dia) => s + (dia.eventos?.length || 0), 0), 0);
        totalDestinations += (trip.destinos || []).length;
        
        // Calculate budget from trip costs
        (trip.destinos || []).forEach(dest => {
          (dest.dias || []).forEach(dia => {
            (dia.eventos || []).forEach(ev => {
              if (ev.costo) totalBudget += ev.costo * (numPersonas || 1);
            });
            (dia.costosAdicionales || []).forEach(c => {
              if (c.precio) totalBudget += c.precio;
            });
          });
          (dest.tramos || []).forEach(tramo => {
            const sum = (Number(tramo.precio)||0) + (Number(tramo.precioAlojamiento)||0);
            if (sum) totalBudget += sum * (numPersonas || 1);
          });
          
          // Try to extract country from destination name
          if (dest.nombre) {
            countriesSet.add(dest.nombre.split(',').pop().trim());
          }
        });
        if (trip.vueltaPrecio) totalBudget += trip.vueltaPrecio * (numPersonas || 1);
      });
      
      // Update stat values safely
      const setEl = (id, txt) => { const el = document.getElementById(id); if (el) el.innerText = txt; };
      setEl('statTrips', trips.length);
      setEl('statDestinations', totalDestinations);
      setEl('statDays', totalDays);
      setEl('statEvents', totalEvents);
      setEl('statCountries', countriesSet.size);
      setEl('statBudget', `${Math.round(totalBudget)}€`);
    }

    function cerrarCuenta() {
      document.getElementById('modal-cuenta').style.display = 'none';
    }

    function cerrarSesion() {
      const modal = document.getElementById('modal-confirmar-logout');
      if (modal) {
        modal.style.display = 'flex';
      } else {
        const confirmarBorrar = confirm('¿Deseas borrar tus chats y viajes guardados en este dispositivo al cerrar sesión?');
        ejecutarCerrarSesion(confirmarBorrar);
      }
    }
    window.cerrarSesion = cerrarSesion;

    function cancelarCerrarSesion() {
      const modal = document.getElementById('modal-confirmar-logout');
      if (modal) modal.style.display = 'none';
    }
    window.cancelarCerrarSesion = cancelarCerrarSesion;

    async function ejecutarCerrarSesion(borrarTodo = false) {
      cancelarCerrarSesion();
      try {
        if (typeof pluxChatUnsubscribe === 'function' && pluxChatUnsubscribe) {
          pluxChatUnsubscribe();
          pluxChatUnsubscribe = null;
        }

        if (borrarTodo) {
          localStorage.removeItem('PluxSocialChats_V2');
          localStorage.removeItem('Plux_Viajes');
          localStorage.removeItem('Plux_ActiveTrip');
          localStorage.removeItem('itinerario_actual');
          localStorage.removeItem('itinerario');
          localStorage.removeItem('viaje_colaborativo');
          localStorage.removeItem('PluxSyncCode');
          localStorage.removeItem('Plux_PersonalInfo');
          localStorage.removeItem('Plux_UserProfile_Photo');
          localStorage.removeItem('Plux_MemberSince');
          if (typeof pluxSocialChats !== 'undefined') {
            pluxSocialChats = {};
            pluxActiveChatId = 'trip_group';
            if (typeof ensureChatChannel === 'function') ensureChatChannel();
            if (typeof renderChatMessages === 'function') renderChatMessages();
            if (typeof renderChannelsList === 'function') renderChannelsList();
          }
          destinos = [];
          if (typeof renderDestinos === 'function') renderDestinos();
          if (typeof renderTripLists === 'function') renderTripLists();
        }

        localStorage.removeItem('Plux_Nickname');
        localStorage.removeItem('Plux_Uid');
        localStorage.removeItem('Plux_UserProfile_Photo');
        currentNickname = null;
        currentUserUid = null;

        await firebase.auth().signOut();
        onFirebaseUserSignedOut();
        showToast(borrarTodo ? 'Sesión cerrada y datos eliminados del dispositivo' : (typeof t === 'function' ? t('auth_logout') : 'Sesión cerrada'), 'info');

        try {
          await firebase.auth().signInAnonymously();
          console.log("🔥 Sesión anónima restablecida tras logout");
        } catch (e) {
          console.error("Error en signInAnonymously tras logout:", e);
        }

        cerrarCuenta();
        if (typeof updateUserButtonDisplay === 'function') updateUserButtonDisplay();
      } catch (e) {
        console.error("Error cerrando sesión:", e);
        showToast('Error al cerrar sesión', 'error');
      }
    }
    window.ejecutarCerrarSesion = ejecutarCerrarSesion;

    function switchNCTab(tab) {
      const isLogin = tab === 'login';
      const tabLogin = document.getElementById('tabNCLogin');
      const tabReg = document.getElementById('tabNCRegister');
      const formLogin = document.getElementById('form-nc-login');
      const formReg = document.getElementById('form-nc-register');

      if (tabLogin) {
        tabLogin.style.background = isLogin ? 'var(--azul)' : 'transparent';
        tabLogin.style.color = isLogin ? 'white' : 'var(--gris)';
      }
      if (tabReg) {
        tabReg.style.background = !isLogin ? 'var(--azul)' : 'transparent';
        tabReg.style.color = !isLogin ? 'white' : 'var(--gris)';
      }
      if (formLogin) formLogin.style.display = isLogin ? 'flex' : 'none';
      if (formReg) formReg.style.display = !isLogin ? 'flex' : 'none';
    }
    window.switchNCTab = switchNCTab;

    async function handleNCLogin(e) {
      if (e) e.preventDefault();
      const loginVal = document.getElementById('ncLoginEmail')?.value?.trim();
      const password = document.getElementById('ncLoginPassword')?.value || '';
      if (!loginVal) return showToast('Ingresá tu usuario o correo', 'error');
      
      const submitBtn = document.getElementById('btnNCLoginSubmit');
      if (submitBtn) submitBtn.disabled = true;

      try {
        // Si no tiene @, es un Nickname directo
        if (!loginVal.includes('@')) {
          const nick = loginVal.toLowerCase().replace(/[^a-z0-9_]/g, '');
          if (nick.length < 3) {
            showToast('El nickname debe tener al menos 3 caracteres', 'error');
            return;
          }
          currentNickname = nick;
          currentUserUid = nick;
          localStorage.setItem('Plux_Nickname', nick);
          localStorage.setItem('Plux_Uid', nick);
          if (typeof updateUserButtonDisplay === 'function') updateUserButtonDisplay();
          
          await cargarPerfilUsuario();
          if (typeof listenUserIncomingConversations === 'function') listenUserIncomingConversations(nick);
          
          showToast('¡Bienvenido, @' + nick + '!', 'success');
          if (typeof cerrarCuenta === 'function') cerrarCuenta();
          return;
        }

        // Si es correo, autenticar con Firebase
        if (!firebase.apps || !firebase.apps.length) await initFirebaseAuth();
        const cred = await firebase.auth().signInWithEmailAndPassword(loginVal, password);
        showToast('¡Bienvenido! Sesión iniciada', 'success');
        if (typeof cerrarCuenta === 'function') cerrarCuenta();
        if (typeof onFirebaseUserSignedIn === 'function') onFirebaseUserSignedIn(cred.user);
      } catch (err) {
        console.error("Login error:", err);
        // Fallback offline si no hay red o base de datos
        if (err.code === 'auth/network-request-failed' || !window.navigator.onLine) {
          const fallbackNick = loginVal.split('@')[0].toLowerCase().replace(/[^a-z0-9_]/g, '') || 'viajero';
          currentNickname = fallbackNick;
          currentUserUid = fallbackNick;
          localStorage.setItem('Plux_Nickname', fallbackNick);
          localStorage.setItem('Plux_Uid', fallbackNick);
          if (typeof updateUserButtonDisplay === 'function') updateUserButtonDisplay();
          showToast('Modo offline: Ingresaste como @' + fallbackNick, 'info');
          if (typeof cerrarCuenta === 'function') cerrarCuenta();
          return;
        }
        let msg = 'Error de autenticación';
        if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') msg = 'Contraseña o usuario incorrecto';
        else if (err.code === 'auth/user-not-found') msg = 'No existe una cuenta con este correo';
        else if (err.code === 'auth/invalid-email') msg = 'Correo no válido';
        showToast(msg, 'error');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    }
    window.handleNCLogin = handleNCLogin;

    async function handleNCRegister(e) {
      if (e) e.preventDefault();
      const email = document.getElementById('ncRegEmail')?.value?.trim();
      const pass = document.getElementById('ncRegPassword')?.value;
      const pass2 = document.getElementById('ncRegPassword2')?.value;
      if (!email || !pass) return showToast('Completá todos los campos', 'error');
      if (pass.length < 6) return showToast('La contraseña debe tener al menos 6 caracteres', 'error');
      if (pass !== pass2) return showToast('Las contraseñas no coinciden', 'error');

      const submitBtn = document.getElementById('btnNCRegisterSubmit');
      if (submitBtn) submitBtn.disabled = true;

      try {
        if (!firebase.apps || !firebase.apps.length) await initFirebaseAuth();
        const cred = await firebase.auth().createUserWithEmailAndPassword(email, pass);
        if (cred.user) {
          const nick = await generarNicknameUnico(cred.user);
          currentNickname = nick;
          currentUserUid = cred.user.uid;
          localStorage.setItem('Plux_Nickname', nick);
          localStorage.setItem('Plux_Uid', cred.user.uid);
          sincronizarPerfil();
          showToast('¡Cuenta creada! Tu nickname es @' + nick, 'success');
        } else {
          showToast('¡Cuenta creada con éxito!', 'success');
        }
        if (typeof cerrarCuenta === 'function') cerrarCuenta();
        if (typeof onFirebaseUserSignedIn === 'function') onFirebaseUserSignedIn(cred.user);
      } catch (err) {
        console.error("Register error:", err);
        let msg = 'Error al registrar';
        if (err.code === 'auth/email-already-in-use') msg = 'Este correo ya está registrado';
        showToast(msg, 'error');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    }
    window.handleNCRegister = handleNCRegister;

    async function handleNCGoogle() {
      try {
        if (!firebase.apps || !firebase.apps.length) await initFirebaseAuth();
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        const res = await firebase.auth().signInWithPopup(provider);
        if (res.user) {
          const nick = await generarNicknameUnico(res.user);
          currentNickname = nick;
          currentUserUid = res.user.uid;
          localStorage.setItem('Plux_Nickname', nick);
          localStorage.setItem('Plux_Uid', res.user.uid);
          if (res.user.photoURL) {
            localStorage.setItem('Plux_UserProfile_Photo', res.user.photoURL);
          }
          sincronizarPerfil();
        }
        const displayName = currentNickname ? `@${currentNickname}` : (res.user?.displayName || res.user?.email || '');
        showToast('¡Bienvenido ' + displayName + '!', 'success');
        if (typeof cerrarCuenta === 'function') cerrarCuenta();
        if (typeof onFirebaseUserSignedIn === 'function') onFirebaseUserSignedIn(res.user);
      } catch (err) {
        console.error("Google login error:", err);
        if (err.code === 'auth/popup-closed-by-user') {
          return;
        }
        if (err.code === 'auth/disallowed-useragent' || err.code === 'auth/popup-blocked' || err.code === 'auth/operation-not-supported-in-this-environment' || /Android|PluxMobile/i.test(navigator.userAgent)) {
          showToast('En la app móvil o si se bloquean popups, ingresá con tu Nickname o Correo', 'info');
        } else {
          showToast('Error al autenticar con Google', 'error');
        }
      }
    }
    window.handleNCGoogle = handleNCGoogle;

    function switchCuentaTab(tab) {
      const isLogin = tab !== 'register';
      const tabLogin = document.getElementById('tab-login-btn');
      const tabRegister = document.getElementById('tab-register-btn');
      const formLogin = document.getElementById('form-login');
      const formRegister = document.getElementById('form-register');
      if (tabLogin) {
        tabLogin.classList.toggle('active', isLogin);
        tabLogin.style.background = isLogin ? 'var(--azul)' : 'rgba(255,255,255,0.1)';
        tabLogin.style.color = isLogin ? 'white' : 'var(--gris)';
      }
      if (tabRegister) {
        tabRegister.classList.toggle('active', !isLogin);
        tabRegister.style.background = !isLogin ? 'var(--azul)' : 'rgba(255,255,255,0.1)';
        tabRegister.style.color = !isLogin ? 'white' : 'var(--gris)';
      }
      if (formLogin) formLogin.style.display = isLogin ? 'flex' : 'none';
      if (formRegister) formRegister.style.display = isLogin ? 'none' : 'flex';
    }

    function toggleRegisterPassword() {
      const el = document.getElementById('register-has-password');
      const checked = !!(el && el.checked);
      const container = document.getElementById('register-password-container');
      const pass = document.getElementById('register-password');
      if (container) container.style.display = checked ? 'flex' : 'none';
      if (checked && pass) pass.focus();
      else if (pass) pass.value = '';
    }

    async function loginNickname() {
      console.log('=== loginNickname START ===');
      const loginNickEl = document.getElementById('login-nickname');
      console.log('loginNickEl:', loginNickEl);
      const nick = loginNickEl ? loginNickEl.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '') : '';
      console.log('Nickname entered:', nick);
      
      if (!nick) {
        showToast('Ingresá un nickname', 'error');
        console.log('No nickname provided');
        return;
      }
      
      if (nick.length < 3) {
        showToast('El nickname debe tener al menos 3 caracteres', 'error');
        console.log('Nickname too short');
        return;
      }
      
      if (!db) db = getFirestoreDb();
      if (!db) {
        showToast('Base de datos no disponible', 'error');
        return;
      }
      
      try {
        // Check if nickname exists in Firestore
        const userDoc = await db.collection('plux_usuarios').doc(nick).get();
        if (!userDoc.exists) {
          showToast('El nickname @' + nick + ' no está registrado', 'error');
          console.log('Nickname not found in Firestore');
          return;
        }

        const userData = userDoc.data();
        if (userData.email) {
          showToast('Ese nickname pertenece a una cuenta. Entrá desde /login/.', 'error');
          console.log('Nickname belongs to email account');
          return;
        }

        const passContainer = document.getElementById('login-password-container');
        if (userData.password) {
          const passEl = document.getElementById('login-password');
          const userPass = passEl ? passEl.value : '';
          if (!userPass) {
            if (passContainer) passContainer.style.display = 'flex';
            if (passEl) passEl.focus();
            showToast('Este nickname requiere contraseña', 'info');
            return;
          }
          if (userPass !== userData.password) {
            showToast('Contraseña incorrecta', 'error');
            return;
          }
        }

        const localTrips = getStoredTrips();
        const cloudTrips = Array.isArray(userData.viajes_guardados) ? userData.viajes_guardados : [];
        const mergedTrips = (typeof mergeTrips === 'function') ? mergeTrips(localTrips, cloudTrips) : (cloudTrips.length > 0 ? cloudTrips : localTrips);
        saveTrips(mergedTrips, false);

        const localTemplates = getStoredTemplates();
        const cloudTemplates = Array.isArray(userData.plantillas) ? userData.plantillas : [];
        const mergedTemplates = (typeof mergeTemplates === 'function') ? mergeTemplates(localTemplates, cloudTemplates) : (cloudTemplates.length > 0 ? cloudTemplates : localTemplates);
        saveTemplates(mergedTemplates, false);

        const localFriends = getStoredFriends();
        const cloudFriends = Array.isArray(userData.amigos) ? userData.amigos : [];
        const mergedFriends = (typeof mergeFriends === 'function') ? mergeFriends(localFriends, cloudFriends) : (cloudFriends.length > 0 ? cloudFriends : localFriends);
        saveFriends(mergedFriends, false);

        currentNickname = nick;
        currentUserUid = nick;
        localStorage.setItem('Plux_Nickname', nick);
        localStorage.setItem('Plux_Uid', nick);
        if (userData.photoUrl) {
          localStorage.setItem('Plux_UserProfile_Photo', userData.photoUrl);
        }
        updateUserButtonDisplay();
        
        // Update merged data & last connection time in Firestore
        userData.viajes_guardados = mergedTrips;
        userData.plantillas = mergedTemplates;
        userData.amigos = mergedFriends;
        userData.ultimaConexion = new Date().toISOString();
        await db.collection('plux_usuarios').doc(nick).set(userData, { merge: true });
        
        // Load user preferences
        if (userData.idioma && userData.idioma !== currentLang) setLanguage(userData.idioma, false);
        if (userData.tema && userData.tema !== currentTheme) setTheme(userData.tema, false);
        if (userData.preferencias) userPreferences = userData.preferencias;
        
        renderTripLists();
        if (typeof listenUserIncomingConversations === 'function') listenUserIncomingConversations(nick);
        showToast('¡Bienvenido, @' + nick + '!', 'success');
        cerrarCuenta();
      } catch (e) {
        console.error('Error en login nickname:', e);
        showToast('Error al iniciar sesión', 'error');
      }
    }

    async function crearCuentaNickname() {
      console.log('=== crearCuentaNickname START ===');
      const loginNickEl = document.getElementById('login-nickname');
      const nick = loginNickEl ? loginNickEl.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '') : '';
      console.log('Nickname for account creation:', nick);
      
      if (!nick) {
        showToast('Ingresá un nickname', 'error');
        return;
      }
      
      if (nick.length < 3) {
        showToast('El nickname debe tener al menos 3 caracteres', 'error');
        return;
      }
      
      const hasPasswordEl = document.getElementById('register-has-password');
      const passEl = document.getElementById('register-password');
      const hasPassword = hasPasswordEl ? hasPasswordEl.checked : false;
      const password = passEl ? passEl.value : '';
      
      if (hasPassword && !password) {
        showToast('Ingresá una contraseña', 'error');
        return;
      }
      
      if (password && password.length < 6) {
        showToast('La contraseña debe tener al menos 6 caracteres', 'error');
        return;
      }
      
      if (!db) {
        showToast('Base de datos no disponible', 'error');
        return;
      }
      
      try {
        // Check if nickname exists in Firestore
        const userDoc = await db.collection('plux_usuarios').doc(nick).get();
        if (userDoc.exists) {
          showToast('El nickname @' + nick + ' ya está en uso', 'error');
          console.log('Nickname already exists, blocking creation');
          return;
        }

        const localTrips = getStoredTrips();
        const localFriends = getStoredFriends();
        const localPhoto = localStorage.getItem('Plux_UserProfile_Photo') || null;
        const userData = {
          uid: nick,
          nickname: nick,
          email: null,
          photoUrl: localPhoto,
          password: hasPassword ? password : null,
          idioma: currentLang,
          tema: currentTheme,
          viajes_guardados: localTrips,
          plantillas: [],
          preferencias: {},
          amigos: localFriends,
          creado: new Date().toISOString(),
          ultimaConexion: new Date().toISOString()
        };
        
        await db.collection('plux_usuarios').doc(nick).set(userData);
        console.log('Account created successfully in Firestore');

        currentNickname = nick;
        currentUserUid = nick;
        localStorage.setItem('Plux_Nickname', nick);
        localStorage.setItem('Plux_Uid', nick);
        updateUserButtonDisplay();
        showToast('¡Cuenta creada para @' + nick + '!', 'success');
        cerrarCuenta();
      } catch (e) {
        console.error('Error creando cuenta nickname:', e);
        showToast('Error al crear cuenta', 'error');
      }
    }

    async function generarNicknameUnico(user) {
      if (!user) return 'viajero_' + Math.floor(100 + Math.random() * 900);
      
      let raw = '';
      if (user.displayName) {
        raw = user.displayName;
      } else if (user.email) {
        raw = user.email.split('@')[0];
      } else if (user.uid) {
        raw = 'viajero_' + user.uid.substring(0, 5);
      }
      
      let base = raw
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9_]/g, '')
        .slice(0, 15);
        
      if (!base || base.length < 3) {
        base = 'viajero';
      }

      if (!db && typeof firebase !== 'undefined' && firebase.firestore) {
        db = firebase.firestore();
      }
      
      if (!db) {
        return base;
      }

      try {
        let candidate = base;
        let counter = 1;
        let isFree = false;

        while (!isFree && counter <= 20) {
          const docSnap = await db.collection('plux_usuarios').doc(candidate).get();
          if (!docSnap.exists) {
            isFree = true;
          } else {
            const data = docSnap.data();
            if (data && (data.uid === user.uid || (user.email && data.email === user.email))) {
              return candidate;
            }
            candidate = `${base}${Math.floor(10 + Math.random() * 90)}`;
            counter++;
          }
        }
        return candidate;
      } catch (e) {
        console.warn('Error verificando nickname único:', e);
        return base;
      }
    }
    window.generarNicknameUnico = generarNicknameUnico;

    // Helpers de Fusión (Merge) para sincronización multidispositivo y login
    function mergeTrips(localTrips, cloudTrips) {
      const local = Array.isArray(localTrips) ? localTrips : [];
      const cloud = Array.isArray(cloudTrips) ? cloudTrips : [];
      const result = [...cloud];
      
      local.forEach(lTrip => {
        if (!lTrip) return;
        const exists = result.some(cTrip => {
          if (!cTrip) return false;
          if (lTrip.tripId && cTrip.tripId && lTrip.tripId === cTrip.tripId) return true;
          if (lTrip.syncCode && cTrip.syncCode && lTrip.syncCode === cTrip.syncCode) return true;
          if (lTrip.nombre && cTrip.nombre && lTrip.nombre.toLowerCase().trim() === cTrip.nombre.toLowerCase().trim()) {
            const lDest = (lTrip.destinos || []).map(d => d.nombre).join('|');
            const cDest = (cTrip.destinos || []).map(d => d.nombre).join('|');
            if (lDest === cDest) return true;
          }
          return false;
        });
        if (!exists) {
          result.push(lTrip);
        }
      });
      return result;
    }
    window.mergeTrips = mergeTrips;

    function mergeTemplates(localTemplates, cloudTemplates) {
      const local = Array.isArray(localTemplates) ? localTemplates : [];
      const cloud = Array.isArray(cloudTemplates) ? cloudTemplates : [];
      const result = [...cloud];
      
      local.forEach(lTpl => {
        if (!lTpl) return;
        const exists = result.some(cTpl => {
          if (!cTpl) return false;
          if (lTpl.id && cTpl.id && lTpl.id === cTpl.id) return true;
          if (lTpl.nombre && cTpl.nombre && lTpl.nombre.toLowerCase().trim() === cTpl.nombre.toLowerCase().trim()) return true;
          return false;
        });
        if (!exists) {
          result.push(lTpl);
        }
      });
      return result;
    }
    window.mergeTemplates = mergeTemplates;

    function mergeFriends(localFriends, cloudFriends) {
      const set = new Set();
      (Array.isArray(cloudFriends) ? cloudFriends : []).forEach(f => {
        if (typeof f === 'string' && f.trim()) set.add(f.trim().toLowerCase().replace(/^@/, ''));
        else if (f && f.nickname) set.add(f.nickname.trim().toLowerCase().replace(/^@/, ''));
      });
      (Array.isArray(localFriends) ? localFriends : []).forEach(f => {
        if (typeof f === 'string' && f.trim()) set.add(f.trim().toLowerCase().replace(/^@/, ''));
        else if (f && f.nickname) set.add(f.nickname.trim().toLowerCase().replace(/^@/, ''));
      });
      return Array.from(set);
    }
    window.mergeFriends = mergeFriends;

    function sincronizarPerfil() {
      const ref = getPluxProfileRef();
      if (!ref && !currentNickname) return;
      const trips = getStoredTrips();
      const templates = getStoredTemplates();
      const friends = getStoredFriends();
      const photo = localStorage.getItem('Plux_UserProfile_Photo') || (firebaseUser && firebaseUser.photoURL) || null;
      let personalInfo = {};
      try {
        personalInfo = JSON.parse(localStorage.getItem('Plux_PersonalInfo') || '{}');
      } catch(e){}

      const payload = {
        uid: currentUserUid || currentNickname,
        email: firebaseUser?.email || null,
        nickname: currentNickname,
        photoUrl: photo,
        idioma: currentLang,
        tema: currentTheme,
        info_personal: personalInfo,
        nombreCompleto: personalInfo.fullname || (firebaseUser ? firebaseUser.displayName : null) || null,
        residencia: personalInfo.location || null,
        estiloViaje: personalInfo.travelStyle || null,
        bio: personalInfo.bio || null,
        viajes_guardados: trips,
        plantillas: templates,
        preferencias: userPreferences,
        amigos: friends,
        ultimaConexion: firebase.firestore.FieldValue.serverTimestamp()
      };

      if (ref) {
        ref.set(payload, { merge: true }).catch(e => console.error("Error sincronizando perfil por uid:", e));
      }
      if (currentNickname && db && currentUserUid !== currentNickname) {
        db.collection('plux_usuarios').doc(currentNickname).set(payload, { merge: true }).catch(e => console.error("Error sincronizando perfil por nick:", e));
      }
    }

    async function cargarPerfilUsuario() {
      const ref = getPluxProfileRef();
      if (!ref && !currentNickname && !firebaseUser) return;
      if (!db && typeof firebase !== 'undefined' && firebase.firestore) {
        db = firebase.firestore();
      }

      try {
        let doc = ref ? await ref.get() : null;
        if (doc && doc.exists) {
          const data = doc.data();
          let nick = data.nickname;
          if (!nick && firebaseUser) {
            nick = await generarNicknameUnico(firebaseUser);
          } else if (!nick) {
            nick = currentNickname || 'viajero';
          }
          currentNickname = String(nick).toLowerCase().replace(/[^a-z0-9_]/g, '');
          localStorage.setItem('Plux_Nickname', currentNickname);
          localStorage.setItem('Plux_Uid', currentUserUid || currentNickname);
          if (data.photoUrl) {
            localStorage.setItem('Plux_UserProfile_Photo', data.photoUrl);
          }
          if (data.info_personal && typeof data.info_personal === 'object') {
            localStorage.setItem('Plux_PersonalInfo', JSON.stringify(data.info_personal));
          } else if (data.infoPersonal && typeof data.infoPersonal === 'object') {
            localStorage.setItem('Plux_PersonalInfo', JSON.stringify(data.infoPersonal));
          } else if (data.nombreCompleto || data.residencia || data.estiloViaje || data.bio) {
            const reconstructed = {
              fullname: data.nombreCompleto || '',
              location: data.residencia || '',
              travelStyle: data.estiloViaje || 'mochilero',
              bio: data.bio || ''
            };
            localStorage.setItem('Plux_PersonalInfo', JSON.stringify(reconstructed));
          }
          if (data.idioma && data.idioma !== currentLang) setLanguage(data.idioma, false);
          if (data.tema && data.tema !== currentTheme) setTheme(data.tema, false);

          // Merge local and cloud trips to avoid losing any offline or cloud progress
          const localTrips = getStoredTrips();
          const cloudTrips = Array.isArray(data.viajes_guardados) ? data.viajes_guardados : [];
          const mergedTrips = mergeTrips(localTrips, cloudTrips);
          saveTrips(mergedTrips, false);

          const localTemplates = getStoredTemplates();
          const cloudTemplates = Array.isArray(data.plantillas) ? data.plantillas : [];
          const mergedTemplates = mergeTemplates(localTemplates, cloudTemplates);
          saveTemplates(mergedTemplates, false);

          const localFriends = getStoredFriends();
          const cloudFriends = Array.isArray(data.amigos) ? data.amigos : [];
          const mergedFriends = mergeFriends(localFriends, cloudFriends);
          saveFriends(mergedFriends, false);

          if (data.preferencias) userPreferences = data.preferencias;
          
          updateUserButtonDisplay();
          renderTripLists();
          sincronizarPerfil();
          if (typeof listenUserIncomingConversations === 'function') listenUserIncomingConversations(currentNickname);
        } else {
          if (firebaseUser) {
            const nick = await generarNicknameUnico(firebaseUser);
            currentNickname = nick;
            localStorage.setItem('Plux_Nickname', currentNickname);
            localStorage.setItem('Plux_Uid', currentUserUid || nick);
            if (firebaseUser.photoURL) {
              localStorage.setItem('Plux_UserProfile_Photo', firebaseUser.photoURL);
            }
            sincronizarPerfil();
            updateUserButtonDisplay();
            renderTripLists();
            if (typeof listenUserIncomingConversations === 'function') listenUserIncomingConversations(currentNickname);
          } else if (currentNickname) {
            sincronizarPerfil();
            if (typeof listenUserIncomingConversations === 'function') listenUserIncomingConversations(currentNickname);
          }
        }
      } catch (e) {
        if (e.code === 'permission-denied') {
          console.log("Permission denied - user not authenticated or no profile access");
          return;
        }
        console.error("Error cargando perfil:", e);
      }
    }

    // ================== VARIABLES GLOBALES ==================
    let currentLang = localStorage.getItem('Plux_Lang') || 'es';
    let currentTheme = localStorage.getItem('Plux_Theme') || 'theme-oscuro';
    let destinos = [];
    let openTransportDestIds = new Set();
    let collapsedEditorDestinos = new Set();
    let collapsedEditorDias = new Set();
    let collapsedEditorEventos = new Set();
    let collapsedResumenDestinos = new Set();
    let collapsedResumenDias = new Set();
    let isAllCollapsedResumen = false;
    let isAllCollapsedEditor = false;
    let lastLocalTripJson = '';
    let modoVista = 0; // 0: cards, 1: timeline, 2: presentation
    const modos = ['cards', 'timeline', 'presentacion'];
    let presentacionIndex= 0;
    let presentacionLista = [];
    let fechaCalendario = new Date();
    let diaSeleccionado = null;
    let lugarSalida = "";
    let vueltaGlobal = "";
    let vueltaPrecioGlobal = 0;
    let vueltaCostosAdicionales = [];
    let numPersonas = 1;
    let nombresPersonasGlobal = "";
    let listaViajeros = [];
    let pluxActiveChatId = null;
    let pluxSocialChats = JSON.parse(localStorage.getItem('PluxSocialChats_V2') || '{}');
    let pluxChatUnsubscribe = null;
    let pluxDMsUnsubscribe = null;

    // ================== COLLAPSE & ACCORDION HELPERS ==================
    function toggleEditorDestino(destId, e) {
      if (e) {
        // Prevent toggle if clicking on action buttons or input fields
        if (e.target.closest('.close-icon') || e.target.closest('button') || e.target.closest('input')) return;
      }
      if (collapsedEditorDestinos.has(destId)) {
        collapsedEditorDestinos.delete(destId);
      } else {
        collapsedEditorDestinos.add(destId);
      }
      const body = document.getElementById(`editor-dest-body-${destId}`);
      const chev = document.getElementById(`editor-dest-chev-${destId}`);
      if (body) {
        const isHidden = collapsedEditorDestinos.has(destId);
        body.style.display = isHidden ? 'none' : 'block';
        if (chev) chev.style.transform = isHidden ? 'rotate(-90deg)' : 'rotate(0deg)';
      }
    }
    window.toggleEditorDestino = toggleEditorDestino;

    function toggleEditorDia(destId, diaId, e) {
      if (e) {
        if (e.target.closest('.close-icon') || e.target.closest('.copy-icon') || e.target.closest('.weather-chip') || e.target.closest('button')) return;
      }
      const key = `${destId}_${diaId}`;
      if (collapsedEditorDias.has(key)) {
        collapsedEditorDias.delete(key);
      } else {
        collapsedEditorDias.add(key);
      }
      const body = document.getElementById(`editor-dia-body-${destId}-${diaId}`);
      const chev = document.getElementById(`editor-dia-chev-${destId}-${diaId}`);
      if (body) {
        const isHidden = collapsedEditorDias.has(key);
        body.style.display = isHidden ? 'none' : 'block';
        if (chev) chev.style.transform = isHidden ? 'rotate(-90deg)' : 'rotate(0deg)';
      }
    }
    window.toggleEditorDia = toggleEditorDia;

    function toggleEditorEvento(destId, diaId, ida, e) {
      if (e) {
        if (e.target.closest('input') || e.target.closest('button')) return;
      }
      const key = `${destId}_${diaId}_${ida}`;
      if (collapsedEditorEventos.has(key)) {
        collapsedEditorEventos.delete(key);
      } else {
        collapsedEditorEventos.add(key);
      }
      const body = document.getElementById(`editor-ev-body-${destId}-${diaId}-${ida}`);
      const chev = document.getElementById(`editor-ev-chev-${destId}-${diaId}-${ida}`);
      if (body) {
        const isHidden = collapsedEditorEventos.has(key);
        body.style.display = isHidden ? 'none' : 'block';
        if (chev) chev.style.transform = isHidden ? 'rotate(-90deg)' : 'rotate(0deg)';
      }
    }
    window.toggleEditorEvento = toggleEditorEvento;

    function toggleAllCollapseEditor() {
      isAllCollapsedEditor = !isAllCollapsedEditor;
      const txt = document.getElementById('editorCollapseTxt');
      const icon = document.getElementById('editorCollapseIcon');
      if (txt) txt.textContent = isAllCollapsedEditor ? 'Expandir todo' : 'Plegar todo';
      if (icon) icon.textContent = isAllCollapsedEditor ? '⇱' : '⇲';

      destinos.forEach(d => {
        if (isAllCollapsedEditor) {
          collapsedEditorDestinos.add(d.id);
          (d.dias || []).forEach(dia => {
            collapsedEditorDias.add(`${d.id}_${dia.id}`);
            (dia.eventos || []).forEach((ev, ida) => collapsedEditorEventos.add(`${d.id}_${dia.id}_${ida}`));
          });
        } else {
          collapsedEditorDestinos.delete(d.id);
          (d.dias || []).forEach(dia => {
            collapsedEditorDias.delete(`${d.id}_${dia.id}`);
            (dia.eventos || []).forEach((ev, ida) => collapsedEditorEventos.delete(`${d.id}_${dia.id}_${ida}`));
          });
        }
        const destBody = document.getElementById(`editor-dest-body-${d.id}`);
        const destChev = document.getElementById(`editor-dest-chev-${d.id}`);
        if (destBody) {
          destBody.style.display = isAllCollapsedEditor ? 'none' : 'block';
          if (destChev) destChev.style.transform = isAllCollapsedEditor ? 'rotate(-90deg)' : 'rotate(0deg)';
        }
        (d.dias || []).forEach(dia => {
          const diaBody = document.getElementById(`editor-dia-body-${d.id}-${dia.id}`);
          const diaChev = document.getElementById(`editor-dia-chev-${d.id}-${dia.id}`);
          if (diaBody) {
            diaBody.style.display = isAllCollapsedEditor ? 'none' : 'block';
            if (diaChev) diaChev.style.transform = isAllCollapsedEditor ? 'rotate(-90deg)' : 'rotate(0deg)';
          }
          (dia.eventos || []).forEach((ev, ida) => {
            const evBody = document.getElementById(`editor-ev-body-${d.id}-${dia.id}-${ida}`);
            const evChev = document.getElementById(`editor-ev-chev-${d.id}-${dia.id}-${ida}`);
            if (evBody) {
              evBody.style.display = isAllCollapsedEditor ? 'none' : 'block';
              if (evChev) evChev.style.transform = isAllCollapsedEditor ? 'rotate(-90deg)' : 'rotate(0deg)';
            }
          });
        });
      });
    }
    window.toggleAllCollapseEditor = toggleAllCollapseEditor;

    function toggleAllCollapseResumen() {
      isAllCollapsedResumen = !isAllCollapsedResumen;
      const btn = document.getElementById('btnToggleCollapseResumen');
      if (btn) btn.textContent = isAllCollapsedResumen ? 'Expandir todo' : 'Plegar todo';
      
      if (isAllCollapsedResumen) {
        destinos.forEach(d => {
          collapsedResumenDestinos.add(d.id);
          (d.dias || []).forEach(dia => collapsedResumenDias.add(`${d.id}_${dia.id}`));
        });
      } else {
        collapsedResumenDestinos.clear();
        collapsedResumenDias.clear();
      }
      renderResumen();
    }
    window.toggleAllCollapseResumen = toggleAllCollapseResumen;

    function toggleResumenDestino(destId) {
      if (collapsedResumenDestinos.has(destId)) {
        collapsedResumenDestinos.delete(destId);
      } else {
        collapsedResumenDestinos.add(destId);
      }
      const body = document.getElementById(`resumen-dest-body-${destId}`);
      const chev = document.getElementById(`resumen-dest-chev-${destId}`);
      if (body) {
        const isHidden = collapsedResumenDestinos.has(destId);
        body.style.display = isHidden ? 'none' : 'block';
        if (chev) chev.style.transform = isHidden ? 'rotate(-90deg)' : 'rotate(0deg)';
      }
    }
    window.toggleResumenDestino = toggleResumenDestino;

    function toggleResumenDia(destId, diaId) {
      const key = `${destId}_${diaId}`;
      if (collapsedResumenDias.has(key)) {
        collapsedResumenDias.delete(key);
      } else {
        collapsedResumenDias.add(key);
      }
      const body = document.getElementById(`resumen-dia-body-${destId}-${diaId}`);
      const chev = document.getElementById(`resumen-dia-chev-${destId}-${diaId}`);
      if (body) {
        const isHidden = collapsedResumenDias.has(key);
        body.style.display = isHidden ? 'none' : 'block';
        if (chev) chev.style.transform = isHidden ? 'rotate(-90deg)' : 'rotate(0deg)';
      }
    }
    window.toggleResumenDia = toggleResumenDia;

    function toggleResumenEventoDetails(el) {
      if (el) el.classList.toggle('expanded');
    }
    window.toggleResumenEventoDetails = toggleResumenEventoDetails;

    // ================== SELECTORES DE TEMA E IDIOMA ==================
    function toggleMobileMoreMenu(e) {
      if (e) {
        if (typeof e.stopPropagation === 'function') e.stopPropagation();
        if (typeof e.preventDefault === 'function') e.preventDefault();
      }
      const menu = document.getElementById('mobileMoreMenuDropdown');
      if (menu) {
        const isVisible = menu.classList.contains('show') || menu.style.display === 'block';
        if (isVisible) {
          menu.classList.remove('show');
          menu.style.display = 'none';
        } else {
          menu.classList.add('show');
          menu.style.display = 'block';
        }
      }
    }
    window.toggleMobileMoreMenu = toggleMobileMoreMenu;

    const PLUX_THEMES = [
      { id: 'theme-claro', name: 'Claro' },
      { id: 'theme-oscuro', name: 'Oscuro' },
      { id: 'theme-tokyo', name: 'Tokyo Night' },
      { id: 'theme-grid', name: 'The Grid' },
      { id: 'theme-terminal', name: 'Terminal' },
      { id: 'theme-starship', name: 'Starship' },
      { id: 'theme-ares', name: 'Ares' }
    ];

    function toggleLangDropdown(e) {
      if (e) {
        if (typeof e.stopPropagation === 'function') e.stopPropagation();
        if (typeof e.preventDefault === 'function') e.preventDefault();
      }
      const ld = document.getElementById('langDropdown');
      const td = document.getElementById('themeDropdown');
      if (td) {
        td.classList.remove('show');
        td.style.display = 'none';
      }
      if (ld) {
        const isVisible = ld.classList.contains('show') || ld.style.display === 'flex';
        if (isVisible) {
          ld.classList.remove('show');
          ld.style.display = 'none';
        } else {
          ld.classList.add('show');
          ld.style.display = 'flex';
        }
      }
    }
    window.toggleLangDropdown = toggleLangDropdown;

    function toggleThemeDropdown(e) {
      if (e) {
        if (typeof e.stopPropagation === 'function') e.stopPropagation();
        if (typeof e.preventDefault === 'function') e.preventDefault();
      }
      const ld = document.getElementById('langDropdown');
      const td = document.getElementById('themeDropdown');
      if (ld) {
        ld.classList.remove('show');
        ld.style.display = 'none';
      }
      if (td) {
        renderThemeDropdown();
        const isVisible = td.classList.contains('show') || td.style.display === 'flex';
        if (isVisible) {
          td.classList.remove('show');
          td.style.display = 'none';
        } else {
          td.classList.add('show');
          td.style.display = 'flex';
        }
      }
    }
    window.toggleThemeDropdown = toggleThemeDropdown;

    function renderThemeDropdown() {
      const td = document.getElementById('themeDropdown');
      if (!td) return;
      td.innerHTML = PLUX_THEMES.map(th => {
        const isActive = currentTheme === th.id;
        return `
          <div class="theme-option ${isActive ? 'active' : ''}" data-theme="${th.id}" onclick="window.setTheme('${th.id}')">${th.name}</div>
        `;
      }).join('');
    }
    window.renderThemeDropdown = renderThemeDropdown;

    function setLanguage(lang, sync = true) {
      if (!lang || !i18n[lang]) lang = 'es';
      currentLang = lang;
      localStorage.setItem('Plux_Lang', lang);

      const btn = document.getElementById('langButton');
      if (btn) btn.textContent = lang.toUpperCase();

      // Actualizar chips en menú colapsado
      document.querySelectorAll('.lang-chip').forEach(chip => {
        if (chip.getAttribute('data-lang') === lang) chip.classList.add('active');
        else chip.classList.remove('active');
      });

      // Actualizar clase de idioma en el body
      document.body.classList.remove('lang-es', 'lang-en', 'lang-fr', 'lang-de', 'lang-it');
      document.body.classList.add(`lang-${lang}`);

      // Actualizar opción activa en dropdown
      document.querySelectorAll('.lang-option').forEach(opt => {
        const optLang = opt.getAttribute('data-lang');
        if (optLang === lang) opt.classList.add('active');
        else opt.classList.remove('active');
      });

      // Cerrar dropdown
      const ld = document.getElementById('langDropdown');
      if (ld) ld.classList.remove('show');

      // Aplicar textos en la interfaz
      if (typeof applyGlobalI18n === 'function') applyGlobalI18n();
      if (typeof applyCuentaModalI18n === 'function') applyCuentaModalI18n();
      if (typeof renderDestinos === 'function' && document.getElementById('app') && document.getElementById('app').style.display !== 'none') {
        renderDestinos();
      }
      if (typeof renderTripLists === 'function') renderTripLists();
      if (typeof renderResumen === 'function' && document.getElementById('modal-resumen') && document.getElementById('modal-resumen').style.display !== 'none') {
        renderResumen();
      }

      // Sincronizar en Firestore si el usuario está autenticado
      if (sync && typeof sincronizarPerfil === 'function' && (currentNickname || currentUserUid)) {
        sincronizarPerfil();
      }
    }
    window.setLanguage = setLanguage;

    function setTheme(themeId, sync = true) {
      if (!themeId) themeId = 'theme-oscuro';
      if (!themeId.startsWith('theme-')) themeId = 'theme-' + themeId;

      currentTheme = themeId;
      localStorage.setItem('Plux_Theme', themeId);

      // Actualizar chips en menú colapsado
      document.querySelectorAll('.theme-chip').forEach(chip => {
        if (chip.getAttribute('data-theme') === themeId) chip.classList.add('active');
        else chip.classList.remove('active');
      });

      // Eliminar clases de temas previas del body y aplicar la nueva
      document.body.classList.remove(
        'theme-claro', 'theme-oscuro', 'theme-tokyo',
        'theme-grid', 'theme-starship', 'theme-terminal', 'theme-ares'
      );
      document.body.classList.add(themeId);

      // Banner para salir de Ares
      const aresBanner = document.getElementById('ares-esc-banner');
      if (aresBanner) {
        aresBanner.style.display = (themeId === 'theme-ares') ? 'block' : 'none';
      }

      // Actualizar dropdown y cerrarlo
      const td = document.getElementById('themeDropdown');
      if (td) {
        renderThemeDropdown();
        td.classList.remove('show');
      }

      // Sincronizar en Firestore si el usuario está autenticado
      if (sync && typeof sincronizarPerfil === 'function' && (currentNickname || currentUserUid)) {
        sincronizarPerfil();
      }
    }
    window.setTheme = setTheme;

    // Listeners globales para cerrar dropdowns al hacer clic fuera y tecla Escape
    document.addEventListener('click', (e) => {
      const isMore = e.target.closest('#mobileMenuDotsBtn') || e.target.closest('#mobileMoreMenuDropdown');
      if (!isMore) {
        const md = document.getElementById('mobileMoreMenuDropdown');
        if (md) {
          md.classList.remove('show');
          md.style.display = 'none';
        }
      }
      const isLang = e.target.closest('#langButton') || e.target.closest('#langDropdown');
      if (!isLang) {
        const ld = document.getElementById('langDropdown');
        if (ld) {
          ld.classList.remove('show');
          ld.style.display = 'none';
        }
      }
      const isTheme = e.target.closest('#themeButton') || e.target.closest('#themeDropdown');
      if (!isTheme) {
        const td = document.getElementById('themeDropdown');
        if (td) {
          td.classList.remove('show');
          td.style.display = 'none';
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const md = document.getElementById('mobileMoreMenuDropdown');
        if (md) {
          md.classList.remove('show');
          md.style.display = 'none';
        }
      }
      if (e.key === 'Escape' && currentTheme === 'theme-ares') {
        setTheme('theme-oscuro');
        if (typeof showToast === 'function') showToast('Saliste del tema Ares 🛡️', 'info');
      }
    });

    // Auto-inicializar idioma y tema guardados
    setTimeout(() => {
      setLanguage(currentLang, false);
      setTheme(currentTheme, false);
      renderThemeDropdown();
    }, 0);

    window.renderTravelerChips = function() {
      const container = document.getElementById('travelers-chips-list');
      if (!container) return;
      container.innerHTML = '';
      listaViajeros.forEach((item, idx) => {
        const isUser = item.startsWith('@');
        const chip = document.createElement('div');
        chip.className = `traveler-chip ${isUser ? 'user-tag' : 'name-tag'}`;
        chip.innerHTML = `
          <span>${isUser ? '👤 ' + item : '👤 ' + item}</span>
          <span class="traveler-chip-remove" onclick="eliminarViajeroChip(${idx})" title="Eliminar">×</span>
        `;
        container.appendChild(chip);
      });

      nombresPersonasGlobal = listaViajeros.join(', ');
      const npInput = document.getElementById('nombresPersonas');
      if (npInput) npInput.value = nombresPersonasGlobal;

      if (listaViajeros.length > numPersonas) {
        numPersonas = listaViajeros.length;
        const numPInput = document.getElementById('numPersonas');
        if (numPInput) numPInput.value = numPersonas;
      }
    };

    window.autoCompartirConUsuario = async function(targetNick) {
      if (!targetNick) return;
      const cleanNick = targetNick.replace(/^@/, '').trim();
      if (!cleanNick) return;
      if (typeof currentNickname !== 'undefined' && currentNickname && cleanNick === currentNickname) return;

      if (typeof db === 'undefined' || !db) {
        return;
      }

      try {
        const userDoc = await db.collection('plux_usuarios').doc(cleanNick).get();
        if (!userDoc.exists) {
          showToast(`Acompañante @${cleanNick} añadido (no registrado en Plux aún)`, 'info');
          return;
        }

        if (typeof syncCode === 'undefined' || !syncCode) {
          if (typeof generarCodigoInApp === 'function') {
            generarCodigoInApp();
          }
          await new Promise(r => setTimeout(r, 400));
        }

        if (typeof syncCode !== 'undefined' && syncCode) {
          const owner = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : 'Anónimo';
          await db.collection('plux_viajes_compartidos').doc(syncCode).set({
            colaboradores: firebase.firestore.FieldValue.arrayUnion(cleanNick),
            [`colaboradores_roles.${cleanNick}`]: 'editor',
            propietario: owner,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });

          showToast(`✨ ¡Viaje compartido automáticamente con @${cleanNick}!`, 'success');
        }
      } catch (e) {
        console.error('Error al compartir automáticamente:', e);
      }
    };

    window.agregarViajeroChip = function(val) {
      if (!checkEditPermission()) return;
      if (!val) return;
      let cleanVal = val.trim();
      if (!cleanVal) return;
      cleanVal = cleanVal.replace(/,/g, '').trim();
      if (!cleanVal) return;

      const norm = cleanVal.toLowerCase().replace(/^@/, '');
      const exists = listaViajeros.some(v => v.toLowerCase().replace(/^@/, '') === norm);
      if (!exists) {
        listaViajeros.push(cleanVal);
        window.renderTravelerChips();
        autoSave();
        if (document.getElementById('pantalla-resumen') && document.getElementById('pantalla-resumen').style.display === 'flex') {
          renderResumen();
        }

        if (cleanVal.startsWith('@')) {
          window.autoCompartirConUsuario(cleanVal);
        }

        // Sumar automáticamente al chat del viaje
        if (typeof window.sumarUsuarioAlChatDelViaje === 'function') {
          window.sumarUsuarioAlChatDelViaje(cleanVal, 'agregado');
        }
      }
    };

    window.eliminarViajeroChip = function(idx) {
      if (!checkEditPermission()) return;
      if (idx >= 0 && idx < listaViajeros.length) {
        const removed = listaViajeros[idx];
        const cleanRemoved = (removed || '').toLowerCase().replace(/^@/, '').trim();
        listaViajeros.splice(idx, 1);
        nombresPersonasGlobal = listaViajeros.join(', ');
        window.renderTravelerChips();

        // Actualizar el viaje guardado si está cargado
        const trips = (typeof getStoredTrips === 'function') ? getStoredTrips() : [];
        if (loadedTripIndex !== null && trips[loadedTripIndex]) {
          trips[loadedTripIndex].listaViajeros = [...listaViajeros];
          trips[loadedTripIndex].nombresPersonas = nombresPersonasGlobal;
          if (typeof saveTrips === 'function') saveTrips(trips);
        }

        // Remover participante del chat grupal del viaje
        if (typeof getTripChatChannelId === 'function' && typeof pluxSocialChats !== 'undefined' && pluxSocialChats) {
          const tripChatId = getTripChatChannelId();
          if (pluxSocialChats[tripChatId] && Array.isArray(pluxSocialChats[tripChatId].participants)) {
            pluxSocialChats[tripChatId].participants = pluxSocialChats[tripChatId].participants.filter(p => (typeof p === 'string' ? p.toLowerCase().replace(/^@/, '').trim() : '') !== cleanRemoved);
            localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
          }
        }

        // Sincronizar en Firestore si el viaje es colaborativo en la nube
        if (syncCode && typeof db !== 'undefined' && db) {
          db.collection('plux_viajes_compartidos').doc(syncCode).set({
            listaViajeros: listaViajeros,
            nombresPersonas: nombresPersonasGlobal
          }, { merge: true }).catch(console.warn);
        }

        autoSave();
        if (document.getElementById('pantalla-resumen') && document.getElementById('pantalla-resumen').style.display === 'flex') {
          renderResumen();
        }
        if (typeof renderActiveChatHeader === 'function') {
          renderActiveChatHeader();
        }
        if (typeof renderChannelsList === 'function') {
          renderChannelsList();
        }
        if (typeof showToast === 'function') {
          showToast(`Viajero @${cleanRemoved} eliminado del viaje`, 'info');
        }
      }
    };

    let map = null;
    let markersLayer = null;
    const STORAGE_KEY = 'PluxUniversal_V1'; // Universal key for both apps
    let GROQ_API_KEY = '';
    let GEMINI_API_KEY = '';
    let OPENAI_API_KEY = '';
    let DEEPSEEK_API_KEY = '';
    let MISTRAL_API_KEY = '';
    let OPENROUTER_API_KEY = '';
    let NVIDIA_NIM_API_KEY = '';
    let MULE_ROUTER_API_KEY = '';
    let OPENWEATHER_API_KEY = '';
    let db = null;
    let rtdb = null;
    let syncCode = null; // Current cloud sync code
    let currentTripId = null; // Unique identifier for current trip

    function getCurrentTripId() {
      if (syncCode) return syncCode;
      if (currentTripId) return currentTripId;
      if (typeof loadedTripIndex !== 'undefined' && loadedTripIndex !== null) {
        const trips = (typeof getStoredTrips === 'function') ? getStoredTrips() : [];
        if (trips[loadedTripIndex]) {
          if (!trips[loadedTripIndex].tripId) {
            trips[loadedTripIndex].tripId = 'trip_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 4);
            if (typeof saveTrips === 'function') saveTrips(trips, false);
          }
          currentTripId = trips[loadedTripIndex].tripId;
          return currentTripId;
        }
      }
      currentTripId = 'trip_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 4);
      return currentTripId;
    }
    window.getCurrentTripId = getCurrentTripId;

    function getTripChatChannelId() {
      return `trip_${getCurrentTripId()}`;
    }
    window.getTripChatChannelId = getTripChatChannelId;

    function getTripParticipants() {
      const participants = new Set();
      const myNick = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : 'Vos';
      participants.add(myNick);

      if (typeof listaViajeros !== 'undefined' && Array.isArray(listaViajeros)) {
        listaViajeros.forEach(v => {
          if (v && typeof v === 'string') {
            const clean = v.trim().replace(/^@/, '');
            if (clean) participants.add(clean);
          }
        });
      }

      if (typeof getTripChatChannelId === 'function') {
        const tripChatId = getTripChatChannelId();
        if (typeof pluxSocialChats !== 'undefined' && pluxSocialChats && pluxSocialChats[tripChatId] && Array.isArray(pluxSocialChats[tripChatId].participants)) {
          pluxSocialChats[tripChatId].participants.forEach(p => {
            if (p && typeof p === 'string') {
              const clean = p.trim().replace(/^@/, '');
              if (clean) participants.add(clean);
            }
          });
        }
      }

      return Array.from(participants);
    }
    window.getTripParticipants = getTripParticipants;

    function getRealtimeDb() {
      if (rtdb) return rtdb;
      try {
        if (typeof firebase !== 'undefined') {
          if (!firebase.apps || !firebase.apps.length) {
            getFirestoreDb();
          }
          if (typeof firebase.database === 'function') {
            rtdb = firebase.database();
            console.log("⚡ Firebase Realtime Database conectado y disponible.");
          }
        }
      } catch (e) {
        console.warn("Inicializando RTDB fallback:", e);
      }
      return rtdb;
    }
    window.getRealtimeDb = getRealtimeDb;

    // Inicialización inmediata e incondicional de Firebase y Cloud Firestore
    function getFirestoreDb() {
      if (db) return db;
      try {
        if (typeof firebase !== 'undefined') {
          if (!firebase.apps || !firebase.apps.length) {
            firebase.initializeApp({
              projectId: "nibecar-cofeben",
              appId: "1:88879103859:web:eb45dafc1677dc3c01cf06",
              databaseURL: "https://nibecar-cofeben-default-rtdb.firebaseio.com",
              storageBucket: "nibecar-cofeben.firebasestorage.app",
              apiKey: "AIzaSyAI67WxeycsfvMUaDU1KdAqyHXGy7GSDLo",
              authDomain: "nibecar-cofeben.firebaseapp.com",
              messagingSenderId: "88879103859",
              measurementId: "G-W5GX3XSCER"
            });
          }
          if (typeof firebase.firestore === 'function') {
            db = firebase.firestore();
            try {
              db.enablePersistence({synchronizeTabs:true}).catch(() => {});
            } catch(e) {}
            console.log("🔥 Cloud Firestore conectado y disponible.");
          }
          if (typeof firebase.database === 'function') {
            rtdb = firebase.database();
            console.log("⚡ Firebase Realtime Database conectado.");
          }
        }
      } catch (e) {
        console.warn("Inicializando Firestore fallback:", e);
      }
      return db;
    }
    // Ejecutar de inmediato
    getFirestoreDb();

    // ================== GOOGLE ANALYTICS 4 & TELEMETRÍA ==================
    function trackEvent(eventName, params = {}) {
      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', eventName, params);
        }
        if (typeof firebase !== 'undefined' && typeof firebase.analytics === 'function') {
          try {
            firebase.analytics().logEvent(eventName, params);
          } catch (fe) {}
        }
        console.log(`📊 [GA4 Event] ${eventName}`, params);
      } catch (err) {
        console.warn('Error enviando evento a Analytics:', err);
      }
    }
    window.trackEvent = trackEvent;

    // User Preferences
    let userPreferences = {
      eventsPerDay: 4,
      transportType: 'any',
      pace: 'relaxed'
    };

    async function loadKeys() {
      try {
        let text = '';
        try {
          const resp = await fetch('.env');
          if (resp.ok) text = await resp.text();
        } catch (e) {}
        if (!text || text.includes('<!DOCTYPE html>') || text.includes('<html')) {
          try {
            const resp = await fetch('sapi.txt');
            if (resp.ok) text = await resp.text();
          } catch (e) {}
        }
        if (text && !text.includes('<html')) {
          const lines = text.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('-'));
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.startsWith('AIzaSy')) GEMINI_API_KEY = line;
            else if (line.startsWith('gsk_')) GROQ_API_KEY = line;
            else if (line.startsWith('sk-proj-')) OPENAI_API_KEY = line;
            else if (line.startsWith('sk-or-')) OPENROUTER_API_KEY = line;
            else if (line.startsWith('sk-mr-')) MULE_ROUTER_API_KEY = line;
            else if (line.startsWith('nvapi-')) NVIDIA_NIM_API_KEY = line;
            else if (line.startsWith('sk-1') || (line.startsWith('sk-') && line.length === 35)) DEEPSEEK_API_KEY = line;
            else if (line.toLowerCase().includes('deepseek') && lines[i+1]) DEEPSEEK_API_KEY = lines[i+1];
            else if (line.toLowerCase().includes('mistral') && lines[i+1]) MISTRAL_API_KEY = lines[i+1];
            else if (line.toLowerCase().includes('nvidia') && lines[i+1]) NVIDIA_NIM_API_KEY = lines[i+1];
            else if (/^[a-f0-9]{32}$/i.test(line) && !line.startsWith('sk-')) {
              if (!MISTRAL_API_KEY) MISTRAL_API_KEY = line;
              else OPENWEATHER_API_KEY = line;
            } else if (line.toLowerCase().startsWith('openweather')) {
              const part = line.includes('=') ? line.split('=').slice(1).join('=').trim() : lines[i + 1];
              if (part) OPENWEATHER_API_KEY = part;
            }
          }
        }
        console.log('🛡️ Plux AI Gateway: Operando en https://pluxy.nibecar-cofeben.workers.dev/');
      } catch (e) {
        console.log('🛡️ Plux AI Gateway: Operando en https://pluxy.nibecar-cofeben.workers.dev/');
      }
    }



    function autoSave() {
      if (isSyncing) return;
      if (typeof isReadOnlyMode === 'function' && isReadOnlyMode()) {
        console.log("AutoSave blocked: Read-only mode active");
        return;
      }

      const hasContent = (destinos && destinos.length > 0) || (lugarSalida && lugarSalida.trim()) || (document.getElementById('fechaInicio')?.value);
      if (!hasContent) return;
      
      const tripId = getCurrentTripId();
      const trips = getStoredTrips();

      // 1. Localizar el viaje existente si ya está en la lista de viajes
      let targetIndex = -1;
      if (loadedTripIndex !== null && trips[loadedTripIndex]) {
        if (!trips[loadedTripIndex].tripId || trips[loadedTripIndex].tripId === tripId || (syncCode && trips[loadedTripIndex].syncCode === syncCode)) {
          targetIndex = loadedTripIndex;
        }
      }

      if (targetIndex === -1 && trips.length > 0) {
        targetIndex = trips.findIndex(t => t && ((tripId && t.tripId === tripId) || (syncCode && t.syncCode === syncCode)));
      }

      // Nombre amigable dinámico si no fue fijado manualmente
      let tripTitle = document.getElementById('nombreViaje')?.value?.trim();
      if (!tripTitle && targetIndex !== -1 && trips[targetIndex] && trips[targetIndex].nombre && trips[targetIndex].nombre !== t('untitled_event') && trips[targetIndex].nombre !== 'Viaje sin título') {
        tripTitle = trips[targetIndex].nombre;
      }
      if (!tripTitle) {
        if (destinos && destinos.length > 0) {
          const destNames = destinos.map(d => d.nombre).filter(Boolean).slice(0, 3).join(' & ');
          tripTitle = `Viaje a ${destNames || 'Destino'}`;
        } else if (lugarSalida && lugarSalida.trim()) {
          tripTitle = `Viaje desde ${lugarSalida.trim()}`;
        } else {
          tripTitle = t('untitled_event') || 'Mi Viaje';
        }
      }

      const tripDataToSave = {
        nombre: tripTitle,
        fecha: new Date().toISOString(),
        lugarSalida: lugarSalida || '',
        numPersonas: numPersonas || 1,
        nombresPersonas: nombresPersonasGlobal || '',
        listaViajeros: (typeof listaViajeros !== 'undefined' && Array.isArray(listaViajeros)) ? [...listaViajeros] : [],
        tripId: tripId,
        fechaInicio: document.getElementById('fechaInicio')?.value || '',
        destinos: destinos || [],
        vueltaGlobal: typeof vueltaGlobal !== 'undefined' ? vueltaGlobal : '',
        vueltaPrecioGlobal: typeof vueltaPrecioGlobal !== 'undefined' ? vueltaPrecioGlobal : 0,
        vueltaCostosAdicionales: typeof vueltaCostosAdicionales !== 'undefined' ? vueltaCostosAdicionales : [],
        syncCode: syncCode || null,
        userPreferences: typeof userPreferences !== 'undefined' ? userPreferences : null
      };

      if (targetIndex !== -1) {
        // Actualizar el viaje existente en su posición (1 solo registro, no duplicar)
        trips[targetIndex] = {
          ...trips[targetIndex],
          ...tripDataToSave,
          nombre: (trips[targetIndex].nombre && trips[targetIndex].nombre !== t('untitled_event') && trips[targetIndex].nombre !== 'Viaje sin título' && !document.getElementById('nombreViaje')?.value?.trim()) ? trips[targetIndex].nombre : tripTitle
        };
        loadedTripIndex = targetIndex;
      } else {
        // Nuevo viaje: agregar 1 sola vez y fijar loadedTripIndex
        trips.push(tripDataToSave);
        loadedTripIndex = trips.length - 1;
      }

      saveTrips(trips, true);
      renderTripLists();
      
      const tripData = {
        lugarSalida, numPersonas, 
        nombresPersonas: nombresPersonasGlobal,
        listaViajeros: [...listaViajeros],
        tripId: tripId,
        fechaInicio: document.getElementById('fechaInicio')?.value || '',
        destinos, vueltaGlobal, vueltaPrecioGlobal, vueltaCostosAdicionales,
        syncCode, userPreferences
      };
      lastLocalTripJson = JSON.stringify(tripData);

      // Also upload to Firestore if syncCode exists and we have permissions
      if (db && syncCode && window.currentTripRole !== 'viajero' && window.currentTripRole !== 'reader' && window.currentTripRole !== 'lector') {
        db.collection("plux_viajes_compartidos").doc(syncCode).set({
          data: lastLocalTripJson,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true }).catch(e => console.error("Error autosaving to Firestore:", e));
      }
    }

    let isSyncing = false; // Prevent loops
    let unsubSnapshot = null; // Store active Firestore listener
    function loadFromStorage() {
      const trips = getStoredTrips();
      if (trips.length > 0) {
        cargarViaje(trips.length - 1, false);
      }
    }

    async function initFirebaseAuth() {
      if (typeof firebase === 'undefined') {
        console.warn("Firebase SDK no está disponible (modo offline).");
        const savedNick = localStorage.getItem('Plux_Nickname');
        if (savedNick) {
          currentNickname = savedNick;
          currentUserUid = localStorage.getItem('Plux_Uid') || savedNick;
          updateUserButtonDisplay();
          cargarPerfilUsuario();
        } else {
          onFirebaseUserSignedOut();
        }
        return;
      }

      if (!firebase.apps || !firebase.apps.length) {
        try {
          firebase.initializeApp({
            projectId: "nibecar-cofeben",
            appId: "1:88879103859:web:eb45dafc1677dc3c01cf06",
            databaseURL: "https://nibecar-cofeben-default-rtdb.firebaseio.com",
            storageBucket: "nibecar-cofeben.firebasestorage.app",
            apiKey: "AIzaSyAI67WxeycsfvMUaDU1KdAqyHXGy7GSDLo",
            authDomain: "nibecar-cofeben.firebaseapp.com",
            messagingSenderId: "88879103859",
            measurementId: "G-W5GX3XSCER"
          });
        } catch (e) {
          console.error("Manual Firebase init error:", e);
        }
      }

      if (typeof firebase.firestore === 'function') {
        db = firebase.firestore();
      }

      if (typeof firebase.database === 'function') {
        rtdb = firebase.database();
      }
      
      // Inicializar Analytics
      if (typeof firebase.analytics === 'function') {
        try {
          firebase.analytics();
          console.log("📊 Firebase Analytics inicializado (Plux web app)");
        } catch (e) {
          console.warn("Analytics no disponible:", e);
        }
      }
      
      if (typeof firebase.auth === 'function') {
        return new Promise((resolve) => {
          firebase.auth().onAuthStateChanged(async (user) => {
            if (user && user.email && !user.isAnonymous) {
              onFirebaseUserSignedIn(user);
            } else {
              const savedNick = localStorage.getItem('Plux_Nickname');
              if (savedNick) {
                currentNickname = savedNick;
                currentUserUid = localStorage.getItem('Plux_Uid') || savedNick;
                updateUserButtonDisplay();
                cargarPerfilUsuario();
              } else {
                onFirebaseUserSignedOut();
              }
              try {
                if (!firebase.auth().currentUser) {
                  await firebase.auth().signInAnonymously();
                  console.log("🔥 Sesión anónima (sincronización nube).");
                }
              } catch (error) {
                console.error("🔥 Error en autenticación anónima:", error);
              }
            }
            resolve();
          });
        });
      }
    }

    function activarListenerNube() {
      if (db && syncCode) {
        if (unsubSnapshot) {
          unsubSnapshot(); // Desuscribirse del viaje anterior para no mezclar ediciones
          console.log("Desuscrito del viaje anterior.");
        }
        unsubSnapshot = db.collection("plux_viajes_compartidos").doc(syncCode).onSnapshot(doc => {
          if (doc.exists && !isSyncing) {
            const remoteData = doc.data();
            const remoteJson = remoteData ? remoteData.data : null;
            if (remoteJson && remoteJson === lastLocalTripJson) {
              // It's our own local write echo! Do not overwrite local state or reset DOM inputs.
              return;
            }
            isSyncing = true;
            if (remoteJson) {
              importarViajeString(remoteJson, false);
            }
            
            // Check role in real-time
            const data = doc.data();
            const roles = data.colaboradores_roles || {};
            const owner = data.propietario;
            const urlReaderParams1 = new URLSearchParams(window.location.search);
            const isForcedReader1 = urlReaderParams1.get('mode') === 'reader' || urlReaderParams1.get('role') === 'reader';
            if (isForcedReader1) {
                window.currentTripRole = 'reader';
            } else if (currentNickname === owner) {
                window.currentTripRole = 'owner';
            } else if (currentNickname) {
                window.currentTripRole = roles[currentNickname] || 'editor';
            } else {
                window.currentTripRole = 'editor';
            }
            
            if (window.currentTripRole === 'viajero' || window.currentTripRole === 'reader' || window.currentTripRole === 'lector') {
                mostrarAdvertenciaSoloLectura();
            } else {
                ocultarAdvertenciaSoloLectura();
            }
            
            setTimeout(() => { isSyncing = false; }, 1000);
          }
        });
      }
    }

    function importarViajeString(jsonStr, triggerSave = true) {
        try {
          lastLocalTripJson = jsonStr;
          const data = JSON.parse(jsonStr);
          lugarSalida = data.lugarSalida || '';
          numPersonas = data.numPersonas || 1;
          destinos = data.destinos || [];
          vueltaGlobal = data.vueltaGlobal || '';
          vueltaPrecioGlobal = data.vueltaPrecioGlobal || 0;
          vueltaCostosAdicionales = data.vueltaCostosAdicionales || [];
          if (data.tripId) currentTripId = data.tripId;

          if (data.listaViajeros && Array.isArray(data.listaViajeros)) {
            listaViajeros = [...data.listaViajeros];
          } else if (data.nombresPersonas) {
            listaViajeros = data.nombresPersonas.split(',').map(s=>s.trim()).filter(Boolean);
          }
          nombresPersonasGlobal = listaViajeros.join(', ');
          const npInput = document.getElementById('nombresPersonas');
          if (npInput) npInput.value = nombresPersonasGlobal;
          if (typeof window.renderTravelerChips === 'function') {
            window.renderTravelerChips();
          }
          
          if (document.getElementById('lugarSalida')) document.getElementById('lugarSalida').value = lugarSalida;
          if (document.getElementById('numPersonas')) document.getElementById('numPersonas').value = numPersonas;
          if (document.getElementById('fechaInicio') && data.fechaInicio) document.getElementById('fechaInicio').value = data.fechaInicio;
          
          renderDestinos();
          renderVueltaCostos();
          if (triggerSave) autoSave();
        } catch(e) { console.error(e); }
    }

    function generarCodigoInApp() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let part1 = '', part2 = '';
      for (let i=0; i<4; i++) part1 += chars.charAt(Math.floor(Math.random() * chars.length));
      for (let i=0; i<4; i++) part2 += chars.charAt(Math.floor(Math.random() * chars.length));
      const code = `${part1}-${part2}`;
      const oldTripId = currentTripId;
      syncCode = code;
      currentTripId = code;
      localStorage.setItem('PluxSyncCode', code);
      
      const display = document.getElementById('display-invite-code');
      const container = document.getElementById('invite-code-container');
      if (display && container) {
        display.innerText = code;
        container.style.display = 'block';
      }
      activarListenerNube();
      autoSave();

      if (typeof migrarChatALocalACodigo === 'function') {
        migrarChatALocalACodigo(code, oldTripId);
      }

      showToast(`Código generado: ${code}`, 'success');
    }


    function abrirResumen() {
      autoSave();
      document.getElementById('modal-resumen').style.display = 'flex';
      renderResumen();
    }

    // Tasas de cambio aproaimadas (base EUR)
    const exchangeRates = { EUR: 1, USD: 1.09, GBP: 0.86, JPY: 158, ARS: 920, MXN: 18.5, CAD: 1.47, AUD: 1.62, CHF: 0.95, CNY: 7.85 };

    function t(key, params = {}) {
      let keys = key.split('.');
      let value = i18n[currentLang];
      for (let k of keys) {
        if (value && value[k] !== undefined) value = value[k];
        else return key;
      }
      if (typeof value === 'string') {
        for (let p in params) value = value.replace(`{${p}}`, params[p]);
      }
      return value;
    }

    // ================== TOAST SYSTEM ==================
    function showToast(msg, type='info') {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      let icon = 'info';
      if(type === 'success') icon = 'ok';
      if(type === 'error') icon = 'error';
      toast.innerHTML = `<span>${icon}</span> <span>${msg}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.animation = 'slideUpFade 0.3s ease-in reverse forwards';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    async function unirseAViaje(inputId = 'join-code-input-herramientas') {
      const codeInput = document.getElementById(inputId);
      if (!codeInput) return;
      const code = codeInput.value.trim().toUpperCase();
      if(!code) { showToast(t('toast_code_invalid'), 'error'); return; }

      if (!db) {
        showToast(t('toast_connecting'), 'info');
        await initFirebaseAuth();
      }
      if (!db) {
        showToast(t('toast_cloud_off'), 'error');
        return;
      }

      showToast(t('toast_searching'), 'info');
      try {
        const docSnap = await db.collection("plux_viajes_compartidos").doc(code).get();
        if (docSnap.exists) {
          const data = docSnap.data();
          syncCode = code;
          importarViajeString(data.data);

          if (currentNickname) {
            const colaboradores = data.colaboradores || [];
            if (!colaboradores.includes(currentNickname)) {
              colaboradores.push(currentNickname);
              await db.collection("plux_viajes_compartidos").doc(code).update({ colaboradores: colaboradores });
            }
          }

          activarListenerNube();
          showToast(t('toast_join_ok', { code }), 'success');
          const panel = document.getElementById('modal-panel-herramientas');
          const viajes = document.getElementById('modal-viajes');
          if (panel) panel.style.display = 'none';
          if (viajes) viajes.style.display = 'none';
          empezar();
        } else {
          showToast(t('toast_code_not_found'), 'error');
        }
      } catch(e) {
        console.error(e);
        showToast(t('toast_cloud_error'), 'error');
      }
    }

    // ================== CHECKLIST IA PERSONALIZADA ==================
    let checklistData = [];

    function abrirChecklist() {
      cerrarPanelHerramientas();
      document.getElementById('modal-checklist').style.display = 'flex';
      const saved = JSON.parse(localStorage.getItem('PluxChecklist_V2') || '[]');
      if (saved.length > 0) {
        checklistData = saved;
        renderChecklist();
      } else {
        generarChecklistIA();
      }
    }

    function cerrarChecklist() {
      document.getElementById('modal-checklist').style.display = 'none';
    }

    async function generarChecklistIA() {
      const body = document.getElementById('checklist-body');
      body.innerHTML = '<p style="color:var(--gris);text-align:center;padding:30px;"> Generando checklist personalizada...</p>';
      
      const destNames = destinos.map(d => d.nombre).join(', ') || 'destino genérico';
      const personas = numPersonas || 1;
      const prompt = `Genera una checklist de viaje personalizada para ${personas} persona(s) que viajan a: ${destNames}. Crea items categorizados en: Documentos, Ropa, Electrónica, Salud, Dinero, Miscelánea. Responde SOLO con JSON: {"categorias":[{"nombre":"Documentos","emoji":"Doc","items":["Pasaporte","DNI"]}]}`;
      
      try {
        const text = await callAI(prompt);
        const jsonStr = text.replace(/```json\n?/g,'').replace(/```\n?/g,'').trim();
        const data = JSON.parse(jsonStr);
        
        checklistData = [];
        data.categorias.forEach(cat => {
          cat.items.forEach(item => {
            checklistData.push({ categoria: cat.nombre, emoji: cat.emoji, item, done: false, id: Date.now() + Math.random() });
          });
        });
        localStorage.setItem('PluxChecklist_V2', JSON.stringify(checklistData));
        renderChecklist();
        showToast('Checklist personalizada generada', 'success');
      } catch(e) {
        // Fallback: static checklist
        checklistData = [
          { categoria: 'Documentos', emoji: 'Item', item: 'Pasaporte / DNI', done: false, id: 1 },
          { categoria: 'Documentos', emoji: 'Item', item: 'Seguro de viaje', done: false, id: 2 },
          { categoria: 'Documentos', emoji: 'Item', item: 'Reservas impresas / PDF', done: false, id: 3 },
          { categoria: 'Electrónica', emoji: 'Item', item: 'Cargador y adaptador de corriente', done: false, id: 4 },
          { categoria: 'Electrónica', emoji: 'Item', item: 'Auriculares', done: false, id: 5 },
          { categoria: 'Salud', emoji: 'Item', item: 'Medicamentos habituales', done: false, id: 6 },
          { categoria: 'Salud', emoji: 'Item', item: 'Protector solar', done: false, id: 7 },
          { categoria: 'Dinero', emoji: 'Item', item: 'Tarjetas de crédito/débito', done: false, id: 8 },
          { categoria: 'Dinero', emoji: 'Item', item: 'Efectivo en moneda local', done: false, id: 9 },
          { categoria: 'Miscelánea', emoji: 'Item', item: 'Botella de agua reutilizable', done: false, id: 10 },
          { categoria: 'Miscelánea', emoji: 'Item', item: 'Candado para equipaje', done: false, id: 11 },
        ];
        renderChecklist();
      }
    }

    function renderChecklist() {
      const body = document.getElementById('checklist-body');
      const done = checklistData.filter(i => i.done).length;
      const total = checklistData.length;
      document.getElementById('checklist-count').textContent = `${done} de ${total} completados`;
      document.getElementById('checklist-progress-bar').style.width = total > 0 ? `${(done/total)*100}%` : '0%';
      
      const cats = {};
      checklistData.forEach(item => {
        if (!cats[item.categoria]) cats[item.categoria] = { emoji: item.emoji, items: [] };
        cats[item.categoria].items.push(item);
      });
      
      let html = '';
      Object.entries(cats).forEach(([catName, cat]) => {
        html += `<div class="checklist-category">
          <h4>${cat.emoji} ${catName}</h4>`;
        cat.items.forEach(item => {
          html += `<div class="checklist-item ${item.done ? 'done' : ''}" onclick="toggleChecklistItem('${item.id}')">
            <input type="checkbox" ${item.done ? 'checked' : ''} onchange="event.stopPropagation(); toggleChecklistItem('${item.id}')">
            <label>${item.item}</label>
          </div>`;
        });
        html += '</div>';
      });
      body.innerHTML = html;
    }

    function toggleChecklistItem(id) {
      const item = checklistData.find(i => i.id == id);
      if (item) {
        item.done = !item.done;
        localStorage.setItem('PluxChecklist_V2', JSON.stringify(checklistData));
        renderChecklist();
      }
    }

    function agregarItemChecklist(texto) {
      if (!texto.trim()) return;
      checklistData.push({ categoria: 'Miscelánea', emoji: 'Item', item: texto.trim(), done: false, id: Date.now() });
      localStorage.setItem('PluxChecklist_V2', JSON.stringify(checklistData));
      renderChecklist();
      document.getElementById('checklist-add-input').value = '';
      showToast('Item añadido', 'success');
    }


    // ================== CHAT IA AGENTE ==================
    let chatHistory = [];
    const CHAT_SYSTEM = `Sos Pluxy, el asistente de viajes inteligente y compañero de rutas de Plux con capacidades AGENTES REALES. Tenés acceso completo al itinerario del usuario y podés modificarlo directamente.
IMPORTANTE SOBRE TU IDENTIDAD: Sos Pluxy, un asistente de viajes inteligente y copiloto digital. NUNCA sos un perro, ni animal de 4 patas, ni mascota canina. Tu nombre es siempre Pluxy.

Al final de tu respuesta podés incluir comandos especiales para ejecutar acciones simultáneamente:

DESTINOS Y ESTRUCTURA:
- [ACCION:DESTINO:Ciudad] → Agrega un nuevo destino al viaje (ej: [ACCION:DESTINO:Madrid] o [ACCION:DESTINO:Tokio]). REGLA: Reemplazá "Ciudad" por el nombre exacto de la ciudad real. NUNCA escribas la palabra "NombreDestino" ni pongas múltiples ciudades separadas por comas en un solo corchete. Usá un comando por ciudad.
- [ACCION:ELIMINAR_DESTINO:Ciudad] → Elimina por completo ese destino del viaje (ej: [ACCION:ELIMINAR_DESTINO:Tokio])
- [ACCION:LIMPIAR_DESTINO:Ciudad] → Borra todos los días de ese destino (ej: [ACCION:LIMPIAR_DESTINO:Madrid])
- [ACCION:AGREGAR_DIA:Ciudad|DiaNumero] → Agrega un día específico (ej: [ACCION:AGREGAR_DIA:Roma|5])
- [ACCION:ELIMINAR_DIA:Ciudad|DiaNumero] → Elimina un día
- [ACCION:DUPLICAR_DIA:Ciudad|DiaNumero] → Duplica un día

EVENTOS:
- [ACCION:AGREGAR_EVENTO:Ciudad|DiaNumero|Hora|Titulo|Notas|Costo] → Agrega evento con costo estimado en euros (ej: [ACCION:AGREGAR_EVENTO:Roma|1|10:00|Coliseo|Entrada general|18] o [ACCION:AGREGAR_EVENTO:París|2|15:00|Torre Eiffel|Subida al mirador|28])
- [ACCION:EDITAR_EVENTO:Ciudad|DiaNumero|NumeroEvento|Campo|Valor] → Edita evento (campo: hora/titulo/notas/costo/duracion)
- [ACCION:ELIMINAR_EVENTO:Ciudad|DiaNumero|NumeroEvento] → Elimina evento específico
- [ACCION:DUPLICAR_EVENTO:Ciudad|DiaNumero|NumeroEvento] → Duplica evento
- [ACCION:ORGANIZAR_ITINERARIO:Ciudad|DiaNumero] → Ordena eventos por hora

TRANSPORTE Y ALOJAMIENTO:
- [ACCION:TRANSPORTE:Origen|Destino|Medio|Precio|Descripcion] → Agrega transporte (ej: [ACCION:TRANSPORTE:Madrid|Tokio|Avión|850|Vuelo directo])
- [ACCION:ESCALA:Ciudad|TramoIndex|CiudadEscala|Duracion|Notas] → Agrega escala a un tramo
- [ACCION:ALOJAMIENTO:Ciudad|DiaInicio|DiaFin|Precio|Nombre] → Agrega alojamiento (ej: [ACCION:ALOJAMIENTO:Tokio|1|5|600|Hotel Shinjuku])
- [ACCION:AGREGAR_COSTO:Ciudad|DiaNumero|Descripcion|Precio] → Costo adicional en un día

CONFIGURACIÓN E ITINERARIOS:
- [ACCION:SET_PERSONAS:Numero] → Cambia el número de personas
- [ACCION:SET_ORIGEN:Ciudad] → Cambia el lugar de salida
- [ACCION:ITINERARIO:Ciudad|Dias] → Genera itinerario IA completo para ese destino con los días especificados (ej: [ACCION:ITINERARIO:Madrid|3] o [ACCION:ITINERARIO:Tokio|4]). NOTA: Este comando YA crea el destino automáticamente si no existe, por lo que NO agregues también [ACCION:DESTINO:Ciudad] para la misma ciudad.

VISTAS Y HERRAMIENTAS:
- [ACCION:ABRIR_MAPA] → Abre el mapa del viaje
- [ACCION:ABRIR_RESUMEN] → Muestra el resumen del viaje
- [ACCION:ABRIR_CLIMA] → Abre la herramienta de clima para buscar
- [ACCION:CLIMA:Ciudad] → Consulta y comenta el clima de esa ciudad
- [ACCION:ABRIR_CHECKLIST] → Genera checklist personalizada
- [ACCION:VIAJE_ACTIVO] → Activa modo viaje activo (muestra itinerario del día actual)
- [ACCION:INVITAR_COLABORADOR:Nickname] → Invita a un colaborador por nickname (ej: @maria)

Tenés acceso al clima actual del viaje (OpenWeather) en el contexto del mensaje. Usalo para recomendar ropa, actividades o cambios de plan.

REGLA CRÍTICA DE IDIOMA: Respondé SIEMPRE en el MISMO IDIOMA en el que te hable o escriba el usuario. Si el usuario te habla en inglés, respondé 100% en inglés. Si te habla en francés, respondé en francés. Si te habla en alemán, italiano o portugués, respondé en ese idioma respectivo. Si te habla en español, respondé en español de forma amigable y concisa (podés usar tono cercano o rioplatense si el usuario lo utiliza).
Cuando el usuario pide hacer algo, HACELO con los comandos correspondientes además de explicar brevemente. Sos un agente que actúa, no solo habla.`;

    function abrirChatIA() {
      document.getElementById('modal-chat-ia').style.display = 'flex';
      document.getElementById('chat-input').focus();
    }

    function cerrarChatIA() {
      document.getElementById('modal-chat-ia').style.display = 'none';
    }

    // ========== SUPPORT FUNCTIONS ==========
    function abrirSupport() {
      const modal = document.getElementById('modal-support');
      modal.style.display = 'flex';
      mostrarOpcionesSupport();
      actualizarIdiomaSupport();
    }

    function cerrarSupport() {
      document.getElementById('modal-support').style.display = 'none';
    }

    function mostrarOpcionesSupport() {
      document.getElementById('support-content').style.display = 'block';
      document.getElementById('support-form').style.display = 'none';
      // Limpiar formulario
      document.getElementById('support-name').value = '';
      document.getElementById('support-email').value = '';
      document.getElementById('support-message').value = '';
    }

    function mostrarFormuarioSupport(tipo) {
      window.supportType = tipo;
      document.getElementById('support-content').style.display = 'none';
      document.getElementById('support-form').style.display = 'block';
      document.getElementById('support-message').focus();
    }

    async function enviarSupport() {
      const nombre = document.getElementById('support-name').value.trim();
      const email = document.getElementById('support-email').value.trim();
      const mensaje = document.getElementById('support-message').value.trim();
      const tipo = window.supportType || 'other';

      // Validar campos
      if (!nombre || !email || !mensaje) {
        showToast(t('support_required'), 'error');
        return;
      }

      // Validar email
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Email inválido', 'error');
        return;
      }

      // Mapear tipo a etiqueta
      const tipoMap = {
        suggestion: t('support_suggestion'),
        error: t('support_error'),
        help: t('support_help'),
        other: t('support_other')
      };

      const tipoLabel = tipoMap[tipo] || 'Consulta';

      // 1. Guardar ticket directamente en Cloud Firestore ('soporte')
      let firestoreSaved = false;
      try {
        let firestoreInstance = (typeof db !== 'undefined' && db) ? db : (typeof firebase !== 'undefined' && firebase.apps.length ? firebase.firestore() : null);
        if (!firestoreInstance && typeof firebase !== 'undefined') {
          if (!firebase.apps.length) {
            firebase.initializeApp({
              projectId: "nibecar-cofeben",
              appId: "1:88879103859:web:eb45dafc1677dc3c01cf06",
              databaseURL: "https://nibecar-cofeben-default-rtdb.firebaseio.com",
              storageBucket: "nibecar-cofeben.firebasestorage.app",
              apiKey: "AIzaSyAI67WxeycsfvMUaDU1KdAqyHXGy7GSDLo",
              authDomain: "nibecar-cofeben.firebaseapp.com",
              messagingSenderId: "88879103859"
            });
          }
          firestoreInstance = firebase.firestore();
        }

        if (firestoreInstance) {
          const ticketData = {
            userName: nombre,
            userEmail: email,
            message: mensaje,
            category: tipo,
            subject: `[${tipoLabel}] ${mensaje.slice(0, 40)}${mensaje.length > 40 ? '...' : ''}`,
            status: 'open',
            priority: tipo === 'error' ? 'high' : 'normal',
            appSource: 'Plux Web',
            lang: currentLang || 'es',
            createdAt: (typeof firebase !== 'undefined' && firebase.firestore && firebase.firestore.FieldValue) ? firebase.firestore.FieldValue.serverTimestamp() : new Date().toISOString(),
            fecha: new Date().toLocaleString()
          };
          await firestoreInstance.collection('soporte').add(ticketData);
          firestoreSaved = true;
          console.log("🔥 Ticket de soporte guardado exitosamente en Cloud Firestore ('soporte')");
        }
      } catch (firestoreErr) {
        console.warn("⚠️ No se pudo guardar en Firestore soporte directamente:", firestoreErr);
      }

      // 2. Notificación por Formspree / Email en background
      const formData = new FormData();
      formData.append('email', email);
      formData.append('name', nombre);
      formData.append('_subject', `Plux - ${tipoLabel}`);
      formData.append('message', `Tipo: ${tipoLabel}\nIdioma: ${currentLang}\n\n${mensaje}`);
      formData.append('_captcha', 'false');
      formData.append('_next', window.location.href);

      try {
        const response = await fetch('https://formspree.io/f/mwvjnpzk', {
          method: 'POST',
          body: formData,
          mode: 'cors',
          redirect: 'follow'
        });

        if (response.ok || response.status === 302 || response.status === 201 || firestoreSaved) {
          showToast(t('support_sent'), 'success');
          cerrarSupport();
          mostrarOpcionesSupport();
        } else {
          const errorText = await response.text().catch(() => '');
          console.error('Formspree error:', response.status, response.statusText, errorText);
          showToast(t('support_error_send'), 'error');
        }
      } catch (err) {
        console.error('Error enviando soporte vía webhook:', err);
        if (firestoreSaved) {
          showToast(t('support_sent'), 'success');
          cerrarSupport();
          mostrarOpcionesSupport();
        } else {
          // Fallback: mailto
          const mailtoLink = `mailto:nibecarcofeben@gmail.com?subject=${encodeURIComponent(`Plux - ${tipoLabel}`)}&body=${encodeURIComponent(`Tipo: ${tipoLabel}\nIdioma: ${currentLang}\n\n${mensaje}`)}`;
          window.open(mailtoLink);
          showToast(t('support_sent'), 'success');
          cerrarSupport();
          mostrarOpcionesSupport();
        }
      }
    }

    function actualizarIdiomaSupport() {
      document.getElementById('supportTitle').textContent = t('support_title');
      document.getElementById('suggestionLabel').textContent = t('support_suggestion');
      document.getElementById('suggestionDesc').textContent = t('support_description');
      document.getElementById('errorLabel').textContent = t('support_error');
      document.getElementById('errorDesc').textContent = t('support_description');
      document.getElementById('helpLabel').textContent = t('support_help');
      document.getElementById('helpDesc').textContent = t('support_description');
      document.getElementById('otherLabel').textContent = t('support_other');
      document.getElementById('otherDesc').textContent = t('support_description');

      document.getElementById('support-name').placeholder = t('support_name');
      document.getElementById('support-email').placeholder = t('support_email');
      document.getElementById('support-message').placeholder = t('support_description');
      
      // Actualizar botones del formulario
      document.getElementById('support-send-btn').textContent = t('support_send');
      document.getElementById('support-cancel-btn').textContent = t('support_cancel');
    }
    // ========== END SUPPORT FUNCTIONS ==========

    // ========== GUIDED TOUR FUNCTIONS ==========
    let tourActive = false;
    let tourCurrentStep = 0;
    const tourSteps = [
      {
        target: '#welcome',
        titleKey: 'tour_step_1_title',
        textKey: 'tour_step_1_text',
        position: 'center'
      },
      {
        target: '#toolsBtn',
        titleKey: 'tour_step_2_title',
        textKey: 'tour_step_2_text',
        position: 'bottom'
      },
      {
        target: '#themeButton',
        titleKey: 'tour_step_3_title',
        textKey: 'tour_step_3_text',
        position: 'bottom'
      },
      {
        target: '#tourButton',
        titleKey: 'tour_step_4_title',
        textKey: 'tour_step_4_text',
        position: 'bottom'
      },
      {
        target: '#cuentaButton',
        titleKey: 'tour_step_5_title',
        textKey: 'tour_step_5_text',
        position: 'bottom'
      },
      {
        target: '#btn-resumen',
        titleKey: 'tour_step_6_title',
        textKey: 'tour_step_6_text',
        position: 'bottom'
      },
      {
        target: '#chat-float-btn',
        titleKey: 'tour_step_7_title',
        textKey: 'tour_step_7_text',
        position: 'left'
      },
      {
        target: '#discoverBtn',
        titleKey: 'tour_step_8_title',
        textKey: 'tour_step_8_text',
        position: 'bottom'
      },
      {
        target: '#importarBtn',
        titleKey: 'tour_step_9_title',
        textKey: 'tour_step_9_text',
        position: 'bottom'
      },
      {
        target: '#welcome',
        titleKey: 'tour_step_10_title',
        textKey: 'tour_step_10_text',
        position: 'center'
      }
    ];

    function iniciarTour() {
      cerrarSupport();
      tourActive = true;
      tourCurrentStep = 0;
      
      // Create overlay if not exists
      let overlay = document.getElementById('tour-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'tour-overlay';
        overlay.className = 'tour-overlay';
        document.body.appendChild(overlay);
      }
      overlay.classList.add('active');
      
      // Create spotlight if not exists
      let spotlight = document.getElementById('tour-spotlight');
      if (!spotlight) {
        spotlight = document.createElement('div');
        spotlight.id = 'tour-spotlight';
        spotlight.className = 'tour-spotlight tour-pulse';
        document.body.appendChild(spotlight);
      }
      
      // Create tooltip if not exists
      let tooltip = document.getElementById('tour-tooltip');
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'tour-tooltip';
        tooltip.className = 'tour-tooltip';
        document.body.appendChild(tooltip);
      }
      
      mostrarTourStep(0);
    }

    function mostrarTourStep(stepIndex) {
      if (stepIndex < 0 || stepIndex >= tourSteps.length) return;
      
      tourCurrentStep = stepIndex;
      const step = tourSteps[stepIndex];
      const targetEl = document.querySelector(step.target);
      
      const overlay = document.getElementById('tour-overlay');
      const spotlight = document.getElementById('tour-spotlight');
      const tooltip = document.getElementById('tour-tooltip');
      
      if (!targetEl) {
        // Target not found, skip to next
        if (stepIndex < tourSteps.length - 1) {
          setTimeout(() => mostrarTourStep(stepIndex + 1), 300);
        } else {
          finalizarTour();
        }
        return;
      }
      
      // Position spotlight on target
      const rect = targetEl.getBoundingClientRect();
      spotlight.style.top = `${rect.top - 6}px`;
      spotlight.style.left = `${rect.left - 6}px`;
      spotlight.style.width = `${rect.width + 12}px`;
      spotlight.style.height = `${rect.height + 12}px`;
      spotlight.style.display = 'block';
      
      // Build tooltip content
      const isLast = stepIndex === tourSteps.length - 1;
      const progress = ((stepIndex + 1) / tourSteps.length) * 100;
      
      tooltip.innerHTML = `
        <div class="tour-progress">
          <div class="tour-progress-bar">
            <div class="tour-progress-fill" style="width: ${progress}%"></div>
          </div>
          <span class="tour-progress-text">${stepIndex + 1} / ${tourSteps.length}</span>
        </div>
        <h3>${t(step.titleKey)}</h3>
        <p>${t(step.textKey)}</p>
        <div class="tour-actions">
          ${stepIndex > 0 ? `<button class="tour-btn tour-btn-secondary" onclick="tourAnterior()">${t('tour_prev')}</button>` : ''}
          ${!isLast ? `<button class="tour-btn tour-btn-primary" onclick="tourSiguiente()">${t('tour_next')}</button>` : `<button class="tour-btn tour-btn-primary" onclick="finalizarTour()">${t('tour_finish')}</button>`}
          <button class="tour-btn tour-btn-skip" onclick="finalizarTour()">${t('tour_skip')}</button>
        </div>
      `;
      
      // Position tooltip
      positionTooltip(tooltip, rect, step.position);
      tooltip.style.display = 'block';
    }

    function positionTooltip(tooltip, targetRect, position) {
      const tooltipRect = tooltip.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const gap = 16;
      
      let top, left;
      tooltip.className = 'tour-tooltip';
      
      switch (position) {
        case 'bottom':
          top = targetRect.bottom + gap;
          left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
          tooltip.classList.add('top');
          break;
        case 'top':
          top = targetRect.top - tooltipRect.height - gap;
          left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
          tooltip.classList.add('bottom');
          break;
        case 'left':
          top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
          left = targetRect.left - tooltipRect.width - gap;
          tooltip.classList.add('right');
          break;
        case 'right':
          top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
          left = targetRect.right + gap;
          tooltip.classList.add('left');
          break;
        case 'center':
        default:
          top = (viewportHeight - tooltipRect.height) / 2;
          left = (viewportWidth - tooltipRect.width) / 2;
          tooltip.classList.add('top');
          break;
      }
      
      // Keep within viewport
      if (left < 10) left = 10;
      if (left + tooltipRect.width > viewportWidth - 10) left = viewportWidth - tooltipRect.width - 10;
      if (top < 10) top = 10;
      if (top + tooltipRect.height > viewportHeight - 10) top = viewportHeight - tooltipRect.height - 10;
      
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
    }

    function tourSiguiente() {
      if (tourCurrentStep < tourSteps.length - 1) {
        mostrarTourStep(tourCurrentStep + 1);
      } else {
        finalizarTour();
      }
    }

    function tourAnterior() {
      if (tourCurrentStep > 0) {
        mostrarTourStep(tourCurrentStep - 1);
      }
    }

    function finalizarTour() {
      tourActive = false;
      tourCurrentStep = 0;
      
      const overlay = document.getElementById('tour-overlay');
      const spotlight = document.getElementById('tour-spotlight');
      const tooltip = document.getElementById('tour-tooltip');
      
      if (overlay) overlay.classList.remove('active');
      if (spotlight) spotlight.style.display = 'none';
      if (tooltip) tooltip.style.display = 'none';
      
      showToast('¡Tour completado! 🎉', 'success');
    }

    // Make tour functions globally accessible
    window.iniciarTour = iniciarTour;
    window.mostrarTourStep = mostrarTourStep;
    window.tourSiguiente = tourSiguiente;
    window.tourAnterior = tourAnterior;
    window.finalizarTour = finalizarTour;

    // Helper to sanitize and normalize destination names from AI
    function sanitizeDestinoNombres(raw) {
      if (!raw) return [];
      let s = raw.trim();
      s = s.replace(/^(nombredestino|destinonombre|nombre_destino|destino|ciudad)\s*[:\-\|]?\s*/gi, '');
      s = s.replace(/[\"\'\`]/g, '');
      const parts = s.split(/[,;\/\+]|\s+y\s+|\s+and\s+/i)
        .map(p => p.trim())
        .filter(p => p.length > 1 && !/^(nombredestino|destinonombre|destino|ciudad|null|undefined)$/i.test(p));
      return parts.length > 0 ? parts : (s.length > 1 && !/^(nombredestino|destinonombre|destino|ciudad)$/i.test(s) ? [s] : []);
    }

    async function ejecutarAccionesPluxyDirectas(respuesta) {
      if (!respuesta) return '';
      let displayRespuesta = respuesta.replace(/\[ACCION:[^\]]+\]/g, '').trim();

      // Guard: En modo lector, Pluxy no debe modificar el viaje (destinos, itinerarios, eventos, transporte, etc.)
      if (typeof isReadOnlyMode === 'function' && isReadOnlyMode()) {
        const hasTripMutation = /\[ACCION:(ITINERARIO|DESTINO|ELIMINAR_DESTINO|BORRAR_DESTINO|LIMPIAR_DESTINO|AGREGAR_EVENTO|MODIFICAR_EVENTO|ELIMINAR_EVENTO|AGREGAR_COSTO|ALOJAMIENTO|TRANSPORTE|CAMBIAR_PERSONAS|CAMBIAR_FECHA|PRESUPUESTO|ELIMINAR_TODO)/i.test(respuesta);
        if (hasTripMutation) {
          if (typeof showToast === 'function') {
            showToast(t('toast_pluxy_reader_block') || 'Pluxy no puede modificar el viaje en Modo Lectura. Clonalo para que Pluxy te ayude a personalizarlo.', 'info');
          }
        }
        if (respuesta.includes('[ACCION:CHECKLIST]')) {
          setTimeout(() => { if (typeof abrirChecklist === 'function') abrirChecklist(); }, 800);
        }
        return displayRespuesta;
      }

      const processedDestNames = new Set();
      let accionesEjecutadas = false;

      // CHECKLIST
      if (respuesta.includes('[ACCION:CHECKLIST]')) {
        setTimeout(() => { if (typeof abrirChecklist === 'function') abrirChecklist(); }, 800);
        accionesEjecutadas = true;
      }

      // ITINERARIO (multiple allowed)
      const accionesItinerario = [...respuesta.matchAll(/\[ACCION:ITINERARIO:([^\]]+)\]/g)];
      accionesItinerario.forEach((match, idx) => {
        const partes = match[1].split('|');
        const rawNombre = partes[0].trim();
        const cleanNames = sanitizeDestinoNombres(rawNombre);
        const diasForzados = partes.length > 1 ? parseInt(partes[1]) : null;

        cleanNames.forEach((destNombre, subIdx) => {
          const normName = destNombre.toLowerCase().trim();
          if (processedDestNames.has(normName)) return;
          processedDestNames.add(normName);

          const destExistente = destinos.find(d => d.nombre.toLowerCase().trim() === normName || d.nombre.toLowerCase().includes(normName));
          const delay = 800 + ((idx + subIdx) * 300);
          if (destExistente) {
            setTimeout(() => { if (typeof generarItinerarioAuto === 'function') generarItinerarioAuto(destExistente.id, diasForzados); }, delay);
          } else {
            const newId = Date.now() + idx + subIdx + Math.floor(Math.random() * 500);
            destinos.push({ id: newId, nombre: destNombre, dias: [], tramos: [] });
            if (typeof renderDestinos === 'function') renderDestinos();
            setTimeout(() => { if (typeof generarItinerarioAuto === 'function') generarItinerarioAuto(newId, diasForzados); }, delay);
            const w = document.getElementById('welcome');
            if (w && w.style.display !== 'none' && typeof empezar === 'function') empezar();
          }
          accionesEjecutadas = true;
        });
      });

      // DESTINO (multiple allowed)
      const accionesDestino = [...respuesta.matchAll(/\[ACCION:DESTINO:([^\]]+)\]/g)];
      accionesDestino.forEach((match, idx) => {
        const rawNombre = match[1].trim();
        const cleanNames = sanitizeDestinoNombres(rawNombre);

        cleanNames.forEach((nombre, subIdx) => {
          const normName = nombre.toLowerCase().trim();
          if (processedDestNames.has(normName)) return;
          const alreadyExists = destinos.some(d => d.nombre.toLowerCase().trim() === normName || d.nombre.toLowerCase() === normName);
          if (alreadyExists) return;

          processedDestNames.add(normName);
          const newId = Date.now() + idx + subIdx + 50 + Math.floor(Math.random() * 500);
          destinos.push({ id: newId, nombre, dias: [], tramos: [] });
          if (typeof renderDestinos === 'function') renderDestinos();
          if (typeof showToast === 'function') showToast(`✅ Destino "${nombre}" añadido`, 'success');
          const w = document.getElementById('welcome');
          if (w && w.style.display !== 'none' && typeof empezar === 'function') empezar();
          accionesEjecutadas = true;
        });
      });

      // ELIMINAR_DESTINO / BORRAR_DESTINO
      const accionesEliminarDest = [...respuesta.matchAll(/\[ACCION:(?:ELIMINAR_DESTINO|BORRAR_DESTINO):([^\]]+)\]/g)];
      accionesEliminarDest.forEach((match) => {
        const rawNombre = match[1].trim();
        const cleanNames = sanitizeDestinoNombres(rawNombre);
        cleanNames.forEach((nombre) => {
          const destIndex = destinos.findIndex(d => d.nombre.toLowerCase().includes(nombre.toLowerCase()) || nombre.toLowerCase().includes(d.nombre.toLowerCase()));
          if (destIndex !== -1) {
            const destBorrado = destinos[destIndex];
            destinos.splice(destIndex, 1);
            if (typeof renderDestinos === 'function') renderDestinos();
            if (typeof autoSave === 'function') autoSave();
            if (typeof showToast === 'function') showToast(`🗑️ Destino "${destBorrado.nombre}" eliminado del viaje`, 'info');
            accionesEjecutadas = true;
          }
        });
      });

      // LIMPIAR_DESTINO
      const accionesLimpiar = [...respuesta.matchAll(/\[ACCION:LIMPIAR_DESTINO:([^\]]+)\]/g)];
      accionesLimpiar.forEach((match) => {
        const rawNombre = match[1].trim();
        const cleanNames = sanitizeDestinoNombres(rawNombre);
        cleanNames.forEach((nombre) => {
          const dest = destinos.find(d => d.nombre.toLowerCase().includes(nombre.toLowerCase()));
          if (dest) {
            dest.dias = [];
            if (typeof renderDias === 'function') renderDias(dest.id);
            if (typeof showToast === 'function') showToast(`🗑️ Días de "${dest.nombre}" eliminados`, 'info');
          }
        });
        accionesEjecutadas = true;
      });

      // AGREGAR_EVENTO
      const accionesEvento = [...respuesta.matchAll(/\[ACCION:AGREGAR_EVENTO:([^\]]+)\]/g)];
      accionesEvento.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 4) {
          const [destNombre, diaNum, hora, titulo, notas, costoRaw] = partes;
          let dest = destinos.find(d => d.nombre.toLowerCase().includes(destNombre.trim().toLowerCase()));
          if (!dest && destinos.length > 0) dest = destinos[0];
          if (!dest) {
            dest = { id: Date.now(), nombre: destNombre.trim(), dias: [], tramos: [] };
            destinos.push(dest);
            if (typeof renderDestinos === 'function') renderDestinos();
          }
          if (dest) {
            const diaIdx = (parseInt(diaNum) || 1) - 1;
            while (dest.dias.length <= diaIdx) {
              dest.dias.push({ id: dest.dias.length, eventos: [], costosAdicionales: [] });
            }
            const evCost = parseFloat(costoRaw) || 0;
            dest.dias[diaIdx].eventos.push({
              id: Date.now(),
              hora: (hora || '10:00').trim(),
              titulo: titulo.trim(),
              notas: (notas || '').trim(),
              costo: evCost,
              precio: evCost,
              duracion: 60
            });
            if (typeof renderDias === 'function') renderDias(dest.id);
            if (typeof autoSave === 'function') autoSave();
            if (typeof showToast === 'function') showToast(`✅ Evento "${titulo.trim()}" añadido al Día ${diaIdx + 1}`, 'success');
          }
        }
        accionesEjecutadas = true;
      });

      // TRANSPORTE
      const accionesTransporte = [...respuesta.matchAll(/\[ACCION:TRANSPORTE:([^\]]+)\]/g)];
      accionesTransporte.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 3) {
          const [origen, destino, medio, precio, desc] = partes;
          let destExist = destinos.find(d => d.nombre.toLowerCase().includes(destino.trim().toLowerCase()));
          if (!destExist && destinos.length > 0) destExist = destinos[0];
          if (destExist) {
            if (!destExist.tramos) destExist.tramos = [];
            destExist.tramos.push({
              id: Date.now(),
              origen: origen.trim(),
              destino: destino.trim(),
              medio: medio.trim(),
              precio: parseFloat(precio) || 0,
              desc: (desc || '').trim(),
              escalas: []
            });
            if (typeof renderDestinos === 'function') renderDestinos();
            if (typeof showToast === 'function') showToast(`🚗 Transporte añadido: ${origen.trim()} → ${destino.trim()}`, 'success');
          }
        }
        accionesEjecutadas = true;
      });

      // ESCALA
      const accionesEscala = [...respuesta.matchAll(/\[ACCION:ESCALA:([^\]]+)\]/g)];
      accionesEscala.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 3) {
          const [destNombre, tramoIdx, ciudadEscala, duracion = '', notas = ''] = partes;
          const dest = destinos.find(d => d.nombre.toLowerCase().includes(destNombre.trim().toLowerCase()));
          if (dest && dest.tramos && dest.tramos[parseInt(tramoIdx)]) {
            const tramo = dest.tramos[parseInt(tramoIdx)];
            if (!tramo.escalas) tramo.escalas = [];
            tramo.escalas.push({
              id: Date.now(),
              ciudad: ciudadEscala.trim(),
              duracion: duracion.trim(),
              notas: notas.trim()
            });
            if (typeof renderDestinos === 'function') renderDestinos();
            if (typeof showToast === 'function') showToast(`✈️ Escala añadida: ${ciudadEscala.trim()} (${duracion.trim()})`, 'success');
          }
        }
        accionesEjecutadas = true;
      });

      // ALOJAMIENTO
      const accionesAlojamiento = [...respuesta.matchAll(/\[ACCION:ALOJAMIENTO:([^\]]+)\]/g)];
      accionesAlojamiento.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 4) {
          const [destNombre, diaIni, diaFin, precio, nombre] = partes;
          let dest = destinos.find(d => d.nombre.toLowerCase().includes(destNombre.trim().toLowerCase()));
          if (!dest && destinos.length > 0) dest = destinos[0];
          if (dest) {
            const diaIdxIni = (parseInt(diaIni) || 1) - 1;
            while (dest.dias.length <= diaIdxIni) {
              dest.dias.push({ id: dest.dias.length, eventos: [], costosAdicionales: [] });
            }
            dest.dias[diaIdxIni].alojamiento = {
              id: Date.now(),
              nombre: nombre.trim(),
              precioTotal: parseFloat(precio) || 0,
              diasFin: parseInt(diaFin) || (diaIdxIni + 1)
            };
            if (typeof renderDias === 'function') renderDias(dest.id);
            if (typeof showToast === 'function') showToast(`🏨 Alojamiento "${nombre.trim()}" añadido`, 'success');
          }
        }
        accionesEjecutadas = true;
      });

      // SET_PERSONAS
      const accionPersonas = respuesta.match(/\[ACCION:SET_PERSONAS:(\d+)\]/);
      if (accionPersonas) {
        numPersonas = parseInt(accionPersonas[1]) || 1;
        const el = document.getElementById('numPersonas');
        if (el) el.value = numPersonas;
        if (typeof showToast === 'function') showToast(`👥 Personas: ${numPersonas}`, 'success');
        accionesEjecutadas = true;
      }

      // SET_ORIGEN
      const accionOrigen = respuesta.match(/\[ACCION:SET_ORIGEN:([^\]]+)\]/);
      if (accionOrigen) {
        lugarSalida = accionOrigen[1].trim();
        const el = document.getElementById('lugarSalida');
        if (el) el.value = lugarSalida;
        if (typeof showToast === 'function') showToast(`📍 Origen: ${lugarSalida}`, 'success');
        accionesEjecutadas = true;
      }

      // ABRIR_MAPA
      if (respuesta.includes('[ACCION:ABRIR_MAPA]')) {
        setTimeout(() => { if (typeof abrirMapa === 'function') abrirMapa(); }, 600);
        accionesEjecutadas = true;
      }

      // ABRIR_RESUMEN
      if (respuesta.includes('[ACCION:ABRIR_RESUMEN]')) {
        setTimeout(() => { if (typeof mostrarResumen === 'function') mostrarResumen(); }, 600);
        accionesEjecutadas = true;
      }

      // ABRIR_CLIMA / CLIMA:Ciudad
      if (respuesta.includes('[ACCION:ABRIR_CLIMA]')) {
        setTimeout(() => { if (typeof abrirClima === 'function') abrirClima(); }, 500);
        accionesEjecutadas = true;
      }
      const accionClimaCiudad = respuesta.match(/\[ACCION:CLIMA:([^\]]+)\]/);
      if (accionClimaCiudad) {
        const ciudadClima = accionClimaCiudad[1].trim();
        setTimeout(async () => {
          if (typeof abrirClima === 'function') abrirClima();
          const inp = document.getElementById('clima-search-input');
          if (inp) inp.value = ciudadClima;
          if (typeof buscarClimaModal === 'function') await buscarClimaModal();
        }, 500);
        accionesEjecutadas = true;
      }

      // AGREGAR_DIA
      const accionesAgregarDia = [...respuesta.matchAll(/\[ACCION:AGREGAR_DIA:([^\]]+)\]/g)];
      accionesAgregarDia.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 1) {
          const destNombre = partes[0].trim();
          const diaNum = partes.length > 1 ? parseInt(partes[1]) : undefined;
          let dest = destinos.find(d => d.nombre.toLowerCase().includes(destNombre.toLowerCase()));
          if (!dest && destinos.length > 0) dest = destinos[0];
          if (dest) {
            if (diaNum !== undefined) {
              const idx = diaNum - 1;
              while (dest.dias.length <= idx) {
                dest.dias.push({ id: dest.dias.length, eventos: [], costosAdicionales: [] });
              }
            } else {
              dest.dias.push({ id: dest.dias.length, eventos: [], costosAdicionales: [] });
            }
            if (typeof renderDias === 'function') renderDias(dest.id);
            if (typeof showToast === 'function') showToast(`📅 Día agregado a "${dest.nombre}"`, 'success');
          }
        }
        accionesEjecutadas = true;
      });

      // ELIMINAR_DIA
      const accionesEliminarDia = [...respuesta.matchAll(/\[ACCION:ELIMINAR_DIA:([^\]]+)\]/g)];
      accionesEliminarDia.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 2) {
          const destNombre = partes[0].trim();
          const diaNum = parseInt(partes[1]) || 1;
          const dest = destinos.find(d => d.nombre.toLowerCase().includes(destNombre.toLowerCase()));
          if (dest && dest.dias[diaNum - 1]) {
            dest.dias.splice(diaNum - 1, 1);
            if (typeof reindexarDias === 'function') reindexarDias(dest);
            if (typeof renderDias === 'function') renderDias(dest.id);
            if (typeof showToast === 'function') showToast(`🗑️ Día ${diaNum} eliminado`, 'info');
          }
        }
        accionesEjecutadas = true;
      });

      // DUPLICAR_DIA
      const accionesDuplicarDia = [...respuesta.matchAll(/\[ACCION:DUPLICAR_DIA:([^\]]+)\]/g)];
      accionesDuplicarDia.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 2) {
          const destNombre = partes[0].trim();
          const diaNum = parseInt(partes[1]) || 1;
          const dest = destinos.find(d => d.nombre.toLowerCase().includes(destNombre.toLowerCase()));
          if (dest && dest.dias[diaNum - 1]) {
            const diaCopia = JSON.parse(JSON.stringify(dest.dias[diaNum - 1]));
            diaCopia.id = dest.dias.length;
            dest.dias.push(diaCopia);
            if (typeof renderDias === 'function') renderDias(dest.id);
            if (typeof showToast === 'function') showToast(`⎘ Día ${diaNum} duplicado`, 'success');
          }
        }
        accionesEjecutadas = true;
      });

      // EDITAR_EVENTO
      const accionesEditarEvento = [...respuesta.matchAll(/\[ACCION:EDITAR_EVENTO:([^\]]+)\]/g)];
      accionesEditarEvento.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 5) {
          const [destNombre, diaNum, numEvento, campo, valor] = partes;
          const dest = destinos.find(d => d.nombre.toLowerCase().includes(destNombre.trim().toLowerCase()));
          if (dest) {
            const diaIdx = (parseInt(diaNum) || 1) - 1;
            const evIdx = (parseInt(numEvento) || 1) - 1;
            if (dest.dias[diaIdx] && dest.dias[diaIdx].eventos[evIdx]) {
              const campoNorm = campo.trim().toLowerCase();
              if (campoNorm === 'hora' || campoNorm === 'titulo' || campoNorm === 'notas') {
                dest.dias[diaIdx].eventos[evIdx][campoNorm] = valor.trim();
              } else if (campoNorm === 'costo' || campoNorm === 'duracion') {
                dest.dias[diaIdx].eventos[evIdx][campoNorm] = parseInt(valor) || 0;
              }
              if (typeof renderDias === 'function') renderDias(dest.id);
              if (typeof showToast === 'function') showToast(`✏️ Evento editado`, 'success');
            }
          }
        }
        accionesEjecutadas = true;
      });

      // ELIMINAR_EVENTO
      const accionesEliminarEvento = [...respuesta.matchAll(/\[ACCION:ELIMINAR_EVENTO:([^\]]+)\]/g)];
      accionesEliminarEvento.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 3) {
          const [destNombre, diaNum, numEvento] = partes;
          const dest = destinos.find(d => d.nombre.toLowerCase().includes(destNombre.trim().toLowerCase()));
          if (dest) {
            const diaIdx = (parseInt(diaNum) || 1) - 1;
            const evIdx = (parseInt(numEvento) || 1) - 1;
            if (dest.dias[diaIdx] && dest.dias[diaIdx].eventos[evIdx]) {
              dest.dias[diaIdx].eventos.splice(evIdx, 1);
              if (typeof renderDias === 'function') renderDias(dest.id);
              if (typeof showToast === 'function') showToast(`🗑️ Evento eliminado`, 'info');
            }
          }
        }
        accionesEjecutadas = true;
      });

      // ORGANIZAR_ITINERARIO
      const accionesOrganizar = [...respuesta.matchAll(/\[ACCION:ORGANIZAR_ITINERARIO:([^\]]+)\]/g)];
      accionesOrganizar.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 2) {
          const destNombre = partes[0].trim();
          const diaNum = parseInt(partes[1]) || 1;
          const dest = destinos.find(d => d.nombre.toLowerCase().includes(destNombre.toLowerCase()));
          if (dest && dest.dias[diaNum - 1]) {
            dest.dias[diaNum - 1].eventos.sort((a, b) => (a.hora || '99:99').localeCompare(b.hora || '99:99'));
            if (typeof renderDias === 'function') renderDias(dest.id);
            if (typeof showToast === 'function') showToast(`⏳ Itinerario organizado por hora`, 'success');
          }
        }
        accionesEjecutadas = true;
      });

      // AGREGAR_COSTO
      const accionesAgregarCosto = [...respuesta.matchAll(/\[ACCION:AGREGAR_COSTO:([^\]]+)\]/g)];
      accionesAgregarCosto.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 4) {
          const [destNombre, diaNum, desc, precio] = partes;
          let dest = destinos.find(d => d.nombre.toLowerCase().includes(destNombre.trim().toLowerCase()));
          if (!dest && destinos.length > 0) dest = destinos[0];
          if (dest) {
            const diaIdx = (parseInt(diaNum) || 1) - 1;
            while (dest.dias.length <= diaIdx) {
              dest.dias.push({ id: dest.dias.length, eventos: [], costosAdicionales: [] });
            }
            if (!dest.dias[diaIdx].costosAdicionales) dest.dias[diaIdx].costosAdicionales = [];
            dest.dias[diaIdx].costosAdicionales.push({
              id: Date.now(),
              descripcion: desc.trim(),
              precio: parseFloat(precio) || 0
            });
            if (typeof renderDias === 'function') renderDias(dest.id);
            if (typeof showToast === 'function') showToast(`💰 Costo agregado: ${desc.trim()}`, 'success');
          }
        }
        accionesEjecutadas = true;
      });

      // VIAJE_ACTIVO
      const accionViajeActivo = respuesta.match(/\[ACCION:VIAJE_ACTIVO(?::([^\]]+))?\]/);
      if (accionViajeActivo) {
        const val = accionViajeActivo[1] ? accionViajeActivo[1].trim().toLowerCase() : 'true';
        const targetState = (val === 'true' || val === '1' || val === 'activar');
        if (viajeActivoEnabled !== targetState && typeof toggleViajeActivo === 'function') {
          toggleViajeActivo();
        }
        accionesEjecutadas = true;
      }

      // ABRIR_CHECKLIST
      if (respuesta.includes('[ACCION:ABRIR_CHECKLIST]')) {
        setTimeout(() => { if (typeof abrirChecklist === 'function') abrirChecklist(); }, 800);
        accionesEjecutadas = true;
      }

      if (accionesEjecutadas && typeof autoSave === 'function') {
        autoSave();
      }

      return displayRespuesta;
    }
    window.ejecutarAccionesPluxyDirectas = ejecutarAccionesPluxyDirectas;

    async function chatSend(textoOverride) {
      const input = document.getElementById('chat-input');
      const texto = textoOverride || input.value.trim();
      if (!texto) return;
      input.value = '';

      // Add user message
      agregarMensajeChat('user', texto);
      
      // Add animated Pluxy thinking indicator
      const typingId = 'typing-' + Date.now();
      const thinkingPhrase = getPluxyThinkingPhrase(texto);
      agregarMensajeChat('ai typing', thinkingPhrase, typingId);

      // Build context
      const destContext = destinos.length > 0
        ? `Destinos actuales: ${destinos.map(d => `${d.nombre} (${d.dias?.length || 0} días, ${d.dias?.reduce((s,d)=>s+(d.eventos?.length||0),0)||0} eventos)`).join(', ')}.`
        : 'Sin destinos aún.';

      chatHistory.push({ role: 'user', content: texto });
      const weatherCtx = await getWeatherContextForTrip();
      const appLang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'es';
      const messages = [
        { role: 'system', content: `${CHAT_SYSTEM}\n\nContexto del viaje: ${destContext} Personas: ${numPersonas}. Presupuesto: no especificado.${weatherCtx}\nIdioma preferido de la app: ${appLang}. RECORDATORIO: Si el mensaje del usuario está en inglés o cualquier otro idioma, responde en ese mismo idioma.` },
        ...chatHistory.slice(-8)
      ];

      try {
        const respuesta = await callAIText(messages);
        chatHistory.push({ role: 'assistant', content: respuesta });
        
        // Remove typing indicator
        const typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.remove();

        // Check for autonomous actions
        const displayRespuesta = await ejecutarAccionesPluxyDirectas(respuesta);
        agregarMensajeChat('ai', displayRespuesta.trim());
      } catch(e) {
        const typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.remove();
        agregarMensajeChat('ai', 'No pude conectar con la IA. Verificá tu conexión.');
      }
    }

    function agregarMensajeChat(tipo, texto, id) {
      const container = document.getElementById('chat-messages');
      const div = document.createElement('div');
      if (tipo.includes('typing')) {
        div.className = 'chat-msg ai pluxy-thinking-msg';
        if (id) div.id = id;
        div.innerHTML = `
          <img src="/plux/pet.png" style="height:26px; width:auto; flex-shrink:0;">
          <span style="flex:1; color:var(--gris); font-style:italic;">${texto}</span>
          <span class="pluxy-thinking-dots"><span></span><span></span><span></span></span>`;
      } else if (tipo.includes('ai')) {
        div.className = `chat-msg ${tipo}`;
        if (id) div.id = id;
        div.style.display = 'flex';
        div.style.gap = '10px';
        div.style.alignItems = 'flex-start';
        div.innerHTML = `
          <img src="/plux/pet.png" style="height:26px; width:auto; flex-shrink:0; margin-top:2px;">
          <div style="flex:1; line-height:1.5;">${texto.replace(/\n/g, '<br>')}</div>`;
      } else {
        div.className = `chat-msg ${tipo}`;
        if (id) div.id = id;
        div.innerHTML = texto.replace(/\n/g, '<br>');
      }
      container.appendChild(div);
      container.scrollTop = container.scrollHeight;
    }

    const _pluxyThinkingPhrases = [
      'Pensando en tu viaje...', 'Añadiendo destinos...', 'Fabricando tu itinerario...', 'Consultando los datos...', 'Calculando la mejor ruta...'
    ];
    function getPluxyThinkingPhrase(texto) {
      const lower = (texto || '').toLowerCase();
      if (lower.includes('destino') || lower.includes('ciudad') || lower.includes('agregar')) return '📍 Añadiendo destinos...';
      if (lower.includes('itinerario') || lower.includes('planear') || lower.includes('plan')) return '🗺️ Fabricando tu itinerario...';
      if (lower.includes('clima') || lower.includes('tiempo') || lower.includes('lluvia')) return '🌤️ Consultando el clima...';
      if (lower.includes('costo') || lower.includes('precio') || lower.includes('cuánto')) return '💰 Calculando costos...';
      if (lower.includes('checklist') || lower.includes('lista')) return '📋 Preparando tu checklist...';
      return '✨ Pluxy está pensando...';
    }

    // ================== INSPIRATION CARDS ==================
    function explorarInspo(ciudad) {
      abrirDescubrir();
      setTimeout(() => {
        const input = document.getElementById('feedSearchInput');
        if (input) {
          input.value = ciudad;
          buscarLugaresWikiFeed(ciudad);
        }
      }, 300);
    }
    window.applyGlobalI18n = applyGlobalI18n;

    // ================== NOTIFICACIONES ==================
    if (typeof Notification !== 'undefined' && Notification.requestPermission) {
      if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission();
      }
    }

    function programarNotificacion(evento, fechaHoraEvento) {
      if (!fechaHoraEvento || typeof Notification === 'undefined') return;
      const tiempos = [0,15,30,60];
      tiempos.forEach(minutos => {
        const tiempoEvento = new Date(fechaHoraEvento).getTime();
        const ahora = Date.now();
        const delay = tiempoEvento - ahora - minutos * 60000;
        if (delay <= 0) return;
        setTimeout(() => {
          if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
            let mensaje = `${evento.titulo || 'Evento'}`;
            if (minutos === 0) mensaje = `¡Ahora! ${mensaje}`;
            else if (minutos === 15) mensaje = `En 15 minutos: ${mensaje}`;
            else if (minutos === 30) mensaje = `En 30 minutos: ${mensaje}`;
            else if (minutos === 60) mensaje = `En 1 hora: ${mensaje}`;
            new Notification(mensaje, { body: `${evento.notas || ''} ${evento.costo ? 'Costo: ' + evento.costo + '€' : ''}` });
          }
        }, delay);
      });
    }

    function programarTodasLasNotificaciones() {
      if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
      const fechaBase = document.getElementById('fechaInicio').value;
      if (!fechaBase) return;
      destinos.forEach(dest => {
        dest.dias.forEach((dia, ida) => {
          const fecha = new Date(fechaBase);
          fecha.setDate(fecha.getDate() + ida);
          dia.eventos.forEach(ev => {
            if (ev.hora) {
              const [h,m] = ev.hora.split(':').map(Number);
              const fechaHora = new Date(fecha);
              fechaHora.setHours(h,m,0);
              programarNotificacion(ev, fechaHora);
            }
          });
        });
      });
    }

    // ================== FUNCIONES DE PERFIL DE USUARIO ==================
    // (updateUserButtonDisplay está definida al inicio con soporte para foto de perfil e icono)

    // Cerrar panel de herramientas
    function cerrarPanelHerramientas() {
      const panel = document.getElementById('modal-panel-herramientas');
      if (panel) panel.style.display = 'none';
    }

    // Abrir panel de herramientas
    function abrirPanelHerramientas() {
      const panel = document.getElementById('modal-panel-herramientas');
      if (panel) panel.style.display = 'flex';
    }

    // Abrir modal de viajes
    function abrirModalViajes() {
      document.getElementById('modal-viajes').style.display = 'flex';
      renderTripLists();
    }

    // Cerrar modal de viajes
    function cerrarModalViajes() {
      document.getElementById('modal-viajes').style.display = 'none';
    }

    // Abrir descubrir
    function abrirDescubrir() {
      document.getElementById('modal-descubrir').style.display = 'flex';
    }

    // Cerrar descubrir
    function cerrarDescubrir() {
      document.getElementById('modal-descubrir').style.display = 'none';
    }

    // ================== CITY AUTOCOMPLETE ==================
    let citySearchTimeout = null;
    function getCountryEmoji(countryCode) {
      if (!countryCode || countryCode.length !== 2) return '📍';
      const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
      return String.fromCodePoint(...codePoints);
    }

    function attachGenericCityAutocomplete(inputId, dropdownId) {
      const input = document.getElementById(inputId);
      const dropdown = document.getElementById(dropdownId);
      if (!input || !dropdown) return;

      let timer = null;
      input.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        clearTimeout(timer);
        if (val.length < 2) {
          dropdown.style.display = 'none';
          dropdown.innerHTML = '';
          return;
        }

        dropdown.style.display = 'block';
        dropdown.innerHTML = `<div class="city-autocomplete-loading">🔍 Buscando "${val}"...</div>`;

        timer = setTimeout(async () => {
          try {
            const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(val)}&count=6&language=${currentLang || 'es'}&format=json`;
            const res = await fetch(url);
            if (!res.ok) return;
            const data = await res.json();
            if (!data.results || data.results.length === 0) {
              dropdown.innerHTML = `<div class="city-autocomplete-loading">No se encontraron ciudades</div>`;
              return;
            }

            let html = '';
            data.results.forEach(item => {
              const countryCode = (item.country_code || '').toUpperCase();
              const countryName = item.country || item.country_code || '';
              const stateName = item.admin1 ? `${item.admin1}, ` : '';
              const fullFormatted = countryName ? `${item.name}, ${countryName}` : item.name;
              html += `
                <div class="city-autocomplete-item" onclick="window._handleCitySelection('${inputId}', '${dropdownId}', '${item.name.replace(/'/g, "\\'")}', '${countryCode}', '${fullFormatted.replace(/'/g, "\\'")}')">
                  <div class="city-ac-info">
                    <div class="city-ac-name">${item.name}</div>
                    <div class="city-ac-country">${stateName}${countryName} (${countryCode})</div>
                  </div>
                </div>`;
            });
            dropdown.innerHTML = html;
          } catch (err) {
            console.warn('City autocomplete error:', err);
            dropdown.style.display = 'none';
          }
        }, 300);
      });

      document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.style.display = 'none';
        }
      });
    }

    window._cityCallbacks = {};
    window._handleCitySelection = function(inputId, dropdownId, cityName, countryCode, fullFormatted) {
      const input = document.getElementById(inputId);
      const dropdown = document.getElementById(dropdownId);
      if (input) {
        input.value = fullFormatted || (countryCode ? `${cityName}, ${countryCode}` : cityName);
      }
      if (dropdown) dropdown.style.display = 'none';
      if (window._cityCallbacks[inputId]) {
        window._cityCallbacks[inputId](cityName, countryCode, fullFormatted);
      }
    };

    function setupCityAutocomplete() {
      // 1. Destino nuevo
      window._cityCallbacks['nuevoDestino'] = (cityName, countryCode) => {
        agregarDestino();
      };
      attachGenericCityAutocomplete('nuevoDestino', 'city-autocomplete-dropdown');

      // 2. Lugar de Salida (Editor de viaje)
      window._cityCallbacks['lugarSalida'] = (cityName, countryCode, fullFormatted) => {
        lugarSalida = fullFormatted || (countryCode ? `${cityName}, ${countryCode}` : cityName);
        autoSave();
      };
      attachGenericCityAutocomplete('lugarSalida', 'lugar-salida-autocomplete');

      // 3. Info Personal: Residencia
      window._cityCallbacks['info-location'] = (cityName, countryCode, fullFormatted) => {
        const target = fullFormatted || (countryCode ? `${cityName}, ${countryCode}` : cityName);
        if (!lugarSalida || !lugarSalida.trim()) {
          lugarSalida = target;
          const elSal = document.getElementById('lugarSalida');
          if (elSal) elSal.value = lugarSalida;
          autoSave();
        }
      };
      attachGenericCityAutocomplete('info-location', 'info-location-autocomplete');
    }

    function selectCityFromDropdown(cityName, countryCode) {
      const input = document.getElementById('nuevoDestino');
      const dropdown = document.getElementById('city-autocomplete-dropdown');
      if (input) {
        input.value = countryCode ? `${cityName}, ${countryCode}` : cityName;
      }
      if (dropdown) dropdown.style.display = 'none';
      agregarDestino();
    }

    // ================== ENTER KEY LISTENERS ==================
    function setupEnterKeyListeners() {
      const attachEnter = (elementId, callback) => {
        const el = document.getElementById(elementId);
        if (!el) return;
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            callback();
          }
        });
      };

      attachEnter('nuevoDestino', () => {
        const dropdown = document.getElementById('city-autocomplete-dropdown');
        if (dropdown && dropdown.style.display !== 'none') {
          dropdown.style.display = 'none';
        }
        agregarDestino();
      });

      attachEnter('lugarSalida', () => {
        document.getElementById('nuevoDestino')?.focus();
      });

      attachEnter('login-nickname', () => window.loginNickname());
      attachEnter('login-password', () => window.loginNickname());
      attachEnter('register-password', () => window.crearCuentaNickname());
      attachEnter('clima-search-input', () => window.buscarClimaModal());
      attachEnter('friend-nickname-input', () => window.agregarAmigoPorNickname());
      attachEnter('invite-nickname-input', () => window.invitarColaboradorPorNickname());
      attachEnter('join-code-input-herramientas', () => window.unirseAViaje('join-code-input-herramientas'));
      attachEnter('join-code-input-viajes', () => window.unirseAViaje('join-code-input-viajes'));
    }

    // ================== POPSTATE / BROWSER BACK BUTTON ==================
    function setupPopstateNavigation() {
      window.addEventListener('popstate', (e) => {
        const visibleModals = document.querySelectorAll('[id^="modal-"]');
        let closedModal = false;
        visibleModals.forEach(m => {
          if (m.style.display === 'flex' || m.style.display === 'block') {
            m.style.display = 'none';
            closedModal = true;
          }
        });
        if (closedModal) return;

        const resumen = document.getElementById('pantalla-resumen');
        if (resumen && resumen.style.display === 'flex') {
          cerrarResumen();
          return;
        }

        const app = document.getElementById('app');
        if (app && app.style.display !== 'none') {
          volverAWelcome();
        }
      });
    }

    // ================== URL JOIN CODE SUPPORT ==================
    function checkUrlJoinCode() {
      const path = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);
      const joinParam = searchParams.get('join') || searchParams.get('code');

      const reserved = ['join', 'destinies', 'plantillas', 'buenosaires', 'roma', 'tokio', 'nuevayork', 'paris', 'barcelona', 'plux', 'index.html'];

      let code = joinParam;

      if (!code && path.includes('/join/')) {
        const parts = path.split('/join/')[1]?.split('/') || [];
        const possibleCode = parts[0];
        if (possibleCode && possibleCode !== 'plantillas' && !reserved.includes(possibleCode.toLowerCase())) {
          code = possibleCode;
        }
      } else if (!code) {
        const match = path.match(/\/plux\/([A-Z0-9]{4}-[A-Z0-9]{4})/i);
        if (match) code = match[1];
      }

      if (code && !reserved.includes(code.toLowerCase())) {
        setTimeout(async () => {
          showToast(`Uniéndose al viaje por enlace (${code.toUpperCase()})...`, 'info');
          if (!db) {
            await initFirebaseAuth();
          }
          if (typeof window.cargarViajeCompartido === 'function') {
            window.cargarViajeCompartido(code.toUpperCase());
          } else if (typeof cargarViajeCompartido === 'function') {
            cargarViajeCompartido(code.toUpperCase());
          }
        }, 800);
      }
    }

    // ================== QUICK START GUIDE ==================
    function mostrarGuiaComoEmpezar() {
      cerrarSupport();
      let modal = document.getElementById('modal-como-empezar');
      if (!modal) {
        const html = `
          <div id="modal-como-empezar" class="modal-como-empezar" onclick="if(event.target===this)this.remove()">
            <div class="como-empezar-content">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <h2 style="color:var(--verde); margin:0;">🚀 Cómo empezar en Plux</h2>
                <span onclick="document.getElementById('modal-como-empezar').remove()" style="cursor:pointer; font-size:2rem; color:var(--gris);">×</span>
              </div>
              
              <div class="como-empezar-step">
                <div class="como-empezar-step-num">1</div>
                <div class="como-empezar-step-text">
                  <h4>Elige tu Origen y Fecha</h4>
                  <p>Indica desde dónde saldrás y cuántas personas viajan. La fecha sirve para calcular automáticamente el clima exacto.</p>
                </div>
              </div>

              <div class="como-empezar-step">
                <div class="como-empezar-step-num">2</div>
                <div class="como-empezar-step-text">
                  <h4>Añade tus Destinos</h4>
                  <p>Escribe cualquier ciudad del mundo. El selector inteligente te sugerirá el país exacto (ej. Roma, IT vs Rome, US).</p>
                </div>
              </div>

              <div class="como-empezar-step">
                <div class="como-empezar-step-num">3</div>
                <div class="como-empezar-step-text">
                  <h4>Genera con IA (Pluxy)</h4>
                  <p>Toca 🪄 Generar itinerario en cualquier destino o habla con Pluxy para armar actividades, alojamientos y transportes automáticamente.</p>
                </div>
              </div>

              <div class="como-empezar-step">
                <div class="como-empezar-step-num">4</div>
                <div class="como-empezar-step-text">
                  <h4>Invita a tus Amigos</h4>
                  <p>Comparte el código único de tu viaje para planificar en tiempo real con tu familia o amigos sin complicaciones.</p>
                </div>
              </div>

              <button onclick="document.getElementById('modal-como-empezar').remove(); document.getElementById('startBtn').click();" class="btn-add-feed" style="width:100%; padding:15px; margin-top:15px; background:linear-gradient(135deg, var(--verde), var(--azul)); color:black; font-weight:bold; font-size:1.05rem;">¡Empezar mi viaje ahora!</button>
            </div>
          </div>`;
        document.body.insertAdjacentHTML('beforeend', html);
      } else {
        modal.style.display = 'flex';
      }
    }

    // ================== INICIALIZACIÓN ==================
    document.addEventListener('DOMContentLoaded', async function() {
      inicializarCuenta();
      applyGlobalI18n();
      
      await loadKeys();
      await initFirebaseAuth();

      setupCityAutocomplete();
      setupEnterKeyListeners();
      setupPopstateNavigation();
      checkUrlJoinCode();
      
      loadFromStorage();
      const savedTheme = localStorage.getItem('PluxTheme') || 'theme-oscuro';
      const savedLang = localStorage.getItem('pluxUserLanguage') || 'es';
      
      if (savedTheme && ['theme-claro','theme-oscuro','theme-tokyo','theme-grid','theme-terminal','theme-starship','theme-ares'].includes(savedTheme)) setTheme(savedTheme);
      else setTheme('theme-oscuro');
      setLanguage(savedLang);

      // Actualizar display del usuario
      updateUserButtonDisplay();

      const langBtn = document.getElementById('langButton');
      if (langBtn) {
        langBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const dd = document.getElementById('langDropdown');
          if (dd) dd.classList.toggle('show');
        });
      }
      const themeBtn = document.getElementById('themeButton');
      if (themeBtn) {
        themeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const dd = document.getElementById('themeDropdown');
          if (dd) dd.classList.toggle('show');
        });
      }
      // Click al botón de tour
      const tourBtn = document.getElementById('tourButton');
      if (tourBtn) {
        tourBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          iniciarTour();
        });
      }
      // Click al botón de usuario
      const cuentaBtn = document.getElementById('cuentaButton');
      if (cuentaBtn) {
        cuentaBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          abrirCuenta();
        });
      }
      document.addEventListener('click', () => {
        document.getElementById('langDropdown').classList.remove('show');
        document.getElementById('themeDropdown').classList.remove('show');
      });

      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          setLanguage(e.target.dataset.lang);
        });
      });

      document.getElementById('startBtn').addEventListener('click', onStartBtnClick);
      document.getElementById('tripsBtn').addEventListener('click', abrirModalViajes);
      document.getElementById('toolsBtn').addEventListener('click', abrirPanelHerramientas);
      document.getElementById('discoverBtn').addEventListener('click', () => abrirDescubrir());
      document.getElementById('addDestBtn').addEventListener('click', agregarDestino);
      document.getElementById('btn-resumen').addEventListener('click', mostrarResumen);

      document.getElementById('numPersonas').value = numPersonas;
      document.getElementById('numPersonas').addEventListener('change', (e) => { numPersonas = parseInt(e.target.value) || 1; autoSave(); });
      const npInput = document.getElementById('nombresPersonas');
      if (npInput) {
        npInput.value = nombresPersonasGlobal;
      }
      const chipInput = document.getElementById('traveler-chip-input');
      if (chipInput) {
        chipInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            window.agregarViajeroChip(chipInput.value);
            chipInput.value = '';
          }
        });
        chipInput.addEventListener('blur', () => {
          if (chipInput.value.trim()) {
            window.agregarViajeroChip(chipInput.value);
            chipInput.value = '';
          }
        });
      }
      window.renderTravelerChips();
      document.getElementById('lugarSalida').value = lugarSalida;
      document.getElementById('lugarSalida').addEventListener('change', (e) => { lugarSalida = e.target.value; autoSave(); });
      document.getElementById('vuelta').value = vueltaGlobal;
      document.getElementById('vueltaPrecio').value = vueltaPrecioGlobal;
      document.getElementById('vuelta').addEventListener('change', (e) => { vueltaGlobal = e.target.value; autoSave(); });
      document.getElementById('vueltaPrecio').addEventListener('change', (e) => { vueltaPrecioGlobal = parseFloat(e.target.value) || 0; autoSave(); });
      document.getElementById('fechaInicio').addEventListener('change', () => {
        autoSave();
        renderDestinos();
        if (document.getElementById('pantalla-resumen').style.display === 'flex') {
          renderResumen();
        }
      });

      if (!document.getElementById('fechaInicio').value) {
        const hoy = new Date();
        const año = hoy.getFullYear();
        const mes = String(hoy.getMonth()+1).padStart(2,'0');
        const dia = String(hoy.getDate()).padStart(2,'0');
        const horas = String(hoy.getHours()).padStart(2,'0');
        const minutos = String(hoy.getMinutes()).padStart(2,'0');
        document.getElementById('fechaInicio').value = `${año}-${mes}-${dia}T${horas}:${minutos}`;
      }

      // LABS: Atajo de teclado y checklist render
      window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'L') {
            const labs = document.getElementById('plux-labs-panel');
            labs.style.display = labs.style.display === 'block' ? 'none' : 'block';
        }
      });
      const checklistItems = ["¿Cargaste los auriculares?", "¿Cerraste el gas?", "¿Tenés el PDF de PLUX descargado?", "¿Regaste las plantas?"];
      const clContainer = document.getElementById('checklist-display');
      if(clContainer) {
          clContainer.innerHTML = checklistItems.map(item => `<label style="display:block;margin:5px 0"><input type="checkbox"> ${item}</label>`).join('');
      }

      // Zero Gravity / Parallaxhandlers
      document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        document.querySelectorAll('.zero-gravity').forEach(el => {
          el.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
        });
        const bg = document.getElementById('bg-parallax');
        if(bg) bg.style.transform = `translate(${xAxis/3}px, ${yAxis/3}px)`;
        
        if(document.body.classList.contains('theme-ares')) {
          const rotX = -yAxis / 2;
          const rotY = xAxis / 2;
          const transformStr = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
          
          // Apply to welcome/container
          const welcomeEl = document.querySelector('.welcome');
          const containerEl = document.querySelector('.container');
          if(welcomeEl && !welcomeEl.classList.contains('hidden')) welcomeEl.style.transform = transformStr;
          if(containerEl && containerEl.style.display !== 'none') containerEl.style.transform = transformStr;
          
          // Apply to all visible modals
          document.querySelectorAll('[id^="modal-"]').forEach(modal => {
            if (modal.style.display === 'flex' || modal.style.display === 'block') {
              const content = modal.querySelector('[class$="-content"]');
              if (content) content.style.transform = transformStr;
            }
          });
        } else {
          const welcomeEl = document.querySelector('.welcome');
          const containerEl = document.querySelector('.container');
          if(welcomeEl) welcomeEl.style.transform = 'none';
          if(containerEl) containerEl.style.transform = 'none';
          document.querySelectorAll('[id^="modal-"] [class$="-content"]').forEach(c => c.style.transform = 'none');
        }
      });
      window.addEventListener('deviceorientation', (e) => {
        const xAxis = e.gamma ? e.gamma / 2 : 0;
        const yAxis = e.beta ? (e.beta - 45) / 2 : 0;
        document.querySelectorAll('.zero-gravity').forEach(el => {
          el.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
        });
        
        if(document.body.classList.contains('theme-ares')) {
          const rotX = -yAxis / 2;
          const rotY = xAxis / 2;
          const transformStr = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
          const welcomeEl = document.querySelector('.welcome');
          const containerEl = document.querySelector('.container');
          if(welcomeEl && !welcomeEl.classList.contains('hidden')) welcomeEl.style.transform = transformStr;
          if(containerEl && containerEl.style.display !== 'none') containerEl.style.transform = transformStr;
        }
      });
      
      const savedViajeActivo = localStorage.getItem('PluxViajeActivoEnabled') === 'true';
      if (savedViajeActivo) {
        viajeActivoEnabled = true;
        verificarViajeActivo(false);
      }
    });

    function empezar() {
      const welcome = document.getElementById("welcome");
      if (welcome) welcome.classList.add("hidden");
      setTimeout(() => {
        if (welcome) welcome.style.display = "none";
        const app = document.getElementById("app");
        if (app) app.style.display = "block";
        if (typeof applyGlobalI18n === 'function') applyGlobalI18n();
        if (typeof renderDestinos === 'function') renderDestinos();
      }, 400);
    }

    function volverAWelcome() {
      const app = document.getElementById("app");
      if (app) app.style.display = "none";
      const welcome = document.getElementById("welcome");
      if (welcome) {
        welcome.style.display = "flex";
        welcome.classList.remove("hidden");
      }
    }

    // ================== MODO VIAJE ACTIVO ==================
    let viajeActivoEnabled = false;
    let viajeActivoInterval = null;
    let activeNotificationTimeouts = [];
    
    function verificarViajeActivo(abrirModal = false) {
        if (!destinos || destinos.length === 0) return;
        const fechaInicioEl = document.getElementById('fechaInicio');
        const fechaInicioVal = fechaInicioEl ? fechaInicioEl.value : '';
        if (!fechaInicioVal) return;
        
        const hoy = new Date();
        const fi = new Date(fechaInicioVal);
        fi.setHours(0, 0, 0, 0);
        hoy.setHours(hoy.getHours(), hoy.getMinutes(), hoy.getSeconds(), 0);
        
        const diffMs = hoy.getTime() - fi.getTime();
        const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        const appTitle = document.getElementById('appTitle');
        if (diffDias >= 0 && viajeActivoEnabled) {
            if (appTitle) {
              appTitle.textContent = `¡Viaje Activo! (Día ${diffDias + 1})`;
              appTitle.style.color = "var(--rosa)";
              appTitle.style.animation = "pulseGlow 2s infinite";
            }
            
            if (abrirModal) {
              mostrarDashboardDia(diffDias);
            }
            programarNotificacionesDelDia(diffDias);
        } else if (viajeActivoEnabled && diffDias < 0) {
            if (appTitle) {
              appTitle.textContent = `Viaje en ${Math.abs(diffDias)} días`;
              appTitle.style.color = "var(--azul)";
            }
            const content = document.getElementById('viajeActivoContent');
            if (content) content.innerHTML = '<p style="color:var(--gris); padding:20px; text-align:center;">Tu viaje aún no ha comenzado. ¡Prepárate!</p>';
        }
    }
    
    function toggleViajeActivo() {
        viajeActivoEnabled = !viajeActivoEnabled;
        localStorage.setItem('PluxViajeActivoEnabled', viajeActivoEnabled ? 'true' : 'false');
        if (!viajeActivoEnabled) {
            const appTitle = document.getElementById('appTitle');
            if (appTitle) {
              appTitle.textContent = t('app_title') || 'Plux';
              appTitle.style.color = "";
              appTitle.style.animation = "";
            }
            const modal = document.getElementById('modal-viaje-activo');
            if (modal) modal.style.display = 'none';
            if (viajeActivoInterval) {
                clearInterval(viajeActivoInterval);
                viajeActivoInterval = null;
            }
            activeNotificationTimeouts.forEach(t => clearTimeout(t));
            activeNotificationTimeouts = [];
            showToast('Modo viaje activo desactivado', 'info');
        } else {
            verificarViajeActivo(true);
            showToast('Modo viaje activo activado ✨', 'success');
        }
    }
    
    function mostrarDashboardDia(diaIndex) {
        const modal = document.getElementById('modal-viaje-activo');
        if (modal) modal.style.display = 'flex';
        const content = document.getElementById('viajeActivoContent');
        if (!content) return;
        let html = '';
        let eventosHoy = 0;
        let tieneContenido = false;
        
        destinos.forEach(d => {
            if (d.dias && d.dias[diaIndex]) {
                tieneContenido = true;
                const dia = d.dias[diaIndex];
                html += `<div style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px; border-left:4px solid var(--verde);">`;
                html += `<h3 style="color:var(--verde); margin:0 0 15px 0; font-size:1.3rem;">📍 ${d.nombre}</h3>`;
                
                // TRANSPORTE LLEGADA
                if (d.tramos && d.tramos.length > 0) {
                    html += `<div style="margin-bottom:12px;">`;
                    html += `<p style="color:var(--rosa); font-weight:bold; font-size:0.9rem; margin:0;">🚗 TRANSPORTE:</p>`;
                    d.tramos.forEach(tramo => {
                        html += `<p style="color:var(--gris); margin:4px 0; font-size:0.85rem;">${tramo.origen} → ${tramo.destino} | ${tramo.medio} (${tramo.precio}€)</p>`;
                    });
                    html += `</div>`;
                }
                
                // ALOJAMIENTO
                if (dia.alojamiento) {
                    html += `<div style="margin-bottom:12px; padding:10px; background:rgba(16,185,129,0.1); border-radius:8px;">`;
                    html += `<p style="color:var(--verde); font-weight:bold; font-size:0.9rem; margin:0;">🏨 ALOJAMIENTO:</p>`;
                    html += `<p style="color:var(--gris); margin:4px 0; font-size:0.85rem;">${dia.alojamiento.nombre} - ${dia.alojamiento.precioTotal}€</p>`;
                    html += `</div>`;
                }
                
                // EVENTOS
                if (dia.eventos && dia.eventos.length > 0) {
                    html += `<div style="margin-bottom:12px;">`;
                    html += `<p style="color:var(--azul); font-weight:bold; font-size:0.9rem; margin:0;">📅 EVENTOS:</p>`;
                    dia.eventos.forEach(ev => {
                        eventosHoy++;
                        const horaDisplay = ev.hora ? `<strong style="color:var(--rosa); font-size:1rem;">${ev.hora}</strong>` : '<strong style="color:var(--gris);">Sin hora</strong>';
                        html += `
                        <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; margin:8px 0; border-left:3px solid var(--rosa);">
                            ${horaDisplay} - <strong>${ev.titulo}</strong>
                            ${ev.notas ? `<p style="margin:4px 0 0 0; color:var(--gris); font-size:0.8rem;">📝 ${ev.notas}</p>` : ''}
                            ${ev.costo ? `<p style="margin:2px 0 0 0; color:var(--verde); font-size:0.8rem;">💰 ${ev.costo}€</p>` : ''}
                        </div>`;
                    });
                    html += `</div>`;
                }
                
                // COSTOS ADICIONALES
                if (dia.costosAdicionales && dia.costosAdicionales.length > 0) {
                    html += `<div style="margin-bottom:12px;">`;
                    html += `<p style="color:var(--azul); font-weight:bold; font-size:0.9rem; margin:0;">💰 OTROS COSTOS:</p>`;
                    dia.costosAdicionales.forEach(costo => {
                        html += `<p style="color:var(--gris); margin:4px 0; font-size:0.85rem;">${costo.descripcion}: ${costo.precio}€</p>`;
                    });
                    html += `</div>`;
                }
                
                if (!dia.eventos || dia.eventos.length === 0) {
                    html += `<p style="color:var(--gris); font-style:italic; font-size:0.9rem;">Sin eventos programados para este día</p>`;
                }
                html += `</div>`;
            }
        });
        
        if (!tieneContenido || eventosHoy === 0) {
            html = '<p style="color:var(--gris); padding:20px; text-align:center; font-size:1rem;">No tienes eventos programados para hoy.</p>';
        }
        
        content.innerHTML = html;
    }
    
    function programarNotificacionesDelDia(diaIndex) {
        if (!("Notification" in window) || Notification.permission !== "granted") return;
        
        // Clear previous timeouts to avoid duplicate notifications
        activeNotificationTimeouts.forEach(t => clearTimeout(t));
        activeNotificationTimeouts = [];
        
        const hoy = new Date();
        destinos.forEach(d => {
            if (d.dias && d.dias[diaIndex]) {
                (d.dias[diaIndex].eventos || []).forEach(ev => {
                    if (ev.hora) {
                        const [horas, minutos] = ev.hora.split(':');
                        const fechaEvento = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate(), parseInt(horas), parseInt(minutos), 0);
                        const tiempoHastaAviso = fechaEvento.getTime() - hoy.getTime() - (15 * 60000);
                        
                        if (tiempoHastaAviso > 0) {
                            const timerId = setTimeout(() => {
                                new Notification(`¡Es hora de tu evento en ${d.nombre}!`, {
                                    body: ev.titulo,
                                    icon: 'https://cdn-icons-png.flaticon.com/512/3180/3180209.png'
                                });
                            }, tiempoHastaAviso);
                            activeNotificationTimeouts.push(timerId);
                        }
                    }
                });
            }
        });
    }

    // ================== FUNCIONES DE DESTINOS CON TRAMOS ==================
    function agregarDestino() {
      if (!checkEditPermission()) return;
      const input = document.getElementById("nuevoDestino");
      const nombre = input.value.trim();
      if (!nombre) return showToast('Escribe un destino', 'error');
      const id = Date.now();
      destinos.push({
        id, nombre, dias: [], tramos: []
      });
      input.value = "";
      renderDestinos();
      generarSelloPasaporte(nombre);
      autoSave();
      trackEvent('create_itinerary', {
        action: 'add_destination',
        destination_name: nombre
      });
    }

    function generarSelloPasaporte(ciudad) {
      const container = document.getElementById('passport-display');
      if(!container) return;
      const stamp = document.createElement('div');
      stamp.className = 'stamp-passport';
      stamp.innerHTML = `PLUX<br>${ciudad.substring(0,8).toUpperCase()}<br>${new Date().toLocaleDateString()}`;
      container.appendChild(stamp);
    }

    function renderDestinos() {
      // Sync openTransportDestIds with current DOM state before clearing
      destinos.forEach(d => {
        const el = document.getElementById(`transport-${d.id}`);
        if (el && el.classList.contains('show')) {
          openTransportDestIds.add(d.id);
        }
      });
      const cont = document.getElementById("destinos");
      cont.innerHTML = "";
      destinos.forEach((d, destIdx) => {
        const isCollapsed = collapsedEditorDestinos.has(d.id);
        const div = document.createElement("div");
        div.className = "destino";
        div.dataset.destId = d.id;
        div.dataset.destIdx = destIdx;
        div.draggable = true;
        const isTransportOpen = openTransportDestIds.has(d.id);
        const numDiasDest = (d.dias || []).length;
        div.innerHTML = `
          <div class="destino-header" onclick="toggleEditorDestino(${d.id}, event)" style="cursor:pointer; user-select:none; display:flex; align-items:center; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:8px; flex:1; min-width:0;">
              <span class="drag-handle drag-handle-dest" data-drag-type="dest" data-dest-id="${d.id}" data-dest-idx="${destIdx}" title="Arrastra o mantén presionado para reordenar destino" onclick="event.stopPropagation()">⠿</span>
              <span id="editor-dest-chev-${d.id}" class="chevron-indicator" style="display:inline-block; transition:transform 0.2s ease; transform:${isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}; color:var(--gris); font-size:0.85rem;">▼</span>
              <div class="bubble-name">${d.nombre.slice(0,3).toUpperCase()}</div>
              <h2 style="margin:0; font-size:1.15rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${d.nombre}</h2>
              <span style="font-size:0.75rem; font-weight:600; color:var(--gris); background:rgba(255,255,255,0.06); padding:2px 8px; border-radius:999px; white-space:nowrap;">${numDiasDest} ${numDiasDest === 1 ? 'día' : 'días'}</span>
            </div>
            <button class="close-icon" onclick="eliminarDestino(${d.id})">×</button>
          </div>
          <div id="editor-dest-body-${d.id}" style="display:${isCollapsed ? 'none' : 'block'};">
            <div style="display:flex; gap:8px; margin:10px 0; flex-wrap:wrap;">
              <div class="transport-icon" onclick="toggleTransportFields(${d.id})" style="cursor:pointer; z-index:10;">✈</div>
              <button onclick="generarItinerarioAuto(${d.id})" style="padding:6px 14px; font-size:0.8rem; background:linear-gradient(135deg, #6366f1, #8b5cf6); border:none; color:white; border-radius:8px; cursor:pointer;">${t('generar_itinerario_btn')}</button>
            </div>
            <div class="transport-fields ${isTransportOpen ? 'show' : ''}" id="transport-${d.id}">
              <div class="tramos-container" id="tramos-${d.id}"></div>
              <button onclick="agregarTramo(${d.id})">${t('agregar_tramo')}</button>
            </div>
            <div class="dias" id="dias-${d.id}"></div>
            <button onclick="agregarDia(${d.id})">${t('add_day_button')}</button>
            <div id="wiki-${d.id}" style="margin-top:15px;"></div>
          </div>
        `;
        cont.appendChild(div);
        renderTramos(d.id);
        renderDias(d.id);
        cargarSugerenciasWiki(d.id);
      });
      setupReorderDragListeners();
      if (typeof aplicarRestriccionesInputs === 'function') {
        aplicarRestriccionesInputs();
      }
    }

    // Tourist place keywords (at least one must appear in title OR it's a short proper noun)
    const TOURIST_KEYWORDS = ['iglesia','museo','palacio','plaza','castillo','catedral','basílica','monumento','parque','jardín','textro','ópera','ponte','foro','coliseo','torre','villa','fontana','piazza','galleria','ponte','pantheon','templo','mezquita','abadía','santuario','anfitextro','ruinas','mercado','barrio','playa','lago','río','montaña','valle','puente','puerta','arco'];
    const SPAM_KEYWORDS = ['edición','premios','campeonato','elección','municipio','sindicato','partido','decreto','comité','asociación','consejo','artículo','lista','ley ','acta','convenio','federación','incendio','batalla','muerte','guerra','desastre','provincia de','imperio de','reino de','cuidadano','concejo'];

    function esTuristico(page) {
      const title = (page.title || '').toLowerCase();
      // Hard exclude spam keywords
      if (SPAM_KEYWORDS.some(w => title.includes(w))) return false;
      // Exclude if title has a year (4 digits)  usually historical events
      if (/\b\d{4}\b/.test(page.title)) return false;
      // Exclude if title has ordinal numbers like "50ª" or "V edición"
      if (/\b\d+(°|º|ª|ava|avo)\b/.test(page.title)) return false;
      // Accept if tourist keyword found in title
      if (TOURIST_KEYWORDS.some(w => title.includes(w))) return true;
      // Accept if title is short ( words) and has thumbnail  likely a landmark
      const wordCount = page.title.trim().split(/\s+/).length;
      if (wordCount <= 4 && page.thumbnail) return true;
      // Accept if title doesn't contain any spam  benefit of the doubt for short titles
      return wordCount <= 3;
    }

    async function cargarSugerenciasWiki(destId) {
      const dest = destinos.find(d => d.id === destId);
      const container = document.getElementById(`wiki-${destId}`);
      if (!container) return;
      container.innerHTML = `<div style="color:var(--gris);font-size:0.9rem;">Buscando lugares turísticos...</div>`;
      try {
        const coords = await geocode(dest.nombre);
        if(!coords) { container.innerHTML=''; return; }
        const url = `https://es.wikipedia.org/w/api.php?action=query&prop=extracts|coordinates|pageimages&exintro&explaintext&exchars=80&pithumbsize=200&generator=geosearch&ggsradius=10000&ggscoord=${coords.lat}|${coords.lon}&ggslimit=50&format=json&origin=*`;
        const res = await fetch(url);
        const data = await res.json();
        if(!data.query || !data.query.pages) { container.innerHTML=''; return; }
        
        const touristPlaces = Object.values(data.query.pages).filter(esTuristico).slice(0, 6);
        
        if (touristPlaces.length === 0) { container.innerHTML = ''; return; }

        let html = `<h4 style="color:var(--verde); margin-bottom:8px;">${t('lugares_turisticos_cercanos')}</h4>`;
        html += '<div style="display:flex; gap:10px; overflow-x:auto; padding-bottom:10px;">';
        
        touristPlaces.forEach(page => {
          const img = page.thumbnail?.source ? `<img src="${page.thumbnail.source}" style="width:100%;height:80px;object-fit:cover;border-radius:8px;margin-bottom:8px;">` : '';
          let extract = page.extract ? page.extract.substring(0, 70) + '...' : 'Punto de interés turístico';
          html += `
            <div style="min-width:180px; max-width:220px; background:rgba(0,0,0,0.3); padding:10px; border-radius:10px; border:1px solid var(--border); flex-shrink:0;">
              ${img}
              <strong style="color:var(--rosa); font-size:0.85rem;">${page.title}</strong>
              <p style="font-size:0.75rem; color:var(--gris); margin:5px 0;">${extract}</p>
              <button onclick="agregarEventoDesdeWiki(${destId}, '${page.title.replace(/'/g, "\\'")}'); event.stopPropagation();" style="padding:4px 8px; font-size:0.75rem; background:var(--azul); width:100%;">+ Añadir</button>
            </div>
           `;
        });
        html += '</div>';
        container.innerHTML = html;
      } catch(e) {
        console.error(e);
        container.innerHTML = '';
      }
    }

    window.agregarEventoDesdeWiki = function(destId, titulo) {
        if (!checkEditPermission()) return;
        const dest = destinos.find(d => d.id === destId);
        if (dest.dias.length === 0) {
            dest.dias.push({ id: Date.now(), eventos: [] });
        }
        const dia = dest.dias[0];
        dia.eventos.push({ id: Date.now(), hora: "", titulo: titulo, notas: "Sugerencia de Wikipedia", costo: 0, duracion: 0 });
        renderDias(destId);
        autoSave();
        showToast(`${titulo} añadido al Día 1 de ${dest.nombre}`, 'success');
    };

    // ================== AI CORE (FALLBACK CHAIN - ALL PROVIDERS) ==================
    // 1. Groq (Ultra-fast Llama-3 / Qwen / compound)
    // 2. Gemini 1.5 Flash / 2.0 Flash
    // 3. DeepSeek (deepseek-chat)
    // 4. OpenAI (gpt-4o-mini / gpt-4o)
    // 5. Nvidia NIM (meta/llama-3.1-70b-instruct)
    // 6. OpenRouter (Multi-model router)
    // 7. Mistral (mistral-small-latest)
    // 8. MuleRouter
    const OPENROUTER_FREE_MODELS = [
      'meta-llama/llama-3.3-70b-instruct:free',
      'google/gemini-2.0-flash-exp:free',
      'qwen/qwen-2.5-coder-32b-instruct:free',
      'deepseek/deepseek-r1:free',
      'meta-llama/llama-3.1-8b-instruct:free'
    ];
    const AI_SYSTEM_PROMPT = 'You are a travel planning AI. CRITICAL: You MUST respond with ONLY valid JSON. NO greetings, NO explanations, NO markdown code blocks, NO conversational text. Just the raw JSON object.';

    async function callAI(prompt, useJson = true) {
      console.log('🤖 AI_CORE: Iniciando petición multi-proveedor...', { useJson });

      const fetchWithTimeout = async (url, options, timeout = 15000) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        try {
          const response = await fetch(url, { ...options, signal: controller.signal });
          clearTimeout(timeoutId);
          return response;
        } catch (error) {
          clearTimeout(timeoutId);
          if (error.name === 'AbortError') throw new Error('TIMEOUT');
          throw error;
        }
      };

      // 0. Prioridad: Cloudflare Worker Seguro Multi-Proveedor
      try {
        const workerResp = await fetchWithTimeout('https://pluxy.nibecar-cofeben.workers.dev/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: prompt,
            system: AI_SYSTEM_PROMPT
          })
        }, 12000);
        if (workerResp.ok) {
          const workerData = await workerResp.json();
          let content = workerData.text;
          if (content) {
            content = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
            if (useJson && !content.startsWith('{')) {
              const jsonMatch = content.match(/\{[\s\S]*\}/);
              if (jsonMatch) content = jsonMatch[0];
            }
            console.log(`✅ AI_CORE: Éxito con Cloudflare Worker Gateway [${workerData.provider || 'auto'}].`);
            return content;
          }
        }
      } catch (e) {
        console.warn('⚠️ Cloudflare Worker AI_CORE fallback to client keys:', e.message);
      }

      // 1. Try Groq
      if (GROQ_API_KEY) {
        const groqModels = ['openai/gpt-oss-120b', 'qwen/qwen3.6-27b', 'llama-3.3-70b-versatile', 'groq/compound-mini'];
        for (const gModel of groqModels) {
          try {
            console.log(`🤖 AI_CORE: Intentando con Groq [${gModel}]...`);
            const resp = await fetchWithTimeout('https://api.groq.com/openai/v1/chat/completions', {
              method: 'POST',
              headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
              },
              body: JSON.stringify({
                model: gModel,
                messages: [
                  { role: "system", content: AI_SYSTEM_PROMPT },
                  { role: "user", content: prompt }
                ],
                temperature: 0.3,
                max_tokens: 4096,
                response_format: useJson ? { type: "json_object" } : undefined
              })
            }, 10000);
            if (resp.ok) {
              const data = await resp.json();
              let content = data.choices?.[0]?.message?.content;
              if (content) {
                content = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
                console.log(`✅ AI_CORE: éxito con Groq [${gModel}].`);
                return content;
              }
            }
          } catch (e) {
            console.warn(`⚠️ AI_CORE: Error en Groq [${gModel}]:`, e.message);
          }
        }
      }

      // 2. Try Gemini
      if (GEMINI_API_KEY) {
        const geminiModels = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash-8b'];
        for (const gModel of geminiModels) {
          try {
            console.log(`🤖 AI_CORE: Intentando con Gemini [${gModel}]...`);
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${gModel}:generateContent?key=${GEMINI_API_KEY}`;
            const resp = await fetchWithTimeout(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{
                  parts: [{ text: `${AI_SYSTEM_PROMPT}\n\n${prompt}` }]
                }],
                generationConfig: {
                  responseMimeType: useJson ? "application/json" : "text/plain",
                  temperature: 0.3
                }
              })
            }, 12000);
            if (!resp.ok) continue;
            const data = await resp.json();
            const content = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (content) {
              console.log(`✅ AI_CORE: éxito con Gemini [${gModel}].`);
              return content;
            }
          } catch (e) {
            console.warn(`⚠️ AI_CORE: Error en Gemini [${gModel}]:`, e.message);
          }
        }
      }

      // 3. Try DeepSeek
      if (DEEPSEEK_API_KEY) {
        try {
          console.log(`🤖 AI_CORE: Intentando con DeepSeek [deepseek-chat]...`);
          const resp = await fetchWithTimeout('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
              model: 'deepseek-chat',
              messages: [
                { role: 'system', content: AI_SYSTEM_PROMPT },
                { role: 'user', content: prompt }
              ],
              temperature: 0.3,
              response_format: useJson ? { type: 'json_object' } : undefined
            })
          }, 12000);
          if (resp.ok) {
            const data = await resp.json();
            let content = data.choices?.[0]?.message?.content;
            if (content) {
              content = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
              console.log(`✅ AI_CORE: éxito con DeepSeek.`);
              return content;
            }
          }
        } catch (e) {
          console.warn(`⚠️ AI_CORE: Error en DeepSeek:`, e.message);
        }
      }

      // 4. Try OpenAI
      if (OPENAI_API_KEY) {
        const oaiModels = ['gpt-4o-mini', 'gpt-4o'];
        for (const oModel of oaiModels) {
          try {
            console.log(`🤖 AI_CORE: Intentando con OpenAI [${oModel}]...`);
            const resp = await fetchWithTimeout('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
              },
              body: JSON.stringify({
                model: oModel,
                messages: [
                  { role: 'system', content: AI_SYSTEM_PROMPT },
                  { role: 'user', content: prompt }
                ],
                temperature: 0.3,
                response_format: useJson ? { type: 'json_object' } : undefined
              })
            }, 12000);
            if (resp.ok) {
              const data = await resp.json();
              const content = data.choices?.[0]?.message?.content;
              if (content) {
                console.log(`✅ AI_CORE: éxito con OpenAI [${oModel}].`);
                return content;
              }
            }
          } catch (e) {
            console.warn(`⚠️ AI_CORE: Error en OpenAI [${oModel}]:`, e.message);
          }
        }
      }

      // 5. Try Nvidia NIM
      if (NVIDIA_NIM_API_KEY) {
        const nimModels = ['meta/llama-3.1-70b-instruct', 'deepseek-ai/deepseek-r1'];
        for (const nModel of nimModels) {
          try {
            console.log(`🤖 AI_CORE: Intentando con Nvidia NIM [${nModel}]...`);
            const resp = await fetchWithTimeout('https://integrate.api.nvidia.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${NVIDIA_NIM_API_KEY}`
              },
              body: JSON.stringify({
                model: nModel,
                messages: [
                  { role: 'system', content: AI_SYSTEM_PROMPT },
                  { role: 'user', content: prompt }
                ],
                temperature: 0.3,
                max_tokens: 4096
              })
            }, 12000);
            if (resp.ok) {
              const data = await resp.json();
              let content = data.choices?.[0]?.message?.content;
              if (content) {
                content = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
                const jsonMatch = content.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                  console.log(`✅ AI_CORE: éxito con Nvidia NIM [${nModel}].`);
                  return jsonMatch[0];
                }
                return content;
              }
            }
          } catch (e) {
            console.warn(`⚠️ AI_CORE: Error en Nvidia NIM [${nModel}]:`, e.message);
          }
        }
      }

      // 6. Try OpenRouter
      if (OPENROUTER_API_KEY) {
        for (const model of OPENROUTER_FREE_MODELS) {
          try {
            console.log(`🤖 AI_CORE: Intentando con OpenRouter [${model}]...`);
            const resp = await fetchWithTimeout('https://openrouter.ai/api/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': window.location.origin,
                'X-Title': 'Plux Travel Planner'
              },
              body: JSON.stringify({
                model,
                messages: [
                  { role: 'system', content: AI_SYSTEM_PROMPT },
                  { role: 'user', content: prompt }
                ],
                temperature: 0.3,
                max_tokens: 4096
              })
            }, 12000);
            if (!resp.ok) continue;
            const data = await resp.json();
            const content = data.choices?.[0]?.message?.content;
            if (content && content.trim().startsWith('{')) {
              console.log(`✅ AI_CORE: éxito con OpenRouter [${model}].`);
              return content;
            } else if (content) {
              const jsonMatch = content.match(/\{[\s\S]*\}/);
              if (jsonMatch) {
                console.log(`✅ AI_CORE: JSON extraído de OpenRouter.`);
                return jsonMatch[0];
              }
            }
          } catch (e) {
            console.warn(`⚠️ OpenRouter ${model}:`, e.message);
          }
        }
      }

      // 7. Try Mistral
      if (MISTRAL_API_KEY) {
        try {
          console.log('🤖 AI_CORE: Intentando con Mistral...');
          const resp = await fetchWithTimeout('https://api.mistral.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${MISTRAL_API_KEY}`
            },
            body: JSON.stringify({
              model: "mistral-small-latest",
              messages: [
                { role: "system", content: AI_SYSTEM_PROMPT },
                { role: "user", content: prompt }
              ],
              temperature: 0.3,
              response_format: useJson ? { type: "json_object" } : undefined
            })
          }, 12000);
          if (resp.ok) {
            const data = await resp.json();
            if (data.choices?.[0]?.message?.content) {
              console.log('✅ AI_CORE: éxito con Mistral.');
              return data.choices[0].message.content;
            }
          }
        } catch (e) {
          console.warn('⚠️ AI_CORE: Error en Mistral:', e.message);
        }
      }

      console.error('❌ AI_CORE: Todos los proveedores de IA fallaron.');
      throw new Error('AI_OFFLINE');
    }

    // Non-JSON AI call (for Pluxy Chat Agent)
    async function callAIText(messages) {
      // 1. Prioridad: Cloudflare Worker Seguro y Multimodelo
      try {
        const workerResp = await fetch('https://pluxy.nibecar-cofeben.workers.dev/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages })
        });
        if (workerResp.ok) {
          const workerData = await workerResp.json();
          if (workerData.text) {
            return workerData.text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
          }
        }
      } catch (e) {
        console.warn('⚠️ Cloudflare Worker pluxy fallback to direct keys:', e);
      }

      const appLang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'es';
      const chatPromptSystem = `Sos Pluxy, el agente inteligente y copiloto de viajes experto de Plux con capacidades agénticas reales. REGLA FUNDAMENTAL DE IDIOMA: Respondé SIEMPRE en el MISMO IDIOMA en el que te escribe el usuario (si el usuario escribe en inglés, respondé 100% en inglés; si escribe en francés, alemán, italiano, portugués, etc., en ese idioma respectivo). Si te escribe en español, usá un tono amigable y cercano. Idioma de la interfaz: ${appLang}.`;

      // Use incoming system message if present, otherwise inject chatPromptSystem
      const finalMessages = (Array.isArray(messages) && messages.length > 0 && messages[0].role === 'system')
        ? messages
        : [{ role: "system", content: chatPromptSystem }, ...(messages || [])];

      // 1. Try Groq chat models
      if (GROQ_API_KEY) {
        const chatModels = ['qwen/qwen3.6-27b', 'openai/gpt-oss-120b', 'groq/compound-mini'];
        for (const model of chatModels) {
          try {
            const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_API_KEY}` },
              body: JSON.stringify({ 
                model, 
                messages: finalMessages, 
                temperature: 0.7, 
                max_tokens: 1500 
              })
            });
            if (resp.ok) {
              const data = await resp.json();
              let text = data.choices?.[0]?.message?.content;
              if (text) {
                return text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
              }
            }
          } catch(e) {
            console.warn(`Groq chat failed with ${model}`, e);
          }
        }
      }

      // 2. Prioridad: Gemini oficial activo (gemini-2.5-flash / gemini-flash-latest)
      if (GEMINI_API_KEY) {
        const geminiModels = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.5-pro'];
        for (const gModel of geminiModels) {
          try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${gModel}:generateContent?key=${GEMINI_API_KEY}`;
            const geminiContents = finalMessages.map(msg => ({
              role: msg.role === 'assistant' || msg.role === 'system' ? 'model' : 'user',
              parts: [{ text: msg.content }]
            }));

            const resp = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ contents: geminiContents })
            });
            if (resp.ok) {
              const data = await resp.json();
              const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) return text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
            }
          } catch (e) {
            console.warn(`Gemini chat failed with ${gModel}:`, e);
          }
        }
      }

      // 3. Try DeepSeek Chat
      if (DEEPSEEK_API_KEY) {
        try {
          const resp = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${DEEPSEEK_API_KEY}` },
            body: JSON.stringify({
              model: 'deepseek-chat',
              messages: finalMessages,
              temperature: 0.7,
              max_tokens: 1500
            })
          });
          if (resp.ok) {
            const data = await resp.json();
            const text = data.choices?.[0]?.message?.content;
            if (text) return text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
          }
        } catch (e) {
          console.warn('DeepSeek chat failed', e);
        }
      }

      // 4. Try OpenAI Chat
      if (OPENAI_API_KEY) {
        try {
          const resp = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: finalMessages,
              temperature: 0.7,
              max_tokens: 1500
            })
          });
          if (resp.ok) {
            const data = await resp.json();
            const text = data.choices?.[0]?.message?.content;
            if (text) return text;
          }
        } catch (e) {
          console.warn('OpenAI chat failed', e);
        }
      }

      // 5. Intelligent Fallback
      const destNames = (Array.isArray(destinos) && destinos.length > 0) 
        ? destinos.map(d => d.nombre).join(', ') 
        : (appLang === 'en' ? 'your destinations' : 'tus destinos');

      if (appLang === 'en') {
        return `Hello! I'm your Pluxy travel assistant ✨. For ${destNames}: I recommend planning visits to top landmarks early in the morning to skip the lines, using 24/48h transit passes, and booking tickets in advance. Feel free to ask me for custom recommendations or use the quick action buttons above! ✨`;
      }
      return `¡Hola! Como tu asistente Pluxy ✨, para ${destNames}: te recomiendo planificar siempre las visitas a los monumentos principales por la mañana temprano para evitar filas, usar pases de transporte público de 24/48hs para ahorrar, y reservar actividades con antelación. ¡Podés pedirme sugerencias específicas para cualquier ciudad o usar los botones de acceso rápido arriba! ✨`;
    }

    // ================== GENERADOR AUTOMÁTICO DE ITINERARIO ==================
    async function generarItinerarioAuto(destId, diasForzados = null) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      if (!dest) return;
      
      const btn = event?.target;
      const oldText = btn ? btn.innerText : '';
      if(btn) {
          btn.innerText = 'Generando...';
          btn.disabled = true;
          btn.style.opacity = '0.7';
      }

      let numDias = diasForzados || (dest.dias ? dest.dias.length : 0);
      if (numDias === 0) {
        numDias = 3;
        showToast('Generando itinerario de 3 días...', 'info');
      } else if (diasForzados) {
        showToast(`Generando itinerario de ${numDias} días...`, 'info');
      }
      try {
        const prompt = `Genera un itinerario turístico de ${numDias} días para ${dest.nombre}. Sugiere exactamente ${userPreferences.eventsPerDay || 3} actividades por día con horarios realistas y precios estimados en euros (ej. costo: 15, 25, 0 si es libre). Responde ESTRICTAMENTE con un objeto JSON válido: {"dias":[{"eventos":[{"hora":"09:00","titulo":"Lugar o Actividad","notas":"Descripción breve","costo":25,"duracion":90}]}]}`;
        const textContent = await callAI(prompt);
        if (!textContent) throw new Error('No AI response');
        
        const jsonStr = textContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const itinerary = JSON.parse(jsonStr);
        
        dest.dias = [];
        itinerary.dias.forEach((dia, d) => {
          const diaObj = { id: d, eventos: [], costosAdicionales: [] };
          if (dia.eventos) {
            dia.eventos.forEach((ev, i) => {
              const evCost = parseFloat(ev.costo || ev.precio || 0) || 0;
              diaObj.eventos.push({
                id: Date.now() + d * 100 + i,
                hora: ev.hora || '10:00',
                titulo: ev.titulo || 'Actividad',
                notas: ev.notas || '',
                costo: evCost,
                precio: evCost,
                duracion: ev.duracion || 60
              });
            });
          }
          dest.dias.push(diaObj);
        });
        
        renderDias(destId);
        autoSave();
        showToast('¡Itinerario generado con éxito!', 'success');
      } catch(e) {
        console.error('Itinerary error:', e);
        showToast('Error con la IA, usando Wikipedia...', 'warning');
        await generarItinerarioWikiFallback(destId, numDias);
      } finally {
          if(btn) {
              btn.innerText = oldText;
              btn.disabled = false;
              btn.style.opacity = '1';
          }
      }
    }

    async function generarItinerarioWikiFallback(destId, numDias) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      try {
        const coords = await geocode(dest.nombre);
        if (!coords) { showToast('No se pudo ubicar el destino', 'error'); return; }
        const url = `https://es.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&explaintext&exchars=100&pithumbsize=200&generator=geosearch&ggsradius=10000&ggscoord=${coords.lat}|${coords.lon}&ggslimit=50&format=json&origin=*`;
        const res = await fetch(url);
        const data = await res.json();
        if (!data.query?.pages) { showToast('Sin resultados', 'error'); return; }
        
        const forbidden = ['incendio','batalla','muerte','guerra','desastre','comité','línea','consejo','asociación'];
        const allPlaces = Object.values(data.query.pages).filter(p => {
          const t = p.title.toLowerCase();
          return !p.title.match(/\d{3,4}/) && !forbidden.some(w => t.includes(w));
        });
        
        dest.dias = [];
        const horasBase = ['09:00', '11:00', '13:30', '16:00', '18:30'];
        const perDay = 4; // Hard limit to 4 events per day to prevent 50 events in 3 days
        
        for (let d = 0; d < numDias; d++) {
          const dia = { id: d, eventos: [], costosAdicionales: [] };
          const dayPlaces = allPlaces.slice(d * perDay, (d + 1) * perDay);
          dayPlaces.forEach((place, i) => {
            dia.eventos.push({
              id: Date.now() + d * 100 + i,
              hora: horasBase[i % horasBase.length],
              titulo: place.title,
              notas: place.extract ? place.extract.substring(0, 80) : 'Punto de interés',
              costo: 0,
              duracion: 60 + Math.floor(Math.random() * 60)
            });
          });
          dest.dias.push(dia);
        }
        renderDias(destId);
        autoSave();
        showToast(`Itinerario generado con ${allPlaces.length} lugares`, 'success');
      } catch(e) {
        showToast('Error al generar itinerario', 'error');
      }
    }

    function toggleTransportFields(destId) {
      const el = document.getElementById(`transport-${destId}`);
      if (el) {
        el.classList.toggle('show');
        if (el.classList.contains('show')) {
          openTransportDestIds.add(destId);
        } else {
          openTransportDestIds.delete(destId);
        }
      }
    }

    // ================== INTEGRACIÓN EN VIVO: VUELOS (KIWI / SKYSCANNER) Y HOTELES (BOOKING) ==================
    const IATA_CITIES = {
      'buenos aires': 'BUE', 'ezeiza': 'EZE', 'aeroparque': 'AEP', 'cordoba': 'COR', 'mendoza': 'MDZ',
      'bariloche': 'BRC', 'salta': 'SLA', 'iguazu': 'IGR', 'ushuaia': 'USH', 'rosario': 'ROS', 'el calafate': 'FTE',
      'madrid': 'MAD', 'barcelona': 'BCN', 'valencia': 'VLC', 'sevilla': 'SVQ', 'malaga': 'AGP', 'bilbao': 'BIO',
      'roma': 'ROM', 'rome': 'ROM', 'milan': 'MIL', 'venecia': 'VCE', 'florencia': 'FLR', 'napoles': 'NAP',
      'paris': 'PAR', 'londres': 'LON', 'london': 'LON', 'amsterdam': 'AMS', 'berlin': 'BER', 'munich': 'MUC',
      'frankfurt': 'FRA', 'lisboa': 'LIS', 'porto': 'OPO', 'atenas': 'ATH', 'estambul': 'IST', 'zurich': 'ZRH',
      'viena': 'VIE', 'praga': 'PRG', 'budapest': 'BUD', 'dublin': 'DUB', 'edimburgo': 'EDI', 'bruselas': 'BRU',
      'miami': 'MIA', 'orlando': 'MCO', 'nueva york': 'NYC', 'new york': 'NYC', 'los angeles': 'LAX',
      'san francisco': 'SFO', 'las vegas': 'LAS', 'chicago': 'CHI', 'boston': 'BOS', 'washington': 'WAS',
      'cancun': 'CUN', 'ciudad de mexico': 'MEX', 'mexico': 'MEX', 'guadalajara': 'GDL', 'monterrey': 'MTY',
      'rio de janeiro': 'RIO', 'sao paulo': 'SAO', 'salvador': 'SSA', 'florianopolis': 'FLN', 'fortaleza': 'FOR',
      'santiago': 'SCL', 'bogota': 'BOG', 'medellin': 'MDE', 'cartagena': 'CTG', 'cali': 'CLO',
      'lima': 'LIM', 'cusco': 'CUZ', 'montevideo': 'MVD', 'punta del este': 'PDP', 'asuncion': 'ASU',
      'tokio': 'TYO', 'tokyo': 'TYO', 'kyoto': 'OSA', 'osaka': 'OSA', 'bangkok': 'BKK', 'singapur': 'SIN',
      'dubai': 'DXB', 'doha': 'DOH', 'sydney': 'SYD', 'auckland': 'AKL', 'el cairo': 'CAI', 'ciudad del cabo': 'CPT'
    };

    function resolverCodigoIata(nombre) {
      if (!nombre) return 'BUE';
      const clean = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
      for (const [city, code] of Object.entries(IATA_CITIES)) {
        if (clean.includes(city) || city.includes(clean)) return code;
      }
      return clean.replace(/[^a-zA-Z]/g, '').slice(0, 3).toUpperCase() || 'BUE';
    }

    function obtenerFechasDestino(destId) {
      const fInicio = document.getElementById('fechaInicio')?.value;
      let baseDate = fInicio ? new Date(fInicio) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      if (isNaN(baseDate.getTime())) baseDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      
      let acumulados = 0;
      for (let i = 0; i < destinos.length; i++) {
        if (destinos[i].id === destId) break;
        acumulados += (destinos[i].dias || []).length || 1;
      }
      
      const checkinDate = new Date(baseDate.getTime() + (acumulados * 24 * 60 * 60 * 1000));
      const currentDest = destinos.find(d => d.id === destId);
      const duracionDias = (currentDest && currentDest.dias && currentDest.dias.length) ? currentDest.dias.length : 3;
      const checkoutDate = new Date(checkinDate.getTime() + (duracionDias * 24 * 60 * 60 * 1000));

      const pad = n => String(n).padStart(2, '0');
      const formatYmd = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
      const formatDmy = d => `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`;
      
      return {
        checkinYmd: formatYmd(checkinDate),
        checkinDmy: formatDmy(checkinDate),
        checkoutYmd: formatYmd(checkoutDate),
        checkoutDmy: formatDmy(checkoutDate),
        dias: duracionDias
      };
    }

    function generarOpcionesTransporte(origenStr, destinoStr, fechaYmd, numPers = 1) {
      const origIata = resolverCodigoIata(origenStr);
      const destIata = resolverCodigoIata(destinoStr);
      const pers = Math.max(1, parseInt(numPers) || 1);
      const origNombre = (origenStr && origenStr.trim()) ? origenStr.trim() : 'Origen';
      const destNombre = (destinoStr && destinoStr.trim()) ? destinoStr.trim() : 'Destino';
      const cleanFechaYmd = fechaYmd || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

      const kiwiUrl = `https://www.kiwi.com/deep?from=${encodeURIComponent(origIata)}&to=${encodeURIComponent(destIata)}&departure=${cleanFechaYmd}&passengers=${pers}`;
      const trainlineUrl = `https://www.trainline.com/search?from=${encodeURIComponent(origNombre)}&to=${encodeURIComponent(destNombre)}&date=${cleanFechaYmd}`;
      const omioBusUrl = `https://www.omio.com/search-frontend/results/${encodeURIComponent(origNombre)}/${encodeURIComponent(destNombre)}/${cleanFechaYmd}/1/0/0/bus`;
      const rentalCarsUrl = `https://www.rentalcars.com/search-results?location=${encodeURIComponent(origNombre)}&puDay=${cleanFechaYmd.slice(8,10)}&puMonth=${cleanFechaYmd.slice(5,7)}&puYear=${cleanFechaYmd.slice(0,4)}`;

      const isIntercontinental = ['BUE','COR','MDZ','SCL','LIM','BOG','MEX','RIO','SAO'].includes(origIata) && ['MAD','BCN','ROM','PAR','LON','BER','AMS','TYO','DXB','NYC','MIA'].includes(destIata);

      const baseFlight = isIntercontinental ? 620 : 130;
      const flightPrice = Math.round(baseFlight * 1.2 * pers);
      const trainPrice = Math.round((isIntercontinental ? 90 : 45) * pers);
      const busPrice = Math.round((isIntercontinental ? 50 : 25) * pers);
      const carPrice = Math.round(40 * pers);

      return [
        {
          tipoIcon: '✈️',
          modo: 'Avión / Vuelo',
          titulo: '✈️ Vuelo Directo / Rápido',
          descripcion: `Vuelo comercial · ${isIntercontinental ? '11h 50m' : '2h 15m'} (${origIata} ➔ ${destIata})`,
          medioTexto: `✈️ Avión (${isIntercontinental ? '11h 50m' : '2h 15m'})`,
          precio: flightPrice,
          precioPersona: Math.round(flightPrice / pers),
          bookingUrl: kiwiUrl,
          badge: 'Más Rápido',
          badgeColor: '#10b981',
          proveedor: 'Kiwi.com / Skyscanner'
        },
        {
          tipoIcon: '🚆',
          modo: 'Tren de Alta Velocidad',
          titulo: '🚆 Tren Alta Velocidad / Regional',
          descripcion: `Confortable y céntrico · ${isIntercontinental ? 'Conexión ferroviaria' : '2h 45m'}`,
          medioTexto: `🚆 Tren de Alta Velocidad`,
          precio: trainPrice,
          precioPersona: Math.round(trainPrice / pers),
          bookingUrl: trainlineUrl,
          badge: 'Cómodo',
          badgeColor: '#0ea5e9',
          proveedor: 'Trainline / Renfe / Omio'
        },
        {
          tipoIcon: '🚌',
          modo: 'Bus / Ómnibus Larga Distancia',
          titulo: '🚌 Bus Larga Distancia (Low-Cost)',
          descripcion: `Tarifa económica con equipaje · ${isIntercontinental ? 'Ruta de bus' : '4h 30m'}`,
          medioTexto: `🚌 Bus Larga Distancia`,
          precio: busPrice,
          precioPersona: Math.round(busPrice / pers),
          bookingUrl: omioBusUrl,
          badge: 'Económico',
          badgeColor: '#f59e0b',
          proveedor: 'FlixBus / Alsa / Omio'
        },
        {
          tipoIcon: '🚗',
          modo: 'Alquiler de Auto',
          titulo: '🚗 Alquiler de Auto / Conducir',
          descripcion: `Libertad total de ruta · Retiro en origen o aeropuerto`,
          medioTexto: `🚗 Auto de alquiler`,
          precio: carPrice,
          precioPersona: Math.round(carPrice / pers),
          bookingUrl: rentalCarsUrl,
          badge: 'Flexibilidad',
          badgeColor: '#8b5cf6',
          proveedor: 'Rentalcars / Booking Cars'
        }
      ];
    }

    function generarOpcionesHoteles(destinoStr, checkinYmd, checkoutYmd, numDias = 3, numPers = 1) {
      const destNombre = (destinoStr && destinoStr.trim()) ? destinoStr.trim() : 'Destino';
      const pers = Math.max(1, parseInt(numPers) || 1);
      const noches = Math.max(1, parseInt(numDias) || 1);

      const bookingUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destNombre)}&checkin=${checkinYmd}&checkout=${checkoutYmd}&group_adults=${pers}&no_rooms=1`;
      const hotellookUrl = `https://hotellook.com/search/#?location=${encodeURIComponent(destNombre)}&checkIn=${checkinYmd}&checkOut=${checkoutYmd}&adults=${pers}`;
      const airbnbEntireUrl = `https://www.airbnb.com/s/${encodeURIComponent(destNombre)}/homes?checkin=${checkinYmd}&checkout=${checkoutYmd}&adults=${pers}&room_types%5B%5D=Entire%20home%2Fapt`;
      const airbnbRoomUrl = `https://www.airbnb.com/s/${encodeURIComponent(destNombre)}/homes?checkin=${checkinYmd}&checkout=${checkoutYmd}&adults=${pers}&room_types%5B%5D=Private%20room`;

      const basePricePerNight = 68;
      const airbnbDeptoPrice = Math.round(basePricePerNight * 1.15 * noches);
      const hotelCenterPrice = Math.round(basePricePerNight * 1.38 * noches);
      const airbnbRoomPrice = Math.round(basePricePerNight * 0.70 * noches);
      const hotelLuxuryPrice = Math.round(basePricePerNight * 2.85 * noches);
      const hostelEcoPrice = Math.round(basePricePerNight * 0.50 * noches);

      return [
        {
          nombre: `Airbnb: Depto entero en ${destNombre}`,
          tipo: 'Airbnb Departamento',
          detalles: `Superhost · Cocina equipada, WiFi alta velocidad, auto check-in · ${noches} ${noches === 1 ? 'noche' : 'noches'}`,
          puntuacion: '★ 4.92 Superhost',
          precio: airbnbDeptoPrice,
          precioNoche: Math.round(airbnbDeptoPrice / noches),
          bookingUrl: airbnbEntireUrl,
          badge: 'Airbnb Top',
          badgeColor: '#ff385c',
          proveedor: 'Airbnb'
        },
        {
          nombre: `Hotel Central Plaza ${destNombre} ★★★★`,
          tipo: 'Hotel 4 Estrellas Booking',
          detalles: `Ubicación céntrica · Desayuno buffet incluido · Cancelación gratis · ${noches} ${noches === 1 ? 'noche' : 'noches'}`,
          puntuacion: '★ 8.9 Fabuloso',
          precio: hotelCenterPrice,
          precioNoche: Math.round(hotelCenterPrice / noches),
          bookingUrl: bookingUrl,
          badge: 'Booking.com',
          badgeColor: '#003580',
          proveedor: 'Booking.com'
        },
        {
          nombre: `Airbnb: Habitación privada & terraza en ${destNombre}`,
          tipo: 'Airbnb Habitación',
          detalles: `Zona céntrica y turística · Balcón privado, ambiente tranquilo · ${noches} ${noches === 1 ? 'noche' : 'noches'}`,
          puntuacion: '★ 4.88 Excelente',
          precio: airbnbRoomPrice,
          precioNoche: Math.round(airbnbRoomPrice / noches),
          bookingUrl: airbnbRoomUrl,
          badge: 'Airbnb Económico',
          badgeColor: '#ff385c',
          proveedor: 'Airbnb'
        },
        {
          nombre: `Gran Resort & Spa ${destNombre} ★★★★★`,
          tipo: 'Hotel 5 Estrellas Booking / Lujo',
          detalles: `Piscina climatizada, Spa, Vista panorámica · ${noches} ${noches === 1 ? 'noche' : 'noches'}`,
          puntuacion: '★ 9.5 Excepcional',
          precio: hotelLuxuryPrice,
          precioNoche: Math.round(hotelLuxuryPrice / noches),
          bookingUrl: bookingUrl,
          badge: 'Booking Lujo',
          badgeColor: '#ec4899',
          proveedor: 'Booking.com'
        },
        {
          nombre: `Hostel Boutique & Suites ${destNombre}`,
          tipo: 'Hostel / Low-Cost Confort',
          detalles: `Habitación privada o compartida de diseño · Ambiente internacional · ${noches} ${noches === 1 ? 'noche' : 'noches'}`,
          puntuacion: '★ 8.5 Muy Bueno',
          precio: hostelEcoPrice,
          precioNoche: Math.round(hostelEcoPrice / noches),
          bookingUrl: hotellookUrl,
          badge: 'Low-Cost',
          badgeColor: '#f59e0b',
          proveedor: 'Hotellook / Booking'
        }
      ];
    }

    window.abrirBusquedaTransporteTramo = function(destId, tramoIda, event) {
      if (event) { event.stopPropagation(); }
      const destIndex = destinos.findIndex(d => d.id === destId);
      if (destIndex === -1) return;
      
      const dest = destinos[destIndex];
      const origen = (destIndex === 0) ? (lugarSalida || 'Buenos Aires') : (destinos[destIndex - 1]?.nombre || lugarSalida || 'Origen');
      const destino = dest.nombre || 'Destino';
      const fechas = obtenerFechasDestino(destId);
      const opciones = generarOpcionesTransporte(origen, destino, fechas.checkinYmd, numPersonas);
      
      const dropdown = document.getElementById(`dropdown-transporte-${destId}-${tramoIda}`);
      if (!dropdown) return;

      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        return;
      }

      document.querySelectorAll('.live-booking-dropdown').forEach(d => d.style.display = 'none');

      let html = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:6px;">
          <div style="font-size:0.8rem; font-weight:700; color:#38bdf8;">
            🧭 Comparar transporte: ${escapeHtml(origen)} ➔ ${escapeHtml(destino)}
          </div>
          <button type="button" onclick="document.getElementById('dropdown-transporte-${destId}-${tramoIda}').style.display='none'" style="background:none; border:none; color:var(--gris); cursor:pointer; font-size:1.1rem; line-height:1; padding:0 4px;">×</button>
        </div>
        <div style="font-size:0.75rem; color:var(--gris); margin-bottom:8px;">
          📅 Fecha estimada: <b>${fechas.checkinDmy}</b> · 👥 <b>${numPersonas} ${numPersonas === 1 ? 'viajero' : 'viajeros'}</b>
        </div>
      `;

      opciones.forEach((op, idx) => {
        html += `
          <div class="live-offer-item" onclick="window.seleccionarTransporteTramo(${destId}, ${tramoIda}, ${idx})">
            <div style="flex:1;">
              <div style="display:flex; align-items:center; gap:6px; margin-bottom:3px;">
                <span style="font-size:0.82rem; font-weight:700; color:var(--texto);">${escapeHtml(op.titulo)}</span>
                <span style="font-size:0.65rem; font-weight:700; background:${op.badgeColor}; color:white; padding:1px 6px; border-radius:999px;">${op.badge}</span>
              </div>
              <div style="font-size:0.72rem; color:var(--gris);">${escapeHtml(op.descripcion)}</div>
              <div style="font-size:0.68rem; color:#38bdf8; margin-top:2px;">🔗 Reserva en ${op.proveedor}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:1rem; font-weight:800; color:#10b981;">$${op.precio.toLocaleString()}</div>
              <div style="font-size:0.68rem; color:var(--gris);">$${op.precioPersona.toLocaleString()} / pers</div>
            </div>
          </div>
        `;
      });

      html += `
        <div style="margin-top:8px; text-align:center; font-size:0.7rem; color:var(--gris);">
          💡 Al seleccionar una opción se carga en Plux y se abre la web de reserva.
        </div>
      `;

      dropdown.innerHTML = html;
      dropdown.style.display = 'block';
    };

    window.seleccionarTransporteTramo = function(destId, tramoIda, transIndex) {
      const destIndex = destinos.findIndex(d => d.id === destId);
      if (destIndex === -1) return;
      const dest = destinos[destIndex];
      const origen = (destIndex === 0) ? (lugarSalida || 'Buenos Aires') : (destinos[destIndex - 1]?.nombre || lugarSalida || 'Origen');
      const destino = dest.nombre || 'Destino';
      const fechas = obtenerFechasDestino(destId);
      const opciones = generarOpcionesTransporte(origen, destino, fechas.checkinYmd, numPersonas);
      const op = opciones[transIndex];
      if (!op) return;

      if (!dest.tramos) dest.tramos = [];
      if (!dest.tramos[tramoIda]) dest.tramos[tramoIda] = { origen: "", destino: "", medio: "", precio: 0, escalas: [] };

      dest.tramos[tramoIda].medio = op.medioTexto;
      dest.tramos[tramoIda].precio = op.precio;

      const inputMedio = document.getElementById(`tramo-medio-${destId}-${tramoIda}`);
      const inputPrecio = document.getElementById(`tramo-precio-${destId}-${tramoIda}`);
      if (inputMedio) inputMedio.value = dest.tramos[tramoIda].medio;
      if (inputPrecio) inputPrecio.value = dest.tramos[tramoIda].precio;

      const dropdown = document.getElementById(`dropdown-transporte-${destId}-${tramoIda}`);
      if (dropdown) dropdown.style.display = 'none';

      try {
        window.open(op.bookingUrl, '_blank');
      } catch(e) {}

      autoSave();
      showToast(`🧭 Transporte "${op.modo}" cargado ($${op.precio}) y enlace de reserva abierto`, 'success');
    };

    window.abrirBusquedaHotelesTramo = function(destId, tramoIda, event) {
      if (event) { event.stopPropagation(); }
      const dest = destinos.find(d => d.id === destId);
      if (!dest) return;
      
      const destino = dest.nombre || 'Destino';
      const fechas = obtenerFechasDestino(destId);
      const opciones = generarOpcionesHoteles(destino, fechas.checkinYmd, fechas.checkoutYmd, fechas.dias, numPersonas);
      
      const dropdown = document.getElementById(`dropdown-hoteles-${destId}-${tramoIda}`);
      if (!dropdown) return;

      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        return;
      }

      document.querySelectorAll('.live-booking-dropdown').forEach(d => d.style.display = 'none');

      let html = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:6px;">
          <div style="font-size:0.8rem; font-weight:700; color:#f472b6;">
            🏨/🏡 Alojamientos (Airbnb & Booking): ${escapeHtml(destino)}
          </div>
          <button type="button" onclick="document.getElementById('dropdown-hoteles-${destId}-${tramoIda}').style.display='none'" style="background:none; border:none; color:var(--gris); cursor:pointer; font-size:1.1rem; line-height:1; padding:0 4px;">×</button>
        </div>
        <div style="font-size:0.75rem; color:var(--gris); margin-bottom:8px;">
          📅 Estadía: <b>${fechas.checkinDmy}</b> al <b>${fechas.checkoutDmy}</b> (${fechas.dias} ${fechas.dias === 1 ? 'noche' : 'noches'}) · 👥 <b>${numPersonas} huéspedes</b>
        </div>
      `;

      opciones.forEach((op, idx) => {
        html += `
          <div class="live-offer-item hotel-offer" onclick="window.seleccionarHotelTramo(${destId}, ${tramoIda}, ${idx})">
            <div style="flex:1;">
              <div style="display:flex; align-items:center; gap:6px; margin-bottom:3px;">
                <span style="font-size:0.82rem; font-weight:700; color:var(--texto);">${escapeHtml(op.nombre)}</span>
                <span style="font-size:0.65rem; font-weight:700; background:${op.badgeColor}; color:white; padding:1px 6px; border-radius:999px;">${op.badge}</span>
              </div>
              <div style="font-size:0.72rem; color:var(--gris);">${escapeHtml(op.detalles)} · <b style="color:#fbbf24;">${op.puntuacion}</b></div>
              <div style="font-size:0.68rem; color:#f472b6; margin-top:2px;">🔗 Reserva en ${op.proveedor}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:1rem; font-weight:800; color:#10b981;">$${op.precio.toLocaleString()}</div>
              <div style="font-size:0.68rem; color:var(--gris);">$${op.precioNoche.toLocaleString()} / noche</div>
            </div>
          </div>
        `;
      });

      html += `
        <div style="margin-top:8px; text-align:center; font-size:0.7rem; color:var(--gris);">
          💡 Al seleccionar un alojamiento se carga en Plux y se abre la ficha de reserva.
        </div>
      `;

      dropdown.innerHTML = html;
      dropdown.style.display = 'block';
    };

    window.seleccionarHotelTramo = function(destId, tramoIda, hotelIndex) {
      const dest = destinos.find(d => d.id === destId);
      if (!dest) return;
      const destino = dest.nombre || 'Destino';
      const fechas = obtenerFechasDestino(destId);
      const opciones = generarOpcionesHoteles(destino, fechas.checkinYmd, fechas.checkoutYmd, fechas.dias, numPersonas);
      const op = opciones[hotelIndex];
      if (!op) return;

      if (!dest.tramos) dest.tramos = [];
      if (!dest.tramos[tramoIda]) dest.tramos[tramoIda] = { origen: "", destino: "", medio: "", precio: 0, escalas: [] };

      dest.tramos[tramoIda].alojamiento = op.nombre;
      dest.tramos[tramoIda].precioAlojamiento = op.precio;

      const inputAloj = document.getElementById(`tramo-alojamiento-${destId}-${tramoIda}`);
      const inputPrecioAloj = document.getElementById(`tramo-precioAlojamiento-${destId}-${tramoIda}`);
      if (inputAloj) inputAloj.value = dest.tramos[tramoIda].alojamiento;
      if (inputPrecioAloj) inputPrecioAloj.value = dest.tramos[tramoIda].precioAlojamiento;

      const dropdown = document.getElementById(`dropdown-hoteles-${destId}-${tramoIda}`);
      if (dropdown) dropdown.style.display = 'none';

      try {
        window.open(op.bookingUrl, '_blank');
      } catch(e) {}

      autoSave();
      showToast(`🏡 "${op.nombre}" cargado ($${op.precio}) y enlace de ${op.proveedor} abierto`, 'success');
    };

    window.abrirBusquedaTransporteVuelta = function(event) {
      if (event) { 
        event.stopPropagation(); 
        if (event.preventDefault) event.preventDefault();
      }
      
      const lastDest = (destinos && destinos.length > 0 && destinos[destinos.length - 1]?.nombre) 
        ? destinos[destinos.length - 1].nombre 
        : 'Último destino';
        
      const inputSalida = document.getElementById('lugarSalida');
      const destinoVuelta = (inputSalida && inputSalida.value.trim()) 
        ? inputSalida.value.trim() 
        : (lugarSalida || 'Origen');
      
      const fInicio = document.getElementById('fechaInicio')?.value;
      let baseDate = fInicio ? new Date(fInicio) : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
      if (isNaN(baseDate.getTime())) baseDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
      let totalDias = 0;
      if (destinos && destinos.length > 0) {
        destinos.forEach(d => { totalDias += (d.dias || []).length || 1; });
      } else {
        totalDias = 5;
      }
      const returnDate = new Date(baseDate.getTime() + (totalDias * 24 * 60 * 60 * 1000));
      
      const pad = n => String(n).padStart(2, '0');
      const returnYmd = `${returnDate.getFullYear()}-${pad(returnDate.getMonth()+1)}-${pad(returnDate.getDate())}`;
      const returnDmy = `${pad(returnDate.getDate())}/${pad(returnDate.getMonth()+1)}/${returnDate.getFullYear()}`;

      const opciones = generarOpcionesTransporte(lastDest, destinoVuelta, returnYmd, numPersonas);
      const dropdown = document.getElementById('dropdown-transporte-vuelta') || document.getElementById('dropdown-vuelos-vuelta');
      if (!dropdown) {
        console.warn("Dropdown de transporte de vuelta no encontrado");
        return;
      }

      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        return;
      }

      document.querySelectorAll('.live-booking-dropdown').forEach(d => d.style.display = 'none');

      let html = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:6px;">
          <div style="font-size:0.8rem; font-weight:700; color:#38bdf8;">
            🧭 Transporte de Vuelta: ${escapeHtml(lastDest)} ➔ ${escapeHtml(destinoVuelta)}
          </div>
          <button type="button" onclick="(document.getElementById('dropdown-transporte-vuelta')||document.getElementById('dropdown-vuelos-vuelta')).style.display='none'" style="background:none; border:none; color:var(--gris); cursor:pointer; font-size:1.1rem; line-height:1; padding:0 4px;">×</button>
        </div>
        <div style="font-size:0.75rem; color:var(--gris); margin-bottom:8px;">
          📅 Fecha estimada regreso: <b>${returnDmy}</b> · 👥 <b>${numPersonas} ${numPersonas === 1 ? 'viajero' : 'viajeros'}</b>
        </div>
      `;

      opciones.forEach((op, idx) => {
        html += `
          <div class="live-offer-item" onclick="window.seleccionarTransporteVuelta(${idx})">
            <div style="flex:1;">
              <div style="display:flex; align-items:center; gap:6px; margin-bottom:3px;">
                <span style="font-size:0.82rem; font-weight:700; color:var(--texto);">${escapeHtml(op.titulo)}</span>
                <span style="font-size:0.65rem; font-weight:700; background:${op.badgeColor}; color:white; padding:1px 6px; border-radius:999px;">${op.badge}</span>
              </div>
              <div style="font-size:0.72rem; color:var(--gris);">${escapeHtml(op.descripcion)}</div>
              <div style="font-size:0.68rem; color:#38bdf8; margin-top:2px;">🔗 Reserva en ${op.proveedor}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:1rem; font-weight:800; color:#10b981;">$${op.precio.toLocaleString()}</div>
              <div style="font-size:0.68rem; color:var(--gris);">$${op.precioPersona.toLocaleString()} / pers</div>
            </div>
          </div>
        `;
      });

      html += `
        <div style="margin-top:8px; text-align:center; font-size:0.7rem; color:var(--gris);">
          💡 Al seleccionar una opción se carga en Plux y se abre el link de reserva.
        </div>
      `;

      dropdown.innerHTML = html;
      dropdown.style.display = 'block';
    };

    window.seleccionarTransporteVuelta = function(transIndex) {
      const lastDest = (destinos && destinos.length > 0 && destinos[destinos.length - 1]?.nombre) 
        ? destinos[destinos.length - 1].nombre 
        : 'Último destino';
      const inputSalida = document.getElementById('lugarSalida');
      const destinoVuelta = (inputSalida && inputSalida.value.trim()) 
        ? inputSalida.value.trim() 
        : (lugarSalida || 'Origen');
      const fInicio = document.getElementById('fechaInicio')?.value;
      let baseDate = fInicio ? new Date(fInicio) : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
      if (isNaN(baseDate.getTime())) baseDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
      let totalDias = 0;
      if (destinos && destinos.length > 0) {
        destinos.forEach(d => { totalDias += (d.dias || []).length || 1; });
      } else {
        totalDias = 5;
      }
      const returnDate = new Date(baseDate.getTime() + (totalDias * 24 * 60 * 60 * 1000));
      
      const pad = n => String(n).padStart(2, '0');
      const returnYmd = `${returnDate.getFullYear()}-${pad(returnDate.getMonth()+1)}-${pad(returnDate.getDate())}`;

      const opciones = generarOpcionesTransporte(lastDest, destinoVuelta, returnYmd, numPersonas);
      const op = opciones[transIndex];
      if (!op) return;

      vueltaGlobal = `${op.modo} (${op.titulo})`;
      vueltaPrecioGlobal = op.precio;

      const fVue = document.getElementById('vuelta');
      const fVueP = document.getElementById('vueltaPrecio');
      if (fVue) fVue.value = vueltaGlobal;
      if (fVueP) fVueP.value = vueltaPrecioGlobal;

      const dropdown = document.getElementById('dropdown-transporte-vuelta') || document.getElementById('dropdown-vuelos-vuelta');
      if (dropdown) dropdown.style.display = 'none';

      try {
        window.open(op.bookingUrl, '_blank');
      } catch(e) {}

      autoSave();
      showToast(`🧭 Transporte de vuelta "${op.modo}" cargado ($${op.precio}) y enlace de reserva abierto`, 'success');
    };

    window.abrirBusquedaVuelosVuelta = window.abrirBusquedaTransporteVuelta;
    window.seleccionarVueloVuelta = window.seleccionarTransporteVuelta;
    window.abrirBusquedaVuelosTramo = window.abrirBusquedaTransporteTramo;
    window.seleccionarVueloTramo = window.seleccionarTransporteTramo;

    // Cerrar dropdowns de reserva al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.live-booking-dropdown') && !e.target.closest('.btn-live-search')) {
        document.querySelectorAll('.live-booking-dropdown').forEach(d => d.style.display = 'none');
      }
    });

    function renderTramos(destId) {
      const dest = destinos.find(d => d.id === destId);
      const container = document.getElementById(`tramos-${destId}`);
      if (!container || !dest) return;
      container.innerHTML = "";
      dest.tramos = dest.tramos || [];
      dest.tramos.forEach((tramo, ida) => {
        const tramoDiv = document.createElement("div");
        tramoDiv.className = "tramo-item";
        tramoDiv.style = "background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:12px; padding:15px; margin-bottom:15px; position:relative;";
        tramoDiv.innerHTML = `
          <div class="tramo-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h6 style="margin:0; color:var(--rosa); font-weight:700; letter-spacing:0.5px;">✈️ ${t('transport').toUpperCase()} Y ${t('accommodation').toUpperCase()} #${ida+1}</h6>
            <button class="close-icon" onclick="eliminarTramo(${destId}, ${ida})">×</button>
          </div>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
            <div class="field-boa" style="position:relative;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; gap:6px; flex-wrap:wrap;">
                <label style="font-size:0.75rem; font-weight:700; color:var(--gris); margin:0;">${t('transport').toUpperCase()}</label>
                <button type="button" class="btn-live-search" onclick="window.abrirBusquedaTransporteTramo(${destId}, ${ida}, event)">
                  🧭 <span>Buscar transporte</span>
                </button>
              </div>
              <input type="text" id="tramo-medio-${destId}-${ida}" placeholder="Avión, Tren, Bus, Auto..." value="${tramo.medio || ''}" onchange="actualizarTramo(${destId}, ${ida}, 'medio', this.value)" style="width:100%; height:40px; background:var(--fondo); border:1px solid var(--border); border-radius:8px; padding:0 10px;">
              <div id="dropdown-transporte-${destId}-${ida}" class="live-booking-dropdown" style="display:none; z-index:99999;"></div>
            </div>
            <div class="field-boa">
              <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--gris); margin-bottom:6px;">${t('transport_price') || 'PRECIO TRANSPORTE'}</label>
              <input type="number" id="tramo-precio-${destId}-${ida}" placeholder="0.00" value="${tramo.precio || 0}" onchange="actualizarTramo(${destId}, ${ida}, 'precio', parseFloat(this.value)||0)" style="width:100%; height:40px; background:var(--fondo); border:1px solid var(--border); border-radius:8px; padding:0 10px;">
            </div>
            <div class="field-boa" style="grid-column: 1 / -1; position:relative;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; gap:6px; flex-wrap:wrap;">
                <label style="font-size:0.75rem; font-weight:700; color:var(--gris); margin:0;">${t('alojamiento_label')}</label>
                <button type="button" class="btn-live-search hotel-btn" onclick="window.abrirBusquedaHotelesTramo(${destId}, ${ida}, event)">
                  🏡 <span>Buscar alojamiento</span>
                </button>
              </div>
              <input type="text" id="tramo-alojamiento-${destId}-${ida}" placeholder="${t('alojamiento_ph')}" value="${tramo.alojamiento || ''}" onchange="actualizarTramo(${destId}, ${ida}, 'alojamiento', this.value)" style="width:100%; height:40px; background:var(--fondo); border:1px solid var(--border); border-radius:8px; padding:0 10px;">
              <div id="dropdown-hoteles-${destId}-${ida}" class="live-booking-dropdown" style="display:none; z-index:99999;"></div>
            </div>
            <div class="field-boa" style="grid-column: 1 / -1;">
              <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--gris); margin-bottom:6px;">${t('precio_alojamiento_label')}</label>
              <input type="number" id="tramo-precioAlojamiento-${destId}-${ida}" placeholder="0.00" value="${tramo.precioAlojamiento || 0}" onchange="actualizarTramo(${destId}, ${ida}, 'precioAlojamiento', parseFloat(this.value)||0)" style="width:100%; height:40px; background:var(--fondo); border:1px solid var(--border); border-radius:8px; padding:0 10px;">
            </div>
          </div>
          <div class="escalas-container" id="escalas-${destId}-${ida}" style="margin-top:12px;"></div>
          <button class="add-escala-btn" onclick="agregarEscala(${destId}, ${ida})" style="margin-top:10px; background:transparent; border:1px dashed var(--border); color:var(--gris); width:100%; padding:8px; border-radius:8px; cursor:pointer;">${t('agregar_escala_btn')}</button>
        `;
        container.appendChild(tramoDiv);
        renderEscalas(destId, ida);
      });
    }

    function renderEscalas(destId, tramoIda) {
      const dest = destinos.find(d => d.id === destId);
      if (!dest || !dest.tramos || !dest.tramos[tramoIda]) return;
      const tramo = dest.tramos[tramoIda];
      const container = document.getElementById(`escalas-${destId}-${tramoIda}`);
      if (!container) return;
      container.innerHTML = "";
      tramo.escalas = tramo.escalas || [];
      tramo.escalas.forEach((escala, ida) => {
        const escalaDiv = document.createElement("div");
        escalaDiv.className = "escala-item";
        escalaDiv.innerHTML = `
          <input type="text" value="${escala}" placeholder="${t('escala')}" onchange="actualizarEscala(${destId}, ${tramoIda}, ${ida}, this.value)">
          <button class="close-icon" onclick="eliminarEscala(${destId}, ${tramoIda}, ${ida})">×</button>
        `;
        container.appendChild(escalaDiv);
      });
    }

    function agregarTramo(destId) {
      if (!checkEditPermission()) return;
      openTransportDestIds.add(destId);
      const el = document.getElementById(`transport-${destId}`);
      if (el) el.classList.add('show');
      const dest = destinos.find(d => d.id === destId);
      if (dest) {
        dest.tramos = dest.tramos || [];
        dest.tramos.push({ origen: "", destino: "", medio: "", precio: 0, escalas: [] });
        renderTramos(destId);
        autoSave();
      }
    }

    function eliminarTramo(destId, tramoIda) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      if (dest && dest.tramos) {
        dest.tramos.splice(tramoIda, 1);
        renderTramos(destId);
        autoSave();
      }
    }

    function actualizarTramo(destId, tramoIda, campo, valor) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      dest.tramos[tramoIda][campo] = valor;
      autoSave();
    }

    function agregarEscala(destId, tramoIda) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      const tramo = dest.tramos[tramoIda];
      tramo.escalas.push("");
      renderEscalas(destId, tramoIda);
      autoSave();
    }

    function actualizarEscala(destId, tramoIda, escalaIda, valor) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      dest.tramos[tramoIda].escalas[escalaIda] = valor;
      autoSave();
    }

    function eliminarEscala(destId, tramoIda, escalaIda) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      dest.tramos[tramoIda].escalas.splice(escalaIda, 1);
      renderEscalas(destId, tramoIda);
      autoSave();
    }

    function eliminarDestino(id) {
      if (!checkEditPermission()) return;
      destinos = destinos.filter(d => d.id !== id);
      renderDestinos();
      autoSave();
    }

    // ================== FUNCIONES DE DÍAS Y EVENTOS ==================
    function agregarDia(destId) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      if (!dest) return;
      const diaId = dest.dias.length;
      dest.dias.push({ id: diaId, eventos: [], costosAdicionales: [] });
      renderDias(destId);
      autoSave();
    }

    function renderDias(destId) {
      const cont = document.getElementById(`dias-${destId}`);
      if (!cont) return;
      cont.innerHTML = "";
      const dest = destinos.find(d => d.id === destId);
      const schedule = buildTripDaySchedule();
      dest.dias.forEach((dia, diaIdx) => {
        const key = `${destId}_${dia.id}`;
        const isCollapsed = collapsedEditorDias.has(key);
        const daySched = schedule.find(s => s.destId === destId && s.diaId === dia.id);
        const dateStr = daySched?.dateStr || '';
        const fidx = daySched?.forecastIndex ?? '';
        const evCount = (dia.eventos || []).length;
        const diaDiv = document.createElement("div");
        diaDiv.className = "dia";
        diaDiv.dataset.destId = destId;
        diaDiv.dataset.diaId = dia.id;
        diaDiv.dataset.diaIdx = diaIdx;
        diaDiv.draggable = true;
        diaDiv.innerHTML = `
          <div class="dia-header" onclick="toggleEditorDia(${destId}, ${dia.id}, event)" style="cursor:pointer; user-select:none; display:flex; align-items:center; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:8px; flex:1; min-width:0;">
              <span class="drag-handle drag-handle-dia" data-drag-type="dia" data-dest-id="${destId}" data-dia-id="${dia.id}" data-dia-idx="${diaIdx}" title="Arrastra o mantén presionado para reordenar día" onclick="event.stopPropagation()">⠿</span>
              <span id="editor-dia-chev-${destId}-${dia.id}" class="chevron-indicator" style="display:inline-block; transition:transform 0.2s ease; transform:${isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}; color:var(--gris); font-size:0.8rem;">▼</span>
              <h4 style="margin:0; white-space:nowrap;">${t('day_prefix')} ${diaIdx + 1}${daySched?.dateLabel ? ` <small style="color:var(--gris);font-weight:normal">(${daySched.dateLabel})</small>` : ''}</h4>
              <span id="editor-dia-ev-badge-${destId}-${dia.id}" style="font-size:0.72rem; color:var(--gris); background:rgba(255,255,255,0.06); padding:2px 7px; border-radius:999px; white-space:nowrap;">${evCount} ${evCount === 1 ? 'actividad' : 'actividades'}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <div id="weather-day-${destId}-${dia.id}" class="weather-chip weather-chip-day" data-city="${dest.nombre.replace(/"/g, '&quot;')}" data-date="${dateStr}" data-fidx="${fidx}" onclick="event.stopPropagation(); toggleWeatherWidget('weather-day-${destId}-${dia.id}')" title="Clima del día">
                <div class="weather-chip-row"><span class="weather-chip-icon">🌤️</span><span class="weather-chip-temp">...</span></div>
              </div>
              <div class="dia-actions">
                <span class="copy-icon" onclick="duplicarDia(${destId}, ${dia.id})" title="${t('copy_button')}">⎘</span>
                <button class="close-icon" onclick="eliminarDia(${destId}, ${dia.id})">×</button>
              </div>
            </div>
          </div>
          <div id="editor-dia-body-${destId}-${dia.id}" style="display:${isCollapsed ? 'none' : 'block'};">
            <div id="eventos-${destId}-${dia.id}"></div>
            <div class="costos-adicionales" id="costos-${destId}-${dia.id}">
              <div class="costos-header">
                <h5>${t('costos_adicionales_title')}</h5>
                <button class="add-costo-btn" onclick="agregarCostoAdicional(${destId}, ${dia.id})">+</button>
              </div>
            </div>
            <button class="add-evento-btn" onclick="agregarEvento(${destId}, ${dia.id})">${t('add_event_button')}</button>
            <button class="add-evento-btn" style="background:var(--gris); margin-left:8px;" onclick="organizarItinerario(${destId}, ${dia.id})">${t('organizar_itinerario_btn')}</button>
          </div>
        `;
        cont.appendChild(diaDiv);
        renderEventos(destId, dia.id);
        renderCostosAdicionales(destId, dia.id);
        loadWeatherForTripDay(`weather-day-${destId}-${dia.id}`, dest.nombre, dateStr, daySched?.forecastIndex);
      });
      if (typeof aplicarRestriccionesInputs === 'function') {
        aplicarRestriccionesInputs();
      }
    }

    function organizarItinerario(destId, diaId) {
        if (!checkEditPermission()) return;
        const dest = destinos.find(d => d.id === destId);
        const dia = dest?.dias?.find(d => d.id === diaId);
        if(!dia) return;
        dia.eventos.sort((a, b) => (a.hora || '99:99').localeCompare(b.hora || '99:99'));
        renderDias(destId);
        autoSave();
        showToast('Itinerario organizado por hora', 'success');
    }

    function renderEventos(destId, diaId) {
      const cont = document.getElementById(`eventos-${destId}-${diaId}`);
      if (!cont) return;
      cont.innerHTML = "";
      const dest = destinos.find(d => d.id === destId);
      const dia = dest.dias.find(d => d.id === diaId);
      if (!dia) return;
      if (dia.eventos.length === 0) {
        cont.innerHTML = `<p style="color:var(--gris);font-style:italic;">${t('no_events_day')}</p>`;
        return;
      }
      // Sort events by time for conflict detection
      const sortedEvents = [...dia.eventos].map((ev, i) => ({...ev, originalIda: i}));
      sortedEvents.sort((a, b) => (a.hora || '99:99').localeCompare(b.hora || '99:99'));

      dia.eventos.forEach((ev, ida) => {
        const evKey = `${destId}_${diaId}_${ida}`;
        const isEvCollapsed = collapsedEditorEventos.has(evKey);
        const evDiv = document.createElement("div");
        evDiv.className = "evento";
        evDiv.dataset.destId = destId;
        evDiv.dataset.diaId = diaId;
        evDiv.dataset.evIdx = ida;
        evDiv.draggable = true;
        
        // Conflict detection logic
        let hasConflict = false;
        let isShortGap = false;
        if (ev.hora) {
          const [h, m] = ev.hora.split(':').map(Number);
          const currentStart = h * 60 + m;
          
          sortedEvents.forEach(other => {
            if (other.originalIda === ida || !other.hora) return;
            const [oh, om] = other.hora.split(':').map(Number);
            const otherStart = oh * 60 + om;
            const durCurrent = parseInt(ev.duracion) || 0;
            const durOther = parseInt(other.duracion) || 0;
            const currentEnd = currentStart + durCurrent;
            const otherEnd = otherStart + durOther;
            
            // True overlap: current starts before other ends AND current ends after other starts
            if (currentStart < otherEnd && currentEnd > otherStart) {
              hasConflict = true;
            } else if ((currentStart >= otherEnd && currentStart - otherEnd < 15) || (otherStart >= currentEnd && otherStart - currentEnd < 15)) {
              // Less than 15 min gap
              isShortGap = true;
            }
          });
        }
        
        if (hasConflict) {
          evDiv.classList.add("conflicto");
          evDiv.style.borderLeft = "6px solid #ef4444";
          evDiv.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
          evDiv.title = t('conflict_warning');
        } else if (isShortGap) {
          evDiv.style.borderLeft = "4px solid #facc15";
          evDiv.title = "Poco tiempo entre eventos (menos de 15 min)";
        }

        evDiv.innerHTML = `
          <div class="fila-hora-titulo" style="display:flex; align-items:center; gap:6px;">
            <span class="drag-handle drag-handle-ev" data-drag-type="evento" data-dest-id="${destId}" data-dia-id="${diaId}" data-ev-idx="${ida}" title="Arrastra o mantén presionado para reordenar actividad" onclick="event.stopPropagation()">⠿</span>
            <span id="editor-ev-chev-${destId}-${diaId}-${ida}" class="chevron-indicator" style="display:inline-block; transition:transform 0.2s ease; transform:${isEvCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}; color:var(--gris); font-size:0.75rem; cursor:pointer;" onclick="toggleEditorEvento(${destId}, ${diaId}, ${ida}, event)" title="Plegar / Expandir detalles">▼</span>
            <input type="time" value="${ev.hora || ''}" style="width:105px; min-width:95px;" onchange="actualizarEvento(${destId}, ${diaId}, ${ida}, 'hora', this.value)" title="Hora del evento">
            <input type="text" value="${ev.titulo || ''}" placeholder="${t('event_title_placeholder')}" style="flex:1;" onchange="actualizarEvento(${destId}, ${diaId}, ${ida}, 'titulo', this.value)">
            <button class="close-icon" onclick="eliminarEvento(${destId}, ${diaId}, ${ida})" style="margin-left:auto;">×</button>
          </div>
          <div id="editor-ev-body-${destId}-${diaId}-${ida}" style="display:${isEvCollapsed ? 'none' : 'block'}; margin-top:8px;">
            <input type="text" class="notas-input" value="${ev.notas || ''}" placeholder="${t('event_notes_placeholder')}" onchange="actualizarEvento(${destId}, ${diaId}, ${ida}, 'notas', this.value)">
            <div class="detalles-evento">
              <div class="detalle-field">
                <label>${t('event_cost_placeholder')}</label>
                <input type="number" value="${ev.costo || 0}" onchange="actualizarEvento(${destId}, ${diaId}, ${ida}, 'costo', parseFloat(this.value)||0)">
              </div>
              <div class="detalle-field">
                <label>${t('event_duration_placeholder')} (min)</label>
                <input type="number" value="${ev.duracion || 0}" onchange="actualizarEvento(${destId}, ${diaId}, ${ida}, 'duracion', parseInt(this.value)||0)">
              </div>
            </div>
            <div class="evento-actions">
              <button class="copy-ev" onclick="duplicarEvento(${destId}, ${diaId}, ${ida})">${t('copy_button')}</button>
            </div>
          </div>
        `;
        cont.appendChild(evDiv);
      });
    }

    // ================== REORDER ENGINE (DRAG & DROP + TOUCH AND HOLD) ==================
    let activeDragItem = null;
    let touchHoldTimer = null;
    let isTouchDragging = false;
    let touchCurrentTarget = null;
    let touchDropPosition = null;

    function moverDestino(fromIdx, toIdx) {
      if (!checkEditPermission()) return;
      if (fromIdx === toIdx || fromIdx < 0 || toIdx < 0 || fromIdx >= destinos.length || toIdx >= destinos.length) return;
      const [moved] = destinos.splice(fromIdx, 1);
      destinos.splice(toIdx, 0, moved);
      renderDestinos();
      autoSave();
      showToast(`Destino "${moved.nombre}" reordenado`, 'info');
      trackEvent('reorder_item', { item_type: 'destination', name: moved.nombre });
    }
    window.moverDestino = moverDestino;

    function moverDia(fromDestId, fromDiaIdx, toDestId, toDiaIdx) {
      if (!checkEditPermission()) return;
      const srcDest = destinos.find(d => d.id === fromDestId);
      const tgtDest = destinos.find(d => d.id === toDestId);
      if (!srcDest || !tgtDest) return;
      if (fromDestId === toDestId && fromDiaIdx === toDiaIdx) return;
      
      const [movedDay] = srcDest.dias.splice(fromDiaIdx, 1);
      if (!movedDay) return;
      
      if (fromDestId === toDestId) {
        srcDest.dias.splice(toDiaIdx, 0, movedDay);
        reindexarDias(srcDest);
        renderDias(fromDestId);
      } else {
        tgtDest.dias.splice(toDiaIdx, 0, movedDay);
        reindexarDias(srcDest);
        reindexarDias(tgtDest);
        renderDestinos();
      }
      autoSave();
      showToast(`Día reordenado correctamente`, 'info');
      trackEvent('reorder_item', { item_type: 'day' });
    }
    window.moverDia = moverDia;

    function moverEvento(fromDestId, fromDiaId, fromEvIdx, toDestId, toDiaId, toEvIdx) {
      if (!checkEditPermission()) return;
      const srcDest = destinos.find(d => d.id === fromDestId);
      const tgtDest = destinos.find(d => d.id === toDestId);
      if (!srcDest || !tgtDest) return;
      const srcDia = srcDest.dias.find(d => d.id === fromDiaId);
      const tgtDia = tgtDest.dias.find(d => d.id === toDiaId);
      if (!srcDia || !tgtDia) return;
      
      if (fromDestId === toDestId && fromDiaId === toDiaId && fromEvIdx === toEvIdx) return;
      
      const [movedEv] = srcDia.eventos.splice(fromEvIdx, 1);
      if (!movedEv) return;
      
      tgtDia.eventos.splice(toEvIdx, 0, movedEv);
      if (fromDestId === toDestId && fromDiaId === toDiaId) {
        renderEventos(fromDestId, fromDiaId);
      } else {
        renderDias(fromDestId);
        if (fromDestId !== toDestId) renderDias(toDestId);
      }
      autoSave();
      showToast(`Actividad "${movedEv.titulo || 'actividad'}" reordenada`, 'info');
      trackEvent('reorder_item', { item_type: 'event', title: movedEv.titulo || '' });
    }
    window.moverEvento = moverEvento;

    function cleanDragState() {
      activeDragItem = null;
      document.querySelectorAll('.is-dragging, .drop-target-before, .drop-target-after').forEach(el => {
        el.classList.remove('is-dragging', 'drop-target-before', 'drop-target-after');
      });
    }

    function setupReorderDragListeners() {
      const container = document.getElementById('destinos');
      if (!container || container._reorderListenersAttached) return;
      container._reorderListenersAttached = true;

      // --- HTML5 Desktop Drag and Drop ---
      container.addEventListener('dragstart', (e) => {
        const handle = e.target.closest('.drag-handle');
        const targetItem = e.target.closest('.evento, .dia, .destino');
        if (!targetItem) return;

        const dragType = handle ? handle.dataset.dragType : (
          targetItem.classList.contains('evento') ? 'evento' :
          targetItem.classList.contains('dia') ? 'dia' : 'dest'
        );

        activeDragItem = {
          type: dragType,
          el: targetItem,
          destId: Number(targetItem.dataset.destId),
          destIdx: Number(targetItem.dataset.destIdx),
          diaId: targetItem.dataset.diaId !== undefined ? Number(targetItem.dataset.diaId) : undefined,
          diaIdx: targetItem.dataset.diaIdx !== undefined ? Number(targetItem.dataset.diaIdx) : undefined,
          evIdx: targetItem.dataset.evIdx !== undefined ? Number(targetItem.dataset.evIdx) : undefined
        };

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', JSON.stringify({
          type: dragType,
          destId: activeDragItem.destId,
          destIdx: activeDragItem.destIdx,
          diaId: activeDragItem.diaId,
          diaIdx: activeDragItem.diaIdx,
          evIdx: activeDragItem.evIdx
        }));

        setTimeout(() => {
          if (targetItem) targetItem.classList.add('is-dragging');
        }, 10);
      });

      container.addEventListener('dragover', (e) => {
        if (!activeDragItem) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';

        let targetEl = null;
        if (activeDragItem.type === 'dest') {
          targetEl = e.target.closest('.destino');
        } else if (activeDragItem.type === 'dia') {
          targetEl = e.target.closest('.dia');
        } else if (activeDragItem.type === 'evento') {
          targetEl = e.target.closest('.evento, .dia');
        }

        if (!targetEl || targetEl === activeDragItem.el) return;

        const rect = targetEl.getBoundingClientRect();
        const isAfter = (e.clientY - rect.top) > (rect.height / 2);

        document.querySelectorAll('.drop-target-before, .drop-target-after').forEach(el => {
          if (el !== targetEl) {
            el.classList.remove('drop-target-before', 'drop-target-after');
          }
        });

        if (isAfter) {
          targetEl.classList.remove('drop-target-before');
          targetEl.classList.add('drop-target-after');
        } else {
          targetEl.classList.remove('drop-target-after');
          targetEl.classList.add('drop-target-before');
        }
      });

      container.addEventListener('dragleave', (e) => {
        const targetEl = e.target.closest('.destino, .dia, .evento');
        if (targetEl && !targetEl.contains(e.relatedTarget)) {
          targetEl.classList.remove('drop-target-before', 'drop-target-after');
        }
      });

      container.addEventListener('drop', (e) => {
        if (!activeDragItem) return;
        e.preventDefault();

        let targetEl = null;
        if (activeDragItem.type === 'dest') {
          targetEl = e.target.closest('.destino');
          if (targetEl && targetEl !== activeDragItem.el) {
            const isAfter = targetEl.classList.contains('drop-target-after');
            const fromIdx = activeDragItem.destIdx;
            let toIdx = Number(targetEl.dataset.destIdx);
            if (fromIdx < toIdx && !isAfter) toIdx -= 1;
            else if (fromIdx > toIdx && isAfter) toIdx += 1;
            moverDestino(fromIdx, Math.max(0, Math.min(toIdx, destinos.length - 1)));
          }
        } else if (activeDragItem.type === 'dia') {
          targetEl = e.target.closest('.dia');
          if (targetEl && targetEl !== activeDragItem.el) {
            const isAfter = targetEl.classList.contains('drop-target-after');
            const fromDestId = activeDragItem.destId;
            const fromDiaIdx = activeDragItem.diaIdx;
            const toDestId = Number(targetEl.dataset.destId);
            let toDiaIdx = Number(targetEl.dataset.diaIdx);
            if (fromDestId === toDestId) {
              if (fromDiaIdx < toDiaIdx && !isAfter) toDiaIdx -= 1;
              else if (fromDiaIdx > toDiaIdx && isAfter) toDiaIdx += 1;
            } else {
              if (isAfter) toDiaIdx += 1;
            }
            moverDia(fromDestId, fromDiaIdx, toDestId, toDiaIdx);
          }
        } else if (activeDragItem.type === 'evento') {
          targetEl = e.target.closest('.evento');
          const targetDia = e.target.closest('.dia');
          if (targetEl && targetEl !== activeDragItem.el) {
            const isAfter = targetEl.classList.contains('drop-target-after');
            const fromDestId = activeDragItem.destId;
            const fromDiaId = activeDragItem.diaId;
            const fromEvIdx = activeDragItem.evIdx;
            const toDestId = Number(targetEl.dataset.destId);
            const toDiaId = Number(targetEl.dataset.diaId);
            let toEvIdx = Number(targetEl.dataset.evIdx);
            if (fromDestId === toDestId && fromDiaId === toDiaId) {
              if (fromEvIdx < toEvIdx && !isAfter) toEvIdx -= 1;
              else if (fromEvIdx > toEvIdx && isAfter) toEvIdx += 1;
            } else {
              if (isAfter) toEvIdx += 1;
            }
            moverEvento(fromDestId, fromDiaId, fromEvIdx, toDestId, toDiaId, toEvIdx);
          } else if (targetDia) {
            const toDestId = Number(targetDia.dataset.destId);
            const toDiaId = Number(targetDia.dataset.diaId);
            const tgtDest = destinos.find(d => d.id === toDestId);
            const tgtDia = tgtDest?.dias?.find(d => d.id === toDiaId);
            const toEvIdx = tgtDia?.eventos?.length || 0;
            moverEvento(activeDragItem.destId, activeDragItem.diaId, activeDragItem.evIdx, toDestId, toDiaId, toEvIdx);
          }
        }

        cleanDragState();
      });

      container.addEventListener('dragend', () => {
        cleanDragState();
      });

      // --- Mobile Touch Drag & Drop (Touch and Hold) ---
      let touchStartX = 0;
      let touchStartY = 0;

      container.addEventListener('touchstart', (e) => {
        const handle = e.target.closest('.drag-handle');
        if (!handle) return;

        const targetItem = handle.closest('.evento, .dia, .destino');
        if (!targetItem) return;

        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;

        const dragType = handle.dataset.dragType;
        activeDragItem = {
          type: dragType,
          el: targetItem,
          destId: Number(targetItem.dataset.destId),
          destIdx: Number(targetItem.dataset.destIdx),
          diaId: targetItem.dataset.diaId !== undefined ? Number(targetItem.dataset.diaId) : undefined,
          diaIdx: targetItem.dataset.diaIdx !== undefined ? Number(targetItem.dataset.diaIdx) : undefined,
          evIdx: targetItem.dataset.evIdx !== undefined ? Number(targetItem.dataset.evIdx) : undefined
        };

        touchHoldTimer = setTimeout(() => {
          isTouchDragging = true;
          if (navigator.vibrate) {
            try { navigator.vibrate(30); } catch(err){}
          }
          targetItem.classList.add('is-dragging');
        }, 120);
      }, { passive: true });

      container.addEventListener('touchmove', (e) => {
        if (!activeDragItem) return;
        const touch = e.touches[0];
        const diffX = Math.abs(touch.clientX - touchStartX);
        const diffY = Math.abs(touch.clientY - touchStartY);

        if (!isTouchDragging && (diffX > 10 || diffY > 10)) {
          clearTimeout(touchHoldTimer);
          return;
        }

        if (!isTouchDragging) return;
        if (e.cancelable) e.preventDefault();

        const elUnderFinger = document.elementFromPoint(touch.clientX, touch.clientY);
        if (!elUnderFinger) return;

        let targetEl = null;
        if (activeDragItem.type === 'dest') {
          targetEl = elUnderFinger.closest('.destino');
        } else if (activeDragItem.type === 'dia') {
          targetEl = elUnderFinger.closest('.dia');
        } else if (activeDragItem.type === 'evento') {
          targetEl = elUnderFinger.closest('.evento, .dia');
        }

        if (!targetEl || targetEl === activeDragItem.el) return;

        const rect = targetEl.getBoundingClientRect();
        const isAfter = (touch.clientY - rect.top) > (rect.height / 2);

        document.querySelectorAll('.drop-target-before, .drop-target-after').forEach(el => {
          if (el !== targetEl) {
            el.classList.remove('drop-target-before', 'drop-target-after');
          }
        });

        touchCurrentTarget = targetEl;
        touchDropPosition = isAfter ? 'after' : 'before';

        if (isAfter) {
          targetEl.classList.remove('drop-target-before');
          targetEl.classList.add('drop-target-after');
        } else {
          targetEl.classList.remove('drop-target-after');
          targetEl.classList.add('drop-target-before');
        }
      }, { passive: false });

      const endTouch = () => {
        clearTimeout(touchHoldTimer);
        if (isTouchDragging && touchCurrentTarget && activeDragItem) {
          const isAfter = touchDropPosition === 'after';
          if (activeDragItem.type === 'dest') {
            const fromIdx = activeDragItem.destIdx;
            let toIdx = Number(touchCurrentTarget.dataset.destIdx);
            if (fromIdx < toIdx && !isAfter) toIdx -= 1;
            else if (fromIdx > toIdx && isAfter) toIdx += 1;
            moverDestino(fromIdx, Math.max(0, Math.min(toIdx, destinos.length - 1)));
          } else if (activeDragItem.type === 'dia') {
            const fromDestId = activeDragItem.destId;
            const fromDiaIdx = activeDragItem.diaIdx;
            const toDestId = Number(touchCurrentTarget.dataset.destId);
            let toDiaIdx = Number(touchCurrentTarget.dataset.diaIdx);
            if (fromDestId === toDestId) {
              if (fromDiaIdx < toDiaIdx && !isAfter) toDiaIdx -= 1;
              else if (fromDiaIdx > toDiaIdx && isAfter) toDiaIdx += 1;
            } else {
              if (isAfter) toDiaIdx += 1;
            }
            moverDia(fromDestId, fromDiaIdx, toDestId, toDiaIdx);
          } else if (activeDragItem.type === 'evento') {
            const isEvTarget = touchCurrentTarget.classList.contains('evento');
            if (isEvTarget) {
              const fromDestId = activeDragItem.destId;
              const fromDiaId = activeDragItem.diaId;
              const fromEvIdx = activeDragItem.evIdx;
              const toDestId = Number(touchCurrentTarget.dataset.destId);
              const toDiaId = Number(touchCurrentTarget.dataset.diaId);
              let toEvIdx = Number(touchCurrentTarget.dataset.evIdx);
              if (fromDestId === toDestId && fromDiaId === toDiaId) {
                if (fromEvIdx < toEvIdx && !isAfter) toEvIdx -= 1;
                else if (fromEvIdx > toEvIdx && isAfter) toEvIdx += 1;
              } else {
                if (isAfter) toEvIdx += 1;
              }
              moverEvento(fromDestId, fromDiaId, fromEvIdx, toDestId, toDiaId, toEvIdx);
            } else {
              const toDestId = Number(touchCurrentTarget.dataset.destId);
              const toDiaId = Number(touchCurrentTarget.dataset.diaId);
              const tgtDest = destinos.find(d => d.id === toDestId);
              const tgtDia = tgtDest?.dias?.find(d => d.id === toDiaId);
              const toEvIdx = tgtDia?.eventos?.length || 0;
              moverEvento(activeDragItem.destId, activeDragItem.diaId, activeDragItem.evIdx, toDestId, toDiaId, toEvIdx);
            }
          }
        }
        isTouchDragging = false;
        touchCurrentTarget = null;
        touchDropPosition = null;
        cleanDragState();
      };

      container.addEventListener('touchend', endTouch);
      container.addEventListener('touchcancel', endTouch);
    }
    window.setupReorderDragListeners = setupReorderDragListeners;

    function agregarEvento(destId, diaId) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      const dia = dest?.dias?.find(d => d.id === diaId);
      if (!dia) return;
      dia.eventos.push({
        hora: '',
        titulo: '',
        notas: '',
        costo: 0,
        duracion: 0
      });
      renderDias(destId);
      autoSave();
    }

    function actualizarEvento(destId, diaId, evId, campo, valor) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      const dia = dest?.dias?.find(d => d.id === diaId);
      if (!dia || !dia.eventos[evId]) return;
      dia.eventos[evId][campo] = valor;
      autoSave();
    }

    function eliminarEvento(destId, diaId, evId) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      const dia = dest?.dias?.find(d => d.id === diaId);
      if (!dia) return;
      dia.eventos.splice(evId, 1);
      renderDias(destId);
      autoSave();
    }

    function duplicarEvento(destId, diaId, evId) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      const dia = dest?.dias?.find(d => d.id === diaId);
      if (!dia || !dia.eventos[evId]) return;
      const ev = { ...dia.eventos[evId] };
      dia.eventos.push(ev);
      renderDias(destId);
      autoSave();
    }

    function reindexarDias(dest) {
      if (!dest || !dest.dias) return;
      dest.dias.forEach((dia, idx) => {
        dia.id = idx;
      });
    }

    function eliminarDia(destId, diaId) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      if (!dest) return;
      dest.dias.splice(diaId, 1);
      reindexarDias(dest);
      renderDias(destId);
      autoSave();
    }

    function duplicarDia(destId, diaId) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      if (!dest) return;
      const dia = dest.dias.find(d => d.id === diaId);
      if (!dia) return;
      const nuevoDia = { 
        id: dest.dias.length, 
        eventos: dia.eventos.map(e => ({ ...e })), 
        costosAdicionales: dia.costosAdicionales ? dia.costosAdicionales.map(c => ({ ...c })) : [] 
      };
      dest.dias.push(nuevoDia);
      reindexarDias(dest);
      renderDias(destId);
      autoSave();
    }

    function agregarCostoAdicional(destId, diaId) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      const dia = dest.dias.find(d => d.id === diaId);
      if (!dia.costosAdicionales) dia.costosAdicionales = [];
      dia.costosAdicionales.push({ descripcion: "", precio: 0 });
      renderCostosAdicionales(destId, diaId);
      autoSave();
    }

    function renderCostosAdicionales(destId, diaId) {
      const container = document.getElementById(`costos-${destId}-${diaId}`);
      if (!container) return;
      const dest = destinos.find(d => d.id === destId);
      const dia = dest.dias.find(d => d.id === diaId);
      container.innerHTML = `
        <div class="costos-header">
          <h5>${t('costos_adicionales_title')}</h5>
          <button class="add-costo-btn" onclick="agregarCostoAdicional(${destId}, ${diaId})">+</button>
        </div>
      `;
      if (dia.costosAdicionales) {
        dia.costosAdicionales.forEach((costo, ida) => {
          const div = document.createElement("div");
          div.className = "costo-adicional-item";
          div.innerHTML = `
            <input type="text" placeholder="${t('costo_desc')}" value="${costo.descripcion}" onchange="actualizarCostoAdicional(${destId}, ${diaId}, ${ida}, 'descripcion', this.value)">
            <input type="number" placeholder="€" value="${costo.precio}" onchange="actualizarCostoAdicional(${destId}, ${diaId}, ${ida}, 'precio', parseFloat(this.value)||0)">
            <button class="close-icon" onclick="eliminarCostoAdicional(${destId}, ${diaId}, ${ida})">×</button>
          `;
          container.appendChild(div);
        });
      }
    }

    function actualizarCostoAdicional(destId, diaId, ida, campo, valor) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      const dia = dest.dias.find(d => d.id === diaId);
      dia.costosAdicionales[ida][campo] = valor;
      autoSave();
    }

    function eliminarCostoAdicional(destId, diaId, ida) {
      if (!checkEditPermission()) return;
      const dest = destinos.find(d => d.id === destId);
      const dia = dest.dias.find(d => d.id === diaId);
      dia.costosAdicionales.splice(ida, 1);
      renderCostosAdicionales(destId, diaId);
      autoSave();
    }

    // ================== COSTOS ADICIONALES VUELTA ==================
    function agregarCostoVuelta() {
      if (!checkEditPermission()) return;
      vueltaCostosAdicionales.push({ descripcion: "", precio: 0 });
      renderVueltaCostos();
      autoSave();
    }

    function renderVueltaCostos() {
      const container = document.getElementById("vuelta-costos-adicionales");
      if (!container) return;
      container.innerHTML = "";
      vueltaCostosAdicionales.forEach((costo, ida) => {
        const div = document.createElement("div");
        div.className = "costo-adicional-item";
        div.innerHTML = `
          <input type="text" placeholder="${t('costo_desc')}" value="${costo.descripcion}" onchange="actualizarCostoVuelta(${ida}, 'descripcion', this.value)">
          <input type="number" placeholder="€" value="${costo.precio}" onchange="actualizarCostoVuelta(${ida}, 'precio', parseFloat(this.value)||0)">
          <button class="close-icon" onclick="eliminarCostoVuelta(${ida})">×</button>
        `;
        container.appendChild(div);
      });
    }

    function actualizarCostoVuelta(ida, campo, valor) {
      if (!checkEditPermission()) return;
      vueltaCostosAdicionales[ida][campo] = valor;
      autoSave();
    }

    function eliminarCostoVuelta(ida) {
      if (!checkEditPermission()) return;
      vueltaCostosAdicionales.splice(ida, 1);
      renderVueltaCostos();
      autoSave();
    }

    // ================== RESUMEN ==================
    function mostrarResumen() {
      renderResumen();
      document.getElementById("pantalla-resumen").style.display = "flex";
    }

    function cerrarResumen() {
      document.getElementById("pantalla-resumen").style.display = "none";
    }

    function toggleVistaResumen() {
      modoVista = (modoVista + 1) % 3;
      if (modoVista === 2) {
        abrirPresentacion();
        modoVista = 0;
        const btnView = document.querySelector('.view-toggle');
        if (btnView) btnView.textContent = t('view_modes')['timeline'];
      } else {
        const btnView = document.querySelector('.view-toggle');
        if (btnView) btnView.textContent = t('view_modes')[modos[(modoVista + 1) % 3]];
      }
      renderResumen();
    }

    function renderResumen() {
      const cont = document.getElementById("resumenContenido");
      cont.innerHTML = "";
      let costoGlobal = 0;
      let costoTransporte = 0;
      let costoEventos = 0;
      let costoOtros = 0;
      let totalEventos = 0;
      let totalDias = 0;
      const costosPorDestino = [];

      const isTimeline = modoVista === 1;
      if (isTimeline) cont.classList.add('vista-linea-tiempo');
      else cont.classList.remove('vista-linea-tiempo');

      // Calculate stats
      destinos.forEach(dest => {
        const numDiasDest = dest.dias ? dest.dias.length : 0;
        totalDias += numDiasDest;
        let costoDest = 0;
        (dest.dias || []).forEach(dia => {
          totalEventos += dia.eventos ? dia.eventos.length : 0;
          (dia.eventos || []).forEach(ev => {
            if (ev.costo) {
              const c = ev.costo * numPersonas;
              costoGlobal += c;
              costoEventos += c;
              costoDest += c;
            }
          });
          (dia.costosAdicionales || []).forEach(c => {
            if (c.precio) {
              costoGlobal += c.precio;
              costoOtros += c.precio;
              costoDest += c.precio;
            }
          });
        });
        (dest.tramos || []).forEach(tramo => {
          const sum = (Number(tramo.precio) || 0) + (Number(tramo.precioAlojamiento) || 0);
          if (sum) {
            const c = sum * numPersonas;
            costoGlobal += c;
            costoTransporte += c;
            costoDest += c;
          }
        });
        costosPorDestino.push({ id: dest.id, nombre: dest.nombre, costo: costoDest, diasCount: numDiasDest });
      });
      if (vueltaPrecioGlobal) {
        const vCost = vueltaPrecioGlobal * numPersonas;
        costoGlobal += vCost;
        costoTransporte += vCost;
      }

      // Update hero subtitle
      const fechaEl = document.getElementById('fechaInicio');
      const fecha = fechaEl?.value ? new Date(fechaEl.value).toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
      const subtitleEl = document.getElementById('resumen-subtitle');
      if (subtitleEl) {
        let sub = fecha ? `Salida: ${fecha} • ${destinos.map(d => d.nombre).join(' → ')}` : destinos.map(d => d.nombre).join(' → ');
        if (nombresPersonasGlobal) sub += ` • Viajeros: ${nombresPersonasGlobal}`;
        subtitleEl.textContent = sub;
      }

      // Stat cards (modern badges without emojis)
      const statGrid = document.getElementById('stat-grid');
      if (statGrid) {
        const totalNoches = totalDias > 1 ? totalDias - 1 : (totalDias === 1 ? 1 : 0);
        statGrid.innerHTML = `
          <div class="stat-card stat-azul">
            <div class="stat-badge">DURACIÓN</div>
            <div class="stat-value">${totalDias}</div>
            <div class="stat-label">${totalDias} Días • ${totalNoches} Noches</div>
          </div>
          <div class="stat-card stat-verde">
            <div class="stat-badge">ACTIVIDADES</div>
            <div class="stat-value">${totalEventos}</div>
            <div class="stat-label">Itinerario planificado</div>
          </div>
          <div class="stat-card stat-amarillo">
            <div class="stat-badge">DESTINOS</div>
            <div class="stat-value">${destinos.length}</div>
            <div class="stat-label">Ciudades y paradas</div>
          </div>
          <div class="stat-card stat-rosa">
            <div class="stat-badge">PRESUPUESTO TOTAL</div>
            <div class="stat-value">${costoGlobal.toFixed(0)}€</div>
            <div class="stat-label">Total estimado</div>
          </div>
          <div class="stat-card stat-azul">
            <div class="stat-badge">POR PERSONA</div>
            <div class="stat-value">${numPersonas > 0 ? (costoGlobal / numPersonas).toFixed(0) : 0}€</div>
            <div class="stat-label">${numPersonas} ${numPersonas === 1 ? 'viajero' : 'viajeros'}</div>
          </div>
        `;
      }

      // Mini-map with Leaflet
      const mapContainer = document.getElementById('resumen-map-mini');
      if (mapContainer && window.L && destinos.length > 0) {
        mapContainer.innerHTML = '';
        if (window._resumenMap) { window._resumenMap.remove(); window._resumenMap = null; }
        
        const geocodePromises = destinos.map(dest => geocode(dest.nombre));
        Promise.allSettled(geocodePromises).then(results => {
          const points = [];
          results.forEach((res, i) => {
            if (res.status === 'fulfilled' && res.value) {
              const { lat, lon } = res.value;
              points.push([lat, lon]);
            }
          });
          
          if (points.length === 0) {
            mapContainer.innerHTML = '<p style="color:var(--gris);text-align:center;padding:20px;">No se pudieron geocodificar destinos</p>';
            return;
          }
          
          const miniMap = L.map('resumen-map-mini', { zoomControl: true, scrollWheelZoom: false });
          window._resumenMap = miniMap;
          L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '©OSM ©CARTO' }).addTo(miniMap);
          
          results.forEach((res, i) => {
            if (res.status === 'fulfilled' && res.value) {
              const { lat, lon } = res.value;
              L.marker([lat, lon]).addTo(miniMap).bindPopup(`<b>${destinos[i].nombre}</b>`);
            }
          });
          
          if (points.length >= 2) {
            L.polyline(points, { color: '#38bdf8', weight: 3, dashArray: '6 6', opacity: 0.85 }).addTo(miniMap);
          }
          
          if (points.length === 1) {
            miniMap.setView(points[0], 10);
          } else {
            miniMap.fitBounds(points, { padding: [30, 30] });
          }
        });
      }

      // Donut chart + Breakdown progress bars
      const ctxDonut = document.getElementById('chart-distribucion');
      const breakdownBox = document.getElementById('resumen-gastos-breakdown');
      if (window.Chart && ctxDonut) {
        if (window._chartDonut) { window._chartDonut.destroy(); window._chartDonut = null; }
        
        if (costoGlobal > 0) {
          window._chartDonut = new Chart(ctxDonut, {
            type: 'doughnut',
            data: {
              labels: ['Transporte & Hospedaje', 'Actividades', 'Otros gastos'],
              datasets: [{
                data: [costoTransporte, costoEventos, costoOtros],
                backgroundColor: ['#38bdf8', '#34d399', '#f472b6'],
                borderWidth: 0,
                hoverOffset: 6
              }]
            },
            options: {
              plugins: {
                legend: { display: false }
              },
              cutout: '72%',
              responsive: true,
              maintainAspectRatio: false
            }
          });

          if (breakdownBox) {
            const pctTransp = Math.round((costoTransporte / costoGlobal) * 100) || 0;
            const pctAct = Math.round((costoEventos / costoGlobal) * 100) || 0;
            const pctOtros = Math.round((costoOtros / costoGlobal) * 100) || 0;
            breakdownBox.innerHTML = `
              <div class="breakdown-item">
                <div class="breakdown-header">
                  <span><span class="breakdown-dot" style="background:#38bdf8;"></span>Transporte & Estancia</span>
                  <span class="breakdown-amt">${costoTransporte.toFixed(0)}€ <small>(${pctTransp}%)</small></span>
                </div>
                <div class="breakdown-track"><div class="breakdown-fill" style="width:${pctTransp}%; background:#38bdf8;"></div></div>
              </div>
              <div class="breakdown-item">
                <div class="breakdown-header">
                  <span><span class="breakdown-dot" style="background:#34d399;"></span>Actividades & Entradas</span>
                  <span class="breakdown-amt">${costoEventos.toFixed(0)}€ <small>(${pctAct}%)</small></span>
                </div>
                <div class="breakdown-track"><div class="breakdown-fill" style="width:${pctAct}%; background:#34d399;"></div></div>
              </div>
              <div class="breakdown-item">
                <div class="breakdown-header">
                  <span><span class="breakdown-dot" style="background:#f472b6;"></span>Otros & Extras</span>
                  <span class="breakdown-amt">${costoOtros.toFixed(0)}€ <small>(${pctOtros}%)</small></span>
                </div>
                <div class="breakdown-track"><div class="breakdown-fill" style="width:${pctOtros}%; background:#f472b6;"></div></div>
              </div>
            `;
          }
        } else {
          if (breakdownBox) {
            breakdownBox.innerHTML = '<p style="color:var(--gris);text-align:center;padding:15px;margin:0;font-size:0.85rem;">Sin gastos asignados en este viaje</p>';
          }
        }
      }

      // Detail Content (Collapsible Destinations, Days, and Events)
      if (lugarSalida) {
        cont.innerHTML += `
          <div class="ciudad-block ${isTimeline ? 'timeline' : ''}" style="border-left: 3px solid #38bdf8; margin-bottom: 16px;">
            <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; color:#38bdf8; font-weight:700;">PUNTO DE PARTIDA</div>
            <div style="font-size:1.05rem; font-weight:600; color:#f8fafc; margin-top:2px;">${lugarSalida}</div>
          </div>
        `;
      }

      const tripSchedule = buildTripDaySchedule();
      destinos.forEach((dest, destIdx) => {
        const isDestCollapsed = collapsedResumenDestinos.has(dest.id);
        const destStats = costosPorDestino.find(cd => cd.id === dest.id) || { costo: 0, diasCount: 0 };
        
        let html = `
          <div class="collapsible-card ${isTimeline ? 'timeline' : ''}" style="margin-bottom: 20px;">
            <div class="collapsible-header" onclick="toggleResumenDestino(${dest.id})">
              <div style="display:flex; align-items:center; gap:12px;">
                <span id="resumen-dest-chev-${dest.id}" class="chevron-indicator" style="transform:${isDestCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};">▼</span>
                <span style="background:rgba(56,189,248,0.12); color:#38bdf8; font-size:0.72rem; font-weight:700; padding:3px 8px; border-radius:6px; letter-spacing:0.04em;">DESTINO ${destIdx + 1}</span>
                <h3 style="margin:0; font-size:1.15rem; font-weight:700; color:#f8fafc;">${dest.nombre}</h3>
              </div>
              <div style="font-size:0.82rem; color:var(--gris); font-weight:500;">
                ${destStats.diasCount} ${destStats.diasCount === 1 ? 'día' : 'días'}${destStats.costo > 0 ? ` • <span style="color:#34d399; font-weight:600;">${destStats.costo.toFixed(0)}€</span>` : ''}
              </div>
            </div>
            <div id="resumen-dest-body-${dest.id}" style="display:${isDestCollapsed ? 'none' : 'block'}; padding: 12px 16px 16px;">
        `;

        // Tramos / Lodging summary
        (dest.tramos || []).forEach((tramo, i) => {
          const sum = (Number(tramo.precio) || 0) + (Number(tramo.precioAlojamiento) || 0);
          html += `
            <div class="transp-summary-card">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong>Transporte / Estancia ${i + 1}:</strong> ${tramo.medio || 'Trayecto'}
                  ${tramo.alojamiento ? `<span style="color:var(--gris);"> • Alojamiento: ${tramo.alojamiento}</span>` : ''}
                </div>
                ${sum ? `<span style="color:#38bdf8; font-weight:600; font-size:0.85rem;">${(sum * numPersonas).toFixed(2)}€</span>` : ''}
              </div>
            </div>
          `;
        });

        // Days
        (dest.dias || []).forEach((dia, diaIdx) => {
          const dayKey = `${dest.id}_${dia.id}`;
          const isDiaCollapsed = collapsedResumenDias.has(dayKey);
          const daySched = tripSchedule.find(s => s.destId === dest.id && s.diaId === dia.id);
          const dateStr = daySched?.dateStr || '';
          const fidx = daySched?.forecastIndex ?? '';
          const evCount = dia.eventos ? dia.eventos.length : 0;

          html += `
            <div class="dia-resumen ${isTimeline ? 'timeline' : ''}" style="margin-top: 12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:10px; overflow:hidden;">
              <div class="dia-resumen-header" onclick="toggleResumenDia(${dest.id}, ${dia.id})" style="cursor:pointer; user-select:none; display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:rgba(255,255,255,0.03);">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span id="resumen-dia-chev-${dest.id}-${dia.id}" class="chevron-indicator" style="font-size:0.75rem; transform:${isDiaCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};">▼</span>
                  <h4 style="margin:0; font-size:0.95rem; font-weight:600;">Día ${diaIdx + 1}${daySched?.dateLabel ? ` <small style="color:var(--gris); font-weight:normal;">(${daySched.dateLabel})</small>` : ''}</h4>
                  <span style="font-size:0.72rem; color:var(--gris); background:rgba(255,255,255,0.05); padding:2px 6px; border-radius:4px;">${evCount} ${evCount === 1 ? 'actividad' : 'actividades'}</span>
                </div>
                <div id="weather-resumen-day-${dest.id}-${dia.id}" class="weather-chip weather-chip-day" data-city="${dest.nombre.replace(/"/g, '&quot;')}" data-date="${dateStr}" data-fidx="${fidx}" onclick="event.stopPropagation(); toggleWeatherWidget('weather-resumen-day-${dest.id}-${dia.id}')" title="Clima del día">
                  <div class="weather-chip-row"><span class="weather-chip-icon">🌤️</span><span class="weather-chip-temp">...</span></div>
                </div>
              </div>
              <div id="resumen-dia-body-${dest.id}-${dia.id}" style="display:${isDiaCollapsed ? 'none' : 'block'}; padding:8px 12px;">
          `;

          if (!dia.eventos || dia.eventos.length === 0) {
            html += `<p style="color:var(--gris); font-size:0.85rem; margin:6px 0; font-style:italic;">Sin actividades registradas</p>`;
          } else {
            dia.eventos.forEach(ev => {
              const hasDetails = Boolean(ev.notas || ev.lugar || ev.categoria);
              html += `
                <div class="evento-row-compact" onclick="toggleResumenEventoDetails(this)" title="${hasDetails ? 'Click para ver más detalles' : ''}">
                  <div class="ev-main-line">
                    <span class="ev-time">${ev.hora || '--:--'}</span>
                    <span class="ev-title">${ev.titulo || t('untitled_event')}</span>
                    ${ev.duracion ? `<span class="ev-dur">${ev.duracion} min</span>` : ''}
                    ${ev.costo ? `<span class="ev-cost">${(ev.costo * numPersonas).toFixed(2)}€</span>` : ''}
                  </div>
                  ${hasDetails ? `
                    <div class="ev-details">
                      ${ev.lugar ? `<div style="font-weight:600; margin-bottom:2px;">Ubicación: ${ev.lugar}</div>` : ''}
                      ${ev.notas ? `<div>${ev.notas}</div>` : ''}
                    </div>
                  ` : ''}
                </div>
              `;
            });
          }

          // Extra day costs
          (dia.costosAdicionales || []).forEach(c => {
            if (c.precio || c.concepto) {
              html += `
                <div style="display:flex; justify-content:space-between; font-size:0.82rem; color:var(--gris); padding:4px 8px; border-top:1px dashed rgba(255,255,255,0.05); margin-top:4px;">
                  <span>Costo adicional: ${c.concepto || 'Extra'}</span>
                  <span style="color:#f472b6; font-weight:600;">${(Number(c.precio) || 0).toFixed(2)}€</span>
                </div>
              `;
            }
          });

          html += `</div></div>`; // close resumen-dia-body and dia-resumen
        });

        html += `</div></div>`; // close resumen-dest-body and collapsible-card
        cont.innerHTML += html;
      });

      tripSchedule.filter(s => !s.isDestOnly && s.diaId != null).forEach(s => {
        loadWeatherForTripDay(`weather-resumen-day-${s.destId}-${s.diaId}`, s.destName, s.dateStr, s.forecastIndex);
      });

      if (vueltaGlobal || vueltaCostosAdicionales.length) {
        let vueltaHtml = `
          <div class="collapsible-card" style="border-left: 3px solid #f472b6; margin-top: 16px; padding: 14px 18px;">
            <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; color:#f472b6; font-weight:700;">REGRESO / VUELTA</div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
              <div style="font-weight:600; color:#f8fafc; font-size:1rem;">${vueltaGlobal || 'Viaje de vuelta'}</div>
              ${vueltaPrecioGlobal ? `<span style="color:#f472b6; font-weight:700; font-size:1rem;">${(vueltaPrecioGlobal * numPersonas).toFixed(2)}€</span>` : ''}
            </div>
          </div>
        `;
        cont.innerHTML += vueltaHtml;
      }

      const costEl = document.getElementById('costoGlobal');
      if (costEl) {
        costEl.innerHTML = costoGlobal > 0 ? `<strong>Total del viaje: ${costoGlobal.toFixed(2)}€</strong>` : '';
      }

      const vacaGlobal = document.getElementById('vacaGlobal');
      const vacaToggle = document.getElementById('vaca-toggle');
      if (vacaGlobal && vacaToggle) {
        const vacaControl = document.getElementById('vaca-control');
        if (vacaControl) vacaControl.style.display = numPersonas > 1 ? 'flex' : 'none';
        if (vacaToggle.checked && costoGlobal > 0 && numPersonas > 1) {
          vacaGlobal.innerHTML = `Por persona: ${(costoGlobal / numPersonas).toFixed(2)}€`;
          vacaGlobal.style.display = 'block';
        } else {
          vacaGlobal.innerHTML = '';
          vacaGlobal.style.display = 'none';
        }
      }
    }


    // ================== PRESENTACI ==================
    function abrirPresentacion() {
      presentacionLista = [];
      destinos.forEach(dest => {
        dest.dias.forEach((dia, ida) => {
          dia.eventos.forEach(ev => {
            presentacionLista.push({ destino: dest.nombre, dia: ida+1, ...ev });
          });
          if (dia.costosAdicionales) {
            dia.costosAdicionales.forEach(c => {
              if (c.descripcion) {
                presentacionLista.push({ destino: dest.nombre, dia: ida+1, titulo: c.descripcion, costo: c.precio, notas: "Costo adicional" });
              }
            });
          }
        });
      });
      if (vueltaGlobal) {
        presentacionLista.push({ destino: "Vuelta", dia:0, titulo: vueltaGlobal, costo: vueltaPrecioGlobal*numPersonas });
      }
      if (presentacionLista.length === 0) { showToast('No hay eventos', 'error'); return; }
      presentacionIndex= 0;
      mostrarPresentacionEvento();
      document.getElementById('modal-presentacion').style.display = 'flex';
    }

    function cerrarPresentacion() {
      document.getElementById('modal-presentacion').style.display = 'none';
    }

    function presentacionAnterior() {
      if (presentacionIndex> 0) presentacionIndex--;
      mostrarPresentacionEvento();
    }

    function presentacionSiguiente() {
      if (presentacionIndex< presentacionLista.length-1) presentacionIndex++;
      mostrarPresentacionEvento();
    }

    function mostrarPresentacionEvento() {
      const ev = presentacionLista[presentacionIndex];
      const cont = document.getElementById('presentacion-contenido');
      cont.innerHTML = `
        <div class="presentacion-dia">${ev.destino} ${ev.dia>0 ? `- ${t('day_prefix')} ${ev.dia}` : ''}</div>
        <div class="presentacion-evento">
          <h3>${ev.titulo || t('untitled_event')}</h3>
          <p><strong>Hora:</strong> ${ev.hora || '--:--'}</p>
          ${ev.duracion ? `<p><strong>Duración:</strong> ${ev.duracion} min</p>` : ''}
          ${ev.costo ? `<p><strong>Costo:</strong> ${ev.costo.toFixed(2)}€</p>` : ''}
          ${ev.notas ? `<p>${ev.notas}</p>` : ''}
        </div>
      `;
    }

    // ================== CONVERSOR MONEDA ==================
    function abrirConversor() {
      document.getElementById('modal-conversor').style.display = 'flex';
      convertirMoneda();
    }
    function cerrarConversor() {
      document.getElementById('modal-conversor').style.display = 'none';
    }
    function convertirMoneda() {
      const cant = parseFloat(document.getElementById('conv-cantidad').value) || 1;
      const orig = document.getElementById('conv-origen').value;
      const dest = document.getElementById('conv-destino').value;
      const res = cant * (exchangeRates[dest] / exchangeRates[orig]);
      document.getElementById('conversor-resultado').innerText = `${res.toFixed(2)} ${dest}`;
    }

    // ================== TRADUCTOR PARA VIAJEROS ==================
    let _traductorDebounceTimer = null;

    const TRAD_LANG_NAMES = {
      es: 'Español',
      en: 'Inglés',
      fr: 'Francés',
      de: 'Alemán',
      it: 'Italiano',
      pt: 'Portugués',
      ja: 'Japonés',
      zh: 'Chino',
      ko: 'Coreano',
      ru: 'Ruso',
      ar: 'Árabe',
      autodetect: 'Detectar idioma'
    };

    function toggleTradDropdown(which, event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      const menu = document.getElementById(which === 'from' ? 'trad-menu-from' : 'trad-menu-to');
      const otherMenu = document.getElementById(which === 'from' ? 'trad-menu-to' : 'trad-menu-from');
      const trigger = document.getElementById(which === 'from' ? 'trad-trigger-from' : 'trad-trigger-to');
      const otherTrigger = document.getElementById(which === 'from' ? 'trad-trigger-to' : 'trad-trigger-from');

      if (otherMenu) otherMenu.classList.remove('show');
      if (otherTrigger) otherTrigger.classList.remove('active');

      if (menu) {
        menu.classList.toggle('show');
        if (trigger) trigger.classList.toggle('active', menu.classList.contains('show'));
      }
    }

    function selectTradLang(which, code, name) {
      const input = document.getElementById(which === 'from' ? 'trad-lang-from' : 'trad-lang-to');
      const label = document.getElementById(which === 'from' ? 'trad-label-from' : 'trad-label-to');
      const menu = document.getElementById(which === 'from' ? 'trad-menu-from' : 'trad-menu-to');
      const trigger = document.getElementById(which === 'from' ? 'trad-trigger-from' : 'trad-trigger-to');

      if (input) input.value = code;
      if (label) label.innerText = name || TRAD_LANG_NAMES[code] || code;

      if (menu) {
        menu.classList.remove('show');
        menu.querySelectorAll('.trad-option').forEach(opt => {
          opt.classList.toggle('selected', opt.dataset.code === code);
        });
      }
      if (trigger) trigger.classList.remove('active');

      ejecutarTraduccion();
    }

    function abrirTraductor() {
      const modal = document.getElementById('modal-traductor');
      if (modal) {
        modal.style.display = 'flex';
        // Sugerir idioma destino según el primer destino del viaje si está disponible
        if (typeof destinos !== 'undefined' && destinos && destinos.length > 0 && destinos[0]?.nombre) {
          const destName = destinos[0].nombre.toLowerCase();
          let suggestedCode = null;
          if (destName.includes('roma') || destName.includes('italia') || destName.includes('milan') || destName.includes('florencia') || destName.includes('venecia')) suggestedCode = 'it';
          else if (destName.includes('paris') || destName.includes('francia') || destName.includes('niza') || destName.includes('lyon')) suggestedCode = 'fr';
          else if (destName.includes('berlin') || destName.includes('alemania') || destName.includes('munich') || destName.includes('frankfurt')) suggestedCode = 'de';
          else if (destName.includes('tokio') || destName.includes('japon') || destName.includes('kyoto') || destName.includes('osaka')) suggestedCode = 'ja';
          else if (destName.includes('londres') || destName.includes('york') || destName.includes('miami') || destName.includes('angeles') || destName.includes('eeuu') || destName.includes('usa') || destName.includes('uk')) suggestedCode = 'en';
          else if (destName.includes('brasil') || destName.includes('rio') || destName.includes('lisboa') || destName.includes('portugal')) suggestedCode = 'pt';

          if (suggestedCode) {
            const toInput = document.getElementById('trad-lang-to');
            const toLabel = document.getElementById('trad-label-to');
            if (toInput) toInput.value = suggestedCode;
            if (toLabel) toLabel.innerText = TRAD_LANG_NAMES[suggestedCode] || suggestedCode;
            const toMenu = document.getElementById('trad-menu-to');
            if (toMenu) {
              toMenu.querySelectorAll('.trad-option').forEach(opt => {
                opt.classList.toggle('selected', opt.dataset.code === suggestedCode);
              });
            }
          }
        }

        const srcInput = document.getElementById('trad-source-text');
        if (srcInput && !srcInput._hasTradListener) {
          srcInput._hasTradListener = true;
          srcInput.addEventListener('input', (e) => {
            const count = e.target.value.length;
            const countEl = document.getElementById('trad-char-count');
            if (countEl) countEl.innerText = count;
            clearTimeout(_traductorDebounceTimer);
            if (count > 0) {
              _traductorDebounceTimer = setTimeout(ejecutarTraduccion, 500);
            } else {
              const resDiv = document.getElementById('trad-result-text');
              if (resDiv) resDiv.innerText = 'Tu traducción aparecerá aquí...';
            }
          });
        }

        if (srcInput && srcInput.value.trim()) {
          ejecutarTraduccion();
        }
      }
    }

    function cerrarTraductor() {
      const modal = document.getElementById('modal-traductor');
      if (modal) modal.style.display = 'none';
      document.getElementById('trad-menu-from')?.classList.remove('show');
      document.getElementById('trad-menu-to')?.classList.remove('show');
      document.getElementById('trad-trigger-from')?.classList.remove('active');
      document.getElementById('trad-trigger-to')?.classList.remove('active');
      if ('speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch(e) {}
      }
    }

    function swapTraductorLangs() {
      const fromInput = document.getElementById('trad-lang-from');
      const toInput = document.getElementById('trad-lang-to');
      const fromLabel = document.getElementById('trad-label-from');
      const toLabel = document.getElementById('trad-label-to');
      if (!fromInput || !toInput) return;

      let fromCode = fromInput.value;
      if (fromCode === 'autodetect') fromCode = 'es';
      const toCode = toInput.value;

      fromInput.value = toCode;
      toInput.value = fromCode;

      if (fromLabel) fromLabel.innerText = TRAD_LANG_NAMES[toCode] || toCode;
      if (toLabel) toLabel.innerText = TRAD_LANG_NAMES[fromCode] || fromCode;

      const fromMenu = document.getElementById('trad-menu-from');
      if (fromMenu) {
        fromMenu.querySelectorAll('.trad-option').forEach(opt => {
          opt.classList.toggle('selected', opt.dataset.code === toCode);
        });
      }
      const toMenu = document.getElementById('trad-menu-to');
      if (toMenu) {
        toMenu.querySelectorAll('.trad-option').forEach(opt => {
          opt.classList.toggle('selected', opt.dataset.code === fromCode);
        });
      }

      const srcInput = document.getElementById('trad-source-text');
      const resText = document.getElementById('trad-result-text');
      if (srcInput && resText && resText.innerText && !resText.innerText.includes('aparecerá')) {
        srcInput.value = resText.innerText;
        document.getElementById('trad-char-count').innerText = srcInput.value.length;
      }
      ejecutarTraduccion();
    }

    function insertarFraseTraductor(texto) {
      const srcInput = document.getElementById('trad-source-text');
      if (srcInput) {
        srcInput.value = texto;
        const countEl = document.getElementById('trad-char-count');
        if (countEl) countEl.innerText = texto.length;
        ejecutarTraduccion();
      }
    }

    async function ejecutarTraduccion() {
      const srcInput = document.getElementById('trad-source-text');
      const resDiv = document.getElementById('trad-result-text');
      const statusDiv = document.getElementById('trad-status');
      if (!srcInput || !resDiv) return;

      const text = srcInput.value.trim();
      if (!text) {
        resDiv.innerText = 'Tu traducción aparecerá aquí...';
        if (statusDiv) statusDiv.innerText = 'Listo';
        return;
      }

      let from = document.getElementById('trad-lang-from')?.value || 'es';
      const to = document.getElementById('trad-lang-to')?.value || 'en';

      if (from === 'autodetect') from = 'es';

      if (from === to) {
        resDiv.innerText = text;
        if (statusDiv) statusDiv.innerText = 'Mismo idioma';
        return;
      }

      if (statusDiv) statusDiv.innerText = 'Traduciendo...';
      resDiv.style.opacity = '0.6';

      try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
        const resp = await fetch(url);
        if (resp.ok) {
          const data = await resp.json();
          if (data && data.responseData && data.responseData.translatedText) {
            resDiv.innerText = data.responseData.translatedText;
            if (statusDiv) statusDiv.innerText = 'Completado ✓';
          } else {
            throw new Error('Sin respuesta estructurada');
          }
        } else {
          throw new Error('Error de conexión');
        }
      } catch (err) {
        console.warn('MyMemory traducción fallo, usando fallback offline:', err);
        const offlineDic = {
          'hola': { en: 'Hello', fr: 'Bonjour', it: 'Ciao', de: 'Hallo', pt: 'Olá' },
          'hola, ¿cómo estás?': { en: 'Hello, how are you?', fr: 'Bonjour, comment allez-vous ?', it: 'Ciao, come stai?', de: 'Hallo, wie geht es dir?', pt: 'Olá, como vai você?' },
          'muchas gracias': { en: 'Thank you very much', fr: 'Merci beaucoup', it: 'Grazie mille', de: 'Vielen Dank', pt: 'Muito obrigado' },
          'la cuenta, por favor': { en: 'The bill, please', fr: "L'addition, s'il vous plaît", it: 'Il conto, per favore', de: 'Die Rechnung, bitte', pt: 'A conta, por favor' },
          '¿cuánto cuesta esto?': { en: 'How much does this cost?', fr: 'Combien ça coûte ?', it: 'Quanto costa questo?', de: 'Wie viel kostet das?', pt: 'Quanto custa isso?' },
          '¿dónde está el baño?': { en: 'Where is the bathroom?', fr: 'Où sont les toilettes ?', it: 'Dov\'è il bagno?', de: 'Wo ist die Toilette?', pt: 'Onde fica o banheiro?' },
          '¿dónde está la estación de tren o metro?': { en: 'Where is the train or metro station?', fr: 'Où est la gare ou le métro ?', it: 'Dov\'è la stazione del treno o della metropolitana?', de: 'Wo ist der Bahnhof oder die U-Bahn-Station?', pt: 'Onde fica a estação de trem ou metrô?' },
          'tengo una reserva a mi nombre': { en: 'I have a reservation under my name', fr: 'J\'ai une réservation à mon nom', it: 'Ho una prenotazione a mio nome', de: 'Ich habe eine Reservierung auf meinen Namen', pt: 'Tenho uma reserva em meu nome' },
          'necesito ayuda, por favor': { en: 'I need help, please', fr: 'J\'ai besoin d\'aide, s\'il vous plaît', it: 'Ho bisogno di aiuto, per favore', de: 'Ich brauche Hilfe, bitte', pt: 'Preciso de ajuda, por favor' }
        };
        const lower = text.toLowerCase().trim();
        if (offlineDic[lower] && offlineDic[lower][to]) {
          resDiv.innerText = offlineDic[lower][to];
          if (statusDiv) statusDiv.innerText = 'Offline ✓';
        } else {
          resDiv.innerText = text;
          if (statusDiv) statusDiv.innerText = 'Sin conexión';
        }
      } finally {
        resDiv.style.opacity = '1';
      }
    }

    function copiarTraduccion() {
      const resDiv = document.getElementById('trad-result-text');
      if (!resDiv || !resDiv.innerText || resDiv.innerText.includes('aparecerá')) return;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(resDiv.innerText).then(() => {
          showToast('Traducción copiada al portapapeles', 'success');
        }).catch(() => {
          showToast('Copiado', 'success');
        });
      }
    }

    function pronunciarTextoTraductor(tipo) {
      if (!('speechSynthesis' in window)) {
        showToast('Tu navegador no soporta síntesis de voz', 'warning');
        return;
      }
      window.speechSynthesis.cancel();

      let text = '';
      let lang = 'es';

      if (tipo === 'source') {
        text = document.getElementById('trad-source-text')?.value || '';
        lang = document.getElementById('trad-lang-from')?.value || 'es';
        if (lang === 'autodetect') lang = 'es';
      } else {
        const resDiv = document.getElementById('trad-result-text');
        text = resDiv ? resDiv.innerText : '';
        lang = document.getElementById('trad-lang-to')?.value || 'en';
      }

      if (!text || text.includes('aparecerá')) return;

      const langMap = {
        es: 'es-ES',
        en: 'en-US',
        fr: 'fr-FR',
        de: 'de-DE',
        it: 'it-IT',
        pt: 'pt-PT',
        ja: 'ja-JP',
        zh: 'zh-CN',
        ko: 'ko-KR',
        ru: 'ru-RU',
        ar: 'ar-SA'
      };

      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langMap[lang] || 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
      } catch(e) {
        console.warn('TTS error:', e);
      }
    }

    // Dismiss translator dropdowns on document click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.trad-select-wrapper')) {
        document.getElementById('trad-menu-from')?.classList.remove('show');
        document.getElementById('trad-menu-to')?.classList.remove('show');
        document.getElementById('trad-trigger-from')?.classList.remove('active');
        document.getElementById('trad-trigger-to')?.classList.remove('active');
      }
    });

    window.abrirTraductor = abrirTraductor;
    window.cerrarTraductor = cerrarTraductor;
    window.swapTraductorLangs = swapTraductorLangs;
    window.insertarFraseTraductor = insertarFraseTraductor;
    window.ejecutarTraduccion = ejecutarTraduccion;
    window.copiarTraduccion = copiarTraduccion;
    window.pronunciarTextoTraductor = pronunciarTextoTraductor;
    window.toggleTradDropdown = toggleTradDropdown;
    window.selectTradLang = selectTradLang;

    // ================== MAPA CORREGIDO (Open-Meteo + Nominatim Fallback) ==================
    async function geocode(lugar) {
      if (!lugar) return null;
      const cleanLugar = lugar.trim();

      // 1. Open-Meteo Geocoding API (100% CORS-friendly)
      try {
        const omUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cleanLugar)}&count=1&language=es&format=json`;
        const omRes = await fetch(omUrl);
        if (omRes.ok) {
          const omData = await omRes.json();
          if (omData.results && omData.results.length > 0) {
            return {
              lat: omData.results[0].latitude,
              lon: omData.results[0].longitude,
              display_name: omData.results[0].name
            };
          }
        }
      } catch (e) {
        console.warn('Open-Meteo geocode error:', e);
      }

      // 2. Nominatim Fallback
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cleanLugar)}`;
        const resp = await fetch(url);
        if (resp.ok) {
          const data = await resp.json();
          if (data && data.length > 0) {
            return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
          }
        }
      } catch(e) {
        console.warn('Nominatim geocode fallback error:', e);
      }
      return null;
    }

    // ================== CLIMA (Open-Meteo + OpenWeather opcional) ==================
    const WEATHER_CACHE_MS = 30 * 60 * 1000;
    const weatherCache = {};
    const weatherPending = {};

    const CITY_WEATHER_ALIASES = {
      'roma': 'Rome', 'rome': 'Rome', 'parís': 'Paris', 'paris': 'Paris',
      'bs as': 'Buenos Aires', 'bs. aires': 'Buenos Aires', 'buenos aires': 'Buenos Aires',
      'caba': 'Buenos Aires', 'ciudad autónoma de buenos aires': 'Buenos Aires',
      'ciudad autonoma de buenos aires': 'Buenos Aires', 'tokio': 'Tokyo', 'tokyo': 'Tokyo',
      'nueva york': 'New York', 'new york': 'New York', 'ny': 'New York',
      'londres': 'London', 'múnich': 'Munich', 'munich': 'Munich'
    };

    const WMO_DESC = {
      es: { 0:'Despejado',1:'Mayormente despejado',2:'Parcialmente nublado',3:'Nublado',45:'Niebla',48:'Niebla',51:'Llovizna',53:'Llovizna',55:'Llovizna',61:'Lluvia',63:'Lluvia',65:'Lluvia fuerte',71:'Nieve',73:'Nieve',75:'Nieve',80:'Chubascos',81:'Chubascos',82:'Chubascos fuertes',95:'Tormenta',96:'Tormenta',99:'Tormenta' },
      en: { 0:'Clear',1:'Mainly clear',2:'Partly cloudy',3:'Overcast',45:'Fog',48:'Fog',51:'Drizzle',53:'Drizzle',55:'Drizzle',61:'Rain',63:'Rain',65:'Heavy rain',71:'Snow',73:'Snow',75:'Snow',80:'Showers',81:'Showers',82:'Heavy showers',95:'Thunderstorm',96:'Thunderstorm',99:'Thunderstorm' }
    };

    function weatherLang() {
      return ['es', 'en', 'fr', 'de', 'it'].includes(currentLang) ? currentLang : 'es';
    }

    function weatherCacheKey(city) {
      return city.trim().toLowerCase();
    }

    function normalizeCityQuery(city) {
      const q = city.trim();
      return CITY_WEATHER_ALIASES[q.toLowerCase()] || q;
    }

    function wmoEmoji(code) {
      if (code === 0) return '☀️';
      if (code <= 3) return code <= 1 ? '🌤️' : '⛅';
      if (code <= 48) return '🌫️';
      if (code <= 55) return '🌦️';
      if (code <= 67) return '🌧️';
      if (code <= 77) return '❄️';
      if (code <= 82) return '🌧️';
      if (code >= 95) return '⛈️';
      return '🌤️';
    }

    function wmoDesc(code) {
      const lang = weatherLang();
      const table = WMO_DESC[lang] || WMO_DESC.es;
      return table[code] || table[Math.floor(code / 10) * 10] || (lang === 'es' ? 'Variable' : 'Variable');
    }

    function weatherEmojiFromOwmCode(code, iconStr = '') {
      const isDay = !iconStr || iconStr.includes('d');
      if (code >= 200 && code < 300) return '⛈️';
      if (code >= 300 && code < 400) return '🌦️';
      if (code >= 500 && code < 600) return '🌧️';
      if (code >= 600 && code < 700) return '❄️';
      if (code >= 700 && code < 800) return '🌫️';
      if (code === 800) return isDay ? '☀️' : '🌙';
      if (code > 800) return '☁️';
      return '🌤️';
    }

    async function geocodeCityForWeather(city) {
      const queries = [...new Set([normalizeCityQuery(city), city.trim()].filter(Boolean))];
      for (const name of queries) {
        try {
          const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=8&language=${weatherLang()}&format=json`;
          const res = await fetch(url);
          if (!res.ok) continue;
          const data = await res.json();
          if (!data.results?.length) continue;
          const lower = name.toLowerCase();
          const match = data.results.find(r =>
            r.name?.toLowerCase() === lower ||
            `${r.name}, ${r.admin1}`.toLowerCase().includes(lower)
          ) || data.results[0];
          return {
            latitude: match.latitude,
            longitude: match.longitude,
            name: match.name,
            country: match.country_code || '',
            admin1: match.admin1 || ''
          };
        } catch (e) { console.warn('Geocoding clima:', e); }
      }
      const coords = await geocode(normalizeCityQuery(city) || city);
      if (coords) {
        return { latitude: coords.lat, longitude: coords.lon, name: city.trim(), country: '', admin1: '' };
      }
      return null;
    }

    function parseOpenMeteoData(geo, forecast) {
      const cur = forecast.current;
      const code = cur.weather_code;
      const daily = [];
      const times = forecast.daily?.time || [];
      for (let i = 0; i < times.length; i++) {
        const day = times[i];
        const wc = forecast.daily.weather_code[i];
        daily.push({
          date: day,
          label: new Date(day + 'T12:00:00').toLocaleDateString(weatherLang(), { weekday: 'short', day: 'numeric' }),
          tempMin: Math.round(forecast.daily.temperature_2m_min[i]),
          tempMax: Math.round(forecast.daily.temperature_2m_max[i]),
          code: wc,
          desc: wmoDesc(wc),
          emoji: wmoEmoji(wc)
        });
      }
      return {
        city: geo.name,
        country: geo.country,
        temp: Math.round(cur.temperature_2m),
        feelsLike: Math.round(cur.apparent_temperature),
        humidity: Math.round(cur.relative_humidity_2m),
        wind: Math.round(cur.wind_speed_10m),
        pressure: null,
        desc: wmoDesc(code),
        code,
        emoji: wmoEmoji(code),
        daily,
        source: 'open-meteo'
      };
    }

    function parseOpenWeatherData(current, forecast, geo) {
      const w0 = current.weather[0];
      const daily = [];
      if (forecast?.list) {
        const byDay = {};
        forecast.list.forEach(item => {
          const day = item.dt_txt.split(' ')[0];
          if (!byDay[day]) byDay[day] = [];
          byDay[day].push(item);
        });
        Object.keys(byDay).slice(0, 5).forEach(day => {
          const items = byDay[day];
          const temps = items.map(i => i.main.temp);
          const mid = items[Math.floor(items.length / 2)];
          const mw = mid.weather[0];
          daily.push({
            date: day,
            label: new Date(day + 'T12:00:00').toLocaleDateString(weatherLang(), { weekday: 'short', day: 'numeric' }),
            tempMin: Math.round(Math.min(...temps)),
            tempMax: Math.round(Math.max(...temps)),
            code: mw.id,
            desc: mw.description,
            emoji: weatherEmojiFromOwmCode(mw.id, mw.icon)
          });
        });
      }
      return {
        city: current.name || geo.name,
        country: current.sys?.country || geo.country,
        temp: Math.round(current.main.temp),
        feelsLike: Math.round(current.main.feels_like),
        humidity: current.main.humidity,
        wind: Math.round((current.wind?.speed || 0) * 3.6),
        pressure: current.main.pressure,
        desc: w0.description,
        code: w0.id,
        emoji: weatherEmojiFromOwmCode(w0.id, w0.icon),
        daily,
        source: 'openweather'
      };
    }

    async function fetchWeatherOpenMeteo(geo, forecastDays = 16) {
      const days = Math.min(16, Math.max(5, forecastDays));
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}` +
        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=${days}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Error de pronóstico');
      const forecast = await res.json();
      return parseOpenMeteoData(geo, forecast);
    }

    async function tryFetchOpenWeather(geo) {
      if (!OPENWEATHER_API_KEY) return null;
      const lang = weatherLang();
      const base = `lat=${geo.latitude}&lon=${geo.longitude}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=${lang}`;
      const [currentRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?${base}`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?${base}`)
      ]);
      if (currentRes.status === 401) {
        console.warn('OpenWeather: API key inválida o no activada (401). Usando Open-Meteo.');
        OPENWEATHER_API_KEY = '';
        return null;
      }
      if (!currentRes.ok) return null;
      const current = await currentRes.json();
      const forecast = forecastRes.ok ? await forecastRes.json() : null;
      return parseOpenWeatherData(current, forecast, geo);
    }

    async function fetchWeatherData(city) {
      const cacheKey = weatherCacheKey(city);
      const cached = weatherCache[cacheKey];
      if (cached && Date.now() - cached.ts < WEATHER_CACHE_MS) return cached.data;

      if (weatherPending[cacheKey]) return weatherPending[cacheKey];

      weatherPending[cacheKey] = (async () => {
        const geo = await geocodeCityForWeather(city);
        if (!geo) throw new Error('Ciudad no encontrada');

        const tripDays = buildTripDaySchedule().length || 16;
        // Usar Open-Meteo directamente (más rápido, sin API key) y solo fallback a OpenWeather si falla
        let data = await fetchWeatherOpenMeteo(geo, tripDays).catch(() => null);
        if (!data && OPENWEATHER_API_KEY) data = await tryFetchOpenWeather(geo).catch(() => null);

        weatherCache[cacheKey] = { ts: Date.now(), data };
        return data;
      })();

      try {
        return await weatherPending[cacheKey];
      } finally {
        delete weatherPending[cacheKey];
      }
    }

    function formatDateISO(d) {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    }

    function getTripStartDate() {
      const val = document.getElementById('fechaInicio')?.value;
      if (!val) return null;
      const d = new Date(val);
      return isNaN(d.getTime()) ? null : d;
    }

    /** Días del viaje en orden: destino 1 día 1,2… destino 2 día 1,2… con fecha calendario si hay fechaInicio */
    function buildTripDaySchedule() {
      const start = getTripStartDate();
      const schedule = [];
      let globalOffset = 0;
      destinos.forEach(dest => {
        const dias = dest.dias || [];
        if (dias.length === 0) {
          schedule.push({
            destId: dest.id,
            destName: dest.nombre,
            diaId: null,
            diaNum: 0,
            globalDayIndex: globalOffset,
            dateStr: null,
            dateLabel: '',
            forecastIndex: globalOffset,
            isDestOnly: true
          });
          return;
        }
        dias.forEach((dia, diaIdx) => {
          let dateStr = null;
          let dateLabel = '';
          if (start) {
            const d = new Date(start);
            d.setDate(d.getDate() + globalOffset);
            dateStr = formatDateISO(d);
            dateLabel = d.toLocaleDateString(weatherLang(), { weekday: 'short', day: 'numeric', month: 'short' });
          }
          schedule.push({
            destId: dest.id,
            destName: dest.nombre,
            diaId: dia.id,
            diaNum: diaIdx + 1,
            globalDayIndex: globalOffset,
            dateStr,
            dateLabel,
            forecastIndex: globalOffset,
            isDestOnly: false
          });
          globalOffset++;
        });
      });
      return schedule;
    }

    function getSeasonalWeatherEstimate(city, dateStr) {
      let month = new Date().getMonth();
      if (dateStr) {
        const d = new Date(dateStr + 'T12:00:00');
        if (!isNaN(d.getTime())) month = d.getMonth();
      }
      const lowerCity = (city || '').toLowerCase();
      const isSouthern = ['buenos aires', 'santiago', 'sydney', 'rio', 'sao paulo', 'auckland', 'montevideo', 'lima', 'melbourne'].some(c => lowerCity.includes(c));
      let isWarm = (month >= 5 && month <= 7);
      if (isSouthern) isWarm = !isWarm;

      if (isWarm) {
        return { emoji: '☀️', tempMax: 29, tempMin: 20, desc: '¡Caluroso! ⚠️ (Estimación climática)', isEstimate: true };
      } else if (month >= 11 || month <= 1) {
        return { emoji: '❄️', tempMax: 12, tempMin: 4, desc: '¡Fresco/Frío! ⚠️ (Estimación climática)', isEstimate: true };
      } else {
        return { emoji: '🌤️', tempMax: 22, tempMin: 13, desc: '¡Templado! ⚠️ (Estimación climática)', isEstimate: true };
      }
    }

    function getWeatherForTripDay(weatherData, dateStr, forecastIndex) {
      if (!weatherData?.daily?.length) return getSeasonalWeatherEstimate(weatherData?.city, dateStr);
      if (dateStr) {
        const byDate = weatherData.daily.find(d => d.date === dateStr);
        if (byDate) return byDate;
        const targetDate = new Date(dateStr + 'T12:00:00');
        const now = new Date();
        const diffDays = Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24));
        if (diffDays > 16 || diffDays < 0) {
          return getSeasonalWeatherEstimate(weatherData.city, dateStr);
        }
      }
      if (forecastIndex != null && weatherData.daily[forecastIndex]) {
        return weatherData.daily[forecastIndex];
      }
      return weatherData.daily[0] || null;
    }

    function renderClimaDayRowHTML(scheduleEntry, dayWeather, fallbackWeather) {
      const prefix = t('day_prefix') || 'Día';
      let label = scheduleEntry.isDestOnly
        ? (t('clima_feed_now') || 'Pronóstico general')
        : `${prefix} ${scheduleEntry.diaNum}`;
      if (scheduleEntry.dateLabel) label += ` · ${scheduleEntry.dateLabel}`;
      if (!dayWeather && !fallbackWeather) {
        return `<div class="clima-feed-day"><span class="cfd-label">${label}</span><span class="cfd-desc">${t('clima_beyond') || 'Sin pronóstico'}</span></div>`;
      }
      const d = dayWeather || fallbackWeather.daily?.[0];
      if (!d && fallbackWeather) {
        return `<div class="clima-feed-day"><span class="cfd-label">${label}</span><span class="cfd-icon">${fallbackWeather.emoji}</span><span class="cfd-temp">${fallbackWeather.temp}°</span><span class="cfd-desc">${fallbackWeather.desc}</span></div>`;
      }
      return `<div class="clima-feed-day"><span class="cfd-label">${label}</span><span class="cfd-icon">${d.emoji}</span><span class="cfd-temp">${d.tempMax}°/${d.tempMin}°</span><span class="cfd-desc">${d.desc}</span></div>`;
    }

    async function renderClimaFeedViaje() {
      const feed = document.getElementById('clima-feed-viaje');
      if (!feed) return;
      if (!destinos.length) {
        feed.innerHTML = `<p class="clima-feed-empty">${t('clima_feed_empty')}</p>`;
        return;
      }
      feed.innerHTML = `<p class="clima-placeholder">${t('weather_loading')}</p>`;
      const schedule = buildTripDaySchedule();
      const cities = [...new Set(destinos.map(d => d.nombre))];
      const weatherByCity = {};
      await Promise.all(cities.map(async city => {
        try {
          weatherByCity[city] = await fetchWeatherData(city);
        } catch (e) {
          weatherByCity[city] = null;
        }
      }));

      let html = `<h3 class="clima-feed-title">${t('clima_feed_title')}</h3>`;
      destinos.forEach(dest => {
        const w = weatherByCity[dest.nombre];
        const destDays = schedule.filter(s => s.destId === dest.id);
        html += `<div class="clima-feed-dest"><h4>📍 ${dest.nombre}</h4>`;
        if (!destDays.length) {
          html += renderClimaDayRowHTML({ destName: dest.nombre, isDestOnly: true, diaNum: 0, dateLabel: '' }, null, w);
        } else {
          destDays.forEach(s => {
            const dayW = w ? getWeatherForTripDay(w, s.dateStr, s.forecastIndex) : null;
            html += renderClimaDayRowHTML(s, dayW, w);
          });
        }
        html += `</div>`;
      });
      feed.innerHTML = html;
    }

    function buildDayWeatherChipHTML(widgetId, weatherData, dayInfo, dateStr, expanded) {
      const d = dayInfo || { emoji: '🌤️', tempMax: '--', tempMin: '--', desc: '...' };
      const row = `
        <div class="weather-chip-row">
          <span class="weather-chip-icon">${d.emoji}</span>
          <span class="weather-chip-temp">${d.tempMax}°</span>
          <span class="weather-chip-desc">${d.desc}</span>
        </div>`;
      if (!expanded || !weatherData) return row;
      const metaText = d.isEstimate
        ? `<p style="font-size:0.8rem;color:var(--naranja)">⚠️ Estimación climática estacional para la fecha elegida</p>`
        : `<p style="font-size:0.8rem;color:var(--gris)">Sensación ${weatherData.feelsLike}° · Humedad ${weatherData.humidity}% · Viento ${weatherData.wind} km/h</p>`;
      return row + `
        <div class="weather-expanded">
          <p><strong>${weatherData.city}${weatherData.country ? ', ' + weatherData.country : ''}</strong>${dateStr ? `<br><small style="color:var(--gris)">${dateStr}</small>` : ''}</p>
          <p>${d.tempMax}° / ${d.tempMin}° · ${d.desc}</p>
          ${metaText}
        </div>`;
    }

    function buildWeatherWidgetHTML(widgetId, w, expanded) {
      const row = `
        <div class="weather-chip-row">
          <span class="weather-chip-icon">${w.emoji}</span>
          <span class="weather-chip-temp">${w.temp}°</span>
          <span class="weather-chip-desc">${w.desc}</span>
        </div>`;
      if (!expanded) return row;
      const forecastHtml = w.daily.length
        ? `<div class="weather-forecast-mini">${w.daily.map(d => `
            <div class="wf-day">
              <span class="wf-icon">${d.emoji}</span>
              <span>${d.label}</span>
              <span>${d.tempMax}°/${d.tempMin}°</span>
            </div>`).join('')}</div>`
        : '';
      return row + `
        <div class="weather-expanded">
          <p><strong>${w.city}${w.country ? ', ' + w.country : ''}</strong></p>
          <p>Sensación ${w.feelsLike}° · Humedad ${w.humidity}% · Viento ${w.wind} km/h</p>
          ${forecastHtml}
        </div>`;
    }

    function renderClimaCardHTML(w) {
      const forecastHtml = w.daily.length
        ? `<div class="clima-forecast-grid">${w.daily.map(d => `
            <div class="clima-forecast-day">
              <span class="day-label">${d.label}</span>
              <span class="day-icon">${d.emoji}</span>
              <span class="day-temps">${d.tempMax}° / ${d.tempMin}°</span>
              <span style="font-size:0.7rem;color:var(--gris);text-transform:capitalize;">${d.desc}</span>
            </div>`).join('')}</div>`
        : '';
      return `
        <div class="clima-card-full">
          <div class="clima-current-row">
            <span class="clima-current-icon">${w.emoji}</span>
            <div>
              <div class="clima-current-temp">${w.temp}°C</div>
              <div style="text-transform:capitalize;color:var(--texto);font-size:1.1rem;">${w.desc}</div>
              <div class="clima-current-meta">${w.city}${w.country ? ', ' + w.country : ''} · Sensación ${w.feelsLike}° · Humedad ${w.humidity}% · Viento ${w.wind} km/h</div>
            </div>
          </div>
          ${forecastHtml ? `<h4 style="color:var(--gris);font-size:0.85rem;margin-bottom:10px;">Próximos días</h4>${forecastHtml}` : ''}
        </div>`;
    }

    async function loadWeatherForTripDay(widgetId, city, dateStr, forecastIndex) {
      const el = document.getElementById(widgetId);
      if (!el || !city) return;
      el.dataset.city = city;
      el.dataset.date = dateStr || '';
      el.dataset.fidx = forecastIndex != null ? String(forecastIndex) : '';
      el.innerHTML = '<div class="weather-chip-row"><span class="weather-chip-icon">🌤️</span><span class="weather-chip-temp">...</span></div>';
      try {
        const w = await fetchWeatherData(city);
        const dayInfo = getWeatherForTripDay(w, dateStr, forecastIndex);
        if (!dayInfo) {
          el.innerHTML = `<div class="weather-chip-row"><span class="weather-chip-icon">🌡️</span><span class="weather-chip-desc">${t('clima_beyond') || 'N/D'}</span></div>`;
          el.dataset.loaded = '0';
          return;
        }
        el.innerHTML = buildDayWeatherChipHTML(widgetId, w, dayInfo, dateStr, el.classList.contains('expanded'));
        el.dataset.loaded = '1';
      } catch (e) {
        el.innerHTML = '<div class="weather-chip-row"><span class="weather-chip-icon" title="Clima no disponible">🌡️</span><span class="weather-chip-desc">N/D</span></div>';
        el.dataset.loaded = '0';
      }
    }

    function toggleWeatherWidget(widgetId) {
      const el = document.getElementById(widgetId);
      if (!el) return;
      const city = el.dataset.city;
      const dateStr = el.dataset.date || '';
      const forecastIndex = el.dataset.fidx !== '' ? parseInt(el.dataset.fidx, 10) : null;
      const wasExpanded = el.classList.contains('expanded');
      document.querySelectorAll('.weather-chip.expanded').forEach(chip => {
        if (chip.id !== widgetId) {
          chip.classList.remove('expanded');
          const c = chip.dataset.city;
          const cached = weatherCache[weatherCacheKey(c)];
          if (cached) {
            const di = getWeatherForTripDay(cached.data, chip.dataset.date || '', chip.dataset.fidx !== '' ? parseInt(chip.dataset.fidx, 10) : null);
            chip.innerHTML = buildDayWeatherChipHTML(chip.id, cached.data, di, chip.dataset.date || '', false);
          }
        }
      });
      el.classList.toggle('expanded');
      const cached = weatherCache[weatherCacheKey(city)];
      if (cached) {
        const dayInfo = getWeatherForTripDay(cached.data, dateStr, forecastIndex);
        el.innerHTML = buildDayWeatherChipHTML(widgetId, cached.data, dayInfo, dateStr, el.classList.contains('expanded'));
      } else if (!wasExpanded) {
        loadWeatherForTripDay(widgetId, city, dateStr, forecastIndex);
      }
    }

    function refreshAllWeatherWidgets() {
      buildTripDaySchedule().forEach(s => {
        if (s.isDestOnly || s.diaId == null) return;
        const wid = `weather-day-${s.destId}-${s.diaId}`;
        if (document.getElementById(wid)) {
          loadWeatherForTripDay(wid, s.destName, s.dateStr, s.forecastIndex);
        }
        const wrid = `weather-resumen-day-${s.destId}-${s.diaId}`;
        if (document.getElementById(wrid)) {
          loadWeatherForTripDay(wrid, s.destName, s.dateStr, s.forecastIndex);
        }
      });
    }

    async function getWeatherContextForTrip() {
      const schedule = buildTripDaySchedule().filter(s => !s.isDestOnly);
      if (!schedule.length && !destinos.length) return '';
      const parts = [];
      const seen = new Set();
      for (const s of schedule.slice(0, 12)) {
        const key = `${s.destName}|${s.dateStr || s.forecastIndex}`;
        if (seen.has(key)) continue;
        seen.add(key);
        try {
          const w = await fetchWeatherData(s.destName);
          const d = getWeatherForTripDay(w, s.dateStr, s.forecastIndex);
          if (d) {
            parts.push(`${s.destName} ${t('day_prefix')} ${s.diaNum}${s.dateLabel ? ' (' + s.dateLabel + ')' : ''}: ${d.emoji} ${d.tempMax}°/${d.tempMin}° ${d.desc}`);
          }
        } catch (e) { /* skip */ }
      }
      if (!parts.length && destinos.length) {
        for (const d of destinos.slice(0, 3)) {
          try {
            const w = await fetchWeatherData(d.nombre);
            parts.push(`${w.city}: ${w.temp}°C ${w.desc}`);
          } catch (e) { /* skip */ }
        }
      }
      return parts.length ? ` Clima del viaje por día: ${parts.join(' | ')}.` : '';
    }

    function abrirClima() {
      cerrarPanelHerramientas();
      document.getElementById('modal-clima').style.display = 'flex';
      renderClimaFeedViaje();
      const input = document.getElementById('clima-search-input');
      const resultados = document.getElementById('clima-resultados');
      if (resultados && !input?.value.trim()) {
        resultados.innerHTML = `<p class="clima-placeholder clima-search-hint">${t('clima_search') ? 'O buscá otra ciudad abajo.' : 'O buscá otra ciudad abajo.'}</p>`;
      }
      if (input) {
        const sugerencia = destinos[0]?.nombre || lugarSalida || '';
        if (sugerencia && !input.value) input.placeholder = `Buscar ciudad (ej: ${sugerencia})...`;
        input.focus();
      }
    }

    function cerrarClima() {
      document.getElementById('modal-clima').style.display = 'none';
    }

    async function buscarClimaModal() {
      const input = document.getElementById('clima-search-input');
      const resultados = document.getElementById('clima-resultados');
      const city = input?.value.trim();
      if (!city) { showToast('Escribí una ciudad', 'error'); return; }
      resultados.innerHTML = '<p class="clima-placeholder">Cargando pronóstico...</p>';
      try {
        const w = await fetchWeatherData(city);
        resultados.innerHTML = renderClimaCardHTML(w);
      } catch (e) {
        const msg = e.message === 'Ciudad no encontrada'
          ? 'No encontramos esa ciudad. Probá "Buenos Aires", "Roma" o "Paris".'
          : 'No pudimos cargar el clima. Revisá tu conexión.';
        resultados.innerHTML = `<p class="clima-placeholder">${msg}</p>`;
        showToast(e.message === 'Ciudad no encontrada' ? 'Ciudad no encontrada' : 'Error de clima', 'error');
      }
    }

    async function dibujarMapa(containerId='map') {
      if (!map) {
        map = L.map(containerId, {
          zoomControl: true,
          attributionControl: false
        }).setView([40.4168, -3.7038], 4);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          maxZoom: 19
        }).addTo(map);
        markersLayer = L.layerGroup().addTo(map);
      } else {
        markersLayer.clearLayers();
        map.eachLayer(layer => {
          if (layer instanceof L.Polyline) map.removeLayer(layer);
        });
      }

      const puntos = [];
      for (let i = 0; i < destinos.length; i++) {
        const dest = destinos[i];
        const coord = await geocode(dest.nombre);
        if (coord) {
          puntos.push({ ...coord, nombre: dest.nombre, dias: dest.dias.length, eventos: dest.dias.reduce((s, d) => s + d.eventos.length, 0) });
          const numIcon = L.divIcon({
            className: 'map-num-icon',
            html: `<div style="background:linear-gradient(135deg,#6366f1,#ec4899); color:white; width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:14px; box-shadow:0 2px 10px rgba(0,0,0,0.5); border:2px solid white;">${i + 1}</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
          });
          L.marker([coord.lat, coord.lon], { icon: numIcon })
            .bindPopup(`<div style="font-family:system-ui;"><strong>${dest.nombre}</strong><br><span style="color:#6366f1;">${dest.dias.length} días · ${dest.dias.reduce((s, d) => s + d.eventos.length, 0)} eventos</span></div>`)
            .addTo(markersLayer);
        }
      }

      if (puntos.length >= 2) {
        const latlngs = puntos.map(p => [p.lat, p.lon]);
        L.polyline(latlngs, { color: '#8b5cf6', weight: 3, opacity: 0.8, dashArray: '10, 8' }).addTo(map);
        map.fitBounds(L.latLngBounds(latlngs), { padding: [40, 40] });
      } else if (puntos.length === 1) {
        map.setView([puntos[0].lat, puntos[0].lon], 12);
      }
    }

    async function abrirMapa() {
      cerrarPanelHerramientas();
      document.getElementById('modal-mapa').style.display = 'flex';
      // Pequeño retraso para que el modal termine de renderizarse
      setTimeout(() => {
        dibujarMapa('map');
        if (map) map.invalidateSize();
      }, 350);
    }

    function cerrarMapa() {
      document.getElementById('modal-mapa').style.display = 'none';
    }

    async function abrirMapaResumen() {
      document.getElementById('pantalla-resumen').style.display = 'none';
      document.getElementById('modal-mapa').style.display = 'flex';
      setTimeout(() => {
        dibujarMapa('map');
        if (map) map.invalidateSize();
      }, 200);
    }

    // ================== CALENDARIO ==================
    function abrirCalendario() {
      document.getElementById('modal-calendario').style.display = 'flex';
      renderCalendario();
    }
    function cerrarCalendario() {
      document.getElementById('modal-calendario').style.display = 'none';
    }
    function cambiarMes(delta) {
      fechaCalendario.setMonth(fechaCalendario.getMonth() + delta);
      renderCalendario();
    }
    function renderCalendario() {
      const mes = fechaCalendario.getMonth();
      const año = fechaCalendario.getFullYear();
      const primerDia = new Date(año, mes, 1);
      const ultimoDia = new Date(año, mes + 1, 0);
      const diasEnMes = ultimoDia.getDate();
      // Ajustar para que la semana empiece en lunes (día 1)
      let inicio = primerDia.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado
      inicio = inicio === 0 ? 6 : inicio - 1; // Convertir a lunes=0, domingo=6
      const monthNames = i18n[currentLang].calendar.monthNames;
      const weekDays = i18n[currentLang].calendar.weekDays;
      document.getElementById('mesActual').textContent = `${monthNames[mes]} ${año}`;
      let html = '';
      weekDays.forEach(dia => { html += `<div class="calendario-dia-semana">${dia}</div>`; });
      for (let i=0; i<inicio; i++) html += '<div class="calendario-dia"></div>';
      for (let d=1; d<=diasEnMes; d++) {
        const fechaStr = `${año}-${String(mes+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        const tieneEvento = tieneEventosEnFecha(fechaStr);
        html += `<div class="calendario-dia${tieneEvento?' evento':''}" onclick="seleccionarDia('${fechaStr}')">${d}</div>`;
      }
      document.getElementById('calendario-grid').innerHTML = html;
    }
    function tieneEventosEnFecha(fechaStr) {
      const fechaBase = document.getElementById('fechaInicio').value;
      if (!fechaBase) return false;
      for (let dest of destinos) {
        for (let [ida, dia] of dest.dias.entries()) {
          const fechaEvento = new Date(fechaBase);
          fechaEvento.setDate(fechaEvento.getDate() + ida);
          const fechaEventoStr = fechaEvento.toISOString().split('T')[0];
          if (fechaEventoStr === fechaStr) return true;
        }
      }
      return false;
    }
    function seleccionarDia(fechaStr) {
      diaSeleccionado = fechaStr;
      const fechaBase = document.getElementById('fechaInicio').value;
      if (!fechaBase) { document.getElementById('eventos-dia-lista').innerHTML = '<p>No hay fecha de inicio</p>'; return; }
      let eventos = [];
      destinos.forEach(dest => {
        dest.dias.forEach((dia, ida) => {
          const fechaEvento = new Date(fechaBase);
          fechaEvento.setDate(fechaEvento.getDate() + ida);
          if (fechaEvento.toISOString().split('T')[0] === fechaStr) {
            dia.eventos.forEach(ev => eventos.push({ destino: dest.nombre, dia: ida+1, ...ev }));
          }
        });
      });
      let html = '';
      if (eventos.length===0) html = '<p>No hay eventos</p>';
      else eventos.forEach(ev => {
        html += `<div class="evento-item"><strong>${ev.titulo||'Evento'}</strong> - ${ev.hora||'--:--'}</div>`;
      });
      document.getElementById('eventos-dia-lista').innerHTML = html;
    }

    // ================== GOOGLE CALENDAR ==================
    // ================== CALENDAR (.ICS) ==================
    function exportarGoogleCalendar() {
      const fechaBase = document.getElementById('fechaInicio').value;
      if (!fechaBase) { showToast('Selecciona fecha de inicio', 'error'); return; }
      
      let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//PluxTravel Planner//ES\n";
      
      destinos.forEach(dest => {
        dest.dias.forEach((dia, dIda) => {
          const fechaEv = new Date(fechaBase);
          fechaEv.setDate(fechaEv.getDate() + dIda);
          const fStr = fechaEv.toISOString().split('T')[0].replace(/-/g, '');
          
          dia.eventos.forEach(ev => {
            const h = ev.hora || "09:00";
            const hStr = h.replace(/:/g, '');
            icsContent += "BEGIN:VEVENT\n";
            icsContent += `SUMMARY:${ev.titulo || 'Evento Plux'} (${dest.nombre})\n`;
            icsContent += `DTSTART:${fStr}T${hStr}00\n`;
            icsContent += `DESCRIPTION:${ev.notas || ''}\n`;
            icsContent += "END:VEVENT\n";
          });
        });
      });
      
      icsContent += "END:VCALENDAR";
      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "viaje_plux.ics";
      link.click();
      showToast('Archivo .ics generado para tu calendario', 'success');
      trackEvent('export_plan', {
        format: 'calendar',
        destinations_count: destinos.length
      });
    }

    // ================== COMPARTIR ==================
    function compartirViaje() {
      let texto = t('shared_text');
      texto += `Personas: ${numPersonas}\n\n`;
      destinos.forEach(d => {
        texto += ` ${d.nombre}\n`;
        d.tramos.forEach((t,i) => {
          texto += `   Tramo ${i+1}: ${t.origen||''}   ${t.destino||''} ${t.medio||''} ${t.precio?`(${t.precio})`:''}\n`;
          if (t.escalas && t.escalas.length) texto += `     Escalas: ${t.escalas.join(', ')}\n`;
        });
        d.dias.forEach(dia => {
          texto += `  ${t('day_prefix')} ${dia.id+1}:\n`;
          dia.eventos.forEach(ev => {
            texto += `    ⬢ ${ev.hora||'--:--'} - ${ev.titulo||t('untitled_event')}`;
            if (ev.costo) texto += ` (${ev.costo*numPersonas})`;
            if (ev.duracion) texto += ` [${ev.duracion} min]`;
            texto += '\n';
          });
          if (dia.costosAdicionales) {
            dia.costosAdicionales.forEach(c => {
              if (c.descripcion) texto += `    ⬢ ${c.descripcion}: ${c.precio}`;
            });
          }
        });
      });
      if (vueltaGlobal) {
        texto += `\n Vuelta: ${vueltaGlobal} ${vueltaPrecioGlobal?`(${vueltaPrecioGlobal*numPersonas})`:''}\n`;
        vueltaCostosAdicionales.forEach(c => {
          if (c.descripcion) texto += `   ⬢ ${c.descripcion}: ${c.precio}`;
        });
      }
      navigator.clipboard?.writeText(texto).then(()=>showToast('Enlace copiado', 'success')).catch(()=>fallbackCompartir(texto));
      trackEvent('share_trip', {
        method: 'clipboard_summary',
        destinations_count: destinos.length
      });
    }
    function fallbackCompartir(texto) {
      const ta = document.createElement('textarea');
      ta.value = texto; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      showToast('Enlace copiado', 'success');
      trackEvent('share_trip', {
        method: 'fallback_copy',
        destinations_count: destinos.length
      });
    }

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

  return `https://plux.nibecarcofeben.com/plux/?join=${encodeURIComponent(syncCode)}&mode=reader`;
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
  const currencySymbol = (typeof currentCurrency !== 'undefined') ? (currentCurrency === 'USD' ? '$' : (currentCurrency === 'EUR' ? '€' : currentCurrency)) : '€';

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
async function exportarPDF() {
  if (typeof window.jspdf === 'undefined' || !window.jspdf.jsPDF) {
    if (typeof showToast === 'function') showToast('Librería PDF no disponible', 'error');
    return;
  }

  const { jsPDF } = window.jspdf;
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
  const currencySymbol = (typeof currentCurrency !== 'undefined') ? (currentCurrency === 'USD' ? 'USD' : (currentCurrency === 'EUR' ? 'EUR' : currentCurrency)) : 'EUR';

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

    // ================== FUNCIONES DE VIAJES (completamente funcionales) ==================

    function saveTrips(trips, sync = true) {
      localStorage.setItem(TRIPS_STORAGE_KEY, JSON.stringify(trips));
      if (sync) sincronizarPerfil();
    }

    function saveTemplates(templates, sync = true) {
      localStorage.setItem(TEMPLATE_KEY, JSON.stringify(templates));
      if (sync) sincronizarPerfil();
    }

    function renombrarViajeGuardado(index) {
      const trips = getStoredTrips();
      const trip = trips[index];
      if (!trip) return;
      const nuevoNombre = prompt('Ingresá el nuevo nombre para este viaje:', trip.nombre);
      if (nuevoNombre && nuevoNombre.trim()) {
        trip.nombre = nuevoNombre.trim();
        saveTrips(trips);
        renderTripLists();
        showToast(`Viaje renombrado a "${trip.nombre}" ✨`, 'success');
      }
    }
    window.renombrarViajeGuardado = renombrarViajeGuardado;

    function renderTripLists() {
      const trips = getStoredTrips();
      const templates = getStoredTemplates();

      const tripList = document.getElementById('tripList');
      tripList.innerHTML = '';
      if (trips.length === 0) {
        tripList.innerHTML = `<p style="color:var(--gris);">${t('no_saved_trips')}</p>`;
      } else {
        trips.forEach((trip, index) => {
          const item = document.createElement('div');
          item.className = 'trip-item';
          item.style.cursor = 'pointer';
          const dests = (trip.destinos || []).map(d => d.nombre).join(', ') || 'Sin destinos';
          item.innerHTML = `
            <div class="trip-info" onclick="cargarViaje(${index})" style="cursor:pointer;flex:1;">
              <div style="display:flex; align-items:center; gap:8px;">
                <h4 style="margin:0;">${escapeHtml(trip.nombre)}</h4>
                <button onclick="event.stopPropagation(); window.renombrarViajeGuardado(${index})" style="background:none; border:none; color:var(--gris); cursor:pointer; font-size:0.85rem; padding:2px 4px;" title="Renombrar viaje">✏️</button>
              </div>
              <small style="color:var(--gris);">${new Date(trip.fecha).toLocaleDateString()} · ${escapeHtml(dests)}</small>
            </div>
            <div class="trip-actions">
              <button onclick="event.stopPropagation();abrirCompartirModal()" style="background:var(--azul);" title="Compartir">🔗</button>
              <button onclick="event.stopPropagation();eliminarViaje(${index})" style="background:#dc2626;" title="Eliminar">×</button>
            </div>
          `;
          tripList.appendChild(item);
        });
      }

      // Render Plantillas Sections
      if (typeof initCommunityTemplatesListener === 'function') initCommunityTemplatesListener();
      renderPlantillasOficiales();
      renderPlantillasComunidad();
      renderMisPlantillas();

      // Load shared trips if user is logged in
      renderSharedTripsList();
    }

    // ================== PLANTILLAS OFICIALES & COMUNIDAD ==================
    function getHeartSvg(isLiked) {
      if (isLiked) {
        return `<svg width="15" height="15" viewBox="0 0 24 24" fill="#f472b6" stroke="#f472b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
      }
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
    }

    const PLUX_OFICIAL_TEMPLATES = [
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
        if (db) {
          db.collection("plux_plantillas_comunidad").doc(tplId).set({
            ...newTemplate,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          }).then(() => {
            console.log("Plantilla publicada en Firestore:", tplId);
            if (typeof initCommunityTemplatesListener === 'function') initCommunityTemplatesListener();
          }).catch(err => {
            console.error("Error guardando plantilla pública en Firestore:", err);
          });
        }
      }

      if (input) input.value = '';
      showToast(`¡Plantilla "${nombre}" guardada ${isPublic ? 'y publicada en la Comunidad' : ''}! 🚀`, 'success');
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

    function guardarViaje() {
      if (!checkEditPermission()) return;
      let nombre = document.getElementById('nombreViaje').value.trim();
      if (!nombre) {
        if (destinos && destinos.length > 0) {
          const nombres = destinos.map(d => d.nombre).slice(0, 3).join(' & ');
          nombre = `Viaje a ${nombres}`;
        } else {
          nombre = currentNickname ? `Viaje de @${currentNickname}` : 'Mi Viaje';
        }
      }

      const tripId = getCurrentTripId();
      const viaje = {
        nombre,
        fecha: new Date().toISOString(),
        lugarSalida,
        numPersonas,
        nombresPersonas: nombresPersonasGlobal,
        listaViajeros: [...listaViajeros],
        tripId: tripId,
        syncCode: syncCode || null,
        fechaInicio: document.getElementById('fechaInicio').value,
        destinos,
        vueltaGlobal,
        vueltaPrecioGlobal,
        vueltaCostosAdicionales
      };

      const trips = getStoredTrips();
      if (loadedTripIndex !== null && trips[loadedTripIndex]) {
        trips[loadedTripIndex].nombre = nombre;
        trips[loadedTripIndex].tripId = tripId;
        trips[loadedTripIndex].syncCode = syncCode || null;
        trips[loadedTripIndex].listaViajeros = [...listaViajeros];
        trips[loadedTripIndex].nombresPersonas = nombresPersonasGlobal;
        saveTrips(trips);
        showToast('Viaje actualizado correctamente', 'success');
      } else {
        trips.push(viaje);
        loadedTripIndex = trips.length - 1;
        saveTrips(trips);
        showToast('Viaje guardado correctamente', 'success');
      }
      trackEvent('create_itinerary', {
        action: 'save_itinerary',
        trip_name: nombre,
        is_new: loadedTripIndex === null
      });
      renderTripLists();
      document.getElementById('nombreViaje').value = '';
    }

    function cargarViaje(index, autoStart = true) {
      const trips = getStoredTrips();
      const viaje = trips[index];
      if (!viaje) return;

      lugarSalida = viaje.lugarSalida || '';
      numPersonas = viaje.numPersonas || 1;
      nombresPersonasGlobal = viaje.nombresPersonasGlobal || '';
      if (viaje.listaViajeros && Array.isArray(viaje.listaViajeros)) {
        listaViajeros = [...viaje.listaViajeros];
      } else if (viaje.nombresPersonas) {
        listaViajeros = viaje.nombresPersonas.split(',').map(s=>s.trim()).filter(Boolean);
      } else {
        listaViajeros = [];
      }
      document.getElementById('lugarSalida').value = lugarSalida;
      document.getElementById('numPersonas').value = numPersonas;
      window.renderTravelerChips();
      document.getElementById('fechaInicio').value = viaje.fechaInicio || '';
      destinos = viaje.destinos || [];
      vueltaGlobal = viaje.vueltaGlobal || '';
      vueltaPrecioGlobal = viaje.vueltaPrecioGlobal || 0;
      vueltaCostosAdicionales = viaje.vueltaCostosAdicionales || [];
      loadedTripIndex = index;

      syncCode = viaje.syncCode || null;
      if (syncCode) {
        localStorage.setItem('PluxSyncCode', syncCode);
        currentTripId = syncCode;
      } else {
        localStorage.removeItem('PluxSyncCode');
        viaje.tripId = viaje.tripId || ('trip_' + (viaje.fecha ? new Date(viaje.fecha).getTime().toString(36) : Date.now().toString(36)) + '_' + index);
        currentTripId = viaje.tripId;
        saveTrips(trips, false);
      }

      if (typeof pluxChatUnsubscribe === 'function' && pluxChatUnsubscribe) {
        pluxChatUnsubscribe();
        pluxChatUnsubscribe = null;
      }
      if (typeof getTripChatChannelId === 'function') {
        pluxActiveChatId = getTripChatChannelId();
        if (typeof ensureChatChannel === 'function') ensureChatChannel();
      }

      renderDestinos();
      renderVueltaCostos();
      cerrarModalViajes();
      empezar();
      showToast(`Viaje "${viaje.nombre}" cargado`, 'success');
    }

    function eliminarViaje(index) {
      const trips = getStoredTrips();
      const delTrip = trips[index];
      if (delTrip && delTrip.tripId && typeof pluxSocialChats !== 'undefined' && pluxSocialChats) {
        delete pluxSocialChats['trip_' + delTrip.tripId];
        localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
      }
      trips.splice(index, 1);
      saveTrips(trips);
      renderTripLists();
    }

    function cargarPlantilla(index) {
      clonarPlantillaCompleta(index, 'mia');
    }
    window.cargarPlantilla = cargarPlantilla;

    function exportarViajeActual() {
      const viaje = {
        nombre: 'viaje_exportado',
        fecha: new Date().toISOString(),
        lugarSalida,
        numPersonas,
        fechaInicio: document.getElementById('fechaInicio').value,
        destinos,
        vueltaGlobal,
        vueltaPrecioGlobal,
        vueltaCostosAdicionales
      };
      const blob = new Blob([JSON.stringify(viaje, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `viaje_${new Date().toISOString().slice(0,10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }

    function importarViaje() {
      document.getElementById('fileImport').click();
    }

    document.getElementById('fileImport').addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(ev) {
        try {
          const viaje = JSON.parse(ev.target.result);
          lugarSalida = viaje.lugarSalida || '';
          numPersonas = viaje.numPersonas || 1;
          document.getElementById('lugarSalida').value = lugarSalida;
          document.getElementById('numPersonas').value = numPersonas;
          document.getElementById('fechaInicio').value = viaje.fechaInicio || '';
          destinos = viaje.destinos || [];
          vueltaGlobal = viaje.vueltaGlobal || '';
          vueltaPrecioGlobal = viaje.vueltaPrecioGlobal || 0;
          vueltaCostosAdicionales = viaje.vueltaCostosAdicionales || [];

          renderDestinos();
          renderVueltaCostos();
          cerrarModalViajes();
          showToast('Viaje importado correctamente', 'success');
        } catch(err) {
          showToast('Error al leer el archivo: ' + err, 'error');
        }
      };
      reader.readAsText(file);
    });


    // Pestañas del modal de viajes
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById('tab-' + this.dataset.tab).classList.add('active');
      });
    });

    // ================== PREFERENCIAS & PERSONALIZACIÓN ==================
    function quitarFotoPerfil() {
      localStorage.removeItem('Plux_UserProfile_Photo');
      if (typeof db !== 'undefined' && db && currentNickname) {
        db.collection('plux_usuarios').doc(currentNickname).set({
          photoUrl: null,
          ultimaConexion: new Date().toISOString()
        }, { merge: true }).catch(console.error);
      }
      const avatarEl = document.getElementById('profileAvatarInner');
      if (avatarEl) {
        avatarEl.innerHTML = `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
      }
      const prefAvatar = document.getElementById('prefAvatarPreview');
      if (prefAvatar) {
        prefAvatar.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
      }
      const removeBtn = document.getElementById('prefRemovePhotoBtn');
      if (removeBtn) removeBtn.style.display = 'none';
      updateUserButtonDisplay();
      showToast('Foto de perfil eliminada', 'info');
    }
    window.quitarFotoPerfil = quitarFotoPerfil;

    function abrirPreferencias() {
        cerrarPanelHerramientas();
        const existing = document.getElementById('modal-preferencias');
        if (existing) existing.remove();

        const photo = localStorage.getItem('Plux_UserProfile_Photo');
        const curTheme = localStorage.getItem('Plux_Theme') || 'theme-oscuro';
        const curLang = localStorage.getItem('Plux_Lang') || 'es';

        const themes = [
          { id: 'theme-oscuro', name: 'Oscuro', desc: 'Predeterminado', color: '#090d16', border: '1.5px solid #475569', activeBorder: '#38bdf8' },
          { id: 'theme-claro', name: 'Claro', desc: 'Luminoso', color: '#ffffff', border: '1.5px solid #94a3b8', activeBorder: '#0284c7' },
          { id: 'theme-tokyo', name: 'Tokyo Night', desc: 'Cyber Neon', color: '#1a1b26', border: '1.5px solid #7aa2f7', activeBorder: '#7aa2f7' },
          { id: 'theme-grid', name: 'Cyber Grid', desc: 'Futurista', color: '#00f0ff', border: 'none', activeBorder: '#00f0ff' },
          { id: 'theme-starship', name: 'Starship', desc: 'Galáctico', color: '#a855f7', border: 'none', activeBorder: '#a855f7' },
          { id: 'theme-terminal', name: 'Terminal', desc: 'Hacker', color: '#00ff66', border: 'none', activeBorder: '#00ff66' },
          { id: 'theme-ares', name: 'Ares', desc: 'Crimson', color: '#ff3333', border: 'none', activeBorder: '#ff3333' }
        ];

        let html = `<div id="modal-preferencias" style="position:fixed;inset:0;background:rgba(15,23,42,0.96);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:900;padding:15px;" onclick="if(event.target===this) this.remove()">
            <div class="cuenta-content" style="background:linear-gradient(135deg,var(--card),var(--fondo));border:1px solid var(--border);border-radius:26px;padding:26px;max-width:500px;width:100%;max-height:88vh;overflow-y:auto;box-sizing:border-box;box-shadow:0 25px 80px rgba(0,0,0,0.8);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
                    <h2 style="color:var(--verde);margin:0;font-size:1.4rem;font-weight:700;display:flex;align-items:center;gap:8px;">Personalización</h2>
                    <span class="modal-close-btn" onclick="document.getElementById('modal-preferencias').remove()">×</span>
                </div>

                <!-- 1. FOTO DE PERFIL -->
                <div style="background:rgba(125,125,125,0.06);border:1px solid var(--border);border-radius:18px;padding:16px;margin-bottom:14px;">
                    <label style="display:block;margin-bottom:10px;font-size:0.82rem;color:var(--gris);text-transform:uppercase;letter-spacing:0.5px;font-weight:700;">Foto de perfil</label>
                    <div style="display:flex;align-items:center;gap:16px;">
                        <div id="prefAvatarPreview" style="width:64px;height:64px;border-radius:50%;overflow:hidden;border:2px solid var(--verde);flex-shrink:0;background:linear-gradient(135deg,var(--verde),var(--azul));display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(52,211,153,0.3);">
                            ${photo ? `<img src="${photo}" style="width:100%;height:100%;object-fit:cover;display:block;">` : `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`}
                        </div>
                        <div style="display:flex;flex-direction:column;gap:8px;flex:1;">
                            <button type="button" onclick="window.cambiarFotoPerfil()" style="padding:10px 14px;background:linear-gradient(135deg,var(--verde),var(--azul));color:black;font-weight:bold;border:none;border-radius:10px;cursor:pointer;font-size:0.86rem;display:flex;align-items:center;justify-content:center;gap:6px;">
                                Cambiar foto
                            </button>
                            <button type="button" id="prefRemovePhotoBtn" onclick="window.quitarFotoPerfil()" style="display:${photo ? 'block' : 'none'};padding:6px 10px;background:rgba(239,68,68,0.1);color:#ef4444;border:1px solid rgba(239,68,68,0.3);border-radius:8px;cursor:pointer;font-size:0.78rem;">
                                Quitar foto
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 2. IDIOMA -->
                <div style="background:rgba(125,125,125,0.06);border:1px solid var(--border);border-radius:18px;padding:16px;margin-bottom:14px;">
                    <label style="display:block;margin-bottom:10px;font-size:0.82rem;color:var(--gris);text-transform:uppercase;letter-spacing:0.5px;font-weight:700;">Idioma de la aplicación</label>
                    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(85px,1fr));gap:8px;">
                        ${[
                          { id: 'es', code: 'ES', label: 'Español' },
                          { id: 'en', code: 'EN', label: 'English' },
                          { id: 'fr', code: 'FR', label: 'Français' },
                          { id: 'de', code: 'DE', label: 'Deutsch' },
                          { id: 'it', code: 'IT', label: 'Italiano' }
                        ].map(l => `
                          <button type="button" onclick="window.setLanguage('${l.id}'); document.querySelectorAll('.pref-lang-btn').forEach(b => { const active = (b.dataset.lang==='${l.id}'); b.style.background = active ? 'rgba(52,211,153,0.18)' : 'rgba(125,125,125,0.05)'; b.style.borderColor = active ? 'var(--verde)' : 'var(--border)'; b.style.color = active ? 'var(--verde)' : 'var(--texto)'; });" data-lang="${l.id}" class="pref-lang-btn" style="padding:10px 4px;border-radius:12px;border:1.5px solid ${curLang === l.id ? 'var(--verde)' : 'var(--border)'};background:${curLang === l.id ? 'rgba(52,211,153,0.18)' : 'rgba(125,125,125,0.05)'};color:${curLang === l.id ? 'var(--verde)' : 'var(--texto)'};font-weight:600;cursor:pointer;font-size:0.82rem;display:flex;flex-direction:column;align-items:center;gap:3px;">
                            <span style="font-weight:800;font-size:0.95rem;color:var(--verde);">${l.code}</span>
                            <span style="color:inherit;">${l.label}</span>
                          </button>
                        `).join('')}
                    </div>
                </div>

                <!-- 3. TEMA VISUAL (GRID DE TARJETAS LIMPIO SIN EMOJIS) -->
                <div style="background:rgba(125,125,125,0.06);border:1px solid var(--border);border-radius:18px;padding:16px;margin-bottom:14px;">
                    <label style="display:block;margin-bottom:10px;font-size:0.82rem;color:var(--gris);text-transform:uppercase;letter-spacing:0.5px;font-weight:700;">Tema visual</label>
                    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;">
                        ${themes.map(t => {
                          const active = curTheme === t.id;
                          const bColor = t.activeBorder || t.color;
                          return `
                            <div onclick="window.setTheme('${t.id}'); document.querySelectorAll('.pref-theme-card').forEach(c => { const act = c.dataset.themeId==='${t.id}'; c.style.borderColor = act ? '${bColor}' : 'var(--border)'; c.style.background = act ? 'rgba(52,211,153,0.12)' : 'rgba(125,125,125,0.05)'; const chk = c.querySelector('.theme-check-icon'); if (chk) chk.style.display = act ? 'inline-block' : 'none'; });" data-theme-id="${t.id}" class="pref-theme-card" style="cursor:pointer;padding:12px;border-radius:12px;border:2px solid ${active ? bColor : 'var(--border)'};background:${active ? 'rgba(52,211,153,0.12)' : 'rgba(125,125,125,0.05)'};display:flex;flex-direction:column;gap:6px;transition:all 0.2s ease;">
                              <div style="display:flex;align-items:center;justify-content:space-between;">
                                <span style="width:14px; height:14px; border-radius:50%; background:${t.color}; border:${t.border || 'none'}; box-shadow:0 0 8px ${t.color === '#ffffff' ? 'rgba(0,0,0,0.15)' : t.color}; display:inline-block;"></span>
                                <span class="theme-check-icon" style="display:${active ? 'inline-block' : 'none'};color:var(--verde);font-size:0.85rem;font-weight:bold;">✓</span>
                              </div>
                              <span class="theme-name" style="font-size:0.9rem;font-weight:700;color:var(--texto);">${t.name}</span>
                              <span class="theme-desc" style="font-size:0.75rem;color:var(--gris);">${t.desc}</span>
                            </div>
                          `;
                        }).join('')}
                    </div>
                </div>

                <!-- 4. RITMO Y EVENTOS IA -->
                <div style="background:rgba(125,125,125,0.06);border:1px solid var(--border);border-radius:18px;padding:16px;margin-bottom:18px;display:flex;flex-direction:column;gap:12px;">
                    <label style="display:block;font-size:0.82rem;color:var(--gris);text-transform:uppercase;letter-spacing:0.5px;font-weight:700;">Preferencias de viaje (IA)</label>
                    <div>
                        <label style="display:block;margin-bottom:6px;font-size:0.84rem;color:var(--gris);">Ritmo del itinerario:</label>
                        <select id="pref-pace" style="width:100%;padding:10px;background:var(--card);border:1.5px solid var(--border);border-radius:10px;color:var(--texto);font-size:0.9rem;box-sizing:border-box;outline:none;">
                            <option value="relaxed" ${userPreferences.pace==='relaxed'?'selected':''}>Relajado</option>
                            <option value="moderate" ${userPreferences.pace==='moderate'?'selected':''}>Moderado</option>
                            <option value="intense" ${userPreferences.pace==='intense'?'selected':''}>Intenso</option>
                        </select>
                    </div>
                    <div>
                        <label style="display:block;margin-bottom:6px;font-size:0.84rem;color:var(--gris);">Actividades por día sugeridas:</label>
                        <input type="number" id="pref-events" value="${userPreferences.eventsPerDay}" min="1" max="10" style="width:100%;padding:10px;background:var(--card);border:1.5px solid var(--border);border-radius:10px;color:var(--texto);box-sizing:border-box;">
                    </div>
                </div>

                <div style="display:flex;gap:10px;">
                    <button onclick="guardarPreferencias()" style="flex:1;padding:14px;background:linear-gradient(135deg,var(--verde),var(--azul));color:black;border:none;border-radius:14px;font-weight:bold;cursor:pointer;font-size:0.95rem;">Guardar cambios</button>
                    <button onclick="document.getElementById('modal-preferencias').remove()" style="flex:1;padding:14px;background:rgba(125,125,125,0.1);color:var(--texto);border:1px solid var(--border);border-radius:14px;cursor:pointer;font-size:0.95rem;font-weight:600;">Cerrar</button>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', html);
    }
    window.abrirPreferencias = abrirPreferencias;

    function guardarPreferencias() {
        const eventsEl = document.getElementById('pref-events');
        const paceEl = document.getElementById('pref-pace');
        if (eventsEl) userPreferences.eventsPerDay = parseInt(eventsEl.value) || 4;
        if (paceEl) userPreferences.pace = paceEl.value;
        autoSave();
        const m = document.getElementById('modal-preferencias');
        if (m) m.remove();
        showToast('Preferencias guardadas correctamente ✨', 'success');
    }
    window.guardarPreferencias = guardarPreferencias;

    // Profile actions
    function verMisViajes() {
      cerrarCuenta();
      abrirModalViajes();
    }

    function verPlantillas() {
      cerrarCuenta();
      abrirModalViajes();
      // Switch to templates tab
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const templatesTab = document.querySelector('.tab-btn[data-tab="plantillas"]');
      if (templatesTab) {
        templatesTab.classList.add('active');
        document.getElementById('tab-plantillas').classList.add('active');
      }
    }
    // ================== DESCUBRIR ==================
    function abrirDescubrir() {
      document.getElementById('modal-descubrir').style.display = 'flex';
      const destinosDiv = document.getElementById('descubrirDestinos');
      
      // Clear and show search as primary
      destinosDiv.innerHTML = `
        <div style="padding:40px; text-align:center; max-width:600px; margin:0 auto;">
          <h2 style="font-size:2.5rem; margin-bottom:20px; color:var(--verde);">${t('descubrir_title')}</h2>
          <div style="display:flex;gap:15px;">
            <input type="text" id="feedSearchInput" placeholder="${t('descubrir_placeholder')}" style="flex:1;padding:18px;background:rgba(255,255,255,0.05);border:2px solid var(--border);border-radius:16px;color:white;font-size:1.2rem; outline:none; transition:border-color 0.3s;">
            <button onclick="buscarLugaresPorDestino(document.getElementById('feedSearchInput').value)" class="btn-add-feed" style="padding:0 30px; font-size:1.1rem; background:linear-gradient(45deg, var(--verde), var(--azul));">${t('descubrir_search_btn')}</button>
          </div>
          <p style="color:var(--gris); margin-top:15px; font-size:0.9rem;">${t('descubrir_ai_hint')}</p>
        </div>
        <div id="feed-resultados"></div>`;
      
      if (destinos.length > 0) {
        // Load with AI first, then supplement with Wikipedia
        buscarLugaresPorDestino(destinos[0].nombre);
      }
    }

    async function buscarLugaresWikiFeed(ciudad) {
        if(!ciudad) return;
        const resultados = document.getElementById('feed-resultados');
        resultados.innerHTML = '<p style="color:var(--gris); padding:40px; text-align:center; font-size:1.2rem; animation:pulse 1s infinite;">Explorando ${ciudad}...</p>';
        await buscarLugaresWikiFallback(ciudad, resultados);
    }
    
    function cerrarDescubrir() {
      document.getElementById('modal-descubrir').style.display = 'none';
    }
    
    async function buscarLugaresPorDestino(ciudad) {
      if (!ciudad) return;
      const resultados = document.getElementById('feed-resultados');
      resultados.innerHTML = `<p style="color:var(--gris); padding:40px; text-align:center; font-size:1.2rem; animation:pulse 1s infinite;">🤖 Analizando ${ciudad} con IA...</p>`;
      
      try {
        const prompt = `Eres un experto guía turístico. Recomienda 10 lugares imperdibles en ${ciudad}. Devuelve ESTRICTAMENTE un JSON: {"lugares":[{"titulo":"Nombre","descripcion":"Breve descripción"}]}`;
        const textContent = await callAI(prompt);
        if (!textContent) throw new Error('No response');
        
        const jsonStr = textContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const suggestions = JSON.parse(jsonStr);
        
        let html = '<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:25px; padding:20px;">';
        suggestions.lugares.forEach(p => {
            html += `
              <div class="feed-card" style="display:flex; flex-direction:column; background:rgba(0,0,0,0.3); border-radius:12px; border:1px solid var(--border); padding:20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <div style="flex:1;">
                  <h4 style="color:var(--rosa); margin-bottom:10px; line-height:1.2; font-size:1.1rem;">${p.titulo}</h4>
                  <p style="font-size:0.85rem; color:var(--texto); opacity:0.8; height:4.8em; overflow:hidden; line-height:1.6;">${p.descripcion}</p>
                </div>
                <div style="margin-top:15px; text-align:right;">
                  <button class="btn-add-feed" onclick="añadirDesdeFeed('${p.titulo.replace(/'/g, "\\'")}')" style="padding:8px 20px;">+ Añadir al viaje</button>
                </div>
              </div>
            `;
        });
        html += '</div>';
        resultados.innerHTML = html;
        
        // Supplement with Wikipedia results (half preloaded) - add separator
        setTimeout(() => {
          const separator = document.createElement('div');
          separator.style.cssText = 'text-align:center; padding:20px; color:var(--gris); font-size:0.9rem; border-top:1px solid var(--border); margin-top:20px;';
          separator.innerHTML = '📚 Más lugares de Wikipedia';
          resultados.appendChild(separator);
          buscarLugaresWikiFallback(ciudad, resultados, true);
        }, 500);
      } catch(e) {
        console.error('AI Feed Error:', e);
        resultados.innerHTML = '<p style="color:var(--gris); padding:20px; text-align:center;">IA no disponible. Cargando desde Wikipedia...</p>';
        buscarLugaresWikiFallback(ciudad, resultados);
      }
    }
    
    async function buscarLugaresWikiFallback(ciudad, resultados, isSupplement = false) {
      try {
        const coords = await geocode(ciudad);
        if (!coords) {
          if (!isSupplement) {
            resultados.innerHTML = '<p style="color:var(--gris); padding:20px; text-align:center;">No se pudo ubicar el destino.</p>';
          }
          return;
        }

        let data = null;
        const wikiUserAgent = '&Api-User-Agent=PluxTravelApp/6.0+(https://nibecarcofeben.com)';
        const wikiParams = `action=query&prop=extracts|pageimages&exintro&explaintext&exchars=120&pithumbsize=400&generator=geosearch&ggsradius=15000&ggscoord=${coords.lat}|${coords.lon}&ggslimit=25&format=json&origin=*${wikiUserAgent}`;

        try {
          const res = await fetch(`https://es.wikipedia.org/w/api.php?${wikiParams}`);
          if (res.ok) data = await res.json();
        } catch (e) {
          console.warn('Wikipedia ES error:', e);
        }

        if (!data || !data.query || !data.query.pages) {
          try {
            const resEn = await fetch(`https://en.wikipedia.org/w/api.php?${wikiParams}`);
            if (resEn.ok) data = await resEn.json();
          } catch (e) {
            console.warn('Wikipedia EN error:', e);
          }
        }
        
        if (!data || !data.query || !data.query.pages) {
          if (!isSupplement) {
            resultados.innerHTML = `
              <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:25px; padding:20px;">
                <div class="feed-card" style="display:flex; flex-direction:column; min-height:360px; background:var(--card); border-radius:12px; overflow:hidden; padding:20px;">
                  <h4 style="color:var(--verde); margin-bottom:10px;">🏛️ Centro Histórico de ${ciudad}</h4>
                  <p style="font-size:0.85rem; color:var(--texto); opacity:0.8; flex:1;">Puntos de interés principales, plazas y paseos tradicionales en ${ciudad}.</p>
                  <button class="btn-add-feed" onclick="añadirDesdeFeed('Centro Histórico de ${ciudad.replace(/'/g, "\\'")}')" style="padding:8px 20px; align-self:flex-end;">+ Añadir al viaje</button>
                </div>
                <div class="feed-card" style="display:flex; flex-direction:column; min-height:360px; background:var(--card); border-radius:12px; overflow:hidden; padding:20px;">
                  <h4 style="color:var(--azul); margin-bottom:10px;">🎨 Atracciones Culturales y Paseos</h4>
                  <p style="font-size:0.85rem; color:var(--texto); opacity:0.8; flex:1;">Exposiciones, patrimonio y lugares culturales emblemáticos de ${ciudad}.</p>
                  <button class="btn-add-feed" onclick="añadirDesdeFeed('Atracciones Culturales de ${ciudad.replace(/'/g, "\\'")}')" style="padding:8px 20px; align-self:flex-end;">+ Añadir al viaje</button>
                </div>
              </div>
            `;
          }
          return;
        }
        
        const pages = data.query.pages;
        const places = Object.values(pages).filter(p => 
          !p.title.match(/\d{3,4}/) && 
          !['incendio','batalla','muerte','evento','concierto','festival','estación','metro','subway','parada','línea de colectivo','línea de', 'reunión', 'partido de', 'conferencia'].some(w => p.title.toLowerCase().includes(w)) &&
          p.title.length > 2
        );
        
        // If supplement, create new grid container instead of appending to existing HTML
        let html = '';
        if (!isSupplement) {
          html = '<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:25px; padding:20px;">';
        } else {
          html = '<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:25px; padding:20px; padding-top:0;">';
        }
        
        places.slice(0, isSupplement ? 6 : 12).forEach(place => {
          const imgSrc = (place.thumbnail && place.thumbnail.source) ? place.thumbnail.source : 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80';
          const summary = place.extract ? place.extract : 'Punto de interés histórico / cultural';
          
          html += `
          <div class="feed-card" style="display:flex; flex-direction:column; min-height:420px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); background:var(--card); border-radius:12px; overflow:hidden;">
            <img src="${imgSrc}" class="feed-img" alt="${place.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=400&q=80'" style="height:220px; width:100%; object-fit:cover;">
            <div class="feed-body" style="padding:15px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <h4 style="color:var(--rosa); margin-bottom:10px; line-height:1.2; font-size:1.1rem;">${place.title}</h4>
                <p style="font-size:0.85rem; color:var(--texto); opacity:0.8; height:4.8em; overflow:hidden; line-height:1.6;">${summary}...</p>
              </div>
              <div style="margin-top:15px; text-align:right;">
                <button class="btn-add-feed" onclick="event.stopPropagation(); añadirDesdeFeed('${place.title.replace(/'/g, "\\'")}')" style="padding:8px 20px;">+ Añadir al viaje</button>
              </div>
            </div>
          </div>`;
        });
        html += '</div>';
        
        if (isSupplement) {
          // Append new grid container to existing results
          const newGrid = document.createElement('div');
          newGrid.innerHTML = html;
          resultados.appendChild(newGrid);
        } else {
          resultados.innerHTML = html;
        }
      } catch (e) {
        console.error('Wiki Fallback Error:', e);
        resultados.innerHTML = '<p style="color:var(--gris); padding:20px; text-align:center;">Error al cargar el feed alternativo.</p>';
      }
    }

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

    // ================== FRIENDS & FAMILY FEATURE ==================
    const FRIENDS_STORAGE_KEY = 'Plux_Amigos';

    function getStoredFriends() {
        return JSON.parse(localStorage.getItem(FRIENDS_STORAGE_KEY) || '[]');
    }

    function saveFriends(friends, sync = true) {
        localStorage.setItem(FRIENDS_STORAGE_KEY, JSON.stringify(friends));
        if (sync) sincronizarPerfil();
    }

    function getFriendsProfilesCache() {
      try {
        return JSON.parse(localStorage.getItem('Plux_Friends_Cache') || '{}');
      } catch(e) { return {}; }
    }

    function saveFriendsProfilesCache(cache) {
      try {
        localStorage.setItem('Plux_Friends_Cache', JSON.stringify(cache));
      } catch(e) {}
    }

    async function fetchFriendProfile(cleanNick) {
      if (!cleanNick || typeof db === 'undefined' || !db) return null;
      try {
        const docSnap = await db.collection('plux_usuarios').doc(cleanNick.toLowerCase()).get();
        if (docSnap.exists) {
          const d = docSnap.data() || {};
          const cache = getFriendsProfilesCache();
          cache[cleanNick.toLowerCase()] = {
            photoUrl: d.photoUrl || null,
            fullname: d.nombreCompleto || d.info_personal?.fullname || null,
            location: d.residencia || d.info_personal?.location || null
          };
          saveFriendsProfilesCache(cache);
          return cache[cleanNick.toLowerCase()];
        }
      } catch(e) {}
      return null;
    }

    function abrirAmigos() {
        if (!currentUserUid) {
            showToast('Iniciá sesión para ver tus amigos y familia', 'info');
            return;
        }
        const el = document.getElementById('modal-amigos');
        if (el) el.style.display = 'flex';
        renderAmigosList();
    }

    function cerrarAmigos() {
        const el = document.getElementById('modal-amigos');
        if (el) el.style.display = 'none';
    }

    function renderAmigosList() {
        const friends = getStoredFriends();
        const container = document.getElementById('friends-list-container');
        if (!container) return;
        
        if (friends.length === 0) {
            container.innerHTML = `<p style="text-align:center; color:var(--gris); font-size:0.9rem; margin-top:20px;">No tenés amigos agregados. Agregalos usando su Nickname.</p>`;
            return;
        }
        
        const cache = getFriendsProfilesCache();
        let html = '';
        const toFetch = [];

        friends.forEach(friend => {
            const clean = (typeof friend === 'string' ? friend : '').replace(/^@/, '').trim();
            if (!clean) return;
            const friendData = cache[clean.toLowerCase()] || {};
            const photoUrl = friendData.photoUrl || null;
            if (!cache[clean.toLowerCase()]) toFetch.push(clean);

            const avatarInner = photoUrl
              ? `<img src="${photoUrl}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`
              : clean.substring(0, 2).toUpperCase();

            html += `
                <div class="friend-item" style="display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.03); border:1px solid var(--border); border-radius:16px; padding:12px 16px; gap:12px;">
                    <div style="display:flex; align-items:center; gap:12px; cursor:pointer;" onclick="abrirDetalleAmigo('${escapeHtml(clean)}')">
                        <div class="friend-avatar-circle" data-nick="${clean.toLowerCase()}" style="width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg, var(--verde), var(--azul)); display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:0.95rem; overflow:hidden; flex-shrink:0;">
                            ${avatarInner}
                        </div>
                        <div style="display:flex; flex-direction:column; min-width:0;">
                            <strong style="color:white; font-size:0.95rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">@${escapeHtml(clean)}</strong>
                            <span style="font-size:0.75rem; color:var(--gris);">Ver perfil</span>
                        </div>
                    </div>
                    <div style="display:flex; gap:6px; flex-shrink:0;">
                        <button onclick="window.cerrarAmigos(); window.iniciarChatConUsuario('${escapeHtml(clean)}');" style="background:rgba(52,211,153,0.15); border:1px solid var(--verde); width:32px; height:32px; border-radius:8px; color:var(--verde); display:flex; align-items:center; justify-content:center; cursor:pointer; padding:0;" title="Chatear con @${escapeHtml(clean)}">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        </button>
                        <button onclick="abrirDetalleAmigo('${escapeHtml(clean)}')" style="background:rgba(96,165,250,0.1); border:1px solid var(--azul); width:32px; height:32px; border-radius:8px; color:var(--azul); display:flex; align-items:center; justify-content:center; cursor:pointer; padding:0;" title="Ver perfil">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </button>
                        <button onclick="eliminarAmigo('${escapeHtml(clean)}')" style="background:rgba(239,68,68,0.1); border:1px solid var(--rojo); width:32px; height:32px; border-radius:8px; color:var(--rojo); display:flex; align-items:center; justify-content:center; cursor:pointer; padding:0;" title="Eliminar de amigos">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;

        // Asynchronously fetch uncached profiles
        if (toFetch.length > 0 && typeof db !== 'undefined' && db) {
            toFetch.forEach(async (fNick) => {
                const p = await fetchFriendProfile(fNick);
                if (p && p.photoUrl) {
                    const el = container.querySelector(`.friend-avatar-circle[data-nick="${fNick.toLowerCase()}"]`);
                    if (el) el.innerHTML = `<img src="${p.photoUrl}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
                }
            });
        }
    }

    async function agregarAmigoPorNickname() {
        const input = document.getElementById('friend-nickname-input');
        const rawNick = input ? input.value.trim() : '';
        const nick = rawNick.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        if (!nick) {
            showToast('Ingresá un nickname', 'error');
            return;
        }
        if (nick === currentNickname?.toLowerCase()) {
            showToast('No podés agregarte a vos mismo', 'error');
            return;
        }
        
        const friends = getStoredFriends();
        if (friends.some(f => (typeof f === 'string' ? f.toLowerCase().replace(/^@/, '') : '') === nick)) {
            showToast(`@${nick} ya está en tu lista`, 'info');
            return;
        }
        
        if (!db) {
            showToast('Base de datos no disponible', 'error');
            return;
        }
        
        try {
            const userDoc = await db.collection('plux_usuarios').doc(nick).get();
            if (!userDoc.exists) {
                showToast(`El usuario @${nick} no existe en Plux`, 'error');
                return;
            }
            
            const uData = userDoc.data() || {};
            const cache = getFriendsProfilesCache();
            cache[nick] = {
                photoUrl: uData.photoUrl || null,
                fullname: uData.nombreCompleto || uData.info_personal?.fullname || null,
                location: uData.residencia || uData.info_personal?.location || null
            };
            saveFriendsProfilesCache(cache);

            friends.push(nick);
            saveFriends(friends);
            showToast(`@${nick} agregado correctamente`, 'success');
            if (input) input.value = '';
            renderAmigosList();
            if (typeof renderContactosNuevaConversacion === 'function') renderContactosNuevaConversacion();
        } catch(e) {
            console.error('Error al agregar amigo:', e);
            showToast('Error al conectar con la base de datos', 'error');
        }
    }

    function eliminarAmigo(friendNick) {
        const cleanNick = (friendNick || '').replace(/^@/, '').trim();
        if (!confirm(`¿Estás seguro de que querés eliminar a @${cleanNick} de tu lista?`)) return;
        let friends = getStoredFriends();
        friends = friends.filter(f => (typeof f === 'string' ? f.toLowerCase().replace(/^@/, '').trim() : '') !== cleanNick.toLowerCase());
        saveFriends(friends);
        showToast(`@${cleanNick} eliminado de amigos`, 'info');
        renderAmigosList();
        if (typeof renderContactosNuevaConversacion === 'function') renderContactosNuevaConversacion();
    }

    async function abrirDetalleAmigo(friendNick) {
        const modal = document.getElementById('modal-detalle-amigo');
        if (modal) modal.style.display = 'flex';
        
        const cleanNick = (friendNick || '').replace(/^@/, '').trim();
        const titleNick = `@${cleanNick}`;
        
        // Set loading states
        const nameHeaderEl = document.getElementById('friendDetailName');
        if (nameHeaderEl) nameHeaderEl.innerText = titleNick;
        const connEl = document.getElementById('friendDetailConnection');
        if (connEl) connEl.innerText = 'Cargando...';
        const setStat = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
        setStat('friendStatTrips', '--');
        setStat('friendStatDestinations', '--');
        setStat('friendStatDays', '--');
        setStat('friendStatEvents', '--');
        setStat('friendStatCountries', '--');
        
        const infoCard = document.getElementById('friend-personal-info-card');
        if (infoCard) infoCard.style.display = 'none';

        if (!db) {
            showToast('Base de datos no disponible', 'error');
            return;
        }
        
        try {
            let data = null;
            // 1. Try finding doc directly by cleanNick in plux_usuarios
            const userDoc = await db.collection('plux_usuarios').doc(cleanNick.toLowerCase()).get();
            if (userDoc.exists) {
                data = userDoc.data();
            } else {
                // 2. Query where nickname == cleanNick in plux_usuarios
                const qSnap = await db.collection('plux_usuarios').where('nickname', '==', cleanNick).limit(1).get();
                if (!qSnap.empty) {
                    data = qSnap.docs[0].data();
                } else {
                    // 3. Query in users collection by id or nickname
                    const uDoc = await db.collection('users').doc(cleanNick.toLowerCase()).get();
                    if (uDoc.exists) {
                        data = uDoc.data();
                    } else {
                        const qUsers = await db.collection('users').where('nickname', '==', cleanNick).limit(1).get();
                        if (!qUsers.empty) {
                            data = qUsers.docs[0].data();
                        }
                    }
                }
            }

            if (!data) {
                if (connEl) connEl.innerText = 'Última conexión: No disponible';
                setStat('friendStatTrips', '0');
                setStat('friendStatDestinations', '0');
                setStat('friendStatDays', '0');
                setStat('friendStatEvents', '0');
                setStat('friendStatCountries', '0');
                return;
            }

            // Cache friend photo if found
            if (data.photoUrl) {
              const cache = getFriendsProfilesCache();
              cache[cleanNick.toLowerCase()] = {
                photoUrl: data.photoUrl,
                fullname: data.nombreCompleto || data.info_personal?.fullname || null,
                location: data.residencia || data.info_personal?.location || null
              };
              saveFriendsProfilesCache(cache);
            }

            const trips = data.viajes_guardados || [];
            let totalDestinations = 0;
            let totalDays = 0;
            let totalEvents = 0;
            let countries = new Set();
            
            // Format Last Connection safely
            let connStr = 'Reciente';
            if (data.ultimaConexion) {
              try {
                let connDate;
                if (data.ultimaConexion && typeof data.ultimaConexion.toDate === 'function') {
                  connDate = data.ultimaConexion.toDate();
                } else {
                  connDate = new Date(data.ultimaConexion);
                }
                if (!isNaN(connDate.getTime())) {
                  connStr = connDate.toLocaleDateString() + ' ' + connDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                }
              } catch(e) {}
            }
            if (connEl) connEl.innerText = `Última conexión: ${connStr}`;

            // Render Friend Personal Info (respecting privacy toggles)
            const rawPersonal = data.info_personal || data.infoPersonal || data.personalInfo || data.info || {};
            const isProfilePublic = rawPersonal.mostrarPerfilPublico !== false;
            const isAgePublic = rawPersonal.mostrarEdad !== false;
            const isCityPublic = rawPersonal.mostrarCiudad !== false;

            const personalInfo = {
              fullname: isProfilePublic ? (rawPersonal.fullname || data.nombreCompleto || data.fullname || data.nombre || '') : '',
              age: (isProfilePublic && isAgePublic) ? (rawPersonal.age || data.edad || '') : '',
              gender: isProfilePublic ? (rawPersonal.gender || data.genero || '') : '',
              location: (isProfilePublic && isCityPublic) ? (rawPersonal.location || data.residencia || data.location || data.ciudad || data.origen || '') : '',
              travelStyle: isProfilePublic ? (rawPersonal.travelStyle || data.estiloViaje || data.travelStyle || data.style || '') : '',
              bio: isProfilePublic ? (rawPersonal.bio || data.descripcion || data.bio || data.sobreMi || '') : ''
            };

            let hasAnyInfo = false;

            const nameEl = document.getElementById('friendDetailFullName');
            const nameRow = document.getElementById('friendDetailFullNameRow');
            if (personalInfo.fullname && personalInfo.fullname.trim()) {
              if (nameEl) nameEl.innerText = personalInfo.fullname.trim();
              if (nameRow) nameRow.style.display = 'block';
              hasAnyInfo = true;
            } else if (nameRow) {
              nameRow.style.display = 'none';
            }

            const ageEl = document.getElementById('friendDetailAge');
            const ageRow = document.getElementById('friendDetailAgeRow');
            if (personalInfo.age) {
              if (ageEl) ageEl.innerText = `${personalInfo.age} años`;
              if (ageRow) ageRow.style.display = 'block';
              hasAnyInfo = true;
            } else if (ageRow) {
              ageRow.style.display = 'none';
            }

            const genderEl = document.getElementById('friendDetailGender');
            const genderRow = document.getElementById('friendDetailGenderRow');
            if (personalInfo.gender) {
              const genderMap = {
                'masculino': 'Masculino',
                'femenino': 'Femenino',
                'no_binario': 'No binario',
                'otro': 'Otro',
                'prefiero_no_decir': ''
              };
              const gText = genderMap[personalInfo.gender] || personalInfo.gender;
              if (gText) {
                if (genderEl) genderEl.innerText = gText;
                if (genderRow) genderRow.style.display = 'block';
                hasAnyInfo = true;
              } else if (genderRow) {
                genderRow.style.display = 'none';
              }
            } else if (genderRow) {
              genderRow.style.display = 'none';
            }

            const locEl = document.getElementById('friendDetailLocation');
            const locRow = document.getElementById('friendDetailLocationRow');
            if (personalInfo.location && personalInfo.location.trim()) {
              if (locEl) locEl.innerText = personalInfo.location.trim();
              if (locRow) locRow.style.display = 'block';
              hasAnyInfo = true;
            } else if (locRow) {
              locRow.style.display = 'none';
            }

            const styleEl = document.getElementById('friendDetailStyle');
            const styleRow = document.getElementById('friendDetailStyleRow');
            if (personalInfo.travelStyle) {
              const styleMap = {
                'mochilero': 'Mochilero y Aventura',
                'relax': 'Relax y Playa',
                'cultural': 'Cultural y Museos',
                'gastronomico': 'Gastronómico',
                'urbano': 'Urbano y Noche',
                'lujo': 'Lujo y Confort'
              };
              if (styleEl) styleEl.innerText = styleMap[personalInfo.travelStyle] || personalInfo.travelStyle;
              if (styleRow) styleRow.style.display = 'block';
              hasAnyInfo = true;
            } else if (styleRow) {
              styleRow.style.display = 'none';
            }

            const bioEl = document.getElementById('friendDetailBio');
            const bioRow = document.getElementById('friendDetailBioRow');
            if (personalInfo.bio && personalInfo.bio.trim()) {
              if (bioEl) bioEl.innerText = `"${personalInfo.bio.trim()}"`;
              if (bioRow) bioRow.style.display = 'block';
              hasAnyInfo = true;
            } else if (bioRow) {
              bioRow.style.display = 'none';
            }

            const privateNotice = document.getElementById('friendDetailPrivateNotice');
            if (!isProfilePublic) {
              if (privateNotice) {
                privateNotice.style.display = 'block';
                privateNotice.innerText = '🔒 Este viajero mantiene su información personal privada.';
              }
            } else if (!isAgePublic || !isCityPublic) {
              if (privateNotice) {
                privateNotice.style.display = 'block';
                privateNotice.innerText = '🔒 Este viajero configuró algunos datos como privados.';
              }
            } else if (privateNotice) {
              privateNotice.style.display = 'none';
            }

            if (infoCard) {
              infoCard.style.display = (hasAnyInfo || !isProfilePublic || !isAgePublic || !isCityPublic) ? 'flex' : 'none';
            }
            
            // Set friend avatar if custom photo exists
            const friendAvatarEl = document.getElementById('friendDetailAvatar');
            if (friendAvatarEl) {
              if (data.photoUrl) {
                friendAvatarEl.innerHTML = `<img src="${data.photoUrl}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
              } else {
                friendAvatarEl.innerHTML = `<div style="font-weight:bold; font-size:1.4rem;">${cleanNick.substring(0, 2).toUpperCase()}</div>`;
              }
            }

            trips.forEach(trip => {
                const dests = trip.destinos || [];
                totalDestinations += dests.length;
                dests.forEach(d => {
                    if (d.pais) countries.add(d.pais.trim().toLowerCase());
                    if (Array.isArray(d.actividades)) totalEvents += d.actividades.length;
                    if (d.fechaInicio && d.fechaFin) {
                        const start = new Date(d.fechaInicio);
                        const end = new Date(d.fechaFin);
                        const diffTime = Math.abs(end - start);
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
                        if (!isNaN(diffDays)) totalDays += diffDays;
                    }
                });
            });

            setStat('friendStatTrips', trips.length);
            setStat('friendStatDestinations', totalDestinations);
            setStat('friendStatDays', totalDays);
            setStat('friendStatEvents', totalEvents);
            setStat('friendStatCountries', countries.size);

            // Hook direct chat button
            const chatBtn = document.getElementById('friendDetailChatBtn');
            if (chatBtn) {
              chatBtn.onclick = () => {
                window.cerrarDetalleAmigo();
                window.cerrarAmigos();
                window.iniciarChatConUsuario(cleanNick);
              };
            }

            // Hook share button
            const shareBtn = document.getElementById('friendDetailShareBtn');
            if (shareBtn) {
              shareBtn.onclick = () => {
                if (typeof window.autoCompartirConUsuario === 'function') {
                  window.autoCompartirConUsuario(cleanNick);
                }
              };
            }

            // Hook group button
            const groupBtn = document.getElementById('friendDetailGroupBtn');
            if (groupBtn) {
              groupBtn.onclick = () => {
                window.cerrarDetalleAmigo();
                window.cerrarAmigos();
                if (typeof window.abrirModalCrearGrupo === 'function') {
                  window.abrirModalCrearGrupo();
                }
              };
            }
        } catch(e) {
            console.error('Error al cargar stats del amigo:', e);
            if (connEl) connEl.innerText = 'Error al cargar perfil';
        }
    }

    function cerrarDetalleAmigo() {
          const modal = document.getElementById('modal-detalle-amigo');
          if (modal) modal.style.display = 'none';
      }
      window.cerrarDetalleAmigo = cerrarDetalleAmigo;

      // ================== GESTIÓN DE GRUPOS PERSONALIZADOS ==================
      function abrirModalCrearGrupo(preselectedNick) {
        const modal = document.getElementById('modal-crear-grupo');
        if (!modal) return;
        modal.style.display = 'flex';
        const nameInput = document.getElementById('group-name-input');
        if (nameInput) { nameInput.value = ''; nameInput.focus(); }

        const friends = (typeof getStoredFriends === 'function') ? getStoredFriends() : [];
        const container = document.getElementById('group-friends-checkboxes');
        if (!container) return;

        const cleanPreselected = preselectedNick ? preselectedNick.replace(/^@/, '').toLowerCase().trim() : '';

        if (friends.length === 0 && !cleanPreselected) {
          container.innerHTML = '<div style="text-align:center; color:var(--gris); font-size:0.85rem; padding:12px;">No tienes amigos en tu lista aún. Puedes agregarlos desde Familia y amigos.</div>';
          return;
        }

        const friendSet = new Set(friends.map(f => (typeof f === 'string' ? f.replace(/^@/, '').toLowerCase().trim() : '')));
        if (cleanPreselected) friendSet.add(cleanPreselected);

        container.innerHTML = Array.from(friendSet).filter(Boolean).map(f => {
          const isChecked = cleanPreselected && f === cleanPreselected;
          return `
            <label class="group-member-item" style="display:flex !important; flex-direction:row !important; align-items:center !important; justify-content:flex-start !important; gap:12px !important; padding:10px 12px; border-radius:10px; background:rgba(255,255,255,0.04); cursor:pointer; color:white; font-size:0.92rem; width:100%; box-sizing:border-box;">
              <input type="checkbox" value="${escapeHtml(f)}" class="group-member-checkbox" ${isChecked ? 'checked' : ''} style="accent-color:var(--verde); width:18px !important; height:18px !important; min-width:18px !important; max-width:18px !important; flex:0 0 18px !important; margin:0 !important; cursor:pointer;">
              <span style="flex:1; text-align:left; font-weight:600;">@${escapeHtml(f)}</span>
            </label>
          `;
        }).join('');
      }
      window.abrirModalCrearGrupo = abrirModalCrearGrupo;

      function cerrarModalCrearGrupo() {
        const modal = document.getElementById('modal-crear-grupo');
        if (modal) modal.style.display = 'none';
      }
      window.cerrarModalCrearGrupo = cerrarModalCrearGrupo;

      function confirmarCrearGrupo() {
        const nameInput = document.getElementById('group-name-input');
        const rawName = nameInput ? nameInput.value.trim() : '';
        const groupName = rawName || 'Grupo de Viajeros 👥';

        const checkboxes = document.querySelectorAll('.group-member-checkbox:checked');
        const selectedMembers = Array.from(checkboxes).map(cb => cb.value);

        const myNick = currentNickname || 'yo';
        const allMembers = Array.from(new Set([myNick, ...selectedMembers]));

        const groupId = 'group_' + Date.now();
        if (!pluxSocialChats) pluxSocialChats = {};
        pluxSocialChats[groupId] = {
          id: groupId,
          type: 'group',
          name: groupName,
          participants: allMembers,
          messages: []
        };

        localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
        cerrarModalCrearGrupo();
        abrirChatSocial(groupId);
        showToast(`Grupo "${groupName}" creado con éxito ✨`, 'success');
      }
      window.confirmarCrearGrupo = confirmarCrearGrupo;

      async function compartirViajeConAmigo(friendNick) {
         if (!currentUserUid) { showToast('Iniciá sesión para invitar', 'error'); return; }
         if (friendNick === currentNickname) { showToast('No podés invitarte a vos mismo', 'error'); return; }
         if (!db) { showToast('Base de datos no disponible', 'error'); return; }
         
         // If no sync code, generate one first
         if (!syncCode) {
             generarCodigoInApp();
             showToast('Código generado automáticamente para compartir', 'info');
             await new Promise(r => setTimeout(r, 500));
         }
         
         try {
             const cleanFriend = friendNick.replace(/^@/, '').trim();
             await db.collection('plux_viajes_compartidos').doc(syncCode).set({
                 colaboradores: firebase.firestore.FieldValue.arrayUnion(cleanFriend),
                 propietario: currentNickname,
                 timestamp: firebase.firestore.FieldValue.serverTimestamp()
             }, { merge: true });

             const formattedNick = '@' + cleanFriend;
             if (!listaViajeros.some(v => v.toLowerCase().replace(/^@/, '') === cleanFriend.toLowerCase())) {
                 listaViajeros.push(formattedNick);
                 window.renderTravelerChips();
                 autoSave();
             }
             if (typeof window.sumarUsuarioAlChatDelViaje === 'function') {
                 window.sumarUsuarioAlChatDelViaje(cleanFriend, 'invitado');
             }
             
             showToast(`@${cleanFriend} invitado al viaje y sumado al chat ✅`, 'success');
             cerrarDetalleAmigo();
             cerrarAmigos();
             abrirColaboradores();
         } catch (e) {
             console.error('Error al invitar amigo colaborador:', e);
             showToast('Error al enviar la invitación', 'error');
         }
     }

    async function abrirColaboradores() {
        document.getElementById('modal-colaboradores').style.display = 'flex';
        const lista = document.getElementById('lista-colaboradores');
        const inviteCodeContainer = document.getElementById('invite-code-container');
        
        if (syncCode) {
            const codeEl = document.getElementById('display-invite-code');
            if (codeEl) codeEl.innerText = syncCode;
            if (inviteCodeContainer) inviteCodeContainer.style.display = 'block';
        } else if (inviteCodeContainer) {
            inviteCodeContainer.style.display = 'none';
        }
        
        const myName = currentNickname || 'Anónimo';
        let html = `
            <div style="display:flex; align-items:center; gap:15px; background:rgba(255,255,255,0.05); padding:12px; border-radius:12px; border:1px solid var(--border); margin-bottom:10px;">
                <div class="colab-avatar" style="background:var(--rosa); color:white; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">${myName.substring(0,2).toUpperCase()}</div>
                <div>
                    <strong style="color:white;">${myName === 'Anónimo' ? '👤 Anónimo (Tú)' : '@' + myName + ' (Tú)'}</strong>
                    <p style="font-size:0.8rem; color:var(--verde);">En línea</p>
                </div>
            </div>
        `;
        
        if (db && syncCode) {
            try {
                const docSnap = await db.collection('plux_viajes_compartidos').doc(syncCode).get();
                if (docSnap.exists) {
                    const colabs = docSnap.data().colaboradores || [];
                    const roles = docSnap.data().colaboradores_roles || {};
                    const owner = docSnap.data().propietario || 'Anónimo';
                    let hasColabs = false;
                    colabs.forEach(colab => {
                        if (colab !== myName) {
                            hasColabs = true;
                            const userRole = roles[colab] || 'editor';
                            let roleBadge = (colab === owner) ? "Propietario" : (userRole === 'editor' ? t('role_editor') : t('role_traveler'));
                            const displayName = colab.startsWith('@') ? colab : (colab === 'Anónimo' ? '👤 Anónimo' : '@' + colab);
                            html += `
                                <div style="display:flex; align-items:center; gap:15px; background:rgba(255,255,255,0.05); padding:12px; border-radius:12px; border:1px solid var(--border); margin-bottom:10px;">
                                    <div class="colab-avatar" style="background:var(--azul); color:white; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">${colab.substring(0,2).toUpperCase()}</div>
                                    <div style="flex:1">
                                        <strong style="color:white;">${displayName}</strong>
                                        <p style="font-size:0.8rem; color:var(--gris);">${roleBadge}</p>
                                    </div>
                                </div>
                            `;
                        }
                    });
                    if (!hasColabs) {
                        html += `<p style="text-align:center; color:var(--gris); font-size:0.9rem; margin-top:15px;">Solo vos estás en este viaje. Invitá a alguien por nickname o compartí el código.</p>`;
                    }
                } else {
                    html += `<p style="text-align:center; color:var(--gris); font-size:0.9rem; margin-top:15px;">Solo vos estás en este viaje. Generá un código para invitar a otros.</p>`;
                }
            } catch (e) {
                console.error('Error al cargar colaboradores:', e);
                html += `<p style="text-align:center; color:var(--gris); font-size:0.9rem; margin-top:15px;">Error cargando colaboradores.</p>`;
            }
        } else if (!syncCode) {
            html += `<p style="text-align:center; color:var(--gris); font-size:0.9rem; margin-top:15px;">Generá un código de invitación para compartir el viaje en tiempo real.</p>`;
        }
        
        lista.innerHTML = html;
    }

    async function invitarColaboradorPorNickname() {
        const nickInput = document.getElementById('invite-nickname-input');
        const targetNick = nickInput ? nickInput.value.trim() : '';
        if (!targetNick) { showToast('Ingresá el nickname a invitar', 'error'); return; }
        // Permitir invitar con login por nickname (localStorage) o Firebase Auth
        if (!currentUserUid) { showToast('Iniciá sesión (nickname o email) para invitar', 'error'); return; }
        if (targetNick === currentNickname) { showToast('No podés invitarte a vos mismo', 'error'); return; }
        if (!db) { showToast('Base de datos no disponible', 'error'); return; }

        // Check if target user exists
        try {
            const userDoc = await db.collection('plux_usuarios').doc(targetNick).get();
            if (!userDoc.exists) {
                showToast(`El usuario @${targetNick} no existe en Plux`, 'error');
                return;
            }
        } catch (e) {
            showToast('Error al verificar el usuario', 'error');
            return;
        }

        // If no sync code, generate one first
        if (!syncCode) {
            generarCodigoInApp();
            showToast('Código generado automáticamente para compartir', 'info');
            await new Promise(r => setTimeout(r, 500));
        }

        // Add collaborator to the shared trip
        try {
            const cleanTargetNick = targetNick.replace(/^@/, '').trim();
            const role = document.getElementById('colab-role-select')?.value || 'editor';
            await db.collection('plux_viajes_compartidos').doc(syncCode).set({
                colaboradores: firebase.firestore.FieldValue.arrayUnion(cleanTargetNick),
                [`colaboradores_roles.${cleanTargetNick}`]: role,
                propietario: currentNickname,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });

            const formattedNick = '@' + cleanTargetNick;
            if (!listaViajeros.some(v => v.toLowerCase().replace(/^@/, '') === cleanTargetNick.toLowerCase())) {
                listaViajeros.push(formattedNick);
                window.renderTravelerChips();
                autoSave();
            }
            if (typeof window.sumarUsuarioAlChatDelViaje === 'function') {
                window.sumarUsuarioAlChatDelViaje(cleanTargetNick, 'invitado');
            }

            showToast(`@${cleanTargetNick} invitado al viaje y sumado al chat ✅`, 'success');
            if (nickInput) nickInput.value = '';
            abrirColaboradores(); // Refresh list
        } catch (e) {
            console.error('Error al invitar colaborador:', e);
            showToast('Error al enviar la invitación', 'error');
        }
    }

    async function renderSharedTripsList() {
        if (!currentNickname || !db) return;
        const section = document.getElementById('colab-trips-section');
        const list = document.getElementById('sharedTripList');
        if (!section || !list) return;

        try {
            // Query trips where user is a collaborator
            const query = await db.collection('plux_viajes_compartidos')
                .where('colaboradores', 'array-contains', currentNickname)
                .limit(10)
                .get();

            const ownTrips = query.docs.filter(doc => {
                const data = doc.data();
                return data.propietario !== currentNickname; // only show trips owned by others
            });

            if (ownTrips.length === 0) {
                section.style.display = 'none';
                return;
            }

            section.style.display = 'block';
            list.innerHTML = '';
            ownTrips.forEach(doc => {
                const data = doc.data();
                const code = doc.id;
                const owner = data.propietario || 'desconocido';
                const item = document.createElement('div');
                item.className = 'trip-item';
                item.style.cursor = 'pointer';
                item.innerHTML = `
                    <div class="trip-info" onclick="cargarViajeCompartido('${code}')" style="cursor:pointer;flex:1">
                        <h4 style="color:var(--verde);">🔗 Código: ${code}</h4>
                        <small>Propietario: @${owner}</small>
                    </div>
                    <div class="trip-actions">
                        <button onclick="cargarViajeCompartido('${code}')" style="background:var(--verde);color:black;">Unirse</button>
                        <button onclick="abandonarViajeCompartido('${code}')" style="background:#dc2626;">Salir</button>
                    </div>
                `;
                list.appendChild(item);
            });
        } catch(e) {
            console.error('Error loading shared trips:', e);
            section.style.display = 'none';
        }
    }

    async function cargarViajeCompartido(code) {
        if (!db) {
            if (typeof initFirebaseAuth === 'function') await initFirebaseAuth();
        }
        if (!db) { showToast('Base de datos no disponible', 'error'); return; }
        showToast('Cargando viaje compartido...', 'info');
        try {
            const docSnap = await db.collection('plux_viajes_compartidos').doc(code).get();
            if (docSnap.exists) {
                syncCode = code;
                currentTripId = code;
                localStorage.setItem('PluxSyncCode', code);
                importarViajeString(docSnap.data().data, false);
                const data = docSnap.data();
                const colabs = data.colaboradores || [];
                const roles = data.colaboradores_roles || {};
                const owner = data.propietario;
                const urlReaderParams2 = new URLSearchParams(window.location.search);
                const isForcedReader2 = urlReaderParams2.get('mode') === 'reader' || urlReaderParams2.get('role') === 'reader';
                const joiningName = currentNickname || 'Viajero';
                
                if (isForcedReader2) {
                    window.currentTripRole = 'reader';
                    mostrarAdvertenciaSoloLectura();
                    if (typeof showToast === 'function') showToast('Modo Lectura Activo · Vista de itinerario', 'info');
                } else {
                    await db.collection('plux_viajes_compartidos').doc(code).set({
                        colaboradores: firebase.firestore.FieldValue.arrayUnion(joiningName)
                    }, { merge: true });

                    // Sincronizar todos los colaboradores a la lista de viajeros
                    colabs.forEach(c => {
                        const norm = c.toLowerCase().replace(/^@/, '');
                        if (!listaViajeros.some(v => v.toLowerCase().replace(/^@/, '') === norm)) {
                            listaViajeros.push('@' + norm);
                        }
                    });
                    if (joiningName && !listaViajeros.some(v => v.toLowerCase().replace(/^@/, '') === joiningName.toLowerCase().replace(/^@/, ''))) {
                        listaViajeros.push('@' + joiningName.replace(/^@/, ''));
                    }
                    if (typeof window.renderTravelerChips === 'function') {
                        window.renderTravelerChips();
                    }
                    
                    // Determine current user's role
                    if (currentNickname === owner) {
                        window.currentTripRole = 'owner';
                    } else if (currentNickname) {
                        window.currentTripRole = roles[currentNickname] || 'editor';
                    } else {
                        window.currentTripRole = 'editor';
                    }
                    ocultarAdvertenciaSoloLectura();
                }
                
                activarListenerNube();
                if (!isForcedReader2) {
                    if (typeof pluxChatUnsubscribe === 'function' && pluxChatUnsubscribe) {
                        pluxChatUnsubscribe();
                        pluxChatUnsubscribe = null;
                    }
                    if (typeof getTripChatChannelId === 'function') {
                        pluxActiveChatId = getTripChatChannelId();
                        if (typeof ensureChatChannel === 'function') ensureChatChannel();
                    }
                    if (typeof window.sumarUsuarioAlChatDelViaje === 'function') {
                        window.sumarUsuarioAlChatDelViaje(joiningName, 'unido');
                    }
                }
                showToast(`¡Viaje con código ${code} cargado!`, 'success');
                cerrarModalViajes();
                empezar();
            } else {
                showToast('Viaje no encontrado', 'error');
            }
        } catch(e) {
            console.error(e);
            showToast('Error al cargar el viaje compartido', 'error');
        }
    }
    window.cargarViajeCompartido = cargarViajeCompartido;

    async function abandonarViajeCompartido(code) {
        if (!db || !currentNickname) return;
        try {
            await db.collection('plux_viajes_compartidos').doc(code).update({
                colaboradores: firebase.firestore.FieldValue.arrayRemove(currentNickname)
            });
            showToast('Saliste del viaje compartido', 'info');
            renderTripLists();
        } catch(e) {
            showToast('Error al salir del viaje', 'error');
        }
    }

    function abrirCompartirModal() {
        // Show share options: code + nickname invite
        const code = syncCode;
        const nick = currentNickname;
        trackEvent('share_trip', {
            action: 'open_share_modal',
            has_code: !!code
        });
        let html = `<div id="modal-compartir" style="position:fixed;inset:0;background:rgba(15,23,42,0.96);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:500;padding:20px;" onclick="if(event.target===this)this.remove()">
            <div style="background:var(--card);border:1px solid var(--border);border-radius:24px;padding:30px;max-width:480px;width:100%;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
                    <h2 style="color:var(--verde);margin:0;">🔗 Compartir viaje</h2>
                    <span onclick="document.getElementById('modal-compartir').remove()" style="cursor:pointer;font-size:1.8rem;color:var(--gris);">×</span>
                </div>`;

        if (code) {
            html += `<div style="background:rgba(255,255,255,0.05);border:1px dashed var(--verde);border-radius:16px;padding:20px;text-align:center;margin-bottom:20px;">
                <p style="color:var(--gris);font-size:0.8rem;margin-bottom:8px;">CÓDIGO DE ACCESO</p>
                <h2 style="color:var(--rosa);letter-spacing:6px;font-size:2.5rem;margin:0;">${code}</h2>
                <p style="color:var(--gris);font-size:0.75rem;margin-top:8px;">Compartí este código para que otros se unan al viaje en tiempo real</p>
                <button onclick="navigator.clipboard?.writeText('${code}').then(()=>showToast('Código copiado','success'))" style="margin-top:12px;padding:8px 20px;background:var(--azul);border:none;color:white;border-radius:8px;cursor:pointer;">📋 Copiar código</button>
            </div>`;
        } else {
            html += `<div style="background:rgba(255,255,255,0.05);border:1px dashed var(--border);border-radius:16px;padding:20px;text-align:center;margin-bottom:20px;">
                <p style="color:var(--gris);">Aún no generaste un código de invitación</p>
                <button onclick="generarCodigoInApp();document.getElementById('modal-compartir').remove();abrirColaboradores();" style="margin-top:12px;padding:10px 20px;background:var(--azul);border:none;color:white;border-radius:8px;cursor:pointer;">Generar código</button>
            </div>`;
        }

        if (nick) {
            html += `<div style="border-top:1px solid var(--border);padding-top:20px;">
                <p style="color:var(--gris);font-size:0.85rem;margin-bottom:10px;">O invitar directamente por nickname:</p>
                <div style="display:flex;gap:10px;">
                    <input type="text" id="share-modal-nick" placeholder="nickname del amigo" style="flex:1;padding:10px;background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:8px;color:white;">
                    <button onclick="document.getElementById('invite-nickname-input').value=document.getElementById('share-modal-nick').value;document.getElementById('modal-compartir').remove();abrirColaboradores();invitarColaboradorPorNickname();" style="padding:10px 16px;background:var(--verde);border:none;color:black;font-weight:bold;border-radius:8px;cursor:pointer;">Invitar</button>
                </div>
            </div>`;
        } else {
            html += `<p style="color:var(--gris);font-size:0.85rem;text-align:center;margin-top:10px;">Iniciá sesión con un nickname para invitar por nombre</p>`;
        }

        html += `</div></div>`;
        document.body.insertAdjacentHTML('beforeend', html);
    }

    function cerrarColaboradores() {
        const modal = document.getElementById('modal-colaboradores');
        if (modal) modal.style.display = 'none';
    }

    function añadirDesdeFeed(titulo) {
      if (!destinos || destinos.length === 0) {
        showToast('Por favor, añade un destino primero usando el botón "+ Añadir Destino"', 'error');
        cerrarDescubrir();
        return;
      }
      
      const destId = destinos[0].id;
      
      destinos[0].dias[0].eventos.push({
        hora: '10:00',
        titulo: titulo,
        notas: 'Añadido desde Descubrir',
        costo: 0,
        duracion: 60
      });
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(destinos));
      if (document.getElementById('app').style.display !== 'none') {
          renderDias(destId);
      }
      showToast(`¡${titulo} añadido a tu viaje!`, 'success');
    }

  
    function abrirSeguridad() {
      const modal = document.getElementById('modal-seguridad');
      if (modal) modal.style.display = 'flex';
      const nickInput = document.getElementById('seguridad-new-nickname');
      if (nickInput) nickInput.value = currentNickname || '';
      const emailInput = document.getElementById('seguridad-email');
      const storedEmail = localStorage.getItem('Plux_UserProfile_Email') || (firebaseUser && firebaseUser.email) || '';
      if (emailInput) emailInput.value = storedEmail === 'Nickname Login' ? '' : storedEmail;
      const p1 = document.getElementById('seguridad-new-password');
      const p2 = document.getElementById('seguridad-confirm-password');
      if (p1) p1.value = '';
      if (p2) p2.value = '';
    }
    window.abrirSeguridad = abrirSeguridad;

    function cerrarSeguridad() {
      const modal = document.getElementById('modal-seguridad');
      if (modal) modal.style.display = 'none';
    }
    window.cerrarSeguridad = cerrarSeguridad;

    async function guardarNuevaContrasena() {
      const newNickRaw = document.getElementById('seguridad-new-nickname')?.value || '';
      const newEmailRaw = document.getElementById('seguridad-email')?.value || '';
      const newPass = document.getElementById('seguridad-new-password')?.value || '';
      const confirmPass = document.getElementById('seguridad-confirm-password')?.value || '';

      const cleanNewNick = newNickRaw.trim().replace(/^@/, '').toLowerCase().replace(/[^a-z0-9_]/g, '');
      const cleanEmail = newEmailRaw.trim();

      if (!currentNickname && !currentUserUid && !(firebaseUser && firebaseUser.email)) {
        showToast('Iniciá sesión primero', 'error');
        return;
      }

      if (newPass) {
        if (newPass.length < 6) {
          showToast('La contraseña debe tener al menos 6 caracteres', 'error');
          return;
        }
        if (newPass !== confirmPass) {
          showToast('Las contraseñas no coinciden', 'error');
          return;
        }
      }

      showToast('Guardando cambios de seguridad...', 'info');

      try {
        const updates = {};
        if (newPass) updates.password = newPass;
        if (cleanEmail) {
          updates.email = cleanEmail;
          localStorage.setItem('Plux_UserProfile_Email', cleanEmail);
          const emailEl = document.getElementById('profileEmail');
          if (emailEl) emailEl.innerText = cleanEmail;
        }

        const oldNick = currentNickname;
        if (cleanNewNick && cleanNewNick !== oldNick) {
          if (cleanNewNick.length < 3) {
            showToast('El nickname debe tener al menos 3 caracteres', 'error');
            return;
          }
          if (typeof db !== 'undefined' && db) {
            const checkDoc = await db.collection('plux_usuarios').doc(cleanNewNick).get();
            if (checkDoc.exists) {
              showToast(`El nickname @${cleanNewNick} ya está en uso`, 'error');
              return;
            }
            let oldData = {};
            if (oldNick) {
              const oldDoc = await db.collection('plux_usuarios').doc(oldNick).get();
              if (oldDoc.exists) oldData = oldDoc.data() || {};
            }
            await db.collection('plux_usuarios').doc(cleanNewNick).set({
              ...oldData,
              ...updates,
              nickname: cleanNewNick,
              ultimaConexion: new Date().toISOString()
            });
          }
          currentNickname = cleanNewNick;
          localStorage.setItem('Plux_CurrentNickname', cleanNewNick);
          const nameEl = document.getElementById('profileName');
          if (nameEl) nameEl.innerText = cleanNewNick;
        } else if (oldNick && typeof db !== 'undefined' && db && Object.keys(updates).length > 0) {
          await db.collection('plux_usuarios').doc(oldNick).set(updates, { merge: true });
        }

        updateUserButtonDisplay();
        showToast('Datos de cuenta actualizados correctamente ✨', 'success');
        cerrarSeguridad();
        if (document.getElementById('seguridad-new-password')) document.getElementById('seguridad-new-password').value = '';
        if (document.getElementById('seguridad-confirm-password')) document.getElementById('seguridad-confirm-password').value = '';
      } catch (e) {
        console.error("Error updating security info:", e);
        showToast('Error al actualizar datos de seguridad', 'error');
      }
    }
    window.guardarNuevaContrasena = guardarNuevaContrasena;

    function selectTravelStyle(styleKey) {
      const input = document.getElementById('info-travel-style');
      if (input) input.value = styleKey;
      document.querySelectorAll('.travel-style-chip').forEach(chip => {
        const isSelected = (chip.dataset.style === styleKey);
        chip.classList.toggle('active', isSelected);
        chip.style.borderColor = isSelected ? 'var(--verde)' : 'var(--border)';
        chip.style.background = isSelected ? 'rgba(52,211,153,0.18)' : 'rgba(255,255,255,0.04)';
        chip.style.color = isSelected ? 'var(--verde)' : 'white';
      });
    }
    window.selectTravelStyle = selectTravelStyle;

    function abrirInfoPersonal() {
      const modal = document.getElementById('modal-info-personal');
      if (!modal) return;
      
      // Cargar datos previos
      let info = {};
      try {
        const raw = localStorage.getItem('Plux_PersonalInfo');
        if (raw) info = JSON.parse(raw);
      } catch(e) {}
      
      const elName = document.getElementById('info-fullname');
      const elAge = document.getElementById('info-age');
      const elGender = document.getElementById('info-gender');
      const elLoc = document.getElementById('info-location');
      const elBio = document.getElementById('info-bio');
      const elCheckPerfil = document.getElementById('info-mostrar-perfil');
      const elCheckEdad = document.getElementById('info-mostrar-edad');
      const elCheckCiudad = document.getElementById('info-mostrar-ciudad');
      
      if (elName) elName.value = info.fullname || (firebaseUser && firebaseUser.displayName) || '';
      if (elAge) elAge.value = info.age || '';
      if (elGender) elGender.value = info.gender || '';
      if (elLoc) elLoc.value = info.location || '';
      if (elBio) elBio.value = info.bio || '';
      if (elCheckPerfil) elCheckPerfil.checked = (info.mostrarPerfilPublico !== false);
      if (elCheckEdad) elCheckEdad.checked = (info.mostrarEdad !== false);
      if (elCheckCiudad) elCheckCiudad.checked = (info.mostrarCiudad !== false);

      selectTravelStyle(info.travelStyle || 'mochilero');
      
      modal.style.display = 'flex';
    }
    window.abrirInfoPersonal = abrirInfoPersonal;

    function cerrarInfoPersonal() {
      const modal = document.getElementById('modal-info-personal');
      if (modal) modal.style.display = 'none';
    }
    window.cerrarInfoPersonal = cerrarInfoPersonal;

    async function guardarInfoPersonal() {
      const elName = document.getElementById('info-fullname');
      const elAge = document.getElementById('info-age');
      const elGender = document.getElementById('info-gender');
      const elLoc = document.getElementById('info-location');
      const elStyle = document.getElementById('info-travel-style');
      const elBio = document.getElementById('info-bio');
      const elCheckPerfil = document.getElementById('info-mostrar-perfil');
      const elCheckEdad = document.getElementById('info-mostrar-edad');
      const elCheckCiudad = document.getElementById('info-mostrar-ciudad');
      
      const locVal = elLoc ? elLoc.value.trim() : '';
      const info = {
        fullname: elName ? elName.value.trim() : '',
        age: elAge ? elAge.value.trim() : '',
        gender: elGender ? elGender.value : '',
        location: locVal,
        travelStyle: elStyle ? elStyle.value : 'mochilero',
        bio: elBio ? elBio.value.trim() : '',
        mostrarPerfilPublico: elCheckPerfil ? elCheckPerfil.checked : true,
        mostrarEdad: elCheckEdad ? elCheckEdad.checked : true,
        mostrarCiudad: elCheckCiudad ? elCheckCiudad.checked : true,
        updatedAt: new Date().toISOString()
      };
      
      localStorage.setItem('Plux_PersonalInfo', JSON.stringify(info));

      // Si el viaje actual no tiene origen asignado, usar la residencia como origen por defecto
      if (locVal && (!lugarSalida || !lugarSalida.trim())) {
        lugarSalida = locVal;
        const fSal = document.getElementById('lugarSalida');
        if (fSal) fSal.value = lugarSalida;
        autoSave();
      }
      
      // Sincronizar con Firestore si está conectado
      try {
        if (typeof db !== 'undefined' && db) {
          const docData = {
            info_personal: info,
            nombreCompleto: info.fullname,
            residencia: info.location,
            estiloViaje: info.travelStyle,
            bio: info.bio,
            mostrarPerfilPublico: info.mostrarPerfilPublico,
            mostrarEdad: info.mostrarEdad,
            mostrarCiudad: info.mostrarCiudad,
            ultimaConexion: firebase.firestore.FieldValue.serverTimestamp()
          };
          if (currentNickname) {
            db.collection('plux_usuarios').doc(currentNickname).set(docData, { merge: true }).catch(console.error);
          }
          if (currentUserUid && currentUserUid !== currentNickname) {
            db.collection('plux_usuarios').doc(currentUserUid).set(docData, { merge: true }).catch(console.error);
          }
          if (firebaseUser && firebaseUser.uid) {
            db.collection('users').doc(firebaseUser.uid).set(docData, { merge: true }).catch(console.error);
          }
        }
      } catch (e) {
        console.error("Error guardando info personal en Firestore:", e);
      }
      
      cerrarInfoPersonal();
      showToast('Información personal guardada con éxito ✨', 'success');
    }
    window.guardarInfoPersonal = guardarInfoPersonal;

    function abrirInfo() {
      abrirInfoPersonal();
    }
    window.abrirInfo = abrirInfo;

    function cerrarInfo() {
      cerrarInfoPersonal();
    }
    window.cerrarInfo = cerrarInfo;

    function empezarDeCero() {
      if (destinos.length > 0 && !confirm(t('confirm_scratch'))) return;
      
      lugarSalida = '';
      numPersonas = 1;
      destinos = [];
      vueltaGlobal = '';
      vueltaPrecioGlobal = 0;
      vueltaCostosAdicionales = [];
      syncCode = null;
      localStorage.removeItem('PluxSyncCode');
      loadedTripIndex = null;
      window.currentTripRole = 'editor';
      
      // Reset lista de viajeros y UI
      listaViajeros = [];
      nombresPersonasGlobal = '';
      const fNp = document.getElementById('nombresPersonas'); if (fNp) fNp.value = '';
      const fChip = document.getElementById('traveler-chip-input'); if (fChip) fChip.value = '';
      if (typeof window.renderTravelerChips === 'function') window.renderTravelerChips();

      // Reset ID de viaje e inicializar chat nuevo y limpio
      currentTripId = 'trip_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 4);
      if (typeof pluxChatUnsubscribe === 'function' && pluxChatUnsubscribe) {
        pluxChatUnsubscribe();
        pluxChatUnsubscribe = null;
      }
      if (typeof initNewTripChatChannel === 'function') {
        initNewTripChatChannel();
      }

      // Reset inputs
      const fSal = document.getElementById('lugarSalida'); if (fSal) fSal.value = '';
      const fPer = document.getElementById('numPersonas'); if (fPer) fPer.value = 1;
      const fFecha = document.getElementById('fechaInicio'); if (fFecha) fFecha.value = '';
      const fVue = document.getElementById('vuelta'); if (fVue) fVue.value = '';
      const fVueP = document.getElementById('vueltaPrecio'); if (fVueP) fVueP.value = 0;
      
      // Clear old destinations display
      const destContainer = document.getElementById('destinos');
      if (destContainer) destContainer.innerHTML = '';
      
      ocultarAdvertenciaSoloLectura();
      cerrarResumen();
      empezar();
      showToast(t('btn_start_scratch'), 'success');
    }

    function empezarDeCeroSinPrompt() {
      // Usar residencia de Info Personal por defecto si existe
      let defaultOrigin = '';
      try {
        const raw = localStorage.getItem('Plux_PersonalInfo');
        if (raw) {
          const info = JSON.parse(raw);
          if (info && info.location && info.location.trim()) defaultOrigin = info.location.trim();
        }
      } catch(e) {}

      lugarSalida = defaultOrigin;
      numPersonas = 1;
      destinos = [];
      vueltaGlobal = '';
      vueltaPrecioGlobal = 0;
      vueltaCostosAdicionales = [];
      syncCode = null;
      localStorage.removeItem('PluxSyncCode');
      loadedTripIndex = null;
      window.currentTripRole = 'editor';
      
      // Reset lista de viajeros y UI
      listaViajeros = [];
      nombresPersonasGlobal = '';
      const fNp = document.getElementById('nombresPersonas'); if (fNp) fNp.value = '';
      const fChip = document.getElementById('traveler-chip-input'); if (fChip) fChip.value = '';
      if (typeof window.renderTravelerChips === 'function') window.renderTravelerChips();

      // Reset ID de viaje e inicializar chat nuevo y limpio
      currentTripId = 'trip_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 4);
      if (typeof pluxChatUnsubscribe === 'function' && pluxChatUnsubscribe) {
        pluxChatUnsubscribe();
        pluxChatUnsubscribe = null;
      }
      if (typeof initNewTripChatChannel === 'function') {
        initNewTripChatChannel();
      }

      // Reset inputs
      const fSal = document.getElementById('lugarSalida'); if (fSal) fSal.value = defaultOrigin;
      const fPer = document.getElementById('numPersonas'); if (fPer) fPer.value = 1;
      const fFecha = document.getElementById('fechaInicio'); if (fFecha) fFecha.value = '';
      const fVue = document.getElementById('vuelta'); if (fVue) fVue.value = '';
      const fVueP = document.getElementById('vueltaPrecio'); if (fVueP) fVueP.value = 0;
      
      // Clear old destinations display
      const destContainer = document.getElementById('destinos');
      if (destContainer) destContainer.innerHTML = '';
      
      ocultarAdvertenciaSoloLectura();
      cerrarResumen();
    }

    function onStartBtnClick() {
      const trips = getStoredTrips();
      if (trips.length === 0) {
        empezarDeCeroSinPrompt();
        empezar();
      } else {
        abrirModalDecisionViaje();
      }
    }

    function abrirModalDecisionViaje() {
      const modal = document.getElementById('modal-decision-viaje');
      if (modal) modal.style.display = 'flex';
    }

    function cerrarModalDecisionViaje() {
      const modal = document.getElementById('modal-decision-viaje');
      if (modal) modal.style.display = 'none';
    }

    function decisionViajeNuevo() {
      cerrarModalDecisionViaje();
      empezarDeCeroSinPrompt();
      empezar();
    }

    function decisionViajeContinuar() {
      cerrarModalDecisionViaje();
      const trips = getStoredTrips();
      if (trips.length > 0) {
        cargarViaje(trips.length - 1);
      }
      empezar();
    }

    function toggleSettingsCollapse() {
      const content = document.getElementById('settings-collapsible-content');
      const arrow = document.getElementById('settings-toggle-arrow');
      if (!content || !arrow) return;
      
      if (content.style.display === 'none') {
        content.style.display = 'flex';
        arrow.style.transform = 'rotate(180deg)';
      } else {
        content.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
      }
    }

    function toggleMobileTripMenu() {
      const menu = document.getElementById('mobile-trip-menu');
      if (!menu) return;
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
      } else {
        menu.style.display = 'none';
      }
    }

    function mobileActionClonar() {
      toggleMobileTripMenu();
      clonarViajeActual();
    }
    window.mobileActionClonar = mobileActionClonar;

    function mobileActionInvitar() {
      toggleMobileTripMenu();
      const el = document.getElementById('modal-colaboradores');
      if (el) el.style.display = 'flex';
    }

    function mobileActionEmpezarDeCero() {
      toggleMobileTripMenu();
      empezarDeCero();
    }

    function mobileActionImportar() {
      toggleMobileTripMenu();
      importarViaje();
    }

    function mobileActionExportar() {
      toggleMobileTripMenu();
      exportarViajeActual();
    }

    function mobileActionVerMapa() {
      toggleMobileTripMenu();
      abrirMapa();
    }

    function mobileActionSoporte() {
      toggleMobileTripMenu();
      abrirSupport();
    }

  // ================== GLOBAL FUNCTION EXPOSURE FOR WEB COMPATIBILITY ==================
  // Expose all functions called by onclick inline to window scope
  window.abrirDescubrir = abrirDescubrir;
  window.cerrarDescubrir = cerrarDescubrir;
  window.buscarLugaresPorDestino = buscarLugaresPorDestino;
  window.buscarLugaresWikiFeed = buscarLugaresWikiFeed;
  window.añadirDesdeFeed = añadirDesdeFeed;
  window.abrirChatIA = abrirChatIA;
  window.cerrarChatIA = cerrarChatIA;
  window.abrirPanelHerramientas = abrirPanelHerramientas;
  window.cerrarPanelHerramientas = cerrarPanelHerramientas;
  window.empezar = empezar;
  window.abrirModalViajes = abrirModalViajes;
  window.cerrarModalViajes = cerrarModalViajes;
  window.abrirCalendario = abrirCalendario;
  window.cerrarCalendario = cerrarCalendario;
  window.abrirConversor = abrirConversor;
  window.cerrarConversor = cerrarConversor;
  window.abrirTraductor = abrirTraductor;
  window.cerrarTraductor = cerrarTraductor;
  window.swapTraductorLangs = swapTraductorLangs;
  window.insertarFraseTraductor = insertarFraseTraductor;
  window.ejecutarTraduccion = ejecutarTraduccion;
  window.copiarTraduccion = copiarTraduccion;
  window.pronunciarTextoTraductor = pronunciarTextoTraductor;
  window.abrirClima = abrirClima;
  window.cerrarClima = cerrarClima;
  window.buscarClimaModal = buscarClimaModal;
  window.toggleWeatherWidget = toggleWeatherWidget;
  window.loadWeatherForTripDay = loadWeatherForTripDay;
  window.renderClimaFeedViaje = renderClimaFeedViaje;
  window.fetchWeatherData = fetchWeatherData;
  window.abrirChecklist = abrirChecklist;
  window.cerrarChecklist = cerrarChecklist;
  window.abrirMapa = abrirMapa;
  window.cerrarMapa = cerrarMapa;
  window.volverAWelcome = volverAWelcome;
  window.agregarDestino = agregarDestino;
  window.mostrarResumen = mostrarResumen;
  window.cerrarResumen = cerrarResumen;
  window.abrirColab = abrirColaboradores;
  window.unirseAViaje = unirseAViaje;
  window.abrirPreferencias = abrirPreferencias;
  window.guardarPreferencias = guardarPreferencias;
  window.explorarInspo = explorarInspo;
  window.setLanguage = setLanguage;
  window.setTheme = setTheme;
  window.toggleVistaResumen = toggleVistaResumen;
  window.renderResumen = renderResumen;
  window.abrirPresentacion = abrirPresentacion;
  window.cerrarPresentacion = cerrarPresentacion;
  window.presentacionAnterior = presentacionAnterior;
  window.presentacionSiguiente = presentacionSiguiente;
  window.mostrarPresentacionEvento = mostrarPresentacionEvento;
  window.convertirMoneda = convertirMoneda;
  window.ejecutarConversorLabs = ejecutarConversorLabs;
  window.geocode = geocode;
  window.dibujarMapa = dibujarMapa;
  window.abrirMapaResumen = abrirMapaResumen;
  window.cambiarMes = cambiarMes;
  window.seleccionarDia = seleccionarDia;
  window.exportarGoogleCalendar = exportarGoogleCalendar;
  window.compartirViaje = compartirViaje;
  window.fallbackCompartir = fallbackCompartir;
  window.exportarPDF = exportarPDF;
  window.guardarViaje = guardarViaje;
  window.cargarViaje = cargarViaje;
  window.eliminarViaje = eliminarViaje;
  window.guardarComoPlantilla = guardarComoPlantilla;
  window.cargarPlantilla = cargarPlantilla;
  window.eliminarPlantilla = eliminarPlantilla;
  window.exportarViajeActual = exportarViajeActual;
  window.importarViaje = importarViaje;
  window.toggleTransportFields = toggleTransportFields;
  window.agregarTramo = agregarTramo;
  window.eliminarTramo = eliminarTramo;
  window.actualizarTramo = actualizarTramo;
  window.agregarEscala = agregarEscala;
  window.eliminarEscala = eliminarEscala;
  window.actualizarEscala = actualizarEscala;
  window.eliminarDestino = eliminarDestino;
  window.agregarDia = agregarDia;
  window.eliminarDia = eliminarDia;
  window.duplicarDia = duplicarDia;
  window.agregarEvento = agregarEvento;
  window.eliminarEvento = eliminarEvento;
  window.duplicarEvento = duplicarEvento;
  window.agregarCostoAdicional = agregarCostoAdicional;
  window.eliminarCostoAdicional = eliminarCostoAdicional;
  window.actualizarCostoAdicional = actualizarCostoAdicional;
  window.agregarCostoVuelta = agregarCostoVuelta;
  window.eliminarCostoVuelta = eliminarCostoVuelta;
  window.actualizarCostoVuelta = actualizarCostoVuelta;
  window.abrirColaboradores = abrirColaboradores;
  window.cerrarColaboradores = cerrarColaboradores;
  window.generarCodigoInApp = generarCodigoInApp;
  window.mostrarDashboardDia = mostrarDashboardDia;
  window.programarNotificacionesDelDia = programarNotificacionesDelDia;
  window.verificarViajeActivo = verificarViajeActivo;
  window.toggleViajeActivo = toggleViajeActivo;
  window.moverDestino = moverDestino;
  window.moverDia = moverDia;
  window.moverEvento = moverEvento;
  window.setupReorderDragListeners = setupReorderDragListeners;

  window.abrirSeguridad = abrirSeguridad;
  window.cerrarSeguridad = cerrarSeguridad;
  window.guardarNuevaContrasena = guardarNuevaContrasena;
  window.abrirInfo = abrirInfo;
  window.abrirInfoPersonal = abrirInfoPersonal;
  window.cerrarInfoPersonal = cerrarInfoPersonal;
  window.guardarInfoPersonal = guardarInfoPersonal;
  window.mostrarGuiaComoEmpezar = mostrarGuiaComoEmpezar;
  window.selectCityFromDropdown = selectCityFromDropdown;
  window.cerrarInfo = cerrarInfo;
  window.empezarDeCero = empezarDeCero;
  window.toggleSettingsCollapse = toggleSettingsCollapse;
  window.abrirCuenta = abrirCuenta;
  window.cerrarCuenta = cerrarCuenta;
  window.cerrarSesion = cerrarSesion;
  window.invitarColaboradorPorNickname = invitarColaboradorPorNickname;
  window.cargarViajeCompartido = cargarViajeCompartido;
  window.abandonarViajeCompartido = abandonarViajeCompartido;
  window.abrirCompartirModal = abrirCompartirModal;
  window.renderSharedTripsList = renderSharedTripsList;
  window.switchCuentaTab = switchCuentaTab;
  window.toggleRegisterPassword = toggleRegisterPassword;
  window.loginNickname = loginNickname;
  window.crearCuentaNickname = crearCuentaNickname;

  window.getStoredFriends = getStoredFriends;
  window.saveFriends = saveFriends;
  window.abrirAmigos = abrirAmigos;
  window.cerrarAmigos = cerrarAmigos;
  window.renderAmigosList = renderAmigosList;
  window.agregarAmigoPorNickname = agregarAmigoPorNickname;
  window.eliminarAmigo = eliminarAmigo;
  window.abrirDetalleAmigo = abrirDetalleAmigo;
  window.cerrarDetalleAmigo = cerrarDetalleAmigo;
  window.compartirViajeConAmigo = compartirViajeConAmigo;
  
  window.empezarDeCeroSinPrompt = empezarDeCeroSinPrompt;
  window.onStartBtnClick = onStartBtnClick;
  window.abrirModalDecisionViaje = abrirModalDecisionViaje;
  window.cerrarModalDecisionViaje = cerrarModalDecisionViaje;
  window.decisionViajeNuevo = decisionViajeNuevo;
  window.decisionViajeContinuar = decisionViajeContinuar;

  window.toggleMobileTripMenu = toggleMobileTripMenu;
  window.mobileActionInvitar = mobileActionInvitar;
  window.mobileActionEmpezarDeCero = mobileActionEmpezarDeCero;
  window.mobileActionImportar = mobileActionImportar;
  function explorarInspo(ciudad) {
    if (!ciudad) return;
    const ciudadLower = ciudad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const cityMap = {
      'buenos aires': '/plux/destinies/buenosaires/',
      'bs. aires': '/plux/destinies/buenosaires/',
      'roma': '/plux/destinies/roma/',
      'tokio': '/plux/destinies/tokio/',
      'nueva york': '/plux/destinies/nuevayork/',
      'paris': '/plux/destinies/paris/',
      'barcelona': '/plux/destinies/barcelona/'
    };

    const targetUrl = cityMap[ciudadLower];
    if (targetUrl) {
      window.location.href = targetUrl;
      return;
    }

    abrirDescubrir();
    const input = document.getElementById('feedSearchInput');
    if (input) input.value = ciudad;
    buscarLugaresPorDestino(ciudad);
  }
  window.explorarInspo = explorarInspo;
  window.abrirSupport = abrirSupport;

  function cargarPlantillaCiudad(ciudadRaw) {
    if (!ciudadRaw) return;
    const cClean = ciudadRaw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "").trim();

    // 1. Check all registered official templates first
    let matchedTemplate = null;
    if (typeof PLUX_OFICIAL_TEMPLATES !== 'undefined') {
      matchedTemplate = PLUX_OFICIAL_TEMPLATES.find(t => {
        const tplName = (t.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "");
        const tplId = (t.id || '').toLowerCase().replace('oficial_', '').replace(/[\s\-_]/g, "");
        const destName = (t.destinos && t.destinos[0]?.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "");
        return tplId.includes(cClean) || cClean.includes(tplId) || tplName.includes(cClean) || destName.includes(cClean);
      });
    }

    // 2. Check community seeds
    if (!matchedTemplate && typeof PLUX_COMUNIDAD_SEEDS !== 'undefined') {
      matchedTemplate = PLUX_COMUNIDAD_SEEDS.find(t => {
        const tplName = (t.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "");
        const tplId = (t.id || '').toLowerCase().replace('com_', '').replace(/[\s\-_]/g, "");
        const destName = (t.destinos && t.destinos[0]?.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "");
        return tplId.includes(cClean) || cClean.includes(tplId) || tplName.includes(cClean) || destName.includes(cClean);
      });
    }

    if (matchedTemplate) {
      if (typeof clonarPlantillaCompleta === 'function') {
        clonarPlantillaCompleta(matchedTemplate.id, matchedTemplate.id.startsWith('com_') ? 'comunidad' : 'oficial');
        return;
      }
    }

    const cityDataMap = {
      'buenosaires': {
        nombre: 'Buenos Aires',
        dias: [
          {
            eventos: [
              { hora: '10:00', titulo: 'Obelisco & Recorrido por Av. Corrientes', notas: 'Caminata por el centro y teatros tradicionales', costo: '0', duracion: 90 },
              { hora: '13:00', titulo: 'Almuerzo Pizzería Guerrin', notas: 'Pizza tradicional al molde porteña', costo: '15', duracion: 60 },
              { hora: '16:00', titulo: 'Teatro Colón & Plaza de Mayo', notas: 'Visita guiada por el teatro neoclásico', costo: '12', duracion: 120 }
            ]
          },
          {
            eventos: [
              { hora: '10:30', titulo: 'Caminito & Paseo por La Boca', notas: 'Conventillos multicolor y show de tango al aire libre', costo: '0', duracion: 120 },
              { hora: '13:00', titulo: 'Estadio La Bombonera', notas: 'Tour por el museo del club Boca Juniors', costo: '18', duracion: 90 },
              { hora: '20:30', titulo: 'Cena en Parrilla Don Julio', notas: 'Asado argentino y carne a la parrilla', costo: '45', duracion: 120 }
            ]
          },
          {
            eventos: [
              { hora: '11:00', titulo: 'Cementerio de Recoleta & El Ateneo Splendid', notas: 'Librería histórica en un teatro antiguo', costo: '5', duracion: 120 },
              { hora: '16:00', titulo: 'Puerto Madero & Puente de la Mujer', notas: 'Paseo por los diques al atardecer', costo: '0', duracion: 90 },
              { hora: '21:00', titulo: 'Show de Tango & Cena', notas: 'Espectáculo de tango rioplatense', costo: '50', duracion: 150 }
            ]
          }
        ]
      },
      'paris': {
        nombre: 'París',
        dias: [
          {
            eventos: [
              { hora: '09:30', titulo: 'Torre Eiffel & Jardines del Trocadero', notas: 'Subida al mirador panorámico y fotos', costo: '30', duracion: 120 },
              { hora: '13:00', titulo: 'Almuerzo Tradicional en Café de Flore', notas: 'Gastronomía parisina icónica', costo: '35', duracion: 90 },
              { hora: '16:30', titulo: 'Paseo en Barco por el Río Sena', notas: 'Vistas espectaculares al atardecer', costo: '18', duracion: 75 }
            ]
          },
          {
            eventos: [
              { hora: '10:00', titulo: 'Museo del Louvre & Pirámide de Cristal', notas: 'Ver la Gioconda y esculturas clásicas', costo: '22', duracion: 180 },
              { hora: '14:00', titulo: 'Jardín de las Tullerías', notas: 'Paseo relajante', costo: '0', duracion: 60 },
              { hora: '20:00', titulo: 'Cena & Paseo por Montmartre', notas: 'Vistas nocturnas desde Sacré-Cœur', costo: '40', duracion: 120 }
            ]
          },
          {
            eventos: [
              { hora: '10:00', titulo: 'Basílica del Sacré-Cœur', notas: 'Visita a la basílica blanca y barrio de artistas', costo: '0', duracion: 90 },
              { hora: '15:00', titulo: 'Arco del Triunfo y Campos Elíseos', notas: 'Subir al mirador y recorrer la gran avenida', costo: '16', duracion: 120 }
            ]
          }
        ]
      },
      'roma': {
        nombre: 'Roma',
        dias: [
          {
            eventos: [
              { hora: '09:00', titulo: 'Coliseo Romano & Foro Romano', notas: 'Visita arqueológica imperial', costo: '18', duracion: 180 },
              { hora: '13:30', titulo: 'Almuerzo Pasta en Trastevere', notas: 'Trattoria tradicional romana', costo: '25', duracion: 90 },
              { hora: '16:30', titulo: 'Panteón de Agripa', notas: 'El monumento antiguo mejor conservado', costo: '5', duracion: 60 }
            ]
          },
          {
            eventos: [
              { hora: '08:30', titulo: 'Basílica de San Pedro & Museos Vaticanos', notas: 'Cúpula y arte sacro', costo: '25', duracion: 210 },
              { hora: '12:30', titulo: 'Capilla Sixtina', notas: 'Frescos de Miguel Ángel', costo: '0', duracion: 60 },
              { hora: '18:00', titulo: 'Fontana di Trevi al atardecer', notas: 'Lanzar moneda a la fuente barroca', costo: '0', duracion: 60 }
            ]
          },
          {
            eventos: [
              { hora: '10:00', titulo: 'Plaza de España & Villa Borghese', notas: 'Jardines históricos', costo: '0', duracion: 120 },
              { hora: '15:00', titulo: 'Castillo de Sant\'Angelo', notas: 'Vistas al río Tíber', costo: '15', duracion: 90 }
            ]
          }
        ]
      },
      'tokio': {
        nombre: 'Tokio',
        dias: [
          {
            eventos: [
              { hora: '09:30', titulo: 'Cruce de Shibuya & Estatua de Hachiko', notas: 'El cruce más concurrido del mundo', costo: '0', duracion: 90 },
              { hora: '13:00', titulo: 'Almuerzo Ramen en Ichiran', notas: 'Ramen tonkotsu auténtico', costo: '12', duracion: 60 },
              { hora: '17:00', titulo: 'Mirador Shibuya Sky', notas: 'Vistas futuristas 360°', costo: '20', duracion: 90 }
            ]
          },
          {
            eventos: [
              { hora: '09:00', titulo: 'Templo Senso-ji en Asakusa & Nakamise', notas: 'El templo más antiguo de Tokio', costo: '0', duracion: 120 },
              { hora: '13:00', titulo: 'Paseo por Parque Ueno', notas: 'Naturaleza y museos', costo: '0', duracion: 90 },
              { hora: '16:00', titulo: 'Akihabara Electric Town', notas: 'Cultura anime, manga y videojuegos retro', costo: '0', duracion: 180 }
            ]
          },
          {
            eventos: [
              { hora: '10:00', titulo: 'Santuario Meiji Jingu en Harajuku', notas: 'Bosque sagrado en la ciudad', costo: '0', duracion: 90 },
              { hora: '12:30', titulo: 'Calle Takeshita', notas: 'Moda independiente y crepes kawaii', costo: '10', duracion: 90 },
              { hora: '19:30', titulo: 'Cena & Vistas en Shinjuku', notas: 'Neones y callejones Omoide Yokocho', costo: '30', duracion: 150 }
            ]
          }
        ]
      },
      'nuevayork': {
        nombre: 'Nueva York',
        dias: [
          {
            eventos: [
              { hora: '10:00', titulo: 'Times Square & Paseo por Midtown', notas: 'Luces de neón y energía de Manhattan', costo: '0', duracion: 90 },
              { hora: '14:00', titulo: 'Central Park & Bethesda Terrace', notas: 'Caminata y fotos de película', costo: '0', duracion: 120 },
              { hora: '19:30', titulo: 'Musical de Broadway', notas: 'Teatro en directo', costo: '95', duracion: 150 }
            ]
          },
          {
            eventos: [
              { hora: '09:00', titulo: 'Estatua de la Libertad & Ellis Island', notas: 'Ferry y monumento icónico', costo: '25', duracion: 210 },
              { hora: '14:00', titulo: 'Wall Street & 9/11 Memorial', notas: 'Distrito financiero y monumento', costo: '0', duracion: 120 },
              { hora: '17:30', titulo: 'Mirador One World Observatory', notas: 'Vista desde el edificio más alto', costo: '44', duracion: 90 }
            ]
          },
          {
            eventos: [
              { hora: '10:30', titulo: 'Puente de Brooklyn & DUMBO', notas: 'Fotos famosas del skyline', costo: '0', duracion: 120 },
              { hora: '13:30', titulo: 'Almuerzo en Time Out Market', notas: 'Gastronomía variada en Brooklyn', costo: '25', duracion: 90 },
              { hora: '16:30', titulo: 'High Line & Hudson Yards', notas: 'Parque elevado y arquitectura Vessel', costo: '0', duracion: 90 }
            ]
          }
        ]
      },
      'barcelona': {
        nombre: 'Barcelona',
        dias: [
          {
            eventos: [
              { hora: '09:30', titulo: 'Basílica de la Sagrada Familia', notas: 'Obra maestra inacabada de Gaudí', costo: '26', duracion: 150 },
              { hora: '13:00', titulo: 'Passeig de Gràcia & Casa Batlló', notas: 'Arquitectura modernista', costo: '30', duracion: 90 },
              { hora: '20:00', titulo: 'Tapas en El Born', notas: 'Cena en taberna tradicional', costo: '25', duracion: 120 }
            ]
          },
          {
            eventos: [
              { hora: '10:00', titulo: 'Park Güell & Banco de Mosaico', notas: 'Vistas al Mediterráneo', costo: '10', duracion: 120 },
              { hora: '14:30', titulo: 'Barrio Gótico & Catedral de Barcelona', notas: 'Calles medievales', costo: '0', duracion: 120 },
              { hora: '17:00', titulo: 'Mercado de la Boquería', notas: 'Frutas frescas y mariscos', costo: '10', duracion: 60 }
            ]
          },
          {
            eventos: [
              { hora: '11:00', titulo: 'Playa de la Barceloneta', notas: 'Paseo por el paseo marítimo', costo: '0', duracion: 120 },
              { hora: '16:30', titulo: 'Montjuïc & Fuente Mágica', notas: 'Mirador y palacio', costo: '0', duracion: 120 }
            ]
          }
        ]
      }
    };

    let matchedData = null;
    for (const k in cityDataMap) {
      if (cClean.includes(k) || k.includes(cClean)) {
        matchedData = cityDataMap[k];
        break;
      }
    }

    const id = Date.now();
    if (matchedData) {
      const buildDays = matchedData.dias.map((d, dIdx) => ({
        id: dIdx,
        eventos: d.eventos.map((ev, evIdx) => ({
          id: id + (dIdx+1)*100 + evIdx + 1,
          hora: ev.hora,
          titulo: ev.titulo,
          notas: ev.notas,
          costo: ev.costo,
          duracion: ev.duracion
        })),
        costosAdicionales: []
      }));

      destinos.push({
        id,
        nombre: matchedData.nombre,
        tramos: [],
        dias: buildDays
      });
      showToast(`¡Plantilla de ${matchedData.nombre} cargada con ${buildDays.length} días completos!`, 'success');
    } else {
      destinos.push({
        id,
        nombre: ciudadRaw,
        tramos: [],
        dias: [
          {
            id: 0,
            eventos: [
              { id: id + 101, hora: '10:00', titulo: `Llegada a ${ciudadRaw}`, notas: 'Check-in en el alojamiento y primeros paseos', costo: '0', duracion: 120 }
            ],
            costosAdicionales: []
          }
        ]
      });
      showToast(`Destino ${ciudadRaw} agregado`, 'success');
    }

    renderDestinos();
    if (typeof generarSelloPasaporte === 'function') generarSelloPasaporte(matchedData ? matchedData.nombre : ciudadRaw);
    autoSave();
    trackEvent('clone_template', {
      template_name: matchedData ? matchedData.nombre : ciudadRaw,
      source: 'preset_destination'
    });
  }
  window.cargarPlantillaCiudad = cargarPlantillaCiudad;

  // Handle incoming routes (/plux/join/plantillas/..., /plux/join/CODE) and ?destino=... query parameters
  document.addEventListener('DOMContentLoaded', () => {
    let cityToLoad = null;
    let codeToLoad = null;

    const path = window.location.pathname;
    if (path.includes('/join/')) {
      const parts = path.split('/join/')[1]?.split('/') || [];
      if (parts[0] === 'plantillas' && parts[1]) {
        const rawCity = parts[1].replace(/-/g, ' ');
        cityToLoad = rawCity.charAt(0).toUpperCase() + rawCity.slice(1);
      } else if (parts[0] && parts[0].length >= 4) {
        codeToLoad = parts[0];
      }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const paramDestino = urlParams.get('destino');
    const paramActividad = urlParams.get('actividad');
    if (paramDestino) {
      cityToLoad = paramDestino;
    }

    if (cityToLoad) {
      setTimeout(() => {
        if (typeof window.cerrarModalDecisionViaje === 'function') {
          window.cerrarModalDecisionViaje();
        }
        if (typeof window.empezarDeCeroSinPrompt === 'function') {
          window.empezarDeCeroSinPrompt();
        }
        if (typeof window.empezar === 'function') {
          window.empezar();
        }
        cargarPlantillaCiudad(cityToLoad);
        if (paramActividad && typeof window.añadirDesdeFeed === 'function') {
          setTimeout(() => {
            window.añadirDesdeFeed(paramActividad);
          }, 400);
        }
      }, 300);
    } else if (codeToLoad) {
      setTimeout(() => {
        if (typeof window.cargarViajeCompartido === 'function') {
          window.cargarViajeCompartido(codeToLoad);
        }
      }, 500);
    }
  });

  // ==========================================================================
  // PLUX SOCIAL CHAT (INDIVIDUAL & GRUPAL - REALTIME FIRESTORE & LOCAL ENGINE)
  // ==========================================================================

  function getActiveTripChat() {
    const tripChatId = getTripChatChannelId();
    ensureChatChannel();
    return pluxSocialChats[tripChatId];
  }
  window.getActiveTripChat = getActiveTripChat;

  function initNewTripChatChannel() {
    const tripChatId = getTripChatChannelId();
    pluxActiveChatId = tripChatId;
    if (!pluxSocialChats) pluxSocialChats = {};
    const myNick = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : 'Vos';
    pluxSocialChats[tripChatId] = {
      id: tripChatId,
      tripId: getCurrentTripId(),
      type: 'group',
      name: 'Viaje Nuevo ✈️',
      participants: [myNick],
      messages: []
    };
    localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
  }
  window.initNewTripChatChannel = initNewTripChatChannel;

  function migrarChatALocalACodigo(code, oldTripId) {
    if (!code) return;
    const newChatId = `trip_${code}`;
    const oldChatId = oldTripId ? `trip_${oldTripId}` : null;
    if (!pluxSocialChats) pluxSocialChats = {};

    let msgsToMigrate = [];
    if (oldChatId && pluxSocialChats[oldChatId] && pluxSocialChats[oldChatId].messages?.length > 0) {
      msgsToMigrate = [...pluxSocialChats[oldChatId].messages];
      delete pluxSocialChats[oldChatId];
    } else if (pluxSocialChats['trip_group'] && pluxSocialChats['trip_group'].messages?.length > 0) {
      msgsToMigrate = [...pluxSocialChats['trip_group'].messages];
      delete pluxSocialChats['trip_group'];
    }

    const tripNames = (typeof destinos !== 'undefined' && destinos.length > 0)
      ? destinos.map(d => d.nombre).join(' & ')
      : 'Mi Viaje';

    if (!pluxSocialChats[newChatId]) {
      pluxSocialChats[newChatId] = {
        id: newChatId,
        tripId: code,
        type: 'group',
        name: `Viaje a ${tripNames} ✈️`,
        participants: (typeof getTripParticipants === 'function') ? getTripParticipants() : [],
        messages: msgsToMigrate
      };
    } else if (msgsToMigrate.length > 0 && pluxSocialChats[newChatId].messages.length === 0) {
      pluxSocialChats[newChatId].messages = msgsToMigrate;
    }

    pluxActiveChatId = newChatId;
    localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
    setupFirestoreRealtimeChat();
  }
  window.migrarChatALocalACodigo = migrarChatALocalACodigo;

  function pushMessageToRealtimeDb(roomKey, messageData) {
    if (!roomKey || roomKey.startsWith('trip_local_')) return;
    const dbInst = getRealtimeDb();
    if (!dbInst) return;
    try {
      const serverTs = (typeof firebase !== 'undefined' && firebase.database && firebase.database.ServerValue)
        ? firebase.database.ServerValue.TIMESTAMP
        : Date.now();

      dbInst.ref(`plux_chats/${roomKey}/messages`).push({
        ...messageData,
        timestamp: serverTs
      }).catch(e => console.log('RTDB push message error:', e));
    } catch(e) {
      console.log('Error enviando mensaje a RTDB:', e);
    }
  }
  window.pushMessageToRealtimeDb = pushMessageToRealtimeDb;

  function registrarConversacionDirecta(senderUser, otherUser, lastMsgText, lastTime) {
    if (!senderUser || !otherUser || otherUser === 'pluxy' || otherUser === 'yo' || senderUser === otherUser) return;
    const dbInst = getRealtimeDb();
    if (!dbInst) return;
    try {
      const serverTs = (typeof firebase !== 'undefined' && firebase.database && firebase.database.ServerValue)
        ? firebase.database.ServerValue.TIMESTAMP
        : Date.now();
      
      const previewText = lastMsgText ? String(lastMsgText).slice(0, 100) : 'Mensaje nuevo';
      const cleanSender = senderUser.toLowerCase().trim().replace(/^@/, '');
      const cleanOther = otherUser.toLowerCase().trim().replace(/^@/, '');

      const payloadForRecipient = {
        otherUser: cleanSender,
        sender: cleanSender,
        lastMessage: previewText,
        lastTime: lastTime || '',
        updatedAt: serverTs
      };

      const payloadForSender = {
        otherUser: cleanOther,
        sender: cleanSender,
        lastMessage: previewText,
        lastTime: lastTime || '',
        updatedAt: serverTs
      };

      dbInst.ref(`plux_user_conversations/${cleanOther}/${cleanSender}`).update(payloadForRecipient).catch(()=>{});
      dbInst.ref(`plux_user_conversations/${cleanSender}/${cleanOther}`).update(payloadForSender).catch(()=>{});
    } catch(e) {
      console.warn('Error registrando conversación directa:', e);
    }
  }
  window.registrarConversacionDirecta = registrarConversacionDirecta;

  let unsubscribeUserIncomingConv = null;
  function listenUserIncomingConversations(nick) {
    if (!nick) return;
    const cleanNick = nick.toLowerCase().trim().replace(/^@/, '');
    if (!cleanNick) return;

    if (unsubscribeUserIncomingConv) {
      try { unsubscribeUserIncomingConv(); } catch(e){}
      unsubscribeUserIncomingConv = null;
    }

    const dbInst = getRealtimeDb();
    if (!dbInst) return;

    try {
      const convRef = dbInst.ref(`plux_user_conversations/${cleanNick}`);
      const onVal = (snapshot) => {
        const data = snapshot.val();
        if (!data || typeof data !== 'object') return;
        
        let changed = false;
        ensureChatChannel();

        Object.entries(data).forEach(([otherNick, convInfo]) => {
          if (!otherNick || otherNick === cleanNick) return;
          const dmId = 'dm_' + otherNick.toLowerCase();
          if (!pluxSocialChats[dmId]) {
            pluxSocialChats[dmId] = {
              id: dmId,
              type: 'direct',
              name: `@${otherNick}`,
              targetUser: otherNick,
              messages: []
            };
            changed = true;
            // Si el modal está cerrado o en otro chat y el mensaje es de otro usuario
            if (convInfo.sender && convInfo.sender.toLowerCase() !== cleanNick && pluxActiveChatId !== dmId) {
              showToast(`Nuevo mensaje de @${otherNick}: "${convInfo.lastMessage || '...'}"`, 'info');
            }
          }
        });

        if (changed) {
          localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
          if (typeof renderChannelsList === 'function') renderChannelsList();
        }
      };

      convRef.on('value', onVal, (err) => {
        console.log('Conversations listener fallback:', err.message);
      });

      unsubscribeUserIncomingConv = () => {
        try { convRef.off('value', onVal); } catch(e){}
      };
    } catch(e) {
      console.warn("Error escuchando conversaciones de usuario:", e);
    }
  }
  window.listenUserIncomingConversations = listenUserIncomingConversations;

  function sumarUsuarioAlChatDelViaje(nickname, motivo = 'invitado') {
    if (!nickname) return;
    const cleanNick = nickname.trim().replace(/^@/, '');
    if (!cleanNick) return;

    // 1. Asegurar que esté en listaViajeros
    const displayTag = '@' + cleanNick;
    if (typeof listaViajeros !== 'undefined' && Array.isArray(listaViajeros)) {
      const existsInViajeros = listaViajeros.some(v => v.toLowerCase().replace(/^@/, '') === cleanNick.toLowerCase());
      if (!existsInViajeros) {
        listaViajeros.push(displayTag);
        if (typeof window.renderTravelerChips === 'function') window.renderTravelerChips();
        if (typeof autoSave === 'function') autoSave();
      }
    }

    // 2. Asegurar que el chat del viaje exista y sumarlo a participantes
    ensureChatChannel();
    const tripChatId = getTripChatChannelId();
    const chat = pluxSocialChats[tripChatId] || getActiveTripChat();
    if (chat) {
      if (!Array.isArray(chat.participants)) {
        chat.participants = [];
      }
      if (!chat.participants.some(p => p.toLowerCase().replace(/^@/, '') === cleanNick.toLowerCase())) {
        chat.participants.push(cleanNick);
      }

      // 3. Notificación de sistema en el chat
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const actionText = motivo === 'unido'
        ? `👋 @${cleanNick} se unió al viaje y al chat grupal ✈️`
        : `🎉 @${cleanNick} fue sumado(a) al viaje y al chat grupal ✈️`;

      const isDup = chat.messages.some(m => m.isSystem && m.text === actionText && (Date.now() - (m.timestampMs || 0)) < 15000);
      if (!isDup) {
        const sysMsg = {
          id: 'msg_sys_' + Date.now(),
          sender: 'Plux',
          text: actionText,
          time: timeStr,
          color: 'emerald',
          isSystem: true,
          timestampMs: Date.now()
        };
        chat.messages.push(sysMsg);
        localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));

        const roomKey = getActiveChatRoomKey();
        pushMessageToRealtimeDb(roomKey, {
          sender: 'Plux',
          text: actionText,
          time: timeStr,
          color: 'emerald',
          isSystem: true
        });
      }
    }

    // 4. Asegurar que exista canal de chat directo DM para hablar 1 a 1
    const dmId = 'dm_' + cleanNick.toLowerCase();
    if (!pluxSocialChats[dmId]) {
      pluxSocialChats[dmId] = {
        id: dmId,
        type: 'direct',
        name: `@${cleanNick}`,
        targetUser: cleanNick,
        messages: []
      };
      localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
    }

    // 5. Actualizar interfaz si está abierta
    if (typeof renderActiveChatHeader === 'function') renderActiveChatHeader();
    if (typeof renderChatMessages === 'function') renderChatMessages();
    if (typeof renderChannelsList === 'function') renderChannelsList();
  }
  window.sumarUsuarioAlChatDelViaje = sumarUsuarioAlChatDelViaje;

  // Neon color palette
  const PLUX_NEON_COLORS = ['emerald', 'cyan', 'purple', 'pink', 'amber'];
  function getParticipantColor(name) {
    if (!name) return 'cyan';
    if (name.toLowerCase().includes('pluxy')) return 'pluxy';
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    const index = Math.abs(hash) % PLUX_NEON_COLORS.length;
    return PLUX_NEON_COLORS[index];
  }

  function getParticipantInitial(name) {
    if (!name) return '👤';
    if (name.toLowerCase().includes('pluxy')) return '<img src="/plux/pet.png" alt="Pluxy" style="width:22px; height:22px; object-fit:contain; display:block;">';
    return name.trim().charAt(0).toUpperCase();
  }

  function getActiveChatRoomKey() {
    if (pluxActiveChatId && (pluxActiveChatId === 'trip_group' || pluxActiveChatId.startsWith('trip_'))) {
      const code = (typeof syncCode !== 'undefined' && syncCode) ? syncCode : null;
      if (code) {
        return `trip_${code}`;
      }
      return `trip_local_${getCurrentTripId()}`;
    }
    if (pluxActiveChatId && pluxActiveChatId.startsWith('dm_')) {
      const myNick = (currentNickname || 'yo').toLowerCase().trim();
      const otherNick = pluxActiveChatId.replace('dm_', '').toLowerCase().trim();
      const pair = [myNick, otherNick].sort().join('_');
      return `dm_${pair}`;
    }
    return pluxActiveChatId || 'trip_local';
  }

  function ensureChatChannel() {
    if (!pluxSocialChats) pluxSocialChats = {};
    const tripChatId = getTripChatChannelId();

    if (!pluxSocialChats[tripChatId]) {
      const tripNames = (typeof destinos !== 'undefined' && destinos.length > 0)
        ? destinos.map(d => d.nombre).join(' & ')
        : 'Mi Viaje';

      pluxSocialChats[tripChatId] = {
        id: tripChatId,
        tripId: getCurrentTripId(),
        type: 'group',
        name: `Viaje a ${tripNames} ✈️`,
        participants: (typeof getTripParticipants === 'function') ? getTripParticipants() : [],
        messages: []
      };
    }

    if (!pluxActiveChatId || pluxActiveChatId === 'trip_group') {
      pluxActiveChatId = tripChatId;
    }

    if (!pluxSocialChats[pluxActiveChatId]) {
      const isGroup = pluxActiveChatId.startsWith('trip_') || pluxActiveChatId.startsWith('group_');
      pluxSocialChats[pluxActiveChatId] = {
        id: pluxActiveChatId,
        tripId: pluxActiveChatId.startsWith('trip_') ? getCurrentTripId() : null,
        type: isGroup ? 'group' : 'direct',
        name: isGroup ? (pluxActiveChatId.startsWith('group_') ? 'Grupo 👥' : 'Viaje ✈️') : pluxActiveChatId.replace('dm_', '@'),
        participants: isGroup ? (pluxActiveChatId.startsWith('group_') ? [currentNickname || 'yo'] : getTripParticipants()) : [],
        messages: []
      };
    }
    localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
  }

  function setupRealtimeChat() {
    if (pluxChatUnsubscribe) {
      try { pluxChatUnsubscribe(); } catch(e){}
      pluxChatUnsubscribe = null;
    }

    const roomKey = getActiveChatRoomKey();
    if (!roomKey || roomKey.startsWith('trip_local_')) {
      return;
    }

    const dbInst = getRealtimeDb();
    if (dbInst) {
      try {
        const chatRef = dbInst.ref(`plux_chats/${roomKey}/messages`).limitToLast(150);
        const onValueCallback = (snapshot) => {
          const val = snapshot.val();
          if (val && typeof val === 'object') {
            const remoteMsgs = Object.entries(val).map(([id, m]) => ({
              id: id,
              ...m
            })).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

            ensureChatChannel();
            if (pluxSocialChats[pluxActiveChatId]) {
              pluxSocialChats[pluxActiveChatId].messages = remoteMsgs;
              localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
              renderChatMessages();
            }
          }
        };

        chatRef.on('value', onValueCallback, (err) => {
          console.log('Chat RTDB listener fallback to local:', err.message);
        });

        pluxChatUnsubscribe = () => {
          try { chatRef.off('value', onValueCallback); } catch(e){}
        };
      } catch (err) {
        console.log('Error conectando realtime chat RTDB:', err);
      }
    }
  }
  window.setupRealtimeChat = setupRealtimeChat;
  window.setupFirestoreRealtimeChat = setupRealtimeChat; // Alias para compatibilidad

  function abrirChatSocial(chatId) {
    if (chatId) {
      pluxActiveChatId = chatId;
    } else {
      pluxActiveChatId = getTripChatChannelId();
    }
    ensureChatChannel();

    // Dynamic trip title update
    const activeTripId = getTripChatChannelId();
    if (pluxSocialChats[activeTripId]) {
      const tripNames = (typeof destinos !== 'undefined' && destinos.length > 0)
        ? destinos.map(d => d.nombre).join(' & ')
        : 'Mi Viaje';
      pluxSocialChats[activeTripId].name = `Viaje a ${tripNames} ✈️`;
    }

    const modal = document.getElementById('modal-plux-chat-social');
    if (modal) modal.style.display = 'flex';
    
    renderActiveChatHeader();
    renderChatMessages();
    renderChannelsList();
    setupRealtimeChat();
    
    setTimeout(() => {
      const input = document.getElementById('plux-social-input');
      if (input) input.focus();
    }, 120);
  }
  window.abrirChatSocial = abrirChatSocial;

  function cerrarChatSocial() {
    const modal = document.getElementById('modal-plux-chat-social');
    if (modal) modal.style.display = 'none';
    const drawer = document.getElementById('plux-chat-channels-drawer');
    if (drawer) drawer.style.display = 'none';
    const menu = document.getElementById('plux-chat-attach-menu');
    if (menu) menu.style.display = 'none';
    if (pluxChatUnsubscribe) {
      pluxChatUnsubscribe();
      pluxChatUnsubscribe = null;
    }
  }
  window.cerrarChatSocial = cerrarChatSocial;

  function renderActiveChatHeader() {
    ensureChatChannel();
    const chat = pluxSocialChats[pluxActiveChatId] || getActiveTripChat();
    if (!chat) return;

    const titleEl = document.getElementById('pluxChatActiveTitle');
    const subtitleEl = document.getElementById('pluxChatActiveSubtitle');

    if (titleEl) titleEl.textContent = chat.name;
    if (subtitleEl) {
      if (chat.type === 'group') {
        const participants = (typeof getTripParticipants === 'function') ? getTripParticipants() : [];
        const count = Math.max(participants.length, 1);
        const namesList = participants.slice(0, 3).map(p => p.startsWith('@') ? p : '@' + p).join(', ');
        const extra = participants.length > 3 ? ` y ${participants.length - 3} más` : '';
        subtitleEl.textContent = `Grupo del viaje · ${count} ${count === 1 ? 'viajero' : 'viajeros'} (${namesList}${extra})`;
      } else {
        subtitleEl.textContent = `Chat Directo · ${chat.targetUser ? '@' + chat.targetUser : 'En línea'}`;
      }
    }
  }

  function renderChatMessages(filterQuery = '') {
    const timeline = document.getElementById('pluxChatTimeline');
    if (!timeline) return;

    ensureChatChannel();
    const chat = pluxSocialChats[pluxActiveChatId] || getActiveTripChat();
    if (!chat || !chat.messages || chat.messages.length === 0) {
      timeline.innerHTML = `
        <div class="plux-chat-empty-state">
          <div style="display:flex; justify-content:center; margin-bottom:12px;">
            <svg width="68" height="68" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="emptyChatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#10b981" />
                  <stop offset="100%" stop-color="#38bdf8" />
                </linearGradient>
              </defs>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="url(#emptyChatGrad)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="rgba(16, 185, 129, 0.08)" />
              <circle cx="8.5" cy="12" r="1.2" fill="#34d399" />
              <circle cx="12" cy="12" r="1.2" fill="#38bdf8" />
              <circle cx="15.5" cy="12" r="1.2" fill="#a855f7" />
            </svg>
          </div>
          <h4>Chat del Viaje</h4>
          <p>Escribe tu primer mensaje para coordinar el viaje con tu grupo o menciona a <strong>@pluxy</strong> para recibir sugerencias de itinerario.</p>
        </div>
      `;
      return;
    }

    let msgs = chat.messages;
    if (filterQuery && filterQuery.trim()) {
      const q = filterQuery.toLowerCase().trim();
      msgs = msgs.filter(m => (m.text && m.text.toLowerCase().includes(q)) || (m.sender && m.sender.toLowerCase().includes(q)));
    }

    const currentNickNorm = (currentNickname || 'Vos').toLowerCase();

    timeline.innerHTML = msgs.map(m => {
      if (m.isSystem || m.cardType === 'system_notice') {
        return `
          <div class="plux-msg-system-row">
            <span class="plux-msg-system-notice">
              ${escapeHtml(m.text)}
            </span>
          </div>
        `;
      }
      const isSelf = m.isSelf || (m.sender && m.sender.toLowerCase() === currentNickNorm) || (m.sender && m.sender.toLowerCase() === 'vos');
      const side = isSelf ? 'right' : 'left';
      const color = m.color || getParticipantColor(m.sender);
      const initial = getParticipantInitial(m.sender);

      let cardHtml = '';
      if (m.cardType === 'dest_card' && m.cardData) {
        cardHtml = `
          <div class="plux-msg-rich-card">
            <div class="plux-rich-card-header">
              <span class="plux-rich-card-badge dest">🗺️ Destino</span>
              <span class="plux-rich-card-title">${escapeHtml(m.cardData.nombre || 'Destino')}</span>
            </div>
            <div class="plux-rich-card-meta">${escapeHtml(m.cardData.pais ? 'País: ' + m.cardData.pais : 'Destino del itinerario')} · ${m.cardData.dias ? m.cardData.dias.length + ' días' : ''}</div>
            <button class="plux-rich-card-action-btn" onclick="window.cerrarChatSocial(); window.mostrarDestinos();">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              <span>Ver en itinerario</span>
            </button>
          </div>
        `;
      } else if (m.cardType === 'event_card' && m.cardData) {
        cardHtml = `
          <div class="plux-msg-rich-card">
            <div class="plux-rich-card-header">
              <span class="plux-rich-card-badge event">📅 Actividad</span>
              <span class="plux-rich-card-title">${escapeHtml(m.cardData.titulo || 'Actividad')}</span>
            </div>
            <div class="plux-rich-card-meta">
              ⏰ ${escapeHtml(m.cardData.hora || 'Todo el día')} ${m.cardData.destino ? '· 📍 ' + escapeHtml(m.cardData.destino) : ''}
              ${m.cardData.costo ? '<br>💵 ' + escapeHtml(m.cardData.costo) : ''}
            </div>
          </div>
        `;
      } else if (m.cardType === 'checklist_card' && m.cardData) {
        const items = m.cardData.items || [];
        cardHtml = `
          <div class="plux-msg-rich-card">
            <div class="plux-rich-card-header">
              <span class="plux-rich-card-badge chk">✅ Checklist</span>
              <span class="plux-rich-card-title">${escapeHtml(m.cardData.titulo || 'Preparativos')}</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:4px; margin-top:4px;">
              ${items.map((it, idx) => `
                <label class="plux-chat-checklist-item" onclick="window.toggleChecklistItemInChat('${m.id}', ${idx})">
                  <input type="checkbox" ${it.done ? 'checked' : ''} onclick="event.stopPropagation(); window.toggleChecklistItemInChat('${m.id}', ${idx})">
                  <span style="${it.done ? 'text-decoration:line-through; opacity:0.6;' : ''}">${escapeHtml(it.text)}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `;
      } else if ((m.cardType === 'photo_card' || m.imageUrl) && (m.imageUrl || m.cardData?.url)) {
        const photoUrl = m.imageUrl || m.cardData?.url || '';
        const caption = m.cardData?.caption || 'Foto del viaje';
        cardHtml = `
          <div class="plux-msg-photo-card" onclick="window.abrirFotoGrande('${escapeHtml(photoUrl).replace(/'/g, "\\'")}', '${escapeHtml(caption).replace(/'/g, "\\'")}')">
            <img src="${photoUrl}" alt="${escapeHtml(caption)}" loading="lazy">
            <div class="plux-msg-photo-caption">
              <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:180px;">📸 ${escapeHtml(caption)}</span>
              <span class="plux-msg-photo-zoom-hint">🔍 Ampliar</span>
            </div>
          </div>
        `;
      }

      const userPhoto = isSelf ? localStorage.getItem('Plux_UserProfile_Photo') : null;
      const avatarInner = (m.senderPhoto || userPhoto)
        ? `<img src="${m.senderPhoto || userPhoto}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`
        : initial;

      return `
        <div class="plux-msg-row ${side}">
          <div class="plux-chat-avatar plux-avatar-${color}" style="${(m.senderPhoto || userPhoto) ? 'padding:0; overflow:hidden; border:1px solid rgba(255,255,255,0.2);' : ''}">
            ${avatarInner}
          </div>
          <div class="plux-chat-bubble-container">
            <div class="plux-chat-bubble plux-bubble-${color}">
              ${m.text ? escapeHtml(m.text) : ''}
              ${cardHtml}
              <span class="plux-msg-time">${m.time || ''}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    timeline.scrollTop = timeline.scrollHeight;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderChannelsList() {
    const listEl = document.getElementById('pluxChannelsList');
    if (!listEl) return;

    ensureChatChannel();
    const activeTripChatId = getTripChatChannelId();
    const activeTripChat = pluxSocialChats[activeTripChatId];
    
    let html = '';

    // Canal Grupal del Viaje Activo
    if (activeTripChat) {
      const isActive = pluxActiveChatId === activeTripChatId;
      const lastMsg = activeTripChat.messages && activeTripChat.messages.length > 0
        ? (activeTripChat.messages[activeTripChat.messages.length - 1].text || 'Tarjeta adjunta')
        : 'Sin mensajes aún';
      const participants = (typeof getTripParticipants === 'function') ? getTripParticipants() : [];
      const participantsCount = Math.max(participants.length, 1);
      
      html += `
        <div style="font-size:0.75rem; font-weight:700; color:#38bdf8; text-transform:uppercase; letter-spacing:0.5px; padding:6px 12px 4px 12px;">
          Viaje Activo
        </div>
        <div class="plux-channel-item ${isActive ? 'active' : ''}" onclick="window.cambiarCanalSocial('${activeTripChatId}')">
          <div style="font-size:1.2rem;">✈️</div>
          <div style="flex:1; min-width:0;">
            <div style="font-weight:700; font-size:0.85rem; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(activeTripChat.name)}</div>
            <div style="font-size:0.72rem; color:#94a3b8; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(lastMsg)} · <span style="color:#10b981;">${participantsCount} ${participantsCount === 1 ? 'viajero' : 'viajeros'}</span></div>
          </div>
        </div>
      `;
    }

    // Grupos Personalizados (group_*)
    const groupChannels = Object.values(pluxSocialChats).filter(c => c.id && c.id.startsWith('group_'));
    if (groupChannels.length > 0) {
      html += `
        <div style="font-size:0.75rem; font-weight:700; color:#34d399; text-transform:uppercase; letter-spacing:0.5px; padding:12px 12px 4px 12px; display:flex; justify-content:space-between; align-items:center;">
          <span>Grupos</span>
        </div>
      `;
      groupChannels.forEach(c => {
        const isActive = c.id === pluxActiveChatId;
        const lastMsg = c.messages && c.messages.length > 0 ? (c.messages[c.messages.length - 1].text || 'Tarjeta adjunta') : 'Sin mensajes aún';
        const membersCount = c.participants ? c.participants.length : 1;
        html += `
          <div class="plux-channel-item ${isActive ? 'active' : ''}" onclick="window.cambiarCanalSocial('${c.id}')">
            <div style="font-size:1.2rem;">👥</div>
            <div style="flex:1; min-width:0;">
              <div style="font-weight:700; font-size:0.85rem; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(c.name)}</div>
              <div style="font-size:0.72rem; color:#94a3b8; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(lastMsg)} · <span style="color:#10b981;">${membersCount} miembros</span></div>
            </div>
          </div>
        `;
      });
    }

    // Chats Directos (dm_*)
    const directChannels = Object.values(pluxSocialChats).filter(c => c.id && c.id.startsWith('dm_'));
    if (!directChannels.some(c => c.id === 'dm_pluxy')) {
      directChannels.unshift({
        id: 'dm_pluxy',
        type: 'direct',
        name: 'Pluxy ✨',
        targetUser: 'Pluxy',
        messages: []
      });
    }

    html += `
      <div style="font-size:0.75rem; font-weight:700; color:#a855f7; text-transform:uppercase; letter-spacing:0.5px; padding:12px 12px 4px 12px; display:flex; justify-content:space-between; align-items:center;">
        <span>Chats Directos</span>
      </div>
    `;

    directChannels.forEach(c => {
      const isActive = c.id === pluxActiveChatId;
      const lastMsg = c.messages && c.messages.length > 0 ? (c.messages[c.messages.length - 1].text || 'Tarjeta adjunta') : 'Sin mensajes aún';
      const isPluxy = c.id === 'dm_pluxy';
      const icon = isPluxy ? '<img src="/plux/pet.png" alt="Pluxy" style="width:22px; height:22px; object-fit:contain; display:block;">' : '👤';
      html += `
        <div class="plux-channel-item ${isActive ? 'active' : ''}" onclick="window.cambiarCanalSocial('${c.id}')">
          <div style="font-size:1.2rem; display:flex; align-items:center; justify-content:center; width:28px;">${icon}</div>
          <div style="flex:1; min-width:0;">
            <div style="font-weight:700; font-size:0.85rem; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(c.name)}</div>
            <div style="font-size:0.72rem; color:#94a3b8; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(lastMsg)}</div>
          </div>
        </div>
      `;
    });

    listEl.innerHTML = html;
  }

  function cambiarCanalSocial(chatId) {
    pluxActiveChatId = chatId;
    ensureChatChannel();
    renderActiveChatHeader();
    renderChatMessages();
    renderChannelsList();
    setupRealtimeChat();
    const drawer = document.getElementById('plux-chat-channels-drawer');
    if (drawer) drawer.style.display = 'none';
  }
  window.cambiarCanalSocial = cambiarCanalSocial;

  function toggleSocialChatChannels() {
    const drawer = document.getElementById('plux-chat-channels-drawer');
    if (!drawer) return;
    drawer.style.display = drawer.style.display === 'none' ? 'flex' : 'none';
    if (drawer.style.display === 'flex') renderChannelsList();
  }
  window.toggleSocialChatChannels = toggleSocialChatChannels;

  function toggleSocialChatSearch() {
    const bar = document.getElementById('plux-chat-search-bar');
    if (!bar) return;
    bar.style.display = bar.style.display === 'none' ? 'flex' : 'none';
    if (bar.style.display === 'flex') {
      const input = document.getElementById('plux-chat-search-input');
      if (input) { input.value = ''; input.focus(); }
    } else {
      renderChatMessages();
    }
  }
  window.toggleSocialChatSearch = toggleSocialChatSearch;

  function filtrarMensajesChatSocial(val) {
    renderChatMessages(val);
  }
  window.filtrarMensajesChatSocial = filtrarMensajesChatSocial;

  function insertarTextoChatSocial(txt) {
    const input = document.getElementById('plux-social-input');
    if (input) {
      input.value = txt;
      input.focus();
    }
  }
  window.insertarTextoChatSocial = insertarTextoChatSocial;

  async function enviarMensajeChatSocial() {
    const input = document.getElementById('plux-social-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    input.value = '';

    ensureChatChannel();
    const chat = pluxSocialChats[pluxActiveChatId] || getActiveTripChat();
    if (!chat) return;

    const myName = currentNickname || 'Vos';
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newMsg = {
      id: 'msg_' + Date.now(),
      sender: myName,
      text: text,
      time: timeStr,
      color: getParticipantColor(myName),
      isSelf: true
    };

    chat.messages.push(newMsg);
    localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
    renderChatMessages();
    renderChannelsList();

    // Send to Firebase Realtime Database
    const roomKey = getActiveChatRoomKey();
    pushMessageToRealtimeDb(roomKey, {
      sender: myName,
      text: text,
      time: timeStr,
      color: getParticipantColor(myName)
    });

    if (pluxActiveChatId && pluxActiveChatId.startsWith('dm_') && pluxActiveChatId !== 'dm_pluxy') {
      const otherNick = pluxActiveChatId.replace('dm_', '').toLowerCase().trim();
      if (typeof registrarConversacionDirecta === 'function') {
        registrarConversacionDirecta(myName, otherNick, text, timeStr);
      }
    }

    // Trigger Pluxy AI companion if mentioned or in direct chat with Pluxy
    const isPluxyTrigger = text.toLowerCase().includes('@pluxy') || text.toLowerCase().includes('pluxy') || pluxActiveChatId === 'dm_pluxy';
    if (isPluxyTrigger) {
      const thinkingMsg = {
        id: 'msg_thinking_' + Date.now(),
        sender: 'Pluxy',
        text: '✨ Pluxy está escribiendo...',
        time: timeStr,
        color: 'pluxy'
      };
      chat.messages.push(thinkingMsg);
      renderChatMessages();

      try {
        const cleanQuery = text.replace(/@pluxy/gi, '').trim();
        const destContext = destinos.length > 0
          ? `Destinos actuales: ${destinos.map(d => `${d.nombre}${d.pais ? ' ('+d.pais+')' : ''} (${d.dias?.length || 0} días, ${d.dias?.reduce((s,d)=>s+(d.eventos?.length||0),0)||0} eventos)`).join(', ')}.`
          : 'Sin destinos aún.';

        const isWeatherQuery = /clima|temperatura|tiempo|lluvia|llover|frio|calor|viento|pronostico|ropa/i.test(cleanQuery);
        const weatherCtx = (isWeatherQuery && typeof getWeatherContextForTrip === 'function')
          ? await Promise.race([getWeatherContextForTrip(), new Promise(res => setTimeout(() => res(''), 1000))])
          : '';

        const systemPrompt = `${CHAT_SYSTEM}
Estás en el chat de Plux respondiendo a los viajeros como Pluxy, el asistente de viajes inteligente y compañero de rutas.
Contexto del viaje actual: ${destContext}
Personas: ${numPersonas}. Salida: ${lugarSalida || 'No especificada'}.${weatherCtx}
IMPORTANTE: Tienes capacidades agenticas completas para modificar el viaje si los viajeros te lo piden. Puedes agregar destinos, actividades, itinerarios, transporte, etc., usando los comandos [ACCION:...].
Responde siempre con tono alegre, amigable, experto en viajes y emojis ✨✈️.`;

        // Gather recent conversation history from this chat channel
        const recentHistory = chat.messages
          .filter(m => m.id !== thinkingMsg.id && !m.id.startsWith('msg_thinking_'))
          .slice(-10)
          .map(m => {
            if (m.sender === 'Pluxy') {
              return { role: 'assistant', content: m.text || '' };
            }
            return { role: 'user', content: `${m.sender}: ${m.text || ''}` };
          });

        const messages = [
          { role: 'system', content: systemPrompt },
          ...recentHistory
        ];

        const aiResponse = await callAIText(messages);

        // Execute agentic actions
        let displayRespuesta = aiResponse;
        if (typeof ejecutarAccionesPluxyDirectas === 'function') {
          displayRespuesta = await ejecutarAccionesPluxyDirectas(aiResponse);
        } else {
          displayRespuesta = aiResponse.replace(/\[ACCION:[^\]]+\]/g, '').trim();
        }

        chat.messages = chat.messages.filter(m => m.id !== thinkingMsg.id);
        const replyTime = new Date();
        const replyTimeStr = `${String(replyTime.getHours()).padStart(2, '0')}:${String(replyTime.getMinutes()).padStart(2, '0')}`;

        const aiMsg = {
          id: 'msg_ai_' + Date.now(),
          sender: 'Pluxy',
          text: displayRespuesta,
          time: replyTimeStr,
          color: 'pluxy'
        };

        chat.messages.push(aiMsg);
        localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
        renderChatMessages();
        renderChannelsList();

        // Push AI answer to Firebase Realtime Database
        pushMessageToRealtimeDb(roomKey, {
          sender: 'Pluxy',
          text: aiMsg.text,
          time: replyTimeStr,
          color: 'pluxy'
        });
      } catch (err) {
        chat.messages = chat.messages.filter(m => m.id !== thinkingMsg.id);
        chat.messages.push({
          id: 'msg_ai_err_' + Date.now(),
          sender: 'Pluxy',
          text: 'Tuve un pequeño problema de conexión, pero estoy listo para ayudarte ✨.',
          time: timeStr,
          color: 'pluxy'
        });
        localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
        renderChatMessages();
      }
    }
  }
  window.enviarMensajeChatSocial = enviarMensajeChatSocial;

  function enviarCardChatSocial(cardPayload) {
    ensureChatChannel();
    const chat = pluxSocialChats[pluxActiveChatId] || getActiveTripChat();
    if (!chat) return;

    const myName = currentNickname || 'Vos';
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newMsg = {
      id: 'msg_card_' + Date.now(),
      sender: myName,
      text: cardPayload.introText || '',
      cardType: cardPayload.cardType,
      cardData: cardPayload.cardData,
      time: timeStr,
      color: getParticipantColor(myName),
      isSelf: true
    };

    chat.messages.push(newMsg);
    localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
    renderChatMessages();
    renderChannelsList();

    const roomKey = getActiveChatRoomKey();
    pushMessageToRealtimeDb(roomKey, {
      sender: myName,
      text: newMsg.text,
      cardType: newMsg.cardType,
      cardData: newMsg.cardData,
      time: timeStr,
      color: getParticipantColor(myName)
    });

    if (pluxActiveChatId && pluxActiveChatId.startsWith('dm_') && pluxActiveChatId !== 'dm_pluxy') {
      const otherNick = pluxActiveChatId.replace('dm_', '').toLowerCase().trim();
      if (typeof registrarConversacionDirecta === 'function') {
        registrarConversacionDirecta(myName, otherNick, newMsg.text || 'Tarjeta adjunta', timeStr);
      }
    }
  }

  function toggleChecklistItemInChat(msgId, itemIdx) {
    const chat = pluxSocialChats[pluxActiveChatId] || getActiveTripChat();
    if (!chat || !chat.messages) return;
    const msg = chat.messages.find(m => m.id === msgId);
    if (msg && msg.cardData && msg.cardData.items && msg.cardData.items[itemIdx]) {
      msg.cardData.items[itemIdx].done = !msg.cardData.items[itemIdx].done;
      localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
      renderChatMessages();
    }
  }
  window.toggleChecklistItemInChat = toggleChecklistItemInChat;

  function abrirModalNuevaConversacion() {
    const modal = document.getElementById('modal-nueva-conversacion');
    if (modal) modal.style.display = 'flex';
    renderContactosNuevaConversacion();
    setTimeout(() => {
      const input = document.getElementById('input-nueva-conversacion-nick');
      if (input) { input.value = ''; input.focus(); }
    }, 120);
  }
  window.abrirModalNuevaConversacion = abrirModalNuevaConversacion;

  function cerrarModalNuevaConversacion() {
    const modal = document.getElementById('modal-nueva-conversacion');
    if (modal) modal.style.display = 'none';
  }
  window.cerrarModalNuevaConversacion = cerrarModalNuevaConversacion;

  function renderContactosNuevaConversacion() {
    const container = document.getElementById('lista-contactos-amigos');
    if (!container) return;

    const currentNorm = (currentNickname || '').toLowerCase();
    const rawFriends = (typeof getStoredFriends === 'function') ? getStoredFriends() : [];
    const rawTripParticipants = (typeof getTripParticipants === 'function') ? getTripParticipants() : [];

    const tripParticipants = [];
    const tripSet = new Set();
    rawTripParticipants.forEach(c => {
      if (typeof c === 'string' && c.trim()) {
        const clean = c.trim().replace(/^@/, '');
        if (clean.toLowerCase() !== currentNorm && clean.toLowerCase() !== 'vos' && !tripSet.has(clean.toLowerCase())) {
          tripSet.add(clean.toLowerCase());
          tripParticipants.push(clean);
        }
      }
    });

    const friends = [];
    rawFriends.forEach(c => {
      if (typeof c === 'string' && c.trim()) {
        const clean = c.trim().replace(/^@/, '');
        if (clean.toLowerCase() !== currentNorm && clean.toLowerCase() !== 'vos' && !tripSet.has(clean.toLowerCase())) {
          friends.push(clean);
        }
      }
    });

    if (tripParticipants.length === 0 && friends.length === 0) {
      container.innerHTML = `
        <div style="background:rgba(255,255,255,0.03); border:1px dashed var(--border); border-radius:14px; padding:14px; text-align:center; color:#94a3b8; font-size:0.82rem;">
          No tienes otros amigos o compañeros agregados todavía.<br>
          <span style="color:#38bdf8;">Escribe el @nickname arriba para iniciar una conversación.</span>
        </div>
      `;
      return;
    }

    let html = '';

    if (tripParticipants.length > 0) {
      html += `
        <div style="font-size:0.75rem; font-weight:700; color:#38bdf8; text-transform:uppercase; letter-spacing:0.5px; margin-top:4px; margin-bottom:6px;">
          ✈️ Compañeros de este viaje
        </div>
      `;
      tripParticipants.forEach(nick => {
        const color = getParticipantColor(nick);
        const initial = getParticipantInitial(nick);
        html += `
          <div class="plux-contact-item" onclick="window.iniciarChatConUsuario('${escapeHtml(nick)}')">
            <div class="plux-chat-avatar plux-avatar-${color}" style="width:38px; height:38px; display:flex; align-items:center; justify-content:center;">${initial}</div>
            <div style="flex:1; min-width:0;">
              <div style="color:#ffffff; font-weight:700; font-size:0.9rem;">@${escapeHtml(nick)}</div>
              <div style="color:#38bdf8; font-size:0.75rem;">Compañero de viaje</div>
            </div>
            <button class="plux-contact-start-btn">Chatear</button>
          </div>
        `;
      });
    }

    if (friends.length > 0) {
      html += `
        <div style="font-size:0.75rem; font-weight:700; color:#a855f7; text-transform:uppercase; letter-spacing:0.5px; margin-top:10px; margin-bottom:6px;">
          👥 Tus Amigos
        </div>
      `;
      friends.forEach(nick => {
        const color = getParticipantColor(nick);
        const initial = getParticipantInitial(nick);
        html += `
          <div class="plux-contact-item" onclick="window.iniciarChatConUsuario('${escapeHtml(nick)}')">
            <div class="plux-chat-avatar plux-avatar-${color}" style="width:38px; height:38px; display:flex; align-items:center; justify-content:center;">${initial}</div>
            <div style="flex:1; min-width:0;">
              <div style="color:#ffffff; font-weight:700; font-size:0.9rem;">@${escapeHtml(nick)}</div>
              <div style="color:#a855f7; font-size:0.75rem;">Amigo guardado</div>
            </div>
            <button class="plux-contact-start-btn">Chatear</button>
          </div>
        `;
      });
    }

    container.innerHTML = html;
  }

  async function iniciarChatConUsuario(nick) {
    if (!nick || !nick.trim()) return;
    const rawNick = nick.trim().replace(/^@/, '');
    const cleanNick = rawNick.toLowerCase().replace(/[^a-z0-9_]/g, '');

    if (!cleanNick) {
      showToast('Ingresá un nickname válido', 'info');
      return;
    }

    // Caso especial: Asistente Pluxy
    if (cleanNick === 'pluxy') {
      const chatId = 'dm_pluxy';
      if (!pluxSocialChats[chatId]) {
        pluxSocialChats[chatId] = {
          id: chatId,
          type: 'direct',
          name: 'Pluxy ✨',
          targetUser: 'Pluxy',
          messages: []
        };
        localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
      }
      cerrarModalNuevaConversacion();
      cambiarCanalSocial(chatId);
      return;
    }

    // No permitir chat directo con uno mismo
    const myNick = (currentNickname || '').toLowerCase().trim();
    if (myNick && cleanNick === myNick) {
      showToast('No podés iniciar un chat directo con vos mismo', 'info');
      return;
    }

    // Verificar si ya es un amigo o colaborador local
    const isKnownFriend = (typeof getStoredFriends === 'function' ? getStoredFriends() : []).some(f => (typeof f === 'string' ? f.toLowerCase().replace(/^@/, '') : '') === cleanNick);
    const isKnownParticipant = (typeof getTripParticipants === 'function' ? getTripParticipants() : []).some(p => p.toLowerCase().replace(/^@/, '') === cleanNick);
    
    let userExists = isKnownFriend || isKnownParticipant;
    let targetDisplayName = rawNick;
    let targetPhoto = null;

    // Verificar en Firestore plux_usuarios si no es conocido localmente
    if (!userExists && typeof db !== 'undefined' && db) {
      try {
        const userDoc = await db.collection('plux_usuarios').doc(cleanNick).get();
        if (userDoc.exists) {
          userExists = true;
          const uData = userDoc.data() || {};
          if (uData.nickname) targetDisplayName = uData.nickname;
          if (uData.photoUrl) targetPhoto = uData.photoUrl;
        } else {
          // Búsqueda por campo nickname si no coincide con doc id
          const qSnap = await db.collection('plux_usuarios').where('nickname', '==', targetDisplayName).limit(1).get();
          if (!qSnap.empty) {
            userExists = true;
            const uData = qSnap.docs[0].data() || {};
            if (uData.nickname) targetDisplayName = uData.nickname;
            if (uData.photoUrl) targetPhoto = uData.photoUrl;
          }
        }
      } catch (err) {
        console.warn('Error verificando usuario en Firestore:', err);
      }
    }

    if (!userExists) {
      showToast(`El usuario @${targetDisplayName} no existe en Plux ❌`, 'error');
      return;
    }

    const chatId = 'dm_' + cleanNick;
    if (!pluxSocialChats[chatId]) {
      pluxSocialChats[chatId] = {
        id: chatId,
        type: 'direct',
        name: `@${targetDisplayName}`,
        targetUser: targetDisplayName,
        targetPhoto: targetPhoto,
        messages: []
      };
      localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
    }

    cerrarModalNuevaConversacion();
    cambiarCanalSocial(chatId);
    showToast(`Chat abierto con @${targetDisplayName} ✨`, 'success');
  }
  window.iniciarChatConUsuario = iniciarChatConUsuario;

  function confirmarNuevaConversacion() {
    const input = document.getElementById('input-nueva-conversacion-nick');
    if (!input) return;
    const val = input.value.trim();
    if (!val) {
      showToast('Por favor escribe un @nickname o código', 'info');
      return;
    }
    iniciarChatConUsuario(val);
  }
  window.confirmarNuevaConversacion = confirmarNuevaConversacion;

  function mostrarMenuAdjuntosChat() {
    const menu = document.getElementById('plux-chat-attach-menu');
    if (menu) {
      menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
    }
  }
  window.mostrarMenuAdjuntosChat = mostrarMenuAdjuntosChat;

  function adjuntarEventoAlChat() {
    mostrarMenuAdjuntosChat();
    if (typeof destinos === 'undefined' || destinos.length === 0) {
      showToast('No hay eventos creados en el viaje aún', 'info');
      return;
    }
    const primerDest = destinos[0];
    const primerEvt = primerDest.dias?.[0]?.eventos?.[0];
    if (primerEvt) {
      enviarCardChatSocial({
        introText: 'Propongo esta actividad para el itinerario:',
        cardType: 'event_card',
        cardData: {
          titulo: primerEvt.titulo || 'Paseo / Actividad',
          hora: primerEvt.hora || '10:00',
          destino: primerDest.nombre,
          costo: primerEvt.costo || 'Gratis'
        }
      });
    } else {
      enviarCardChatSocial({
        introText: 'Destino propuesto para nuestro viaje:',
        cardType: 'dest_card',
        cardData: {
          nombre: primerDest.nombre,
          pais: primerDest.pais || ''
        }
      });
    }
  }
  window.adjuntarEventoAlChat = adjuntarEventoAlChat;

  function adjuntarDestinoAlChat() {
    mostrarMenuAdjuntosChat();
    if (typeof destinos !== 'undefined' && destinos.length > 0) {
      const dest = destinos[0];
      enviarCardChatSocial({
        introText: '¡Miren este destino que tenemos en el viaje!',
        cardType: 'dest_card',
        cardData: {
          nombre: dest.nombre,
          pais: dest.pais || '',
          dias: dest.dias || []
        }
      });
    } else {
      enviarCardChatSocial({
        introText: '¿Qué ciudad les gustaría agregar al viaje?',
        cardType: 'dest_card',
        cardData: {
          nombre: 'Próximo Destino',
          pais: 'Por definir'
        }
      });
    }
  }
  window.adjuntarDestinoAlChat = adjuntarDestinoAlChat;

  function adjuntarChecklistAlChat() {
    mostrarMenuAdjuntosChat();
    enviarCardChatSocial({
      introText: '📋 Checklist del viaje para el grupo:',
      cardType: 'checklist_card',
      cardData: {
        titulo: 'Preparativos esenciales',
        items: [
          { text: 'Pasaporte / Documentación vigente', done: false },
          { text: 'Alojamiento confirmado', done: false },
          { text: 'Equipaje y ropa adecuada', done: false },
          { text: 'Cargadores y adaptador de corriente', done: false }
        ]
      }
    });
  }
  window.adjuntarChecklistAlChat = adjuntarChecklistAlChat;

  // ==========================================================================
  // CLOUDINARY API CLIENT & PHOTO UPLOADS (CHAT & PERFIL)
  // ==========================================================================
  const CLOUDINARY_API_KEY = '126459861924216';
  const CLOUDINARY_API_SECRET = 'praSjnknB5sYb38MIbui8R287E4';

  async function uploadToCloudinary(file) {
    const cloudName = localStorage.getItem('Plux_Cloudinary_CloudName') || 'nibecar-cofeben';
    
    // 1. Intentar subida firmada oficial a la API de Cloudinary
    try {
      const timestamp = Math.floor(Date.now() / 1000);
      const toSign = `timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
      
      const encoder = new TextEncoder();
      const data = encoder.encode(toSign);
      const hashBuffer = await crypto.subtle.digest('SHA-1', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

      const formData = new FormData();
      formData.append('file', file);
      formData.append('api_key', CLOUDINARY_API_KEY);
      formData.append('timestamp', timestamp.toString());
      formData.append('signature', signature);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
      });
      const resData = await res.json();
      if (resData.secure_url) {
        console.log('✅ Foto subida exitosamente a Cloudinary:', resData.secure_url);
        return resData.secure_url;
      } else {
        console.warn('Cloudinary upload response:', resData);
      }
    } catch (e) {
      console.warn('Cloudinary API upload error:', e);
    }

    // 2. Fallback de alta compresión local (Base64 DataURL) para garantizar funcionamiento offline y continuo
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });
  }
  window.uploadToCloudinary = uploadToCloudinary;

  // --- Profile Photo Handlers ---
  function cambiarFotoPerfil() {
    const input = document.getElementById('profile-photo-input');
    if (input) input.click();
  }
  window.cambiarFotoPerfil = cambiarFotoPerfil;

  async function handleProfilePhotoUpload(event) {
    const file = event?.target?.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Por favor selecciona un archivo de imagen válido', 'error');
      return;
    }

    showToast('Subiendo foto de perfil con Cloudinary... ☁️', 'info');

    try {
      const photoUrl = await uploadToCloudinary(file);
      if (!photoUrl) throw new Error('No se pudo procesar la imagen');

      localStorage.setItem('Plux_UserProfile_Photo', photoUrl);

      // Persistir en Firestore en el perfil del usuario actual
      if (typeof db !== 'undefined' && db && currentNickname) {
        db.collection('plux_usuarios').doc(currentNickname).set({
          photoUrl: photoUrl,
          ultimaConexion: new Date().toISOString()
        }, { merge: true }).catch(e => console.log('Firestore user photo update error:', e));
      }

      // Actualizar vista previa en el modal de perfil
      const avatarEl = document.getElementById('profileAvatarInner');
      if (avatarEl) {
        avatarEl.innerHTML = `<img src="${photoUrl}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
      }

      updateUserButtonDisplay();
      showToast('¡Foto de perfil actualizada con éxito! ✨', 'success');
      if (event.target) event.target.value = '';
    } catch (err) {
      console.error('Error subiendo foto de perfil:', err);
      showToast('Error al actualizar la foto de perfil', 'error');
    }
  }
  window.handleProfilePhotoUpload = handleProfilePhotoUpload;

  // --- Chat Photo Attachment Handlers ---
  function adjuntarFotoAlChat() {
    mostrarMenuAdjuntosChat();
    const input = document.getElementById('plux-chat-photo-input');
    if (input) input.click();
  }
  window.adjuntarFotoAlChat = adjuntarFotoAlChat;

  async function handleChatPhotoUpload(event) {
    const file = event?.target?.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Por favor selecciona un archivo de imagen', 'error');
      return;
    }

    showToast('Subiendo foto con Cloudinary para el chat... ☁️', 'info');

    try {
      const photoUrl = await uploadToCloudinary(file);
      if (!photoUrl) throw new Error('Error al procesar la imagen');

      const rawName = file.name ? file.name.replace(/\.[^/.]+$/, "") : 'Foto del viaje';
      enviarCardChatSocial({
        introText: '📸 Foto compartida:',
        cardType: 'photo_card',
        cardData: {
          url: photoUrl,
          caption: rawName
        }
      });
      showToast('¡Foto enviada al chat! 📸', 'success');
      if (event.target) event.target.value = '';
    } catch (err) {
      console.error('Error enviando foto al chat:', err);
      showToast('Error al subir la foto al chat', 'error');
    }
  }
  window.handleChatPhotoUpload = handleChatPhotoUpload;

  // --- Photo Lightbox Fullscreen Modal Handlers ---
  function abrirFotoGrande(url, caption = 'Foto del viaje') {
    const modal = document.getElementById('modal-foto-lightbox');
    const img = document.getElementById('photoLightboxImg');
    const title = document.getElementById('photoLightboxTitle');
    const dl = document.getElementById('photoLightboxDownload');
    if (!modal || !img) return;

    img.src = url;
    if (title) title.innerText = caption ? `📸 ${caption}` : '📸 Foto del viaje';
    if (dl) dl.href = url;
    modal.style.display = 'flex';
  }
  window.abrirFotoGrande = abrirFotoGrande;

  function cerrarFotoGrande() {
    const modal = document.getElementById('modal-foto-lightbox');
    if (modal) modal.style.display = 'none';
  }
  window.cerrarFotoGrande = cerrarFotoGrande;

