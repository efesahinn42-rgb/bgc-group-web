import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="iletisim"
      className="bg-[#050914] text-white pt-20 pb-10 border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 1. İletişim Bilgileri */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">İletişim</h2>
              <p className="text-gray-400 mb-6">
                Sorularınız, iş birlikleri ve filo kiralama talepleriniz için
                bize ulaşın.
              </p>
            </div>

            <div className="space-y-6">
              {/* ADRES */}
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-bgc-red/10 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-bgc-red text-lg" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong>Genel Merkez:</strong>
                  <br />
                  Akabe, Şht. Furkan Doğan Cd.
                  <br />
                  Bey Plaza Kat:1 No:3/122
                  <br />
                  42020 Karatay / KONYA
                </p>
              </div>

              {/* TELEFON */}
              <div className="flex items-center gap-4">
                <div className="bg-bgc-red/10 p-2 rounded-full">
                  <FaPhoneAlt className="text-bgc-red text-lg" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-300 text-sm">0530 232 27 42</p>
                  <span className="text-xs text-gray-500">
                    Pzt - Cmt: 08:30 - 18:00
                  </span>
                </div>
              </div>

              {/* MAIL */}
              <div className="flex items-center gap-4">
                <div className="bg-bgc-red/10 p-2 rounded-full">
                  <FaEnvelope className="text-bgc-red text-lg" />
                </div>
                <p className="text-gray-300 text-sm">info@bgcgroup.com.tr</p>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="flex gap-4 pt-6">
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaLinkedin />} />
              <SocialIcon icon={<FaTwitter />} />
            </div>
          </div>

          {/* 2. Harita */}
          <div className="lg:w-2/3 h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
            {/* GÜNCELLENEN KISIM: 
                Link yapısı 'maps.google.com/maps?q=...&output=embed' formatına çevrildi.
                Bu format iframe içinde güvenle çalışır ve bağlantı hatası vermez.
            */}
            <iframe
              src="https://maps.google.com/maps?q=Bey%20Plaza%20Konya&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(100%) invert(90%) contrast(0.83)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-500"
              title="BGC Group Konum"
            ></iframe>

            {/* Harita üzerine estetik kırmızı katman */}
            <div className="absolute inset-0 bg-bgc-red/5 pointer-events-none mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>

        {/* Alt Telif Kısmı */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-500 font-light tracking-wide">
          © {new Date().getFullYear()} BGC Group Holdings. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-bgc-red hover:border-bgc-red transition-all duration-300"
    >
      {icon}
    </a>
  );
}
