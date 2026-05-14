import AnimatedSection from "@/components/AnimatedSection";
import { kesifKartlari } from "@/lib/site-content";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Network,
} from "lucide-react";
import Link from "next/link";

function baglantiHedefiOlustur(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

const ikonHaritasi = {
  building: Building2,
  briefcase: BriefcaseBusiness,
  network: Network,
};

export default function ExploreSection() {
  return (
    <section id="kesfet" className="section-space">
      <div className="container-shell">
        <AnimatedSection className="max-w-4xl">
          <p className="eyebrow">BGC Group'u yakından tanıyın</p>
          <h2 className="section-title mt-5">
            Yeni iş akışları için doğru giriş noktasını birlikte belirleyelim.
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {kesifKartlari.map((kart, index) => {
            const Ikon = ikonHaritasi[kart.ikon];

            return (
              <AnimatedSection key={kart.baslik} delay={index * 0.08}>
                <article className="surface-card flex h-full flex-col p-7 sm:p-8">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-[var(--color-bg-soft)] text-[var(--color-brand)]">
                    <Ikon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-7 text-[2.1rem] font-medium tracking-[-0.05em] text-[var(--color-ink)]">
                    {kart.baslik}
                  </h3>
                  <p className="lead-text mt-4 flex-1 text-[0.98rem] leading-8">
                    {kart.aciklama}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={baglantiHedefiOlustur(kart.href)}
                      className="outline-button"
                    >
                      {kart.cta}
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
