"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollTickingRef = useRef(false);

  // 1. SCROLL DİNLEME: Sayfa aşağı kayınca Navbar'ın rengi değişsin (performanslı)
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTickingRef.current) return;
      scrollTickingRef.current = true;

      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > 50;
        setIsScrolled((prev) => {
          // Aynı değerse re-render tetikleme
          if (prev === scrolled) return prev;
          return scrolled;
        });
        scrollTickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. KAYDIRMA FONKSİYONU
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false); // Linke tıklanınca mobil menüyü kapat
    const element = document.getElementById(id);
    if (element) {
      // Navbar yüksekliği kadar pay bırakarak kaydır (Offset)
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // 3. MOBİL MENÜ AÇIKKEN BODY SCROLL KİLİTLEME
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-[#09090b]/90 backdrop-blur-md shadow-lg border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* LOGO */}
          <div
            className="flex flex-col cursor-pointer z-50 relative"
            onClick={() => scrollToSection("home")}
          >
            <div className="group">
              <h1 className="text-2xl font-serif font-bold text-white tracking-widest group-hover:text-bgc-red transition-colors duration-300">
                BGC<span className="text-gray-400 font-light">GROUP</span>
              </h1>
              <span className="text-[10px] text-gray-400 tracking-[0.3em] uppercase hidden md:block group-hover:text-white transition-colors">
                Holdings
              </span>
            </div>
          </div>

          {/* DESKTOP MENÜ (Mobilde Gizli) */}
          <div className="hidden md:flex items-center gap-8">
            <NavButton
              title="KURUMSAL"
              onClick={() => scrollToSection("home")}
            />
            <NavButton
              title="HAKKIMIZDA"
              onClick={() => scrollToSection("hakkimizda")}
            />
            <NavButton
              title="İŞTİRAKLERİMİZ"
              onClick={() => scrollToSection("istirakler")}
            />
            <NavButton
              title="İLETİŞİM"
              onClick={() => scrollToSection("iletisim")}
            />

            <div className="h-4 w-[1px] bg-gray-600 mx-2"></div>
            <button className="text-xs text-white font-bold hover:text-bgc-red transition-colors">
              TR
            </button>
          </div>

          {/* MOBİL HAMBURGER BUTONU */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl z-50 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* MOBİL MENÜ (FULL SCREEN OVERLAY) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#09090b] flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              <MobileNavLink
                title="KURUMSAL"
                onClick={() => scrollToSection("home")}
              />
              <MobileNavLink
                title="HAKKIMIZDA"
                onClick={() => scrollToSection("hakkimizda")}
              />
              <MobileNavLink
                title="İŞTİRAKLERİMİZ"
                onClick={() => scrollToSection("istirakler")}
              />
              <MobileNavLink
                title="İLETİŞİM"
                onClick={() => scrollToSection("iletisim")}
              />
            </div>

            {/* Mobilde Alt Dekorasyon */}
            <div className="absolute bottom-10 text-gray-500 text-xs tracking-widest">
              BGC GROUP HOLDINGS © {new Date().getFullYear()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// YARDIMCI BİLEŞENLER

// Desktop Link Butonu
function NavButton({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative text-xs font-bold text-gray-300 tracking-widest hover:text-white transition-colors py-2 group uppercase"
    >
      {title}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bgc-red transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
}

// Mobil Link Butonu (Daha büyük ve gösterişli)
function MobileNavLink({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-2xl font-serif font-bold text-white tracking-widest hover:text-bgc-red transition-colors"
    >
      {title}
    </button>
  );
}
