/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#282828",
        secondary: "#1d2021",
        tertiary: "#3c3836",
        "black-100": "#32302f",
        "black-200": "#1d2021",
        "white-100": "#f3f3f3"
      },
      animation: {
          "typing": "blinking 1s infinite",
      },
      keyframes: {
        blinking: {
          "50%": {
            "color": "transparent"
          }
        }
      }
    },
  },
  plugins: [],
}
