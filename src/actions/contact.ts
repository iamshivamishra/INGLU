"use server";

import { syncContactToGoogleSheets } from "@/lib/googleSheets";
import { resend } from "@/lib/resend";
import ContactAutoReply from "@/emails/BaseEmail";
import React from "react";

export async function contact(formData: {
  name: string;
  contact: string;
  email: string;
  reason: string;
  message: string;
}) {
  if (!formData.name || !formData.email) {
    throw new Error("Invalid contact data");
  }

  try {
    await syncContactToGoogleSheets({
      name: formData.name,
      contact: formData.contact,
      email: formData.email,
      reason: formData.reason,
      message: formData.message,
    });

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [formData.email],
      subject: "We received your message",
      react: React.createElement(ContactAutoReply, {
        name: formData.name,
        title: "",
        message:
          "Thanks for contacting us. We have received your message and will get back to you shortly.",
      }),
    });

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [formData.email],
      subject: "We received your message",
      react: React.createElement(ContactAutoReply, {
        name: formData.name,
        title: "",
        message:
          "Thanks for contacting us. We have received your message and will get back to you shortly.",
      }),
    });
  } catch (error) {
    console.error("Contact Google Sheets sync failed:", error);
    throw error;
  }

  return { success: true };
}
