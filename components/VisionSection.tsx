import AnimatedSection from "@/components/AnimatedSection";
import { anlatiBolumu, anlatiKartlari } from "@/lib/site-content";
import Image from "next/image";

export default function VisionSection() {
  return (
    <section id="bizi-farkli-kilan" className="section-space">
      <div className="container-shell">
        <AnimatedSection className="mx-auto max-w-5xl text-center">
          <p className="eyebrow">{anlatiBolumu.etiket}</p>
          <h2 className="section-title mt-5">{anlatiBolumu.baslik}</h2>
          <p className="lead-text mt-6">{anlatiBolumu.paragrafBir}</p>
          <p className="lead-text mt-5">{anlatiBolumu.paragrafIki}</p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {anlatiKartlari.map((kart, index) => (
            <AnimatedSection key={kart.baslik} delay={index * 0.08}>
              <article className="surface-card h-full p-4 sm:p-5">
                <div className="media-card relative h-[260px] rounded-[1.6rem] border-none shadow-none">
                  <Image
                    src={kart.gorselSrc}
                    alt={kart.gorselAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="px-1 pb-2 pt-6">
                  <h3 className="text-[1.85rem] font-medium tracking-[-0.045em] text-[var(--color-ink)]">
                    {kart.baslik}
                  </h3>
                  <p className="lead-text mt-4 text-[0.98rem] leading-8">
                    {kart.aciklama}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
