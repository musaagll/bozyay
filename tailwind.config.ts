import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:    "#0A0A0A",
          dark:     "#111214",
          card:     "#141618",
          border:   "#1E2126",
          "border-hover": "#2A2F36",
          steel:    "#3A3F46",
          muted:    "#6B7280",
          light:    "#9CA3AF",
          white:    "#F4F4F5",
          yellow:   "#F5C518",
          "yellow-dim": "rgba(245,197,24,0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
