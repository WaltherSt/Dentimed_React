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
        'dentimed-blue': '#39BDF8',
        'dentimed-danger': '#FF0000',
      },
      width: {

        '700': '700px',
      },
      height:{
        '213':'213px'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
