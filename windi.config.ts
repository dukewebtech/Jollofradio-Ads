import { defineConfig, transform } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  darkMode: 'class',
  safelist: '',
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#F0CF7B',
          100: '#F0CF7B',
        },
        grey: {
          DEFAULT: '#9A9FA3',
          100: '#8F8F8F',
          150: '#AEAEAE',
          200: '#828282',
          300: '#575C5F',
          400: '#373328',
          500: '#1F2325',
          600: '#D9D9D9',
        },
        blue: {
          deep: {
            DEFAULT: '#051724',
            100: '#030F18',
            200: '#0D1921',
            light: '#17252E',
            400: '#12222D',
            'light-100': '#582ABB',
            navy: '#7B95F0',
          },
        },
        red: {
          DEFAULT: '#FF4242',
        },
        brown: {
          DEFAULT: '#441D39',
        },
        green: {
          DEFAULT: '#B5DA21',
        },
        pink: {
          DEFAULT: '#E8503C',
        },
      },
    },
  },
  plugins: [formsPlugin],
});
