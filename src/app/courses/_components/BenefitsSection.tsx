import { Award, FileText, Gift, LucideProps, Pizza } from "lucide-react";
import BenefitCard from "./BenefitCard";

type Benefit = {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export default function BenefitsSection() {
  const benefits: Benefit[] = [
    {
      title: "Certificates",
      description:
        "Industry-recognized completion certificates for all bootcamps.",
      Icon: Award,
    },
    {
      title: "Letter of Recommendation",
      description: "Personalised LOR from mentors to boost your applications.",
      Icon: FileText,
    },
    {
      title: "Pizza Party",
      description: "Fun community meetups and networking events with peers.",
      Icon: Pizza,
    },
    {
      title: "Special Event access",
      description:
        "Exclusive workshops, hackathons, and industry expert sessions.",
      Icon: Gift,
    },
  ];

  return (
    <section className="flex w-full flex-col items-center gap-2">
      {/* Heading */}
      <span className="font-pjs text-4xl font-semibold text-[#1A1A1A]">
        Exclusive Student Benefits
      </span>
      <p className="text-lg text-[#4A5565]">
        Unlock a complete learning and career growth ecosystem
      </p>

      {/* Benefit Cards */}
      <div className="mt-16 flex w-full flex-wrap justify-center gap-4">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
            Icon={benefit.Icon}
          />
        ))}
      </div>
    </section>
  );
}
