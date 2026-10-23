    let currentKey = null;
    let lastActiveKey = null;
    let minecraftModeActive = false;
    let toastTimeout = null;
    let audioEnabled = true;

    // =========================================================
    // MOTOR DE SÍNTESIS DE AUDIO PROFESIONAL (WEB AUDIO API)
    // Con Compresor Dinámico, Alta Ganancia y Ecualizador Visual
    // =========================================================
    let audioCtx = null;
    let masterGain = null;
    let masterCompressor = null;

    function initAudio() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Compresor dinámico para máxima claridad sin distorsión
        masterCompressor = audioCtx.createDynamicsCompressor();
        masterCompressor.threshold.setValueAtTime(-16, audioCtx.currentTime);
        masterCompressor.knee.setValueAtTime(30, audioCtx.currentTime);
        masterCompressor.ratio.setValueAtTime(12, audioCtx.currentTime);
        masterCompressor.attack.setValueAtTime(0.003, audioCtx.currentTime);
        masterCompressor.release.setValueAtTime(0.25, audioCtx.currentTime);

        // Control maestro de volumen
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.65, audioCtx.currentTime); // Volumen óptimo para parlantes

        masterCompressor.connect(masterGain);
        masterGain.connect(audioCtx.destination);
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    // Desbloqueo universal de audio ante cualquier interacción en la página
    ['pointerdown', 'click', 'keydown', 'touchstart'].forEach(evt => {
      document.addEventListener(evt, () => {
        if (!audioCtx || audioCtx.state === 'suspended') {
          initAudio();
        }
      }, { once: false });
    });

    // Alternar sonido ON / OFF
    function toggleAudioFx() {
      initAudio();
      audioEnabled = !audioEnabled;
      const btn = document.getElementById('soundToggleBtn');
      const text = document.getElementById('soundToggleText');
      const icon = document.getElementById('soundToggleIcon');
      
      if (audioEnabled) {
        btn.classList.remove('muted');
        text.textContent = 'ON';
        icon.textContent = '🔊';
        showPluxeeToast('🔊 <strong>Sonido Activado:</strong> Disfrutá los efectos y melodías de cada Pluxee.');
        playSound('coin');
      } else {
        btn.classList.add('muted');
        text.textContent = 'OFF';
        icon.textContent = '🔇';
        showPluxeeToast('🔇 <strong>Sonido Silenciado</strong>');
      }
    }

    // Animar barras de ecualizador visual
    function animateEqBars(durationMs = 1200) {
      const btn = document.getElementById('soundToggleBtn');
      if (!btn || !audioEnabled) return;
      btn.classList.add('eq-playing');
      setTimeout(() => {
        btn.classList.remove('eq-playing');
      }, durationMs);
    }

    // Generador de Sonidos Sintetizados
    function playSound(type) {
      if (!audioEnabled) return;
      try {
        const ctx = initAudio();
        const now = ctx.currentTime;
        const out = masterCompressor;
        animateEqBars(1400);

        if (type === 'minecraft-block') {
          // Sonido de clic y golpe de bloque (tactile pop)
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(180, now);
          osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);
          gain.gain.setValueAtTime(0.5, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
          osc.connect(gain);
          gain.connect(out);
          osc.start(now);
          osc.stop(now + 0.12);
        }
        else if (type === 'minecraft-xp') {
          // Orbe de experiencia ascendente de Minecraft
          [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const t = now + idx * 0.08;
            osc.frequency.setValueAtTime(freq, t);
            gain.gain.setValueAtTime(0.4, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
            osc.connect(gain);
            gain.connect(out);
            osc.start(t);
            osc.stop(t + 0.3);
          });
          animateEqBars(800);
        }
        else if (type === 'minecraft-tnt') {
          // 1. Siseo de Creeper ("Tssssssss...")
          const bufferSize = ctx.sampleRate * 1.5;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.9));
          }
          const noise = ctx.createBufferSource();
          noise.buffer = buffer;
          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(3200, now);
          filter.Q.setValueAtTime(3, now);
          const noiseGain = ctx.createGain();
          noiseGain.gain.setValueAtTime(0.4, now);
          noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);
          noise.connect(filter);
          filter.connect(noiseGain);
          noiseGain.connect(out);
          noise.start(now);

          // 2. Explosión "BOOM!" a los 1.2s
          setTimeout(() => {
            if (!audioEnabled) return;
            const boomOsc = ctx.createOscillator();
            const boomGain = ctx.createGain();
            boomOsc.type = 'sawtooth';
            boomOsc.frequency.setValueAtTime(140, ctx.currentTime);
            boomOsc.frequency.exponentialRampToValueAtTime(25, ctx.currentTime + 0.8);
            boomGain.gain.setValueAtTime(0.8, ctx.currentTime);
            boomGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
            boomOsc.connect(boomGain);
            boomGain.connect(out);
            boomOsc.start(ctx.currentTime);
            boomOsc.stop(ctx.currentTime + 0.8);
          }, 1200);
        }
        else if (type === 'minecraft-eat') {
          // Sonido de morder comida 3 veces
          [0, 0.14, 0.28].forEach(dt => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(320 + Math.random() * 80, now + dt);
            osc.frequency.exponentialRampToValueAtTime(80, now + dt + 0.09);
            gain.gain.setValueAtTime(0.45, now + dt);
            gain.gain.exponentialRampToValueAtTime(0.001, now + dt + 0.09);
            osc.connect(gain);
            gain.connect(out);
            osc.start(now + dt);
            osc.stop(now + dt + 0.09);
          });
        }
        else if (type === 'minecraft-teleport') {
          // Ender Pearl teleport sweep
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(880, now);
          osc.frequency.exponentialRampToValueAtTime(180, now + 0.5);
          gain.gain.setValueAtTime(0.5, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.connect(gain);
          gain.connect(out);
          osc.start(now);
          osc.stop(now + 0.5);
        }
        else if (type === 'win95') {
          // Acordes icónicos completos de arranque de Windows 95
          const chords = [
            { f: 311.13, t: 0.0, d: 1.5, type: 'sine' },      // Eb4
            { f: 466.16, t: 0.12, d: 1.6, type: 'triangle' },  // Bb4
            { f: 415.30, t: 0.32, d: 1.7, type: 'sine' },      // Ab4
            { f: 349.23, t: 0.52, d: 1.8, type: 'sine' },      // F4
            { f: 622.25, t: 0.76, d: 2.4, type: 'triangle' },  // Eb5
            { f: 932.33, t: 0.76, d: 2.6, type: 'sine' },      // Bb5
            { f: 1244.5, t: 0.90, d: 2.8, type: 'sine' }       // Eb6 shimmer
          ];
          chords.forEach(c => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = c.type;
            const t = now + c.t;
            osc.frequency.setValueAtTime(c.f, t);
            gain.gain.setValueAtTime(0.35, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + c.d);
            osc.connect(gain);
            gain.connect(out);
            osc.start(t);
            osc.stop(t + c.d);
          });
          animateEqBars(3000);
        }
        else if (type === 'happy-birthday') {
          // Melodía Chiptune 8-Bit de "Cumpleaños Feliz"
          const notes = [
            { f: 261.63, d: 0.25 }, // C4
            { f: 261.63, d: 0.25 }, // C4
            { f: 293.66, d: 0.5 },  // D4
            { f: 261.63, d: 0.5 },  // C4
            { f: 349.23, d: 0.5 },  // F4
            { f: 329.63, d: 1.0 },  // E4
            { f: 261.63, d: 0.25 }, // C4
            { f: 261.63, d: 0.25 }, // C4
            { f: 293.66, d: 0.5 },  // D4
            { f: 261.63, d: 0.5 },  // C4
            { f: 392.00, d: 0.5 },  // G4
            { f: 349.23, d: 1.0 }   // F4
          ];
          let curTime = now;
          notes.forEach(n => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square'; // Estilo auténtico chiptune NES
            osc.frequency.setValueAtTime(n.f, curTime);
            gain.gain.setValueAtTime(0.25, curTime);
            gain.gain.exponentialRampToValueAtTime(0.001, curTime + n.d * 0.9);
            osc.connect(gain);
            gain.connect(out);
            osc.start(curTime);
            osc.stop(curTime + n.d);
            curTime += n.d;
          });
          animateEqBars(5500);
        }
        else if (type === 'sonic-boom') {
          // Estruendo supersónico y onda de choque Mach 2
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(110, now);
          osc.frequency.exponentialRampToValueAtTime(26, now + 1.1);
          gain.gain.setValueAtTime(0.65, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
          osc.connect(gain);
          gain.connect(out);
          osc.start(now);
          osc.stop(now + 1.1);
          animateEqBars(1200);
        }
        else if (type === 'modem-beep') {
          // Pulsos de telemetría ARPANET y handshake de módem
          [900, 1400, 750, 1800, 1200, 2100].forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            const t = now + i * 0.09;
            osc.frequency.setValueAtTime(f, t);
            gain.gain.setValueAtTime(0.25, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
            osc.connect(gain);
            gain.connect(out);
            osc.start(t);
            osc.stop(t + 0.08);
          });
          animateEqBars(800);
        }
        else if (type === 'harp') {
          // Acorde de arpa suave y celestial
          [440, 554.37, 659.25, 880, 1108.73, 1318.51].forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const t = now + i * 0.09;
            osc.frequency.setValueAtTime(f, t);
            gain.gain.setValueAtTime(0.35, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.7);
            osc.connect(gain);
            gain.connect(out);
            osc.start(t);
            osc.stop(t + 0.7);
          });
          animateEqBars(1500);
        }
        else if (type === 'coin') {
          // Moneda dorada / bloque minado
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gain = ctx.createGain();
          osc1.type = 'sine';
          osc2.type = 'sine';
          osc1.frequency.setValueAtTime(987.77, now); // B5
          osc2.frequency.setValueAtTime(1318.51, now + 0.09); // E6
          gain.gain.setValueAtTime(0.45, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(out);
          osc1.start(now);
          osc1.stop(now + 0.09);
          osc2.start(now + 0.09);
          osc2.stop(now + 0.5);
          animateEqBars(600);
        }
        else if (type === 'guitar-strum') {
          const freqs = [164.81, 220.00, 293.66, 329.63, 440.00, 659.25];
          freqs.forEach((f, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            const t = now + idx * 0.038;
            osc.frequency.setValueAtTime(f, t);
            gain.gain.setValueAtTime(0.32, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
            osc.connect(gain);
            gain.connect(out);
            osc.start(t);
            osc.stop(t + 1.2);
          });
          animateEqBars(1400);
        }
        else if (type === 'mexican-guitar') {
          const notes = [329.63, 392.00, 493.88, 587.33, 659.25];
          notes.forEach((f, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            const t = now + idx * 0.07;
            osc.frequency.setValueAtTime(f, t);
            gain.gain.setValueAtTime(0.35, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 1.1);
            osc.connect(gain);
            gain.connect(out);
            osc.start(t);
            osc.stop(t + 1.1);
          });
          animateEqBars(1200);
        }
        else if (type === 'laika-heartbeat') {
          [0, 0.12].forEach((dt, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const t = now + dt;
            const baseFreq = i === 0 ? 68 : 52;
            osc.frequency.setValueAtTime(baseFreq, t);
            osc.frequency.exponentialRampToValueAtTime(28, t + 0.14);
            gain.gain.setValueAtTime(i === 0 ? 0.6 : 0.45, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
            osc.connect(gain);
            gain.connect(out);
            osc.start(t);
            osc.stop(t + 0.14);
          });
          animateEqBars(800);
        }
        else if (type === 'sputnik-beep') {
          [0, 0.28, 0.56].forEach(dt => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const t = now + dt;
            osc.frequency.setValueAtTime(1046.50, t);
            gain.gain.setValueAtTime(0.4, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
            osc.connect(gain);
            gain.connect(out);
            osc.start(t);
            osc.stop(t + 0.16);
          });
          animateEqBars(1000);
        }
        else if (type === 'comet-ping') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(1760, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.8);
          gain.gain.setValueAtTime(0.45, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
          osc.connect(gain);
          gain.connect(out);
          osc.start(now);
          osc.stop(now + 0.8);
          animateEqBars(800);
        }
        else if (type === 'steam-train') {
          [587.33, 739.99].forEach(f => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(f, now);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.35, now + 0.2);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 1.3);
            osc.connect(gain);
            gain.connect(out);
            osc.start(now);
            osc.stop(now + 1.3);
          });
          animateEqBars(1400);
        }
        else if (type === 'unesco-bell') {
          [440, 880, 1320, 1760].forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now);
            const vol = 0.4 / (i + 1);
            gain.gain.setValueAtTime(vol, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);
            osc.connect(gain);
            gain.connect(out);
            osc.start(now);
            osc.stop(now + 2.2);
          });
          animateEqBars(2200);
        }
        else if (type === 'iss-orbit') {
          [261.63, 329.63, 392.00, 523.25, 659.25].forEach((f, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const t = now + idx * 0.12;
            osc.frequency.setValueAtTime(f, t);
            gain.gain.setValueAtTime(0.28, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 1.8);
            osc.connect(gain);
            gain.connect(out);
            osc.start(t);
            osc.stop(t + 1.8);
          });
          animateEqBars(2000);
        }
        else if (type === 'burner-whoosh') {
          const bufferSize = ctx.sampleRate * 0.9;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * (i / bufferSize));
          }
          const noise = ctx.createBufferSource();
          noise.buffer = buffer;
          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(450, now);
          filter.Q.setValueAtTime(1.2, now);
          const noiseGain = ctx.createGain();
          noiseGain.gain.setValueAtTime(0.55, now);
          noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
          noise.connect(filter);
          filter.connect(noiseGain);
          noiseGain.connect(out);
          noise.start(now);
          animateEqBars(900);
        }
        else if (type === 'laser-zap') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(2400, now);
          osc.frequency.exponentialRampToValueAtTime(140, now + 0.22);
          gain.gain.setValueAtTime(0.5, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
          osc.connect(gain);
          gain.connect(out);
          osc.start(now);
          osc.stop(now + 0.22);
          animateEqBars(500);
        }
        else if (type === 'ocean-waves') {
          const bufferSize = ctx.sampleRate * 1.4;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * (i / bufferSize));
          }
          const noise = ctx.createBufferSource();
          noise.buffer = buffer;
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(350, now);
          filter.frequency.exponentialRampToValueAtTime(800, now + 0.6);
          filter.frequency.exponentialRampToValueAtTime(200, now + 1.4);
          const noiseGain = ctx.createGain();
          noiseGain.gain.setValueAtTime(0.6, now);
          noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 1.4);
          noise.connect(filter);
          filter.connect(noiseGain);
          noiseGain.connect(out);
          noise.start(now);
          animateEqBars(1400);
        }
        else if (type === 'typewriter-bell') {
          [0, 0.08, 0.16].forEach(dt => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            const t = now + dt;
            osc.frequency.setValueAtTime(700 + Math.random() * 300, t);
            gain.gain.setValueAtTime(0.22, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
            osc.connect(gain);
            gain.connect(out);
            osc.start(t);
            osc.stop(t + 0.05);
          });
          setTimeout(() => {
            if (!audioEnabled) return;
            const dingOsc = ctx.createOscillator();
            const dingGain = ctx.createGain();
            dingOsc.type = 'sine';
            dingOsc.frequency.setValueAtTime(2093, ctx.currentTime);
            dingGain.gain.setValueAtTime(0.45, ctx.currentTime);
            dingGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
            dingOsc.connect(dingGain);
            dingGain.connect(out);
            dingOsc.start(ctx.currentTime);
            dingOsc.stop(ctx.currentTime + 0.8);
          }, 240);
          animateEqBars(1100);
        }
      } catch (e) {
        console.warn('Audio FX no soportado o bloqueado:', e);
      }
    }

    // Toast flotante informativo de alta categoría
    function showPluxeeToast(html, duration = 3800) {
      const toast = document.getElementById('chronoToast');
      toast.innerHTML = html;
      toast.classList.add('active');
      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('active');
      }, duration);
    }

    // =========================================================
    // CANVAS DE EFECTOS ESPECIALES (CONFETI, CORAZONES, MONEDAS)
    // =========================================================
    const canvas = document.getElementById('doodle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId = null;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function runParticleLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity || 0;
        p.alpha -= p.fade || 0.01;
        p.rotation = (p.rotation || 0) + (p.vRot || 0);

        if (p.alpha <= 0 || p.y > canvas.height + 60 || p.y < -120) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'rect') {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        } else if (p.type === 'heart') {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          const s = p.size;
          ctx.moveTo(0, s / 4);
          ctx.quadraticCurveTo(0, 0, s / 4, 0);
          ctx.quadraticCurveTo(s / 2, 0, s / 2, s / 3);
          ctx.quadraticCurveTo(s / 2, 0, (3 * s) / 4, 0);
          ctx.quadraticCurveTo(s, 0, s, s / 4);
          ctx.quadraticCurveTo(s, s / 2, (3 * s) / 4, (3 * s) / 4);
          ctx.lineTo(s / 2, s);
          ctx.lineTo(s / 4, (3 * s) / 4);
          ctx.quadraticCurveTo(0, s / 2, 0, s / 4);
          ctx.fill();
        } else if (p.type === 'gold-coin') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b';
          ctx.shadowColor = '#fbbf24';
          ctx.shadowBlur = 10;
          ctx.fill();
        } else if (p.type === 'pixel-dirt') {
          ctx.fillStyle = p.color || '#866043';
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else if (p.type === 'cempasuchil') {
          ctx.fillStyle = p.color || '#f59e0b';
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.45, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'star') {
          ctx.fillStyle = p.color || '#ffffff';
          ctx.beginPath();
          const s = p.size;
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.fill();
        } else if (p.type === 'bubble') {
          ctx.strokeStyle = p.color || '#38bdf8';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (p.type === 'balloon') {
          ctx.fillStyle = p.color || '#f43f5e';
          ctx.beginPath();
          ctx.arc(0, -p.size * 0.2, p.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#f59e0b';
          ctx.fillRect(-p.size * 0.15, p.size * 0.4, p.size * 0.3, p.size * 0.2);
        } else if (p.type === 'steam-puff') {
          p.size += (p.growth || 0.18);
          ctx.fillStyle = p.color || 'rgba(255, 255, 255, 0.45)';
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'escarapela') {
          const s = p.size;
          ctx.beginPath();
          ctx.arc(0, 0, s, 0, Math.PI * 2);
          ctx.fillStyle = '#75aadb';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(0, 0, s * 0.65, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(0, 0, s * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = '#75aadb';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(0, 0, s * 0.15, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b';
          ctx.fill();
        } else if (p.type === 'ribbon') {
          ctx.fillStyle = p.color || '#75aadb';
          ctx.fillRect(-p.size / 2, -p.size * 0.25, p.size, p.size * 0.5);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(-p.size / 2, -p.size * 0.08, p.size, p.size * 0.16);
        }
        ctx.restore();
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(runParticleLoop);
      } else {
        animationFrameId = null;
      }
    }

    function addParticles(newP) {
      particles.push(...newP);
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(runParticleLoop);
      }
    }

    // =========================================================
    // INTERACCIONES ESPECÍFICAS DE CADA PLUXEE
    // =========================================================

    // 1. ARPANET: Terminal fósforo verde
    let terminalInterval = null;
    
    let laikaTerminalInterval = null;
    let laikaEcgAnimationId = null;
    let laikaEcgOffset = 0;

    function abrirTerminalLaika() {
      const hud = document.getElementById('laikaTerminal');
      const content = document.getElementById('laikaTerminalContent');
      if (!hud || !content) return;

      hud.classList.add('active');
      content.textContent = '';
      playSound('sputnik-beep');

      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }

      iniciarEcgLaika();

      const lines = [
        '> [02:30:00 UTC] BAIKONUR COSMODROME · LAUNCH SITE 1/5',
        '> VEHICLE: R-7 SEMYORKA (MODIFIED SPUTNIK 8K71PS)',
        '> PAYLOAD: SPUTNIK-2 (СПУТНИК-2) · BIOLOGICAL SATELLITE',
        '> CREW: COSMONAUT LAIKA (Лайка) · 6 KG CANINE PIONEER 🐾',
        '-------------------------------------------------------',
        '> [T+000] MAIN BOOSTER IGNITION. R-7 LIFTOFF CONFIRMED!',
        '> [T+297] PAYLOAD SEPARATION. ENTERING LOW EARTH ORBIT.',
        '> CARRIER DETECTED: 20.005 MHz (RADIO MAYAK BEACON) [LOCKED].',
        '> BIOSENSOR-1 (HEART RATE): 260 BPM (LIFTOFF STRESS PEAK)',
        '> BIOSENSOR-1 IN MICROGRAVITY: NORMALIZING TO 102 BPM.',
        '> RESPIRATION: 4.1 L/MIN · CABIN PRESSURE: 760 mmHg NOMINAL.',
        '> ORBITAL APOGEE: 1,660 KM · PERIGEE: 212 KM · INCLINATION: 65.3°',
        '> CURRENT SPEED: 28,968 KM/H · PERIOD: 103.7 MINUTES',
        '-------------------------------------------------------',
        '> "A DOG LOOKS OUT UPON THE BLUE CURVATURE OF PLANET EARTH."',
        '> FIRST LIVING BEING IN ORBIT AROUND PLANET EARTH. ✨🐾'
      ];

      if (laikaTerminalInterval) clearInterval(laikaTerminalInterval);
      let lineIdx = 0;
      laikaTerminalInterval = setInterval(() => {
        if (lineIdx < lines.length) {
          content.textContent += lines[lineIdx] + '\n';
          content.scrollTop = content.scrollHeight;
          lineIdx++;
        } else {
          clearInterval(laikaTerminalInterval);
        }
      }, 300);
    }
    window.abrirTerminalLaika = abrirTerminalLaika;

    function cerrarTerminalLaika() {
      const hud = document.getElementById('laikaTerminal');
      if (hud) hud.classList.remove('active');
      if (laikaTerminalInterval) clearInterval(laikaTerminalInterval);
      if (laikaEcgAnimationId) cancelAnimationFrame(laikaEcgAnimationId);
    }
    window.cerrarTerminalLaika = cerrarTerminalLaika;

    function iniciarEcgLaika() {
      const canvas = document.getElementById('laikaEcgCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      function renderEcg() {
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Rejilla CRT
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 25) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += 10) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        }

        // Trazado de pulso ECG vivo
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.beginPath();

        const midY = canvas.height / 2;
        for (let x = 0; x < canvas.width; x++) {
          const pos = (x + laikaEcgOffset) % 130;
          let y = midY;
          if (pos > 40 && pos < 46) y = midY - 5;
          else if (pos >= 46 && pos < 50) y = midY + 4;
          else if (pos >= 50 && pos < 55) y = midY - 18;
          else if (pos >= 55 && pos < 60) y = midY + 8;
          else if (pos >= 70 && pos < 80) y = midY - 6;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        laikaEcgOffset += 2.5;
        const hud = document.getElementById('laikaTerminal');
        if (hud && hud.classList.contains('active')) {
          laikaEcgAnimationId = requestAnimationFrame(renderEcg);
        }
      }
      if (laikaEcgAnimationId) cancelAnimationFrame(laikaEcgAnimationId);
      renderEcg();
    }
    window.iniciarEcgLaika = iniciarEcgLaika;

    
    function enviarEstrellasLaika() {
      playSound('minecraft-xp');
      showPluxeeToast('✨ <strong>UNA CARICIA AL COSMOS:</strong> Enviando constelaciones de amor a Laika entre las estrellas.');
      const stars = [];
      for (let i = 0; i < 75; i++) {
        stars.push({
          x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 200,
          y: window.innerHeight * 0.45 + (Math.random() - 0.5) * 150,
          vx: (Math.random() - 0.5) * 12,
          vy: -3 - Math.random() * 8,
          gravity: 0.02,
          size: 6 + Math.random() * 10,
          color: Math.random() > 0.3 ? '#38bdf8' : '#facc15',
          alpha: 1,
          fade: 0.008,
          type: 'star',
          vRot: (Math.random() - 0.5) * 0.2
        });
      }
      addParticles(stars);
    }
    window.enviarEstrellasLaika = enviarEstrellasLaika;

    function sintonizarRadioSputnik() {
      playSound('sputnik-beep');
      const content = document.getElementById('laikaTerminalContent');
      if (content) {
        content.textContent += '\n> [20.005 MHz] BEACON BEEP-BEEP RECEIVED · CARRIER LEVEL: 94%\n';
        content.scrollTop = content.scrollHeight;
      }
      showPluxeeToast('📻 <strong>RADIO MAYAK 20.005 MHz:</strong> Señal de onda corta recibida desde el Sputnik 2.');
    }
    window.sintonizarRadioSputnik = sintonizarRadioSputnik;

    function latidoCardiacoLaika() {
      playSound('laika-heartbeat');
      const bpmEl = document.getElementById('laikaBpmTxt');
      if (bpmEl) {
        bpmEl.textContent = '102 BPM · LATIDO CANINO SINCRONIZADO ❤️';
      }
      const content = document.getElementById('laikaTerminalContent');
      if (content) {
        content.textContent += '\n> [ECG] BIOSENSOR DETECTS NORMAL CANINE RHYTHM (102 BPM).\n';
        content.scrollTop = content.scrollHeight;
      }
      showPluxeeToast('💓 <strong>PULSO BIOMÉTRICO:</strong> 102 BPM. Ritmo cardíaco canino estable en órbita terrestre.');
    }
    window.latidoCardiacoLaika = latidoCardiacoLaika;

    function mensajeHistoricoLaika() {
      const content = document.getElementById('laikaTerminalContent');
      if (content) {
        content.textContent += '\n> =======================================================\n> [HISTORIA] El vuelo de Laika demostró que un ser vivo\n> podía resistir la ingravidez orbital y abrió el camino\n> para todos los viajes espaciales de la humanidad.\n> Honramos su valentía como pionera eterna del cosmos. 🐾✨\n> =======================================================\n';
        content.scrollTop = content.scrollHeight;
      }
      playSound('sputnik-beep');
    }
    window.mensajeHistoricoLaika = mensajeHistoricoLaika;
function abrirTerminalARPANET() {
      const hud = document.getElementById('chronoTerminal');
      const content = document.getElementById('chronoTerminalContent');
      hud.classList.add('active');
      content.textContent = '';
      playSound('modem-beep');

      const lines = [
        '> INITIALIZING IMP INTERFACE #1 (UCLA, BOELTER HALL 3404)...',
        '> CARRIER DETECTED: 50 KBPS DEDICATED AT&T TELEPHONE LINE.',
        '> CONNECTING TO STANFORD RESEARCH INSTITUTE (SRI)... OK.',
        '> OPERATOR: CHARLEY KLINE (UCLA) -> BILL DUVALL (SRI).',
        '> TRANSMITTING: "L"... [ACK RECEIVED]',
        '> TRANSMITTING: "O"... [ACK RECEIVED]',
        '> TRANSMITTING: "G"... [SYSTEM EXCEPTION: MEMORY CRASH AT SRI]',
        '-------------------------------------------------------',
        '> RESULT: THE FIRST EVER INTERNET PACKET WAS: "LO"',
        '> (THE SPARK OF THE GLOBAL WORLD WIDE WEB)'
      ];

      if (terminalInterval) clearInterval(terminalInterval);
      let lineIdx = 0;
      terminalInterval = setInterval(() => {
        if (lineIdx < lines.length) {
          content.textContent += lines[lineIdx] + '\n';
          lineIdx++;
        } else {
          clearInterval(terminalInterval);
        }
      }, 350);
    }

    function cerrarTerminalARPANET() {
      const hud = document.getElementById('chronoTerminal');
      hud.classList.remove('active');
      if (terminalInterval) clearInterval(terminalInterval);
    }

    // 2. BILL GATES: Ventana Windows 95, Clippy y BSOD
    function abrirWin95() {
      playSound('win95');
      document.body.classList.add('gates-party-active');
      document.getElementById('win95Window').classList.add('active');
      showPluxeeToast('🎂 <strong>Asistente de Windows 95 abierto:</strong> ¡Celebrando a Bill Gates!');
    }

    function cerrarWin95() {
      document.getElementById('win95Window').classList.remove('active');
    }

    function cantarCumpleBill() {
      playSound('happy-birthday');
      const colors = ['#0284c7', '#34d399', '#ef4444', '#f59e0b', '#f43f5e', '#a855f7', '#ffffff'];
      const conf = [];
      for (let i = 0; i < 75; i++) {
        conf.push({
          x: Math.random() * window.innerWidth,
          y: -20,
          vx: (Math.random() - 0.5) * 7,
          vy: 2 + Math.random() * 6,
          gravity: 0.12,
          size: 8 + Math.random() * 9,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          fade: 0.007,
          type: 'rect',
          vRot: (Math.random() - 0.5) * 0.1
        });
      }
      addParticles(conf);
      showPluxeeToast('🎂 <strong>¡FELIZ CUMPLEAÑOS BILL GATES!</strong> 🎶 Sonando en chiptune 8-bit');
    }

    function instalarWin95() {
      playSound('modem-beep');
      showPluxeeToast('💾 <em>Copiando SYSTEM.INI y preparando el escritorio de Windows 95...</em>', 2000);
      setTimeout(() => {
        playSound('win95');
        showPluxeeToast('✅ <strong>¡Windows 95 instalado exitosamente en Plux!</strong>');
      }, 2200);
    }

    function pantallaAzulMuerte() {
      playSound('sonic-boom');
      document.getElementById('win95Bsod').classList.add('active');
      setTimeout(() => {
        cerrarBsod();
      }, 4500);
    }

    function cerrarBsod() {
      document.getElementById('win95Bsod').classList.remove('active');
      playSound('win95');
      showPluxeeToast('🖥️ <strong>Sistema reiniciado:</strong> Bienvenido nuevamente a Plux.');
    }

    // 3. MINECRAFT: Hotbar interactiva y sonidos
    function selectHotbarSlot(num) {
      document.querySelectorAll('.mc-slot').forEach(s => s.classList.remove('active'));
      const target = document.querySelector(`.mc-slot[data-slot="${num}"]`);
      if (target) target.classList.add('active');

      if (num === 1) {
        playSound('minecraft-block');
        showPluxeeToast('⛏️ <strong>Pico de Diamante:</strong> Listo para picar bloques en el mapa.');
      } else if (num === 2) {
        playSound('minecraft-eat');
        showPluxeeToast('🍎 <strong>¡Has comido una Manzana Dorada!</strong> Absorción y Regeneración II.');
      } else if (num === 3) {
        playSound('minecraft-block');
        showPluxeeToast('⚔️ <strong>Espada de Netherite:</strong> Filo V · ¡Listo para la aventura!');
      } else if (num === 4) {
        playSound('minecraft-block');
        showPluxeeToast('🧱 <strong>Bloque de Césped:</strong> Colocado en tus coordenadas de viaje.');
      } else if (num === 5) {
        playSound('minecraft-tnt');
        showPluxeeToast('🧨 <strong>¡CREEPER ACERCÁNDOSE!</strong> Sssssssss... ¡BOOM!', 2500);
      } else if (num === 6) {
        playSound('minecraft-teleport');
        showPluxeeToast('🔮 <strong>¡Ender Pearl lanzada!</strong> Teletransportado a tu próximo destino.');
      } else if (num === 7) {
        playSound('minecraft-eat');
        showPluxeeToast('🍞 <strong>Pan recién horneado:</strong> Hambre restaurada.');
      } else if (num === 8) {
        playSound('minecraft-block');
        showPluxeeToast('🕯️ <strong>Antorcha:</strong> Iluminando las cuevas de tu itinerario.');
      } else if (num === 9) {
        playSound('coin');
        showPluxeeToast('🗺️ <strong>Mapa de Plux:</strong> Explora más de 500 destinos en el mundo.');
      }
    }

    // Teclas 1-9 para cambiar slot de Minecraft
    document.addEventListener('keydown', (e) => {
      if (document.body.classList.contains('minecraft-mode')) {
        const key = parseInt(e.key);
        if (key >= 1 && key <= 9) {
          selectHotbarSlot(key);
        }
      }
    });

    // Clic sobre cualquier botón en modo Minecraft
    document.addEventListener('click', (e) => {
      if (document.body.classList.contains('minecraft-mode')) {
        if (e.target.closest('.main-btn') || e.target.closest('.inspo-card') || e.target.closest('.doodle-art-seamless')) {
          playSound('minecraft-block');
          // Pequeñas partículas de tierra/piedra pixelada
          const p = [];
          for (let i = 0; i < 12; i++) {
            p.push({
              x: e.clientX,
              y: e.clientY,
              vx: (Math.random() - 0.5) * 6,
              vy: -2 - Math.random() * 4,
              gravity: 0.25,
              size: 5 + Math.random() * 5,
              color: Math.random() > 0.5 ? '#5b8e31' : '#866043',
              alpha: 1,
              fade: 0.02,
              type: 'pixel-dirt'
            });
          }
          addParticles(p);
        }
      }
    });

    // =========================================================
    // MARK TWAIN: MÁQUINA DE ESCRIBIR
    // =========================================================
    const citasTwain = [
      '"Viajar es fatal para los prejuicios, la intolerancia y la estrechez de miras."',
      '"Dentro de veinte años estarás más decepcionado por las cosas que no hiciste que por las que hiciste."',
      '"Suelta las amarras, navega lejos del puerto seguro. Atrapa los vientos alisios en tus velas. Explora. Sueña. Descubre."',
      '"El secreto de avanzar es comenzar."',
      '"El coraje es la resistencia al miedo, el dominio del miedo, no la ausencia del miedo."'
    ];
    let citaTwainIdx = 0;
    function nuevaCitaTwain() {
      citaTwainIdx = (citaTwainIdx + 1) % citasTwain.length;
      const el = document.getElementById('twainPaperSheet');
      if (el) el.textContent = citasTwain[citaTwainIdx];
      playSound('typewriter-bell');
      showPluxeeToast('✒️ <strong>MARK TWAIN:</strong> ' + citasTwain[citaTwainIdx]);
    }
    window.nuevaCitaTwain = nuevaCitaTwain;

    function tipearLetraTwain(char) {
      const el = document.getElementById('twainPaperSheet');
      if (el) {
        el.textContent += char;
        el.scrollTop = el.scrollHeight;
      }
      playSound('typewriter-bell');
    }
    window.tipearLetraTwain = tipearLetraTwain;

    // =========================================================
    // ACCIONES Y MODALES DE CADA PLUXEE
    // =========================================================

    // --- 1. DÍA DE MUERTOS & TODOS LOS SANTOS (1 NOV) ---
    function abrirModalMuertos() {
      const data = PLUXEES['muertos'];
      if (data) {
        document.getElementById('modalTag').textContent = data.modalTag;
        document.getElementById('modalTitle').textContent = data.modalTitle;
        document.getElementById('modalBody').innerHTML = data.modalBody;
        document.getElementById('doodleModal').classList.add('active');
      }
      dispararDiaMuertos();
    }
    window.abrirModalMuertos = abrirModalMuertos;

    function dispararDiaMuertos() {
      playSound('mexican-guitar');
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const colors = ['#f59e0b', '#f97316', '#fbbf24', '#e11d48', '#a855f7', '#34d399', '#fde047'];
      const petals = [];
      for (let i = 0; i < 95; i++) {
        petals.push({
          x: Math.random() * window.innerWidth,
          y: -30,
          vx: (Math.random() - 0.5) * 7,
          vy: 2 + Math.random() * 5,
          gravity: 0.05,
          size: 10 + Math.random() * 14,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          fade: 0.005,
          type: 'cempasuchil',
          vRot: (Math.random() - 0.5) * 0.12
        });
      }
      addParticles(petals);
      showPluxeeToast('🕯️ <strong>OFRENDA ENCENDIDA:</strong> Flores de cempasúchil iluminando el camino del recuerdo.');
    }
    window.dispararDiaMuertos = dispararDiaMuertos;

    // --- 2. LAIKA SPUTNIK 2 (3 NOV) ---
    function abrirModalLaika() {
      const data = PLUXEES['laika'];
      if (data) {
        document.getElementById('modalTag').textContent = data.modalTag;
        document.getElementById('modalTitle').textContent = data.modalTitle;
        document.getElementById('modalBody').innerHTML = data.modalBody;
        document.getElementById('doodleModal').classList.add('active');
      }
      playSound('sputnik-beep');
    }
    window.abrirModalLaika = abrirModalLaika;

    function emitirBeepSputnik() {
      playSound('sputnik-beep');
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const stars = [];
      for (let i = 0; i < 50; i++) {
        stars.push({
          x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 300,
          y: window.innerHeight * 0.45 + (Math.random() - 0.5) * 200,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          size: 5 + Math.random() * 8,
          color: Math.random() > 0.4 ? '#38bdf8' : '#facc15',
          alpha: 1,
          fade: 0.012,
          type: 'star',
          vRot: 0.08
        });
      }
      addParticles(stars);
      showPluxeeToast('📻 <strong>SPUTNIK 2:</strong> Señal de radio transmitida a 20.005 MHz · "BEEP... BEEP... BEEP..." 🐾');
    }
    window.emitirBeepSputnik = emitirBeepSputnik;

    function dispararOrbitaLaika() {
      playSound('sputnik-beep');
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const stars = [];
      for (let i = 0; i < 90; i++) {
        stars.push({
          x: window.innerWidth * 0.3 + Math.random() * (window.innerWidth * 0.4),
          y: window.innerHeight * 0.4 + (Math.random() - 0.5) * 160,
          vx: (Math.random() - 0.5) * 12,
          vy: (Math.random() - 0.5) * 12,
          size: 6 + Math.random() * 8,
          color: Math.random() > 0.4 ? '#38bdf8' : (Math.random() > 0.5 ? '#facc15' : '#ffffff'),
          alpha: 1,
          fade: 0.008,
          type: 'star',
          vRot: (Math.random() - 0.5) * 0.1
        });
      }
      addParticles(stars);
      showPluxeeToast('🛰️ <strong>SPUTNIK 2 EN ÓRBITA TERRESTRE:</strong> Señal transmitiendo a 28.965 km/h · Honor a Laika 🐾✨');
    }
    window.dispararOrbitaLaika = dispararOrbitaLaika;

    // --- 3. DÍA DE LA TRADICIÓN ARGENTINA (10 NOV 🇦🇷) ---
    let matesCebadosEnRonda = 0;
    let versoTradicionIdx = 0;
    const versosTradicion = [
      { verso: 'Los hermanos sean unidos porque ésa es la ley primera; tengan unión verdadera en cualquier tiempo que sea, porque si entre ellos pelean los devoran los de ajuera.', autor: 'José Hernández · Martín Fierro' },
      { verso: 'Aquí me pongo a cantar al compás de la vigüela, que el hombre que lo desvela una pena estraordinaria, como la ave solitaria con el cantar se consuela.', autor: 'José Hernández · Martín Fierro' },
      { verso: 'Un padre que da consejos más que padre es un amigo; ansí como tal les digo que vivan con precaución: naide sabe en qué rincón se oculta el que es su enemigo.', autor: 'José Hernández · Martín Fierro' },
      { verso: 'Muchas cosas pierde el hombre que a veces las vuelve a hallar; pero les debo enseñar, y es güeno que lo recuerden: si la vergüenza se pierde, jamás se vuelve a encontrar.', autor: 'José Hernández · Martín Fierro' },
      { verso: 'El mate es la única cosa que en este bendito suelo se comparte sin recelo, de la choza al caserón, ablandando el corazón bajo la luz de este cielo.', autor: 'Sabiduría Gaucha Pampeana' }
    ];
    let reglaTradicionIdx = 0;
    const reglasGauchasArray = [
      { titulo: '🚨 LEY GAUCHA N°1: ¡LA BOMBILLA NO SE TOCA!', desc: 'Mover la bombilla es pecado federal: se desacomoda la yerba, se tapa el mate y ofendés al cebador.' },
      { titulo: '🙏 LEY GAUCHA N°2: ¡NO DIGAS "GRACIAS" ANTES DE TIEMPO!', desc: 'En Argentina, decir "gracias" al recibir el mate significa que NO querés tomar más en la ronda.' },
      { titulo: '🧉 LEY GAUCHA N°3: AGUA A 80°C EXACTOS', desc: 'Si el agua hierve, quemaste la yerba, el mate se lava al primer sorbo y te retiran el carnet de gaucho.' },
      { titulo: '⏱️ LEY GAUCHA N°4: EL MATE NO ES UN MICRÓFONO', desc: 'Tomalo y devolvelo al cebador; retener el mate para contar una historia larga congela la ronda.' }
    ];

    function abrirModalTradicion() {
      const data = PLUXEES['tradicion'];
      if (data) {
        document.getElementById('modalTag').textContent = data.modalTag;
        document.getElementById('modalTitle').textContent = data.modalTitle;
        document.getElementById('modalBody').innerHTML = data.modalBody;
        document.getElementById('doodleModal').classList.add('active');
      }
      playSound('guitar-strum');
    }
    window.abrirModalTradicion = abrirModalTradicion;

    function cebarMateTradicion() {
      matesCebadosEnRonda++;
      
      try {
        const ctx = initAudio();
        const now = ctx.currentTime;
        const buf = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.3));
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const flt = ctx.createBiquadFilter();
        flt.type = 'bandpass';
        flt.frequency.setValueAtTime(650, now);
        flt.Q.setValueAtTime(2.5, now);
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.4, now);
        g.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        src.connect(flt);
        flt.connect(g);
        g.connect(masterCompressor);
        src.start(now);
        
        setTimeout(() => {
          if (!audioEnabled) return;
          const ctx2 = initAudio();
          const n2 = ctx2.currentTime;
          [0, 0.08, 0.17, 0.26].forEach((dt, i) => {
            const osc = ctx2.createOscillator();
            const g2 = ctx2.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180 + i * 80, n2 + dt);
            osc.frequency.exponentialRampToValueAtTime(45, n2 + dt + 0.14);
            g2.gain.setValueAtTime(0.7, n2 + dt);
            g2.gain.exponentialRampToValueAtTime(0.001, n2 + dt + 0.14);
            osc.connect(g2);
            g2.connect(masterCompressor);
            osc.start(n2 + dt);
            osc.stop(n2 + dt + 0.14);
          });
          setTimeout(() => {
            playSound('guitar-strum');
          }, 350);
        }, 350);
      } catch(e) {}

      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }

      const mateParticles = [];
      for (let i = 0; i < 30; i++) {
        mateParticles.push({
          x: window.innerWidth * 0.28 + (Math.random() - 0.5) * 60,
          y: window.innerHeight * 0.42,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -2 - Math.random() * 2.5,
          size: 14 + Math.random() * 16,
          growth: 0.35,
          color: 'rgba(240, 248, 255, 0.5)',
          alpha: 0.9,
          fade: 0.012,
          type: 'steam-puff'
        });
      }
      for (let i = 0; i < 45; i++) {
        mateParticles.push({
          x: window.innerWidth * 0.3 + (Math.random() - 0.5) * 350,
          y: window.innerHeight * 0.45 + (Math.random() - 0.5) * 200,
          vx: (Math.random() - 0.5) * 9,
          vy: -2 - Math.random() * 6,
          gravity: 0.08,
          size: 12 + Math.random() * 12,
          color: Math.random() > 0.5 ? '#75aadb' : '#ffffff',
          alpha: 1,
          fade: 0.009,
          type: Math.random() > 0.4 ? 'escarapela' : 'ribbon',
          vRot: (Math.random() - 0.5) * 0.1
        });
      }
      for (let i = 0; i < 35; i++) {
        mateParticles.push({
          x: window.innerWidth * 0.3 + (Math.random() - 0.5) * 350,
          y: window.innerHeight * 0.45 + (Math.random() - 0.5) * 200,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: 8 + Math.random() * 10,
          color: '#f6b40e',
          alpha: 1,
          fade: 0.01,
          type: 'star',
          vRot: 0.05
        });
      }
      addParticles(mateParticles);

      const item = versosTradicion[versoTradicionIdx % versosTradicion.length];
      versoTradicionIdx++;
      mostrarBannerTradicion(`
        <div style="font-size:11px; letter-spacing:1.5px; color:#f6b40e; text-transform:uppercase; margin-bottom:4px;">
          🇦🇷 DÍA DE LA TRADICIÓN · RONDA DE MATE #${matesCebadosEnRonda} 🧉
        </div>
        <div style="font-size:14px; font-style:italic; color:#ffffff; line-height:1.45; margin-bottom:6px;">
          "${item.verso}"
        </div>
        <div style="font-size:11px; color:#75aadb; font-weight:700;">
          — ${item.autor}
        </div>
      `, 6000);

      showPluxeeToast(`🧉 <strong>¡CHRRRRRR!</strong> Mate criollo cebado · Ronda #${matesCebadosEnRonda} compartida.`);
    }
    window.cebarMateTradicion = cebarMateTradicion;

    function tocarGuitarraTradicion() {
      playSound('guitar-strum');
      const stars = [];
      for (let i = 0; i < 35; i++) {
        stars.push({
          x: window.innerWidth * 0.3 + (Math.random() - 0.5) * 250,
          y: window.innerHeight * 0.45 + (Math.random() - 0.5) * 150,
          vx: (Math.random() - 0.5) * 7,
          vy: -2 - Math.random() * 4,
          size: 8 + Math.random() * 8,
          color: '#f6b40e',
          alpha: 1,
          fade: 0.012,
          type: 'star'
        });
      }
      addParticles(stars);
      const item = versosTradicion[versoTradicionIdx % versosTradicion.length];
      versoTradicionIdx++;
      mostrarBannerTradicion(`
        <div style="font-size:11px; color:#f6b40e; letter-spacing:1px; margin-bottom:4px;">🎸 PUNTEO DE VIGÜELA PAMPEANA</div>
        <div style="font-size:13.5px; font-style:italic; color:#ffffff;">"${item.verso}"</div>
      `, 5000);
    }
    window.tocarGuitarraTradicion = tocarGuitarraTradicion;

    function siguienteSabiduriaTradicion() {
      reglaTradicionIdx++;
      const r = reglasGauchasArray[reglaTradicionIdx % reglasGauchasArray.length];
      const box = document.getElementById('tradicionWisdomBox');
      if (box) {
        box.innerHTML = `<strong>${r.titulo}</strong><p>${r.desc}</p>`;
      }
      playSound('coin');
    }
    window.siguienteSabiduriaTradicion = siguienteSabiduriaTradicion;

    // --- 4. PHILAE & COMETA 67P (12 NOV) ---
    function dispararPhilae() {
      playSound('comet-ping');
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const dust = [];
      for (let i = 0; i < 80; i++) {
        dust.push({
          x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 260,
          y: window.innerHeight * 0.5 + (Math.random() - 0.5) * 200,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          size: 4 + Math.random() * 8,
          color: Math.random() > 0.3 ? '#67e8f9' : '#ffffff',
          alpha: 1,
          fade: 0.012,
          type: 'star'
        });
      }
      addParticles(dust);
      showPluxeeToast('☄️ <strong>CONTACTO CONFIRMADO:</strong> Philae anclada en el cometa 67P a 510 millones de km de casa.');
    }
    window.dispararPhilae = dispararPhilae;

    // --- 5. NELLIE BLY (14 NOV) ---
    function dispararNellieBly() {
      playSound('steam-train');
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const steam = [];
      for (let i = 0; i < 55; i++) {
        steam.push({
          x: window.innerWidth * 0.28 + (Math.random() - 0.5) * 100,
          y: window.innerHeight * 0.55 + (Math.random() - 0.5) * 60,
          vx: (Math.random() - 0.5) * 4,
          vy: -2 - Math.random() * 3.5,
          size: 14 + Math.random() * 18,
          growth: 0.38,
          color: 'rgba(255, 255, 255, 0.45)',
          alpha: 0.9,
          fade: 0.01,
          type: 'steam-puff'
        });
      }
      for (let i = 0; i < 40; i++) {
        steam.push({
          x: window.innerWidth * 0.3 + (Math.random() - 0.5) * 250,
          y: window.innerHeight * 0.55,
          vx: (Math.random() - 0.5) * 8,
          vy: -3 - Math.random() * 5,
          gravity: 0.1,
          size: 6 + Math.random() * 6,
          color: '#f59e0b',
          alpha: 1,
          fade: 0.012,
          type: 'gold-coin'
        });
      }
      addParticles(steam);
      showPluxeeToast('🚂 <strong>¡TODOS A BORDO!</strong> · Nellie Bly rompe el récord mundial: ¡Vuelta al mundo en 72 días!');
    }
    window.dispararNellieBly = dispararNellieBly;

    // --- 6. PATRIMONIO MUNDIAL UNESCO (16 NOV) ---
    function abrirModalPatrimonio() {
      const data = PLUXEES['patrimonio'];
      if (data) {
        document.getElementById('modalTag').textContent = data.modalTag;
        document.getElementById('modalTitle').textContent = data.modalTitle;
        document.getElementById('modalBody').innerHTML = data.modalBody;
        document.getElementById('doodleModal').classList.add('active');
      }
      dispararPatrimonioUNESCO();
    }
    window.abrirModalPatrimonio = abrirModalPatrimonio;

    function dispararPatrimonioUNESCO() {
      playSound('unesco-bell');
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const goldAura = [];
      for (let i = 0; i < 50; i++) {
        goldAura.push({
          x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 400,
          y: window.innerHeight * 0.45 + (Math.random() - 0.5) * 220,
          vx: (Math.random() - 0.5) * 6,
          vy: -2 - Math.random() * 4,
          size: 8 + Math.random() * 8,
          color: '#fbbf24',
          alpha: 1,
          fade: 0.008,
          type: 'gold-coin'
        });
      }
      for (let i = 0; i < 40; i++) {
        goldAura.push({
          x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 400,
          y: window.innerHeight * 0.45 + (Math.random() - 0.5) * 220,
          vx: (Math.random() - 0.5) * 5,
          vy: -1 - Math.random() * 3,
          size: 8 + Math.random() * 8,
          color: Math.random() > 0.5 ? '#34d399' : '#38bdf8',
          alpha: 1,
          fade: 0.008,
          type: 'star'
        });
      }
      addParticles(goldAura);
      showPluxeeToast('🏛️ <strong>PATRIMONIO MUNDIAL UNESCO:</strong> Preservando 1.199 tesoros culturales y naturales de la Tierra.');
    }
    window.dispararPatrimonioUNESCO = dispararPatrimonioUNESCO;

    // --- 7. ESTACIÓN ESPACIAL INTERNACIONAL (20 NOV) ---
    function dispararISS() {
      playSound('iss-orbit');
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const aurora = [];
      const colors = ['#10b981', '#06b6d4', '#38bdf8', '#818cf8', '#facc15'];
      for (let i = 0; i < 85; i++) {
        aurora.push({
          x: Math.random() * window.innerWidth,
          y: window.innerHeight * 0.35 + (Math.random() - 0.5) * 160,
          vx: 3 + Math.random() * 5,
          vy: (Math.random() - 0.5) * 2,
          size: 6 + Math.random() * 8,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          fade: 0.008,
          type: 'star'
        });
      }
      addParticles(aurora);
      showPluxeeToast('🛰️ <strong>ISS ORBITANDO A 400 KM:</strong> 16 amaneceres diarios sobre nuestro hogar común.');
    }
    window.dispararISS = dispararISS;

    // --- 8. HERMANOS MONTGOLFIER (21 NOV) ---
    function abrirModalMontgolfier() {
      const data = PLUXEES['montgolfier'];
      if (data) {
        document.getElementById('modalTag').textContent = data.modalTag;
        document.getElementById('modalTitle').textContent = data.modalTitle;
        document.getElementById('modalBody').innerHTML = data.modalBody;
        document.getElementById('doodleModal').classList.add('active');
      }
      dispararMontgolfier();
    }
    window.abrirModalMontgolfier = abrirModalMontgolfier;

    function dispararMontgolfier() {
      playSound('burner-whoosh');
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const balloons = [];
      const bColors = ['#f43f5e', '#3b82f6', '#eab308', '#10b981', '#a855f7'];
      for (let i = 0; i < 50; i++) {
        balloons.push({
          x: window.innerWidth * 0.15 + Math.random() * (window.innerWidth * 0.7),
          y: window.innerHeight + 30,
          vx: (Math.random() - 0.5) * 2.5,
          vy: -2.5 - Math.random() * 4,
          size: 16 + Math.random() * 14,
          color: bColors[Math.floor(Math.random() * bColors.length)],
          alpha: 1,
          fade: 0.005,
          type: 'balloon'
        });
      }
      addParticles(balloons);
      showPluxeeToast('🎈 <strong>¡DESPEGUE CONFIRMADO!</strong> París 1783 · Primer vuelo humano de la historia a 900 metros.');
    }
    window.dispararMontgolfier = dispararMontgolfier;

    // --- 9. ROVER CURIOSITY EN MARTE (26 NOV) ---
    function abrirModalCuriosity() {
      const data = PLUXEES['curiosity'];
      if (data) {
        document.getElementById('modalTag').textContent = data.modalTag;
        document.getElementById('modalTitle').textContent = data.modalTitle;
        document.getElementById('modalBody').innerHTML = data.modalBody;
        document.getElementById('doodleModal').classList.add('active');
      }
      dispararCuriosity();
    }
    window.abrirModalCuriosity = abrirModalCuriosity;

    function dispararCuriosity() {
      playSound('laser-zap');
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const redDust = [];
      for (let i = 0; i < 75; i++) {
        redDust.push({
          x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 220,
          y: window.innerHeight * 0.5 + (Math.random() - 0.5) * 200,
          vx: (Math.random() - 0.5) * 11,
          vy: (Math.random() - 0.5) * 11,
          size: 5 + Math.random() * 7,
          color: Math.random() > 0.4 ? '#ef4444' : '#f59e0b',
          alpha: 1,
          fade: 0.015,
          type: 'star'
        });
      }
      addParticles(redDust);
      showPluxeeToast('🔴 <strong>LÁSER CHEMCAM DISPARADO:</strong> Roca marciana analizada · Depósito de agua dulce fósil en Marte.');
    }
    window.dispararCuriosity = dispararCuriosity;

    // --- 10. MAGALLANES EN EL PACÍFICO (27 NOV) ---
    function dispararMagallanes() {
      playSound('ocean-waves');
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const waves = [];
      for (let i = 0; i < 75; i++) {
        waves.push({
          x: Math.random() * window.innerWidth,
          y: window.innerHeight * 0.7 + (Math.random() - 0.5) * 80,
          vx: (Math.random() - 0.5) * 5,
          vy: -2 - Math.random() * 4,
          size: 8 + Math.random() * 14,
          color: '#38bdf8',
          alpha: 0.9,
          fade: 0.009,
          type: 'bubble'
        });
      }
      addParticles(waves);
      showPluxeeToast('🧭 <strong>¡TIERRA AL PACÍFICO!</strong> · Estrecho superado · Primer navío en conectar el Atlántico y el Pacífico.');
    }
    window.dispararMagallanes = dispararMagallanes;

    // --- 11. MARK TWAIN (30 NOV) ---
    function dispararTwain() {
      nuevaCitaTwain();
      const shock = document.getElementById('chronoShockwave');
      if (shock) {
        shock.classList.remove('active');
        void shock.offsetWidth;
        shock.classList.add('active');
        setTimeout(() => shock.classList.remove('active'), 800);
      }
      const inkStars = [];
      for (let i = 0; i < 60; i++) {
        inkStars.push({
          x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 350,
          y: window.innerHeight * 0.45 + (Math.random() - 0.5) * 200,
          vx: (Math.random() - 0.5) * 6,
          vy: -1 - Math.random() * 4,
          size: 6 + Math.random() * 8,
          color: '#fbbf24',
          alpha: 1,
          fade: 0.01,
          type: 'star'
        });
      }
      addParticles(inkStars);
    }
    window.dispararTwain = dispararTwain;

    let tradBannerTimer = null;
    function mostrarBannerTradicion(html, duration = 3500) {
      const b = document.getElementById('tradicionActionBanner');
      if (!b) return;
      b.innerHTML = html;
      b.classList.add('active');
      if (tradBannerTimer) clearTimeout(tradBannerTimer);
      tradBannerTimer = setTimeout(() => b.classList.remove('active'), duration);
    }
    window.mostrarBannerTradicion = mostrarBannerTradicion;

    // =========================================================
    // CATÁLOGO DE PLUXEES (EFEMÉRIDES EXCLUSIVAS)
    // =========================================================
    const PLUXEES = {
      concorde: {
        img: 'static/doodles/concorde.jpg',
        dateText: '✈️ 24 DE OCTUBRE',
        title: 'Último Vuelo del Concorde',
        desc: 'En 2003 concluyó la era comercial supersónica: Londres a Nueva York en solo 3 horas y media.',
        btnText: '✈️ Barrera Mach 2',
        signatureSound: 'sonic-boom',
        modalTag: 'Pluxee de Historia de la Aviación',
        modalTitle: 'El Retiro del Rey Supersónico (2003)',
        modalBody: `
          <p>El <strong>24 de octubre de 2003</strong>, el vuelo BA002 de British Airways aterrizó en Londres Heathrow proveniente de Nueva York (JFK), marcando el último servicio comercial de pasajeros del mítico <strong>Concorde</strong>.</p>
          <p>Capaz de volar a más de <strong>2.180 km/h</strong> en el borde del espacio (60.000 pies), permitía ver la curvatura de la Tierra y cruzar el Atlántico en la mitad de tiempo que cualquier avión actual.</p>
          <p><em>En Plux celebramos la audacia, velocidad y diseño que revolucionaron los viajes para siempre.</em></p>
        `,
        action: () => {
          playSound('sonic-boom');
          const shock = document.getElementById('chronoShockwave');
          shock.classList.remove('active');
          void shock.offsetWidth;
          shock.classList.add('active');
          setTimeout(() => shock.classList.remove('active'), 1300);
          showPluxeeToast('✈️ <strong>MACH 2.04 ALCANZADO</strong> · Cruzando el Atlántico a 2.180 km/h');
        }
      },

      bttf: {
        img: 'static/doodles/bttf.jpg',
        dateText: '⚡ 21 DE OCTUBRE',
        title: 'Back to the Future Day',
        desc: 'Marty y el Doc viajan en el tiempo en el DeLorean. El viaje temporal más icónico del cine.',
        btnText: '⚡ 88 MPH',
        signatureSound: 'sonic-boom',
        modalTag: 'Pluxee de Cultura Pop',
        modalTitle: 'El Día del Futuro: 21 de Octubre de 2015',
        modalBody: `
          <p>El <strong>21 de octubre de 2015 a las 04:29 PM</strong> es la fecha exacta a la que viajan Marty McFly y el Doc Brown en <em>Volver al Futuro II (1989)</em>.</p>
          <p>Ese día el mundo entero celebró la llegada de la fecha soñada en la gran pantalla, rindiendo homenaje al ingenio de la ciencia ficción y la pasión por los viajes que trascienden el tiempo.</p>
          <p><em>En Plux compartimos la emoción de explorar horizontes que hoy parecen imposibles.</em></p>
        `,
        action: () => {
          playSound('sonic-boom');
          const tracks = document.getElementById('chronoFireTracks');
          tracks.classList.remove('active');
          void tracks.offsetWidth;
          tracks.classList.add('active');
          setTimeout(() => tracks.classList.remove('active'), 3000);
          showPluxeeToast('⚡ <strong>DESTINO TEMPORAL:</strong> 21 DE OCTUBRE DE 2015 · 04:29 PM (88 MPH)');
        }
      },

      madre: {
        img: 'static/doodles/madre.jpg',
        dateText: '🌸 18 DE OCTUBRE',
        title: 'Día de la Madre (Argentina)',
        desc: 'Celebración familiar de amor infinito y reencuentro que une a viajeros de todo el país.',
        btnText: '🌸 Dedicar Amor',
        signatureSound: 'harp',
        modalTag: 'Pluxee Familiar y Tradición',
        modalTitle: 'Día de la Madre en Argentina',
        modalBody: `
          <p>El <strong>Día de la Madre</strong> se celebra en Argentina cada tercer domingo de octubre, siendo uno de los momentos más esperados del año para regresar al hogar, compartir mesa y celebrar la vida.</p>
          <p><em>En Plux celebramos el amor incondicional de las madres que con su apoyo nos impulsan a emprender nuestros grandes viajes.</em></p>
        `,
        action: () => {
          playSound('harp');
          const colors = ['#f472b6', '#fb7185', '#fda4af', '#fbcfe8', '#e879f9'];
          const hearts = [];
          for (let i = 0; i < 45; i++) {
            hearts.push({
              x: window.innerWidth * 0.15 + Math.random() * (window.innerWidth * 0.7),
              y: window.innerHeight * 0.75,
              vx: (Math.random() - 0.5) * 3,
              vy: -2 - Math.random() * 4.5,
              size: 14 + Math.random() * 18,
              color: colors[Math.floor(Math.random() * colors.length)],
              alpha: 1,
              fade: 0.009,
              type: 'heart',
              vRot: (Math.random() - 0.5) * 0.04
            });
          }
          addParticles(hearts);
          showPluxeeToast('🌸 <strong>¡Feliz Día de la Madre!</strong> · El mejor destino es siempre el hogar');
        }
      },

      arpanet: {
        img: 'static/doodles/arpanet.jpg',
        dateText: '🌐 29 DE OCTUBRE',
        title: 'Nacimiento de Internet',
        desc: 'El primer mensaje enviado por ARPANET entre UCLA y Stanford: la histórica palabra "LO".',
        btnText: '📟 Abrir Terminal',
        signatureSound: 'modem-beep',
        modalTag: 'Pluxee de Historia Tecnológica',
        modalTitle: 'El Primer Mensaje de ARPANET: "LO" (1969)',
        modalBody: `
          <p>El <strong>29 de octubre de 1969 a las 22:30 hs</strong>, Charley Kline intentó transmitir la palabra <strong>"LOGIN"</strong> entre UCLA y Stanford. La red procesó la 'L' y la 'O', y luego colapsó.</p>
          <p>Ese envío accidental de <strong>"LO"</strong> encendió la chispa de la red de redes que hoy conecta a la humanidad entera y hace posible la colaboración en tiempo real.</p>
        `,
        action: () => {
          abrirTerminalARPANET();
        }
      },

      bitcoin: {
        img: 'static/doodles/bitcoin.jpg',
        dateText: '₿ 31 DE OCTUBRE',
        title: 'Whitepaper de Bitcoin',
        desc: 'Satoshi Nakamoto publica el paper que dio origen al dinero digital y a la tecnología blockchain.',
        btnText: '⛓️ Minar Bloque #0',
        signatureSound: 'coin',
        modalTag: 'Pluxee de Finanzas y Criptografía',
        modalTitle: 'Publicación del Whitepaper de Bitcoin (2008)',
        modalBody: `
          <p>El <strong>31 de octubre de 2008</strong> se publicó el histórico documento <em>"Bitcoin: A Peer-to-Peer Electronic Cash System"</em> bajo el seudónimo de Satoshi Nakamoto.</p>
          <p>Un sistema sin intermediarios centralizados que transformó radicalmente la soberanía financiera mundial y la forma en que los viajeros gestionan divisas en cualquier rincón del planeta.</p>
        `,
        action: () => {
          playSound('coin');
          const gold = [];
          for (let i = 0; i < 40; i++) {
            gold.push({
              x: window.innerWidth * 0.2 + Math.random() * (window.innerWidth * 0.5),
              y: window.innerHeight * 0.35,
              vx: (Math.random() - 0.5) * 8,
              vy: -2 - Math.random() * 5,
              gravity: 0.18,
              size: 5 + Math.random() * 6,
              alpha: 1,
              fade: 0.014,
              type: 'gold-coin'
            });
          }
          addParticles(gold);
          showPluxeeToast('₿ <strong>BLOQUE GÉNESIS #0 MINADO</strong> · Recompensa: 50 BTC · SHA-256 Verificado');
        }
      },

      minecraft: {
        img: 'static/doodles/minecraft.jpg',
        dateText: '⛏️ 18 DE NOVIEMBRE',
        title: 'Lanzamiento de Minecraft 1.0',
        desc: 'El videojuego más vendido de la historia sale oficialmente de Beta durante la primera MineCon.',
        btnText: '⛏️ Activar Modo Voxel',
        signatureSound: 'minecraft-xp',
        modalTag: 'Pluxee de Gaming y Creatividad',
        modalTitle: 'Lanzamiento Oficial de Minecraft 1.0 (2011)',
        modalBody: `
          <p>El <strong>18 de noviembre de 2011</strong> se presentó la versión 1.0 de <strong>Minecraft</strong> en Las Vegas.</p>
          <p>Un fenómeno cultural de creatividad sin límites donde millones de exploradores construyen mundos bloque a bloque, tal como en Plux planificamos cada paso de un gran viaje.</p>
          <p><em>¡Haz clic en "Activar Modo Voxel" para transformar toda la interfaz de Plux en bloques cúbicos e interactuar con la Hotbar!</em></p>
        `,
        action: () => {
          minecraftModeActive = !minecraftModeActive;
          document.body.classList.toggle('minecraft-mode', minecraftModeActive);
          playSound('minecraft-xp');

          const btnText = document.getElementById('btnCardActionText');
          if (tradicionModeActive) {
        desactivarModoTradicion();
      }
      if (minecraftModeActive) {
            btnText.textContent = '⛏️ Modo Voxel: ON';
            showPluxeeToast('⛏️ <strong>MODO MINECRAFT ACTIVADO:</strong> Usa las teclas 1-9 o haz clic en la Hotbar inferior.');
          } else {
            btnText.textContent = '⛏️ Activar Modo Voxel';
            showPluxeeToast('Modo Voxel desactivado. Interfaz restablecida.');
          }
        }
      },

      gates: {
        img: 'static/doodles/gates.jpg',
        dateText: '🎂 28 DE OCTUBRE',
        title: 'Cumpleaños de Bill Gates',
        desc: 'Celebrando la revolución de la informática personal y la visión de una PC en cada hogar.',
        btnText: '🎉 Feliz Cumple',
        signatureSound: 'win95',
        modalTag: 'Pluxee de Pioneros de la Tecnología',
        modalTitle: 'Nacimiento de Bill Gates (1955)',
        modalBody: `
          <p>El <strong>28 de octubre de 1955</strong> nació Bill Gates, figura central de la revolución tecnológica que llevó computadoras personales a todos los hogares y empresas del mundo.</p>
          <p>Sus innovaciones en software democratizaron el acceso a las herramientas digitales que hoy usamos a diario para planificar, conectar y expandir nuestros horizontes de viaje.</p>
        `,
        action: () => {
          abrirWin95();
        }
      },

      muertos: {
        img: 'static/doodles/muertos.jpg',
        customOpen: () => abrirModalMuertos(),
        dateText: '🕯️ 1 DE NOVIEMBRE',
        title: 'Día de Muertos y Todos los Santos',
        desc: 'Pétalos dorados de cempasúchil, velas y la elegante Catrina recordando con amor y celebración a quienes viajaron antes que nosotros.',
        btnText: '🕯️ Encender Velas',
        signatureSound: 'mexican-guitar',
        modalTag: 'Pluxee de Memoria y Tradición Cultural',
        modalTitle: 'Día de Muertos y Todos los Santos (1 de Noviembre)',
        modalBody: `
          <p>El <strong>1 de noviembre</strong> se celebra el Día de Todos los Santos y la víspera del <strong>Día de los Muertos</strong>, una de las tradiciones más vivas y conmovedoras del mundo (Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO).</p>
          <p>Con ofrendas luminosas, flores de cempasúchil anaranjadas y copal, se recuerda que los vínculos de amor y memoria trascienden todas las fronteras físicas.</p>
          <p><em>En Plux honramos a todos los seres queridos que viajan siempre en nuestro corazón.</em></p>
        `,
        action: () => {
          dispararDiaMuertos();
        }
      },

      laika: {
        img: 'static/doodles/laika.jpg',
        dateText: '🚀 3 DE NOVIEMBRE',
        title: 'Misión de Laika (Sputnik 2)',
        desc: 'La perrita cosmonauta se convierte en la primera habitante de la Tierra en orbitar el espacio exterior.',
        btnText: '🛰️ Mirar por la Escotilla',
        signatureSound: 'sputnik-beep',
        action: () => {
          abrirTerminalLaika();
        }
      },

      tradicion: {
        img: 'static/doodles/tradicion.png',
        customOpen: () => toggleModoTradicion(),
        dateText: '☀️ 10 DE NOVIEMBRE • 🇦🇷 ARGENTINA',
        title: 'Día de la Tradición 🇦🇷',
        desc: 'Homenaje a José Hernández y al Martín Fierro. Mate caliente, guitarra criolla, asado y nuestras raíces gauchas argentinas.',
        btnText: '🇦🇷 Celebrar Tradición',
        signatureSound: 'guitar-strum',
        action: () => {
          toggleModoTradicion();
        }
      },

      philae: {
        img: 'static/doodles/philae.jpg',
        dateText: '☄️ 12 DE NOVIEMBRE',
        title: 'Aterrizaje en el Cometa 67P',
        desc: 'El módulo Philae de la misión Rosetta (ESA) realiza el primer aterrizaje de la humanidad sobre la superficie de un cometa.',
        btnText: '⚓ Anclar Arpones',
        signatureSound: 'comet-ping',
        modalTag: 'Pluxee de Ciencia Interplanetaria',
        modalTitle: 'Hazaña Histórica: Misión Rosetta & Philae (2014)',
        modalBody: `
          <p>El <strong>12 de noviembre de 2014</strong>, tras 10 años de travesía por el sistema solar, el módulo de aterrizaje <strong>Philae</strong> se posó sobre el cometa <strong>67P/Churyumov-Gerasimenko</strong>.</p>
          <p>Una proeza científica sin precedentes que permitió analizar directamente el material orgánico originario con el que se formaron los océanos de la Tierra.</p>
        `,
        action: () => {
          dispararPhilae();
        }
      },

      nellie_bly: {
        img: 'static/doodles/nellie_bly.jpg',
        dateText: '🚂 14 DE NOVIEMBRE',
        title: 'La Vuelta al Mundo de Nellie Bly',
        desc: 'La audaz periodista inicia su travesía solitaria para desafiar el récord de Julio Verne: completó el planeta en solo 72 días.',
        btnText: '🌍 Tocar Silbato',
        signatureSound: 'steam-train',
        modalTag: 'Pluxee de Grandes Viajeros de la Historia',
        modalTitle: 'Nellie Bly: La Vuelta al Mundo en 72 Días (1889)',
        modalBody: `
          <p>El <strong>14 de noviembre de 1889</strong>, la pionera del periodismo <strong>Nellie Bly</strong> zarpó en un vapor desde Nueva Jersey con un único bolso de mano y su icónico abrigo a cuadros.</p>
          <p>Viajó en trenes, barcos y carruajes por Inglaterra, Francia (donde conoció en persona a Julio Verne), Italia, el Canal de Suez, Singapur y Japón, completando la vuelta al mundo en <strong>72 días, 6 horas y 11 minutos</strong>.</p>
          <p><em>El espíritu aventurero de quien emprende camino hacia lo desconocido.</em></p>
        `,
        action: () => {
          dispararNellieBly();
        }
      },

      patrimonio: {
        img: 'static/doodles/patrimonio.jpg',
        customOpen: () => abrirModalPatrimonio(),
        dateText: '🏛️ 16 DE NOVIEMBRE',
        title: 'Día del Patrimonio Mundial UNESCO',
        desc: 'Firma de la convención para proteger los mayores monumentos culturales y santuarios naturales de la Tierra.',
        btnText: '🕊️ Proteger Tesoro',
        signatureSound: 'unesco-bell',
        modalTag: 'Pluxee de Cultura Universal',
        modalTitle: 'Convención del Patrimonio Mundial de la UNESCO (1972)',
        modalBody: `
          <p>El <strong>16 de noviembre de 1972</strong> se adoptó la <em>Convención para la Protección del Patrimonio Mundial, Cultural y Natural</em>.</p>
          <p>De las pirámides de Egipto al Machu Picchu y las Cataratas del Iguazú, asegura que los tesoros más sublimes de nuestro planeta permanezcan intactos para todas las generaciones venideras.</p>
        `,
        action: () => {
          dispararPatrimonioUNESCO();
        }
      },

      iss: {
        img: 'static/doodles/iss.jpg',
        dateText: '🛰️ 20 DE NOVIEMBRE',
        title: 'Lanzamiento de la EEI (ISS)',
        desc: 'Despega el módulo Zaryá en 1998, dando inicio a la Estación Espacial Internacional: el hogar permanente de la humanidad en el cosmos.',
        btnText: '🛰️ Ver Órbita',
        signatureSound: 'iss-orbit',
        modalTag: 'Pluxee de Cooperación Científica',
        modalTitle: 'El Nacimiento de la ISS: Módulo Zaryá (1998)',
        modalBody: `
          <p>El <strong>20 de noviembre de 1998</strong>, el módulo <strong>Zaryá ("Amanecer")</strong> fue puesto en órbita, marcando el comienzo de la <strong>Estación Espacial Internacional</strong>.</p>
          <p>Orbitando a 400 km de altitud a 27.600 km/h, contempla 16 amaneceres diarios y simboliza la cooperación pacífica de más de 20 naciones unidas en la exploración científica.</p>
        `,
        action: () => {
          dispararISS();
        }
      },

      montgolfier: {
        img: 'static/doodles/montgolfier.jpg',
        customOpen: () => abrirModalMontgolfier(),
        dateText: '🎈 21 DE NOVIEMBRE',
        title: 'Primer Vuelo en Globo Aerostático',
        desc: 'Los hermanos Montgolfier elevan al ser humano por primera vez hacia los cielos de París en 1783.',
        btnText: '🔥 Encender Quemador',
        signatureSound: 'burner-whoosh',
        modalTag: 'Pluxee de Pioneros del Vuelo',
        modalTitle: 'El Primer Vuelo de la Humanidad (1783)',
        modalBody: `
          <p>El <strong>21 de noviembre de 1783</strong> en París, la humanidad logró elevarse del suelo por primera vez en un fastuoso globo de aire caliente construido por los <strong>hermanos Montgolfier</strong>.</p>
          <p>El vuelo duró 25 minutos sobre los tejados parisinos y cambió para siempre nuestra perspectiva del mundo y de los cielos.</p>
        `,
        action: () => {
          dispararMontgolfier();
        }
      },

      curiosity: {
        img: 'static/doodles/curiosity.jpg',
        customOpen: () => abrirModalCuriosity(),
        dateText: '🔴 26 DE NOVIEMBRE',
        title: 'Lanzamiento del Rover Curiosity a Marte',
        desc: 'Despega la misión más audaz de la NASA en busca de huellas de agua y habitabilidad en el Planeta Rojo.',
        btnText: '📡 Disparar ChemCam',
        signatureSound: 'laser-zap',
        modalTag: 'Pluxee de Robótica y Marte',
        modalTitle: 'Curiosity: Explorador Marciano (2011)',
        modalBody: `
          <p>El <strong>26 de noviembre de 2011</strong>, la NASA lanzó el rover <strong>Curiosity</strong> desde Cabo Cañaveral hacia el cráter Gale en Marte.</p>
          <p>Equipado con un laboratorio de química y su potente láser <em>ChemCam</em>, confirmó que Marte albergó lagos de agua dulce aptos para la vida microbiana en su pasado.</p>
        `,
        action: () => {
          dispararCuriosity();
        }
      },

      magallanes: {
        img: 'static/doodles/magallanes.jpg',
        dateText: '🧭 27 DE NOVIEMBRE',
        title: 'Entrada al Océano Pacífico (1520)',
        desc: 'Fernando de Magallanes culmina el épico cruce del tempestuoso estrecho patagónico y descubre la inmensidad del Pacífico.',
        btnText: '🌊 Navegar Pacífico',
        signatureSound: 'ocean-waves',
        modalTag: 'Pluxee de Grandes Navegantes del Mundo',
        modalTitle: 'El Paso Interoceánico de Magallanes (1520)',
        modalBody: `
          <p>El <strong>27 de noviembre de 1520</strong>, tras desafiar los vientos huracanados y fiordos glaciales del sur argentino y chileno, las naos de <strong>Fernando de Magallanes</strong> entraron victoriosas al gran océano, bautizado por su serenidad como <strong>Océano Pacífico</strong>.</p>
          <p>Fue el paso clave que unió el Atlántico con el Pacífico y culminó con la primera vuelta al mundo en la historia de la navegación.</p>
        `,
        action: () => {
          dispararMagallanes();
        }
      },

      twain: {
        img: 'static/doodles/twain.jpg',
        dateText: '✒️ 30 DE NOVIEMBRE',
        title: 'Natalicio de Mark Twain (1835)',
        desc: 'Homenaje al célebre autor y viajero. "Viajar es fatal para los prejuicios, la intolerancia y la estrechez de miras".',
        btnText: '📜 Cita de Viaje',
        signatureSound: 'typewriter-bell',
        modalTag: 'Pluxee de Literatura y Viajeros',
        modalTitle: 'Mark Twain: El Cronista Eterno del Viajero (1835)',
        modalBody: `
          <p>El <strong>30 de noviembre de 1835</strong> nació Samuel Clemens, inmortalizado como <strong>Mark Twain</strong>.</p>
          <p>Piloto de vapor en el río Mississippi, periodista y explorador incansable, capturó como nadie el espíritu del viaje y la curiosidad humana.</p>
          <div class="twain-typewriter-box" style="margin-top: 15px;">
            <div class="twain-paper-sheet" id="twainPaperSheet">
              "Viajar es fatal para los prejuicios, la intolerancia y la estrechez de miras..."
            </div>
            <div class="twain-keys-row">
              <button class="twain-key-btn" onclick="window.tipearLetraTwain('P')">P</button>
              <button class="twain-key-btn" onclick="window.tipearLetraTwain('L')">L</button>
              <button class="twain-key-btn" onclick="window.tipearLetraTwain('U')">U</button>
              <button class="twain-key-btn" onclick="window.tipearLetraTwain('X')">X</button>
              <button class="twain-key-btn" style="width:70px; border-radius:12px;" onclick="window.tipearLetraTwain(' ')">ESPACIO</button>
              <button class="twain-key-btn" style="width:115px; border-radius:12px;" onclick="window.nuevaCitaTwain()">📜 NUEVA CITA</button>
            </div>
          </div>
        `,
        action: () => {
          dispararTwain();
        }
      }
    };

    // Selección de Pluxee
    
    // --- MODO TRADICIÓN PAMPEANA (ESTILO GAUCHO 360°) ---
    let tradicionModeActive = false;
    window.tradicionModeActive = false;

    function toggleModoTradicion() {
      tradicionModeActive = !tradicionModeActive;
      window.tradicionModeActive = tradicionModeActive;
      document.body.classList.toggle('tradicion-mode', tradicionModeActive);
      playSound('guitar-strum');

      const btnText = document.getElementById('btnCardActionText');
      if (tradicionModeActive) {
        if (btnText) btnText.textContent = '🇦🇷 Tradición: Celeste y Blanco';
        showPluxeeToast('🇦🇷 <strong>DÍA DE LA TRADICIÓN:</strong> ¡Viva la Patria! Plux se viste de Celeste y Blanco.');
      } else {
        if (btnText) btnText.textContent = '🇦🇷 Celebrar Tradición';
        showPluxeeToast('🌾 Tema restaurado.');
      }
    }
    window.toggleModoTradicion = toggleModoTradicion;

    function activarModoTradicion() {
      tradicionModeActive = true;
      window.tradicionModeActive = true;
      document.body.classList.add('tradicion-mode');
      const btnText = document.getElementById('btnCardActionText');
      if (btnText) btnText.textContent = '🇦🇷 Tradición: Celeste y Blanco';
    }
    window.activarModoTradicion = activarModoTradicion;

    function desactivarModoTradicion() {
      tradicionModeActive = false;
      window.tradicionModeActive = false;
      document.body.classList.remove('tradicion-mode');
      const btnText = document.getElementById('btnCardActionText');
      if (btnText) btnText.textContent = '🇦🇷 Celebrar Tradición';
    }
    window.desactivarModoTradicion = desactivarModoTradicion;

    function abrirModalTradicion() {
      const modal = document.getElementById('tradicionFogonModal');
      if (modal) modal.classList.add('active');
      playSound('guitar-strum');
      showPluxeeToast('🧉 <strong>DÍA DE LA TRADICIÓN:</strong> Fogón criollo y ronda de mate encendida.');
    }
    window.abrirModalTradicion = abrirModalTradicion;

    function cerrarModalTradicion() {
      const modal = document.getElementById('tradicionFogonModal');
      if (modal) modal.classList.remove('active');
    }
    window.cerrarModalTradicion = cerrarModalTradicion;

    function seleccionarCostumbre(idx) {
      document.querySelectorAll('.tradicion-custom-card').forEach((c, i) => {
        c.classList.toggle('active', i === idx);
      });
      const c = costumbresGauchas[idx];
      if (c) {
        showPluxeeToast(c.toast);
        if (idx === 0) playSound('slurp-mate');
        else if (idx === 1) playSound('coin');
        else if (idx === 2) tocarGuitarraTradicion();
        else if (idx === 3) playSound('fogon-asado');
      }
    }
    window.seleccionarCostumbre = seleccionarCostumbre;

    function siguienteVersoTradicion() {
      versoTradicionIdx = (versoTradicionIdx + 1) % versosTradicion.length;
      const v = versosTradicion[versoTradicionIdx];
      const textEl = document.getElementById('tradicionVersoText');
      const authorEl = document.getElementById('tradicionVersoAuthor');
      if (textEl) textEl.textContent = `"${v.verso}"`;
      if (authorEl) authorEl.textContent = `— ${v.autor}`;
    }
    window.siguienteVersoTradicion = siguienteVersoTradicion;

    function seleccionarDoodle(key, playAudio = false) {
      if (key === 'none') {
        desactivarDoodle();
        return;
      }

      currentKey = key;
      lastActiveKey = key;

      document.body.classList.toggle('tradicion-active', key === 'tradicion');
      document.body.classList.toggle('tradicion-mode', key === 'tradicion');

      // Desactivar modo minecraft si cambiamos de Pluxee
      if (key !== 'minecraft' && minecraftModeActive) {
        minecraftModeActive = false;
        document.body.classList.remove('minecraft-mode');
      }

      // Desactivar bonete de Bill Gates si cambiamos de Pluxee
      if (key !== 'laika') {
        cerrarTerminalLaika();
      }
      if (key !== 'gates') {
        document.body.classList.remove('gates-party-active');
        cerrarWin95();
      }

      const data = PLUXEES[key];
      if (!data) return;

      // Reproducir sonido insignia SOLO si fue activado por clic del usuario
      if (playAudio && data.signatureSound) {
        playSound(data.signatureSound);
      }

      const stage = document.getElementById('doodlePanoramicStage');
      if (stage) stage.classList.remove('disabled');
      document.body.classList.remove('capsula-dismissed');

      // Actualizar ala izquierda (arte integrado al fondo)
      const imgEl = document.getElementById('doodleImgAsset');
      if (imgEl) imgEl.src = data.img;

      // Actualizar ala derecha (tarjeta contextual)
      const dateEl = document.getElementById('doodleCardDate');
      if (dateEl) dateEl.innerHTML = `<span>${data.dateText}</span>`;
      const titleEl = document.getElementById('doodleCardTitle');
      if (titleEl) titleEl.textContent = data.title;
      const descEl = document.getElementById('doodleCardDesc');
      if (descEl) descEl.textContent = data.desc;
      const btnText = document.getElementById('btnCardActionText');
      if (btnText) btnText.textContent = data.btnText || '✨ Probar';
    }

    function dispararAccionActual() {
      const data = PLUXEES[currentKey];
      if (data && data.action) {
        data.action();
      }
    }

    // Desactivar el Pluxee sin romper el layout
    function desactivarDoodle(silent = false) {
      const stage = document.getElementById('doodlePanoramicStage');
      if (stage) stage.classList.add('disabled');
      document.body.classList.add('capsula-dismissed');

      if (tradicionModeActive) {
        desactivarModoTradicion();
      }
      if (minecraftModeActive) {
        minecraftModeActive = false;
        document.body.classList.remove('minecraft-mode');
      }
      document.body.classList.remove('gates-party-active');
      cerrarWin95();

      if (!silent) {
        showPluxeeToast('✨ <strong>Pluxee ocultado:</strong> Interfaz limpia restablecida.');
      }
    }

    function reactivarDoodle() {
      seleccionarDoodle(lastActiveKey);
    }

    function abrirModalInfo() {
      const data = PLUXEES[currentKey];
      if (!data) return;

      document.getElementById('modalTag').textContent = data.modalTag;
      document.getElementById('modalTitle').textContent = data.modalTitle;
      document.getElementById('modalBody').innerHTML = data.modalBody;
      document.getElementById('doodleModal').classList.add('active');
      playSound('coin');
    }

    function cerrarModalInfo() {
      document.getElementById('doodleModal').classList.remove('active');
    }

    function cerrarModalClickAfuera(e) {
      if (e.target.id === 'doodleModal') {
        cerrarModalInfo();
      }
    }

    // Selector de temas visuales nativo de Plux
    const TEMAS = ['theme-oscuro', 'theme-claro', 'theme-tokyo', 'theme-grid', 'theme-starship'];
    let temaIdx = 0;
    function ciclarTema() {
      document.body.classList.remove(TEMAS[temaIdx]);
      temaIdx = (temaIdx + 1) % TEMAS.length;
      document.body.classList.add(TEMAS[temaIdx]);
    }

    // Inicializar Pluxee silenciosamente según la fecha exacta del calendario
    function initPluxeeForToday() {
      const urlParams = new URLSearchParams(window.location.search);
      const paramDoodle = urlParams.get('doodle');
      if (paramDoodle && PLUXEES[paramDoodle]) {
        seleccionarDoodle(paramDoodle, false);
        if (urlParams.get('open') === 'true') {
          if (paramDoodle === 'tradicion') {
            abrirModalTradicion();
          } else {
            dispararAccionActual();
          }
        }
        return;
      }

      const now = new Date();
      const month = now.getMonth(); // 0 = Ene, 9 = Oct, 10 = Nov
      const date = now.getDate();
      
      let matchedKey = null;
      if (month === 9) { // Octubre
        if (date === 18) matchedKey = 'madre';
        else if (date === 21) matchedKey = 'bttf';
        else if (date === 24) matchedKey = 'concorde';
        else if (date === 28) matchedKey = 'gates';
        else if (date === 29) matchedKey = 'arpanet';
        else if (date === 31) matchedKey = 'bitcoin';
      } else if (month === 10) { // Noviembre
        if (date === 1) matchedKey = 'muertos';
        else if (date === 3) matchedKey = 'laika';
        else if (date === 10) matchedKey = 'tradicion';
        else if (date === 12) matchedKey = 'philae';
        else if (date === 14) matchedKey = 'nellie_bly';
        else if (date === 16) matchedKey = 'patrimonio';
        else if (date === 18) matchedKey = 'minecraft';
        else if (date === 20) matchedKey = 'iss';
        else if (date === 21) matchedKey = 'montgolfier';
        else if (date === 26) matchedKey = 'curiosity';
        else if (date === 27) matchedKey = 'magallanes';
        else if (date === 30) matchedKey = 'twain';
      }

      if (matchedKey) {
        // Se activa silenciosamente según la fecha (sin reproducir audio al cargar)
        seleccionarDoodle(matchedKey, false);
      } else {
        // En cualquier otro día del año no hay Pluxee activo y la pantalla queda normal/limpia
        desactivarDoodle(true);
      }
    }

    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', initPluxeeForToday);
    } else {
      initPluxeeForToday();
    }

// Global window bindings for interactive elements
window.seleccionarDoodle = seleccionarDoodle;
window.desactivarDoodle = desactivarDoodle;
window.reactivarDoodle = reactivarDoodle;
window.dispararAccionActual = dispararAccionActual;
window.abrirModalInfo = abrirModalInfo;
window.cerrarModalInfo = cerrarModalInfo;
window.cerrarModalClickAfuera = cerrarModalClickAfuera;
window.toggleAudioFx = toggleAudioFx;
window.selectHotbarSlot = selectHotbarSlot;
window.cantarCumpleBill = cantarCumpleBill;
window.instalarWin95 = instalarWin95;
window.pantallaAzulMuerte = pantallaAzulMuerte;
window.cerrarWin95 = cerrarWin95;
window.cerrarBsod = cerrarBsod;
window.cerrarTerminalARPANET = cerrarTerminalARPANET;
window.abrirModalLaika = abrirModalLaika;
window.emitirBeepSputnik = emitirBeepSputnik;
window.dispararOrbitaLaika = dispararOrbitaLaika;
window.abrirModalTradicion = abrirModalTradicion;
window.cebarMateTradicion = cebarMateTradicion;
window.tocarGuitarraTradicion = tocarGuitarraTradicion;
window.siguienteSabiduriaTradicion = siguienteSabiduriaTradicion;
window.dispararDiaMuertos = dispararDiaMuertos;
window.dispararPhilae = dispararPhilae;
window.dispararNellieBly = dispararNellieBly;
window.abrirModalPatrimonio = abrirModalPatrimonio;
window.dispararPatrimonioUNESCO = dispararPatrimonioUNESCO;
window.dispararISS = dispararISS;
window.abrirModalMontgolfier = abrirModalMontgolfier;
window.dispararMontgolfier = dispararMontgolfier;
window.abrirModalCuriosity = abrirModalCuriosity;
window.dispararCuriosity = dispararCuriosity;
window.dispararMagallanes = dispararMagallanes;
window.dispararTwain = dispararTwain;
