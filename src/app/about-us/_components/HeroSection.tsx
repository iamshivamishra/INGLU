import Image from "next/image";
import AboutHeroGraphics from "@/assets/abtHero.png";

export default function HeroSection() {
  return (
    // About page hero section
    <section className="relative mx-auto flex w-full flex-col gap-4">
      <div className="flex items-baseline gap-2">
        <span className="font-plus-jakarta-sans text-2xl font-extrabold lg:text-4xl">
          About
        </span>
        <span className="font-plus-jakarta-sans text-4xl font-extrabold text-[#2563EB] lg:text-7xl">
          INGLU
        </span>
      </div>

      {/* Introductory description */}
      <p className="w-full text-[#364153] lg:w-182.5 lg:text-lg">
        INGLU is one of the fastest-growing global youth communities, dedicated
        to empowering the next generation through holistic development. Our
        unique E³ Model — Education + Enhancement + Entertainment — ensures that
        every young individual gains meaningful, real-world experience beyond
        traditional academics.
      </p>

      {/* Key impact highlights */}
      <div className="flex w-full flex-col text-[#364153] lg:w-131 lg:text-lg">
        <span>Over the past 6 years, we have:</span>
        <ul className="list-outside list-disc pl-6">
          <li>Educated over 50,000 students through impactful courses</li>
          <li>Provided internship opportunities to more than 100,000 youth</li>
          <li>Delivered youth marketing services to 1,000+ leading brands</li>
          <li>
            Organized 500+ dynamic events, inspiring and engaging young minds
            across the country
          </li>
        </ul>
        <span>
          At INGLU, we don&apos;t just build experiences — we help shape
          futures.
        </span>
      </div>

      {/* Hero illustration */}
      <Image
        src={AboutHeroGraphics}
        alt="About Hero Graphics"
        className="right-0 bottom-0 lg:absolute"
      />
      <div className="pointer-events-none absolute -top-250 -right-2 -z-10 hidden h-337.5 w-56 -rotate-18 rounded-[50%] bg-[#ECA1FF]/50 blur-[50px] lg:block" />
      <div className="pointer-events-none absolute -bottom-100 -left-70 -z-10 h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FFB0] blur-[80px]" />
    </section>
  );
}
