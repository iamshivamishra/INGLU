import { Metadata } from "next";
import HeroSection from "./_components/HeroSection";
import CareerTypesSection from "./_components/CareerTypesSection";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 py-8 lg:mb-16 lg:gap-16">
      <HeroSection />
      <CareerTypesSection />
    </div>
  );
}
