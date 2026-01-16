
import React from 'react';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const ContactCard = () => {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container-tight mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Fixed width for contact information section for better responsiveness */}
            <div className="lg:w-5/12 xl:w-4/12">
              <ContactInformation />
            </div>
            {/* Improved responsive styling for the form section */}
            <div className="lg:w-7/12 xl:w-8/12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
