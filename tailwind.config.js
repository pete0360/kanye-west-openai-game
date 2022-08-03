/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        realButtonColor: "#66999B",
        realButtonColorHover: "#426263",
        fakeButtonColor: "#E63946",
        fakeButtonColorHover: "#802028",
        howToPlayButtonColor: "#B2A7A7",
      },
    },
  },
  plugins: [],
};
