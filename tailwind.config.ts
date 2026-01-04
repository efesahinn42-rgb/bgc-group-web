import type { Config } from "tailwindcss";

const config: Config = {
  // EKLENEN SATIR: Bu, sitenin işletim sistemi moduna göre değil,
  // bizim verdiğimiz "class"a göre (yani hep dark) çalışmasını sağlar.
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgc: {
          dark: "#0f172a", // Antrasit Ana Renk
          red: "#dc2626", // BGC Kırmızısı
          glass: "rgba(255, 255, 255, 0.05)", // Cam efekti zemini
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        serif: ["var(--font-montserrat)"], // Başlıklar için
      },
    },
  },
  plugins: [],
};
export default config;
