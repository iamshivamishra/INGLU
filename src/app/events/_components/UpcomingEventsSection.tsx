import EventImage from "@/assets/event.png";
import ProductCard from "@/components/ProductCard";

export default function UpcomingEventsSection() {
  return (
    <section className="flex w-full flex-col gap-10">
      <span className="font-pjs text-5xl font-semibold">Upcoming Events</span>
      <div className="flex w-full flex-wrap justify-between gap-8">
        <ProductCard
          title="HOLI BASH SEASON 4 : VIP"
          date={new Date()}
          venue="The Venue"
          price={1999}
          image={EventImage}
          rating={4}
          ratingscount={4}
        />
        <ProductCard
          title="HOLI BASH SEASON 4 : VIP"
          date={new Date()}
          venue="The Venue"
          price={1999}
          image={EventImage}
          rating={4}
          ratingscount={4}
        />
        <ProductCard
          title="HOLI BASH SEASON 4 : VIP"
          date={new Date()}
          venue="The Venue"
          price={1999}
          image={EventImage}
          rating={4}
          ratingscount={4}
        />
      </div>
    </section>
  );
}
