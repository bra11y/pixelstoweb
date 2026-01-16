import React from 'react';
import { Star, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import SEO from '../components/SEO';
import { usePageTitle, PAGE_TITLES } from '../hooks/usePageTitle';

const TestimonialsPage = () => {
  usePageTitle(PAGE_TITLES.TESTIMONIALS);

  const testimonials = [
    {
      quote: "PixelsToWeb created an amazing website for our Toronto-based business. Professional, fast, and exactly what we needed.",
      author: "Sarah Johnson",
      role: "Director of Digital, Global Health Initiative",
      category: "Healthcare",
      rating: 5
    },
    {
      quote: "The PDF remediation service is fantastic. Our organization needed to make hundreds of educational documents accessible, and they delivered perfectly.",
      author: "Michael Chang",
      role: "Compliance Officer, Educational Resources Inc.",
      category: "Education",
      rating: 5
    },
    {
      quote: "Their team doesn't just fix issues; they educated our developers on accessibility best practices, creating lasting change in our organization.",
      author: "Aisha Washington",
      role: "Product Manager, Tech Innovations",
      category: "Technology",
      rating: 5
    },
    {
      quote: "What impressed me most was how they balanced technical compliance with user experience. Outstanding work!",
      author: "James Peterson",
      role: "Marketing Director, Retail Solutions Co.",
      category: "Retail",
      rating: 5
    },
    {
      quote: "PixelsToWeb helped us create a beautiful, functional website that perfectly represents our brand. The team was professional and responsive throughout the project.",
      author: "Elena Rodriguez",
      role: "Digital Services Lead, City Government",
      category: "Government",
      rating: 5
    },
    {
      quote: "Working with PixelsToWeb was a great experience. They delivered a modern, responsive website that exceeded our expectations.",
      author: "David Chen",
      role: "CTO, Community Connect Network",
      category: "Non-profit",
      rating: 5
    }
  ];

  const stats = [
    { number: '100%', label: 'Dedication' },
    { number: 'WCAG 2.2', label: 'Compliant' },
    { number: 'AI+Human', label: 'Approach' },
    { number: 'Premium', label: 'Service' }
  ];

  return (
    <>
      <SEO
        title="Client Testimonials | PixelsToWeb Success Stories"
        description="See what businesses across Canada say about PixelsToWeb's web design services. Real results from real clients."
        keywords="web design testimonials, website development reviews, client success stories, Canadian web design agency reviews"
        canonical="https://pixelstoweb.com/testimonials"
      />
      <Header />
      <main id="main-content" className="bg-[#F7F7F7]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Testimonials
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black/90 leading-[0.95] tracking-tight mb-8">
                What Our
                <br />
                <span className="text-black/30">Clients Say</span>
              </h1>
              <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
                Don't just take our word for it. See what businesses across Canada say about working with PixelsToWeb.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              {stats.map((stat, i) => (
                <div key={i} className="rounded-[32px] bg-white p-6 md:p-8 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-black/90 tracking-tighter mb-2">{stat.number}</div>
                  <div className="text-black/40 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="pb-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="rounded-[40px] bg-black p-10 md:p-16 relative overflow-hidden">
              <Quote className="absolute top-10 right-10 w-24 h-24 text-white/5" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-4xl font-medium text-white leading-relaxed mb-10 max-w-4xl">
                  "PixelsToWeb created a beautiful, modern website for our business. The team was professional, responsive, and delivered exactly what we needed."
                </blockquote>
                <div>
                  <div className="text-white font-bold text-lg">Maria Chen</div>
                  <div className="text-white/50">Executive Director, Tech for All Foundation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                Success Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black/90">
                More Reviews
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-[32px] bg-[#F7F7F7] p-8 flex flex-col justify-between min-h-[320px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="px-3 py-1 bg-black/[0.06] rounded-full text-black/40 text-xs font-bold uppercase">
                        {testimonial.category}
                      </span>
                    </div>
                    <blockquote className="text-lg text-black/70 leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div>
                    <div className="text-black/80 font-bold">{testimonial.author}</div>
                    <div className="text-black/40 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                  Why PixelsToWeb
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black/90 mb-6">
                  Why Clients
                  <br />
                  <span className="text-black/30">Choose Us</span>
                </h2>
                <p className="text-lg text-black/50 mb-8">
                  We don't just deliver compliance. We create lasting change in how organizations approach accessibility.
                </p>
                <div className="space-y-4">
                  {[
                    'WCAG 2.2 and global compliance expertise',
                    'Education and training alongside remediation',
                    'Transparent, fixed-price projects',
                    'Ongoing support and monitoring',
                    'Real, measurable results'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black/30 shrink-0 mt-1" />
                      <span className="text-black/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] bg-white p-10">
                <h3 className="text-2xl font-bold text-black/80 mb-6">Ready to join them?</h3>
                <p className="text-black/50 mb-8">
                  See what accessibility-first design can do for your organization. Get started with a free audit.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-all w-full justify-center"
                >
                  Get Free Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="rounded-[40px] bg-black p-10 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Satisfied Clients
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                Ready to make your digital experiences accessible to everyone? Let's discuss how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
                >
                  Get in Touch
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

export default TestimonialsPage;
