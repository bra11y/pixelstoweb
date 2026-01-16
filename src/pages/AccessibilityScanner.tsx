import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { Search, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import ScanResults from '../components/scanner/ScanResults';
import ScannerDashboard from '../components/scanner/ScannerDashboard';
import { scannerHelpers } from '../utils/supabase-helpers';
import { trackEvent } from '../components/ConversionTracking';

const AccessibilityScanner = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<any>(null);
  const { toast } = useToast();

  const validateUrl = (urlString: string) => {
    try {
      const urlObj = new URL(urlString);
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleScan = async () => {
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a website URL to scan",
        variant: "destructive",
      });
      return;
    }

    if (!validateUrl(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL (e.g., https://example.com)",
        variant: "destructive",
      });
      return;
    }

    setIsScanning(true);
    setScanResults(null);

    // Track scanner usage
    trackEvent('scanner_use', {
      category: 'Tool Usage',
      label: 'Accessibility Scanner Start',
      lead_source: 'Scanner',
      value: 5
    });

    try {
      // Use CORS proxy to fetch the webpage
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

      console.log('Fetching:', proxyUrl);
      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch website: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const html = data.contents;

      if (!html) {
        throw new Error('No content received from website');
      }

      console.log('HTML received, length:', html.length);

      // Parse HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Run comprehensive accessibility checks
      const basicResults = {
        url,
        contrast_issues: checkContrastIssues(doc),
        semantic_html_issues: checkSemanticHTML(doc),
        alt_text_issues: checkAltText(doc),
        aria_issues: checkAriaLabels(doc),
        form_issues: checkFormAccessibility(doc),
        heading_issues: checkHeadingStructure(doc),
      };

      // Enhanced AI-powered accessibility analysis
      const aiResults = await performAIAccessibilityAnalysis(html, url);
      
      const results = {
        ...basicResults,
        ai_recommendations: aiResults.recommendations || [],
        seo_issues: aiResults.seo_issues || [],
        performance_issues: aiResults.performance_issues || [],
      };

      // Calculate scores
      const contrastScore = Math.max(0, 100 - (results.contrast_issues.length * 5));
      const semanticScore = Math.max(0, 100 - (results.semantic_html_issues.length * 8));
      const altTextScore = Math.max(0, 100 - (results.alt_text_issues.length * 8));
      const ariaScore = Math.max(0, 100 - (results.aria_issues.length * 10));
      const formScore = Math.max(0, 100 - (results.form_issues.length * 12));
      const headingScore = Math.max(0, 100 - (results.heading_issues.length * 15));
      
      const overallScore = Math.round((contrastScore + semanticScore + altTextScore + ariaScore + formScore + headingScore) / 6);

      const scanData = {
        ...results,
        total_issues: results.contrast_issues.length + results.semantic_html_issues.length + results.alt_text_issues.length + results.aria_issues.length + results.form_issues.length + results.heading_issues.length,
        contrast_score: contrastScore,
        semantic_score: semanticScore,
        alt_text_score: altTextScore,
        aria_score: ariaScore,
        form_score: formScore,
        heading_score: headingScore,
        overall_score: overallScore,
      };

      // Save to Supabase (optional - gracefully handle if not configured)
      try {
        await scannerHelpers.createScan(scanData);
      } catch (dbError) {
        console.warn('Could not save to database:', dbError);
        // Continue anyway - scanner still works without database
      }

      setScanResults(scanData);

      // Track successful scan completion
      trackEvent('scanner_complete', {
        category: 'Tool Usage',
        label: 'Accessibility Scanner Complete',
        lead_source: 'Scanner',
        value: 10,
        total_issues: scanData.total_issues,
        overall_score: scanData.overall_score
      });
      
      toast({
        title: "Scan Complete!",
        description: `Found ${scanData.total_issues} accessibility issues`,
      });

    } catch (error: any) {
      console.error('Scan error details:', {
        message: error.message,
        stack: error.stack,
        error: error
      });

      let errorMessage = "Unable to scan the website. Please check the URL and try again.";

      if (error.message) {
        errorMessage = error.message;
      } else if (error.toString) {
        errorMessage = error.toString();
      }

      toast({
        title: "Scan Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsScanning(false);
    }
  };

  const checkContrastIssues = (doc: Document) => {
    const issues: any[] = [];
    const elements = doc.querySelectorAll('*');
    
    elements.forEach((el, index) => {
      if (index > 100) return; // Limit checks for performance
      
      const styles = window.getComputedStyle(el);
      const bgColor = styles.backgroundColor;
      const color = styles.color;
      
      // Simple contrast check (you can enhance this with actual WCAG calculations)
      if (bgColor && color && bgColor !== 'rgba(0, 0, 0, 0)') {
        const contrast = calculateContrast(color, bgColor);
        if (contrast < 4.5) {
          issues.push({
            element: el.tagName.toLowerCase(),
            issue: `Low contrast ratio: ${contrast.toFixed(2)}:1`,
            recommendation: 'Increase contrast to at least 4.5:1 for normal text',
          });
        }
      }
    });
    
    return issues.slice(0, 20); // Limit to 20 issues
  };

  const checkSemanticHTML = (doc: Document) => {
    const issues: any[] = [];
    
    // Check for heading hierarchy
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName[1]);
      if (previousLevel > 0 && level > previousLevel + 1) {
        issues.push({
          element: heading.tagName.toLowerCase(),
          issue: `Skipped heading level from H${previousLevel} to H${level}`,
          recommendation: 'Use sequential heading levels for proper document structure',
        });
      }
      previousLevel = level;
    });

    // Check for multiple H1s
    const h1Count = doc.querySelectorAll('h1').length;
    if (h1Count > 1) {
      issues.push({
        element: 'h1',
        issue: `Multiple H1 tags found (${h1Count})`,
        recommendation: 'Use only one H1 tag per page for the main heading',
      });
    }

    // Check for semantic landmarks
    const hasMain = doc.querySelector('main') !== null;
    const hasNav = doc.querySelector('nav') !== null;
    const hasHeader = doc.querySelector('header') !== null;
    const hasFooter = doc.querySelector('footer') !== null;

    if (!hasMain) {
      issues.push({
        element: 'main',
        issue: 'Missing <main> landmark',
        recommendation: 'Add a <main> element to identify the primary content',
      });
    }

    if (!hasNav) {
      issues.push({
        element: 'nav',
        issue: 'Missing <nav> landmark',
        recommendation: 'Use <nav> element for navigation sections',
      });
    }

    return issues;
  };

  const checkAltText = (doc: Document) => {
    const issues: any[] = [];
    const images = doc.querySelectorAll('img');
    
    images.forEach((img) => {
      const alt = img.getAttribute('alt');
      const src = img.getAttribute('src') || 'unknown';
      
      if (alt === null || alt === undefined) {
        issues.push({
          element: 'img',
          issue: `Missing alt attribute on image: ${src.substring(0, 50)}`,
          recommendation: 'Add descriptive alt text for all images',
        });
      } else if (alt.length > 190) {
        issues.push({
          element: 'img',
          issue: `Alt text too long (${alt.length} characters): ${src.substring(0, 50)}`,
          recommendation: 'Keep alt text under 190 characters. Use aria-describedby for longer descriptions.',
        });
      } else if (alt.trim() === '') {
        // Empty alt is okay for decorative images, but flag it
        issues.push({
          element: 'img',
          issue: `Empty alt text on image: ${src.substring(0, 50)}`,
          recommendation: 'Ensure this is a decorative image. If not, add descriptive alt text.',
        });
      }
    });
    
    return issues;
  };

  const checkAriaLabels = (doc: Document) => {
    const issues: any[] = [];
    
    // Check for form controls without labels
    const formControls = doc.querySelectorAll('input:not([type="hidden"]), select, textarea');
    formControls.forEach((control) => {
      const hasLabel = control.getAttribute('aria-label') || 
                      control.getAttribute('aria-labelledby') ||
                      doc.querySelector(`label[for="${control.id}"]`);
      
      if (!hasLabel) {
        issues.push({
          element: control.tagName.toLowerCase(),
          issue: `Form control missing accessible label: ${control.getAttribute('type') || 'text'}`,
          recommendation: 'Add aria-label, aria-labelledby, or associate with a label element',
        });
      }
    });

    // Check for buttons without accessible names
    const buttons = doc.querySelectorAll('button, [role="button"]');
    buttons.forEach((button) => {
      const hasAccessibleName = button.textContent?.trim() || 
                               button.getAttribute('aria-label') ||
                               button.getAttribute('aria-labelledby');
      
      if (!hasAccessibleName) {
        issues.push({
          element: 'button',
          issue: 'Button without accessible name',
          recommendation: 'Add text content, aria-label, or aria-labelledby',
        });
      }
    });

    return issues.slice(0, 15);
  };

  const checkFormAccessibility = (doc: Document) => {
    const issues: any[] = [];
    
    // Check for forms without fieldsets for grouped inputs
    const forms = doc.querySelectorAll('form');
    forms.forEach((form) => {
      const radioGroups = form.querySelectorAll('input[type="radio"]');
      const checkboxGroups = form.querySelectorAll('input[type="checkbox"]');
      
      if ((radioGroups.length > 1 || checkboxGroups.length > 1) && !form.querySelector('fieldset')) {
        issues.push({
          element: 'form',
          issue: 'Radio group without fieldset',
          recommendation: 'Wrap related form controls in fieldset with legend',
        });
      }
    });

    // Check for required fields without indication
    const requiredFields = doc.querySelectorAll('[required]');
    requiredFields.forEach((field) => {
      const hasRequiredIndication = field.getAttribute('aria-required') === 'true' ||
                                   field.closest('label')?.textContent?.includes('*') ||
                                   field.getAttribute('aria-describedby');
      
      if (!hasRequiredIndication) {
        issues.push({
          element: field.tagName.toLowerCase(),
          issue: 'Required field without clear indication',
          recommendation: 'Add visual and programmatic indication of required fields',
        });
      }
    });

    return issues.slice(0, 10);
  };

  const checkHeadingStructure = (doc: Document) => {
    const issues: any[] = [];
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    // Check for proper heading hierarchy
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName[1]);
      
      if (index === 0 && level !== 1) {
        issues.push({
          element: heading.tagName.toLowerCase(),
          issue: 'Page should start with H1',
          recommendation: 'Use H1 for the main page heading',
        });
      }
      
      if (level > previousLevel + 1 && previousLevel > 0) {
        issues.push({
          element: heading.tagName.toLowerCase(),
          issue: `Heading level skipped from H${previousLevel} to H${level}`,
          recommendation: 'Use sequential heading levels for proper structure',
        });
      }
      
      previousLevel = level;
    });

    // Check for empty headings
    headings.forEach((heading) => {
      if (!heading.textContent?.trim()) {
        issues.push({
          element: heading.tagName.toLowerCase(),
          issue: 'Empty heading element',
          recommendation: 'Provide meaningful heading text or remove the element',
        });
      }
    });

    return issues.slice(0, 8);
  };

  const performAIAccessibilityAnalysis = async (html: string, url: string) => {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        console.warn('Gemini API key not found, skipping AI analysis');
        return { recommendations: [], seo_issues: [], performance_issues: [] };
      }

      const prompt = `Analyze this HTML for accessibility, SEO, and performance issues. Provide specific, actionable recommendations.

Website URL: ${url}

HTML Content (first 8000 chars):
${html.substring(0, 8000)}

Please provide a JSON response with:
{
  "recommendations": [{"type": "accessibility", "issue": "description", "solution": "specific fix"}],
  "seo_issues": [{"issue": "description", "impact": "high/medium/low", "fix": "solution"}],
  "performance_issues": [{"issue": "description", "impact": "description", "solution": "fix"}]
}`;

      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': apiKey,
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt
                  }
                ]
              }
            ]
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.statusText}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (text) {
        try {
          // Extract JSON from the response
          const jsonMatch = text.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
          }
        } catch (parseError) {
          console.error('Error parsing AI response:', parseError);
        }
      }

      return { recommendations: [], seo_issues: [], performance_issues: [] };
    } catch (error) {
      console.error('AI analysis error:', error);
      return { recommendations: [], seo_issues: [], performance_issues: [] };
    }
  };

  const calculateContrast = (color1: string, color2: string): number => {
    // Parse RGB values from color strings
    const parseColor = (color: string) => {
      if (color.startsWith('rgb')) {
        const matches = color.match(/\d+/g);
        return matches ? matches.map(Number) : [0, 0, 0];
      }
      return [0, 0, 0]; // Default fallback
    };

    const [r1, g1, b1] = parseColor(color1);
    const [r2, g2, b2] = parseColor(color2);

    // Calculate relative luminance
    const getLuminance = (r: number, g: number, b: number) => {
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const l1 = getLuminance(r1, g1, b1);
    const l2 = getLuminance(r2, g2, b2);

    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);

    return (lighter + 0.05) / (darker + 0.05);
  };

  return (
    <>
      <SEO 
        title="Free Website Accessibility Scanner | WCAG Compliance Checker | PixelsToWeb"
        description="Free AI-powered accessibility scanner for Canadian websites. Check WCAG compliance, color contrast, alt text, and semantic HTML. Get instant accessibility reports and recommendations."
        keywords="accessibility scanner Canada, WCAG compliance checker, website accessibility audit, color contrast checker Canada, alt text analyzer, semantic HTML validator, free accessibility tools Canada"
        canonical="https://pixelstoweb.com/scanner"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <Header />
      
      <main id="main-content" className="pt-24 pb-16 relative z-10">
        <div className="container-tight mx-auto px-6 py-20">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 mb-6 shadow-2xl">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Accessibility Scanner
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
              Get instant insights into your website's accessibility. Understand where users might struggle and discover opportunities to improve inclusivity.
            </p>
          </div>

          {/* Search Bar - Left aligned */}
          <div className="mb-20">
            <Card className="p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden group hover:shadow-cyan-500/25 transition-all duration-500">
              {/* Glass morphism effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <Input
                      type="url"
                      placeholder="Enter website URL (e.g., https://example.com)"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                      className="h-16 text-lg px-6 bg-white/10 border-2 border-white/20 focus:border-cyan-400 rounded-2xl text-white placeholder-white/70 backdrop-blur-sm transition-all duration-300"
                      disabled={isScanning}
                    />
                  </div>
                  <Button
                    onClick={handleScan}
                    disabled={isScanning}
                    className="h-16 px-10 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 border-0"
                  >
                    {isScanning ? (
                      <>
                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        <Search className="mr-3 h-6 w-6" />
                        Scan Website
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Results Section - Enhanced Bento Grid Layout */}
          {scanResults && (
            <div className="space-y-12">
              <ScannerDashboard results={scanResults} />
              <ScanResults results={scanResults} />
            </div>
          )}

          {/* Enhanced Empty State */}
          {!scanResults && !isScanning && (
            <div className="text-center py-20">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl">
                  <Search className="w-16 h-16 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to scan your website?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Enter a URL above to check for accessibility issues and get practical recommendations
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contrast Analysis</h3>
                  <p className="text-slate-300 text-sm">Check color contrast ratios for WCAG compliance</p>
                </div>
                
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">&lt;&gt;</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Semantic HTML</h3>
                  <p className="text-slate-300 text-sm">Validate proper HTML structure and landmarks</p>
                </div>
                
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">🖼</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Alt Text Review</h3>
                  <p className="text-slate-300 text-sm">Ensure all images have proper descriptions</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

        <Footer />
      </div>
    </>
  );
};

export default AccessibilityScanner;
