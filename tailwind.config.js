module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans-tc': ['Noto Sans TC', 'sans-serif']
      },
      colors: {
        primary: {
          1: '#007FAB',
          2: '#003A4F',
          3: '#B0D2DE'
        },
        secondary: {
          1: '#FFC37D',
          2: '#A46039',
          3: '#FFE2A9'
        },
        heightlight: {
          1: '#FF5136',
          2: '#CD331A',
          3: '#FFB5A4'
        }
      }
    }
  },
  plugins: []
}
