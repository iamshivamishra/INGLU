import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import ContactAutoReply from "@/emails/BaseEmail";
import React from "react";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [process.env.EMAIL_FROM!],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [email],
      subject: "We received your message",
      react: React.createElement(ContactAutoReply, {
        name,
        title: "",
        message:
          "Thanks for contacting us. We have received your message and will get back to you shortly.",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
