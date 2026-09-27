import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MagicalLetter } from './MagicalLetter';
import { sounds } from '../../utils/soundEffects';

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterNow: () => void;
}

export const LetterModal: React.FC<LetterModalProps> = ({
  isOpen,
  onClose,
  onRegisterNow,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-3xl my-8"
        >
          {/* Close button floating top right */}
          <button
            onClick={() => {
              sounds.playWandSpark(700);
              onClose();
            }}
            className="absolute -top-3 -right-3 z-30 w-10 h-10 rounded-full bg-[#1C1813] border-2 border-[#D4AF37] text-[#D4AF37] hover:text-white flex items-center justify-center shadow-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Letter Body */}
          <MagicalLetter
            onRegisterNow={() => {
              onClose();
              onRegisterNow();
            }}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
