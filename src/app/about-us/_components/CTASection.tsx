"use client";

import { ArrowRight } from "lucide-react";
import AboutCTAGraphics from "@/assets/segments.png";
import Image from "next/image";

export default function CTASection() {
  function scrollToSection(id: string) {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 0);
  }
  return (
    // About page call-to-action section
    <section id="plans" className="relative mx-auto flex w-full flex-col gap-2">
      <span className="font-plus-jakarta-sans text-3xl leading-tight font-bold lg:w-179.5 lg:text-[64px]">
        Empowering You to Communicate Fluently and Fearlessly
      </span>
      <span className="text-xl lg:w-148.75 lg:text-[32px]">
        “Building Fluent Futures for 5000+ Learners and Counting”
      </span>
      {/* Primary CTA */}
      <button
        onClick={() => scrollToSection("segments")}
        type="button"
        className="mt-3 mb-3 flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-white transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none lg:mt-6 lg:mb-0"
      >
        <span className="text-sm leading-none font-medium tracking-widest uppercase lg:text-lg">
          Our Segments
        </span>
        <ArrowRight strokeWidth={1.5} className="size-4 lg:size-7" />
      </button>
      {/* Decorative illustration */}
      <Image
        src={AboutCTAGraphics}
        alt="About CTA Graphics"
        className="top-0 right-0 not-lg:mx-auto not-lg:w-3/4 lg:absolute"
      />
    </section>
  );
}
