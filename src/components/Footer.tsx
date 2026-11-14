import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_CONFIG, getTelUrl, getMailtoUrl } from '../config/business';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About MAGADH INFRA', href: '#about' },
    { label: 'Available Services', href: '#services' },
    { label: 'All India Permit Coverage', href: '#coverage' },
    { label: 'Why Connect With Us', href: '#why-us' },
    { label: 'Contact & Business Enquiries', href: '#contact' },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <footer className="bg-navy-950 text-steel-400 border-t border-navy-800/80 pt-16 pb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800">
          {/* Column 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="light" size="lg" showTagline />

            <p className="text-sm leading-relaxed text-steel-400 max-w-sm">
              {BUSINESS_CONFIG.about.summary}
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-xs font-semibold text-white">
              <ShieldCheck className="w-4 h-4 text-accent-orange" />
              <span>{BUSINESS_CONFIG.coverage.title} – Nationwide Reach</span>
            </div>

            <div className="text-xs text-steel-400">
              <span className="text-steel-400 block font-medium">Headquartered at:</span>
              <span className="text-steel-300">
                {BUSINESS_CONFIG.location.city}, {BUSINESS_CONFIG.location.state}, {BUSINESS_CONFIG.location.country}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-accent-orange transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-orange" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Registered Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-white">
              Contact & Location
            </h4>

            <div className="space-y-3 text-sm">
              {/* Phones */}
              <div>
                <span className="text-xs text-steel-400 block mb-1 font-semibold">
                  Phone Numbers:
                </span>
                <div className="space-y-1">
                  {BUSINESS_CONFIG.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={getTelUrl(phone.value)}
                      className="block text-steel-200 hover:text-accent-orange font-medium transition-colors"
                    >
                      {phone.display}{' '}
                      <span className="text-xs text-steel-400 font-normal">
                        ({phone.label || `Line ${idx + 1}`})
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="pt-2">
                <span className="text-xs text-steel-400 block mb-0.5 font-semibold">
                  Email Address:
                </span>
                <a
                  href={getMailtoUrl(BUSINESS_CONFIG.email)}
                  className="text-steel-200 hover:text-accent-orange font-medium transition-colors"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </div>

              {/* Address */}
              <div className="pt-2">
                <span className="text-xs text-steel-400 block mb-0.5 font-semibold">
                  Registered Address:
                </span>
                <p className="text-xs leading-relaxed text-steel-300">
                  {BUSINESS_CONFIG.location.fullAddress}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-steel-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-center md:text-left">
            <span>
              Copyright &copy; 2026{' '}
              <strong className="text-white font-semibold">
                {BUSINESS_CONFIG.name}
              </strong>
              . All Rights Reserved.
            </span>
            <span className="hidden sm:inline text-navy-700">|</span>
            <span>All India Permit Operations</span>
          </div>

          <div className="flex items-center gap-3 bg-navy-900/80 px-4 py-2 rounded-lg border border-navy-800">
            <span className="text-steel-400 font-semibold uppercase tracking-wider">
              GST Number:
            </span>
            <span className="font-mono font-bold text-accent-orange tracking-wider text-xs sm:text-sm">
              {BUSINESS_CONFIG.gstNumber}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
