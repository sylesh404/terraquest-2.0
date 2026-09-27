import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock } from 'lucide-react';

export const AboutTerraQuest: React.FC = () => {
  return (
    <section id="legend" className="relative py-16 sm:py-24 md:py-32 z-10 overflow-hidden" style={{ backgroundColor: '#050A0F' }}>
      {/* Atmospheric ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,700px)] h-[450px] bg-[#D8AE4A]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* ==================================================
            1. SECTION TITLE & SUBTITLE
        ================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8AE4A]/10 border border-[#D8AE4A]/30 text-[#EAD9B8] text-xs font-cinzel tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(216,174,74,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#D8AE4A]" />
              <span>THE CHRONICLE</span>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#F2CC69] via-[#D8AE4A] to-[#A9822A] tracking-wider mb-3 drop-shadow-[0_0_20px_rgba(216,174,74,0.35)]">
              THE LEGEND OF TERRAQUEST
            </h2>

            <p className="font-cormorant italic text-base sm:text-xl md:text-2xl text-[#EAD9B8] max-w-xl mx-auto leading-relaxed px-2">
              &ldquo;Where imagination meets intelligence, every idea becomes a quest.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* ==================================================
            MASTER PARCHMENT CHRONICLE PANEL
        ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-2xl p-5 sm:p-10 md:p-14 border shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden"
          style={{
            backgroundColor: '#08131D',
            borderColor: 'rgba(216, 174, 74, 0.35)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), inset 0 0 40px rgba(216, 174, 74, 0.05)',
          }}
        >
          {/* Subtle Parchment Aging Texture / Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15 mix-blend-screen"
            style={{
              backgroundImage:
                'radial-gradient(#D8AE4A 1px, transparent 1px), linear-gradient(0deg, rgba(216,174,74,0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Antique Corner Runes */}
          <div className="absolute top-4 left-5 text-[#D8AE4A]/40 font-medieval text-sm select-none pointer-events-none">✦</div>
          <div className="absolute top-4 right-5 text-[#D8AE4A]/40 font-medieval text-sm select-none pointer-events-none">✦</div>
          <div className="absolute bottom-4 left-5 text-[#D8AE4A]/40 font-medieval text-sm select-none pointer-events-none">✦</div>
          <div className="absolute bottom-4 right-5 text-[#D8AE4A]/40 font-medieval text-sm select-none pointer-events-none">✦</div>

          <div className="relative z-10 space-y-6 sm:space-y-10">
            {/* ==================================================
                2. MAIN DESCRIPTION
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg leading-relaxed text-[#F5EBD5]/90 font-sans"
            >
              <p className="first-letter:font-cinzel first-letter:text-3xl sm:first-letter:text-5xl first-letter:font-black first-letter:text-[#F2CC69] first-letter:mr-2 sm:first-letter:mr-2.5 first-letter:float-left first-letter:leading-none">
                TerraQuest 2.0 is a 24-hour hackathon by the Department of Artificial Intelligence & Machine Learning, bringing together innovators, creators, and problem-solvers to transform ideas into meaningful technological solutions.
              </p>

              <p className="text-[#F5EBD5]/85">
                On October 7–8, 2026, participants will enter a journey of collaboration, creativity, and continuous innovation — building solutions that address real-world challenges through technology, artificial intelligence, and machine learning.
              </p>
            </motion.div>

            {/* Subtle Divider */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D8AE4A]/30 to-transparent" />

            {/* ==================================================
                3. FEATURED QUOTE
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-4 sm:p-7 rounded-xl border-l-4 border-[#D8AE4A] shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
              style={{
                backgroundColor: 'rgba(5, 10, 15, 0.8)',
                boxShadow: '0 0 30px rgba(216, 174, 74, 0.08)',
              }}
            >
              <blockquote className="font-cormorant italic text-lg sm:text-2xl md:text-3xl text-[#EAD9B8] text-center sm:text-left leading-snug">
                &ldquo;One quest. Four Houses. Endless possibilities.&rdquo;
              </blockquote>
            </motion.div>

            {/* Subtle Divider */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D8AE4A]/30 to-transparent" />

            {/* ==================================================
                4. EVENT DATES
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="py-2 text-center"
            >
              <span className="font-cinzel text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#A9A08F] uppercase block mb-1">
                TERRAQUEST 2.0
              </span>
              <div className="font-cinzel text-xl sm:text-3xl md:text-4xl font-black text-[#F2CC69] tracking-wider my-1 drop-shadow-[0_0_12px_rgba(216,174,74,0.4)]">
                OCTOBER 7–8, 2026
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded bg-[#D8AE4A]/10 border border-[#D8AE4A]/25 text-[#EAD9B8] font-cinzel text-[11px] sm:text-xs font-semibold tracking-widest uppercase mt-2">
                <Clock className="w-3.5 h-3.5 text-[#D8AE4A]" />
                <span>24-HOUR HACKATHON</span>
              </span>
            </motion.div>

            {/* Subtle Divider */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D8AE4A]/30 to-transparent" />

            {/* ==================================================
                5. CLOSING MESSAGE
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-center pt-2"
            >
              <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-[#EAD9B8] leading-relaxed max-w-xl mx-auto">
                &ldquo;The gates open on October 7.<br />
                The quest ends on October 8.<br />
                What you build in between is entirely yours.&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
