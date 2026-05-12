import MotionReveal from "@/components/MotionReveal";
import { grupSirketleri, heroMetrikleri } from "@/lib/site-content";
import {
  ArrowRight,
  BriefcaseBusiness,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(202,170,112,0.18),transparent_42%),radial-gradient(circle_at_top_right,rgba(19,32,57,0.10),transparent_32%)]" />
      <div className="absolute left-1/2 top-14 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(255,255,255,0.78)] blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <MotionReveal className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-medium text-[color:var(--color-muted)] shadow-[0_14px_40px_rgba(20,32,57,0.08)]">
            <Sparkles className="h-4 w-4 text-[color:var(--color-gold)]" />
            Premium çatı şirket deneyimi
          </div>

          <div className="max-w-3xl space-y-6">
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-[color:var(--color-navy)] sm:text-6xl lg:text-7xl">
              BGC Group:
              <span className="block text-[color:var(--color-gold-deep)]">
                Geleceğe Güvenle Taşır
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              BGC Group, farklı sektörlerde liderlik potansiyeli taşıyan
              şirketlerini tek kurumsal vizyon altında buluşturur; güven,
              erişilebilirlik ve sürdürülebilir hizmet kalitesini aynı çizgide
              konumlandırır.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#grup-sirketlerimiz"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-navy)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(19,32,57,0.18)] transition hover:-translate-y-0.5"
            >
              Grup Şirketlerimizi İnceleyin
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/kurumsal"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-line-strong)] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[color:var(--color-navy)] shadow-[0_12px_30px_rgba(20,32,57,0.06)] transition hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold-deep)]"
            >
              Kurumsal Bakış
              <BriefcaseBusiness className="h-4 w-4" />
            </Link>
          </div>
        </MotionReveal>

        <MotionReveal className="relative lg:pt-6" delay={0.1}>
          <div className="absolute -left-10 top-12 hidden h-28 w-28 rounded-full border border-white/70 bg-white/55 blur-sm lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/82 p-6 shadow-[0_28px_80px_rgba(20,32,57,0.12)] sm:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(202,170,112,0.8),transparent)]" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--color-muted)]">
                  Çatı şirket odağı
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-[color:var(--color-navy)]">
                  Tek merkezden bütünsel yönetişim
                </h2>
              </div>

              <div className="rounded-2xl border border-[color:var(--color-champagne-strong)] bg-[color:var(--color-surface)] p-3">
                <ShieldCheck className="h-6 w-6 text-[color:var(--color-gold-deep)]" />
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[color:var(--color-muted)]">
              Her iştirak, kendi uzmanlık alanında güçlü bir operasyonel yapı
              sunarken; BGC Group markası bu yetkinlikleri ortak kalite,
              koordinasyon ve güven standardında bir araya getirir.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {heroMetrikleri.map((metrik) => (
                <div
                  key={metrik.etiket}
                  className="rounded-[1.6rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
                >
                  <p className="font-serif text-3xl font-semibold text-[color:var(--color-navy)]">
                    {metrik.deger}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[color:var(--color-navy)]">
                    {metrik.etiket}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
                    {metrik.aciklama}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(248,244,235,0.95),rgba(255,255,255,0.88))] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                Grup şirketlerimiz
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {grupSirketleri.map((sirket) => (
                  <div
                    key={sirket.ad}
                    className="rounded-2xl border border-white bg-white/90 px-4 py-4 shadow-[0_10px_24px_rgba(20,32,57,0.05)]"
                  >
                    <p className="text-sm font-semibold text-[color:var(--color-navy)]">
                      {sirket.ad}
                    </p>
                    <p className="mt-2 text-xs leading-6 text-[color:var(--color-muted)]">
                      {sirket.istatistik}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
