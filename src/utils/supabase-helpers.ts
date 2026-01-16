// Temporary helper functions to work with tables not yet in the generated types
// After running the SQL schema, regenerate types with:
// npx supabase gen types typescript --project-id itzjlkzynwsrvnncjuvq > src/integrations/supabase/types.ts

import { supabase } from '../integrations/supabase/client';

export interface AccessibilityScan {
  id?: string;
  url: string;
  scan_date?: string;
  contrast_issues: any[];
  semantic_html_issues: any[];
  alt_text_issues: any[];
  total_issues: number;
  contrast_score: number;
  semantic_score: number;
  alt_text_score: number;
  overall_score: number;
  created_at?: string;
}

export interface SearchIndexItem {
  id?: string;
  title: string;
  content: string;
  url: string;
  type: 'page' | 'event' | 'blog' | 'resource';
  metadata?: any;
  created_at?: string;
  updated_at?: string;
}

export interface SearchHistoryItem {
  id?: string;
  query: string;
  results_count: number;
  session_id: string;
  created_at?: string;
}

export interface WebsiteAnalytics {
  id?: string;
  page_url: string;
  page_title?: string;
  user_agent?: string;
  referrer_url?: string;
  session_id: string;
  user_ip?: string;
  page_load_time?: number;
  time_on_page?: number;
  scroll_depth?: number;
  bounce_rate?: boolean;
  event_type?: string;
  event_category?: string;
  event_label?: string;
  event_value?: number;
  lead_source?: string;
  lead_score?: number;
  conversion_type?: string;
  search_keywords?: string[];
  content_engagement?: any;
  page_size?: number;
  resource_count?: number;
  accessibility_score?: number;
  seo_score?: number;
  performance_score?: number;
  device_type?: string;
  browser_name?: string;
  os_name?: string;
  country?: string;
  state?: string;
  city?: string;
  created_at?: string;
  updated_at?: string;
}

export interface SEORanking {
  id?: string;
  keyword: string;
  domain: string;
  search_engine?: string;
  location?: string;
  position?: number;
  previous_position?: number;
  position_change?: number;
  search_volume?: number;
  competition_level?: string;
  ranking_url?: string;
  page_title?: string;
  meta_description?: string;
  clicks?: number;
  impressions?: number;
  ctr?: number;
  avg_position?: number;
  week_number?: number;
  month_year?: string;
  created_at?: string;
}

export interface ImprovementSuggestion {
  id?: string;
  analysis_type: string;
  data_period: any;
  performance_insights?: any;
  seo_recommendations?: any;
  conversion_suggestions?: any;
  technical_improvements?: any;
  content_recommendations?: any;
  implementation_status?: string;
  priority_level?: string;
  estimated_impact?: number;
  implemented_at?: string;
  results_measured_at?: string;
  actual_impact?: number;
  created_at?: string;
}

// Helper functions with type assertions
export const scannerHelpers = {
  async createScan(scan: AccessibilityScan) {
    const { data, error } = await (supabase as any)
      .from('accessibility_scans')
      .insert([scan])
      .select()
      .single();
    
    return { data, error };
  },

  async getRecentScans(limit = 10) {
    const { data, error } = await (supabase as any)
      .from('accessibility_scans')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
    
    return { data, error };
  },

  async getScansByUrl(url: string) {
    const { data, error } = await (supabase as any)
      .from('accessibility_scans')
      .select('*')
      .eq('url', url)
      .order('created_at', { ascending: false });
    
    return { data, error };
  }
};

export const searchHelpers = {
  async searchContent(query: string, limit = 20) {
    const { data, error } = await (supabase as any)
      .from('search_index')
      .select('*')
      .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
      .limit(limit);
    
    return { data, error };
  },

  async addToSearchHistory(history: SearchHistoryItem) {
    const { data, error } = await (supabase as any)
      .from('search_history')
      .insert([history]);
    
    return { data, error };
  },

  async getSearchHistory(sessionId: string, limit = 5) {
    const { data, error } = await (supabase as any)
      .from('search_history')
      .select('query')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: false })
      .limit(limit);
    
    return { data, error };
  },

  async addToSearchIndex(item: SearchIndexItem) {
    const { data, error } = await (supabase as any)
      .from('search_index')
      .insert([item])
      .select()
      .single();
    
    return { data, error };
  },

  async updateSearchIndex(id: string, updates: Partial<SearchIndexItem>) {
    const { data, error } = await (supabase as any)
      .from('search_index')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    return { data, error };
  }
};


// Analytics helpers for self-improvement system
export const analyticsHelpers = {
  async trackEvent(analytics: WebsiteAnalytics) {
    const { data, error } = await (supabase as any)
      .from('website_analytics')
      .insert([analytics]);
    
    return { data, error };
  },

  async getAnalyticsByDateRange(startDate: string, endDate: string) {
    const { data, error } = await (supabase as any)
      .from('website_analytics')
      .select('*')
      .gte('created_at', startDate)
      .lte('created_at', endDate)
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  async getConversionData(days = 7) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const { data, error } = await (supabase as any)
      .from('website_analytics')
      .select('*')
      .not('conversion_type', 'is', null)
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false });
    
    return { data, error };
  }
};


// SEO helpers for rankings tracking
export const seoHelpers = {
  async addRanking(ranking: SEORanking) {
    const { data, error } = await (supabase as any)
      .from('seo_rankings')
      .insert([ranking]);
    
    return { data, error };
  },

  async getRankingsByDomain(domain: string, limit = 50) {
    const { data, error } = await (supabase as any)
      .from('seo_rankings')
      .select('*')
      .eq('domain', domain)
      .order('created_at', { ascending: false })
      .limit(limit);
    
    return { data, error };
  },

  async getWeeklyRankings(weekNumber: number) {
    const { data, error } = await (supabase as any)
      .from('seo_rankings')
      .select('*')
      .eq('week_number', weekNumber)
      .order('position', { ascending: true });
    
    return { data, error };
  },

  async getKeywordProgress(keyword: string, domain: string, weeks = 12) {
    const { data, error } = await (supabase as any)
      .from('seo_rankings')
      .select('*')
      .eq('keyword', keyword)
      .eq('domain', domain)
      .order('created_at', { ascending: true })
      .limit(weeks);
    
    return { data, error };
  }
};

// Improvement suggestions helpers
export const improvementHelpers = {
  async addSuggestion(suggestion: ImprovementSuggestion) {
    const { data, error } = await (supabase as any)
      .from('improvement_suggestions')
      .insert([suggestion]);
    
    return { data, error };
  },

  async getPendingSuggestions() {
    const { data, error } = await (supabase as any)
      .from('improvement_suggestions')
      .select('*')
      .eq('implementation_status', 'pending')
      .order('priority_level', { ascending: false })
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  async updateSuggestionStatus(id: string, status: string, implementedAt?: string) {
    const updates: any = { implementation_status: status };
    if (implementedAt) {
      updates.implemented_at = implementedAt;
    }

    const { data, error } = await (supabase as any)
      .from('improvement_suggestions')
      .update(updates)
      .eq('id', id);
    
    return { data, error };
  },

  async getImplementedSuggestions() {
    const { data, error } = await (supabase as any)
      .from('improvement_suggestions')
      .select('*')
      .eq('implementation_status', 'completed')
      .order('implemented_at', { ascending: false });
    
    return { data, error };
  }
};
