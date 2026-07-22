export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-2">
      <span className="font-pjs w-full max-w-4xl text-center text-5xl leading-tight font-medium lg:text-[96px]">
        Careers at <span className="font-medium text-blue-600">INGLU</span>{" "}
        aren&apos;t boring
      </span>

      <p className="text-sm text-[#364153] sm:text-base lg:text-lg">
        Choose how you want to grow with us.
      </p>
      <div className="lg-block pointer-events-none absolute -top-200 -right-5 -z-10 hidden h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#ECA1FF]/30 blur-2xl" />
      <div className="lg-block pointer-events-none absolute bottom-50 -left-40 -z-10 hidden h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FF]/50 blur-2xl" />
    </section>
  );
}
