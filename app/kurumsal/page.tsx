import AnimatedSection from "@/components/AnimatedSection";
import PageBanner from "@/components/PageBanner";
import {
  agBolumu,
  anlatiBolumu,
  grupSirketleri,
  operasyonBolumu,
} from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "BGC Group kurumsal yapısı, ortak standartları ve grup şirketleri arasındaki koordinasyon yaklaşımı.",
};

export default function KurumsalPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Kurumsal"
        title="Tek çatı altında şekillenen kurumsal yapı"
        description="BGC Group, farklı uzmanlık alanlarını birbirinden koparmadan aynı hizmet standardı ve aynı kurumsal bakış altında hizalayan bir grup yapılanması sunar."
        rozetler={["Grup koordinasyonu", "Ortak kalite standardı"]}
      />

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          <AnimatedSection className="surface-card p-7 sm:p-8">
            <p className="eyebrow">{anlatiBolumu.etiket}</p>
            <h2 className="mt-4 text-[2rem] font-medium tracking-[-0.05em] text-[var(--color-ink)]">
              {anlatiBolumu.baslik}
            </h2>
            <p className="lead-text mt-5">{anlatiBolumu.paragrafBir}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="surface-card p-7 sm:p-8">
            <p className="eyebrow">{operasyonBolumu.etiket}</p>
            <h2 className="mt-4 text-[2rem] font-medium tracking-[-0.05em] text-[var(--color-ink)]">
              Operasyon yaklaşımı
            </h2>
            <p className="lead-text mt-5">{operasyonBolumu.aciklama}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.16} className="surface-card p-7 sm:p-8">
            <p className="eyebrow">{agBolumu.etiket}</p>
            <h2 className="mt-4 text-[2rem] font-medium tracking-[-0.05em] text-[var(--color-ink)]">
              Uzmanlık ağı
            </h2>
            <p className="lead-text mt-5">{agBolumu.aciklama}</p>
          </AnimatedSection>
        </div>

        <div className="container-shell mt-12">
          <AnimatedSection className="surface-card p-7 sm:p-8 lg:p-10">
            <p className="eyebrow">Grup şirketleri</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              {grupSirketleri.map((sirket) => (
                <a
                  key={sirket.ad}
                  href={sirket.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-5 transition hover:-translate-y-0.5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {sirket.sektor}
                  </p>
                  <h3 className="mt-3 text-[1.8rem] font-medium tracking-[-0.04em] text-[var(--color-ink)]">
                    {sirket.ad}
                  </h3>
                  <p className="lead-text mt-4 text-[0.97rem] leading-8">
                    {sirket.aciklama}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/#grup-sirketleri" className="outline-button">
                Ana sayfadaki akışı görün
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
