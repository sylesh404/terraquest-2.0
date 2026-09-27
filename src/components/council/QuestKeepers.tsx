import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

// Direct Vite imports for the 12 uploaded student coordinator photographs
import photoSakthi from '../../assets/4.png';
import photoPrasanna from '../../assets/5.png';
import photoYuktha from '../../assets/6.png';
import photoAnush from '../../assets/7.png';
import photoSanthosi from '../../assets/8.png';
import photoManas from '../../assets/9.png';
import photoAnjanaa from '../../assets/10.png';
import photoSahana from '../../assets/11.png';
import photoNikil from '../../assets/12.png';
import photoUtsaw from '../../assets/13.png';
import photoAnushman from '../../assets/14.png';
import photoPromod from '../../assets/15.png';

interface CoordinatorItem {
  id: string;
  name: string;
  yearDepartment: string;
  photo?: string;
  initials: string;
  isMain?: boolean;
}

// TOP ROW: 2 MAIN STUDENT COORDINATORS
const MAIN_COORDINATORS: CoordinatorItem[] = [
  {
    id: 'sakthi',
    name: 'SAKTHI SYLESH P K',
    yearDepartment: 'AIML - Final Year',
    photo: photoSakthi,
    initials: 'SS',
    isMain: true,
  },
  {
    id: 'prasanna',
    name: 'PRASANNA RAJ R',
    yearDepartment: 'AIML - Final Year',
    photo: photoPrasanna,
    initials: 'PR',
    isMain: true,
  },
];

// ROW 1: FIVE MEMBERS
const ROW_ONE_COORDINATORS: CoordinatorItem[] = [
  {
    id: 'yuktha',
    name: 'YUKTHA PRASHANTH KUMAR',
    yearDepartment: 'AIML - Final Year',
    photo: photoYuktha,
    initials: 'YP',
  },
  {
    id: 'santhosi',
    name: 'SANTHOSI SENTHIL',
    yearDepartment: 'AIML - Final Year',
    photo: photoSanthosi,
    initials: 'SS',
  },
  {
    id: 'anush',
    name: 'ANUSH',
    yearDepartment: 'AIML - Final Year',
    photo: photoAnush,
    initials: 'AN',
  },
  {
    id: 'manas',
    name: 'MANAS SINGH',
    yearDepartment: 'AIML - 3rd Year',
    photo: photoManas,
    initials: 'MS',
  },
  {
    id: 'utsaw',
    name: 'UTSAW CHANDRA',
    yearDepartment: 'AIML - 3rd Year',
    photo: photoUtsaw,
    initials: 'UC',
  },
];

// ROW 2: FIVE MEMBERS
const ROW_TWO_COORDINATORS: CoordinatorItem[] = [
  {
    id: 'promod',
    name: 'PROMOD',
    yearDepartment: 'AIML - 3rd Year',
    photo: photoPromod,
    initials: 'PR',
  },
  {
    id: 'anushman',
    name: 'ANUSHUMAN SHARMA',
    yearDepartment: 'AIML - 3rd Year',
    photo: photoAnushman,
    initials: 'AS',
  },
  {
    id: 'anjanaa',
    name: 'ANJANAA BLACHANDER',
    yearDepartment: 'AIML - 2nd Year',
    photo: photoAnjanaa,
    initials: 'AB',
  },
  {
    id: 'sahana',
    name: 'SAHANA KEMBURU',
    yearDepartment: 'AIML - 2nd Year',
    photo: photoSahana,
    initials: 'SK',
  },
  {
    id: 'nikil',
    name: 'NIKHIL REDDY N V',
    yearDepartment: 'AIML - 2nd Year',
    photo: photoNikil,
    initials: 'NR',
  },
];

// Flat list of the 10 regular coordinators for mobile 2-column flow
const ALL_REGULAR_COORDINATORS: CoordinatorItem[] = [
  ...ROW_ONE_COORDINATORS,
  ...ROW_TWO_COORDINATORS,
];

const CoordinatorCard: React.FC<{
  coordinator: CoordinatorItem;
  delay: number;
  isMain?: boolean;
}> = ({ coordinator, delay, isMain }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 0.45, ease: 'easeOut' }}
      onMouseEnter={() => sounds.playWandSpark(isMain ? 920 : 840)}
      className="group relative bg-transparent text-center flex flex-col items-center justify-start p-2 sm:p-3 transition-all duration-300 hover:-translate-y-1 select-none cursor-pointer h-full"
    >
      {isMain && (
        <div className="mb-2.5">
          <span className="inline-block px-3 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#FFF5D0] text-[9px] sm:text-[10px] font-cinzel font-bold tracking-widest uppercase shadow-[0_0_12px_rgba(212,175,55,0.2)]">
            ★ MAIN COORDINATOR ★
          </span>
        </div>
      )}

      {/* Natural Photo Ratio Portrait - Uncropped */}
      <div
        className={`flex items-center justify-center w-full ${
          isMain ? 'h-48 sm:h-56 md:h-64 mb-3 sm:mb-4' : 'h-32 sm:h-36 lg:h-40 mb-2.5 sm:mb-3'
        }`}
      >
        {coordinator.photo && !imageFailed ? (
          <img
            src={coordinator.photo}
            alt={coordinator.name}
            onError={() => setImageFailed(true)}
            className={`${
              isMain
                ? 'h-48 sm:h-56 md:h-64'
                : 'h-32 sm:h-36 lg:h-40'
            } w-auto max-w-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] group-hover:scale-[1.04] transition-transform duration-300 select-none`}
            loading="eager"
          />
        ) : (
          <div
            className={`${
              isMain ? 'h-44 sm:h-52 md:h-56 w-32 sm:w-36' : 'h-28 sm:h-32 lg:h-36 w-20 sm:w-24'
            } rounded-lg bg-gradient-to-br from-[#162032] via-[#0E1522] to-[#070A12] border border-[#D4AF37]/35 flex flex-col items-center justify-center select-none shadow-[0_4px_16px_rgba(0,0,0,0.5)] group-hover:border-[#F2CC69]/60 transition-colors duration-300`}
          >
            <span
              className={`font-cinzel font-bold text-[#F3E5AB] tracking-widest leading-none ${
                isMain ? 'text-xl sm:text-2xl md:text-3xl' : 'text-sm sm:text-base md:text-lg'
              }`}
            >
              {coordinator.initials}
            </span>
            <span className="text-[8px] sm:text-[9px] text-[#D4AF37] font-cinzel tracking-wider mt-1 uppercase">
              AIML
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h4
        className={`font-cinzel font-bold text-[#FFF5D0] group-hover:text-[#F2CC69] transition-colors duration-200 tracking-wide mb-1 leading-snug ${
          isMain ? 'text-base sm:text-lg md:text-xl' : 'text-xs sm:text-sm'
        }`}
      >
        {coordinator.name}
      </h4>

      {/* Year & Department */}
      <p
        className={`font-sans font-semibold text-[#D4AF37] tracking-wider uppercase ${
          isMain ? 'text-xs sm:text-sm' : 'text-[11px] sm:text-xs'
        }`}
      >
        {coordinator.yearDepartment}
      </p>
    </motion.div>
  );
};

export const QuestKeepers: React.FC = () => {
  return (
    <div className="mt-16 sm:mt-24 bg-transparent">
      {/* ==================================================
          SECTION HEADER
          ================================================== */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5DEB3] text-xs font-cinzel tracking-widest uppercase mb-3">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span>STUDENT ARCHITECTS</span>
        </div>
        <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] to-[#D4AF37] mb-2 tracking-wide">
          STUDENT COORDINATORS
        </h3>
        <p className="font-cormorant italic text-neutral-400 text-base sm:text-lg">
          The student leaders and coordinators orchestrating the enchantments of TerraQuest 2.0
        </p>
      </div>

      {/* ==================================================
          TOP ROW: 2 MAIN STUDENT COORDINATORS
          Left: SAKTHI SYLESH P K | Right: PRASANNA RAJ R
          ================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-sm sm:max-w-2xl mx-auto mb-10 sm:mb-14 items-stretch">
        {MAIN_COORDINATORS.map((coord, idx) => (
          <CoordinatorCard
            key={coord.id}
            coordinator={coord}
            delay={idx * 0.12}
            isMain={true}
          />
        ))}
      </div>

      {/* ==================================================
          DESKTOP VIEW: EXACT 5 + 5 GRID (>= 1024px)
          Row 1: YUKTHA | SANTHOSI | ANUSH | MANAS | UTSAW
          Row 2: PROMOD | ANUSHUMAN | ANJANAA | SAHANA | NIKIL
          ================================================== */}
      <div className="hidden lg:block space-y-5 max-w-7xl mx-auto">
        {/* Row 1 — Five Members */}
        <div className="grid grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {ROW_ONE_COORDINATORS.map((coord, idx) => (
            <CoordinatorCard
              key={coord.id}
              coordinator={coord}
              delay={0.15 + idx * 0.06}
              isMain={false}
            />
          ))}
        </div>

        {/* Row 2 — Five Members */}
        <div className="grid grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {ROW_TWO_COORDINATORS.map((coord, idx) => (
            <CoordinatorCard
              key={coord.id}
              coordinator={coord}
              delay={0.45 + idx * 0.06}
              isMain={false}
            />
          ))}
        </div>
      </div>

      {/* ==================================================
          MOBILE & TABLET VIEW: CLEAN 2-COLUMN RESPONSIVE GRID (< 1024px)
          [YUKTHA] [SANTHOSI]
          [ANUSH]  [MANAS]
          [UTSAW]  [PROMOD]
          [ANUSHUMAN] [ANJANAA]
          [SAHANA] [NIKIL]
          ================================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:hidden gap-3 sm:gap-4 max-w-5xl mx-auto items-stretch">
        {ALL_REGULAR_COORDINATORS.map((coord, idx) => (
          <CoordinatorCard
            key={coord.id}
            coordinator={coord}
            delay={0.1 + idx * 0.04}
            isMain={false}
          />
        ))}
      </div>
    </div>
  );
};
