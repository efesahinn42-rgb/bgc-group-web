import FloatingContactButton from "@/components/FloatingContactButton";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bgcgroup.com.tr"),
  title: {
    default: "BGC Group | Tek Çatı, Çok Sektörlü Uzmanlık",
    template: "%s | BGC Group",
  },
  description:
    "BGC Group; sigorta, asistans ve kurumsal mobilite alanlarında uzmanlaşan şirketlerini tek bir kurumsal koordinasyon altında buluşturan çatı markadır.",
  openGraph: {
    title: "BGC Group | Tek Çatı, Çok Sektörlü Uzmanlık",
    description:
      "BGC Group; sigorta, asistans ve kurumsal mobilite alanlarında uzmanlaşan şirketlerini tek bir kurumsal koordinasyon altında buluşturan çatı markadır.",
    url: "https://bgcgroup.com.tr",
    siteName: "BGC Group",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BGC Group | Tek Çatı, Çok Sektörlü Uzmanlık",
    description:
      "BGC Group; sigorta, asistans ve kurumsal mobilite alanlarında uzmanlaşan şirketlerini tek bir kurumsal koordinasyon altında buluşturan çatı markadır.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`scroll-smooth ${manrope.variable}`}>
      <body className="bg-[var(--color-bg)] font-sans text-[var(--color-ink)] antialiased">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <SiteHeader />
          <div className="flex-1 pt-[4.75rem] sm:pt-[5.25rem]">{children}</div>
          <SiteFooter />
          <FloatingContactButton />
        </div>
      </body>
    </html>
  );
}
