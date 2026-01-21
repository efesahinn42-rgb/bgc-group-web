import type { Metadata } from "next";
import { Montserrat, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import WebVitalsClient from "./WebVitalsClient";

// Font Ayarları (Aynen korundu)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-montserrat",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "BGC Group | Geleceği Şekillendiriyoruz",
  description: "BGC Sigorta ve BGC Asist hizmetlerini barındıran çatı kuruluş.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* 1. className="dark": Karanlık modu zorlar.
       2. scroll-smooth: Linklere tıklayınca sayfa yumuşakça kayar.
    */
    <html lang="tr" className="dark scroll-smooth">
      <body
        className={`
          ${montserrat.variable} 
          ${manrope.variable} 
          antialiased 
          font-sans
        `}
      >
        <WebVitalsClient />
        {/* Navbar Sabit */}
        <Navbar />

        {/* Sayfa İçeriği */}
        {children}
      </body>
    </html>
  );
}
