import { GraduationCap, Sparkles, TrendingUp } from "lucide-react";
import E3Card from "@/components/E3Card";

export default function E3Section() {
  return (
    <section className="mx-4 flex flex-col items-center justify-center gap-4 rounded-3xl border border-black/25 bg-[#F4F7FE] px-4 py-5 shadow-[0px_4px_4px_0_rgba(0,0,0,0.25)] sm:mx-6 sm:px-6 md:mx-16 md:gap-6 md:px-8 md:py-6 lg:mx-24">
      <div className="flex flex-col items-center gap-2 pt-4 text-center md:pt-6">
        <h3 className="font-plus-jakarta-sans text-2xl md:text-3xl lg:text-4xl">
          The Fastest Growing Global
        </h3>

        <h1 className="font-plus-jakarta-sans text-3xl leading-tight font-bold text-[#2563EB] italic md:text-6xl lg:text-7xl">
          Youth Organisation
        </h1>

        <h4 className="mt-2 text-lg font-semibold uppercase md:text-2xl lg:mt-6 lg:text-4xl">
          Aiming to achieve experience through e3 model
        </h4>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <E3Card
          title="Education"
          description="INGLU GLOBAL is focusing on providing skill-based learning for youth to help them grow practically for their future."
          Icon={GraduationCap}
        />
        <E3Card
          title="Enchancement"
          description="Enhancing the skills of the youth is most crucial part which important for the development of youth."
          Icon={TrendingUp}
        />
        <E3Card
          title="Entertainment"
          description="Holistic development is not possible without proper mixture of entertainment with the work and enhancement."
          Icon={Sparkles}
        />
      </div>

      <p className="text-center text-sm font-medium sm:text-base md:text-lg lg:text-[20px]">
        Internship | Networking | Growth | Leadership | Unity
      </p>
    </section>
  );
}
