import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, Check, Stamp } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface MagicalLetterProps {
  onRegisterNow?: () => void;
}

export const MagicalLetter: React.FC<MagicalLetterProps> = ({ onRegisterNow }) => {
  const [recipientName, setRecipientName] = useState('Esteemed AI Enchanter');
  const [isSealBroken, setIsSealBroken] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleBreakSeal = () => {
    sounds.playWaxSealCrack();
    setIsSealBroken(true);
  };

  const handleCopySummons = () => {
    sounds.playWandSpark(900);
    navigator.clipboard.writeText(
      `I have received my official summons to TERRAQUEST 2.0 — The Grand AI/ML Hackathon! Join my fellowship: ${window.location.href}`
    );
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="relative max-w-3xl mx-auto my-8">
      {/* Letter Container with Parchment Aesthetics */}
      <div className="relative bg-[#FBF6E9] text-[#1E160C] p-6 sm:p-12 rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.85)] border-4 border-[#8C7449] overflow-hidden">
        {/* Parchment Aging Stain / Vignette Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at center, transparent 60%, rgba(139, 94, 60, 0.4) 100%), linear-gradient(135deg, rgba(220, 190, 140, 0.2) 0%, rgba(140, 100, 50, 0.2) 100%)',
          }}
        />

        {/* Vintage Runic Corner Watermarks */}
        <div className="absolute top-4 left-4 text-[#8C7449]/40 font-medieval text-xl">✦</div>
        <div className="absolute top-4 right-4 text-[#8C7449]/40 font-medieval text-xl">✦</div>
        <div className="absolute bottom-4 left-4 text-[#8C7449]/40 font-medieval text-xl">✦</div>
        <div className="absolute bottom-4 right-4 text-[#8C7449]/40 font-medieval text-xl">✦</div>

        {/* Crest & Letterhead */}
        <div className="text-center relative z-10 border-b-2 border-[#8C7449]/40 pb-6 mb-6">
          <div className="w-16 h-16 mx-auto mb-2 rounded-full border-2 border-[#8C7449] flex items-center justify-center bg-[#EFE3C3] shadow-inner">
            <Stamp className="w-8 h-8 text-[#8C7449]" />
          </div>
          <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#8C7449] font-bold block mb-1">
            Department of Artificial Intelligence & Machine Learning
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-black text-[#2C1D0D] tracking-wider">
            TERRAQUEST CITADEL OF COMPUTATION
          </h2>
          <p className="font-cormorant italic text-sm text-[#5C452D]">
            Official Acceptance & Summoning Codex • Spring Equinox 2026
          </p>
        </div>

        {/* Interactive Name Customizer */}
        <div className="relative z-10 flex flex-wrap items-center gap-2 mb-6 bg-[#EFE3C3]/60 p-2.5 rounded border border-[#8C7449]/30 text-xs font-cinzel">
          <span className="text-[#8C7449] font-bold">Summoned Adept Name:</span>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            className="bg-transparent border-b border-[#8C7449] px-2 py-0.5 text-[#2C1D0D] font-bold focus:outline-none focus:border-[#2C1D0D] flex-1 min-w-[180px]"
            placeholder="Type your name here..."
          />
        </div>

        {/* Letter Body Content */}
        <div className="relative z-10 font-cormorant text-base sm:text-lg leading-relaxed text-[#2A1E11] space-y-4">
          <p className="font-bold text-xl text-[#1E160C]">
            To {recipientName || 'Esteemed Adept'},
          </p>
          <p>
            We are pleased to inform you that you and your prospective fellowship have been granted an imperial audience at <strong>TerraQuest 2.0</strong>, commencing on the twenty-fourth day of April in the year 2026.
          </p>
          <p>
            The Department of AI & Machine Learning has unsealed its high-compute cloisters. Four ancient Houses — <em>Pyrosync, Aethermind, Terraspectra, and Chronoveil</em> — have unfurled their banners to test the mettle of the realm&apos;s finest algorithmic architects.
          </p>
          <p>
            Enclosed within this missive is your authorization pass for thirty-six unbroken hours of continuous research, synthesis, and model deployment. The Grand Vault of Bounties totaling <strong>₹2,50,000</strong> shall be unlocked before the Faculty Council upon the final hour.
          </p>
          <p>
            You are requested to assemble your fellowship of two to four enchanters, bind your repositories to the quest portal, and arrive at the Citadel gates promptly at 08:30 IST.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-[#8C7449]/30">
            <div>
              <p className="italic text-sm text-[#5C452D]">Given under our hand and arcane seal,</p>
              <p className="font-cinzel font-bold text-base text-[#1E160C]">
                The Faculty High Council & Guild Keepers
              </p>
              <p className="text-xs text-[#8C7449] uppercase font-cinzel tracking-wider">
                Sanctum of AI/ML
              </p>
            </div>

            {/* Interactive Wax Seal */}
            <div className="flex flex-col items-center">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBreakSeal}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg transition-transform group cursor-pointer"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #C23B22 0%, #8A1C0E 70%, #580B04 100%)',
                  boxShadow: '0 8px 20px -3px rgba(138, 28, 14, 0.6), inset 0 2px 4px rgba(255, 150, 150, 0.5)',
                  border: '2px solid #580B04',
                }}
                title={isSealBroken ? 'Seal Broken' : 'Click to Break the Crimson Wax Seal!'}
              >
                {/* Wax seal crest impression */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#580B04]/60 flex items-center justify-center">
                  <span className="font-medieval text-xl sm:text-2xl text-[#FFD1C7] font-bold drop-shadow">
                    TQ
                  </span>
                </div>
                {isSealBroken && (
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FFD700] animate-spin-slow pointer-events-none" />
                )}
              </motion.button>
              <span className="text-[10px] uppercase font-cinzel tracking-widest text-[#8A1C0E] mt-1 font-bold">
                {isSealBroken ? '✦ Seal Verified' : 'Click Seal'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="relative z-10 mt-8 pt-4 border-t-2 border-[#8C7449]/40 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopySummons}
            className="flex items-center gap-1.5 px-4 py-2 rounded bg-[#EFE3C3] border border-[#8C7449] text-[#2C1D0D] font-cinzel text-xs font-bold hover:bg-[#E5D7B3] transition-colors"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Download className="w-3.5 h-3.5" />}
            <span>{isCopied ? 'Summons Copied!' : 'Copy Summons Text'}</span>
          </button>

          {onRegisterNow && (
            <button
              onClick={() => {
                sounds.playChestFanfare();
                onRegisterNow();
              }}
              className="px-5 py-2 rounded bg-[#8A1C0E] text-[#FFF4D0] font-cinzel text-xs font-bold tracking-wider hover:bg-[#6E1206] shadow-md transition-all"
            >
              Confirm Attendance & Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
