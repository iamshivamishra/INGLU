"use client";

import TransactionHistory from "./TransactionHistory";
import ActiveSubscriptions from "./ActiveSubscriptions";
import PaymentMethods from "./PaymentMethod";
import BillingInformation from "./BillingInformation";

export default function Payment() {
  return (
    <div className="flex flex-col gap-6">
      {/* PAGE TITLE */}
      <h1 className="font-Plus-Jakarta-Sans text-3xl text-[32px] font-bold">
        Payments
      </h1>

      {/* MAIN CONTENT */}
      <div className="flex gap-8">
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex w-112.25 flex-col gap-10">
          <TransactionHistory />
          <ActiveSubscriptions />
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex w-119.5 flex-col gap-10">
          <PaymentMethods />
          <BillingInformation />
        </div>
      </div>
    </div>
  );
}
