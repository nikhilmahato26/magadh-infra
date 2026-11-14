import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isLight = theme === 'light';
  const isCentered = align === 'center';

  return (
    <div
      className={`max-w-3xl ${
        isCentered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isLight
              ? 'bg-navy-900/5 text-navy-800 border border-navy-900/10'
              : 'bg-white/10 text-accent-orange border border-white/15'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
          isLight ? 'text-navy-900' : 'text-white'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-steel-600' : 'text-steel-300'
          }`}
        >
          {description}
        </p>
      )}

      <div
        className={`mt-4 sm:mt-5 flex items-center ${
          isCentered ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="w-12 h-1 bg-accent-orange rounded-full"></span>
        <span
          className={`w-4 h-1 ml-1.5 rounded-full ${
            isLight ? 'bg-navy-700/30' : 'bg-white/30'
          }`}
        ></span>
      </div>
    </div>
  );
};
