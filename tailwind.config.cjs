/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
