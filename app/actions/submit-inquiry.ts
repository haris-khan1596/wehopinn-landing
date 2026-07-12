"use server";

import { createServerClient } from "@/lib/supabase/server";
import {
  inquirySchema,
  normalizePhone,
  type InquiryFormData,
} from "@/lib/validations/inquiry";

export type SubmitInquiryResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Partial<Record<keyof InquiryFormData, string>> };

export async function submitInquiry(
  data: InquiryFormData
): Promise<SubmitInquiryResult> {
  const parsed = inquirySchema.safeParse(data);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof InquiryFormData;
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return {
      success: false,
      error: "Please check the form and try again.",
      fieldErrors,
    };
  }

  try {
    const supabase = createServerClient();

    const { error } = await supabase.from("student_inquiries").insert({
      full_name: parsed.data.full_name,
      phone: normalizePhone(parsed.data.phone),
      email: parsed.data.email,
      university: parsed.data.university,
      campus: parsed.data.campus,
      program: parsed.data.program,
      home_city: parsed.data.home_city,
      status: "new",
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return {
        success: false,
        error: "Something went wrong. Please try again in a moment.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Submit inquiry error:", err);
    return {
      success: false,
      error: "Unable to connect. Please check your connection and try again.",
    };
  }
}
