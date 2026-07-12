import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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

export type StudentInquiryRow = StudentInquiryInsert & {
  id: string;
  created_at: string;
};

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export async function insertStudentInquiry(input: StudentInquiryInsert): Promise<StudentInquiryRow | null> {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase.from("student_inquiries").insert([{
    ...input,
    status: input.status ?? "new",
    notes: input.notes ?? "",
  }]).select("id, created_at, full_name, phone, email, university, campus, program, home_city, status, notes").single();

  if (error) {
    throw error;
  }

  return data;
}
