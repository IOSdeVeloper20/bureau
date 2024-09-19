/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#024160",
        greyBackground: "#EDEDED",
        darkGrey: "#DEDEDE",
        lightBlue: "#11B5EA",
        darkBlue: "#082B39",
        activeLink: "#777777",
        whiteTitle: "#ffffff",
        blackTitle: "#000000",
        greenTitle: "#203908",
      },
      borderRadius: {
        "4xl": "3.5rem", // Customize this value as needed
      },
    },
  },
  plugins: [],
};
