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
        primaryTransparent: '', // menu cinza transparente
        secondaryTransparent: 'rgb(0,0,0,0.4)',
        // rgb(89, 91, 115, 0.5) - transparente
        primaryBg: '#043873', //azul
        // azul bg imagem 04 #043873
        // roxo bg imagem 03 #5E29C9 segundo escolhido
        // roxo #2F1893
        // azul marinho #002D54
        // bg-gray-900 #111827
        // bg-gray-800 #1F2937
        secondaryBg: '', // bg-zinc-50 cards
        testBg: '#042F6F',
        testBg2: '#1A396F',
        testBg3: '#084E9E',
        serviceBg: '',
        serviceBg2: '',
        projectBg: '',
        inputBg: '#fff', // fundo inputs
        inputIconBg: 'gray',
        questionBg: 'rgb(4, 56, 115, 0.7)',
        iconBg: '#fff',
        buttonBg: '#8A2BE2', // fundo botão
        buttonHighlight: '', // fundo botão hover
        buttonFormBg: '',
        buttonFormHighlight: '',
        // -------------
        menuText: '#fff',
        menuHighlight: '#8A2BE2',
        bannerText: '#fff', // título banner inicial
        primaryText: '#fff', // laranja título
        // #FFB347 - laranja
        // rgb(59, 130, 246) - azul claro
        // rgb(56, 189, 248) - 
        secondaryText: '#fff', // título cards e secundários
        contentText: '#fff', // cor textos menores
        buttonText: '#fff',
        // rgb(16, 185, 129) - verde highlight
        // rgb(236, 72, 153) - rosa highlight
        // rgb(255, 193, 7) - 
        // fundo items projetos
        // fundo items perguntas
        // azul marinho #002D54
        // bg-gray-900 #111827
        // bg-gray-800 #1F2937
        // primaryText: 'rgb(255, 159, 64)',
        // text-zinc-50 #FAFAFA
        // text-zinc-800 #27272A
        // text-zinc-900 #18181B
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
        'banner-image-03': "url('./src/assets/images/banners/BG.png')",
        'banner-image-04': "url('./src/assets/images/banners/Hero-section-blue-detail.png')",
        'banner-image-05': "url('./src/assets/images/banners/Hero-section-white-detail.png')",
        'banner-image-06': "url('./src/assets/images/banners/Background.png')",
        'banner-image-07': "url('./src/assets/images/banners/Image.png')",
      }
    },
  },
  plugins: [],
}