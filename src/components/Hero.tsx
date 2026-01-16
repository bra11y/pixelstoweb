import React, { useState, useEffect, useRef } from 'react';
import HeroButtons from './hero/HeroButtons';
import ComplianceBadges from './hero/ComplianceBadges';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const liveRegionRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "Making Digital",
      subtitle: "Accessible for Everyone",
      description: "We blend AI powered auditing with custom accessibility management to transform how businesses serve all their users. Premium service, personal attention."
    },
    {
      title: "Custom Accessibility",
      subtitle: "Management Solutions",
      description: "Every business is unique. Our tailored approach combines expert analysis with intelligent automation to deliver accessibility solutions that fit your specific needs."
    },
    {
      title: "Shopify Sections",
      subtitle: "And Snippets Experts",
      description: "We specialize in creating custom Shopify sections and snippets that enhance your store's functionality while maintaining full accessibility compliance."
    },
    {
      title: "AI Enhanced",
      subtitle: "Accessibility Auditing",
      description: "Leverage cutting edge AI technology alongside human expertise for comprehensive WCAG compliance. Faster, smarter, and more thorough than traditional methods alone."
    },
    {
      title: "Your Partner in",
      subtitle: "Digital Inclusion",
      description: "From initial audit to ongoing management, we guide your accessibility journey with premium service and dedicated support at every step."
    },
    {
      title: "Built on Purpose",
      subtitle: "Driven by Passion",
      description: "Founded on a personal commitment to digital inclusion. We understand accessibility because we believe in it, not just as a service but as a mission."
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setUserInteracted(true);
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setUserInteracted(true);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setUserInteracted(true);
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setUserInteracted(true);
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy to-primary overflow-hidden"
      aria-label="Hero section"
    >
      {/* Enhanced Animated Background with Lifestyle Images */}
      <div className="absolute inset-0">
        {/* Background Lifestyle Image Carousel */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/person-computer.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide % 3 === 0 ? 1 : 0
            }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/operating-computer-anime.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide % 3 === 1 ? 1 : 0
            }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/dark-shades-using-computer.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide % 3 === 2 ? 1 : 0
            }}
          />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-cream/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cream/10 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/5 to-cream/5 rounded-full blur-2xl animate-pulse delay-2000"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cream/40 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-primary/50 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-white/50 rotate-12 animate-bounce delay-1100"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-cream/40 rounded-full animate-bounce delay-1500"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        />

        {/* Animated Lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cream/30 to-transparent animate-pulse delay-1200"></div>
      </div>

      <div className="container-tight mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main content - enhanced with animations */}
          <div className="mb-12" role="region" aria-label="Featured content">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/15 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Premium Accessibility Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2 animate-fade-in-up">
                {slides[currentSlide].title}
              </span>
              <span className="block text-cream animate-fade-in-up delay-200 bg-gradient-to-r from-cream via-white to-cream bg-clip-text text-transparent animate-shimmer">
                {slides[currentSlide].subtitle}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed opacity-95 animate-fade-in-up delay-400">
              {slides[currentSlide].description}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-10 animate-fade-in-up delay-600">
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-sm">Personalized Service</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-sm">AI Powered Audits</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-sm">Expert Led Solutions</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-12 animate-fade-in-up delay-800">
            <HeroButtons />
          </div>

          {/* Slider controls - hidden from screen readers by default */}
          <div
            className="flex items-center justify-center gap-6 mt-12"
            role="group"
            aria-label="Slideshow controls"
            aria-describedby="slideshow-status"
          >
            <button
              onClick={prevSlide}
              className="slider-nav-btn group"
              aria-label="Previous slide"
              aria-describedby="current-slide-info"
            >
              <ChevronLeft
                size={20}
                className="text-white group-hover:text-cream transition-colors duration-200"
              />
            </button>

            <button
              onClick={togglePlayPause}
              className="slider-nav-btn group"
              aria-label={isPlaying ? 'Pause automatic slideshow' : 'Start automatic slideshow'}
              aria-describedby="slideshow-status"
            >
              {isPlaying ? (
                <Pause
                  size={20}
                  className="text-white group-hover:text-cream transition-colors duration-200"
                />
              ) : (
                <Play
                  size={20}
                  className="text-white group-hover:text-cream transition-colors duration-200"
                />
              )}
            </button>

            <button
              onClick={nextSlide}
              className="slider-nav-btn group"
              aria-label="Next slide"
              aria-describedby="current-slide-info"
            >
              <ChevronRight
                size={20}
                className="text-white group-hover:text-cream transition-colors duration-200"
              />
            </button>
          </div>

          {/* Slide indicators */}
          <div
            className="flex justify-center gap-3 mt-6"
            role="tablist"
            aria-label="Slide navigation"
          >
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`slider-indicator ${index === currentSlide ? 'active' : ''
                  }`}
                role="tab"
                aria-selected={index === currentSlide}
                aria-controls={`slide-${index}`}
                aria-label={`${slide.title} ${slide.subtitle}`}
                tabIndex={index === currentSlide ? 0 : -1}
              />
            ))}
          </div>

          {/* Hidden status information for screen readers */}
          <div className="sr-only">
            <div id="slideshow-status">
              Slideshow is currently {isPlaying ? 'playing automatically' : 'paused'}.
              Use the previous and next buttons to navigate manually.
            </div>
            <div id="current-slide-info">
              Currently showing slide {currentSlide + 1} of {slides.length}
            </div>
          </div>
        </div>

        <ComplianceBadges />
      </div>

      {/* Live region - only announces user-initiated changes */}
      <div
        ref={liveRegionRef}
        className="sr-only"
        aria-live={userInteracted ? "polite" : "off"}
        aria-atomic="true"
      >
        {userInteracted && (
          <>Slide {currentSlide + 1}: {slides[currentSlide].title} {slides[currentSlide].subtitle}</>
        )}
      </div>
    </section>
  );
};

export default Hero; 