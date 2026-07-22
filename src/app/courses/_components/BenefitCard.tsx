import { LucideProps } from "lucide-react";

type BenefitCardProps = {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export default function BenefitCard({
  title,
  description,
  Icon,
}: BenefitCardProps) {
  return (
    <div className="flex max-w-71.5 flex-col items-center gap-2 rounded-2xl border border-[#CDCED2] bg-linear-to-b from-[#EFF6FF4D] to-white p-6">
      <div className="mb-2 size-14 rounded-full bg-[#155DFC] p-3.5">
        <Icon size={28} className="text-white" />
      </div>

      <h3 className="text-center text-[#1A1A1A]">{title}</h3>
      <p className="text-center text-sm text-[#4A5565]">{description}</p>
    </div>
  );
}
