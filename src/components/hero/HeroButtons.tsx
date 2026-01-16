import React from 'react';
import { Link } from 'react-router-dom';
import { Scan } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link 
        to="/scanner" 
        className="button-primary font-atkinson w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
        aria-label="Scan your website for accessibility issues"
      >
        <Scan size={20} />
        Scan Your Website
      </Link>
      <Link 
        to="/services" 
        className="button-outline font-atkinson w-full sm:w-auto text-center"
        aria-label="Learn more about our services"
      >
        Explore Our Services
      </Link>
    </div>
  );
};

export default HeroButtons;
