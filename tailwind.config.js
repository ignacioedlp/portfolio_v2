module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components_v2/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        licorice: "#120000",
        rosewood: "#520202",
        seasalt: "#f6f7f7",
        black: "#000000",
        black_bean: "#3e0204",
      },
      animation: {
        border: 'border 4s ease infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
    fontFamily: {
      montserrat: ["Inter", "Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
