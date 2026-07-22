import { ArrowRight } from "lucide-react";
import Image from "next/image";
import InternshipsGraphics from "@/assets/Internships Graphics.svg";

export default function CTASection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-0">
      <p className="font-pjs mx-auto w-full max-w-205 text-center text-4xl leading-[1.125] font-medium sm:text-6xl lg:mx-0 lg:text-left lg:text-8xl">
        Fun Internships at <span className="text-[#0066FF]">INGLU</span>
      </p>

      <p className="mx-auto mt-4 w-full max-w-143.75 text-center text-base text-[#364153] sm:text-lg lg:mx-0 lg:text-left">
        Learn, work, and enjoy perks like pizza, goodies, and partner brand
        rewards.
      </p>

      <button
        type="button"
        className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-[#2563EB] px-4 py-3 text-white sm:mt-12 sm:gap-4 sm:px-6 sm:py-5 lg:mx-0"
      >
        <span className="leading-snug font-medium tracking-widest uppercase sm:text-lg lg:text-left">
          Apply Now
        </span>
        <ArrowRight size={24} className="sm:h-6 sm:w-6" />
      </button>

      <Image
        src={InternshipsGraphics}
        alt="Internships Graphics"
        className="-mx-4 mt-6 w-full max-w-none lg:absolute lg:-right-14 lg:-bottom-20 lg:mx-0 lg:w-auto"
      />
      {/* <div className="pointer-events-none absolute -top-200 -right-25 -z-10 hidden h-337.5 w-56 -rotate-15 rounded-[50%] bg-[#ECA1FF]/30 blur-2xl lg:block" />
      <div className="pointer-events-none absolute -top-100 -left-70 -z-10 hidden h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FF]/50 blur-2xl lg:block" /> */}
    </section>
  );
}
