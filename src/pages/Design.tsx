import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Layers, Palette, Layout } from 'lucide-react';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import SEO from '../components/SEO';
import { usePageTitle } from '../hooks/usePageTitle';
import { designProjects } from './DesignDetail';

const Design = () => {
  usePageTitle('Design Work');

  const projectsArray = [
    { slug: 'motorcycle-ecommerce', ...designProjects['motorcycle-ecommerce'] },
    { slug: 'lawgrid', ...designProjects['lawgrid'] },
    { slug: 'weezkitchen', ...designProjects['weezkitchen'] },
  ];

  return (
    <>
      <SEO 
        title="Design Work | UI/UX Portfolio | PixelsToWeb"
        description="Explore our design portfolio featuring UI/UX work, Figma designs, and modern interface designs."
        keywords="UI design portfolio, UX design, Figma designs, Canadian web design"
        canonical="https://pixelstoweb.com/design"
      />
      <Header />
      <main id="main-content" className="bg-[#F7F7F7]">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Design Portfolio
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black/90 leading-[0.95] tracking-tight mb-8">
                Design That
                <br />
                <span className="text-black/30">Works For Everyone</span>
              </h1>
              <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
                UI/UX designs, Figma prototypes, and visual concepts crafted with accessibility at the core.
              </p>
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="pb-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Featured Project - Motorcycle E-commerce */}
              <Link 
                to={`/design/${projectsArray[0].slug}`}
                className="lg:col-span-2 group rounded-[32px] overflow-hidden relative min-h-[500px]"
              >
                <img 
                  src={projectsArray[0].images[0]} 
                  alt={projectsArray[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">
                    {projectsArray[0].category}
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {projectsArray[0].title}
                  </h2>
                  <p className="text-white/70 text-base md:text-lg max-w-2xl">
                    {projectsArray[0].description.slice(0, 150)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {projectsArray[0].tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Other Projects */}
              {projectsArray.slice(1).map((project) => (
                <Link
                  key={project.slug}
                  to={`/design/${project.slug}`}
                  className="group rounded-[32px] bg-[#FAFAFA] overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-black/10 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-black/40 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold text-black/90 mt-2 mb-2">{project.title}</h3>
                    <p className="text-black/50 text-sm mb-4">{project.description.slice(0, 100)}...</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-black/[0.04] text-black/60 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Design Services */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black/90 mb-6">
                Design Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: Palette,
                  title: 'UI Design',
                  description: 'Beautiful, accessible interfaces that users love to interact with.'
                },
                {
                  icon: Layers,
                  title: 'UX Design',
                  description: 'User-centered design that solves real problems and drives results.'
                },
                {
                  icon: Layout,
                  title: 'Prototyping',
                  description: 'Interactive prototypes to validate ideas before development.'
                }
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <div key={i} className="rounded-[32px] bg-[#F7F7F7] p-8">
                    <div className="w-14 h-14 rounded-2xl bg-black/[0.04] flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-black/60" />
                    </div>
                    <h3 className="text-xl font-bold text-black/90 mb-3">{service.title}</h3>
                    <p className="text-black/50">{service.description}</p>
                  </div>
                );
              })}
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
                  Have a Design Project?
                </h2>
                <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                  Let's collaborate on creating accessible, beautiful designs.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
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

export default Design;
