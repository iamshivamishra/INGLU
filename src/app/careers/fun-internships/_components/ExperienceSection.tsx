import {
  Brain,
  Gift,
  Laptop,
  LucideProps,
  PartyPopper,
  Pizza,
  Users,
} from "lucide-react";

import React from "react";
import FeatureCard from "./FeatureCard";

type Feature = {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  iconBg: string;
  color: string;
};

const features: Feature[] = [
  {
    title: "Partner Perks",
    description: "Pizza, snacks, gifts – varies by partner",
    Icon: Pizza,
    iconBg: "#FDF2F8",
    color: "#FF6B9D",
  },
  {
    title: "Learn By Doing",
    description: "Real work experience on actual projects",
    Icon: Brain,
    iconBg: "#EFF6FF",
    color: "#0066FF",
  },
  {
    title: "Community & Networking",
    description: "Connect with peers and mentors",
    Icon: Users,
    iconBg: "#EFF6FF",
    color: "#0066FF",
  },
  {
    title: "Events & Engagement",
    description: "Regular fun events and team activities",
    Icon: PartyPopper,
    iconBg: "#FDF2F8",
    color: "#FF6B9D",
  },
  {
    title: "Brand Rewards",
    description: "Exclusive goodies from partner brands",
    Icon: Gift,
    iconBg: "#FDF2F8",
    color: "#FF6B9D",
  },
  {
    title: "Flexible Work",
    description: "Work remotely or from our cool office",
    Icon: Laptop,
    iconBg: "#EFF6FF",
    color: "#0066FF",
  },
];
export default function ExperienceSection() {
  return (
    <section className="flex flex-col items-center gap-8 px-4 sm:px-6">
      <div className="flex flex-col items-center text-center">
        <p className="font-pjs text-[28px] font-medium sm:text-[36px] lg:text-[48px]">
          What You&apos;ll Experience
        </p>

        <p className="text-sm text-[#4A5565] sm:text-base lg:text-lg">
          More than just an internship – it&apos;s a fun journey!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
