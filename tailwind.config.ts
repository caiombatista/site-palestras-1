import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#060816",
        panel: "#0b1022",
        panelSoft: "#111832",
        line: "rgba(255,255,255,0.12)",
        neon: "#ff7a18",
        electric: "#39a6ff",
        cyan: "#68f0ff",
        text: "#f5f7ff",
        muted: "#a8b0c7"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(57,166,255,0.16)",
        orange: "0 24px 80px rgba(255,122,24,0.18)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.4", transform: "scaleX(0.96)" },
          "50%": { opacity: "1", transform: "scaleX(1)" }
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseLine: "pulseLine 4s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease forwards"
      }
    }
  },
  plugins: []
};

export default config;
