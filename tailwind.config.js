module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        loginFormImage: '80px auto',
        regForm: '140px auto',
        footerGrid: '300px 300px auto',
      },
      colors: {
        loginForm: '#5a83d8',
        btnLoginHover: '#4c6eb1',
        homePage: 'linear-gradient(135deg, #172a74, #21a9af)',
        registrationHeader: '#4C4F6C',
        regFormBg: '#f3f3f3',
        footerBg: '#282d32',
      },
      width: {
        loginForm: '45%',
      },
      height: {
        familyShopping: '600px',
      },
      boxShadow: {
        loginFormLeft: '7px 0px 31px -5px rgba(82,82,82,0.66)'
      },
      backgroudns: {
        homePage: 'linear-gradient(135deg, #172a74, #21a9af)'
      },

    },
  },
  plugins: [],
}
