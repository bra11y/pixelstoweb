import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const BentoPortfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Shopify Development',
      description: 'Building a digital foundation that reflects a commitment to timeless, quality design.',
      image: '/images/person-computer.jpg',
      size: 'large', // spans 2 columns
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'WordPress Development',
      description: 'Crafting alluring digital content for Nigeria\'s leading financial services.',
      image: '/images/operating-computer-anime.jpg',
      size: 'medium',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Brand Identity',
      category: 'Brand Design',
      description: 'Enhancing a vision of beauty redefined with polished visual storytelling.',
      image: '/images/dark-shades-using-computer.jpg',
      size: 'medium',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'Creating seamless mobile experiences for modern Nigerian consumers.',
      image: '/images/person-computer.jpg',
      size: 'small',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'Digital Marketing',
      category: 'SEO & Marketing',
      description: 'Amplifying online presence through strategic digital marketing.',
      image: '/images/operating-computer-anime.jpg',
      size: 'small',
      link: '/portfolio'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-tight mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 mb-6 shadow-2xl">
            <span className="text-white text-2xl">💼</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            OUR WORK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-blue-500/25 ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                item.size === 'medium' ? 'md:col-span-1 md:row-span-2' : 
                'md:col-span-1 md:row-span-1'
              }`}
            >
              {/* Image */}
              <div className="relative h-full min-h-[300px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Category badge */}
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-300 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Arrow icon */}
                  <div className="flex items-center gap-2 text-blue-400 font-semibold">
                    <span>View Project</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover effect circle */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            VIEW ALL WORK
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BentoPortfolio;
