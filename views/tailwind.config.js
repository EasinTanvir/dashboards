/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        headerBg: "#242530",
        redColor: "#AC1E23",
        deepBlack: "#2E2F3E",
        lightMode: "#F3F5F8",
        btnColor: "#209864",
      },
      screens: {
        lg: "1040px",
      },
    },
  },
  plugins: [],
};
