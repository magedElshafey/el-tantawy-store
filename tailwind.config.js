/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        redColor: "#de0712",
        blackColor: "#000",
        yellowColor: "#f3de6d",
        grayColor: "#fafafa",
        textColor: "#555",
        darkColor: "#191c1f",
        graySection: "#fafafa",
        sectionColor: "#fcc8c74d",
      },
    },
  },
  plugins: [],
};
