import React, { useState } from 'react';
import { CheckCircle, TrendingUp, Users, Clock, ArrowRight, Shield, Zap, Eye } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  beforeAfter: {
    before: {
      title: string;
      issues: string[];
      image?: string;
    };
    after: {
      title: string;
      improvements: string[];
      image?: string;
    };
  };
  technologies: string[];
  timeline: string;
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'early-partner-1',
    title: 'E-Commerce Platform Accessibility Overhaul',
    client: 'Early Partner (Confidential)',
    industry: 'Retail & E-Commerce',
    challenge: 'An established e-commerce platform was losing customers due to accessibility barriers. Screen reader users couldn\'t complete purchases, keyboard navigation was broken, and color contrast failed WCAG standards.',
    solution: 'We conducted a comprehensive audit, rebuilt the checkout flow with semantic HTML and proper ARIA labels, implemented keyboard navigation throughout, and redesigned the color system for WCAG 2.1 AA compliance.',
    testimonial: {
      quote: "Working with PixelsToWeb transformed our approach to web development. They created a beautiful, functional website that perfectly represents our brand.",
      author: 'Sarah Johnson',
      role: 'CTO, E-Commerce Platform'
    },
    metrics: [
      {
        label: 'Accessibility Score',
        value: '94/100',
        icon: <Shield className="w-5 h-5" />
      },
      {
        label: 'Conversion Rate',
        value: '+28%',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        label: 'User Complaints',
        value: '-85%',
        icon: <Users className="w-5 h-5" />
      }
    ],
    beforeAfter: {
      before: {
        title: 'Before: Multiple Barriers',
        issues: [
          'Forms without proper labels or error messages',
          'Color contrast ratios below 3:1',
          'No keyboard navigation support',
          'Missing alt text on product images',
          'Inaccessible dropdown menus'
        ]
      },
      after: {
        title: 'After: Fully Accessible',
        improvements: [
          'Semantic forms with clear labels and inline validation',
          'WCAG 2.1 AA compliant color system (4.5:1+)',
          'Full keyboard navigation with visible focus indicators',
          'Descriptive alt text on all product imagery',
          'ARIA-compliant navigation and dropdowns'
        ]
      }
    },
    technologies: ['React', 'TypeScript', 'ARIA', 'Axe DevTools', 'NVDA'],
    timeline: '6 weeks',
    featured: true
  },
  {
    id: 'concept-healthcare',
    title: 'Healthcare Portal Redesign (Concept)',
    client: 'Future Vision',
    industry: 'Healthcare',
    challenge: 'Many healthcare portals exclude patients with disabilities from managing their own care. Our concept addresses how to make medical information truly accessible while maintaining security and privacy.',
    solution: 'We designed a comprehensive system with plain language summaries, screen reader-optimized medical forms, high contrast mode for low vision users, and simplified navigation for cognitive accessibility.',
    testimonial: {
      quote: "This concept shows what healthcare technology should be - accessible to everyone, regardless of ability. We're excited to bring this vision to life.",
      author: 'Dr. Michael Chen',
      role: 'Healthcare Accessibility Consultant'
    },
    metrics: [
      {
        label: 'WCAG Level',
        value: 'AAA',
        icon: <Shield className="w-5 h-5" />
      },
      {
        label: 'User Testing',
        value: '100%',
        icon: <Users className="w-5 h-5" />
      },
      {
        label: 'Task Success',
        value: '+95%',
        icon: <Zap className="w-5 h-5" />
      }
    ],
    beforeAfter: {
      before: {
        title: 'Common Issues in Healthcare Portals',
        issues: [
          'Complex medical jargon without plain language options',
          'PDFs that are completely inaccessible',
          'Time-sensitive forms that timeout for slower users',
          'Required CAPTCHAs without audio alternatives',
          'Small text with no zoom functionality'
        ]
      },
      after: {
        title: 'Our Accessible Healthcare Vision',
        improvements: [
          'Plain language summaries with medical term glossary',
          'Accessible HTML forms instead of PDFs',
          'Extended timeouts with clear warning messages',
          'Multiple CAPTCHA alternatives (audio, puzzle)',
          'Responsive design with proper zoom support'
        ]
      }
    },
    technologies: ['Next.js', 'Healthcare APIs', 'Screen Readers', 'Cognitive Testing'],
    timeline: 'Concept Phase',
    featured: false
  },
  {
    id: 'early-partner-2',
    title: 'Educational Platform Accessibility Update',
    client: 'Early Partner',
    industry: 'Education & E-Learning',
    challenge: 'An online learning platform was excluding students with disabilities from participating in courses. Video content lacked captions, interactive quizzes were keyboard-inaccessible, and the interface was confusing for screen reader users.',
    solution: 'We implemented auto-generated captions with manual review, rebuilt interactive components with keyboard support, restructured content hierarchy for screen readers, and added skip navigation links.',
    testimonial: {
      quote: "PixelsToWeb helped us create a modern, responsive website that perfectly represents our brand. The team was professional and delivered exceptional results.",
      author: 'Prof. Amanda Williams',
      role: 'Director of Online Learning'
    },
    metrics: [
      {
        label: 'Student Engagement',
        value: '+42%',
        icon: <Users className="w-5 h-5" />
      },
      {
        label: 'Course Completion',
        value: '+35%',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        label: 'Support Tickets',
        value: '-67%',
        icon: <Clock className="w-5 h-5" />
      }
    ],
    beforeAfter: {
      before: {
        title: 'Before: Excluding Students',
        issues: [
          'Videos without captions or transcripts',
          'Interactive quizzes only worked with mouse',
          'Unclear content structure for screen readers',
          'No skip navigation for repetitive content',
          'PDFs without proper tagging'
        ]
      },
      after: {
        title: 'After: Inclusive Learning',
        improvements: [
          'All videos with synchronized captions and transcripts',
          'Fully keyboard-accessible interactive components',
          'Semantic HTML with proper heading hierarchy',
          'Skip links to main content and navigation',
          'Accessible PDF alternatives and remediation'
        ]
      }
    },
    technologies: ['Vue.js', 'Video.js', 'Captions API', 'PDF Remediation'],
    timeline: '8 weeks',
    featured: true
  }
];

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState<{ [key: string]: boolean }>({});

  const toggleDetails = (id: string) => {
    setShowDetails(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
            Real Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Case Studies & Success Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped organizations create more inclusive digital experiences. From early partners to future concepts, every project teaches us and drives impact.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {study.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {study.industry}
                      </span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full font-medium">
                        {study.timeline}
                      </span>
                      {study.featured && (
                        <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full font-bold">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-background/50 backdrop-blur-sm rounded-xl p-4 border border-border">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {metric.icon}
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {metric.label}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-destructive" />
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Our Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Before/After Toggle */}
                <button
                  onClick={() => toggleDetails(study.id)}
                  className="w-full mb-6 px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 rounded-xl transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="text-lg font-bold text-foreground">
                    {showDetails[study.id] ? 'Hide' : 'Show'} Before & After Details
                  </span>
                  <ArrowRight className={`w-5 h-5 text-primary transition-transform duration-300 ${showDetails[study.id] ? 'rotate-90' : ''} group-hover:translate-x-1`} />
                </button>

                {/* Before/After Details */}
                {showDetails[study.id] && (
                  <div className="grid md:grid-cols-2 gap-6 mb-8 animate-fade-in">
                    {/* Before */}
                    <div className="bg-destructive/5 rounded-xl p-6 border border-destructive/20">
                      <h4 className="text-lg font-bold text-foreground mb-4">
                        {study.beforeAfter.before.title}
                      </h4>
                      <ul className="space-y-3">
                        {study.beforeAfter.before.issues.map((issue, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="text-destructive mt-1">✗</span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* After */}
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                      <h4 className="text-lg font-bold text-foreground mb-4">
                        {study.beforeAfter.after.title}
                      </h4>
                      <ul className="space-y-3">
                        {study.beforeAfter.after.improvements.map((improvement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span>{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mb-6 border border-border">
                  <p className="text-foreground text-lg italic mb-4 leading-relaxed">
                    "{study.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {study.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{study.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{study.client}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-up">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to create your own success story?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
