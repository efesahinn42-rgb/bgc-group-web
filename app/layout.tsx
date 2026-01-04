import type { Metadata } from "next";
import { Montserrat, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar"; // <-- Navbar'ı buraya dahil ettik
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
    <html lang="tr">
      <body
        className={`${montserrat.variable} ${manrope.variable} antialiased bg-[#0f172a] text-white`}
      >
        {/* Navbar'ı en üste koyduk ki her sayfada görünsün */}
        <Navbar />

        {/* Sayfa içerikleri (Hero vb.) buraya gelecek */}
        {children}
      </body>
    </html>
  );
}
