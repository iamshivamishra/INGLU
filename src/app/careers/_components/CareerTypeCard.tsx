import { ArrowRight, LucideProps } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CareerTypeCardProps = {
  title: string;
  description: string;
  Icons: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >[];
  linkPath: string;
  graphicsImage: StaticImageData;
};

export default function CareerTypeCard({
  title,
  description,
  Icons,
  linkPath,
  graphicsImage,
}: CareerTypeCardProps) {
  return (
    <div className="relative flex w-[95%] max-w-130 flex-col gap-3 rounded-[40px] border-2 border-[#A9C4FF] bg-linear-to-br from-[#3183FF]/25 to-transparent to-20% p-4 pb-28 shadow-[-14px_4px_48px_0px_#4AB3FF40] sm:max-w-218 sm:gap-12 sm:p-6 sm:pb-24 md:w-[90%] md:max-w-120 lg:max-w-140 lg:gap-16 lg:p-8 lg:pb-60">
      <div className="flex gap-4 text-[#105AFF]">
        {Icons.map((Icon, index) => (
          <Icon key={index} className="size-7 sm:size-9" />
        ))}
      </div>
      <div className="mb-20 flex gap-2">
        <div className="min-h-16 min-w-1 rounded-full bg-linear-to-b from-[#2B7FFF] to-[#00B8DB]" />
        <div className="flex flex-1 flex-col leading-tight">
          <span className="text-[32px] font-medium text-[#2563EB]">
            {title}
          </span>
          <p className="text-sm text-black/60">{description}</p>
        </div>
      </div>
      <Image
        src={graphicsImage}
        alt="Career Type Card Graphics"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 w-72.5 max-w-full -translate-x-1/2 lg:w-[80%]"
      />
      <Link
        href={linkPath}
        className="absolute right-4 bottom-4 z-10 flex items-center gap-2 rounded-full bg-[#2563EB] px-3 py-2 text-white transition-all hover:opacity-75 active:opacity-50 sm:p-3"
      >
        <span className="text-xs leading-none uppercase">
          View Opportunities
        </span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
