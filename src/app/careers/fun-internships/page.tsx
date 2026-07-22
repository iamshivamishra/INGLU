import { Metadata } from "next";
import ApplyInfoSection from "./_components/ApplyInfoSection";
import CTASection from "./_components/CTASection";
import ExperienceSection from "./_components/ExperienceSection";
// import PartnersSection from "./_components/PartnersSection";
// import WorkingSection from "./_components/WorkingSection";

export const metadata: Metadata = { title: "Fun Internships" };
export default function Internships() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 py-6 lg:gap-20 lg:py-24">
      <CTASection />
      <ExperienceSection />
      {/* <WorkingSection /> */}
      <ApplyInfoSection />
      {/* <PartnersSection /> */}
    </div>
  );
}
