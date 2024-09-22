/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        teal: "#115E59",
        "teal-100": "#173B45",
        "orange" : "#F87171"
      },
    },
  },
  plugins: [],
};
