-- Accessibility Scanner Results Table
CREATE TABLE IF NOT EXISTS accessibility_scans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  scan_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Scan Results
  contrast_issues JSONB DEFAULT '[]'::jsonb,
  semantic_html_issues JSONB DEFAULT '[]'::jsonb,
  alt_text_issues JSONB DEFAULT '[]'::jsonb,
  
  -- Summary Stats
  total_issues INTEGER DEFAULT 0,
  contrast_score INTEGER DEFAULT 0,
  semantic_score INTEGER DEFAULT 0,
  alt_text_score INTEGER DEFAULT 0,
  overall_score INTEGER DEFAULT 0,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_accessibility_scans_url ON accessibility_scans(url);
CREATE INDEX IF NOT EXISTS idx_accessibility_scans_created_at ON accessibility_scans(created_at);

-- Search Index Table
CREATE TABLE IF NOT EXISTS search_index (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  url TEXT NOT NULL,
  type TEXT NOT NULL, -- 'page', 'event', 'blog', 'resource'
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Full text search index
CREATE INDEX IF NOT EXISTS idx_search_index_title ON search_index USING gin(to_tsvector('english', title));
CREATE INDEX IF NOT EXISTS idx_search_index_content ON search_index USING gin(to_tsvector('english', content));
CREATE INDEX IF NOT EXISTS idx_search_index_type ON search_index(type);

-- Search History Table
CREATE TABLE IF NOT EXISTS search_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  query TEXT NOT NULL,
  results_count INTEGER DEFAULT 0,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_search_history_session ON search_history(session_id);
CREATE INDEX IF NOT EXISTS idx_search_history_created_at ON search_history(created_at);

-- Function to delete old scans (>30 days)
CREATE OR REPLACE FUNCTION delete_old_scans()
RETURNS void AS $$
BEGIN
  DELETE FROM accessibility_scans
  WHERE created_at < NOW() - INTERVAL '30 days';
END;
$$ LANGUAGE plpgsql;

-- Enable Row Level Security (RLS)
ALTER TABLE accessibility_scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_index ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_history ENABLE ROW LEVEL SECURITY;

-- Policies for public access (no auth required)
CREATE POLICY "Allow public read access to scans" ON accessibility_scans
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert to scans" ON accessibility_scans
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access to search index" ON search_index
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert to search history" ON search_history
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access to search history" ON search_history
  FOR SELECT USING (true);

-- Website Analytics Table for Self-Improvement
CREATE TABLE IF NOT EXISTS website_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Page and User Data
  page_url TEXT NOT NULL,
  page_title TEXT,
  user_agent TEXT,
  referrer_url TEXT,
  session_id TEXT NOT NULL,
  user_ip INET,
  
  -- Performance Metrics
  page_load_time INTEGER, -- milliseconds
  time_on_page INTEGER, -- seconds
  scroll_depth NUMERIC(5,2), -- percentage 0-100
  bounce_rate BOOLEAN DEFAULT false,
  
  -- Conversion Events
  event_type TEXT, -- 'page_view', 'form_submit', 'phone_click', 'email_click', 'scanner_use', etc.
  event_category TEXT,
  event_label TEXT,
  event_value INTEGER DEFAULT 0,
  
  -- Lead Generation Data
  lead_source TEXT,
  lead_score INTEGER DEFAULT 0,
  conversion_type TEXT, -- 'lead', 'contact', 'scanner', 'download'
  
  -- SEO and Content Performance
  search_keywords TEXT[],
  content_engagement JSONB DEFAULT '{}'::jsonb, -- clicks, shares, time spent sections
  
  -- Technical SEO Data
  page_size INTEGER, -- bytes
  resource_count INTEGER,
  accessibility_score INTEGER,
  seo_score INTEGER,
  performance_score INTEGER,
  
  -- Device and Location
  device_type TEXT, -- 'desktop', 'mobile', 'tablet'
  browser_name TEXT,
  os_name TEXT,
  country TEXT DEFAULT 'Nigeria',
  state TEXT,
  city TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for analytics queries
CREATE INDEX IF NOT EXISTS idx_analytics_session ON website_analytics(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_page_url ON website_analytics(page_url);
CREATE INDEX IF NOT EXISTS idx_analytics_event_type ON website_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON website_analytics(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_lead_source ON website_analytics(lead_source);
CREATE INDEX IF NOT EXISTS idx_analytics_conversion_type ON website_analytics(conversion_type);

-- SEO Rankings Tracking Table
CREATE TABLE IF NOT EXISTS seo_rankings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Keyword and Domain Data
  keyword TEXT NOT NULL,
  domain TEXT NOT NULL, -- 'accessbihub.com' or 'bihub.tech'
  search_engine TEXT DEFAULT 'google',
  location TEXT DEFAULT 'Nigeria',
  
  -- Ranking Data
  position INTEGER,
  previous_position INTEGER,
  position_change INTEGER,
  search_volume INTEGER,
  competition_level TEXT, -- 'low', 'medium', 'high'
  
  -- Page Data
  ranking_url TEXT,
  page_title TEXT,
  meta_description TEXT,
  
  -- Performance Metrics
  clicks INTEGER DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  ctr NUMERIC(5,2), -- click-through rate
  avg_position NUMERIC(5,2),
  
  -- Weekly tracking for circular improvement
  week_number INTEGER,
  month_year TEXT, -- 'YYYY-MM' format
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for SEO rankings
CREATE INDEX IF NOT EXISTS idx_seo_rankings_keyword ON seo_rankings(keyword);
CREATE INDEX IF NOT EXISTS idx_seo_rankings_domain ON seo_rankings(domain);
CREATE INDEX IF NOT EXISTS idx_seo_rankings_week ON seo_rankings(week_number);
CREATE INDEX IF NOT EXISTS idx_seo_rankings_created_at ON seo_rankings(created_at);

-- Website Improvement Suggestions Table (AI Generated)
CREATE TABLE IF NOT EXISTS improvement_suggestions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Analysis Data
  analysis_type TEXT NOT NULL, -- 'weekly', 'monthly', 'triggered'
  data_period JSONB NOT NULL, -- date range analyzed
  
  -- AI Generated Insights
  performance_insights JSONB DEFAULT '{}'::jsonb,
  seo_recommendations JSONB DEFAULT '{}'::jsonb,
  conversion_suggestions JSONB DEFAULT '{}'::jsonb,
  technical_improvements JSONB DEFAULT '{}'::jsonb,
  content_recommendations JSONB DEFAULT '{}'::jsonb,
  
  -- Implementation Status
  implementation_status TEXT DEFAULT 'pending', -- 'pending', 'in_progress', 'completed'
  priority_level TEXT DEFAULT 'medium', -- 'low', 'medium', 'high', 'critical'
  estimated_impact NUMERIC(5,2), -- percentage improvement expected
  
  -- Tracking
  implemented_at TIMESTAMP WITH TIME ZONE,
  results_measured_at TIMESTAMP WITH TIME ZONE,
  actual_impact NUMERIC(5,2), -- actual improvement achieved
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for improvement suggestions
CREATE INDEX IF NOT EXISTS idx_improvement_analysis_type ON improvement_suggestions(analysis_type);
CREATE INDEX IF NOT EXISTS idx_improvement_status ON improvement_suggestions(implementation_status);
CREATE INDEX IF NOT EXISTS idx_improvement_priority ON improvement_suggestions(priority_level);
CREATE INDEX IF NOT EXISTS idx_improvement_created_at ON improvement_suggestions(created_at);

-- RLS for new tables
ALTER TABLE website_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_rankings ENABLE ROW LEVEL SECURITY;
ALTER TABLE improvement_suggestions ENABLE ROW LEVEL SECURITY;

-- Policies for analytics tables
CREATE POLICY "Allow public insert to analytics" ON website_analytics
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access to analytics" ON website_analytics
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert to seo rankings" ON seo_rankings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access to seo rankings" ON seo_rankings
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to improvements" ON improvement_suggestions
  FOR SELECT USING (true);
