/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        //primary: "#002140",
        primary: "#CAE1F9",
        secondary: "#1D5CFF",
        letterSecondary: "#97989D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Roboto Flex", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
