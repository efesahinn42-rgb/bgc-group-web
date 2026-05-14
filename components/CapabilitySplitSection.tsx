import AnimatedSection from "@/components/AnimatedSection";
import type { SplitSectionIcerigi } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CapabilitySplitSectionProps = {
  id: string;
  icerik: SplitSectionIcerigi;
  tersYerlesim?: boolean;
};

function baglantiHedefiOlustur(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function CapabilitySplitSection({
  id,
  icerik,
  tersYerlesim = false,
}: CapabilitySplitSectionProps) {
  return (
    <section id={id} className="section-space">
      <div className="container-shell">
        <div
          className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
            tersYerlesim ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <AnimatedSection>
            <div className="media-card relative min-h-[360px] overflow-hidden bg-[var(--color-panel)] lg:min-h-[620px]">
              <Image
                src={icerik.gorselSrc}
                alt={icerik.gorselAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(16,22,42,0.16)_100%)]" />

              {icerik.gorselEtiket ? (
                <div className="absolute bottom-6 left-6 rounded-[1.6rem] border border-white/40 bg-white/[0.88] px-5 py-4 backdrop-blur-sm sm:bottom-8 sm:left-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {icerik.gorselEtiket}
                  </p>
                  <p className="mt-2 max-w-xs text-[1.35rem] font-medium leading-7 tracking-[-0.04em] text-[var(--color-ink)]">
                    {icerik.baslik}
                  </p>
                </div>
              ) : null}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.06} className="max-w-2xl">
            <p className="eyebrow">{icerik.etiket}</p>
            <h2 className="section-title mt-5">{icerik.baslik}</h2>
            <p className="lead-text mt-6">{icerik.aciklama}</p>
            {icerik.ekAciklama ? (
              <p className="lead-text mt-5">{icerik.ekAciklama}</p>
            ) : null}

            <div className="mt-8">
              <Link
                href={baglantiHedefiOlustur(icerik.cta.href)}
                className="outline-button"
              >
                {icerik.cta.etiket}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
