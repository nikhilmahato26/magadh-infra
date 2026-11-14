import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  const isDarkBg = variant === 'light'; // Text should be light if on dark bg

  const sizeClasses = {
    sm: {
      box: 'w-7 h-7 text-xs',
      title: 'text-base',
      sub: 'text-[9px]',
    },
    md: {
      box: 'w-9 h-9 text-sm',
      title: 'text-xl',
      sub: 'text-[10px]',
    },
    lg: {
      box: 'w-12 h-12 text-base',
      title: 'text-2xl',
      sub: 'text-xs',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Industrial Monogram Icon */}
      <div
        className={`${currentSize.box} rounded-lg flex items-center justify-center font-heading font-extrabold shadow-sm transition-transform hover:scale-105 ${
          isDarkBg
            ? 'bg-gradient-to-br from-accent-orange to-amber-600 text-white ring-1 ring-white/20'
            : 'bg-navy-900 text-white ring-1 ring-navy-900/10'
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6"
        >
          {/* Stylized structural 'M' with industrial angular pillars */}
          <path
            d="M5 22V6L14 15L23 6V22H18.5V13.5L14 18L9.5 13.5V22H5Z"
            fill="currentColor"
          />
          {/* Accent dot indicating precision engineering / infrastructure hub */}
          <circle cx="14" cy="5" r="2" fill="#F28C28" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center tracking-wider font-heading font-extrabold">
          <span className={isDarkBg ? 'text-white' : 'text-navy-900'}>
            MAGADH
          </span>
          <span className="text-accent-orange ml-1.5 font-bold">
            INFRA
          </span>
        </div>
        {showTagline && (
          <span
            className={`font-sans tracking-widest uppercase font-semibold mt-0.5 ${
              currentSize.sub
            } ${isDarkBg ? 'text-steel-400' : 'text-steel-500'}`}
          >
            All India Permit
          </span>
        )}
      </div>
    </div>
  );
};
