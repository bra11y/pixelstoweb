import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';

const HeroCtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-tight mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            We amplify the online presence of ambitious Nigerian brands
          </h2>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">500+</div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">100%</div>
                <div className="text-sm text-white/70">Money-Back Guarantee</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/about"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
            >
              LEARN MORE ABOUT US
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              GET STARTED
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCtaSection;
