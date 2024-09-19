import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff385c',
        secondary: {
          100: '#6a6a6a',
          200: '#222222',
        },
        hoverbg: '#F7F7F7',
        border: '#dee3ed',
      },
      fontFamily: {
        sans: ['AirbnbCereal', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
