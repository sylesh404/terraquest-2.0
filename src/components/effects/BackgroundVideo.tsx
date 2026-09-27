import React, { useRef, useEffect } from 'react';

interface BackgroundVideoProps {
  videoSrc?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc = '/assets/video/landing page.mp4',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, [videoSrc]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full h-full">
      {/* Landing Page Fullscreen Background Video (100% x 100%, object-fit: cover) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover transition-opacity duration-1000"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src="/assets/video/landing%20page.mp4" type="video/mp4" />
        <source src="/assets/video/landing page.mp4" type="video/mp4" />
        <source src="/assets/video/landing-page.mp4" type="video/mp4" />
      </video>

      {/* Subtle Dark Navy/Black Cinematic Overlay (40% - 48% opacity, keeping video motion clearly visible) */}
      <div className="absolute inset-0 bg-[#04060A]/42" />

      {/* Soft Vignette around edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(4, 6, 10, 0.72) 100%)',
        }}
      />

      {/* Stronger gradient toward bottom to blend smoothly into scrollable content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#05070B]" />
    </div>
  );
};
