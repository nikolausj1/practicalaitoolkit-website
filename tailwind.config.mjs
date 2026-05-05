/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0066CC',
          dark: '#001F3F',
          light: '#E6F2FF',
        },
        ink: {
          DEFAULT: '#333333',
          muted: '#666666',
        },
        surface: {
          light: '#f5f7fa',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      maxWidth: {
        section: '1200px',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(2)', opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease',
      },
    },
  },
  plugins: [],
};
