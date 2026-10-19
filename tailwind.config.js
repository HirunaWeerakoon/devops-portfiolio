/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FFFFFF',
        'elite-blue': '#0251B0',
        'elite-blue-dark': '#013B82',
        'elite-blue-light': '#0A6EEB',
        'volt-lime': '#D1FF42',
        'volt-lime-dark': '#B5E626',
        'volt-lime-hover': '#DCFF66',
        'soft-blue': '#C7D1DD',
        'soft-blue-light': '#F0F4F8',
        'terminal-dark': '#070E1A',
        'terminal-card': '#0D1829',
        'terminal-border': '#1E2C45',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'elite': '0 10px 25px -5px rgba(2, 81, 176, 0.2), 0 8px 10px -6px rgba(2, 81, 176, 0.1)',
        'volt': '0 0 20px rgba(209, 255, 66, 0.45)',
        'volt-sm': '0 0 10px rgba(209, 255, 66, 0.35)',
        'subtle': '0 4px 20px rgba(199, 209, 221, 0.4)',
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
