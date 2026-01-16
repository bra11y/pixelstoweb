import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Code, Palette, ShoppingCart, Search, Megaphone, Smartphone } from 'lucide-react';

const PremiumServices = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Web',
      subtitle: 'Development',
      items: [
        'Website Design',
        'Website Hosting & Maintenance',
        'SEO Services',
        'Email & Text Marketing'
      ],
      link: '/services',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: Palette,
      title: 'Creative',
      subtitle: 'Design',
      items: [
        'Photography',
        'Videography',
        'Graphic Design',
        'Branding'
      ],
      link: '/services',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: Megaphone,
      title: 'Digital',
      subtitle: 'Marketing',
      items: [
        'Social Media Marketing & Management',
        'Creative & Campaign Strategy',
        'Market Research',
        'Influencer Marketing'
      ],
      link: '/services',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}
      />

      <div className="container-tight mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            OUR SERVICES
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <h4 className="text-2xl font-bold text-white/70 mb-6">
                  {service.subtitle}
                </h4>

                {/* Divider */}
                <div className="w-full h-px bg-white/20 mb-6"></div>

                {/* Service items */}
                <ul className="space-y-3 mb-8">
                  {service.items.map((item, index) => (
                    <li key={index} className="text-white/80 text-lg">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Arrow button */}
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 group/btn"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <ArrowDown className="w-5 h-5 text-white transform rotate-[-90deg] group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
              </div>

              {/* Bottom divider line */}
              <div className="w-full h-px bg-white/20 mt-8"></div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WordPress/Shopify */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">E-Commerce Solutions</h3>
                <p className="text-white/70 text-lg mb-4">
                  WordPress & Shopify stores that sell while you sleep. Professional e-commerce platforms built for Nigerian businesses.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-green-400 font-semibold hover:gap-3 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowDown className="w-4 h-4 transform rotate-[-90deg]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile-First */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Mobile-First Design</h3>
                <p className="text-white/70 text-lg mb-4">
                  Because 80% of Nigerians browse on mobile. We ensure your website looks perfect on every device.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowDown className="w-4 h-4 transform rotate-[-90deg]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
