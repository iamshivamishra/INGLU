"use client";

import { Shield, Bell, FileText, Download, Filter } from "lucide-react";

export default function TransactionHistory() {
  const data = [
    {
      icon: <Shield className="text-blue-600" />,
      title: "Premium Plan",
      date: "Dec 18, 2025 · 3:45 PM",
      card: "4242",
      price: "$29.99",
      type: "Monthly",
    },
    {
      icon: <Bell className="text-pink-500" />,
      title: "Pro Events Pass",
      date: "Dec 5, 2025 · 10:22 AM",
      card: "8888",
      price: "$19.99",
      type: "Monthly",
    },
    {
      icon: <FileText className="text-blue-600" />,
      title: "React Advanced Course",
      date: "Nov 28, 2025 · 2:15 PM",
      card: "4242",
      price: "$89.00",
      type: "One-time",
    },
    {
      icon: <Shield className="text-blue-600" />,
      title: "Premium Plan",
      date: "Nov 18, 2025 · 9:30 AM",
      card: "4242",
      price: "$29.99",
      type: "Monthly",
    },
    {
      icon: <Bell className="text-pink-500" />,
      title: "Pro Events Pass",
      date: "Nov 5, 2025 · 4:50 PM",
      card: "8888",
      price: "$19.99",
      type: "Monthly",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {/* HEADER */}
      <div className="flex w-112.25 items-center justify-between">
        <h2 className="font-Medium font-poppins text-xl">
          Transaction History
        </h2>
        <button className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] px-4 py-2 text-sm text-gray-600">
          <Filter size={16} />
          Filter
        </button>
      </div>

      {/* CARD (SCROLL FIX) */}
      <div className="font-Medium font-poppins h-93.25 w-112.25 overflow-y-auto rounded-[14px] border border-[#E5E7EB] bg-white p-px">
        {data.map((item, i) => (
          <div
            key={i}
            className={`flex justify-between px-6 py-6 ${
              i !== 0 ? "border-t border-[#F3F4F6]" : ""
            }`}
          >
            {/* LEFT */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                {item.icon}
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <p className="text-lg font-medium">{item.title}</p>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                    Completed
                  </span>
                </div>
                <p className="text-gray-500">
                  {item.date} · •••• {item.card}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xl font-semibold">{item.price}</p>
                <p className="text-gray-500">{item.type}</p>
              </div>
              <Download className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
