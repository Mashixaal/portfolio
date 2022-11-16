/** @type {import('tailwindcss').Config} */

const { colors } = require("@mui/material");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...colors,
    },
  },
  plugins: [],
};
