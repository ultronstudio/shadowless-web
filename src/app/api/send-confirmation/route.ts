import { NextResponse } from "next/server";
import { buildOrderConfirmationEmail } from "@/lib/email";
import { recordDonation } from "@/lib/db";
import type { Content, OrderDetails } from "@/types";

export const runtime = "nodejs";

interface RequestBody {
  order: OrderDetails;
  thankYouContent: Content["thankYou"];
  origin?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<RequestBody>;

    if (!body.order || !body.thankYouContent) {
      return NextResponse.json({ error: "Missing payload" }, { status: 400 });
    }

    const { order, thankYouContent, origin } = body;

    if (!order.donor?.email) {
      return NextResponse.json({ error: "Missing donor email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.RESEND_FROM_EMAIL;
    const fromName = process.env.RESEND_FROM_NAME || "No Reply";

    if (!apiKey || !fromAddress) {
      console.warn("Email configuration missing. Set RESEND_API_KEY and RESEND_FROM_EMAIL.");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const insertedId = await recordDonation(order);

    const { subject, html, text } = buildOrderConfirmationEmail({ order, thankYouContent, origin });

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${fromName} <${fromAddress}>`,
        to: order.donor.email,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to send confirmation email", errorText);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }

    return NextResponse.json({ success: true, recordId: insertedId });
  } catch (error) {
    console.error("Unexpected error sending confirmation email", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
