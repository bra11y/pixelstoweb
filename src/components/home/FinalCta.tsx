import React from 'react';
import { ArrowRight, Mail, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCta = () => {
  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Main CTA */}
        <div className="rounded-[40px] bg-black p-10 md:p-16 lg:p-20 text-center mb-4 relative overflow-hidden">
          {/* Glassy Green Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-8">
              Let's Build
              <br />
              <span className="text-white/30">Something Accessible</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10">
              Your vision. Our expertise. Let's create digital experiences that work for everyone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-emerald-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-500/30 transition-all border border-emerald-500/30"
              >
                Email Us
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Email */}
          <Link
            to="/contact"
            className="rounded-[32px] bg-[#FAFAFA] p-8 flex flex-col justify-between min-h-[180px] group hover:shadow-lg transition-shadow border border-black/10 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-black/40 text-sm uppercase tracking-wider mb-1">Email</div>
              <div className="text-black/80 font-medium group-hover:text-black transition-colors">hello@pixelstoweb.com</div>
            </div>
          </Link>

          {/* Location */}
          <div className="rounded-[32px] bg-black/[0.03] p-8 flex flex-col justify-between min-h-[180px]">
            <div className="w-12 h-12 rounded-2xl bg-black/[0.06] flex items-center justify-center">
              <MapPin className="w-6 h-6 text-black/60" />
            </div>
            <div>
              <div className="text-black/40 text-sm uppercase tracking-wider mb-1">Location</div>
              <div className="text-black/80 font-medium">Toronto, ON</div>
              <div className="text-black/40 text-sm">Serving clients across Canada</div>
            </div>
          </div>

          {/* Social */}
          <div className="rounded-[32px] bg-black/[0.03] p-8 flex flex-col justify-between min-h-[180px]">
            <div className="text-black/40 text-sm uppercase tracking-wider">Follow Us</div>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/pixelstoweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black/[0.06] hover:bg-emerald-500 hover:text-white rounded-xl flex items-center justify-center transition-all text-black/60"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/pixelstoweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black/[0.06] hover:bg-emerald-500 hover:text-white rounded-xl flex items-center justify-center transition-all text-black/60"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/pixelstoweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black/[0.06] hover:bg-emerald-500 hover:text-white rounded-xl flex items-center justify-center transition-all text-black/60"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="rounded-[32px] bg-[#FAFAFA] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-black/10 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-black/80 mb-2">Stay in the loop</h3>
            <p className="text-black/50">Get accessibility tips and industry insights delivered to your inbox.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 bg-black/[0.03] rounded-full text-black placeholder:text-black/30 border-2 border-transparent focus:border-emerald-500/30 focus:outline-none min-w-[280px]"
            />
            <button className="px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div>
                <span 
                  className="font-bold whitespace-nowrap"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 700
                  }}
                >
                  <span style={{ color: '#0A2647' }}>Pixelto</span>
                  <span style={{ color: '#14919B' }}>web</span>
                </span>
                <div className="text-black/40 text-xs uppercase tracking-wider">Transforming Ideas Into Digital Experiences</div>
              </div>
            </div>
            <div className="text-black/40 text-sm">
              © {new Date().getFullYear()} PixelsToWeb. All rights reserved.
            </div>
            <div className="flex gap-6 text-black/40 text-sm">
              <Link to="/privacy" className="hover:text-black transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-black transition-colors">Terms</Link>
              <Link to="/accessibility" className="hover:text-black transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
