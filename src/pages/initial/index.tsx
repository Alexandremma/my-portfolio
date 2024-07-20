import { CircleChevronRight } from "lucide-react";

export default function InitialPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <header className="flex items-center justify-between px-2 py-6">
                <div className="logo-container">
                    <img className="w-32" src="./public/logo-horizontal-branca-completa-sem-fundo.png" alt="Logo AMM Web Developer" />
                </div>

                <div className="flex items-center gap-20">
                    <nav>
                        <ul className="flex items-center gap-8">
                            <li className="text-sm font-bold transition hover:text-green-500">
                                <a href="#">Início</a>
                            </li>
                            <li className="text-sm font-bold transition hover:text-green-500">
                                <a href="#">Sobre</a>
                            </li>
                            <li className="text-sm font-bold transition hover:text-green-500">
                                <a href="#">Serviços</a>
                            </li>
                            <li className="text-sm font-bold transition hover:text-green-500">
                                <a href="#">Portfólio</a>
                            </li>
                            <li className="text-sm font-bold transition hover:text-green-500">
                                <a href="#">Contato</a>
                            </li>
                        </ul>
                    </nav>

                    <button className="px-8 pt-3.5 pb-3 text-sm font-bold leading-none bg-green-600 rounded-full transition hover:bg-green-500">
                        Entrar em Contato
                    </button>
                </div>
            </header>
            
            <main>
                <section id="initial-banner-section" className="w-full h-[600px] flex items-center px-6">
                    <div className="">
                        <h2 className="w-[700px] text-6xl leading-[4.8rem] tracking-wider">Desenvolvemos soluções para o seu negócio.</h2>
                        <h5 className="mt-6 mb-8 text-2xl tracking-wider">Soluções web personalizadas.</h5>
                        <button className="px-8 py-3 font-bold leading-6 tracking-wider bg-green-600 rounded-full transition hover:bg-green-500">
                            Saiba Mais
                        </button>
                    </div>
                    <div>

                    </div>
                </section>

                <section id="services-section" className="py-24 space-y-8">
                    <h3 className="text-5xl text-center tracking-wider">Serviços</h3>

                    <div className="services-list flex gap-10 py-10">
                        <div className="flex flex-col gap-5 service-card p-12 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                            <h4 className="text-3xl tracking-wider">Design Responsivo</h4>
                            <p className="text-sm tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 service-card p-12 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                            <h4 className="text-3xl tracking-wider">Design Responsivo</h4>
                            <p className="text-sm tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 service-card p-12 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                            <h4 className="text-3xl tracking-wider">Design Responsivo</h4>
                            <p className="text-sm tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider bg-green-600 rounded-full transition hover:bg-green-500">
                            Entrar em Contato
                        </button>
                    </div>
                </section>

                <section id="services-section-v2" className="py-24 space-y-8">
                    <h3 className="text-5xl text-center tracking-wider">Serviços v2</h3>

                    <div className="services-list flex flex-wrap py-10">
                        <div className="w-1/2">
                            <div className="mr-4 mb-4 flex flex-col gap-5 service-card p-12 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <h4 className="text-3xl tracking-wider">Design Responsivo</h4>
                                <p className="text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="ml-4 mb-4 flex flex-col gap-5 service-card p-12 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <h4 className="text-3xl tracking-wider">Design Responsivo</h4>
                                <p className="text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mt-4 mr-4 flex flex-col gap-5 service-card p-12 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <h4 className="text-3xl tracking-wider">Design Responsivo</h4>
                                <p className="text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mt-4 ml-4 flex flex-col gap-5 service-card p-12 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <h4 className="text-3xl tracking-wider">Design Responsivo</h4>
                                <p className="text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam perspiciatis blanditiis officiis voluptas corrupti omnis tempore quae repellendus nobis, magni beatae minus et voluptate. Porro magnam impedit architecto odio.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider bg-green-600 rounded-full transition hover:bg-green-500">
                            Entrar em Contato
                        </button>
                    </div>
                </section>

                <section id="qualities-section" className="flex items-center justify-center gap-20 py-24">
                    <div className="w-1/2">
                        <h3 className="text-4xl tracking-[16px] leading-[60px]">
                            QUALIDADE <br /> GARANTIDA
                        </h3>
                        <p className="mt-4 mb-8">
                            Tratamos cada projeto com sua devida importância e só finalizamos <br /> o projeto quando
                            o cliente está satisfeito.
                        </p>
                        <button className="px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider bg-green-600 rounded-full transition hover:bg-green-500">
                            Veja nossos projetos
                        </button>
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="size-8" />
                            <span className="text-xl">Site Responsivo (multidispositivos)</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="size-8" />
                            <span className="text-xl">Design exclusivo para cada projeto</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="size-8" />
                            <span className="text-xl">Otimização de Performance</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <CircleChevronRight className="size-8" />
                            <span className="text-xl">Configuração de hospedagem e domínio</span>
                        </div>
                    </div>
                </section>

                <section id="projects-section" className="py-24 space-y-8">
                    <h3 className="text-5xl text-center tracking-wider">Nossos Projetos</h3>

                    <div className="services-list flex flex-wrap py-10 px-10">
                        <div className="w-1/2">
                            <div className="mb-6 mr-6 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div>
                                    <img className="w-full h-64 rounded-3xl" src="./src/assets/images/projects/horizonseg-project.png" alt="Projeto HorizonSeg" />
                                </div>
                                <div className="flex flex-col gap-5 service-card p-8">
                                    <h4 className="text-3xl tracking-wider leading-10">Site Institucional HorizonSeg</h4>
                                    <p className="text-sm tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <div className="mb-6 ml-6 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div>
                                    <img className="w-full h-64 rounded-3xl" src="./src/assets/images/projects/helen-project.png" alt="Projeto Helen Santos" />
                                </div>
                                <div className="flex flex-col gap-5 service-card p-8">
                                    <h4 className="text-3xl tracking-wider leading-10">Site Institucional <br /> Helen Santos</h4>
                                    <p className="text-sm tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <div className="mt-6 mr-6 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div>
                                    <img className="w-full h-64 rounded-3xl" src="./src/assets/images/projects/betemorais-project.png" alt="Projeto Bete Morais" />
                                </div>
                                <div className="flex flex-col gap-5 service-card p-8">
                                    <h4 className="text-3xl tracking-wider leading-10">Site Institucional <br /> Bete Morais</h4>
                                    <p className="text-sm tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <div className="mt-6 ml-6 bg-bgServiceCard border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                                <div>
                                    <img className="w-full h-64 rounded-3xl" src="./src/assets/images/projects/horizonseg-project.png" alt="Projeto HorizonSeg" />
                                </div>
                                <div className="flex flex-col gap-5 service-card p-8">
                                    <h4 className="text-3xl tracking-wider leading-10">Site Institucional <br /> Bete Morais</h4>
                                    <p className="text-sm tracking-wide leading-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider bg-green-600 rounded-full transition hover:bg-green-500">
                            Quero construir meu Site
                        </button>
                    </div>
                </section>

                <section id="contact-section" className="py-24 space-y-8">
                    <h3 className="text-5xl text-center tracking-wider">Entre em Contato</h3>
                </section>
            </main>

            <footer>
                
            </footer>
        </div>
    )
}