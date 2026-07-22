"use client";

import Image from "next/image";
import HoliBg1 from "@/assets/HoliBg1.png";

export default function HoliBashHero() {
  return (
    <section className="relative w-full overflow-hidden pb-12 lg:pb-16">
      {/* MOBILE VERSION */}
      <div className="relative w-full lg:hidden">
        <Image
          src={HoliBg1}
          alt="Holi Bash Background"
          priority
          quality={100}
          sizes="100vw"
          className="h-auto w-full object-contain"
        />

        {/* Mobile Button (Smaller + Lower) */}
        <button
          onClick={() =>
            document
              .getElementById("tickets")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-pink-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm cursor-pointer"
        >
          Book Tickets
        </button>
      </div>

      {/* DESKTOP VERSION */}
      <div className="relative hidden h-dvh w-full lg:block">
        <Image
          src={HoliBg1}
          alt="Holi Bash Background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Desktop Button (Unchanged) */}
        <button
          onClick={() =>
            document
              .getElementById("tickets")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-pink-600 px-8 py-3 text-lg font-bold text-white shadow-lg cursor-pointer"
        >
          Book Tickets
        </button>
      </div>
    </section>
  );
}
