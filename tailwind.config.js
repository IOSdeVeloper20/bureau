/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#024160",
        greyBackground: "#EDEDED",
        lightBlue: "#11B5EA",
        darkBlue: "#082B39",
        activeLink: "#777777",
        whiteTitle: "#ffffff",
        blackTitle: "#000000",
      },
    },
  },
  plugins: [],
};
