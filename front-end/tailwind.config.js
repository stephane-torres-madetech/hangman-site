/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '144': '34rem',
      },
      width: {
        '128': '32rem',
        '144': '34rem',
      },
      spacing: {
        '15': '3.75rem',
        '37': '9.25rem'
      }
    },
  },
  plugins: [],
};
