import { NextRequest, NextResponse } from "next/server";
import { validateInquiry, type InquiryInput } from "@/lib/inquiries";
import { saveInquiry } from "@/lib/supabase";
import { notifySlackLead } from "@/lib/slack";

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

  const inquiry = input as InquiryInput;

  try {
    await saveInquiry(inquiry);
  } catch (err) {
    console.error("inquiry insert failed", err);
    return NextResponse.json(
      { error: "We couldn't save your request. Please try again." },
      { status: 500 },
    );
  }

  await notifySlackLead({
    emoji: "🎓",
    title: "New student inquiry",
    subtitle: `*${inquiry.fullName}*  ·  ${inquiry.email}  ·  ${inquiry.phone}`,
    fields: [
      { label: "University", value: inquiry.university },
      { label: "Campus", value: inquiry.campus },
      { label: "Program", value: inquiry.program },
      { label: "Home city", value: inquiry.homeCity },
    ],
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
