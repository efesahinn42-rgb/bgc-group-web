import CapabilitySplitSection from "@/components/CapabilitySplitSection";
import CompaniesSection from "@/components/CompaniesSection";
import ContactBand from "@/components/ContactBand";
import ExploreSection from "@/components/ExploreSection";
import HeroSection from "@/components/HeroSection";
import InsightsSection from "@/components/InsightsSection";
import ReachSection from "@/components/ReachSection";
import SolutionsCarouselSection from "@/components/SolutionsCarouselSection";
import VisionSection from "@/components/VisionSection";
import { danismanlikBolumu, operasyonBolumu } from "@/lib/site-content";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VisionSection />
      <CompaniesSection />
      <CapabilitySplitSection id="operasyon-kapsami" icerik={operasyonBolumu} />
      <SolutionsCarouselSection />
      <CapabilitySplitSection
        id="cozumler"
        icerik={danismanlikBolumu}
        tersYerlesim
      />
      <ReachSection />
      <InsightsSection />
      <ExploreSection />
      <ContactBand />
    </main>
  );
}
