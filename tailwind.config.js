/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a1726',
          900: '#10243A', // Deep Navy
          850: '#122c47',
          800: '#143354',
          700: '#174A70', // Industrial Blue
          600: '#1d5d8c',
        },
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748B', // Steel Grey
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
        },
        accent: {
          orange: '#F28C28', // Accent Orange
          orangeHover: '#e07d19',
          orangeLight: '#ffedd5',
        },
        surface: {
          light: '#F3F6F8', // Light Grey
          card: '#FFFFFF',
          dark: '#0d1d2e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'Outfit', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(16, 36, 58, 0.05)',
        'corporate': '0 10px 30px -5px rgba(16, 36, 58, 0.08), 0 4px 6px -2px rgba(16, 36, 58, 0.04)',
        'corporate-hover': '0 20px 35px -5px rgba(16, 36, 58, 0.12), 0 8px 10px -3px rgba(16, 36, 58, 0.06)',
      }
    },
  },
  plugins: [],
}
