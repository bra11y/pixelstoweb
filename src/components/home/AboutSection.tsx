import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';
import LifestyleGallery from '../LifestyleGallery';

const AboutSection = () => {
  const stats = [
    { number: '50+', label: 'Websites Developed', icon: <Users size={24} /> },
    { number: '1M+', label: 'Users Reached', icon: <Globe size={24} /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Award size={24} /> },
  ];

  return (
    <section className="section-container bg-white">
      <div className="container-tight mx-auto">
        <div className="bm-grid-2 gap-16">
          <div>
            <h2 className="h2 text-black mb-8">PREMIUM ACCESSIBILITY SOLUTIONS</h2>
            <p className="text-large text-navy mb-8">
              AI powered accessibility auditing combined with custom management solutions. We create tailored strategies that fit your specific needs and deliver measurable results.
            </p>
            <p className="text-navy mb-8 leading-relaxed">
              Our approach combines cutting edge AI technology with expert human insight to deliver accessibility solutions that go beyond compliance. Every project receives personalized attention and premium service.
            </p>

            <div className="project-card mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">Certified Accessibility Expertise</h3>
                  <p className="text-navy">
                    Our team combines AI enhanced tools with deep accessibility knowledge to deliver solutions that meet WCAG 2.2 standards and create genuinely inclusive experiences.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about" className="button-outline">
              Learn More About Us
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="project-card text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="h3 text-black mb-2">{stat.number}</div>
                  <div className="text-navy font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lifestyle Gallery Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Our Creative Workspace</h3>
            <p className="text-lg text-navy max-w-2xl mx-auto">
              Take a peek behind the scenes at our dynamic team and modern workspace where innovation meets creativity
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8">
            <LifestyleGallery
              category="team"
              showTitle={false}
              maxImages={3}
              layout="grid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
