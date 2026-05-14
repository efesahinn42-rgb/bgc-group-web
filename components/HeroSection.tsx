"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { heroIcerigi } from "@/lib/site-content";
import { useReducedMotion } from "framer-motion";
import { MoveDownRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

function baglantiHedefiOlustur(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (reducedMotion) {
      video.pause();
      return;
    }

    void video.play().catch(() => undefined);
  }, [reducedMotion]);

  return (
    <section id="hero" className="section-space pb-8 pt-10 sm:pb-12 sm:pt-12">
      <div className="container-shell">
        <div className="media-card relative min-h-[74svh] bg-[linear-gradient(135deg,#171c40_0%,#252f72_62%,#334296_100%)] px-6 py-8 sm:px-8 sm:py-9 lg:min-h-[760px] lg:px-12 lg:py-12">
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              className="h-full w-full object-cover object-[68%_center] opacity-[0.46] sm:object-[72%_center] lg:object-[74%_center]"
              poster={heroIcerigi.posterSrc}
              autoPlay={!reducedMotion}
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={heroIcerigi.videoSrc} type="video/mp4" />
            </video>
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,14,20,0.84)_0%,rgba(16,20,34,0.74)_28%,rgba(20,28,56,0.28)_58%,rgba(20,28,56,0.08)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-[62%] bg-[linear-gradient(90deg,rgba(10,10,14,0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_26%)]" />

          <div className="relative flex h-full min-h-[calc(74svh-4rem)] flex-col justify-end lg:min-h-[664px]">
            <div className="max-w-[34rem] pb-3 pt-6 sm:pb-4 lg:pb-10 lg:pt-10">
              <AnimatedSection className="inline-block" direction="none">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                  {heroIcerigi.etiket}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.06} className="mt-5">
                <h1 className="display-title max-w-[10.5ch] text-white sm:max-w-[10ch]">
                  {heroIcerigi.baslik}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.12} className="mt-6 max-w-[31rem]">
                <p className="text-[1.02rem] leading-8 text-white/[0.72] sm:text-[1.06rem]">
                  {heroIcerigi.aciklama}
                </p>
              </AnimatedSection>

              <AnimatedSection
                delay={0.18}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
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
                delay={0.24}
                className="mt-9 max-w-[31rem] border-t border-white/10 pt-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  {heroIcerigi.kisaNot}
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {heroIcerigi.ozetMaddeleri.map((madde) => (
                    <div key={madde.deger} className="space-y-2">
                      <p className="text-[0.98rem] font-semibold text-white">
                        {madde.deger}
                      </p>
                      <p className="text-sm leading-6 text-white/[0.62]">
                        {madde.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
