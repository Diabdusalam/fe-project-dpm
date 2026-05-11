/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
