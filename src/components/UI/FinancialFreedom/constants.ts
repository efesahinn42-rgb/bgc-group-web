
import { Banknote, Layers, Repeat } from 'lucide-react';
import React from 'react';

// For desktop
export const desktopHeaderPhrase = ['Neden BGC Group?', 'Size Özel Çözümler'];
export const desktopParagraphPhrase = [
  'İş modelinizi ve ihtiyaçlarınızı analiz ediyor,',
  'size en uygun filo, sigorta ve asistans paketlerini sunuyoruz.',
];
export const desktopBriefNotePhrase = [
  'Güvenilir,',
  'şeffaf ve',
  'hızlı kurumsal',
  'çözüm ortağınız.',
];

// For mobile
export const mobileHeaderPhrase = ['Neden BGC Group?'];
export const mobileParagraphPhrase = [
  'İş modelinizi ve ihtiyaçlarınızı',
  'analiz ediyor, size en uygun filo ve',
  'sigorta paketlerini sunuyoruz.',
];

export const mobileBriefNotePhrase = [
  'Güvenilir,',
  'şeffaf',
  've hızlı',
  'kurumsal',
  'çözüm',
  'ortağınız.',
];

export const edges = [
  {
    point: 'Esnek ve Hızlı Çözümler',
    details:
      'Firmanızın bütçesine ve ihtiyaçlarına en uygun esnek kiralama ve sigorta seçenekleri.',
    icon: React.createElement(Banknote, { size: 32, color: '#e30613' }),
  },
  {
    point: 'Geniş Hizmet Ağı',
    details:
      'Türkiye çapında yaygın servis ve anlaşmalı kurum ağıyla her zaman yanınızdayız.',
    icon: React.createElement(Layers, { size: 32, color: '#e30613' }),
  },
  {
    point: '7/24 Kesintisiz Destek',
    details:
      'Günün her saati ulaşabileceğiniz uzman müşteri hizmetleri ve yol yardım ekibi.',
    icon: React.createElement(Repeat, { size: 32, color: '#e30613' }),
  },
];
