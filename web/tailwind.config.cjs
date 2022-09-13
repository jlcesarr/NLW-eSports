/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('./background-galaxy.png')",
        "footer-gradient":
          "linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD .94%, #E1D55D 44.57%), linear-gradient(0deg, #FFFFFF, #FFFFFF);",
        "game-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
