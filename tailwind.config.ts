export default {
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
        "white-100": "#f3f3f3",
        "wash": "rgb(255, 255, 255 / 1)"
      }
    },
    screens: {
      "sm": "320px",
      "md": "1024px",
      "lg": "1280px"
    }
  },
  plugins: [],
} satisfies import('tailwindcss').Config;
