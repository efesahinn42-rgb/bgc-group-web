import { StaticImageData } from 'next/image';
import corporate from '../../../../public/images/corporate.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "BGC Group ile çalışmaya başladığımızdan beri şirket araçlarımızın yönetimi çok kolaylaştı. İstediğimiz an ulaşabildiğimiz destek ekipleri sayesinde hiçbir zaman yolda kalmıyoruz.",
    person: 'Ahmet Yılmaz',
    avatar: corporate,
  },
  {
    testimony:
      "Kapsamlı sigorta poliçeleri ve profesyonel hasar yönetimleri sayesinde tüm kurumsal risklerimizi güvence altına aldılar. İçimiz çok rahat, herkese tavsiye ederim.",
    person: 'Ayşe Kaya',
    avatar: corporate,
  },
  {
    testimony:
      "Asistans hizmetleri gerçekten kusursuz çalışıyor. Yaşadığımız küçük bir kazada anında müdahale edip ikame aracımızı dakikalar içinde teslim ettiler.",
    person: 'Mehmet Demir',
    avatar: corporate,
  },
  {
    testimony:
      "Kapsamlı sigorta poliçeleri ve profesyonel hasar yönetimleri sayesinde tüm kurumsal risklerimizi güvence altına aldılar. İçimiz çok rahat, herkese tavsiye ederim.",
    person: 'Ayşe Kaya',
    avatar: corporate,
  },
  {
    testimony:
      "BGC Group ile çalışmaya başladığımızdan beri şirket araçlarımızın yönetimi çok kolaylaştı. İstediğimiz an ulaşabildiğimiz destek ekipleri sayesinde hiçbir zaman yolda kalmıyoruz.",
    person: 'Ahmet Yılmaz',
    avatar: corporate,
  },
];

export const desktopHeaderPhrase = ['Binlerce mutlu', 'müşterimiz arasına katılın'];
