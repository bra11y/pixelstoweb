
import React from 'react';
import { Send } from 'lucide-react';

interface ContactFormSubmitProps {
  isSubmitting: boolean;
}

const ContactFormSubmit = ({ isSubmitting }: ContactFormSubmitProps) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="button-primary w-full justify-center"
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
      <Send className="w-5 h-5" />
    </button>
  );
};

export default ContactFormSubmit;
