import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-martel)", "serif"],
      },
      colors: {
        void: "#050505",
        "void-light": "#1a1a1a",
        blood: "#8a0b0b",
        ghost: "#a8b5b2",
      },
      animation: {
        flicker: "flicker 3s infinite",
        "fade-in": "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": { opacity: "1" },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": { opacity: "0.4" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
