import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactCard } from '../components/ContactCard';
import { EnquiryForm } from '../components/EnquiryForm';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl } from '../config/business';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-light">
      <div className="container mx-auto">
        <SectionHeading
          badge="Direct Corporate Channels"
          title="Contact MAGADH INFRA"
          description="Connect directly with our team in Raipur, Chhattisgarh for business inquiries, service discussions, and nationwide permit cooperation."
        />

        {/* Quick Top Contact Banner */}
        <div className="mt-10 mb-12 p-4 sm:p-5 rounded-xl bg-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-4 border border-navy-800 shadow-corporate">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm">
            <span className="text-accent-orange font-bold uppercase tracking-wider">
              Immediate Assistance:
            </span>
            <span className="text-steel-300">
              Three active direct telephone lines available.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <WhatsAppButton
              variant="solid"
              size="sm"
              label="Chat on WhatsApp"
            />
            <a
              href={getTelUrl(BUSINESS_CONFIG.phones[0].value)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent-orange" />
              <span>Call: {BUSINESS_CONFIG.phones[0].display}</span>
            </a>
          </div>
        </div>

        {/* Two-Column Grid: Contact Card (Left) & Validated Enquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Business Info Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ContactCard />

            {/* Quick Map Location Reference Card */}
            <div className="bg-white rounded-xl border border-steel-200/80 p-5 shadow-sm text-xs text-steel-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-navy-900 text-sm">
                <MapPin className="w-4 h-4 text-accent-orange" />
                <span>Geographic Location</span>
              </div>
              <p>
                Situated at Mathpurena near Sai Mandir, Rawatpura Colony Phase 2, Raipur. Conveniently connected within the capital region of Chhattisgarh.
              </p>
              <div className="pt-2 text-[11px] text-steel-400">
                Pincode: 492013 • State: Chhattisgarh (22)
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Generator Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};
