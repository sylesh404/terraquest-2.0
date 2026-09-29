import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  const handleScrollToLegend = () => {
    sounds.playWandSpark(800);
    const legendElem = document.getElementById('legend');
    if (legendElem) {
      legendElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToHouses = () => {
    sounds.playWandSpark(800);
    const housesElem = document.getElementById('houses');
    if (housesElem) {
      housesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 select-none z-10 pt-20 sm:pt-16 pb-20 sm:pb-16 overflow-hidden">
      {/* Subtle Central Gold Atmospheric Glow (does not hide video) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,550px)] h-[350px] rounded-full bg-[#D4AF37]/8 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center w-full">
        {/* 1. Grand Event Header: HACKNOVA */}
        <motion.h2
          initial={{ opacity: 0, y: -16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-cinzel text-[clamp(2.2rem,5.8vw,4.6rem)] font-black uppercase tracking-[0.16em] sm:tracking-[0.24em] -mr-[0.16em] sm:-mr-[0.24em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF7] via-[#F3E5AB] to-[#C89B3C] leading-none px-2 text-center mb-2.5 sm:mb-3.5"
          style={{
            filter: 'drop-shadow(0 0 32px rgba(212, 175, 55, 0.45)) drop-shadow(0 4px 16px rgba(0, 0, 0, 0.9))',
          }}
        >
          HACKNOVA
        </motion.h2>

        {/* 2. Department & Association Eyebrow text */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 max-w-full px-2"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <span className="w-4 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/80 shrink-0" />
            <span className="font-cinzel text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.12em] sm:tracking-[0.22em] text-[#D4AF37] font-semibold text-center">
              DEPARTMENT OF ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING
            </span>
            <span className="w-4 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/80 shrink-0" />
          </div>
          <span className="font-cinzel text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#D4AF37]/90 font-semibold text-center">
            ASSOCIATED WITH IEEE
          </span>
        </motion.div>

        {/* 3. Dominant Title: TERRAQUEST */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="font-cinzel text-[clamp(2.2rem,7.2vw,6.5rem)] font-black uppercase tracking-[0.08em] sm:tracking-[0.15em] -mr-[0.08em] sm:-mr-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DA] via-[#E8C86A] to-[#B38728] leading-none px-2 text-center"
          style={{
            filter: 'drop-shadow(0 0 35px rgba(212, 175, 55, 0.35)) drop-shadow(0 4px 18px rgba(0, 0, 0, 0.9))',
          }}
        >
          TERRAQUEST
        </motion.h1>

        {/* 3. Subtitle: 2.0 (smaller, muted gold/ivory) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-cinzel text-[clamp(1.5rem,4.5vw,3.25rem)] font-light text-[#E8DCC4]/90 tracking-[0.25em] sm:tracking-[0.35em] -mr-[0.25em] sm:-mr-[0.35em] mt-2 mb-3 sm:mb-4 text-center"
          style={{
            textShadow: '0 0 20px rgba(232, 220, 196, 0.3)',
          }}
        >
          2.0
        </motion.div>

        {/* 4. Tagline: Four Houses. One Quest. Forge the code that conjures worlds. */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-cormorant italic text-base sm:text-2xl md:text-3xl text-[#E8DCC4] tracking-[0.02em] sm:tracking-[0.04em] font-normal max-w-2xl mx-auto mb-8 sm:mb-10 px-4 leading-relaxed"
          style={{
            textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 15px rgba(212,175,55,0.2)',
          }}
        >
          Four Houses. One Quest. Forge the code that conjures worlds.
        </motion.p>

        {/* 5. CTA Buttons: PRIMARY & SECONDARY */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 w-full sm:w-auto px-4 sm:px-0 max-w-md sm:max-w-none"
        >
          {/* Primary CTA: BEGIN YOUR QUEST */}
          <a
            href="#legend"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToLegend();
            }}
            className="w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] text-[#0A0D14] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center text-center"
          >
            BEGIN YOUR QUEST
          </a>

          {/* Secondary CTA: MEET THE HOUSES */}
          <button
            onClick={handleScrollToHouses}
            className="w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm bg-black/40 hover:bg-[#D4AF37]/15 border border-[#D4AF37]/80 hover:border-[#D4AF37] text-[#E8C86A] hover:text-[#FFF4D0] font-cinzel font-semibold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center text-center"
          >
            MEET THE HOUSES
          </button>
        </motion.div>
      </div>

      {/* 6. Scroll Down Indicator: Downward chevron with gentle float & SCROLL TO EXPLORE */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 1.9, duration: 1.0 }}
        onClick={handleScrollToLegend}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer group"
      >
        <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]/90 font-medium">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
        </motion.div>
      </motion.button>
    </section>
  );
};
