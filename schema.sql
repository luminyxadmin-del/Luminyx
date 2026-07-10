-- Enable UUID generation function
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now(),
  full_name text NOT NULL,
  work_email text NOT NULL,
  organisation text,
  how_can_we_help text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  notes text
);

-- Partner form submissions
CREATE TABLE IF NOT EXISTS partner_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now(),
  organisation text NOT NULL,
  sector text NOT NULL,
  work_email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  notes text
);

-- Indexes to speed up admin queries
CREATE INDEX IF NOT EXISTS idx_contact_status_created_at ON contact_submissions (status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_partner_status_created_at ON partner_submissions (status, created_at DESC);

-- Attachments for submissions (store file metadata; actual files should use Supabase Storage)
CREATE TABLE IF NOT EXISTS submission_attachments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now(),
  submission_type text NOT NULL CHECK (submission_type IN ('contact', 'partner')),
  submission_id uuid NOT NULL,
  storage_path text NOT NULL,
  filename text,
  content_type text,
  file_size bigint,
  uploaded_by uuid -- optional: could link to auth.user id
);

CREATE INDEX IF NOT EXISTS idx_submission_attachments_submission ON submission_attachments (submission_type, submission_id);

-- Notes attached to submissions (admin internal notes)
CREATE TABLE IF NOT EXISTS submission_notes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now(),
  submission_type text NOT NULL CHECK (submission_type IN ('contact', 'partner')),
  submission_id uuid NOT NULL,
  note text NOT NULL,
  created_by uuid -- optional: admin user id from auth
);

CREATE INDEX IF NOT EXISTS idx_submission_notes_submission ON submission_notes (submission_type, submission_id);

-- Audit log for admin actions (useful for tracking status changes)
CREATE TABLE IF NOT EXISTS admin_audit_log (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now(),
  admin_id uuid, -- auth user id who performed the action
  action text NOT NULL,
  target_table text,
  target_id uuid,
  details jsonb
);

CREATE INDEX IF NOT EXISTS idx_admin_audit_target ON admin_audit_log (target_table, target_id);

-- Example helper: a view combining submissions for unified admin listing (optional)
CREATE OR REPLACE VIEW all_submissions AS
SELECT
  id,
  created_at,
  full_name AS name,
  work_email,
  organisation,
  how_can_we_help AS subject,
  message,
  status,
  'contact'::text AS submission_type
FROM contact_submissions
UNION ALL
SELECT
  id,
  created_at,
  NULL AS name,
  work_email,
  organisation,
  sector AS subject,
  message,
  status,
  'partner'::text AS submission_type
FROM partner_submissions;

-- Note: Admin users are managed by Supabase Auth (no separate admins table required).

-- Row-Level Security: inserts from the public site go through /api/contact and /api/partner
-- using the service-role key (bypasses RLS). The admin dashboard reads/updates as a logged-in
-- Supabase Auth user (the `authenticated` role), so it needs explicit SELECT/UPDATE policies below
-- — without them, RLS silently returns zero rows to the dashboard even though data exists in the table.
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated admins can read contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated admins can update contact submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated admins can read partner submissions"
  ON partner_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated admins can update partner submissions"
  ON partner_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

