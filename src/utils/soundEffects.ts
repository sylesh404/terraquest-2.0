// Web Audio API procedural sound synthesizer for magical audio effects

class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientGain: GainNode | null = null;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private isAmbientPlaying: boolean = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.ambientGain && this.ctx) {
      this.ambientGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
    } else if (!this.isMuted && this.ambientGain && this.ctx && this.isAmbientPlaying) {
      this.ambientGain.gain.setTargetAtTime(0.04, this.ctx.currentTime, 0.1);
    }
    return this.isMuted;
  }

  public setMuted(muted: boolean): boolean {
    this.isMuted = muted;
    if (this.isMuted && this.ambientGain && this.ctx) {
      this.ambientGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
    } else if (!this.isMuted && this.ambientGain && this.ctx && this.isAmbientPlaying) {
      this.ambientGain.gain.setTargetAtTime(0.04, this.ctx.currentTime, 0.1);
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Wand chime / spark
  public playWandSpark(freq = 880) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';

      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.8, now + 0.15);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // Audio context might fail before user interaction
    }
  }

  // Parchment rustle / scroll unravel
  public playScrollOpen() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const bufferSize = this.ctx.sampleRate * 0.25;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200;
      filter.Q.value = 2;

      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.25);
    } catch {
      // Audio error safely ignored
    }
  }

  // Wax seal breaking
  public playWaxSealCrack() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';

      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.18);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);

      // Trigger sparkle shortly after
      setTimeout(() => this.playWandSpark(1200), 100);
    } catch {
      // Audio error safely ignored
    }
  }

  // Cathedral gate unsealing deep drone
  public playDoorOpen() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';

      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(65, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.8);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch {
      // Audio error safely ignored
    }
  }

  // Cinematic 00:00:26 Detonation / Bass Boom
  public playBassBoom() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Sub-bass sweep oscillator (low thud)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(140, now);
      subOsc.frequency.exponentialRampToValueAtTime(32, now + 1.2);

      subGain.gain.setValueAtTime(0.4, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 1.8);

      // Mid crunch impact
      const crunchOsc = this.ctx.createOscillator();
      const crunchGain = this.ctx.createGain();
      crunchOsc.type = 'sawtooth';
      crunchOsc.frequency.setValueAtTime(220, now);
      crunchOsc.frequency.exponentialRampToValueAtTime(40, now + 0.5);

      crunchGain.gain.setValueAtTime(0.2, now);
      crunchGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      crunchOsc.connect(crunchGain);
      crunchGain.connect(this.ctx.destination);
      crunchOsc.start(now);
      crunchOsc.stop(now + 0.6);

      // Subsequent golden shimmering sparks
      setTimeout(() => this.playChestFanfare(), 300);
    } catch {
      // Audio error safely ignored
    }
  }

  // House selection chord
  public playHouseChime(houseId: string) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const freqMap: Record<string, number[]> = {
        pyrosync: [220, 277.18, 329.63, 440], // Warm fiery A major
        aethermind: [293.66, 369.99, 440, 587.33], // Bright astral D major
        terraspectra: [261.63, 329.63, 392, 523.25], // Verdant grounded C major
        chronoveil: [246.94, 311.13, 370, 493.88], // Mysterious B minor
      };

      const notes = freqMap[houseId] || [261.63, 329.63, 392, 523.25];
      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.04, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.8);
      });
    } catch {
      // Audio error safely ignored
    }
  }

  // Treasure chest unlock fanfare
  public playChestFanfare() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const notes = [392, 523.25, 659.25, 783.99, 1046.50]; // G4, C5, E5, G5, C6
      const now = this.ctx.currentTime;

      notes.forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0.06, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 1.2);
      });
    } catch {
      // Audio error safely ignored
    }
  }

  // Toggle ethereal ambient background drone
  public toggleAmbientDrone(): boolean {
    try {
      this.initCtx();
      if (!this.ctx) return false;

      if (this.isAmbientPlaying) {
        if (this.ambientGain) {
          this.ambientGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.5);
        }
        setTimeout(() => {
          this.ambientOsc1?.stop();
          this.ambientOsc2?.stop();
          this.ambientOsc1?.disconnect();
          this.ambientOsc2?.disconnect();
          this.isAmbientPlaying = false;
        }, 500);
        return false;
      } else {
        const now = this.ctx.currentTime;
        this.ambientGain = this.ctx.createGain();
        this.ambientGain.gain.setValueAtTime(0.001, now);
        this.ambientGain.gain.exponentialRampToValueAtTime(this.isMuted ? 0.0001 : 0.025, now + 1.5);

        this.ambientOsc1 = this.ctx.createOscillator();
        this.ambientOsc2 = this.ctx.createOscillator();

        this.ambientOsc1.type = 'sine';
        this.ambientOsc2.type = 'sine';

        // Deep harmonious 110Hz and 164.8Hz (A2 and E3 with slight detune)
        this.ambientOsc1.frequency.setValueAtTime(110, now);
        this.ambientOsc2.frequency.setValueAtTime(164.81, now);

        this.ambientOsc1.connect(this.ambientGain);
        this.ambientOsc2.connect(this.ambientGain);
        this.ambientGain.connect(this.ctx.destination);

        this.ambientOsc1.start(now);
        this.ambientOsc2.start(now);
        this.isAmbientPlaying = true;
        return true;
      }
    } catch {
      return false;
    }
  }

  public getIsAmbientPlaying(): boolean {
    return this.isAmbientPlaying;
  }
}

export const sounds = new SoundManager();
