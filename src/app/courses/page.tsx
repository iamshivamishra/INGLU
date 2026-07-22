// import AboutSection from "./_components/AboutSection";
// import BenefitsSection from "./_components/BenefitsSection";
// import BootcampsSection from "./_components/BootcampsSection";
// import QueriesSection from "./_components/QueriesSection";
// import CTASection from "./_components/CTASection";
// import MentorSection from "./_components/MentorSection";
// import TestimonialsSection from "./_components/TestimonialsSection";
import ComingSoon from "@/components/ComingSoon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
};

export default function Courses() {
  return (
    // Page-level container composing all About page sections
    <div className="mx-auto mb-16 flex w-full max-w-7xl flex-col gap-24 py-8">
      {/* <CTASection />
      <AboutSection />
      <BootcampsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <MentorSection />
      <QueriesSection /> */}
      <ComingSoon />
    </div>
  );
}
