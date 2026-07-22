import Image, { StaticImageData } from "next/image";
import OpenQuotes from "@/assets/quotes.svg";

type BrandLogoCardProps = {
  review: string;
  author: string;
  authorDesignation: string;
  authorAvatar: StaticImageData;
  position: number;
};

export default function ReviewCard({
  review,
  author,
  authorDesignation,
  authorAvatar,
  position,
}: BrandLogoCardProps) {
  return (
    <div
      style={{ "--position": position } as React.CSSProperties}
      className="item absolute left-full flex h-71.5 w-93.5 flex-col gap-3.5 rounded-3xl border border-black/25 bg-white p-7 transition-all"
    >
      <Image
        src={OpenQuotes}
        alt="Open Quotes"
        className="absolute top-0 left-0 w-13"
      />
      <span className="mt-4 text-lg">{review}</span>
      <div className="mt-auto min-h-px min-w-full bg-black/25" />
      <div className="flex items-center gap-4">
        <Image src={authorAvatar} alt="Author Avatar" className="size-16" />
        <div className="flex flex-col leading-tight">
          <span className="line-clamp-1 font-semibold">{author}</span>
          <span className="line-clamp-1">{authorDesignation}</span>
        </div>
      </div>
    </div>
  );
}
