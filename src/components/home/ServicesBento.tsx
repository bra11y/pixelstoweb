import React from 'react';
import { ArrowRight, Code2, Palette, ShoppingCart, Search, Smartphone, Accessibility, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesBento = () => {
  const services = [
    {
      id: 'accessibility',
      icon: Accessibility,
      title: 'Accessibility Audits',
      description: 'Comprehensive WCAG 2.2 audits with detailed remediation roadmaps',
      tags: ['WCAG 2.2', 'ADA', 'Section 508'],
      featured: true
    },
    {
      id: 'development',
      icon: Code2,
      title: 'Web Development',
      description: 'Accessible websites built with React, Next.js, WordPress',
      tags: ['React', 'Next.js', 'WordPress']
    },
    {
      id: 'design',
      icon: Palette,
      title: 'Inclusive Design',
      description: 'User experiences that work for everyone, by default',
      tags: ['UI/UX', 'Design Systems']
    },
    {
      id: 'remediation',
      icon: FileCheck,
      title: 'Remediation',
      description: 'Fix accessibility issues in existing websites and apps',
      tags: ['Quick Fixes', 'Full Overhaul']
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'Accessible E-Commerce',
      description: 'Shopify and WooCommerce stores everyone can use',
      tags: ['Shopify', 'WooCommerce']
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Accessibility',
      description: 'Native and responsive mobile experiences',
      tags: ['iOS', 'Android', 'PWA']
    }
  ];

  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/90 leading-tight mb-6">
            Services Built for
            <br />
            <span className="text-black/30">Inclusion</span>
          </h2>
          <p className="text-lg text-black/50 max-w-2xl mx-auto">
            From audits to development, we help businesses create digital experiences that reach every user.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured Service - Accessibility Audits */}
          <div className="md:col-span-2 lg:col-span-2 rounded-[32px] bg-black p-8 md:p-10 min-h-[320px] flex flex-col justify-between group">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <Accessibility className="w-7 h-7 text-white" />
              </div>
              <span className="text-white/30 text-sm font-medium">01</span>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Accessibility Audits</h3>
              <p className="text-white/60 text-lg mb-6 max-w-xl">
                Comprehensive WCAG 2.2 audits with prioritized remediation roadmaps. We identify every barrier and show you exactly how to fix it.
              </p>
              <div className="flex flex-wrap gap-2">
                {['WCAG 2.2', 'ADA', 'Section 508', 'EN 301 549'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="rounded-[32px] bg-black/[0.03] p-8 min-h-[320px] flex flex-col justify-between group hover:bg-black/[0.06] transition-colors">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center">
                <Code2 className="w-6 h-6 text-black/60" />
              </div>
              <span className="text-black/20 text-sm font-medium">02</span>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-black/80 mb-3">Web Development</h3>
              <p className="text-black/50 mb-4">
                Accessible websites built with modern frameworks
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'WordPress'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-black/[0.06] rounded-full text-black/50 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Inclusive Design */}
          <div className="rounded-[32px] bg-white p-8 min-h-[280px] flex flex-col justify-between group hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center">
                <Palette className="w-6 h-6 text-black/60" />
              </div>
              <span className="text-black/20 text-sm font-medium">03</span>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-black/80 mb-3">Inclusive Design</h3>
              <p className="text-black/50">
                User experiences that work for everyone, by default
              </p>
            </div>
          </div>

          {/* Remediation */}
          <div className="rounded-[32px] bg-black/[0.03] p-8 min-h-[280px] flex flex-col justify-between group hover:bg-black/[0.06] transition-colors">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-black/60" />
              </div>
              <span className="text-black/20 text-sm font-medium">04</span>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-black/80 mb-3">Remediation</h3>
              <p className="text-black/50">
                Fix accessibility issues in existing websites and apps
              </p>
            </div>
          </div>

          {/* E-Commerce */}
          <div className="rounded-[32px] bg-black/[0.03] p-8 min-h-[280px] flex flex-col justify-between group hover:bg-black/[0.06] transition-colors">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-black/60" />
              </div>
              <span className="text-black/20 text-sm font-medium">05</span>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-black/80 mb-3">Accessible E-Commerce</h3>
              <p className="text-black/50">
                Shopify and WooCommerce stores everyone can use
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="md:col-span-2 lg:col-span-3 rounded-[32px] bg-black/[0.03] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-black/80 mb-2">Need something custom?</h3>
              <p className="text-black/50">Let's discuss your unique accessibility requirements</p>
            </div>
            <Link 
              to="/contact" 
              className="shrink-0 inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-all"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* View All Services */}
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-black/60 font-medium hover:text-black hover:gap-3 transition-all"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
