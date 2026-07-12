import "server-only";

import { createClient } from "@supabase/supabase-js";
import { normalizePkPhone, type InquiryInput } from "@/lib/inquiries";

export type StudentInquiryInsert = {
  full_name: string;
  phone: string;
  email: string;
  university: string;
  campus: string;
  program: string;
  home_city: string;
  status?: string;
  notes?: string;
};

// Server-only client. It uses the publishable (anon) key, which is safe here
// because student_inquiries grants anon INSERT and nothing else — leads can
// never be read back with this key.
function supabaseServer() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY — see .env.example.",
    );
  }

  return createClient(url, key, { auth: { persistSession: false } });
}

export async function insertStudentInquiry(input: StudentInquiryInsert): Promise<void> {
  // No .select() here on purpose: reading the row back would need a SELECT
  // policy, and anon is insert-only.
  const { error } = await supabaseServer()
    .from("student_inquiries")
    .insert({
      ...input,
      status: input.status ?? "new",
      notes: input.notes ?? "",
    });

  if (error) {
    throw error;
  }
}

/**
 * Persists an inquiry from the landing page form.
 *
 * Throws if the insert fails. A lost lead must surface as an error the student
 * can retry, never as a silent success.
 */
export async function saveInquiry(input: InquiryInput): Promise<void> {
  await insertStudentInquiry({
    full_name: input.fullName.trim(),
    phone: normalizePkPhone(input.phone),
    email: input.email.trim().toLowerCase(),
    university: input.university.trim(),
    campus: input.campus.trim(),
    program: input.program.trim(),
    home_city: input.homeCity.trim(),
  });
}
