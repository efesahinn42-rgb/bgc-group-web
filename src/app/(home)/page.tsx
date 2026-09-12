import {
  FAQ,
  FAQStructuredData,
  Featured,
  FinancialFuture,
  FinancialFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <FAQStructuredData />
      <HeroSection />
      <Featured />
      <OffersSection />
      <FinancialFreedom />
      <FinancialFuture />
      <IntroSection />
      <JoinSection />
      <FAQ />
    </main>
  );
}
