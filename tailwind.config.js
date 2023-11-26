/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-gray': '#5e5e5e',
        'neon-red': '#FF3131',
        'neon-green': '#00FF00',
        'neon-blue': '#00FFFF',
        'neon-purple': '#9D00FF',
        'neon-pink': '#FF0099',
        'neon-yellow': '#FFFF00',

        'muted-blue': '#3A6F9E'
      },
      boxShadow: {
        'neon-red-frame': '0px 0px 20px 0px #FF3131',
        'neon-blue-frame': '0px 0px 20px 0px #00FFFF',
        'neon-green-frame': '0px 0px 20px 0px #00FF00',
        'neon-white-frame': '0px 0px 20px 0px #F6F5EE',

        'neon-red-bar': '0px 0px 6px 0px #FF3131',
        'neon-blue-bar': '0px 0px 6px 0px #00FFFF',
        'neon-green-bar': '0px 0px 6px 0px #00FF00',

        'neon-pink-name': '0px 0px 20px 0px #FF0099',
        'neon-green-name': '0px 0px 20px 0px #00FF00',

        'neon-blue-flicker': '0px 0px 10px 0px #00FFFF'
      }
    },
  },
  plugins: [],
}
