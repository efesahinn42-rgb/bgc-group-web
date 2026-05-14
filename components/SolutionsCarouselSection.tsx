"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { carouselKartlari } from "@/lib/site-content";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

function baglantiHedefiOlustur(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function SolutionsCarouselSection() {
  const kaydirmaRef = useRef<HTMLDivElement>(null);

  const kaydir = (yon: "ileri" | "geri") => {
    const alan = kaydirmaRef.current;

    if (!alan) {
      return;
    }

    const miktar = Math.round(alan.clientWidth * 0.82);

    alan.scrollBy({
      left: yon === "ileri" ? miktar : -miktar,
      behavior: "smooth",
    });
  };

  return (
    <section id="cozum-karti-akisi" className="section-space">
      <div className="container-shell">
        <AnimatedSection className="max-w-3xl">
          <p className="eyebrow">Akıllı akış</p>
          <h2 className="section-title mt-5">
            Çözümleri kurumsal ritmi bozmadan yan yana getiriyoruz.
          </h2>
        </AnimatedSection>

        <div
          ref={kaydirmaRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {carouselKartlari.map((kart, index) => {
            const harici = kart.href.startsWith("http");

            const kartGovdesi =
              kart.tema === "photo" ? (
                <div
                  key={`${kart.baslik}-medya`}
                  className="relative h-[320px] overflow-hidden rounded-[1.8rem]"
                >
                  {kart.gorselSrc ? (
                    <Image
                      src={kart.gorselSrc}
                      alt={kart.gorselAlt ?? kart.baslik}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 88vw, 42vw"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,29,62,0.08)_0%,rgba(20,29,62,0.46)_100%)]" />
                </div>
              ) : (
                <div
                  key={`${kart.baslik}-medya`}
                  className="flex h-[320px] items-end overflow-hidden rounded-[1.8rem] bg-[linear-gradient(135deg,#eef1ff_0%,#dde5ff_38%,#2a3277_100%)] p-8"
                >
                  <div className="max-w-sm rounded-[1.6rem] border border-white/[0.35] bg-white/75 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {kart.etiket}
                    </p>
                    <p className="mt-3 text-[1.45rem] font-medium leading-7 tracking-[-0.04em] text-[var(--color-ink)]">
                      {kart.baslik}
                    </p>
                  </div>
                </div>
              );

            const icerik = (
              <motion.article
                key={kart.baslik}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28 }}
                className={`surface-card min-w-[88vw] snap-start p-4 sm:min-w-[74vw] lg:min-w-[42rem] xl:min-w-[48rem] ${
                  index === 0 ? "2xl:min-w-[52rem]" : ""
                }`}
              >
                {kartGovdesi}
                <div className="px-1 pb-2 pt-6">
                  <p className="eyebrow !text-[var(--color-brand)]">
                    {kart.etiket}
                  </p>
                  <h3 className="mt-4 text-[2.05rem] font-medium leading-[1.02] tracking-[-0.045em] text-[var(--color-ink)]">
                    {kart.baslik}
                  </h3>
                  <p className="lead-text mt-4 max-w-2xl text-[0.98rem] leading-8">
                    {kart.aciklama}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)]">
                    {kart.cta}
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
              </motion.article>
            );

            return harici ? (
              <a
                key={kart.baslik}
                href={kart.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icerik}
              </a>
            ) : (
              <Link key={kart.baslik} href={baglantiHedefiOlustur(kart.href)}>
                {icerik}
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={() => kaydir("geri")}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white text-[var(--color-brand)] transition hover:-translate-y-0.5"
            aria-label="Kartları sola kaydır"
          >
            <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => kaydir("ileri")}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white text-[var(--color-brand)] transition hover:-translate-y-0.5"
            aria-label="Kartları sağa kaydır"
          >
            <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
