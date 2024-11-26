/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container:{
      center:true,
      padding:'1rem',//16 px

    },
    extend: {
      colors:{
        primary : '#FD3D57',
        primary : '#FD3D57',
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'roboto': ['Roboto'],
      },
    },
  },
  plugins: [],
}

