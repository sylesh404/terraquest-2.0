import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../../data/faq';
import { sounds } from '../../utils/soundEffects';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0]?.id || null);

  const toggleAccordion = (id: string) => {
    sounds.playScrollOpen();
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 md:py-32 z-10 overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5DEB3] text-xs font-cinzel tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Answers from the Oracle</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#D4AF37] to-[#B8860B] mb-3 sm:mb-4">
            FREQUENTLY INQUIRED CODEXES
          </h2>
          <p className="font-cormorant text-base sm:text-xl text-neutral-300 italic px-2">
            &ldquo;Peruse the ancestral inquiries to unravel all ambiguities before entering the citadel gates.&rdquo;
          </p>
        </div>

        {/* Accordion List (All FAQ Questions Directly Rendered) */}
        <div className="space-y-3.5 sm:space-y-4 max-w-4xl mx-auto">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0C1019]/90 border border-[#D4AF37]/25 hover:border-[#D4AF37]/50 rounded-xl transition-all duration-200 overflow-hidden shadow-lg backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-4 sm:p-6 min-h-[56px] flex items-start sm:items-center justify-between gap-3 font-cinzel text-xs sm:text-base font-bold text-white hover:text-[#FFF4D0] transition-colors cursor-pointer select-none"
                >
                  <span className="flex flex-col sm:flex-row sm:items-center items-start gap-1.5 sm:gap-3 flex-1">
                    <span className="text-[10px] sm:text-xs uppercase px-2 py-0.5 rounded bg-white/5 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0 font-normal">
                      {faq.category}
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 shrink-0 mt-1 sm:mt-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed border-t border-white/5"
                    >
                      <p className="mb-3">{faq.answer}</p>
                      {faq.magicalTip && (
                        <div className="flex items-start gap-2 bg-[#D4AF37]/10 p-3 rounded border border-[#D4AF37]/30 text-[#F5DEB3] font-cormorant italic text-sm sm:text-base">
                          <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Oracle&apos;s Whisper: {faq.magicalTip}</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
