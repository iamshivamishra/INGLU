"use client";

import Image from "next/image";
import hero from "@/assets/hero.png";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart";

const PRODUCT_ID = "fanpit-access-delhi-6";

export default function CTASection() {
  const [added, setAdded] = useState(false);
  const { addToCart, getCart } = useCart();

  useEffect(() => {
    async function checkCart() {
      try {
        const cart = await getCart();
        const exists = cart.items.some(
          (item: { productId: string }) => item.productId === PRODUCT_ID,
        );
        if (exists) setAdded(true);
      } catch (err) {
        console.error("Failed to check cart", err);
      }
    }

    checkCart();
  }, [getCart]);

  async function handleBuyNow() {
    if (added) {
      return;
    }

    await addToCart({
      productId: PRODUCT_ID,
      title: "FANPIT Access: DELHI 6",
      image: hero.src,
      price: 1000,
      quantity: 1,
      rating: 5,
    });

    setAdded(true);

  }

  return (
    <section className="flex w-full flex-col gap-4">
      <div className="relative flex aspect-1277/551 w-full flex-col gap-4 overflow-hidden rounded-2xl p-10 text-white">
        <Image
          src={hero}
          alt="Fanpit Access Delhi 6"
          fill
          unoptimized
          className="absolute -z-10 object-cover"
        />
        <div className="progressive-blur absolute inset-0 -z-10 bg-linear-to-r from-black/67 to-transparent backdrop-blur-xs" />

        <span className="max-w-xl text-[64px] leading-none font-bold">
          FANPIT Access: DELHI 6
        </span>

        <p className="max-w-xl text-[32px] leading-tight uppercase">
          Underground Ft. Foosie Gang Arpit Bala x Bhappa
        </p>

        <button
          onClick={handleBuyNow}
          className="mt-auto flex w-fit items-center gap-4 rounded-full border-2 border-white px-6 py-5 text-lg uppercase transition-all hover:bg-white hover:text-black active:opacity-75"
        >
          <span className="leading-none">
            {added ? "Item added to cart" : "Buy Now"}
          </span>

          {added ? <ArrowUpRight size={20} /> : <ArrowRight size={20} />}
        </button>
      </div>

      
    </section>
  );
}
