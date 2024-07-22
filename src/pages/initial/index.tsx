import { ChevronDown, CircleCheck, CircleChevronRight, CircleHelp, Github, Instagram, Linkedin, Mail, MapPin, Smartphone, User } from "lucide-react";

export default function InitialPage() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <header className="max-w-screen-2xl mx-auto fixed top-0 left-0 right-0 z-10 px-28 py-5 flex items-center justify-between bg-menuBg">
                <div className="logo-container">
                    <a href="#">
                        <img className="w-32" src="./public/logo-horizontal-branca-completa-sem-fundo.png" alt="Logo AMM Web Developer" />
                    </a>
                </div>

                <div className="flex items-center gap-20">
                    <nav className="">
                        <ul className="flex items-center gap-8">
                            <li className="font-bold transition hover:text-highlightGreen">
                                <a href="#initial-banner-section">Início</a>
                            </li>
                            {/* <li className="font-bold transition hover:text-highlightGreen">
                                <a href="#">Sobre</a>
                            </li> */}
                            <li className="font-bold transition hover:text-highlightGreen">
                                <a href="#services-section">Serviços</a>
                            </li>
                            <li className="font-bold transition hover:text-highlightGreen">
                                <a href="#projects-section">Projetos</a>
                            </li>
                            <li className="font-bold transition hover:text-highlightGreen">
                                <a href="#contact-section">Contato</a>
                            </li>
                            <li className="font-bold transition hover:text-highlightGreen">
                                <a href="#faq-section">Faq</a>
                            </li>
                        </ul>
                    </nav>

                    <button className="px-8 pt-3.5 pb-3 text-sm font-bold leading-none bg-highlightGreen rounded-full transition hover:bg-green-500">
                        Entrar em Contato
                    </button>
                </div>
            </header>
            
            <main>
                <section id="about" className="about">

                </section>

                <section id="initial-banner-section" className="w-full h-[760px] flex items-center pt-8 px-28 bg-no-repeat bg-cover bg-center">
                    <div className="">
                        <h2 className="w-[700px] text-6xl font-semibold leading-[4.8rem] tracking-wider">
                            Desenvolvemos soluções para o seu negócio.
                        </h2>
                        <h5 className="mt-6 mb-8 text-2xl font-semibold tracking-wider">
                            Soluções web personalizadas.
                        </h5>
                        <button className="px-8 py-3 font-bold leading-6 tracking-wider bg-highlightGreen rounded-full transition hover:bg-green-500">
                            Saiba Mais
                        </button>
                    </div>
                    <div>

                    </div>
                </section>

                <section id="services-section" className="py-24 px-20 space-y-20">
                    <h3 className="text-5xl text-center font-semibold tracking-wider">Serviços</h3>

                    <div className="services-list px-6 flex gap-8">
                        <div className="flex flex-col gap-5 service-card p-12 bg-gray-900 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                            <h4 className="text-3xl text-primaryText tracking-wider">
                                Design Responsivo
                            </h4>
                            <p className="text-sm tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 service-card p-12 bg-gray-900 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                            <h4 className="text-3xl text-secondaryText tracking-wider">
                                Design Responsivo
                            </h4>
                            <p className="text-sm tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 service-card p-12 bg-gray-900 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                            <h4 className="text-3xl text-otherTextColor tracking-wider">
                                Design Responsivo
                            </h4>
                            <p className="text-sm tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider bg-highlightGreen rounded-full transition hover:bg-highlightButton">
                            Entrar em Contato
                        </button>
                    </div>
                </section>

                <section id="services-section-v2" className="py-24 px-20 space-y-20">
                    <h3 className="text-5xl text-center font-semibold tracking-wider">
                        Serviços v2
                    </h3>

                    <div className="services-list px-6 flex flex-wrap">
                        <div className="w-1/2">
                            <div className="mr-4 mb-4 flex flex-col gap-5 service-card p-12 bg-gray-800 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <h4 className="text-3xl tracking-wider">
                                    Design Responsivo
                                </h4>
                                <p className="text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="ml-4 mb-4 flex flex-col gap-5 service-card p-12 bg-gray-800 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <h4 className="text-3xl tracking-wider">
                                    Design Responsivo
                                </h4>
                                <p className="text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mt-4 mr-4 flex flex-col gap-5 service-card p-12 bg-gray-800 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <h4 className="text-3xl tracking-wider">
                                    Design Responsivo
                                </h4>
                                <p className="text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mt-4 ml-4 flex flex-col gap-5 service-card p-12 bg-gray-800 border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <h4 className="text-3xl tracking-wider">
                                    Design Responsivo
                                </h4>
                                <p className="text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider bg-highlightGreen rounded-full transition hover:bg-green-500">
                            Entrar em Contato
                        </button>
                    </div>
                </section>

                <section id="qualities-section" className="py-24 px-20 flex items-center justify-center gap-20">
                    <div className="w-1/2">
                        <h3 className="text-4xl font-bold tracking-[16px] leading-[60px]">
                            QUALIDADE <br /> GARANTIDA
                        </h3>

                        <p className="mt-4 mb-8">
                            Tratamos cada projeto com sua devida importância e só finalizamos <br /> o projeto quando
                            o cliente está satisfeito.
                        </p>

                        <button className="px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider bg-highlightGreen rounded-full transition hover:bg-green-500">
                            Veja nossos projetos
                        </button>
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="text-highlightGreen size-8" />
                            <span className="text-xl">
                                Site Responsivo (multidispositivos)
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="text-highlightGreen size-8" />
                            <span className="text-xl">
                                Design exclusivo para cada projeto
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="text-highlightGreen size-8" />
                            <span className="text-xl">
                                Otimização de Performance
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="text-highlightGreen size-8" />
                            <span className="text-xl">
                                Configuração de hospedagem e domínio
                            </span>
                        </div>
                    </div>
                </section>

                <section id="projects-section" className="py-24 px-20">
                    <h3 className="text-5xl text-center font-semibold tracking-wider mb-12">Nossos Projetos</h3>

                    <div className="services-list flex flex-wrap py-10 px-6 mb-10">
                        <div className="w-1/2">
                            <a href="#" className="block mb-6 mr-6 bg-bgServiceCard shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-gray-800">
                                    <img className="w-full h-72 rounded-3xl" src="./src/assets/images/projects/horizonseg-project.png" alt="Projeto HorizonSeg" />
                                </div>
                                <div className="flex flex-col gap-5 service-card p-8 rounded-b-3xl bg-gray-800">
                                    <h4 className="text-3xl font-semibold tracking-wider leading-10">
                                        Site Institucional <br /> HorizonSeg
                                    </h4>
                                    <p className="text-sm tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="w-1/2">
                            <a href="#" className="block mb-6 ml-6 bg-bgServiceCard shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-gray-800">
                                    <img className="w-full h-72 rounded-3xl" src="./src/assets/images/projects/helen-project.png" alt="Projeto Helen Santos" />
                                </div>
                                <div className="flex flex-col gap-5 service-card p-8 rounded-b-3xl bg-gray-800">
                                    <h4 className="text-3xl font-semibold tracking-wider leading-10">
                                        Landing Page <br /> Helen Santos
                                    </h4>
                                    <p className="text-sm tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="w-1/2">
                            <a href="#" className="block mt-6 mr-6 bg-bgServiceCard shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-gray-800">
                                    <img className="w-full h-72 rounded-3xl" src="./src/assets/images/projects/betemorais-project.png" alt="Projeto Bete Morais" />
                                </div>
                                <div className="flex flex-col gap-5 service-card p-8 rounded-b-3xl bg-gray-800">
                                    <h4 className="text-3xl font-semibold tracking-wider leading-10">
                                        Site Institucional <br /> Bete Morais
                                    </h4>
                                    <p className="text-sm tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="w-1/2">
                            <a href="#" className="block mt-6 ml-6 bg-bgServiceCard shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div className="rounded-t-full bg-gray-800">
                                    <img className="w-full h-72 rounded-3xl" src="./src/assets/images/projects/tatica-project.png" alt="Projeto HorizonSeg" />
                                </div>
                                <div className="flex flex-col gap-5 service-card p-8 rounded-b-3xl bg-gray-800">
                                    <h4 className="text-3xl font-semibold tracking-wider leading-10">
                                        Site Institucional <br /> Tática Consultoria
                                    </h4>
                                    <p className="text-sm tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider bg-highlightGreen rounded-full transition hover:bg-green-500">
                            Quero construir meu Site
                        </button>
                    </div>
                </section>

                <section id="contact-section" className="py-24 px-20 space-y-20">
                    <h3 className="text-5xl text-center font-semibold tracking-wider">
                        Entre em Contato
                    </h3>

                    <div className="px-6">
                        <form className="space-y-8">
                            <div className="flex items-center gap-8">
                                <div className="h-11 px-4 flex items-center gap-3 flex-1 bg-gray-900 rounded-lg">
                                    <label htmlFor="name">
                                        <User className="size-5" />
                                    </label>
                                    <input id="name" type="text" name="name" placeholder="Digite seu nome" className="w-full bg-transparent text-lg outline-none" />
                                </div>
                                <div className="h-11 px-4 flex items-center gap-3 flex-1 bg-gray-900 rounded-lg">
                                    <label htmlFor="email">
                                        <Mail className="size-5" />
                                    </label>
                                    <input id="email" type="email" name="email" placeholder="Digite seu e-mail" className="w-full bg-transparent text-lg outline-none" />
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-8">
                                <div className="h-11 px-4 flex items-center gap-3 flex-1 bg-gray-900 rounded-lg">
                                    <label htmlFor="phone">
                                        <Smartphone className="size-5" />
                                    </label>
                                    <input id="phone" type="text" name="phone" placeholder="Digite seu celular" className="w-full bg-transparent text-lg outline-none" />
                                </div>
                                <div className="h-11 px-4 flex items-center gap-3 flex-1 bg-gray-900 rounded-lg">
                                    <label htmlFor="city">
                                        <MapPin className="size-5" />
                                    </label>
                                    <input id="city" type="text" name="city" placeholder="Digite sua cidade" className="w-full bg-transparent text-lg outline-none" />
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-8">
                                <textarea name="" placeholder="Digite sua mensagem" className="w-full p-4 rounded-lg bg-gray-900 text-lg outline-none"></textarea>
                            </div>

                            <div className="text-right">
                                <button type="submit" className="py-2 px-12 font-bold bg-slate-900 rounded-lg transition hover:bg-slate-700">Enviar</button>
                            </div>
                        </form>

                        <div>

                        </div>
                    </div>
                </section>

                <section id="faq-section" className="py-24 px-20 space-y-20">
                    <h3 className="text-5xl text-center font-semibold tracking-wider">
                        Perguntas Frequentes
                    </h3>

                    <div className="questions-list px-6 space-y-4">
                        <div className="question-item py-3 px-8 flex items-center gap-4 bg-gray-800 rounded-2xl">
                            <CircleCheck className="size-7" />
                            <span className="flex-1 text-lg font-semibold">Quanto tempo leva para desenvolver meu site?</span>
                            <ChevronDown className="size-8 font-bold" />
                        </div>
                        <div className="question-item py-3 px-8 flex items-center gap-4 bg-gray-800 rounded-2xl">
                            <CircleCheck className="size-7" />
                            <span className="flex-1 text-lg font-semibold">Quais as tecnologias utilizadas no desenvolvimento do site?</span>
                            <ChevronDown className="size-8 font-bold" />
                        </div>
                        <div className="question-item py-3 px-8 flex items-center gap-4 bg-gray-800 rounded-2xl">
                            <CircleCheck className="size-7" />
                            <span className="flex-1 text-lg font-semibold">Como é a comunicação ao longo da criação do site?</span>
                            <ChevronDown className="size-8 font-bold" />
                        </div>
                        <div className="question-item py-3 px-8 flex items-center gap-4 bg-gray-800 rounded-2xl">
                            <CircleHelp className="size-7" />
                            <span className="flex-1 text-lg font-semibold">Meu site irá funcionar em celulares e tablets?</span>
                            <ChevronDown className="size-8 font-bold" />
                        </div>
                        <div className="question-item py-3 px-8 flex items-center gap-4 bg-gray-800 rounded-2xl">
                            <CircleHelp className="size-7" />
                            <span className="flex-1 text-lg font-semibold">Meu site vai aparecer no Google?</span>
                            <ChevronDown className="size-8 font-bold" />
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-8 px-28 flex items-center justify-between">
                <div>
                    <a href="#">
                        <img className="w-32" src="./public/logo-vertical-branca-completa-sem-fundo.png" alt="Logo AMM Web Developer" />
                    </a>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h5 className="text-2xl font-semibold">
                        Entre em Contato
                    </h5>
                    <div className="contact-list flex flex-col items-start gap-4">
                        <span>(44) 99982-9545</span>
                        <span>alexandremmac@gmail.com</span>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h5 className="text-2xl font-semibold">
                        Redes Sociais
                    </h5>
                    <div className="social-media-list flex items-center gap-4">
                        <a href="#">
                            <Linkedin />
                        </a>
                        <a href="#">
                            <Github />
                        </a>
                        <a href="#">
                            <Instagram />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}