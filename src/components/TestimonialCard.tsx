
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  imageSrc: string;
  animationDelay?: string;
  companyLogo?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  imageSrc,
  animationDelay = '',
  companyLogo
}) => {
  return (
    <div className={`bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl border border-primary/10 group transition-all duration-300 ${animationDelay} h-full flex flex-col`}>
      {/* Quote Section */}
      <div className="relative flex-grow mb-6">
        <svg 
          className="absolute -top-2 -left-2 w-8 h-8 md:w-10 md:h-10 text-primary/20 group-hover:text-primary/30 transition-colors duration-300" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="text-navy leading-relaxed relative pt-4 font-atkinson text-sm md:text-base">
          "{quote}"
        </blockquote>
      </div>
      
      {/* Author Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-neutral-200">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 flex-shrink-0">
            <img 
              src={imageSrc} 
              alt={`Portrait of ${author}`} 
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
              }}
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-navy group-hover:text-primary transition-colors duration-300 font-atkinson text-sm md:text-base truncate">{author}</h3>
            <p className="text-neutral-600 text-xs md:text-sm font-atkinson truncate">{position}</p>
            <p className="text-neutral-500 text-xs md:text-sm font-atkinson truncate">{company}</p>
          </div>
        </div>
        
        {companyLogo && (
          <div className="flex-shrink-0">
            <img 
              src={companyLogo} 
              alt={`${company} logo`} 
              className="h-6 md:h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
