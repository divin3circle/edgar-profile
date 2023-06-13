/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#2b6777",
        grey: "#c8d8e4",
        brightWhite: "#ffffff",
        darkGrey: "#f2f2f2",
        aquaMarine: "#52ab98",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        nunito: ["Nunito", "mono"],
        rubik: ["Rubik", "Roboto"],
      },
      screens: {
        'xxs': "370px",
        'xs': "400px",
      }
    },
  },
  plugins: [],
};
