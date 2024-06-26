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
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
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
