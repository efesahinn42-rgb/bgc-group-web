import Wordmark from "@/components/Wordmark";
import { footerKolonlari, iletisimBilgileri } from "@/lib/site-content";
import { ExternalLink, Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

function baglantiHedefiOlustur(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function SiteFooter() {
  const yil = new Date().getFullYear();

  return (
    <footer
      id="iletisim"
      className="mt-20 bg-[var(--color-brand-strong)] text-white"
    >
      <div className="container-shell py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.05fr_2fr]">
          <div className="space-y-6">
            <Wordmark acikTon />
            <p className="max-w-sm text-sm leading-8 text-white/[0.65]">
              BGC Group, sigorta, asistans ve kurumsal mobilite alanlarında
              uzmanlaşan markalarını ortak karar kalitesi ve güçlü kurumsal
              görünürlük altında buluşturan bir çatı markadır.
            </p>

            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-white/[0.45]" />
                <div>
                  {iletisimBilgileri.adresSatirlari.map((satir) => (
                    <div key={satir}>{satir}</div>
                  ))}
                </div>
              </div>

              <a
                href={`tel:${iletisimBilgileri.telefon.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <PhoneCall className="h-4 w-4 text-white/[0.45]" />
                {iletisimBilgileri.telefon}
              </a>

              <a
                href={`mailto:${iletisimBilgileri.eposta}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-white/[0.45]" />
                {iletisimBilgileri.eposta}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {footerKolonlari.map((kolon) => (
              <div key={kolon.baslik}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.42]">
                  {kolon.baslik}
                </p>
                <ul className="mt-5 space-y-3.5">
                  {kolon.baglantilar.map((baglanti) => {
                    const ortakSinif =
                      "inline-flex items-center gap-1.5 text-sm text-white/[0.68] transition hover:text-white";

                    if (baglanti.harici) {
                      return (
                        <li key={baglanti.etiket}>
                          <a
                            href={baglanti.href}
                            target={
                              baglanti.href.startsWith("mailto:") ||
                              baglanti.href.startsWith("tel:")
                                ? undefined
                                : "_blank"
                            }
                            rel={
                              baglanti.href.startsWith("mailto:") ||
                              baglanti.href.startsWith("tel:")
                                ? undefined
                                : "noopener noreferrer"
                            }
                            className={ortakSinif}
                          >
                            {baglanti.etiket}
                            {!baglanti.href.startsWith("mailto:") &&
                            !baglanti.href.startsWith("tel:") ? (
                              <ExternalLink className="h-3.5 w-3.5" />
                            ) : null}
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={baglanti.etiket}>
                        <Link
                          href={baglantiHedefiOlustur(baglanti.href)}
                          className={ortakSinif}
                        >
                          {baglanti.etiket}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/[0.35] sm:flex-row sm:items-center sm:justify-between">
          <p>© {yil} BGC Group. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/gizlilik-politikasi"
              className="transition hover:text-white/70"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/cerez-politikasi"
              className="transition hover:text-white/70"
            >
              Çerez Politikası
            </Link>
            <Link
              href="/kvkk-aydinlatma"
              className="transition hover:text-white/70"
            >
              KVKK Aydınlatma
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
