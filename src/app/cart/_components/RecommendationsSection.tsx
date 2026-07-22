import ProductCard from "@/components/ProductCard";
import Bootcamp from "@/assets/bootcamp.png";
import MonthlyMembership from "@/assets/monthly-membership.png";
import QuaterlyMembership from "@/assets/quaterly-membership.png";

export default function RecommendationsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-16">
      <span className="font-pjs text-5xl font-extrabold uppercase">
        Related to items you viewed
      </span>
      <div className="flex w-full flex-wrap justify-between gap-8">
        <ProductCard
          title="Marketing 101"
          date={new Date()}
          venue="The Venue"
          price={1999}
          image={Bootcamp}
          rating={4}
          ratingscount={4}
        />
        <ProductCard
          title="HOLI BASH SEASON 4 : VIP"
          date={new Date()}
          venue="The Venue"
          price={1999}
          image={MonthlyMembership}
          rating={4}
          ratingscount={4}
        />
        <ProductCard
          title="HOLI BASH SEASON 4 : VIP"
          date={new Date()}
          venue="The Venue"
          price={1999}
          image={QuaterlyMembership}
          rating={4}
          ratingscount={4}
        />
      </div>
      <div className="pointer-events-none absolute -right-40 bottom-50 -z-10 h-337.5 w-56 -rotate-10 rounded-[50%] bg-[#ECA1FF]/30 blur-2xl" />
    </section>
  );
}
