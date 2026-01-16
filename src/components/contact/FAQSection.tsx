
import React from 'react';
import { MessageSquare } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqItems: FAQ[] = [
  {
    question: "What is the typical timeline for an accessibility audit?",
    answer: "Most standard website audits are completed within 7-10 business days, depending on the size and complexity of your site. We'll provide a specific estimate after our initial consultation."
  },
  {
    question: "Do you offer ongoing support after remediation?",
    answer: "Yes, we offer maintenance packages to ensure your digital assets remain accessible as you update content and features. We can also provide training for your team."
  },
  {
    question: "What accessibility standards do you follow?",
    answer: "We primarily follow WCAG 2.1 AA standards, which are the most widely recognized guidelines for digital accessibility. We can also work with specific compliance requirements for your industry."
  },
  {
    question: "Can you help with legal compliance issues?",
    answer: "While we're not a law firm, we can help you implement the technical requirements needed to meet accessibility regulations like ADA, Section 508, and other relevant standards."
  }
];

const FAQSection = () => {
  return (
    <section className="pb-24 bg-neutral-900">
      <div className="container-tight mx-auto">
        <div className="text-center mb-12">
          <h2 className="h2 text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Find quick answers to common questions about our services and process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-start">
                <MessageSquare size={20} className="mr-2 flex-shrink-0 mt-1 text-primary" aria-hidden="true" />
                {faq.question}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
