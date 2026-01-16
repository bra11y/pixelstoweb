import React from 'react';
import { Quote, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsBento = () => {
  const testimonials = [
    {
      quote: "PixelsToWeb created an amazing website for our Toronto-based business. Professional, fast, and exactly what we needed.",
      author: "Sarah Chen",
      role: "VP Engineering, TechCorp",
      rating: 5,
      image: "/lovable-uploads/hearing-aid-person-face.jpg"
    },
    {
      quote: "The best accessibility partner we've ever worked with. Professional, thorough, and they actually understand the business impact.",
      author: "Michael Torres",
      role: "CTO, HealthFirst",
      rating: 5
    },
    {
      quote: "They identified issues our previous auditors missed. Our customer complaints about accessibility dropped to zero.",
      author: "Emma Williams",
      role: "Product Lead, FinanceHub",
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects' },
    { number: '98%', label: 'Retention' },
    { number: '50+', label: 'Countries' }
  ];

  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/90 leading-tight mb-6">
            Trusted by
            <br />
            <span className="text-black/30">Industry Leaders</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured Testimonial */}
          <div className="md:col-span-2 rounded-[32px] bg-black p-8 md:p-10 min-h-[360px] relative overflow-hidden flex flex-col justify-between">
            <Quote className="absolute top-8 right-8 w-20 h-20 text-white/5" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
              "{testimonials[0].quote}"
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                <img 
                  src={testimonials[0].image} 
                  alt={testimonials[0].author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white font-bold">{testimonials[0].author}</div>
                <div className="text-white/50 text-sm">{testimonials[0].role}</div>
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="flex flex-col gap-4">
            <div className="rounded-[32px] bg-white p-8 flex-1 flex flex-col justify-between">
              <div className="text-5xl font-bold text-black/90 tracking-tighter">{stats[0].number}</div>
              <div className="text-black/40 text-sm uppercase tracking-wider">{stats[0].label}</div>
            </div>
            <div className="rounded-[32px] bg-black/[0.03] p-8 flex-1 flex flex-col justify-between">
              <div className="text-5xl font-bold text-black/90 tracking-tighter">{stats[1].number}</div>
              <div className="text-black/40 text-sm uppercase tracking-wider">{stats[1].label}</div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-[32px] bg-white p-8 min-h-[280px] flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg font-medium text-black/80 leading-relaxed">
                "{testimonials[1].quote}"
              </blockquote>
            </div>
            <div className="mt-6">
              <div className="text-black/80 font-bold text-sm">{testimonials[1].author}</div>
              <div className="text-black/40 text-sm">{testimonials[1].role}</div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-[32px] bg-black/[0.03] p-8 min-h-[280px] flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg font-medium text-black/80 leading-relaxed">
                "{testimonials[2].quote}"
              </blockquote>
            </div>
            <div className="mt-6">
              <div className="text-black/80 font-bold text-sm">{testimonials[2].author}</div>
              <div className="text-black/40 text-sm">{testimonials[2].role}</div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="rounded-[32px] bg-white p-8 min-h-[280px]">
            <h3 className="text-xl font-bold text-black/80 mb-6">Why businesses choose PixelsToWeb</h3>
            <div className="space-y-4">
              {[
                'Custom website development',
                'WordPress & Shopify expertise',
                'Responsive design for all devices',
                'Professional design & development',
                'Canadian web design agency'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-black/40 shrink-0 mt-0.5" />
                  <span className="text-black/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-4 rounded-[32px] bg-black p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to build your website?
            </h3>
            <p className="text-white/50">
              Join businesses across Canada that trust PixelsToWeb for web design.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="shrink-0 inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
          >
            Get Free Audit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBento;
