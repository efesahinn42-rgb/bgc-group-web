import MotionReveal from "@/components/MotionReveal";
import { grupSirketleri } from "@/lib/site-content";
import {
  ArrowUpRight,
  CarFront,
  Headset,
  type LucideIcon,
  ShieldCheck,
} from "lucide-react";

const ikonHaritasi: Record<string, LucideIcon> = {
  "BGC Sigorta": ShieldCheck,
  "BGC Assist": Headset,
  "BGC Filo": CarFront,
};

export default function CompaniesSection() {
  return (
    <section
      id="grup-sirketlerimiz"
      className="scroll-mt-28 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--color-gold-deep)]">
            Grup Şirketlerimiz
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[color:var(--color-navy)] sm:text-5xl">
            Uzmanlık alanları güçlü, kurumsal standartları ortak
          </h2>
          <p className="mt-5 text-base leading-8 text-[color:var(--color-muted)]">
            BGC Group çatısı altında konumlanan her şirket, kendi sektörünün
            ihtiyaçlarına uygun derin uzmanlık sunarken aynı güven dilini ve
            aynı hizmet titizliğini paylaşır.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {grupSirketleri.map((sirket, index) => {
            const IkonBileseni = ikonHaritasi[sirket.ad];

            return (
              <MotionReveal key={sirket.ad} delay={index * 0.08}>
                <article className="group flex h-full flex-col rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-[0_20px_60px_rgba(20,32,57,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(20,32,57,0.10)]">
                  <div className="flex items-start justify-between gap-5">
                    <div className="rounded-[1.5rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-4">
                      <IkonBileseni className="h-6 w-6 text-[color:var(--color-gold-deep)]" />
                    </div>
                    <span className="rounded-full bg-[color:var(--color-surface-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                      {sirket.rozet}
                    </span>
                  </div>

                  <div className="mt-8 space-y-4">
                    <p className="text-sm font-medium text-[color:var(--color-gold-deep)]">
                      {sirket.sektor}
                    </p>
                    <h3 className="font-serif text-3xl font-semibold text-[color:var(--color-navy)]">
                      {sirket.ad}
                    </h3>
                    <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                      {sirket.aciklama}
                    </p>
                  </div>

                  <div className="mt-8 rounded-[1.5rem] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(248,244,235,0.92),rgba(255,255,255,0.92))] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                      Öne çıkan yaklaşım
                    </p>
                    <p className="mt-3 text-base font-semibold text-[color:var(--color-navy)]">
                      {sirket.vurgu}
                    </p>
                  </div>

                  <div className="mt-8 pt-1">
                    <a
                      href={sirket.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] transition group-hover:text-[color:var(--color-gold-deep)]"
                    >
                      {sirket.cta}
                      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
