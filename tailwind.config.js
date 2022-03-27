module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        loginFormImage: '80px auto',
        regForm: '160px auto',
        footerGrid: '300px 300px auto',
        profileGrid: '250px auto',
        accountGrid: '300px auto',
      },
      colors: {
        loginForm: '#5a83d8',
        btnLoginHover: '#4c6eb1',
        registrationHeader: '#04293A',
        regFormBg: '#f3f3f3',
        footerBg: '#282d32',
        itemBgHover: '#387791',
        sideBarMarketplace: '#09354a',
        sideBarMarketplaceButtons: '#073d56',
        sideBarMarketplaceButtonsActive: '#085070',
        sideBarMarketplaceButtonsHover: '#074561',
        circleCartBg: '#05567b',
        inventoryHeaderBg: '#487185',
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
