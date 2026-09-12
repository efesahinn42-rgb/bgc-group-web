import { faqData } from '../FAQ/constants';

export function OrganizationStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://bgcgroup.com.tr/#organization',
    name: 'BGC Group',
    url: 'https://bgcgroup.com.tr',
    logo: 'https://bgcgroup.com.tr/images/bgc%20group%20logo_png.png',
    telephone: '+908508880155',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Akabe, Şht. Furkan Doğan Cd. Bey Plaza Kat:1 No:3/122',
      addressLocality: 'Karatay',
      addressRegion: 'Konya',
      addressCountry: 'TR',
    },
    areaServed: 'Konya',
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
