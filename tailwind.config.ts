import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7f1",
          100: "#dcece0",
          200: "#bbd9c4",
          300: "#8fbf9f",
          400: "#5f9f75",
          500: "#3f8358",
          600: "#2e6845",
          700: "#265439",
          800: "#20432f",
          900: "#1b3828",
          950: "#0e1f16",
        },
        surface: "#f4f7f4",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(16, 40, 26, 0.06), 0 8px 24px rgba(16, 40, 26, 0.07)",
        "card-hover":
          "0 2px 6px rgba(16, 40, 26, 0.08), 0 16px 40px rgba(16, 40, 26, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
