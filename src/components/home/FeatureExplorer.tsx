import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

const FeatureExplorer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const features = [
    {
      title: 'Accessibility Audits',
      description: 'Comprehensive WCAG 2.2 compliance audits with detailed reports and actionable recommendations. We test with real assistive technologies.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    },
    {
      title: 'Inclusive Design',
      description: 'User-centered design that considers all abilities from the start. Beautiful interfaces that are accessible by default.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    },
    {
      title: 'Accessible Development',
      description: 'Clean, semantic code that works with screen readers and keyboard navigation. React, Next.js, and WordPress sites.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
    },
    {
      title: 'PDF Remediation',
      description: 'Transform inaccessible documents into fully compliant PDFs with proper structure and reading order.',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80',
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous monitoring, training, and support to keep your digital presence accessible as it evolves.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    }
  ];

  useEffect(() => {
    if (isMobile) return; // Skip scroll handler on mobile

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const sectionHeight = sectionRef.current.offsetHeight;
          const windowHeight = window.innerHeight;

          // Calculate how far we've scrolled through the section
          const scrolled = -rect.top;
          const totalScrollable = sectionHeight - windowHeight;
          const scrollProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));

          setProgress(scrollProgress);

          // Map progress to feature index
          const newIndex = Math.min(
            Math.floor(scrollProgress * features.length),
            features.length - 1
          );
          setActiveIndex(Math.max(0, newIndex));

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length, isMobile]);

  const handleFeatureClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Mobile: Simple accordion layout
  if (isMobile) {
    return (
      <section className="bg-[#F7F7F7] py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-8">
            What We Do
          </span>

          <div className="space-y-4">
            {features.map((feature, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/10"
                >
                  <button
                    onClick={() => handleFeatureClick(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2 rounded-2xl transition-all"
                    aria-expanded={isExpanded}
                    aria-controls={`feature-content-${index}`}
                  >
                    <h3 className="text-lg font-bold text-black pr-4">
                      {feature.title}
                    </h3>
                    <span
                      className="flex-shrink-0 text-2xl font-light text-black/40 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    id={`feature-content-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    aria-hidden={!isExpanded}
                  >
                    <div className="px-6 pb-6">
                      <div className="relative rounded-xl overflow-hidden bg-black/5 aspect-[16/10] mb-4">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-black/60 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: Scroll-based animation
  return (
    <section
      ref={sectionRef}
      className="bg-[#F7F7F7] relative"
      style={{ height: `${features.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left - Feature List */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-8">
                What We Do
              </span>
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <li key={index}>
                    <div
                      className={`py-4 transition-all duration-300 ease-out`}
                    >
                      <h3 className={`text-xl font-bold transition-all duration-500 ease-in-out ${activeIndex === index ? 'text-black' : 'text-black/30'
                        }`}>
                        {feature.title}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
                          }`}
                      >
                        <p className="text-black/60 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Feature Image */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-[32px] overflow-hidden bg-black/5 shadow-2xl aspect-[16/10] border border-black/15">
                {features.map((feature, index) => (
                  <img
                    key={index}
                    src={feature.image}
                    alt={feature.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${activeIndex === index
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                      }`}
                  />
                ))}

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10">
                  <div
                    className="h-full bg-black/40 transition-all duration-150 ease-out"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureExplorer;
