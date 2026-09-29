import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface IntroExperienceProps {
  onComplete: () => void;
  videoSrc?: string;
  onVideoUploaded?: (url: string, filename: string) => void;
}

export const IntroExperience: React.FC<IntroExperienceProps> = ({
  onComplete,
  videoSrc = '/assets/video/intro.mp4',
}) => {
  const [showTitle, setShowTitle] = useState(false);
  const [introTransitioning, setIntroTransitioning] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('00:00:00');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const titleTriggeredRef = useRef(false);
  const transitionTriggeredRef = useRef(false);

  // Format time as 00:00:SS
  const formatTime = (seconds: number) => {
    const s = Math.floor(seconds);
    const hrs = String(Math.floor(s / 3600)).padStart(2, '0');
    const mins = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  // Monitor video.currentTime: AT EXACTLY 00:00:29, activate TERRAQUEST 2.0 title
  const checkVideoTime = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const time = video.currentTime;
    setCurrentTimeFormatted(formatTime(time));

    // AT EXACTLY 00:00:29: Title appears over the continuing video
    if (time >= 29 && !titleTriggeredRef.current) {
      titleTriggeredRef.current = true;
      setShowTitle(true);
      sounds.playBassBoom();

      // After title is visible, transition into the actual website
      setTimeout(() => {
        if (!transitionTriggeredRef.current) {
          transitionTriggeredRef.current = true;
          setIntroTransitioning(true);

          setTimeout(() => {
            setIntroComplete(true);
            onComplete();
          }, 2000);
        }
      }, 6500);
    }
  }, [onComplete]);

  // RequestAnimationFrame loop alongside timeupdate for frame-accurate timing
  useEffect(() => {
    let animId: number;
    const loop = () => {
      checkVideoTime();
      if (!transitionTriggeredRef.current) {
        animId = requestAnimationFrame(loop);
      }
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [checkVideoTime]);

  // Autoplay immediately on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const promise = video.play();
    if (promise !== undefined) {
      promise.catch(() => {
        // If unmuted autoplay blocked, enforce mute and play
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }, []);

  // Click anywhere to unmute audio or toggle sound
  const handleContainerClick = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        sounds.playWandSpark(950);
      }
    }
  };

  // Fast forward shortcut for instant testing of 29s
  const handleJumpTo27 = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 27.5;
      videoRef.current.play().catch(() => {});
    }
  };

  // Skip directly to homepage
  const handleSkip = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIntroComplete(true);
    onComplete();
  };

  if (introComplete) return null;

  return (
    <div
      onClick={handleContainerClick}
      className="fixed inset-0 z-50 bg-black overflow-hidden select-none cursor-pointer"
    >
      {/* 1. FULLSCREEN IMMERSIVE CINEMATIC VIDEO */}
      <div className="relative w-screen h-screen overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted={isMuted}
          playsInline
          preload="auto"
          onTimeUpdate={checkVideoTime}
          onEnded={() => {
            if (!transitionTriggeredRef.current) {
              transitionTriggeredRef.current = true;
              setIntroTransitioning(true);
              setTimeout(() => {
                setIntroComplete(true);
                onComplete();
              }, 1800);
            }
          }}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            introTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          {/* Multiple source fallbacks ensuring asset playback */}
          <source src={videoSrc} type="video/mp4" />
          <source src="/assets/video/intro.mp4" type="video/mp4" />
          <source src="/assets/video/videoplayback (1).mp4" type="video/mp4" />
          <source src="/assets/video/terraquest-intro.mp4" type="video/mp4" />
        </video>

        {/* Subtle Cinematic Vignette */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
            introTransitioning ? 'opacity-90' : 'opacity-20'
          }`}
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 45%, rgba(3, 5, 10, 0.8) 95%)',
          }}
        />

        {/* 2. TERRAQUEST 2.0 TITLE OVERLAY AT EXACTLY 00:00:29 */}
        {/* The video DOES NOT stop. The video continues playing behind the text */}
        <AnimatePresence>
          {showTitle && !introTransitioning && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30 px-4 sm:px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center"
              >
                {/* 1. Grand Event: HACKNOVA */}
                <h2
                  className="font-cinzel text-[clamp(2rem,5.2vw,4.4rem)] font-black uppercase text-[#F7E7CE] tracking-[0.14em] sm:tracking-[0.22em] -mr-[0.14em] sm:-mr-[0.22em] drop-shadow-[0_0_35px_rgba(212,175,55,0.5)] leading-tight text-center max-w-full mb-1.5 sm:mb-2"
                  style={{
                    textShadow:
                      '0 0 30px rgba(247, 231, 206, 0.4), 0 4px 18px rgba(0, 0, 0, 0.9)',
                  }}
                >
                  HACKNOVA
                </h2>

                {/* Subtle light rays & top accent */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-2.5 max-w-full">
                  <span className="w-6 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#E8DCC4] to-transparent opacity-60 shrink-0" />
                  <span className="font-cinzel text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.1em] sm:tracking-[0.18em] text-[#E8DCC4] font-medium drop-shadow-[0_0_12px_rgba(232,220,196,0.6)] text-center">
                    Department of Artificial Intelligence &amp; Machine Learning
                  </span>
                  <span className="w-6 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-[#E8DCC4] to-transparent opacity-60 shrink-0" />
                </div>

                {/* Dominant Visual Title: TERRAQUEST */}
                <h1
                  className="font-cinzel text-[clamp(2.2rem,6.8vw,6.25rem)] font-black uppercase text-[#F7E7CE] tracking-[0.1em] sm:tracking-[0.18em] -mr-[0.1em] sm:-mr-[0.18em] drop-shadow-[0_0_40px_rgba(212,175,55,0.45)] leading-none text-center max-w-full"
                  style={{
                    textShadow:
                      '0 0 35px rgba(247, 231, 206, 0.4), 0 4px 20px rgba(0, 0, 0, 0.9)',
                  }}
                >
                  TERRAQUEST
                </h1>

                {/* Elegant 2.0 Designation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="mt-2 sm:mt-3 flex justify-center w-full"
                >
                  <span className="font-cinzel text-[clamp(1.5rem,4.5vw,3rem)] font-light text-[#E8DCC4] tracking-[0.2em] sm:tracking-[0.3em] -mr-[0.2em] sm:-mr-[0.3em] drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                    2.0
                  </span>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.2 }}
                  className="font-cormorant italic text-base sm:text-2xl text-[#E8DCC4]/90 tracking-wide mt-3 sm:mt-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-center"
                >
                  The Quest Begins Again
                </motion.p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 3. CINEMATIC TRANSITION OVERLAY: The movie ends -> The quest begins */}
        <AnimatePresence>
          {introTransitioning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="absolute inset-0 bg-[#05070B] z-40 flex items-center justify-center pointer-events-none px-4"
            >
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 1.08 }}
                transition={{ duration: 1.6 }}
                className="text-center"
              >
                <h2 className="font-cinzel text-3xl sm:text-6xl font-black text-[#F7E7CE] tracking-[0.18em] sm:tracking-[0.25em]">
                  TERRAQUEST 2.0
                </h2>
                <p className="font-cormorant italic text-base sm:text-xl text-[#D4AF37] mt-3 tracking-widest">
                  Entering the Citadel...
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. SUBTLE AUDIO UNMUTE & MOBILE / DESKTOP SKIP CONTROLS */}
        {!introTransitioning && (
          <>
            {/* MOBILE ONLY: Dedicated, elegant bottom-right Skip button */}
            <button
              type="button"
              onClick={handleSkip}
              className="sm:hidden fixed bottom-5 right-5 z-40 px-3.5 py-2 rounded-full bg-black/75 hover:bg-black/90 active:scale-95 border border-[#D4AF37]/60 text-[#F5DEB3] hover:text-white text-xs font-cinzel font-semibold tracking-wider backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.2)] flex items-center gap-1.5 cursor-pointer select-none touch-manipulation min-h-[44px]"
              aria-label="Skip Intro Video"
            >
              <span>Skip</span>
              <span className="text-[#D4AF37] text-sm font-bold">×</span>
            </button>

            {/* MOBILE ONLY: Bottom-left compact audio unmute pill */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleContainerClick();
              }}
              className="sm:hidden fixed bottom-5 left-5 z-40 min-h-[44px] flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/75 border border-white/20 text-neutral-300 text-xs font-cinzel backdrop-blur-md cursor-pointer select-none touch-manipulation"
              aria-label="Toggle Audio"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span className="text-[10px]">Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                  <span className="text-[10px]">Active</span>
                </>
              )}
            </button>

            {/* DESKTOP CONTROLS */}
            <div className="hidden sm:flex absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-30 items-center justify-end gap-3">
              {/* Click to Unmute Pill */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleContainerClick();
                }}
                className="min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/70 hover:bg-black/85 border border-white/20 text-neutral-300 hover:text-white text-xs font-cinzel backdrop-blur-md transition-all cursor-pointer select-none"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="text-[11px]">Unmute Audio (or tap screen)</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                    <span className="text-[11px]">Audio Active</span>
                  </>
                )}
              </button>

              {/* Desktop Skip */}
              <button
                type="button"
                onClick={handleSkip}
                className="min-h-[44px] px-3.5 py-2 rounded-full bg-black/70 hover:bg-black/85 border border-white/20 text-neutral-400 hover:text-white text-xs font-cinzel backdrop-blur-md transition-all flex items-center justify-center cursor-pointer select-none"
                aria-label="Skip Intro"
              >
                <span>Skip ✕</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
