import { isValidEmail, isValidPkPhone, normalizePkPhone } from "@/lib/inquiries";

export type WaitlistInput = {
  name: string;
  email: string;
  whatsapp: string;
  university: string;
  city: string;
  program: string;
};

export type WaitlistErrors = Partial<Record<keyof WaitlistInput, string>>;

export function parseWaitlistForm(formData: FormData): WaitlistInput {
  const get = (key: keyof WaitlistInput) => String(formData.get(key) ?? "").trim();

  return {
    name: get("name"),
    email: get("email"),
    whatsapp: get("whatsapp"),
    university: get("university"),
    city: get("city"),
    program: get("program"),
  };
}

export function validateWaitlist(input: WaitlistInput): WaitlistErrors {
  const errors: WaitlistErrors = {};

  if (input.name.length < 2) {
    errors.name = "Enter your name.";
  }
  if (!input.email) {
    errors.email = "Enter your email address.";
  } else if (!isValidEmail(input.email)) {
    errors.email = "Enter a valid email address.";
  }
  // WhatsApp is optional, but must be a real PK number when given.
  if (input.whatsapp && !isValidPkPhone(input.whatsapp)) {
    errors.whatsapp = "Enter a valid Pakistani number, e.g. 03001234567.";
  }

  return errors;
}

/** Shape written to the `waitlist_signups` table. */
export function toWaitlistRow(input: WaitlistInput, source: string) {
  return {
    name: input.name,
    email: input.email.toLowerCase(),
    whatsapp: input.whatsapp ? normalizePkPhone(input.whatsapp) : null,
    university: input.university || null,
    city: input.city || null,
    program: input.program || null,
    source,
  };
}
