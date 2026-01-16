import React from 'react';
import { Search, Wrench, GraduationCap, ArrowRight } from 'lucide-react';
import LifestyleGallery from '../LifestyleGallery';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'We conduct a thorough evaluation of your digital assets against WCAG 2.1 guidelines and identify all accessibility barriers.',
      icon: <Search size={32} className="text-primary" />,
      category: 'DISCOVERY',
      details: 'Comprehensive auditing using automated tools and manual testing with real assistive technologies.'
    },
    {
      number: '02', 
      title: 'Remediation',
      description: 'Our experts implement necessary fixes and improvements to make your digital content accessible to all users.',
      icon: <Wrench size={32} className="text-primary" />,
      category: 'IMPLEMENTATION',
      details: 'Code-level fixes, design improvements, and content optimization for maximum accessibility.'
    },
    {
      number: '03',
      title: 'Empowerment',
      description: 'We provide training and resources to help your team maintain accessibility standards going forward.',
      icon: <GraduationCap size={32} className="text-primary" />,
      category: 'EDUCATION',
      details: 'Training sessions, documentation, and ongoing support to build internal accessibility expertise.'
    },
  ];

  return (
    <section className="section-container bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-tight mx-auto">
        {/* Header */}
        <div className="text-left mb-12 max-w-4xl mx-auto">
          <div className="text-xs font-bold text-primary/80 mb-4 tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full inline-block">
            SIMPLE STEPS TO DIGITAL ACCESSIBILITY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-cooper">
            Our Proven Process
          </h2>
          <p className="text-large text-navy max-w-3xl font-atkinson">
            We've streamlined our approach to make improving accessibility straightforward, effective, and sustainable for your organization.
          </p>
        </div>
        
        {/* Improved Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
              {/* Glass effect background */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-teal/10 rounded-full translate-y-6 -translate-x-6"></div>
              
              <div className="relative z-10">
                {/* Category and Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs font-bold text-primary/80 tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                    {step.category}
                  </div>
                  <div className="text-3xl font-bold text-primary/20 font-cooper">
                    {step.number}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-4 font-atkinson">{step.title}</h3>
                <p className="text-navy/80 leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Details */}
                <div className="pt-4 border-t border-primary/10">
                  <p className="text-sm text-navy/60 leading-relaxed">
                    {step.details}
                  </p>
                </div>
                
                {/* Connection Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <ArrowRight size={16} className="text-primary" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Our Work in Action Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy mb-4">Our Work in Action</h3>
            <p className="text-lg text-navy/80 max-w-2xl mx-auto">
              See our team in action delivering exceptional web development and accessibility solutions
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6">
            <LifestyleGallery 
              category="project" 
              showTitle={false} 
              maxImages={4} 
              layout="grid"
            />
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-navy/70 mb-6">Ready to start your accessibility journey?</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-md">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
