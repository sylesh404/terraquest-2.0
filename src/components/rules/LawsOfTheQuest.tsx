import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, Sparkles, X } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

export const RULES_PDF_PATH = '/assets/rules and regulation.pdf';
export const ENCODED_RULES_PDF_URL = encodeURI(RULES_PDF_PATH);

interface RuleItem {
  id: string;
  number: string;
  text: string;
}

const HACKATHON_RULES: RuleItem[] = [
  {
    id: 'rule-01',
    number: '01',
    text: 'The hackathon will be conducted as a continuous 24-hour sprint, during which teams are expected to develop and present their solutions.',
  },
  {
    id: 'rule-02',
    number: '02',
    text: 'Teams will be given a problem statement on the spot by the organizers based on the domain chosen.',
  },
  {
    id: 'rule-03',
    number: '03',
    text: 'Each team must select one designated domain and develop their solution within the chosen domain.',
  },
  {
    id: 'rule-04',
    number: '04',
    text: 'Live mentoring sessions will be conducted throughout the hackathon to guide teams and help them refine their solutions.',
  },
  {
    id: 'rule-05',
    number: '05',
    text: 'The decision of the jury panel will be final and binding. No further disputes or appeals regarding the evaluation will be entertained.',
  },
  {
    id: 'rule-06',
    number: '06',
    text: 'At least two members from each team must be present in the designated workspace throughout the hackathon.',
  },
  {
    id: 'rule-07',
    number: '07',
    text: 'Teams must complete and demonstrate a working prototype within the 24-hour hackathon period.',
  },
  {
    id: 'rule-08',
    number: '08',
    text: 'The hackathon will include three evaluation rounds, based on which the final winners will be determined.',
  },
  {
    id: 'rule-09',
    number: '09',
    text: 'Food, refreshments, and accommodation will be provided to registered participants as per the arrangements made by the organizers.',
  },
  {
    id: 'rule-10',
    number: '10',
    text: 'Participants are not permitted to leave the campus during the hackathon without prior permission from the organizers.',
  },
  {
    id: 'rule-11',
    number: '11',
    text: 'Wi-Fi/internet connectivity will be provided at the designated hackathon workspace.',
  },
  {
    id: 'rule-12',
    number: '12',
    text: 'Participants must wear and carry their valid college/participant ID cards throughout the hackathon. ID cards must not be removed while inside the event premises.',
  },
  {
    id: 'rule-13',
    number: '13',
    text: 'Prizes and recognition will be awarded to the winning teams based on the final evaluation.',
  },
];

export const LawsOfTheQuest: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on ESC key when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        sounds.playScrollOpen();
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleOpen = () => {
    sounds.playWaxSealCrack();
    setIsOpen(true);
  };

  const handleClose = () => {
    sounds.playScrollOpen();
    setIsOpen(false);
  };

  const handleDownloadAndOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
    sounds.playScrollOpen();

    // 1. Open the official Rules & Regulations PDF in a new browser tab/window
    window.open(ENCODED_RULES_PDF_URL, '_blank', 'noopener,noreferrer');

    // 2. Trigger the PDF download to the user's device
    const downloadLink = document.createElement('a');
    downloadLink.href = ENCODED_RULES_PDF_URL;
    downloadLink.setAttribute('download', 'Rules & Regulation.pdf');
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    e.preventDefault();
  };

  return (
    <section id="rules" className="relative py-20 sm:py-28 lg:py-32 z-10 bg-transparent min-h-[500px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* ==================================================
               INITIAL STATE: ONLY THE CLOSED ENVELOPE IMAGE
               ================================================== */
            <motion.div
              key="closed-envelope"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center text-center py-6 sm:py-12"
            >
              <button
                type="button"
                onClick={handleOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpen();
                  }
                }}
                className="group relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-4 focus:ring-offset-[#050A0F] rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] select-none"
                style={{
                  width: '88vw',
                  maxWidth: '550px',
                }}
                aria-label="Open Hackathon Rules & Regulations Letter"
              >
                {/* Subtle atmospheric golden glow around envelope */}
                <div className="absolute -inset-3 rounded-2xl bg-[#D4AF37]/20 blur-xl opacity-40 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />

                {/* The actual uploaded envelope image */}
                <img
                  src="/assets/letter/letter.png"
                  alt="TerraQuest Official Rules Letter"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] group-hover:drop-shadow-[0_20px_45px_rgba(212,175,55,0.35)] transition-all duration-300"
                  loading="eager"
                />
              </button>

              {/* Prompt below envelope */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D4AF37] hover:text-[#FFF5D0] font-semibold drop-shadow-[0_0_12px_rgba(212,175,55,0.5)] cursor-pointer transition-colors"
                >
                  ✦ CLICK THE LETTER TO OPEN ✦
                </button>
              </div>
            </motion.div>
          ) : (
            /* ==================================================
               OPEN STATE: HACKATHON RULES & REGULATIONS + PDF
               ================================================== */
            <motion.div
              key="opened-rules"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Top-Right Close Button */}
              <div className="flex justify-end mb-4 sm:mb-6">
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-full text-xs sm:text-sm font-cinzel font-semibold tracking-wider text-[#D4AF37] hover:text-[#FFF5D0] bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.15)] select-none"
                  aria-label="Close Rules and return to Envelope"
                >
                  <X className="w-4 h-4" />
                  <span>CLOSE</span>
                </button>
              </div>

              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5DEB3] text-xs font-cinzel tracking-widest uppercase mb-3.5 shadow-[0_0_15px_rgba(212,175,55,0.15)] backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>CODE OF PARTICIPATION</span>
                </div>

                <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#D4AF37] to-[#B8860B] tracking-wide mb-3 drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">
                  HACKATHON RULES &amp; REGULATIONS
                </h2>

                <p className="font-cormorant text-base sm:text-xl text-neutral-300 italic drop-shadow-md">
                  &ldquo;Important guidelines for every TerraQuest 2.0 participant.&rdquo;
                </p>
              </div>

              {/* Rules Grid: 2 columns on desktop, 1 column on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                {HACKATHON_RULES.map((rule, idx) => {
                  const isLastOdd = idx === HACKATHON_RULES.length - 1 && HACKATHON_RULES.length % 2 !== 0;

                  return (
                    <div
                      key={rule.id}
                      className={`group relative rounded-xl p-5 sm:p-6 bg-[#0B101B]/75 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.18)] hover:-translate-y-0.5 backdrop-blur-sm ${
                        isLastOdd ? 'md:col-span-2 md:max-w-xl md:mx-auto md:w-full' : ''
                      }`}
                    >
                      {/* Subtle gold accent top line on hover */}
                      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="flex items-start gap-4">
                        {/* Rule Number Marker */}
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/35 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/15 transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.1)]">
                          <span className="font-cinzel text-base font-bold text-[#D4AF37] group-hover:text-[#FFF5D0] transition-colors">
                            {rule.number}
                          </span>
                        </div>

                        {/* Rule Text */}
                        <div className="flex-1 pt-1">
                          <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#E5DDCB] group-hover:text-[#F5EBD5] transition-colors">
                            {rule.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* PDF Download Section */}
              <div className="mt-14 sm:mt-18 lg:mt-20 max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 bg-[#0B101B]/85 border border-[#D4AF37]/40 shadow-[0_0_35px_rgba(0,0,0,0.7),0_0_25px_rgba(212,175,55,0.15)] text-center backdrop-blur-md relative overflow-hidden">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-36 bg-[#D4AF37]/15 blur-3xl pointer-events-none rounded-full" />

                <div className="relative z-10">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FFF5D0] tracking-wider mb-2">
                    FULL RULES &amp; REGULATIONS
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mb-6 leading-relaxed">
                    Download the official TerraQuest 2.0 Rules &amp; Regulations document for complete details.
                  </p>

                  <div className="flex justify-center">
                    <a
                      href={ENCODED_RULES_PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Rules & Regulation.pdf"
                      onClick={handleDownloadAndOpen}
                      className="group inline-flex items-center justify-center gap-2.5 w-full max-w-[320px] px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#DFBF58] to-[#B8860B] text-[#0A0D14] font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.55)] hover:brightness-110 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                    >
                      <FileDown className="w-4 h-4 text-[#0A0D14] group-hover:translate-y-0.5 transition-transform duration-200 flex-shrink-0" />
                      <span className="truncate">↓ DOWNLOAD RULES &amp; REGULATIONS PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
