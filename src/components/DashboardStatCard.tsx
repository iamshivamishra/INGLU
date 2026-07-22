import { type LucideProps } from "lucide-react";

type DashboardStatCardProps = {
  title: string;
  stat: number;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  iconColor: string;
  iconBGColor: string;
};

export default function DashboardStatCard({
  title,
  stat,
  Icon,
  iconColor,
  iconBGColor,
}: DashboardStatCardProps) {
  return (
    <div className="flex flex-1 items-center rounded-xl border border-[#CDCDCD] p-4 shadow-[3px_5px_6.3px_0px_#00000017]">
      <div className="flex flex-1 flex-col gap-0.5">
        <span className="text-xs text-[#6A7282]">{title}</span>
        <span className="text-3xl">{stat}</span>
      </div>
      <div
        style={{ backgroundColor: iconBGColor }}
        className="rounded-[14px] p-3"
      >
        <Icon size={24} strokeWidth={1.5} style={{ color: iconColor }} />
      </div>
    </div>
  );
}
