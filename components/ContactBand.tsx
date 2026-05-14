import AnimatedSection from "@/components/AnimatedSection";
import { iletisimBlogu } from "@/lib/site-content";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function ContactBand() {
  return (
    <section id="iletisim-danismani" className="section-space pt-12">
      <div className="container-shell">
        <div className="media-card overflow-hidden bg-[var(--color-panel)]">
          <div className="grid items-end gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatedSection className="relative min-h-[420px] lg:min-h-[560px]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.22)_100%)]" />
              <Image
                src={iletisimBlogu.gorselSrc}
                alt={iletisimBlogu.gorselAlt}
                fill
                className="object-cover object-[52%_22%]"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </AnimatedSection>

            <div className="p-6 sm:p-8 lg:p-14">
              <AnimatedSection className="max-w-2xl">
                <p className="eyebrow">{iletisimBlogu.etiket}</p>
                <h2 className="section-title mt-5 max-w-[11ch]">
                  {iletisimBlogu.baslik}
                </h2>
                <p className="lead-text mt-6">{iletisimBlogu.aciklama}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.08} className="mt-7">
                <div className="flex flex-col gap-4 rounded-[1.7rem] bg-white/70 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                      {iletisimBlogu.adSoyad}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {iletisimBlogu.unvan}
                    </p>
                  </div>
                  <a
                    href={iletisimBlogu.cta.href}
                    className="solid-button w-full sm:w-auto"
                  >
                    {iletisimBlogu.cta.etiket}
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection
                delay={0.14}
                className="mt-6 grid gap-4 sm:grid-cols-2"
              >
                <a
                  href={`mailto:${iletisimBlogu.eposta}`}
                  className="surface-card flex items-center gap-4 p-5 transition hover:-translate-y-0.5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand)] text-white">
                    <Mail className="h-[18px] w-[18px]" strokeWidth={1.9} />
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-ink)]">
                    {iletisimBlogu.eposta}
                  </span>
                </a>

                <a
                  href={`tel:${iletisimBlogu.telefon.replace(/\s+/g, "")}`}
                  className="surface-card flex items-center gap-4 p-5 transition hover:-translate-y-0.5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand)] text-white">
                    <PhoneCall
                      className="h-[18px] w-[18px]"
                      strokeWidth={1.9}
                    />
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-ink)]">
                    {iletisimBlogu.telefon}
                  </span>
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
