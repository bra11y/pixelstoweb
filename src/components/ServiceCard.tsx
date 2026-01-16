
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  animationDelay?: string;
  imageSrc?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  animationDelay = '',
  imageSrc
}) => {
  return (
    <div 
      className={`relative group overflow-hidden transition-all duration-500 ${animationDelay} rounded-2xl border border-teal/10 bg-white h-full hover:shadow-xl hover:translate-y-[-5px]`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-cream/10 opacity-50 z-0"></div>
      
      {/* Decorative elements - simplified for better performance */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-teal/5 rounded-full z-0"></div>
      
      {imageSrc && (
        <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300">
          <img 
            src={imageSrc} 
            alt="" 
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      )}
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        {/* Icon container with better contrast and explicitly set dimensions */}
        <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center text-white mb-5 group-hover:bg-teal transition-all duration-300 shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-navy mb-3 group-hover:text-teal transition-all duration-300 font-heading">{title}</h3>
        <p className="text-neutral-700 mb-5 leading-relaxed flex-grow">
          {description}
        </p>
        <Link 
          to={link} 
          className="inline-flex items-center font-bold text-teal group-hover:text-teal-dark transition-all mt-auto"
          aria-label={`Learn more about ${title}`}
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
