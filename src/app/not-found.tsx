import Image from "next/image";
import NotFoundGraphics from "@/assets/not-found-graphics.svg";
import Clouds from "@/assets/clouds.png";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative mx-auto mb-12 flex w-full max-w-7xl flex-col items-center gap-3 px-4 text-center sm:mb-16 sm:gap-4">
      <span className="mb-2 text-3xl text-[#007AB9] uppercase sm:mb-4 sm:text-5xl md:text-7xl">
        Error
      </span>

      <div className="relative w-full">
        <Image
          src={Clouds}
          alt="Clouds"
          className="pointer-events-none absolute -top-10 left-0 w-[70%] sm:-top-24 sm:w-[60%] md:-top-36"
        />
        <Image
          src={Clouds}
          alt="Clouds"
          className="pointer-events-none absolute -top-4 right-0 w-[70%] sm:-top-10 sm:w-[60%] md:-top-16"
        />
        <Image
          src={NotFoundGraphics}
          alt="Not Found Graphics"
          className="mx-auto max-w-full"
        />
      </div>

      <span className="font-pjs text-xl leading-tight font-bold sm:text-3xl md:text-[62px]">
        Oops, I think you&apos;re lost...
      </span>

      <span className="text-sm sm:text-lg md:text-[24px]">
        let&apos;s get you back to somewhere familiar
      </span>

      <Link
        href={"/"}
        className="mt-3 flex items-center gap-3 rounded-[14px] border-2 bg-[#F4F7FE] px-4 py-3 shadow-[3px_6px_4px_0px_#00000040] transition-all active:translate-y-2 active:shadow-none sm:mt-4 sm:gap-5 sm:px-6 sm:py-4"
      >
        <ArrowLeftCircle size={24} className="sm:size-7" />
        <span className="text-base sm:text-xl md:text-2xl">Back to home</span>
      </Link>
    </div>
  );
}
