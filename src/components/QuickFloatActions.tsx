import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { BUSINESS_CONFIG, getTelUrl } from '../config/business';

export const QuickFloatActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <aside
      aria-label="Quick contact and navigation actions"
      className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Floating Call & WhatsApp Pill on Mobile / Desktop */}
      <div className="pointer-events-auto flex items-center gap-2 shadow-2xl rounded-full p-1 bg-white/95 backdrop-blur-md border border-steel-200">
        <a
          href={getTelUrl(BUSINESS_CONFIG.phones[0].value)}
          aria-label="Call MAGADH INFRA immediately"
          className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-navy-800 transition-transform active:scale-95 shadow-sm"
          title={`Call ${BUSINESS_CONFIG.phones[0].display}`}
        >
          <Phone className="w-4 h-4 text-accent-orange" />
        </a>

        <WhatsAppButton
          variant="pill"
          size="sm"
          label="WhatsApp"
          className="shadow-sm"
        />
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="pointer-events-auto w-10 h-10 rounded-full bg-navy-900 text-white border border-navy-800 hover:bg-navy-800 hover:border-accent-orange flex items-center justify-center shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 text-steel-200" />
        </button>
      )}
    </aside>
  );
};
