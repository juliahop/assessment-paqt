// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      flexGrow: {
        999: "999",
      },
      minWidth: {
        "60%": "60%",
      },
      spacing: {
        "28ch": "28ch",
      },
    },
  },
  plugins: [],
};
