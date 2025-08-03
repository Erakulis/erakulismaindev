import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyHeroSectionB2B from "@/components/business/CompanyHeroSectionB2B";
import WellnessPlatformSectionB2B from "@/components/business/WellnessPlatformSectionB2B";
import TransformationSectionB2B from "@/components/business/TransformationSectionB2B";
import CristianoSectionB2B from "@/components/business/CristianoSectionB2B";
import SmartIntegrationSectionB2B from "@/components/business/SmartIntegrationSectionB2B";
import IndustrySolutionsSectionB2B from "@/components/business/IndustrySolutionsSectionB2B";
import WellnessSuiteSectionB2B from "@/components/business/WellnessSuiteSectionB2B";
import PricingModelSectionB2B from "@/components/business/PricingModelSectionB2B";

const BusinessPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CompanyHeroSectionB2B />
        <WellnessPlatformSectionB2B />
        <TransformationSectionB2B />
        <CristianoSectionB2B />
        <SmartIntegrationSectionB2B />
        <IndustrySolutionsSectionB2B />
        <WellnessSuiteSectionB2B />
        <PricingModelSectionB2B />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessPage;