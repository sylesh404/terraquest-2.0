import React from 'react';

export const AmbientGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top golden crown glow */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/3 to-transparent blur-[120px] rounded-full" />
      {/* Mid cyan glow */}
      <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[140px] rounded-full" />
      {/* Lower amethyst glow */}
      <div className="absolute top-[70%] -right-[10%] w-[650px] h-[650px] bg-[#A855F7]/5 blur-[150px] rounded-full" />
      {/* Subtle vignette border */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,3,6,0.85)_100%)]" />
    </div>
  );
};
