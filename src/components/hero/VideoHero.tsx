import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" aria-label="Hero section">
      {/* Full-screen background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/lovable-uploads/person-computer.jpg"
        >
          {/* Add your video source here */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <div 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mx-auto drop-shadow-2xl whitespace-nowrap"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700
            }}
          >
            <span style={{ color: '#FFFFFF' }}>Pixelto</span>
            <span style={{ color: '#14919B' }}>web</span>
          </div>
        </div>

        {/* Main headline - Single catchy tagline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 tracking-tight animate-fade-in-up delay-200 max-w-6xl leading-tight">
          WEB DEVELOPMENT FOR A DIGITAL NIGERIA
        </h1>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to content"
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <ChevronDown className="w-7 h-7 text-white" />
          </div>
        </button>
      </div>

      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        )}
      </button>
    </section>
  );
};

export default VideoHero;
