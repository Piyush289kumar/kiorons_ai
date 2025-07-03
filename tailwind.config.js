// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gellix', 'sans-serif'], // Override default sans
        gellix: ['Gellix', 'sans-serif'],
      },
      aspectRatio: {
        '1/1': [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '3/2': [3, 2],
      },
      colors: {
        black: '#000000',
      },
    },
  },
  plugins: [],
}
