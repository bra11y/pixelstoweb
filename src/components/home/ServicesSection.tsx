import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, FileCheck, Search, Shield, ArrowRight, Target, Monitor, FileText, CheckCircle, Eye } from 'lucide-react';

const ServicesSection = () => {
  // Function to get service background images
  const getServiceImage = (index: number) => {
    const images = [
      '/images/person-computer.jpg',
      '/images/operating-computer-anime.jpg',
      '/images/dark-shades-using-computer.jpg',
      '/images/support-arm.jpg'
    ];
    return images[index] || images[0];
  };

  const services = [
    {
      title: 'Design Management',
      description: 'Expert management of your design projects from concept to completion. We coordinate teams, maintain design systems, and ensure accessibility is built in from the start.',
      icon: <Palette size={32} className="text-primary" />,
      link: '/services',
      approach: 'End to End Oversight',
      category: 'DESIGN MANAGEMENT'
    },
    {
      title: 'Design Auditing',
      description: 'Comprehensive audits of existing designs to identify accessibility gaps, usability issues, and opportunities for improvement. Detailed reports with prioritized recommendations.',
      icon: <Search size={32} className="text-primary" />,
      link: '/services',
      approach: 'AI Enhanced Analysis',
      category: 'DESIGN AUDITING'
    },
    {
      title: 'Document Quality Assurance',
      description: 'Thorough QA of documents, PDFs, and digital content to ensure they meet accessibility standards and work seamlessly with assistive technologies.',
      icon: <FileCheck size={32} className="text-primary" />,
      link: '/services',
      approach: 'Compliance Focused',
      category: 'DOCUMENT QA'
    },
    {
      title: 'Accessibility Testing',
      description: 'Rigorous testing with screen readers, keyboard navigation, and assistive technologies. We identify barriers and provide clear remediation guidance.',
      icon: <Shield size={32} className="text-primary" />,
      link: '/services',
      approach: 'Manual + Automated',
      category: 'ACCESSIBILITY TESTING'
    }
  ];

  const additionalServices = [
    {
      title: 'WCAG Compliance Reviews',
      description: 'Detailed analysis against WCAG 2.2 guidelines with actionable improvement roadmaps.',
      icon: <FileText size={24} className="text-teal" />
    },
    {
      title: 'Assistive Tech Compatibility',
      description: 'Testing across screen readers, voice control, and other assistive technologies.',
      icon: <Monitor size={24} className="text-teal" />
    },
    {
      title: 'Remediation Support',
      description: 'Hands on guidance to fix accessibility issues and implement best practices.',
      icon: <CheckCircle size={24} className="text-teal" />
    },
    {
      title: 'Ongoing Monitoring',
      description: 'Continuous accessibility monitoring to maintain compliance as your content evolves.',
      icon: <Eye size={24} className="text-teal" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden scroll-smooth">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-teal/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange/5 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            COMPREHENSIVE ACCESSIBILITY SERVICES
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From design management to accessibility testing, we provide end to end solutions that ensure your digital products work for everyone.
          </p>
        </div>

        {/* Main Services Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-2 border-black bg-white p-8 hover:shadow-xl hover:border-primary transition-all duration-200 group h-full rounded-2xl"
            >
              <div className="text-xs font-bold text-primary mb-4 tracking-widest uppercase bg-primary/5 px-3 py-1 rounded-full inline-block">
                {service.category}
              </div>
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-medium text-navy bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg p-4 border-l-4 border-teal">
                <Target size={16} className="mr-3 text-teal flex-shrink-0" />
                <span className="font-semibold">{service.approach}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent w-full max-w-md"></div>
          <div className="px-6 text-neutral-400 text-sm font-medium">Plus</div>
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent w-full max-w-md"></div>
        </div>

        {/* Additional Services Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Complete Digital Solutions
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Comprehensive digital services with accessibility at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="border-2 border-black bg-white p-6 hover:shadow-lg hover:border-teal transition-all duration-200 group rounded-xl"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h4 className="font-bold text-navy mb-3 group-hover:text-teal transition-colors duration-200">
                  {service.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Building Section */}
        <div className="bg-gradient-to-br from-teal via-teal-dark to-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 rounded-l-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="text-xs font-bold text-white/80 mb-4 tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full inline-block">
                WHY CHOOSE PIXELSTOWEB
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-cooper">
                AI Powered. Human Centered.
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We combine cutting edge AI technology with expert human oversight to deliver accessibility solutions that are thorough, efficient, and tailored to your needs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center group">
                  <CheckCircle size={20} className="mr-3 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/90">AI enhanced accessibility auditing</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle size={20} className="mr-3 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/90">Custom solutions for every project</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle size={20} className="mr-3 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/90">Personal attention and premium service</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle size={20} className="mr-3 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/90">Expert guidance at every step</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="px-6 py-3 bg-white text-teal font-bold rounded-lg hover:bg-neutral-100 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  View All Services
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-teal hover:scale-105 transition-all duration-300 font-medium rounded-lg inline-flex items-center justify-center"
                >
                  Learn About Our Journey
                </Link>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-300">
              <h4 className="text-xl font-bold text-white mb-6">Our Commitment</h4>
              <div className="space-y-6">
                <div className="border-l-4 border-white/40 pl-6 hover:border-white/60 transition-colors duration-300">
                  <h5 className="font-semibold text-white mb-2">Free Consultation</h5>
                  <p className="text-white/90 text-sm leading-relaxed">
                    We start every potential partnership with an honest conversation about your needs and our capabilities.
                  </p>
                </div>
                <div className="border-l-4 border-white/40 pl-6 hover:border-white/60 transition-colors duration-300">
                  <h5 className="font-semibold text-white mb-2">Proven Process</h5>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Our methodologies are tested on our own projects before we bring them to clients.
                  </p>
                </div>
                <div className="border-l-4 border-white/40 pl-6 hover:border-white/60 transition-colors duration-300">
                  <h5 className="font-semibold text-white mb-2">Growth Partnership</h5>
                  <p className="text-white/90 text-sm leading-relaxed">
                    As we grow, our early clients benefit from competitive pricing and dedicated attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
