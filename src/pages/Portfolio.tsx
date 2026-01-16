import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Target, Lightbulb, Zap, ExternalLink, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import SEO from '../components/SEO';
import { usePageTitle, PAGE_TITLES } from '../hooks/usePageTitle';

const PortfolioPage = () => {
  usePageTitle(PAGE_TITLES.PORTFOLIO);
  const [currentSlide, setCurrentSlide] = useState(0);

  const motorcycleFrames = [
    '/images/frame-4721.png',
    '/images/frame-4722.png',
    '/images/frame-4723.png',
    '/images/frame-4724.png'
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % motorcycleFrames.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [motorcycleFrames.length]);

  const realProjects = [
    {
      title: 'Motorcycle E-commerce Platform',
      category: 'E-commerce Design',
      description: 'Complete design process showcase for a motorcycle selling platform, from wireframes to high-fidelity prototypes. Featuring user flow optimization and conversion-focused design patterns.',
      images: motorcycleFrames,
      isSlideshow: true,
      tags: ['E-commerce', 'UI/UX', 'Design System', 'Prototyping'],
      featured: true
    },
    {
      title: 'Lawgrid',
      category: 'Marketing Website',
      description: 'A modern marketing site for a legal services platform built with accessibility and performance in mind.',
      image: 'https://cdn.sanity.io/images/ruecft06/production/226bd317d601d3722fe4dc79fe9e4f4a0b01f3be-1487x961.png',
      liveUrl: 'https://lawgrid.vercel.app/',
      tags: ['React', 'Next.js', 'Responsive']
    },
    {
      title: 'WeezKitchen',
      category: 'Restaurant Website',
      description: 'A beautiful restaurant website with menu showcase and online ordering.',
      image: 'https://personalweb-mocha.vercel.app/static/media/project55.4abec7c3bb7cc6079808.png',
      liveUrl: 'https://weezkitchen.vercel.app/',
      tags: ['E-commerce', 'Restaurant', 'Mobile First']
    }
  ];

  const placeholderProjects = [
    {
      title: 'Your Project Here',
      category: 'Get Featured',
      description: 'Partner with us and get your accessible website showcased in our portfolio.',
      isPlaceholder: true
    },
    {
      title: 'E-Commerce Platform',
      category: 'Coming Soon',
      description: 'WCAG 2.2 compliant e-commerce solution currently in development.',
      isPlaceholder: true
    }
  ];

  const processSteps = [
    {
      title: 'Research & Discovery',
      description: 'We start by understanding your users, their needs, and the accessibility challenges they face.',
      icon: Target,
      phase: 'Foundation'
    },
    {
      title: 'Design & Prototype',
      description: 'We create accessible designs and build working prototypes, testing with real assistive technologies.',
      icon: Lightbulb,
      phase: 'Creation'
    },
    {
      title: 'Build & Iterate',
      description: 'We implement solutions with continuous testing and refinement, ensuring accessibility is maintained.',
      icon: Zap,
      phase: 'Execution'
    }
  ];

  return (
    <>
      <SEO
        title="Portfolio | Web Design Case Studies | PixelsToWeb"
        description="See how we've helped businesses create beautiful, functional websites. Real results from real projects."
        keywords="web design case studies, website portfolio, custom website examples, Canadian web design projects"
        canonical="https://pixelstoweb.com/portfolio"
      />
      <Header />
      <main id="main-content" className="bg-[#F7F7F7]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Our Work
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black/90 leading-[0.95] tracking-tight mb-8">
                Results That
                <br />
                <span className="text-black/30">Speak For Themselves</span>
              </h1>
              <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
                Real projects built with accessibility and user experience at the core.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="pb-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Featured Project - Large with Slideshow */}
              <div className="lg:row-span-2">
                <div className="group block relative rounded-[32px] overflow-hidden h-full min-h-[500px] bg-[#FAFAFA] border border-black/10 shadow-md">
                  {realProjects[0].isSlideshow ? (
                    <>
                      {realProjects[0].images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${realProjects[0].title} frame ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                        />
                      ))}
                    </>
                  ) : (
                    <img
                      src={realProjects[0].image}
                      alt={realProjects[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {realProjects[0].isSlideshow && (
                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {realProjects[0].images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                              ? 'bg-white w-8'
                              : 'bg-white/40 hover:bg-white/60'
                            }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">
                      {realProjects[0].category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{realProjects[0].title}</h3>
                    <p className="text-white/70 text-base max-w-md mb-4">{realProjects[0].description}</p>
                    <div className="flex flex-wrap gap-2">
                      {realProjects[0].tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <a
                href={realProjects[1].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-[32px] overflow-hidden min-h-[280px] bg-[#FAFAFA] border border-black/10 shadow-sm"
              >
                <img
                  src={realProjects[1].image}
                  alt={realProjects[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3">
                    {realProjects[1].category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{realProjects[1].title}</h3>
                  <p className="text-white/70 text-sm">{realProjects[1].description}</p>
                </div>
              </a>

              {/* Project 3 */}
              <a
                href={realProjects[2].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-[32px] overflow-hidden min-h-[280px] bg-[#FAFAFA] border border-black/10 shadow-sm"
              >
                <img
                  src={realProjects[2].image}
                  alt={realProjects[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3">
                    {realProjects[2].category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{realProjects[2].title}</h3>
                  <p className="text-white/70 text-sm">{realProjects[2].description}</p>
                </div>
              </a>
            </div>

            {/* Get Featured Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {placeholderProjects.map((project, index) => (
                <Link
                  key={index}
                  to="/contact"
                  className="group rounded-[32px] bg-[#FAFAFA] border-2 border-dashed border-black/15 p-8 min-h-[200px] flex flex-col justify-between hover:border-black/25 hover:bg-black/[0.02] transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-black/[0.04] flex items-center justify-center mb-4 group-hover:bg-black/[0.06] transition-colors">
                    <Plus className="w-7 h-7 text-black/40" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold text-black/80 mt-2 mb-2">{project.title}</h3>
                    <p className="text-black/50 text-sm">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black/90 mb-6">
                How We Work
              </h2>
              <p className="text-lg text-black/50 max-w-2xl mx-auto">
                A proven methodology that delivers results every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="rounded-[32px] bg-[#F7F7F7] p-8">
                    <span className="text-xs font-bold text-black/40 uppercase tracking-wider">{step.phase}</span>
                    <div className="w-14 h-14 rounded-2xl bg-black/[0.04] flex items-center justify-center my-6">
                      <Icon className="w-7 h-7 text-black/60" />
                    </div>
                    <h3 className="text-xl font-bold text-black/90 mb-3">{step.title}</h3>
                    <p className="text-black/50">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { number: '100%', label: 'Dedication' },
                { number: 'WCAG 2.2', label: 'Compliant' },
                { number: 'AI+Human', label: 'Approach' },
                { number: 'Premium', label: 'Service' }
              ].map((stat, i) => (
                <div key={i} className="rounded-[32px] bg-[#FAFAFA] p-8 text-center border border-black/10 shadow-sm">
                  <div className="text-4xl md:text-5xl font-bold text-black/90 mb-2">{stat.number}</div>
                  <div className="text-black/40 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="rounded-[40px] bg-black p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                  Let's create something accessible and beautiful together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/design"
                    className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Design Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FinalCta />
    </>
  );
};

export default PortfolioPage;
