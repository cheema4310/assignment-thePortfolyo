/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        outline: '0px 0px 2.5px 2.5px rgba(172, 136, 91, 0.2)',
      },
      colors: {
        lightest: '#E6E6E6',
        lighter: '#B0B0B0',
        light: '#827d7d',
        dark: '#3D3D3D',
        darker: '#292929',
        darkest: '#1A1A1A',
        textColor: '#AC885B',
        glass: '#1A1A1Ac1',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        para: ['Roboto Mono', 'monospace'],
        btn: ['Nunito', 'sans-serif'],
        modern: ['Exo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
