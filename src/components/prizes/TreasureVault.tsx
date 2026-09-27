import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, Award } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

const cinematicEase = [0.16, 1, 0.3, 1];

export const TreasureVault: React.FC = () => {
  return (
    <section id="vault" className="relative py-28 sm:py-36 z-10 overflow-hidden bg-[#050A0F]/60 backdrop-blur-[1px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================
            SECTION HEADER
            ================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: cinematicEase }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8AE4A]/10 border border-[#D8AE4A]/30 text-[#F2CC69] text-xs font-cinzel tracking-[0.25em] uppercase mb-4"
          >
            ✦ THE TERRAQUEST TREASURY ✦
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: cinematicEase }}
            className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#D8AE4A] to-[#B8860B] mb-5 tracking-wide drop-shadow-[0_2px_15px_rgba(216,174,74,0.3)]"
          >
            THE SPOILS OF THE QUEST
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: cinematicEase }}
            className="font-cormorant text-xl sm:text-2xl text-[#F5EBD5] italic mb-8 max-w-xl mx-auto"
          >
            &ldquo;To those who complete the quest, the rewards await.&rdquo;
          </motion.p>

          {/* Decorative Grand Prize Pool Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: cinematicEase }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D8AE4A]/50 bg-[#08131D]/80 shadow-[0_0_20px_rgba(216,174,74,0.2)]"
          >
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#F2CC69] uppercase">
              ✦ GRAND PRIZE POOL ✦
            </span>
          </motion.div>
        </div>

        {/* ==================================================
            THREE PRIZE CARDS
            Single row alignment: 2nd (Left) | 1st (Center) | 3rd (Right)
            ================================================== */}
        <div className="flex flex-row items-end sm:items-center justify-center gap-1 sm:gap-6 lg:gap-8 max-w-5xl mx-auto w-full px-0 sm:px-4">
          
          {/* ==================================================
              02 • 2ND PLACE — LEFT CARD
              ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: cinematicEase }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            onMouseEnter={() => sounds.playWandSpark(800)}
            className="order-1 flex-1 w-full max-w-[116px] sm:max-w-[340px] lg:max-w-[320px] rounded-xl sm:rounded-2xl p-2 sm:p-6 lg:p-9 text-center relative border border-[#A9A08F]/30 hover:border-[#D8AE4A]/50 transition-colors duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundColor: 'rgba(8, 19, 29, 0.88)',
            }}
          >
            {/* Subtle inner gradient */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#E2E8F0]/5 via-transparent to-transparent pointer-events-none" />

            {/* Rank Label */}
            <div className="mb-1.5 sm:mb-6">
              <span className="font-cinzel text-[7px] sm:text-xs lg:text-sm font-bold tracking-wider sm:tracking-[0.25em] text-[#A9A08F] uppercase">
                02 • 2ND PLACE
              </span>
            </div>

            {/* Silver-accented Trophy Icon */}
            <div className="mb-1.5 sm:mb-6 flex justify-center">
              <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gradient-to-b from-[#E2E8F0]/15 to-[#A9A08F]/5 border border-[#E2E8F0]/30 shadow-[0_0_15px_rgba(226,232,240,0.15)] group-hover:border-[#E2E8F0]/60 transition-colors duration-300">
                <Trophy className="w-4 h-4 sm:w-8 sm:h-8 text-[#E2E8F0] drop-shadow-[0_0_8px_rgba(226,232,240,0.4)]" />
              </div>
            </div>

            {/* Cash Prize Category */}
            <div className="mb-1 sm:mb-2">
              <span className="font-sans text-[6.5px] sm:text-[11px] tracking-wider sm:tracking-[0.3em] font-medium text-[#A9A08F] uppercase">
                CASH PRIZE
              </span>
            </div>

            {/* Prize Amount */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: cinematicEase }}
            >
              <span className="font-cinzel text-xs xs:text-sm sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#CBD5E1] tracking-tight block">
                ₹7,000
              </span>
            </motion.div>
          </motion.div>

          {/* ==================================================
              01 • 1ST PLACE — CENTER CARD (VISUALLY DOMINANT)
              ================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.25, ease: cinematicEase }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.99 }}
            onMouseEnter={() => sounds.playWandSpark(1050)}
            className="order-2 flex-1 w-full max-w-[132px] sm:max-w-[360px] lg:max-w-[370px] rounded-xl sm:rounded-2xl p-2.5 sm:p-7 lg:p-11 text-center relative border-2 border-[#D8AE4A] shadow-[0_0_40px_rgba(216,174,74,0.28)] -translate-y-1.5 sm:translate-y-0 lg:-translate-y-2 group overflow-hidden"
            style={{
              backgroundColor: 'rgba(8, 19, 29, 0.92)',
            }}
          >
            {/* Subtle animated shimmer effect across the card */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl sm:rounded-2xl">
              <motion.div
                className="w-[200%] h-full absolute -top-0 -left-[100%] bg-gradient-to-r from-transparent via-[#F2CC69]/10 to-transparent skew-x-[-20deg]"
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              />
            </div>

            {/* Subtle Floating Sparkle Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[
                { top: 12, left: 15, delay: 0 },
                { top: 22, left: 85, delay: 1.2 },
                { top: 75, left: 12, delay: 0.6 },
                { top: 82, left: 82, delay: 1.8 },
                { top: 48, left: 90, delay: 0.9 },
              ].map((p, idx) => (
                <motion.span
                  key={idx}
                  className="absolute w-1 h-1 rounded-full bg-[#F2CC69] filter blur-[0.4px]"
                  style={{ top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{
                    y: [-4, 4, -4],
                    opacity: [0.25, 0.8, 0.25],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + idx * 0.5,
                    repeat: Infinity,
                    delay: p.delay,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Top Emphasized Banner */}
            <div className="mb-1.5 sm:mb-3">
              <span className="inline-block px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#D8AE4A]/15 border border-[#D8AE4A]/40 text-[#F2CC69] text-[6.5px] sm:text-[11px] font-cinzel font-bold tracking-wider sm:tracking-[0.2em] uppercase shadow-[0_0_12px_rgba(216,174,74,0.25)]">
                <span className="hidden sm:inline">★ CHAMPION OF THE QUEST ★</span>
                <span className="sm:hidden">★ CHAMPION ★</span>
              </span>
            </div>

            {/* Rank Label */}
            <div className="mb-1.5 sm:mb-6">
              <span className="font-cinzel text-[7.5px] sm:text-xs lg:text-base font-bold tracking-wider sm:tracking-[0.25em] text-[#F5EBD5] uppercase">
                01 • 1ST PLACE
              </span>
            </div>

            {/* Crown / Trophy Icon in Brighter Gold */}
            <div className="mb-1.5 sm:mb-6 flex justify-center">
              <div className="w-9 h-9 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-[#F2CC69]/25 to-[#D8AE4A]/10 border border-[#F2CC69]/60 shadow-[0_0_25px_rgba(242,204,105,0.35)] group-hover:border-[#F2CC69] group-hover:shadow-[0_0_35px_rgba(242,204,105,0.5)] transition-all duration-300">
                <Crown className="w-4.5 h-4.5 sm:w-10 sm:h-10 text-[#F2CC69] drop-shadow-[0_0_15px_rgba(242,204,105,0.7)]" />
              </div>
            </div>

            {/* Cash Prize Category */}
            <div className="mb-1 sm:mb-2">
              <span className="font-sans text-[7px] sm:text-xs tracking-wider sm:tracking-[0.3em] font-semibold text-[#D8AE4A] uppercase">
                CASH PRIZE
              </span>
            </div>

            {/* Prize Amount — Largest text on the card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55, ease: cinematicEase }}
            >
              <span className="font-cinzel text-sm xs:text-base sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F2CC69] to-[#D8AE4A] tracking-tight block drop-shadow-[0_0_25px_rgba(242,204,105,0.45)]">
                ₹10,000
              </span>
            </motion.div>
          </motion.div>

          {/* ==================================================
              03 • 3RD PLACE — RIGHT CARD
              ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.4, ease: cinematicEase }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            onMouseEnter={() => sounds.playWandSpark(700)}
            className="order-3 flex-1 w-full max-w-[116px] sm:max-w-[340px] lg:max-w-[320px] rounded-xl sm:rounded-2xl p-2 sm:p-6 lg:p-9 text-center relative border border-[#A9A08F]/30 hover:border-[#D8AE4A]/50 transition-colors duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundColor: 'rgba(8, 19, 29, 0.88)',
            }}
          >
            {/* Subtle inner gradient */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#CD7F32]/5 via-transparent to-transparent pointer-events-none" />

            {/* Rank Label */}
            <div className="mb-1.5 sm:mb-6">
              <span className="font-cinzel text-[7px] sm:text-xs lg:text-sm font-bold tracking-wider sm:tracking-[0.25em] text-[#A9A08F] uppercase">
                03 • 3RD PLACE
              </span>
            </div>

            {/* Bronze-accented Trophy / Award Icon */}
            <div className="mb-1.5 sm:mb-6 flex justify-center">
              <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gradient-to-b from-[#CD7F32]/15 to-[#D8AE4A]/5 border border-[#CD7F32]/30 shadow-[0_0_15px_rgba(205,127,50,0.15)] group-hover:border-[#CD7F32]/60 transition-colors duration-300">
                <Award className="w-4 h-4 sm:w-8 sm:h-8 text-[#CD7F32] drop-shadow-[0_0_8px_rgba(205,127,50,0.4)]" />
              </div>
            </div>

            {/* Cash Prize Category */}
            <div className="mb-1 sm:mb-2">
              <span className="font-sans text-[6.5px] sm:text-[11px] tracking-wider sm:tracking-[0.3em] font-medium text-[#A9A08F] uppercase">
                CASH PRIZE
              </span>
            </div>

            {/* Prize Amount */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: cinematicEase }}
            >
              <span className="font-cinzel text-xs xs:text-sm sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FDE68A] via-[#CD7F32] to-[#B45309] tracking-tight block">
                ₹5,000
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ==================================================
            TOTAL CASH PRIZES FOOTER
            ₹22,000 TOTAL CASH PRIZES
            ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65, ease: cinematicEase }}
          className="mt-14 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#D8AE4A]/40 bg-[#08131D]/80 shadow-[0_0_20px_rgba(216,174,74,0.15)] backdrop-blur-sm">
            <span className="font-cinzel text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-[#F2CC69] uppercase">
              ₹22,000 TOTAL CASH PRIZES
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
