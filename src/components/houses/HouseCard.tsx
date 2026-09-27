import React from 'react';
import { motion } from 'framer-motion';
import { House } from '../../data/houses';
import { sounds } from '../../utils/soundEffects';

interface HouseCardProps {
  house: House;
  isSelected: boolean;
  isAnySelected: boolean;
  onSelect: (house: House) => void;
}

export const HouseCard: React.FC<HouseCardProps> = ({
  house,
  isSelected,
  isAnySelected,
  onSelect,
}) => {
  const isDimmed = isAnySelected && !isSelected;

  return (
    <motion.button
      type="button"
      whileHover={{ y: -8, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={() => {
        sounds.playHouseChime(house.id);
        onSelect(house);
      }}
      className={`group relative w-full text-left rounded-xl transition-all duration-300 flex flex-col items-center p-2.5 sm:p-5 cursor-pointer focus:outline-none ${
        isSelected
          ? 'scale-[1.02] sm:scale-[1.04] z-20'
          : isDimmed
          ? 'opacity-65 hover:opacity-95'
          : 'opacity-100 hover:opacity-100'
      }`}
      style={{
        backgroundColor: 'rgba(9, 13, 22, 0.85)',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: isSelected ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)',
        boxShadow: isSelected
          ? `0 0 35px rgba(212, 175, 55, 0.5), 0 0 15px ${house.glowColor}, inset 0 0 20px rgba(212, 175, 55, 0.12)`
          : '0 4px 25px rgba(0, 0, 0, 0.6)',
      }}
    >
      {/* Subtle House Tint on Hover/Select */}
      <div
        className="absolute inset-0 rounded-xl opacity-15 pointer-events-none transition-opacity duration-300 group-hover:opacity-30"
        style={{ background: house.accentBg }}
      />

      {/* Selected Gold Glow Ring behind emblem */}
      {isSelected && (
        <div
          className="absolute -inset-1 rounded-xl pointer-events-none opacity-40 blur-md transition-all duration-500"
          style={{
            background: `radial-gradient(circle, ${house.primaryColor} 0%, rgba(212, 175, 55, 0.35) 70%, transparent 100%)`,
          }}
        />
      )}

      {/* Emblem Frame / Image Container */}
      <div className="relative w-full aspect-[3/4] max-h-40 sm:max-h-72 flex items-center justify-center p-2 sm:p-3 rounded-lg bg-black/45 border border-white/10 overflow-hidden mb-2 sm:mb-4 transition-all duration-300 group-hover:border-[#D4AF37]/40 shadow-inner">
        <img
          src={house.image}
          alt={`${house.name} Crest`}
          className="w-full h-full object-contain filter drop-shadow-[0_8px_18px_rgba(0,0,0,0.85)] transition-all duration-300 group-hover:brightness-110"
          loading="eager"
        />
      </div>

      {/* House Name & Theme */}
      <div className="w-full text-center relative z-10">
        <h3
          className={`font-cinzel text-xs sm:text-xl font-bold tracking-wider uppercase transition-colors duration-200 ${
            isSelected
              ? 'text-[#FFF5D0] drop-shadow-[0_0_12px_rgba(212,175,55,0.7)]'
              : 'text-neutral-200 group-hover:text-white'
          }`}
        >
          {house.name}
        </h3>
        <p
          className="font-cinzel text-[8.5px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase mt-0.5 sm:mt-1 transition-colors duration-200"
          style={{ color: isSelected ? house.primaryColor : 'rgba(212, 175, 55, 0.8)' }}
        >
          {house.theme}
        </p>
      </div>

      {/* Active Indicator Dot */}
      {isSelected && (
        <motion.div
          layoutId="active-house-dot"
          className="w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2"
          style={{ backgroundColor: '#D4AF37', boxShadow: '0 0 10px #D4AF37' }}
        />
      )}
    </motion.button>
  );
};
