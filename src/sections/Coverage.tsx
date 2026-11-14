import React from 'react';
import { ShieldCheck, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { BUSINESS_CONFIG } from '../config/business';
import { Button } from '../components/Button';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Coverage: React.FC = () => {
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
      id="coverage"
      className="py-20 md:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden"
    >
      {/* Background Grid Pattern & Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F28C28 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
        {/* Ambient lighting glows */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-industrial-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <SectionHeading
          theme="dark"
          badge="Nationwide Reach"
          title={BUSINESS_CONFIG.coverage.title}
          description={BUSINESS_CONFIG.coverage.description}
        />

        <div className="mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual India Network Map Graphic (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative bg-navy-900/80 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Graphic Title */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2 text-accent-orange font-semibold tracking-wider uppercase">
                  <Compass className="w-4 h-4" />
                  <span>Pan-India Permit Representation</span>
                </div>
                <span className="text-steel-400 font-mono">Permit: All India</span>
              </div>

              {/* Custom India Map Vector Graphic with Central Raipur Hub */}
              <div className="py-6 flex items-center justify-center">
                <svg
                  viewBox="0 0 600 520"
                  className="w-full max-w-lg h-auto select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Glowing radial gradient for Raipur Hub */}
                    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#F28C28" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#F28C28" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#F28C28" stopOpacity="0" />
                    </radialGradient>

                    {/* Gradient for nationwide link rays */}
                    <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F28C28" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#174A70" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>

                  {/* Stylized Geometric India Geographic Contour Map */}
                  <path
                    d="M 280,30 
                       C 320,35 345,65 330,95 
                       C 350,115 375,120 370,140 
                       C 365,160 380,175 420,180 
                       C 455,185 490,200 480,230 
                       C 460,245 425,235 405,255 
                       C 390,270 385,300 370,325 
                       C 350,360 330,410 300,470 
                       C 285,490 275,490 265,470 
                       C 235,410 210,360 190,320 
                       C 175,290 160,275 140,250 
                       C 120,230 135,200 160,185 
                       C 180,170 190,140 205,125 
                       C 220,105 240,60 255,40 
                       Z"
                    fill="#10243A"
                    stroke="#174A70"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    className="opacity-90"
                  />

                  {/* Regional Coverage Orbit Rings representing All India Scope */}
                  <circle cx="310" cy="275" r="90" stroke="#174A70" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
                  <circle cx="310" cy="275" r="160" stroke="#174A70" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />
                  <circle cx="310" cy="275" r="220" stroke="#174A70" strokeWidth="1" strokeDasharray="5 5" className="opacity-20" />

                  {/* Coverage Ray Lines radiating from Raipur (310, 275) to zones across India */}
                  {/* North */}
                  <line x1="310" y1="275" x2="285" y2="75" stroke="url(#rayGradient)" strokeWidth="2" strokeDasharray="3 2" />
                  <circle cx="285" cy="75" r="4.5" fill="#64748B" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="295" y="80" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">North Region</text>

                  {/* North-West */}
                  <line x1="310" y1="275" x2="175" y2="155" stroke="url(#rayGradient)" strokeWidth="2" strokeDasharray="3 2" />
                  <circle cx="175" cy="155" r="4.5" fill="#64748B" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="110" y="160" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">West Region</text>

                  {/* East / North-East */}
                  <line x1="310" y1="275" x2="445" y2="215" stroke="url(#rayGradient)" strokeWidth="2" strokeDasharray="3 2" />
                  <circle cx="445" cy="215" r="4.5" fill="#64748B" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="455" y="220" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">East Region</text>

                  {/* South */}
                  <line x1="310" y1="275" x2="285" y2="445" stroke="url(#rayGradient)" strokeWidth="2" strokeDasharray="3 2" />
                  <circle cx="285" cy="445" r="4.5" fill="#64748B" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="295" y="450" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">South Region</text>

                  {/* Central Hub: RAIPUR, CHHATTISGARH */}
                  <circle cx="310" cy="275" r="32" fill="url(#hubGlow)" className="animate-pulse" />
                  <circle cx="310" cy="275" r="10" fill="#F28C28" stroke="#FFFFFF" strokeWidth="3" />
                  <circle cx="310" cy="275" r="3.5" fill="#10243A" />

                  {/* Hub Marker Callout Badge */}
                  <g transform="translate(325, 260)">
                    <rect x="0" y="0" width="170" height="36" rx="6" fill="#10243A" stroke="#F28C28" strokeWidth="1.5" />
                    <text x="10" y="16" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      RAIPUR, CG
                    </text>
                    <text x="10" y="28" fill="#F28C28" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">
                      HEADQUARTERS & HUB
                    </text>
                  </g>
                </svg>
              </div>

              {/* Graphic Footnote */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-steel-400">
                <span>Hub: Raipur, Chhattisgarh (492013)</span>
                <span className="text-accent-orange font-medium">All India Permit Authorized</span>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Nationwide Impact & CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-orange/15 border border-accent-orange/30 text-accent-orange text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Statutory Coverage</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Seamless Operations Across Indian Boundaries
            </h3>

            <p className="text-steel-300 text-base leading-relaxed">
              Equipped with an official <strong className="text-white">All India Permit</strong>, MAGADH INFRA is empowered to facilitate operations beyond regional restrictions. From our home state in Chhattisgarh, our reach spans nationwide for corporate and commercial engagements.
            </p>

            {/* Verified Operational Facts */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900/60 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">
                    All India Permit Authorization
                  </h4>
                  <p className="text-xs text-steel-400 mt-0.5">
                    Authorized nationwide permit capability for smooth transit and project coordination across India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900/60 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">
                    Central Geographic Origin
                  </h4>
                  <p className="text-xs text-steel-400 mt-0.5">
                    Situated in Raipur, Chhattisgarh — offering optimal access to eastern, central, and national trade corridors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900/60 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">
                    Direct Point of Contact
                  </h4>
                  <p className="text-xs text-steel-400 mt-0.5">
                    Communicate directly with our principals without broker or intermediary friction.
                  </p>
                </div>
              </div>
            </div>

            {/* Prominent Action CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={handleScrollToContact}
                className="justify-center"
              >
                Inquire for Nationwide Coverage
              </Button>

              <WhatsAppButton
                variant="outline"
                size="lg"
                message="Hello MAGADH INFRA, I am contacting you regarding your All India Permit coverage and business operations."
                label="WhatsApp Enquiry"
                className="justify-center border-white/30 text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
