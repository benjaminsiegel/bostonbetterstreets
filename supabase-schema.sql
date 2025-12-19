-- Supabase Schema for Boston Better Streets Coalition
-- Run this in your Supabase SQL Editor to set up the database

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects Table (created first because other tables reference it)
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  location TEXT NOT NULL,
  neighborhood TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('stalled', 'in-progress', 'promised', 'completed', 'cancelled')),
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  start_year INTEGER NOT NULL,
  expected_completion TEXT,
  actual_completion TEXT,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  featured BOOLEAN DEFAULT false,
  community_impact TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pain Points Table (verified, public-facing pain points)
CREATE TABLE pain_points (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('dangerous-crossing', 'missing-sidewalk', 'no-bike-lane', 'speeding', 'poor-lighting', 'blocked-accessibility', 'dangerous-intersection', 'bus-stop-hazard')),
  severity TEXT NOT NULL CHECK (severity IN ('critical', 'high', 'medium', 'low')),
  location TEXT NOT NULL,
  neighborhood TEXT NOT NULL,
  description TEXT NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  reported_date DATE NOT NULL DEFAULT CURRENT_DATE,
  report_count INTEGER DEFAULT 1,
  verified BOOLEAN DEFAULT false,
  related_project_id UUID REFERENCES projects(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pain Point Reports Table (user submissions awaiting moderation)
CREATE TABLE pain_point_reports (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  pain_point_id UUID REFERENCES pain_points(id),
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  severity TEXT NOT NULL,
  location TEXT NOT NULL,
  neighborhood TEXT NOT NULL,
  description TEXT NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  reporter_email TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Project Timeline Events Table
CREATE TABLE project_timeline (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  date TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('started', 'paused', 'resumed', 'milestone', 'setback', 'tragedy', 'stalled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Project Key Issues Table
CREATE TABLE project_issues (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  issue TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Updates/Blog Table
CREATE TABLE updates (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('news', 'action-alert', 'victory', 'setback', 'event')),
  date DATE NOT NULL,
  author TEXT NOT NULL,
  related_project_id UUID REFERENCES projects(id),
  featured BOOLEAN DEFAULT false,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter Subscribers Table
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  active BOOLEAN DEFAULT true
);

-- Create indexes for common queries
CREATE INDEX idx_pain_points_verified ON pain_points(verified);
CREATE INDEX idx_pain_points_severity ON pain_points(severity);
CREATE INDEX idx_pain_points_type ON pain_points(type);
CREATE INDEX idx_pain_points_neighborhood ON pain_points(neighborhood);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_slug ON projects(slug);
CREATE INDEX idx_updates_slug ON updates(slug);
CREATE INDEX idx_updates_date ON updates(date);
CREATE INDEX idx_updates_type ON updates(type);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE pain_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE pain_point_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Public read access for verified pain points
CREATE POLICY "Public can view verified pain points" ON pain_points
  FOR SELECT USING (verified = true);

-- Anyone can submit pain point reports
CREATE POLICY "Anyone can submit pain point reports" ON pain_point_reports
  FOR INSERT WITH CHECK (true);

-- Public read access for projects
CREATE POLICY "Public can view projects" ON projects
  FOR SELECT USING (true);

-- Public read access for project timeline
CREATE POLICY "Public can view project timeline" ON project_timeline
  FOR SELECT USING (true);

-- Public read access for project issues
CREATE POLICY "Public can view project issues" ON project_issues
  FOR SELECT USING (true);

-- Public read access for updates
CREATE POLICY "Public can view updates" ON updates
  FOR SELECT USING (true);

-- Anyone can subscribe to newsletter
CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_pain_points_updated_at
  BEFORE UPDATE ON pain_points
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_updates_updated_at
  BEFORE UPDATE ON updates
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
