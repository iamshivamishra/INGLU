import { LucideProps } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  iconBg: string;
  color: string;
};

export default function FeatureCard({
  title,
  description,
  Icon,
  iconBg,
  color,
}: FeatureCardProps) {
  return (
    <div className="w-full max-w-92.5 rounded-2xl border-2 border-[#E5E7EB] bg-white p-5 text-black sm:p-6">
      {/* Icon Box */}
      <div
        style={{ backgroundColor: iconBg }}
        className="flex h-14 w-14 items-center justify-center rounded-3xl sm:h-16 sm:w-16"
      >
        <Icon style={{ color }} className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>

      {/* Text */}
      <div className="mt-4 flex flex-col gap-1">
        <p className="font-arial text-lg text-black sm:text-xl">{title}</p>
        <p className="font-arial text-sm text-[#4A5565] sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
