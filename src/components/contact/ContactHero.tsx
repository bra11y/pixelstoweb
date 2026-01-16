import React from 'react';

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900">
      <div className="container-tight mx-auto">
        <div className="text-left max-w-4xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-2 bg-white text-primary rounded-full text-sm font-bold mb-6 font-atkinson">
            Get In Touch
          </span>
          <h1 className="display-text text-white mb-8 font-cooper">
            LET'S MAKE YOUR<br />
            <span className="text-primary">DIGITAL SPACE</span><br />
            ACCESSIBLE
          </h1>
          <p className="text-large text-white mb-8 max-w-3xl mr-auto font-atkinson">
            We're here to help you create inclusive digital experiences that work for everyone. 
            Reach out to discuss how we can assist with your accessibility needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
