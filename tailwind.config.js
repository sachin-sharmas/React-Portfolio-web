/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
  

    screens: {
      'sm': '480px',
    
      'md': '768px',
  
      'lg': '992px',
     
    },
    extend:{
      screens: {
        'xl': '1024px',
      }
    },
    
  },
  plugins: [],
}