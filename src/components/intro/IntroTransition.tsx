import React from 'react';
import { motion } from 'framer-motion';

interface IntroTransitionProps {
  isOpening: boolean;
}

export const IntroTransition: React.FC<IntroTransitionProps> = ({ isOpening }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 flex overflow-hidden">
      {/* Left Gate Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpening ? '-100%' : 0 }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
        className="w-1/2 h-full bg-[#080B12] border-r-2 border-[#D4AF37]/50 relative flex items-center justify-end overflow-hidden"
        style={{
          boxShadow: 'inset -20px 0 50px rgba(0,0,0,0.9)',
          backgroundImage: 'radial-gradient(circle at 100% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)'
        }}
      >
        {/* Ancient Door Ornaments & Arch details */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-24 h-48 border-2 border-[#D4AF37]/30 rounded-l-full border-r-0 pointer-events-none" />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-32 border border-[#D4AF37]/20 rounded-l-full border-r-0 pointer-events-none" />
      </motion.div>

      {/* Right Gate Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpening ? '100%' : 0 }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
        className="w-1/2 h-full bg-[#080B12] border-l-2 border-[#D4AF37]/50 relative flex items-center justify-start overflow-hidden"
        style={{
          boxShadow: 'inset 20px 0 50px rgba(0,0,0,0.9)',
          backgroundImage: 'radial-gradient(circle at 0% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)'
        }}
      >
        {/* Ancient Door Ornaments & Arch details */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-24 h-48 border-2 border-[#D4AF37]/30 rounded-r-full border-l-0 pointer-events-none" />
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-32 border border-[#D4AF37]/20 rounded-r-full border-l-0 pointer-events-none" />
      </motion.div>
    </div>
  );
};
