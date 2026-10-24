// ==========================================
// PLUX MODULE: SOCIAL CHAT, GROUPS & CLOUDINARY
// ==========================================
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

  // unsubscribeUserIncomingConv declared at top level to avoid TDZ
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
    if (name.toLowerCase().includes('pluxy')) return '<img src="/pet.png" alt="Pluxy" style="width:22px; height:22px; object-fit:contain; display:block;">';
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
      } else if (m.cardType === 'poll_card' && m.cardData) {
        const poll = m.cardData;
        const totalVotes = (poll.options || []).reduce((acc, opt) => acc + (opt.votes ? opt.votes.length : 0), 0);
        const myNick = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : 'Viajero';

        cardHtml = `
          <div class="plux-msg-rich-card plux-poll-card" id="poll-card-${m.id}" style="min-width:250px; max-width:340px; background:rgba(15,23,42,0.75); border:1px solid rgba(56,189,248,0.25); border-radius:14px; padding:12px; box-shadow:0 4px 16px rgba(0,0,0,0.3);">
            <div class="plux-rich-card-header" style="display:flex; flex-direction:column; gap:6px; margin-bottom:8px;">
              <span class="plux-rich-card-badge poll" style="align-self:flex-start; background:rgba(14,165,233,0.18); color:#38bdf8; border:1px solid rgba(56,189,248,0.3); font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:6px; display:inline-flex; align-items:center; gap:5px;">
                <i class="fa-solid fa-square-poll-vertical"></i> Encuesta de grupo
              </span>
              <span class="plux-rich-card-title" style="font-size:0.95rem; font-weight:800; color:#fff; line-height:1.35;">${escapeHtml(poll.question)}</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:6px; margin-top:6px;">
              ${(poll.options || []).map((opt, optIdx) => {
                const votes = opt.votes || [];
                const count = votes.length;
                const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
                const hasVoted = votes.includes(myNick);
                return `
                  <div class="plux-poll-option ${hasVoted ? 'voted' : ''}" onclick="window.votarEncuestaChat('${m.id}', ${optIdx})" style="position:relative; background:rgba(255,255,255,0.04); border:1px solid ${hasVoted ? '#38bdf8' : 'rgba(255,255,255,0.1)'}; border-radius:9px; padding:8px 10px; cursor:pointer; overflow:hidden; transition:all 0.2s ease;">
                    <div class="plux-poll-progress" style="position:absolute; top:0; left:0; bottom:0; width:${pct}%; background:${hasVoted ? 'rgba(56,189,248,0.28)' : 'rgba(255,255,255,0.08)'}; pointer-events:none; transition:width 0.3s ease;"></div>
                    <div style="position:relative; z-index:1; display:flex; justify-content:space-between; align-items:center; font-size:0.84rem; font-weight:600;">
                      <span style="display:flex; align-items:center; gap:6px; color:#f1f5f9;">
                        ${hasVoted ? '<i class="fa-solid fa-circle-check" style="color:#38bdf8;"></i>' : '<i class="fa-regular fa-circle" style="color:var(--gris);"></i>'}
                        ${escapeHtml(opt.text)}
                      </span>
                      <span style="font-weight:700; color:${hasVoted ? '#38bdf8' : '#94a3b8'}; font-size:0.78rem;">
                        ${pct}% (${count})
                      </span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; font-size:0.72rem; color:var(--gris);">
              <span>${totalVotes} ${totalVotes === 1 ? 'voto' : 'votos'}</span>
              <span>Toca para votar</span>
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
      const icon = isPluxy ? '<img src="/pet.png" alt="Pluxy" style="width:22px; height:22px; object-fit:contain; display:block;">' : '👤';
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

  function votarEncuestaChat(msgId, optIdx) {
    const chat = pluxSocialChats[pluxActiveChatId] || getActiveTripChat();
    if (!chat || !chat.messages) return;
    const msg = chat.messages.find(m => m.id === msgId);
    if (!msg || !msg.cardData || !Array.isArray(msg.cardData.options)) return;

    const myNick = (typeof currentNickname !== 'undefined' && currentNickname) ? currentNickname : 'Viajero';
    const opt = msg.cardData.options[optIdx];
    if (!opt) return;

    if (!Array.isArray(opt.votes)) opt.votes = [];

    // Alternar voto o cambiar opción seleccionada
    if (opt.votes.includes(myNick)) {
      opt.votes = opt.votes.filter(n => n !== myNick);
    } else {
      msg.cardData.options.forEach(o => {
        if (!Array.isArray(o.votes)) o.votes = [];
        o.votes = o.votes.filter(n => n !== myNick);
      });
      opt.votes.push(myNick);
    }

    localStorage.setItem('PluxSocialChats_V2', JSON.stringify(pluxSocialChats));
    renderChatMessages();

    try {
      if (typeof db !== 'undefined' && db && pluxActiveChatId) {
        db.collection("plux_social_messages").doc(msgId).set({
          cardData: msg.cardData
        }, { merge: true }).catch(() => {});
      }
    } catch(e){}
  }
  window.votarEncuestaChat = votarEncuestaChat;

  function abrirModalCrearEncuestaChat() {
    mostrarMenuAdjuntosChat();
    const modal = document.getElementById('modal-crear-encuesta-chat');
    if (modal) {
      modal.style.display = 'flex';
      const qInput = document.getElementById('pollQuestionInput');
      if (qInput) { qInput.value = ''; qInput.focus(); }
      const container = document.getElementById('pollOptionsContainer');
      if (container) {
        container.innerHTML = `
          <input type="text" class="poll-option-input" placeholder="Opción 1" style="width:100%; box-sizing:border-box; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:10px; padding:9px 12px; color:#fff; font-size:0.88rem;">
          <input type="text" class="poll-option-input" placeholder="Opción 2" style="width:100%; box-sizing:border-box; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:10px; padding:9px 12px; color:#fff; font-size:0.88rem;">
        `;
      }
    }
  }
  window.abrirModalCrearEncuestaChat = abrirModalCrearEncuestaChat;

  function cerrarModalCrearEncuestaChat() {
    const modal = document.getElementById('modal-crear-encuesta-chat');
    if (modal) modal.style.display = 'none';
  }
  window.cerrarModalCrearEncuestaChat = cerrarModalCrearEncuestaChat;

  function agregarOpcionEncuestaInput() {
    const container = document.getElementById('pollOptionsContainer');
    if (!container) return;
    const count = container.querySelectorAll('.poll-option-input').length + 1;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'poll-option-input';
    input.placeholder = `Opción ${count}`;
    input.style.cssText = 'width:100%; box-sizing:border-box; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:10px; padding:9px 12px; color:#fff; font-size:0.88rem;';
    container.appendChild(input);
    input.focus();
  }
  window.agregarOpcionEncuestaInput = agregarOpcionEncuestaInput;

  function publicarEncuestaChat() {
    const qInput = document.getElementById('pollQuestionInput');
    const question = qInput ? qInput.value.trim() : '';
    if (!question) {
      if (typeof showToast === 'function') showToast('Escribe una pregunta para la encuesta', 'info');
      return;
    }
    const container = document.getElementById('pollOptionsContainer');
    const inputs = container ? Array.from(container.querySelectorAll('.poll-option-input')) : [];
    const validOptions = inputs.map(inp => inp.value.trim()).filter(Boolean);
    if (validOptions.length < 2) {
      if (typeof showToast === 'function') showToast('Ingresa al menos 2 opciones de votación', 'info');
      return;
    }

    cerrarModalCrearEncuestaChat();

    enviarCardChatSocial({
      introText: 'Nueva encuesta de grupo:',
      cardType: 'poll_card',
      cardData: {
        question: question,
        options: validOptions.map((optText, idx) => ({ id: idx, text: optText, votes: [] }))
      }
    });

    if (typeof showToast === 'function') showToast('Encuesta publicada en el chat', 'success');
  }
  window.publicarEncuestaChat = publicarEncuestaChat;

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
    
    // 1. Subida firmada directa a la API de Cloudinary
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

      const isVideo = file.type && file.type.startsWith('video/');
      const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/${isVideo ? 'video' : 'auto'}/upload`;
      const res = await fetch(uploadUrl, {
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
    if (dl) {
      dl.setAttribute('data-url', url);
      if (dl.tagName === 'A') dl.href = url;
    }
    modal.style.display = 'flex';
  }
  window.abrirFotoGrande = abrirFotoGrande;

  function cerrarFotoGrande() {
    const modal = document.getElementById('modal-foto-lightbox');
    if (modal) modal.style.display = 'none';
  }
  window.cerrarFotoGrande = cerrarFotoGrande;


