module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        loginFormImage: '120px auto',
      },
      colors: {
        loginForm: '#5a83d8',
      },
      width: {
        loginForm: '45%',
      },
      boxShadow: {
        loginFormLeft: '7px 0px 31px -5px rgba(82,82,82,0.66)'
      },

    },
  },
  plugins: [],
}
