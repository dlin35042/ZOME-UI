/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        berkshire: ['"Berkshire Swash"', "cursive"], // Add this line
      },
    },
  },
  plugins: [],
};
