import React from 'react';
import { Shield, Users, Zap, Search, Award, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'WCAG 2.2 AA Compliant',
    description: 'Every website we build meets or exceeds international accessibility standards, ensuring legal compliance and inclusivity.'
  },
  {
    icon: Users,
    title: 'Universal Design',
    description: 'We design for everyone - from screen reader users to keyboard-only navigation, creating experiences that work for all abilities.'
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Lightning-fast load times and optimized code ensure your accessible site doesn\'t compromise on speed or functionality.'
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Accessible websites rank better. Our semantic HTML and structured data boost your search engine visibility naturally.'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous testing with real assistive technologies and automated accessibility scanners ensures flawless experiences.'
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing Support',
    description: 'From initial audit to post-launch maintenance, we partner with you to maintain accessibility excellence over time.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Why Choose BIHUB?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with inclusive design principles to create digital experiences that truly work for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
