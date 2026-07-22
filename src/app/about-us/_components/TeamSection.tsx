import TeamCard from "@/components/TeamCard";

export default function TeamSection() {
  return (
    // Section showcasing the core team members
    <section className="mx-auto flex w-7xl flex-col">
      <div className="flex flex-col">
        <span className="font-plus-jakarta-sans text-[20px] leading-none font-bold">
          We are the best
        </span>
        <span className="font-plus-jakarta-sans text-5xl leading-none font-bold uppercase">
          Dream Team
        </span>
      </div>

      {/* Team members grid */}
      <div className="my-24 flex flex-wrap justify-between gap-x-20 gap-y-12">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <div className="pointer-events-none absolute top-800 -right-12 -z-30 h-337.5 w-56 -rotate-5 rounded-[50%] bg-[#ECA1FF]/30 blur-2xl" />
    </section>
  );
}
