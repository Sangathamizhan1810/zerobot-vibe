import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sendEnquiryNotification } from "@/lib/email";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "ZeroBots Enquiry Gateway",
    recipient: "zerobots.official@gmail.com",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      organization?: string;
      inquiryType?: string;
      message?: string;
    };
    const { name, email, organization, inquiryType, message } = body;

    // 1. Validation & Sanitization
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedOrg = typeof organization === "string" ? organization.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";
    const selectedType =
      inquiryType === "Service Related Inquiry"
        ? "Service Related Inquiry"
        : "General Technical Inquiry";

    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { error: "Invalid name. Please provide your full name." },
        { status: 400 }
      );
    }

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid email address. Please provide a valid email." },
        { status: 400 }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      return NextResponse.json(
        { error: "Message must contain at least 10 characters." },
        { status: 400 }
      );
    }

    // 2. Generate Unique Enquiry Reference ID
    const referenceId = `ZB-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // 3. Log Structured Enquiry
    console.log(`[ZeroBots Enquiry Received] Reference: ${referenceId}`, {
      name: trimmedName,
      email: trimmedEmail,
      organization: trimmedOrg || "Not specified",
      inquiryType: selectedType,
      messageLength: trimmedMessage.length,
      receivedAt: new Date().toISOString(),
    });

    // 4. Send Email Notification to zerobots.official@gmail.com
    let emailStatus = { sent: false };
    try {
      emailStatus = await sendEnquiryNotification({
        name: trimmedName,
        email: trimmedEmail,
        organization: trimmedOrg,
        inquiryType: selectedType,
        message: trimmedMessage,
        referenceId,
      });
    } catch (mailError) {
      console.error("[ZeroBots Email Dispatch Error]", mailError);
      // Non-fatal for the user: enquiry is stored/logged even if mail transport encounters a network error
    }

    return NextResponse.json(
      {
        success: true,
        referenceId,
        emailDispatched: emailStatus.sent,
        message:
          "Thank you for reaching out to ZeroBots. Your enquiry has been received and our engineering team will respond within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[ZeroBots Enquiry Processing Error]", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please verify payload formatting." },
      { status: 500 }
    );
  }
}
