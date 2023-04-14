/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
      screens: {
        'ms': '320px',
        'mm': '375px',
        'ml': '425px',
        
        'xs': '320px',
        'sm': '640px',
        'md': '960px',
        'lg': '1920px'
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
  },
  plugins: [],
}

