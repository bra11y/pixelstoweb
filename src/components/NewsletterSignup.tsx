import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail } from 'lucide-react';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = "Stay in the loop",
  description = "Get the latest articles and insights on digital accessibility delivered to your inbox.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  className = ""
}) => {
  const [email, setEmail] = useState('');
  
  // Use environment variable for newsletter form ID
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_NEWSLETTER_FORM_ID);
  
  React.useEffect(() => {
    if (state.succeeded) {
      setEmail('');
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className={`text-center ${className}`}>
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail size={24} className="text-teal" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-2">Thanks for subscribing!</h3>
          <p className="text-neutral-600">
            Check your email to confirm your subscription.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{title}</h2>
      <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal"
          required
          disabled={state.submitting}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {state.submitting ? 'Subscribing...' : buttonText}
          {!state.submitting && <Mail size={18} />}
        </button>
      </form>
      
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="text-red-500 text-sm mt-2"
      />
      
      <p className="text-sm text-neutral-500 mt-4">
        No spam, unsubscribe anytime. 📧
      </p>
    </div>
  );
};

export default NewsletterSignup; 