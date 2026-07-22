  "use client";

  import { useState } from "react";

  import GallerySection from "./_component/GallerySection";
  import HeroSection from "./_component/HeroSection";
  import Infosection from "./_component/InfoSection";
  import PartnerSection from "./_component/PartnerSection";
  import PassesSection from "./_component/PassesSection";
  import TablesSection from "./_component/TablesSection";
  import TermsSection from "./_component/TermsSection";

  export default function HoliBashClient() {
    const [currency, setCurrency] = useState<"INR" | "USD">("INR");

    return (
      <div>
        <HeroSection />
        <Infosection />
        <PassesSection currency={currency} setCurrency={setCurrency}/>
        <TablesSection currency={currency} setCurrency={setCurrency}/>
        <PartnerSection />
        <GallerySection />
        <TermsSection />
      </div>
    );
  }