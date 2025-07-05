// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
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
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#ffffff',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#93c5fd',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': '#ffffff',
            '--tw-prose-bullets': '#ffffff',
            '--tw-prose-hr': '#4b5563',
            '--tw-prose-quotes': '#ffffff',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
