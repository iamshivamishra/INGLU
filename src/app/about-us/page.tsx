import HeroSection from "./_components/HeroSection";
import CTASection from "./_components/CTASection";
import StatsSection from "./_components/StatsSection";
import VisionMissionSection from "./_components/VisionMissionSection";
import ExperienceSection from "./_components/ExperienceSection";
import SegmentsSection from "./_components/SegmentsSection";
import TeamSection from "./_components/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = { title: "About Us" };
export default function AboutUs() {
  return (
    // Page-level container composing all About page sections
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 p-6 lg:gap-32">
      <HeroSection />
      <CTASection />
      <StatsSection />
      <VisionMissionSection />
      <ExperienceSection />
      <SegmentsSection />
      {/* <TeamSection /> */}
    </div>
  );
}
