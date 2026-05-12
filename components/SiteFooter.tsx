import Wordmark from "@/components/Wordmark";
import {
  grupSirketleri,
  iletisimBilgileri,
  navigasyonOgeleri,
} from "@/lib/site-content";
import { ArrowUpRight, Mail, MapPinned, Phone } from "lucide-react";
import Link from "next/link";

const yasalBaglantilar = [
  { etiket: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { etiket: "Çerez Politikası", href: "/cerez-politikasi" },
  { etiket: "KVKK Aydınlatma", href: "/kvkk-aydinlatma" },
];

export default function SiteFooter() {
  const yil = new Date().getFullYear();

  return (
    <footer className="border-t border-white/70 bg-[color:var(--color-surface-muted)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.95fr_1fr]">
          <div className="space-y-5">
            <Wordmark />
            <p className="max-w-md text-sm leading-7 text-[color:var(--color-muted)]">
              BGC Group, sigorta, asistans ve kurumsal mobilite alanlarında
              uzmanlaşan şirketlerini ortak güven standardı, ölçülebilir süreç
              disiplini ve güçlü hizmet kalitesi ile bir araya getirir.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
              Navigasyon
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {navigasyonOgeleri.map((oge) => (
                <Link
                  key={oge.etiket}
                  href={oge.href}
                  className="text-sm text-[color:var(--color-navy)] transition hover:text-[color:var(--color-gold)]"
                >
                  {oge.etiket}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
              Grup Şirketlerimiz
            </h2>
            <div className="mt-5 flex flex-col gap-4">
              {grupSirketleri.map((sirket) => (
                <a
                  key={sirket.ad}
                  href={sirket.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-white/80 bg-white/80 px-4 py-4 shadow-[0_14px_34px_rgba(20,32,57,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(20,32,57,0.08)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--color-navy)]">
                        {sirket.ad}
                      </p>
                      <p className="mt-1 text-xs text-[color:var(--color-muted)]">
                        {sirket.sektor}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[color:var(--color-gold)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
              İletişim
            </h2>
            <div className="mt-5 space-y-4 text-sm text-[color:var(--color-muted)]">
              <div className="flex items-start gap-3">
                <MapPinned className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-gold)]" />
                <div className="space-y-1">
                  {iletisimBilgileri.adres.map((satir) => (
                    <p key={satir}>{satir}</p>
                  ))}
                </div>
              </div>

              <a
                href={`tel:${iletisimBilgileri.telefon.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 transition hover:text-[color:var(--color-navy)]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[color:var(--color-gold)]" />
                <span>{iletisimBilgileri.telefon}</span>
              </a>

              <a
                href={`mailto:${iletisimBilgileri.eposta}`}
                className="flex items-center gap-3 transition hover:text-[color:var(--color-navy)]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[color:var(--color-gold)]" />
                <span>{iletisimBilgileri.eposta}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[color:var(--color-line)] pt-6 text-sm text-[color:var(--color-muted)] md:flex-row md:items-center md:justify-between">
          <p>© {yil} BGC Group. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-4">
            {yasalBaglantilar.map((baglanti) => (
              <Link
                key={baglanti.href}
                href={baglanti.href}
                className="transition hover:text-[color:var(--color-navy)]"
              >
                {baglanti.etiket}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
