/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'tomate': 'hsl(4, 100%, 67%)',
      'Dark-Slate-Grey': 'hsl(234, 29%, 20%)',
      'Charcoal-Grey': 'hsl(235, 18%, 26%)',
      'Grey': 'hsl(231, 7%, 60%)',
      'White': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      roboto: ["roboto", "sans-serif"],
      regular: ["regular_roboto", "sans-serif"],
    },

    borderRadius: {
      'minimal': '1px',
      'large': '8px',
      'largexl': '10px',
    },
    extend: {
      spacing: {
        '860': '44rem',
        '768': '48rem'
      }
    },
  },
  plugins: [],
}

