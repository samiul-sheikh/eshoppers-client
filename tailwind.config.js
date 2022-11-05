/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        primar: "#2D3748",
        secondary: "#38bdf8"
      }
    }
  },
  plugins: []
};
