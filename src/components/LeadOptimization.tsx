import React, { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { X, Gift, Clock, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LeadOptimizationProps {
  onClose?: () => void;
  variant?: 'exit-intent' | 'time-based' | 'scroll-based';
}

const LeadOptimization = ({ onClose, variant = 'time-based' }: LeadOptimizationProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, variant === 'time-based' ? 30000 : 1000); // 30 seconds for time-based

    return () => clearTimeout(timer);
  }, [variant]);

  useEffect(() => {
    if (variant === 'exit-intent') {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          setIsVisible(true);
        }
      };

      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }

    if (variant === 'scroll-based') {
      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > 70) {
          setIsVisible(true);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [variant]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Track lead capture
    try {
      // Google Analytics event tracking could be added here
      console.log('Lead generation event:', { variant, email });

      // Here you could integrate with your lead management system
      console.log('Lead captured:', { email, variant, timestamp: new Date().toISOString() });
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 3000);
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
  };

  if (!isVisible) return null;

  // Background images for different variants
  const backgroundImages = {
    'exit-intent': '/lovable-uploads/anime-hearing.jpg',
    'time-based': '/lovable-uploads/person-computer.jpg', 
    'scroll-based': '/lovable-uploads/operating-computer-anime.jpg'
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-lg w-full relative overflow-hidden shadow-2xl border-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${backgroundImages[variant]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10 bg-black/30 rounded-full backdrop-blur-sm"
          >
            <X size={20} />
          </button>
        )}

        {!isSubmitted ? (
          <div className="p-8">
            {/* Offer based on variant */}
            {variant === 'exit-intent' && (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-red-400/30">
                    <Gift className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Wait! Don't Miss Out</h3>
                  <p className="text-white/90 drop-shadow-md">Get your FREE website audit worth ₦50,000 before you leave!</p>
                </div>
              </>
            )}

            {variant === 'time-based' && (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Limited Time Offer</h3>
                  <p className="text-white/90 drop-shadow-md">Get 30% OFF your first project + FREE brand consultation!</p>
                </div>
              </>
            )}

            {variant === 'scroll-based' && (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <Phone className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Ready to Start Your Project?</h3>
                  <p className="text-white/90 drop-shadow-md">Book a FREE consultation and get a custom quote within 24 hours!</p>
                </div>
              </>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-lg bg-white/95 backdrop-blur-sm border-white/30 text-gray-900 placeholder:text-gray-600 focus:bg-white focus:border-blue-500"
              />
              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                {variant === 'exit-intent' ? 'Get FREE Audit' : 
                 variant === 'time-based' ? 'Claim 30% Discount' : 
                 'Book FREE Consultation'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-center text-sm text-white/80 mb-4 drop-shadow-md">Or contact us directly:</p>
              <div className="flex justify-center">
                <Link 
                  to="/contact"
                  className="flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Mail size={16} />
                  <span className="font-medium">Contact Us</span>
                </Link>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-white/70 drop-shadow-md">
                ✅ No spam, just valuable insights<br />
                ✅ Used by 500+ Nigerian businesses<br />
                ✅ Cancel anytime
              </p>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Thank You!</h3>
            <p className="text-white/90 mb-4 drop-shadow-md">
              We'll be in touch within 24 hours with your {variant === 'exit-intent' ? 'free audit' : 
               variant === 'time-based' ? 'discount details' : 'consultation booking'}.
            </p>
            <p className="text-sm text-white/70 drop-shadow-md">Check your email for next steps.</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default LeadOptimization;