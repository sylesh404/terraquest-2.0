import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, CheckCircle2 } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultHouseId?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [fellowshipName, setFellowshipName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [squadSize, setSquadSize] = useState('3');
  const [questPitch, setQuestPitch] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playChestFanfare();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-[min(92vw,42rem)] bg-[#0D121D] border-2 border-[#D4AF37] rounded-xl p-5 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.4)] my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={() => {
              sounds.playWandSpark(700);
              onClose();
            }}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close registration modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-[#D4AF37]/30 pb-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-cinzel tracking-widest text-[#D4AF37] font-bold">
                    Official Enlistment Registry
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white">
                    PLEDGE YOUR FELLOWSHIP
                  </h3>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-cinzel text-neutral-300 mb-1">
                      Fellowship / Team Moniker *
                    </label>
                    <input
                      type="text"
                      required
                      value={fellowshipName}
                      onChange={(e) => setFellowshipName(e.target.value)}
                      placeholder="e.g. Order of the Neural Phoenix"
                      className="w-full bg-[#070A11] border border-white/15 focus:border-[#D4AF37] rounded p-2.5 text-xs sm:text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel text-neutral-300 mb-1">
                      Grand Enchanter (Lead Name) *
                    </label>
                    <input
                      type="text"
                      required
                      value={leaderName}
                      onChange={(e) => setLeaderName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-[#070A11] border border-white/15 focus:border-[#D4AF37] rounded p-2.5 text-xs sm:text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-cinzel text-neutral-300 mb-1">
                      Arcane Transmission (Email) *
                    </label>
                    <input
                      type="email"
                      required
                      value={leaderEmail}
                      onChange={(e) => setLeaderEmail(e.target.value)}
                      placeholder="lead@university.edu"
                      className="w-full bg-[#070A11] border border-white/15 focus:border-[#D4AF37] rounded p-2.5 text-xs sm:text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel text-neutral-300 mb-1">
                      Institution / College Sanctum *
                    </label>
                    <input
                      type="text"
                      required
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                      placeholder="University / Institute name"
                      className="w-full bg-[#070A11] border border-white/15 focus:border-[#D4AF37] rounded p-2.5 text-xs sm:text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-cinzel text-neutral-300 mb-1">
                    Fellowship Size (2 - 4 Adepts)
                  </label>
                  <select
                    value={squadSize}
                    onChange={(e) => setSquadSize(e.target.value)}
                    className="w-full bg-[#070A11] border border-white/15 focus:border-[#D4AF37] rounded p-2.5 text-xs sm:text-sm text-white focus:outline-none"
                  >
                    <option value="2">2 Enchanters</option>
                    <option value="3">3 Enchanters (Recommended)</option>
                    <option value="4">4 Enchanters (Full Squad)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-cinzel text-neutral-300 mb-1">
                    Initial Quest Vision / Grimoire Idea
                  </label>
                  <textarea
                    rows={3}
                    value={questPitch}
                    onChange={(e) => setQuestPitch(e.target.value)}
                    placeholder="Briefly describe what AI artifact, neural architecture, or vision pipeline your fellowship plans to craft..."
                    className="w-full bg-[#070A11] border border-white/15 focus:border-[#D4AF37] rounded p-2.5 text-xs sm:text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#FCECB5] to-[#B8860B] text-[#080B12] font-cinzel font-bold text-xs sm:text-sm tracking-widest uppercase shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition-all"
                  >
                    Seal the Oath & Submit Fellowship
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-[#10B981] bg-[#10B981]/15 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-[#10B981]" />
              </div>
              <span className="text-xs uppercase font-cinzel tracking-widest text-[#10B981] font-bold block mb-1">
                ✦ Inscription Etched into the Registry ✦
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white mb-2">
                OATH RECEIVED, FELLOWSHIP {fellowshipName.toUpperCase() || 'ADEPT'}!
              </h3>
              <p className="font-cormorant italic text-lg text-[#F5DEB3] max-w-md mx-auto mb-4">
                &ldquo;Your pledge has been sealed with royal crimson wax. The Council of AI/ML shall review your credentials and dispatch your formal summoning owl.&rdquo;
              </p>
              <div className="bg-[#070A11] border border-white/10 rounded p-4 max-w-md mx-auto text-xs text-neutral-300 font-sans mb-6 text-left space-y-1">
                <p><strong>Fellowship:</strong> {fellowshipName || 'Fellowship'}</p>
                <p><strong>Grand Enchanter:</strong> {leaderName}</p>
                <p><strong>Summoning Dispatch:</strong> {leaderEmail}</p>
                <p><strong>Sanctum:</strong> {collegeName}</p>
                <p><strong>Fellowship Size:</strong> {squadSize} Enchanters</p>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded bg-[#D4AF37] text-black font-cinzel font-bold text-xs tracking-wider"
              >
                Return to the Citadel
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

