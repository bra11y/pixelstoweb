import React, { useState } from 'react';
import { Search, ExternalLink, Book, Wrench, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import SEO from '../components/SEO';
import { usePageTitle, PAGE_TITLES } from '../hooks/usePageTitle';

const Resources = () => {
  usePageTitle(PAGE_TITLES.RESOURCES);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Guidelines', 'Tools', 'Best Practices', 'Training'];

  const resources = [
    {
      title: 'WCAG 2.2 Guidelines',
      description: 'Complete Web Content Accessibility Guidelines for AA compliance',
      category: 'Guidelines',
      type: 'External',
      icon: Book,
      url: 'https://www.w3.org/WAI/WCAG22/quickref/'
    },
    {
      title: 'axe DevTools',
      description: 'Browser extension for automated accessibility testing',
      category: 'Tools',
      type: 'External',
      icon: Wrench,
      url: 'https://www.deque.com/axe/devtools/'
    },
    {
      title: 'Color Contrast Analyzer',
      description: 'Tool to test color contrast ratios for WCAG compliance',
      category: 'Tools',
      type: 'External',
      icon: Wrench,
      url: 'https://www.tpgi.com/color-contrast-checker/'
    },
    {
      title: 'Inclusive Design Principles',
      description: 'Microsoft\'s guide to inclusive design methodology',
      category: 'Best Practices',
      type: 'External',
      icon: FileText,
      url: 'https://inclusive.microsoft.design/'
    },
    {
      title: 'Screen Reader Testing Guide',
      description: 'Best practices for testing with assistive technologies',
      category: 'Best Practices',
      type: 'Guide',
      icon: FileText,
      url: '#'
    },
    {
      title: 'WebAIM Training Materials',
      description: 'Comprehensive training resources for accessibility',
      category: 'Training',
      type: 'External',
      icon: Book,
      url: 'https://webaim.org/training/'
    },
    {
      title: 'ARIA Authoring Practices',
      description: 'W3C guide for implementing ARIA in web applications',
      category: 'Guidelines',
      type: 'External',
      icon: Book,
      url: 'https://www.w3.org/WAI/ARIA/apg/'
    },
    {
      title: 'A11y Project Checklist',
      description: 'Community-driven accessibility checklist',
      category: 'Best Practices',
      type: 'External',
      icon: FileText,
      url: 'https://www.a11yproject.com/checklist/'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO 
        title="Web Design Resources | Tools & Guidelines | PixelsToWeb"
        description="Comprehensive directory of web design guidelines, tools, and best practices. Everything you need to create beautiful, functional websites."
        keywords="web design resources, website development tools, design guidelines, web development resources"
        canonical="https://pixelstoweb.com/resources"
      />
      <Header />
      <main id="main-content" className="bg-[#F7F7F7]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Resources
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black/90 leading-[0.95] tracking-tight mb-8">
                Accessibility
                <br />
                <span className="text-black/30">Resource Hub</span>
              </h1>
              <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
                Your comprehensive directory for accessibility guidelines, tools, and best practices.
              </p>
            </div>

            {/* Search & Filter */}
            <div className="rounded-[32px] bg-white p-6 md:p-8 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/30 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-black/[0.03] border-2 border-transparent rounded-2xl focus:border-black/10 focus:outline-none transition-all text-black placeholder:text-black/30"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-4 bg-black/[0.03] border-2 border-transparent rounded-2xl focus:border-black/10 focus:outline-none text-black font-medium"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredResources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <a
                      key={index}
                      href={resource.url}
                      target={resource.type === 'External' ? '_blank' : '_self'}
                      rel={resource.type === 'External' ? 'noopener noreferrer' : undefined}
                      className="rounded-[32px] bg-[#F7F7F7] p-8 flex flex-col min-h-[240px] hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-black/60" />
                        </div>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-black/[0.06] rounded-full text-black/40 text-xs font-bold uppercase">
                            {resource.category}
                          </span>
                          {resource.type === 'External' && (
                            <ExternalLink className="w-4 h-4 text-black/30" />
                          )}
                        </div>
                      </div>
                      <div className="mt-auto">
                        <h3 className="text-xl font-bold text-black/80 mb-2 group-hover:text-black transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-black/50">{resource.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-black/[0.03] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-6 h-6 text-black/30" />
                </div>
                <h3 className="text-xl font-bold text-black/80 mb-3">No resources found</h3>
                <p className="text-black/50 mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="rounded-[40px] bg-black p-10 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Custom Guidance?
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                Can't find what you're looking for? Our accessibility experts can provide personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
                >
                  Get Expert Help
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/services"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
                >
                  Explore Services
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

export default Resources;
