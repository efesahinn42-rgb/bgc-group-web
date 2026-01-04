import type { Metadata } from "next";
import { Montserrat, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Başlık Fontu: Otoriter ve Şık (Montserrat)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-montserrat",
});

// Metin Fontu: Okunaklı ve Modern (Manrope)
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
    /* KRİTİK DÜZELTME: 
      className="dark" buraya eklendi. 
      Bu, Tailwind'e "Kullanıcının ayarı ne olursa olsun bu site karanlıktır" der.
    */
    <html lang="tr" className="dark">
      <body
        className={`${montserrat.variable} ${manrope.variable} antialiased bg-[#0f172a] text-white`}
      >
        {/* Navbar her sayfada sabit */}
        <Navbar />

        {/* Sayfa içerikleri */}
        {children}
      </body>
    </html>
  );
}
