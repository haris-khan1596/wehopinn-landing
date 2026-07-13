"use server";

import { supabaseServer } from "@/lib/supabase";
import { notifySlackLead } from "@/lib/slack";
import {
  parseWaitlistForm,
  toWaitlistRow,
  validateWaitlist,
  type WaitlistErrors,
} from "@/lib/waitlist";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  errors?: WaitlistErrors;
  message?: string;
};

// Postgres unique_violation — the email is already on the waitlist.
const UNIQUE_VIOLATION = "23505";

export async function submitWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const source = String(formData.get("source") ?? "landing");
  const input = parseWaitlistForm(formData);

  const errors = validateWaitlist(input);
  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  const { error } = await supabaseServer()
    .from("waitlist_signups")
    .insert(toWaitlistRow(input, source));

  if (error) {
    // Signing up twice is a success from the student's point of view.
    if (error.code === UNIQUE_VIOLATION) {
      return { status: "success" };
    }
    console.error("waitlist insert failed", error);
    return {
      status: "error",
      message: "Something went wrong on our side. Please try again.",
    };
  }

  await notifySlackLead({
    emoji: "📝",
    title: "New waitlist signup",
    subtitle: `*${input.name}*  ·  ${input.email}`,
    fields: [
      { label: "WhatsApp", value: input.whatsapp },
      { label: "University", value: input.university },
      { label: "City", value: input.city },
      { label: "Program", value: input.program },
    ],
    footer: `Source: ${source}`,
  });

  return { status: "success" };
}
