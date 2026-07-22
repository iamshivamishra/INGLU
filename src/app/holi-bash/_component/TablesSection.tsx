"use client";

import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

export default function TablesSection({
  currency,
  setCurrency,
}: {
  currency: "INR" | "USD";
  setCurrency: (c: "INR" | "USD") => void;
}) {
  // Fixed pricing
  const prices = {
    table5: {
      inr: 15000,
      usd: 220,
      coverInr: 10000,
      coverUsd: 150,
    },
    table10: {
      inr: 25000,
      usd: 390,
      coverInr: 20000,
      coverUsd: 300,
    },
  };

  const formatPrice = (inr: number, usd: number) => {
    return currency === "USD"
      ? `$${usd.toFixed(2)}`
      : `₹${inr.toLocaleString()}`;
  };

  // Toggle Handler (Save to localStorage)
  const toggleCurrency = () => {
    const newCurrency = currency === "INR" ? "USD" : "INR";

    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  return (
    <section
      id="tables"
      className="mx-auto mt-12 flex w-full max-w-7xl flex-col items-center gap-10 px-4 pb-12 sm:px-6 lg:px-8"
    >
      {/* Title + Toggle */}
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <span className="font-pjs text-5xl font-bold sm:text-3xl lg:text-4xl">
          Tables
        </span>

        <button
          onClick={toggleCurrency}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-gray-100"
        >
          {currency === "INR" ? "Show in $" : "Show in ₹"}
        </button>
      </div>

      <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Table for 5 */}
        <div className="flex-1 rounded-3xl bg-[#E5E7EB] p-px shadow-lg">
          <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[23px] bg-white p-6 sm:p-8">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl">Table for 5</span>

              <span className="text-xl font-semibold text-gray-700">
                {formatPrice(prices.table5.inr, prices.table5.usd)}
              </span>

              <span className="text-sm text-gray-500">
                {formatPrice(prices.table5.coverInr, prices.table5.coverUsd)} in
                cover
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
              className="flex w-full justify-center rounded-full bg-[#155DFC] p-3.5 text-white transition hover:-translate-y-0.5 hover:shadow"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Table for 10 */}
        <div className="relative flex-1 rounded-3xl bg-gradient-to-br from-[#FD2465] to-[#F83191] p-0.5 shadow-xl">
          <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-br from-[#FD2465] to-[#F83191] px-4 py-1 text-sm text-white">
            <Sparkles size={14} />
            Recommended
          </div>

          <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[22px] bg-white p-6 sm:p-8">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl">Table for 10</span>

              <span className="text-xl font-semibold text-[#FC266C]">
                {formatPrice(prices.table10.inr, prices.table10.usd)}
              </span>

              <span className="text-sm text-gray-500">
                {formatPrice(prices.table10.coverInr, prices.table10.coverUsd)}{" "}
                in cover
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
              className="flex w-full justify-center rounded-full bg-gradient-to-br from-[#FD2465] to-[#F83191] p-3.5 text-white transition hover:-translate-y-0.5 hover:shadow"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Custom Table */}
        <div className="flex-1 rounded-3xl bg-[#E5E7EB] p-px shadow-lg">
          <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[23px] bg-white p-6 sm:p-8">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">Customize Your Table</span>
            </div>

            <div className="flex flex-col gap-4">
              <Feature text="Customizable Table" />
              <Feature text="Locker Facility" />
              <Feature text="Complimentary Food Box" />
              <Feature text="Complimentary Holi Colours (3 packets)" />
              <Feature text="Priority Entry/Exit" />
              <Feature text="Special VIP Lounge Access" />
              <Feature text="1 Welcome Drink (Non-Alcoholic)" />
            </div>

            <a
              href="tel:+919990461299"
              className="flex w-full items-center justify-center rounded-full bg-[#155DFC] p-3.5 text-white transition hover:-translate-y-0.5 hover:shadow"
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
      <Check size={20} className="text-[#FC266C]" />
      <span className="text-[#364153]">{text}</span>
    </div>
  );
}

// "use client";

// import { Check, Sparkles } from "lucide-react";
// import Link from "next/link";

// export default function TablesSection() {
//   return (
//     <section
//       id="tickets"
//       className="mx-auto mt-12 flex w-full max-w-7xl flex-col items-center gap-10 px-4 pb-12 sm:px-6 lg:px-8"
//     >
//       <span className="font-pjs text-5xl font-bold sm:text-3xl lg:text-4xl">
//         Tables
//       </span>

//       <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
//         <div className="flex-1 rounded-3xl bg-[#E5E7EB] p-px shadow-lg">
//           <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[23px] bg-white p-6 sm:p-8">
//             <div className="flex flex-col items-center gap-1">
//               <span className="text-3xl">Table for 5</span>

//               <span className="text-xl font-semibold text-gray-700">
//                 ₹15,000
//               </span>

//               <span className="text-sm text-gray-500">₹10,000 in cover</span>
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
//               className="flex w-full cursor-pointer justify-center rounded-full bg-[#155DFC] p-3.5 text-white transition hover:-translate-y-0.5 hover:shadow"
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>

//         <div className="relative flex-1 rounded-3xl bg-linear-to-br from-[#FD2465] to-[#F83191] p-0.5 shadow-xl">
//           <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-linear-to-br from-[#FD2465] to-[#F83191] px-4 py-1 text-sm text-white">
//             <Sparkles size={14} />
//             Recommended
//           </div>

//           <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[22px] bg-white p-6 sm:p-8">
//             <div className="flex flex-col items-center gap-1">
//               <span className="text-3xl">Table for 10</span>

//               <span className="text-xl font-semibold text-[#FC266C]">
//                 ₹25,000
//               </span>

//               <span className="text-sm text-gray-500">₹20,000 in cover</span>
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
//               href={"holi-bash/ticket"}
//               className="flex w-full cursor-pointer justify-center rounded-full bg-linear-to-br from-[#FD2465] to-[#F83191] p-3.5 text-white transition hover:-translate-y-0.5 hover:shadow"
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>

//         <div className="flex-1 rounded-3xl bg-[#E5E7EB] p-px shadow-lg">
//           <div className="flex h-full w-full flex-col justify-between gap-6 rounded-[23px] bg-white p-6 sm:p-8">
//             <div className="flex flex-col items-center gap-2">
//               <span className="text-3xl">customize Your Table</span>
//             </div>

//             <div className="flex flex-col gap-4">
//               <Feature text="customizable Table" />
//               <Feature text="Locker Facility" />
//               <Feature text="Complimentary Food Box" />
//               <Feature text="Complimentary Holi Colours (3 packets)" />
//               <Feature text="Priority Entry/Exit" />
//               <Feature text="Special VIP Lounge Access" />
//               <Feature text="1 Welcome Drink (Non-Alcoholic)" />
//             </div>

//             <a
//               href="tel:+919990461299"
//               className="flex w-full cursor-pointer items-center justify-center rounded-full bg-[#155DFC] p-3.5 text-white transition hover:-translate-y-0.5 hover:shadow"
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
//       <Check size={20} className="text-[#FC266C]" />
//       <span className="text-[#364153]">{text}</span>
//     </div>
//   );
// }
