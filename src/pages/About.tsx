import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Globe, Zap, Target, CheckCircle2, Linkedin, Mail } from 'lucide-react';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import SEO from '../components/SEO';
import { usePageTitle, PAGE_TITLES } from '../hooks/usePageTitle';
import bryanProfile from '@/assets/bryan-profile.png';

const About = () => {
  usePageTitle(PAGE_TITLES.ABOUT);

  const stats = [
    { number: '100%', label: 'Dedication' },
    { number: 'WCAG 2.2', label: 'Compliant' },
    { number: 'AI+Human', label: 'Approach' },
    { number: 'Premium', label: 'Service' }
  ];

  const capabilities = [
    {
      icon: Shield,
      title: 'WCAG 2.2 Compliance',
      description: 'Comprehensive accessibility audits combining AI powered scanning with expert human review for thorough compliance.'
    },
    {
      icon: Globe,
      title: 'Custom Solutions',
      description: 'Every business is unique. We create tailored accessibility strategies that fit your specific needs and goals.'
    },
    {
      icon: Zap,
      title: 'AI Enhanced Efficiency',
      description: 'Leverage cutting edge AI technology to accelerate audits and deliver faster, more comprehensive results.'
    },
    {
      icon: Target,
      title: 'Personal Attention',
      description: 'Work directly with accessibility experts who care about your success. Premium service, dedicated support.'
    }
  ];

  const values = [
    { title: 'Accessibility First', description: 'Not a feature. Not an add-on. The foundation of everything.' },
    { title: 'Radical Transparency', description: 'Clear communication, honest timelines, no surprises.' },
    { title: 'Measurable Impact', description: 'We prove the business value of inclusive design.' }
  ];

  return (
    <>
      <SEO
        title="About PixelsToWeb | Canadian Web Design Agency"
        description="PixelsToWeb is a Canadian web design agency specializing in custom website development. We create beautiful, functional websites for businesses across Canada."
        keywords="Canadian web design agency, website development Canada, custom websites, web design Toronto, web development agency"
        canonical="https://pixelstoweb.com/about"
      />
      <Header />
      <main id="main-content" className="bg-[#F7F7F7]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                About PixelsToWeb
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black/90 leading-[0.95] tracking-tight mb-8">
                Accessibility Expertise
                <br />
                <span className="text-black/30">Meets Personal Commitment</span>
              </h1>
              <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
                AI powered accessibility solutions with custom management and premium personal service. We transform digital experiences to welcome every user.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="rounded-[32px] bg-white p-6 md:p-8 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-black/90 tracking-tighter mb-2">{stat.number}</div>
                  <div className="text-black/40 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                  Our Mission
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black/90 mb-6">
                  Digital Inclusion
                  <br />
                  <span className="text-black/30">Is Our Mission</span>
                </h2>
                <p className="text-lg text-black/50 mb-6 leading-relaxed">
                  Over 1 billion people worldwide live with disabilities. When websites exclude these users, businesses lose customers and fail their responsibility to serve all people equally.
                </p>
                <p className="text-lg text-black/50 mb-8 leading-relaxed">
                  PixelsToWeb is a Canadian web design agency that creates beautiful, functional websites for businesses across Canada. We combine modern design with expert development to deliver exceptional results.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-all"
                  >
                    Our Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Image Card */}
              <div className="relative rounded-[32px] overflow-hidden h-[500px]">
                <img
                  src="/images/person-computer.jpg"
                  alt="Team working on accessible design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-4xl font-bold text-white mb-2">1B+</div>
                  <div className="text-white/70">People with disabilities worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black/90 mb-6">
                What Sets Us Apart
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div key={i} className="rounded-[32px] bg-white p-8 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-black/60" />
                    </div>
                    <h3 className="text-xl font-bold text-black/80 mb-3">{cap.title}</h3>
                    <p className="text-black/50 leading-relaxed">{cap.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                  Leadership
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black/90 mb-6">
                  Built by Practitioners
                  <br />
                  <span className="text-black/30">Not Theorists</span>
                </h2>
                <p className="text-lg text-black/50 mb-8 leading-relaxed">
                  Our team combines certified accessibility professionals, experienced developers, and designers who understand accessibility as a craft to master.
                </p>
                <div className="space-y-4">
                  {[
                    'CPACC and IAAP certified specialists',
                    'Senior developers with 10+ years experience',
                    'Designers trained in universal design principles',
                    'QA engineers specialized in assistive technology'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black/30 shrink-0 mt-1" />
                      <span className="text-black/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founder Card */}
              <div className="rounded-[32px] bg-black p-10">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white/10">
                  <img
                    src={bryanProfile}
                    alt="Bryan Onyen, Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Henry</h3>
                <p className="text-white/50 font-medium mb-4">Founder & Lead Developer</p>
                <p className="text-white/60 mb-6 leading-relaxed">
                  Henry founded PixelsToWeb with a vision to create beautiful, functional websites for Canadian businesses. Combining technical expertise with modern design principles, he works closely with each client to deliver exceptional results.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/Henrydotdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    View on GitHub
                  </a>
                  <a
                    href="mailto:hello@pixelstoweb.com"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    hello@pixelstoweb.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1000px] mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black/90">
                Accessibility Is a Circle
              </h2>
            </div>

            <div className="rounded-[32px] bg-white p-8 md:p-12 border-l-4 border-black">
              <p className="text-xl text-black/70 leading-relaxed mb-6">
                Accessibility is not a checkbox. It is an ongoing commitment to inclusion that requires expertise, the right tools, and genuine care.
              </p>
              <p className="text-xl text-black/70 leading-relaxed mb-6">
                <strong className="text-black">We combine AI powered efficiency with human insight</strong> to deliver solutions that go beyond compliance. Every project benefits from intelligent automation and expert attention.
              </p>
              <p className="text-xl text-black/70 leading-relaxed">
                This means we never stop asking: "Who are we still leaving out?" It is about commitment to perpetual improvement and genuine inclusion.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black/90">
                What We Stand For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((value, i) => (
                <div key={i} className="rounded-[32px] bg-[#F7F7F7] p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black/80 mb-3">{value.title}</h3>
                  <p className="text-black/50">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-24 bg-black">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-white/40 uppercase tracking-widest mb-4">
                Global Reach
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Serving Clients Worldwide
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                From Lagos to London, San Francisco to Singapore. We help organizations across the globe.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {['North America', 'Europe', 'Africa', 'Asia Pacific'].map((region, i) => (
                <div key={i} className="rounded-[32px] bg-white/5 p-6 text-center border border-white/10">
                  <Globe className="w-8 h-8 text-white/40 mx-auto mb-4" />
                  <div className="text-white font-medium">{region}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="rounded-[40px] bg-black p-10 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Something Inclusive?
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                Let us show you what accessibility-first design can do for your business and your users.
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
                  to="/services"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
                >
                  Explore Services
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

export default About;
