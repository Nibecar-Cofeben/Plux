/* Pluxy AI & Theme/Language Manager for Plux Destinies */
(function() {
  window.trackEvent = function(eventName, params = {}) {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
      }
      console.log(`📊 [GA4 Event] ${eventName}`, params);
    } catch (e) {}
  };

  let currentLang = localStorage.getItem('pluxUserLanguage') || 'es';
  let currentTheme = localStorage.getItem('PluxTheme') || 'theme-oscuro';
  let GEMINI_KEY = '';

  const dict = {
    es: {
      back: 'Volver a Plux',
      planTrip: '🚀 Planear Viaje',
      suggestedStay: 'Estadía Sugerida',
      bestTime: 'Mejor Época',
      currency: 'Moneda Local',
      language: 'Idioma',
      addTrip: '+ Añadir a mi viaje',
      readyTitle: '¿Listo para planear tu viaje a ',
      startPlanner: '✨ Comenzar itinerario en Plux',
      pluxyTitle: 'Pluxy Assistant',
      pluxyGreeting: '¡Hola! Soy <strong>Pluxy</strong> ✨. ¿En qué te ayudo para tu viaje a ',
      pluxyPlaceholder: 'Pregúntale a Pluxy...',
      thinking: '✨ Pluxy está pensando...',
      btn3Days: '💡 ¿Qué ver en 3 días?',
      btnFood: '🍽️ Platos típicos',
      btnHotel: '🏨 Mejores zonas',
      btnTransport: '🚆 Cómo moverse',
      btnCreate: '🚀 Crear itinerario en Plux'
    },
    en: {
      back: 'Back to Plux',
      planTrip: '🚀 Plan Trip',
      suggestedStay: 'Suggested Stay',
      bestTime: 'Best Time',
      currency: 'Local Currency',
      language: 'Language',
      addTrip: '+ Add to my trip',
      readyTitle: 'Ready to plan your trip to ',
      readyDesc: 'Organize your activities with Pluxy, Plux\'s smart AI.',
      startPlanner: '✨ Start itinerary in Plux',
      pluxyTitle: 'Pluxy Assistant',
      pluxyGreeting: 'Hello! I\'m <strong>Pluxy</strong> ✨. How can I help with your trip to ',
      pluxyPlaceholder: 'Ask Pluxy...',
      thinking: '✨ Pluxy is thinking...',
      btn3Days: '💡 What to see in 3 days?',
      btnFood: '🍽️ Local food',
      btnHotel: '🏨 Best areas to stay',
      btnTransport: '🚆 Transport tips',
      btnCreate: '🚀 Create itinerary in Plux'
    },
    pt: {
      back: 'Voltar ao Plux',
      planTrip: '🚀 Planear Viagem',
      suggestedStay: 'Estadia Sugerida',
      bestTime: 'Melhor Época',
      currency: 'Moeda Local',
      language: 'Idioma',
      addTrip: '+ Adicionar à viagem',
      readyTitle: 'Pronto para planear a sua viagem a ',
      readyDesc: 'Organize as suas atividades com o Pluxy, a IA do Plux.',
      startPlanner: '✨ Começar itinerário no Plux',
      pluxyTitle: 'Pluxy Assistant',
      pluxyGreeting: 'Olá! Sou o <strong>Pluxy</strong> ✨. Como posso ajudar na sua viagem a ',
      pluxyPlaceholder: 'Pergunte ao Pluxy...',
      thinking: '✨ Pluxy está a pensar...',
      btn3Days: '💡 O que ver em 3 dias?',
      btnFood: '🍽️ Gastronomia local',
      btnHotel: '🏨 Melhores zonas',
      btnTransport: '🚆 Transporte',
      btnCreate: '🚀 Criar itinerário no Plux'
    },
    fr: {
      back: 'Retour à Plux',
      planTrip: '🚀 Planifier le voyage',
      suggestedStay: 'Séjour suggéré',
      bestTime: 'Meilleure période',
      currency: 'Devise locale',
      language: 'Langue',
      addTrip: '+ Ajouter au voyage',
      readyTitle: 'Prêt à planifier votre voyage à ',
      readyDesc: 'Organisez vos activités avec Pluxy, l\'IA intelligente de Plux.',
      startPlanner: '✨ Démarrer l\'itinéraire sur Plux',
      pluxyTitle: 'Pluxy Assistant',
      pluxyGreeting: 'Bonjour! Je suis <strong>Pluxy</strong> ✨. Comment puis-je vous aider pour votre voyage à ',
      pluxyPlaceholder: 'Demander à Pluxy...',
      thinking: '✨ Pluxy réfléchit...',
      btn3Days: '💡 Que voir en 3 jours?',
      btnFood: '🍽️ Spécialités locales',
      btnHotel: '🏨 Meilleurs quartiers',
      btnTransport: '🚆 Transports',
      btnCreate: '🚀 Créer l\'itinéraire sur Plux'
    },
    de: {
      back: 'Zurück zu Plux',
      planTrip: '🚀 Reise planen',
      suggestedStay: 'Empfohlener Aufenthalt',
      bestTime: 'Beste Reisezeit',
      currency: 'Währung',
      language: 'Sprache',
      addTrip: '+ Zur Reise hinzufügen',
      readyTitle: 'Bereit, deine Reise nach ',
      readyDesc: 'Organisiere deine Aktivitäten mit Pluxy, der intelligenten KI von Plux.',
      startPlanner: '✨ Reiseplan auf Plux starten',
      pluxyTitle: 'Pluxy Assistant',
      pluxyGreeting: 'Hallo! Ich bin <strong>Pluxy</strong> ✨. Wie kann ich dir bei deiner Reise nach ',
      pluxyPlaceholder: 'Frage Pluxy...',
      thinking: '✨ Pluxy denkt nach...',
      btn3Days: '💡 Was sieht man in 3 Tagen?',
      btnFood: '🍽️ Lokales Essen',
      btnHotel: '🏨 Beste Gegenden',
      btnTransport: '🚆 Verkehrsmittel',
      btnCreate: '🚀 Reiseplan auf Plux erstellen'
    },
    it: {
      back: 'Torna a Plux',
      planTrip: '🚀 Pianifica viaggio',
      suggestedStay: 'Soggiorno consigliato',
      bestTime: 'Periodo migliore',
      currency: 'Valuta locale',
      language: 'Lingua',
      addTrip: '+ Aggiungi al viaggio',
      readyTitle: 'Pronto a pianificare il tuo viaggio a ',
      readyDesc: 'Organizza le tue attività con Pluxy, l\'IA intelligente di Plux.',
      startPlanner: '✨ Inizia itinerario su Plux',
      pluxyTitle: 'Pluxy Assistant',
      pluxyGreeting: 'Ciao! Sono <strong>Pluxy</strong> ✨. Come posso aiutarti per il tuo viaggio a ',
      pluxyPlaceholder: 'Chiedi a Pluxy...',
      thinking: '✨ Pluxy sta pensando...',
      btn3Days: '💡 Cosa vedere in 3 giorni?',
      btnFood: '🍽️ Piatti tipici',
      btnHotel: '🏨 Zone migliori',
      btnTransport: '🚆 Come spostarsi',
      btnCreate: '🚀 Crea itinerario su Plux'
    }
  };

  async function loadKeys() {
    try {
      let resp = await fetch('/sapi.txt');
      if (!resp.ok) resp = await fetch('sapi.txt');
      const text = await resp.text();
      const lines = text.split('\n').map(l => l.trim());
      for (const line of lines) {
        if (line.startsWith('AIzaSy')) {
          GEMINI_KEY = line;
          break;
        }
      }
    } catch (e) {
      console.warn('Could not load sapi.txt:', e);
    }
  }
  loadKeys();

  function setTheme(t) {
    if (!t) t = 'theme-oscuro';
    if (!t.startsWith('theme-')) t = 'theme-' + t;
    currentTheme = t;
    localStorage.setItem('Plux_Theme', t);
    localStorage.setItem('PluxTheme', t);
    
    document.body.classList.remove(
      'theme-claro', 'theme-oscuro', 'theme-tokyo',
      'theme-grid', 'theme-starship', 'theme-terminal', 'theme-ares'
    );
    document.body.classList.add(t);
    
    document.querySelectorAll('.theme-option').forEach(opt => {
      const optTheme = opt.getAttribute('data-theme') || opt.dataset.theme;
      opt.classList.toggle('active', optTheme === t);
    });

    const td = document.getElementById('themeDropdown');
    if (td) {
      td.classList.remove('show');
      td.style.display = 'none';
    }
  }
  window.setTheme = setTheme;

  function setLanguage(lang) {
    if (!lang || !dict[lang]) lang = 'es';
    currentLang = lang;
    localStorage.setItem('Plux_Lang', lang);
    localStorage.setItem('plux_lang', lang);
    localStorage.setItem('lang', lang);
    localStorage.setItem('pluxUserLanguage', lang);
    
    document.body.classList.remove('lang-es', 'lang-en', 'lang-fr', 'lang-de', 'lang-it', 'lang-pt');
    document.body.classList.add(`lang-${lang}`);
    
    document.querySelectorAll('.lang-option').forEach(opt => {
      const optLang = opt.getAttribute('data-lang') || opt.dataset.lang;
      opt.classList.toggle('active', optLang === lang);
    });
    
    const langBtn = document.getElementById('langButton');
    if (langBtn) langBtn.textContent = lang.toUpperCase();
    
    const ld = document.getElementById('langDropdown');
    if (ld) {
      ld.classList.remove('show');
      ld.style.display = 'none';
    }
    
    updateTextTranslations();
  }
  window.setLanguage = setLanguage;

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

  function updateTextTranslations() {
    const t = dict[currentLang] || dict.es;
    const backBtn = document.querySelector('#navBackText');
    if (backBtn) backBtn.textContent = t.back;

    const planBtn = document.querySelector('#navPlanText');
    if (planBtn) planBtn.textContent = t.planTrip;

    const addBtns = document.querySelectorAll('.btn-card-action');
    addBtns.forEach(btn => {
      if (btn.dataset.originalText == null) btn.dataset.originalText = btn.textContent;
      btn.textContent = t.addTrip;
    });

    const readyH2 = document.querySelector('#readyTitleCity');
    if (readyH2 && readyH2.dataset.cityName) {
      readyH2.textContent = `${t.readyTitle}${readyH2.dataset.cityName}?`;
    }

    const readyP = document.querySelector('#readyDescText');
    if (readyP) readyP.textContent = t.readyDesc;

    const startP = document.querySelector('#startPlannerText');
    if (startP) startP.textContent = t.startPlanner;

    const input = document.getElementById('pluxy-input');
    if (input) input.placeholder = t.pluxyPlaceholder;
  }

  // Event delegation on document for theme & language selectors
  document.addEventListener('click', (e) => {
    const isLang = e.target.closest('#langButton, .lang-button') || e.target.closest('#langDropdown, .lang-dropdown');
    if (!isLang) {
      const ld = document.getElementById('langDropdown');
      if (ld) {
        ld.classList.remove('show');
        ld.style.display = 'none';
      }
    }

    const isTheme = e.target.closest('#themeButton, .theme-button') || e.target.closest('#themeDropdown, .theme-dropdown');
    if (!isTheme) {
      const td = document.getElementById('themeDropdown');
      if (td) {
        td.classList.remove('show');
        td.style.display = 'none';
      }
    }

    const langOpt = e.target.closest('.lang-option');
    if (langOpt) {
      e.stopPropagation();
      const lang = langOpt.getAttribute('data-lang') || langOpt.dataset.lang;
      if (lang) setLanguage(lang);
      return;
    }

    const themeOpt = e.target.closest('.theme-option');
    if (themeOpt) {
      e.stopPropagation();
      const theme = themeOpt.getAttribute('data-theme') || themeOpt.dataset.theme;
      if (theme) setTheme(theme);
      return;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.body.classList.contains('theme-ares')) setTheme('theme-oscuro');
      const m = document.getElementById('pluxy-destiny-modal');
      if (m && m.style.display !== 'none') m.style.display = 'none';
      const ld = document.getElementById('langDropdown');
      if (ld) {
        ld.classList.remove('show');
        ld.style.display = 'none';
      }
      const td = document.getElementById('themeDropdown');
      if (td) {
        td.classList.remove('show');
        td.style.display = 'none';
      }
    }
  });

  window.initDestinyPage = function(cityName, citySlug) {
    window.destinyCityName = cityName;
    window.destinyCitySlug = citySlug;

    const savedTheme = localStorage.getItem('Plux_Theme') || localStorage.getItem('PluxTheme') || 'theme-oscuro';
    const savedLang = localStorage.getItem('Plux_Lang') || localStorage.getItem('plux_lang') || localStorage.getItem('lang') || localStorage.getItem('pluxUserLanguage') || 'es';

    setTheme(savedTheme);
    setLanguage(savedLang);
    renderInitialPluxyGreeting();
  };

  function renderButtonsHTML() {
    const t = dict[currentLang] || dict.es;
    const slug = window.destinyCitySlug;
    return `
      <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:10px;">
        <button onclick="if(window.trackEvent)window.trackEvent('create_itinerary', { destination: '${slug}', source: 'pluxy_ai' }); window.location.href='/plux/join/plantillas/${slug}'" style="background:linear-gradient(135deg, var(--verde), var(--azul)); border:none; color:#ffffff; border-radius:12px; padding:7px 14px; font-size:0.78rem; font-weight:700; cursor:pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">${t.btnCreate}</button>
        <button onclick="window.preguntarPluxyAI('${t.btn3Days.replace(/'/g, "\\'")}')" style="background:var(--card); border:1px solid var(--border); color:var(--texto); border-radius:12px; padding:6px 12px; font-size:0.78rem; font-weight:600; cursor:pointer;">${t.btn3Days}</button>
        <button onclick="window.preguntarPluxyAI('${t.btnFood.replace(/'/g, "\\'")}')" style="background:var(--card); border:1px solid var(--border); color:var(--texto); border-radius:12px; padding:6px 12px; font-size:0.78rem; font-weight:600; cursor:pointer;">${t.btnFood}</button>
        <button onclick="window.preguntarPluxyAI('${t.btnHotel.replace(/'/g, "\\'")}')" style="background:var(--card); border:1px solid var(--border); color:var(--texto); border-radius:12px; padding:6px 12px; font-size:0.78rem; font-weight:600; cursor:pointer;">${t.btnHotel}</button>
        <button onclick="window.preguntarPluxyAI('${t.btnTransport.replace(/'/g, "\\'")}')" style="background:var(--card); border:1px solid var(--border); color:var(--texto); border-radius:12px; padding:6px 12px; font-size:0.78rem; font-weight:600; cursor:pointer;">${t.btnTransport}</button>
      </div>
    `;
  }

  function renderInitialPluxyGreeting() {
    const body = document.getElementById('pluxy-chat-body');
    if (!body) return;
    const t = dict[currentLang] || dict.es;
    const city = window.destinyCityName || '';
    body.innerHTML = `
      <div style="background:var(--card); border:1px solid var(--border); border-radius:14px; padding:14px; color:var(--texto); line-height:1.5; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        ${t.pluxyGreeting} <strong>${city}</strong>? ¡Puedo darte recomendaciones personalizadas o crear tu itinerario completo!
        ${renderButtonsHTML()}
      </div>
    `;
  }

  async function fetchAIResponse(userQuery) {
    const city = window.destinyCityName || 'esta ciudad';
    const systemPrompt = `Sos Pluxy, el agente inteligente y asistente de viajes de Plux. El usuario consulta sobre su viaje a ${city}. Respondé en idioma ${currentLang}. Da consejos reales, útiles, concisos y bien estructurados (con emojis y viñetas). Sé un experto en ${city}.`;

    // 1. Intentar primero con el Cloudflare Worker seguro y multimodelo
    try {
      const workerResp = await fetch('https://pluxy.nibecar-cofeben.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userQuery,
          system: systemPrompt
        })
      });
      if (workerResp.ok) {
        const workerData = await workerResp.json();
        if (workerData.text) return workerData.text;
      }
    } catch (e) {
      console.warn('Worker fetch fallback:', e);
    }

    // 2. Fallback de contingencia a Gemini directo si el Worker no responde
    if (!GEMINI_KEY) await loadKeys();
    if (GEMINI_KEY) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`;
        const resp = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents: [{ parts: [{ text: userQuery }] }]
          })
        });

        if (resp.ok) {
          const data = await resp.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text;
        }
      } catch (e) {
        console.warn('Gemini direct fallback error:', e);
      }
    }

    return `¡Excelente consulta sobre ${city}! Te sugiero explorar los puntos emblemáticos temprano en la mañana para evitar multitudes y probar la gastronomía típica al mediodía. ¿Quieres armar el itinerario de ${city} en Plux?`;
  }

  window.togglePluxyModal = function() {
    const m = document.getElementById('pluxy-destiny-modal');
    if (!m) return;
    if (m.style.display === 'none' || !m.style.display) {
      m.style.display = 'flex';
      document.getElementById('pluxy-input')?.focus();
    } else {
      m.style.display = 'none';
    }
  };

  window.preguntarPluxyAI = function(txt) {
    const input = document.getElementById('pluxy-input');
    if (input) input.value = txt;
    window.enviarMensajePluxy();
  };

  window.enviarMensajePluxy = async function() {
    const input = document.getElementById('pluxy-input');
    if (!input) return;
    const val = input.value.trim();
    if (!val) return;

    const body = document.getElementById('pluxy-chat-body');
    if (!body) return;

    body.innerHTML += `<div style="align-self:flex-end; background:linear-gradient(135deg, var(--verde), var(--azul)); color:#000; border-radius:14px; padding:10px 14px; font-weight:600; max-width:80%; margin-top:6px;">${val}</div>`;
    input.value = '';
    body.scrollTop = body.scrollHeight;

    const t = dict[currentLang] || dict.es;
    const thinkingId = 'thinking-' + Date.now();
    body.innerHTML += `<div id="${thinkingId}" style="background:rgba(255,255,255,0.06); border:1px solid var(--border); border-radius:14px; padding:12px; color:var(--verde); align-self:flex-start; max-width:85%; font-weight:600; margin-top:6px;">${t.thinking}</div>`;
    body.scrollTop = body.scrollHeight;

    const aiText = await fetchAIResponse(val);

    const thinkingEl = document.getElementById(thinkingId);
    if (thinkingEl) thinkingEl.remove();

    const formattedText = aiText
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');

    body.innerHTML += `
      <div style="background:rgba(255,255,255,0.06); border:1px solid var(--border); border-radius:14px; padding:14px; color:var(--texto); align-self:flex-start; max-width:88%; margin-top:6px; line-height:1.55;">
        ${formattedText}
        ${renderButtonsHTML()}
      </div>
    `;
    body.scrollTop = body.scrollHeight;
  };
})();
