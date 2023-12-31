/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      grey: {
        100: "#546E7A",
        200: "#333333",
        300: "#252526",
      },
      blue: {
        100: "#70DDF1",
        200: "#5C9DFF",
        300: "#2C49D8",
      },
      orange: "#FF6B2B",
      green: "#B9E88D",
      purple: "#C792EA",
      yellow: "#FFCB64",
      pink: "#DF058D",
      white: "#F8F8FF",
    },
    fontFamily: {
      gilroy: ["Gilroy", "sans-serif"],
      metropolis: ["Metropolis", "sans-serif"],
      monospace: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
