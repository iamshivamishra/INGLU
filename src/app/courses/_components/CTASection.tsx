import Image from "next/image";
import courseBack from "@/assets/CourseImage.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative flex aspect-1277/551 w-full flex-col gap-4 overflow-hidden rounded-2xl p-10 text-white">
      {/* Background Image */}
      <Image
        src={courseBack}
        alt="Marketing 101"
        fill
        className="absolute -z-10 object-cover"
        unoptimized
      />

      {/* Dark overlay */}
      <div className="progressive-blur absolute inset-0 -z-10 bg-linear-to-r from-black/67 to-transparent backdrop-blur-xs" />

      {/* Text content */}
      <span className="max-w-xl text-[64px] leading-none font-bold">
        Marketing 101
      </span>

      <p className="max-w-md text-[32px] leading-tight">
        Lorem Ipsum zero to hero in 101 minutes
      </p>

      {/* Button */}
      <button className="mt-auto flex w-fit items-center gap-2 rounded-full border border-white px-6 py-3 text-lg font-medium transition hover:bg-white hover:text-black">
        BUY NOW →
      </button>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-0 z-10 flex w-full items-center justify-center gap-3">
        {/* Left arrow */}
        <button className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white font-bold text-black transition-all hover:opacity-75 active:opacity-50">
          <ArrowLeft size={16} />
        </button>

        {/* Pager dots */}
        <div className="flex items-center gap-2">
          {[...Array(8)].map((_, i) => (
            <button
              key={i}
              type="button"
              className="cursor-pointer opacity-75 transition-all hover:opacity-100"
            >
              <div
                className={`size-2 rounded-full ${
                  i === 0 ? "bg-[#155DFC]" : "bg-white"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right arrow */}
        <button className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white font-bold text-black transition-all hover:opacity-75 active:opacity-50">
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
