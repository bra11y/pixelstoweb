import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { supabase } from '@/integrations/supabase/client';
import ContactFormHeader from './form/ContactFormHeader';
import ContactFormSubmit from './form/ContactFormSubmit';

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      consent: formData.get('consent') === 'on',
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert(data);

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      
      // Reset form after successful submission
      const form = e.target as HTMLFormElement;
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6 p-6">
        <Skeleton className="h-8 w-48 bg-primary/10" />
        <Skeleton className="h-12 w-full bg-primary/10" />
        <Skeleton className="h-12 w-full bg-primary/10" />
        <Skeleton className="h-32 w-full bg-primary/10" />
        <Skeleton className="h-12 w-full bg-primary/10" />
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="p-6 space-y-6">
      <ContactFormHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1">Subject *</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          disabled={isSubmitting}
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 mr-3 h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
          disabled={isSubmitting}
        />
        <label htmlFor="consent" className="text-sm text-neutral-700">
          I agree to the privacy policy and terms of service. *
        </label>
      </div>
      
      <ContactFormSubmit isSubmitting={isSubmitting} />
    </form>
  );
};

export default ContactForm;