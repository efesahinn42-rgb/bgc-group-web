import MotionReveal from "@/components/MotionReveal";
import PageBanner from "@/components/PageBanner";
import { grupSirketleri, iletisimBilgileri } from "@/lib/site-content";
import { ArrowUpRight, Mail, MapPinned, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "BGC Group ile iletişime geçin; kurumsal talepler, iş birlikleri ve yönlendirmeler için doğru temas noktasını keşfedin.",
};

export default function IletisimPage() {
  return (
    <main>
      <PageBanner
        eyebrow="İletişim"
        title="Kurumsal görüşmeler için doğru temas noktası"
        description="Teklif talepleri, iş birliği başvuruları ve kurumsal yönlendirmeler için BGC Group ekibiyle doğrudan iletişime geçebilirsiniz."
        rozetler={[
          "Hızlı geri dönüş",
          "Kurumsal koordinasyon",
          "Yönlendirici temas",
        ]}
      />

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <MotionReveal>
              <div className="rounded-[2.2rem] border border-white/80 bg-white/85 p-8 shadow-[0_18px_48px_rgba(20,32,57,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--color-gold-deep)]">
                  BGC Group
                </p>
                <h2 className="mt-4 font-serif text-4xl font-semibold text-[color:var(--color-navy)]">
                  İletişim bilgilerimiz
                </h2>
                <p className="mt-5 text-sm leading-7 text-[color:var(--color-muted)]">
                  {iletisimBilgileri.calismaNotu}
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4 rounded-[1.5rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
                    <MapPinned className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-gold-deep)]" />
                    <div className="space-y-1 text-sm leading-7 text-[color:var(--color-muted)]">
                      {iletisimBilgileri.adres.map((satir) => (
                        <p key={satir}>{satir}</p>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`tel:${iletisimBilgileri.telefon.replace(/\s+/g, "")}`}
                    className="flex items-center gap-4 rounded-[1.5rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5 text-sm font-semibold text-[color:var(--color-navy)] transition hover:border-[color:var(--color-gold)]"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-[color:var(--color-gold-deep)]" />
                    {iletisimBilgileri.telefon}
                  </a>

                  <a
                    href={`mailto:${iletisimBilgileri.eposta}`}
                    className="flex items-center gap-4 rounded-[1.5rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5 text-sm font-semibold text-[color:var(--color-navy)] transition hover:border-[color:var(--color-gold)]"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-[color:var(--color-gold-deep)]" />
                    {iletisimBilgileri.eposta}
                  </a>
                </div>

                <a
                  href={iletisimBilgileri.haritaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] transition hover:text-[color:var(--color-gold-deep)]"
                >
                  Haritada görüntüleyin
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </MotionReveal>

            <div className="grid gap-5">
              {grupSirketleri.map((sirket, index) => (
                <MotionReveal key={sirket.ad} delay={index * 0.08}>
                  <article className="rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-[0_18px_48px_rgba(20,32,57,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                      İlgili şirket yönlendirmesi
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-semibold text-[color:var(--color-navy)]">
                      {sirket.ad}
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-[color:var(--color-gold-deep)]">
                      {sirket.sektor}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                      {sirket.aciklama}
                    </p>
                    <a
                      href={sirket.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] transition hover:text-[color:var(--color-gold-deep)]"
                    >
                      {sirket.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
