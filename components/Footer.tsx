import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="iletisim"
      // Arka planı #050914 yaparak ana temadan (#09090b) bir ton farkla ayrıştırdık, derinlik katar.
      className="bg-[#050914] text-white pt-20 pb-12 relative overflow-hidden"
    >
      {/* --- DEKORATİF ARKA PLAN (Dev BGC Yazısı) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden select-none z-0">
        <span className="text-[20rem] md:text-[30rem] font-bold text-white/[0.02] leading-none absolute -bottom-24 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif">
          BGC
        </span>
      </div>

      {/* --- ÜST ÇİZGİ (Gradient) --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bgc-red/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* 1. KOLON: MARKA & VİZYON (4 Birim) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-white">
                BGC<span className="text-bgc-red">GROUP</span>
              </h2>
              <p className="text-xs tracking-[0.3em] text-gray-500 mt-1 uppercase">
                Holdings
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm pr-6">
              Sigorta, filo ve asistans sektörlerinde güvenin ve kalitenin
              adresi. Geleceği bugünden inşa eden çözümlerimizle hayatın her
              alanında yanınızdayız.
            </p>

            {/* Sosyal Medya İkonları */}
            <div className="flex gap-4 pt-2">
              <SocialIcon icon={<FaLinkedin />} href="#" />
              <SocialIcon icon={<FaInstagram />} href="#" />
              <SocialIcon icon={<FaTwitter />} href="#" />
            </div>
          </div>

          {/* 2. KOLON: HIZLI MENÜ (2 Birim) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2 inline-block">
              Kurumsal
            </h4>
            <ul className="space-y-3">
              <FooterLink text="Hakkımızda" />
              <FooterLink text="Vizyon & Misyon" />
              <FooterLink text="Yönetim Kurulu" />
              <FooterLink text="Kariyer" />
              <FooterLink text="Blog" />
            </ul>
          </div>

          {/* 3. KOLON: İŞTİRAKLER (3 Birim) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2 inline-block">
              İştiraklerimiz
            </h4>
            <ul className="space-y-4">
              {/* SİGORTA (Kırmızı Tema) */}
              <li className="group">
                <a
                  href="https://bgcsigorta.com.tr"
                  className="block p-3 rounded-lg bg-white/5 border border-white/5 hover:border-bgc-red/50 transition-all group-hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-200 group-hover:text-white">
                      BGC Sigorta
                    </span>
                    <FaArrowRight className="text-xs text-gray-500 group-hover:text-bgc-red transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transform duration-300" />
                  </div>
                  <span className="text-xs text-gray-500 block mt-1">
                    Güvenceniz bizimle
                  </span>
                </a>
              </li>

              {/* ASİST (Mavi Tema - DÜZELTİLDİ) */}
              <li className="group">
                <a
                  href="https://bgcassist.com.tr"
                  className="block p-3 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/50 transition-all group-hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-200 group-hover:text-white">
                      BGC Assist
                    </span>
                    {/* Ok işareti de Mavi yapıldı */}
                    <FaArrowRight className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transform duration-300" />
                  </div>
                  <span className="text-xs text-gray-500 block mt-1">
                    7/24 Yol Yardım
                  </span>
                </a>
              </li>

              {/* FİLO (Amber Tema) */}
              <li className="group">
                <a
                  href="https://bgcfilo.com.tr"
                  className="block p-3 rounded-lg bg-white/5 border border-white/5 hover:border-amber-500/50 transition-all group-hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-200 group-hover:text-white">
                      BGC Filo
                    </span>
                    <FaArrowRight className="text-xs text-gray-500 group-hover:text-amber-500 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transform duration-300" />
                  </div>
                  <span className="text-xs text-gray-500 block mt-1">
                    Kurumsal filo kiralama
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* 4. KOLON: İLETİŞİM (3 Birim) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2 inline-block">
              Bize Ulaşın
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors">
                <FaMapMarkerAlt className="mt-1 text-bgc-red shrink-0" />
                <span className="text-sm leading-relaxed">
                  Akabe, Şht. Furkan Doğan Cd.
                  <br />
                  Bey Plaza Kat:1 No:3/122
                  <br />
                  42020 Karatay / KONYA
                </span>
              </div>

              <a
                href="tel:05302322742"
                className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors"
              >
                <FaPhoneAlt className="text-bgc-red shrink-0" />
                <span className="text-sm">0530 232 27 42</span>
              </a>

              <a
                href="mailto:info@bgcgroup.com.tr"
                className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors"
              >
                <FaEnvelope className="text-bgc-red shrink-0" />
                <span className="text-sm">info@bgcgroup.com.tr</span>
              </a>
            </div>

            {/* Harita Butonu */}
            <a
              href="https://maps.google.com"
              target="_blank"
              className="mt-4 inline-flex items-center justify-center w-full py-3 border border-white/10 rounded-lg text-xs font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase"
            >
              Haritada Göster
            </a>
          </div>
        </div>

        {/* --- ALT BİLGİ (COPYRIGHT) --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <p>© {currentYear} BGC Group Holdings. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Çerez Politikası
            </a>
            <a href="#" className="hover:text-white transition-colors">
              KVKK Aydınlatma
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// YARDIMCI BİLEŞENLER
function FooterLink({ text }: { text: string }) {
  return (
    <li>
      <a
        href="#"
        className="flex items-center gap-2 text-gray-400 hover:text-bgc-red hover:pl-2 transition-all duration-300 text-sm group"
      >
        <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-bgc-red" />
        {text}
      </a>
    </li>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-bgc-red transition-all duration-300"
    >
      {icon}
    </a>
  );
}
