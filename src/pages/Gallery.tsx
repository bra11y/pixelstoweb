import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, Coffee, Video } from 'lucide-react';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import SEO from '../components/SEO';
import { usePageTitle, PAGE_TITLES } from '../hooks/usePageTitle';

const Gallery = () => {
  usePageTitle(PAGE_TITLES.GALLERY);

  const galleryCategories = [
    {
      title: 'Our Team',
      description: 'Meet the people behind PixelsToWeb',
      icon: Users,
      image: '/lovable-uploads/person-computer.jpg'
    },
    {
      title: 'Our Workspace',
      description: 'Where accessibility innovation happens',
      icon: Briefcase,
      image: '/lovable-uploads/operating-computer-anime.jpg'
    },
    {
      title: 'Client Work',
      description: 'Projects that make a difference',
      icon: Coffee,
      image: '/lovable-uploads/dark-shades-using-computer.jpg'
    }
  ];

  return (
    <>
      <SEO 
        title="Gallery | Life at PixelsToWeb | Canadian Web Design Agency"
        description="Get an inside look at PixelsToWeb's team, workspace, and the culture that drives our web design mission."
        keywords="PixelsToWeb gallery, web design team, Canadian web development agency, behind the scenes"
        canonical="https://pixelstoweb.com/gallery"
      />
      <Header />
      <main id="main-content" className="bg-[#F7F7F7]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Gallery
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black/90 leading-[0.95] tracking-tight mb-8">
                Life at
                <br />
                <span className="text-black/30">PixelsToWeb</span>
              </h1>
              <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
                Step inside our world. See the passion, creativity, and innovation that drives our accessibility mission.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section - Reel Format */}
        <section className="pb-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center">
                <Video className="w-6 h-6 text-black/60" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black/90">Accessibility Insights</h2>
                <p className="text-black/50">Learn about digital accessibility through practical tutorials</p>
              </div>
            </div>
            
            {/* Video Container - Centered Reel Format */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[360px] rounded-[32px] overflow-hidden bg-black shadow-2xl">
                {/* 9:16 aspect ratio container for reel */}
                <div className="relative" style={{ paddingBottom: '177.78%' }}>
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                    aria-label="Alt Text 101: Making images accessible for everyone"
                  >
                    <source src="/videos/alt-text-latest.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
                  <h3 className="text-white font-bold text-lg mb-1">Alt Text 101</h3>
                  <p className="text-white/70 text-sm">Making images accessible for everyone</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Explore
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black/90">
                Browse by Category
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {galleryCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={index}
                    className="group relative rounded-[32px] overflow-hidden min-h-[400px]"
                  >
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-white/60">{category.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Our Culture
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black/90">
                What Drives Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Team Collaboration',
                  description: 'Every project is a collaborative effort where diverse skills combine to create exceptional results.',
                  icon: Users
                },
                {
                  title: 'Innovation First',
                  description: 'Our workspace fosters creativity and innovation. The perfect atmosphere for breakthrough ideas.',
                  icon: Briefcase
                },
                {
                  title: 'Work-Life Balance',
                  description: 'We promote healthy balance while maintaining the highest standards of professional excellence.',
                  icon: Coffee
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="rounded-[32px] bg-white p-8 min-h-[280px] flex flex-col justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-black/[0.06] flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-black/60" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black/80 mb-3">{item.title}</h3>
                      <p className="text-black/50">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="rounded-[40px] bg-black p-10 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Want to Work With Us?
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                Join our team or partner with us on your next accessibility project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/about"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FinalCta />
    </>
  );
};

export default Gallery;
