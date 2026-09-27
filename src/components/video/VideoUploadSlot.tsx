import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Video, X, CheckCircle2, Sparkles, FileVideo } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface VideoUploadSlotProps {
  isOpen: boolean;
  onClose: () => void;
  onVideoSelected: (videoUrl: string, fileName?: string) => void;
  currentVideoName?: string;
}

export const VideoUploadSlot: React.FC<VideoUploadSlotProps> = ({
  isOpen,
  onClose,
  onVideoSelected,
  currentVideoName,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [customUrl, setCustomUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (file && (file.type.includes('video') || file.name.endsWith('.mp4') || file.name.endsWith('.webm'))) {
      const url = URL.createObjectURL(file);
      sounds.playChestFanfare();
      onVideoSelected(url, file.name);
      onClose();
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      sounds.playChestFanfare();
      onVideoSelected(customUrl.trim(), 'Custom Video Stream');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-[min(92vw,36rem)] bg-[#0D121D] border-2 border-[#D4AF37] rounded-xl p-5 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.4)] max-h-[90vh] overflow-y-auto my-auto"
        >
          {/* Close button */}
          <button
            onClick={() => {
              sounds.playWandSpark(700);
              onClose();
            }}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close video upload modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="video/mp4,video/webm"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) handleFile(e.target.files[0]);
            }}
          />

          {/* Header */}
          <div className="flex items-center gap-3 mb-6 border-b border-[#D4AF37]/30 pb-4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center">
              <Video className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-cinzel tracking-widest text-[#D4AF37] font-bold">
                Cinematic Projection Sanctum
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white">
                VIDEO UPLOAD SLOT
              </h3>
            </div>
          </div>

          <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-6">
            Upload your video file here. It will automatically play as the <strong>mandatory full-screen intro sequence</strong> (booming into <em>TerraQuest 2.0</em> at <strong>00:00:24</strong>) and then continue streaming as the <strong>website background</strong> on the homepage.
          </p>

          {/* Drag & Drop Upload Zone */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 mb-6 flex flex-col items-center justify-center ${
              dragActive
                ? 'border-[#00E5FF] bg-[#00E5FF]/10 scale-[1.02]'
                : 'border-[#D4AF37]/50 bg-[#070A11] hover:border-[#D4AF37] hover:bg-[#141A28]'
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center mb-3">
              <Upload className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h4 className="font-cinzel text-sm sm:text-base font-bold text-white mb-1">
              Drop Your Intro Video Here or Click to Browse
            </h4>
            <p className="text-xs text-neutral-400 font-sans mb-3">
              Supports .mp4 and .webm formats (any resolution)
            </p>
            {currentVideoName && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-[#F5DEB3] font-mono">
                <FileVideo className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Active: {currentVideoName}</span>
              </div>
            )}
          </div>

          {/* Alternative URL input */}
          <form onSubmit={handleUrlSubmit} className="space-y-3 mb-6">
            <label className="block text-xs font-cinzel text-neutral-300">
              Or Stream via Video Web URL:
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://example.com/cinematic-intro.mp4"
                className="flex-1 bg-[#070A11] border border-white/15 focus:border-[#D4AF37] rounded px-3 py-2 text-xs text-white focus:outline-none font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded bg-[#D4AF37] text-black font-cinzel text-xs font-bold hover:bg-[#F5DEB3] transition-colors"
              >
                Apply URL
              </button>
            </div>
          </form>

          {/* Production Project File Path Note */}
          <div className="p-3.5 rounded bg-black/50 border border-white/10 text-[11px] text-neutral-400 font-sans">
            <span className="text-[#D4AF37] font-cinzel font-bold block mb-1">
              ✦ Permanent Production Placement:
            </span>
            You can also place your video file directly at:
            <code className="text-[#00E5FF] font-mono text-[11px] block mt-1 bg-black/60 p-1.5 rounded border border-white/5">
              terraquest 2.0/public/assets/video/intro.mp4
            </code>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
