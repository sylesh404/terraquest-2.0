import React from 'react';
import { Compass, Sparkles, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface FooterProps {
  onReopenIntro?: () => void;
  onOpenLetter?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReopenIntro, onOpenLetter }) => {
  const scrollToTop = () => {
    sounds.playWandSpark(1000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060A] text-neutral-300 pt-16 sm:pt-20 pb-12 border-t border-[#D4AF37]/20 overflow-hidden z-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-[#141824] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <span className="font-cinzel text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4AF37]">
                TERRAQUEST 2.0
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed max-w-sm">
              The premier wizarding-academy-inspired AI/ML hackathon organized by the Department of Artificial Intelligence & Machine Learning. Where algorithms transcend code into computational alchemy.
            </p>
            <div className="pt-2 flex items-center gap-2 sm:gap-3 flex-wrap">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TerraQuest GitHub"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TerraQuest LinkedIn"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TerraQuest Twitter"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:terraquest@aiml.edu"
                aria-label="TerraQuest Email"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column: The Citadel */}
          <div>
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              The Citadel
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Sanctum Overview
                </a>
              </li>
              <li>
                <a href="#houses" className="hover:text-white transition-colors">
                  The Four Houses
                </a>
              </li>
              <li>
                <a href="#map" className="hover:text-white transition-colors">
                  Quest Path & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Trials & Vault */}
          <div>
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              Trials & Vault
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-400">
              <li>
                <a href="#vault" className="hover:text-white transition-colors">
                  Bounty Treasury
                </a>
              </li>
              <li>
                <a href="#rules" className="hover:text-white transition-colors">
                  Laws of the Quest
                </a>
              </li>
              <li>
                <a href="#council" className="hover:text-white transition-colors">
                  Grand Faculty Council
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Arcane Actions */}
          <div>
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              Enchantments
            </h4>
            <div className="space-y-3">
              {onOpenLetter && (
                <button
                  onClick={() => {
                    sounds.playWaxSealCrack();
                    onOpenLetter();
                  }}
                  className="w-full text-left text-xs text-[#F5DEB3] hover:text-white font-cinzel underline underline-offset-4"
                >
                  Summon Acceptance Scroll ↗
                </button>
              )}
              {onReopenIntro && (
                <button
                  onClick={() => {
                    sounds.playDoorOpen();
                    if (onReopenIntro) onReopenIntro();
                  }}
                  className="w-full text-left text-xs text-neutral-400 hover:text-[#D4AF37] font-cinzel"
                >
                  Re-experience Gate Unsealing ↺
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-cinzel">
          <p>
            © 2026 Department of Artificial Intelligence & Machine Learning. All Rights Reserved. Crafted with computational sorcery.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-[#D4AF37] transition-colors"
          >
            <span>Ascend to Apex</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
