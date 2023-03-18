/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      colors: {
        "dark-blue": "#0d253f",
        "light-blue": "#01b4e4",
        "light-green": "#90cea1",
      },
    },
  },
  plugins: [],
};
