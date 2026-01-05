"use client";

import { motion } from "framer-motion";

// DÜZELTME: 'ease' özelliğini kaldırdık, TypeScript hatası çözüldü.
// Varsayılan animasyon zaten yumuşaktır.
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2, // Sırayla gelme efekti
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="relative py-20 md:py-32 overflow-hidden bg-bgc-dark"
    >
      {/* --- ESTETİK ARKA PLAN (CSS Grid) --- */}

      {/* 1. Katman: Izgara (Grid) Deseni */}
      <div className="absolute inset-0 z-0 opacity-10 md:opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* 2. Katman: Vignette (Karartma) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-bgc-dark via-transparent to-bgc-dark" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)]" />

      {/* 3. Katman: Dekoratif Glow Topları */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-bgc-red/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse delay-1000" />

      {/* --- İÇERİK --- */}
      <div className="container mx-auto px-6 relative z-10 flex justify-center items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Cam Kutu */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/5 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Üst Parlama Çizgisi */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <motion.h2
              variants={itemVariants}
              className="text-bgc-red text-xs md:text-sm tracking-[0.3em] font-bold mb-4 uppercase"
            >
              Biz Kimiz?
            </motion.h2>

            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight"
            >
              "Güven, Tecrübe ve Teknolojinin Kesişim Noktası"
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-6"
            >
              BGC Group olarak, sigortacılık sektöründeki köklü tecrübemizi,
              filo yönetimi ve asistans hizmetleriyle birleştirerek entegre bir
              hizmet ekosistemi sunuyoruz.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg leading-relaxed"
            >
              Yenilikçi teknolojileri süreçlerimize entegre ederek, dijitalleşen
              dünyada hızlı, şeffaf ve erişilebilir çözümler üretiyoruz.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
