import AnimatedSection from "@/components/AnimatedSection";
import { agBolumu } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function baglantiHedefiOlustur(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function ReachSection() {
  return (
    <section id="uzmanlik-agi" className="section-space">
      <div className="container-shell">
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">{agBolumu.etiket}</p>
          <h2 className="section-title mt-5">{agBolumu.baslik}</h2>
          <p className="lead-text mt-6">{agBolumu.aciklama}</p>
          <div className="mt-8">
            <Link
              href={baglantiHedefiOlustur(agBolumu.cta.href)}
              className="outline-button"
            >
              {agBolumu.cta.etiket}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-12">
          <div className="media-card relative min-h-[620px] overflow-hidden bg-[linear-gradient(135deg,#111735_0%,#1d255a_58%,#28327d_100%)] lg:min-h-[760px]">
            <Image
              src={agBolumu.gorselSrc}
              alt={agBolumu.gorselAlt}
              fill
              className="object-cover opacity-[0.38]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_24%),linear-gradient(90deg,rgba(9,12,28,0.38),rgba(9,12,28,0.12))]" />

            <div className="absolute inset-x-0 bottom-0 top-auto p-6 sm:p-8 lg:left-10 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2 lg:p-0">
              <div className="rounded-[2rem] border border-white/[0.14] bg-white/[0.92] p-7 shadow-[0_28px_70px_rgba(7,10,26,0.22)] backdrop-blur-sm sm:p-8 lg:p-10">
                <p className="eyebrow">{agBolumu.etiket}</p>
                <h3 className="mt-4 text-[2.55rem] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--color-ink)] sm:text-[3.15rem]">
                  {agBolumu.kartBaslik}
                </h3>
                <p className="lead-text mt-5">{agBolumu.kartAciklama}</p>
                <div className="mt-7">
                  <Link
                    href={baglantiHedefiOlustur(agBolumu.cta.href)}
                    className="outline-button"
                  >
                    {agBolumu.cta.etiket}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
