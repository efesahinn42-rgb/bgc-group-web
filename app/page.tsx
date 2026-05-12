import CompaniesSection from "@/components/CompaniesSection";
import ContactBand from "@/components/ContactBand";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompaniesSection />
      <VisionSection />
      <ContactBand />
    </main>
  );
}
