"use client";

import { CreditCard, Plus } from "lucide-react";

export default function PaymentMethods() {
  const primaryCard = {
    holder: "John Doe",
    last4: "4242",
    expiry: "12/26",
    type: "Visa",
  };

  const secondaryCard = {
    last4: "8888",
    brand: "Mastercard",
    expiry: "08/27",
  };

  return (
    <div className="flex w-119.5 flex-col gap-4">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="font-Medium font-poppins text-xl">Payment Methods</h2>
        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm text-white">
          <Plus size={16} />
          Add Card
        </button>
      </div>

      {/* CARD CONTAINER */}
      <div className="rounded-[14px] border border-[#E5E7EB] bg-white p-4">
        {/*  PRIMARY BLUE CARD  */}
        <div className="relative mb-4 h-47.5 rounded-[18px] bg-[#4F6EF7] p-6 text-white">
          <span className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 text-xs">
            Default
          </span>

          <p className="font-Medium font-poppins text-sm opacity-90">
            Primary Card
          </p>

          <div className="mt-4">
            <CreditCard className="h-8 w-8 opacity-90" />
          </div>

          <p className="mt-6 text-lg font-medium tracking-widest">
            •••• •••• •••• {primaryCard.last4}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-blue-200">Card Holder</p>
              <p className="mt-1 font-medium text-white">
                {primaryCard.holder}
              </p>
            </div>

            <div>
              <p className="text-blue-200">Expires</p>
              <p className="mt-1 font-medium text-white">
                {primaryCard.expiry}
              </p>
            </div>

            <div>
              <p className="text-blue-200">Type</p>
              <p className="mt-1 font-medium text-white">{primaryCard.type}</p>
            </div>
          </div>
        </div>

        {/*  SECONDARY CARD */}
        <div className="flex items-center justify-between rounded-xl border border-[#E5E7EB] p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <CreditCard className="text-gray-600" />
            </div>
            <div>
              <p className="font-medium">
                •••• •••• •••• {secondaryCard.last4}
              </p>
              <p className="text-sm text-gray-500">
                {secondaryCard.brand} • Exp {secondaryCard.expiry}
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-sm">
            <button className="text-blue-600">Set Default</button>
            <button className="text-pink-500">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}
