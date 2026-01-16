import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MinimalHero = () => {
  const [showShine, setShowShine] = useState(false);

  useEffect(() => {
    // Start shine animation after 3 seconds, then repeat every 5 seconds
    const shineTimer = setTimeout(() => {
      setShowShine(true);
      const interval = setInterval(() => {
        setShowShine(false);
        setTimeout(() => setShowShine(true), 100);
      }, 5000);
      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(shineTimer);
  }, []);

  return (
    <section className="bg-[#F7F7F7] py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        {/* Top Label */}
        <div className="text-center mb-8">
          <span className="text-sm font-medium text-black/40 uppercase tracking-widest">
            PixelsToWeb - Canadian Web Design Agency
          </span>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-[32px] overflow-hidden w-full aspect-[4/5] md:aspect-[16/10]">
          <img
            src="/lovable-uploads/person-computer.jpg"
            alt="Team working on accessible web design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Content at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight mb-3 md:mb-4 text-center">
              Build For Everyone
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto text-center">
              Accessible digital experiences that reach every user and grow your business.
            </p>
          </div>
        </div>

        {/* Standalone CTA Button */}
        <div className="flex justify-center mt-8 md:mt-10">
          <Link
            to="/contact"
            className="relative inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-all overflow-hidden shadow-lg"
          >
            {/* Shine/Wipe Effect */}
            <span
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out`}
              style={{ transform: showShine ? 'translateX(100%)' : 'translateX(-100%)' }}
            />
            <span className="relative z-10 flex items-center gap-3">
              Get Free Audit
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MinimalHero;
