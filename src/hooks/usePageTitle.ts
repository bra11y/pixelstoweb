import { useEffect } from 'react';

/**
 * Custom hook for setting page titles dynamically
 * Follows accessibility best practices for screen readers
 * Format: [Page Purpose] | [Company Name] | [Section/Category]
 */
export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    
    // Cleanup function to restore previous title if needed
    return () => {
      // Only restore if the title hasn't been changed by another component
      if (document.title === title) {
        document.title = previousTitle;
      }
    };
  }, [title]);
};

/**
 * Helper function to create consistent page titles
 * @param pageTitle - The specific page title (e.g., "Contact Us", "About")
 * @param section - Optional section/category (e.g., "Services", "Blog")
 * @param companyName - Company name (defaults to "PixelsToWeb")
 * @returns Formatted title string
 */
export const createPageTitle = (
  pageTitle: string, 
  section?: string, 
  companyName: string = "PixelsToWeb"
): string => {
  const parts = [pageTitle];
  
  if (section) {
    parts.push(section);
  }
  
  parts.push(companyName);
  
  return parts.join(" | ");
};

/**
 * Common page titles for consistency
 */
export const PAGE_TITLES = {
  HOME: createPageTitle("Professional Web Development & Design Services"),
  ABOUT: createPageTitle("About Our Web Development Team"),
  SERVICES: createPageTitle("Web Development Services - WordPress, Shopify & Custom Websites"),
  PORTFOLIO: createPageTitle("Web Development Portfolio & Project Examples"),
  TESTIMONIALS: createPageTitle("Client Testimonials - Web Development Reviews"),
  CONTACT: createPageTitle("Contact Our Web Development Team"),
  RESOURCES: createPageTitle("Web Development Resources & Guides"),
  BLOG: createPageTitle("Web Development Blog", "Tips & Insights"),
  NOT_FOUND: createPageTitle("Page Not Found"),
} as const; 