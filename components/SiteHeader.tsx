"use client";

import Wordmark from "@/components/Wordmark";
import { navigasyonOgeleri } from "@/lib/site-content";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Mail, Menu, PhoneCall, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function baglantiHedefiOlustur(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function SiteHeader() {
  const [mobilMenuAcik, setMobilMenuAcik] = useState(false);
  const [asagiKaydi, setAsagiKaydi] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (deger) => {
      setAsagiKaydi(deger > 18);
    });

    return unsubscribe;
  }, [scrollY]);

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: asagiKaydi
            ? "rgba(31, 39, 72, 0.98)"
            : "rgba(31, 39, 72, 0.94)",
          boxShadow: asagiKaydi
            ? "0 14px 50px rgba(12, 18, 43, 0.24)"
            : "0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl"
      >
        <div className="container-shell flex h-[4.75rem] items-center justify-between gap-4 sm:h-[5.25rem]">
          <Link href="/" aria-label="BGC Group ana sayfa">
            <Wordmark acikTon />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigasyonOgeleri.map((oge) => (
              <Link
                key={oge.href}
                href={baglantiHedefiOlustur(oge.href)}
                className={
                  oge.tip === "cta"
                    ? "outline-button border-white/25 bg-transparent px-5 py-2.5 text-white hover:border-white hover:text-white"
                    : "nav-link"
                }
              >
                {oge.etiket}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:info@bgcgroup.com.tr"
              aria-label="E-posta gönder"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.15] text-white/75 transition hover:border-white/30 hover:text-white"
            >
              <Mail className="h-[18px] w-[18px]" strokeWidth={1.9} />
            </a>

            <a
              href="tel:+905302322742"
              aria-label="Telefon ile ara"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.15] text-white/75 transition hover:border-white/30 hover:text-white"
            >
              <PhoneCall className="h-[18px] w-[18px]" strokeWidth={1.9} />
            </a>

            <Link
              href="/#iletisim-danismani"
              className="outline-button border-white/25 bg-white/[0.08] px-6 py-3 text-white hover:border-white hover:bg-white/10 hover:text-white"
            >
              İletişime Geçin
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobilMenuAcik((onceki) => !onceki)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.15] text-white transition hover:border-white/30 lg:hidden"
            aria-label="Menüyü aç"
          >
            {mobilMenuAcik ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobilMenuAcik ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(23,30,66,0.96)] px-5 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-md flex-col gap-4">
              {navigasyonOgeleri.map((oge, index) => (
                <motion.div
                  key={oge.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <Link
                    href={baglantiHedefiOlustur(oge.href)}
                    onClick={() => setMobilMenuAcik(false)}
                    className={
                      oge.tip === "cta"
                        ? "solid-button w-full bg-white text-[var(--color-brand)] hover:bg-white/90"
                        : "block rounded-[1.5rem] border border-white/10 px-5 py-4 text-lg font-semibold text-white/90"
                    }
                  >
                    {oge.etiket}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="mailto:info@bgcgroup.com.tr"
                  className="outline-button w-full border-white/20 bg-transparent text-white hover:text-white"
                >
                  E-posta
                </a>
                <a
                  href="tel:+905302322742"
                  className="outline-button w-full border-white/20 bg-transparent text-white hover:text-white"
                >
                  Ara
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
