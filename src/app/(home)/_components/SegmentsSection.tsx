import { GraduationCap } from "lucide-react";
import INGLUEducationGraphics from "@/assets/INGLU Education Graphics.png";
import INGLUCreatorsIcon from "@/assets/INGLU Creators Icon.png";
import INGLUCreatorsGraphics from "@/assets/INGLU Creators Graphics.png";
import INGLUTravelsIcon from "@/assets/INGLU Travels Icon.png";
import INGLUTravelsGraphics from "@/assets/INGLU Travels Graphics.png";
import INGLUESportsIcon from "@/assets/INGLU E-Sports Icon.png";
import INGLUESportsGraphics from "@/assets/INGLU E-Sports Graphics.png";
import INGLUEventsIcon from "@/assets/INGLU Events Icon.png";
import INGLUMerchandiseIcon from "@/assets/INGLU Merchandise Icon.png";
import INGLUSocialIcon from "@/assets/INGLU Social Icon.png";
import MuseRecordsIcon from "@/assets/Muse Records Icon.png";
import MuseRecordsGraphics from "@/assets/Muse Records Graphics.png";
import Image from "next/image";

export default function SegmentsSection() {
  return (
    // Section presenting INGLU’s business and community segments
    <section className="relative flex flex-col items-center gap-8">
      <h2 className="font-plus-jakarta-sans text-3xl lg:text-5xl font-extrabold uppercase">
        Our Segments
      </h2>

      {/* Masonry-style grid for segment cards */}
      <div className="lg:h-277 w-full lg:w-308 not-lg:flex not-lg:flex-col  lg:columns-3  gap-4 [column-fill:auto]">
        {/* INGLU Education */}
        <div className="relative mb-4 flex h-133 break-inside-avoid flex-col gap-1 rounded-4xl border border-black/25 p-7 shadow-[13px_10px_33.4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex size-10 lg:size-20 items-center justify-center rounded-2xl bg-[#2563EB]">
            <GraduationCap  className="text-white size-5 lg:size-10" />
          </div>
          <span className="font-plus-jakarta-sans bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl lg:text-[32px] font-bold text-transparent uppercase">
            Inglu Education
          </span>
          <p className="leading-snug">
            The segment focuses on the educational development of the youth.
          </p>
          <Image
            src={INGLUEducationGraphics}
            alt="INGLU Education Graphics"
            className="absolute bottom-2 left-1/2 -translate-x-1/2"
          />
        </div>

        {/* INGLU Creators */}
        <div className="relative flex h-140 break-inside-avoid flex-col gap-1 rounded-4xl border border-black/25 p-7 shadow-[13px_10px_33.4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex size-10 lg:size-20 items-center justify-center rounded-2xl bg-[#2563EB]">
            <Image src={INGLUCreatorsIcon} alt="INGLU Creators Icon" className="aspect-square max-w-[75%]" />
          </div>
          <span className="font-plus-jakarta-sans bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl lg:text-[32px] font-bold text-transparent uppercase">
            Inglu Creators
          </span>
          <p className="leading-snug">
            A dynamic segment that empowers budding youth creators by providing
            essential support and resources, fostering a vibrant platform for
            creative expression and growth
          </p>
          <Image
            src={INGLUCreatorsGraphics}
            alt="INGLU Creators Graphics"
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>

        {/* INGLU Travels */}
        <div className="relative mb-4 flex h-79 break-inside-avoid flex-col gap-1 rounded-4xl border border-black/25 p-7 shadow-[13px_10px_33.4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex size-10 lg:size-20 items-center justify-center rounded-2xl bg-[#2563EB]">
            <Image src={INGLUTravelsIcon} alt="INGLU Travels Icon" className="aspect-square max-w-[75%]" />
          </div>
          <span className="font-plus-jakarta-sans bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl lg:text-[32px] font-bold text-transparent uppercase">
            Inglu Travels
          </span>
          <p className="leading-snug">
            The area that is focusing on organizing the most amazing & unique
            youth trips.
          </p>
          <Image
            src={INGLUTravelsGraphics}
            alt="INGLU Travels Graphics"
            className="absolute -bottom-2.5 left-1/2 -translate-x-1/3"
          />
        </div>

        {/* INGLU E-Sports */}
        <div className="relative mb-4 flex h-87 break-inside-avoid flex-col gap-1 rounded-4xl border border-black/25 p-7 shadow-[13px_10px_33.4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex size-10 lg:size-20 items-center justify-center rounded-2xl bg-[#2563EB]">
            <Image src={INGLUESportsIcon} alt="INGLU E-Sports Icon" className="aspect-square max-w-[75%]" />
          </div>
          <span className="font-plus-jakarta-sans bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl lg:text-[32px] font-bold text-transparent uppercase">
            Inglu E-Sports
          </span>
          <p className="leading-snug">
            The segment excels in crafting elite competitive line-ups for
            popular titles such as BGMI and other games.
          </p>
          <Image
            src={INGLUESportsGraphics}
            alt="INGLU Travels Graphics"
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>

        {/* INGLU Events */}
        <div className="flex h-103 break-inside-avoid flex-col gap-1 rounded-4xl border border-black/25 p-7 shadow-[13px_10px_33.4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex size-10 lg:size-20 items-center justify-center rounded-2xl bg-[#2563EB]">
            <Image src={INGLUEventsIcon} alt="INGLU Events Icon" className="aspect-square max-w-[75%]" />
          </div>
          <span className="font-plus-jakarta-sans bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl lg:text-[32px] font-bold text-transparent uppercase">
            Inglu Events
          </span>
          <p className="leading-snug">
            This segment where we CURATE EVENTS, organize our own events and
            also partner with other happening event. Working on Artist
            Management, Production, Security, Volunteer Management,
            Sponsorships, Stalls, Marketing and all aspects involved in Event.
          </p>
        </div>

        {/* INGLU Merchandise */}
        <div className="mb-4 flex h-80 break-inside-avoid flex-col gap-1 rounded-4xl border border-black/25 p-7 shadow-[13px_10px_33.4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex size-10 lg:size-20 items-center justify-center rounded-2xl bg-[#2563EB]">
            <Image src={INGLUMerchandiseIcon} alt="INGLU Merchandise Icon" className="aspect-square max-w-[75%]" />
          </div>
          <span className="font-plus-jakarta-sans bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl lg:text-[32px] font-bold text-transparent uppercase">
            Inglu Merchandise
          </span>
          <p className="leading-snug">
            The segment offers a curated collection of trendy and high-quality
            youth products.
          </p>
        </div>

        {/* INGLU Social */}
        <div className="mb-4 flex h-79 break-inside-avoid flex-col gap-1 rounded-4xl border border-black/25 p-7 shadow-[13px_10px_33.4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex size-10 lg:size-20 items-center justify-center rounded-2xl bg-[#2563EB]">
            <Image src={INGLUSocialIcon} alt="INGLU Social Icon" className="aspect-square max-w-[75%]" />
          </div>
          <span className="font-plus-jakarta-sans bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl lg:text-[32px] font-bold text-transparent uppercase">
            Inglu Social
          </span>
          <p className="leading-snug">
            A non-profit segment within the INGLU that fervently focuses on
            enhancing the experience and growth of youth through various
            philanthropic initiatives
          </p>
        </div>

        {/* Muse Records */}
        <div className="relative mb-4 flex h-110 break-inside-avoid flex-col gap-1 rounded-4xl border border-black/25 p-7 shadow-[13px_10px_33.4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex size-10 lg:size-20 items-center justify-center rounded-2xl bg-[#2563EB]">
            <Image src={MuseRecordsIcon} alt="Muse Records Icon" className="aspect-square max-w-[75%]" />
          </div>
          <span className="font-plus-jakarta-sans bg-linear-to-r from-[#2B7FFF] via-[#155DFC] to-[#0092B8] bg-clip-text text-2xl lg:text-[32px] font-bold text-transparent uppercase">
            Muse Records
          </span>
          <p className="leading-snug">
            a pioneering segment of INGLU, passionately collaborates with
            emerging artists, offering dedicated management and support to
            nurture their talents and propel them into the spotlight
          </p>
          <Image
            src={MuseRecordsGraphics}
            alt="Muse Graphics"
            className="absolute right-4 bottom-0"
          />
        </div>
      </div>

      {/* Decorative background gradient */}
      <div className="pointer-events-none absolute -bottom-1/12 -left-52 -z-10 h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FFB0] blur-[80px]" />
    </section>
  );
}
