import React from 'react';
import { Quote, Star, Users, Rocket } from 'lucide-react';
import LifestyleGallery from '../LifestyleGallery';

const TestimonialsSection = () => {
  return (
    <section className="section-container bg-white">
      <div className="container-tight mx-auto">
        {/* Header */}
        <div className="text-left mb-12 max-w-4xl mx-auto">
          <div className="text-xs font-bold text-primary/80 mb-4 tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full inline-block">
            YOUR SUCCESS STORY STARTS HERE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-cooper">
            What Early Partners Can Expect
          </h2>
          <p className="text-large text-navy max-w-3xl font-atkinson">
            We're just getting started, and we want you to be part of our journey. Here's what makes partnering with us special.
          </p>
        </div>

        {/* Improved Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
            {/* Glass effect background */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-teal/10 rounded-full translate-y-6 -translate-x-6"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4 font-atkinson">Dedicated Expertise</h3>
              <p className="text-navy/80 leading-relaxed">
                Work directly with our accessibility experts who are passionate about creating inclusive digital experiences.
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
            {/* Glass effect background */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-teal/5 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-primary/10 rounded-full translate-y-6 -translate-x-6"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal/10 to-teal/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4 font-atkinson">Collaborative Approach</h3>
              <p className="text-navy/80 leading-relaxed">
                We partner with you to build accessibility into your organization's DNA, not just deliver solutions.
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg relative overflow-hidden group md:col-span-2 lg:col-span-1">
            {/* Glass effect background */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-navy/5 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-secondary/10 rounded-full translate-y-6 -translate-x-6"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4 font-atkinson">Innovation Focus</h3>
              <p className="text-navy/80 leading-relaxed">
                As an early partner, you'll help us pioneer new approaches to digital accessibility and inclusion.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action for Early Customers - Glassmorphism Design */}
        <div className="bg-gradient-to-br from-teal via-teal-dark to-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 rounded-l-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="text-xs font-bold text-white/80 mb-4 tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full inline-block">
              BE OUR NEXT SUCCESS STORY
            </div>
            <Quote size={48} className="text-white/20 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-cooper">
              Partner With Accessibility Pioneers
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your digital experience and become an accessibility leader? 
              We're looking for forward-thinking organizations to partner with as we build the future of inclusive design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a href="/contact" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-white/30 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50">
                Start Your Journey
              </a>
              <a href="/services" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50">
                Learn About Our Process
              </a>
            </div>
            
            <div className="pt-8 border-t border-white/20">
              <div className="text-xs font-bold text-white/80 mb-6 tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full inline-block">
                WHAT EARLY PARTNERS GET
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-bold text-white mb-2 text-center">🏆 Recognition</h4>
                  <p className="text-white/80 text-sm text-center">Featured as an accessibility pioneer in our case studies</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-bold text-white mb-2 text-center">🤝 Partnership</h4>
                  <p className="text-white/80 text-sm text-center">Direct collaboration with our founding team</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-bold text-white mb-2 text-center">💎 Premium Value</h4>
                  <p className="text-white/80 text-sm text-center">Early partner pricing and exclusive service access</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Interaction Gallery */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy mb-4">Building Relationships</h3>
            <p className="text-navy/80 max-w-2xl mx-auto">
              See how we connect with our clients and partners to deliver exceptional results
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6">
            <LifestyleGallery 
              category="client" 
              showTitle={false} 
              maxImages={2} 
              layout="carousel"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
