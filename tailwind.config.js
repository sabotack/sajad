/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: 'var(--primary)',
          'mid': 'var(--primary-mid)',
          'light': 'var(--primary-light)',
        },
        'accent': 'var(--accent)',
      },
      backgroundImage: {
        'logo': 'var(--logo)',
        'gradient-home-r': 'var(--gradient-home-r)',
        'gradient-home-b': 'var(--gradient-home-b)',
      },
      spacing: {
        'header': 'var(--header-height)',
      }
    },
  },
  plugins: [],
}

