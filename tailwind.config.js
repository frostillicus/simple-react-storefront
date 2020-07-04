module.exports = {
  purge: {
    //
    mode: "all",
    content: ["./src/**/*.html", "./src/**/*.js"]
  },
  theme: {
    container: {
      center: true
    },
    screens: {
      xs: "400px",
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      colors: {
        "brand-blue": "#506faf"
      }
    }
  },
  variants: {},
  plugins: []
};
