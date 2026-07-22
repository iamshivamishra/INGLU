import Image, { StaticImageData } from "next/image";
import { Calendar, MapPin, ShoppingCart, Star } from "lucide-react";

type EventCardProps = {
  title: string;
  date: Date;
  venue: string;
  price: number;
  image: StaticImageData;
  rating: number;
  ratingscount: number;
};

export default function EventCard({
  title,
  date,
  venue,
  price,
  image,
  rating,
  ratingscount,
}: EventCardProps) {
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 overflow-hidden rounded-4xl bg-white p-5 shadow-[0px_2px_4px_0px_#0000005C]">
      <Image
        src={image}
        alt={title}
        className="aspect-square w-full rounded-3xl"
      />
      <div className="flex flex-col gap-3 px-2">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">{title}</span>
          <span className="text-xs font-light">Uncategorized</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#4A5565]">
            <Calendar size={20} />
            <span className="leading-none">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-[#4A5565]">
            <MapPin size={20} />
            <span className="leading-none">{venue}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-fit items-center gap-1 rounded-full bg-[#155DFC] py-0.5 pr-1 pl-0.5 text-white">
            <div className="size-4 rounded-full bg-white p-0.5">
              <Star size={12} className="fill-[#155DFC] text-[#155DFC]" />
            </div>
            <span className="leading-none">{rating.toFixed(1)}</span>
          </div>
          <span className="text-xs text-[#817D76]">({ratingscount})</span>
        </div>
        <span className="mt-3 text-2xl leading-none">₹{price.toFixed(2)}</span>
      </div>
      <button
        type="button"
        className="flex w-fit cursor-pointer items-center gap-2 self-end rounded-full bg-[#155DFC] px-5 py-3.5 text-white transition-all hover:opacity-75 active:opacity-50"
      >
        <ShoppingCart size={22} />
        <span className="text-lg leading-none">Add to Cart</span>
      </button>
    </div>
  );
}
