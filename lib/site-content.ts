export type NavigasyonOgesi = {
  etiket: string;
  href: string;
  tip: "anchor" | "cta";
};

export type HeroIcerigi = {
  etiket: string;
  baslik: string;
  aciklama: string;
  birincilCta: { etiket: string; href: string };
  ikincilCta: { etiket: string; href: string };
  videoSrc: string;
  posterSrc: string;
  kisaNot: string;
  ozetMaddeleri: Array<{
    deger: string;
    aciklama: string;
  }>;
};

export type AnlatiBolumu = {
  etiket: string;
  baslik: string;
  paragrafBir: string;
  paragrafIki: string;
};

export type AnlatiKartIcerigi = {
  baslik: string;
  aciklama: string;
  gorselSrc: string;
  gorselAlt: string;
};

export type SirketKartIcerigi = {
  ad: string;
  sektor: string;
  aciklama: string;
  vurgu: string;
  cta: string;
  href: string;
  gorselSrc: string;
  gorselAlt: string;
};

export type SplitSectionIcerigi = {
  etiket: string;
  baslik: string;
  aciklama: string;
  ekAciklama?: string;
  cta: { etiket: string; href: string };
  gorselSrc: string;
  gorselAlt: string;
  gorselEtiket?: string;
};

export type CarouselKartIcerigi = {
  etiket: string;
  baslik: string;
  aciklama: string;
  cta: string;
  href: string;
  gorselSrc?: string;
  gorselAlt?: string;
  tema: "photo" | "gradient";
};

export type IcGoruKartIcerigi = {
  etiket: string;
  baslik: string;
  aciklama: string;
  cta: string;
  href: string;
  tema: "analitik" | "strateji";
  gorselSrc: string;
  gorselAlt: string;
};

export type VitrinBolumuIcerigi = {
  etiket: string;
  baslik: string;
  aciklama: string;
  cta: { etiket: string; href: string };
  kartBaslik: string;
  kartAciklama: string;
  gorselSrc: string;
  gorselAlt: string;
};

export type KesifKartIcerigi = {
  baslik: string;
  aciklama: string;
  cta: string;
  href: string;
  ikon: "building" | "briefcase" | "network";
};

export type IletisimBilgisi = {
  adresSatirlari: string[];
  telefon: string;
  eposta: string;
};

export type IletisimBlokIcerigi = {
  etiket: string;
  adSoyad: string;
  unvan: string;
  baslik: string;
  aciklama: string;
  eposta: string;
  telefon: string;
  cta: { etiket: string; href: string };
  gorselSrc: string;
  gorselAlt: string;
};

export type FooterKolonIcerigi = {
  baslik: string;
  baglantilar: Array<{
    etiket: string;
    href: string;
    harici?: boolean;
  }>;
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
  { etiket: "Ana Sayfa", href: "#hero", tip: "anchor" },
  { etiket: "Grup Şirketleri", href: "#grup-sirketleri", tip: "anchor" },
  { etiket: "Çözümler", href: "#cozumler", tip: "anchor" },
  { etiket: "İçgörüler", href: "#icgoruler", tip: "anchor" },
  { etiket: "İletişim", href: "#iletisim-danismani", tip: "cta" },
];

export const heroIcerigi: HeroIcerigi = {
  etiket: "Ana faaliyet alanımız",
  baslik: "Hareket kabiliyetinizi tek çatı altında güçlendiriyoruz.",
  aciklama:
    "BGC Group, sigorta, asistans ve kurumsal mobilite uzmanlığını tek bir kurumsal yönetişim altında toplayarak işletmeler için daha görünür, daha kontrollü ve daha güven veren bir hizmet akışı oluşturur.",
  birincilCta: {
    etiket: "Bizi Tanıyın",
    href: "#bizi-farkli-kilan",
  },
  ikincilCta: {
    etiket: "Şirket Yapımızı İnceleyin",
    href: "#grup-sirketleri",
  },
  videoSrc: "https://assets.mixkit.co/videos/5305/5305-720.mp4",
  posterSrc: "/media/photos/hero-architecture.jpg",
  kisaNot: "Tek merkezden koordinasyon, çok sektörlü uzmanlık.",
  ozetMaddeleri: [
    {
      deger: "3 güçlü yapı",
      aciklama:
        "Sigorta, asistans ve filo çözümleri tek marka altında hizalanır.",
    },
    {
      deger: "Kurumsal görünürlük",
      aciklama:
        "Her temas noktası aynı hizmet disiplini ve kalite tonu ile ilerler.",
    },
    {
      deger: "Uzun vadeli güven",
      aciklama:
        "İş ortaklıklarını günlük fayda değil sürdürülebilir değer üzerinden kurar.",
    },
  ],
};

export const anlatiBolumu: AnlatiBolumu = {
  etiket: "İnovasyon",
  baslik: "Bizi farklı kılan nedir?",
  paragrafBir:
    "BGC Group, farklı ihtiyaçlara hitap eden şirketlerini sadece portföy mantığıyla değil; birbirini tamamlayan uzmanlık alanları olarak konumlandırır. Böylece müşteriler, her konu için doğru markaya yönelirken aynı kurumsal yaklaşımın içinde kalır.",
  paragrafIki:
    "Bu yapı; karar alma hızını artıran görünürlük, iş süreçlerinde tutarlılık ve hizmet kalitesinde güvenilirlik sağlar. Sonuç olarak işletmeler, çok başlı bir tedarik ilişkisi yerine tek bir çatı markanın koordinasyon gücünden yararlanır.",
};

export const anlatiKartlari: AnlatiKartIcerigi[] = [
  {
    baslik: "Bağlantılı hizmet akışı",
    aciklama:
      "Şirketler arası yönlendirme, süreçleri bölmek yerine sadeleştirir ve her adımı daha anlaşılır hale getirir.",
    gorselSrc: "/media/photos/company-assist.jpg",
    gorselAlt: "Yol üzerinde hareket halindeki araç görseli",
  },
  {
    baslik: "İnsan odaklı koordinasyon",
    aciklama:
      "Danışmanlık ve operasyon ekipleri, ihtiyaca göre farklı hizmet alanlarını aynı çerçevede buluşturur.",
    gorselSrc: "/media/photos/section-consulting.jpg",
    gorselAlt: "Toplantı yapan profesyoneller",
  },
  {
    baslik: "Uzun vadeli güven standardı",
    aciklama:
      "BGC Group, her markasında erişilebilirlik, şeffaflık ve kurumsal istikrarı aynı tonda sunar.",
    gorselSrc: "/media/photos/advisor-portrait.jpg",
    gorselAlt: "Profesyonel portre görseli",
  },
];

export const grupSirketleri: SirketKartIcerigi[] = [
  {
    ad: "BGC Sigorta",
    sektor: "Sigorta ve risk yönetimi",
    aciklama:
      "Bireysel ve kurumsal müşteriler için kapsamlı güvence kurguları, doğru risk okuması ve sürdürülebilir koruma yaklaşımı geliştirir.",
    vurgu: "Kurumsal güvence mimarisi",
    cta: "BGC Sigorta'yı keşfedin",
    href: "https://bgcsigorta.com.tr",
    gorselSrc: "/media/photos/company-sigorta.jpg",
    gorselAlt: "Kurumsal toplantı ve danışmanlık görseli",
  },
  {
    ad: "BGC Assist",
    sektor: "7/24 asistans ve operasyon sürekliliği",
    aciklama:
      "Yol yardımı, operasyon takibi ve hızlı saha koordinasyonu ile kritik anlarda kesintisiz destek sağlayan çözüm yapısı sunar.",
    vurgu: "Anlık destek, kontrollü operasyon",
    cta: "BGC Assist'e geçin",
    href: "https://bgcassist.com.tr",
    gorselSrc: "/media/photos/company-assist.jpg",
    gorselAlt: "Yol üzerinde araç görseli",
  },
  {
    ad: "BGC Filo",
    sektor: "Kurumsal mobilite ve filo yönetimi",
    aciklama:
      "Araç kiralama, filo planlaması ve mobilite süreçlerini daha görünür ve verimli hale getiren modern hizmet çözümleri geliştirir.",
    vurgu: "Mobiliteyi ölçülebilir hale getiren yapı",
    cta: "BGC Filo'yu inceleyin",
    href: "https://bgcfilo.com.tr",
    gorselSrc: "/media/photos/company-filo.jpg",
    gorselAlt: "Premium araç ve mobilite görseli",
  },
];

export const operasyonBolumu: SplitSectionIcerigi = {
  etiket: "Hizmetlerimiz",
  baslik:
    "Operasyonel kapsamın tamamını tek bakışta yönetilebilir hale getiriyoruz.",
  aciklama:
    "BGC Group yaklaşımı; doğru şirkete doğru yönlendirme, süreçler arası görünürlük ve kurumsal kalite standardının korunması üzerine kurulur. Böylece farklı hizmet başlıkları tek bir çatı marka deneyimi olarak hissedilir.",
  ekAciklama:
    "Sigorta güvenliğinden asistans sürekliliğine, mobilite planlamasından kurumsal yönetişime kadar uzanan yapı; hızlı karar alan, kontrollü ve güven veren bir iş akışı üretir.",
  cta: {
    etiket: "Kurumsal yapı özetini inceleyin",
    href: "#grup-sirketleri",
  },
  gorselSrc: "/media/photos/section-consulting.jpg",
  gorselAlt: "BGC Group hizmet koordinasyonunu temsil eden toplantı görseli",
  gorselEtiket: "Çatı marka koordinasyonu",
};

export const carouselKartlari: CarouselKartIcerigi[] = [
  {
    etiket: "Koordinasyon",
    baslik: "Tek merkezden şirket yönlendirmesi",
    aciklama:
      "İhtiyaca göre doğru markayı öne çıkaran yapı, temas noktalarını sadeleştirir ve karar sürecini hızlandırır.",
    cta: "Yapıyı keşfedin",
    href: "#grup-sirketleri",
    tema: "gradient",
  },
  {
    etiket: "Mobilite",
    baslik: "BGC Filo ile görünür mobilite akışı",
    aciklama:
      "Filo planlaması, araç çözümleri ve kurumsal hareketliliği tek çatı deneyimi içinde konumlandırır.",
    cta: "Filo yaklaşımını görün",
    href: "https://bgcfilo.com.tr",
    gorselSrc: "/media/photos/company-filo.jpg",
    gorselAlt: "Kurumsal mobilite çözümünü temsil eden araç görseli",
    tema: "photo",
  },
  {
    etiket: "Süreklilik",
    baslik: "BGC Assist ile kritik anlarda operasyon desteği",
    aciklama:
      "Saha desteği ve yol yardımı kurgusu, hizmet akışında güven duygusunu güçlendirir.",
    cta: "Asistans çözümünü inceleyin",
    href: "https://bgcassist.com.tr",
    gorselSrc: "/media/photos/company-assist.jpg",
    gorselAlt: "Hareket halindeki araç görseli",
    tema: "photo",
  },
  {
    etiket: "Güvence",
    baslik: "BGC Sigorta ile risk görünürlüğü",
    aciklama:
      "Doğru teminat yapısı ve sürdürülebilir güvence planlaması ile kurumsal güven ortamını destekler.",
    cta: "Sigorta tarafını keşfedin",
    href: "https://bgcsigorta.com.tr",
    gorselSrc: "/media/photos/company-sigorta.jpg",
    gorselAlt: "Sigorta danışmanlığı toplantı görseli",
    tema: "photo",
  },
];

export const danismanlikBolumu: SplitSectionIcerigi = {
  etiket: "Çözümler",
  baslik:
    "İşletmenize uygun doğru yönlendirme için danışmanlık odağını koruyoruz.",
  aciklama:
    "BGC Group, her talebi aynı cevapla karşılamak yerine, ihtiyacın niteliğini doğru okuyup ilgili grup şirketiyle en uygun çözüm akışını eşleştiren bir yaklaşım benimser.",
  ekAciklama:
    "Bu yapı, yeni iş birliklerinde daha güvenli başlangıçlar kurar; ekiplerin doğru marka, doğru kapsam ve doğru iletişim tonuyla ilerlemesini sağlar.",
  cta: {
    etiket: "İletişim alanına geçin",
    href: "#iletisim-danismani",
  },
  gorselSrc: "/media/photos/company-sigorta.jpg",
  gorselAlt: "Kurumsal danışmanlık anını temsil eden toplantı görseli",
  gorselEtiket: "Danışmanlık yaklaşımı",
};

export const agBolumu: VitrinBolumuIcerigi = {
  etiket: "Çok sektörlü uzmanlık",
  baslik: "Tek çatı altında çok sektörlü uzmanlık.",
  aciklama:
    "BGC Group'un gücü, farklı alanlarda derinleşen şirketlerini tek bir kurumsal hizaya getirebilmesinden gelir. Bu sayede müşteriler, kapsamı büyüyen ihtiyaçlarında yeni arayışlara yönelmeden aynı güven ilişkisinin içinde kalabilir.",
  cta: {
    etiket: "İçgörü bölümüne ilerleyin",
    href: "#icgoruler",
  },
  kartBaslik: "Uzmanlık alanları arasında kontrollü geçiş",
  kartAciklama:
    "Sigorta, asistans ve mobilite başlıkları arasında kurulan düzenli yönlendirme, BGC markasının tek merkez hissini güçlendirir.",
  gorselSrc: "/media/photos/reach-network.jpg",
  gorselAlt: "Çok sektörlü uzmanlığı temsil eden mimari ve ağ görseli",
};

export const icgoruKartlari: IcGoruKartIcerigi[] = [
  {
    etiket: "Kurumsal içgörü",
    baslik:
      "Birden fazla hizmet başlığını tek kurumsal dilde yönetmek neden fark yaratır?",
    aciklama:
      "BGC Group yapısı, farklı uzmanlık alanları arasında görünürlük ve karar kalitesi sağlayarak kurumsal ilişkiyi daha istikrarlı hale getirir.",
    cta: "Detayı görün",
    href: "#cozumler",
    tema: "analitik",
    gorselSrc: "/media/photos/insight-analitik.jpg",
    gorselAlt: "Kurumsal analitik ve strateji görseli",
  },
  {
    etiket: "Stratejik bakış",
    baslik:
      "Doğru yönlendirme, hizmet hacmi büyürken neden daha kritik hale gelir?",
    aciklama:
      "Yeni ihtiyaçlar arttığında tek çatı koordinasyonu, hem iletişim yükünü azaltır hem de markalar arası geçişi daha kontrollü yapar.",
    cta: "Bakışı inceleyin",
    href: "#iletisim-danismani",
    tema: "strateji",
    gorselSrc: "/media/photos/insight-strateji.jpg",
    gorselAlt: "Stratejik karar ve uzmanlık görseli",
  },
];

export const kesifKartlari: KesifKartIcerigi[] = [
  {
    baslik: "Kurumsal Yapı",
    aciklama:
      "BGC Group'un şirketler arası kurgu mantığını, ortak standartlarını ve büyüme yaklaşımını yakından inceleyin.",
    cta: "Kurumsal yapıyı keşfedin",
    href: "#bizi-farkli-kilan",
    ikon: "building",
  },
  {
    baslik: "Kariyer",
    aciklama:
      "Gelişim odaklı bir grup yapısında yer almak isteyen profesyoneller için insan ve değer odaklı çalışma yaklaşımımızı görün.",
    cta: "Kariyer bakışını görün",
    href: "#iletisim-danismani",
    ikon: "briefcase",
  },
  {
    baslik: "İş Ortaklıkları",
    aciklama:
      "Yeni iş birliği fırsatlarında hangi hizmet alanının öne çıkması gerektiğini birlikte değerlendirelim.",
    cta: "İş ortaklığı için bağlanın",
    href: "#iletisim-danismani",
    ikon: "network",
  },
];

export const iletisimBilgileri: IletisimBilgisi = {
  adresSatirlari: [
    "Akabe, Şht. Furkan Doğan Cd.",
    "Bey Plaza Kat:1 No:3/122",
    "42020 Karatay / Konya",
  ],
  telefon: "0530 232 27 42",
  eposta: "info@bgcgroup.com.tr",
};

export const iletisimBlogu: IletisimBlokIcerigi = {
  etiket: "Kurumsal iletişim",
  adSoyad: "Seda Yalın",
  unvan: "Kurumsal İlişkiler Temsilcisi",
  baslik: "BGC Group ile doğru teması birlikte kuralım.",
  aciklama:
    "Yeni bir iş birliği başlatmak, doğru grup şirketine yönelmek ya da ihtiyaçlarınıza uygun kapsamı netleştirmek istiyorsanız size destek olmaya hazırız. İlk görüşmede hangi başlığın öne çıkması gerektiğini birlikte belirleyebiliriz.",
  eposta: "info@bgcgroup.com.tr",
  telefon: "0530 232 27 42",
  cta: {
    etiket: "İletişime geçin",
    href: "mailto:info@bgcgroup.com.tr",
  },
  gorselSrc: "/media/photos/advisor-portrait.jpg",
  gorselAlt: "Kurumsal ilişkiler danışmanı placeholder portresi",
};

export const footerKolonlari: FooterKolonIcerigi[] = [
  {
    baslik: "Grup Şirketleri",
    baglantilar: [
      {
        etiket: "BGC Sigorta",
        href: "https://bgcsigorta.com.tr",
        harici: true,
      },
      { etiket: "BGC Assist", href: "https://bgcassist.com.tr", harici: true },
      { etiket: "BGC Filo", href: "https://bgcfilo.com.tr", harici: true },
    ],
  },
  {
    baslik: "Çözümler",
    baglantilar: [
      { etiket: "Tek çatı koordinasyonu", href: "#cozumler" },
      { etiket: "Kurumsal yönlendirme", href: "#grup-sirketleri" },
      { etiket: "İçgörüler", href: "#icgoruler" },
    ],
  },
  {
    baslik: "Kurumsal",
    baglantilar: [
      { etiket: "Bizi farklı kılan", href: "#bizi-farkli-kilan" },
      { etiket: "Uzmanlık yaklaşımı", href: "#uzmanlik-agi" },
      { etiket: "İş ortaklıkları", href: "#kesfet" },
    ],
  },
  {
    baslik: "İletişim",
    baglantilar: [
      {
        etiket: "info@bgcgroup.com.tr",
        href: "mailto:info@bgcgroup.com.tr",
        harici: true,
      },
      { etiket: "0530 232 27 42", href: "tel:+905302322742", harici: true },
      { etiket: "İletişim alanına git", href: "#iletisim-danismani" },
    ],
  },
];

export const yasalSayfaIcerikleri: Record<string, YasalSayfaIcerigi> = {
  "gizlilik-politikasi": {
    baslik: "Gizlilik Politikası",
    aciklama:
      "Bu sayfa, resmi metin yayımlanana kadar BGC Group'un veri gizliliği yaklaşımını özetleyen kurumsal taslak alanıdır.",
    not: "Buradaki içerik geçici bilgilendirme niteliğindedir. Nihai hukuk metni kurumsal onay sonrası yayımlanacaktır.",
    bolumler: [
      {
        baslik: "Veri yaklaşımımız",
        metin:
          "BGC Group, iletişim ve teklif süreçlerinde paylaşılan bilgileri yalnızca talep yönetimi, geri dönüş sağlama ve kurumsal ilişkiyi sürdürme amacıyla ele almayı hedefler.",
      },
      {
        baslik: "Bilgi güvenliği prensibi",
        metin:
          "Paylaşılan verilerin erişim yetkileri, saklama çerçevesi ve süreç içi görünürlüğü kontrollü biçimde ele alınır; kurumsal güven ilkesi öncelikli kabul edilir.",
      },
      {
        baslik: "Güncelleme bildirimi",
        metin:
          "Resmi politika metni yürürlüğe girdiğinde bu alan güncellenecek ve değişiklikler kurumsal kanallar aracılığıyla duyurulacaktır.",
      },
    ],
  },
  "cerez-politikasi": {
    baslik: "Çerez Politikası",
    aciklama:
      "Bu sayfa, resmi çerez metni hazırlanırken dijital deneyime ilişkin genel yaklaşımı özetlemek amacıyla oluşturulmuştur.",
    not: "Çerez kategorileri ve tercih yönetimine ilişkin nihai yapı, yürürlüğe alınacak politika metni ile birlikte yayımlanacaktır.",
    bolumler: [
      {
        baslik: "Deneyim ve performans",
        metin:
          "Dijital temas noktalarının performansını ve kullanılabilirliğini anlamak için sınırlı teknik veriler değerlendirilebilir.",
      },
      {
        baslik: "Tercih yönetimi",
        metin:
          "Çerez tercihleri, kullanıcı onayı ve yürürlükteki mevzuata uyum çerçevesinde şeffaf biçimde sunulacak şekilde tasarlanacaktır.",
      },
      {
        baslik: "Kurumsal şeffaflık",
        metin:
          "Kullanılacak çerez türleri, amaçları ve saklama süreleri nihai politika metninde açık şekilde belirtilecektir.",
      },
    ],
  },
  "kvkk-aydinlatma": {
    baslik: "KVKK Aydınlatma Metni",
    aciklama:
      "Bu bölüm, resmi KVKK aydınlatma metni yayımlanana kadar bilgilendirme amaçlı kurumsal bir taslak içerik sunar.",
    not: "Nihai KVKK metni, veri sorumlusu bilgileri ve hukuki işleme dayanakları ile birlikte ayrıca yayımlanacaktır.",
    bolumler: [
      {
        baslik: "İşleme amacı",
        metin:
          "İletişim kanalları üzerinden paylaşılan veriler, talep değerlendirme, geri dönüş sağlama ve kurumsal ilişki süreçlerini yürütme amacıyla ele alınabilir.",
      },
      {
        baslik: "Aktarım ve saklama",
        metin:
          "Saklama süresi, erişim yetkileri ve olası aktarım çerçevesi; yasal gereklilikler ve operasyonel güvenlik ihtiyaçları doğrultusunda tanımlanacaktır.",
      },
      {
        baslik: "Haklar ve başvuru",
        metin:
          "İlgili kişi haklarına ilişkin başvuru yöntemleri ve değerlendirme süreçleri, resmi metin yayımlandığında açık ve erişilebilir şekilde duyurulacaktır.",
      },
    ],
  },
};
