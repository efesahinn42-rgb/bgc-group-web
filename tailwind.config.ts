import type { Config } from "tailwindcss";

const config: Config = {
  // Sistem ayarını (Light/Dark) görmezden gelip manuel kontrol sağlar
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
          // PROJE ANA RENGİ (Premium Antrasit - Apple/Vercel Style)
          dark: "#09090b",

          // MARKA RENGİ (BGC Kırmızısı)
          red: "#dc2626",

          // CAM EFEKTİ İÇİN ZEMİN
          glass: "rgba(255, 255, 255, 0.05)",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-montserrat)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
