
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { trackEvent } from './ConversionTracking';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Track form submission event
      trackEvent('contact_form_submit', {
        category: 'Lead Generation',
        label: formData.service || 'General Inquiry',
        lead_source: 'Contact Form',
        business_type: formData.service,
        value: 1
      });

      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Track successful conversion
        trackEvent('generate_lead', {
          category: 'Conversion',
          label: 'Contact Form Success',
          lead_source: 'Contact Form',
          business_type: formData.service,
          value: 10
        });
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 animate-fade-up">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal/10 text-teal mb-4">
            <Check size={32} />
          </div>
          <h3 className="h3 text-navy mb-4">Message Sent!</h3>
          <p className="text-neutral-700 mb-4">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <>
          <h2 className="h3 text-navy mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-navy mb-1">
                Full Name <span className="text-orange">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500' : 'border-neutral-300'
                }`}
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block font-medium text-navy mb-1">
                Email Address <span className="text-orange">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500' : 'border-neutral-300'
                }`}
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block font-medium text-navy mb-1">
                Phone Number <span className="text-neutral-500">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block font-medium text-navy mb-1">
                Service You're Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                <option value="website-auditing">Website Auditing</option>
                <option value="pdf-remediation">PDF Remediation</option>
                <option value="design-recommendations">Design Recommendations</option>
                <option value="frontend-development">Frontend Development</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block font-medium text-navy mb-1">
                Your Message <span className="text-orange">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal focus:outline-none transition-colors ${
                  errors.message ? 'border-red-500' : 'border-neutral-300'
                }`}
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={errors.message ? "true" : "false"}
              ></textarea>
              {errors.message && (
                <p id="message-error" className="mt-1 text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              className={`button-primary w-full flex justify-center items-center ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
