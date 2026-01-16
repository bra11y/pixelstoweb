import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import SectionDivider from '../components/SectionDivider';
import { usePageTitle, PAGE_TITLES } from '../hooks/usePageTitle';

const NotFound = () => {
  usePageTitle(PAGE_TITLES.NOT_FOUND);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900">
          <div className="container-tight mx-auto">
            <div className="text-center max-w-4xl mx-auto animate-fade-up">
              <span className="inline-block px-4 py-2 bg-white text-primary rounded-full text-sm font-bold mb-6 font-atkinson">
                404 Error
              </span>
              <h1 className="display-text text-white mb-8 font-cooper">
                PAGE NOT<br />
                <span className="text-primary">FOUND</span>
              </h1>
              <p className="text-large text-white mb-8 font-atkinson">
                We're sorry, but the page you're looking for doesn't exist or has been moved. 
                Let's help you find your way back to creating accessible digital experiences.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider title="Find Your Way" />

        {/* Navigation Help Section */}
        <section className="section-container bg-white">
          <div className="container-tight mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <span className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
                Where Would You Like to Go?
              </span>
              <h2 className="h2 text-navy mb-4">Let's Get You Back on Track</h2>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
                Here are some helpful links to get you back to exploring our accessibility services and resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Link 
                to="/" 
                className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group text-center animate-fade-up"
              >
                <div className="text-teal mb-4 flex justify-center">
                  <Home size={32} />
                </div>
                <h3 className="font-bold text-navy mb-3 group-hover:text-teal transition-colors">Home</h3>
                <p className="text-neutral-700 text-sm">
                  Start fresh from our homepage and explore all our services
                </p>
              </Link>

              <Link 
                to="/services" 
                className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group text-center animate-fade-up"
                style={{animationDelay: '100ms'}}
              >
                <div className="text-orange mb-4 flex justify-center">
                  <Search size={32} />
                </div>
                <h3 className="font-bold text-navy mb-3 group-hover:text-orange transition-colors">Services</h3>
                <p className="text-neutral-700 text-sm">
                  Discover our accessibility auditing and development services
                </p>
              </Link>

              <Link 
                to="/portfolio" 
                className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group text-center animate-fade-up"
                style={{animationDelay: '200ms'}}
              >
                <div className="text-teal mb-4 flex justify-center">
                  <Search size={32} />
                </div>
                <h3 className="font-bold text-navy mb-3 group-hover:text-teal transition-colors">Portfolio</h3>
                <p className="text-neutral-700 text-sm">
                  See our project ideas and ongoing accessibility work
                </p>
              </Link>

              <Link 
                to="/contact" 
                className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group text-center animate-fade-up"
                style={{animationDelay: '300ms'}}
              >
                <div className="text-orange mb-4 flex justify-center">
                  <Mail size={32} />
                </div>
                <h3 className="font-bold text-navy mb-3 group-hover:text-orange transition-colors">Contact</h3>
                <p className="text-neutral-700 text-sm">
                  Get in touch to discuss your accessibility needs
                </p>
              </Link>
            </div>

            <div className="text-center">
              <Link 
                to="/" 
                className="inline-flex items-center text-teal hover:text-teal-dark font-bold transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider title="Need Help?" />

        {/* Help Section */}
        <section className="section-container bg-neutral-50">
          <div className="container-tight mx-auto">
            <div className="max-w-2xl mx-auto text-center animate-fade-up">
              <span className="inline-block px-4 py-1 bg-orange/10 text-orange rounded-full text-sm font-medium mb-4">
                Still Lost?
              </span>
              <h2 className="h2 text-navy mb-6">We're Here to Help</h2>
              <p className="text-neutral-700 mb-8">
                If you can't find what you're looking for, don't hesitate to reach out. 
                We're always happy to help you navigate our site or answer any questions about digital accessibility.
              </p>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="font-bold text-navy mb-4">Common Searches:</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link to="/services" className="px-4 py-2 bg-teal/10 text-teal rounded-full hover:bg-teal hover:text-white transition-colors text-sm">
                    Accessibility Auditing
                  </Link>
                  <Link to="/services" className="px-4 py-2 bg-orange/10 text-orange rounded-full hover:bg-orange hover:text-white transition-colors text-sm">
                    Web Development
                  </Link>
                  <Link to="/portfolio" className="px-4 py-2 bg-teal/10 text-teal rounded-full hover:bg-teal hover:text-white transition-colors text-sm">
                    Our Projects
                  </Link>
                  <Link to="/about" className="px-4 py-2 bg-orange/10 text-orange rounded-full hover:bg-orange hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                  <Link to="/blog" className="px-4 py-2 bg-teal/10 text-teal rounded-full hover:bg-teal hover:text-white transition-colors text-sm">
                    Blog
            </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 rounded-l-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 rounded-tr-full"></div>
          <div className="container-tight mx-auto text-center relative z-10 animate-fade-up">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                Ready to Get Started?
              </span>
              <h2 className="h2 mb-6 text-white">Let's Create Something Accessible Together</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Don't let a 404 stop your accessibility journey. We're here to help you create 
                digital experiences that work for everyone.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="button-secondary shadow-lg shadow-orange/20">
                  Get in Touch
                </Link>
                <Link to="/" className="px-6 py-3 rounded-lg border-2 border-white text-white font-bold transition-colors duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy inline-flex items-center justify-center gap-2">
                  <Home size={18} />
                  Go Home
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

export default NotFound;
