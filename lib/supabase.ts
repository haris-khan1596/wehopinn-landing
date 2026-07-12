import "server-only";

import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client. It uses the publishable (anon) key, which is safe
// here because the waitlist table's RLS grants anon insert and nothing else —
// rows can never be read back through this key.
export function supabaseServer() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY — see .env.example.",
    );
  }

  return createClient(url, key, { auth: { persistSession: false } });
}
