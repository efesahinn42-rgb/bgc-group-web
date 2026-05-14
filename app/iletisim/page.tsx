import AnimatedSection from "@/components/AnimatedSection";
import PageBanner from "@/components/PageBanner";
import { grupSirketleri, iletisimBilgileri } from "@/lib/site-content";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "BGC Group ile iletişime geçin, doğru grup şirketine yönlendirme ve iş birliği süreçleri için bağlantı kurun.",
};

export default function IletisimPage() {
  return (
    <main>
      <PageBanner
        eyebrow="İletişim"
        title="Doğru temas noktasını birlikte belirleyelim"
        description="Yeni iş birliği, hizmet yönlendirmesi veya grup şirketleri hakkında kurumsal bilgi talebi için BGC Group ekibiyle bağlantı kurabilirsiniz."
        rozetler={["Kurumsal yönlendirme", "Hızlı geri dönüş"]}
      />

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <AnimatedSection className="surface-card p-7 sm:p-8">
            <p className="eyebrow">İletişim bilgileri</p>
            <div className="mt-6 space-y-5 text-sm text-[var(--color-muted)]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--color-brand)]" />
                <div className="space-y-1 leading-7">
                  {iletisimBilgileri.adresSatirlari.map((satir) => (
                    <div key={satir}>{satir}</div>
                  ))}
                </div>
              </div>

              <a
                href={`tel:${iletisimBilgileri.telefon.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 transition hover:text-[var(--color-brand)]"
              >
                <PhoneCall className="h-4 w-4 text-[var(--color-brand)]" />
                {iletisimBilgileri.telefon}
              </a>

              <a
                href={`mailto:${iletisimBilgileri.eposta}`}
                className="flex items-center gap-3 transition hover:text-[var(--color-brand)]"
              >
                <Mail className="h-4 w-4 text-[var(--color-brand)]" />
                {iletisimBilgileri.eposta}
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="surface-card p-7 sm:p-8">
            <p className="eyebrow">Şirket bazlı yönlendirme</p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {grupSirketleri.map((sirket) => (
                <a
                  key={sirket.ad}
                  href={sirket.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-5 transition hover:-translate-y-0.5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {sirket.sektor}
                  </p>
                  <h2 className="mt-3 text-[1.75rem] font-medium tracking-[-0.04em] text-[var(--color-ink)]">
                    {sirket.ad}
                  </h2>
                  <p className="lead-text mt-4 text-[0.96rem] leading-8">
                    {sirket.vurgu}
                  </p>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
