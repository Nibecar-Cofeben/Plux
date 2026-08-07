/* Pluxy AI & Theme/Language Manager for Plux Destinies */
(function() {
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
      readyDesc: 'Organiza tus actividades con Pluxy, la IA inteligente de Plux.',
      startPlanner: '✨ Comenzar itinerario en Plux',
      pluxyTitle: 'Pluxy Assistant',
      pluxyGreeting: '¡Hola! Soy <strong>Pluxy</strong> 🐾. ¿En qué te ayudo para tu viaje a ',
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
      pluxyGreeting: 'Hello! I\'m <strong>Pluxy</strong> 🐾. How can I help with your trip to ',
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
      pluxyGreeting: 'Olá! Sou o <strong>Pluxy</strong> 🐾. Como posso ajudar na sua viagem a ',
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
      pluxyGreeting: 'Bonjour! Je suis <strong>Pluxy</strong> 🐾. Comment puis-je vous aider pour votre voyage à ',
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
      pluxyGreeting: 'Hallo! Ich bin <strong>Pluxy</strong> 🐾. Wie kann ich dir bei deiner Reise nach ',
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
      pluxyGreeting: 'Ciao! Sono <strong>Pluxy</strong> 🐾. Come posso aiutarti per il tuo viaggio a ',
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
    currentTheme = t;
    localStorage.setItem('PluxTheme', t);
    document.body.className = `lang-${currentLang} ${t}`;
    document.querySelectorAll('.theme-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.theme === t);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pluxUserLanguage', lang);
    document.body.className = `lang-${lang} ${currentTheme}`;
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
    const langBtn = document.getElementById('langButton');
    if (langBtn) langBtn.textContent = lang.toUpperCase();
    updateTextTranslations();
  }

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
    const langBtn = e.target.closest('#langButton, .lang-button');
    if (langBtn) {
      e.stopPropagation();
      const langDrop = document.getElementById('langDropdown');
      const themeDrop = document.getElementById('themeDropdown');
      themeDrop?.classList.remove('show');
      langDrop?.classList.toggle('show');
      return;
    }

    const themeBtn = e.target.closest('#themeButton, .theme-button');
    if (themeBtn) {
      e.stopPropagation();
      const langDrop = document.getElementById('langDropdown');
      const themeDrop = document.getElementById('themeDropdown');
      langDrop?.classList.remove('show');
      themeDrop?.classList.toggle('show');
      return;
    }

    const langOpt = e.target.closest('.lang-option');
    if (langOpt) {
      e.stopPropagation();
      const lang = langOpt.getAttribute('data-lang') || langOpt.dataset.lang;
      if (lang) setLanguage(lang);
      document.getElementById('langDropdown')?.classList.remove('show');
      return;
    }

    const themeOpt = e.target.closest('.theme-option');
    if (themeOpt) {
      e.stopPropagation();
      const theme = themeOpt.getAttribute('data-theme') || themeOpt.dataset.theme;
      if (theme) setTheme(theme);
      document.getElementById('themeDropdown')?.classList.remove('show');
      return;
    }

    document.getElementById('langDropdown')?.classList.remove('show');
    document.getElementById('themeDropdown')?.classList.remove('show');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.body.classList.contains('theme-ares')) setTheme('theme-oscuro');
      const m = document.getElementById('pluxy-destiny-modal');
      if (m && m.style.display !== 'none') m.style.display = 'none';
    }
  });

  window.initDestinyPage = function(cityName, citySlug) {
    window.destinyCityName = cityName;
    window.destinyCitySlug = citySlug;

    setTheme(currentTheme);
    setLanguage(currentLang);
    renderInitialPluxyGreeting();
  };

  function renderButtonsHTML() {
    const t = dict[currentLang] || dict.es;
    const slug = window.destinyCitySlug;
    return `
      <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:10px;">
        <button onclick="window.location.href='/plux/join/plantillas/${slug}'" style="background:rgba(52,211,153,0.2); border:1px solid var(--verde); color:var(--verde); border-radius:12px; padding:6px 12px; font-size:0.78rem; font-weight:700; cursor:pointer;">${t.btnCreate}</button>
        <button onclick="window.preguntarPluxyAI('${t.btn3Days.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.06); border:1px solid var(--border); color:var(--texto); border-radius:12px; padding:6px 12px; font-size:0.78rem; cursor:pointer;">${t.btn3Days}</button>
        <button onclick="window.preguntarPluxyAI('${t.btnFood.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.06); border:1px solid var(--border); color:var(--texto); border-radius:12px; padding:6px 12px; font-size:0.78rem; cursor:pointer;">${t.btnFood}</button>
        <button onclick="window.preguntarPluxyAI('${t.btnHotel.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.06); border:1px solid var(--border); color:var(--texto); border-radius:12px; padding:6px 12px; font-size:0.78rem; cursor:pointer;">${t.btnHotel}</button>
        <button onclick="window.preguntarPluxyAI('${t.btnTransport.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.06); border:1px solid var(--border); color:var(--texto); border-radius:12px; padding:6px 12px; font-size:0.78rem; cursor:pointer;">${t.btnTransport}</button>
      </div>
    `;
  }

  function renderInitialPluxyGreeting() {
    const body = document.getElementById('pluxy-chat-body');
    if (!body) return;
    const t = dict[currentLang] || dict.es;
    const city = window.destinyCityName || '';
    body.innerHTML = `
      <div style="background:rgba(255,255,255,0.06); border:1px solid var(--border); border-radius:14px; padding:12px; color:var(--texto); line-height:1.5;">
        ${t.pluxyGreeting} <strong>${city}</strong>? ¡Puedo darte recomendaciones personalizadas o crear tu itinerario completo!
        ${renderButtonsHTML()}
      </div>
    `;
  }

  async function fetchAIResponse(userQuery) {
    if (!GEMINI_KEY) await loadKeys();
    const city = window.destinyCityName || 'esta ciudad';

    if (GEMINI_KEY) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`;
        const prompt = `Eres Pluxy 🐾, el perro inteligente y entusiasta asistente de viajes de la app Plux. El usuario está consultando sobre su viaje a ${city}. Responde en idioma ${currentLang}. Da consejos reales, amigables, concisos y bien formateados (con emojis y viñetas). Sé un experto en ${city}.\n\nConsulta del usuario: ${userQuery}`;

        const resp = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        });

        if (resp.ok) {
          const data = await resp.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text;
        }
      } catch (e) {
        console.warn('Gemini fetch error:', e);
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
