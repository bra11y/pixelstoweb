-- Populate Search Index with Website Content
-- Run this in your Supabase SQL Editor after creating the tables

-- Clear existing data (optional - remove if you want to keep existing data)
-- DELETE FROM search_index;

-- Add all main pages
INSERT INTO search_index (title, content, url, type, metadata) VALUES
(
  'Home',
  'Websites that actually convert visitors into customers. Stop losing customers to competitors with outdated websites. We build modern, fast-loading sites that turn browsers into buyers. Accessibility first web development.',
  '/',
  'page',
  '{"keywords": ["home", "accessibility", "web development", "convert", "modern websites"]}'
),
(
  'Services',
  'Professional web development services including WordPress, Shopify, and custom solutions. WordPress sites that work as hard as you do. Shopify stores that sell while you sleep. Mobile-first design because that is where your customers are. SEO that brings customers to your door.',
  '/services',
  'page',
  '{"keywords": ["services", "web development", "wordpress", "shopify", "seo", "mobile-first"]}'
),
(
  'Portfolio',
  'View our portfolio of accessible websites and web applications. See examples of our work creating beautiful, functional, and accessible web experiences.',
  '/portfolio',
  'page',
  '{"keywords": ["portfolio", "projects", "work", "examples", "case studies"]}'
),
(
  'About',
  'Learn about our mission to create accessible web experiences for everyone. We believe in building websites that work for all users, regardless of their abilities or the devices they use.',
  '/about',
  'page',
  '{"keywords": ["about", "team", "mission", "values", "accessibility"]}'
),
(
  'Contact',
  'Get in touch with us for your web development needs. Hire us to help with your accessibility needs. Ready to transform your online presence?',
  '/contact',
  'page',
  '{"keywords": ["contact", "hire", "email", "get in touch", "consultation"]}'
),
(
  'Resources',
  'Accessibility resources, guides, and best practices. Learn about web accessibility standards, WCAG guidelines, and how to make your website more inclusive.',
  '/resources',
  'page',
  '{"keywords": ["resources", "guides", "accessibility", "wcag", "best practices", "learning"]}'
),
(
  'Blog',
  'Read our latest articles on web accessibility and development. Stay updated with the latest trends, tips, and insights in accessible web design.',
  '/blog',
  'page',
  '{"keywords": ["blog", "articles", "news", "updates", "insights"]}'
),
(
  'Accessibility Scanner',
  'Scan your website for accessibility issues including contrast, semantic HTML, and alt text. Free accessibility audit tool. Check color contrast ratios, validate semantic HTML structure, find missing alt text, and get actionable recommendations to improve your website accessibility.',
  '/scanner',
  'page',
  '{"keywords": ["scanner", "accessibility", "audit", "wcag", "contrast", "semantic html", "alt text", "free tool"]}'
),
(
  'Search',
  'Search across all pages, events, blogs, and resources. Find what you are looking for quickly with our site-wide search functionality.',
  '/search',
  'page',
  '{"keywords": ["search", "find", "lookup", "discover"]}'
),
(
  'Testimonials',
  'Read what our clients say about working with us. See reviews and feedback from businesses we have helped transform their online presence.',
  '/testimonials',
  'page',
  '{"keywords": ["testimonials", "reviews", "feedback", "clients", "success stories"]}'
);

-- Add example blog posts (customize with your actual blog content)
-- Uncomment and modify these as needed

/*
INSERT INTO search_index (title, content, url, type, metadata) VALUES
(
  'Understanding WCAG 2.1 Guidelines',
  'A comprehensive guide to understanding and implementing WCAG 2.1 accessibility guidelines for your website. Learn about the three levels of conformance and how to achieve them.',
  '/blog/understanding-wcag-guidelines',
  'blog',
  '{"keywords": ["wcag", "guidelines", "accessibility", "standards"], "author": "Your Name", "date": "2024-01-15"}'
),
(
  'The Importance of Alt Text',
  'Why alt text matters for accessibility and SEO. Learn how to write effective alt text that helps both screen reader users and search engines understand your images.',
  '/blog/importance-of-alt-text',
  'blog',
  '{"keywords": ["alt text", "images", "accessibility", "seo"], "author": "Your Name", "date": "2024-01-20"}'
),
(
  'Color Contrast Best Practices',
  'Ensure your website meets WCAG color contrast requirements. Learn about contrast ratios, tools for testing, and common mistakes to avoid.',
  '/blog/color-contrast-best-practices',
  'blog',
  '{"keywords": ["color contrast", "wcag", "design", "accessibility"], "author": "Your Name", "date": "2024-02-01"}'
);
*/

-- Add example events (if you have events on your site)
-- Uncomment and modify these as needed

/*
INSERT INTO search_index (title, content, url, type, metadata) VALUES
(
  'Web Accessibility Workshop',
  'Join us for a hands-on workshop on web accessibility. Learn practical techniques for making your websites more accessible to all users.',
  '/events/accessibility-workshop',
  'event',
  '{"keywords": ["workshop", "training", "accessibility", "learning"], "date": "2024-03-15", "location": "Online"}'
);
*/

-- Add example resources
-- Uncomment and modify these as needed

/*
INSERT INTO search_index (title, content, url, type, metadata) VALUES
(
  'Accessibility Checklist',
  'A comprehensive checklist for ensuring your website meets accessibility standards. Download our free PDF guide.',
  '/resources/accessibility-checklist',
  'resource',
  '{"keywords": ["checklist", "guide", "accessibility", "download"], "format": "PDF"}'
);
*/

-- Verify the data was inserted
SELECT 
  type,
  COUNT(*) as count
FROM search_index
GROUP BY type
ORDER BY type;

-- View all indexed content
SELECT 
  title,
  type,
  url,
  LEFT(content, 100) as content_preview
FROM search_index
ORDER BY type, title;
