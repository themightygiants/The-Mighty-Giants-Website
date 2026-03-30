import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        mightyBlack: "#000000",
        mightyYellow: "#FFD400",
        mightyWhite: "#FFFFFF"
      },
      boxShadow: {
        poster: "0 0 0 2px #FFD400, 0 10px 30px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(120deg, rgba(0,0,0,.95) 20%, rgba(0,0,0,.75) 55%, rgba(0,0,0,.95) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
