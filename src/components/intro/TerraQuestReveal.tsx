import React from 'react';
import { motion } from 'framer-motion';

interface TerraQuestRevealProps {
  onEnter: () => void;
}

export const TerraQuestReveal: React.FC<TerraQuestRevealProps> = ({ onEnter }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center p-6 max-w-2xl mx-auto z-20">
      {/* Academy Crest Emblem */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative mb-8 cursor-pointer group"
        onClick={onEnter}
      >
        {/* Pulsing Arcane Rings */}
        <div className="absolute -inset-6 rounded-full border border-[#D4AF37]/30 animate-spin-slow pointer-events-none" />
        <div className="absolute -inset-10 rounded-full border border-[#00E5FF]/20 animate-spin-slow pointer-events-none [animation-direction:reverse]" />

        {/* Central Seal Badge */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#1C1813] to-[#0A0D14] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.7)] transition-all transform group-hover:scale-105">
          <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#D4AF37]" viewBox="0 0 100 100" fill="none">
            {/* Castle Bastion & Neural Nodes */}
            <polygon points="50,10 88,32 88,78 50,96 12,78 12,32" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="22" stroke="#00E5FF" strokeWidth="2" strokeDasharray="4 2" />
            <path d="M50,22 L50,78 M22,50 L78,50" stroke="currentColor" strokeWidth="1.5" />
            {/* Four House Nodes */}
            <circle cx="50" cy="22" r="4" fill="#FF4A22" />
            <circle cx="78" cy="50" r="4" fill="#00E5FF" />
            <circle cx="50" cy="78" r="4" fill="#10B981" />
            <circle cx="22" cy="50" r="4" fill="#A855F7" />
            <circle cx="50" cy="50" r="6" fill="#FDF0CD" />
          </svg>
        </div>
      </motion.div>

      {/* Subtitle / Department Accreditation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5DEB3] text-xs uppercase tracking-[0.25em] font-cinzel mb-4"
      >
        <span>Department of Artificial Intelligence & Machine Learning Presents</span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#D4AF37] to-[#B8860B] drop-shadow-[0_4px_15px_rgba(212,175,55,0.4)] tracking-wide mb-3"
      >
        TERRAQUEST 2.0
      </motion.h1>

      {/* Runic Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="font-cormorant italic text-lg sm:text-2xl text-neutral-300 max-w-lg mb-8 leading-relaxed"
      >
        &ldquo;When the neural pyres ignite and the four houses converge, the grand alchemical quest awakens.&rdquo;
      </motion.p>

      {/* Enter Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={onEnter}
        className="relative group px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#1C1710] via-[#2A2215] to-[#1C1710] border-2 border-[#D4AF37] text-[#FFF4D0] font-cinzel font-semibold text-sm sm:text-base tracking-[0.2em] shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <span>UNSEAL THE GATES</span>
          <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
        </span>
        <div className="absolute inset-0 bg-[#D4AF37]/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </motion.button>
    </div>
  );
};
