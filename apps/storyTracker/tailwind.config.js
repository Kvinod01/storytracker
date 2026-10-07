/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Include all relevant files in the current app (default)
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // 💡 Add this line to scan the files in your 'ui' package
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4E2CA3',
          200: '#2D1A5E',
          100: '#8A74C0',
          50: '#E4E1EB'
        },
        gray: {
          DEFAULT: '#E8EAEC',
          100: '#A5ADB2'
        }
      },
      plugins: [],
    }
  }
}