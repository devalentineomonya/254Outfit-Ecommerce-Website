import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "87.5rem",
      },
      screens: {
        lg: "62rem",
        xs:"36rem",
        xxs:"30rem"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-120%)' }
        },
        drop: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        }
      },
      animation: {
        marquee: "marquee 7s linear infinite",
        drop: "drop 0.3s ease-in-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config;
