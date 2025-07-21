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
        },
        secondary: {
          DEFAULT: "#00A99D", // Lush Teal Green
        },
        accent: {
          DEFAULT: "#F2C14E", // Sandy Gold
        },
        cta: {
          DEFAULT: "#FF6B6B", // Sunset Coral
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