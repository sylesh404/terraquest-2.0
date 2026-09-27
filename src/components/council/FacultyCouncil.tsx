import React from 'react';
import { motion } from 'framer-motion';
import { sounds } from '../../utils/soundEffects';

// Direct Vite imports for the 3 uploaded faculty photos in assets
import sivaprakashImage from '../../assets/1.png';
import rupaImage from '../../assets/2.png';
import nancyImage from '../../assets/3.png';

export const FacultyCouncil: React.FC = () => {
  return (
    <div className="mb-20 sm:mb-24 bg-transparent">
      {/* ==================================================
          SECTION HEADING
          ================================================== */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5DEB3] text-xs font-cinzel tracking-widest uppercase mb-3">
          <span>COUNCIL</span>
        </div>
        <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] to-[#D4AF37] mb-2">
          THE FACULTY HIGH COUNCIL
        </h3>
        <p className="font-cormorant italic text-neutral-400 text-base sm:text-lg">
          Department leadership guiding the seekers of TerraQuest 2.0
        </p>
      </div>

      {/* ==================================================
          FACULTY PRESENTATION (ORIGINAL PHOTO RATIO / NO CIRCLE)
          ================================================== */}

      {/* TOP / CENTER FACULTY: Dr. Sivaprakash C (Image 1) */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="group flex flex-col items-center cursor-pointer select-none">
          {/* Natural Photo Ratio Portrait - Uncropped */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            onMouseEnter={() => sounds.playWandSpark(950)}
            className="flex items-center justify-center group-hover:scale-[1.04] transition-transform duration-300 mb-3 sm:mb-4 bg-transparent"
          >
            <img
              src={sivaprakashImage}
              alt="Dr. Sivaprakash C"
              className="h-36 sm:h-44 md:h-48 lg:h-52 w-auto max-w-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
              loading="eager"
            />
          </motion.div>

          {/* Name & Designation */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          >
            <h4 className="font-cinzel text-base sm:text-lg lg:text-xl font-bold text-[#F5EBD5] group-hover:text-[#F2CC69] transition-colors duration-200 tracking-wide mb-1">
              Dr. Sivaprakash C
            </h4>
            <p className="font-sans text-xs sm:text-sm font-medium text-[#A9A08F] tracking-wide">
              Head, Department of AIML
            </p>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM FACULTY: Dr. P. Rupa Ezhil Arasi (Left, Image 2) & Nancy Vaish (Right, Image 3) */}
      <div className="grid grid-cols-2 gap-6 sm:gap-12 md:gap-20 max-w-2xl mx-auto text-center items-start">
        {/* BOTTOM LEFT: Dr. P. Rupa Ezhil Arasi (Image 2) */}
        <div className="group flex flex-col items-center cursor-pointer select-none">
          {/* Natural Photo Ratio Portrait - Uncropped */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.45, ease: 'easeOut' }}
            onMouseEnter={() => sounds.playWandSpark(850)}
            className="flex items-center justify-center group-hover:scale-[1.04] transition-transform duration-300 mb-2.5 sm:mb-3 bg-transparent"
          >
            <img
              src={rupaImage}
              alt="Dr. P. Rupa Ezhil Arasi"
              className="h-28 sm:h-36 md:h-40 lg:h-44 w-auto max-w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
              loading="eager"
            />
          </motion.div>

          {/* Name & Designation */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
          >
            <h4 className="font-cinzel text-xs sm:text-base lg:text-lg font-bold text-[#F5EBD5] group-hover:text-[#F2CC69] transition-colors duration-200 tracking-wide mb-1 leading-snug">
              Dr. P. Rupa Ezhil Arasi
            </h4>
            <p className="font-sans text-[11px] sm:text-xs md:text-sm font-medium text-[#A9A08F] tracking-wide leading-tight">
              Professor
            </p>
          </motion.div>
        </div>

        {/* BOTTOM RIGHT: Nancy Vaish (Image 3) */}
        <div className="group flex flex-col items-center cursor-pointer select-none">
          {/* Natural Photo Ratio Portrait - Uncropped */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.5, ease: 'easeOut' }}
            onMouseEnter={() => sounds.playWandSpark(900)}
            className="flex items-center justify-center group-hover:scale-[1.04] transition-transform duration-300 mb-2.5 sm:mb-3 bg-transparent"
          >
            <img
              src={nancyImage}
              alt="Prof. Nancy Vaish"
              className="h-28 sm:h-36 md:h-40 lg:h-44 w-auto max-w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
              loading="eager"
            />
          </motion.div>

          {/* Name & Designation */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          >
            <h4 className="font-cinzel text-xs sm:text-base lg:text-lg font-bold text-[#F5EBD5] group-hover:text-[#F2CC69] transition-colors duration-200 tracking-wide mb-1 leading-snug">
              Prof. Nancy Vaish
            </h4>
            <p className="font-sans text-[11px] sm:text-xs md:text-sm font-medium text-[#A9A08F] tracking-wide leading-tight">
              Professor
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
