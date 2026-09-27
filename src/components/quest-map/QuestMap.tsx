import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react';
import { TIMELINE_DAYS, TimelineEvent } from '../../data/timeline';
import { sounds } from '../../utils/soundEffects';

export const QuestMap: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<1 | 2>(1);

  const currentDayData = selectedDay === 1 ? TIMELINE_DAYS[0] : TIMELINE_DAYS[1];

  const renderTimelineItem = (event: TimelineEvent, index: number) => {
    const isImportant = event.isImportant;

    return (
      <div
        key={event.id}
        onMouseEnter={() => sounds.playWandSpark(isImportant ? 1100 : 800 + (index % 5) * 40)}
        className="relative flex items-center md:items-center py-2.5 sm:py-3 group"
      >
        {/* ==================================================
            DESKTOP LAYOUT (md: and up)
            Left: Time | Center: Marker | Right: Event Card
            ================================================== */}

        {/* Desktop Left: Time */}
        <div className="hidden md:block w-36 text-right pr-6 shrink-0">
          <span
            className={`font-cinzel tracking-wider block transition-colors ${
              isImportant
                ? 'text-sm font-bold text-[#F2CC69] drop-shadow-[0_0_10px_rgba(242,204,105,0.6)]'
                : 'text-xs sm:text-sm font-semibold text-[#D8AE4A]'
            }`}
          >
            {event.time}
          </span>
        </div>

        {/* Center / Left Marker (Center on Desktop, Left-aligned on Mobile) */}
        <div className="absolute left-3.5 md:relative md:left-auto flex items-center justify-center shrink-0 z-10">
          {isImportant ? (
            <div className="relative flex items-center justify-center">
              <span className="absolute w-5 h-5 rounded-full bg-[#F2CC69]/30 animate-ping pointer-events-none" />
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#F2CC69] border-2 border-[#FFFDF0] shadow-[0_0_15px_rgba(242,204,105,0.9)]" />
            </div>
          ) : (
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D8AE4A] border border-[#050A0F] shadow-[0_0_8px_rgba(216,174,74,0.5)] group-hover:bg-[#F2CC69] group-hover:scale-125 transition-all duration-300" />
          )}
        </div>

        {/* Event Card (Padded left on Mobile to clear the vertical line, standard on Desktop) */}
        <div className="w-full pl-9 md:pl-6 md:flex-1">
          <div
            className={`rounded-lg transition-all duration-300 ${
              isImportant
                ? 'bg-[#08131D]/95 border-2 border-[#F2CC69] p-3.5 sm:p-4 shadow-[0_0_25px_rgba(242,204,105,0.25)] hover:shadow-[0_0_35px_rgba(242,204,105,0.4)]'
                : 'bg-[#08131D]/80 border border-[#D8AE4A]/25 p-2.5 sm:p-3 shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:border-[#D8AE4A]/60 hover:bg-[#08131D]'
            }`}
          >
            {/* Mobile Time Stamp (shown inside card on mobile) */}
            <div className="md:hidden mb-1">
              <span
                className={`font-cinzel text-[11px] font-bold tracking-wider ${
                  isImportant ? 'text-[#F2CC69] drop-shadow-[0_0_6px_rgba(242,204,105,0.6)]' : 'text-[#D8AE4A]'
                }`}
              >
                {event.time}
              </span>
            </div>

            {/* Event Name */}
            <span
              className={`font-sans block leading-snug ${
                isImportant
                  ? 'text-sm sm:text-base font-bold text-[#FFFDF0] tracking-wide'
                  : 'text-xs sm:text-sm font-medium text-[#F5EBD5]'
              }`}
            >
              {event.title}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="map" className="relative py-20 sm:py-28 z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================================================
            SECTION HEADER
            ================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8AE4A]/10 border border-[#D8AE4A]/30 text-[#F5EBD5] text-xs font-cinzel tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-[#D8AE4A]" />
            <span>Chronicles of the Quest</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#D8AE4A] to-[#B8860B] mb-4">
            THE QUEST MAP &amp; TIMELINE
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic">
            &ldquo;Follow the journey from the opening ceremony to the final submission.&rdquo;
          </p>
        </div>

        {/* ==================================================
            PREMIUM DAY SWITCHER TOGGLE
            ================================================== */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#0A0E18]/85 border border-[#D8AE4A]/35 shadow-[0_4px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(216,174,74,0.15)] backdrop-blur-md">
            <button
              type="button"
              onClick={() => {
                if (selectedDay !== 1) {
                  sounds.playWandSpark(900);
                  setSelectedDay(1);
                }
              }}
              className={`px-5 sm:px-8 py-2 sm:py-2.5 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer select-none ${
                selectedDay === 1
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#DFBF58] to-[#B8860B] text-[#0A0D14] shadow-[0_0_20px_rgba(212,175,55,0.5)] border border-[#FFF5D0]/60'
                  : 'text-[#A9A08F] hover:text-[#F5EBD5] hover:bg-[#D4AF37]/10'
              }`}
              aria-label="View Day 1 Schedule"
            >
              DAY 1
            </button>
            <button
              type="button"
              onClick={() => {
                if (selectedDay !== 2) {
                  sounds.playWandSpark(1050);
                  setSelectedDay(2);
                }
              }}
              className={`px-5 sm:px-8 py-2 sm:py-2.5 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer select-none ${
                selectedDay === 2
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#DFBF58] to-[#B8860B] text-[#0A0D14] shadow-[0_0_20px_rgba(212,175,55,0.5)] border border-[#FFF5D0]/60'
                  : 'text-[#A9A08F] hover:text-[#F5EBD5] hover:bg-[#D4AF37]/10'
              }`}
              aria-label="View Day 2 Schedule"
            >
              DAY 2
            </button>
          </div>
        </div>

        {/* ==================================================
            SWITCHED DAY SCHEDULE CONTENT WITH ELEGANT TRANSITION
            ================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDayData.dayTitle}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* Date & Day Title */}
            <div className="mb-8 text-center">
              <span className="font-cinzel text-xs tracking-[0.28em] uppercase text-[#D8AE4A] font-bold block mb-1">
                {currentDayData.date}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#F5EBD5] tracking-wide">
                {currentDayData.dayTitle}
              </h3>
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative max-w-xl mx-auto">
              {/* Continuous Vertical Timeline Line */}
              <div className="absolute left-[18px] md:left-[155px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#D8AE4A]/70 via-[#F2CC69]/40 to-[#D8AE4A]/70 pointer-events-none" />

              <div className="flex flex-col">
                {currentDayData.events.map((event, idx) => renderTimelineItem(event, idx))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
