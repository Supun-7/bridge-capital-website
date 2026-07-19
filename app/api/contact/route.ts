import { NextResponse } from "next/server";
import { Resend } from "resend";

// Lazily construct the client so a missing API key doesn't crash the
// build — it only throws when someone actually submits the form without
// the environment variable configured.
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(apiKey);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, business, email, phone, financing, message } = body ?? {};

    // Basic server-side validation — never trust the client alone.
    if (!name || !business || !email || !financing || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const resend = getResendClient();
    const toAddress = process.env.CONTACT_TO_EMAIL;
    if (!toAddress) {
      throw new Error("CONTACT_TO_EMAIL is not set");
    }

    await resend.emails.send({
      // Until your sending domain is verified in Resend, this must stay
      // as resend's shared "onboarding@resend.dev" address. Once you
      // verify bridgecapital.com in Resend, change this to something
      // like "Bridge Capital Website <leads@bridgecapital.com>".
      from: "Bridge Capital Website <onboarding@resend.dev>",
      to: [toAddress],
      replyTo: email,
      subject: `New consultation request — ${business}`,
      html: `
        <h2>New consultation request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(business)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Financing type:</strong> ${escapeHtml(financing)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your request. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
