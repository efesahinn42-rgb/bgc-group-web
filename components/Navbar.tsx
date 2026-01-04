"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  // Kaydırma fonksiyonu: Tıklayınca yumuşakça oraya gider
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center"
    >
      {/* LOGO (Tıklayınca en başa döner) */}
      <div
        className="flex flex-col cursor-pointer"
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

      {/* MENÜ LİNKLERİ */}
      <div className="hidden md:flex items-center gap-8">
        {/* Butonları Link yerine button yaptık ki onClick çalışsın */}
        <NavButton title="KURUMSAL" onClick={() => scrollToSection("home")} />
        <NavButton
          title="İŞTİRAKLERİMİZ"
          onClick={() => scrollToSection("istirakler")}
        />
        <NavButton
          title="HAKKIMIZDA"
          onClick={() => scrollToSection("hakkimizda")}
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

      <button className="md:hidden text-white text-2xl">
        <FaBars />
      </button>
    </motion.nav>
  );
}

// Helper Button Component
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
