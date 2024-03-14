import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
    colors: {
      'red': {
        50: '#fff0f0',
        100: '#ffdddd',
        200: '#ffc1c1',
        300: '#ff9595',
        400: '#ff595a',
        500: '#ff2627',
        600: '#fc0607',
        700: '#e00001',
        800: '#af0506',
        900: '#900c0d',
        950: '#500000',
      },   
    'gray': {
      50: '#f6f6f6',
      100: '#e7e7e7',
      200: '#d1d1d1',
      300: '#b0b0b0',
      400: '#888888',
      500: '#6d6d6d',
      600: '#5d5d5d',
      700: '#4f4f4f',
      800: '#454545',
      900: '#3d3d3d',
      950: '#0d0d0d',
    },
    
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
