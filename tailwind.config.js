/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
    "./services/**/*.{js,jsx,ts,tsx}",
    "./store/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        light: ["Montserrat_300Light"],
        regular: ["Montserrat_400Regular"],
        semibold: ["Montserrat_600SemiBold"],
        bold: ["Montserrat_700Bold"],
      },
    },
  },
  plugins: [],
};
