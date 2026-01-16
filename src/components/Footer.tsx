import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { trackEvent } from './ConversionTracking';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-black">
      <div className="container-tight mx-auto py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div>
                <span 
                  className="font-bold text-xl whitespace-nowrap"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700
                  }}
                >
                  <span style={{ color: '#FFFFFF' }}>Pixelto</span>
                  <span style={{ color: '#14919B' }}>web</span>
                </span>
                <div className="text-xs text-white/80 uppercase tracking-wide">Transforming Ideas Into Digital Experiences</div>
              </div>
            </Link>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Canadian web design agency specializing in custom website development. We create beautiful, functional websites for businesses across Canada.
            </p>
            <div className="border-2 border-white/20 p-4 mb-6">
              <div className="text-sm font-bold text-white mb-2">CANADIAN WEB DESIGN AGENCY</div>
              <div className="text-white/80 text-sm">Serving businesses across Canada</div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/pixelstoweb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 group"
                aria-label="Follow PixelsToWeb on LinkedIn"
              >
                <Linkedin size={20} className="text-white group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://instagram.com/pixelstoweb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 group"
                aria-label="Follow PixelsToWeb on Instagram @pixelstoweb"
              >
                <Instagram size={20} className="text-white group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com/pixelstoweb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 group"
                aria-label="Follow PixelsToWeb on Twitter @pixelstoweb"
              >
                <Twitter size={20} className="text-white group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  Web Development <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  Brand Design <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  WordPress Development <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  Shopify Development <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  Digital Marketing <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors flex items-center">
                  About Us <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/80 hover:text-white transition-colors flex items-center">
                  Portfolio <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors flex items-center">
                  Blog <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-white/80 hover:text-white transition-colors flex items-center">
                  Testimonials <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-white/80 hover:text-white transition-colors flex items-center">
                  Sitemap <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors flex items-center">
                  Contact <ArrowRight size={14} className="ml-2" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0 text-white/60" />
                <div>
                  <p className="text-white/60 text-sm mb-1">Email</p>
                  <a
                    href="mailto:hello@pixelstoweb.com"
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={() => trackEvent('email_click', {
                      category: 'Contact',
                      label: 'Footer Email Click',
                      lead_source: 'Footer',
                      value: 5
                    })}
                  >
                    hello@pixelstoweb.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-white/60" />
                <div>
                  <p className="text-white/60 text-sm mb-1">Office</p>
                  <address className="text-white/80 not-italic">
                    Toronto, ON<br />
                    Canada
                  </address>
                </div>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h4 className="text-white font-bold text-sm mb-2">BUSINESS HOURS</h4>
              <div className="text-white/80 text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekends:</span>
                  <span>By Appointment</span>
                </div>
                <div className="text-xs text-white/60 mt-2">Eastern Time (ET)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t-2 border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="text-white/80">
              <p className="mb-2">
                &copy; {year} PixelsToWeb. All rights reserved.
              </p>
              <p className="text-sm text-white/60">
                Canadian web design agency specializing in custom website development
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-white/80 hover:text-white transition-colors text-sm">
                Accessibility Statement
              </Link>
              <Link to="/sitemap" className="text-white/80 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Schema.org Microdata for Local Business */}
          <div className="sr-only" itemScope itemType="https://schema.org/LocalBusiness">
            <span itemProp="name">PixelsToWeb</span>
            <span itemProp="description">Canadian web design agency specializing in custom website development</span>
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Toronto</span>
              <span itemProp="addressRegion">ON</span>
              <span itemProp="addressCountry">Canada</span>
            </div>
            <span itemProp="email">hello@pixelstoweb.com</span>
            <span itemProp="url">https://pixelstoweb.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
