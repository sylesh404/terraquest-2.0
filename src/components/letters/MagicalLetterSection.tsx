import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Stamp, Download, Check, Key } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface MagicalLetterSectionProps {
  onRegisterClick: () => void;
}

export const MagicalLetterSection: React.FC<MagicalLetterSectionProps> = ({
  onRegisterClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recipientName, setRecipientName] = useState('Esteemed AI Enchanter');
  const [isCopied, setIsCopied] = useState(false);

  const handleOpenLetter = () => {
    sounds.playWaxSealCrack();
    setIsOpen(true);
  };

  const handleCopy = () => {
    sounds.playWandSpark(900);
    navigator.clipboard.writeText(
      `I have received my official summoning codex to TERRAQUEST 2.0! Join my fellowship: ${window.location.href}`
    );
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="letters" className="relative py-28 sm:py-36 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5DEB3] text-xs font-cinzel tracking-widest uppercase mb-4">
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Astral Dispatch</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#D4AF37] to-[#B8860B] mb-4">
            THE SUMMONING MISSIVE
          </h2>
          <p className="font-cormorant italic text-lg sm:text-xl text-neutral-300">
            &ldquo;An enchanted parchment arrives sealed in imperial crimson wax. Break the seal to read your fellowship’s decree.&rdquo;
          </p>
        </div>

        {/* Tactile Sealed Envelope vs Unrolled Parchment */}
        <div className="relative">
          {!isOpen ? (
            /* SEALED ENVELOPE STATE */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              onClick={handleOpenLetter}
              className="relative max-w-xl mx-auto bg-gradient-to-b from-[#231A12] to-[#140F0A] border-2 border-[#8C7449] rounded-xl p-10 sm:p-14 text-center cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-[#D4AF37] transition-all group overflow-hidden"
            >
              {/* Envelope flap lines */}
              <div className="absolute top-0 left-0 right-0 h-28 border-b border-[#8C7449]/40 bg-[#1A130D]/80 [clip-path:polygon(0_0,100%_0,50%_100%)] pointer-events-none" />

              {/* Glowing Pulse Aura */}
              <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors pointer-events-none" />

              {/* 3D Wax Seal Button */}
              <div className="relative z-10 flex flex-col items-center mt-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(184,30,30,0.6)] cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(circle at 35% 35%, #C23B22 0%, #8A1C0E 70%, #580B04 100%)',
                    border: '2px solid #580B04',
                  }}
                >
                  <span className="font-medieval text-2xl sm:text-3xl text-[#FFD1C7] font-bold">
                    TQ
                  </span>
                </motion.div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7E7CE] mt-6 mb-2">
                  CONFIDENTIAL DECREE ENCLOSED
                </h3>
                <p className="font-cormorant italic text-base text-neutral-400 max-w-sm mb-4">
                  Addressed to the prospective sorcerers of the AI/ML Hackathon.
                </p>

                <span className="inline-flex items-center gap-2 text-xs font-cinzel tracking-widest text-[#D4AF37] font-bold uppercase group-hover:text-white transition-colors">
                  <Key className="w-3.5 h-3.5" />
                  <span>CLICK SEAL TO BREAK & UNROLL SCROLL</span>
                </span>
              </div>
            </motion.div>
          ) : (
            /* UNROLLED ENCHANTED PARCHMENT */
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative bg-[#FBF6E9] text-[#1E160C] p-8 sm:p-14 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] border-4 border-[#8C7449] overflow-hidden"
            >
              {/* Parchment Aging Stain / Vignette Texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse at center, transparent 60%, rgba(139, 94, 60, 0.4) 100%), linear-gradient(135deg, rgba(220, 190, 140, 0.2) 0%, rgba(140, 100, 50, 0.2) 100%)',
                }}
              />

              {/* Antique Corner Symbols */}
              <div className="absolute top-4 left-4 text-[#8C7449]/50 font-medieval text-xl">✦</div>
              <div className="absolute top-4 right-4 text-[#8C7449]/50 font-medieval text-xl">✦</div>
              <div className="absolute bottom-4 left-4 text-[#8C7449]/50 font-medieval text-xl">✦</div>
              <div className="absolute bottom-4 right-4 text-[#8C7449]/50 font-medieval text-xl">✦</div>

              {/* Letterhead */}
              <div className="text-center relative z-10 border-b-2 border-[#8C7449]/40 pb-6 mb-8">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full border-2 border-[#8C7449] flex items-center justify-center bg-[#EFE3C3] shadow-inner">
                  <Stamp className="w-7 h-7 text-[#8C7449]" />
                </div>
                <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#8C7449] font-bold block mb-1">
                  Department of Artificial Intelligence & Machine Learning
                </span>
                <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-[#2C1D0D] tracking-wider">
                  TERRAQUEST 2.0 SUMMONS
                </h3>
                <p className="font-cormorant italic text-sm text-[#5C452D]">
                  Spring Equinox Edition • 24-Hour Crucible of Machine Learning
                </p>
              </div>

              {/* Interactive Inscription Name */}
              <div className="relative z-10 flex flex-wrap items-center gap-2 mb-6 bg-[#EFE3C3]/70 p-3 rounded border border-[#8C7449]/40 text-xs font-cinzel">
                <span className="text-[#8C7449] font-bold">Summoned Adept Name:</span>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="bg-transparent border-b border-[#8C7449] px-2 py-0.5 text-[#2C1D0D] font-bold focus:outline-none focus:border-[#2C1D0D] flex-1 min-w-[200px]"
                  placeholder="Enter your name..."
                />
              </div>

              {/* Letter Content */}
              <div className="relative z-10 font-cormorant text-lg sm:text-xl leading-relaxed text-[#2A1E11] space-y-4">
                <p className="font-bold text-2xl text-[#1E160C]">
                  Greetings, {recipientName || 'Esteemed Enchanter'},
                </p>
                <p>
                  You are hereby summoned to join the fellowship of innovators at <strong>TerraQuest 2.0</strong>, scheduled to commence on the twenty-fourth day of April.
                </p>
                <p>
                  The Department of Artificial Intelligence & Machine Learning opens its highest-compute sanctum for twenty-four unbroken hours. The four noble houses — <em>Gryffindor, Slytherin, Ravenclaw, and Hufflepuff</em> — have posted their challenges across autonomous swarms, cognitive reasoning, cybersecurity, and Earth intelligence.
                </p>
                <p>
                  The Grand Prize Vault of <strong>₹2,50,000+</strong>, along with seed venture access and proprietary cloud compute grants, shall be unlocked before the Faculty High Council upon the conclusion of the final demo trial.
                </p>
                <p>
                  Assemble your fellowship of 2 to 4 sorcerers and prepare your repositories. The portal awaits your entry.
                </p>
              </div>

              {/* Actions Footer */}
              <div className="relative z-10 mt-10 pt-6 border-t-2 border-[#8C7449]/40 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-[#EFE3C3] border border-[#8C7449] text-[#2C1D0D] font-cinzel text-xs font-bold hover:bg-[#E5D7B3] transition-colors"
                >
                  {isCopied ? <Check className="w-4 h-4 text-green-700" /> : <Download className="w-4 h-4" />}
                  <span>{isCopied ? 'Summons Copied!' : 'Copy Missive'}</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      sounds.playScrollOpen();
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 text-xs font-cinzel text-[#8C7449] hover:text-[#2C1D0D]"
                  >
                    Reseal Envelope
                  </button>

                  <button
                    onClick={() => {
                      sounds.playChestFanfare();
                      onRegisterClick();
                    }}
                    className="px-6 py-2.5 rounded bg-[#8A1C0E] text-[#FFF4D0] font-cinzel text-xs font-bold tracking-widest uppercase hover:bg-[#6E1206] shadow-md transition-all"
                  >
                    Register Fellowship Now →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
