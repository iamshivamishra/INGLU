"use client";

import { Shield, Bell } from "lucide-react";

export default function ActiveSubscriptions() {
  return (
    <div className="flex w-112.25 flex-col gap-4">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="font-Medium font-poppins text-xl">
          Active Subscriptions
        </h2>
        <div className="flex cursor-pointer gap-2 text-xl text-blue-600">
          ← →
        </div>
      </div>

      {/* CARD CONTAINER */}
      <div className="font-Medium font-poppins rounded-[14px] border border-[#E5E7EB] bg-white p-px">
        <div className="flex flex-col gap-4 p-4">
          <SubscriptionCard
            icon={<Shield />}
            iconBg="bg-blue-600"
            title="Premium Plan"
            badgeColor="bg-blue-100 text-blue-600"
            description="Full access to courses & events"
            price="$29.99"
            start="Sep 18, 2025"
            next="Jan 18, 2026"
            card="4242"
          />

          <SubscriptionCard
            icon={<Bell />}
            iconBg="bg-pink-500"
            title="Pro Events Pass"
            badgeColor="bg-pink-100 text-pink-600"
            description="Unlimited online events access"
            price="$19.99"
            start="Oct 5, 2025"
            next="Jan 5, 2026"
            card="8888"
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- SUB CARD ---------- */

function SubscriptionCard({
  icon,
  iconBg,
  title,
  badgeColor,
  description,
  price,
  start,
  next,
  card,
}: any) {
  return (
    <div className="rounded-xl border border-[#F3F4F6] bg-white p-4">
      <div className="mb-4 flex justify-between">
        <div className="flex gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} text-white`}
          >
            {icon}
          </div>

          <div>
            <div className="flex items-center gap-3">
              <p className="text-lg font-medium">{title}</p>
              <span className={`rounded-full px-3 py-1 text-sm ${badgeColor}`}>
                Active
              </span>
            </div>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xl font-semibold">{price}</p>
          <p className="text-gray-500">/month</p>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-3 rounded-lg bg-[#F9FAFB] p-4 text-sm">
        <div>
          <p className="text-gray-500">Started</p>
          <p className="font-medium">{start}</p>
        </div>
        <div>
          <p className="text-gray-500">Next Billing</p>
          <p className="font-medium">{next}</p>
        </div>
        <div>
          <p className="text-gray-500">Payment</p>
          <p className="font-medium">•••• {card}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 rounded-lg bg-[#F3F4F6] py-2 text-sm font-medium text-gray-700">
          Change Plan
        </button>
        <button className="flex-1 rounded-lg border border-pink-400 py-2 text-sm font-medium text-pink-500">
          Cancel Subscription
        </button>
      </div>
    </div>
  );
}
