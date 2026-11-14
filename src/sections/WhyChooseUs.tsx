import React from 'react';
import { Globe2, MapPin, PhoneCall, Mail, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { BUSINESS_CONFIG } from '../config/business';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Globe2: <Globe2 className="w-6 h-6 text-accent-orange" />,
    MapPin: <MapPin className="w-6 h-6 text-accent-orange" />,
    PhoneCall: <PhoneCall className="w-6 h-6 text-accent-orange" />,
    Mail: <Mail className="w-6 h-6 text-accent-orange" />,
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-b border-steel-200/80">
      <div className="container mx-auto">
        <SectionHeading
          badge="Verified Strengths"
          title="Why Connect With MAGADH INFRA?"
          description="Built on transparent communication, verified credentials, and comprehensive national permit authorization."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_CONFIG.whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-surface-light rounded-xl p-6 sm:p-7 border border-steel-200/90 shadow-subtle hover:shadow-corporate-hover hover:border-accent-orange transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {iconMap[item.icon] || <CheckCircle2 className="w-6 h-6 text-accent-orange" />}
                </div>

                {/* Index Indicator */}
                <span className="text-[11px] font-bold text-steel-400 font-mono uppercase tracking-widest block mb-1">
                  Pillar 0{idx + 1}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-navy-900 group-hover:text-navy-700 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm text-steel-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Bar on Hover */}
              <div className="mt-6 pt-4 border-t border-steel-200/70 flex items-center text-xs font-semibold text-navy-900 group-hover:text-accent-orange transition-colors">
                <span>Verified Detail</span>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-orange" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
