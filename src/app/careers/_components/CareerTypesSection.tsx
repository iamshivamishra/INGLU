import CareerTypeCard from "./CareerTypeCard";
import FunInternshipsGraphics from "@/assets/Fun Internships Graphics.svg";
import InternshipsAndJobsGraphics from "@/assets/Internships and Jobs Graphics.svg";
import {
  Briefcase,
  Gift,
  Pizza,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export default function CareerTypesSection() {
  return (
    <section className="flex w-full flex-col items-center gap-6 sm:gap-6 lg:flex-row lg:justify-center lg:gap-12">
      <CareerTypeCard
        title="Fun Internships at INGLU"
        description="Work, learn, and enjoy perks like pizza, goodies, or partner brand rewards, whatever our current partners bring in."
        Icons={[Pizza, Gift, Sparkles]}
        linkPath="/careers/fun-internships"
        graphicsImage={FunInternshipsGraphics}
      />
      <CareerTypeCard
        title="Internship & Jobs at INGLU"
        description="Structured roles, real responsibilities, and long-term career growth."
        Icons={[Briefcase, TrendingUp, Target]}
        linkPath="/careers/internships-jobs"
        graphicsImage={InternshipsAndJobsGraphics}
      />
    </section>
  );
}
