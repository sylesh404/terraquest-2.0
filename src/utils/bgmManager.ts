// Singleton Background Music (BGM) Manager for TerraQuest 2.0
// Manages continuous, invisible background audio playback with browser autoplay fallback

type MuteListener = (isMuted: boolean) => void;

class BackgroundMusicManager {
  private audio: HTMLAudioElement | null = null;
  private isInitialized = false;
  private userMuted = false;
  private listeners: Set<MuteListener> = new Set();
  private interactionEvents = ['click', 'pointerdown', 'touchstart', 'keydown', 'scroll', 'wheel'];
  private interactionHandler: (() => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        this.audio = new Audio('/assets/bgm.mp4');
        this.audio.loop = true;
        this.audio.preload = 'auto';
        this.audio.volume = 0.55;

        // Fallback to .m4a if .mp4 format fails to decode
        this.audio.addEventListener('error', () => {
          if (this.audio && this.audio.src.endsWith('/assets/bgm.mp4')) {
            this.audio.src = '/assets/bgm.m4a';
            if (!this.userMuted) {
              this.audio.play().catch(() => {});
            }
          }
        });
      } catch {
        // Audio initialization fallback
      }
    }
  }

  public init() {
    if (this.isInitialized || !this.audio) return;
    this.isInitialized = true;

    // 1. Attempt autoplay immediately
    this.attemptPlay();

    // 2. Fallback: wait for the user's first interaction
    this.setupInteractionFallback();
  }

  private attemptPlay() {
    if (!this.audio || this.userMuted) return;

    this.audio.muted = false;
    const playPromise = this.audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Playback succeeded! Clean up interaction listeners if any
          this.removeInteractionListeners();
        })
        .catch(() => {
          // Browser blocked unprompted autoplay with sound.
          // The interaction listeners will start it on first touch/click/scroll/key.
        });
    }
  }

  private setupInteractionFallback() {
    if (typeof window === 'undefined') return;

    this.interactionHandler = () => {
      if (!this.userMuted) {
        this.attemptPlay();
      }
      this.removeInteractionListeners();
    };

    this.interactionEvents.forEach((event) => {
      window.addEventListener(event, this.interactionHandler!, { once: true, passive: true });
    });
  }

  private removeInteractionListeners() {
    if (typeof window === 'undefined' || !this.interactionHandler) return;

    this.interactionEvents.forEach((event) => {
      window.removeEventListener(event, this.interactionHandler!);
    });
    this.interactionHandler = null;
  }

  public play() {
    if (!this.audio) return;
    this.userMuted = false;
    this.audio.muted = false;
    this.audio.play().catch(() => {
      this.setupInteractionFallback();
    });
    this.notifyListeners();
  }

  public pause() {
    if (!this.audio) return;
    this.audio.pause();
  }

  public toggleMute(): boolean {
    this.userMuted = !this.userMuted;
    if (this.userMuted) {
      this.pause();
    } else {
      this.play();
    }
    this.notifyListeners();
    return this.userMuted;
  }

  public setMuted(muted: boolean) {
    this.userMuted = muted;
    if (this.userMuted) {
      this.pause();
    } else {
      this.play();
    }
    this.notifyListeners();
  }

  public isMuted(): boolean {
    return this.userMuted;
  }

  public isPlaying(): boolean {
    return !!(this.audio && !this.audio.paused && !this.audio.ended);
  }

  public subscribe(listener: MuteListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.userMuted));
  }
}

export const bgm = new BackgroundMusicManager();
