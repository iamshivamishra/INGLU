import { resend } from "@/lib/resend";
import React from "react";
import TicketConfirmationEmail from "@/emails/TicketConfirmationEmail";

export async function sendTicketEmail({
  email,
  firstName,
  ticketId,
}: {
  email: string;
  firstName: string;
  ticketId: string;
}) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: [email],
    subject: "🎟 Your HOLI BASH 2026 Ticket is Confirmed!",
    react: React.createElement(TicketConfirmationEmail, {
      firstName,
      ticketId,
    }),
  });
}
