import React, { useState } from 'react';
import { ArrowRight, Check, Mail, Clock, Shield, Star, CheckCircle2, MapPin } from 'lucide-react';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import { usePageTitle, PAGE_TITLES } from '../hooks/usePageTitle';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import SEO from '../components/SEO';

const Contact = () => {
  usePageTitle(PAGE_TITLES.CONTACT);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: 'Website Inquiry',
      message: formData.get('message') as string,
      consent: true,
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert(data);

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact PixelsToWeb | Canadian Web Design Agency"
        description="Get in touch with PixelsToWeb for custom website development. We create beautiful, functional websites for businesses across Canada. Response within 24 hours."
        keywords="contact web design agency, website development Canada, custom websites, web design Toronto"
        canonical="https://pixelstoweb.com/contact"
      />
      <Header />
      <main id="main-content" className="bg-[#F7F7F7]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-black/[0.03] rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-black/60">Free Accessibility Audit</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black/90 leading-[0.95] tracking-tight mb-8">
                Start Your Accessibility
                <br />
                <span className="text-black/30">Journey Today</span>
              </h1>
              <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
                Every project begins with a conversation. Tell us about your accessibility goals and we will craft a custom solution that fits your needs perfectly.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Form Card */}
              <div className="rounded-[32px] bg-[#FAFAFA] p-8 md:p-10 border border-black/10 shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-black/[0.03] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-black/60" />
                    </div>
                    <h3 className="text-2xl font-bold text-black/80 mb-3">Message Received!</h3>
                    <p className="text-black/50 mb-6">
                      We'll get back to you within 24 hours with your free accessibility assessment.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-black font-medium hover:text-black/60 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-black/80 mb-2">Request Your Free Consultation</h2>
                    <p className="text-black/50 mb-8">No commitment. Just actionable insights tailored to your needs.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-4 bg-black/[0.03] border-2 border-transparent rounded-2xl focus:border-black/10 focus:bg-white focus:outline-none transition-all text-black placeholder:text-black/30"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-4 bg-black/[0.03] border-2 border-transparent rounded-2xl focus:border-black/10 focus:bg-white focus:outline-none transition-all text-black placeholder:text-black/30"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">
                          Tell us about your project
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          placeholder="I need help with website accessibility..."
                          className="w-full px-4 py-4 bg-black/[0.03] border-2 border-transparent rounded-2xl focus:border-black/10 focus:bg-white focus:outline-none transition-all resize-none text-black placeholder:text-black/30"
                          disabled={isSubmitting}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white py-4 rounded-full font-medium text-lg hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
                        {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                      </button>

                      <p className="text-xs text-black/40 text-center">
                        By submitting, you agree to our privacy policy. We never share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* Info Cards */}
              <div className="flex flex-col gap-4">
                {/* Trust Signals */}
                <div className="rounded-[32px] bg-black p-8 flex-1">
                  <h3 className="text-xl font-bold text-white mb-6">Why Choose PixelsToWeb?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Personal Attention</div>
                        <div className="text-white/50 text-sm">Direct access to accessibility experts</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <div className="text-white font-medium">AI Powered Analysis</div>
                        <div className="text-white/50 text-sm">Intelligent automation with human expertise</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Star className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Custom Solutions</div>
                        <div className="text-white/50 text-sm">Tailored to your specific needs</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="rounded-[32px] bg-black/[0.03] p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-black/70 font-medium mb-4">
                    "PixelsToWeb created an amazing website for our Toronto-based business. Professional, fast, and exactly what we needed."
                  </p>
                  <div className="text-black/40 text-sm">Sarah Chen, Business Owner</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                What You Get
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black/90">
                Free Audit Includes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'WCAG Analysis',
                  description: 'Comprehensive scan against WCAG 2.2 Level AA standards with prioritized recommendations.'
                },
                {
                  title: 'Risk Assessment',
                  description: 'Identify potential legal vulnerabilities and compliance gaps before they become problems.'
                },
                {
                  title: 'Action Plan',
                  description: 'Clear roadmap with quick wins and long-term improvements ranked by impact.'
                }
              ].map((item, i) => (
                <div key={i} className="rounded-[32px] bg-[#F7F7F7] p-8 min-h-[220px] flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-black/60" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black/80 mb-3">{item.title}</h3>
                    <p className="text-black/50">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <a
                href="mailto:hello@pixelstoweb.com"
                className="rounded-[32px] bg-[#FAFAFA] p-8 flex flex-col justify-between min-h-[180px] group hover:shadow-lg transition-shadow border border-black/10 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black/60" />
                </div>
                <div>
                  <div className="text-black/40 text-sm uppercase tracking-wider mb-1">Email</div>
                  <div className="text-black/80 font-medium text-lg group-hover:text-black transition-colors">hello@pixelstoweb.com</div>
                </div>
              </a>

              {/* Location */}
              <div className="rounded-[32px] bg-[#FAFAFA] p-8 flex flex-col justify-between min-h-[180px] border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-black/[0.06] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black/60" />
                </div>
                <div>
                  <div className="text-black/40 text-sm uppercase tracking-wider mb-1">Location</div>
                  <div className="text-black/80 font-medium text-lg">Toronto, ON</div>
                  <div className="text-black/40 text-sm">Serving clients across Canada</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FinalCta />
    </>
  );
};

export default Contact;
