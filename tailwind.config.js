/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        /* Horizontal marquee (existing) */
        marquee: 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',

        /* Vertical testimonial scroll (NEW) */
        'vertical-scroll': 'verticalScroll 18s linear infinite'
      },

      keyframes: {
        /* Horizontal marquee */
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        },

        /* Vertical scroll */
        verticalScroll: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' }
        }
      }
    }
  },
  plugins: []
};
