import BrandsSection from "./_components/BrandsSection";
import ContactSection from "./_components/ContactSection";
import CTASection from "./_components/CTASection";
import E3Section from "./_components/E3Section";
import SegmentsSection from "./_components/SegmentsSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INGLU Global | Youth, Events, Esports & HoliBash",

  description:
    "INGLU Global is India’s leading youth platform for HoliBash, events, esports, creators, and education.",

  keywords: [
    "INGLU Global",
    "HoliBash",
    "Youth Events India",
    "College Festivals",
    "Esports India",
    "Creators Platform",
  ],

  openGraph: {
    title: "INGLU Global | Youth & Events Platform",
    description:
      "Join INGLU Global for HoliBash, youth events, esports, and creators.",
    url: "https://ingluglobal.in/",
    siteName: "INGLU Global",
    images: [
      {
        url: "https://ingluglobal.in/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "INGLU Global Platform",
      },
    ],
    type: "website",
  },

  robots: "index, follow",
};
export default function Home() {
  return (
    // Page-level container composing all home sections in order
    <div className="mb-16 flex flex-col gap-16 overflow-x-clip p-3">
      <CTASection />
      <E3Section />
      <BrandsSection />
      <SegmentsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
