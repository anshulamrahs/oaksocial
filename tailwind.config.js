/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto Mono', 'monospace']
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'translateY(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          },
        },
    },
  },
  plugins: [],
}

