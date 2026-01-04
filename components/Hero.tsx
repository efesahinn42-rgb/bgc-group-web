"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaCarCrash, FaCar } from "react-icons/fa"; // FaCar eklendi

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-bgc-dark flex items-center justify-center">
      {/* 1. ARKA PLAN */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="BGC Plaza"
          className="w-full h-full object-cover opacity-50 grayscale scale-105"
        />
        {/* Antrasit Perde */}
        <div className="absolute inset-0 bg-gradient-to-b from-bgc-dark/80 via-bgc-dark/50 to-bgc-dark/90" />
      </div>

      {/* 2. İÇERİK MERKEZİ */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Başlık Grubu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-bgc-red font-serif font-semibold tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
            BGC Group Holdings
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6">
            GÜCÜN <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              MİMARLARI
            </span>
          </h1>
          <p className="font-sans text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Sigorta, asistans ve filo yönetimiyle hayatın her yolunda
            yanınızdayız.
          </p>
        </motion.div>

        {/* 3. KARTLAR ALANI (3'lü Grid Yapısı) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          // Değişiklik: md:grid-cols-3 yaptık ve max-width'i artırdık
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* KART 1: SİGORTA (Kırmızı Vurgu) */}
          <a
            href="https://bgcsigorta.com.tr"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-bgc-red/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
          >
            <div className="flex items-center justify-between mb-4">
              <FaShieldAlt className="text-3xl text-gray-400 group-hover:text-bgc-red transition-colors" />
              <FaArrowRight className="text-gray-500 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <h3 className="text-left font-serif text-2xl font-bold text-white mb-2">
              BGC Sigorta
            </h3>
            <p className="text-left text-gray-400 text-sm font-light">
              Geleceğinizi güvence altına alan kapsamlı çözümler.
            </p>
          </a>

          {/* KART 2: ASİST (Mavi Vurgu) */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <div className="flex items-center justify-between mb-4">
              <FaCarCrash className="text-3xl text-gray-400 group-hover:text-blue-500 transition-colors" />
              <FaArrowRight className="text-gray-500 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <h3 className="text-left font-serif text-2xl font-bold text-white mb-2">
              BGC Asist
            </h3>
            <p className="text-left text-gray-400 text-sm font-light">
              7/24 yol yardım ve teknik destek hizmetleri.
            </p>
          </a>

          {/* KART 3: FİLO (Kehribar/Altın Vurgu - YENİ EKLENDİ) */}
          <a
            href="https://bgcfilo.com.tr"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
          >
            <div className="flex items-center justify-between mb-4">
              <FaCar className="text-3xl text-gray-400 group-hover:text-amber-500 transition-colors" />
              <FaArrowRight className="text-gray-500 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <h3 className="text-left font-serif text-2xl font-bold text-white mb-2">
              BGC Filo
            </h3>
            <p className="text-left text-gray-400 text-sm font-light">
              Kurumsal araç kiralama ve profesyonel filo yönetimi.
            </p>
          </a>
        </motion.div>
      </div>

      {/* Dekoratif Çizgi */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-20"></div>
    </div>
  );
}
