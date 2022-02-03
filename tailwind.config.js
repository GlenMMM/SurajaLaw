module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern-big": "url('/bg-shape.png')",
      },
      fontFamily: {
        lato: ["Lato"],
        barlow: ["Barlow Condensed"],
      },
    },
  },
  plugins: [],
};
