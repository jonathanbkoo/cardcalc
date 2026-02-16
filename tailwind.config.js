/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#D4FF2A',
        negative: '#FF6B6B',
        amber: '#FFB432',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'body': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
