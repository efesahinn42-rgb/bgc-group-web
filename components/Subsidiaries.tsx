"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaCarCrash, FaCar } from "react-icons/fa";

export default function Subsidiaries() {
  return (
    <section
      id="istirakler"
      className="py-24 bg-[#0b1120] text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Bölüm Başlığı */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-bgc-red text-sm tracking-[0.3em] font-bold mb-3 uppercase">
            Hizmetlerimiz
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">
            İŞTİRAKLERİMİZ
          </h3>
        </motion.div>

        {/* 1. BGC SİGORTA */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="flex-1 order-2 md:order-1">
            <div className="w-16 h-16 bg-bgc-red/20 rounded-full flex items-center justify-center mb-6">
              <FaShieldAlt className="text-3xl text-bgc-red" />
            </div>
            <h4 className="text-3xl font-serif font-bold mb-4">BGC Sigorta</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Hayatın getirdiği risklere karşı en güçlü kalkanınız. Bireysel ve
              kurumsal sigortacılıkta, geniş acente ağımız ve uzman kadromuzla
              size en uygun poliçeleri sunuyoruz. Kasko, trafik, sağlık ve iş
              yeri sigortalarında güvenin adresi.
            </p>
            <a
              href="https://bgcsigorta.com.tr"
              className="text-sm font-bold border-b border-bgc-red pb-1 hover:text-bgc-red transition-colors"
            >
              DETAYLI BİLGİ →
            </a>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                alt="Sigorta"
              />
            </div>
          </div>
        </div>

        {/* 2. BGC FİLO (Ortada - Tersi Yön) */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="flex-1 order-1">
            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                alt="Filo Kiralama"
              />
            </div>
          </div>
          <div className="flex-1 order-2">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
              <FaCar className="text-3xl text-amber-500" />
            </div>
            <h4 className="text-3xl font-serif font-bold mb-4">BGC Filo</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Kurumsal araç kiralama ve filo yönetiminde operasyonel yükünüzü
              hafifletiyoruz. Geniş araç havuzumuz, esnek kiralama
              seçeneklerimiz ve 7/24 destek hattımız ile işinizin durmaksızın
              devam etmesini sağlıyoruz.
            </p>
            <a
              href="https://bgcfilo.com.tr"
              className="text-sm font-bold border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors"
            >
              DETAYLI BİLGİ →
            </a>
          </div>
        </div>

        {/* 3. BGC ASİST (Fotoğraf Düzeltildi) */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
              <FaCarCrash className="text-3xl text-blue-500" />
            </div>
            <h4 className="text-3xl font-serif font-bold mb-4">BGC Asist</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Yolda kaldığınızda değil, yola çıktığınız andan itibaren
              yanınızdayız. Çekici hizmeti, ikame araç, konut yardımı ve teknik
              destek çözümlerimizle Türkiye'nin 81 ilinde kesintisiz asistans
              hizmeti sunuyoruz.
            </p>
            <a
              href="#"
              className="text-sm font-bold border-b border-blue-500 pb-1 hover:text-blue-500 transition-colors"
            >
              DETAYLI BİLGİ →
            </a>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
              {/* YENİ FOTOĞRAF: Koyu tonlarda profesyonel araç servisi / yol yardım temalı */}
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                alt="Asist ve Yol Yardım"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
