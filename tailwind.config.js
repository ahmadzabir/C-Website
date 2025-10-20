/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark greenish theme - Cohesive color scheme
        bg: '#0F1419', // Deep dark green-slate background
        bgSecondary: '#1A2329', // Slightly lighter dark green
        bgTertiary: '#1E2A33', // Even lighter for sections
        ink: '#0A0E13',
        blue: '#4F9AFF',
        blueHover: '#6BB1FF',
        blueLight: '#7BB8FF',
        mint: '#2DD4BF', // Keep mint for accents
        mintHover: '#14B8A6',
        mintLight: '#5EEAD4',
        teal: '#0F766E', // Dark teal for backgrounds
        tealLight: '#134E4A',
        sand: '#F7E8D1',
        sandHover: '#F2DAB8',
        slate: '#94A3B8',
        slateLight: '#CBD5E1',
        slateDark: '#64748B',
        white: '#FFFFFF',
        // Cohesive accent colors
        accent: '#10B981', // Emerald green for highlights
        accentHover: '#059669',
        accentLight: '#34D399',
        purple: '#8B5CF6', // Keep purple for key elements
        purpleLight: '#A78BFA',
        indigo: '#6366F1',
        indigoLight: '#818CF8',
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'gradient-pulse': 'gradientPulse 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.7s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'stagger': 'stagger 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'magnet': 'magnet 0.3s ease-out',
        'counter': 'counter 2s ease-out',
        'wave': 'wave 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientPulse: {
          '0%, 100%': { 
            'background-size': '200% 200%',
            'background-position': 'left center',
            opacity: '0.8'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
            opacity: '1'
          },
        },
        stagger: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(79,154,255,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(79,154,255,0.6)' },
        },
        magnet: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--magnet-x, 0), var(--magnet-y, 0))' },
        },
        counter: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(-5px)' },
          '50%': { transform: 'translateX(0) translateY(-10px)' },
          '75%': { transform: 'translateX(-10px) translateY(-5px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'contwre': '0 10px 35px rgba(0,0,0,.45)',
        'contwre-lg': '0 20px 60px rgba(0,0,0,.6)',
        'blue': '0 10px 24px rgba(79,154,255,.35)',
        'blue-hover': '0 18px 38px rgba(79,154,255,.45)',
        'blue-lg': '0 25px 50px rgba(79,154,255,.25)',
        'mint': '0 10px 24px rgba(45,212,191,.35)',
        'mint-hover': '0 18px 38px rgba(45,212,191,.45)',
        'glass': '0 8px 32px rgba(0,0,0,.3)',
        'glass-lg': '0 16px 64px rgba(0,0,0,.4)',
      }
    },
  },
  plugins: [],
}
