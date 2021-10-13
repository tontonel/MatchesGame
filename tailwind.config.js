module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["'Nunito', sans-serif"],
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        violet: {
          DEFAULT: "#CF3AA2",
          dark: "#731C59"
        },
        visiniu: {
          DEFAULT: "#E6375D",
          dark: "#7F1028"
        },
        lava: {
          DEFAULT: "#C42021",
        },
        crem: {
          DEFAULT: "#FFEDDA"
        }
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
