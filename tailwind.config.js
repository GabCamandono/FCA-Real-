/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
      },
      colors: {
        primary: "#f2f2f2",
        secondary: "#008542",
        tertiary: "#1573e5",
        quaternary: "#daa625",
        quinary: "#3b5897",
      },
    },
  },
  plugins: [],
};
