import MotionReveal from "@/components/MotionReveal";
import PageBanner from "@/components/PageBanner";
import {
  grupSirketleri,
  kurumsalBasliklar,
  kurumsalIlkeler,
} from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "BGC Group'un vizyonunu, hizmet yaklaşımını ve iştirakler arası sinerji modelini keşfedin.",
};

export default function KurumsalPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Kurumsal"
        title="Ortak akıl ile yönetilen, güven ile büyüyen bir grup yapısı"
        description="BGC Group, sektör bazlı uzmanlığın gücünü tek bir kurumsal duruşla birleştirir. Grup yaklaşımımız; karar kalitesi, hizmet standardı ve uzun vadeli değer üretimi üzerinden şekillenir."
        rozetler={[
          "Stratejik yönetişim",
          "Tutarlı hizmet standardı",
          "İştirakler arası sinerji",
        ]}
      />

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {kurumsalBasliklar.map((madde, index) => (
              <MotionReveal key={madde.baslik} delay={index * 0.08}>
                <article className="rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-[0_18px_48px_rgba(20,32,57,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                    Başlık {index + 1}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold text-[color:var(--color-navy)]">
                    {madde.baslik}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                    {madde.aciklama}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <MotionReveal>
              <div className="rounded-[2.2rem] border border-[color:var(--color-line-strong)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(248,244,235,0.92))] p-8 shadow-[0_22px_60px_rgba(20,32,57,0.10)]">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--color-gold-deep)]">
                  Kurumsal ilkeler
                </p>
                <h2 className="mt-4 font-serif text-4xl font-semibold text-[color:var(--color-navy)]">
                  Büyümeyi sürdürülebilir hale getiren çalışma disiplini
                </h2>
                <div className="mt-8 space-y-5">
                  {kurumsalIlkeler.map((ilke) => (
                    <div
                      key={ilke.baslik}
                      className="rounded-[1.6rem] border border-white/80 bg-white/88 p-5"
                    >
                      <h3 className="font-semibold text-[color:var(--color-navy)]">
                        {ilke.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                        {ilke.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <div className="rounded-[2.2rem] border border-white/80 bg-white/85 p-8 shadow-[0_18px_48px_rgba(20,32,57,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--color-gold-deep)]">
                  Ekosistem yaklaşımı
                </p>
                <h2 className="mt-4 font-serif text-4xl font-semibold text-[color:var(--color-navy)]">
                  Her iştirak aynı güven çizgisinde konumlanır
                </h2>
                <p className="mt-5 text-sm leading-7 text-[color:var(--color-muted)]">
                  BGC Group, farklı faaliyet alanlarını dağınık bir portföy
                  olarak değil; ortak hizmet dilini güçlendiren tamamlayıcı bir
                  yapı olarak ele alır.
                </p>
                <div className="mt-8 grid gap-4">
                  {grupSirketleri.map((sirket) => (
                    <div
                      key={sirket.ad}
                      className="rounded-[1.5rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
                    >
                      <p className="text-sm font-semibold text-[color:var(--color-navy)]">
                        {sirket.ad}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                        {sirket.vurgu}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
