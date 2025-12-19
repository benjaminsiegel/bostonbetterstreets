import { createClient } from "@supabase/supabase-js";

// These should be set in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export interface DbPainPoint {
  id: string;
  title: string;
  type: string;
  severity: string;
  location: string;
  neighborhood: string;
  description: string;
  latitude: number;
  longitude: number;
  reported_date: string;
  report_count: number;
  verified: boolean;
  related_project_id?: string;
  created_at: string;
  updated_at: string;
}

export interface DbPainPointReport {
  id: string;
  pain_point_id?: string;
  title: string;
  type: string;
  severity: string;
  location: string;
  neighborhood: string;
  description: string;
  latitude: number;
  longitude: number;
  reporter_email?: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}

export interface DbProject {
  id: string;
  name: string;
  slug: string;
  location: string;
  neighborhood: string;
  status: string;
  description: string;
  short_description: string;
  start_year: number;
  expected_completion?: string;
  actual_completion?: string;
  latitude: number;
  longitude: number;
  featured: boolean;
  community_impact: string;
  created_at: string;
  updated_at: string;
}

export interface DbUpdate {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  type: string;
  date: string;
  author: string;
  related_project_id?: string;
  featured: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

// Helper functions for database operations
export async function getPainPoints() {
  const { data, error } = await supabase
    .from("pain_points")
    .select("*")
    .eq("verified", true)
    .order("report_count", { ascending: false });

  if (error) {
    console.error("Error fetching pain points:", error);
    return [];
  }

  return data as DbPainPoint[];
}

export async function submitPainPointReport(report: Omit<DbPainPointReport, "id" | "created_at" | "status">) {
  const { data, error } = await supabase
    .from("pain_point_reports")
    .insert([{ ...report, status: "pending" }])
    .select();

  if (error) {
    console.error("Error submitting pain point report:", error);
    throw error;
  }

  return data[0] as DbPainPointReport;
}

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("start_year", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data as DbProject[];
}

export async function getUpdates() {
  const { data, error } = await supabase
    .from("updates")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching updates:", error);
    return [];
  }

  return data as DbUpdate[];
}

export async function subscribeToNewsletter(email: string) {
  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert([{ email, subscribed_at: new Date().toISOString() }]);

  if (error) {
    if (error.code === "23505") {
      // Unique constraint violation - email already exists
      throw new Error("This email is already subscribed.");
    }
    console.error("Error subscribing to newsletter:", error);
    throw error;
  }

  return true;
}
