// ==================== SISTEMA DE USUARIO PLUX ====================
// Módulo centralizado para gestión de usuario, perfil y colaboradores

class PluxUserSystem {
  constructor() {
    this.currentUser = {
      nickname: localStorage.getItem('pluxUserNickname') || null,
      language: localStorage.getItem('pluxUserLanguage') || 'es',
      theme: localStorage.getItem('pluxUserTheme') || 'theme-oscuro',
      createdAt: localStorage.getItem('pluxUserCreatedAt') || new Date().toISOString(),
      trips: [],
      collaborators: []
    };
    this.db = null;
  }

  // Inicializar Firebase para el usuario
  async initFirebase(db) {
    this.db = db;
    if (this.currentUser.nickname && this.db) {
      await this.syncUserData();
    }
  }

  // Crear/actualizar perfil de usuario
  async createUserProfile(nickname) {
    if (!nickname || nickname.trim().length === 0) {
      throw new Error('Nickname no puede estar vacío');
    }
    
    this.currentUser.nickname = nickname.trim();
    this.currentUser.createdAt = new Date().toISOString();
    
    // Guardar en localStorage
    localStorage.setItem('pluxUserNickname', this.currentUser.nickname);
    localStorage.setItem('pluxUserCreatedAt', this.currentUser.createdAt);
    
    // Guardar en Firestore si está disponible
    if (this.db) {
      try {
        await this.db.collection('users').doc(this.currentUser.nickname).set({
          nickname: this.currentUser.nickname,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
          language: this.currentUser.language,
          theme: this.currentUser.theme
        });
      } catch (e) {
        console.warn('Error guardando perfil en Firestore:', e);
      }
    }
    
    return this.currentUser;
  }

  // Cambiar idioma del usuario
  setLanguage(lang) {
    this.currentUser.language = lang;
    localStorage.setItem('pluxUserLanguage', lang);
    
    if (this.db && this.currentUser.nickname) {
      this.db.collection('users').doc(this.currentUser.nickname).update({
        language: lang,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(e => console.warn('Error actualizando idioma:', e));
    }
  }

  // Cambiar tema del usuario
  setTheme(theme) {
    this.currentUser.theme = theme;
    localStorage.setItem('pluxUserTheme', theme);
    
    if (this.db && this.currentUser.nickname) {
      this.db.collection('users').doc(this.currentUser.nickname).update({
        theme: theme,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(e => console.warn('Error actualizando tema:', e));
    }
  }

  // Agregar colaborador a un viaje
  async addCollaborator(tripId, collaboratorNickname) {
    if (!this.currentUser.nickname) {
      throw new Error('Debes crear un perfil primero');
    }
    
    if (this.db) {
      try {
        await this.db.collection('trips').doc(tripId).update({
          collaborators: firebase.firestore.FieldValue.arrayUnion({
            nickname: collaboratorNickname,
            addedAt: firebase.firestore.FieldValue.serverTimestamp(),
            role: 'editor'
          })
        });
        return true;
      } catch (e) {
        console.error('Error agregando colaborador:', e);
        return false;
      }
    }
    return false;
  }

  // Obtener colaboradores de un viaje
  async getCollaborators(tripId) {
    if (!this.db) return [];
    
    try {
      const doc = await this.db.collection('trips').doc(tripId).get();
      return doc.data()?.collaborators || [];
    } catch (e) {
      console.error('Error obteniendo colaboradores:', e);
      return [];
    }
  }

  // Guardar preferencias de usuario
  async savePreferences(prefs) {
    Object.assign(this.currentUser, prefs);
    
    Object.keys(prefs).forEach(key => {
      localStorage.setItem(`pluxUser${key.charAt(0).toUpperCase() + key.slice(1)}`, prefs[key]);
    });
    
    if (this.db && this.currentUser.nickname) {
      try {
        await this.db.collection('users').doc(this.currentUser.nickname).update({
          ...prefs,
          lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (e) {
        console.warn('Error guardando preferencias:', e);
      }
    }
  }

  // Sincronizar datos del usuario desde Firebase
  async syncUserData() {
    if (!this.db || !this.currentUser.nickname) return;
    
    try {
      const doc = await this.db.collection('users').doc(this.currentUser.nickname).get();
      if (doc.exists) {
        const data = doc.data();
        this.currentUser.language = data.language || this.currentUser.language;
        this.currentUser.theme = data.theme || this.currentUser.theme;
        localStorage.setItem('pluxUserLanguage', this.currentUser.language);
        localStorage.setItem('pluxUserTheme', this.currentUser.theme);
      }
    } catch (e) {
      console.warn('Error sincronizando datos de usuario:', e);
    }
  }

  // Obtener estado actual del usuario
  getUser() {
    return { ...this.currentUser };
  }

  // Verificar si usuario está configurado
  isUserConfigured() {
    return this.currentUser.nickname !== null && this.currentUser.nickname !== '';
  }

  // Logout (limpiar datos)
  logout() {
    localStorage.removeItem('pluxUserNickname');
    localStorage.removeItem('pluxUserLanguage');
    localStorage.removeItem('pluxUserTheme');
    localStorage.removeItem('pluxUserCreatedAt');
    this.currentUser = {
      nickname: null,
      language: 'es',
      theme: 'theme-oscuro',
      createdAt: new Date().toISOString(),
      trips: [],
      collaborators: []
    };
  }
}

// Crear instancia global
const pluxUser = new PluxUserSystem();
