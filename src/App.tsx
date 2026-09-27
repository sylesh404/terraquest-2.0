import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

// 1. Cinematic Intro Sequence
import { IntroExperience } from './components/intro/IntroExperience';

// 2. Navigation (Appears strictly after Intro)
import { Navbar } from './components/navigation/Navbar';

// 3. Homepage Journey Components (Requirement 16 flow)
import { Hero } from './components/hero/Hero';
import { AboutTerraQuest } from './components/about/AboutTerraQuest';
import { HouseOfInnovation } from './components/houses/HouseOfInnovation';
import { QuestMap } from './components/quest-map/QuestMap';
import { TreasureVault } from './components/prizes/TreasureVault';
import { CouncilSection } from './components/council/CouncilSection';
import { LawsOfTheQuest } from './components/rules/LawsOfTheQuest';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';

// Modals & Upload Slots
import { RegistrationModal } from './components/registration/RegistrationModal';
import { VideoUploadSlot } from './components/video/VideoUploadSlot';

// Atmospheric Ambient Visuals & Sounds
import { BackgroundVideo } from './components/effects/BackgroundVideo';
import { MagicalParticles } from './components/effects/MagicalParticles';
import { FogEffect } from './components/effects/FogEffect';
import { AmbientGlow } from './components/effects/AmbientGlow';
import { CustomCursor } from './components/effects/CustomCursor';
import { SoundController } from './components/effects/SoundController';
import { bgm } from './utils/bgmManager';

export const App: React.FC = () => {
  // Initialize continuous Background Music (BGM) on website entry
  useEffect(() => {
    bgm.init();
  }, []);

  // CRITICAL: The website MUST begin as a cinematic fullscreen video experience.
  const [introComplete, setIntroComplete] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isUploadSlotOpen, setIsUploadSlotOpen] = useState(false);
  const [pledgeHouseId, setPledgeHouseId] = useState('gryffindor');

  // Video source - checks local storage or defaults to public asset
  const [videoSrc, setVideoSrc] = useState<string>('/assets/video/intro.mp4');
  const [videoFileName, setVideoFileName] = useState<string>('intro.mp4');

  // Initialize smooth scrolling with Lenis (only after intro is done)
  useEffect(() => {
    if (!introComplete) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [introComplete]);

  const GOOGLE_ENROLL_FORM_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSccRdraGjteLF2Eh0VRTZ4_Cm0XvbhRhpHXqENeUY2E8XRJEQ/viewform?usp=dialog';

  const handleOpenRegister = () => {
    window.open(GOOGLE_ENROLL_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-[#05070B] text-neutral-200 selection:bg-[#D4AF37]/30 selection:text-[#FDF0CD] overflow-x-hidden font-sans">
      {/* ======================================================== */}
      {/* 1. CINEMATIC FULLSCREEN INTRO VIDEO SEQUENCE            */}
      {/* The website MUST NOT look like a website during intro   */}
      {/* Title 'TERRAQUEST 2.0' appears at video.currentTime >=29 */}
      {/* ======================================================== */}
      {!introComplete && (
        <IntroExperience
          videoSrc={videoSrc}
          onComplete={() => setIntroComplete(true)}
          onVideoUploaded={(url, filename) => {
            setVideoSrc(url);
            setVideoFileName(filename);
          }}
        />
      )}

      {/* ======================================================== */}
      {/* 2. THE ACTUAL HOMEPAGE (Only revealed after intro)       */}
      {/* ======================================================== */}
      {introComplete && (
        <div className="relative animate-fadeIn">
          {/* Background Video running in the website background */}
          <BackgroundVideo videoSrc="/assets/video/landing page.mp4" />

          {/* Atmospheric Ambient Visual Layers */}
          <AmbientGlow />
          <FogEffect />
          <MagicalParticles />
          <CustomCursor />

          {/* Navigation Bar: Fades in only AFTER intro */}
          <Navbar
            onOpenRegister={handleOpenRegister}
            onWatchIntro={() => setIntroComplete(false)}
            onOpenUploadSlot={() => setIsUploadSlotOpen(true)}
          />

          {/* Sequential Journey Flow (Requirement 16) */}
          <main className="relative z-10">
            {/* Viewport 1: Hero (Clean, spacious, iconic) */}
            <Hero onOpenRegister={handleOpenRegister} />

            {/* Viewport 2: First Scroll — The Legend of TerraQuest */}
            <AboutTerraQuest />

            {/* Viewport 3: The House of Innovation (Gryffindor, Slytherin, Ravenclaw, Hufflepuff) & Domains */}
            <HouseOfInnovation
              onPledgeHouse={() => {
                handleOpenRegister();
              }}
            />

            {/* Viewport 4: The Laws of the Quest — Sealed Hogwarts Letter */}
            <LawsOfTheQuest />

            {/* Viewport 5: The Quest Map & 24-Hour Timeline */}
            <QuestMap />

            {/* Viewport 6: The Spoils of the Quest (₹22,000 Total Cash Prizes) */}
            <TreasureVault />

            {/* Viewport 7: The Grand Faculty Council & Student Keepers */}
            <CouncilSection />

            {/* Viewport 8: Contact Us */}
            <ContactSection />
          </main>

          {/* Viewport 10: Footer */}
          <Footer
            onReopenIntro={() => setIntroComplete(false)}
            onOpenLetter={() => {}}
          />

          {/* Floating Sound & Ambient Drone Controller */}
          <SoundController />
        </div>
      )}

      {/* ======================================================== */}
      {/* Modals & Upload Slots                                    */}
      {/* ======================================================== */}

      {/* Video Upload Slot Modal */}
      <VideoUploadSlot
        isOpen={isUploadSlotOpen}
        onClose={() => setIsUploadSlotOpen(false)}
        onVideoSelected={(url, name) => {
          setVideoSrc(url);
          if (name) setVideoFileName(name);
        }}
        currentVideoName={videoFileName}
      />

      {/* Fellowship Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultHouseId={pledgeHouseId}
      />
    </div>
  );
};

export default App;
