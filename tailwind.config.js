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
        'bounce': 'bounce 2s ease forwards'
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
        'bounce': {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0)' },
          '40%': {transform: 'translateY(-30px)'},
	        '60%': {transform: 'translateY(-15px)'},
          '80%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

