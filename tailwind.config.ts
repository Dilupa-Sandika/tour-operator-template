import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // As defined in our SRS and discussions
        primary: {
          DEFAULT: "#005A8D", // Deep Ocean Blue
          50: "#f0f9ff",
          100: "#e0f2fe", 
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#005A8D",
          600: "#004a73",
          700: "#003a59",
          800: "#002a40",
          900: "#001a26"
        },
        secondary: {
          DEFAULT: "#00A99D", // Lush Teal Green
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#00A99D",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a"
        },
        accent: {
          DEFAULT: "#F2C14E", // Sandy Gold
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a", 
          300: "#fcd34d",
          400: "#F2C14E",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f"
        },
        cta: {
          DEFAULT: "#FF6B6B", // Sunset Coral
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#FF6B6B",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d"
        },
        background: "#F8F9FA", // Off-White
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;