"use client";

import { useState } from "react";

export default function TermsSection() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4 place-self-center px-8 pb-8 text-justify">
      <button
        type="button"
        onClick={() => setClicked((prev) => !prev)}
        className="cursor-pointer text-blue-500 transition-all hover:opacity-75 active:opacity-50"
      >
        Terms & Conditions
      </button>
      {clicked && (
        <ol className="list-outside list-decimal">
          <li>Tickets once booked cannot be exchanged or refunded</li>
          <li>
            An Internet handling fee per ticket may be levied. Please check the
            total amount before payment
          </li>
          <li>
            We recommend that you arrive at-least 30 minutes prior at the venue
            for a seamless entry
          </li>
          <li>
            It is mandatory to wear masks at all times and follow social
            distancing norms
          </li>
          <li>Please do not purchase tickets if you feel sick</li>
          <li>
            Unlawful resale (or attempted unlawful resale) of a ticket would
            lead to seizure or cancellation of that ticket without refund or
            other compensation
          </li>
          <li>Rights of admission reserved</li>
          <li>
            These terms and conditions are subject to change from time to time
            at the discretion of the organizer
          </li>
          <li>INR 500 mandatory cover charge applicable on gate</li>
        </ol>
      )}
    </div>
  );
}
