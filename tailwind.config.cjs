/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: "#F2EAE2",
        aurometal: "#6C7289",
        gunmetal: "#1C232B",
        aquamarine: "#3D8168",
      },
      backgroundImage: {
        "hero-mobile": "url(/src/images/hero-mobile.png)",
      },
      fontFamily: {
        mont: ["Montserrat", "system-ui"],
        fraunces: ["Fraunces", "system-ui"],
      },
      fontSize: {
        h1: ["2rem", "2rem"],
      },
    },
  },
  plugins: [],
};
