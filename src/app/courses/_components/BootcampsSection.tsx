import bootcamp from "@/assets/bootcamp.png";
import ProductCard from "@/components/ProductCard";

export default function BootcampsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-2">
      {/* Title */}
      <span className="font-pjs text-4xl font-semibold text-[#1A1A1A]">
        Introduction to Bootcamps
      </span>
      <p className="text-lg text-[#4A5565]">
        Our structured approach combines multiple learning formats for maximum
        impact
      </p>

      {/* Cards */}
      <div className="mt-16 flex w-full flex-wrap justify-between gap-8">
        <ProductCard
          title="Marketing 101"
          date={new Date()}
          venue="The Venue"
          price={1999}
          image={bootcamp}
          rating={4}
          ratingscount={4}
        />
        <ProductCard
          title="Marketing 101"
          date={new Date()}
          venue="The Venue"
          price={1999}
          image={bootcamp}
          rating={4}
          ratingscount={4}
        />
        <ProductCard
          title="Marketing 101"
          date={new Date()}
          venue="The Venue"
          price={1999}
          image={bootcamp}
          rating={4}
          ratingscount={4}
        />
      </div>
      <div className="pointer-events-none absolute top-350 -right-20 -z-10 h-337.5 w-56 -rotate-2 rounded-[50%] bg-[#ECA1FF]/30 blur-2xl" />
      <div className="pointer-events-none absolute bottom-200 -left-40 -z-10 h-337.5 w-56 -rotate-8 rounded-[50%] bg-[#C0A1FF]/50 blur-2xl" />
    </section>
  );
}
