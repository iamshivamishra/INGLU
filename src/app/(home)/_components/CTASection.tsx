"use client";

import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-4 md:gap-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="font-plus-jakarta-sans text-3xl md:text-4xl lg:text-5xl">
          Empowering Students with
        </h2>

        <h1 className="font-plus-jakarta-sans text-3xl leading-tight font-bold text-[#2563EB] sm:text-5xl md:text-6xl lg:text-7xl">
          Real-World Exposure
        </h1>

        <p className="max-w-xl text-base sm:text-lg md:max-w-3xl md:text-[20px] lg:max-w-4xl">
          INGLU is one of the “FASTEST GROWING GLOBAL YOUTH COMMUNITY” that
          helps youth in holistic development of experience by working on E3
          model which states Experience is a combination of Education +
          Enhancement + Entertainment.
        </p>
      </div>

      <button
        type="button"
        onClick={() => router.push("/about-us")}
        className="cursor-pointer rounded-full bg-linear-to-br from-[#155DFC] to-[#5087FF] px-5 py-2 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none md:px-6 md:py-2 md:text-xl"
      >
        Know More
      </button>

      <div className="aspect-video w-full max-w-xs overflow-hidden rounded-3xl border-2 border-[#0094E6] shadow-2xl sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/UUxRK9Nk4v0?autoplay=1&mute=1&loop=1&playlist=UUxRK9Nk4v0&controls=0&rel=0&modestbranding=1&playsinline=1"
          title="YouTube video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="pointer-events-none absolute -top-40 right-10 -z-10 h-64 w-40 -rotate-12 rounded-[50%] bg-[#ECA1FF61] blur-[80px] md:-top-56 md:right-24 md:h-[337.5px] md:w-56" />
      <div className="pointer-events-none absolute -bottom-20 -left-32 -z-10 h-64 w-40 -rotate-12 rounded-[50%] bg-[#C0A1FFB0] blur-[80px] md:-bottom-1/12 md:-left-52 md:h-[337.5px] md:w-56" />
    </section>
  );
}
