import React from 'react';
import { ArrowRight, Code2, Palette, ShoppingCart, Search, FileCheck, Accessibility, Monitor, TrendingUp, Smartphone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import SEO from '../components/SEO';
import { usePageTitle, PAGE_TITLES } from '../hooks/usePageTitle';

const ServicesPage = () => {
  usePageTitle(PAGE_TITLES.SERVICES);

  const coreServices = [
    {
      id: 'accessibility-audits',
      icon: Accessibility,
      title: 'AI Enhanced Accessibility Audits',
      description: 'Comprehensive WCAG 2.2 audits combining intelligent automation with expert human review for thorough, efficient compliance analysis.',
      features: [
        'AI powered scanning with human expert verification',
        'Detailed technical reports with prioritized fixes',
        'Custom remediation roadmap for your specific needs',
        'Ongoing monitoring and support options',
        'WCAG 2.2 AA and AAA compliance paths'
      ],
      tags: ['WCAG 2.2', 'AI Powered', 'Custom Reports']
    },
    {
      id: 'web-development',
      icon: Code2,
      title: 'Custom Accessible Development',
      description: 'Modern, accessible websites built with React, Next.js, and semantic HTML. Every project tailored to your unique needs.',
      features: [
        'React, TypeScript, and modern JavaScript',
        'Semantic HTML and proper ARIA implementation',
        'Responsive design and mobile optimization',
        'Performance optimization and SEO friendly code',
        'Cross browser compatibility and testing'
      ],
      tags: ['React', 'Next.js', 'WordPress']
    },
    {
      id: 'pdf-remediation',
      icon: FileCheck,
      title: 'PDF Remediation',
      description: 'Transform inaccessible PDFs into fully compliant documents that work with screen readers.',
      features: [
        'Full PDF/UA and WCAG 2.1 compliance',
        'Proper document structure and reading order',
        'Alternative text for images and graphics',
        'Accessible forms and interactive elements',
        'Quality assurance with screen reader testing'
      ],
      tags: ['PDF/UA', 'Document Accessibility']
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'Inclusive UI/UX Design',
      description: 'User-centered design with accessibility built in from the start, creating inclusive experiences for all users.',
      features: [
        'Accessible color palettes and contrast ratios',
        'Inclusive design patterns and interactions',
        'User research and accessibility testing',
        'Wireframing and prototyping',
        'Design system creation and documentation'
      ],
      tags: ['UI/UX', 'Design Systems']
    }
  ];

  const additionalServices = [
    { title: 'E-Commerce Accessibility', icon: ShoppingCart, description: 'Shopify & WooCommerce stores everyone can use' },
    { title: 'Mobile Accessibility', icon: Smartphone, description: 'Native and responsive mobile experiences' },
    { title: 'SEO Optimization', icon: TrendingUp, description: 'Accessible and search-optimized websites' },
    { title: 'Ongoing Support', icon: Monitor, description: 'Continuous accessibility monitoring and maintenance' }
  ];

  return (
    <>
      <SEO
        title="Web Design Services | Custom Website Development | PixelsToWeb"
        description="Comprehensive web design services including custom website development, WordPress development, Shopify development, and responsive design. Canadian expertise, exceptional results."
        keywords="web design services, custom website development, WordPress development, Shopify development, responsive design"
        canonical="https://pixelstoweb.com/services"
      />
      <Header />
      <main id="main-content" className="bg-[#F7F7F7]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Our Services
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black/90 leading-[0.95] tracking-tight mb-8">
                Premium Accessibility
                <br />
                <span className="text-black/30">Personalized Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto mb-10">
                We combine AI powered auditing with custom management solutions to deliver accessibility that fits your unique needs. Premium service, expert guidance, measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-all"
                >
                  Get Free Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-3 bg-black/[0.03] text-black px-8 py-4 rounded-full font-medium hover:bg-black/[0.06] transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              {[
                { number: '100%', label: 'Dedication' },
                { number: 'WCAG 2.2', label: 'Compliant' },
                { number: 'AI+Human', label: 'Approach' },
                { number: 'Premium', label: 'Service' }
              ].map((stat, i) => (
                <div key={i} className="rounded-[32px] bg-white p-6 md:p-8 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-black/90 tracking-tighter mb-2">{stat.number}</div>
                  <div className="text-black/40 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Core Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black/90 mb-6">
                What We Specialize In
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`rounded-[32px] p-8 md:p-10 min-h-[400px] flex flex-col ${index === 0 ? 'bg-black text-white' : 'bg-[#F7F7F7]'
                      }`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${index === 0 ? 'bg-white/10' : 'bg-black/[0.06]'
                        }`}>
                        <Icon className={`w-7 h-7 ${index === 0 ? 'text-white' : 'text-black/60'}`} />
                      </div>
                      <span className={`text-sm font-medium ${index === 0 ? 'text-white/30' : 'text-black/20'}`}>
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${index === 0 ? 'text-white' : 'text-black/80'
                      }`}>
                      {service.title}
                    </h3>
                    <p className={`text-lg mb-6 ${index === 0 ? 'text-white/60' : 'text-black/50'}`}>
                      {service.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-sm ${index === 0 ? 'bg-white/10 text-white/70' : 'bg-black/[0.06] text-black/50'
                              }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-1 ${index === 0 ? 'text-white/40' : 'text-black/30'
                              }`} />
                            <span className={`text-sm ${index === 0 ? 'text-white/70' : 'text-black/60'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Additional Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black/90 mb-6">
                Beyond the Basics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="rounded-[32px] bg-white p-8 min-h-[220px] flex flex-col justify-between hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-black/60" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black/80 mb-2">{service.title}</h3>
                      <p className="text-black/50 text-sm">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                  Our Process
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black/90 mb-6">
                  Accessibility-First
                  <br />
                  <span className="text-black/30">Development</span>
                </h2>
                <p className="text-lg text-black/50 mb-8">
                  We build accessibility in from the ground up, never as an afterthought. Our process ensures every project meets global standards while delivering exceptional user experiences.
                </p>

                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Discovery & Audit', description: 'Understanding your users, goals, and current accessibility state' },
                    { step: '02', title: 'Strategy & Planning', description: 'Creating prioritized roadmaps with clear milestones' },
                    { step: '03', title: 'Design & Development', description: 'Building inclusive experiences with semantic code' },
                    { step: '04', title: 'Testing & Validation', description: 'Comprehensive testing with assistive technologies' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-black/[0.03] flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-black/40">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-black/80 mb-1">{item.title}</h4>
                        <p className="text-black/50 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] bg-black p-10">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose PixelsToWeb?</h3>
                <div className="space-y-4 mb-8">
                  {[
                    'WCAG 2.2 and global compliance expertise',
                    'Results-focused with measurable KPIs',
                    'Transparent, fixed-price projects',
                    'Ongoing support and monitoring',
                    '24-hour response time guarantee'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white/40 shrink-0" />
                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all w-full justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="rounded-[40px] bg-black p-10 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                Get a free accessibility audit and discover how we can help make your digital presence work for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
                >
                  Get Free Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
                >
                  View Our Work
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

export default ServicesPage;
