import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureHero = () => {
  const [showShine, setShowShine] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    'WCAG 2.2 Compliance',
    'Inclusive Design',
    'Accessible Development',
    'PDF Remediation',
    'User Experience'
  ];

  useEffect(() => {
    // Initial load animation
    const loadTimer = setTimeout(() => setIsLoaded(true), 200);
    
    // Rotating text animation - 3.5 seconds per text
    const textInterval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % rotatingTexts.length);
    }, 3500);
    
    // Start shine animation after 3 seconds, then repeat every 8 seconds
    const shineTimer = setTimeout(() => {
      setShowShine(true);
      const interval = setInterval(() => {
        setShowShine(false);
        setTimeout(() => setShowShine(true), 100);
      }, 8000);
      return () => clearInterval(interval);
    }, 3000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(shineTimer);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/hearing-aid-person-face.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content - Centered at bottom */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 text-center px-6">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-2 transition-all duration-700 whitespace-nowrap ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
          <span style={{ color: '#FFFFFF' }}>Pixelto</span>
          <span style={{ color: '#14919B' }}>web</span>
        </h2>
        
        {/* Rotating Text */}
        <div className={`relative h-12 md:h-16 mb-8 w-full max-w-md mx-auto transition-all duration-700 delay-100 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {rotatingTexts.map((text, index) => (
            <p
              key={index}
              className={`absolute inset-0 text-lg md:text-2xl text-white/90 font-light flex items-center justify-center whitespace-nowrap px-4 transition-all duration-700 ease-in-out ${
                currentTextIndex === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {text}
            </p>
          ))}
        </div>
        
        <Link
          to="/contact"
          className={`group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full font-medium hover:bg-white/20 transition-all border border-white/20 overflow-hidden ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '200ms', transitionDuration: '700ms' }}
        >
          {/* Shine/Wipe Effect */}
          <span
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[1500ms] ease-out ${
              showShine ? 'translate-x-full' : '-translate-x-full'
            }`}
            style={{ transform: showShine ? 'translateX(100%)' : 'translateX(-100%)' }}
          />
          <span className="relative z-10 flex items-center gap-3">
            Email Us
            <Mail className="w-5 h-5" />
          </span>
        </Link>
        
        <p className={`text-white/60 text-sm mt-4 transition-all duration-700 delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Free Consultation
        </p>
      </div>
    </section>
  );
};

export default FeatureHero;
