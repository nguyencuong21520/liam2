/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#2563eb",
          dark: "#60a5fa"
        },
        secondary: {
          light: "#475569",
          dark: "#94a3b8"
        },
        accent: {
          light: "#3b82f6",
          dark: "#93c5fd"
        },
        background: {
          light: "#f8fafc",
          dark: "#0f172a"
        },
        surface: {
          light: "#ffffff",
          dark: "#1e293b"
        },
        text: {
          light: "#1e293b",
          dark: "#f1f5f9"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 