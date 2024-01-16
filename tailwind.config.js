/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#CB363F",
        primaryDark: "#58E6D9",
        primaryLight: "#cb5936",
        secondary: "#C15B4E",
        grey: "#f7f7f7",
      },
      letterSpacing: {
        widerest: ".5em",
      },
    },
  },
  plugins: [],
};
