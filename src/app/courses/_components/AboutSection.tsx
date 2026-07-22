import AboutCard from "./AboutCard";
import { Briefcase, Lightbulb, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="flex w-full flex-col items-center gap-3 bg-white">
      {/* Top Badge */}
      <span className="rounded-full bg-[#EFF6FF] px-6 py-2 text-sm font-medium text-[#155DFC]">
        Welcome to INGLU Education
      </span>

      {/* Title */}
      <span className="font-pjs text-4xl font-semibold text-[#1A1A1A]">
        About INGLU Education
      </span>

      {/* Card Section */}
      <div className="mt-16 flex flex-wrap justify-between gap-12">
        <AboutCard
          title="Build Skills"
          description="Master in-demand technologies through project-based learning and real-world applications."
          Icon={Target}
        />
        <AboutCard
          title="Gain Confidence"
          description="Work on live projects and receive personalized mentorship to boost your professional confidence."
          Icon={Lightbulb}
        />
        <AboutCard
          title="Career Ready"
          description="Get placement support, portfolio building, and industry connections to kickstart your career."
          Icon={Briefcase}
        />
      </div>
    </section>
  );
}
