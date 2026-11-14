import React from 'react';
import { Phone, ArrowRight, Layers, FileQuestion } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { BUSINESS_CONFIG, getTelUrl } from '../config/business';
import { Button } from '../components/Button';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Services: React.FC = () => {
  const hasCategories = BUSINESS_CONFIG.services.categories.length > 0;

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
    <section id="services" className="py-20 md:py-28 bg-surface-light border-b border-steel-200/80">
      <div className="container mx-auto">
        <SectionHeading
          badge="Services & Operations"
          title="Business Services & Solutions"
          description="Direct corporate coordination and flexible service engagement for your specific operational demands."
        />

        {/* If categories exist, display them; otherwise display the transparent corporate consultation block */}
        {hasCategories ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_CONFIG.services.categories.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 border border-steel-200 shadow-corporate hover:border-accent-orange transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-steel-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-steel-200/90 shadow-corporate p-8 sm:p-12 relative overflow-hidden text-center">
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-900 via-accent-orange to-navy-900" />

              <div className="w-16 h-16 rounded-2xl bg-navy-50 border border-navy-100 flex items-center justify-center mx-auto mb-6 text-navy-900">
                <FileQuestion className="w-8 h-8 text-accent-orange" />
              </div>

              {/* Exact placeholder message from requirements */}
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-navy-900 max-w-2xl mx-auto leading-snug">
                {BUSINESS_CONFIG.services.placeholderNotice}
              </h3>

              <p className="mt-4 text-base text-steel-600 max-w-xl mx-auto leading-relaxed">
                Whether you need dedicated regional coverage, fleet coordination, or customized commercial arrangements, our representatives in Raipur are ready to discuss your specific scope with nationwide All India Permit backing.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  onClick={handleScrollToContact}
                >
                  Inquire About Services
                </Button>

                <WhatsAppButton
                  variant="solid"
                  size="md"
                  message="Hello MAGADH INFRA, I would like to inquire about your available services and business requirements."
                  label="Inquire via WhatsApp"
                />

                <Button
                  href={getTelUrl(BUSINESS_CONFIG.phones[0].value)}
                  variant="outline"
                  size="md"
                  leftIcon={<Phone className="w-4 h-4 text-accent-orange" />}
                >
                  Call Directly: {BUSINESS_CONFIG.phones[0].display}
                </Button>
              </div>

              {/* Bottom Quick Feature Strip */}
              <div className="mt-10 pt-8 border-t border-steel-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-orange shrink-0" />
                  <span className="text-xs font-semibold text-navy-900">
                    Customized Business Terms
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy-700 shrink-0" />
                  <span className="text-xs font-semibold text-navy-900">
                    All India Operational Permit
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-orange shrink-0" />
                  <span className="text-xs font-semibold text-navy-900">
                    Direct Point of Contact
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
