/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        quest: {
          bg: '#05070B',
          void: '#020306',
          surface: '#0B0F19',
          card: 'rgba(16, 22, 34, 0.75)',
          border: 'rgba(212, 175, 55, 0.2)',
          'border-bright': 'rgba(212, 175, 55, 0.5)',
          gold: {
            DEFAULT: '#D4AF37',
            light: '#F5DEB3',
            glow: '#F6E05E',
            deep: '#996515',
            muted: '#8C7853',
          },
          parchment: {
            DEFAULT: '#EFE3C3',
            muted: '#B8A88A',
            dark: '#1C1813',
            card: '#16130F',
          },
          flame: '#FF4A22',
          aether: '#00E5FF',
          emerald: '#10B981',
          amethyst: '#A855F7',
          mystic: '#818CF8',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        cinzelDeco: ['"Cinzel Decorative"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        medieval: ['"MedievalSharp"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(ellipse at center, rgba(16, 22, 36, 0.3) 0%, rgba(3, 4, 7, 0.95) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FDF0CD 0%, #D4AF37 50%, #996515 100%)',
        'parchment-gradient': 'linear-gradient(180deg, #FBF6E9 0%, #EFE3C3 50%, #DFCEAA 100%)',
        'arcane-glow': 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 70%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -3px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 45px -5px rgba(212, 175, 55, 0.45)',
        'arcane-glow': '0 0 30px -5px rgba(0, 229, 255, 0.25)',
        'seal-shadow': '0 10px 25px -5px rgba(184, 30, 30, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
