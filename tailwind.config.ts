import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pulse: {
          pink: "#FF4FA3",
          pinkDim: "#B23374",
          purple: "#8A2BE2",
          purpleDim: "#5E1E9E",
          charcoal: "#121212",
          charcoal2: "#181820",
          charcoal3: "#1F1F29",
          up: "#3DDC97",
          down: "#FF5C5C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "pulse-gradient": "linear-gradient(135deg, #FF4FA3 0%, #8A2BE2 100%)",
        "pulse-radial": "radial-gradient(circle at 20% 20%, rgba(255,79,163,0.15), transparent 40%), radial-gradient(circle at 80% 60%, rgba(138,43,226,0.18), transparent 45%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(255,79,163,0.5)",
        glowPurple: "0 0 40px -10px rgba(138,43,226,0.5)",
      },
      animation: {
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
