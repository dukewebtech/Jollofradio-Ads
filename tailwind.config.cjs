/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,vue}'],
    theme:{
    extend:{colors: {
        transparent: 'transparent',
        white: {
          DEFAULT: '#ffffff',
          smoke: '#575c5f',
        },
        green:{
            DEFAULT:'#009A3E',
            light:'#70C26E'
        },
        yellow:{DEFAULT:'#F0CF7B'},
        blue:{dark:'#030F18',
        carddark:'#030F18',
        light:'#12222D'}
      },
     fontSize:{
        xmd:'24px',
        sm:'27px',
        sm:'15px',
        md:'20px',
        xs:'13px',
        lg:'36px'
      }
    }},
    plugins: [require('daisyui')],
    daisyui: {
      styled: true,
      base: false,
      utils: true,
      logs: true,
      rtl: false,
      prefix: '',
      darkTheme: 'light',
    },
  };