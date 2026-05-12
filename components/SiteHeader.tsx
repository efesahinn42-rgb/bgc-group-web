"use client";

import Wordmark from "@/components/Wordmark";
import { navigasyonOgeleri } from "@/lib/site-content";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function baglantiEtkinMi(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href.startsWith("/#")) {
    return pathname === "/";
  }

  return pathname === href;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobilMenuAcik, setMobilMenuAcik] = useState(false);
  const [asagiKaydirildi, setAsagiKaydirildi] = useState(false);

  useEffect(() => {
    const kaydirmaDinleyicisi = () => {
      setAsagiKaydirildi(window.scrollY > 18);
    };

    kaydirmaDinleyicisi();
    window.addEventListener("scroll", kaydirmaDinleyicisi, { passive: true });

    return () => {
      window.removeEventListener("scroll", kaydirmaDinleyicisi);
    };
  }, []);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    setMobilMenuAcik(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[rgba(250,247,240,0.78)] backdrop-blur-xl">
      <div
        className={`header-reveal mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          asagiKaydirildi ? "py-3" : "py-4"
        }`}
      >
        <Link href="/" className="shrink-0" aria-label="BGC Group Ana Sayfa">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navigasyonOgeleri.map((oge) => {
            const etkin = baglantiEtkinMi(pathname, oge.href);

            return (
              <Link
                key={oge.etiket}
                href={oge.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  etkin
                    ? "bg-white text-[color:var(--color-navy)] shadow-[0_10px_25px_rgba(20,32,57,0.08)]"
                    : "text-[color:var(--color-muted)] hover:text-[color:var(--color-navy)]"
                }`}
              >
                {oge.etiket}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-navy)] px-5 py-3 text-sm font-semibold text-[color:var(--color-navy)] transition hover:bg-[color:var(--color-navy)] hover:text-white"
          >
            İletişime Geçin
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobilMenuAcik((onceki) => !onceki)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white/80 text-[color:var(--color-navy)] shadow-[0_10px_24px_rgba(20,32,57,0.08)] md:hidden"
          aria-label={mobilMenuAcik ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobilMenuAcik}
        >
          {mobilMenuAcik ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        aria-hidden={!mobilMenuAcik}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,border-color] duration-300 md:hidden ${
          mobilMenuAcik
            ? "grid-rows-[1fr] border-t border-white/70 opacity-100"
            : "pointer-events-none grid-rows-[0fr] border-t border-transparent opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-[rgba(250,247,240,0.96)] px-5">
          <div className="pb-6 pt-3">
            <nav className="flex flex-col gap-2">
              {navigasyonOgeleri.map((oge) => (
                <Link
                  key={oge.etiket}
                  href={oge.href}
                  onClick={() => setMobilMenuAcik(false)}
                  className="rounded-2xl border border-transparent bg-white/70 px-4 py-3 text-sm font-medium text-[color:var(--color-navy)] shadow-[0_8px_22px_rgba(20,32,57,0.06)]"
                >
                  {oge.etiket}
                </Link>
              ))}
            </nav>

            <Link
              href="/iletisim"
              onClick={() => setMobilMenuAcik(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-navy)] px-5 py-3 text-sm font-semibold text-white"
            >
              İletişim Sayfasına Geçin
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
