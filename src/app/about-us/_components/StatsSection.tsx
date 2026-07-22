export default function StatsSection() {
  return (
    // Section highlighting community scale and impact metrics
    <section className="flex flex-col items-center gap-16">
      <div className="flex flex-col gap-2">
        <span className="font-plus-jakarta-sans text-center text-2xl font-bold tracking-wider lg:text-[40px]">
          We Are INDIA&apos;s Biggest Global Youth Community
        </span>
        <p className="w-full text-center tracking-wider text-[#364153] lg:w-248 lg:text-lg">
          We are proud to be INDIA&apos;s largest global youth community,
          connecting passionate young minds from every corner of the country and
          beyond. By fostering collaboration, innovation, and leadership, we aim
          to create a network where ideas thrive and dreams turn into reality.
        </p>
      </div>

      {/* Key statistics */}
      <div className="flex w-full flex-col items-center gap-4 rounded-[36px] px-12 py-6 shadow-[0px_7px_15.5px_1px_rgba(0_0_0/0.25)] lg:w-fit lg:flex-row lg:gap-8">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium tracking-widest lg:text-[40px]">
            100K+
          </span>
          <span className="font-medium tracking-wider">Youth Impacted</span>
        </div>
        <div className="min-h-px min-w-full bg-black lg:max-h-18 lg:min-h-18 lg:min-w-px" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium tracking-widest lg:text-[40px]">
            1000K+
          </span>
          <span className="font-medium tracking-wider">Colaborations</span>
        </div>
        <div className="min-h-px min-w-full bg-black lg:max-h-18 lg:min-h-18 lg:min-w-px" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium tracking-widest lg:text-[40px]">
            500K+
          </span>
          <span className="font-medium tracking-wider">Events Curated</span>
        </div>
        <div className="min-h-px min-w-full bg-black lg:max-h-18 lg:min-h-18 lg:min-w-px" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium tracking-widest lg:text-[40px]">
            5+
          </span>
          <span className="font-medium tracking-wider">Countries</span>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-300 -left-35 -z-10 h-337.5 w-56 -rotate-8 rounded-[50%] bg-[#C0A1FFB0]/10 blur-2xl" />
    </section>
  );
}
