import AnimatedSection from "@/components/AnimatedSection";
import { icgoruKartlari } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function baglantiHedefiOlustur(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function InsightsSection() {
  return (
    <section id="icgoruler" className="section-space">
      <div className="container-shell">
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Ne var ne yok</p>
          <h2 className="section-title mt-5">Kurumsal içgörüler</h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {icgoruKartlari.map((kart, index) => (
            <AnimatedSection key={kart.baslik} delay={index * 0.08}>
              <article className="surface-card h-full p-4 sm:p-5">
                <div className="relative h-[250px] overflow-hidden rounded-[1.8rem] bg-[var(--color-panel)] sm:h-[310px]">
                  <Image
                    src={kart.gorselSrc}
                    alt={kart.gorselAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 ${
                      kart.tema === "analitik"
                        ? "bg-[linear-gradient(180deg,rgba(16,24,58,0.08)_0%,rgba(16,24,58,0.5)_100%)]"
                        : "bg-[linear-gradient(180deg,rgba(28,35,88,0.02)_0%,rgba(28,35,88,0.42)_100%)]"
                    }`}
                  />
                </div>

                <div className="px-1 pb-2 pt-6">
                  <p className="eyebrow !text-[var(--color-brand)]">
                    {kart.etiket}
                  </p>
                  <h3 className="mt-4 text-[2.15rem] font-medium leading-[1.08] tracking-[-0.05em] text-[var(--color-ink)]">
                    {kart.baslik}
                  </h3>
                  <p className="lead-text mt-4 text-[0.98rem] leading-8">
                    {kart.aciklama}
                  </p>
                  <div className="mt-7">
                    <Link
                      href={baglantiHedefiOlustur(kart.href)}
                      className="outline-button"
                    >
                      {kart.cta}
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
