import { Copy, IdCard, Lock } from 'lucide-react';
import React from 'react';

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
    title: 'Şeffaf Süreç Yönetimi',
    details:
      'Araç kiralama ve sigorta süreçlerinizde gizli maliyetler olmadan, tamamen şeffaf ve anlaşılır prosedürlerle çalışıyoruz.',
    icon: React.createElement(Copy, { size: 32, color: '#e30613' }),
  },
  {
    title: 'Kişiselleştirilmiş Çözümler',
    details:
      'Sektörünüze, bütçenize ve ihtiyaçlarınıza özel filo yönetim ve asistans paketleri oluşturarak maksimum verim sağlıyoruz.',
    icon: React.createElement(IdCard, { size: 32, color: '#e30613' }),
  },
  {
    title: 'Güvenilir Hizmet',
    details:
      'Yılların getirdiği tecrübe ve sektörün öncü markalarıyla yaptığımız işbirlikleri sayesinde işinizi güvenle büyütün.',
    icon: React.createElement(Lock, { size: 32, color: '#e30613' }),
  },
];
