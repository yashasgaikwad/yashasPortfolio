import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#030712",
        navy: {
          950: "#050b1a",
          900: "#0a1329",
          800: "#101e3d",
        },
        electric: {
          400: "#38bdf8",
          500: "#00d4ff",
          600: "#2563eb",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        neon: "0 0 28px rgba(0, 212, 255, 0.22)",
        "neon-strong": "0 0 42px rgba(0, 212, 255, 0.36)",
        glass: "0 18px 50px rgba(2, 6, 23, 0.65)",
      },
    },
  },
  plugins: [],
};

export default config;

