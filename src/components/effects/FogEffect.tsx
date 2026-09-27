import React from 'react';

export const FogEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
      {/* Fog Layer 1 */}
      <div 
        className="absolute bottom-0 -left-[20%] w-[140%] h-[45vh] animate-drift filter blur-[60px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(14, 28, 48, 0.45) 0%, rgba(5, 7, 11, 0) 70%)',
        }}
      />
      {/* Fog Layer 2 - Subtle Purple / Cyan Hue */}
      <div 
        className="absolute top-1/4 -right-[20%] w-[140%] h-[35vh] animate-drift filter blur-[80px]"
        style={{
          animationDuration: '38s',
          animationDirection: 'reverse',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(88, 28, 135, 0.15) 0%, rgba(5, 7, 11, 0) 70%)',
        }}
      />
    </div>
  );
};
