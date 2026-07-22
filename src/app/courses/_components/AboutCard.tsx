import { LucideProps } from "lucide-react";

type AboutCardProps = {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export default function AboutCard({
  title,
  description,
  Icon,
}: AboutCardProps) {
  return (
    <div className="flex w-xs flex-col items-center rounded-2xl border border-black/10 bg-[#F5F7FF] px-2 py-8 shadow-[0px_4.05px_4.05px_0px_#00000040]">
      <div className="my-4 flex size-16 items-center justify-center rounded-full border border-black/25 bg-[#DBEAFE] shadow">
        <Icon size={32} className="text-[#155DFC]" />
      </div>
      <h3 className="font-pjs text-xl text-[#101828]">{title}</h3>
      <p className="text-center text-[#4A5565]">{description}</p>
      <div className="pointer-events-none absolute -top-200 -right-1 -z-10 h-337.5 w-56 -rotate-20 rounded-[50%] bg-[#ECA1FF]/15 blur-2xl" />
      <div className="pointer-events-none absolute -top-100 -left-50 -z-10 h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FF]/15 blur-2xl" />
    </div>
  );
}
