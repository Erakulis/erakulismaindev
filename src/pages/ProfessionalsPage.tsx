import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CTAHeroSection from "@/components/CTAHeroSection";
import ClaimsSection from "@/components/ClaimsSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationSection from "@/components/IntegrationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CTAHeroSection />
        <HeroSection />
        <ClaimsSection />
        <FeaturesSection />
        <IntegrationSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
