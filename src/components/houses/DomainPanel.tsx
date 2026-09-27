import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { House } from '../../data/houses';
import { DOMAINS, Domain } from '../../data/domains';
import { sounds } from '../../utils/soundEffects';

interface DomainPanelProps {
  house: House | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectTrack: (domain: Domain) => void;
}

export const DomainPanel: React.FC<DomainPanelProps> = ({
  house,
  isOpen,
  onClose,
  onSelectTrack,
}) => {
  if (!isOpen || !house) return null;

  // Filter domains corresponding to this house, plus the Wild Sorcery track
  const houseDomains = DOMAINS.filter(
    (d) => d.houseId === house.id || d.houseId === 'all'
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-[min(92vw,56rem)] bg-[#090D15] border-2 rounded-xl p-5 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
          style={{
            borderColor: house.borderColor,
            boxShadow: `0 0 50px ${house.glowColor}`,
          }}
        >
          {/* Close button */}
          <button
            onClick={() => {
              sounds.playWandSpark(700);
              onClose();
            }}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Close domain panel"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-5">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center border text-2xl shadow-inner"
              style={{
                borderColor: house.borderColor,
                backgroundColor: `${house.primaryColor}15`,
              }}
            >
              <Sparkles className="w-7 h-7" style={{ color: house.primaryColor }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs uppercase font-cinzel tracking-widest font-bold"
                  style={{ color: house.primaryColor }}
                >
                  {house.name} Arcane Grimoire
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-xs text-neutral-400 font-cinzel">
                  {house.deanTitle}
                </span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-black text-white">
                Innovation Domains & Quest Directives
              </h2>
            </div>
          </div>

          {/* Domains list */}
          <div className="space-y-6">
            {houseDomains.map((domain) => (
              <div
                key={domain.id}
                className="bg-[#0E1320] border border-white/10 hover:border-white/25 rounded-lg p-5 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFF4D0]">
                      {domain.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-cormorant italic text-base">
                      {domain.title} — {domain.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F5DEB3] text-xs font-cinzel font-bold">
                      <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{domain.bounty}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-4">
                  {domain.description}
                </p>

                {/* Sub-challenge themes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  {domain.challengeThemes.map((theme) => (
                    <div
                      key={theme.title}
                      className="p-3 rounded bg-black/40 border border-white/5 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-cinzel text-xs font-bold text-white mb-1">
                          {theme.title}
                        </h4>
                        <p className="text-[11px] text-neutral-400 font-sans leading-relaxed mb-2">
                          {theme.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {theme.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Select track CTA */}
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      sounds.playChestFanfare();
                      onSelectTrack(domain);
                    }}
                    className="min-h-[44px] px-4 py-2.5 rounded-sm text-xs font-cinzel font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style={{
                      backgroundColor: `${house.primaryColor}20`,
                      color: house.primaryColor,
                      border: `1px solid ${house.primaryColor}50`,
                    }}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Pledge Fellowship to this Track</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
