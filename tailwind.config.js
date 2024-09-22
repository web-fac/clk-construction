/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#81e6d9", // Light shade for primary color
          DEFAULT: "#38b2ac", // Default primary color
          dark: "#2c7a7b", // Dark shade for primary color
        },
        secondary: {
          light: "#fbb6ce",
          DEFAULT: "#f687b3",
          dark: "#e53e3e",
        },
        accent: {
          light: "#fef08a",
          DEFAULT: "#facc15",
          dark: "#eab308",
        },
        neutral: {
          light: "#f7fafc",
          DEFAULT: "#edf2f7",
          dark: "#2d3748",
        },
      },
    },
  },
};
