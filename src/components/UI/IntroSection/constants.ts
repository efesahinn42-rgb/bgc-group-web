import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Sizin İçin Geliştirdik,", 'Özel Hizmet Paketleri'];
export const desktopParagraphPhrase = [
  "BGC Group ile kurumsal çözümlerde yeni bir döneme adım atın.",
  'Size özel hazırlanan paketlerle maksimum verim,',
  'güvenlik ve kolaylık sağlayın.',
];

// For mobile
export const mobileHeaderPhrase = ["Sizin İçin Geliştirdik,", 'Özel Paketler'];
export const mobileParagraphPhrase = [
  "BGC Group ile kurumsal çözümlerde",
  'yeni bir döneme adım atın. Maksimum',
  'verim ve güvenlik sağlayın.',
];

export const edges = [
  {
    point: 'Hızlı Çözüm Odaklı',
    details:
      'Gelişmiş altyapımız sayesinde operasyonel süreçlerinizi hızlandırıyor, vakit kayıplarının önüne geçiyoruz.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Size Özel Tasarlanmış',
    details:
      'Firmanızın ihtiyaçlarına uygun olarak şekillendirilebilen esnek filo ve sigorta anlaşmaları.',
    icon: ic_identification,
  },
  {
    point: 'Maksimum Güvenlik',
    details:
      'Tüm süreçlerinizde veri güvenliği ve hukuki korumayı ön planda tutarak huzurunuzu garanti ediyoruz.',
    icon: ic_lock_closed,
  },
];
