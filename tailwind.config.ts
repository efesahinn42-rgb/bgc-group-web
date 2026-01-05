import type { Config } from "tailwindcss";

const config: Config = {
  // Bu ayar kalmalı, sistem ayarını görmezden gelmemizi sağlıyor
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
          // ESKİSİ: dark: "#0f172a", (Bu lacivertti)

          // YENİ SEÇENEK 1 (Tavsiyem - Modern Antrasit):
          dark: "#09090b", // Hafif sıcak, simsiyah olmayan premium koyu ton

          // YENİ SEÇENEK 2 (Tamamen Gri Antrasit):
          // dark: "#171717",

          red: "#dc2626",
          glass: "rgba(255, 255, 255, 0.05)",
        },
      },
      fontFamily: {
        // globals.css ile uyumlu değişken isimleri
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-montserrat)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
