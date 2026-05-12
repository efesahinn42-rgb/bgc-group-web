import MotionReveal from "@/components/MotionReveal";
import { kurumsalIlkeler } from "@/lib/site-content";

export default function VisionSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <MotionReveal>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/80 bg-white/70 p-4 shadow-[0_24px_70px_rgba(20,32,57,0.10)]">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/about.jpeg"
                alt="BGC Group kurumsal vizyonunu temsil eden modern mimari detay"
                width={2896}
                height={1944}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-10 bottom-10 rounded-[1.7rem] border border-white/80 bg-[rgba(255,255,255,0.80)] p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                Kurumsal vizyon
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-navy)]">
                BGC Group, güven veren kurumsal duruşunu modernleşen hizmet
                standardı ile güçlendirir; her yeni adımda sürdürülebilir değer
                üretimine odaklanır.
              </p>
            </div>
          </div>
        </MotionReveal>

        <div className="space-y-8">
          <MotionReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--color-gold-deep)]">
              Kurumsal bakış
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-[color:var(--color-navy)] sm:text-5xl">
              İstikrarı, güveni ve ortak kalite anlayışını aynı çatı altında
              büyütüyoruz
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--color-muted)]">
              BGC Group'un temel yaklaşımı; faaliyet gösterdiği sektörlerden
              bağımsız olarak her temas noktasında tutarlı, ölçülebilir ve
              güvenilir bir hizmet düzeyi sağlamaktır.
            </p>
          </MotionReveal>

          <div className="grid gap-5">
            {kurumsalIlkeler.map((ilke, index) => (
              <MotionReveal key={ilke.baslik} delay={index * 0.08}>
                <div className="rounded-[1.9rem] border border-white/80 bg-white/82 p-6 shadow-[0_16px_42px_rgba(20,32,57,0.06)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold-deep)]">
                    İlke {index + 1}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-[color:var(--color-navy)]">
                    {ilke.baslik}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                    {ilke.aciklama}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
