import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BGC Group | Filo, Sigorta ve Asistans Hizmetleri',
  description: 'BGC Group; yenilikçi ve güvenilir çözümleriyle filo kiralama, sigorta çözümleri ve asistans hizmetlerinde yanınızda.',
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: 'BGC Group | Filo, Sigorta ve Asistans Hizmetleri',
    description: 'BGC Group; yenilikçi ve güvenilir çözümleriyle filo kiralama, sigorta çözümleri ve asistans hizmetlerinde yanınızda.',
    url: 'https://bgcgroup.com.tr',
    siteName: 'BGC Group',
    images: [
      {
        url: '/favicon/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BGC Group | Filo, Sigorta ve Asistans Hizmetleri',
    description: 'BGC Group; yenilikçi ve güvenilir çözümleriyle filo kiralama, sigorta çözümleri ve asistans hizmetlerinde yanınızda.',
    images: ['/favicon/web-app-manifest-512x512.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
