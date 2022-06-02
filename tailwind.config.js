module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobile':'300px',

        'tablet':'600px',

        'laptop':'1060px',

        'desktop':'1600px',

        'sm': '640px',
       
  
        'md': '768px',
        
  
        'lg': '1024px',
       
  
        'xl': '1280px',
        
  
        '2xl': '1536px',
      
      }
    },
    
  },
  plugins: [],
}
