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
        }
      },
    },
  plugins: [require('flowbite/plugin')],
  }
}