import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import SEO from '../components/SEO';

// Design projects data
export const designProjects = {
  'motorcycle-ecommerce': {
    title: 'Motorcycle E-commerce Platform',
    category: 'E-commerce Design',
    description: 'A comprehensive e-commerce platform designed for motorcycle enthusiasts. Features intuitive product browsing, detailed specifications, and a seamless checkout experience. Built with accessibility in mind to ensure all users can navigate and purchase with ease.',
    details: [
      'Responsive design optimized for all devices',
      'Accessible color contrast and typography',
      'Keyboard navigable product galleries',
      'Screen reader friendly checkout flow',
      'High-performance image loading'
    ],
    images: [
      '/images/frame-4721.png',
      '/images/frame-4722.png',
      '/images/frame-4723.png',
      '/images/frame-4724.png'
    ],
    liveUrl: null,
    tags: ['E-commerce', 'UI/UX', 'Accessibility', 'Responsive']
  },
  'lawgrid': {
    title: 'Lawgrid Ng',
    category: 'Marketing Website',
    description: 'A modern marketing website for a legal services platform. Clean, professional design with clear information hierarchy and accessible navigation.',
    details: [
      'WCAG 2.2 AA compliant',
      'Optimized for conversions',
      'Fast loading performance',
      'Mobile-first approach'
    ],
    images: [
      'https://cdn.sanity.io/images/ruecft06/production/226bd317d601d3722fe4dc79fe9e4f4a0b01f3be-1487x961.png'
    ],
    liveUrl: 'https://lawgrid.vercel.app/',
    tags: ['Marketing', 'Next.js', 'Responsive']
  },
  'weezkitchen': {
    title: 'WeezKitchen',
    category: 'Restaurant Website',
    description: 'A visually appealing restaurant website with menu showcase and online ordering capabilities.',
    details: [
      'Menu accessibility features',
      'Online ordering integration',
      'Mobile-responsive design',
      'Fast page loads'
    ],
    images: [
      'https://personalweb-mocha.vercel.app/static/media/project55.4abec7c3bb7cc6079808.png'
    ],
    liveUrl: 'https://weezkitchen.vercel.app/',
    tags: ['Restaurant', 'E-commerce', 'Mobile First']
  }
};

const DesignDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? designProjects[slug as keyof typeof designProjects] : null;

  if (!project) {
    return (
      <>
        <Header />
        <main className="bg-[#F7F7F7] min-h-screen pt-32 pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
            <h1 className="text-4xl font-bold text-black/90 mb-4">Project Not Found</h1>
            <p className="text-black/50 mb-8">The design project you're looking for doesn't exist.</p>
            <Link to="/design" className="inline-flex items-center gap-2 text-black/70 hover:text-black">
              <ArrowLeft className="w-4 h-4" /> Back to Design
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${project.title} | Design Case Study | PixelsToWeb`}
        description={project.description}
        canonical={`https://pixelstoweb.com/design/${slug}`}
      />
      <Header />
      <main id="main-content" className="bg-[#F7F7F7] min-h-screen">
        {/* Back Link */}
        <div className="pt-28 pb-8">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Link 
              to="/design" 
              className="inline-flex items-center gap-2 text-black/50 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Design
            </Link>
          </div>
        </div>

        {/* Images Section */}
        <section className="pb-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="space-y-8">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-[32px] overflow-hidden bg-[#FAFAFA] shadow-lg aspect-video border border-black/15"
                >
                  <img
                    src={image}
                    alt={`${project.title} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Info - Bottom Left Aligned, Centered on Page */}
        <section className="pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="max-w-2xl">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/90 leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-black/60 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Details List */}
              <ul className="space-y-3 mb-8">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/30 mt-2 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-black/[0.04] text-black/60 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live URL */}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-all"
                >
                  View Live Site
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
      <FinalCta />
    </>
  );
};

export default DesignDetail;

