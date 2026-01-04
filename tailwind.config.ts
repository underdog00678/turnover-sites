import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#4a63d9",
        accentHover: "#3b52c7",
        surface: "#f8fafc",
        surfaceAlt: "#f1f5f9",
        ink: "#111827",
        muted: "#4b5563",
        border: "#e5e7eb",
      },
    },
  },
  plugins: [],
};

export default config;
