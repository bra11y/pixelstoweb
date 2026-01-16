import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const motorcycleFrames = [
    '/lovable-uploads/frame-4721.png',
    '/lovable-uploads/frame-4722.png',
    '/lovable-uploads/frame-4723.png',
    '/lovable-uploads/frame-4724.png'
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % motorcycleFrames.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [motorcycleFrames.length]);

  const projects = [
    {
      title: 'Motorcycle E-commerce',
      category: 'E-commerce Design',
      description: 'Complete design process showcase for a motorcycle selling platform, from wireframes to high-fidelity prototypes.',
      images: motorcycleFrames,
      isSlideshow: true,
      url: '/design/motorcycle-ecommerce',
      isInternal: true,
    },
    {
      title: 'Lawgrid',
      category: 'Marketing Website',
      description: 'A modern marketing site for a legal services platform built with accessibility and performance in mind.',
      image: 'https://cdn.sanity.io/images/ruecft06/production/226bd317d601d3722fe4dc79fe9e4f4a0b01f3be-1487x961.png',
      url: 'https://lawgrid.vercel.app/',
      isInternal: false,
    },
    {
      title: 'WeezKitchen',
      category: 'Restaurant Website',
      description: 'A beautiful restaurant website with menu showcase and online ordering.',
      image: 'https://personalweb-mocha.vercel.app/static/media/project55.4abec7c3bb7cc6079808.png',
      url: 'https://weezkitchen.vercel.app/',
      isInternal: false,
    }
  ];

  const ProjectCard = ({ project, className, isFeatured = false }: {
    project: typeof projects[0];
    className?: string;
    isFeatured?: boolean;
  }) => {
    const content = (
      <>
        {project.isSlideshow ? (
          <>
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} frame ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
          </>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {project.isSlideshow && isFeatured && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        <div className={`absolute ${isFeatured ? 'top-6 right-6 w-12 h-12' : 'top-4 right-4 w-10 h-10'} bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
        
        <div className={`absolute bottom-0 left-0 right-0 ${isFeatured ? 'p-8' : 'p-6'}`}>
          <span className={`inline-block ${isFeatured ? 'px-4 py-2 text-sm mb-4' : 'px-3 py-1 text-xs mb-3'} bg-white/10 backdrop-blur-sm text-white font-medium rounded-full`}>
            {project.category}
          </span>
          <h3 className={`${isFeatured ? 'text-3xl md:text-4xl mb-3' : 'text-2xl mb-2'} font-bold text-white`}>
            {project.title}
          </h3>
          <p className={`text-white/70 ${isFeatured ? 'text-base max-w-md' : 'text-sm'}`}>
            {project.description}
          </p>
        </div>
      </>
    );

    if (project.isInternal) {
      return (
        <Link to={project.url} className={`group block relative rounded-[32px] overflow-hidden ${className}`}>
          {content}
        </Link>
      );
    }

    return (
      <a 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block relative rounded-[32px] overflow-hidden ${className}`}
      >
        {content}
      </a>
    );
  };

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/90 leading-tight mb-6">
            Results That
            <br />
            <span className="text-black/30">Speak For Themselves</span>
          </h2>
          <p className="text-lg text-black/50 max-w-2xl mx-auto">
            Real projects built with accessibility and user experience at the core.
          </p>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Featured Project - Large */}
          <div className="lg:row-span-2">
            <ProjectCard 
              project={projects[0]} 
              className="h-full min-h-[500px]" 
              isFeatured={true}
            />
          </div>

          {/* Project 2 */}
          <ProjectCard project={projects[1]} className="min-h-[280px]" />

          {/* Project 3 */}
          <ProjectCard project={projects[2]} className="min-h-[280px]" />
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Technologies */}
          <div className="rounded-[32px] bg-white p-8 flex flex-col justify-between min-h-[180px] border border-black/10 shadow-md">
            <span className="text-sm font-bold text-black/50 uppercase tracking-wider">Technologies</span>
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-black/[0.08] rounded-full text-black/70 text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <div className="rounded-[32px] bg-black p-8 flex flex-col justify-between min-h-[180px] relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
            <div className="text-5xl font-bold text-white tracking-tighter relative z-10">24hr</div>
            <div className="relative z-10">
              <div className="text-white/80 font-medium">Average Response</div>
              <div className="text-white/50 text-sm mt-1">Fast turnaround on all projects</div>
            </div>
          </div>

          {/* Quick Testimonial */}
          <div className="rounded-[32px] bg-white p-8 flex flex-col justify-between min-h-[180px] border border-black/10 shadow-md">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">⭐</span>
              ))}
            </div>
            <div>
              <p className="text-black/80 font-medium italic mb-2">
                "Excellent work on our project. Highly recommended!"
              </p>
              <div className="text-black/50 text-sm">Client Testimonial</div>
            </div>
          </div>
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link 
            to="/portfolio"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-all"
          >
            View All Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
