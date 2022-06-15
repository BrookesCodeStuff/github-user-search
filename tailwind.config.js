/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./assets/js/*.js"],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["Space Mono", "monospace"],
    },
    extend: {
      spacing: {
        18: "4.375rem",
      },
      boxShadow: {
        "3xl": "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
      },
      colors: {
        white: "#ffffff",
        romance: "#fefefe",
        "ghost-white": "#f8f8ff",
        azure: "#0079ff",
        "slate-grey": "#697c9a",
        "kashmir-blue": "#4b6a9b",
        "ebony-clay": "#2b3442",
        "big-stone": "#141d2f",
        "blue-zodiac": "#1e2a47",
        mist: "#979797",
        iris: "#4660BB",
      },
    },
  },
  plugins: [],
};
