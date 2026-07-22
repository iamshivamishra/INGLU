import BookMyShowLogo from "@/assets/image 16.png";
import CornitosLogo from "@/assets/Cornitos Logo.png";
import ZomatoLogo from "@/assets/Zomato_logo.png";
import UrbanClapLogo from "@/assets/Uc-logo.png";
import DominosPizzaLogo from "@/assets/Dominos_pizza_logo.svg";
import NiveaLogo from "@/assets/NIVEA_logo_2021.svg";
import PizzaHutLogo from "@/assets/Pizza_Hut_international_logo_2014.svg";
import AllEventsLogo from "@/assets/ae-logo-vector.png";
import CultFitLogo from "@/assets/cult-fit-seeklogo.png";
import CoinListLogo from "@/assets/coinlist-seeklogo.png";
import QSLogo from "@/assets/QS_Logo.svg";
import CBTFLogo from "@/assets/cbtf_newlogo.png";
import EYLogo from "@/assets/EY_logo_2019.svg";
import CoinDSXLogo from "@/assets/coindcx-logo.svg";
import StuCredLogo from "@/assets/StuCred_Logo.png";
import BrandLogoCard from "@/components/BrandLogoCard";

export default function BrandsSection() {
  const logos = [
    BookMyShowLogo,
    CornitosLogo,
    ZomatoLogo,
    UrbanClapLogo,
    DominosPizzaLogo,
    NiveaLogo,
    PizzaHutLogo,
    AllEventsLogo,
    CultFitLogo,
    CoinListLogo,
    QSLogo,
    CBTFLogo,
    EYLogo,
    CoinDSXLogo,
    StuCredLogo,
  ];

  return (
    <section className="relative flex flex-col items-center gap-6 px-4 sm:px-8 md:gap-8 md:px-16 lg:px-24">
      <h2 className="font-plus-jakarta-sans text-center text-2xl font-extrabold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        Brands who used our services
      </h2>

      <div
        style={
          {
            "--width": "192px",
            "--height": "96px",
            "--quantity": logos.length,
          } as React.CSSProperties
        }
        className="slider w-full overflow-hidden h-24"
      >
        <div className="list relative flex min-h-full min-w-[calc(var(--width)*var(--quantity))]">
          {logos.map((logo, index) => (
            <BrandLogoCard key={index} position={index + 1} image={logo} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 rounded-[36px] px-6 py-5 shadow-[0px_7px_15.5px_1px_rgba(0_0_0/0.25)] sm:px-8 md:gap-8 md:px-12 md:py-6">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium tracking-widest sm:text-3xl md:text-[40px]">
            100K+
          </span>
          <span className="text-sm font-medium tracking-wider sm:text-base">
            Youth Impacted
          </span>
        </div>
        <div className="hidden max-h-18 min-h-18 min-w-px bg-black sm:block" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium tracking-widest sm:text-3xl md:text-[40px]">
            1000K+
          </span>
          <span className="text-sm font-medium tracking-wider sm:text-base">
            Colaborations
          </span>
        </div>
        <div className="hidden max-h-18 min-h-18 min-w-px bg-black sm:block" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium tracking-widest sm:text-3xl md:text-[40px]">
            500K+
          </span>
          <span className="text-sm font-medium tracking-wider sm:text-base">
            Events Curated
          </span>
        </div>
        <div className="hidden max-h-18 min-h-18 min-w-px bg-black sm:block" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium tracking-widest sm:text-3xl md:text-[40px]">
            5+
          </span>
          <span className="text-sm font-medium tracking-wider sm:text-base">
            Countries
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-40 -right-24 -z-10 h-64 w-40 -rotate-12 rounded-[50%] bg-[#ECA1FF61] blur-[80px] md:-top-80 md:-right-48 md:h-[337.5px] md:w-56" />
    </section>
  );
}
