import { CircleChevronRight, Github, Instagram, Linkedin } from "lucide-react";
import AccordionComponent from "../../components/accordion";
import FormComponent from "../../components/form";
import HeaderComponent from "../../components/header";

export default function InitialPage() {
    return (
        <div className="max-w-screen-2xl mx-auto w-full">
            <HeaderComponent />
            
            <main id="main" className="main">
                <section id="initial-banner-section" className="relative w-full h-screen md:h-[640px] lg:h-[720px] flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-0 pt-8 md:pt-24 px-8 md:px-16 lg:px-28 bg-gradient-to-t from-indigo-500 to-blue-600">
                    <div className="relative z-10">
                        <h2 className="md:w-[640px] text-[32px] md:text-4xl lg:text-6xl text-bannerText font-bold md:leading-snug leading-normal tracking-wider">
                            Desenvolvemos soluções <br className="hidden md:block lg:hidden" /> para o seu negócio.
                        </h2>
                        <h5 className="mt-4 mb-6 md:mt-6 md:mb-8 text-lg md:text-xl lg:text-2xl text-bannerText font-semibold tracking-wider">
                            Soluções web personalizadas.
                        </h5>
                        <button className="px-10 py-3 md:py-4 font-bold leading-6 tracking-wider text-base md:text-lg text-buttonText bg-gradient-to-t from-indigo-400 to-blue-600 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                            Saiba Mais
                        </button>
                    </div>

                    <div className="">
                        <img className="md:block pt-8" src="src/assets/images/banners/web-options.svg" alt="" />
                    </div>
                </section>

                <section id="services-section" className="relative py-32 pt-16 px-6 md:px-8 lg:px-16 space-y-12 bg-gradient-to-b from-indigo-500 to-blue-600">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-01 bg-no-repeat bg-cover bg-center"></div>

                    <h3 className="relative text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider">
                        Serviços
                    </h3>

                    <div className="relative services-list flex flex-wrap gap-8 md:gap-0">
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
                        <button className="px-12 md:px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                            Entrar em Contato
                        </button>
                    </div>
                </section>

                <section id="qualities-section" className="relative py-32 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-20 bg-gradient-to-t from-indigo-500 to-blue-600">

                    <div className="relative lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-[12px] md:tracking-[16px] leading-[54px] md:leading-[60px]">
                            QUALIDADE <br /> GARANTIDA
                        </h3>

                        <p className="mt-8 mb-10 px-6 md:px-0 leading-6 text-sm md:text-base text-white">
                            Tratamos cada projeto com sua devida importância e só finalizamos <br /> o projeto quando
                            o cliente está satisfeito.
                        </p>

                        <button className="font-bold leading-6 tracking-wider text-sm md:text-base text-buttonText bg-gradient-to-t from-indigo-400 to-blue-600 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
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

                <section id="projects-section" className="relative py-32 px-5 md:px-8 lg:px-20 bg-gradient-to-b from-indigo-500 to-blue-600">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-02 bg-no-repeat bg-left-top"></div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-02 bg-no-repeat bg-right-bottom"></div>

                    <h3 className="relative text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider mb-8 md:mb-12">
                        Nossos Projetos
                    </h3>

                    <div className="relative services-list flex flex-wrap pt-10 mb-10 gap-16 md:gap-0">
                        {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-02 bg-cover bg-no-repeat bg-center"></div> */}

                        <div className="md:w-1/2">
                            <a href="https://horizonseg.com.br" target="_blank" className="block md:mb-4 md:mr-4 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-projectBg">
                                    <img className="w-full h-56 md:h-80 rounded-3xl" src="./src/assets/images/projects/horizonseg-project.png" alt="Projeto HorizonSeg" />
                                </div>

                                <div className="flex flex-col gap-4 md:gap-6 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                                    <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                        Site Institucional <br /> HorizonSeg
                                    </h4>

                                    <p className="text-sm text-contentText tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>

                                    <button className="md:w-[200px] mt-2 pt-2.5 pb-2 font-bold leading-6 tracking-wider text-sm md:text-base text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                                        Visitar Site
                                    </button>
                                </div>
                            </a>
                        </div>

                        <div className="md:w-1/2">
                            <a href="https://helensantosoftalmologia.com.br" target="_blank" className="block md:mb-4 md:ml-4 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-projectBg">
                                    <img className="w-full h-56 md:h-80 rounded-3xl" src="./src/assets/images/projects/helen-project.png" alt="Projeto Helen Santos" />
                                </div>

                                <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                                    <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                        Landing Page <br /> Helen Santos
                                    </h4>

                                    <p className="text-sm text-contentText tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>

                                    <button className="md:w-[200px] mt-2 pt-2.5 pb-2 font-bold leading-6 tracking-wider text-sm md:text-base text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                                        Visitar Site
                                    </button>
                                </div>
                            </a>
                        </div>

                        <div className="md:w-1/2">
                            <a href="https://betemorais.com.br" target="_blank" className="block md:mt-4 md:mr-4 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-projectBg">
                                    <img className="w-full h-56 md:h-80 rounded-3xl" src="./src/assets/images/projects/betemorais-project.png" alt="Projeto Bete Morais" />
                                </div>

                                <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                                    <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                        Site Institucional <br /> Bete Morais
                                    </h4>

                                    <p className="text-sm text-contentText tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>

                                    <button className="md:w-[200px] mt-2 pt-2.5 pb-2 font-bold leading-6 tracking-wider text-sm md:text-base text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                                        Visitar Site
                                    </button>
                                </div>
                            </a>
                        </div>

                        <div className="md:w-1/2">
                            <a href="https://tatica-consultoria.vercel.app/" target="_blank" className="block md:mt-4 md:ml-4 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-projectBg">
                                    <img className="w-full h-56 md:h-80 rounded-3xl" src="./src/assets/images/projects/tatica-project.png" alt="Projeto HorizonSeg" />
                                </div>

                                <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                                    <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                        Site Institucional <br /> Tática Consultoria
                                    </h4>

                                    <p className="text-sm text-contentText tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>

                                    <button className="md:w-[200px] mt-2 pt-2.5 pb-2 font-bold leading-6 tracking-wider text-sm md:text-base text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                                        Visitar Site
                                    </button>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* <div className="relative text-center">
                        <button className="w-full md:w-auto md:px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider text-buttonText bg-buttonBg rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                            Quero construir meu Site
                        </button>
                    </div> */}
                </section>

                <section id="contact-section" className="pt-16 pb-32 px-4 md:px-20 space-y-20 bg-gradient-to-t from-indigo-500 to-blue-600">
                    <div className="py-10 px-4 flex items-center justify-center lg:gap-16">
                        <div className="">
                            <img className="hidden lg:block" src="./src/assets/images/elements/Contato-Elemento.svg" alt="" />
                        </div>

                        <FormComponent />
                    </div>
                </section>
            </main>

            <div className="relative bg-banner-image-06 bg-no-repeat bg-cover bg-center bg-fixed">
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-indigo-500 to-blue-600 opacity-90"></div>

                <section id="faq-section" className="relative py-32 px-4 md:px-20 space-y-12 md:space-y-20">
                    <h3 className="text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider">
                        Perguntas Frequentes
                    </h3>

                    <div className="questions-list md:px-6 space-y-4">
                        <AccordionComponent question="Quanto tempo leva para desenvolver meu site?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />

                        <AccordionComponent question="Quais as tecnologias utilizadas no desenvolvimento do site?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />

                        <AccordionComponent question="Como é a comunicação ao longo da criação do site?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />
                        
                        <AccordionComponent question="Meu site irá funcionar em celulares e tablets?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />

                        <AccordionComponent question="Meu site vai aparecer no Google?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />
                    </div>
                </section>

                <footer className="relative py-24 pb-24 md:pb-16 px-4 md:px-16 lg:px-28 flex flex-col md:flex-row items-center justify-between gap-16">
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