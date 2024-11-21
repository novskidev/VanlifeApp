import tailwindConfig from "./src/assets/tailwindconfig";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: tailwindConfig.color,
      fontFamily: tailwindConfig.fontFamily,
    },
  },
  plugins: [],
};
