import MotionReveal from "@/components/MotionReveal";
import { iletisimBilgileri } from "@/lib/site-content";
import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function ContactBand() {
  return (
    <section className="pb-24 pt-8 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[color:var(--color-line-strong)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(248,244,235,0.92))] px-6 py-10 shadow-[0_28px_80px_rgba(20,32,57,0.10)] sm:px-10 sm:py-12">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[rgba(202,170,112,0.18)] blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--color-gold-deep)]">
                  Kurumsal iletişim
                </p>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[color:var(--color-navy)] sm:text-5xl">
                  Yeni iş birlikleri için güçlü ve güven veren bir başlangıç
                </h2>
                <p className="mt-5 text-base leading-8 text-[color:var(--color-muted)]">
                  {iletisimBilgileri.calismaNotu}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-navy)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(19,32,57,0.18)] transition hover:-translate-y-0.5"
                >
                  İletişim Sayfasına Geçin
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={`tel:${iletisimBilgileri.telefon.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-line-strong)] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[color:var(--color-navy)] transition hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold-deep)]"
                >
                  <PhoneCall className="h-4 w-4" />
                  {iletisimBilgileri.telefon}
                </a>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
