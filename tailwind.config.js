/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        elitethemes: {

          primary: "#00ABB3",

          secondary: "#3C4048",

          accent: "#B2B2B2",

          neutral: "#EAEAEA",

          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}
