// [MODULARIZADO] Movido a js/plux-i18n.js
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
    var unsubscribeUserIncomingConv = null;
    var userProfileUnsubscribe = null;
    var userPreferences = {
      eventsPerDay: 4,
      transportType: 'any',
      pace: 'relaxed'
    };

    function getPluxProfileRef() {
      if (!db && typeof getFirestoreDb === 'function') {
        db = getFirestoreDb();
      }
      if (!db && typeof firebase !== 'undefined' && firebase.firestore) {
        db = firebase.firestore();
      }
      const uid = currentUserUid || (firebaseUser && firebaseUser.uid) || currentNickname || localStorage.getItem('Plux_Uid') || localStorage.getItem('Plux_Nickname');
      if (!db || !uid) return null;
      return db.collection('plux_usuarios').doc(uid);
    }

    function themeDisplayName() {
      const key = (currentTheme || 'theme-oscuro').replace('theme-', '');
      return t('temas.' + key) || key;
    }

    function applyCuentaModalI18n() {
      const el = (id, key) => { const n = document.getElementById(id); if (n) n.textContent = t(key); };
      const ph = (id, key) => { const n = document.getElementById(id); if (n) n.placeholder = t(key); };

      el('cuentaTitle', 'cuenta_title');
      el('cuentaNibecarSection', 'cuenta_nibecar_section');
      el('cuentaNicknameSection', 'cuenta_nickname_section');
      el('cuentaLinkLogin', 'auth_login');
      el('cuentaLinkRegister', 'auth_register');
      el('cuentaPasswordOptional', 'cuenta_password_optional');
      
      // Nibecar Cofeben tabs and forms
      el('tabNCLogin', 'auth_login');
      el('tabNCRegister', 'auth_register');
      el('btnNCLoginSubmit', 'auth_enter_btn');
      el('btnNCRegisterSubmit', 'auth_register');
      el('lblNCOr', 'auth_or');
      el('btnNCGoogleTxt', 'auth_google_continue');

      // Nickname tabs and forms
      el('tab-login-btn', 'auth_login');
      el('tab-register-btn', 'auth_register_short');
      el('btnNickLoginSubmit', 'auth_login');
      el('btnNickRegSubmit', 'auth_register_short');

      // Update placeholders
      ph('ncLoginEmail', 'auth_email_nick_ph');
      ph('ncLoginPassword', 'auth_password_optional_nick_ph');
      ph('ncRegEmail', 'auth_email_address_ph');
      ph('ncRegPassword', 'auth_password_min6_ph');
      ph('ncRegPassword2', 'auth_repeat_password_ph');
      ph('login-nickname', 'cuenta_nickname_placeholder');
      ph('login-password', 'cuenta_password_placeholder');
      ph('register-password', 'cuenta_password_optional_placeholder');
      
      // Re-apply tab contrast colors according to active language and state
      if (typeof window.switchNCTab === 'function') {
        const isReg = document.getElementById('form-nc-register')?.style.display === 'flex';
        window.switchNCTab(isReg ? 'register' : 'login');
      }
      if (typeof window.switchCuentaTab === 'function') {
        const isReg = document.getElementById('form-register')?.style.display === 'flex';
        window.switchCuentaTab(isReg ? 'register' : 'login');
      }

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

      const el = (id, key) => { const n = document.getElementById(id); if (n) { const val = t(key); if (val && val !== key) n.textContent = val; } };
      const ph = (id, key) => { const n = document.getElementById(id); if (n) { const val = t(key); if (val && val !== key) n.placeholder = val; } };

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
      el('lblThemeByLang', 'theme_by_lang');
      el('lblThemeByLangMobile', 'theme_by_lang');

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
      const dTitle = document.getElementById('descubrirTitle');
      if (dTitle) {
        dTitle.innerHTML = '<i class="fa-solid fa-compass" style="color:var(--verde); margin-right:8px;"></i>' + (t('descubrir_title') || 'Descubrir');
      }
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
      const sym = typeof getSimboloMoneda === 'function' ? getSimboloMoneda() : '€';
      setEl('statBudget', `${Math.round(totalBudget)}${sym}`);
    }

    function cerrarCuenta() {
      document.getElementById('modal-cuenta').style.display = 'none';
      if (typeof window.cerrarAmigos === 'function') window.cerrarAmigos();
      if (typeof window.cerrarSeguridad === 'function') window.cerrarSeguridad();
      if (typeof window.cerrarInfoPersonal === 'function') window.cerrarInfoPersonal();
      if (typeof window.cerrarSupport === 'function') window.cerrarSupport();
      const prefModal = document.getElementById('modal-preferencias');
      if (prefModal) prefModal.remove();
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
        if (typeof userProfileUnsubscribe === 'function') {
          try { userProfileUnsubscribe(); } catch(e){}
          userProfileUnsubscribe = null;
        }

        if (borrarTodo) {
          localStorage.removeItem(TRIPS_STORAGE_KEY);
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

      const isItWhite = document.body.classList.contains('lang-theme-active') && document.body.classList.contains('lang-it');
      const activeTextColor = isItWhite ? '#0f172a' : 'white';

      if (tabLogin) {
        tabLogin.style.background = isLogin ? 'var(--azul)' : 'transparent';
        tabLogin.style.color = isLogin ? activeTextColor : 'var(--gris)';
      }
      if (tabReg) {
        tabReg.style.background = !isLogin ? 'var(--azul)' : 'transparent';
        tabReg.style.color = !isLogin ? activeTextColor : 'var(--gris)';
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

      const isItWhite = document.body.classList.contains('lang-theme-active') && document.body.classList.contains('lang-it');
      const activeTextColor = isItWhite ? '#0f172a' : 'white';

      if (tabLogin) {
        tabLogin.classList.toggle('active', isLogin);
        tabLogin.style.background = isLogin ? 'var(--azul)' : 'rgba(255,255,255,0.1)';
        tabLogin.style.color = isLogin ? activeTextColor : 'var(--gris)';
      }
      if (tabRegister) {
        tabRegister.classList.toggle('active', !isLogin);
        tabRegister.style.background = !isLogin ? 'var(--azul)' : 'rgba(255,255,255,0.1)';
        tabRegister.style.color = !isLogin ? activeTextColor : 'var(--gris)';
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
          const hashedPass = (typeof window.hashPassword === 'function') ? await window.hashPassword(userPass) : userPass;
          if (userPass !== userData.password && hashedPass !== userData.password) {
            showToast('Contraseña incorrecta', 'error');
            return;
          }
          // Auto-upgrade legacy plaintext password to SHA-256 hash
          if (userPass === userData.password && hashedPass !== userData.password) {
            userData.password = hashedPass;
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
        if ((!destinos || destinos.length === 0) && mergedTrips.length > 0) {
          cargarViaje(mergedTrips.length - 1, false);
        }
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
        const storedPassword = (hasPassword && password)
          ? ((typeof window.hashPassword === 'function') ? await window.hashPassword(password) : password)
          : null;
        const userData = {
          uid: nick,
          nickname: nick,
          email: null,
          photoUrl: localPhoto,
          password: storedPassword,
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
        const existingIdx = result.findIndex(cTrip => {
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
        if (existingIdx === -1) {
          result.push(lTrip);
        } else {
          // If local modification timestamp is newer, prefer local properties
          const lTime = new Date(lTrip.fecha || 0).getTime();
          const cTime = new Date(result[existingIdx].fecha || 0).getTime();
          if (lTime >= cTime) {
            result[existingIdx] = { ...result[existingIdx], ...lTrip };
          }
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
      if (!db && typeof getFirestoreDb === 'function') db = getFirestoreDb();
      if (!db && typeof firebase !== 'undefined' && firebase.firestore) db = firebase.firestore();

      const ref = getPluxProfileRef();
      const nick = currentNickname || localStorage.getItem('Plux_Nickname');
      const uid = currentUserUid || (firebaseUser && firebaseUser.uid) || localStorage.getItem('Plux_Uid') || nick;

      if (!ref && !nick && !uid) return;
      if (!db) return;

      const trips = getStoredTrips();
      const templates = getStoredTemplates();
      const friends = getStoredFriends();
      const photo = localStorage.getItem('Plux_UserProfile_Photo') || (firebaseUser && firebaseUser.photoURL) || null;
      let personalInfo = {};
      try {
        personalInfo = JSON.parse(localStorage.getItem('Plux_PersonalInfo') || '{}');
      } catch(e){}

      const rawPayload = {
        uid: uid,
        email: firebaseUser?.email || null,
        nickname: nick || null,
        photoUrl: photo,
        idioma: typeof currentLang !== 'undefined' ? currentLang : 'es',
        tema: typeof currentTheme !== 'undefined' ? currentTheme : 'theme-oscuro',
        info_personal: personalInfo,
        nombreCompleto: personalInfo.fullname || (firebaseUser ? firebaseUser.displayName : null) || null,
        residencia: personalInfo.location || null,
        estiloViaje: personalInfo.travelStyle || null,
        bio: personalInfo.bio || null,
        viajes_guardados: trips,
        plantillas: templates,
        preferencias: (typeof userPreferences !== 'undefined' && userPreferences) ? userPreferences : { eventsPerDay: 4, transportType: 'any', pace: 'relaxed' },
        amigos: friends
      };

      // Deep clean undefined values so Firestore never rejects the write
      let safePayload = {};
      try {
        safePayload = JSON.parse(JSON.stringify(rawPayload));
      } catch(e) {
        safePayload = rawPayload;
      }
      safePayload.ultimaConexion = (typeof firebase !== 'undefined' && firebase.firestore && firebase.firestore.FieldValue)
        ? firebase.firestore.FieldValue.serverTimestamp()
        : new Date().toISOString();

      try {
        if (ref) {
          ref.set(safePayload, { merge: true }).catch(e => console.warn("Sincronización por ref:", e));
        }
        if (uid && db) {
          db.collection('plux_usuarios').doc(uid).set(safePayload, { merge: true }).catch(e => console.warn("Sincronización por uid:", e));
        }
        if (nick && db && uid !== nick) {
          db.collection('plux_usuarios').doc(nick).set(safePayload, { merge: true }).catch(e => console.warn("Sincronización por nick:", e));
        }
      } catch (err) {
        console.warn("Error enviando perfil a Firestore:", err);
      }
    }

    async function cargarPerfilUsuario() {
      if (!db && typeof getFirestoreDb === 'function') db = getFirestoreDb();
      if (!db && typeof firebase !== 'undefined' && firebase.firestore) db = firebase.firestore();

      const targetUid = currentUserUid || (firebaseUser && firebaseUser.uid) || localStorage.getItem('Plux_Uid');
      const targetNick = currentNickname || localStorage.getItem('Plux_Nickname');
      const targetEmail = firebaseUser?.email || null;

      if (!targetUid && !targetNick && !targetEmail) return;
      if (!db) return;

      try {
        let doc = null;

        // 1. Try by targetUid (Firebase Auth UID or Nick)
        if (targetUid) {
          try {
            const uidDoc = await db.collection('plux_usuarios').doc(targetUid).get();
            if (uidDoc && uidDoc.exists) doc = uidDoc;
          } catch(e) {}
        }

        // 2. Fallback: Try by targetNick
        if ((!doc || !doc.exists) && targetNick) {
          try {
            const nickDoc = await db.collection('plux_usuarios').doc(targetNick).get();
            if (nickDoc && nickDoc.exists) doc = nickDoc;
          } catch(e) {}
        }

        // 3. Fallback: Query by email if logged in with Firebase Auth
        if ((!doc || !doc.exists) && targetEmail) {
          try {
            const qEmail = await db.collection('plux_usuarios').where('email', '==', targetEmail).limit(1).get();
            if (!qEmail.empty) doc = qEmail.docs[0];
          } catch(e) {}
        }

        // 4. Fallback: Query where uid == targetUid
        if ((!doc || !doc.exists) && targetUid) {
          try {
            const qUid = await db.collection('plux_usuarios').where('uid', '==', targetUid).limit(1).get();
            if (!qUid.empty) doc = qUid.docs[0];
          } catch(e) {}
        }

        // 5. Fallback: Query where nickname == targetNick
        if ((!doc || !doc.exists) && targetNick) {
          try {
            const qNick = await db.collection('plux_usuarios').where('nickname', '==', targetNick).limit(1).get();
            if (!qNick.empty) doc = qNick.docs[0];
          } catch(e) {}
        }

        if (doc && doc.exists) {
          const data = doc.data() || {};
          let nick = data.nickname;
          if (!nick && firebaseUser) {
            nick = await generarNicknameUnico(firebaseUser);
          } else if (!nick) {
            nick = currentNickname || 'viajero';
          }
          currentNickname = String(nick).toLowerCase().replace(/[^a-z0-9_]/g, '');
          currentUserUid = data.uid || currentUserUid || currentNickname;
          localStorage.setItem('Plux_Nickname', currentNickname);
          localStorage.setItem('Plux_Uid', currentUserUid);

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

          // Auto-load latest trip in editor if currently empty
          if ((!destinos || destinos.length === 0) && mergedTrips.length > 0) {
            cargarViaje(mergedTrips.length - 1, false);
          }

          // Sync back to cloud if local had trips not yet in cloud
          if (mergedTrips.length > cloudTrips.length) {
            sincronizarPerfil();
          }

          if (typeof listenUserIncomingConversations === 'function') listenUserIncomingConversations(currentNickname);

          // Subscribe to real-time updates for trips from other devices
          if (doc.ref && !userProfileUnsubscribe) {
            userProfileUnsubscribe = doc.ref.onSnapshot(snap => {
              if (snap && snap.exists && !isSyncing) {
                const liveData = snap.data();
                if (liveData && Array.isArray(liveData.viajes_guardados)) {
                  const currLocal = getStoredTrips();
                  const updatedMerged = mergeTrips(currLocal, liveData.viajes_guardados);
                  if (JSON.stringify(currLocal) !== JSON.stringify(updatedMerged)) {
                    saveTrips(updatedMerged, false);
                    renderTripLists();
                    if ((!destinos || destinos.length === 0) && updatedMerged.length > 0) {
                      cargarViaje(updatedMerged.length - 1, false);
                    }
                  }
                }
              }
            }, err => console.warn("Snapshot error perfil:", err));
          }
        } else {
          if (firebaseUser) {
            const nick = await generarNicknameUnico(firebaseUser);
            currentNickname = nick;
            currentUserUid = firebaseUser.uid;
            localStorage.setItem('Plux_Nickname', currentNickname);
            localStorage.setItem('Plux_Uid', currentUserUid);
            if (firebaseUser.photoURL) {
              localStorage.setItem('Plux_UserProfile_Photo', firebaseUser.photoURL);
            }
            const localTrips = getStoredTrips();
            if (localTrips.length > 0) {
              sincronizarPerfil();
            }
            updateUserButtonDisplay();
            renderTripLists();
            if (typeof listenUserIncomingConversations === 'function') listenUserIncomingConversations(currentNickname);
          } else if (currentNickname) {
            const localTrips = getStoredTrips();
            if (localTrips.length > 0) {
              sincronizarPerfil();
            }
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

    // ================== AUTO-DETECCIÓN DE IDIOMA Y TEMA ==================
    const SPANISH_COUNTRIES = new Set([
      'ES', 'AR', 'MX', 'CO', 'CL', 'PE', 'VE', 'UY', 'PY', 'BO',
      'EC', 'GT', 'CU', 'DO', 'HN', 'SV', 'NI', 'CR', 'PA', 'PR', 'GQ'
    ]);

    function detectInitialLanguage() {
      try {
        // 1. Detección por idiomas configurados en el navegador (navigator.languages)
        const browserLangs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''])
          .filter(Boolean)
          .map(l => l.toLowerCase());

        for (const raw of browserLangs) {
          const code = raw.split('-')[0];
          const region = (raw.split('-')[1] || '').toUpperCase();

          // Español (países hispanohablantes o navegador en español)
          if (code === 'es' || SPANISH_COUNTRIES.has(region)) return 'es';
          // Idiomas específicos soportados en Plux
          if (code === 'it' || region === 'IT') return 'it';
          if (code === 'fr' || region === 'FR') return 'fr';
          if (code === 'de' || ['DE', 'AT', 'CH'].includes(region)) return 'de';

          // Cualquier otro país o idioma internacional (turco, chino, japonés, ruso, inglés, etc.) -> inglés
          return 'en';
        }

        // 2. Detección por zona horaria como pista geográfica instantánea
        let tz = '';
        try { tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase(); } catch (_) {}
        if (tz) {
          // Zonas hispanohablantes -> español
          const hispanicTzs = [
            'argentina', 'buenos_aires', 'cordoba', 'catamarca', 'jujuy', 'mendoza', 'tucuman', 'ushuaia',
            'madrid', 'canary', 'ceuta', 'mexico_city', 'cancun', 'monterrey', 'tijuana', 'chihuahua',
            'mazatlan', 'hermosillo', 'bogota', 'lima', 'santiago', 'caracas', 'montevideo', 'asuncion',
            'la_paz', 'guayaquil', 'quito', 'havana', 'santo_domingo', 'panama', 'costa_rica',
            'guatemala', 'el_salvador', 'tegucigalpa', 'managua'
          ];
          if (hispanicTzs.some(h => tz.includes(h))) return 'es';
          if (tz.includes('rome')) return 'it';
          if (tz.includes('paris')) return 'fr';
          if (tz.includes('berlin') || tz.includes('vienna') || tz.includes('zurich')) return 'de';

          // Cualquier otra zona horaria mundial (Turquía, China, USA, etc.) -> inglés
          return 'en';
        }
      } catch (e) {
        console.warn('[Plux] detectInitialLanguage error:', e);
      }
      return 'en'; // Default internacional: inglés
    }

    function autoDetectCountryGeoIP() {
      // Si el usuario ya eligió manualmente un idioma antes, respetamos su selección
      if (localStorage.getItem('Plux_Lang_Manual')) return;

      fetch('https://api.country.is/', { cache: 'no-store' })
        .then(res => res.json())
        .then(data => {
          if (!data || !data.country) return;
          const c = data.country.toUpperCase();
          let targetLang = 'en'; // Todo el mundo por defecto en inglés (Turquía, China, USA, Japón, Brasil, etc.)

          if (SPANISH_COUNTRIES.has(c)) {
            targetLang = 'es'; // Hispanohablantes -> español
          } else if (c === 'IT') {
            targetLang = 'it';
          } else if (c === 'FR') {
            targetLang = 'fr';
          } else if (['DE', 'AT', 'CH'].includes(c)) {
            targetLang = 'de';
          }

          if (targetLang && targetLang !== currentLang && !localStorage.getItem('Plux_Lang_Manual')) {
            console.log(`[Plux GeoIP] País detectado: ${c} -> configurando idioma a: ${targetLang}`);
            setLanguage(targetLang, false, false);
          }
        })
        .catch(err => {
          // Fallback silencioso si no hay red o está bloqueado
        });
    }

    // ================== GESTIÓN DE TEMA SEGÚN IDIOMA ==================
    let themeByLangEnabled = localStorage.getItem('Plux_ThemeByLang') !== 'false';

    function setThemeByLang(enabled) {
      themeByLangEnabled = !!enabled;
      localStorage.setItem('Plux_ThemeByLang', themeByLangEnabled ? 'true' : 'false');
      applyThemeByLangState();
    }
    window.setThemeByLang = setThemeByLang;

    function applyThemeByLangState() {
      const chk = document.getElementById('chkThemeByLang');
      if (chk) chk.checked = themeByLangEnabled;
      const chkMob = document.getElementById('chkThemeByLangMobile');
      if (chkMob) chkMob.checked = themeByLangEnabled;

      if (themeByLangEnabled) {
        document.body.classList.add('lang-theme-active');
      } else {
        document.body.classList.remove('lang-theme-active');
      }

      if (typeof applyCuentaModalI18n === 'function') {
        applyCuentaModalI18n();
      }
    }
    window.applyThemeByLangState = applyThemeByLangState;

    // ================== VARIABLES GLOBALES ==================
    let currentLang = localStorage.getItem('Plux_Lang') || detectInitialLanguage();
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

    // ================== SISTEMA MULTIDIVISA (MONEDAS) ==================
    const PLUX_CURRENCIES = [
      { code: 'EUR', symbol: '€', name: 'Euro', badge: 'EUR' },
      { code: 'USD', symbol: '$', name: 'Dolar USA', badge: 'USD' },
      { code: 'ARS', symbol: '$', name: 'Peso Argentino', badge: 'ARS' },
      { code: 'BRL', symbol: 'R$', name: 'Real Brasileño', badge: 'BRL' },
      { code: 'GBP', symbol: '£', name: 'Libra Esterlina', badge: 'GBP' },
      { code: 'JPY', symbol: '¥', name: 'Yen Japones', badge: 'JPY' },
      { code: 'MXN', symbol: '$', name: 'Peso Mexicano', badge: 'MXN' },
      { code: 'CLP', symbol: '$', name: 'Peso Chileno', badge: 'CLP' },
      { code: 'COP', symbol: '$', name: 'Peso Colombiano', badge: 'COP' },
      { code: 'PEN', symbol: 'S/', name: 'Sol Peruano', badge: 'PEN' },
      { code: 'UYU', symbol: '$', name: 'Peso Uruguayo', badge: 'UYU' },
      { code: 'CAD', symbol: '$', name: 'Dolar Canadiense', badge: 'CAD' },
      { code: 'AUD', symbol: '$', name: 'Dolar Australiano', badge: 'AUD' },
      { code: 'CHF', symbol: 'CHF', name: 'Franco Suizo', badge: 'CHF' }
    ];

    const TASAS_CAMBIO = {
      USD: 1.0,
      EUR: 0.92,
      GBP: 0.79,
      JPY: 155.0,
      ARS: 1250.0,
      BRL: 5.50,
      MXN: 18.2,
      CAD: 1.36,
      AUD: 1.52,
      CHF: 0.90,
      CNY: 7.25,
      CLP: 940.0,
      COP: 4100.0,
      PEN: 3.75,
      UYU: 41.0
    };

    let monedaViajeActual = localStorage.getItem('plux_moneda') || 'EUR';

    function getMonedaActiva() {
      return monedaViajeActual || localStorage.getItem('plux_moneda') || 'EUR';
    }
    window.getMonedaActiva = getMonedaActiva;

    function getSimboloMoneda(code) {
      const curr = code || getMonedaActiva();
      const item = PLUX_CURRENCIES.find(c => c.code === curr);
      return item ? item.symbol : '€';
    }
    window.getSimboloMoneda = getSimboloMoneda;

    function convertirMonto(monto, monedaOrigen, monedaDestino) {
      const val = parseFloat(monto);
      if (isNaN(val) || val <= 0) return 0;
      if (!monedaOrigen || !monedaDestino || monedaOrigen === monedaDestino) return val;
      const tasaOrigen = TASAS_CAMBIO[monedaOrigen] || 1.0;
      const tasaDestino = TASAS_CAMBIO[monedaDestino] || 1.0;
      const enUsd = val / tasaOrigen;
      return enUsd * tasaDestino;
    }
    window.convertirMonto = convertirMonto;

    function redondearMoneda(val, moneda) {
      if (moneda === 'ARS' || moneda === 'JPY' || moneda === 'CLP' || moneda === 'COP') {
        return Math.round(val);
      }
      return Number(val.toFixed(2));
    }
    window.redondearMoneda = redondearMoneda;

    function renderCurrencyOptions(selectedCode) {
      const current = selectedCode || getMonedaActiva();
      return PLUX_CURRENCIES.map(c => 
        `<option value="${c.code}" ${c.code === current ? 'selected' : ''}>${c.code} (${c.symbol})</option>`
      ).join('');
    }
    window.renderCurrencyOptions = renderCurrencyOptions;

    function convertirTodosLosCostosViaje(monedaAnterior, monedaNueva) {
      if (!monedaAnterior || !monedaNueva || monedaAnterior === monedaNueva) return;

      if (Array.isArray(destinos)) {
        destinos.forEach(d => {
          if (d.transporte && typeof d.transporte.precio === 'number' && d.transporte.precio > 0) {
            if (!d.transporte.moneda || d.transporte.moneda === monedaAnterior) {
              d.transporte.precio = redondearMoneda(convertirMonto(d.transporte.precio, monedaAnterior, monedaNueva), monedaNueva);
              d.transporte.moneda = monedaNueva;
            }
          }
          if (Array.isArray(d.alojamientos)) {
            d.alojamientos.forEach(a => {
              if (typeof a.precio === 'number' && a.precio > 0) {
                if (!a.moneda || a.moneda === monedaAnterior) {
                  a.precio = redondearMoneda(convertirMonto(a.precio, monedaAnterior, monedaNueva), monedaNueva);
                  a.moneda = monedaNueva;
                }
              }
            });
          }
          if (Array.isArray(d.tramos)) {
            d.tramos.forEach(t => {
              if (typeof t.precio === 'number' && t.precio > 0) {
                if (!t.moneda || t.moneda === monedaAnterior) {
                  t.precio = redondearMoneda(convertirMonto(t.precio, monedaAnterior, monedaNueva), monedaNueva);
                  t.moneda = monedaNueva;
                }
              }
              if (typeof t.precioAlojamiento === 'number' && t.precioAlojamiento > 0) {
                if (!t.monedaAlojamiento || t.monedaAlojamiento === monedaAnterior) {
                  t.precioAlojamiento = redondearMoneda(convertirMonto(t.precioAlojamiento, monedaAnterior, monedaNueva), monedaNueva);
                  t.monedaAlojamiento = monedaNueva;
                }
              }
            });
          }
          if (Array.isArray(d.dias)) {
            d.dias.forEach(dia => {
              if (Array.isArray(dia.eventos)) {
                dia.eventos.forEach(ev => {
                  if (typeof ev.costo === 'number' && ev.costo > 0) {
                    if (!ev.moneda || ev.moneda === monedaAnterior) {
                      ev.costo = redondearMoneda(convertirMonto(ev.costo, monedaAnterior, monedaNueva), monedaNueva);
                      ev.moneda = monedaNueva;
                    }
                  }
                });
              }
              if (Array.isArray(dia.costosAdicionales)) {
                dia.costosAdicionales.forEach(c => {
                  if (typeof c.precio === 'number' && c.precio > 0) {
                    if (!c.moneda || c.moneda === monedaAnterior) {
                      c.precio = redondearMoneda(convertirMonto(c.precio, monedaAnterior, monedaNueva), monedaNueva);
                      c.moneda = monedaNueva;
                    }
                  }
                });
              }
            });
          }
        });
      }

      if (typeof vueltaPrecioGlobal === 'number' && vueltaPrecioGlobal > 0) {
        if (!vueltaMonedaGlobal || vueltaMonedaGlobal === monedaAnterior) {
          vueltaPrecioGlobal = redondearMoneda(convertirMonto(vueltaPrecioGlobal, monedaAnterior, monedaNueva), monedaNueva);
          vueltaMonedaGlobal = monedaNueva;
        }
      }
      if (typeof vueltaCostosAdicionales !== 'undefined' && Array.isArray(vueltaCostosAdicionales)) {
        vueltaCostosAdicionales.forEach(c => {
          if (typeof c.precio === 'number' && c.precio > 0) {
            if (!c.moneda || c.moneda === monedaAnterior) {
              c.precio = redondearMoneda(convertirMonto(c.precio, monedaAnterior, monedaNueva), monedaNueva);
              c.moneda = monedaNueva;
            }
          }
        });
      }
    }
    window.convertirTodosLosCostosViaje = convertirTodosLosCostosViaje;

    function formatMoneda(amount, targetCurrency) {
      const curr = targetCurrency || getMonedaActiva();
      const val = parseFloat(amount) || 0;
      const symbol = getSimboloMoneda(curr);
      if (curr === 'ARS' || curr === 'JPY' || curr === 'CLP' || curr === 'COP') {
        return `${symbol} ${Math.round(val).toLocaleString('es-ES')}`;
      }
      return `${symbol} ${val.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
    }
    window.formatMoneda = formatMoneda;

    function setMonedaActiva(code, sync = true, convertValues = true) {
      if (!code || !TASAS_CAMBIO[code]) code = 'EUR';
      const monedaAnterior = monedaViajeActual || 'EUR';

      if (convertValues && monedaAnterior !== code) {
        convertirTodosLosCostosViaje(monedaAnterior, code);
      }

      monedaViajeActual = code;
      localStorage.setItem('plux_moneda', code);
      
      const currBtn = document.getElementById('currencyButton');
      if (currBtn) {
        currBtn.textContent = code;
        currBtn.title = `Moneda: ${code} (${getSimboloMoneda(code)})`;
      }
      const hdrTxt = document.getElementById('headerCurrencyTxt');
      if (hdrTxt) {
        hdrTxt.textContent = `${code} ${getSimboloMoneda(code)}`;
      }
      const sel = document.getElementById('monedaViajeSelect');
      if (sel && sel.value !== code) {
        sel.value = code;
      }
      
      renderCurrencyDropdown();
      
      if (destinos && destinos.length > 0) {
        renderDestinos();
      }
      const pantResumen = document.getElementById('pantalla-resumen');
      if (pantResumen && pantResumen.style.display !== 'none') {
        mostrarResumen();
      }
      if (sync && typeof autoSave === 'function') {
        autoSave();
      }
      showToast(`Moneda activa: ${code} (${getSimboloMoneda(code)})`, 'info');
    }
    window.setMonedaActiva = setMonedaActiva;

    function toggleCurrencyDropdown(e) {
      if (e) {
        if (typeof e.stopPropagation === 'function') e.stopPropagation();
        if (typeof e.preventDefault === 'function') e.preventDefault();
      }
      const ld = document.getElementById('langDropdown');
      const td = document.getElementById('themeDropdown');
      if (ld) { ld.classList.remove('show'); ld.style.display = 'none'; }
      if (td) { td.classList.remove('show'); td.style.display = 'none'; }

      const parentWrapper = e?.target ? e.target.closest('.selector-wrapper') : null;
      const targetDropdown = parentWrapper ? parentWrapper.querySelector('.currency-dropdown') : document.getElementById('currencyDropdown');

      const allDropdowns = document.querySelectorAll('.currency-dropdown');
      renderCurrencyDropdown();

      if (targetDropdown) {
        const isVisible = targetDropdown.classList.contains('show') || targetDropdown.style.display === 'flex';
        allDropdowns.forEach(d => { d.classList.remove('show'); d.style.display = 'none'; });
        if (!isVisible) {
          targetDropdown.classList.add('show');
          targetDropdown.style.display = 'flex';
        }
      }
    }
    window.toggleCurrencyDropdown = toggleCurrencyDropdown;

    function renderCurrencyDropdown() {
      const activeCurr = getMonedaActiva();
      const allDropdowns = document.querySelectorAll('.currency-dropdown');
      const optionsHtml = PLUX_CURRENCIES.map(c => {
        const isActive = activeCurr === c.code;
        return `
          <div class="currency-option ${isActive ? 'active' : ''}" onclick="window.setMonedaActiva('${c.code}')">
            <span>${c.name} (${c.symbol})</span>
            <span class="currency-badge">${c.badge}</span>
          </div>
        `;
      }).join('');

      allDropdowns.forEach(cd => {
        cd.innerHTML = optionsHtml;
      });

      const sel = document.getElementById('monedaViajeSelect');
      if (sel) {
        sel.innerHTML = PLUX_CURRENCIES.map(c => {
          return `<option value="${c.code}" ${c.code === activeCurr ? 'selected' : ''}>${c.code} (${c.symbol}) - ${c.name}</option>`;
        }).join('');
      }
    }
    window.renderCurrencyDropdown = renderCurrencyDropdown;

    // ================== NOTAS FLOTANTES (CARTELITOS) Y HILITOS ==================
    let cartelitosNotasViaje = [];
    let hilitoDragState = null;
    let cartelitoDragState = null;

    function getCartelitosNotas() {
      if (!Array.isArray(cartelitosNotasViaje)) {
        cartelitosNotasViaje = [];
      }
      return cartelitosNotasViaje;
    }
    window.getCartelitosNotas = getCartelitosNotas;

    function actualizarBadgeCartelitos() {
      const count = getCartelitosNotas().length;
      const b = document.getElementById('badgeCartelitosCount');
      if (b) b.textContent = count;
    }
    window.actualizarBadgeCartelitos = actualizarBadgeCartelitos;

    function crearNotaCartelito(texto = '', enlace = null, posX = null, posY = null) {
      const notas = getCartelitosNotas();
      const id = 'nota_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
      const count = notas.length;

      const x = (typeof posX === 'number') ? posX : Math.min(window.innerWidth - 260, Math.max(20, window.innerWidth - 270 - (count % 3) * 20));
      const y = (typeof posY === 'number') ? posY : Math.min(window.innerHeight - 180, Math.max(90, 100 + (count % 4) * 45));

      const nuevaNota = {
        id,
        texto: (typeof texto === 'string') ? texto : '',
        x: Math.max(10, x),
        y: Math.max(60, y),
        enlace: enlace || null
      };

      notas.push(nuevaNota);
      renderCartelitos();
      actualizarBadgeCartelitos();
      if (typeof autoSave === 'function') autoSave();

      setTimeout(() => {
        const el = document.getElementById(`cartelito-txt-${id}`);
        if (el) el.focus();
      }, 50);

      showToast('Nota creada. Toca o arrastra su esquinita para conectar un hilito a un destino o actividad', 'info');
      return nuevaNota;
    }
    window.crearNotaCartelito = crearNotaCartelito;
    window.crearNuevaNotaRapida = function(tipo, tit, txt) { return crearNotaCartelito(txt || tit || ''); };
    window.toggleTableroNotas = function() { crearNotaCartelito(); };

    function renderCartelitos() {
      const layer = document.getElementById('plux-cartelitos-layer');
      if (!layer) return;

      const appEl = document.getElementById('app');
      const isAppVisible = appEl && appEl.style.display !== 'none';
      if (!isAppVisible) {
        layer.innerHTML = '';
        actualizarHilitos();
        return;
      }

      const notas = getCartelitosNotas();
      actualizarBadgeCartelitos();

      layer.innerHTML = notas.map(n => {
        const hasLink = Boolean(n.enlace && n.enlace.label);
        const linkLabel = hasLink ? n.enlace.label : 'Sin enlazar';
        const linkClass = hasLink ? 'linked' : '';
        const pinClass = hasLink ? 'has-link' : '';
        const isChk = Boolean(n.isChecklist);
        const items = Array.isArray(n.items) ? n.items : [];

        let bodyHtml = '';
        if (isChk) {
          bodyHtml = `
            <div class="cartelito-checklist-container">
              ${items.map((it, idx) => `
                <div class="cartelito-chk-row">
                  <label class="cartelito-chk-label">
                    <input type="checkbox" ${it.done ? 'checked' : ''} onclick="window.toggleItemChecklistNota('${n.id}', ${idx}, event)" style="cursor:pointer; accent-color:#38bdf8;">
                    <span class="${it.done ? 'cartelito-chk-done' : ''}">${escapeHtml(it.text)}</span>
                  </label>
                  <button class="cartelito-chk-del" onclick="window.eliminarItemChecklistNota('${n.id}', ${idx}, event)" title="Eliminar tarea">&times;</button>
                </div>
              `).join('')}
              <input type="text" class="cartelito-add-item-input" placeholder="+ Añadir tarea (Enter)" onkeydown="window.agregarItemChecklistNota('${n.id}', this, event)">
            </div>
          `;
        } else {
          bodyHtml = `
            <textarea id="cartelito-txt-${n.id}" class="cartelito-textarea" 
                      placeholder="Escribe tu nota aqui..." 
                      oninput="window.actualizarTextoCartelito('${n.id}', this.value)">${escapeHtml(n.texto || '')}</textarea>
          `;
        }

        return `
          <div id="cartelito-${n.id}" class="cartelito-nota" style="left:${n.x}px; top:${n.y}px;">
            <div id="pin-${n.id}" class="cartelito-corner-pin ${pinClass}" 
                 data-nota-id="${n.id}" 
                 title="${hasLink ? 'Conectado a ' + escapeHtml(linkLabel) + '. Arrastra para cambiar o toca para desconectar' : 'Toca o arrastra esta esquinita hasta la manija de un destino, actividad o a otra nota'}"
                 onmousedown="window.iniciarArrastreHilito('${n.id}', event)"
                 ontouchstart="window.iniciarArrastreHilito('${n.id}', event)">
            </div>
            <div class="cartelito-header"
                 onmousedown="window.iniciarArrastreCartelito('${n.id}', event)"
                 ontouchstart="window.iniciarArrastreCartelito('${n.id}', event)">
              <span class="cartelito-handle">⠿</span>
              <span class="cartelito-badge-enlace ${linkClass}" id="cartelito-label-${n.id}" title="${escapeHtml(linkLabel)}">
                ${escapeHtml(linkLabel)}
              </span>
              <div style="display:flex; align-items:center; gap:2px;">
                <button class="cartelito-btn-mode" onclick="window.toggleModoChecklistNota('${n.id}', event)" title="${isChk ? 'Cambiar a nota de texto' : 'Convertir en checklist'}">
                  <i class="fa-solid ${isChk ? 'fa-align-left' : 'fa-list-check'}"></i>
                </button>
                <button class="cartelito-btn-close" onclick="window.eliminarNotaCartelito('${n.id}', event)" title="Eliminar nota">&times;</button>
              </div>
            </div>
            <div class="cartelito-body">
              ${bodyHtml}
            </div>
          </div>
        `;
      }).join('');

      requestAnimationFrame(actualizarHilitos);
    }
    window.renderCartelitos = renderCartelitos;
    window.renderTableroNotas = renderCartelitos;

    function toggleModoChecklistNota(id, e) {
      if (e) e.stopPropagation();
      const nota = getCartelitosNotas().find(n => n.id === id);
      if (!nota) return;
      nota.isChecklist = !nota.isChecklist;
      if (nota.isChecklist) {
        if (nota.texto && nota.texto.trim()) {
          const lines = nota.texto.split('\n').map(l => l.trim()).filter(Boolean);
          const existingMap = new Map((nota.items || []).map(it => [it.text, it.done]));
          nota.items = lines.map(t => ({ text: t, done: Boolean(existingMap.get(t)) }));
        } else if (!Array.isArray(nota.items) || nota.items.length === 0) {
          nota.items = [{ text: 'Tarea 1', done: false }];
        }
      } else if (Array.isArray(nota.items) && nota.items.length > 0) {
        nota.texto = nota.items.map(it => it.text).join('\n');
      }
      renderCartelitos();
      if (typeof autoSave === 'function') autoSave();
    }
    window.toggleModoChecklistNota = toggleModoChecklistNota;

    function toggleItemChecklistNota(notaId, itemIdx, e) {
      if (e) e.stopPropagation();
      const nota = getCartelitosNotas().find(n => n.id === notaId);
      if (!nota || !Array.isArray(nota.items) || !nota.items[itemIdx]) return;
      nota.items[itemIdx].done = !nota.items[itemIdx].done;
      renderCartelitos();
      if (typeof autoSave === 'function') autoSave();
    }
    window.toggleItemChecklistNota = toggleItemChecklistNota;

    function agregarItemChecklistNota(notaId, inputEl, e) {
      if (e && e.key && e.key !== 'Enter') return;
      if (!inputEl) return;
      const text = inputEl.value.trim();
      if (!text) return;
      const nota = getCartelitosNotas().find(n => n.id === notaId);
      if (!nota) return;
      if (!Array.isArray(nota.items)) nota.items = [];
      nota.items.push({ text, done: false });
      nota.texto = nota.items.map(it => it.text).join('\n');
      inputEl.value = '';
      renderCartelitos();
      if (typeof autoSave === 'function') autoSave();
    }
    window.agregarItemChecklistNota = agregarItemChecklistNota;

    function eliminarItemChecklistNota(notaId, itemIdx, e) {
      if (e) e.stopPropagation();
      const nota = getCartelitosNotas().find(n => n.id === notaId);
      if (!nota || !Array.isArray(nota.items)) return;
      nota.items.splice(itemIdx, 1);
      nota.texto = nota.items.map(it => it.text).join('\n');
      renderCartelitos();
      if (typeof autoSave === 'function') autoSave();
    }
    window.eliminarItemChecklistNota = eliminarItemChecklistNota;

    function actualizarTextoCartelito(id, val) {
      const nota = getCartelitosNotas().find(n => n.id === id);
      if (nota) {
        nota.texto = val;
        if (typeof autoSave === 'function') autoSave();
      }
    }
    window.actualizarTextoCartelito = actualizarTextoCartelito;

    function eliminarNotaCartelito(id, e) {
      if (e) e.stopPropagation();
      const notas = getCartelitosNotas();
      const idx = notas.findIndex(n => n.id === id);
      if (idx !== -1) {
        notas.splice(idx, 1);
        renderCartelitos();
        actualizarBadgeCartelitos();
        actualizarHilitos();
        if (typeof autoSave === 'function') autoSave();
        showToast('Nota eliminada', 'info');
      }
    }
    window.eliminarNotaCartelito = eliminarNotaCartelito;

    function iniciarArrastreCartelito(notaId, e) {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON' || e.target.classList.contains('cartelito-corner-pin')) {
        return;
      }
      const nota = getCartelitosNotas().find(n => n.id === notaId);
      if (!nota) return;

      const el = document.getElementById(`cartelito-${notaId}`);
      if (el) el.classList.add('dragging');

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      cartelitoDragState = {
        notaId,
        startX: clientX,
        startY: clientY,
        initX: nota.x,
        initY: nota.y
      };

      document.addEventListener('mousemove', moverArrastreCartelito);
      document.addEventListener('mouseup', finalizarArrastreCartelito);
      document.addEventListener('touchmove', moverArrastreCartelito, { passive: false });
      document.addEventListener('touchend', finalizarArrastreCartelito);
    }
    window.iniciarArrastreCartelito = iniciarArrastreCartelito;

    function moverArrastreCartelito(e) {
      if (!cartelitoDragState) return;
      if (e.cancelable) e.preventDefault();

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const dx = clientX - cartelitoDragState.startX;
      const dy = clientY - cartelitoDragState.startY;

      const nota = getCartelitosNotas().find(n => n.id === cartelitoDragState.notaId);
      if (nota) {
        const maxX = window.innerWidth - 240;
        const maxY = window.innerHeight - 130;
        nota.x = Math.max(10, Math.min(maxX, cartelitoDragState.initX + dx));
        nota.y = Math.max(50, Math.min(maxY, cartelitoDragState.initY + dy));

        const el = document.getElementById(`cartelito-${cartelitoDragState.notaId}`);
        if (el) {
          el.style.left = `${nota.x}px`;
          el.style.top = `${nota.y}px`;
        }
        actualizarHilitos();
      }
    }

    function finalizarArrastreCartelito() {
      if (cartelitoDragState) {
        const el = document.getElementById(`cartelito-${cartelitoDragState.notaId}`);
        if (el) el.classList.remove('dragging');
        cartelitoDragState = null;
        if (typeof autoSave === 'function') autoSave();
      }
      document.removeEventListener('mousemove', moverArrastreCartelito);
      document.removeEventListener('mouseup', finalizarArrastreCartelito);
      document.removeEventListener('touchmove', moverArrastreCartelito);
      document.removeEventListener('touchend', finalizarArrastreCartelito);
    }

    // Arrastre interactivo de hilito desde la esquinita de la nota
    function iniciarArrastreHilito(notaId, e) {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();

      const nota = getCartelitosNotas().find(n => n.id === notaId);
      if (!nota) return;

      const pinEl = document.getElementById(`pin-${notaId}`);
      if (!pinEl) return;
      pinEl.classList.add('pulling');

      const pinRect = pinEl.getBoundingClientRect();
      const originX = pinRect.left + pinRect.width / 2;
      const originY = pinRect.top + pinRect.height / 2;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      hilitoDragState = {
        notaId,
        originX,
        originY,
        currentX: clientX,
        currentY: clientY,
        moved: false,
        hoverEl: null
      };

      document.addEventListener('mousemove', moverArrastreHilito);
      document.addEventListener('mouseup', finalizarArrastreHilito);
      document.addEventListener('touchmove', moverArrastreHilito, { passive: false });
      document.addEventListener('touchend', finalizarArrastreHilito);
    }
    window.iniciarArrastreHilito = iniciarArrastreHilito;

    function moverArrastreHilito(e) {
      if (!hilitoDragState) return;
      if (e.cancelable) e.preventDefault();

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      hilitoDragState.currentX = clientX;
      hilitoDragState.currentY = clientY;
      hilitoDragState.moved = true;

      if (hilitoDragState.hoverEl) {
        hilitoDragState.hoverEl.classList.remove('hilito-drop-hover');
        hilitoDragState.hoverEl = null;
      }

      const elemUnder = document.elementFromPoint(clientX, clientY);
      if (elemUnder) {
        const candidate = elemUnder.closest('.drag-handle-dest, .drag-handle-ev, .drag-handle-dia, .destino, .evento');
        if (candidate) {
          candidate.classList.add('hilito-drop-hover');
          hilitoDragState.hoverEl = candidate;
        }
      }

      dibujarHilitoEnArrastre(hilitoDragState.originX, hilitoDragState.originY, clientX, clientY);
    }

    function dibujarHilitoEnArrastre(x1, y1, x2, y2) {
      const svg = document.getElementById('plux-hilitos-svg');
      if (!svg) return;

      let tempLine = document.getElementById('hilito-temp-drag');
      if (!tempLine) {
        tempLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        tempLine.setAttribute('id', 'hilito-temp-drag');
        tempLine.setAttribute('class', 'hilito-svg-line active-drag');
        svg.appendChild(tempLine);
      }

      const dist = Math.hypot(x2 - x1, y2 - y1);
      const sag = Math.min(65, Math.max(15, dist * 0.1));
      const cx = (x1 + x2) / 2;
      const cy = (y1 + y2) / 2 + sag;

      tempLine.setAttribute('d', `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`);
    }

    function finalizarArrastreHilito(e) {
      if (!hilitoDragState) return;

      const nota = getCartelitosNotas().find(n => n.id === hilitoDragState.notaId);
      const pinEl = document.getElementById(`pin-${hilitoDragState.notaId}`);
      if (pinEl) pinEl.classList.remove('pulling');

      const tempLine = document.getElementById('hilito-temp-drag');
      if (tempLine && tempLine.parentNode) {
        tempLine.parentNode.removeChild(tempLine);
      }

      if (hilitoDragState.hoverEl) {
        hilitoDragState.hoverEl.classList.remove('hilito-drop-hover');
      }

      const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;

      if (!hilitoDragState.moved && nota) {
        if (nota.enlace) {
          nota.enlace = null;
          showToast('Hilito desconectado', 'info');
        } else {
          showToast('Arrastra la esquinita hasta la manija de un destino o evento para conectar', 'info');
        }
      } else if (nota) {
        const elemUnder = document.elementFromPoint(clientX, clientY);
        if (elemUnder) {
          const otherNotaEl = elemUnder.closest('.cartelito-nota');
          const chkEl = elemUnder.closest('#btnChecklist, #btnChecklistHeader, .btn-checklist, #checklistContenido, #modal-checklist, [data-action="checklist"]');
          const destHandle = elemUnder.closest('.drag-handle-dest, .destino');
          const evHandle = elemUnder.closest('.drag-handle-ev, .evento');
          const diaHandle = elemUnder.closest('.drag-handle-dia, .dia');

          if (otherNotaEl && otherNotaEl.id !== `cartelito-${nota.id}`) {
            const otherId = otherNotaEl.id.replace('cartelito-', '');
            const otherNota = getCartelitosNotas().find(n => n.id === otherId);
            const otherTit = (otherNota?.texto || 'Nota').trim().slice(0, 18);
            nota.enlace = {
              tipo: 'nota',
              id: otherId,
              label: 'Nota: ' + (otherTit || 'Enlazada')
            };
            showToast('Nota conectada a otra nota', 'success');
          } else if (chkEl) {
            nota.enlace = {
              tipo: 'checklist',
              label: 'Checklist del viaje'
            };
            showToast('Nota conectada a la checklist general', 'success');
          } else if (evHandle) {
            const destId = evHandle.dataset.destId || evHandle.closest('[data-dest-id]')?.dataset.destId;
            const diaId = evHandle.dataset.diaId || evHandle.closest('[data-dia-id]')?.dataset.diaId;
            const evIdx = evHandle.dataset.evIdx || evHandle.closest('[data-ev-idx]')?.dataset.evIdx || 0;
            const titEl = evHandle.querySelector('input[placeholder="Título"], .evento-title, h4') || evHandle;
            const titText = (titEl.value || titEl.textContent || 'Actividad').trim().slice(0, 20);

            nota.enlace = {
              tipo: 'evento',
              destId: destId || null,
              diaId: diaId || null,
              evIdx: Number(evIdx),
              label: 'Actividad: ' + titText
            };
            showToast('Nota conectada a la actividad: ' + titText, 'success');
          } else if (destHandle) {
            const destId = destHandle.dataset.destId || destHandle.closest('[data-dest-id]')?.dataset.destId;
            const destObj = (destinos || []).find(d => String(d.id) === String(destId));
            const destName = destObj ? destObj.nombre : 'Destino';

            nota.enlace = {
              tipo: 'dest',
              id: destId || (destObj ? destObj.id : null),
              label: 'Destino: ' + destName
            };
            showToast('Nota conectada al destino: ' + destName, 'success');
          } else if (diaHandle) {
            const diaId = diaHandle.dataset.diaId || diaHandle.closest('[data-dia-id]')?.dataset.diaId;
            nota.enlace = {
              tipo: 'dia',
              diaId: diaId || null,
              label: 'Dia del viaje'
            };
            showToast('Nota conectada al dia del viaje', 'success');
          } else {
            if (nota.enlace) {
              nota.enlace = null;
              showToast('Hilito desconectado', 'info');
            }
          }
        }
      }

      hilitoDragState = null;
      renderCartelitos();
      actualizarHilitos();
      if (typeof autoSave === 'function') autoSave();

      document.removeEventListener('mousemove', moverArrastreHilito);
      document.removeEventListener('mouseup', finalizarArrastreHilito);
      document.removeEventListener('touchmove', moverArrastreHilito);
      document.removeEventListener('touchend', finalizarArrastreHilito);
    }

    function actualizarHilitos() {
      const svg = document.getElementById('plux-hilitos-svg');
      if (!svg) return;

      const appEl = document.getElementById('app');
      const isAppVisible = appEl && appEl.style.display !== 'none';
      if (!isAppVisible) {
        svg.innerHTML = '';
        return;
      }

      const notas = getCartelitosNotas();
      let pathsHtml = '';

      notas.forEach(nota => {
        if (!nota.enlace) return;

        const pinEl = document.getElementById(`pin-${nota.id}`);
        if (!pinEl) return;
        const pinRect = pinEl.getBoundingClientRect();
        if (pinRect.width === 0 && pinRect.height === 0) return;

        const x1 = pinRect.left + pinRect.width / 2;
        const y1 = pinRect.top + pinRect.height / 2;

        let targetEl = null;
        if (nota.enlace.tipo === 'nota') {
          targetEl = document.getElementById(`pin-${nota.enlace.id}`) || document.getElementById(`cartelito-${nota.enlace.id}`);
        } else if (nota.enlace.tipo === 'checklist') {
          targetEl = document.getElementById('btnChecklist') || document.getElementById('btnChecklistHeader') || document.querySelector('.btn-checklist');
        } else if (nota.enlace.tipo === 'dest') {
          targetEl = document.querySelector(`.drag-handle-dest[data-dest-id="${nota.enlace.id}"]`) ||
                     document.querySelector(`.destino[data-dest-id="${nota.enlace.id}"] .destino-header`) ||
                     document.querySelector(`.destino[data-dest-id="${nota.enlace.id}"]`);
        } else if (nota.enlace.tipo === 'evento') {
          targetEl = document.querySelector(`.drag-handle-ev[data-dest-id="${nota.enlace.destId}"][data-dia-id="${nota.enlace.diaId}"][data-ev-idx="${nota.enlace.evIdx}"]`) ||
                     document.querySelector(`.drag-handle-ev[data-ev-idx="${nota.enlace.evIdx}"]`) ||
                     document.querySelector(`.evento[data-dest-id="${nota.enlace.destId}"]`);
        } else if (nota.enlace.tipo === 'dia') {
          targetEl = document.querySelector(`.drag-handle-dia[data-dia-id="${nota.enlace.diaId}"]`) ||
                     document.querySelector(`.dia[data-dia-id="${nota.enlace.diaId}"]`);
        }

        if (!targetEl) return;
        const targetRect = targetEl.getBoundingClientRect();
        if (targetRect.width === 0 && targetRect.height === 0) return;

        const x2 = targetRect.left + Math.min(18, targetRect.width / 2);
        const y2 = targetRect.top + targetRect.height / 2;

        const dist = Math.hypot(x2 - x1, y2 - y1);
        const sag = Math.min(75, Math.max(18, dist * 0.12));
        const cx = (x1 + x2) / 2;
        const cy = (y1 + y2) / 2 + sag;

        pathsHtml += `
          <path d="M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}" class="hilito-svg-line" />
          <circle cx="${x1}" cy="${y1}" r="3.5" class="hilito-anchor-dot" />
          <circle cx="${x2}" cy="${y2}" r="4" class="hilito-anchor-dot" />
        `;
      });

      svg.innerHTML = pathsHtml;
    }
    window.actualizarHilitos = actualizarHilitos;

    window.addEventListener('scroll', () => { requestAnimationFrame(actualizarHilitos); }, { passive: true });
    window.addEventListener('resize', () => { requestAnimationFrame(actualizarHilitos); }, { passive: true });


    function setLanguage(lang, sync = true, isManual = false) {
      if (!lang || !i18n[lang]) lang = 'es';
      currentLang = lang;
      localStorage.setItem('Plux_Lang', lang);
      if (isManual || sync) {
        localStorage.setItem('Plux_Lang_Manual', 'true');
      }

      const btn = document.getElementById('langButton');
      if (btn) btn.textContent = lang.toUpperCase();

      // Actualizar chips en menú colapsado
      document.querySelectorAll('.lang-chip, .lang-chip-btn').forEach(chip => {
        if (chip.getAttribute('data-lang') === lang) chip.classList.add('active');
        else chip.classList.remove('active');
      });

      // Actualizar clase de idioma en el body
      document.body.classList.remove('lang-es', 'lang-en', 'lang-fr', 'lang-de', 'lang-it');
      document.body.classList.add(`lang-${lang}`);
      applyThemeByLangState();

      // Actualizar opción activa en dropdown
      document.querySelectorAll('.lang-option').forEach(opt => {
        const optLang = opt.getAttribute('data-lang') || opt.dataset.lang;
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
      const isCurr = e.target.closest('#currencyButton') || e.target.closest('#btnCurrencyHeader') || e.target.closest('.currency-dropdown');
      if (!isCurr) {
        document.querySelectorAll('.currency-dropdown').forEach(cd => {
          cd.classList.remove('show');
          cd.style.display = 'none';
        });
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
      setLanguage(currentLang, false, false);
      setTheme(currentTheme, false);
      renderThemeDropdown();
      applyThemeByLangState();
      autoDetectCountryGeoIP();
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
    // Las llamadas de IA se canalizan exclusivamente de forma segura a través de Cloudflare Worker
    const CLOUDFLARE_WORKER_URL = 'https://pluxy.nibecar-cofeben.workers.dev/';
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
    userPreferences = userPreferences || {
      eventsPerDay: 4,
      transportType: 'any',
      pace: 'relaxed'
    };

    async function loadKeys() {
      // Las llamadas de IA se canalizan exclusivamente y de forma segura a través del Cloudflare Worker Gateway
      console.log('🛡️ Plux AI Gateway: Operando en https://pluxy.nibecar-cofeben.workers.dev/ (100% seguro en Cloudflare, sin claves en el cliente)');
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
        userPreferences: typeof userPreferences !== 'undefined' ? userPreferences : null,
        moneda: typeof getMonedaActiva === 'function' ? getMonedaActiva() : 'EUR',
        cartelitos: typeof getCartelitosNotas === 'function' ? [...getCartelitosNotas()] : []
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

          if (Array.isArray(data.cartelitos)) {
            cartelitosNotasViaje = [...data.cartelitos];
          }
          
          renderDestinos();
          renderVueltaCostos();
          if (typeof renderCartelitos === 'function') renderCartelitos();
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

    // Tasas de cambio aproximadas (base EUR)
    const exchangeRates = { EUR: 1, USD: 1.09, GBP: 0.86, JPY: 158, ARS: 920, MXN: 18.5, CAD: 1.47, AUD: 1.62, CHF: 0.95, CNY: 7.85 };

    // ================== TOAST SYSTEM ==================
    function showToast(msg, type='info') {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      let icon = 'info';
      if(type === 'success') icon = 'ok';
      if(type === 'error') icon = 'error';
      toast.innerHTML = `<span>${icon}</span> <span>${typeof escapeHtml === 'function' ? escapeHtml(msg) : msg}</span>`;
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
- [ACCION:CAMBIAR_MONEDA:Codigo] → Cambia la moneda en la que se visualizan todos los gastos del viaje (ej: [ACCION:CAMBIAR_MONEDA:USD] o [ACCION:CAMBIAR_MONEDA:ARS] o [ACCION:CAMBIAR_MONEDA:EUR] o [ACCION:CAMBIAR_MONEDA:BRL] o [ACCION:CAMBIAR_MONEDA:GBP])
- [ACCION:CREAR_NOTA:Texto de la nota|NombreDestinoOpcional] → Crea una nota flotante en pantalla y opcionalmente la conecta con un hilito al destino
- [ACCION:CREAR_CHECKLIST_NOTA:Titulo|item1,item2,item3] → Crea una notita flotante tipo checklist con tareas interactivas tachables
- [ACCION:CONECTAR_NOTA:TextoDeLaNota|NombreDestinoOEvento] → Conecta una nota existente con un hilito al destino o actividad
- [ACCION:CONECTAR_NOTAS:TextoNotaA|TextoNotaB] → Conecta dos notas flotantes entre sí con un hilito orgánico
- [ACCION:AGREGAR_CHECKLIST:Texto|Categoria] → Agrega una tarea directamente a la checklist general
- [ACCION:ABRIR_NOTAS] → Muestra y desplaza la vista hacia las notas flotantes

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

      // CAMBIAR_MONEDA
      const accionMoneda = respuesta.match(/\[ACCION:(?:CAMBIAR_MONEDA|SET_MONEDA):([A-Z]{3})\]/i);
      if (accionMoneda) {
        const targetMon = accionMoneda[1].toUpperCase();
        if (typeof setMonedaActiva === 'function') {
          setMonedaActiva(targetMon);
        }
        accionesEjecutadas = true;
      }

      // CREAR_NOTA
      const accionesNota = [...respuesta.matchAll(/\[ACCION:CREAR_NOTA:([^\]]+)\]/g)];
      accionesNota.forEach((match) => {
        const partes = match[1].split('|');
        const txt = partes[0] ? partes[0].trim() : '';
        const targetDest = partes.length > 1 ? partes[1].trim().toLowerCase() : null;

        let enlace = null;
        if (targetDest && Array.isArray(destinos)) {
          const dest = destinos.find(d => d.nombre && d.nombre.toLowerCase().includes(targetDest));
          if (dest) {
            enlace = { tipo: 'dest', id: dest.id, label: 'Destino: ' + dest.nombre };
          }
        }

        if (typeof crearNotaCartelito === 'function') {
          crearNotaCartelito(txt, enlace);
        }
        accionesEjecutadas = true;
      });

      // CREAR_CHECKLIST_NOTA
      const accionesChkNota = [...respuesta.matchAll(/\[ACCION:CREAR_CHECKLIST_NOTA:([^\]]+)\]/g)];
      accionesChkNota.forEach((match) => {
        const partes = match[1].split('|');
        const tit = partes[0] ? partes[0].trim() : 'Checklist';
        const rawItems = partes[1] ? partes[1].split(',') : [];
        const items = rawItems.map(it => ({ text: it.trim(), done: false })).filter(it => it.text);
        if (typeof crearNotaCartelito === 'function') {
          const nota = crearNotaCartelito(tit);
          if (nota) {
            nota.isChecklist = true;
            nota.items = items.length > 0 ? items : [{ text: 'Tarea 1', done: false }];
            if (typeof renderCartelitos === 'function') renderCartelitos();
            if (typeof autoSave === 'function') autoSave();
          }
        }
        accionesEjecutadas = true;
      });

      // CONECTAR_NOTA (a destino o actividad)
      const accionesConectar = [...respuesta.matchAll(/\[ACCION:CONECTAR_NOTA:([^\]]+)\]/g)];
      accionesConectar.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 2) {
          const queryNota = partes[0].trim().toLowerCase();
          const queryDest = partes[1].trim().toLowerCase();
          const notas = typeof getCartelitosNotas === 'function' ? getCartelitosNotas() : [];
          const nota = notas.find(n => n.id === queryNota || (n.texto && n.texto.toLowerCase().includes(queryNota))) || notas[notas.length - 1];

          const dest = (destinos || []).find(d => d.nombre && d.nombre.toLowerCase().includes(queryDest));
          if (nota && dest) {
            nota.enlace = { tipo: 'dest', id: dest.id, label: 'Destino: ' + dest.nombre };
            if (typeof renderCartelitos === 'function') renderCartelitos();
            if (typeof actualizarHilitos === 'function') actualizarHilitos();
          }
        }
        accionesEjecutadas = true;
      });

      // CONECTAR_NOTAS (nota con otra nota)
      const accionesConectarNotas = [...respuesta.matchAll(/\[ACCION:CONECTAR_NOTAS:([^\]]+)\]/g)];
      accionesConectarNotas.forEach((match) => {
        const partes = match[1].split('|');
        if (partes.length >= 2) {
          const qA = partes[0].trim().toLowerCase();
          const qB = partes[1].trim().toLowerCase();
          const notas = typeof getCartelitosNotas === 'function' ? getCartelitosNotas() : [];
          const notaA = notas.find(n => n.id === qA || (n.texto && n.texto.toLowerCase().includes(qA)));
          const notaB = notas.find(n => n.id === qB || (n.texto && n.texto.toLowerCase().includes(qB)));
          if (notaA && notaB && notaA.id !== notaB.id) {
            notaA.enlace = {
              tipo: 'nota',
              id: notaB.id,
              label: 'Nota: ' + (notaB.texto || 'Nota').trim().slice(0, 16)
            };
            if (typeof renderCartelitos === 'function') renderCartelitos();
            if (typeof actualizarHilitos === 'function') actualizarHilitos();
            if (typeof autoSave === 'function') autoSave();
          }
        }
        accionesEjecutadas = true;
      });

      // ABRIR_NOTAS
      if (respuesta.includes('[ACCION:ABRIR_NOTAS]')) {
        const layer = document.getElementById('plux-cartelitos-layer');
        if (layer) layer.scrollIntoView({ behavior: 'smooth' });
        accionesEjecutadas = true;
      }

      // AGREGAR_CHECKLIST
      const accionesAddChk = [...respuesta.matchAll(/\[ACCION:AGREGAR_CHECKLIST:([^\]]+)\]/g)];
      accionesAddChk.forEach((match) => {
        const partes = match[1].split('|');
        const texto = partes[0].trim();
        const categoria = partes[1] ? partes[1].trim() : 'Miscelánea';
        if (typeof checklistData !== 'undefined') {
          checklistData.push({ categoria, emoji: 'Item', item: texto, done: false, id: Date.now() + Math.floor(Math.random() * 500) });
          localStorage.setItem('PluxChecklist_V2', JSON.stringify(checklistData));
          if (typeof renderChecklist === 'function') renderChecklist();
          if (typeof showToast === 'function') showToast(`Item "${texto}" añadido a la checklist`, 'success');
        }
        accionesEjecutadas = true;
      });

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
          <img src="/pet.png" style="height:26px; width:auto; flex-shrink:0;">
          <span style="flex:1; color:var(--gris); font-style:italic;">${texto}</span>
          <span class="pluxy-thinking-dots"><span></span><span></span><span></span></span>`;
      } else if (tipo.includes('ai')) {
        div.className = `chat-msg ${tipo}`;
        if (id) div.id = id;
        div.style.display = 'flex';
        div.style.gap = '10px';
        div.style.alignItems = 'flex-start';
        div.innerHTML = `
          <img src="/pet.png" style="height:26px; width:auto; flex-shrink:0; margin-top:2px;">
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
        if (typeof window.cambiarTabDescubrir === 'function') {
          window.cambiarTabDescubrir('destinos');
        }
        const input = document.getElementById('destinosSearchInput');
        if (input) {
          input.value = ciudad;
          if (typeof window.filtrarDestinosDescubrir === 'function') {
            window.filtrarDestinosDescubrir(ciudad);
          }
        }
      }, 150);
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

    // Abrir descubrir (delegar a implementación unificada)
    function abrirDescubrir() {
      if (typeof window.abrirDescubrirModalUnified === 'function') {
        window.abrirDescubrirModalUnified();
      }
    }

    // Cerrar descubrir (delegar a implementación unificada)
    function cerrarDescubrir() {
      if (typeof window.cerrarDescubrirModalUnified === 'function') {
        window.cerrarDescubrirModalUnified();
      }
    }

    // ================== CITY AUTOCOMPLETE ==================
    let citySearchTimeout = null;

    function isMalvinasQuery(query) {
      if (!query) return false;
      const clean = query.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .trim();
      return (
        clean.includes('falk') ||
        clean.includes('malvin') ||
        clean.includes('alvin') ||
        clean.includes('puerto argentino')
      );
    }

    const MALVINAS_DESTINO_ARG = {
      name: 'Islas Malvinas',
      country: 'Argentina',
      country_code: 'AR',
      admin1: 'Tierra del Fuego, Antartida e Islas del Atlantico Sur',
      latitude: -51.7963,
      longitude: -59.5236,
      isSpecialMalvinas: true
    };

    function getCountryFlagSvg(countryCode) {
      const code = (countryCode || '').toUpperCase();
      const style = 'border-radius:2px; box-shadow:0 0 2px rgba(0,0,0,0.6); vertical-align:middle; display:inline-block; flex-shrink:0;';
      if (code === 'AR') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 900 600" width="22" height="15" style="${style}"><rect width="900" height="600" fill="#74acdf"/><rect y="200" width="900" height="200" fill="#ffffff"/><circle cx="450" cy="300" r="45" fill="#f6b40e"/></svg>`;
      }
      if (code === 'BR') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 1000 700" width="22" height="15" style="${style}"><rect width="1000" height="700" fill="#009c3b"/><polygon points="500,84 916,350 500,616 84,350" fill="#ffdf00"/><circle cx="500" cy="350" r="175" fill="#002776"/></svg>`;
      }
      if (code === 'ES') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 750 500" width="22" height="15" style="${style}"><rect width="750" height="500" fill="#aa151b"/><rect y="125" width="750" height="250" fill="#f1bf00"/></svg>`;
      }
      if (code === 'IT') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 1500 1000" width="22" height="15" style="${style}"><rect width="500" height="1000" fill="#009246"/><rect x="500" width="500" height="1000" fill="#ffffff"/><rect x="1000" width="500" height="1000" fill="#ce2b37"/></svg>`;
      }
      if (code === 'FR') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 900 600" width="22" height="15" style="${style}"><rect width="300" height="600" fill="#002654"/><rect x="300" width="300" height="600" fill="#ffffff"/><rect x="600" width="300" height="600" fill="#ce1126"/></svg>`;
      }
      if (code === 'US') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 7410 3900" width="22" height="15" style="${style}"><rect width="7410" height="3900" fill="#b22234"/><rect y="300" width="7410" height="300" fill="#fff"/><rect y="900" width="7410" height="300" fill="#fff"/><rect y="1500" width="7410" height="300" fill="#fff"/><rect y="2100" width="7410" height="300" fill="#fff"/><rect y="2700" width="7410" height="300" fill="#fff"/><rect y="3300" width="7410" height="300" fill="#fff"/><rect width="2964" height="2100" fill="#3c3b6e"/></svg>`;
      }
      if (code === 'GB') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 60 30" width="22" height="15" style="${style}"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#c8102e" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#c8102e" stroke-width="6"/></g></svg>`;
      }
      if (code === 'DE') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 5 3" width="22" height="15" style="${style}"><rect width="5" height="3" fill="#ffce00"/><rect width="5" height="2" fill="#dd0000"/><rect width="5" height="1" fill="#000000"/></svg>`;
      }
      if (code === 'UY') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 900 600" width="22" height="15" style="${style}"><rect width="900" height="600" fill="#fff"/><rect y="66" width="900" height="66" fill="#0038a8"/><rect y="200" width="900" height="66" fill="#0038a8"/><rect y="333" width="900" height="66" fill="#0038a8"/><rect y="466" width="900" height="66" fill="#0038a8"/><rect width="300" height="266" fill="#fff"/><circle cx="150" cy="133" r="45" fill="#fcd116"/></svg>`;
      }
      if (code === 'CL') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 900 600" width="22" height="15" style="${style}"><rect width="900" height="600" fill="#d52b1e"/><rect width="900" height="300" fill="#fff"/><rect width="300" height="300" fill="#0039a6"/><polygon points="150,80 167,135 224,135 178,169 196,224 150,190 104,224 122,169 76,135 133,135" fill="#fff"/></svg>`;
      }
      if (code === 'MX') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 2100 1200" width="22" height="15" style="${style}"><rect width="700" height="1200" fill="#006847"/><rect x="700" width="700" height="1200" fill="#fff"/><rect x="1400" width="700" height="1200" fill="#ce1126"/><circle cx="1050" cy="600" r="90" fill="#8b5a2b"/></svg>`;
      }
      if (code === 'JP') {
        return `<svg class="city-ac-flag-svg" viewBox="0 0 900 600" width="22" height="15" style="${style}"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="180" fill="#bc002d"/></svg>`;
      }
      return `<span class="city-ac-flag-pill" style="font-size:0.68rem; font-weight:800; padding:2px 5px; border-radius:4px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); color:var(--texto); letter-spacing:0.5px;">${code || 'LOC'}</span>`;
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
        dropdown.innerHTML = `<div class="city-autocomplete-loading">Buscando "${escapeHtml(val)}"...</div>`;

        timer = setTimeout(async () => {
          try {
            const isMalv = isMalvinasQuery(val);
            const isFalkSearch = val.toLowerCase().includes('falk');

            const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(val)}&count=6&language=${currentLang || 'es'}&format=json`;
            const res = await fetch(url).catch(() => null);
            let results = [];
            if (res && res.ok) {
              const data = await res.json().catch(() => ({}));
              results = Array.isArray(data.results) ? data.results : [];
            }

            if (isMalv) {
              results = results.filter(item => {
                const nameLow = (item.name || '').toLowerCase();
                const countryLow = (item.country || '').toLowerCase();
                const codeUpper = (item.country_code || '').toUpperCase();
                return !(nameLow.includes('falkland') || countryLow.includes('falkland') || codeUpper === 'FK');
              });

              const malvItem = {
                ...MALVINAS_DESTINO_ARG,
                recommendationLabel: isFalkSearch ? 'Recomendado: Islas Malvinas (Argentina)' : 'Islas Malvinas (Argentina)'
              };
              results.unshift(malvItem);
            }

            if (results.length === 0) {
              dropdown.innerHTML = `<div class="city-autocomplete-loading">No se encontraron ciudades</div>`;
              return;
            }

            let html = '';
            results.forEach(item => {
              const countryCode = (item.country_code || '').toUpperCase();
              const countryName = item.country || item.country_code || '';
              const stateName = item.admin1 ? `${item.admin1}, ` : '';
              const isMalvItem = item.isSpecialMalvinas === true;

              const displayName = item.name;
              const displaySub = isMalvItem
                ? (item.recommendationLabel ? `<span style="color:#38bdf8; font-weight:700;">${item.recommendationLabel}</span> • Tierra del Fuego, Argentina (AR)` : `Tierra del Fuego, Argentina (AR)`)
                : `${stateName}${countryName} (${countryCode})`;

              const fullFormatted = isMalvItem
                ? 'Islas Malvinas, Argentina'
                : (countryName ? `${item.name}, ${countryName}` : item.name);

              const flagIcon = getCountryFlagSvg(countryCode);

              html += `
                <div class="city-autocomplete-item" onclick="window._handleCitySelection('${inputId}', '${dropdownId}', '${displayName.replace(/'/g, "\\'")}', '${countryCode}', '${fullFormatted.replace(/'/g, "\\'")}')">
                  <div class="city-ac-flag">${flagIcon}</div>
                  <div class="city-ac-info">
                    <div class="city-ac-name">${escapeHtml(displayName)}</div>
                    <div class="city-ac-country">${displaySub}</div>
                  </div>
                </div>`;
            });
            dropdown.innerHTML = html;
          } catch (err) {
            console.warn('City autocomplete error:', err);
            dropdown.style.display = 'none';
          }
        }, 250);
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
      
      const _checkParams = new URLSearchParams(window.location.search);
      const _hasIncoming = _checkParams.has('destino') || _checkParams.has('plantilla') || _checkParams.has('template') || _checkParams.has('join') || _checkParams.has('code') || window.location.pathname.includes('/join/');
      if (!_hasIncoming) {
        loadFromStorage();
      }
      const savedTheme = localStorage.getItem('Plux_Theme') || localStorage.getItem('PluxTheme') || 'theme-oscuro';
      const savedLang = localStorage.getItem('Plux_Lang') || localStorage.getItem('pluxUserLanguage') || currentLang || 'es';
      
      if (savedTheme && ['theme-claro','theme-oscuro','theme-tokyo','theme-grid','theme-terminal','theme-starship','theme-ares'].includes(savedTheme)) setTheme(savedTheme, false);
      else setTheme('theme-oscuro', false);
      setLanguage(savedLang, false);

      const savedMoneda = localStorage.getItem('plux_moneda') || 'EUR';
      if (typeof setMonedaActiva === 'function') setMonedaActiva(savedMoneda, false);
      if (typeof actualizarBadgeNotas === 'function') actualizarBadgeNotas();

      // Actualizar display del usuario
      updateUserButtonDisplay();

      // Close dropdowns when clicking outside (buttons & lang options already have inline onclick in index.html)
      document.addEventListener('click', () => {
        document.getElementById('langDropdown')?.classList.remove('show');
        document.getElementById('themeDropdown')?.classList.remove('show');
      });

      document.getElementById('addDestBtn')?.addEventListener('click', agregarDestino);
      document.getElementById('btn-resumen')?.addEventListener('click', mostrarResumen);

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
        if (typeof renderCartelitos === 'function') renderCartelitos();
        if (typeof actualizarHilitos === 'function') setTimeout(actualizarHilitos, 150);
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
        let offsetDias = 0;
        const fmt = (val) => (typeof formatMoneda === 'function') ? formatMoneda(Number(val) || 0) : `${val}€`;
        
        destinos.forEach(d => {
            const diasDest = Array.isArray(d.dias) ? d.dias : [];
            const localDiaIdx = diaIndex - offsetDias;
            offsetDias += diasDest.length;
            if (localDiaIdx >= 0 && localDiaIdx < diasDest.length) {
                tieneContenido = true;
                const dia = diasDest[localDiaIdx];
                html += `<div style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px; border-left:4px solid var(--verde);">`;
                html += `<h3 style="color:var(--verde); margin:0 0 15px 0; font-size:1.3rem;">📍 ${escapeHtml(d.nombre)} <small style="color:var(--gris); font-size:0.85rem;">(Día ${localDiaIdx + 1} en destino)</small></h3>`;
                
                // TRANSPORTE LLEGADA
                if (d.tramos && d.tramos.length > 0) {
                    html += `<div style="margin-bottom:12px;">`;
                    html += `<p style="color:var(--rosa); font-weight:bold; font-size:0.9rem; margin:0;">🚗 TRANSPORTE:</p>`;
                    d.tramos.forEach(tramo => {
                        html += `<p style="color:var(--gris); margin:4px 0; font-size:0.85rem;">${escapeHtml(tramo.origen || '')} → ${escapeHtml(tramo.destino || '')} | ${escapeHtml(tramo.medio || '')} (${fmt(tramo.precio)})</p>`;
                    });
                    html += `</div>`;
                }
                
                // ALOJAMIENTO
                if (dia.alojamiento) {
                    html += `<div style="margin-bottom:12px; padding:10px; background:rgba(16,185,129,0.1); border-radius:8px;">`;
                    html += `<p style="color:var(--verde); font-weight:bold; font-size:0.9rem; margin:0;">🏨 ALOJAMIENTO:</p>`;
                    html += `<p style="color:var(--gris); margin:4px 0; font-size:0.85rem;">${escapeHtml(dia.alojamiento.nombre || '')} - ${fmt(dia.alojamiento.precioTotal)}</p>`;
                    html += `</div>`;
                }
                
                // EVENTOS
                if (dia.eventos && dia.eventos.length > 0) {
                    html += `<div style="margin-bottom:12px;">`;
                    html += `<p style="color:var(--azul); font-weight:bold; font-size:0.9rem; margin:0;">📅 EVENTOS:</p>`;
                    dia.eventos.forEach(ev => {
                        eventosHoy++;
                        const horaDisplay = ev.hora ? `<strong style="color:var(--rosa); font-size:1rem;">${escapeHtml(ev.hora)}</strong>` : '<strong style="color:var(--gris);">Sin hora</strong>';
                        html += `
                        <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; margin:8px 0; border-left:3px solid var(--rosa);">
                            ${horaDisplay} - <strong>${escapeHtml(ev.titulo || '')}</strong>
                            ${ev.notas ? `<p style="margin:4px 0 0 0; color:var(--gris); font-size:0.8rem;">📝 ${escapeHtml(ev.notas)}</p>` : ''}
                            ${ev.costo ? `<p style="margin:2px 0 0 0; color:var(--verde); font-size:0.8rem;">💰 ${fmt(ev.costo)}</p>` : ''}
                        </div>`;
                    });
                    html += `</div>`;
                }
                
                // COSTOS ADICIONALES
                if (dia.costosAdicionales && dia.costosAdicionales.length > 0) {
                    html += `<div style="margin-bottom:12px;">`;
                    html += `<p style="color:var(--azul); font-weight:bold; font-size:0.9rem; margin:0;">💰 OTROS COSTOS:</p>`;
                    dia.costosAdicionales.forEach(costo => {
                        html += `<p style="color:var(--gris); margin:4px 0; font-size:0.85rem;">${escapeHtml(costo.descripcion || costo.concepto || 'Extra')}: ${fmt(costo.precio)}</p>`;
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

    let modalDestinoActivo = { nombre: '', destId: null, tab: 'desc' };
    const _wikiSummaryCache = {};

    function getDestinoAdvisory(nombre) {
      if (!nombre) return null;
      const clean = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

      // 1. ISLAS MALVINAS (ESPECIFICO)
      if (typeof isMalvinasQuery === 'function' && isMalvinasQuery(nombre)) {
        return {
          type: 'malvinas',
          title: 'Islas Malvinas (Territorio Argentino)',
          shortBadge: 'Son argentinas · Aviso',
          countryCode: 'AR',
          soberania: 'Territorio insular argentino bajo reclamo legítimo e imprescriptible de soberanía nacional.',
          alertaTitulo: 'Aviso y requisitos de viaje a las Islas Malvinas',
          alertaDesc: 'Son argentinas. Para ingresar debes llevar pasaporte vigente: debido a la ocupación colonial e ilegítima del Reino Unido sobre las islas, las autoridades locales de facto exigen pasaporte para el desembarco y estancia. Plux te permite planificar tu viaje al territorio insular argentino con total libertad y normalidad.',
          passportRequirement: 'Lleva pasaporte vigente obligatorio (exigencia de las autoridades coloniales locales).',
          safetyLevel: 'Seguro / Territorio insular bajo control británico de facto',
          moneda: 'Libra de las Islas Malvinas (FKP) / Tarjetas de crédito internacionales',
          idioma: 'Español (de jure oficial) / Inglés (de facto)',
          clima: 'Oceánico subpolar frío, ventoso y cambiante (temporada recomendada: noviembre a marzo).',
          faunaYAtractivos: 'Puerto Argentino, Isla Soledad, Isla Gran Malvina, colonias de pingüinos rey, de Magallanes y papúa, elefantes marinos y paisajes vírgenes australes.'
        };
      }

      // 2. PAISES CON ALERTAS DE SEGURIDAD / CONFLICTO / RED FLAGS / REQUISITOS
      const worldTravelAdvisories = [
        // NIVEL: DANGER (Riesgo Crítico / Máximo Riesgo / Zona de Guerra o Conflicto Activo)
        {
          keys: ['corea del norte', 'north korea', 'pyongyang'],
          name: 'Corea del Norte',
          countryCode: 'KP',
          type: 'danger',
          shortBadge: 'Alerta: Máximo riesgo',
          alertaTitulo: 'Aviso consular: Destino con severas restricciones y vigilancia',
          alertaDesc: 'País con régimen totalitario de extrema vigilancia. Viajes permitidos conceptualmente en Plux, pero solo posibles mediante tours estatales autorizados. Riesgo severo de arresto arbitrario, incomunicación y nula asistencia consular.',
          passportRequirement: 'Pasaporte visado y autorización gubernamental estatal previa.',
          safetyLevel: 'Riesgo Crítico / Evitar viajes no esenciales'
        },
        {
          keys: ['ucrania', 'ukraine', 'kiev', 'kyiv', 'kharkiv', 'odesa', 'donetsk', 'luhansk', 'crimea', 'lviv'],
          name: 'Ucrania',
          countryCode: 'UA',
          type: 'danger',
          shortBadge: 'Zona de conflicto bélico',
          alertaTitulo: 'Alerta de seguridad: Conflicto bélico activo',
          alertaDesc: 'Espacio aéreo civil cerrado. Riesgo constante de ataques con misiles, drones e infraestructura civil comprometida. Se desaconseja todo viaje.',
          passportRequirement: 'Pasaporte con más de 6 meses de vigencia y póliza con cobertura bélica explícita.',
          safetyLevel: 'Peligro Extremo / Zona de guerra'
        },
        {
          keys: ['rusia', 'russia', 'moscu', 'moscow', 'san petersburgo', 'st petersburg', 'kazan', 'sochi', 'vladivostok'],
          name: 'Rusia',
          countryCode: 'RU',
          type: 'danger',
          shortBadge: 'Alerta: Restricciones y sanciones',
          alertaTitulo: 'Aviso de seguridad y restricciones operativas',
          alertaDesc: 'Restricciones severas de vuelos directos desde múltiples países por sanciones internacionales. Tarjetas de crédito occidentales deshabilitadas (redes Visa/Mastercard no operativas para cuentas extranjeras). Riesgo de detenciones por normas locales.',
          passportRequirement: 'Pasaporte vigente con visado consular y seguro médico emitido por aseguradoras reconocidas.',
          safetyLevel: 'Riesgo Elevado / Sanciones activas'
        },
        {
          keys: ['siria', 'syria', 'damasco', 'damascus', 'alepo', 'aleppo'],
          name: 'Siria',
          countryCode: 'SY',
          type: 'danger',
          shortBadge: 'Alerta: Máximo riesgo',
          alertaTitulo: 'Aviso de seguridad: Conflicto armado y terrorismo',
          alertaDesc: 'Inestabilidad bélica prolongada, presencia militar extranjera, minas terrestres y riesgo de secuestros. Se desaconseja todo viaje.',
          passportRequirement: 'Pasaporte y visado de seguridad con aprobación previa del Ministerio de Turismo.',
          safetyLevel: 'Riesgo Crítico'
        },
        {
          keys: ['afganistan', 'afghanistan', 'kabul', 'kandahar'],
          name: 'Afganistán',
          countryCode: 'AF',
          type: 'danger',
          shortBadge: 'Alerta: Máximo riesgo',
          alertaTitulo: 'Aviso consular: Sin reconocimiento diplomático',
          alertaDesc: 'Sin protección consular oficial en el terreno. Amenaza permanente de atentados, detención por fuerzas locales y restricciones severas.',
          passportRequirement: 'Pasaporte con visado emitido por autoridades consulares afganas.',
          safetyLevel: 'Riesgo Crítico'
        },
        {
          keys: ['haiti', 'puerto principe', 'port-au-prince', 'cap-haitien'],
          name: 'Haití',
          countryCode: 'HT',
          type: 'danger',
          shortBadge: 'Alerta: Violencia extrema',
          alertaTitulo: 'Aviso de seguridad: Colapso de orden civil y bandas armadas',
          alertaDesc: 'Control de amplias zonas por pandillas criminales armadas, secuestros extorsivos a extranjeros y servicios de emergencia inoperativos.',
          passportRequirement: 'Pasaporte vigente.',
          safetyLevel: 'Riesgo Extremo'
        },
        {
          keys: ['yemen', 'sana', 'aden', 'socotra'],
          name: 'Yemen',
          countryCode: 'YE',
          type: 'danger',
          shortBadge: 'Alerta: Máximo riesgo',
          alertaTitulo: 'Aviso de seguridad: Conflicto armado y bloqueo',
          alertaDesc: 'Guerra civil activa, ataques navales y aéreos en el Mar Rojo y zonas costeras. Movilidad civil severamente restringida.',
          passportRequirement: 'Pasaporte vigente y visado especial.',
          safetyLevel: 'Riesgo Crítico'
        },
        {
          keys: ['somalia', 'mogadiscio', 'mogadishu', 'hargeisa'],
          name: 'Somalia',
          countryCode: 'SO',
          type: 'danger',
          shortBadge: 'Alerta: Máximo riesgo',
          alertaTitulo: 'Aviso consular: Terrorismo y piratería',
          alertaDesc: 'Actividad de grupos terroristas armados (Al-Shabaab), secuestros, piratería marítima y ausencia de estado de derecho.',
          passportRequirement: 'Pasaporte vigente y visado.',
          safetyLevel: 'Riesgo Crítico'
        },
        {
          keys: ['sudan del sur', 'south sudan', 'yuba', 'juba'],
          name: 'Sudán del Sur',
          countryCode: 'SS',
          type: 'danger',
          shortBadge: 'Alerta: Máximo riesgo',
          alertaTitulo: 'Aviso de seguridad: Conflictos étnicos y violencia armada',
          alertaDesc: 'Inestabilidad política extrema, saqueos armados y falta absoluta de infraestructura turística médica.',
          passportRequirement: 'Pasaporte con visado.',
          safetyLevel: 'Riesgo Crítico'
        },
        {
          keys: ['sudan', 'jartum', 'khartoum', 'port sudan'],
          name: 'Sudán',
          countryCode: 'SD',
          type: 'danger',
          shortBadge: 'Alerta: Guerra civil',
          alertaTitulo: 'Aviso de seguridad: Guerra civil activa',
          alertaDesc: 'Enfrentamientos armados entre el ejército y fuerzas paramilitares. Aeropuertos cerrados o bajo asedio. Evitar todo viaje.',
          passportRequirement: 'Pasaporte vigente.',
          safetyLevel: 'Riesgo Crítico'
        },
        {
          keys: ['libia', 'libya', 'tripoli', 'bengasi', 'benghazi'],
          name: 'Libia',
          countryCode: 'LY',
          type: 'danger',
          shortBadge: 'Alerta: Máximo riesgo',
          alertaTitulo: 'Aviso consular: Milicias armadas y secuestros',
          alertaDesc: 'División institucional profunda, presencia de mercenarios y milicias autónomas armadas con control de pasos fronterizos.',
          passportRequirement: 'Pasaporte con visado.',
          safetyLevel: 'Riesgo Crítico'
        },
        {
          keys: ['myanmar', 'birmania', 'naypyidaw', 'yangon', 'rangun', 'mandalay'],
          name: 'Myanmar (Birmania)',
          countryCode: 'MM',
          type: 'danger',
          shortBadge: 'Alerta: Conflicto civil',
          alertaTitulo: 'Aviso de seguridad: Guerra civil y régimen militar',
          alertaDesc: 'Guerra civil generalizada entre la junta militar y grupos rebeldes. Toques de queda, cortes de telecomunicaciones y bloqueos.',
          passportRequirement: 'Pasaporte con eVisa oficial para zonas permitidas.',
          safetyLevel: 'Riesgo Muy Alto'
        },
        {
          keys: ['mali', 'bamako', 'tombuctu'],
          name: 'Malí',
          countryCode: 'ML',
          type: 'danger',
          shortBadge: 'Alerta: Terrorismo activo',
          alertaTitulo: 'Aviso consular: Insurgencia yihadista',
          alertaDesc: 'Actividad armada insurgente recurrente en el Sahel, secuestros de extranjeros y presencia de mercenarios armados.',
          passportRequirement: 'Pasaporte y visado consular.',
          safetyLevel: 'Riesgo Crítico'
        },
        {
          keys: ['burkina faso', 'uagadugu', 'ouagadougou'],
          name: 'Burkina Faso',
          countryCode: 'BF',
          type: 'danger',
          shortBadge: 'Alerta: Máximo riesgo',
          alertaTitulo: 'Aviso de seguridad: Crisis terrorista',
          alertaDesc: 'Más del 40% del territorio fuera de control gubernamental efectivo por milicias yihadistas.',
          passportRequirement: 'Pasaporte y visado.',
          safetyLevel: 'Riesgo Crítico'
        },
        {
          keys: ['republica centroafricana', 'central african republic', 'bangui'],
          name: 'República Centroafricana',
          countryCode: 'CF',
          type: 'danger',
          shortBadge: 'Alerta: Violencia armada',
          alertaTitulo: 'Aviso consular: Grupos rebeldes',
          alertaDesc: 'Violencia indiscriminada fuera de la capital y carreteras intransitables sin escolta armada.',
          passportRequirement: 'Pasaporte vigente.',
          safetyLevel: 'Riesgo Crítico'
        },
        {
          keys: ['niger', 'niamey'],
          name: 'Níger',
          countryCode: 'NE',
          type: 'danger',
          shortBadge: 'Alerta: Inestabilidad',
          alertaTitulo: 'Aviso consular: Crisis política e insurgencia',
          alertaDesc: 'Golpe militar reciente, fronteras cerradas intermitentemente y amenaza yihadista en el oeste y sur.',
          passportRequirement: 'Pasaporte con visado.',
          safetyLevel: 'Riesgo Alto'
        },
        {
          keys: ['irak', 'iraq', 'bagdad', 'baghdad', 'erbil', 'basora'],
          name: 'Irak',
          countryCode: 'IQ',
          type: 'danger',
          shortBadge: 'Alerta: Riesgo armado',
          alertaTitulo: 'Aviso consular: Terrorismo residual y milicias',
          alertaDesc: 'Riesgo de ataques terroristas y cohetes hacia bases o embajadas. Región de Kurdistán iraquí más estable pero sujeta a tensiones transfronterizas.',
          passportRequirement: 'Pasaporte y visado electrónico previo.',
          safetyLevel: 'Riesgo Alto'
        },
        {
          keys: ['iran', 'teheran', 'tehran', 'isfahan', 'shiraz'],
          name: 'Irán',
          countryCode: 'IR',
          type: 'danger',
          shortBadge: 'Alerta: Detenciones y tensión',
          alertaTitulo: 'Aviso de seguridad: Riesgo de detención arbitraria',
          alertaDesc: 'Riesgo de detención por acusaciones de espionaje o infracciones a la ley islámica. Restricciones severas en redes sociales y vestimenta. Tensiones militares regionales.',
          passportRequirement: 'Pasaporte con al menos 6 meses de validez y visado previo obligatorio.',
          safetyLevel: 'Riesgo Alto'
        },
        {
          keys: ['israel', 'palestina', 'gaza', 'cisjordania', 'west bank', 'tel aviv', 'jerusalen', 'jerusalem', 'haifa', 'eilat'],
          name: 'Israel y Territorios Palestinos',
          countryCode: 'IL',
          type: 'danger',
          shortBadge: 'Alerta: Conflicto bélico activo',
          alertaTitulo: 'Aviso de seguridad: Hostilidades militares y bombardeos',
          alertaDesc: 'Conflicto militar activo en la Franja de Gaza y ataques transfronterizos de misiles y drones. Se aconseja evitar viajes no imprescindibles y acatar las alertas de sirenas y refugios antiaéreos del Comando del Frente Doméstico.',
          passportRequirement: 'Pasaporte vigente y formulario ETA-IL previo para turistas.',
          safetyLevel: 'Peligro Bélico / Atención a alertas'
        },
        {
          keys: ['libano', 'lebanon', 'beirut', 'tripoli libano'],
          name: 'Líbano',
          countryCode: 'LB',
          type: 'danger',
          shortBadge: 'Alerta: Zona inestable',
          alertaTitulo: 'Aviso de seguridad: Hostilidades militares y bombardeos',
          alertaDesc: 'Bombardeos y operaciones militares activas en el sur y suburbios de Beirut. Espacio aéreo sujeto a cancelaciones repentinas.',
          passportRequirement: 'Pasaporte con más de 6 meses de validez (sin sellos de Israel).',
          safetyLevel: 'Riesgo Crítico'
        },

        // NIVEL: WARNING (Precaución Elevada / Precaución Recomendada / Atención Reforzada)
        {
          keys: ['venezuela', 'caracas', 'maracaibo', 'margarita', 'valencia venezuela'],
          name: 'Venezuela',
          countryCode: 'VE',
          type: 'warning',
          shortBadge: 'Precaución recomendada',
          alertaTitulo: 'Recomendaciones consulares para viajeros',
          alertaDesc: 'Se recomienda extremar precauciones de seguridad personal, utilizar únicamente taxis oficiales o de hotel, no ostentar pertenencias y contar con seguro de viaje con cobertura médica internacional completa en dólares.',
          passportRequirement: 'Pasaporte con vigencia mínima de 6 meses.',
          safetyLevel: 'Precaución Elevada'
        },
        {
          keys: ['ecuador', 'quito', 'guayaquil', 'esmeraldas', 'manta', 'cuenca'],
          name: 'Ecuador',
          countryCode: 'EC',
          type: 'warning',
          shortBadge: 'Alerta: Estado de excepción',
          alertaTitulo: 'Aviso de seguridad: Conflicto armado interno',
          alertaDesc: 'Presencia militar y estados de excepción en zonas costeras (Guayaquil, Esmeraldas, Manabí) por narcotráfico y bandas criminales. Zonas serranas (Quito, Cuenca) e Islas Galápagos se mantienen seguras con precauciones habituales.',
          passportRequirement: 'Pasaporte vigente o DNI para países Mercosur.',
          safetyLevel: 'Precaución Reforzada'
        },
        {
          keys: ['colombia', 'bogota', 'medellin', 'cartagena', 'cali', 'santa marta', 'barranquilla', 'san andres'],
          name: 'Colombia',
          countryCode: 'CO',
          type: 'warning',
          shortBadge: 'Precaución urbana habitual',
          alertaTitulo: 'Consejos de seguridad y turismo en Colombia',
          alertaDesc: 'Destino fascinante y muy turístico. Se aconseja no ostentar objetos de valor en la vía pública ("no dar papaya"), utilizar aplicaciones de transporte oficiales (Uber/Cabify) en lugar de taxis de la calle por la noche, y evitar zonas rurales fronterizas.',
          passportRequirement: 'Pasaporte vigente o DNI para Mercosur + Check-Mig online.',
          safetyLevel: 'Turismo con Precaución'
        },
        {
          keys: ['mexico', 'ciudad de mexico', 'cdmx', 'cancun', 'guadalajara', 'monterrey', 'tijuana', 'playa del carmen', 'tulum', 'los cabos', 'puerto vallarta'],
          name: 'México',
          countryCode: 'MX',
          type: 'warning',
          shortBadge: 'Precaución en traslados',
          alertaTitulo: 'Consejos de seguridad para viajeros a México',
          alertaDesc: 'Los destinos turísticos (Cancún, Riviera Maya, Los Cabos, Ciudad de México centro/Roma/Condesa) cuentan con alta vigilancia. Se aconseja utilizar autopistas de cuota de día, evitar carreteras secundarias de noche y usar transporte por aplicación oficial.',
          passportRequirement: 'Pasaporte vigente y boleto de salida del país con hospedaje reservado.',
          safetyLevel: 'Precaución en Carreteras y Noche'
        },
        {
          keys: ['brasil', 'brazil', 'rio de janeiro', 'sao paulo', 'salvador de bahia', 'fortaleza', 'florianopolis', 'recife'],
          name: 'Brasil',
          countryCode: 'BR',
          type: 'warning',
          shortBadge: 'Precaución por hurtos urbanos',
          alertaTitulo: 'Recomendaciones de seguridad en Brasil',
          alertaDesc: 'Destino con increíble belleza natural y cultural. Precaución con robos oportunistas en playas concurridas (Copacabana, Ipanema) al anochecer, no transitar favelas sin guías locales comunitarios certificados y utilizar tarjetas virtuales o pagos con contactless.',
          passportRequirement: 'Pasaporte o DNI (Mercosur) y certificado de fiebre amarilla recomendado en ciertas regiones.',
          safetyLevel: 'Precaución Urbana Estándar'
        },
        {
          keys: ['peru', 'lima', 'cusco', 'arequipa', 'machu picchu', 'puno', 'iquitos'],
          name: 'Perú',
          countryCode: 'PE',
          type: 'warning',
          shortBadge: 'Atención a huelgas y clima',
          alertaTitulo: 'Consejos de viaje a Perú',
          alertaDesc: 'Destino arqueológico y gastronómico mundial. Prever días de adaptación para el mal de altura (soroche) en Cusco y Puno. Monitorear posibles bloqueos de vías férreas o carreteras en fechas de protestas gremiales.',
          passportRequirement: 'Pasaporte vigente o DNI Mercosur.',
          safetyLevel: 'Seguro con Precaución en Rutas'
        },
        {
          keys: ['egipto', 'egypt', 'el cairo', 'cairo', 'giza', 'luxor', 'aswan', 'sharm el sheij', 'hurghada'],
          name: 'Egipto',
          countryCode: 'EG',
          type: 'warning',
          shortBadge: 'Turismo en zonas vigiladas',
          alertaTitulo: 'Aviso de seguridad para viajeros en Egipto',
          alertaDesc: 'Destinos patrimoniales y balnearios del Mar Rojo cuentan con rigurosos controles de seguridad policial. Evitar viajes independientes a la península del Sinaí norte y desierto occidental junto a la frontera con Libia.',
          passportRequirement: 'Pasaporte con al menos 6 meses de vigencia y visa a la llegada (Visa on Arrival o eVisa).',
          safetyLevel: 'Precaución en Zonas Aisladas'
        },
        {
          keys: ['turquia', 'turkey', 'estambul', 'istanbul', 'ankara', 'capadocia', 'antalya', 'izmir'],
          name: 'Turquía',
          countryCode: 'TR',
          type: 'warning',
          shortBadge: 'Seguro en circuitos turísticos',
          alertaTitulo: 'Recomendaciones de viaje a Turquía',
          alertaDesc: 'Estambul, Capadocia y la costa mediterránea son muy seguras y reciben millones de turistas anualmente. Mantener distancia de zonas fronterizas con Siria e Irak en el sureste.',
          passportRequirement: 'Pasaporte con al menos 150 días de validez.',
          safetyLevel: 'Seguro con Alerta Fronteriza'
        },
        {
          keys: ['sudafrica', 'south africa', 'johannesburgo', 'ciudad del cabo', 'cape town', 'durban', 'kruger'],
          name: 'Sudáfrica',
          countryCode: 'ZA',
          type: 'warning',
          shortBadge: 'Precaución nocturna urbana',
          alertaTitulo: 'Aviso de seguridad para Sudáfrica',
          alertaDesc: 'Paisajes y safaris excepcionales. No caminar solo de noche en centros urbanos (Johannesburgo centro, Durban). Utilizar siempre vehículos cerrados y transporte privado de confianza.',
          passportRequirement: 'Pasaporte con al menos 2 páginas en blanco y 30 días tras la estancia.',
          safetyLevel: 'Precaución Elevada de Noche'
        },
        {
          keys: ['india', 'nueva delhi', 'new delhi', 'mumbai', 'bombay', 'jaipur', 'agra', 'goa', 'varanasi', 'bengaluru'],
          name: 'India',
          countryCode: 'IN',
          type: 'warning',
          shortBadge: 'Precaución sanitaria y cultural',
          alertaTitulo: 'Consejos consulares para viajeros a la India',
          alertaDesc: 'Consumir estrictamente agua embotellada sellada y alimentos cocidos para evitar trastornos estomacales. Mujeres viajeras deben tomar recaudos adicionales en transporte nocturno y vestir de forma conservadora en sitios religiosos.',
          passportRequirement: 'Pasaporte con al menos 6 meses de validez y eVisa previa.',
          safetyLevel: 'Precaución Sanitaria y Logística'
        },
        {
          keys: ['pakistan', 'islamabad', 'karachi', 'lahore'],
          name: 'Pakistán',
          countryCode: 'PK',
          type: 'warning',
          shortBadge: 'Precaución en áreas aisladas',
          alertaTitulo: 'Aviso consular para Pakistán',
          alertaDesc: 'Zonas turísticas del norte (Hunza, Gilgit) son pacíficas y hospitalarias. Evitar viajar a Baluchistán y zonas fronterizas con Afganistán.',
          passportRequirement: 'Pasaporte y eVisa aprobada.',
          safetyLevel: 'Precaución Reforzada'
        },
        {
          keys: ['nigeria', 'lagos', 'abuja'],
          name: 'Nigeria',
          countryCode: 'NG',
          type: 'warning',
          shortBadge: 'Precaución urbana y traslados',
          alertaTitulo: 'Aviso de seguridad para Nigeria',
          alertaDesc: 'Seguridad variable. Lagos y Abuya requieren transporte de confianza y hospedaje en zonas con seguridad privada. Riesgo de insurgencia armada en estados del norte.',
          passportRequirement: 'Pasaporte con visado.',
          safetyLevel: 'Precaución Elevada'
        }
      ];

      for (const item of worldTravelAdvisories) {
        if (item.keys.some(k => clean.includes(k))) {
          return item;
        }
      }

      return null;
    }

    function abrirModalInfoDestinoPorId(destId, defaultTab = 'desc') {
      const dest = destinos.find(d => d.id === destId);
      const nombre = dest ? dest.nombre : '';
      abrirModalInfoDestino(nombre, destId, defaultTab);
    }
    window.abrirModalInfoDestinoPorId = abrirModalInfoDestinoPorId;

    function abrirModalInfoDestino(nombre, destId, defaultTab = 'desc') {
      modalDestinoActivo = { nombre, destId, tab: defaultTab };
      const modal = document.getElementById('modal-destino-info');
      const titleEl = document.getElementById('destino-info-title');
      const flagEl = document.getElementById('destino-info-flag');
      if (!modal) {
        console.error('Modal modal-destino-info no encontrado en el DOM');
        return;
      }

      const advisory = getDestinoAdvisory(nombre);
      const isMalv = advisory && advisory.type === 'malvinas';

      if (titleEl) {
        titleEl.textContent = isMalv ? 'Islas Malvinas (Argentina)' : (nombre || 'Destino');
      }

      if (flagEl) {
        if (isMalv) {
          flagEl.innerHTML = `<svg class="city-ac-flag-svg" viewBox="0 0 900 600" width="26" height="18" style="border-radius:3px; box-shadow:0 0 4px rgba(0,0,0,0.6); vertical-align:middle; display:inline-block;"><rect width="900" height="600" fill="#74acdf"/><rect y="200" width="900" height="200" fill="#ffffff"/><circle cx="450" cy="300" r="45" fill="#f6b40e"/></svg>`;
        } else if (advisory && advisory.countryCode) {
          flagEl.innerHTML = getCountryFlagSvg(advisory.countryCode);
        } else {
          flagEl.innerHTML = `<i class="fa-solid fa-location-dot" style="color:#38bdf8; font-size:1.1rem;"></i>`;
        }
      }

      cambiarTabDestinoInfo(defaultTab);
      modal.style.display = 'flex';
    }
    window.abrirModalInfoDestino = abrirModalInfoDestino;

    function cerrarModalInfoDestino() {
      const modal = document.getElementById('modal-destino-info');
      if (modal) modal.style.display = 'none';
    }
    window.cerrarModalInfoDestino = cerrarModalInfoDestino;

    function cambiarTabDestinoInfo(tab) {
      modalDestinoActivo.tab = tab;
      const btnDesc = document.getElementById('btn-tab-info-desc');
      const btnAdv = document.getElementById('btn-tab-info-advisory');
      if (btnDesc) btnDesc.classList.toggle('active', tab === 'desc');
      if (btnAdv) btnAdv.classList.toggle('active', tab === 'advisory');
      renderContenidoDestinoInfo(modalDestinoActivo.nombre, modalDestinoActivo.destId);
    }
    window.cambiarTabDestinoInfo = cambiarTabDestinoInfo;

    async function renderContenidoDestinoInfo(nombre, destId) {
      const body = document.getElementById('destino-info-body');
      if (!body) return;

      const advisory = getDestinoAdvisory(nombre);
      const isMalv = advisory && advisory.type === 'malvinas';

      // 1. Limpieza y analisis del nombre ingresado
      const rawNombre = (nombre || '').trim();
      const parts = rawNombre.split(/[,-]/);
      const cleanCity = (parts[0] || '').trim();
      const detectedCountry = parts.length > 1 ? parts[parts.length - 1].trim() : '';

      const normNombre = rawNombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
      const normCity = cleanCity.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

      // 2. Buscar en catalogo curado
      let curated = null;
      let curatedList = [];
      try {
        if (typeof window !== 'undefined' && window.PLUX_CURATED_DESTINATIONS && Array.isArray(window.PLUX_CURATED_DESTINATIONS)) {
          curatedList = window.PLUX_CURATED_DESTINATIONS;
        } else if (typeof PLUX_CURATED_DESTINATIONS !== 'undefined' && Array.isArray(PLUX_CURATED_DESTINATIONS)) {
          curatedList = PLUX_CURATED_DESTINATIONS;
        }
      } catch (e) {
        curatedList = [];
      }

      if (curatedList && curatedList.length > 0) {
        curated = curatedList.find(d => {
          const dName = (d.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
          const dId = (d.id || '').toLowerCase().trim();
          return normCity === dName || normCity === dId || 
                 normNombre === dName || normNombre.includes(dName) || dName.includes(normCity);
        });
      }

      if (modalDestinoActivo.tab === 'advisory') {
        // PESTAÑA 2: AVISOS Y REQUISITOS (RED FLAGS Y RECOMENDACIONES)
        if (isMalv) {
          body.innerHTML = `
            <div class="alerta-box-card alerta-box-malvinas">
              <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                <svg class="city-ac-flag-svg" viewBox="0 0 900 600" width="30" height="20" style="border-radius:3px; box-shadow:0 0 4px rgba(0,0,0,0.6);"><rect width="900" height="600" fill="#74acdf"/><rect y="200" width="900" height="200" fill="#ffffff"/><circle cx="450" cy="300" r="45" fill="#f6b40e"/></svg>
                <h4 style="margin:0; font-size:1.05rem; color:#74acdf; font-weight:700;">${advisory.alertaTitulo}</h4>
              </div>
              <p style="margin:0 0 12px 0; font-size:0.92rem; line-height:1.55; color:#f1f5f9;">
                <strong>${advisory.soberania}</strong>
              </p>
              <div style="background:rgba(0,0,0,0.25); border-left:3px solid #74acdf; padding:12px 14px; border-radius:0 10px 10px 0; margin-bottom:12px;">
                <div style="font-size:0.85rem; font-weight:700; color:#38bdf8; margin-bottom:4px;">Requisito de Documentación:</div>
                <div style="font-size:0.9rem; line-height:1.5; color:#e2e8f0;">${advisory.alertaDesc}</div>
              </div>
              <div style="font-size:0.82rem; color:var(--gris); line-height:1.5;">
                <i class="fa-solid fa-circle-check" style="color:#10b981; margin-right:6px;"></i>
                Plux te permite agregar, organizar y personalizar tu viaje a las Islas Malvinas con total normalidad.
              </div>
            </div>

            <div class="destino-info-grid" style="margin-top:0;">
              <div class="destino-info-grid-item">
                <div class="destino-info-grid-label">Documento Exigido</div>
                <div class="destino-info-grid-val" style="color:#fcd34d;">Pasaporte Vigente</div>
              </div>
              <div class="destino-info-grid-item">
                <div class="destino-info-grid-label">Seguridad</div>
                <div class="destino-info-grid-val" style="color:#10b981;">Seguro / Pacífico</div>
              </div>
              <div class="destino-info-grid-item">
                <div class="destino-info-grid-label">Moneda en circulación</div>
                <div class="destino-info-grid-val">${advisory.moneda}</div>
              </div>
              <div class="destino-info-grid-item">
                <div class="destino-info-grid-label">Acceso habitual</div>
                <div class="destino-info-grid-val">Vuelos australes o cruceros</div>
              </div>
            </div>
          `;
          return;
        }

        if (advisory && advisory.type === 'danger') {
          body.innerHTML = `
            <div class="alerta-box-card alerta-box-danger">
              <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                <i class="fa-solid fa-triangle-exclamation" style="color:#ef4444; font-size:1.3rem;"></i>
                <h4 style="margin:0; font-size:1.05rem; color:#f87171; font-weight:700;">${advisory.alertaTitulo}</h4>
              </div>
              <p style="margin:0 0 12px 0; font-size:0.92rem; line-height:1.55; color:#f1f5f9;">
                ${advisory.alertaDesc}
              </p>
              <div style="background:rgba(0,0,0,0.3); border-left:3px solid #ef4444; padding:10px 14px; border-radius:0 10px 10px 0; margin-bottom:10px;">
                <div style="font-size:0.82rem; font-weight:700; color:#fca5a5; margin-bottom:2px;">Requisitos y Restricciones:</div>
                <div style="font-size:0.88rem; color:#ffffff;">${advisory.passportRequirement}</div>
              </div>
              <div style="font-size:0.82rem; color:var(--gris);">
                Nivel de advertencia: <span style="color:#f87171; font-weight:700;">${advisory.safetyLevel}</span>
              </div>
            </div>
          `;
          return;
        }

        if (advisory && advisory.type === 'warning') {
          body.innerHTML = `
            <div class="alerta-box-card alerta-box-warning">
              <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                <i class="fa-solid fa-circle-exclamation" style="color:#f59e0b; font-size:1.3rem;"></i>
                <h4 style="margin:0; font-size:1.05rem; color:#fbbf24; font-weight:700;">${advisory.alertaTitulo}</h4>
              </div>
              <p style="margin:0 0 12px 0; font-size:0.92rem; line-height:1.55; color:#f1f5f9;">
                ${advisory.alertaDesc}
              </p>
              <div style="background:rgba(0,0,0,0.3); border-left:3px solid #f59e0b; padding:10px 14px; border-radius:0 10px 10px 0; margin-bottom:10px;">
                <div style="font-size:0.82rem; font-weight:700; color:#fcd34d; margin-bottom:2px;">Consejo de Documentación:</div>
                <div style="font-size:0.88rem; color:#ffffff;">${advisory.passportRequirement}</div>
              </div>
            </div>
          `;
          return;
        }

        // Destino comun / estandar
        body.innerHTML = `
          <div class="alerta-box-card alerta-box-info">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
              <i class="fa-solid fa-shield-halved" style="color:#38bdf8; font-size:1.3rem;"></i>
              <h4 style="margin:0; font-size:1.05rem; color:#38bdf8; font-weight:700;">Recomendaciones de viaje estándar</h4>
            </div>
            <p style="margin:0 0 12px 0; font-size:0.92rem; line-height:1.55; color:#f1f5f9;">
              Destino seguro para viajes turísticos. Se recomienda mantener las precauciones habituales sobre pertenencias personales en zonas concurridas y transporte público.
            </p>
            <div style="display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color:#cbd5e1;">
              <div><i class="fa-solid fa-passport" style="color:#38bdf8; margin-right:8px;"></i> <strong>Pasaporte:</strong> Vigencia mínima recomendada de 6 meses desde la fecha de salida.</div>
              <div><i class="fa-solid fa-notes-medical" style="color:#10b981; margin-right:8px;"></i> <strong>Seguro médico:</strong> Se recomienda contar con póliza de asistencia internacional al viajero.</div>
              <div><i class="fa-solid fa-address-card" style="color:#f59e0b; margin-right:8px;"></i> <strong>Visados:</strong> Revisa los acuerdos de entrada según tu nacionalidad de origen.</div>
            </div>
          </div>
        `;
        return;
      }

      // PESTAÑA 1: FICHA Y RESUMEN DEL DESTINO
      if (isMalv) {
        body.innerHTML = `
          <div style="margin-bottom:16px;">
            <div style="font-size:0.95rem; line-height:1.6; color:#e2e8f0;">
              Archipiélago insular en el extremo sur del mar argentino. Cuenta con paisajes australes de inmensa pureza, costas acantiladas, playas de arena blanca y colonias marinas de pingüinos rey, pingüinos papúa y lobos marinos. Territorio histórico bajo legítimo reclamo soberano de la República Argentina.
            </div>
          </div>
          <div class="destino-info-grid">
            <div class="destino-info-grid-item">
              <div class="destino-info-grid-label">Soberanía de jure</div>
              <div class="destino-info-grid-val" style="color:#74acdf;">Argentina (Tierra del Fuego)</div>
            </div>
            <div class="destino-info-grid-item">
              <div class="destino-info-grid-label">Mejor época</div>
              <div class="destino-info-grid-val">Noviembre a Marzo</div>
            </div>
            <div class="destino-info-grid-item">
              <div class="destino-info-grid-label">Idioma</div>
              <div class="destino-info-grid-val">Español / Inglés</div>
            </div>
            <div class="destino-info-grid-item">
              <div class="destino-info-grid-label">Moneda</div>
              <div class="destino-info-grid-val">FKP / Tarjetas</div>
            </div>
          </div>
          <div style="margin-top:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:12px;">
            <div class="destino-info-grid-label">Lugares destacados</div>
            <div style="font-size:0.88rem; color:#f1f5f9; line-height:1.5; margin-top:4px;">
              ${advisory.faunaYAtractivos}
            </div>
          </div>
        `;
        return;
      }

      // Si coincide con curado, renderizar ficha completa y hermosa
      if (curated) {
        const flagSvg = getCountryFlagSvg(curated.codigoPais || 'LOC');
        const keyPlaces = Array.isArray(curated.lugaresClave) ? curated.lugaresClave : [];
        const gastronomy = Array.isArray(curated.gastronomia) ? curated.gastronomia : [];
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(curated.nombre + ' ' + (curated.pais || ''))}`;

        body.innerHTML = `
          <div class="destino-info-hero-container">
            <img src="${curated.img}" alt="${escapeHtml(curated.nombre)}" class="destino-info-hero-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';">
            <div class="destino-info-hero-overlay">
              <div class="destino-info-hero-badges">
                <span class="hero-badge hero-badge-country">${flagSvg} ${escapeHtml(curated.pais || '')}</span>
                <span class="hero-badge hero-badge-vibe"><i class="fa-solid fa-compass"></i> ${escapeHtml(curated.vibe || curated.estilo || 'Turismo')}</span>
                ${curated.rating ? `<span class="hero-badge" style="color:#fbbf24;"><i class="fa-solid fa-star"></i> ${curated.rating}</span>` : ''}
              </div>
            </div>
          </div>

          <div class="destino-info-desc-text">
            ${escapeHtml(curated.descripcion)}
          </div>

          <div class="destino-info-grid">
            <div class="destino-info-grid-item">
              <div class="destino-info-grid-label"><i class="fa-solid fa-wallet" style="color:#38bdf8;"></i> Presupuesto Estimado</div>
              <div class="destino-info-grid-val" style="color:#38bdf8;">~$${curated.presupuestoDia || 50} USD / día</div>
            </div>
            <div class="destino-info-grid-item">
              <div class="destino-info-grid-label"><i class="fa-solid fa-calendar-check" style="color:#10b981;"></i> Mejor Época</div>
              <div class="destino-info-grid-val">${escapeHtml(curated.mejorEpoca || 'Todo el año')}</div>
            </div>
            <div class="destino-info-grid-item">
              <div class="destino-info-grid-label"><i class="fa-solid fa-coins" style="color:#f59e0b;"></i> Moneda Local</div>
              <div class="destino-info-grid-val">${escapeHtml(curated.moneda || 'Moneda local')}</div>
            </div>
            <div class="destino-info-grid-item">
              <div class="destino-info-grid-label"><i class="fa-solid fa-language" style="color:#a855f7;"></i> Idioma</div>
              <div class="destino-info-grid-val">${escapeHtml(curated.idioma || 'Español')}</div>
            </div>
          </div>

          ${keyPlaces.length > 0 ? `
            <div class="destino-info-section-title"><i class="fa-solid fa-location-dot"></i> Atractivos Imperdibles</div>
            <div class="destino-info-chips-wrap">
              ${keyPlaces.map(p => `<span class="destino-info-chip"><i class="fa-solid fa-check" style="color:#38bdf8; font-size:0.7rem;"></i> ${escapeHtml(p)}</span>`).join('')}
            </div>
          ` : ''}

          ${gastronomy.length > 0 ? `
            <div class="destino-info-section-title"><i class="fa-solid fa-utensils"></i> Gastronomía Típica</div>
            <div class="destino-info-chips-wrap">
              ${gastronomy.map(g => `<span class="destino-info-chip"><i class="fa-solid fa-bowl-food" style="color:#f59e0b; font-size:0.7rem;"></i> ${escapeHtml(g)}</span>`).join('')}
            </div>
          ` : ''}

          ${curated.transporte ? `
            <div class="destino-info-section-title"><i class="fa-solid fa-bus"></i> Movilidad y Transporte</div>
            <div style="font-size:0.86rem; color:#cbd5e1; background:rgba(255,255,255,0.02); padding:10px 14px; border-radius:10px; border:1px solid rgba(255,255,255,0.06); line-height:1.5;">
              ${escapeHtml(curated.transporte)}
            </div>
          ` : ''}

          <div class="destino-info-actions">
            <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-destino-action primary">
              <i class="fa-solid fa-map-location-dot"></i> Explorar en Google Maps
            </a>
            <button type="button" class="btn-destino-action secondary" onclick="window.cerrarModalInfoDestino();">
              <i class="fa-solid fa-circle-check"></i> Continuar Planificando
            </button>
          </div>
        `;
        return;
      }

      // Si no es curado, buscar con MediaWiki generator search API
      body.innerHTML = `
        <div style="color:var(--gris); font-size:0.9rem; text-align:center; padding:35px 0;">
          <i class="fa-solid fa-spinner fa-spin" style="font-size:1.8rem; color:#38bdf8; margin-bottom:12px; display:block;"></i>
          Cargando guía completa de ${escapeHtml(cleanCity || rawNombre)}...
        </div>
      `;

      try {
        let cached = _wikiSummaryCache[normNombre] || _wikiSummaryCache[normCity];
        let extract = null;
        let thumbUrl = null;
        let articleTitle = cleanCity || rawNombre;

        if (cached) {
          extract = cached.extract;
          thumbUrl = cached.thumbUrl;
          articleTitle = cached.title || articleTitle;
        } else {
          const wikiSearchUrl = `https://es.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(rawNombre)}&gsrlimit=1&prop=extracts|pageimages&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=900&format=json&origin=*`;
          const res = await fetch(wikiSearchUrl);
          if (res.ok) {
            const data = await res.json();
            const pages = data && data.query ? data.query.pages : null;
            if (pages) {
              const pid = Object.keys(pages)[0];
              if (pid && pages[pid]) {
                const page = pages[pid];
                extract = page.extract || null;
                thumbUrl = page.thumbnail ? page.thumbnail.source : null;
                articleTitle = page.title || articleTitle;
                _wikiSummaryCache[normNombre] = { extract, thumbUrl, title: articleTitle };
                _wikiSummaryCache[normCity] = { extract, thumbUrl, title: articleTitle };
              }
            }
          }
        }

        // Si la búsqueda general no dio extract, probar con cleanCity directamente
        if (!extract && cleanCity !== rawNombre) {
          const wikiUrl2 = `https://es.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(cleanCity)}&gsrlimit=1&prop=extracts|pageimages&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=900&format=json&origin=*`;
          const res2 = await fetch(wikiUrl2);
          if (res2.ok) {
            const data2 = await res2.json();
            const pages2 = data2 && data2.query ? data2.query.pages : null;
            if (pages2) {
              const pid2 = Object.keys(pages2)[0];
              if (pid2 && pages2[pid2]) {
                extract = pages2[pid2].extract || null;
                thumbUrl = pages2[pid2].thumbnail ? pages2[pid2].thumbnail.source : null;
                articleTitle = pages2[pid2].title || articleTitle;
                _wikiSummaryCache[normNombre] = { extract, thumbUrl, title: articleTitle };
                _wikiSummaryCache[normCity] = { extract, thumbUrl, title: articleTitle };
              }
            }
          }
        }

        if (modalDestinoActivo.tab === 'desc') {
          // Detectar país para bandera
          let countryCode = 'LOC';
          const fullTextSearch = (rawNombre + ' ' + (extract || '')).toLowerCase();
          if (fullTextSearch.includes('argentina') || fullTextSearch.includes('buenos aires') || fullTextSearch.includes('patagonia')) countryCode = 'AR';
          else if (fullTextSearch.includes('españa') || fullTextSearch.includes('spain')) countryCode = 'ES';
          else if (fullTextSearch.includes('italia') || fullTextSearch.includes('italy')) countryCode = 'IT';
          else if (fullTextSearch.includes('francia') || fullTextSearch.includes('france')) countryCode = 'FR';
          else if (fullTextSearch.includes('brasil') || fullTextSearch.includes('brazil')) countryCode = 'BR';
          else if (fullTextSearch.includes('uruguay')) countryCode = 'UY';
          else if (fullTextSearch.includes('chile')) countryCode = 'CL';
          else if (fullTextSearch.includes('mexico') || fullTextSearch.includes('méxico')) countryCode = 'MX';
          else if (fullTextSearch.includes('estados unidos') || fullTextSearch.includes('united states') || fullTextSearch.includes('usa')) countryCode = 'US';
          else if (fullTextSearch.includes('reino unido') || fullTextSearch.includes('united kingdom') || fullTextSearch.includes('inglaterra')) countryCode = 'GB';

          const flagSvg = getCountryFlagSvg(countryCode);
          const finalImg = thumbUrl || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rawNombre)}`;

          const descText = extract 
            ? extract.slice(0, 750) + (extract.length > 750 ? '...' : '') 
            : `Destino turístico seleccionado: ${rawNombre}. Cuenta con atractivos turísticos, actividades culturales y opciones gastronómicas para explorar durante tu itinerario.`;

          body.innerHTML = `
            <div class="destino-info-hero-container">
              <img src="${finalImg}" alt="${escapeHtml(articleTitle)}" class="destino-info-hero-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';">
              <div class="destino-info-hero-overlay">
                <div class="destino-info-hero-badges">
                  <span class="hero-badge hero-badge-country">${flagSvg} ${escapeHtml(detectedCountry || articleTitle)}</span>
                  <span class="hero-badge hero-badge-vibe"><i class="fa-solid fa-map-pin"></i> Destino del viaje</span>
                </div>
              </div>
            </div>

            <div class="destino-info-desc-text">
              ${escapeHtml(descText)}
            </div>

            <div class="destino-info-grid">
              <div class="destino-info-grid-item">
                <div class="destino-info-grid-label"><i class="fa-solid fa-earth-americas" style="color:#38bdf8;"></i> Destino</div>
                <div class="destino-info-grid-val">${escapeHtml(articleTitle)}</div>
              </div>
              <div class="destino-info-grid-item">
                <div class="destino-info-grid-label"><i class="fa-solid fa-passport" style="color:#10b981;"></i> Documentación</div>
                <div class="destino-info-grid-val">DNI / Pasaporte Vigente</div>
              </div>
              <div class="destino-info-grid-item">
                <div class="destino-info-grid-label"><i class="fa-solid fa-wallet" style="color:#f59e0b;"></i> Presupuesto Estimado</div>
                <div class="destino-info-grid-val" style="color:#38bdf8;">~$50-90 USD / día</div>
              </div>
              <div class="destino-info-grid-item">
                <div class="destino-info-grid-label"><i class="fa-solid fa-shield-halved" style="color:#a855f7;"></i> Asistencia</div>
                <div class="destino-info-grid-val">Seguro de Viaje Recomendado</div>
              </div>
            </div>

            <div class="destino-info-section-title"><i class="fa-solid fa-lightbulb"></i> Consejos para tu Estadía</div>
            <div class="destino-info-chips-wrap">
              <span class="destino-info-chip"><i class="fa-solid fa-clock" style="color:#38bdf8; font-size:0.7rem;"></i> Planifica días enteros por zona</span>
              <span class="destino-info-chip"><i class="fa-solid fa-credit-card" style="color:#10b981; font-size:0.7rem;"></i> Lleva tarjetas y efectivo local</span>
              <span class="destino-info-chip"><i class="fa-solid fa-cloud-sun" style="color:#f59e0b; font-size:0.7rem;"></i> Revisa el pronóstico del clima</span>
            </div>

            <div class="destino-info-actions">
              <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-destino-action primary">
                <i class="fa-solid fa-map-location-dot"></i> Explorar en Google Maps
              </a>
              <button type="button" class="btn-destino-action secondary" onclick="window.cerrarModalInfoDestino();">
                <i class="fa-solid fa-circle-check"></i> Continuar Planificando
              </button>
            </div>
          `;
        }
      } catch (err) {
        if (modalDestinoActivo.tab === 'desc') {
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rawNombre)}`;
          body.innerHTML = `
            <div class="destino-info-hero-container">
              <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80" alt="${escapeHtml(rawNombre)}" class="destino-info-hero-img">
              <div class="destino-info-hero-overlay">
                <div class="destino-info-hero-badges">
                  <span class="hero-badge hero-badge-country">${getCountryFlagSvg('LOC')} Destino Activo</span>
                </div>
              </div>
            </div>
            <div class="destino-info-desc-text">
              Destino en el itinerario: <strong>${escapeHtml(rawNombre)}</strong>. Organiza tus actividades día por día, medios de transporte y gastos para tener una experiencia inolvidable.
            </div>
            <div class="destino-info-actions">
              <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-destino-action primary">
                <i class="fa-solid fa-map-location-dot"></i> Explorar en Google Maps
              </a>
              <button type="button" class="btn-destino-action secondary" onclick="window.cerrarModalInfoDestino();">
                <i class="fa-solid fa-circle-check"></i> Continuar Planificando
              </button>
            </div>
          `;
        }
      }
    }

    function renderDestinos() {
      const cont = document.getElementById("destinos");
      if (!cont) return;
      // Sync openTransportDestIds with current DOM state before clearing
      const openTransports = cont.querySelectorAll('.transport-section.show');
      openTransports.forEach(el => {
        const did = parseInt(el.id.replace('transport-', ''), 10);
        if (!isNaN(did)) openTransportDestIds.add(did);
      });
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

        const advisory = getDestinoAdvisory(d.nombre);
        let advisoryBtnHtml = '';
        if (advisory) {
          if (advisory.type === 'malvinas') {
            advisoryBtnHtml = `
              <button type="button" class="badge-alerta-viaje badge-malvinas" onclick="event.stopPropagation(); window.abrirModalInfoDestinoPorId(${d.id}, 'advisory')" title="Aviso importante: Islas Malvinas">
                <svg class="city-ac-flag-svg" viewBox="0 0 900 600" width="16" height="11" style="border-radius:2px; vertical-align:middle; display:inline-block;"><rect width="900" height="600" fill="#74acdf"/><rect y="200" width="900" height="200" fill="#ffffff"/><circle cx="450" cy="300" r="45" fill="#f6b40e"/></svg>
                <span>Son argentinas · Aviso</span>
              </button>`;
          } else if (advisory.type === 'danger') {
            advisoryBtnHtml = `
              <button type="button" class="badge-alerta-viaje badge-danger" onclick="event.stopPropagation(); window.abrirModalInfoDestinoPorId(${d.id}, 'advisory')" title="${escapeHtml(advisory.shortBadge)}">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span>${escapeHtml(advisory.shortBadge)}</span>
              </button>`;
          } else if (advisory.type === 'warning') {
            advisoryBtnHtml = `
              <button type="button" class="badge-alerta-viaje badge-warning" onclick="event.stopPropagation(); window.abrirModalInfoDestinoPorId(${d.id}, 'advisory')" title="${escapeHtml(advisory.shortBadge)}">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>${escapeHtml(advisory.shortBadge)}</span>
              </button>`;
          }
        }

        div.innerHTML = `
          <div class="destino-header" onclick="toggleEditorDestino(${d.id}, event)" style="cursor:pointer; user-select:none;">
            <div class="destino-header-top-row" style="display:flex; align-items:center; justify-content:space-between; gap:8px; width:100%;">
              <div style="display:flex; align-items:center; gap:8px; min-width:0; flex:1; overflow:hidden;">
                <span class="drag-handle drag-handle-dest" data-drag-type="dest" data-dest-id="${d.id}" data-dest-idx="${destIdx}" title="Arrastra o mantén presionado para reordenar destino" onclick="event.stopPropagation()">⠿</span>
                <div class="bubble-name" style="flex-shrink:0;">${d.nombre.slice(0,3).toUpperCase()}</div>
                <h2 style="margin:0; font-size:1.15rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; min-width:0;">${escapeHtml(d.nombre)}</h2>
              </div>
              <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
                <span id="editor-dest-chev-${d.id}" class="chevron-indicator" style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:8px; background:rgba(255,255,255,0.06); transition:transform 0.2s ease; transform:${isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}; color:var(--gris); font-size:0.75rem;" title="Plegar / Expandir">▼</span>
                <button class="close-icon" onclick="event.stopPropagation(); eliminarDestino(${d.id});" style="font-size:1.8rem; line-height:1; padding:0 4px;" title="Eliminar destino">×</button>
              </div>
            </div>
            <div class="destino-header-badges-row" style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:8px; padding-left:36px;">
              <button type="button" class="btn-dest-info" onclick="event.stopPropagation(); window.abrirModalInfoDestinoPorId(${d.id}, 'desc')" title="Ver ficha y recomendaciones de ${escapeHtml(d.nombre)}">
                <i class="fa-solid fa-circle-info"></i>
                <span>Ficha</span>
              </button>
              ${advisoryBtnHtml}
              <span style="font-size:0.75rem; font-weight:600; color:var(--gris); background:rgba(255,255,255,0.06); padding:2px 8px; border-radius:999px; white-space:nowrap;">${numDiasDest} ${numDiasDest === 1 ? 'día' : 'días'}</span>
            </div>
          </div>
          <div id="editor-dest-body-${d.id}" style="display:${isCollapsed ? 'none' : 'block'};">
            <div style="display:flex; gap:8px; margin:10px 0; flex-wrap:wrap;">
              <div class="transport-icon" onclick="toggleTransportFields(${d.id})" style="cursor:pointer; z-index:10;"><i class="fa-solid fa-plane"></i></div>
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
      setTimeout(() => { if (typeof actualizarHilitos === 'function') actualizarHilitos(); }, 120);
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
      console.error('❌ AI_CORE: Cloudflare Worker no disponible en este momento.');
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
            <h6 style="margin:0; color:var(--rosa); font-weight:700; letter-spacing:0.5px;"><i class="fa-solid fa-plane" style="margin-right:6px;"></i> ${t('transport').toUpperCase()} Y ${t('accommodation').toUpperCase()} #${ida+1}</h6>
            <button class="close-icon" onclick="eliminarTramo(${destId}, ${ida})">×</button>
          </div>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
            <div class="field-boa" style="position:relative;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; gap:6px; flex-wrap:wrap;">
                <label style="font-size:0.75rem; font-weight:700; color:var(--gris); margin:0;">${t('transport').toUpperCase()}</label>
                <button type="button" class="btn-live-search" onclick="window.abrirBusquedaTransporteTramo(${destId}, ${ida}, event)">
                  <i class="fa-solid fa-compass" style="margin-right:4px;"></i> <span>Buscar transporte</span>
                </button>
              </div>
              <input type="text" id="tramo-medio-${destId}-${ida}" placeholder="Avión, Tren, Bus, Auto..." value="${escapeHtml(tramo.medio || '')}" onchange="actualizarTramo(${destId}, ${ida}, 'medio', this.value)" style="width:100%; height:40px; background:var(--fondo); border:1px solid var(--border); border-radius:8px; padding:0 10px;">
              <div id="dropdown-transporte-${destId}-${ida}" class="live-booking-dropdown" style="display:none; z-index:99999;"></div>
            </div>
            <div class="field-boa">
              <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--gris); margin-bottom:6px;">${t('transport_price') || 'PRECIO TRANSPORTE'} (${getSimboloMoneda(tramo.moneda || getMonedaActiva())})</label>
              <div style="display:flex; gap:6px; align-items:center;">
                <input type="number" id="tramo-precio-${destId}-${ida}" placeholder="0.00" value="${tramo.precio || 0}" onchange="actualizarTramo(${destId}, ${ida}, 'precio', parseFloat(this.value)||0)" style="flex:1; height:40px; background:var(--fondo); border:1px solid var(--border); border-radius:8px; padding:0 10px;">
                <select class="plux-moneda-select" onchange="actualizarTramo(${destId}, ${ida}, 'moneda', this.value)" style="width:78px; height:40px; background:rgba(15,23,42,0.95); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:0.8rem; font-weight:600;" title="Moneda transporte">
                  ${renderCurrencyOptions(tramo.moneda || getMonedaActiva())}
                </select>
              </div>
            </div>
            <div class="field-boa" style="grid-column: 1 / -1; position:relative;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; gap:6px; flex-wrap:wrap;">
                <label style="font-size:0.75rem; font-weight:700; color:var(--gris); margin:0;">${t('alojamiento_label')}</label>
                <button type="button" class="btn-live-search hotel-btn" onclick="window.abrirBusquedaHotelesTramo(${destId}, ${ida}, event)">
                  <i class="fa-solid fa-hotel" style="margin-right:4px;"></i> <span>Buscar alojamiento</span>
                </button>
              </div>
              <input type="text" id="tramo-alojamiento-${destId}-${ida}" placeholder="${t('alojamiento_ph')}" value="${escapeHtml(tramo.alojamiento || '')}" onchange="actualizarTramo(${destId}, ${ida}, 'alojamiento', this.value)" style="width:100%; height:40px; background:var(--fondo); border:1px solid var(--border); border-radius:8px; padding:0 10px;">
              <div id="dropdown-hoteles-${destId}-${ida}" class="live-booking-dropdown" style="display:none; z-index:99999;"></div>
            </div>
            <div class="field-boa" style="grid-column: 1 / -1;">
              <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--gris); margin-bottom:6px;">${t('precio_alojamiento_label')} (${getSimboloMoneda(tramo.monedaAlojamiento || getMonedaActiva())})</label>
              <div style="display:flex; gap:6px; align-items:center;">
                <input type="number" id="tramo-precioAlojamiento-${destId}-${ida}" placeholder="0.00" value="${tramo.precioAlojamiento || 0}" onchange="actualizarTramo(${destId}, ${ida}, 'precioAlojamiento', parseFloat(this.value)||0)" style="flex:1; height:40px; background:var(--fondo); border:1px solid var(--border); border-radius:8px; padding:0 10px;">
                <select class="plux-moneda-select" onchange="actualizarTramo(${destId}, ${ida}, 'monedaAlojamiento', this.value)" style="width:78px; height:40px; background:rgba(15,23,42,0.95); border:1px solid var(--border); border-radius:8px; color:#fff; font-size:0.8rem; font-weight:600;" title="Moneda alojamiento">
                  ${renderCurrencyOptions(tramo.monedaAlojamiento || getMonedaActiva())}
                </select>
              </div>
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
          <input type="text" value="${escapeHtml(escala || '')}" placeholder="${t('escala')}" onchange="actualizarEscala(${destId}, ${tramoIda}, ${ida}, this.value)">
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
      if (campo === 'moneda' || campo === 'monedaAlojamiento') {
        renderTramos(destId);
        const pantResumen = document.getElementById('pantalla-resumen');
        if (pantResumen && pantResumen.style.display !== 'none') mostrarResumen();
      }
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
          <div class="dia-header" onclick="toggleEditorDia(${destId}, ${dia.id}, event)" style="cursor:pointer; user-select:none; display:flex; align-items:center; justify-content:space-between; gap:6px;">
            <div style="display:flex; align-items:center; gap:8px; flex:1; min-width:0; overflow:hidden;">
              <span class="drag-handle drag-handle-dia" data-drag-type="dia" data-dest-id="${destId}" data-dia-id="${dia.id}" data-dia-idx="${diaIdx}" title="Arrastra o mantén presionado para reordenar día" onclick="event.stopPropagation()">⠿</span>
              <h4 style="margin:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${t('day_prefix')} ${diaIdx + 1}${daySched?.dateLabel ? ` <small style="color:var(--gris);font-weight:normal">(${daySched.dateLabel})</small>` : ''}</h4>
              <span id="editor-dia-ev-badge-${destId}-${dia.id}" style="font-size:0.72rem; color:var(--gris); background:rgba(255,255,255,0.06); padding:2px 7px; border-radius:999px; white-space:nowrap; flex-shrink:0;">${evCount}</span>
            </div>
            <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
              <div id="weather-day-${destId}-${dia.id}" class="weather-chip weather-chip-day" data-city="${dest.nombre.replace(/"/g, '&quot;')}" data-date="${dateStr}" data-fidx="${fidx}" onclick="event.stopPropagation(); toggleWeatherWidget('weather-day-${destId}-${dia.id}')" title="Clima del día">
                <div class="weather-chip-row"><span class="weather-chip-icon"><i class="fa-solid fa-cloud-sun"></i></span><span class="weather-chip-temp">...</span></div>
              </div>
              <span id="editor-dia-chev-${destId}-${dia.id}" class="chevron-indicator" style="display:inline-flex; align-items:center; justify-content:center; width:26px; height:26px; border-radius:6px; background:rgba(255,255,255,0.06); transition:transform 0.2s ease; transform:${isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}; color:var(--gris); font-size:0.72rem;" title="Plegar / Expandir">▼</span>
              <div class="dia-actions" style="display:flex; align-items:center; gap:3px;">
                <span class="copy-icon" onclick="event.stopPropagation(); duplicarDia(${destId}, ${dia.id});" title="${t('copy_button')}" style="padding:2px 4px;">⎘</span>
                <button class="close-icon" onclick="event.stopPropagation(); eliminarDia(${destId}, ${dia.id});" style="font-size:1.6rem; line-height:1; padding:0 2px;">×</button>
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
            <input type="text" value="${escapeHtml(ev.titulo || '')}" placeholder="${t('event_title_placeholder')}" style="flex:1;" onchange="actualizarEvento(${destId}, ${diaId}, ${ida}, 'titulo', this.value)">
            <button class="close-icon" onclick="eliminarEvento(${destId}, ${diaId}, ${ida})" style="margin-left:auto;">×</button>
          </div>
          <div id="editor-ev-body-${destId}-${diaId}-${ida}" style="display:${isEvCollapsed ? 'none' : 'block'}; margin-top:8px;">
            <input type="text" class="notas-input" value="${escapeHtml(ev.notas || '')}" placeholder="${t('event_notes_placeholder')}" onchange="actualizarEvento(${destId}, ${diaId}, ${ida}, 'notas', this.value)">
            <div class="detalles-evento">
              <div class="detalle-field">
                <label>${t('event_cost_placeholder')} (${getSimboloMoneda(ev.moneda || getMonedaActiva())})</label>
                <div style="display:flex; gap:6px; align-items:center;">
                  <input type="number" value="${ev.costo || 0}" style="flex:1;" onchange="actualizarEvento(${destId}, ${diaId}, ${ida}, 'costo', parseFloat(this.value)||0)">
                  <select class="plux-moneda-select" onchange="actualizarEvento(${destId}, ${diaId}, ${ida}, 'moneda', this.value)" style="width:78px; padding:6px 4px; font-size:0.8rem; background:rgba(15,23,42,0.95); border:1px solid var(--border); border-radius:6px; color:#fff;" title="Moneda de este gasto">
                    ${renderCurrencyOptions(ev.moneda || getMonedaActiva())}
                  </select>
                </div>
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
      if (campo === 'moneda') {
        const lbl = document.querySelector(`.evento[data-dest-id="${destId}"][data-dia-id="${diaId}"][data-ev-idx="${evId}"] .detalle-field label`);
        if (lbl) {
          lbl.textContent = `${t('event_cost_placeholder')} (${getSimboloMoneda(valor)})`;
        }
        const pantResumen = document.getElementById('pantalla-resumen');
        if (pantResumen && pantResumen.style.display !== 'none') mostrarResumen();
      }
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
            <input type="text" placeholder="${t('costo_desc')}" value="${escapeHtml(costo.descripcion || costo.concepto || '')}" onchange="actualizarCostoAdicional(${destId}, ${diaId}, ${ida}, 'descripcion', this.value)" style="flex:1;">
            <div style="display:flex; align-items:center; gap:6px;">
              <input type="number" placeholder="0" value="${costo.precio || 0}" style="width:80px;" onchange="actualizarCostoAdicional(${destId}, ${diaId}, ${ida}, 'precio', parseFloat(this.value)||0)">
              <select class="plux-moneda-select" onchange="actualizarCostoAdicional(${destId}, ${diaId}, ${ida}, 'moneda', this.value)" style="width:74px; padding:6px 4px; font-size:0.78rem; background:rgba(15,23,42,0.95); border:1px solid var(--border); border-radius:6px; color:#fff;" title="Moneda de este costo">
                ${renderCurrencyOptions(costo.moneda || getMonedaActiva())}
              </select>
            </div>
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
      if (campo === 'moneda') {
        const pantResumen = document.getElementById('pantalla-resumen');
        if (pantResumen && pantResumen.style.display !== 'none') mostrarResumen();
      }
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

    let activeResumenTab = 'general';

    function switchResumenTab(tabName) {
      activeResumenTab = tabName;
      ['general', 'presupuesto', 'transporte'].forEach(tName => {
        const btn = document.getElementById(`tab-btn-${tName}`);
        const panel = document.getElementById(`resumen-tab-${tName}`);
        if (btn) {
          if (tName === tabName) btn.classList.add('active');
          else btn.classList.remove('active');
        }
        if (panel) {
          panel.style.display = tName === tabName ? 'block' : 'none';
        }
      });
      if (tabName === 'general' && window._resumenMap) {
        setTimeout(() => {
          try { window._resumenMap.invalidateSize(); } catch(e){}
        }, 150);
      }
      if (tabName === 'presupuesto' && window._chartDonut) {
        setTimeout(() => {
          try { window._chartDonut.resize(); } catch(e){}
        }, 150);
      }
    }
    window.switchResumenTab = switchResumenTab;

    function calcularHoraLlegada(horaSalida, duracionMinutos, retrasoMinutos = 0) {
      if (!horaSalida) return '--:--';
      const parts = String(horaSalida).split(':');
      if (parts.length < 2) return '--:--';
      const horas = parseInt(parts[0], 10) || 0;
      const minutos = parseInt(parts[1], 10) || 0;
      const dur = parseInt(duracionMinutos, 10) || 0;
      const ret = parseInt(retrasoMinutos, 10) || 0;
      const totalMinutos = (horas * 60 + minutos) + dur + ret;
      const hLlegada = Math.floor((totalMinutos / 60) % 24);
      const mLlegada = totalMinutos % 60;
      const diasExtra = Math.floor(totalMinutos / (24 * 60));
      const timeStr = `${String(hLlegada).padStart(2, '0')}:${String(mLlegada).padStart(2, '0')}`;
      return diasExtra > 0 ? `${timeStr} (+${diasExtra}d)` : timeStr;
    }
    window.calcularHoraLlegada = calcularHoraLlegada;

    function obtenerListaViajerosTotal() {
      const set = new Set();
      if (currentNickname) set.add(`@${currentNickname}`);
      if (firebaseUser && firebaseUser.displayName) set.add(firebaseUser.displayName);
      if (typeof listaViajeros !== 'undefined' && Array.isArray(listaViajeros)) {
        listaViajeros.forEach(v => { if (v && String(v).trim()) set.add(String(v).trim()); });
      }
      if (typeof nombresPersonasGlobal === 'string' && nombresPersonasGlobal) {
        nombresPersonasGlobal.split(',').forEach(v => { if (v && String(v).trim()) set.add(String(v).trim()); });
      }
      if (set.size === 0) set.add('Viajero 1');
      return Array.from(set);
    }
    window.obtenerListaViajerosTotal = obtenerListaViajerosTotal;

    function renderResumen() {
      const cont = document.getElementById("resumenContenido");
      if (!cont) return;
      cont.innerHTML = "";
      let costoGlobal = 0;
      let costoTransporte = 0;
      let costoAlojamiento = 0;
      let costoEventos = 0;
      let costoOtros = 0;
      let totalEventos = 0;
      let totalDias = 0;
      let totalPagado = 0;
      let totalPendiente = 0;
      const costosPorDestino = [];
      const allExpenses = [];

      const isTimeline = modoVista === 1;
      if (isTimeline) cont.classList.add('vista-linea-tiempo');
      else cont.classList.remove('vista-linea-tiempo');

      // Calculate stats & collect expenses
      destinos.forEach((dest, destIdx) => {
        const numDiasDest = dest.dias ? dest.dias.length : 0;
        totalDias += numDiasDest;
        let costoDest = 0;

        const monedaActiva = getMonedaActiva();

        (dest.tramos || []).forEach((tramo, tramoIdx) => {
          const precioTranspRaw = Number(tramo.precio) || 0;
          const precioAlojRaw = Number(tramo.precioAlojamiento) || 0;
          const precioTransp = convertirMonto(precioTranspRaw, tramo.moneda || monedaActiva, monedaActiva);
          const precioAloj = convertirMonto(precioAlojRaw, tramo.monedaAlojamiento || monedaActiva, monedaActiva);

          if (precioTransp > 0) {
            const cTransp = precioTransp * numPersonas;
            costoGlobal += cTransp;
            costoTransporte += cTransp;
            costoDest += cTransp;
            const isPaid = tramo.pagado === true;
            if (isPaid) totalPagado += cTransp; else totalPendiente += cTransp;
            allExpenses.push({
              tipo: 'tramo_transporte',
              destId: dest.id,
              destIndex: destIdx,
              subId: null,
              itemIndex: tramoIdx,
              concepto: `Transporte a ${dest.nombre} (${tramo.medio || 'Trayecto'})`,
              categoria: 'Transporte',
              costoUnitario: precioTransp,
              costoTotal: cTransp,
              pagadoPor: tramo.pagadoPor || 'Todos',
              pagado: isPaid,
              ubicacion: dest.nombre
            });
          }
          if (precioAloj > 0) {
            const cAloj = precioAloj * numPersonas;
            costoGlobal += cAloj;
            costoAlojamiento += cAloj;
            costoDest += cAloj;
            const isPaid = tramo.alojamientoPagado === true;
            if (isPaid) totalPagado += cAloj; else totalPendiente += cAloj;
            allExpenses.push({
              tipo: 'tramo_alojamiento',
              destId: dest.id,
              destIndex: destIdx,
              subId: null,
              itemIndex: tramoIdx,
              concepto: `Alojamiento en ${dest.nombre} (${tramo.alojamiento || 'Estancia'})`,
              categoria: 'Alojamiento',
              costoUnitario: precioAloj,
              costoTotal: cAloj,
              pagadoPor: tramo.alojamientoPagadoPor || 'Todos',
              pagado: isPaid,
              ubicacion: dest.nombre
            });
          }
        });

        (dest.dias || []).forEach((dia, diaIdx) => {
          totalEventos += dia.eventos ? dia.eventos.length : 0;
          (dia.eventos || []).forEach((ev, evIdx) => {
            if (ev.costo) {
              const evCostoUnit = convertirMonto(Number(ev.costo) || 0, ev.moneda || monedaActiva, monedaActiva);
              const c = evCostoUnit * numPersonas;
              costoGlobal += c;
              costoEventos += c;
              costoDest += c;
              const isPaid = ev.pagado === true;
              if (isPaid) totalPagado += c; else totalPendiente += c;
              allExpenses.push({
                tipo: 'evento',
                destId: dest.id,
                destIndex: destIdx,
                subId: dia.id,
                diaIndex: diaIdx,
                itemIndex: evIdx,
                concepto: ev.titulo || t('untitled_event') || 'Actividad',
                categoria: 'Actividades',
                costoUnitario: evCostoUnit,
                costoTotal: c,
                pagadoPor: ev.pagadoPor || 'Todos',
                pagado: isPaid,
                ubicacion: `${dest.nombre} - Dia ${diaIdx + 1}`
              });
            }
          });
          (dia.costosAdicionales || []).forEach((c, cIdx) => {
            if (c.precio) {
              const p = convertirMonto(Number(c.precio) || 0, c.moneda || monedaActiva, monedaActiva);
              costoGlobal += p;
              costoOtros += p;
              costoDest += p;
              const isPaid = c.pagado === true;
              if (isPaid) totalPagado += p; else totalPendiente += p;
              allExpenses.push({
                tipo: 'costo_adicional_dia',
                destId: dest.id,
                destIndex: destIdx,
                subId: dia.id,
                diaIndex: diaIdx,
                itemIndex: cIdx,
                concepto: c.concepto || c.descripcion || 'Gasto adicional',
                categoria: 'Extras',
                costoUnitario: p,
                costoTotal: p,
                pagadoPor: c.pagadoPor || 'Todos',
                pagado: isPaid,
                ubicacion: `${dest.nombre} - Dia ${diaIdx + 1}`
              });
            }
          });
        });

        costosPorDestino.push({ id: dest.id, nombre: dest.nombre, costo: costoDest, diasCount: numDiasDest });
      });

      const monedaActivaGlobal = getMonedaActiva();
      if (vueltaPrecioGlobal) {
        const vUnit = convertirMonto(Number(vueltaPrecioGlobal) || 0, (typeof vueltaMonedaGlobal !== 'undefined' && vueltaMonedaGlobal) || monedaActivaGlobal, monedaActivaGlobal);
        const vCost = vUnit * numPersonas;
        costoGlobal += vCost;
        costoTransporte += vCost;
        const isPaid = (typeof vueltaPagado !== 'undefined') ? vueltaPagado === true : false;
        if (isPaid) totalPagado += vCost; else totalPendiente += vCost;
        allExpenses.push({
          tipo: 'vuelta',
          destId: null,
          destIndex: null,
          subId: null,
          itemIndex: null,
          concepto: `Regreso / Vuelta (${vueltaGlobal || 'Retorno'})`,
          categoria: 'Transporte',
          costoUnitario: vUnit,
          costoTotal: vCost,
          pagadoPor: (typeof vueltaPagadoPor !== 'undefined') ? vueltaPagadoPor : 'Todos',
          pagado: isPaid,
          ubicacion: 'Regreso'
        });
      }

      (typeof vueltaCostosAdicionales !== 'undefined' && Array.isArray(vueltaCostosAdicionales) ? vueltaCostosAdicionales : []).forEach((vc, vcIdx) => {
        if (vc.precio) {
          const p = convertirMonto(Number(vc.precio) || 0, vc.moneda || monedaActivaGlobal, monedaActivaGlobal);
          costoGlobal += p;
          costoOtros += p;
          const isPaid = vc.pagado === true;
          if (isPaid) totalPagado += p; else totalPendiente += p;
          allExpenses.push({
            tipo: 'vuelta_costo_adicional',
            destId: null,
            destIndex: null,
            subId: null,
            itemIndex: vcIdx,
            concepto: vc.descripcion || vc.concepto || 'Extra de vuelta',
            categoria: 'Extras',
            costoUnitario: p,
            costoTotal: p,
            pagadoPor: vc.pagadoPor || 'Todos',
            pagado: isPaid,
            ubicacion: 'Regreso'
          });
        }
      });

      // Update hero subtitle
      const fechaEl = document.getElementById('fechaInicio');
      const fecha = fechaEl?.value ? new Date(fechaEl.value).toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
      const subtitleEl = document.getElementById('resumen-subtitle');
      if (subtitleEl) {
        let sub = fecha ? `Salida: ${fecha} • ${destinos.map(d => d.nombre).join(' → ')}` : destinos.map(d => d.nombre).join(' → ');
        if (nombresPersonasGlobal) sub += ` • Viajeros: ${nombresPersonasGlobal}`;
        subtitleEl.textContent = sub;
      }

      // ==========================================
      // 1. RENDER PESTAÑA GENERAL
      // ==========================================
      const statGrid = document.getElementById('stat-grid');
      if (statGrid) {
        const totalNoches = totalDias > 1 ? totalDias - 1 : (totalDias === 1 ? 1 : 0);
        statGrid.innerHTML = `
          <div class="stat-card stat-azul">
            <div class="stat-badge">DURACION</div>
            <div class="stat-value">${totalDias}</div>
            <div class="stat-label">${totalDias} Dias • ${totalNoches} Noches</div>
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
            <div class="stat-value">${formatMoneda(costoGlobal)}</div>
            <div class="stat-label">Total estimado</div>
          </div>
          <div class="stat-card stat-azul">
            <div class="stat-badge">POR PERSONA</div>
            <div class="stat-value">${formatMoneda(numPersonas > 0 ? (costoGlobal / numPersonas) : 0)}</div>
            <div class="stat-label">${numPersonas} ${numPersonas === 1 ? 'viajero' : 'viajeros'}</div>
          </div>
        `;
      }

      // Mini-map with Leaflet
      const mapContainer = document.getElementById('resumen-map-mini');
      if (mapContainer && window.L && destinos.length > 0) {
        mapContainer.innerHTML = '';
        if (window._resumenMap) { try { window._resumenMap.remove(); } catch(e){} window._resumenMap = null; }
        if (mapContainer._leaflet_id) { mapContainer._leaflet_id = null; }
        
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
          
          if (window._resumenMap) { try { window._resumenMap.remove(); } catch(e){} window._resumenMap = null; }
          if (mapContainer._leaflet_id) { mapContainer._leaflet_id = null; }
          const miniMap = L.map('resumen-map-mini', { zoomControl: true, scrollWheelZoom: false });
          window._resumenMap = miniMap;
          L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', { maxZoom: 16, attribution: 'Tiles &copy; Esri' }).addTo(miniMap);
          
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

      // Detail Content: Timeline vs Standard Collapsible View
      const tripSchedule = buildTripDaySchedule();
      if (isTimeline) {
        // ORIGINAL TIMELINE VIEW (FAITHFUL REPRODUCTION)
        if (lugarSalida) {
          cont.innerHTML += `
            <div class="ciudad-block timeline" style="border-left:none; margin-bottom:24px;">
              <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; color:#38bdf8; font-weight:700;">PUNTO DE PARTIDA</div>
              <div style="font-size:1.1rem; font-weight:700; color:#f8fafc; margin-top:4px;">${lugarSalida}</div>
            </div>
          `;
        }

        destinos.forEach((dest, destIdx) => {
          let html = `
            <div class="ciudad-block timeline" style="border-left:none; margin-bottom:32px;">
              <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:8px;">
                <h3 style="color:#38bdf8; margin:0; font-size:1.3rem; font-weight:700;">${destIdx + 1}. ${dest.nombre}</h3>
                ${(dest.tramos || []).length ? `<small style="color:var(--gris); font-size:0.82rem;">${dest.tramos.map(t => t.medio || 'Trayecto').join(' • ')}</small>` : ''}
              </div>
          `;

          // Tramos
          (dest.tramos || []).forEach((tramo, i) => {
            const sum = (Number(tramo.precio) || 0) + (Number(tramo.precioAlojamiento) || 0);
            html += `
              <div style="margin-bottom:12px; font-size:0.88rem; color:var(--gris); background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:8px;">
                <strong style="color:#f8fafc;">Transporte / Estancia ${i + 1}:</strong> ${tramo.medio || 'Trayecto'}
                ${tramo.alojamiento ? ` • Alojamiento: ${tramo.alojamiento}` : ''}
                ${sum ? ` — <span style="color:#34d399; font-weight:600;">${formatMoneda(sum * numPersonas)}</span>` : ''}
              </div>
            `;
          });

          // Days
          (dest.dias || []).forEach((dia, diaIdx) => {
            const daySched = tripSchedule.find(s => s.destId === dest.id && s.diaId === dia.id);
            const dateStr = daySched?.dateStr || '';
            const fidx = daySched?.forecastIndex ?? '';

            html += `
              <div class="dia-resumen timeline">
                <div class="dia-resumen-header" style="margin-bottom:10px;">
                  <h4 style="margin:0; font-size:1.02rem; font-weight:700; color:#f8fafc;">Dia ${diaIdx + 1}${daySched?.dateLabel ? ` <small style="color:var(--gris); font-weight:normal;">(${daySched.dateLabel})</small>` : ''}</h4>
                  <div id="weather-resumen-day-${dest.id}-${dia.id}" class="weather-chip weather-chip-day" data-city="${dest.nombre.replace(/"/g, '&quot;')}" data-date="${dateStr}" data-fidx="${fidx}" onclick="event.stopPropagation(); toggleWeatherWidget('weather-resumen-day-${dest.id}-${dia.id}')" title="Pronostico del dia">
                    <div class="weather-chip-row"><span class="weather-chip-icon">...</span><span class="weather-chip-temp">...</span></div>
                  </div>
                </div>
            `;

            if (!dia.eventos || dia.eventos.length === 0) {
              html += `<p style="color:var(--gris); font-size:0.85rem; margin:6px 0; font-style:italic;">Sin actividades registradas</p>`;
            } else {
              dia.eventos.forEach(ev => {
                html += `
                  <div class="evento-resumen timeline">
                    <span class="hora-t">${ev.hora || '--:--'}</span>
                    <div class="ev-info">
                      <strong style="color:#f8fafc; font-size:0.95rem;">${ev.titulo || t('untitled_event')}</strong>
                      ${ev.duracion ? `<small style="color:var(--gris); margin-left:8px;">[${ev.duracion} min]</small>` : ''}
                      ${ev.costo ? `<small style="color:#fbbf24; margin-left:8px; font-weight:700;">${formatMoneda(ev.costo * numPersonas)}</small>` : ''}
                      ${ev.lugar ? `<p class="nota-resumen" style="margin:3px 0 0 0; color:var(--gris); font-size:0.82rem;">Ubicacion: ${ev.lugar}</p>` : ''}
                      ${ev.notas ? `<p class="nota-resumen" style="margin:3px 0 0 0; color:var(--gris); font-size:0.85rem;">↳ ${ev.notas}</p>` : ''}
                    </div>
                  </div>
                `;
              });
            }

            (dia.costosAdicionales || []).forEach(c => {
              if (c.precio || c.concepto) {
                html += `
                  <div style="display:flex; justify-content:space-between; font-size:0.82rem; color:var(--gris); padding:4px 0; border-top:1px dashed rgba(255,255,255,0.05); margin-top:6px;">
                    <span>Costo adicional: ${c.concepto || 'Extra'}</span>
                    <span style="color:#f472b6; font-weight:600;">${formatMoneda(Number(c.precio) || 0)}</span>
                  </div>
                `;
              }
            });

            html += `</div>`; // close dia-resumen timeline
          });

          html += `</div>`; // close ciudad-block timeline
          cont.innerHTML += html;
        });

        if (vueltaGlobal || vueltaCostosAdicionales.length) {
          let vueltaHtml = `
            <div class="ciudad-block timeline" style="border-left:none; margin-top:20px;">
              <h3 style="color:#f472b6; margin:0 0 8px 0; font-size:1.15rem; font-weight:700;">Regreso / Vuelta</h3>
              <div><strong style="color:#f8fafc;">${vueltaGlobal || 'Viaje de retorno'}</strong>${vueltaPrecioGlobal ? ` — <span style="color:#f472b6; font-weight:700;">${formatMoneda(vueltaPrecioGlobal * numPersonas)}</span>` : ''}</div>
            </div>
          `;
          cont.innerHTML += vueltaHtml;
        }
      } else {
        // STANDARD VIEW (COLLAPSIBLE CARDS)
        if (lugarSalida) {
          cont.innerHTML += `
            <div class="ciudad-block" style="border-left: 3px solid #38bdf8; margin-bottom: 16px;">
              <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; color:#38bdf8; font-weight:700;">PUNTO DE PARTIDA</div>
              <div style="font-size:1.05rem; font-weight:600; color:#f8fafc; margin-top:2px;">${lugarSalida}</div>
            </div>
          `;
        }

        destinos.forEach((dest, destIdx) => {
          const isDestCollapsed = collapsedResumenDestinos.has(dest.id);
          const destStats = costosPorDestino.find(cd => cd.id === dest.id) || { costo: 0, diasCount: 0 };
          
          let html = `
            <div class="collapsible-card" style="margin-bottom: 20px;">
              <div class="collapsible-header" onclick="toggleResumenDestino(${dest.id})">
                <div style="display:flex; align-items:center; gap:12px;">
                  <span id="resumen-dest-chev-${dest.id}" class="chevron-indicator" style="transform:${isDestCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};">▼</span>
                  <span style="background:rgba(56,189,248,0.12); color:#38bdf8; font-size:0.72rem; font-weight:700; padding:3px 8px; border-radius:6px; letter-spacing:0.04em;">DESTINO ${destIdx + 1}</span>
                  <h3 style="margin:0; font-size:1.15rem; font-weight:700; color:#f8fafc;">${dest.nombre}</h3>
                </div>
                <div style="font-size:0.82rem; color:var(--gris); font-weight:500;">
                  ${destStats.diasCount} ${destStats.diasCount === 1 ? 'dia' : 'dias'}${destStats.costo > 0 ? ` • <span style="color:#34d399; font-weight:600;">${formatMoneda(destStats.costo)}</span>` : ''}
                </div>
              </div>
              <div id="resumen-dest-body-${dest.id}" style="display:${isDestCollapsed ? 'none' : 'block'}; padding: 12px 16px 16px;">
          `;

          // Tramos summary
          (dest.tramos || []).forEach((tramo, i) => {
            const sum = (Number(tramo.precio) || 0) + (Number(tramo.precioAlojamiento) || 0);
            html += `
              <div class="transp-summary-card">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <strong>Transporte / Estancia ${i + 1}:</strong> ${tramo.medio || 'Trayecto'}
                    ${tramo.alojamiento ? `<span style="color:var(--gris);"> • Alojamiento: ${tramo.alojamiento}</span>` : ''}
                  </div>
                  ${sum ? `<span style="color:#38bdf8; font-weight:600; font-size:0.85rem;">${formatMoneda(sum * numPersonas)}</span>` : ''}
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
              <div class="dia-resumen" style="margin-top: 12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:10px; overflow:hidden;">
                <div class="dia-resumen-header" onclick="toggleResumenDia(${dest.id}, ${dia.id})" style="cursor:pointer; user-select:none; display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:rgba(255,255,255,0.03);">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span id="resumen-dia-chev-${dest.id}-${dia.id}" class="chevron-indicator" style="font-size:0.75rem; transform:${isDiaCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};">▼</span>
                    <h4 style="margin:0; font-size:0.95rem; font-weight:600;">Dia ${diaIdx + 1}${daySched?.dateLabel ? ` <small style="color:var(--gris); font-weight:normal;">(${daySched.dateLabel})</small>` : ''}</h4>
                    <span style="font-size:0.72rem; color:var(--gris); background:rgba(255,255,255,0.05); padding:2px 6px; border-radius:4px;">${evCount} ${evCount === 1 ? 'actividad' : 'actividades'}</span>
                  </div>
                  <div id="weather-resumen-day-${dest.id}-${dia.id}" class="weather-chip weather-chip-day" data-city="${dest.nombre.replace(/"/g, '&quot;')}" data-date="${dateStr}" data-fidx="${fidx}" onclick="event.stopPropagation(); toggleWeatherWidget('weather-resumen-day-${dest.id}-${dia.id}')" title="Pronostico del dia">
                    <div class="weather-chip-row"><span class="weather-chip-icon">...</span><span class="weather-chip-temp">...</span></div>
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
                  <div class="evento-row-compact" onclick="toggleResumenEventoDetails(this)" title="${hasDetails ? 'Click para ver mas detalles' : ''}">
                    <div class="ev-main-line">
                      <span class="ev-time">${ev.hora || '--:--'}</span>
                      <span class="ev-title">${ev.titulo || t('untitled_event')}</span>
                      ${ev.duracion ? `<span class="ev-dur">${ev.duracion} min</span>` : ''}
                      ${ev.costo ? `<span class="ev-cost">${formatMoneda(ev.costo * numPersonas)}</span>` : ''}
                    </div>
                    ${hasDetails ? `
                      <div class="ev-details">
                        ${ev.lugar ? `<div style="font-weight:600; margin-bottom:2px;">Ubicacion: ${ev.lugar}</div>` : ''}
                        ${ev.notas ? `<div>${ev.notas}</div>` : ''}
                      </div>
                    ` : ''}
                  </div>
                `;
              });
            }

            (dia.costosAdicionales || []).forEach(c => {
              if (c.precio || c.concepto) {
                html += `
                  <div style="display:flex; justify-content:space-between; font-size:0.82rem; color:var(--gris); padding:4px 8px; border-top:1px dashed rgba(255,255,255,0.05); margin-top:4px;">
                    <span>Costo adicional: ${c.concepto || 'Extra'}</span>
                    <span style="color:#f472b6; font-weight:600;">${formatMoneda(Number(c.precio) || 0)}</span>
                  </div>
                `;
              }
            });

            html += `</div></div>`;
          });

          html += `</div></div>`;
          cont.innerHTML += html;
        });

        if (vueltaGlobal || vueltaCostosAdicionales.length) {
          let vueltaHtml = `
            <div class="collapsible-card" style="border-left: 3px solid #f472b6; margin-top: 16px; padding: 14px 18px;">
              <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; color:#f472b6; font-weight:700;">REGRESO / VUELTA</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
                <div style="font-weight:600; color:#f8fafc; font-size:1rem;">${vueltaGlobal || 'Viaje de vuelta'}</div>
                ${vueltaPrecioGlobal ? `<span style="color:#f472b6; font-weight:700; font-size:1rem;">${formatMoneda(vueltaPrecioGlobal * numPersonas)}</span>` : ''}
              </div>
            </div>
          `;
          cont.innerHTML += vueltaHtml;
        }
      }

      // ==========================================
      // 2. RENDER PESTAÑA PRESUPUESTO
      // ==========================================
      const presupuestoKpiGrid = document.getElementById('presupuesto-kpi-grid');
      if (presupuestoKpiGrid) {
        presupuestoKpiGrid.innerHTML = `
          <div class="stat-card stat-rosa">
            <div class="stat-badge">TOTAL ESTIMADO</div>
            <div class="stat-value">${formatMoneda(costoGlobal)}</div>
            <div class="stat-label">Costo global del viaje</div>
          </div>
          <div class="stat-card stat-azul">
            <div class="stat-badge">POR PERSONA</div>
            <div class="stat-value">${formatMoneda(numPersonas > 0 ? (costoGlobal / numPersonas) : 0)}</div>
            <div class="stat-label">${numPersonas} ${numPersonas === 1 ? 'viajero' : 'viajeros'}</div>
          </div>
          <div class="stat-card stat-verde">
            <div class="stat-badge">TOTAL PAGADO</div>
            <div class="stat-value">${formatMoneda(totalPagado)}</div>
            <div class="stat-label">${costoGlobal > 0 ? Math.round((totalPagado / costoGlobal) * 100) : 0}% completado</div>
          </div>
          <div class="stat-card stat-amarillo">
            <div class="stat-badge">PENDIENTE</div>
            <div class="stat-value">${formatMoneda(totalPendiente)}</div>
            <div class="stat-label">Por abonar o liquidar</div>
          </div>
        `;
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
              labels: ['Transporte', 'Alojamiento', 'Actividades', 'Extras'],
              datasets: [{
                data: [costoTransporte, costoAlojamiento, costoEventos, costoOtros],
                backgroundColor: ['#38bdf8', '#818cf8', '#34d399', '#f472b6'],
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
            const pctAloj = Math.round((costoAlojamiento / costoGlobal) * 100) || 0;
            const pctAct = Math.round((costoEventos / costoGlobal) * 100) || 0;
            const pctOtros = Math.round((costoOtros / costoGlobal) * 100) || 0;
            breakdownBox.innerHTML = `
              <div class="breakdown-item">
                <div class="breakdown-header">
                  <span><span class="breakdown-dot" style="background:#38bdf8;"></span>Transporte</span>
                  <span class="breakdown-amt">${formatMoneda(costoTransporte)} <small>(${pctTransp}%)</small></span>
                </div>
                <div class="breakdown-track"><div class="breakdown-fill" style="width:${pctTransp}%; background:#38bdf8;"></div></div>
              </div>
              <div class="breakdown-item">
                <div class="breakdown-header">
                  <span><span class="breakdown-dot" style="background:#818cf8;"></span>Alojamiento</span>
                  <span class="breakdown-amt">${formatMoneda(costoAlojamiento)} <small>(${pctAloj}%)</small></span>
                </div>
                <div class="breakdown-track"><div class="breakdown-fill" style="width:${pctAloj}%; background:#818cf8;"></div></div>
              </div>
              <div class="breakdown-item">
                <div class="breakdown-header">
                  <span><span class="breakdown-dot" style="background:#34d399;"></span>Actividades</span>
                  <span class="breakdown-amt">${formatMoneda(costoEventos)} <small>(${pctAct}%)</small></span>
                </div>
                <div class="breakdown-track"><div class="breakdown-fill" style="width:${pctAct}%; background:#34d399;"></div></div>
              </div>
              <div class="breakdown-item">
                <div class="breakdown-header">
                  <span><span class="breakdown-dot" style="background:#f472b6;"></span>Extras</span>
                  <span class="breakdown-amt">${formatMoneda(costoOtros)} <small>(${pctOtros}%)</small></span>
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

      // Vaca / Split bill & Balances
      const costEl = document.getElementById('costoGlobal');
      if (costEl) {
        costEl.innerHTML = costoGlobal > 0 ? `<strong>Total del viaje: ${formatMoneda(costoGlobal)}</strong>` : '';
      }
      const vacaGlobal = document.getElementById('vacaGlobal');
      const vacaToggle = document.getElementById('vaca-toggle');
      const balancesListEl = document.getElementById('presupuesto-balances-list');

      const listaViajerosTotal = obtenerListaViajerosTotal();
      const numTotalV = listaViajerosTotal.length > 0 ? listaViajerosTotal.length : (numPersonas || 1);
      const cuotaIndividual = costoGlobal / numTotalV;

      // Calculate paid amounts per person
      const aportesPorPersona = {};
      listaViajerosTotal.forEach(v => { aportesPorPersona[v] = 0; });
      allExpenses.forEach(exp => {
        if (exp.pagado && exp.pagadoPor && exp.pagadoPor !== 'Todos') {
          aportesPorPersona[exp.pagadoPor] = (aportesPorPersona[exp.pagadoPor] || 0) + exp.costoTotal;
        }
      });

      if (vacaGlobal && vacaToggle) {
        if (vacaToggle.checked && costoGlobal > 0 && numTotalV > 1) {
          vacaGlobal.innerHTML = `Cuota equitativa por persona: ${formatMoneda(cuotaIndividual)}`;
          vacaGlobal.style.display = 'block';
        } else {
          vacaGlobal.innerHTML = '';
          vacaGlobal.style.display = 'none';
        }
      }

      if (balancesListEl) {
        if (numTotalV > 1 && costoGlobal > 0) {
          let balHtml = `<div class="balance-card-grid">`;
          listaViajerosTotal.forEach(v => {
            const pagado = aportesPorPersona[v] || 0;
            const balance = pagado - cuotaIndividual;
            const balColor = balance > 0.01 ? '#34d399' : (balance < -0.01 ? '#f87171' : 'var(--gris)');
            const balTexto = balance > 0.01 ? `+${formatMoneda(balance)} (a favor)` : (balance < -0.01 ? `${formatMoneda(Math.abs(balance))} (debe)` : 'Al dia');
            balHtml += `
              <div class="balance-person-card">
                <div class="balance-person-name">${v}</div>
                <div class="balance-person-stat"><span>Abonado:</span> <strong style="color:#f8fafc;">${formatMoneda(pagado)}</strong></div>
                <div class="balance-person-stat"><span>Balance:</span> <strong style="color:${balColor};">${balTexto}</strong></div>
              </div>
            `;
          });
          balHtml += `</div>`;
          balancesListEl.innerHTML = balHtml;
        } else {
          balancesListEl.innerHTML = '';
        }
      }

      // Editable Expense List Table
      const tablaGastosEl = document.getElementById('resumen-gastos-tabla');
      if (tablaGastosEl) {
        if (allExpenses.length === 0) {
          tablaGastosEl.innerHTML = `<p style="color:var(--gris); text-align:center; padding:16px; margin:0;">No hay gastos registrados en este viaje.</p>`;
        } else {
          let tHtml = `
            <div class="tabla-gastos-container">
              <table class="tabla-gastos">
                <thead>
                  <tr>
                    <th>Concepto</th>
                    <th>Categoria</th>
                    <th>Ubicacion</th>
                    <th>Costo</th>
                    <th>Pagado por</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
          `;
          allExpenses.forEach(exp => {
            const optionsPayer = ['Todos', ...listaViajerosTotal].map(p => {
              return `<option value="${p}" ${exp.pagadoPor === p ? 'selected' : ''}>${p}</option>`;
            }).join('');

            tHtml += `
              <tr>
                <td><strong>${exp.concepto}</strong></td>
                <td><span style="font-size:0.75rem; color:var(--gris); background:rgba(255,255,255,0.06); padding:2px 8px; border-radius:6px;">${exp.categoria}</span></td>
                <td><span style="color:var(--gris); font-size:0.8rem;">${exp.ubicacion}</span></td>
                <td>
                  <input type="number" step="any" min="0" value="${exp.costoUnitario}" 
                    style="width:75px; background:rgba(255,255,255,0.06); border:1px solid var(--border); border-radius:6px; padding:4px 6px; color:#f8fafc; font-weight:700;"
                    onchange="window.actualizarGastoResumen('${exp.tipo}', ${exp.destId !== null ? exp.destId : 'null'}, ${exp.subId !== null ? exp.subId : 'null'}, ${exp.itemIndex !== null ? exp.itemIndex : 'null'}, 'costo', this.value)">
                  <span style="font-size:0.75rem; color:var(--gris);">${getSimboloMoneda()}${numPersonas > 1 && (exp.tipo === 'evento' || exp.tipo === 'tramo_transporte' || exp.tipo === 'tramo_alojamiento' || exp.tipo === 'vuelta') ? ` (x${numPersonas})` : ''}</span>
                </td>
                <td>
                  <select style="background:rgba(255,255,255,0.06); border:1px solid var(--border); border-radius:6px; padding:4px 8px; color:#f8fafc; font-size:0.82rem;"
                    onchange="window.actualizarGastoResumen('${exp.tipo}', ${exp.destId !== null ? exp.destId : 'null'}, ${exp.subId !== null ? exp.subId : 'null'}, ${exp.itemIndex !== null ? exp.itemIndex : 'null'}, 'pagadoPor', this.value)">
                    ${optionsPayer}
                  </select>
                </td>
                <td>
                  <span class="badge-pago ${exp.pagado ? 'pagado' : 'pendiente'}" 
                    onclick="window.toggleEstadoPago('${exp.tipo}', ${exp.destId !== null ? exp.destId : 'null'}, ${exp.subId !== null ? exp.subId : 'null'}, ${exp.itemIndex !== null ? exp.itemIndex : 'null'})">
                    ${exp.pagado ? 'Pagado' : 'Pendiente'}
                  </span>
                </td>
              </tr>
            `;
          });
          tHtml += `</tbody></table></div>`;
          tablaGastosEl.innerHTML = tHtml;
        }
      }

      // ==========================================
      // 3. RENDER PESTAÑA TRANSPORTE
      // ==========================================
      const transpContEl = document.getElementById('resumen-transporte-content');
      if (transpContEl) {
        let trHtml = '';

        // Route overview nodes
        trHtml += `
          <div class="transporte-route-overview">
            <div class="route-node"><span>${lugarSalida || 'Origen'}</span></div>
        `;
        destinos.forEach(dest => {
          trHtml += `
            <div class="route-arrow">➔</div>
            <div class="route-node"><span>${dest.nombre}</span></div>
          `;
        });
        if (vueltaGlobal) {
          trHtml += `
            <div class="route-arrow">➔</div>
            <div class="route-node"><span>Vuelta: ${lugarSalida || 'Retorno'}</span></div>
          `;
        }
        trHtml += `</div>`;

        // Segment cards for destinations
        destinos.forEach((dest, destIdx) => {
          const tramos = dest.tramos || [];
          if (tramos.length === 0) {
            // Default placeholder tramo if none explicitly added
            tramos.push({ medio: 'Vuelo', horaSalida: '10:00', duracion: 120, retraso: 0, precio: 0, alojamiento: '', precioAlojamiento: 0 });
            dest.tramos = tramos;
          }

          tramos.forEach((tramo, tramoIdx) => {
            const horaSalida = tramo.horaSalida || '10:00';
            const duracion = parseInt(tramo.duracion, 10) || 120;
            const retraso = parseInt(tramo.retraso, 10) || 0;
            const horaLlegada = calcularHoraLlegada(horaSalida, duracion, retraso);
            const origenNombre = destIdx === 0 ? (lugarSalida || 'Origen') : (destinos[destIdx - 1]?.nombre || 'Origen');
            const searchUrl = `https://www.google.com/travel/flights?q=flights+from+${encodeURIComponent(origenNombre)}+to+${encodeURIComponent(dest.nombre)}`;

            trHtml += `
              <div class="transporte-segment-card">
                <div class="transporte-card-header">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <span class="transporte-mode-badge">${tramo.medio || 'Transporte'}</span>
                    <h3 style="margin:0; font-size:1.15rem; color:#f8fafc;">${origenNombre} ➔ ${dest.nombre}</h3>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <a href="${searchUrl}" target="_blank" rel="noopener" style="font-size:0.78rem; font-weight:700; color:#38bdf8; background:rgba(56,189,248,0.1); border:1px solid rgba(56,189,248,0.3); padding:5px 12px; border-radius:8px; text-decoration:none;">
                      Buscar pasajes
                    </a>
                  </div>
                </div>

                <div class="transporte-times-grid">
                  <div class="time-field-box">
                    <span class="time-field-label">Hora Salida</span>
                    <input type="time" class="time-field-input" value="${horaSalida}"
                      onchange="window.actualizarTransporteResumen('tramo', ${dest.id}, ${tramoIdx}, 'horaSalida', this.value)">
                  </div>
                  <div class="time-field-box">
                    <span class="time-field-label">Duracion (min)</span>
                    <input type="number" min="0" step="5" class="time-field-input" value="${duracion}"
                      onchange="window.actualizarTransporteResumen('tramo', ${dest.id}, ${tramoIdx}, 'duracion', this.value)">
                  </div>
                  <div class="time-field-box">
                    <span class="time-field-label">Retraso / Demora (min)</span>
                    <input type="number" min="0" step="5" class="time-field-input" value="${retraso}"
                      style="color:${retraso > 0 ? '#fbbf24' : 'white'};"
                      onchange="window.actualizarTransporteResumen('tramo', ${dest.id}, ${tramoIdx}, 'retraso', this.value)">
                  </div>
                  <div class="time-field-box">
                    <span class="time-field-label">Llegada Estimada</span>
                    <div style="padding:7px 8px; background:rgba(52,211,153,0.12); border:1px solid rgba(52,211,153,0.3); border-radius:6px; color:#34d399; font-weight:800; font-size:0.95rem; text-align:center;">
                      ${horaLlegada}
                    </div>
                  </div>
                </div>

                ${retraso > 0 ? `
                  <div class="retraso-warning-box">
                    <span>Aviso: Retraso de ${retraso} minutos registrado. Llegada recalculada a las ${horaLlegada}.</span>
                  </div>
                ` : ''}

                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; font-size:0.85rem; color:var(--gris); border-top:1px solid rgba(255,255,255,0.04); padding-top:10px;">
                  <div>
                    ${tramo.alojamiento ? `<span>Alojamiento al llegar: <strong style="color:#f8fafc;">${tramo.alojamiento}</strong></span>` : '<span>Sin alojamiento asignado</span>'}
                  </div>
                  <div>
                    <span>Precio tramo: <strong style="color:#38bdf8;">${(Number(tramo.precio) || 0) * numPersonas}€</strong></span>
                  </div>
                </div>
              </div>
            `;
          });
        });

        // Return trip card
        if (vueltaGlobal || vueltaPrecioGlobal) {
          const vHoraSalida = (typeof vueltaHoraSalida !== 'undefined' && vueltaHoraSalida) ? vueltaHoraSalida : '18:00';
          const vDuracion = (typeof vueltaDuracion !== 'undefined' && vueltaDuracion) ? parseInt(vueltaDuracion, 10) : 180;
          const vRetraso = (typeof vueltaRetraso !== 'undefined' && vueltaRetraso) ? parseInt(vueltaRetraso, 10) : 0;
          const vLlegada = calcularHoraLlegada(vHoraSalida, vDuracion, vRetraso);
          const ultimoDest = destinos.length > 0 ? destinos[destinos.length - 1].nombre : 'Destino';
          const origenVuelta = lugarSalida || 'Origen';
          const searchVueltaUrl = `https://www.google.com/travel/flights?q=flights+from+${encodeURIComponent(ultimoDest)}+to+${encodeURIComponent(origenVuelta)}`;

          trHtml += `
            <div class="transporte-segment-card" style="border-left: 3px solid #f472b6;">
              <div class="transporte-card-header">
                <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                  <span class="transporte-mode-badge" style="background:rgba(244,114,182,0.12); color:#f472b6; border-color:rgba(244,114,182,0.3);">Regreso</span>
                  <h3 style="margin:0; font-size:1.15rem; color:#f8fafc;">${ultimoDest} ➔ ${origenVuelta}</h3>
                </div>
                <div>
                  <a href="${searchVueltaUrl}" target="_blank" rel="noopener" style="font-size:0.78rem; font-weight:700; color:#f472b6; background:rgba(244,114,182,0.1); border:1px solid rgba(244,114,182,0.3); padding:5px 12px; border-radius:8px; text-decoration:none;">
                    Buscar regreso
                  </a>
                </div>
              </div>

              <div class="transporte-times-grid">
                <div class="time-field-box">
                  <span class="time-field-label">Hora Salida</span>
                  <input type="time" class="time-field-input" value="${vHoraSalida}"
                    onchange="window.actualizarTransporteResumen('vuelta', null, null, 'vueltaHoraSalida', this.value)">
                </div>
                <div class="time-field-box">
                  <span class="time-field-label">Duracion (min)</span>
                  <input type="number" min="0" step="5" class="time-field-input" value="${vDuracion}"
                    onchange="window.actualizarTransporteResumen('vuelta', null, null, 'vueltaDuracion', this.value)">
                </div>
                <div class="time-field-box">
                  <span class="time-field-label">Retraso / Demora (min)</span>
                  <input type="number" min="0" step="5" class="time-field-input" value="${vRetraso}"
                    style="color:${vRetraso > 0 ? '#fbbf24' : 'white'};"
                    onchange="window.actualizarTransporteResumen('vuelta', null, null, 'vueltaRetraso', this.value)">
                </div>
                <div class="time-field-box">
                  <span class="time-field-label">Llegada Estimada</span>
                  <div style="padding:7px 8px; background:rgba(52,211,153,0.12); border:1px solid rgba(52,211,153,0.3); border-radius:6px; color:#34d399; font-weight:800; font-size:0.95rem; text-align:center;">
                    ${vLlegada}
                  </div>
                </div>
              </div>

              ${vRetraso > 0 ? `
                <div class="retraso-warning-box">
                  <span>Aviso: Retraso de ${vRetraso} minutos en el regreso. Llegada recalculada a las ${vLlegada}.</span>
                </div>
              ` : ''}

              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; font-size:0.85rem; color:var(--gris); border-top:1px solid rgba(255,255,255,0.04); padding-top:10px;">
                <div><span>Detalle: <strong style="color:#f8fafc;">${vueltaGlobal || 'Viaje de retorno'}</strong></span></div>
                <div><span>Precio vuelta: <strong style="color:#f472b6;">${(Number(vueltaPrecioGlobal) || 0) * numPersonas}€</strong></span></div>
              </div>
            </div>
          `;
        }

        transpContEl.innerHTML = trHtml;
      }
    }

    // Bidirectional editing handlers from Resumen
    function actualizarGastoResumen(tipo, destId, subId, itemIndex, campo, valor) {
      if (tipo === 'evento') {
        const dest = destinos.find(d => d.id === destId);
        const dia = dest?.dias?.find(d => d.id === subId);
        if (dia && dia.eventos && dia.eventos[itemIndex]) {
          if (campo === 'costo') dia.eventos[itemIndex].costo = parseFloat(valor) || 0;
          if (campo === 'pagadoPor') dia.eventos[itemIndex].pagadoPor = valor;
          if (campo === 'pagado') dia.eventos[itemIndex].pagado = Boolean(valor);
        }
      } else if (tipo === 'costo_adicional_dia') {
        const dest = destinos.find(d => d.id === destId);
        const dia = dest?.dias?.find(d => d.id === subId);
        if (dia && dia.costosAdicionales && dia.costosAdicionales[itemIndex]) {
          if (campo === 'costo') dia.costosAdicionales[itemIndex].precio = parseFloat(valor) || 0;
          if (campo === 'pagadoPor') dia.costosAdicionales[itemIndex].pagadoPor = valor;
          if (campo === 'pagado') dia.costosAdicionales[itemIndex].pagado = Boolean(valor);
        }
      } else if (tipo === 'tramo_transporte') {
        const dest = destinos.find(d => d.id === destId);
        if (dest && dest.tramos && dest.tramos[itemIndex]) {
          if (campo === 'costo') dest.tramos[itemIndex].precio = parseFloat(valor) || 0;
          if (campo === 'pagadoPor') dest.tramos[itemIndex].pagadoPor = valor;
          if (campo === 'pagado') dest.tramos[itemIndex].pagado = Boolean(valor);
        }
      } else if (tipo === 'tramo_alojamiento') {
        const dest = destinos.find(d => d.id === destId);
        if (dest && dest.tramos && dest.tramos[itemIndex]) {
          if (campo === 'costo') dest.tramos[itemIndex].precioAlojamiento = parseFloat(valor) || 0;
          if (campo === 'pagadoPor') dest.tramos[itemIndex].alojamientoPagadoPor = valor;
          if (campo === 'pagado') dest.tramos[itemIndex].alojamientoPagado = Boolean(valor);
        }
      } else if (tipo === 'vuelta') {
        if (campo === 'costo') {
          vueltaPrecioGlobal = parseFloat(valor) || 0;
          const vInput = document.getElementById('vueltaPrecio');
          if (vInput) vInput.value = vueltaPrecioGlobal;
        }
        if (campo === 'pagadoPor') window.vueltaPagadoPor = valor;
        if (campo === 'pagado') window.vueltaPagado = Boolean(valor);
      } else if (tipo === 'vuelta_costo_adicional') {
        if (typeof vueltaCostosAdicionales !== 'undefined' && vueltaCostosAdicionales[itemIndex]) {
          if (campo === 'costo') vueltaCostosAdicionales[itemIndex].precio = parseFloat(valor) || 0;
          if (campo === 'pagadoPor') vueltaCostosAdicionales[itemIndex].pagadoPor = valor;
          if (campo === 'pagado') vueltaCostosAdicionales[itemIndex].pagado = Boolean(valor);
        }
      }
      autoSave();
      renderResumen();
    }
    window.actualizarGastoResumen = actualizarGastoResumen;

    function toggleEstadoPago(tipo, destId, subId, itemIndex) {
      if (tipo === 'evento') {
        const dest = destinos.find(d => d.id === destId);
        const dia = dest?.dias?.find(d => d.id === subId);
        if (dia && dia.eventos && dia.eventos[itemIndex]) {
          dia.eventos[itemIndex].pagado = !dia.eventos[itemIndex].pagado;
        }
      } else if (tipo === 'costo_adicional_dia') {
        const dest = destinos.find(d => d.id === destId);
        const dia = dest?.dias?.find(d => d.id === subId);
        if (dia && dia.costosAdicionales && dia.costosAdicionales[itemIndex]) {
          dia.costosAdicionales[itemIndex].pagado = !dia.costosAdicionales[itemIndex].pagado;
        }
      } else if (tipo === 'tramo_transporte') {
        const dest = destinos.find(d => d.id === destId);
        if (dest && dest.tramos && dest.tramos[itemIndex]) {
          dest.tramos[itemIndex].pagado = !dest.tramos[itemIndex].pagado;
        }
      } else if (tipo === 'tramo_alojamiento') {
        const dest = destinos.find(d => d.id === destId);
        if (dest && dest.tramos && dest.tramos[itemIndex]) {
          dest.tramos[itemIndex].alojamientoPagado = !dest.tramos[itemIndex].alojamientoPagado;
        }
      } else if (tipo === 'vuelta') {
        window.vueltaPagado = !window.vueltaPagado;
      } else if (tipo === 'vuelta_costo_adicional') {
        if (typeof vueltaCostosAdicionales !== 'undefined' && vueltaCostosAdicionales[itemIndex]) {
          vueltaCostosAdicionales[itemIndex].pagado = !vueltaCostosAdicionales[itemIndex].pagado;
        }
      }
      autoSave();
      renderResumen();
    }
    window.toggleEstadoPago = toggleEstadoPago;

    function actualizarTransporteResumen(tipo, destId, tramoIdx, campo, valor) {
      if (tipo === 'tramo') {
        const dest = destinos.find(d => d.id === destId);
        if (dest && dest.tramos && dest.tramos[tramoIdx]) {
          dest.tramos[tramoIdx][campo] = (campo === 'duracion' || campo === 'retraso') ? parseInt(valor, 10) || 0 : valor;
        }
      } else if (tipo === 'vuelta') {
        if (campo === 'vueltaHoraSalida') window.vueltaHoraSalida = valor;
        if (campo === 'vueltaDuracion') window.vueltaDuracion = parseInt(valor, 10) || 0;
        if (campo === 'vueltaRetraso') window.vueltaRetraso = parseInt(valor, 10) || 0;
      }
      autoSave();
      renderResumen();
    }
    window.actualizarTransporteResumen = actualizarTransporteResumen;


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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
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

      if (typeof isMalvinasQuery === 'function' && isMalvinasQuery(cleanLugar)) {
        return {
          lat: -51.7963,
          lon: -59.5236,
          display_name: 'Islas Malvinas, Argentina'
        };
      }

      window._pluxGeocodeCache = window._pluxGeocodeCache || {};
      const cacheKey = cleanLugar.toLowerCase();
      if (window._pluxGeocodeCache[cacheKey]) {
        return window._pluxGeocodeCache[cacheKey];
      }

      const parts = cleanLugar.split(',').map(s => s.trim()).filter(Boolean);
      const cityOnly = parts[0] || cleanLugar;
      const countryHint = (parts[1] && parts[1].length === 2) ? parts[1].toUpperCase() : null;

      // 1. Open-Meteo Geocoding API (100% CORS-friendly)
      try {
        const omUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityOnly)}&count=5&language=es&format=json`;
        const omRes = await fetch(omUrl);
        if (omRes.ok) {
          const omData = await omRes.json();
          if (omData.results && omData.results.length > 0) {
            const match = (countryHint && omData.results.find(r => (r.country_code || '').toUpperCase() === countryHint)) || omData.results[0];
            const resObj = {
              lat: match.latitude,
              lon: match.longitude,
              display_name: match.name
            };
            window._pluxGeocodeCache[cacheKey] = resObj;
            return resObj;
          }
        }
      } catch (e) {
        console.warn('Open-Meteo geocode error:', e);
      }

      // 2. Photon Komoot Fallback (100% CORS-friendly OSM geocoder)
      try {
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(cleanLugar)}&limit=1`;
        const resp = await fetch(url);
        if (resp.ok) {
          const data = await resp.json();
          const feat = data?.features?.[0];
          const coords = feat?.geometry?.coordinates;
          if (Array.isArray(coords) && coords.length >= 2) {
            const resObj = { lat: parseFloat(coords[1]), lon: parseFloat(coords[0]), display_name: feat.properties?.name || cleanLugar };
            window._pluxGeocodeCache[cacheKey] = resObj;
            return resObj;
          }
        }
      } catch(e) {
        console.warn('Photon geocode fallback error:', e);
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

    // ================== CONVERSOR DE MONEDA ==================
    function abrirConversor() {
      if (typeof cerrarPanelHerramientas === 'function') cerrarPanelHerramientas();
      const modal = document.getElementById('modal-conversor');
      if (modal) modal.style.display = 'flex';
      convertirMoneda();
    }

    function cerrarConversor() {
      const modal = document.getElementById('modal-conversor');
      if (modal) modal.style.display = 'none';
    }

    function convertirMoneda() {
      const cantEl = document.getElementById('conv-cantidad') || document.getElementById('conversor-cantidad');
      const origEl = document.getElementById('conv-origen') || document.getElementById('conversor-origen');
      const destEl = document.getElementById('conv-destino') || document.getElementById('conversor-destino');
      const resEl = document.getElementById('conversor-resultado');
      
      const cant = parseFloat(cantEl ? cantEl.value : 1) || 0;
      const orig = origEl ? origEl.value : 'EUR';
      const dest = destEl ? destEl.value : 'USD';
      
      const tasas = {
        USD: 1.0,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 155.0,
        ARS: 1250.0,
        MXN: 18.2,
        CAD: 1.36,
        AUD: 1.52,
        CHF: 0.90,
        CNY: 7.25,
        BRL: 5.50,
        CLP: 940.0
      };

      const tasaOrigen = tasas[orig] || 1;
      const tasaDestino = tasas[dest] || 1;
      const enUsd = cant / tasaOrigen;
      const res = enUsd * tasaDestino;

      if (resEl) {
        const formatted = (res >= 1000 || dest === 'ARS' || dest === 'JPY' || dest === 'CLP')
          ? res.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          : res.toFixed(2);
        resEl.innerText = `${formatted} ${dest}`;
      }
    }

    // Auto-conversión reactiva en cambios de input
    document.addEventListener('input', (e) => {
      if (e.target && (e.target.id === 'conv-cantidad' || e.target.id === 'conversor-cantidad')) {
        convertirMoneda();
      }
    });
    document.addEventListener('change', (e) => {
      if (e.target && (e.target.id === 'conv-origen' || e.target.id === 'conv-destino' || e.target.id === 'conversor-origen' || e.target.id === 'conversor-destino')) {
        convertirMoneda();
      }
    });

    // ADDON: EJECUTAR CONVERSOR LABS (Unidades Raras)
    function ejecutarConversorLabs() {
      const valInput = document.getElementById('lab-conv-val');
      const typeSelect = document.getElementById('lab-conv-type');
      const resP = document.getElementById('lab-conv-res');
      if (!valInput || !typeSelect || !resP) return;

      const val = parseFloat(valInput.value) || 0;
      const type = typeSelect.value;
      let res = 0;
      let unit = '';
      if (type === 'f-c') {
        res = (val - 32) * 5 / 9;
        unit = '°C';
      } else if (type === 'mi-km') {
        res = val * 1.60934;
        unit = 'km';
      } else if (type === 'gal-l') {
        res = val * 3.78541;
        unit = 'L';
      }
      resP.innerText = `Resultado: ${res.toFixed(2)} ${unit}`;
    }

    async function dibujarMapa(containerId='map') {
      if (!map) {
        map = L.map(containerId, {
          zoomControl: true,
          attributionControl: false
        }).setView([40.4168, -3.7038], 4);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 16,
          attribution: 'Tiles &copy; Esri'
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
      let offsetDias = 0;
      for (let dest of destinos) {
        for (let [ida, dia] of (dest.dias || []).entries()) {
          const fechaEvento = new Date(fechaBase);
          fechaEvento.setDate(fechaEvento.getDate() + offsetDias + ida);
          const fechaEventoStr = fechaEvento.toISOString().split('T')[0];
          if (fechaEventoStr === fechaStr && dia.eventos && dia.eventos.length > 0) return true;
        }
        offsetDias += (dest.dias || []).length;
      }
      return false;
    }
    function seleccionarDia(fechaStr) {
      diaSeleccionado = fechaStr;
      const fechaBase = document.getElementById('fechaInicio').value;
      if (!fechaBase) { document.getElementById('eventos-dia-lista').innerHTML = '<p>No hay fecha de inicio</p>'; return; }
      let eventos = [];
      let offsetDias = 0;
      destinos.forEach(dest => {
        (dest.dias || []).forEach((dia, ida) => {
          const fechaEvento = new Date(fechaBase);
          fechaEvento.setDate(fechaEvento.getDate() + offsetDias + ida);
          if (fechaEvento.toISOString().split('T')[0] === fechaStr) {
            (dia.eventos || []).forEach(ev => eventos.push({ destino: dest.nombre, dia: ida+1, ...ev }));
          }
        });
        offsetDias += (dest.dias || []).length;
      });
      let html = '';
      if (eventos.length===0) html = '<p>No hay eventos</p>';
      else eventos.forEach(ev => {
        html += `<div class="evento-item"><strong>${escapeHtml(ev.titulo||'Evento')}</strong> <small style="color:var(--gris);">(${escapeHtml(ev.destino || '')})</small> - ${escapeHtml(ev.hora||'--:--')}</div>`;
      });
      document.getElementById('eventos-dia-lista').innerHTML = html;
    }

    // ================== GOOGLE CALENDAR ==================
    // ================== CALENDAR (.ICS) ==================
    function exportarGoogleCalendar() {
      const fechaBase = document.getElementById('fechaInicio').value;
      if (!fechaBase) { showToast('Selecciona fecha de inicio', 'error'); return; }
      
      let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//PluxTravel Planner//ES\n";
      let offsetDias = 0;
      
      destinos.forEach(dest => {
        (dest.dias || []).forEach((dia, dIda) => {
          const fechaEv = new Date(fechaBase);
          fechaEv.setDate(fechaEv.getDate() + offsetDias + dIda);
          const fStr = fechaEv.toISOString().split('T')[0].replace(/-/g, '');
          
          (dia.eventos || []).forEach(ev => {
            const h = ev.hora || "09:00";
            const hStr = h.replace(/:/g, '');
            icsContent += "BEGIN:VEVENT\n";
            icsContent += `SUMMARY:${ev.titulo || 'Evento Plux'} (${dest.nombre})\n`;
            icsContent += `DTSTART:${fStr}T${hStr}00\n`;
            icsContent += `DESCRIPTION:${ev.notas || ''}\n`;
            icsContent += "END:VEVENT\n";
          });
        });
        offsetDias += (dest.dias || []).length;
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

// [MODULARIZADO] Movido a js/plux-export-cards.js
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
              <button onclick="event.stopPropagation();abrirCompartirModal(${index})" style="background:var(--azul);" title="Compartir">🔗</button>
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

// [MODULARIZADO] Movido a js/plux-templates.js
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

      window.isExternalSharedTrip = false;
      if (typeof unsubSnapshot === 'function' && unsubSnapshot) {
        unsubSnapshot();
        unsubSnapshot = null;
      }

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
      if (document.getElementById('lugarSalida')) document.getElementById('lugarSalida').value = lugarSalida;
      if (document.getElementById('numPersonas')) document.getElementById('numPersonas').value = numPersonas;
      if (typeof window.renderTravelerChips === 'function') window.renderTravelerChips();
      if (document.getElementById('fechaInicio')) document.getElementById('fechaInicio').value = viaje.fechaInicio || '';
      destinos = viaje.destinos || [];
      vueltaGlobal = viaje.vueltaGlobal || '';
      vueltaPrecioGlobal = viaje.vueltaPrecioGlobal || 0;
      vueltaCostosAdicionales = viaje.vueltaCostosAdicionales || [];
      loadedTripIndex = index;

      syncCode = viaje.syncCode || null;
      if (syncCode) {
        localStorage.setItem('PluxSyncCode', syncCode);
        currentTripId = syncCode;
        if (typeof activarListenerNube === 'function') activarListenerNube();
      } else {
        localStorage.removeItem('PluxSyncCode');
        viaje.tripId = viaje.tripId || ('trip_' + (viaje.fecha ? new Date(viaje.fecha).getTime().toString(36) : Date.now().toString(36)) + '_' + index);
        currentTripId = viaje.tripId;
        saveTrips(trips, false);
        window.colaboradoresActuales = [];
        window.colaboradoresRolesActuales = {};
        window.currentTripOwner = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : null;
        window.currentTripRole = 'owner';
        if (typeof ocultarAdvertenciaSoloLectura === 'function') ocultarAdvertenciaSoloLectura();
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
      if (autoStart) {
        cerrarModalViajes();
        empezar();
      }

      if (viaje.moneda && typeof setMonedaActiva === 'function') {
        setMonedaActiva(viaje.moneda, false, false);
      }
      if (Array.isArray(viaje.cartelitos)) {
        cartelitosNotasViaje = [...viaje.cartelitos];
      } else if (Array.isArray(viaje.notasFlotantes)) {
        cartelitosNotasViaje = viaje.notasFlotantes.map(n => ({
          id: n.id || ('nota_' + Date.now()),
          x: n.x || 100,
          y: n.y || 120,
          texto: n.texto || n.titulo || '',
          enlace: null
        }));
      } else {
        cartelitosNotasViaje = [];
      }
      if (typeof renderCartelitos === 'function') {
        renderCartelitos();
      }

      if (autoStart) {
        showToast(`Viaje "${viaje.nombre}" cargado`, 'success');
      }
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

        let html = `<div id="modal-preferencias" style="position:fixed;inset:0;background:rgba(15,23,42,0.96);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:2100;padding:15px;" onclick="if(event.target===this) this.remove()">
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
// [MODULARIZADO] Movido a js/plux-discover.js
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
        if (typeof window !== 'undefined' && typeof window.renderSharedTripsList === 'function' && window.renderSharedTripsList !== renderSharedTripsList) {
            return window.renderSharedTripsList();
        }
        if (!currentNickname || !db) return;
        const section = document.getElementById('colab-trips-section');
        const list = document.getElementById('sharedTripList');
        if (!section || !list) return;

        try {
            const query = await db.collection('plux_viajes_compartidos')
                .where('colaboradores', 'array-contains', currentNickname)
                .limit(20)
                .get();

            const ownTrips = query.docs.filter(doc => {
                const data = doc.data();
                return data.propietario !== currentNickname;
            });

            if (ownTrips.length === 0) {
                section.style.display = 'none';
                return;
            }

            section.style.display = 'block';
            list.innerHTML = '';
            ownTrips.forEach(doc => {
                const data = doc.data() || {};
                const code = doc.id;
                const owner = data.propietario || 'desconocido';
                let tripName = data.nombreViaje || '';
                let destSummary = data.destinosResumen || '';
                if ((!tripName || !destSummary) && data.data) {
                    try {
                        const parsed = JSON.parse(data.data);
                        if (!tripName && parsed.nombre) tripName = parsed.nombre;
                        if (!destSummary && Array.isArray(parsed.destinos)) {
                            destSummary = parsed.destinos.map(d => d.nombre).filter(Boolean).join(', ');
                        }
                    } catch(e) {}
                }
                if (!tripName) tripName = destSummary ? `Viaje a ${destSummary}` : `Viaje compartido`;

                const safeTitle = typeof escapeHtml === 'function' ? escapeHtml(tripName) : tripName;
                const safeDests = typeof escapeHtml === 'function' ? escapeHtml(destSummary || 'Itinerario compartido') : (destSummary || 'Itinerario compartido');
                const safeOwner = typeof escapeHtml === 'function' ? escapeHtml(owner) : owner;

                const item = document.createElement('div');
                item.className = 'trip-item';
                item.style.cursor = 'pointer';
                item.innerHTML = `
                    <div class="trip-info" onclick="window.cargarViajeCompartido ? window.cargarViajeCompartido('${code}') : cargarViajeCompartido('${code}')" style="cursor:pointer;flex:1">
                        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:4px;">
                            <h4 style="color:var(--verde); margin:0; font-size:1.02rem; font-weight:700;">${safeTitle}</h4>
                            <span style="font-size:0.68rem; padding:2px 6px; border-radius:6px; background:rgba(255,255,255,0.06); color:var(--gris); font-family:monospace; border:1px solid rgba(255,255,255,0.08);" title="Código de sincronización">#${code}</span>
                        </div>
                        <small style="color:var(--gris); font-size:0.82rem; display:block;">
                            Por <strong style="color:var(--texto);">@${safeOwner}</strong> · <span style="color:rgba(255,255,255,0.7);">${safeDests}</span>
                        </small>
                    </div>
                    <div class="trip-actions">
                        <button onclick="window.cargarViajeCompartido ? window.cargarViajeCompartido('${code}') : cargarViajeCompartido('${code}')" style="background:linear-gradient(135deg, var(--verde), var(--azul));color:black;font-weight:700;padding:8px 14px;border-radius:10px;border:none;cursor:pointer;">Abrir</button>
                        <button onclick="abandonarViajeCompartido('${code}')" style="background:rgba(239,68,68,0.15);color:#ef4444;border:1px solid rgba(239,68,68,0.3);padding:8px 12px;border-radius:10px;cursor:pointer;">Salir</button>
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
      
      cartelitosNotasViaje = [];
      if (typeof renderCartelitos === 'function') renderCartelitos();

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
  if (typeof abrirDescubrir !== 'undefined') window.abrirDescubrir = abrirDescubrir;
  if (typeof cerrarDescubrir !== 'undefined') window.cerrarDescubrir = cerrarDescubrir;
  if (typeof buscarLugaresPorDestino !== 'undefined') window.buscarLugaresPorDestino = buscarLugaresPorDestino;
  if (typeof buscarLugaresWikiFeed !== 'undefined') window.buscarLugaresWikiFeed = buscarLugaresWikiFeed;
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
  window.abrirConversor = abrirConversor;
  window.cerrarConversor = cerrarConversor;
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
  if (typeof exportarPDF !== 'undefined') window.exportarPDF = exportarPDF;
  window.guardarViaje = guardarViaje;
  window.cargarViaje = cargarViaje;
  window.eliminarViaje = eliminarViaje;
  if (typeof guardarComoPlantilla !== 'undefined') window.guardarComoPlantilla = guardarComoPlantilla;
  window.cargarPlantilla = cargarPlantilla;
  if (typeof eliminarPlantilla !== 'undefined') window.eliminarPlantilla = eliminarPlantilla;
  window.getMonedaActiva = getMonedaActiva;
  window.setMonedaActiva = setMonedaActiva;
  window.formatMoneda = formatMoneda;
  window.getSimboloMoneda = getSimboloMoneda;
  window.toggleCurrencyDropdown = toggleCurrencyDropdown;
  window.renderCurrencyDropdown = renderCurrencyDropdown;
  if (typeof toggleTableroNotas !== 'undefined') window.toggleTableroNotas = toggleTableroNotas;
  window.crearNotaCartelito = crearNotaCartelito;
  window.renderCartelitos = renderCartelitos;
  window.actualizarTextoCartelito = actualizarTextoCartelito;
  window.eliminarNotaCartelito = eliminarNotaCartelito;
  window.iniciarArrastreCartelito = iniciarArrastreCartelito;
  window.iniciarArrastreHilito = iniciarArrastreHilito;
  window.actualizarHilitos = actualizarHilitos;
  window.getCartelitosNotas = getCartelitosNotas;
  window.actualizarBadgeCartelitos = actualizarBadgeCartelitos;
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
      'buenos aires': '/destinies/buenosaires/',
      'bs. aires': '/destinies/buenosaires/',
      'roma': '/destinies/roma/',
      'tokio': '/destinies/tokio/',
      'nueva york': '/destinies/nuevayork/',
      'paris': '/destinies/paris/',
      'barcelona': '/destinies/barcelona/'
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
        return t.id === ciudadRaw || tplId === cClean || t.id === 'oficial_' + cClean || tplId.includes(cClean) || cClean.includes(tplId) || tplName.includes(cClean) || destName.includes(cClean);
      });
    }

    // 2. Check community seeds
    if (!matchedTemplate && typeof PLUX_COMUNIDAD_SEEDS !== 'undefined') {
      matchedTemplate = PLUX_COMUNIDAD_SEEDS.find(t => {
        const tplName = (t.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "");
        const tplId = (t.id || '').toLowerCase().replace('com_', '').replace(/[\s\-_]/g, "");
        const destName = (t.destinos && t.destinos[0]?.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "");
        return t.id === ciudadRaw || tplId === cClean || tplId.includes(cClean) || cClean.includes(tplId) || tplName.includes(cClean) || destName.includes(cClean);
      });
    }

    // 3. Check loaded firestore community templates
    if (!matchedTemplate && typeof firestoreCommunityTemplates !== 'undefined' && Array.isArray(firestoreCommunityTemplates)) {
      matchedTemplate = firestoreCommunityTemplates.find(t => {
        const tplName = (t.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "");
        const tplId = (t.id || '').toLowerCase().replace(/^(com_|tpl_)/, '').replace(/[\s\-_]/g, "");
        const destName = (t.destinos && t.destinos[0]?.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "");
        return t.id === ciudadRaw || tplId === cClean || tplId.includes(cClean) || cClean.includes(tplId) || tplName.includes(cClean) || destName.includes(cClean);
      });
    }

    if (matchedTemplate) {
      if (typeof clonarPlantillaCompleta === 'function') {
        clonarPlantillaCompleta(matchedTemplate.id, (matchedTemplate.id.startsWith('com_') || matchedTemplate.id.startsWith('tpl_')) ? 'comunidad' : 'oficial');
        return;
      }
    }

    // 4. If looks like a template ID and not matched in memory, fetch asynchronously from Firestore
    if (!matchedTemplate && (ciudadRaw.startsWith('com_') || ciudadRaw.startsWith('tpl_') || ciudadRaw.length >= 8)) {
      if (!db && typeof firebase !== 'undefined' && firebase.firestore) {
        db = firebase.firestore();
      }
      if (db) {
        db.collection("plux_plantillas_comunidad").doc(ciudadRaw).get().then(doc => {
          if (doc.exists) {
            const tData = doc.data();
            if (typeof firestoreCommunityTemplates !== 'undefined' && !firestoreCommunityTemplates.some(t => t.id === tData.id)) {
              firestoreCommunityTemplates.push(tData);
            }
            if (typeof clonarPlantillaCompleta === 'function') {
              clonarPlantillaCompleta(tData.id, 'comunidad');
            }
          }
        }).catch(err => {
          console.warn('[Plantillas] No se pudo cargar plantilla desde Firestore:', err);
        });
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
    if (typeof empezar === 'function') empezar();
    else if (typeof window.empezar === 'function') window.empezar();

    trackEvent('clone_template', {
      template_name: matchedData ? matchedData.nombre : ciudadRaw,
      source: 'preset_destination'
    });
  }
  window.cargarPlantillaCiudad = cargarPlantillaCiudad;

  // Handle incoming routes (/plux/join/plantillas/..., /plux/join/CODE) and ?destino=... query parameters
  document.addEventListener('DOMContentLoaded', () => {
    let cityToLoad = null;
    let tplToLoad = null;
    let codeToLoad = null;

    const path = window.location.pathname;
    if (path.includes('/join/')) {
      const parts = path.split('/join/')[1]?.split('/') || [];
      if (parts[0] === 'plantillas' && parts[1]) {
        tplToLoad = parts[1];
        const rawCity = parts[1].replace(/-/g, ' ');
        cityToLoad = rawCity.charAt(0).toUpperCase() + rawCity.slice(1);
      } else if (parts[0] && parts[0].length >= 4) {
        codeToLoad = parts[0];
      }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const paramPlantilla = urlParams.get('plantilla') || urlParams.get('template');
    const paramDestino = urlParams.get('destino');
    const paramActividad = urlParams.get('actividad');

    if (paramPlantilla) tplToLoad = paramPlantilla;
    if (paramDestino) cityToLoad = paramDestino;

    const targetToLoad = tplToLoad || cityToLoad;

    if (targetToLoad) {
      setTimeout(() => {
        if (typeof window.cerrarModalDecisionViaje === 'function') {
          window.cerrarModalDecisionViaje();
        }
        if (typeof window.empezarDeCeroSinPrompt === 'function') {
          window.empezarDeCeroSinPrompt();
        }
        if (typeof window.empezar === 'function') {
          window.empezar();
        } else if (typeof empezar === 'function') {
          empezar();
        }
        cargarPlantillaCiudad(targetToLoad);
        if (paramActividad && typeof window.añadirDesdeFeed === 'function') {
          setTimeout(() => {
            window.añadirDesdeFeed(paramActividad);
          }, 400);
        }
      }, 250);
    }
  });

// [MODULARIZADO] Movido a js/plux-social-chat.js
