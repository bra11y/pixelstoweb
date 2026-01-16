import { searchHelpers, SearchIndexItem } from './supabase-helpers';

// Static content to be indexed
export const staticContent: Omit<SearchIndexItem, 'id' | 'created_at' | 'updated_at'>[] = [
  // Pages
  {
    title: 'Home - Accessibility-First Web Development',
    content: 'Professional web development services with a focus on accessibility, inclusive design, WordPress, Shopify, and mobile-first responsive websites.',
    url: '/',
    type: 'page',
    metadata: { 
      tags: ['home', 'accessibility', 'web development', 'inclusive design'],
      description: 'Main landing page showcasing our accessibility-first approach to web development'
    }
  },
  {
    title: 'About Us - BIHUB Accessibility Experts',
    content: 'Learn about our mission to create inclusive digital experiences. Our team specializes in accessibility consulting, WCAG compliance, and universal design principles.',
    url: '/about',
    type: 'page',
    metadata: { 
      tags: ['about', 'team', 'accessibility experts', 'mission', 'WCAG'],
      description: 'Information about our company, team, and commitment to digital accessibility'
    }
  },
  {
    title: 'Services - Web Accessibility & Development',
    content: 'Comprehensive web development and accessibility services including WCAG audits, accessibility testing, WordPress development, Shopify stores, and accessibility consulting.',
    url: '/services',
    type: 'page',
    metadata: { 
      tags: ['services', 'WCAG audit', 'accessibility testing', 'WordPress', 'Shopify', 'consulting'],
      description: 'Our complete range of web development and accessibility services'
    }
  },
  {
    title: 'Portfolio - Accessible Web Projects',
    content: 'Explore our portfolio of accessible websites, inclusive design projects, and successful WCAG compliance implementations across various industries.',
    url: '/portfolio',
    type: 'page',
    metadata: { 
      tags: ['portfolio', 'projects', 'case studies', 'accessible websites', 'inclusive design'],
      description: 'Showcase of our accessibility-focused web development projects'
    }
  },
  {
    title: 'Contact Us - Get Accessibility Help',
    content: 'Contact our accessibility experts for a free consultation. We help businesses create inclusive digital experiences that comply with WCAG standards.',
    url: '/contact',
    type: 'page',
    metadata: { 
      tags: ['contact', 'consultation', 'accessibility help', 'hire us'],
      description: 'Get in touch with our team for accessibility consulting and web development services'
    }
  },
  {
    title: 'Resources - Accessibility Guidelines & Tools',
    content: 'Free accessibility resources, WCAG guidelines, tools, and best practices for creating inclusive digital experiences and compliant websites.',
    url: '/resources',
    type: 'page',
    metadata: { 
      tags: ['resources', 'guidelines', 'tools', 'best practices', 'free resources', 'WCAG'],
      description: 'Helpful resources and tools for web accessibility and inclusive design'
    }
  },
  {
    title: 'Blog - Web Accessibility Insights',
    content: 'Stay updated with the latest web accessibility trends, WCAG updates, inclusive design tips, and accessibility best practices from our experts.',
    url: '/blog',
    type: 'blog',
    metadata: { 
      tags: ['blog', 'articles', 'accessibility trends', 'insights', 'tips'],
      description: 'Expert insights and articles about web accessibility and inclusive design'
    }
  },
  {
    title: 'Accessibility Scanner - Free Website Audit Tool',
    content: 'Free accessibility scanner tool to check your website for WCAG compliance issues including color contrast, semantic HTML, alt text, and more accessibility problems.',
    url: '/scanner',
    type: 'page',
    metadata: { 
      tags: ['scanner', 'audit tool', 'WCAG compliance', 'color contrast', 'alt text', 'free tool'],
      description: 'Free online tool to scan websites for accessibility issues and WCAG compliance'
    }
  },
  {
    title: 'Search - Find Content & Resources',
    content: 'Search across our website to find pages, blog posts, resources, events, and accessibility-related content. Intelligent search with history tracking.',
    url: '/search',
    type: 'page',
    metadata: { 
      tags: ['search', 'find content', 'site search'],
      description: 'Site-wide search functionality to find relevant content and resources'
    }
  },
  {
    title: 'Testimonials - Client Success Stories',
    content: 'Read testimonials from satisfied clients who have improved their website accessibility and compliance with our expert services and consulting.',
    url: '/testimonials',
    type: 'page',
    metadata: { 
      tags: ['testimonials', 'reviews', 'client stories', 'success stories'],
      description: 'Client testimonials and success stories from our accessibility projects'
    }
  },
  {
    title: 'Gallery - Life at BIHUB',
    content: 'Explore our creative workspace, talented team, and company culture. See behind the scenes of Nigeria\'s leading web development and brand design agency.',
    url: '/gallery',
    type: 'page',
    metadata: { 
      tags: ['gallery', 'team', 'workspace', 'culture', 'behind the scenes'],
      description: 'Visual showcase of our team, workspace, and company culture'
    }
  },
  {
    title: 'Book a Session - Contact Form',
    content: 'Schedule a consultation with our web development and accessibility experts. Get a custom quote for your project and discuss your requirements.',
    url: '/contact',
    type: 'page',
    metadata: { 
      tags: ['book session', 'consultation', 'contact form', 'quote', 'meeting'],
      description: 'Book a consultation session with our development team'
    }
  },

  // Sample Events
  {
    title: 'Web Accessibility Fundamentals Workshop',
    content: 'Join our comprehensive workshop covering WCAG 2.1 guidelines, accessibility testing tools, and practical implementation strategies for creating inclusive websites.',
    url: '/events/accessibility-fundamentals',
    type: 'event',
    metadata: { 
      tags: ['workshop', 'WCAG 2.1', 'fundamentals', 'training', 'accessibility testing'],
      description: 'Educational workshop on web accessibility basics and implementation'
    }
  },
  {
    title: 'Inclusive Design Webinar Series',
    content: 'Monthly webinar series exploring inclusive design principles, universal design concepts, and how to create digital experiences that work for everyone.',
    url: '/events/inclusive-design-webinar',
    type: 'event',
    metadata: { 
      tags: ['webinar', 'inclusive design', 'universal design', 'monthly series'],
      description: 'Regular webinar series focused on inclusive and universal design principles'
    }
  },
  {
    title: 'WCAG 2.2 Update Conference',
    content: 'Annual conference covering the latest WCAG 2.2 updates, new accessibility requirements, and emerging trends in digital accessibility and compliance.',
    url: '/events/wcag-2-2-conference',
    type: 'event',
    metadata: { 
      tags: ['conference', 'WCAG 2.2', 'updates', 'compliance', 'annual event'],
      description: 'Annual conference on the latest web accessibility standards and updates'
    }
  },

  // Sample Resources
  {
    title: 'WCAG 2.1 Quick Reference Guide',
    content: 'Comprehensive quick reference guide for WCAG 2.1 success criteria, including practical examples and implementation tips for web developers.',
    url: '/resources/wcag-quick-reference',
    type: 'resource',
    metadata: { 
      tags: ['WCAG 2.1', 'quick reference', 'guide', 'success criteria', 'developers'],
      description: 'Handy reference guide for WCAG 2.1 compliance requirements'
    }
  },
  {
    title: 'Color Contrast Checker Tool',
    content: 'Free online tool to check color contrast ratios for WCAG AA and AAA compliance. Ensure your website meets accessibility color standards.',
    url: '/resources/color-contrast-checker',
    type: 'resource',
    metadata: { 
      tags: ['color contrast', 'tool', 'WCAG AA', 'WCAG AAA', 'free tool'],
      description: 'Tool for checking color contrast compliance with accessibility standards'
    }
  },
  {
    title: 'Accessibility Testing Checklist',
    content: 'Complete checklist for testing website accessibility including keyboard navigation, screen reader compatibility, and WCAG compliance verification.',
    url: '/resources/testing-checklist',
    type: 'resource',
    metadata: { 
      tags: ['testing', 'checklist', 'keyboard navigation', 'screen reader', 'verification'],
      description: 'Comprehensive checklist for conducting accessibility testing'
    }
  },
  {
    title: 'Alt Text Best Practices Guide',
    content: 'Learn how to write effective alt text for images, including examples, common mistakes to avoid, and accessibility guidelines for different image types.',
    url: '/resources/alt-text-guide',
    type: 'resource',
    metadata: { 
      tags: ['alt text', 'images', 'best practices', 'guidelines', 'examples'],
      description: 'Guide to writing effective alt text for web accessibility'
    }
  }
];

// Function to index all static content
export const indexStaticContent = async () => {
  console.log('Starting to index static content...');
  
  try {
    for (const item of staticContent) {
      console.log(`Indexing: ${item.title}`);
      
      // Check if item already exists
      const { data: existing } = await searchHelpers.searchContent(item.title);
      
      if (!existing || existing.length === 0) {
        const { error } = await searchHelpers.addToSearchIndex(item);
        if (error) {
          console.error(`Error indexing ${item.title}:`, error);
        } else {
          console.log(`Successfully indexed: ${item.title}`);
        }
      } else {
        console.log(`Already indexed: ${item.title}`);
      }
    }
    
    console.log('Finished indexing static content!');
  } catch (error) {
    console.error('Error during indexing:', error);
  }
};

// Function to get search suggestions based on query
export const getSearchSuggestions = (query: string): string[] => {
  const suggestions: string[] = [];
  const lowerQuery = query.toLowerCase();
  
  const keywords = [
    'accessibility', 'WCAG', 'inclusive design', 'color contrast', 'alt text',
    'screen reader', 'keyboard navigation', 'web development', 'WordPress',
    'Shopify', 'testing', 'audit', 'compliance', 'guidelines', 'resources',
    'tools', 'workshop', 'webinar', 'conference', 'consulting', 'home', 'about',
    'services', 'portfolio', 'contact', 'blog', 'gallery', 'search', 'testimonials',
    'book session', 'consultation', 'quote', 'team', 'Nigeria', 'brand design',
    'responsive design', 'mobile', 'custom', 'maintenance', 'SEO', 'optimization',
    'scanner', 'free tool', 'audit tool', 'business', 'company', 'agency'
  ];
  
  // First, try exact matches
  keywords.forEach(keyword => {
    if (keyword.toLowerCase().startsWith(lowerQuery) && !suggestions.includes(keyword)) {
      suggestions.push(keyword);
    }
  });
  
  // Then try partial matches if we don't have enough suggestions
  if (suggestions.length < 5) {
    keywords.forEach(keyword => {
      if (keyword.toLowerCase().includes(lowerQuery) && !suggestions.includes(keyword)) {
        suggestions.push(keyword);
      }
    });
  }
  
  // Add static content titles that match
  staticContent.forEach(item => {
    const title = item.title.toLowerCase();
    if (title.includes(lowerQuery) && !suggestions.includes(item.title) && suggestions.length < 5) {
      suggestions.push(item.title);
    }
  });
  
  return suggestions.slice(0, 6);
};

// Function to enhance search results with metadata
export const enhanceSearchResults = (results: any[], query: string) => {
  return results.map(result => ({
    ...result,
    relevanceScore: calculateRelevanceScore(result, query),
    highlightedContent: highlightSearchTerms(result.content, query),
    highlightedTitle: highlightSearchTerms(result.title, query)
  })).sort((a, b) => b.relevanceScore - a.relevanceScore);
};

// Calculate relevance score based on query match
const calculateRelevanceScore = (result: any, query: string): number => {
  const queryWords = query.toLowerCase().split(' ');
  let score = 0;
  
  queryWords.forEach(word => {
    // Title matches are more important
    if (result.title.toLowerCase().includes(word)) {
      score += 10;
    }
    
    // Content matches
    if (result.content.toLowerCase().includes(word)) {
      score += 5;
    }
    
    // Tag matches (if metadata exists)
    if (result.metadata?.tags) {
      result.metadata.tags.forEach((tag: string) => {
        if (tag.toLowerCase().includes(word)) {
          score += 7;
        }
      });
    }
  });
  
  return score;
};

// Highlight search terms in text
const highlightSearchTerms = (text: string, query: string): string => {
  const queryWords = query.toLowerCase().split(' ');
  let highlightedText = text;
  
  queryWords.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
  });
  
  return highlightedText;
};