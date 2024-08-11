/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#FFFFFF",
        black: "#000000",
        blue: "#1C3F83",
      },
      fontFamily:{
        psemibold:["Poppins-SemiBold", "sans-serif"],
        pmedium:["Poppins-Medium", "sans-serif"],
      }
    },
  },
  plugins: [],
  assets: ['./assets/fonts'],
}

