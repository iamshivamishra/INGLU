import { Eye, Sparkles, Target } from "lucide-react";

export default function VisionMissionSection() {
  return (
    // Section outlining organization vision and mission
    <section className="flex flex-wrap justify-center gap-6 lg:gap-12">
      {/* Vision card */}
      <div className="flex w-full flex-col gap-4 rounded-[40px] border-2 border-[#A9C4FF] bg-linear-to-br from-[#3183FF]/25 to-transparent to-20% p-6 shadow-[-10px_4px_48px_0px_rgba(74,179,255,0.25)] lg:w-138 lg:gap-6 lg:p-10">
        <div className="mb-3.5 flex items-center gap-12">
          <div className="relative rounded-3xl bg-[#2563EB] p-5">
            <Eye size={40} className="text-white" />
            <Sparkles
              size={24}
              className="absolute -top-2 -right-2 text-[#B5CDFF]"
            />
          </div>
          <span className="font-plus-jakarta-sans text-2xl font-extrabold tracking-wide text-[#2563EB]">
            Vision
          </span>
        </div>
        <div className="flex gap-4">
          <div className="mt-10.5 h-16 min-w-1 rounded-full bg-linear-to-b from-[#2B7FFF] to-[#00B8DB]" />
          <p className="text-[#364153]">
            Our vision is to create the world&apos;s best youth hub, where young
            people can find any solutions they require, and to become the most
            popular holistic development platform on the planet. The vision is
            to build the world&apos;s best youth ecosystem, establishing a
            strong community to assist youth worldwide.
          </p>
        </div>
        <div className="mt-auto flex gap-2">
          <div className="size-2 rounded-full bg-[#2B7FFF]" />
          <div className="size-2 rounded-full bg-[#00B8DB]" />
          <div className="size-2 rounded-full bg-[#51A2FF]" />
        </div>
      </div>

      {/* Mission card */}
      <div className="flex w-full flex-col gap-4 rounded-[40px] border-2 border-[#FFB3C9] bg-linear-to-br from-[#F6339A]/25 to-transparent to-20% p-6 shadow-[10px_4px_48px_0px_rgba(255,94,244,0.25)] lg:w-138 lg:gap-6 lg:p-10">
        <div className="mb-3.5 flex items-center gap-12">
          <div className="relative rounded-3xl bg-linear-to-br from-[#F6339A] to-[#FF2056] p-5">
            <Target size={40} className="text-white" />
            <Sparkles
              size={24}
              className="absolute -top-2 -right-2 text-[#FF97CE]"
            />
          </div>
          <span className="font-plus-jakarta-sans text-2xl font-extrabold tracking-wide text-[#E60174]">
            Mission
          </span>
        </div>
        <div className="flex gap-4">
          <div className="mt-10.5 h-16 min-w-1 rounded-full bg-linear-to-b from-[#F6339A] to-[#FF2056]" />
          <p className="text-[#364153]">
            Our mission is to create the strongest community on the globe where
            youth can achieve holistic experiences, which are necessary for the
            growth of an individual. The community where youth can get an
            education where they can enhance their own self and get entertained
            throughout the process forming the best overall experience.
          </p>
        </div>
        <div className="mt-auto flex gap-2">
          <div className="size-2 rounded-full bg-[#F6339A]" />
          <div className="size-2 rounded-full bg-[#FF2056]" />
          <div className="size-2 rounded-full bg-[#FB64B6]" />
        </div>
      </div>
      <div className="pointer-events-none absolute top-200 -right-12 -z-30 hidden h-337.5 w-56 -rotate-5 rounded-[50%] bg-[#ECA1FF]/30 blur-2xl lg:block" />
    </section>
  );
}
