/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2441D9', // Gamma deep vibrant blue
          light: '#EAF0FF', // Soft gamma surface blue
          dark: '#1831A6', // Darker interaction state
        },
        background: '#FAFBFC', // Softest gray/white
        surface: '#FFFFFF',
        text: {
          DEFAULT: '#0F172A', // Slate 900
          light: '#475569', // Slate 600
        },
        accent: {
          DEFAULT: '#EF4444', 
          green: '#10B981', 
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
