import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsHelpers } from '../utils/supabase-helpers';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const ConversionTracking = () => {
  const location = useLocation();
  const sessionId = `session_${Date.now()}_${Math.random()}`;

  // Track page analytics in our database
  const trackPageAnalytics = async (pageUrl: string) => {
    try {
      const startTime = performance.now();
      
      // Get basic page and user information
      const analyticsData = {
        page_url: pageUrl,
        page_title: document.title,
        user_agent: navigator.userAgent,
        referrer_url: document.referrer || undefined,
        session_id: sessionId,
        event_type: 'page_view',
        event_category: 'engagement',
        page_load_time: Math.round(startTime),
        device_type: getDeviceType(),
        browser_name: getBrowserName(),
        os_name: getOSName(),
        country: 'Nigeria', // Default for our target market
        state: 'Ogun State' // Default for our primary location
      };

      await analyticsHelpers.trackEvent(analyticsData);
    } catch (error) {
      console.error('Error tracking page analytics:', error);
    }
  };

  // Helper functions for device detection
  const getDeviceType = (): string => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  };

  const getBrowserName = (): string => {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    return 'Other';
  };

  const getOSName = (): string => {
    const ua = navigator.userAgent;
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Mac')) return 'macOS';
    if (ua.includes('Linux')) return 'Linux';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iOS')) return 'iOS';
    return 'Other';
  };

  useEffect(() => {
    // Google Analytics 4 Setup
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID
    
    if (!document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
      // Load Google Analytics 4
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(gtagScript);

      const gtagConfig = document.createElement('script');
      gtagConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          custom_map: {
            'custom_parameter_1': 'lead_source',
            'custom_parameter_2': 'business_type'
          }
        });
      `;
      document.head.appendChild(gtagConfig);
    }

    // Facebook Pixel Setup
    const FB_PIXEL_ID = 'XXXXXXXXXXXXXXX'; // Replace with your Facebook Pixel ID
    
    if (!document.querySelector(`script[src*="connect.facebook.net"]`)) {
      const fbScript = document.createElement('script');
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FB_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);
    }

    // Microsoft Clarity Setup
    const clarityScript = document.createElement('script');
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "XXXXXXXXX"); // Replace with your Clarity ID
    `;
    document.head.appendChild(clarityScript);

  }, []);

  useEffect(() => {
    // Track page views in Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href
      });
    }

    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView');
    }

    // Track in our database
    trackPageAnalytics(location.pathname + location.search);

    // Track specific page events
    const trackPageSpecificEvents = () => {
      switch (location.pathname) {
        case '/':
          trackEvent('view_home_page', { page_category: 'landing' });
          break;
        case '/scanner':
          trackEvent('view_scanner_page', { page_category: 'tool' });
          break;
        case '/services':
          trackEvent('view_services_page', { page_category: 'commercial' });
          break;
        case '/contact':
          trackEvent('view_contact_page', { page_category: 'conversion' });
          break;
        default:
          trackEvent('view_page', { 
            page_category: 'general',
            page_path: location.pathname 
          });
      }
    };

    trackPageSpecificEvents();
  }, [location]);

  return null;
};

// Utility functions for tracking events
export const trackEvent = async (eventName: string, parameters: Record<string, any> = {}) => {
  // Google Analytics 4
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label,
      value: parameters.value,
      custom_parameter_1: parameters.lead_source,
      custom_parameter_2: parameters.business_type,
      ...parameters
    });
  }

  // Facebook Pixel
  if (typeof window.fbq !== 'undefined') {
    switch (eventName) {
      case 'generate_lead':
        window.fbq('track', 'Lead', parameters);
        break;
      case 'contact_form_submit':
        window.fbq('track', 'Contact', parameters);
        break;
      case 'scanner_use':
        window.fbq('track', 'CompleteRegistration', parameters);
        break;
      case 'service_inquiry':
        window.fbq('track', 'InitiateCheckout', parameters);
        break;
      default:
        window.fbq('trackCustom', eventName, parameters);
    }
  }

  // Track in our database for self-analytics
  try {
    const sessionId = `session_${Date.now()}_${Math.random()}`;
    const analyticsData = {
      page_url: window.location.pathname + window.location.search,
      page_title: document.title,
      session_id: sessionId,
      event_type: eventName,
      event_category: parameters.category || 'engagement',
      event_label: parameters.label,
      event_value: parameters.value,
      lead_source: parameters.lead_source,
      lead_score: parameters.value || 0,
      conversion_type: getConversionType(eventName),
      device_type: getDeviceType(),
      browser_name: getBrowserName(),
      os_name: getOSName(),
      country: 'Nigeria',
      state: 'Ogun State'
    };

    await analyticsHelpers.trackEvent(analyticsData);
  } catch (error) {
    console.error('Error tracking event to database:', error);
  }

  // Console log for debugging
  console.log('Event tracked:', eventName, parameters);
};

// Helper function to determine conversion type
const getConversionType = (eventName: string): string | undefined => {
  const conversionEvents = {
    'generate_lead': 'lead',
    'contact_form_submit': 'contact',
    'scanner_use': 'scanner',
    'phone_call_click': 'contact',
    'email_click': 'contact',
    'whatsapp_click': 'contact'
  };
  return conversionEvents[eventName as keyof typeof conversionEvents];
};

// Duplicate helper functions for the trackEvent function
const getDeviceType = (): string => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

const getBrowserName = (): string => {
  const ua = navigator.userAgent;
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  return 'Other';
};

const getOSName = (): string => {
  const ua = navigator.userAgent;
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS')) return 'iOS';
  return 'Other';
};

// Lead scoring function
export const calculateLeadScore = (actions: string[]) => {
  const actionScores: Record<string, number> = {
    'view_home_page': 1,
    'view_services_page': 3,
    'use_scanner': 5,
    'download_resource': 7,
    'view_contact_page': 8,
    'contact_form_submit': 10,
    'phone_call_click': 10,
    'whatsapp_click': 8
  };

  return actions.reduce((total, action) => total + (actionScores[action] || 0), 0);
};

// A/B testing helper
export const getABTestVariant = (testName: string): 'A' | 'B' => {
  const hash = Array.from(testName).reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  return Math.abs(hash) % 2 === 0 ? 'A' : 'B';
};

// Attribution tracking
export const trackAttribution = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const attribution = {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content'),
    referrer: document.referrer,
    landing_page: window.location.pathname,
    timestamp: new Date().toISOString()
  };

  // Store attribution in localStorage for future reference
  localStorage.setItem('attribution', JSON.stringify(attribution));
  
  // Track attribution event
  trackEvent('attribution_tracked', attribution);
  
  return attribution;
};

export default ConversionTracking;