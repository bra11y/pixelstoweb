import React from 'react';

const ClientLogos = () => {
  return (
    <section className="section-container bg-white">
      <div className="container-tight mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-12">
            <div className="text-xs font-bold text-primary/80 mb-4 tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full inline-block">
              BE ONE OF OUR EARLY PARTNERS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-cooper">
              Building the Future of Digital Accessibility
            </h2>
            <p className="text-large text-navy max-w-3xl font-atkinson">
              We're building the future of digital accessibility. Join innovative organizations who are becoming accessibility leaders.
            </p>
          </div>
        
          <div className="bg-gradient-to-br from-teal via-teal-dark to-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 rounded-l-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-cooper">Ready to Lead?</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Be among the first organizations to showcase your commitment to digital inclusion. 
                Partner with us and help set the standard for accessible design.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a href="/contact" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-white/30 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50">
                  Become an Early Partner
                </a>
                <a href="/services" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50">
                  Explore Partnership Options
                </a>
              </div>
              
              <div className="pt-8 border-t border-white/20">
                <div className="text-xs font-bold text-white/80 mb-6 tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full inline-block">
                  EARLY PARTNER BENEFITS
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold text-white mb-2 text-center">Priority Support</h4>
                    <p className="text-white/80 text-sm text-center">Direct access to our team and faster response times</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold text-white mb-2 text-center">Input on Services</h4>
                    <p className="text-white/80 text-sm text-center">Help shape our service offerings and methodology</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold text-white mb-2 text-center">Case Study Feature</h4>
                    <p className="text-white/80 text-sm text-center">Showcase your accessibility leadership publicly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
