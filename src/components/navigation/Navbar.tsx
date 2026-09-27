import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface NavbarProps {
  onOpenRegister: () => void;
  onWatchIntro?: () => void;
  onOpenUploadSlot?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegister,
  onWatchIntro,
  onOpenUploadSlot,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Required Navigation: THE QUEST, HOUSES, LAWS, QUEST MAP, VAULT, COUNCIL, FAQ
  const navLinks = [
    { name: 'THE QUEST', href: '#legend' },
    { name: 'HOUSES', href: '#houses' },
    { name: 'LAWS', href: '#rules' },
    { name: 'QUEST MAP', href: '#map' },
    { name: 'VAULT', href: '#vault' },
    { name: 'COUNCIL', href: '#council' },
  ];

  const handleLinkClick = () => {
    sounds.playWandSpark(750);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070B]/90 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-[0_4px_30px_rgba(0,0,0,0.85)] py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent border-b border-[#D4AF37]/15 py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: TERRAQUEST 2.0 */}
        <a
          href="#"
          onClick={() => sounds.playWandSpark(900)}
          className="flex items-baseline gap-1.5 group select-none min-h-[44px] items-center"
        >
          <span className="font-cinzel text-lg sm:text-2xl font-bold tracking-[0.16em] sm:tracking-[0.18em] text-[#D4AF37] group-hover:text-[#F7E7CE] transition-colors drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            TERRAQUEST
          </span>
          <span className="font-cinzel text-xs sm:text-sm font-light tracking-[0.2em] text-[#E8DCC4]/80">
            2.0
          </span>
        </a>

        {/* Right-side navigation links (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              onMouseEnter={() => sounds.playWandSpark(1000)}
              className="text-xs uppercase font-cinzel tracking-[0.2em] text-neutral-300 hover:text-[#FFF4D0] transition-colors relative py-1.5 group min-h-[44px] flex items-center"
            >
              {link.name}
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Far Right: ENROLL CTA (Desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSccRdraGjteLF2Eh0VRTZ4_Cm0XvbhRhpHXqENeUY2E8XRJEQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              sounds.playChestFanfare();
            }}
            className="min-h-[44px] px-5 py-2 rounded-sm border border-[#D4AF37]/80 text-[#D4AF37] hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] hover:text-[#FFF4D0] font-cinzel text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] cursor-pointer flex items-center justify-center"
          >
            ENROLL
          </a>
        </div>

        {/* Mobile & Tablet Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => {
              sounds.playWandSpark(700);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded text-[#D4AF37] border border-[#D4AF37]/40 bg-black/50 hover:bg-[#D4AF37]/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#07090E]/98 border-b border-[#D4AF37]/30 px-5 sm:px-6 py-5 mt-2 shadow-[0_15px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1 max-w-lg mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-xs uppercase font-cinzel tracking-[0.2em] text-neutral-200 hover:text-[#D4AF37] min-h-[44px] flex items-center px-3 rounded hover:bg-white/5 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSccRdraGjteLF2Eh0VRTZ4_Cm0XvbhRhpHXqENeUY2E8XRJEQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    sounds.playChestFanfare();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full min-h-[48px] py-3 rounded-sm border border-[#D4AF37] text-[#D4AF37] hover:text-black hover:bg-[#D4AF37] font-cinzel text-xs font-bold tracking-[0.25em] uppercase bg-[#D4AF37]/10 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                >
                  ENROLL
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
