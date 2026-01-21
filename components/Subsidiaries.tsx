"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCarCrash, FaCar, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

// VERİ SETİ
// Not: 'colorCode' alanı, ikonların neon parlama efekti için gereklidir.
const services = [
  {
    id: "sigorta",
    title: "BGC Sigorta",
    description:
      "Hayatın risklerine karşı en güçlü kalkanınız. Bireysel ve kurumsal sigortacılıkta güvenin adresi.",
    colorCode: "#dc2626", // BGC Kırmızısı
    icon: <FaShieldAlt className="text-3xl" />,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=70",
    link: "https://bgcsigorta.com.tr",
  },
  {
    id: "filo",
    title: "BGC Filo",
    description:
      "Operasyonel yükünüzü hafifleten, geniş araç havuzlu kurumsal filo kiralama çözümleri.",
    colorCode: "#f59e0b", // Amber / Turuncu
    icon: <FaCar className="text-3xl" />,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=70",
    link: "https://bgcfilo.com.tr",
  },
  {
    id: "asist",
    title: "BGC Assist",
    description:
      "7/24 yol yardım, çekici ve teknik destek hizmetleriyle Türkiye'nin her yerinde yanınızdayız.",
    colorCode: "#2563eb", // Mavi
    icon: <FaCarCrash className="text-3xl" />,
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1600&q=70",
    link: "bgcassist.com.tr",
  },
];

export default function Subsidiaries() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="istirakler"
      className="py-32 bg-bgc-dark relative overflow-hidden"
    >
      {/* BAŞLIK ALANI */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left md:flex md:justify-between md:items-end"
        >
          <div>
            <h2 className="text-bgc-red text-sm tracking-[0.3em] font-bold mb-3 uppercase">
              Hizmetlerimiz
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
              İŞTİRAKLERİMİZ
            </h3>
          </div>
          <p className="hidden md:block text-gray-400 max-w-md text-right leading-relaxed">
            Sektördeki tecrübemizi farklı alanlarda uzmanlaşmış iştiraklerimizle
            birleştiriyor, bütüncül çözümler sunuyoruz.
          </p>
        </motion.div>
      </div>

      {/* --- ETKİLEŞİMLİ KARTLAR (GRID) --- */}
      <div className="container mx-auto px-6 h-[600px] flex flex-col md:flex-row gap-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            onHoverStart={() => setActiveId(service.id)}
            onHoverEnd={() => setActiveId(null)}
            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out border border-white/5
              ${activeId === service.id ? "md:flex-[3]" : "md:flex-[1]"}
              flex-[1] group
            `}
          >
            {/* ARKA PLAN RESMİ */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={`object-cover transition-transform duration-700
                ${
                  activeId === service.id
                    ? "scale-105"
                    : "scale-100 grayscale opacity-40"
                }
              `}
            />

            {/* KOYU PERDE (Overlay) */}
            <div
              className={`absolute inset-0 transition-colors duration-500
               ${activeId === service.id ? "bg-black/40" : "bg-black/70"}
            `}
            />

            {/* İÇERİK KUTUSU (Alt Kısım) */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              {/* --- YENİ NEON GLASS İKON TASARIMI --- */}
              <div
                style={{
                  backgroundColor:
                    activeId === service.id
                      ? `${service.colorCode}20` // Aktifse %20 opak renk
                      : "rgba(255, 255, 255, 0.05)", // Pasifse şeffaf beyaz
                  borderColor:
                    activeId === service.id
                      ? `${service.colorCode}80` // Aktifse belirgin çerçeve
                      : "rgba(255, 255, 255, 0.1)",
                  boxShadow:
                    activeId === service.id
                      ? `0 0 30px ${service.colorCode}40` // Aktifse NEON GLOW
                      : "none",
                }}
                className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center backdrop-blur-md border transition-all duration-500"
              >
                <div
                  style={{
                    color:
                      activeId === service.id
                        ? service.colorCode
                        : "rgba(255, 255, 255, 0.7)",
                  }}
                  className="transition-colors duration-500"
                >
                  {service.icon}
                </div>
              </div>

              {/* Başlık */}
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                {service.title}
              </h3>

              {/* Açıklama (Animasyonlu Açılır Kısım) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
                ${
                  activeId === service.id
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0 md:max-h-0"
                }
              `}
              >
                <p className="text-gray-200 leading-relaxed mb-6 text-sm md:text-base">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wider hover:gap-4 transition-all"
                >
                  WEB SİTESİNE GİT <FaArrowRight />
                </a>
              </div>
            </div>

            {/* Mobilde Başlık Altında Ok İşareti (İpucu) */}
            <div className="absolute top-6 right-6 md:hidden text-white/50">
              <FaArrowRight className="-rotate-45" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
