/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        'p-extra-light': ['Poppins_200ExtraLight', 'sans-serif'],
        'p-light': ['Poppins_300Light', 'sans-serif'],
        'p-regular': ['Poppins_400Regular', 'sans-serif'],
        'p-medium': ['Poppins_500Medium', 'sans-serif'],
        'p-semi-bold': ['Poppins_600SemiBold', 'sans-serif'],
        'p-bold': ['Poppins_700Bold', 'sans-serif'],
        'p-extra-bold': ['Poppins_800ExtraBold', 'sans-serif'],
        'p-black': ['Poppins_900Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

