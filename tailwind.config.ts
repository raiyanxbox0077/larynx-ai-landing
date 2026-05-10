import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { kanit: ["Kanit", "sans-serif"] },
      colors: {
        bg: "#0C0C0C",
        surface: "#111111",
        "surface-raised": "#1a1a1a",
        accent: "#f0b429",
        "text-primary": "#D7E2EA",
        "text-muted": "rgba(215,226,234,0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
