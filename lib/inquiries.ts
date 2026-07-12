export type InquiryInput = {
  fullName: string;
  phone: string;
  email: string;
  university: string;
  campus: string;
  program: string;
  homeCity: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PK_PHONE_RE = /^(?:\+92|0092|0)3\d{9}$/;

export function normalizePkPhone(raw: string): string {
  return raw.replace(/[\s\-()]/g, "");
}

export function isValidPkPhone(raw: string): boolean {
  return PK_PHONE_RE.test(normalizePkPhone(raw));
}

export function isValidEmail(raw: string): boolean {
  return EMAIL_RE.test(raw);
}

export type FieldErrors = Partial<Record<keyof InquiryInput, string>>;

export function validateInquiry(input: Partial<InquiryInput>): FieldErrors {
  const errors: FieldErrors = {};

  if (!input.fullName?.trim() || input.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name.";
  }
  if (!input.phone?.trim()) {
    errors.phone = "Enter your phone number.";
  } else if (!isValidPkPhone(input.phone)) {
    errors.phone = "Enter a valid Pakistani number, e.g. 03001234567.";
  }
  if (!input.email?.trim()) {
    errors.email = "Enter your email address.";
  } else if (!isValidEmail(input.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!input.university?.trim()) {
    errors.university = "Select your university.";
  }
  if (!input.campus?.trim()) {
    errors.campus = "Enter your campus.";
  }
  if (!input.program?.trim()) {
    errors.program = "Enter your program.";
  }
  if (!input.homeCity?.trim()) {
    errors.homeCity = "Enter your home city.";
  }

  return errors;
}

// Persistence lives in lib/supabase.ts. This module stays free of server-only
// imports because the inquiry form (a Client Component) shares its validators.
