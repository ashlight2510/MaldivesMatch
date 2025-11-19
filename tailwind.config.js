/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maldives: {
          blue: '#00A8CC',
          sand: '#F4E4C1',
          ocean: '#0077BE',
          coral: '#FF6B6B',
          palm: '#4ECDC4',
        },
      },
    },
  },
  plugins: [],
}

