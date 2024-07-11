/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      colors:{
        pastelPink: '#F48FB1',
        pastelBlue:  '#90CAF9',
        pastelGreen: '#A5D6A7',
        pastelYellow: '#FFF59D',
        pastelPurple: '#B39DDB',
        pastelBeige: '#FFF3E0',
      },
      backgroundImage: {
        'black-gradient': 'linear-gradient(to bottom, #000000, #1a1a1a)', 
      },
    },
  },
  plugins: [],
}
