export type GrupSirketi = {
  ad: string;
  sektor: string;
  aciklama: string;
  url: string;
  cta: string;
  vurgu: string;
  rozet: string;
  istatistik: string;
};

export type NavigasyonOgesi = {
  etiket: string;
  href: string;
  tip: "rota" | "bolum";
};

export type IletisimBilgisi = {
  adres: string[];
  telefon: string;
  eposta: string;
  calismaNotu: string;
  haritaUrl: string;
};

export type YasalSayfaIcerigi = {
  baslik: string;
  aciklama: string;
  not: string;
  bolumler: Array<{
    baslik: string;
    metin: string;
  }>;
};

export const navigasyonOgeleri: NavigasyonOgesi[] = [
  { etiket: "Ana Sayfa", href: "/", tip: "rota" },
  { etiket: "Kurumsal", href: "/kurumsal", tip: "rota" },
  { etiket: "Grup Şirketlerimiz", href: "/#grup-sirketlerimiz", tip: "bolum" },
  { etiket: "İletişim", href: "/iletisim", tip: "rota" },
];

export const grupSirketleri: GrupSirketi[] = [
  {
    ad: "BGC Sigorta",
    sektor: "Sigorta ve risk yönetimi",
    aciklama:
      "Bireysel ve kurumsal müşteriler için kapsamlı güvence modelleri, doğru risk analizi ve uzun vadeli koruma yaklaşımı sunar.",
    url: "https://bgcsigorta.com.tr",
    cta: "BGC Sigorta'yı İnceleyin",
    vurgu: "Güven odaklı kapsam",
    rozet: "Teminat uzmanlığı",
    istatistik: "Kapsamlı güvence çözümleri",
  },
  {
    ad: "BGC Assist",
    sektor: "Asistans ve operasyon desteği",
    aciklama:
      "7/24 yol yardımı, hızlı operasyon yönetimi ve kesintisiz saha koordinasyonu ile müşterilerine anlık çözüm gücü sağlar.",
    url: "https://bgcassist.com.tr",
    cta: "BGC Assist'e Geçin",
    vurgu: "Kesintisiz hizmet akışı",
    rozet: "24/7 operasyon desteği",
    istatistik: "Anlık saha çözümleri",
  },
  {
    ad: "BGC Filo",
    sektor: "Kurumsal mobilite ve filo yönetimi",
    aciklama:
      "Premium rent-a-car hizmetleri, verimli araç planlaması ve ölçeklenebilir kurumsal mobilite çözümleriyle iş süreçlerini destekler.",
    url: "https://bgcfilo.com.tr",
    cta: "BGC Filo'yu Keşfedin",
    vurgu: "Modern araç çözümleri",
    rozet: "Kurumsal mobilite",
    istatistik: "Esnek filo planlaması",
  },
];

export const iletisimBilgileri: IletisimBilgisi = {
  adres: [
    "Akabe, Şht. Furkan Doğan Cd.",
    "Bey Plaza Kat:1 No:3/122",
    "42020 Karatay / Konya",
  ],
  telefon: "0530 232 27 42",
  eposta: "info@bgcgroup.com.tr",
  calismaNotu:
    "Yeni iş birlikleri, teklif talepleri ve kurumsal görüşmeler için BGC Group ekibiyle doğrudan iletişime geçebilirsiniz.",
  haritaUrl:
    "https://maps.google.com/?q=Akabe%20%C5%9Eht.%20Furkan%20Do%C4%9Fan%20Cd.%20Bey%20Plaza%20Kat:1%20No:3/122%20Karatay%20Konya",
};

export const heroMetrikleri = [
  {
    deger: "3",
    etiket: "Uzman şirket",
    aciklama:
      "Sigorta, asistans ve filo yönetimini tek çatı altında koordine eden bütünsel yapı.",
  },
  {
    deger: "7/24",
    etiket: "Operasyon odağı",
    aciklama:
      "Hız, erişilebilirlik ve çözüm devamlılığı gerektiren süreçlere uyumlu hizmet standardı.",
  },
  {
    deger: "Tek",
    etiket: "Kurumsal kalite çizgisi",
    aciklama:
      "Her temas noktasında güven, şeffaflık ve sürdürülebilir performans yaklaşımı.",
  },
];

export const kurumsalIlkeler = [
  {
    baslik: "Ortak yönetim disiplini",
    aciklama:
      "Farklı sektörlerde uzmanlaşan şirketlerimizi aynı karar kalitesi ve aynı kurumsal hassasiyet ile yönetiyoruz.",
  },
  {
    baslik: "Sürdürülebilir hizmet deneyimi",
    aciklama:
      "Müşteri güvenini anlık fayda yerine uzun vadeli ilişki değeri üzerinden inşa ediyoruz.",
  },
  {
    baslik: "Ölçeklenebilir çözüm mimarisi",
    aciklama:
      "Büyüyen ihtiyaçlara uyum sağlayan süreç tasarımıyla esnek, hızlı ve ölçülebilir çıktı üretiyoruz.",
  },
];

export const kurumsalBasliklar = [
  {
    baslik: "Vizyonumuz",
    aciklama:
      "BGC Group, güçlü şirket yapısını ortak akıl ve yüksek hizmet standardı ile birleştirerek Türkiye'de güven merkezli bir grup markası oluşturmayı hedefler.",
  },
  {
    baslik: "Hizmet yaklaşımımız",
    aciklama:
      "Her iştirakimizin kendi uzmanlığını korurken aynı kurumsal disiplin içinde hareket etmesini sağlıyor, karar süreçlerini hızlandırıyoruz.",
  },
  {
    baslik: "Sinerji modelimiz",
    aciklama:
      "İştirakler arası bilgi paylaşımı, operasyon senkronizasyonu ve kalite takibi ile daha tutarlı bir müşteri deneyimi sunuyoruz.",
  },
];

export const yasalSayfaIcerikleri: Record<string, YasalSayfaIcerigi> = {
  "gizlilik-politikasi": {
    baslik: "Gizlilik Politikası",
    aciklama:
      "Bu sayfa, resmi metin yayımlanana kadar BGC Group'un veri gizliliğine yaklaşımını özetleyen geçici bir bilgilendirme alanıdır.",
    not: "Bu içerik taslak niteliğindedir. Nihai hukuk metni kurumsal onay sonrası yayımlanacaktır.",
    bolumler: [
      {
        baslik: "Kişisel veri yaklaşımı",
        metin:
          "BGC Group, iletişim ve teklif süreçlerinde paylaşılan bilgileri yalnızca talep yönetimi, müşteri iletişimi ve hizmet geliştirme amaçları doğrultusunda ele almayı hedefler.",
      },
      {
        baslik: "Bilgi güvenliği prensibi",
        metin:
          "Dijital kanallarda toplanan verilerin gizliliği, erişim yetkilerinin sınırlandırılması ve süreç bazlı kontrol mekanizmalarıyla korunması esas alınır.",
      },
      {
        baslik: "Güncelleme ve bildirim",
        metin:
          "Resmi politika metni tamamlandığında bu alan güncellenecek; yürürlüğe giren değişiklikler kurumsal kanallar üzerinden duyurulacaktır.",
      },
    ],
  },
  "cerez-politikasi": {
    baslik: "Çerez Politikası",
    aciklama:
      "Bu sayfa, resmi çerez metni hazırlanırken dijital deneyime ilişkin genel yaklaşımı paylaşmak amacıyla oluşturulmuştur.",
    not: "Site üzerinde kullanılacak çerez kategorileri ve tercih yönetimi detayları, nihai politika ile birlikte güncellenecektir.",
    bolumler: [
      {
        baslik: "Deneyim ve performans",
        metin:
          "Ziyaretçi deneyimini iyileştirmek, sayfa performansını anlamak ve dijital temas noktalarını optimize etmek için sınırlı teknik veriler değerlendirilebilir.",
      },
      {
        baslik: "Tercih yönetimi",
        metin:
          "Çerez tercihleri yürürlükteki mevzuata ve kullanıcı onay süreçlerine uygun biçimde tasarlanacak, şeffaf biçimde sunulacaktır.",
      },
      {
        baslik: "Kurumsal şeffaflık",
        metin:
          "Hangi çerez türlerinin kullanıldığı, bu çerezlerin ne kadar süre aktif kaldığı ve hangi amaçlara hizmet ettiği nihai metinde açıkça belirtilecektir.",
      },
    ],
  },
  "kvkk-aydinlatma": {
    baslik: "KVKK Aydınlatma Metni",
    aciklama:
      "Bu bölüm, resmi KVKK aydınlatma metni yayımlanana kadar bilgilendirme amaçlı geçici bir içerik sunar.",
    not: "Nihai KVKK metni, veri sorumlusu bilgileri ve hukuki işleme dayanakları ile birlikte ayrıca yayımlanacaktır.",
    bolumler: [
      {
        baslik: "İşleme amacı",
        metin:
          "İletişim formları ve kurumsal başvurular aracılığıyla paylaşılan veriler; talep değerlendirme, geri dönüş sağlama ve hizmet ilişkisini yürütme amacıyla ele alınabilir.",
      },
      {
        baslik: "Aktarım ve saklama",
        metin:
          "Veri aktarım, saklama süresi ve erişim politikaları; yasal yükümlülükler, sözleşmesel gereklilikler ve operasyonel güvenlik ihtiyaçları doğrultusunda çerçevelendirilecektir.",
      },
      {
        baslik: "Haklar ve başvuru",
        metin:
          "İlgili kişi haklarına ilişkin başvuru yöntemleri, iletişim kanalları ve değerlendirme süreçleri resmi metnin yayımlanmasıyla birlikte açık şekilde duyurulacaktır.",
      },
    ],
  },
};
