import AnimatedSection from "@/components/AnimatedSection";
import { grupSirketleri } from "@/lib/site-content";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function CompaniesSection() {
  return (
    <section id="grup-sirketleri" className="section-space pt-10">
      <div className="container-shell">
        <AnimatedSection className="max-w-3xl">
          <p className="eyebrow">Grup şirketlerimiz</p>
          <h2 className="section-title mt-5 max-w-[12ch]">
            Her uzmanlık alanını ayrı bir güç merkezi olarak konumluyoruz.
          </h2>
          <p className="lead-text mt-6 max-w-3xl">
            BGC Group çatısı altında yer alan şirketler, kendi uzmanlıklarına
            odaklanırken aynı kurumsal disiplin, aynı görünürlük ve aynı güven
            standardı ile hareket eder.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {grupSirketleri.map((sirket, index) => (
            <AnimatedSection key={sirket.ad} delay={index * 0.08}>
              <a
                href={sirket.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group surface-card flex h-full flex-col overflow-hidden p-4 sm:p-5"
              >
                <div className="relative h-[320px] overflow-hidden rounded-[1.8rem]">
                  <Image
                    src={sirket.gorselSrc}
                    alt={sirket.gorselAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(20,24,46,0.34)_100%)]" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/[0.35] bg-white/[0.15] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {sirket.sektor}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-1 pb-2 pt-6">
                  <p className="eyebrow !text-[var(--color-brand)]">
                    {sirket.vurgu}
                  </p>
                  <h3 className="mt-4 text-[2rem] font-medium tracking-[-0.045em] text-[var(--color-ink)]">
                    {sirket.ad}
                  </h3>
                  <p className="lead-text mt-4 flex-1 text-[0.98rem] leading-8">
                    {sirket.aciklama}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)] transition group-hover:text-[var(--color-brand-soft)]">
                    <span>{sirket.cta}</span>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
