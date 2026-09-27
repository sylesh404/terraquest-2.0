import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scroll, ChevronDown, ChevronUp, ExternalLink, Sparkles, BookMarked } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

export interface ArchiveRecord {
  id: string;
  category: 'Spellbook (Problem Statements)' | 'Grimoire (Starter Kits)' | 'Decree (Evaluation Rubric)' | 'Enchanted Datasets';
  title: string;
  archivalCode: string;
  summary: string;
  fullDecree: string;
  keyDirectives: string[];
  relicLinkText?: string;
  relicLinkUrl?: string;
}

interface ScrollDocumentProps {
  record: ArchiveRecord;
}

export const ScrollDocument: React.FC<ScrollDocumentProps> = ({ record }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    sounds.playScrollOpen();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative bg-gradient-to-b from-[#1C1710] to-[#120F0A] border-2 border-[#8C7449]/40 hover:border-[#D4AF37] rounded-xl p-5 sm:p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
      {/* Top Banner */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[10px] uppercase font-cinzel font-bold tracking-widest px-2.5 py-0.5 rounded bg-[#D4AF37]/15 text-[#F5DEB3] border border-[#D4AF37]/30">
          {record.category}
        </span>
        <span className="font-medieval text-xs text-[#8C7449]">
          Codex {record.archivalCode}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
        <Scroll className="w-4 h-4 text-[#D4AF37] shrink-0" />
        <span>{record.title}</span>
      </h3>

      {/* Summary */}
      <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-4">
        {record.summary}
      </p>

      {/* Toggle View Decree Button */}
      <button
        onClick={toggleExpand}
        className="flex items-center gap-1.5 text-xs font-cinzel text-[#D4AF37] hover:text-[#FFF4D0] font-semibold transition-colors"
      >
        <span>{isExpanded ? 'Roll Scroll Up' : 'Unroll Full Ancient Parchment'}</span>
        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {/* Expandable Inner Parchment Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-[#8C7449]/30 overflow-hidden"
          >
            <div className="bg-[#14100B] p-4 rounded border border-[#8C7449]/20 font-cormorant text-neutral-200 text-sm sm:text-base leading-relaxed mb-4 space-y-3">
              <p className="italic text-[#F5DEB3] font-sans text-xs uppercase tracking-wider">
                Full Decreed Directives:
              </p>
              <p>{record.fullDecree}</p>

              <div>
                <strong className="text-xs font-cinzel text-white block mb-1">
                  Required Incantations & Deliverables:
                </strong>
                <ul className="list-disc pl-5 space-y-1 font-sans text-xs text-neutral-300">
                  {record.keyDirectives.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>

            {record.relicLinkText && (
              <a
                href={record.relicLinkUrl || '#'}
                onClick={() => sounds.playWandSpark(950)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F5DEB3] font-cinzel text-xs font-bold hover:bg-[#D4AF37]/25 transition-all"
              >
                <BookMarked className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{record.relicLinkText}</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
