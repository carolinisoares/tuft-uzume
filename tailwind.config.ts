import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Tuft Uzume — extraída de "paleta de cores" (fornecida pela marca).
        // Base: azul-petróleo (1D6A75) e creme (F2DFD1). Acentos: rosa (DB758C),
        // areia (E0C1AC) e os dois azuis claros (8FB1F2 / B3CCFD).
        ink: {
          DEFAULT: "#1D6A75",
          soft: "#1D6A75",
          line: "#1D6A75",
        },
        bone: {
          DEFAULT: "#F2DFD1",
          dim: "#E0C1AC",
          text: "#1D6A75",
        },
        red: {
          DEFAULT: "#DB758C",
          soft: "#F2DFD1",
          deep: "#E0C1AC",
        },
        gold: {
          DEFAULT: "#E0C1AC",
          soft: "#F2DFD1",
        },
        thread: {
          DEFAULT: "#B3CCFD",
          soft: "#8FB1F2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        measure: "42rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        poke: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        poke: "poke 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
