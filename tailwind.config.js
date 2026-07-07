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
        primary: '#1e40af', // Government Blue
        secondary: '#ff6b35', // Orange
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        dark: '#1f2937',
      },
    },
  },
  plugins: [],
};
