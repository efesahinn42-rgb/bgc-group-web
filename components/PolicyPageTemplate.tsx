import MotionReveal from "@/components/MotionReveal";
import PageBanner from "@/components/PageBanner";

type PolicyPageTemplateProps = {
  baslik: string;
  aciklama: string;
  not: string;
  bolumler: Array<{
    baslik: string;
    metin: string;
  }>;
};

export default function PolicyPageTemplate({
  baslik,
  aciklama,
  not,
  bolumler,
}: PolicyPageTemplateProps) {
  return (
    <>
      <PageBanner
        eyebrow="Yasal Bilgilendirme"
        title={baslik}
        description={aciklama}
        rozetler={["Taslak içerik", "Kurumsal ön bilgilendirme"]}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <MotionReveal>
              <aside className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_18px_48px_rgba(20,32,57,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-gold-deep)]">
                  Önemli not
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  {not}
                </p>
              </aside>
            </MotionReveal>

            <div className="grid gap-5">
              {bolumler.map((bolum, index) => (
                <MotionReveal key={bolum.baslik} delay={index * 0.08}>
                  <article className="rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-[0_18px_48px_rgba(20,32,57,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                      Bölüm {index + 1}
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-semibold text-[color:var(--color-navy)]">
                      {bolum.baslik}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                      {bolum.metin}
                    </p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
