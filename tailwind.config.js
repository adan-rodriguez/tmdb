/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fill, minmax(250px, 1fr))",
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
