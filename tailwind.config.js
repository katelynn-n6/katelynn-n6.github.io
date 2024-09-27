/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        crimson: "Crimson Text, sans-serif",
      },
      fontSize: {
        "1halfxl": "1.3rem",
        "2halfxl": "1.6rem",
      },
      tracking: {
        tightish: "-0.01em",
      },
      leading: {
        custom: "1.4em",
      },
    },
  },
  plugins: [],
};
