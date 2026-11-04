/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./blog/*.html",
    "./pages/*.html",
    "./assets/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        primary: '#F7FF00',
        secondary: '#4ADE80',
        dark: '#111827',
        light: '#F9FAFB',
      },
      boxShadow: {
        brutal: '4px 4px 0px #111827',
        'brutal-sm': '2px 2px 0px #111827',
        'brutal-lg': '6px 6px 0px #111827',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
