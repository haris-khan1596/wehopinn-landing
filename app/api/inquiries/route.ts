import { NextRequest, NextResponse } from "next/server";
import { saveInquiry, validateInquiry, type InquiryInput } from "@/lib/inquiries";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const input: Partial<InquiryInput> = {
    fullName: body.fullName?.trim(),
    phone: body.phone?.trim(),
    email: body.email?.trim(),
    university: body.university?.trim(),
    campus: body.campus?.trim(),
    program: body.program?.trim(),
    homeCity: body.homeCity?.trim(),
  };

  const errors = validateInquiry(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please check the highlighted fields.", fieldErrors: errors }, { status: 400 });
  }

  const { record, duplicate } = await saveInquiry(input as InquiryInput);

  return NextResponse.json({ ok: true, id: record.id, duplicate }, { status: duplicate ? 200 : 201 });
}
