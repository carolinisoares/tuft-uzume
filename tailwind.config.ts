import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F0D0B",
          soft: "#1B1815",
          line: "#332E29",
        },
        bone: {
          DEFAULT: "#F1E7D6",
          dim: "#E4D6BE",
          text: "#211B12",
        },
        red: {
          DEFAULT: "#C81B25",
          soft: "#E23A3A",
          deep: "#8B1219",
        },
        gold: {
          DEFAULT: "#E7AC1F",
          soft: "#F4CE6B",
        },
        thread: {
          DEFAULT: "#7C93D8",
          soft: "#AFC0EA",
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
