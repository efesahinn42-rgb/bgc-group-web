import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

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
    avatar: robert_fox,
  },
  {
    testimony:
      "Kapsamlı sigorta poliçeleri ve profesyonel hasar yönetimleri sayesinde tüm kurumsal risklerimizi güvence altına aldılar. İçimiz çok rahat, herkese tavsiye ederim.",
    person: 'Ayşe Kaya',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Asistans hizmetleri gerçekten kusursuz çalışıyor. Yaşadığımız küçük bir kazada anında müdahale edip ikame aracımızı dakikalar içinde teslim ettiler.",
    person: 'Mehmet Demir',
    avatar: esther_howard,
  },
  {
    testimony:
      "Kapsamlı sigorta poliçeleri ve profesyonel hasar yönetimleri sayesinde tüm kurumsal risklerimizi güvence altına aldılar. İçimiz çok rahat, herkese tavsiye ederim.",
    person: 'Ayşe Kaya',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "BGC Group ile çalışmaya başladığımızdan beri şirket araçlarımızın yönetimi çok kolaylaştı. İstediğimiz an ulaşabildiğimiz destek ekipleri sayesinde hiçbir zaman yolda kalmıyoruz.",
    person: 'Ahmet Yılmaz',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Binlerce mutlu', 'müşterimiz arasına katılın'];
