import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl } from '../config/business';
import { Button } from '../components/Button';
import heroBgImage from '../assets/hero-bg.jpg';

export const Hero: React.FC = () => {
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
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center bg-navy-950 text-white overflow-hidden"
    >
      {/* Background with Industrial Imagery and Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Modern infrastructure, bridge architecture, and engineering logistics network"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-85 contrast-110"
          loading="eager"
        />
        {/* Deep Navy Gradient Overlays for optimal readability & industrial tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />

        {/* Subtle geometric grid pattern for structural feel */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 py-20 md:py-28">
        <div className="max-w-4xl">
          {/* Eyebrow Badge: Verified All India Permit & Location */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-white/15 text-xs sm:text-sm text-steel-200 mb-6 backdrop-blur-sm shadow-sm">
            <span className="flex items-center gap-1.5 font-semibold text-accent-orange">
              <ShieldCheck className="w-4 h-4 text-accent-orange" />
              <span>{BUSINESS_CONFIG.coverage.title}</span>
            </span>
            <span className="text-steel-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-steel-300">
              <MapPin className="w-3.5 h-3.5 text-steel-400" />
              <span>{BUSINESS_CONFIG.location.city}, {BUSINESS_CONFIG.location.state}</span>
            </span>
            <span className="text-steel-600 hidden sm:inline">•</span>
            <span className="text-steel-400 font-mono text-[11px] sm:text-xs">
              GST: {BUSINESS_CONFIG.gstNumber}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            BUILDING TRUST.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-amber-400 to-accent-orange">
              CONNECTING OPPORTUNITIES.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-steel-300 max-w-2xl leading-relaxed font-normal">
            Welcome to <strong className="text-white font-semibold">{BUSINESS_CONFIG.name}</strong> — your business connection for professional services with an{' '}
            <span className="text-white font-semibold underline decoration-accent-orange decoration-2 underline-offset-4">
              All India Permit
            </span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={handleScrollToContact}
            >
              Contact Us
            </Button>

            <Button
              href={getTelUrl(BUSINESS_CONFIG.phones[0].value)}
              variant="white"
              size="lg"
              leftIcon={<Phone className="w-4 h-4 text-accent-orange" />}
            >
              Call Now: {BUSINESS_CONFIG.phones[0].display}
            </Button>
          </div>

          {/* Key Verified Business Pillar Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
            {/* Pillar 1 */}
            <div className="p-4 rounded-xl bg-navy-900/60 border border-white/10 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-lg bg-accent-orange/15 border border-accent-orange/30 flex items-center justify-center text-accent-orange mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                All India Permit
              </h3>
              <p className="text-xs text-steel-400 mt-1">
                Authorized nationwide operational permit across India.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-4 rounded-xl bg-navy-900/60 border border-white/10 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-lg bg-navy-700/50 border border-white/15 flex items-center justify-center text-white mb-3">
                <MapPin className="w-5 h-5 text-accent-orange" />
              </div>
              <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                Raipur, Chhattisgarh
              </h3>
              <p className="text-xs text-steel-400 mt-1">
                Headquartered strategically at Mathpurena, Raipur.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-4 rounded-xl bg-navy-900/60 border border-white/10 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-lg bg-navy-700/50 border border-white/15 flex items-center justify-center text-white mb-3">
                <Phone className="w-5 h-5 text-accent-orange" />
              </div>
              <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                3 Direct Phone Lines
              </h3>
              <p className="text-xs text-steel-400 mt-1">
                Immediate access to representatives without automated delays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
