import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2a3277",
          dark: "#1d255a",
          soft: "#4152ba",
        },
        surface: {
          DEFAULT: "#f1f3f8",
          soft: "#eff2f7",
          strong: "#e8ecf4",
        },
        ink: "#1f2748",
        muted: "#5d6686",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(20, 30, 74, 0.06)",
        panel: "0 30px 90px rgba(20, 30, 74, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
