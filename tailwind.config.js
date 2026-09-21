/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Architectural palette: Charcoal, Graphite, Stone, Warm Off-White, Champagne
        charcoal: {
          950: '#0A0B0D',
          900: '#111215',
          800: '#17191E',
          700: '#23262D',
          600: '#2E323B',
        },
        graphite: {
          900: '#14161A',
          800: '#1C1F24',
          700: '#262A32',
          600: '#343944',
          500: '#4B5261',
        },
        stone: {
          50: '#FAF9F6',
          100: '#F3F2EE',
          200: '#E7E5DF',
          300: '#D5D2C9',
          400: '#A9A59A',
          500: '#7B776D',
        },
        champagne: {
          50: '#FBF9F5',
          100: '#F5EFE4',
          200: '#EBDEC8',
          300: '#DEC6A4',
          400: '#CCA878',
          500: '#B88D56',
          600: '#9E7441',
        },
        silver: {
          200: '#E2E4E8',
          300: '#C7CBD2',
          400: '#9EA3AE',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
