/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "yellow": "hsl(47, 88%, 63%)",
        "grey": "hsl(0, 0%, 50%)",
      },
      fontWeight: {
        heading: "800",
        body: "500",
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
}
