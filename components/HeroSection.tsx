"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { heroIcerigi } from "@/lib/site-content";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MoveDownRight, Pause, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function baglantiHedefiOlustur(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bolumRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [oynatiliyor, setOynatiliyor] = useState(!reducedMotion);
  const { scrollYProgress } = useScroll({
    target: bolumRef,
    offset: ["start start", "end start"],
  });

  const medyaOlcegi = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const medyaKayma = useTransform(scrollYProgress, [0, 1], [0, 72]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (reducedMotion || !oynatiliyor) {
      video.pause();
      return;
    }

    void video.play().catch(() => {
      setOynatiliyor(false);
    });
  }, [oynatiliyor, reducedMotion]);

  const videoDurumuDegistir = () => {
    setOynatiliyor((onceki) => !onceki);
  };

  return (
    <section id="hero" ref={bolumRef} className="section-space pb-10 sm:pb-14">
      <div className="container-shell">
        <div className="media-card relative min-h-[78svh] bg-[linear-gradient(135deg,#1b214f_0%,#29337a_62%,#3948a7_100%)] px-6 py-7 sm:px-8 sm:py-8 lg:min-h-[820px] lg:px-14 lg:py-14">
          <motion.div
            style={{ scale: medyaOlcegi, y: medyaKayma }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_20%)]" />
            <video
              ref={videoRef}
              className="h-full w-full object-cover opacity-[0.38]"
              poster={heroIcerigi.posterSrc}
              autoPlay={!reducedMotion}
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={heroIcerigi.videoSrc} type="video/mp4" />
            </video>
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,18,0.76)_0%,rgba(14,20,44,0.52)_34%,rgba(31,39,72,0.12)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.12),transparent_38%)]" />

          <div className="relative flex h-full flex-col justify-between gap-16">
            <div className="max-w-[41rem] pt-5 lg:pt-12">
              <AnimatedSection className="inline-block">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                  {heroIcerigi.etiket}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.08} className="mt-6">
                <h1 className="display-title max-w-[13ch] text-white">
                  {heroIcerigi.baslik}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.14} className="mt-6 max-w-[39rem]">
                <p className="text-lg leading-8 text-white/[0.72] sm:text-[1.08rem]">
                  {heroIcerigi.aciklama}
                </p>
              </AnimatedSection>

              <AnimatedSection
                delay={0.2}
                className="mt-10 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href={baglantiHedefiOlustur(heroIcerigi.birincilCta.href)}
                  className="solid-button w-full sm:w-auto"
                >
                  {heroIcerigi.birincilCta.etiket}
                  <MoveDownRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  href={baglantiHedefiOlustur(heroIcerigi.ikincilCta.href)}
                  className="outline-button w-full border-white/25 bg-transparent text-white hover:border-white hover:text-white sm:w-auto"
                >
                  {heroIcerigi.ikincilCta.etiket}
                </Link>
              </AnimatedSection>

              <AnimatedSection
                delay={0.26}
                className="mt-12 max-w-2xl border-t border-white/10 pt-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  {heroIcerigi.kisaNot}
                </p>
                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  {heroIcerigi.ozetMaddeleri.map((madde) => (
                    <div key={madde.deger} className="space-y-2">
                      <p className="text-base font-semibold text-white">
                        {madde.deger}
                      </p>
                      <p className="text-sm leading-7 text-white/[0.62]">
                        {madde.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="flex items-end justify-between gap-4">
              <AnimatedSection delay={0.1} direction="none">
                <div className="hidden rounded-[1.75rem] border border-white/[0.12] bg-white/10 px-5 py-4 text-sm text-white/[0.68] backdrop-blur-md sm:block">
                  Referansını tek bir grup yapısından alan kurumsal akış.
                </div>
              </AnimatedSection>

              <motion.button
                type="button"
                onClick={videoDurumuDegistir}
                whileTap={{ scale: 0.96 }}
                className="ml-auto inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-white/[0.15] bg-white text-[var(--color-brand)] shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5"
                aria-label={oynatiliyor ? "Videoyu duraklat" : "Videoyu oynat"}
              >
                {oynatiliyor ? (
                  <Pause className="h-5 w-5" strokeWidth={2.1} />
                ) : (
                  <Play className="h-5 w-5" strokeWidth={2.1} />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
