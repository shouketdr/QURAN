import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        islamic: {
          green: "#064e3b", // Deep Emerald
          gold: "#d4af37",  // Soft Gold
          cream: "#f9fbf7", // Background
        },
      },
    },
  },
  plugins: [],
};
export default config;
