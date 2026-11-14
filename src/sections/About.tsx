import React from 'react';
import { ShieldCheck, MapPin, Building, FileCheck2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { BUSINESS_CONFIG } from '../config/business';
import { Button } from '../components/Button';

export const About: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-steel-200/80">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Industrial Imagery & Info Panel (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Primary Industrial Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-corporate border border-steel-200 bg-navy-950">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial and infrastructure engineering operations"
                className="w-full h-80 sm:h-96 object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-navy-900/90 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-accent-orange uppercase">
                  Corporate Profile
                </span>
                <span className="text-xs text-steel-300 font-mono">
                  Raipur • India
                </span>
              </div>
            </div>

            {/* Small Floating Information Panel */}
            <div className="mt-4 sm:-mt-12 sm:ml-6 relative z-10 bg-white rounded-xl p-5 border border-steel-200 shadow-corporate">
              <div className="text-xs font-bold text-steel-400 uppercase tracking-wider mb-3">
                Verified Business Details
              </div>

              <div className="space-y-2.5 text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-steel-100">
                  <span className="text-steel-500 font-medium flex items-center gap-2">
                    <Building className="w-4 h-4 text-navy-700" />
                    Business Name
                  </span>
                  <strong className="text-navy-900 font-bold">
                    {BUSINESS_CONFIG.name}
                  </strong>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-steel-100">
                  <span className="text-steel-500 font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-orange" />
                    Location
                  </span>
                  <span className="text-navy-900 font-semibold">
                    {BUSINESS_CONFIG.location.city}, {BUSINESS_CONFIG.location.state}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-steel-500 font-medium flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Coverage
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-accent-orange border border-amber-200">
                    {BUSINESS_CONFIG.coverage.title}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction & Corporate Stance (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              badge="About Us"
              title={BUSINESS_CONFIG.about.heading}
            />

            {/* Official Copy */}
            <p className="text-lg md:text-xl text-navy-900 font-medium leading-relaxed">
              &ldquo;{BUSINESS_CONFIG.about.summary}&rdquo;
            </p>

            <p className="text-base text-steel-600 leading-relaxed">
              Headquartered at Mathpurena, Raipur, MAGADH INFRA maintains direct accessibility through verified communication channels. Whether you require consultation, project coordination, or operational collaboration, our team facilitates smooth direct communication with comprehensive All India Permit authorization.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-steel-200/80 bg-surface-light">
                <div className="flex items-center gap-2 font-heading font-bold text-navy-900 text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-accent-orange" />
                  <span>All India Permit</span>
                </div>
                <p className="text-xs text-steel-600 leading-normal">
                  Permitted nationwide operational reach across Indian territories from Raipur.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-steel-200/80 bg-surface-light">
                <div className="flex items-center gap-2 font-heading font-bold text-navy-900 text-sm mb-1">
                  <FileCheck2 className="w-4 h-4 text-navy-700" />
                  <span>Registered GST Entity</span>
                </div>
                <p className="text-xs text-steel-600 leading-normal">
                  Registered under GSTIN {BUSINESS_CONFIG.gstNumber} with full statutory compliance.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="#contact"
                variant="secondary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={handleScrollToContact}
              >
                Discuss Requirements With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
