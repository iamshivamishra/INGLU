import Image from "next/image";
import PizzaHutLogo from "@/assets/pizzahut.png";

export default function PartnersSection() {
  return (
    <section className="relative px-4">
      {/* Heading */}
      <p className="font-pjs text-center text-3xl leading-tight font-medium sm:text-4xl lg:text-[48px]">
        Our Partners
      </p>

      {/* Sub Heading */}
      <p className="mt-3 text-center text-base leading-7 font-normal text-[#6B7280] sm:text-lg">
        Get exclusive perks from our growing network of amazing brands
      </p>

      {/* Partners Cards */}
      <div className="mt-10 grid grid-cols-2 justify-items-center gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {/* Card 1 */}
        <div className="relative h-32 w-full max-w-48 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 sm:h-36 sm:px-5 sm:py-4">
          <div className="flex justify-center pt-1 sm:pt-2">
            <div className="h-14 w-14 overflow-hidden rounded-[14px] sm:h-16 sm:w-16">
              <Image
                src={PizzaHutLogo}
                alt="Pizza Hut"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-2 text-center text-xs font-normal text-[#111827] sm:mt-3 sm:text-sm">
            Pizza Hut
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative h-32 w-full max-w-48 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 sm:h-36 sm:px-5 sm:py-4">
          <div className="flex justify-center pt-1 sm:pt-2">
            <div className="h-14 w-14 overflow-hidden rounded-[14px] sm:h-16 sm:w-16">
              <Image
                src={PizzaHutLogo}
                alt="Pizza Hut"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-2 text-center text-xs font-normal text-[#111827] sm:mt-3 sm:text-sm">
            Pizza Hut
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative h-32 w-full max-w-48 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 sm:h-36 sm:px-5 sm:py-4">
          <div className="flex justify-center pt-1 sm:pt-2">
            <div className="h-14 w-14 overflow-hidden rounded-[14px] sm:h-16 sm:w-16">
              <Image
                src={PizzaHutLogo}
                alt="Pizza Hut"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-2 text-center text-xs font-normal text-[#111827] sm:mt-3 sm:text-sm">
            Pizza Hut
          </p>
        </div>

        {/* Card 4 */}
        <div className="relative h-32 w-full max-w-48 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 sm:h-36 sm:px-5 sm:py-4">
          <div className="flex justify-center pt-1 sm:pt-2">
            <div className="h-14 w-14 overflow-hidden rounded-[14px] sm:h-16 sm:w-16">
              <Image
                src={PizzaHutLogo}
                alt="Pizza Hut"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-2 text-center text-xs font-normal text-[#111827] sm:mt-3 sm:text-sm">
            Pizza Hut
          </p>
        </div>

        {/* Card 5 */}
        <div className="relative h-32 w-full max-w-48 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 sm:h-36 sm:px-5 sm:py-4">
          <div className="flex justify-center pt-1 sm:pt-2">
            <div className="h-14 w-14 overflow-hidden rounded-[14px] sm:h-16 sm:w-16">
              <Image
                src={PizzaHutLogo}
                alt="Pizza Hut"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-2 text-center text-xs font-normal text-[#111827] sm:mt-3 sm:text-sm">
            Pizza Hut
          </p>
        </div>

        {/* Card 6 */}
        <div className="relative h-32 w-full max-w-48 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 sm:h-36 sm:px-5 sm:py-4">
          <div className="flex justify-center pt-1 sm:pt-2">
            <div className="h-14 w-14 overflow-hidden rounded-[14px] sm:h-16 sm:w-16">
              <Image
                src={PizzaHutLogo}
                alt="Pizza Hut"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-2 text-center text-xs font-normal text-[#111827] sm:mt-3 sm:text-sm">
            Pizza Hut
          </p>
        </div>
      </div>
    </section>
  );
}
