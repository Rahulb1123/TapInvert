/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7F5AF0', // violet
          light: '#A786FF',
          dark: '#4E3797',
        },
        accent: '#2CB67D', // teal/green
        magenta: '#FF4D9D',
        background: '#F7F7FB',
        surface: '#FFFFFF',
        text: '#22223B',
        muted: '#9A9AB0',
      },
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 