import watergun from "@/assets/watergun.png";
import Image from "next/image";
import Djset from "@/assets/Djset.jpg";
import { Music, Utensils, CloudRain, Theater } from "lucide-react";

type Feature = {
  title: string;

  icon: React.ReactNode;
  bgColor: string;
};

const features: Feature[] = [
  {
    title: "20+ artists",
    icon: <Music className="h-7.25 w-7.25 text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Food and bar counters",
    icon: <Utensils className="h-7.25 w-7.25 text-yellow-600" />,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Pool party and rain dance",
    icon: <CloudRain className="h-7.25 w-7.25 text-pink-600" />,
    bgColor: "bg-pink-100",
  },
  {
    title: "2 dedicated stages",
    icon: <Theater className="h-7.25 w-7.25 text-green-600" />,
    bgColor: "bg-green-100",
  },
];

export default function Infosection() {
  return (
    <section
      id="about-us"
      className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-6 sm:px-6 lg:px-8 lg:py-12"
    >
      {/* <p className="font-pjs flex justify-center pb-16 text-[48px] font-bold text-[#000000]">
        What are we ?
      </p> */}

      <div className="absolute -top-4 -left-1 rotate-10 md:absolute md:-top-6 md:-left-1 lg:-top-9 lg:-left-3">
        <Image
          src={watergun}
          alt="Water_Gun"
          className="w-25 md:w-35 lg:w-54"
        ></Image>
      </div>

      <div className="w-full rounded-3xl bg-[#F4F7FE] px-6 py-7 shadow-sm shadow-gray-400 md:px-10 lg:px-14 lg:py-10">
        <div className="flex flex-col items-center gap-10 md:text-center lg:flex-row lg:items-start lg:gap-16">
          <div>
            <p className="font-pjs max-w-xl text-3xl leading-tight font-semibold text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
              Holi-First Vibe{" "}
              <span className="font-pjs text-3xl text-[#0066FF] italic sm:text-4xl md:text-5xl lg:text-6xl">
                With Inglu Global
              </span>
            </p>

            <div className="mt-6 max-w-xl space-y-3 text-base sm:text-lg md:mx-auto md:text-center md:text-xl">
              <p className="font-sans text-[22px] text-[#000000]">
                INGLU Holi Bash is India&apos;s most vibrant creator-first
                festival, where the energy of Holi meets the pulse of modern
                creator culture.
              </p>
              <p className="mt-2 font-sans text-[22px] text-[#000000]">
                It&apos;s not just an event. it&apos;s a movement. We bring
                together thousands of creators, artists, influencers, and brands
                under one colorful sky to celebrate creativity, collaboration,
                and community through music, art, and unforgettable experiences.
              </p>
            </div>
          </div>
          <div className="pt-12.75 md:flex md:justify-center lg:block">
            <Image
              src={Djset}
              alt="Dj_Set"
              className="w-full max-w-md rounded-2xl object-cover"
            ></Image>
          </div>
        </div>

        <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex h-12 w-auto min-w-45.5 items-center gap-4"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg px-3 ${feature.bgColor}`}
              >
                {feature.icon}
              </div>

              <div className="flex flex-col">
                <p className="font-sans text-[20px] leading-tight font-semibold text-black">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
