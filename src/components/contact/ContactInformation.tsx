import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

const ContactInformation = () => {
  return (
    <div className="w-full h-full bg-white p-6 md:p-8 lg:p-12 text-navy">
      <h2 className="font-grotesk text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contact Information</h2>

      <div className="space-y-5 md:space-y-6 mb-8 md:mb-12">
        <div className="flex items-start">
          <div className="bg-primary p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
            <Mail className="text-white" size={18} aria-hidden="true" />
          </div>
          <div>
            <p className="font-bold mb-1">Email</p>
            <a href="mailto:bryanonyen@gmail.com" className="text-primary hover:underline transition-colors break-words">
              bryanonyen@gmail.com
            </a>
          </div>
        </div>



        <div className="flex items-start">
          <div className="bg-primary p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
            <MapPin className="text-white" size={18} aria-hidden="true" />
          </div>
          <div>
            <p className="font-bold mb-1">Office</p>
            <address className="text-navy not-italic">
              FCT<br />
              Nigeria
            </address>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
            <Clock className="text-white" size={18} aria-hidden="true" />
          </div>
          <div>
            <p className="font-bold mb-1">Office Hours</p>
            <p className="text-navy">
              Monday - Friday: 9am - 5pm WAT
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 bg-neutral-100 rounded-xl">
        <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Quick Response Promise</h3>
        <p className="text-navy text-sm md:text-base">
          We aim to respond to all inquiries within 24 hours during business days.
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
