module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        xl: '1200px',
        '2xl': '1200px'
      },

    },
    container: {
      center: true,
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['28px', '32px'],
      xl: ['40px', '60px'],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}