import React from 'react';
import { Compass, Users } from 'lucide-react';
import { FacultyCouncil } from './FacultyCouncil';
import { QuestKeepers } from './QuestKeepers';

export const CouncilSection: React.FC = () => {
  return (
    <section id="council" className="relative py-24 sm:py-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5DEB3] text-xs font-cinzel tracking-widest uppercase mb-4">
            <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Guardians of the Citadel</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#D4AF37] to-[#B8860B] mb-6">
            THE GRAND CONCLAVE & COUNCIL
          </h2>
          <p className="font-cormorant text-xl text-neutral-300 italic">
            &ldquo;Guided by eminent faculty luminaries and energized by relentless student quest architects.&rdquo;
          </p>
        </div>

        {/* Faculty Council */}
        <FacultyCouncil />

        {/* Student Quest Keepers */}
        <QuestKeepers />
      </div>
    </section>
  );
};
