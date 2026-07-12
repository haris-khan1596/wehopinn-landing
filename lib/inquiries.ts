export type InquiryInput = {
  fullName: string;
  phone: string;
  email: string;
  university: string;
  campus: string;
  program: string;
  homeCity: string;
};

export type InquiryRecord = InquiryInput & {
  id: string;
  createdAt: string;
  status: "new";
  notes: string;
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

const submittedInquiries: InquiryRecord[] = [];
const DEDUPE_WINDOW_MS = 5 * 60 * 1000;

export async function saveInquiry(input: InquiryInput): Promise<{ record: InquiryRecord; duplicate: boolean }> {
  const email = input.email.trim().toLowerCase();
  const phone = normalizePkPhone(input.phone);
  const now = Date.now();

  const recent = submittedInquiries.find(
    (r) =>
      r.email.toLowerCase() === email &&
      normalizePkPhone(r.phone) === phone &&
      now - new Date(r.createdAt).getTime() < DEDUPE_WINDOW_MS,
  );
  if (recent) {
    return { record: recent, duplicate: true };
  }

  const record: InquiryRecord = {
    ...input,
    fullName: input.fullName.trim(),
    phone,
    email,
    university: input.university.trim(),
    campus: input.campus.trim(),
    program: input.program.trim(),
    homeCity: input.homeCity.trim(),
    id: crypto.randomUUID(),
    createdAt: new Date(now).toISOString(),
    status: "new",
    notes: "",
  };

  submittedInquiries.push(record);

  try {
    const { insertStudentInquiry } = await import("@/lib/supabase");
    const persisted = await insertStudentInquiry({
      full_name: record.fullName,
      phone: record.phone,
      email: record.email,
      university: record.university,
      campus: record.campus,
      program: record.program,
      home_city: record.homeCity,
      status: record.status,
      notes: record.notes,
    });

    if (persisted) {
      return {
        record: {
          ...record,
          id: persisted.id,
          createdAt: persisted.created_at,
        },
        duplicate: false,
      };
    }
  } catch {
    // Fall back to in-memory persistence when Supabase is not configured.
  }

  return { record, duplicate: false };
}
