import { useEffect, useRef, useState } from "react";
import { HeroSection } from "@/components/App/HeroSection";
import { PhoneSection } from "@/components/App/PhoneSection";
import { MarqueeSection } from "@/components/App/MarqueeSection";
import { ProblemStatementSection } from "@/components/App/ProblemStatementSection";
import { GuidesSection } from "@/components/App/GuidesSection";
import { ProductOverviewSection } from "@/components/App/ProductOverviewSection";
import { FeaturesSection } from "@/components/App/FeaturesSection";
import { NutritionSection } from "@/components/App/NutritionSection";
import { MentalWellbeingSection } from "@/components/App/MentalWellbeingSection";
import { VideoSection } from "@/components/App/VideoSection";
import { WearablesSection } from "@/components/App/WearablesSection";
import { StatsSection } from "@/components/App/StatsSection";
import { ProcessSection } from "@/components/App/ProcessSection";
import { TestimonialsSection } from "@/components/App/TestimonialsSection";
import { PricingSection } from "@/components/App/landing/PricingSection";
import { FAQSection } from "@/components/App/FAQSection";
import { CTASection } from "@/components/App/CTASection";
import { StickyQRCode } from "@/components/App/StickyQRCode";
import { MobileInstallBanner } from "@/components/App/MobileInstallBanner";

export default function Index() {
  const [showMobileBanner, setShowMobileBanner] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowMobileBanner(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <main> 
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <PhoneSection />
        <MarqueeSection />
        <ProblemStatementSection />
        <GuidesSection />
        <ProductOverviewSection />
        <FeaturesSection />
        <NutritionSection />
        <MentalWellbeingSection />
        <VideoSection />
        <WearablesSection />
        <ProcessSection />
        <div className="hidden md:block">
          <CTASection />
        </div>
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <StickyQRCode />
      {showMobileBanner && <MobileInstallBanner />}
    </div>
  );
}
