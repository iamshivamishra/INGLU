import Image from "next/image";
import mentorPic from "@/assets/Mentor.png";

export default function MentorSection() {
  return (
    <section className="flex w-full flex-col items-center">
      {/* TOP HEADING */}
      <span className="font-pjs text-4xl font-semibold text-[#1A1A1A]">
        Meet your Mentor
      </span>
      <p className="text-lg text-[#4A5565]">
        Learn from the best in the industry
      </p>

      {/* MAIN CARD */}
      <div className="mt-16 flex w-263 items-center gap-16 rounded-2xl border border-black/10 bg-[#F4F7FE] px-18 py-14 shadow-[0px_4px_25px_rgba(0,0,0,0.08)]">
        {/* LEFT IMAGE */}
        <Image
          src={mentorPic}
          alt="Mentor"
          className="aspect-square size-73 rounded-[14px]"
        />

        {/* RIGHT CONTENT */}
        <div className="flex flex-1 flex-col justify-center gap-2">
          <h3 className="font-pjs text-4xl font-semibold text-[#155DFC]">
            Mr. Ansh
          </h3>
          <p className="text-xl font-semibold text-[#364153]">
            Lead Instructor & Mentor
          </p>

          <p className="text-[#4A5565]">
            With 10+ years of industry experience, Ansh Sir has mentored
            thousands of students through practical, outcome-driven learning.
            His mentorship helps learners build confidence, real-world skills,
            strong portfolios, and clear career direction.
          </p>

          {/* TAGS */}
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#DBEAFE] px-4 py-1 text-sm text-[#1A4DF7]">
              10+ Years Experience
            </span>
            <span className="rounded-full bg-[#DBEAFE] px-4 py-1 text-sm text-[#1A4DF7]">
              1000+ Students mentored
            </span>
            <span className="rounded-full bg-[#DBEAFE] px-4 py-1 text-sm text-[#1A4DF7]">
              Industry Expert
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
