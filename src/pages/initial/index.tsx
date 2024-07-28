import { CircleChevronRight, Github, Instagram, Linkedin, Mail, MapPin, Menu, Smartphone, User, X } from "lucide-react";
import { useState } from "react";
import AccordionComponent from "../../components/accordion";

export default function InitialPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [isQuestionOpen, setIsQuestionOpen] = useState(false);

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    // const clickQuestion = () => {
    //     setIsQuestionOpen(!isQuestionOpen);
    // }

    return (
        <div className="max-w-screen-2xl mx-auto w-full">
            <header className="w-full max-w-screen-2xl mx-auto fixed top-0 left-0 z-20 px-8 md:px-12 lg:px-16 py-5 flex items-center justify-between bg-bgTransparent">
                <div className="logo-container">
                    <a href="#">
                        <img className="w-32" src="./dist/logo-horizontal-branca-completa-sem-fundo.png" alt="Logo AMM Web Developer" />
                    </a>
                </div>

                <div onClick={openMobileMenu} className="lg:hidden">
                    <Menu className="size-8" />
                </div>

                <div className={`lg:hidden absolute ${isMobileMenuOpen ? 'right-0' : 'right-[-1000px]'} top-0 w-full pt-10 pb-12 transition-all duration-500 ease-in bg-gradient-to-b from-indigo-500 to-blue-600`}>
                    <nav className="">
                        <ul className="flex flex-col items-center gap-8">
                            <li onClick={closeMobileMenu} className="py-2 text-center text-2xl text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#initial-banner-section">Início</a>
                            </li>
                            
                            <li onClick={closeMobileMenu} className="py-2 text-center text-2xl text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#services-section">Serviços</a>
                            </li>
                            
                            <li onClick={closeMobileMenu} className="py-2 text-center text-2xl text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#projects-section">Projetos</a>
                            </li>
                            
                            <li onClick={closeMobileMenu} className="py-2 text-center text-2xl text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#contact-section">Contato</a>
                            </li>
                            
                            <li onClick={closeMobileMenu} className="py-2 text-center text-2xl text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#faq-section">Faq</a>
                            </li>

                            <button className="px-10 pt-[18px] pb-4 leading-none text-lg text-buttonText font-bold bg-buttonBg rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                                Entrar em Contato
                            </button>
                        </ul>
                    </nav>

                    <X onClick={closeMobileMenu} className="absolute top-7 right-8 md:right-12 size-8 text-menuText" />
                </div>

                <div className="hidden lg:flex items-center gap-20">
                    <nav className="">
                        <ul className="flex items-center gap-8">
                            <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#initial-banner-section">Início</a>
                            </li>
                            {/* <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#">Sobre</a>
                            </li> */}
                            <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#services-section">Serviços</a>
                            </li>
                            <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#projects-section">Projetos</a>
                            </li>
                            <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#contact-section">Contato</a>
                            </li>
                            <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#faq-section">Faq</a>
                            </li>
                        </ul>
                    </nav>

                    <button className="px-10 pt-3.5 pb-3 leading-none text-sm text-buttonText font-bold bg-buttonBg rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                        Entrar em Contato
                    </button>
                </div>
            </header>
            
            <main className="">
                <section id="about" className="about">

                </section>

                <section id="initial-banner-section" className="relative w-full h-screen md:h-[640px] lg:h-[720px] flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-0 pt-8 md:pt-24 px-8 md:px-16 lg:px-28 bg-gradient-to-t from-indigo-500 to-blue-600">
                    {/* <div className="absolute top-0 bottom-0 left-0 right-28 bg-background-image-01 bg-no-repeat bg-right"></div> */}

                    <div className="relative z-10">
                        <h2 className="md:w-[640px] text-[32px] md:text-4xl lg:text-6xl text-bannerText font-bold md:leading-snug leading-normal tracking-wider">
                            Desenvolvemos soluções <br className="hidden md:block lg:hidden" /> para o seu negócio.
                        </h2>
                        <h5 className="mt-4 mb-6 md:mt-6 md:mb-8 text-lg md:text-xl lg:text-2xl text-bannerText font-semibold tracking-wider">
                            Soluções web personalizadas.
                        </h5>
                        <button className="px-10 py-3 md:py-4 font-bold leading-6 tracking-wider text-base md:text-lg text-buttonText bg-buttonBg rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                            Saiba Mais
                        </button>
                    </div>

                    <div className="">
                        <img className="md:block" src="src/assets/images/banners/web-options.svg" alt="" />
                    </div>
                </section>

                {/* <section id="services-section" className="relative py-32 px-20 space-y-20 bg-gradient-to-t from-indigo-500 to-blue-600">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-01 bg-cover bg-no-repeat bg-center"></div>

                    <h3 className="relative text-5xl text-primaryText text-center font-semibold tracking-wider">
                        Serviços
                    </h3>

                    <div className="relative services-list px-6 flex gap-8">
                        <div className="flex flex-col gap-5 service-card p-12 bg-serviceBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-0.5 rounded-full bg-white"></div>
                                <span className="text-secondaryText">01</span>
                            </div>
                            <h4 className="text-3xl text-secondaryText font-semibold tracking-wider">
                                Design Responsivo
                            </h4>
                            <p className="text-sm text-contentText tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 service-card p-12 bg-serviceBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-0.5 rounded-full bg-white"></div>
                                <span className="text-secondaryText">02</span>
                            </div>
                            <h4 className="text-3xl text-secondaryText tracking-wider">
                                Design Responsivo
                            </h4>
                            <p className="text-sm text-contentText tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 service-card p-12 bg-serviceBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-0.5 rounded-full bg-white"></div>
                                <span className="text-secondaryText">03</span>
                            </div>
                            <h4 className="text-3xl text-secondaryText tracking-wider">
                                Design Responsivo
                            </h4>
                            <p className="text-sm text-contentText tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                            </p>
                        </div>
                    </div>

                    <div className="relative text-center">
                        <button className="px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider text-buttonText bg-buttonBg rounded-full transition hover:bg-buttonHighlight">
                            Entrar em Contato
                        </button>
                    </div>
                </section> */}

                <section id="services-section" className="relative py-32 pt-16 px-6 md:px-16 space-y-12 bg-gradient-to-b from-indigo-500 to-blue-600">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-01 bg-no-repeat bg-cover bg-center"></div>

                    <h3 className="relative text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider">
                        Serviços
                    </h3>

                    <div className="relative services-list md:px-6 flex flex-wrap gap-8 md:gap-0">
                        <div className="md:w-1/2">
                            <div className="md:mr-4 md:mb-4 flex flex-col gap-5 service-card py-10 px-7 md:p-12 bg-serviceBg2 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-0.5 rounded-full bg-secondaryText"></div>
                                    <span className="text-sm text-secondaryText">01</span>
                                </div>
                                <h4 className="text-2xl md:text-3xl text-secondaryText tracking-wider">
                                    Design <br /> Responsivo
                                </h4>
                                <p className="text-sm text-contentText tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="md:ml-4 md:mb-4 flex flex-col gap-5 service-card py-10 px-7 md:p-12 bg-serviceBg2 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-0.5 rounded-full bg-secondaryText"></div>
                                    <span className="text-sm text-secondaryText">02</span>
                                </div>
                                <h4 className="text-2xl md:text-3xl text-secondaryText tracking-wider">
                                    Design <br /> Responsivo
                                </h4>
                                <p className="text-sm text-contentText tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="md:mt-4 md:mr-4 flex flex-col gap-5 service-card py-10 px-7 md:p-12 bg-serviceBg2 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-0.5 rounded-full bg-secondaryText"></div>
                                    <span className="text-sm text-secondaryText">03</span>
                                </div>
                                <h4 className="text-2xl md:text-3xl text-secondaryText tracking-wider">
                                    Design <br /> Responsivo
                                </h4>
                                <p className="text-sm text-contentText tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="md:mt-4 md:ml-4 flex flex-col gap-5 service-card py-10 px-7 md:p-12 bg-serviceBg2 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-0.5 rounded-full bg-secondaryText"></div>
                                    <span className="text-sm text-secondaryText">04</span>
                                </div>
                                <h4 className="text-2xl md:text-3xl text-secondaryText tracking-wider">
                                    Design <br /> Responsivo
                                </h4>
                                <p className="text-sm text-contentText tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative text-center">
                        <button className="px-12 md:px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider text-buttonText bg-buttonBg rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                            Entrar em Contato
                        </button>
                    </div>
                </section>

                {/* <section id="qualities-section" className="relative py-32 px-20 flex items-center justify-center gap-20 bg-element-02 bg-no-repeat bg-cover bg-center"> */}
                <section id="qualities-section" className="relative py-32 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-20 bg-gradient-to-t from-indigo-500 to-blue-600">
                    {/* <div className="absolute top-0 right-0 left-0 bottom-0 bg-element-02 bg-no-repeat bg-cover bg-center bg-fixed"></div> */}

                    <div className="relative lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-[12px] md:tracking-[16px] leading-[54px] md:leading-[60px]">
                            QUALIDADE <br /> GARANTIDA
                        </h3>

                        <p className="mt-8 mb-10 px-6 md:px-0 leading-6 text-sm md:text-base text-white">
                            Tratamos cada projeto com sua devida importância e só finalizamos <br /> o projeto quando
                            o cliente está satisfeito.
                        </p>

                        <button className="font-bold leading-6 tracking-wider text-sm md:text-base text-buttonText bg-buttonBg rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                            <a href="#projects-section" className="block pt-3.5 pb-3 px-14 lg:px-20">
                                Veja nossos projetos
                            </a>
                        </button>
                    </div>

                    <div className="relative px-4 md:px-0 space-y-8">
                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="size-7 text-white" />
                            <span className="text-xl text-white leading-8">
                                Site Responsivo <br className="md:hidden" />  (multidispositivos)
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="size-7 text-white" />
                            <span className="text-xl text-white leading-8">
                                Design exclusivo para <br className="md:hidden" />  cada projeto
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="size-7 text-white" />
                            <span className="text-xl text-white leading-8">
                                Otimização <br className="md:hidden" />  de Performance
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="size-7 text-white" />
                            <span className="text-xl text-white leading-8">
                                Configuração de <br className="md:hidden" />  hospedagem e domínio
                            </span>
                        </div>
                    </div>
                </section>

                <section id="projects-section" className="relative py-32 px-5 md:px-20 bg-gradient-to-b from-indigo-500 to-blue-600">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-02 bg-no-repeat bg-left-top"></div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-02 bg-no-repeat bg-right-bottom"></div>

                    <h3 className="relative text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider mb-8 md:mb-12">
                        Nossos Projetos
                    </h3>

                    <div className="relative services-list flex flex-wrap py-10 md:px-6 mb-10 gap-16 md:gap-0">
                        {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-02 bg-cover bg-no-repeat bg-center"></div> */}

                        <div className="md:w-1/2">
                            <a href="https://horizonseg.com.br" target="_blank" className="block md:mb-6 md:mr-6 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-projectBg">
                                    <img className="w-full h-56 md:h-72 rounded-3xl" src="logo-vertical-branca-completa-sem-fundo.png" alt="Projeto HorizonSeg" />
                                </div>

                                <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                                    <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                        Site Institucional <br /> HorizonSeg
                                    </h4>

                                    <p className="text-sm text-contentText tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>

                                    <button className="">
                                        Visitar Site
                                    </button>
                                </div>
                            </a>
                        </div>

                        <div className="md:w-1/2">
                            <a href="https://helensantosoftalmologia.com.br" target="_blank" className="block md:mb-6 md:ml-6 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-projectBg">
                                    <img className="w-full h-56 md:h-72 rounded-3xl" src="./src/assets/images/projects/helen-project.png" alt="Projeto Helen Santos" />
                                </div>

                                <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                                    <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                        Landing Page <br /> Helen Santos
                                    </h4>
                                    <p className="text-sm text-contentText tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="md:w-1/2">
                            <a href="https://betemorais.com.br" target="_blank" className="block md:mt-6 md:mr-6 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-projectBg">
                                    <img className="w-full h-56 md:h-72 rounded-3xl" src="./src/assets/images/projects/betemorais-project.png" alt="Projeto Bete Morais" />
                                </div>

                                <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                                    <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                        Site Institucional <br /> Bete Morais
                                    </h4>
                                    <p className="text-sm text-contentText tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="md:w-1/2">
                            <a href="https://tatica-consultoria.vercel.app/" target="_blank" className="block md:mt-6 md:ml-6 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-projectBg">
                                    <img className="w-full h-56 md:h-72 rounded-3xl" src="./src/assets/images/projects/tatica-project.png" alt="Projeto HorizonSeg" />
                                </div>

                                <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                                    <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                        Site Institucional <br /> Tática Consultoria
                                    </h4>
                                    <p className="text-sm text-contentText tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="relative text-center">
                        <button className="w-full md:w-auto md:px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider text-buttonText bg-buttonBg rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                            Quero construir meu Site
                        </button>
                    </div>
                </section>

                {/* <section id="contact-section" className="relative py-32 px-20 space-y-20 bg-white"> */}
                <section id="contact-section" className="pt-16 pb-32 px-4 md:px-20 space-y-20 bg-gradient-to-t from-indigo-500 to-blue-600">
                    <div className="py-10 px-4 flex items-center justify-center md:gap-16">
                        <div className="">
                            <img className="hidden lg:block" src="./src/assets/images/elements/Contato-Elemento.svg" alt="" />
                        </div>

                        <form className="lg:w-2/3 space-y-10 md:space-y-14">
                            <div className="space-y-4 md:space-y-8">
                                <h3 className="relative text-[40px] md:text-5xl text-white text-center font-semibold tracking-wider">
                                    Entrar Em Contato
                                </h3>

                                <p className="text-sm md:text-base text-center">
                                    Mande uma mensagem para nós e entraremos em contato com você para conversarmos sobre o seu projeto.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                                    <div className="px-4 flex items-center gap-3 flex-1 bg-inputBg rounded-lg border border-white">
                                        <label htmlFor="name">
                                            <User className="size-5 text-inputIconBg" />
                                        </label>
                                        <input id="name" type="text" name="name" placeholder="Digite seu nome" className="w-full h-11 bg-transparent text-lg outline-none placeholder-inputPlaceholderText" />
                                    </div>
                                    <div className="px-4 flex items-center gap-3 flex-1 bg-inputBg rounded-lg border border-white">
                                        <label htmlFor="email">
                                            <Mail className="size-5 text-inputIconBg" />
                                        </label>
                                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" className="w-full h-11 bg-transparent text-lg outline-none placeholder-inputPlaceholderText" />
                                    </div>
                                </div>
                                
                                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                                    <div className="px-4 flex items-center gap-3 flex-1 bg-inputBg rounded-lg border border-white">
                                        <label htmlFor="phone">
                                            <Smartphone className="size-5 text-inputIconBg" />
                                        </label>
                                        <input id="phone" type="text" name="phone" placeholder="Digite seu celular" className="w-full h-11 bg-transparent text-lg outline-none placeholder-inputPlaceholderText" />
                                    </div>
                                    <div className="px-4 flex items-center gap-3 flex-1 bg-inputBg rounded-lg border border-white">
                                        <label htmlFor="city">
                                            <MapPin className="size-5 text-inputIconBg" />
                                        </label>
                                        <input id="city" type="text" name="city" placeholder="Digite sua cidade" className="w-full h-11 bg-transparent text-lg outline-none placeholder-inputPlaceholderText" />
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-8">
                                    <textarea name="" placeholder="Digite sua mensagem" className="w-full p-4 rounded-lg border border-white bg-inputBg text-lg outline-none placeholder-inputPlaceholderText"></textarea>
                                </div>

                                <div className="text-right">
                                    <button type="submit" className="w-full md:w-auto py-4 md:py-2 md:px-16 text-lg font-bold bg-buttonFormBg rounded-lg shadow-shape3 transition hover:bg-buttonFormHighlight">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <div className="relative bg-banner-image-06 bg-no-repeat bg-cover bg-center bg-fixed">
            {/* <div className="relative bg-gradient-to-b from-indigo-500 to-blue-600"> */}
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-indigo-500 to-blue-600 opacity-90"></div>

                <section id="faq-section" className="relative py-32 px-4 md:px-20 space-y-12 md:space-y-20">
                    <h3 className="text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider">
                        Perguntas Frequentes
                    </h3>

                    <div className="questions-list md:px-6 space-y-4">
                        <AccordionComponent question="Quanto tempo leva para desenvolver meu site?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />

                        {/* <div className="question-item py-4 px-4 md:px-8 bg-questionBg rounded-2xl shadow-shape2">
                            <button onClick={clickQuestion} className="w-full flex items-center gap-3 md:gap-5">
                                <CircleHelp className="text-contentText size-8" />
                                <span className="flex-1 md:text-lg text-left text-contentText font-bold">Quanto tempo leva para desenvolver meu site?</span>
                                <ChevronDown className="size-8 text-contentText font-bold" />
                            </button>

                            <div className={`overflow-hidden grid transition-all duration-300 ease-in-out ${isQuestionOpen ? 'grid-rows-[1fr] opacity-100 pt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden pl-4 text-sm md:text-base">
                                    A resposta para essa pergunta é um pouco longa, para eu ver como fica o layout da resposta para uma frase maior.
                                </div>
                            </div>
                        </div> */}

                        <AccordionComponent question="Quais as tecnologias utilizadas no desenvolvimento do site?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />

                        <AccordionComponent question="Como é a comunicação ao longo da criação do site?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />
                        
                        <AccordionComponent question="Meu site irá funcionar em celulares e tablets?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />

                        <AccordionComponent question="Meu site vai aparecer no Google?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />
                    </div>
                </section>

                <footer className="relative py-24 pb-24 md:pb-16 px-4 md:px-28 flex flex-col md:flex-row items-center justify-between gap-16">
                    <div>
                        <a href="#">
                            <img className="w-32" src="./public/logo-vertical-branca-completa-sem-fundo.png" alt="Logo AMM Web Developer" />
                        </a>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h5 className="text-2xl font-bold">
                            Entre em Contato
                        </h5>
                        <div className="contact-list flex flex-col md:items-start items-center gap-4">
                            <span>(44) 99982-9545</span>
                            <span>alexandremmac@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h5 className="text-2xl font-bold">
                            Redes Sociais
                        </h5>
                        <div className="social-media-list flex items-center justify-center gap-6">
                            <a href="https://www.linkedin.com/in/alexandre-martins-maciel-78379b152/" target="_blank">
                                <Linkedin className="text-contentText size-7" />
                            </a>
                            <a href="https://github.com/Alexandremma" target="_blank">
                                <Github className="text-contentText size-7" />
                            </a>
                            <a href="https://www.instagram.com/alexandremm3/" target="_blank">
                                <Instagram className="text-contentText size-7" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}