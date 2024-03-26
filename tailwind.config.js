/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "3xl": "2rem", // 32px
        "4xl": "2.5rem", // 40px
      },
      colors: {
        primary: "#254CF7",
      },
    },
  },
  plugins: [],
};
