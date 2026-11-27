(function () {
  var h = window.location.hostname;
  var p = window.location.pathname;
  var shouldRedirectToPlux =
    ((h === 'nibecarcofeben.com' || h === 'nibecar-cofeben.web.app' || h === 'nibecarcofeben.web.app') && p.startsWith('/plux')) ||
    h === 'plux-nibecarcofeben.web.app';
  if (shouldRedirectToPlux) {
    var cleanPath = String(p || '/').replace(/^\/plux\/?/, '/').replace(/^[/\\]+/, '').replace(/[^a-zA-Z0-9\-._~/]/g, '');
    var target = new URL('https://plux.nibecarcofeben.com');
    target.pathname = '/' + cleanPath;
    target.search = window.location.search;
    target.hash = window.location.hash;
    if (target.origin === 'https://plux.nibecarcofeben.com') {
      window.location.replace(target.href);
    }
    return;
  }

  // Google Analytics 4 (GA4) queue initialized immediately; network script deferred until interaction
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('js', new Date());
  window.GA_MEASUREMENT_ID = 'G-W5GX3XSCER';
  gtag('config', 'G-W5GX3XSCER', {
    send_page_view: true,
    app_name: 'Plux Web'
  });
  window.trackEvent = window.trackEvent || function (eventName, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params || {});
    }
  };

  var gaLoaded = false;
  function loadGA4() {
    if (gaLoaded) return;
    gaLoaded = true;
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-W5GX3XSCER';
    (document.head || document.documentElement).appendChild(gaScript);
  }

  function injectScriptPromise(src, integrity) {
    return new Promise(function (resolve) {
      var existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        if (existing.dataset.pluxLoaded === '1') {
          resolve();
          return;
        }
        existing.addEventListener('load', function () { resolve(); }, { once: true });
        existing.addEventListener('error', function () { resolve(); }, { once: true });
        return;
      }
      var s = document.createElement('script');
      s.src = src;
      s.async = true;
      if (integrity) {
        s.integrity = integrity;
        s.crossOrigin = 'anonymous';
      }
      s.onload = function () {
        s.dataset.pluxLoaded = '1';
        resolve();
      };
      s.onerror = function () { resolve(); };
      (document.head || document.documentElement).appendChild(s);
    });
  }

  function injectStylesheet(href, integrity) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;
    if (integrity) {
      l.integrity = integrity;
      l.crossOrigin = 'anonymous';
    }
    (document.head || document.documentElement).appendChild(l);
  }

  function getAssetVersionSuffix() {
    var cur = document.currentScript || document.querySelector('script[src*="plux-init.js"]');
    if (cur && cur.src) {
      var m = /[?&](v=[^&]+)/.exec(cur.src);
      if (m) return '?' + m[1];
    }
    return '?v=1790010000065';
  }
  var assetVersionSuffix = getAssetVersionSuffix();

  // Lazy-load Firebase App + Auth SDKs on demand / interaction / cached session
  var firebaseAuthPromise = null;
  function ensurePluxFirebaseAuth() {
    if (typeof firebase !== 'undefined' && typeof firebase.auth === 'function') {
      return Promise.resolve();
    }
    if (firebaseAuthPromise) return firebaseAuthPromise;
    firebaseAuthPromise = injectScriptPromise('/firebase/firebase-app-compat.js').then(function () {
      return injectScriptPromise('/firebase/firebase-auth-compat.js');
    }).then(function () {
      if (typeof firebase === 'undefined' || typeof firebase.auth !== 'function') {
        firebaseAuthPromise = null;
      }
    });
    return firebaseAuthPromise;
  }
  window.ensurePluxFirebaseAuth = ensurePluxFirebaseAuth;

  // Lazy-load Firebase Firestore & Realtime Database SDKs on demand / interaction
  var firebaseDataPromise = null;
  function ensurePluxFirebaseData() {
    if (typeof firebase !== 'undefined' && typeof firebase.firestore === 'function' && typeof firebase.database === 'function') {
      if (typeof window.getFirestoreDb === 'function') window.getFirestoreDb();
      if (typeof window.getRealtimeDb === 'function') window.getRealtimeDb();
      return Promise.resolve();
    }
    if (firebaseDataPromise) return firebaseDataPromise;
    firebaseDataPromise = ensurePluxFirebaseAuth().then(function () {
      return Promise.all([
        injectScriptPromise('/firebase/firebase-database-compat.js'),
        injectScriptPromise('/firebase/firebase-firestore-compat.js')
      ]);
    }).then(function () {
      if (typeof window.getFirestoreDb === 'function') window.getFirestoreDb();
      if (typeof window.getRealtimeDb === 'function') window.getRealtimeDb();
      if (typeof firebase === 'undefined' || typeof firebase.firestore !== 'function') {
        firebaseDataPromise = null;
      }
    });
    return firebaseDataPromise;
  }
  window.ensurePluxFirebaseData = ensurePluxFirebaseData;

  // Lazy-load plux-discover.js on demand / interaction
  var discoverPromise = null;
  function ensurePluxDiscover() {
    if (typeof window.abrirDescubrirModalUnified === 'function') {
      return Promise.resolve();
    }
    if (discoverPromise) return discoverPromise;
    discoverPromise = injectScriptPromise('/js/plux-discover.js' + assetVersionSuffix);
    return discoverPromise;
  }
  window.ensurePluxDiscover = ensurePluxDiscover;

  // Lazy-load non-welcome feature modules on first interaction / deep-link
  var featureModulesPromise = null;
  function ensurePluxFeatureModules() {
    if (featureModulesPromise) return featureModulesPromise;
    injectStylesheet('/css/plux-herramientas.css' + assetVersionSuffix);
    injectStylesheet('/css/plux-wrapped.css' + assetVersionSuffix);
    var paths = [
      '/js/plux-i18n-catalog.js' + assetVersionSuffix,
      '/js/plux-export-cards.js' + assetVersionSuffix,
      '/js/plux-templates.js' + assetVersionSuffix,
      '/js/plux-social-chat.js' + assetVersionSuffix,
      '/js/plux-collab.js' + assetVersionSuffix,
      '/js/plux-herramientas.js' + assetVersionSuffix,
      '/js/plux-wrapped.js' + assetVersionSuffix,
      '/plux-pro.js' + assetVersionSuffix,
      '/js/plux-offline.js' + assetVersionSuffix
    ];
    featureModulesPromise = Promise.all(paths.map(function (src) {
      return injectScriptPromise(src);
    })).then(function () {
      if (document.getElementById('listaPlantillas') && typeof window.renderPlantillasOficiales === 'function') {
        window.renderPlantillasOficiales();
      }
      if (typeof window.renderPlantillasComunidad === 'function' && document.getElementById('listaPlantillasComunidad')) {
        window.renderPlantillasComunidad();
      }
    });
    return featureModulesPromise;
  }
  window.ensurePluxFeatureModules = ensurePluxFeatureModules;

  // Lazy-load heavy non-welcome libraries on first user interaction (or deep-link trip=/join=/plantilla=/template=)
  var heavyLibsLoaded = false;
  function loadHeavyLibs() {
    loadGA4();
    void ensurePluxFirebaseData().catch(function () {});
    void ensurePluxDiscover().catch(function () {});
    void ensurePluxFeatureModules().catch(function () {});
    if (heavyLibsLoaded) return;
    heavyLibsLoaded = true;
    injectStylesheet(
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      'sha384-iw3OoTErCYJJB9mCa8LNS2hbsQ7M3C0EpIsO/H5+EGAkPGc6rk+V8i04oW/K5xq0'
    );
    injectStylesheet(
      'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
      'sha384-sHL9NAb7lN7rfvG5lfHpm643Xkcjzp4jFvuavGOndn6pjVqS6ny56CAt3nsEVT4H'
    );
    void injectScriptPromise(
      'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
      'sha384-cxOPjt7s7Iz04uaHJceBmS+qpjv2JkIHNVcuOrM+YHwZOmJGBXI00mdUXEq65HTH'
    ).catch(function () {});
    void injectScriptPromise('/js/jspdf.umd.min.js').then(function () {
      return injectScriptPromise(
        'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
        'sha384-fCAW/rDWORTbQXSiB7mOg0QtQ5c+r0f544y6XoKjuVva0nMBlCpNUjiFeG5iMdS3'
      );
    }).catch(function () {});
    void injectScriptPromise(
      'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
      'sha384-3zSEDfvllQohrq0PHL1fOXJuC/jSOO34H46t6UQfobFOmxE5BpjjaIJY5F2/bMnU'
    ).catch(function () {});
    void injectScriptPromise(
      'https://cdn.jsdelivr.net/npm/chart.js@4.6.2/dist/chart.umd.min.js',
      'sha384-wFIO1nJgUOP2XDesMi2Xqyej8+jLnzOfBrJbdvz7Pp+UI88xOiL08fKFupi2KqR0'
    ).catch(function () {});
  }
  window.ensurePluxHeavyLibs = loadHeavyLibs;

  if (/[?&](trip|join|plantilla|template|destino|code)=/i.test(window.location.search)) {
    loadHeavyLibs();
  } else {
    var opts = { once: true, passive: true };
    window.addEventListener('pointerdown', loadHeavyLibs, opts);
    window.addEventListener('touchstart', loadHeavyLibs, opts);
    window.addEventListener('keydown', loadHeavyLibs, opts);
    window.addEventListener('scroll', loadHeavyLibs, opts);
  }
})();
