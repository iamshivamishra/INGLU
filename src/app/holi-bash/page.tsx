import type { Metadata } from "next";
import HoliBashClient from "./HoliBashClient";
export const metadata: Metadata = {
  title: "Holi Bash 2026 in Delhi | Biggest Holi Party by INGLU Global",

  description:
    "Join Holi Bash 2026 in Delhi by INGLU Global. India’s biggest youth Holi festival with DJs, colors, live performances, VIP tables & unlimited fun. Book tickets now!",

  keywords: [
    // Primary (Ranking)
    "holi bash delhi",
    "holi bash 2026",
    "holi party delhi 2026",
    "holi festival delhi",
    "inglu holi bash",

    // Secondary (Brand + Support)
    "holi party india",
    "youth festival india",
    "college holi fest",
    "music festival holi",
    "holi celebration delhi",
    "holi event india",
    "best holi party",

    // Branding
    "holibash",
    "inglu holi event",
    "holi bash tickets",
    "holi bash by inglu",

    // Discovery / Similar Events
    "holi carnival",
    "carnival of colours",
    "holi dazzle",
    "rangreza",
    "holi bliss",
    "holistaan",
    "holiest",
  ],

  openGraph: {
    title: "Holi Bash 2026 in Delhi | INGLU Global Festival",

    description:
      "Celebrate Holi 2026 with INGLU Global at Holi Bash Delhi. Music, colors, DJs, food & unforgettable vibes.",

    url: "https://ingluglobal.in/holi-bash",

    siteName: "INGLU Global",

    images: [
      {
        url: "https://ingluglobal.in/og-holi.jpg",
        width: 1200,
        height: 630,
        alt: "Holi Bash 2026 Delhi by INGLU Global",
      },
    ],

    type: "website",
  },

  robots: "index, follow",
};

export default function Page() {
  return <HoliBashClient />;
}
// import { Metadata } from "next";
// import GallerySection from "./_component/GallerySection";
// import HeroSection from "./_component/HeroSection";
// import Infosection from "./_component/InfoSection";
// import PartnerSection from "./_component/PartnerSection";
// // import TestimonalsSection from "./_component/TestimonalsSection";
// import PassesSection from "./_component/PassesSection";
// // import TicketInfoSection from "./_component/TicketInfoSection";
// import TablesSection from "./_component/TablesSection";
// import TermsSection from "./_component/TermsSection";

// export const metadata: Metadata = { title: "Holi Bash" };
// export default function page() {
//   return (
//     <div>
//       <HeroSection />
//       <Infosection />
//       <PassesSection />
//       <TablesSection />
//       <PartnerSection />
//       <GallerySection />
//       <TermsSection />

//       {/* <TestimonalsSection /> */}

//       {/* <TicketInfoSection /> */}
//     </div>
//   );
// }
