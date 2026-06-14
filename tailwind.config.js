/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [typography],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        head: ["Open Sans", "sans-serif"],
      },
      // fontFamily: {
      //   "open-sans": ["Open Sans", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
