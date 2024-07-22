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
        primaryBg: '#2F1893',
        // azul marinho #002D54
        // bg-gray-900 #111827
        // bg-gray-800 #1F2937
        // 2F1893
        primaryTransparent: 'rgb(89, 91, 115, 0.5)',
        primaryText: '#FAFAFA',
        // primaryText: 'rgb(255, 159, 64)',
        // text-zinc-50 #FAFAFA
        // text-zinc-800 #27272A
        // text-zinc-900 #18181B
        secondaryText: 'rgb(59, 130, 246)',
        otherTextColor: 'rgb(56, 189, 248)',
        highlightGreen: 'rgb(16, 185, 129)',
        highlightPink: 'rgb(236, 72, 153)',
        highlightButton: 'rgb(255, 193, 7)',
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