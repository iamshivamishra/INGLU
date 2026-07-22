"use client";
import Image, { StaticImageData } from "next/image";
import { Calendar, MapPin, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "./Toast";
import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";

type ProductCardProps = {
  title: string;
  date: Date;
  venue: string;
  price: number;
  image: StaticImageData;
  rating: number;
  ratingscount: number;
};

export default function ProductCard({
  title,
  date,
  venue,
  price,
  image,
  rating,
  ratingscount,
}: ProductCardProps) {
  const { addToCart, getCart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(0);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  useEffect(() => {
    async function syncQuantity() {
      const cart = await getCart();
      const item = cart.items.find(
        (i: { productId: string; quantity: number }) => i.productId === title,
      );
      if (item) setQuantity(item.quantity);
    }

    syncQuantity();
  }, [getCart, title]);

  const handleAddToCart = async () => {
    await addToCart({
      productId: title,
      title,
      price,
      image: image.src,
      quantity: 1,
      rating,
    });

    setQuantity(1);
    toast(
      <span className="flex items-center gap-2">
        <CircleCheck size={18} />
        Item added to cart
      </span>,
      "success",
      1000,
    );
  };

  const increase = async () => {
    const newqty = quantity + 1;
    await updateQuantity(title, newqty);
    setQuantity(newqty);
  };
  const decrease = async () => {
    const newqty = quantity - 1;
    await updateQuantity(title, newqty);
    setQuantity(newqty);
  };
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

      {quantity === 0 ? (
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-43.5 flex cursor-pointer items-center gap-2 self-end rounded-full bg-[#155DFC] px-5 py-3.5 text-white transition-all hover:opacity-75 active:opacity-50"
        >
          <ShoppingCart size={22} />
          <span className="text-lg leading-none">Add to Cart</span>
        </button>
      ) : (
        <div className="flex items-center self-end overflow-hidden rounded-full bg-[#155DFC] text-white px-4 w-43.5 py-2.25 justify-between gap-2">
          <button onClick={decrease} className="text-2xl cursor-pointer">
            -
          </button>

          <span className=" text-2xl ">{quantity.toString().padStart(2, "0")}</span>
          <button onClick={increase} className=" text-2xl cursor-pointer">
            +
          </button>
        </div>
      )}
    </div>
  );
}
