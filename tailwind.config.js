/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dentimed-blue": "#39BDF8",
        "dentimed-red-light": "#F1222280",
        "dentimed-red": "#F12222",
      },
      width: {
        700: "700px",
        calendar:"966px"
      },
      height: {
        213: "213px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
