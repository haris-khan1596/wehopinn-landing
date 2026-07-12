-- WeHopinn: student_inquiries table
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS student_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  university TEXT NOT NULL,
  campus TEXT NOT NULL,
  program TEXT NOT NULL,
  home_city TEXT NOT NULL,
  status TEXT DEFAULT 'new' NOT NULL,
  notes TEXT
);

ALTER TABLE student_inquiries
  ADD CONSTRAINT student_inquiries_status_check
  CHECK (status IN ('new', 'in_progress', 'completed', 'cancelled'));

CREATE INDEX IF NOT EXISTS student_inquiries_created_at_idx
  ON student_inquiries (created_at DESC);

CREATE INDEX IF NOT EXISTS student_inquiries_status_idx
  ON student_inquiries (status);

ALTER TABLE student_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON student_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role full access"
  ON student_inquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
