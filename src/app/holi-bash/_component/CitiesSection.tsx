import { Navigation } from "lucide-react";

export default function CitiesSection() {
  const cities = Array(10).fill("Mumbai");

  return (
    <div className="mx-auto max-w-7xl py-14">
      <h2 className="font-pjs mb-4 text-center text-5xl font-bold">Cities</h2>

      <div className="mx-auto flex w-271.25 max-w-5xl flex-wrap justify-center gap-6 py-10">
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex items-center gap-6 rounded-xl border border-[#D0D5DD] bg-[#F8FAFF] px-6 py-3 text-[#344054]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1F2937]">
              <Navigation className="h-3.5 w-3.5 text-white" />
            </span>

            <span className="text-base font-semibold">{city}</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute top-190 -right-25 -z-10 h-337.5 w-56 -rotate-15 rounded-[50%] bg-[#ECA1FF]/25 blur-2xl" />
      <div className="pointer-events-none absolute top-250 -left-50 -z-10 h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FF]/50 blur-2xl" />
    </div>
  );
}
