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
      colors: {
        main: "#294745",
        subOne: "#393939",
        subTwo: "#A2854B",
        bgCol: "#FBFFFF",
        boxBorder: "#DFEBEA",
        footerCol: "#DDE7E6",
      },
    },
  },
  plugins: [],
};
