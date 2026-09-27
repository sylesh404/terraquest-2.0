import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, CheckCircle2, RotateCcw, Compass, Ticket } from 'lucide-react';
import { HOUSES, House } from '../../data/houses';
import { HouseCard } from './HouseCard';
import { DomainPanel } from './DomainPanel';
import { Domain } from '../../data/domains';
import { sounds } from '../../utils/soundEffects';

// Google Registration Form URL
const REGISTRATION_FORM_URL: string = "https://docs.google.com/forms/d/e/1FAIpQLSccRdraGjteLF2Eh0VRTZ4_Cm0XvbhRhpHXqENeUY2E8XRJEQ/viewform";

interface HouseOfInnovationProps {
  onPledgeHouse?: (house: House) => void;
}

export const HouseOfInnovation: React.FC<HouseOfInnovationProps> = ({ onPledgeHouse }) => {
  // Option A: No house selected by default
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [domainPanelHouse, setDomainPanelHouse] = useState<House | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  // House Sorting Oath / Mini-quiz state
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [sortingAnswers, setSortingAnswers] = useState<string[]>([]);
  const [sortedHouse, setSortedHouse] = useState<House | null>(null);

  const sortingQuestions = [
    {
      question: 'When confronting a chaotic dataset of unknown dimensions, your instinct is to:',
      options: [
        { text: 'Deploy courageous autonomous swarms to fearlessly conquer it.', houseId: 'gryffindor' },
        { text: 'Devise ruthless strategic optimizations and high-frequency fortifications.', houseId: 'slytherin' },
        { text: 'Synthesize deep multimodal intelligence and epistemic reasoning.', houseId: 'ravenclaw' },
        { text: 'Unite community datasets with sustainable planetary stewardship.', houseId: 'hufflepuff' },
      ]
    },
    {
      question: 'Which artifact would your fellowship forge at the 3am midnight crucible?',
      options: [
        { text: 'An autonomous robotics swarm coordinating disaster rescue missions.', houseId: 'gryffindor' },
        { text: 'An impenetrable algorithmic trading defense resisting hostile exploits.', houseId: 'slytherin' },
        { text: 'A deep-space satellite telemetry decoder and cognitive neural engine.', houseId: 'ravenclaw' },
        { text: 'A resilient civic agritech and universal accessibility platform.', houseId: 'hufflepuff' },
      ]
    },
    {
      question: 'What motto best resonates with your developer spirit?',
      options: [
        { text: '"Fortitudo in Machina — Bravery to forge transformative impact."', houseId: 'gryffindor' },
        { text: '"Astutia et Gloria — Strategic mastery and sovereign ambition."', houseId: 'slytherin' },
        { text: '"Mens Sine Termino — Wit beyond measure is the greatest treasure."', houseId: 'ravenclaw' },
        { text: '"Constantia et Terra — Steadfast in loyalty, devoted to earth."', houseId: 'hufflepuff' },
      ]
    }
  ];

  const handleSelectHouse = (house: House) => {
    setSelectedHouse(house);
    // On small screens, smoothly ensure details are visible
    if (window.innerWidth < 1024 && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 150);
    }
  };

  const handleAnswer = (houseId: string) => {
    sounds.playWandSpark(800 + currentQuestionIdx * 100);
    const newAnswers = [...sortingAnswers, houseId];
    setSortingAnswers(newAnswers);

    if (currentQuestionIdx < sortingQuestions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      // Tally winner
      const counts: Record<string, number> = {};
      newAnswers.forEach(id => { counts[id] = (counts[id] || 0) + 1; });
      let bestHouseId = 'gryffindor';
      let maxCount = -1;
      for (const [id, count] of Object.entries(counts)) {
        if (count > maxCount) {
          maxCount = count;
          bestHouseId = id;
        }
      }
      const matched = HOUSES.find(h => h.id === bestHouseId) || HOUSES[0];
      setSortedHouse(matched);
      setSelectedHouse(matched);
      sounds.playChestFanfare();
    }
  };

  const resetSorting = () => {
    setCurrentQuestionIdx(0);
    setSortingAnswers([]);
    setSortedHouse(null);
  };

  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleSelectTrack = (_domain: Domain) => {
    setDomainPanelHouse(null);
    if (onPledgeHouse && domainPanelHouse) {
      onPledgeHouse(domainPanelHouse);
    }
  };

  const handleGetTicket = () => {
    sounds.playChestFanfare();
    const url = REGISTRATION_FORM_URL ? REGISTRATION_FORM_URL.trim() : '';
    if (!url || url === 'PASTE_GOOGLE_FORM_URL_HERE') {
      setShowComingSoon(true);
      setTimeout(() => {
        setShowComingSoon(false);
      }, 3500);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="houses" className="relative py-20 sm:py-28 z-10 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-950/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ==================================================
            1. SECTION HEADER
        ================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5DEB3] text-xs font-cinzel tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>SACRED FACTIONS OF INTELLIGENCE</span>
          </div>

          {/* Title */}
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#D4AF37] to-[#B8860B] tracking-wide mb-3">
            CHOOSE YOUR HOGWARTS REALM
          </h2>

          {/* Subtitle 1 */}
          <p className="font-cinzel text-sm sm:text-base text-[#F5DEB3] font-semibold tracking-widest uppercase mb-2">
            Four Houses. Four Paths. One Quest.
          </p>

          {/* Subtitle 2 */}
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic max-w-2xl mx-auto mb-7">
            Choose your realm and discover the domains that shape your quest.
          </p>

          {/* Interactive Sorting Hat Button */}
          <button
            onClick={() => {
              sounds.playWaxSealCrack();
              setIsSortingOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#16130F] border border-[#D4AF37] text-[#FFF4D0] font-cinzel text-xs sm:text-sm font-bold tracking-wider hover:bg-[#201A12] shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-0.5"
          >
            <Wand2 className="w-4 h-4 text-[#D4AF37]" />
            <span>TAKE THE HOUSE SORTING OATH</span>
          </button>
        </div>

        {/* ==================================================
            2. FOUR HOUSE LAYOUT (GRID: 4 col desktop, 2x2 on mobile & tablet)
        ================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-12 sm:mb-14">
          {HOUSES.map((house) => (
            <HouseCard
              key={house.id}
              house={house}
              isSelected={selectedHouse?.id === house.id}
              isAnySelected={selectedHouse !== null}
              onSelect={handleSelectHouse}
            />
          ))}
        </div>

        {/* ==================================================
            3. SELECTED HOUSE DETAILS / THEME PANEL (BELOW HOUSES)
        ================================================== */}
        <div ref={detailsRef} className="w-full relative">
          <AnimatePresence mode="wait">
            {!selectedHouse ? (
              /* Option A: Default State Invitation */
              <motion.div
                key="default-prompt"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-3xl mx-auto rounded-xl p-8 sm:p-10 text-center border border-[#D4AF37]/25 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-md"
                style={{ backgroundColor: 'rgba(5, 10, 15, 0.85)' }}
              >
                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <Compass className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFF5D0] tracking-widest uppercase mb-2">
                  SELECT A HOUSE TO BEGIN YOUR QUEST
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Click or tap any of the four realms above to awaken its sacred theme and technological innovation domains.
                </p>
              </motion.div>
            ) : (
              /* Dedicated Selected House Details Panel */
              <motion.div
                key={selectedHouse.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full max-w-5xl mx-auto rounded-xl p-6 sm:p-10 border shadow-[0_10px_40px_rgba(0,0,0,0.85)] backdrop-blur-md relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(5, 10, 15, 0.85)',
                  borderColor: selectedHouse.borderColor || 'rgba(212, 175, 55, 0.35)',
                  boxShadow: `0 10px 40px rgba(0, 0, 0, 0.85), 0 0 35px ${selectedHouse.glowColor}`,
                }}
              >
                {/* House Subtle Top Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${selectedHouse.primaryColor} 50%, transparent 100%)`,
                  }}
                />

                {/* Selected House Header */}
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                  <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="inline-block text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-1.5"
                    style={{ color: selectedHouse.primaryColor }}
                  >
                    THE SACRED REALM OF
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 }}
                    className="font-cinzel text-3xl sm:text-4xl font-black text-[#FFF5D0] tracking-wider mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  >
                    {selectedHouse.name.toUpperCase()}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.12 }}
                    className="font-cinzel text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-[#D4AF37]"
                  >
                    {selectedHouse.theme}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                    className="font-cormorant text-base sm:text-lg text-neutral-300 italic"
                  >
                    &ldquo;{selectedHouse.description}&rdquo;
                  </motion.p>
                </div>

                {/* Staggered Domains List (01, 02, 03, 04) */}
                <div>
                  <div className="text-center mb-4">
                    <span className="text-[11px] font-cinzel uppercase tracking-widest text-neutral-400">
                      FOUR PATHWAYS OF INNOVATION
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedHouse.domains.map((domain, index) => {
                      // Stagger: 100ms, 180ms, 260ms, 340ms
                      const staggerDelay = 0.10 + index * 0.08;
                      return (
                        <motion.div
                          key={domain.number + domain.name}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: staggerDelay }}
                          className="group/domain p-4 sm:p-5 rounded-lg bg-black/45 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-200 flex flex-col justify-between"
                          style={{
                            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                          }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-cinzel text-xs font-black tracking-widest px-2.5 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#FFF5D0]">
                              {domain.number}
                            </span>
                            <span
                              className="w-2 h-2 rounded-full opacity-60 group-hover/domain:opacity-100 transition-opacity"
                              style={{ backgroundColor: selectedHouse.primaryColor }}
                            />
                          </div>
                          <span className="font-sans text-sm sm:text-base font-medium text-neutral-200 group-hover/domain:text-white transition-colors">
                            {domain.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ==================================================
            4. GET YOUR TICKET CTA (DIRECTLY BELOW HOUSE CONTENT)
        ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 text-center max-w-2xl mx-auto px-4"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D8AE4A]/40" />
            <Sparkles className="w-3.5 h-3.5 text-[#D8AE4A]/60" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D8AE4A]/40" />
          </div>

          {/* Small Heading */}
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D8AE4A] uppercase mb-3"
          >
            READY TO BEGIN YOUR QUEST?
          </motion.h4>

          {/* Short Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-cormorant text-lg sm:text-xl text-[#F5EBD5] italic mb-6 max-w-md mx-auto leading-relaxed"
          >
            &ldquo;Your quest begins here. Secure your place in TerraQuest 2.0.&rdquo;
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-3 w-full"
          >
            <motion.button
              onClick={handleGetTicket}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-[min(100%,360px)] min-h-[48px] px-6 sm:px-10 py-3.5 sm:py-4 rounded-md bg-gradient-to-r from-[#D8AE4A] via-[#F2CC69] to-[#D8AE4A] text-[#050A0F] font-cinzel text-xs sm:text-sm font-black tracking-[0.18em] sm:tracking-[0.2em] uppercase border border-[#F2CC69] shadow-[0_0_25px_rgba(216,174,74,0.35)] hover:shadow-[0_0_40px_rgba(242,204,105,0.6)] hover:brightness-105 transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer"
            >
              <Ticket className="w-4 h-4 sm:w-5 sm:h-5 text-[#050A0F] shrink-0" />
              <span>GET YOUR TICKET</span>
            </motion.button>

            {/* Optional Fallback Message when URL is not yet configured */}
            <AnimatePresence>
              {showComingSoon && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="px-4 py-1.5 rounded-full bg-[#D8AE4A]/10 border border-[#D8AE4A]/30 text-[#F2CC69] text-xs font-cinzel tracking-wider"
                >
                  Registration link coming soon.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Sorting Quiz Modal */}
      <AnimatePresence>
        {isSortingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-xl bg-[#0F1420] border-2 border-[#D4AF37] rounded-xl p-5 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.4)] max-h-[90vh] overflow-y-auto"
            >
              {!sortedHouse ? (
                <div>
                  {/* Step count */}
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                    <span className="text-xs font-cinzel text-[#D4AF37] tracking-widest">
                      QUESTION {currentQuestionIdx + 1} OF {sortingQuestions.length}
                    </span>
                    <button
                      onClick={() => setIsSortingOpen(false)}
                      className="min-h-[44px] px-3 py-1 text-xs font-cinzel text-neutral-400 hover:text-white flex items-center justify-center cursor-pointer"
                    >
                      ✕ Close
                    </button>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-6">
                    {sortingQuestions[currentQuestionIdx].question}
                  </h3>

                  <div className="space-y-3">
                    {sortingQuestions[currentQuestionIdx].options.map((opt) => (
                      <button
                        key={opt.text}
                        onClick={() => handleAnswer(opt.houseId)}
                        className="w-full text-left p-3.5 rounded bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all font-sans text-xs sm:text-sm text-neutral-200 cursor-pointer"
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Results screen */
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-[#D4AF37] bg-[#D4AF37]/10">
                    <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs uppercase font-cinzel tracking-widest text-[#D4AF37] block mb-1">
                    The Oracle Has Spoken
                  </span>
                  <h3 className="font-cinzel text-3xl font-black text-white mb-2">
                    YOU BELONG TO {sortedHouse.name.toUpperCase()}!
                  </h3>
                  <p className="font-cormorant italic text-lg text-[#F5DEB3] mb-4">
                    &ldquo;{sortedHouse.motto}&rdquo;
                  </p>
                  <p className="text-xs text-neutral-300 max-w-md mx-auto mb-6">
                    {sortedHouse.description}
                  </p>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => {
                        sounds.playWandSpark(700);
                        resetSorting();
                      }}
                      className="px-4 py-2 rounded bg-white/10 text-xs font-cinzel text-neutral-300 hover:bg-white/20 flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Oath</span>
                    </button>
                    <button
                      onClick={() => {
                        sounds.playChestFanfare();
                        setIsSortingOpen(false);
                      }}
                      className="px-5 py-2 rounded bg-[#D4AF37] text-black font-cinzel font-bold text-xs tracking-wider cursor-pointer"
                    >
                      Embrace My House
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Domain Panel Modal */}
      <DomainPanel
        house={domainPanelHouse}
        isOpen={Boolean(domainPanelHouse)}
        onClose={() => setDomainPanelHouse(null)}
        onSelectTrack={handleSelectTrack}
      />
    </section>
  );
};
