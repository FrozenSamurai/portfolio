/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        firaCode: ["FiraCode", "monospace"],
      },
      colors: {
        inner: "#2c2f36",
        outer: "#282C33",
        purple: "#C778DD",
        gray: "#ABB2BF",
        accent: "#00ffff",
      },
    },
  },
  plugins: [],
};
