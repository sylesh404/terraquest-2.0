import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Upload, Sparkles, Zap, FastForward } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface IntroVideoSlotProps {
  videoSrc: string;
  onBoomComplete: () => void;
  onOpenUploadSlot: () => void;
  onSkip: () => void;
}

export const IntroVideoSlot: React.FC<IntroVideoSlotProps> = ({
  videoSrc,
  onBoomComplete,
  onOpenUploadSlot,
  onSkip,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(35);
  const [isMuted, setIsMuted] = useState(false);
  const [hasTriggeredBoom, setHasTriggeredBoom] = useState(false);
  const [isBooming, setIsBooming] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Format seconds to 00:00:SS
  const formatTime = (seconds: number) => {
    const totalSecs = Math.floor(seconds);
    const hrs = String(Math.floor(totalSecs / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSecs % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  // Trigger the 00:00:24 BOOM!
  const triggerBoom = () => {
    if (hasTriggeredBoom) return;
    setHasTriggeredBoom(true);
    setIsBooming(true);

    // Audio explosion
    sounds.playBassBoom();

    // Automatically transition to the homepage after 2.8 seconds of glorious boom!
    setTimeout(() => {
      onBoomComplete();
    }, 2800);
  };

  // Video time update listener
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    setCurrentTime(curr);

    // Exact trigger at 00:00:24 (24 seconds)
    if (curr >= 24 && !hasTriggeredBoom) {
      triggerBoom();
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 35);
    setVideoLoaded(true);
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
      // If browser blocked unmuted autoplay, mute and continue playing smoothly
      if (videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    });
  };

  // Auto-play attempt on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoSrc]);

  // Fallback timer if video file is missing or still loading
  useEffect(() => {
    if (videoLoaded) return;

    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 0.25;
          if (next >= 24 && !hasTriggeredBoom) {
            triggerBoom();
          }
          return next;
        });
      }, 250);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, videoLoaded, hasTriggeredBoom]);

  const togglePlay = () => {
    sounds.playWandSpark(800);
    if (videoRef.current && videoLoaded) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(true));
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const jumpTo22Seconds = () => {
    sounds.playWandSpark(950);
    if (videoRef.current && videoLoaded) {
      videoRef.current.currentTime = 22.5;
      if (!isPlaying) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
    setCurrentTime(22.5);
  };

  const forceBoomNow = () => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.currentTime = 24;
    }
    setCurrentTime(24);
    triggerBoom();
  };

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black ${isBooming ? 'animate-boom-shake' : ''}`}>
      {/* Background Fullscreen Video Player */}
      <div className="absolute inset-0 z-0 bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          playsInline
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className={`w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-90' : 'opacity-0'}`}
        />

        {/* Cinematic Procedural Fallback Visual when video is loading or custom file not yet placed */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-[#04060A] flex flex-col items-center justify-center overflow-hidden px-4 text-center">
            {/* Spinning Arcane Circles */}
            <div className="absolute w-[550px] h-[550px] rounded-full border border-[#D4AF37]/25 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-[#00E5FF]/20 animate-spin-slow [animation-direction:reverse] pointer-events-none" />
            <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-[#D4AF37]/10 to-[#00E5FF]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-lg">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#F5DEB3] text-xs uppercase tracking-widest font-cinzel mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Intro Video Stream Active</span>
              </span>

              <h2 className="font-cinzel text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF5D0] to-[#D4AF37] mb-3">
                TERRAQUEST 2.0
              </h2>

              <p className="font-cormorant italic text-lg sm:text-xl text-neutral-300 mb-6">
                Streaming intro video. At <strong className="text-[#00E5FF]">00:00:24</strong>, the grand boom shall awaken the homepage.
              </p>

              {/* Upload Video Slot Button */}
              <button
                onClick={() => {
                  sounds.playWandSpark(900);
                  onOpenUploadSlot();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-cinzel text-xs font-bold tracking-widest uppercase hover:brightness-110 shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
              >
                <Upload className="w-4 h-4 text-black" />
                <span>UPLOAD INTRO VIDEO SLOT</span>
              </button>
            </div>
          </div>
        )}

        {/* Letterbox Vignettes */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.85)]" />
      </div>

      {/* Top HUD: Synchronized 00:00:24 Timer & Upload Slot */}
      <div className="absolute top-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 bg-[#0A0D15]/90 border border-[#D4AF37]/40 px-4 py-2 rounded-full backdrop-blur-md shadow-2xl">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
          <span className="font-cinzel text-xs text-[#FFF4D0] font-bold tracking-wider">
            TERRAQUEST CHRONICLE
          </span>
          <span className="text-neutral-500">•</span>
          <span className="font-mono text-xs text-[#00E5FF] font-bold tracking-wider">
            {formatTime(currentTime)}
          </span>
          <span className="text-[10px] uppercase font-cinzel text-neutral-400">
            (BOOM TRIGGER AT <strong className="text-[#D4AF37]">00:00:24</strong>)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick jump to 22s for instant testing */}
          <button
            onClick={jumpTo22Seconds}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-neutral-200 text-xs font-cinzel tracking-wider backdrop-blur-md transition-all"
            title="Fast forward to 00:00:22 so the boom occurs in 2 seconds"
          >
            <FastForward className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>00:00:22</span>
          </button>

          {/* Test Boom Trigger Now */}
          <button
            onClick={forceBoomNow}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/25 hover:bg-[#D4AF37]/45 border border-[#D4AF37] text-[#FFF4D0] text-xs font-cinzel font-bold tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all"
          >
            <Zap className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span>TRIGGER 00:24 BOOM</span>
          </button>

          {/* Upload Video Slot Trigger */}
          <button
            onClick={() => {
              sounds.playWandSpark(850);
              onOpenUploadSlot();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/20 hover:bg-[#00E5FF]/35 border border-[#00E5FF]/50 text-[#00E5FF] text-xs font-cinzel font-bold tracking-wider backdrop-blur-md transition-all"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Slot</span>
          </button>

          {/* Skip Direct to Home */}
          <button
            onClick={onSkip}
            className="text-xs font-cinzel text-neutral-400 hover:text-white px-3 py-1.5 transition-colors"
          >
            Skip ✕
          </button>
        </div>
      </div>

      {/* Bottom Video Controls Overlay */}
      <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between gap-4 bg-[#080B12]/85 border border-[#D4AF37]/30 px-5 py-3 rounded-xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
          </button>

          <button
            onClick={() => {
              if (videoRef.current) videoRef.current.muted = !isMuted;
              setIsMuted(!isMuted);
            }}
            className="p-1.5 text-[#D4AF37] hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <span className="font-mono text-xs text-neutral-300">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        {/* Progress Bar with 24-second Marker */}
        <div className="flex-1 max-w-xl mx-4 relative">
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00E5FF] to-[#D4AF37] transition-all"
              style={{ width: `${Math.min(100, (currentTime / (duration || 35)) * 100)}%` }}
            />
          </div>

          {/* Golden Pin at 24s mark */}
          {duration > 0 && (
            <div
              className="absolute -top-1 w-2.5 h-4 bg-[#FF4A22] border border-white rounded -translate-x-1/2 shadow-[0_0_8px_#FF4A22]"
              style={{ left: `${(24 / duration) * 100}%` }}
              title="00:00:24 Boom Trigger"
            />
          )}
        </div>

        {/* Upload Slot Quick Button */}
        <button
          onClick={() => {
            sounds.playWandSpark(900);
            onOpenUploadSlot();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-cinzel text-neutral-200 transition-all shrink-0"
        >
          <Upload className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="hidden sm:inline">Change Video</span>
        </button>
      </div>

      {/* ==================================================== */}
      {/* 💥 THE 00:00:24 "TERRAQUEST 2.0 BOOM" EXPLOSION 💥 */}
      {/* ==================================================== */}
      <AnimatePresence>
        {isBooming && (
          <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
            {/* 1. Blinding Flash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 0] }}
              transition={{ duration: 1.4, times: [0, 0.1, 0.4, 1] }}
              className="absolute inset-0 bg-[#FFFDF0]"
            />

            {/* 2. Expanding Shockwave Rings */}
            <div className="absolute w-[250px] h-[250px] rounded-full border-4 border-[#D4AF37] animate-shockwave" />
            <div
              className="absolute w-[250px] h-[250px] rounded-full border-2 border-[#00E5FF] animate-shockwave"
              style={{ animationDelay: '0.15s' }}
            />
            <div
              className="absolute w-[250px] h-[250px] rounded-full border border-[#FF4A22] animate-shockwave"
              style={{ animationDelay: '0.35s' }}
            />

            {/* 3. Celestial Explosion Core */}
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: [0.1, 2, 1.5], opacity: [0, 1, 0.9] }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[#D4AF37]/60 via-[#FF4A22]/40 to-[#00E5FF]/40 blur-3xl"
            />

            {/* 4. Explosive TERRAQUEST 2.0 Title Detonation */}
            <motion.div
              initial={{ scale: 0.2, opacity: 0, letterSpacing: '0.6em' }}
              animate={{ scale: [0.2, 1.2, 1], opacity: 1, letterSpacing: ['0.6em', '0.04em', '0.06em'] }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 text-center p-6"
            >
              {/* Heraldic Sparks */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-[#FFF4D0] uppercase drop-shadow-[0_0_12px_#D4AF37]">
                  ✦ CITADEL UNLEASHED ✦
                </span>
                <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>

              {/* The "TERRAQUEST" Boom Title */}
              <h1 className="font-cinzel text-6xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF2CC] to-[#D4AF37] drop-shadow-[0_0_60px_rgba(212,175,55,0.95)] tracking-tight">
                TERRAQUEST
              </h1>

              {/* 2.0 Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -25 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
                className="mt-2 inline-block px-7 py-2 rounded-full bg-[#1C1710] border-2 border-[#D4AF37] shadow-[0_0_35px_#D4AF37]"
              >
                <span className="font-cinzel text-3xl sm:text-5xl font-black text-[#FDF0CD] tracking-widest">
                  2.0
                </span>
              </motion.div>

              {/* Transition Notice */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-cormorant italic text-lg sm:text-2xl text-white mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
              >
                &ldquo;Entering the Grand Sanctum of AI & Machine Learning...&rdquo;
              </motion.p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
