/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Comfortaa',
      },
      colors: {
        menuBg: 'rgb(89, 91, 115, 0.5)',
        serviceCard: 'rgb(89, 91, 115, 0.1)',
        serviceCardBorder: 'rgb(255, 255, 255, 0.1)',
      },
      boxShadow: {
        shape: '0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)'
      },
      backgroundImage: {
        'banner-image-01': "url('./src/assets/images/banners/banner_inicial_01.png')",
        'banner-image-02': "url('./src/assets/images/banners/banner_inicial_02.png')",
      }
    },
  },
  plugins: [],
}