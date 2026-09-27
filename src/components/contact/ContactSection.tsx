import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface ContactCoordinator {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  phoneTel: string;
}

const COORDINATORS: ContactCoordinator[] = [
  {
    id: 'sakthi-sylesh',
    name: 'SAKTHI SYLESH PK',
    role: 'Student Coordinator',
    email: 'syleshkrishnamoorthy@gmail.com',
    phone: '+91 7708139276',
    phoneTel: '+917708139276',
  },
  {
    id: 'prasanna-raj',
    name: 'Prasanna Raj R',
    role: 'Student Coordinator',
    email: 'prassannaraj.pr12@gmail.com',
    phone: '+91 7810096062',
    phoneTel: '+917810096062',
  },
];

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32 z-10 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================
            SECTION HEADER
            ================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5DEB3] text-xs font-cinzel tracking-widest uppercase mb-3.5 shadow-[0_0_15px_rgba(212,175,55,0.15)] backdrop-blur-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>DIRECT INQUIRIES</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#D4AF37] to-[#B8860B] tracking-wide mb-3 drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">
            CONTACT US
          </h2>

          <p className="font-cormorant text-base sm:text-xl text-neutral-300 italic drop-shadow-md">
            Have questions? Reach out to our student coordinators.
          </p>
        </div>

        {/* ==================================================
            CONTACT CARDS: 2 COLUMNS ON DESKTOP, 1 COLUMN ON MOBILE
            ================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-stretch">
          {COORDINATORS.map((coordinator, idx) => (
            <motion.div
              key={coordinator.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
              onMouseEnter={() => sounds.playWandSpark(900 + idx * 100)}
              className="group relative rounded-2xl p-6 sm:p-8 bg-[#0B101B]/80 border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(212,175,55,0.22)] hover:-translate-y-1 backdrop-blur-md flex flex-col justify-between"
            >
              {/* Subtle top gold accent bar on hover */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Coordinator Name */}
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFF5D0] group-hover:text-[#F2CC69] transition-colors tracking-wide mb-1">
                  {coordinator.name}
                </h3>

                {/* Role */}
                <p className="font-sans text-xs sm:text-sm font-medium text-[#D4AF37] tracking-wider uppercase mb-6">
                  {coordinator.role}
                </p>

                {/* Contact Links */}
                <div className="space-y-3.5">
                  {/* Email */}
                  <a
                    href={`mailto:${coordinator.email}`}
                    className="flex items-center gap-3.5 text-xs sm:text-sm text-[#E5DDCB] hover:text-[#FFF5D0] transition-colors group/link select-none"
                    aria-label={`Email ${coordinator.name}`}
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 group-hover/link:border-[#D4AF37] group-hover/link:bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] transition-all shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="break-all sm:break-normal font-sans tracking-wide">
                      {coordinator.email}
                    </span>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${coordinator.phoneTel}`}
                    className="flex items-center gap-3.5 text-xs sm:text-sm text-[#E5DDCB] hover:text-[#FFF5D0] transition-colors group/link select-none"
                    aria-label={`Call ${coordinator.name}`}
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 group-hover/link:border-[#D4AF37] group-hover/link:bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] transition-all shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-sans tracking-wide font-medium">
                      {coordinator.phone}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
