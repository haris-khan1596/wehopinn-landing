import { z } from "zod";

const pakistanPhoneRegex = /^(\+92|0)?3[0-9]{9}$/;

export function normalizePhone(phone: string): string {
  return phone.replace(/[\s\-()]/g, "");
}

export const inquirySchema = z.object({
  full_name: z
    .string()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (val) => pakistanPhoneRegex.test(normalizePhone(val)),
      "Enter a valid Pakistan mobile number (e.g. 03XX XXXXXXX)"
    ),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  university: z
    .string()
    .min(2, "Please enter your university")
    .max(100, "University name is too long"),
  campus: z
    .string()
    .min(2, "Please enter your campus")
    .max(100, "Campus name is too long"),
  program: z
    .string()
    .min(2, "Please enter your program")
    .max(100, "Program name is too long"),
  home_city: z
    .string()
    .min(2, "Please enter your home city")
    .max(100, "City name is too long"),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
