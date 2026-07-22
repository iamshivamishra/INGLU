import { Sparkles, type LucideProps } from "lucide-react";

type E3CardProps = {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export default function E3Card({ title, description, Icon }: E3CardProps) {
  return (
    // Reusable card component for E3 model pillars
    <div className="flex w-full flex-col gap-2 rounded-3xl border border-[#A9C4FF] bg-linear-to-br from-[#3183FF3D] to-white to-25% p-5 shadow-[-6.25px_2.5px_30px_0_rgba(74,179,255,0.25)] lg:h-65 lg:w-86.25">
      {/* Icon and title */}
      <div className="mb-4 flex items-center gap-4 lg:mb-8">
        <div className="relative size-12.5 rounded-2xl bg-[#2563EB] p-2.25">
          <Sparkles
            size={15}
            className="absolute -top-1 right-0 text-[#B5CDFF]"
          />
          <Icon size={32} className="text-white" />
        </div>
        <span className="text-[20px] font-bold text-[#336EED] uppercase">
          {title}
        </span>
      </div>

      {/* Description */}
      <div className="mb-auto flex gap-4">
        <div className="mt-2 h-10 min-w-[2.5px] rounded-full bg-linear-to-b from-[#2B7FFF] to-[#00B8DB]" />
        <span>{description}</span>
      </div>

      {/* Decorative footer indicators */}
      <div className="flex gap-1.25">
        <div className="size-1.25 rounded-full bg-[#2B7FFF]" />
        <div className="size-1.25 rounded-full bg-[#00B8DB]" />
        <div className="size-1.25 rounded-full bg-[#51A2FF]" />
      </div>
    </div>
  );
}
