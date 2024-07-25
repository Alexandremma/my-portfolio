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
        primaryTransparent: 'rgb(255,255,255,0.4)', // menu cinza transparente
        secondaryTransparent: 'rgb(0,0,0,0.5)',
        otherTransparent: '#2863EB95',
        bgTransparent: '',
        // rgb(89, 91, 115, 0.5) - transparente
        primaryBg: '#043873', //azul
        // azul bg imagem 04 #043873 terceiro escolhido
        // roxo bg imagem 03 #5E29C9 segundo escolhido
        // azul claro #4F9CF9 escolhido
        // roxo #2F1893
        // azul marinho #002D54
        // bg-gray-900 #111827
        // bg-gray-800 #1F2937
        secondaryBg: '', // bg-zinc-50 cards
        testBg: '#042F6F',
        testBg2: '#1A396F',
        testBg3: '#084E9E',
        serviceBg: '#2863EB70',
        serviceBg2: '#2863EB70',
        // 2863EB70
        // #2863EB
        // #6366F1
        // #6A5ACD - roxo legal
        // #4682B4 - azul legal
        // #87CEEB - azul clarin
        // #FF69B4 - rosa escuro
        // #FFB6C1 - rosa claro
        // #40E0D0 - turquesa daora
        // #98FB98 - verde pálido
        // #32CD32 - verde lima
        // #FF6F61 - laranja pessego

        // #6A6CFF - roxo stormbrain
        // #BD71FF - rosa stormbrain
        projectBg: '#2863EB70',
        questionBg: '#2863EB70',
        // questionBg: 'rgb(4, 56, 115, 0.7)',
        // d6e4ff - azul claro
        // 1a237e - azul escuro
        // FFD700 - amarelo dourado (complementar)
        // FFA500 - laranja suave (complementar)
        // 3B82F6 - azul claro suave
        // 00BFFF - azul mais destaque
        // E6E6FA - lavanda
        // 8A2BE2 - roxo destaque mesmo do botão
        // 6366f1 - roxin do fundo gradiente
        // 2563eb - azul do fundo gradiente
        iconBg: '#fff',
        buttonBg: '#4F46E5', // fundo botão
        buttonNew: 'rgb(224, 124, 241)',
        // 8A2BE2 - roxo destaque mesmo do botão
        // 4F46E5 - indigo-600
        // rgb(224, 124, 241) - lilas
        buttonHighlight: '#3730A3', // fundo botão hover
        buttonHighlight2: '#6366F1', // fundo botão hover
        inputBg: 'rgb(0,0,0,0)', // fundo inputs
        // 043873
        inputIconBg: '#fff',
        // gray
        buttonFormBg: '#4F46E5',
        // #043873 - azul botão
        buttonFormHighlight: '#3730A3',
        // -------------
        menuText: '#fff',
        menuHighlight: '#3730A3',
        // roxo - #8A2BE2
        bannerText: '#fff', // título banner inicial
        primaryText: '#fff', // laranja título
        // #FFB347 - laranja
        // rgb(59, 130, 246) - azul claro
        // rgb(56, 189, 248) - 
        secondaryText: '#fff', // título cards e secundários
        contentText: '#fff', // cor textos menores
        otherTextColor: 'rgb(56, 189, 248)',
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
        inputPlaceholderText: '#fff',
        highlightGreen: 'rgb(16, 185, 129)',
        highlightPink: 'rgb(236, 72, 153)',
        highlightButton: 'rgb(255, 193, 7)',
        serviceCard: 'rgb(89, 91, 115, 0.1)',
        serviceCardBorder: 'rgb(255, 255, 255, 0.1)',
      },
      boxShadow: {
        shape: '0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)',
        shape2: '0px 8px 8px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.04), 0px 2px 2px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)',
        shape3: '0px 2px 2px rgba(255, 255, 255, 0.1), 1px -1px 0px rgba(255, 255, 255, 0.1), 1px 1px 0px rgba(255, 255, 255, 0.1), -2px 0px 0px 0px rgba(255, 255, 255, 0.1), inset 0px 0px 0px 0px rgba(255, 255, 255, 0.01), inset 0px 0px 0px rgba(255, 255, 255, 0.01)',
      },
      backgroundImage: {
        'banner-image-01': "url('./src/assets/images/banners/banner_inicial_01.png')",
        'banner-image-02': "url('./src/assets/images/banners/banner_inicial_02.png')",
        'banner-image-03': "url('./src/assets/images/banners/BG.png')",
        'banner-image-04': "url('./src/assets/images/banners/Hero-section-blue-detail.png')",
        'banner-image-05': "url('./src/assets/images/banners/Hero-section-white-detail.svg')",
        'banner-image-06': "url('./src/assets/images/banners/Background.png')",
        'banner-image-07': "url('./src/assets/images/banners/Image.png')",
        'element-01': "url('./src/assets/images/elements/BG-Elemento.svg')",
        'element-02': "url('./src/assets/images/elements/BG-Elemento-2.svg')",
        'element-03': "url('./src/assets/images/elements/Contato-Elemento.svg')",
        'element-04': "url('./src/assets/images/elements/Contato-Elemento-2.svg')",
        'element-05': "url('./src/assets/images/elements/Contato-Elemento-3.svg')",
      }
    },
  },
  plugins: [],
}