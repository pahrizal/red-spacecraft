const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      exo: ["Exo", ...defaultTheme.fontFamily.sans],
      ibm: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
