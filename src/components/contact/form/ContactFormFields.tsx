
import React from 'react';

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: Record<string, string>;
}

const ContactFormFields = ({ formData, handleChange, errors }: ContactFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary ${
              errors.name ? 'border-red-500' : 'border-neutral-300'
            }`}
            value={formData.name}
            onChange={handleChange}
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary ${
              errors.email ? 'border-red-500' : 'border-neutral-300'
            }`}
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary`}
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary ${
            errors.message ? 'border-red-500' : 'border-neutral-300'
          }`}
          value={formData.message}
          onChange={handleChange}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-red-500 text-sm">{errors.message}</p>
        )}
      </div>
    </>
  );
};

export default ContactFormFields;
