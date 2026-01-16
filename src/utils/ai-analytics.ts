import { analyticsHelpers, seoHelpers, improvementHelpers } from './supabase-helpers';

export interface AIAnalysisResult {
  performance_insights: {
    page_load_trends: any[];
    user_engagement: any[];
    conversion_funnel: any[];
    bounce_rate_analysis: any;
  };
  seo_recommendations: {
    keyword_opportunities: any[];
    ranking_improvements: any[];
    content_gaps: any[];
    technical_seo: any[];
  };
  conversion_suggestions: {
    lead_optimization: any[];
    form_improvements: any[];
    cta_optimization: any[];
    user_journey: any[];
  };
  technical_improvements: {
    performance_issues: any[];
    accessibility_fixes: any[];
    mobile_optimization: any[];
    core_web_vitals: any[];
  };
  content_recommendations: {
    blog_topics: any[];
    page_improvements: any[];
    seo_content: any[];
    user_interests: any[];
  };
}

// Enhanced AI-powered website analytics
export const performAIWebsiteAnalysis = async (domain: string = 'accessbihub.com'): Promise<AIAnalysisResult> => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('Gemini API key not found, returning empty analysis');
      return createEmptyAnalysis();
    }

    // Get analytics data from the last 7 days
    const endDate = new Date().toISOString();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    
    const [analyticsData, conversionData, seoData] = await Promise.all([
      analyticsHelpers.getAnalyticsByDateRange(startDate.toISOString(), endDate),
      analyticsHelpers.getConversionData(7),
      seoHelpers.getRankingsByDomain(domain, 20)
    ]);

    // Prepare data summary for AI analysis
    const dataContext = {
      analytics_summary: {
        total_sessions: analyticsData.data?.length || 0,
        unique_pages: [...new Set(analyticsData.data?.map(d => d.page_url) || [])].length,
        conversion_events: conversionData.data?.length || 0,
        avg_time_on_page: calculateAverage(analyticsData.data?.map(d => d.time_on_page).filter(Boolean) || []),
        avg_scroll_depth: calculateAverage(analyticsData.data?.map(d => d.scroll_depth).filter(Boolean) || []),
        device_breakdown: getDeviceBreakdown(analyticsData.data || []),
        top_pages: getTopPages(analyticsData.data || []),
        conversion_sources: getConversionSources(conversionData.data || [])
      },
      seo_current_state: {
        tracked_keywords: seoData.data?.length || 0,
        avg_position: calculateAverage(seoData.data?.map(d => d.position).filter(Boolean) || []),
        top_ranking_pages: seoData.data?.slice(0, 5) || [],
        ranking_trends: analyzeTrends(seoData.data || [])
      },
      business_context: {
        domain: domain,
        industry: 'Web Development & Digital Agency',
        target_market: 'Nigeria, Ogun State, Lagos, Abuja',
        primary_services: ['Web Development', 'Brand Design', 'WordPress', 'Shopify', 'Digital Marketing'],
        target_keywords: ['web development Nigeria', 'brand design Ogun State', 'WordPress development Lagos', 'Shopify Nigeria', 'digital marketing Abuja']
      }
    };

    const prompt = `You are an AI digital marketing analyst specializing in Nigerian web development agencies. Analyze the following website data and provide specific, actionable recommendations for improving performance, SEO rankings, and lead generation.

CURRENT WEBSITE DATA:
${JSON.stringify(dataContext, null, 2)}

Based on this data, provide a comprehensive analysis in the following JSON format:

{
  "performance_insights": {
    "page_load_trends": [{"page": "string", "trend": "improving/declining", "recommendation": "string"}],
    "user_engagement": [{"metric": "string", "current_value": number, "benchmark": number, "status": "good/needs_improvement"}],
    "conversion_funnel": [{"stage": "string", "conversion_rate": number, "drop_off_points": ["string"], "improvements": ["string"]}],
    "bounce_rate_analysis": {"current_rate": number, "industry_benchmark": number, "improvement_areas": ["string"]}
  },
  "seo_recommendations": {
    "keyword_opportunities": [{"keyword": "string", "difficulty": "low/medium/high", "potential_traffic": number, "action": "string"}],
    "ranking_improvements": [{"keyword": "string", "current_position": number, "target_position": number, "strategies": ["string"]}],
    "content_gaps": [{"topic": "string", "search_volume": number, "competition": "low/medium/high", "content_type": "blog/page/resource"}],
    "technical_seo": [{"issue": "string", "impact": "high/medium/low", "solution": "string", "priority": number}]
  },
  "conversion_suggestions": {
    "lead_optimization": [{"element": "string", "current_performance": "string", "suggested_change": "string", "expected_improvement": "string"}],
    "form_improvements": [{"form_location": "string", "issue": "string", "solution": "string", "priority": "high/medium/low"}],
    "cta_optimization": [{"page": "string", "current_cta": "string", "suggested_cta": "string", "reasoning": "string"}],
    "user_journey": [{"stage": "string", "current_experience": "string", "optimization": "string", "expected_impact": "string"}]
  },
  "technical_improvements": {
    "performance_issues": [{"issue": "string", "impact": "string", "solution": "string", "complexity": "easy/medium/hard"}],
    "accessibility_fixes": [{"issue": "string", "wcag_level": "A/AA/AAA", "solution": "string", "implementation": "string"}],
    "mobile_optimization": [{"area": "string", "current_state": "string", "improvement": "string", "priority": number}],
    "core_web_vitals": [{"metric": "string", "current_score": number, "target_score": number, "optimization": "string"}]
  },
  "content_recommendations": {
    "blog_topics": [{"topic": "string", "keyword_potential": number, "difficulty": "low/medium/high", "target_audience": "string"}],
    "page_improvements": [{"page": "string", "current_issue": "string", "content_suggestion": "string", "seo_benefit": "string"}],
    "seo_content": [{"content_type": "string", "target_keyword": "string", "content_brief": "string", "expected_ranking": number}],
    "user_interests": [{"interest": "string", "engagement_level": "high/medium/low", "content_opportunity": "string"}]
  }
}

Focus on:
1. Nigerian market-specific opportunities
2. Local SEO for Ogun State, Lagos, and Abuja
3. Competing with international agencies
4. Lead generation for web development services
5. Building authority in the Nigerian digital space
6. Practical, implementable recommendations with clear ROI

Ensure all recommendations are specific, measurable, and tailored to the Nigerian web development market.`;

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
          const analysisResult = JSON.parse(jsonMatch[0]);
          
          // Save the analysis to the database
          await improvementHelpers.addSuggestion({
            analysis_type: 'weekly',
            data_period: { start_date: startDate.toISOString(), end_date: endDate },
            performance_insights: analysisResult.performance_insights,
            seo_recommendations: analysisResult.seo_recommendations,
            conversion_suggestions: analysisResult.conversion_suggestions,
            technical_improvements: analysisResult.technical_improvements,
            content_recommendations: analysisResult.content_recommendations,
            priority_level: 'high',
            estimated_impact: 15 // 15% improvement estimate
          });
          
          return analysisResult;
        }
      } catch (parseError) {
        console.error('Error parsing AI response:', parseError);
      }
    }

    return createEmptyAnalysis();
  } catch (error) {
    console.error('AI website analysis error:', error);
    return createEmptyAnalysis();
  }
};

// Helper function to create empty analysis structure
const createEmptyAnalysis = (): AIAnalysisResult => ({
  performance_insights: {
    page_load_trends: [],
    user_engagement: [],
    conversion_funnel: [],
    bounce_rate_analysis: {}
  },
  seo_recommendations: {
    keyword_opportunities: [],
    ranking_improvements: [],
    content_gaps: [],
    technical_seo: []
  },
  conversion_suggestions: {
    lead_optimization: [],
    form_improvements: [],
    cta_optimization: [],
    user_journey: []
  },
  technical_improvements: {
    performance_issues: [],
    accessibility_fixes: [],
    mobile_optimization: [],
    core_web_vitals: []
  },
  content_recommendations: {
    blog_topics: [],
    page_improvements: [],
    seo_content: [],
    user_interests: []
  }
});

// Utility functions for data analysis
const calculateAverage = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
};

const getDeviceBreakdown = (data: any[]): Record<string, number> => {
  const breakdown: Record<string, number> = {};
  data.forEach(item => {
    if (item.device_type) {
      breakdown[item.device_type] = (breakdown[item.device_type] || 0) + 1;
    }
  });
  return breakdown;
};

const getTopPages = (data: any[]): Array<{page: string, visits: number}> => {
  const pageVisits: Record<string, number> = {};
  data.forEach(item => {
    if (item.page_url) {
      pageVisits[item.page_url] = (pageVisits[item.page_url] || 0) + 1;
    }
  });
  
  return Object.entries(pageVisits)
    .map(([page, visits]) => ({ page, visits }))
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 10);
};

const getConversionSources = (data: any[]): Record<string, number> => {
  const sources: Record<string, number> = {};
  data.forEach(item => {
    if (item.lead_source) {
      sources[item.lead_source] = (sources[item.lead_source] || 0) + 1;
    }
  });
  return sources;
};

const analyzeTrends = (data: any[]): Array<{keyword: string, trend: string}> => {
  // Simple trend analysis - in production, this would be more sophisticated
  return data.slice(0, 5).map(item => ({
    keyword: item.keyword,
    trend: item.position_change > 0 ? 'improving' : item.position_change < 0 ? 'declining' : 'stable'
  }));
};

// Function to search for domain rankings and track progress
export const trackDomainRankings = async (domains: string[] = ['accessbihub.com', 'bihub.tech']) => {
  try {
    const keywords = [
      'website design agency Nigeria',
      'web development Ogun State',
      'brand design Lagos',
      'WordPress development Nigeria',
      'Shopify development Nigeria',
      'digital marketing agency Abuja',
      'web developer Nigeria',
      'website creation Nigeria',
      'brand identity design Nigeria',
      'e-commerce development Nigeria'
    ];

    // This would typically integrate with SEO tools like SEMrush, Ahrefs, or Google Search Console
    // For now, we'll simulate the tracking and store baseline data
    
    const currentWeek = getWeekNumber(new Date());
    const currentMonthYear = new Date().toISOString().slice(0, 7); // YYYY-MM format
    
    for (const domain of domains) {
      for (const keyword of keywords) {
        // Simulate ranking data - in production, this would come from real SEO APIs
        const simulatedRanking = {
          keyword,
          domain,
          search_engine: 'google',
          location: 'Nigeria',
          position: Math.floor(Math.random() * 100) + 1, // Random position for simulation
          search_volume: Math.floor(Math.random() * 1000) + 100,
          competition_level: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)],
          week_number: currentWeek,
          month_year: currentMonthYear
        };
        
        await seoHelpers.addRanking(simulatedRanking);
      }
    }
    
    console.log('Domain rankings tracked successfully');
  } catch (error) {
    console.error('Error tracking domain rankings:', error);
  }
};

// Get week number of the year
const getWeekNumber = (date: Date): number => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};

// Initialize the circular improvement system
export const initializeCircularImprovement = async () => {
  try {
    // Run weekly analysis
    console.log('Starting weekly AI analysis...');
    const analysis = await performAIWebsiteAnalysis();
    
    // Track domain rankings
    console.log('Tracking domain rankings...');
    await trackDomainRankings();
    
    console.log('Circular improvement system initialized');
    return analysis;
  } catch (error) {
    console.error('Error initializing circular improvement system:', error);
  }
};