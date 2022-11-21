/** @type {import('tailwindcss').Config} */

const { colors } = require("@mui/material");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'boxing': "url('/blue.png')",
        'night': "url('/night')",
        
      },
      colors: {
        "costum-hex": "#14ffec",
      },

    },
  },
  plugins: [],
};
