const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        footColor: "#6722b5",
        seto: "#fff",
        facebook: "#3b5998",
        instagram: "#E1306C",
        x: "#1da1f2",
        youtube: "#c4302b",
      },
      fontFamily: {
        robot: ["Roboto"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};