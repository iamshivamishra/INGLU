import { Metadata } from "next";
import AllEventsSection from "./_components/AllEventsSection";
import CTASection from "./_components/CTASection";
import UpcomingEventsSection from "./_components/UpcomingEventsSection";

export const metadata: Metadata = { title: "Events" };
export default function HomePage() {
  return (
    <main className="mx-auto mb-16 flex w-full max-w-7xl flex-col gap-16 py-8">
      <CTASection />
      <UpcomingEventsSection />
      <AllEventsSection />
    </main>
  );
}
