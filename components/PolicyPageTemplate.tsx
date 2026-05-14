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

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <MotionReveal>
              <aside className="surface-card p-7 sm:p-8">
                <p className="eyebrow">Önemli not</p>
                <p className="lead-text mt-4 text-[0.98rem] leading-8">{not}</p>
              </aside>
            </MotionReveal>

            <div className="grid gap-5">
              {bolumler.map((bolum, index) => (
                <MotionReveal key={bolum.baslik} delay={index * 0.08}>
                  <article className="surface-card p-7 sm:p-8">
                    <p className="eyebrow">Bölüm {index + 1}</p>
                    <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-[2rem]">
                      {bolum.baslik}
                    </h2>
                    <p className="lead-text mt-4 text-[0.98rem] leading-8">
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
