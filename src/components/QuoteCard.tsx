import OpenQuotes from "@/assets/open_quotes.svg";
import CloseQuotes from "@/assets/close_quotes.svg";
import QuoteAvatar from "@/assets/image_30.png";
import Image, { StaticImageData } from "next/image";

type QuoteCardProps = {
  author: string;
  authorAvatar?: StaticImageData;
  authorDesignation: string;
  content: string;
};

export default function QuoteCard({
  author,
  authorAvatar = QuoteAvatar,
  authorDesignation,
  content,
}: QuoteCardProps) {
  return (
    // Reusable testimonial card component
    <div className="relative flex h-67.5 w-93.5 flex-col rounded-tr-3xl rounded-bl-3xl border border-black/25 px-8 pt-16 shadow-[6.25px_7.34px_3.26px_0_rgba(0_0_0/0.25)]">
      {/* Decorative quote icons */}
      <Image
        src={OpenQuotes}
        alt="Open Quotes"
        className="absolute top-0 left-0"
      />
      <Image
        src={CloseQuotes}
        alt="Close Quotes"
        className="absolute right-0 bottom-0"
      />

      {/* Author avatar */}
      <Image
        src={authorAvatar}
        alt="author avatar"
        className="absolute -top-1/12 right-0 size-28.25 rounded-full object-cover"
      />

      {/* Author details */}
      <span className="leading-none font-bold">{author}</span>
      <span className="text-xs leading-none">{authorDesignation}</span>

      {/* Testimonial content */}
      <p className="mt-2 text-justify text-[15px] leading-tight">{content}</p>
    </div>
  );
}
