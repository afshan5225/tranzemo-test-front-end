/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark1: '#04042a',
        dark2: '#0a0434',
        dark3: '#07042f',
        dark4: '#05042c',
        dark5: '#0c0539',
        dark6: '#0e053c',
      },
    },
  },
  plugins: [],
}
