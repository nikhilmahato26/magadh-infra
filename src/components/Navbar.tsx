import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { BUSINESS_CONFIG, getTelUrl, getMailtoUrl } from '../config/business';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'services', 'coverage', 'why-us', 'contact'];
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
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
    <>
      {/* Top Utility Bar for Corporate Legitimacy */}
      <div className="bg-navy-950 text-steel-300 text-xs border-b border-navy-800/80 py-2 hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-accent-orange font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{BUSINESS_CONFIG.coverage.title}</span>
            </span>
            <span className="flex items-center gap-1.5 text-steel-300">
              <MapPin className="w-3.5 h-3.5 text-steel-400" />
              <span>{BUSINESS_CONFIG.location.city}, {BUSINESS_CONFIG.location.state}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={getTelUrl(BUSINESS_CONFIG.phones[0].value)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent-orange" />
              <span>{BUSINESS_CONFIG.phones[0].display}</span>
            </a>
            <span className="text-navy-800">|</span>
            <a
              href={getMailtoUrl(BUSINESS_CONFIG.email)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent-orange" />
              <span>{BUSINESS_CONFIG.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-900/95 backdrop-blur-md shadow-lg border-b border-navy-800/60 py-3'
            : 'bg-navy-900 border-b border-navy-800/40 py-4'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange rounded-lg"
            aria-label="MAGADH INFRA Home"
          >
            <Logo variant="light" size="md" showTagline />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all relative ${
                    isActive
                      ? 'text-white'
                      : 'text-steel-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-orange rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action: Get in Touch Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={(e) =>
                handleNavClick(
                  e as unknown as React.MouseEvent<HTMLAnchorElement>,
                  '#contact'
                )
              }
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getTelUrl(BUSINESS_CONFIG.phones[0].value)}
              className="p-2 rounded-lg bg-white/10 text-accent-orange hover:bg-white/15 transition-colors"
              aria-label="Call MAGADH INFRA"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-navy-800 text-steel-200 hover:text-white hover:bg-navy-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-navy-900 border-l border-navy-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                <Logo variant="light" size="sm" showTagline />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-steel-400 hover:text-white hover:bg-navy-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="py-6 space-y-1.5" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-accent-orange text-white'
                          : 'text-steel-200 hover:bg-navy-800 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-70" />
                    </a>
                  );
                })}
              </nav>

              {/* Coverage Badge */}
              <div className="p-3.5 rounded-lg bg-navy-950 border border-navy-800 text-xs text-steel-300 flex items-center gap-2 mb-6">
                <ShieldCheck className="w-4 h-4 text-accent-orange shrink-0" />
                <span>All India Permit • Raipur, CG</span>
              </div>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-6 border-t border-navy-800 space-y-3">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={(e) =>
                  handleNavClick(
                    e as unknown as React.MouseEvent<HTMLAnchorElement>,
                    '#contact'
                  )
                }
              >
                Get in Touch
              </Button>

              <div className="text-center text-xs text-steel-400">
                GST: <span className="text-white font-mono">{BUSINESS_CONFIG.gstNumber}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
