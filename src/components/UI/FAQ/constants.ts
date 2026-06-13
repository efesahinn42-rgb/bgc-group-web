type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Sıkça Sorulan', 'Sorular'];
export const mobileHeaderPhrase = ['Sıkça', 'Sorulan', 'Sorular'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'BGC Group ile nasıl çalışmaya başlayabilirim?',
    answer:
      'Web sitemiz üzerinden "Teklif Al" butonuna tıklayarak formu doldurabilir veya doğrudan iletişim numaralarımızdan uzman ekibimize ulaşabilirsiniz.',
  },
  {
    question: 'Filo kiralama sözleşmeleri ne kadar süreli yapılmaktadır?',
    answer:
      'Kurumunuzun ihtiyacına göre 12 aydan 48 aya kadar esnek kiralama seçenekleri sunmaktayız.',
  },
  {
    question: 'Kaza veya arıza durumunda (Asistans) ne yapmalıyım?',
    answer:
      '7/24 hizmet veren acil destek hattımızı aramanız yeterlidir. İkame araç ve çekici hizmeti dahil tüm süreç ekibimizce yönetilir.',
  },
  {
    question: 'Kurumsal sigorta poliçeleri neleri kapsıyor?',
    answer:
      'İşletmenizin yapısına özel olarak kasko, trafik, işyeri, sorumluluk ve nakliyat gibi tüm temel risklerinizi güvence altına alıyoruz.',
  },
];
