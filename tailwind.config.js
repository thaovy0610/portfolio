/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'header-reveal': 'header-reveal 2s ease-in-out forwards',
        'rotate': 'rotate 5s linear forwards',
        'text-reveal': 'text-reveal 2s ease-in-out forwards',
        'spin-clockwise': 'spin-clockwise 5s infinite linear',
        'spin-counterclockwise': 'spin-counterclockwise 5.2s infinite linear',
        'cursor-blink': 'cursor-blink 1s infinite'
      },
      keyframes: {
        'header-reveal': {
          "0%": { transform: 'translateX(-10px)', opacity: 0},
          "100%": { transform: 'translateY(0)', opacity: 1},
        },
        'text-reveal': {
          "0%": { transform: 'translateY(-10px)', opacity: 0},
          "100%": { transform: 'translateY(0)', opacity: 1},
        },
        'rotate': {
          to: {
            transform: 'rotateX(540deg)'
          }
        },
        'spin-clockwise': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-counterclockwise': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'cursor-blink': {
          '49%': { 'background-color': '#fff' },
          '50%': { 'background-color': 'transparent' },
          '99%': { 'background-color': 'transparent' },
        }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

