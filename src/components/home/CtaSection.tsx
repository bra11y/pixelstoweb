import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section-container bg-black text-white">
      <div className="container-tight mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 text-white mb-8">READY TO MAKE YOUR DIGITAL EXPERIENCE ACCESSIBLE?</h2>
          <p className="text-large text-white/90 mb-12 max-w-3xl mx-auto">
            Let's work together to create inclusive digital solutions that reach all your users.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="button-primary">
              Get Started
            </Link>
            <Link to="/services" className="button-outline border-white text-white hover:bg-white hover:text-black">
              Explore Our Services
            </Link>
          </div>
        </div>
        
        {/* Newsletter signup - Note: This needs to be properly connected to Formspree */}
        <div className="mt-16 pt-16 border-t-2 border-white/20">
          <div className="max-w-2xl mx-auto">
            <h3 className="h4 text-white mb-4">STAY UPDATED</h3>
            <p className="text-white/80 mb-6">Get accessibility insights and best practices delivered to your inbox.</p>
            <p className="text-white/60 text-sm">Newsletter coming soon! Follow us on LinkedIn for updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
