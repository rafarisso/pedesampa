/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        neon: '#00E676',
        dark: '#0A0A0A',
        danger: '#FF3B30',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse_slow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
        pulse_slow: 'pulse_slow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
