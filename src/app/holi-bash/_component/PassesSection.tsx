"use client";

import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PassesSection({
  currency,
  setCurrency,
}: {
  currency: "INR" | "USD";
  setCurrency: (c: "INR" | "USD") => void;
}) {
  // Your fixed prices
  const prices = {
    general: { inr: 199, usd: 4.5 },
    vip: { inr: 999, usd: 22 },
  };

  // Format function
  const formatPrice = (price: { inr: number; usd: number }) => {
    return currency === "USD"
      ? `$${price.usd.toFixed(2)}`
      : `₹${price.inr.toLocaleString()}`;
  };

  // Toggle Handler (Save to localStorage)
  const toggleCurrency = () => {
    const newCurrency = currency === "INR" ? "USD" : "INR";

    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  return (
    <section
      id="tickets"
      className="mx-auto mt-16 flex w-full max-w-7xl flex-col items-center gap-10 px-4 pb-12 sm:px-6 lg:px-8"
    >
      {/* Title + Toggle */}
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <span className="font-pjs text-center text-4xl font-bold sm:text-4xl lg:text-5xl">
          Tickets
        </span>

        <button
          onClick={toggleCurrency}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-gray-100"
        >
          {currency === "INR" ? "Show in $" : "Show in ₹"}
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* General Pass */}
        <div className="rounded-3xl bg-[#E5E7EB] p-px shadow-lg transition hover:shadow-xl">
          <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[23px] bg-white p-6 sm:p-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-2xl sm:text-3xl">General Access</span>

              <span className="text-lg font-semibold text-gray-600 sm:text-xl">
                {formatPrice(prices.general)}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <Feature text="Access to Both Stages" />
              <Feature text="Pool Party" />
              <Feature text="Rain Dance" />
              <Feature text="Food Counter & Bar" />
            </div>

            <Link
              href="/holi-bash/ticket"
              className="flex w-full justify-center rounded-full bg-[#155DFC] p-3 text-white transition hover:-translate-y-0.5 hover:shadow sm:p-3.5"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* VIP Pass */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#FD2465] to-[#F83191] p-0.5 shadow-xl transition hover:shadow-2xl">
          <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-br from-[#FD2465] to-[#F83191] px-4 py-1 text-xs text-white sm:text-sm">
            <Sparkles size={14} />
            Recommended
          </div>

          <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[22px] bg-white p-6 sm:p-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-2xl sm:text-3xl">VIP Access</span>

              <span className="text-lg font-semibold text-[#FC266C] sm:text-xl">
                {formatPrice(prices.vip)}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <Feature text="Locker Facility" />
              <Feature text="Complimentary Food Box" />
              <Feature text="Complimentary Holi Colours (3 packets)" />
              <Feature text="Priority Entry/Exit" />
              <Feature text="Special VIP Lounge Access" />
              <Feature text="1 Welcome Drink (Non-Alcoholic)" />
            </div>

            <Link
              href="/holi-bash/ticket"
              className="flex w-full justify-center rounded-full bg-gradient-to-br from-[#FD2465] to-[#F83191] p-3 text-white transition hover:-translate-y-0.5 hover:shadow sm:p-3.5"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Corporate & Family */}
        <div className="rounded-3xl bg-[#E5E7EB] p-px shadow-lg transition hover:shadow-xl md:col-span-2 lg:col-span-1">
          <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[23px] bg-white p-6 text-center sm:p-8">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl sm:text-3xl">
                Corporate & Family Pass
              </span>

              <span className="text-lg font-semibold text-gray-600 sm:text-xl">
                For more than 5
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <Feature text="Access to Both Stages" />
              <Feature text="Pool Party" />
              <Feature text="Rain Dance" />
              <Feature text="Food Counter & Bar" />
            </div>

            <a
              href="tel:+919990461299"
              className="flex w-full items-center justify-center rounded-full bg-[#155DFC] p-3 text-white transition hover:-translate-y-0.5 hover:shadow sm:p-3.5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Check size={18} className="text-[#FC266C]" />
      <span className="text-sm text-[#364153] sm:text-base">{text}</span>
    </div>
  );
}

// "use client";

// import { Check, Sparkles } from "lucide-react";
// import Link from "next/link";

// export default function PassesSection() {
//   return (
//     <section
//       id="tickets"
//       className="mx-auto mt-16 flex w-full max-w-7xl flex-col items-center gap-10 px-4 pb-12 sm:px-6 lg:px-8"
//     >
//       {/* Title */}
//       <span className="font-pjs text-center text-4xl font-bold sm:text-4xl lg:text-5xl">
//         Tickets
//       </span>

//       {/* Cards Grid */}
//       <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {/* Regular Pass */}
//         <div className="rounded-3xl bg-[#E5E7EB] p-px shadow-lg transition hover:shadow-xl">
//           <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[23px] bg-white p-6 sm:p-8">
//             <div className="flex flex-col items-center gap-2 text-center">
//               <span className="text-2xl sm:text-3xl">General Access</span>
//               <span className="text-lg font-semibold text-gray-600 sm:text-xl">
//                 ₹199
//               </span>
//             </div>

//             <div className="flex flex-col gap-4">
//               <Feature text="Access to Both Stages" />
//               <Feature text="Pool Party" />
//               <Feature text="Rain Dance" />
//               <Feature text="Food Counter & Bar" />
//             </div>

//             <Link
//               href="/holi-bash/ticket"
//               className="flex w-full justify-center rounded-full bg-[#155DFC] p-3 text-white transition hover:-translate-y-0.5 hover:shadow sm:p-3.5"
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>

//         {/* VIP Pass */}
//         <div className="relative rounded-3xl bg-linear-to-br from-[#FD2465] to-[#F83191] p-0.5 shadow-xl transition hover:shadow-2xl">
//           <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-linear-to-br from-[#FD2465] to-[#F83191] px-4 py-1 text-xs text-white sm:text-sm">
//             <Sparkles size={14} />
//             Recommended
//           </div>

//           <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[22px] bg-white p-6 sm:p-8">
//             <div className="flex flex-col items-center gap-2 text-center">
//               <span className="text-2xl sm:text-3xl">VIP Access</span>
//               <span className="text-lg font-semibold text-[#FC266C] sm:text-xl">
//                 ₹999
//               </span>
//             </div>

//             <div className="flex flex-col gap-4">
//               <Feature text="Locker Facility" />
//               <Feature text="Complimentary Food Box" />
//               <Feature text="Complimentary Holi Colours (3 packets)" />
//               <Feature text="Priority Entry/Exit" />
//               <Feature text="Special VIP Lounge Access" />
//               <Feature text="1 Welcome Drink (Non-Alcoholic)" />
//             </div>

//             <Link
//               href="/holi-bash/ticket"
//               className="flex w-full justify-center rounded-full bg-linear-to-br from-[#FD2465] to-[#F83191] p-3 text-white transition hover:-translate-y-0.5 hover:shadow sm:p-3.5"
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>

//         {/* Family & Corporate */}
//         <div className="rounded-3xl bg-[#E5E7EB] p-px shadow-lg transition hover:shadow-xl md:col-span-2 lg:col-span-1">
//           <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[23px] bg-white p-6 text-center sm:p-8">
//             <div className="flex flex-col items-center gap-2">
//               <span className="text-2xl sm:text-3xl">
//                 Corporate & Family Pass
//               </span>
//               <span className="text-lg font-semibold text-gray-600 sm:text-xl">
//                 For more than 5
//               </span>
//             </div>

//             <div className="flex flex-col gap-4">
//               <Feature text="Access to Both Stages" />
//               <Feature text="Pool Party" />
//               <Feature text="Rain Dance" />
//               <Feature text="Food Counter & Bar" />
//             </div>

//             <a
//               href="tel:+919990461299"
//               className="flex w-full items-center justify-center rounded-full bg-[#155DFC] p-3 text-white transition hover:-translate-y-0.5 hover:shadow sm:p-3.5"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Feature({ text }: { text: string }) {
//   return (
//     <div className="flex items-center gap-3">
//       <Check size={18} className="text-[#FC266C]" />
//       <span className="text-sm text-[#364153] sm:text-base">{text}</span>
//     </div>
//   );
// }
