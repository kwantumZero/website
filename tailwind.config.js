/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: '#020617',
        surface: '#0F172A',
        border: {
          DEFAULT: '#1E293B'
        },
        primary: '#F8FAFC',
        secondary: '#94A3B8',
        accent: {
          green: '#22C55E',
          blue: '#3B82F6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '48px 48px'
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(34, 197, 94, 0.35)',
        'glow-blue': '0 0 80px -20px rgba(59, 130, 246, 0.35)'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' }
        },
        drift: {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '48px 48px' }
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        drift: 'drift 6s linear infinite'
      }
    }
  },
  plugins: []
};
