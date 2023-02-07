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
        primary: "#4FA4FA",
        secondary: "#38bdf8",
        normal: "#2D3748"
      },
      backgroundImage: {
        // banner: "url('/src/assets/ecommerce-2140604.jpg')"
        // banner: "url('/src/assets/ecommerce-website-banner.jpg')"
        // banner: "url('/src/assets/ecommerce-2140604_1920.jpg')"
        // banner:
        //   "url('/src/assets/flat-line-design-website-banner-e-commerce-modern-vector-illustration-web-marketing-print-material-68581557.jpg')"
        // banner:
        //   "url('/src/assets/Fortune-Media-Blog-Image-Blog1-ContentMarketing-Banner-1920x891.jpg')"
        banner:
          "url('/src/assets/thumbnail-d03b160238bf5409ce43fad0180d61da-1200x370.jpeg')"
      }
    }
  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"]
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
