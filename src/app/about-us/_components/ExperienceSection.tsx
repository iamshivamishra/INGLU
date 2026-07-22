import { GraduationCap, Sparkles, TrendingUp } from "lucide-react";
import ExperienceEducationGraphics from "@/assets/Education.png";
import ExperienceEnhancementGraphics from "@/assets/Enhancement.png";
import ExperienceEntertainmentGraphics from "@/assets/Entertainment.png";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    // Section detailing the E3 experience pillars
    <section className="mx-auto flex w-full flex-col gap-8 lg:gap-16">
      <span className="font-plus-jakarta-sans text-3xl font-bold uppercase lg:text-5xl">
        Experience
      </span>

      {/* Experience pillars */}
      <div className="flex flex-wrap gap-4.5">
        {/* Education */}
        <div className="flex flex-1 flex-col rounded-3xl p-7 shadow-[-10px_4px_33px_0px_rgba(0,0,0,0.25)]">
          <div className="relative w-fit rounded-2xl bg-[#2563EB] p-5">
            <GraduationCap size={40} className="text-white" />
            <Sparkles
              size={24}
              className="absolute -top-2 -right-2 text-[#B5CDFF]"
            />
          </div>
          <span className="font-plus-jakarta-sans my-4 bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl font-bold text-transparent uppercase lg:text-[32px]">
            Education
          </span>
          <p className="text-[#364153]">
            Providing webinars and seminars for holistic expansion, Conducting
            live workshops and conferences, Offers courses and bootcamps for
            competence improvement
          </p>
          <Image
            src={ExperienceEducationGraphics}
            alt="Experience Education Graphics"
            className="mt-auto"
          />
        </div>

        {/* Enhancement */}
        <div className="flex flex-1 flex-col rounded-3xl p-7 shadow-[0px_4px_33px_0px_rgba(0,0,0,0.25)]">
          <div className="relative w-fit rounded-2xl bg-[#2563EB] p-5">
            <TrendingUp size={40} className="text-white" />
            <Sparkles
              size={24}
              className="absolute -top-2 -right-2 text-[#B5CDFF]"
            />
          </div>
          <span className="font-plus-jakarta-sans my-4 bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl font-bold text-transparent uppercase lg:text-[32px]">
            Enhancement
          </span>
          <p className="text-[#364153]">
            Providing internships and on-ground training for students,
            Interpersonal skills development and enhancement, Also provides
            Internships in other companies
          </p>
          <Image
            src={ExperienceEnhancementGraphics}
            alt="Experience Enhancement Graphics"
            className="mt-auto"
          />
        </div>

        {/* Entertainment */}
        <div className="flex flex-1 flex-col rounded-3xl p-7 shadow-[10px_4px_33px_0px_rgba(0,0,0,0.25)]">
          <div className="relative w-fit rounded-2xl bg-[#2563EB] p-5">
            <Sparkles size={40} className="text-white" />
            <Sparkles
              size={24}
              className="absolute -top-2 -right-2 text-[#B5CDFF]"
            />
          </div>
          <span className="font-plus-jakarta-sans my-4 bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl font-bold text-transparent uppercase lg:text-[32px]">
            Entertainment
          </span>
          <p className="text-[#364153]">
            Providing webinars and seminars for holistic expansion, Conducting
            live workshops and conferences, Offers courses and bootcamps for
            competence improvement
          </p>
          <Image
            src={ExperienceEntertainmentGraphics}
            alt="Experience Entertainment Graphics"
            className="mt-auto"
          />
        </div>
      </div>
    </section>
  );
}
