// src/app/api/ai-guide/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  // TODO: hook up an email service here (e.g. Resend/Postmark)
  // For now we just log and pretend
  console.log("Gated AI guide requested by:", email);

  // In future: send PDF via email or generate a presigned link
  return NextResponse.json({ ok: true });
}
