import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';
import { bgm } from '../../utils/bgmManager';

export const SoundController: React.FC = () => {
  const [isMuted, setIsMuted] = useState(bgm.isMuted());
  const [isAmbientOn, setIsAmbientOn] = useState(false);

  useEffect(() => {
    const unsubscribe = bgm.subscribe((muted) => {
      setIsMuted(muted);
    });
    return unsubscribe;
  }, []);

  const handleToggleMute = () => {
    const newMuted = bgm.toggleMute();
    setIsMuted(newMuted);
    sounds.setMuted(newMuted);
    if (!newMuted) {
      sounds.playWandSpark(950);
    }
  };

  const handleToggleAmbient = () => {
    const playing = sounds.toggleAmbientDrone();
    setIsAmbientOn(playing);
    if (playing) {
      sounds.playWandSpark(1100);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-1.5 sm:gap-2 bg-[#0C111C]/92 backdrop-blur-md border border-[#D4AF37]/35 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.85)]">
      {/* Ambient Resonance Toggle */}
      <button
        onClick={handleToggleAmbient}
        className={`min-h-[40px] flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-cinzel transition-all cursor-pointer ${
          isAmbientOn
            ? 'bg-[#D4AF37]/20 text-[#F5DEB3] border border-[#D4AF37]/40 shadow-[0_0_12px_rgba(212,175,55,0.3)]'
            : 'text-neutral-400 hover:text-neutral-200'
        }`}
        title="Toggle Enchanted Ambient Resonance"
      >
        <Music className={`w-3.5 h-3.5 ${isAmbientOn ? 'animate-pulse text-[#D4AF37]' : ''}`} />
        <span className="hidden sm:inline">Chamber Drone</span>
      </button>

      <div className="w-[1px] h-4 bg-[#D4AF37]/20" />

      {/* Sound SFX Mute/Unmute */}
      <button
        onClick={handleToggleMute}
        className="min-w-[40px] min-h-[40px] p-2 rounded-full text-[#D4AF37] hover:text-[#FFF4D0] transition-colors flex items-center justify-center cursor-pointer"
        title={isMuted ? 'Unmute Spell Sounds' : 'Mute Spell Sounds'}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-neutral-500" />
        ) : (
          <Volume2 className="w-4 h-4 text-[#D4AF37]" />
        )}
      </button>

      <span className="sr-only">TerraQuest Audio Controls</span>
    </div>
  );
};
