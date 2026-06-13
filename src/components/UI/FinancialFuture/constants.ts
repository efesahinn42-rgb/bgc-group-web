import { Send, Wallet, Layers } from 'lucide-react';
import React from 'react';
export const cardsInfo = [
  {
    title: 'Filo Yönetimi',
    details:
      'BGC Group güvencesiyle kurumsal araç kiralama süreçlerinizi sıfır stresle yönetin.',
    icon: React.createElement(Send, { size: 64, color: '#e30613', strokeWidth: 1.5 }),
  },
  {
    title: 'Hasar & Sigorta',
    details:
      'Poliçe yenileme ve hasar süreçleriniz alanında uzman ekibimiz tarafından titizlikle takip edilir.',
    icon: React.createElement(Wallet, { size: 64, color: '#e30613', strokeWidth: 1.5 }),
  },
  {
    title: '7/24 Asistans',
    details:
      'Beklenmedik durumlara karşı anında yol yardım ve ikame araç desteğiyle her zaman yanınızdayız.',
    icon: React.createElement(Layers, { size: 64, color: '#e30613', strokeWidth: 1.5 }),
  },
];

export const stats = [
  {
    number: '81+',
    subtitle: 'ilde hizmet',
  },
  {
    number: '5,000+',
    subtitle: 'aktif araç',
  },
  {
    number: '1,500+',
    subtitle: 'mutlu müşteri',
  },
  {
    number: '7/24',
    subtitle: 'asistans',
  },
];

// For desktop
export const desktopHeaderPhrase = [
  'İşinizin Geleceğini',
  'Güvenceye Alın',
];
export const desktopParagraphPhrase = [
  'BGC Group olarak her adımda yanınızdayız. Geniş araç filomuz ve kapsamlı',
  'sigorta hizmetlerimizle geleceğinizi güvence altına alıyoruz.',
];

// For mobile
export const mobileHeaderPhrase = [
  'İşinizin Geleceğini',
  'Güvenceye Alın',
];
export const mobileParagraphPhrase = [
  'BGC Group olarak her adımda',
  'yanınızdayız. Geniş araç filomuz ve',
  'kapsamlı sigorta hizmetlerimizle',
  'geleceğinizi güvence altına alıyoruz.',
];
