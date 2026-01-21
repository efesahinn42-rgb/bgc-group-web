"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaCarCrash, FaCar } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-bgc-dark flex items-center justify-center pt-28 pb-12 md:py-0">
      {/* 1. ARKA PLAN */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=70&auto=format&fit=crop"
          alt="BGC Plaza"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50 grayscale scale-105"
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
          <h2 className="text-bgc-red font-serif font-semibold tracking-[0.2em] text-xs md:text-base mb-4 uppercase">
            BGC Group Holdings
          </h2>

          {/* MOBİL İÇİN FONT AYARI: text-4xl ile taşmayı önledik */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-tight">
            GÜCÜN <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              MİMARLARI
            </span>
          </h1>

          <p className="font-sans text-gray-300 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed px-4">
            Sigorta, Assist ve Filo yönetimiyle hayatın her yolunda
            yanınızdayız.
          </p>
        </motion.div>

        {/* 3. KARTLAR ALANI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* KART 1: SİGORTA */}
          <a
            href="https://bgcsigorta.com.tr"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-bgc-red/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
          >
            <div className="flex items-center justify-between mb-4">
              <FaShieldAlt className="text-2xl md:text-3xl text-gray-400 group-hover:text-bgc-red transition-colors" />
              <FaArrowRight className="text-gray-500 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <h3 className="text-left font-serif text-xl md:text-2xl font-bold text-white mb-2">
              BGC Sigorta
            </h3>
            <p className="text-left text-gray-400 text-sm font-light">
              Geleceğinizi güvence altına alan kapsamlı çözümler.
            </p>
          </a>

          {/* KART 2: ASİST */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <div className="flex items-center justify-between mb-4">
              <FaCarCrash className="text-2xl md:text-3xl text-gray-400 group-hover:text-blue-500 transition-colors" />
              <FaArrowRight className="text-gray-500 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <h3 className="text-left font-serif text-xl md:text-2xl font-bold text-white mb-2">
              BGC Assist
            </h3>
            <p className="text-left text-gray-400 text-sm font-light">
              7/24 yol yardım ve teknik destek hizmetleri.
            </p>
          </a>

          {/* KART 3: FİLO */}
          <a
            href="https://bgcfilo.com.tr"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
          >
            <div className="flex items-center justify-between mb-4">
              <FaCar className="text-2xl md:text-3xl text-gray-400 group-hover:text-amber-500 transition-colors" />
              <FaArrowRight className="text-gray-500 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <h3 className="text-left font-serif text-xl md:text-2xl font-bold text-white mb-2">
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
