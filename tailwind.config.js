// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        "light-gray": "#83888F",
        "light-cyan": "#0E8784",
        "dark-indigo": "#2C343E",
        "light-pink": "#FDD6BA",
        "dark-gray-blue": "#333D4B",
        "white-light": "#F4F1EB",
      },
      backgroundImage: {
        "banner-mobile":
          "url('./assets/home/static/img/png/coffeepress-mobile.jpg')",
        "banner-tablet":
          "url('./assets/home/static/img/png/coffeepress-tablet.jpg')",
        "banner-desktop":
          "url('./assets/home/static/img/png/coffeepress-desktop.jpg')",
        "banner-about-desktop":
          "url('./assets/about/static/img/png/image-header-coffeDesktop.jpg')",
        "banner-about-mobile":
          "url('./assets/about/static/img/png/image-header-coffeMovil.jpg')",
        "banner-about-tablet":
          "url('./assets/about/static/img/png/image-header-coffeTablet.jpg')",
        "barista-movil":
          "url('./assets/about/static/img/png/image-barista-movil.jpg')",
        "barista-tablet":
          "url('./assets/about/static/img/png/image-barista-tablet.jpg')",
        "barista-desktop":
          "url('./assets/about/static/img/png/image-barista-desktop.jpg')",
        "coffeHand-movil":
          "url('./assets/about/static/img/png/image-coffeHand-movil.jpg')",
        "coffeHand-tablet":
          "url('./assets/about/static/img/png/image-coffeHand-tablet.jpg')",
        "coffeHand-desktop":
          "url('./assets/about/static/img/png/image-coffeHand-desktop.jpg')",
        "blackcup-movil": "url('./assets/plan/static/img/blackcup-mobile.jpg')",
        "blackcup-tablet":
          "url('./assets/plan/static/img/blackcup-tablet.jpg')",
        "blackcup-desktop":
          "url('./assets/plan/static/img/blackcup-desktop.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
