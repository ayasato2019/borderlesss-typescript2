/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/assets/style.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        'en': ['"Zen Dots"', 'sans-serif'], // 英語用のフォント
        'ja': ['"Zen Antique Soft"', 'serif'], // 日本語用のフォント
      },
    },
  },
  plugins: [],
}

