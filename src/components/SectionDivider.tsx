import React from 'react';

interface SectionDividerProps {
  title?: string;
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ title, className = '' }) => {
  return (
    <div className={`relative w-full py-20 md:py-24 ${className}`} aria-label={title ? title : undefined}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="relative flex items-center justify-center">
          {/* Left Line */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-300 to-neutral-400"></div>

          {/* Title Badge */}
          {title && (
            <div className="px-6 md:px-8">
              <span className="inline-block bg-gradient-to-br from-teal/10 to-navy/10 backdrop-blur-sm border border-neutral-300/50 px-6 py-2.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest text-foreground shadow-lg">
                {title}
              </span>
            </div>
          )}

          {/* Right Line */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-neutral-300 to-neutral-400"></div>
        </div>

        {/* Decorative Dot */}
        {title && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-teal rounded-full opacity-60 -z-10"></div>
        )}
      </div>
    </div>
  );
};

export default SectionDivider; 