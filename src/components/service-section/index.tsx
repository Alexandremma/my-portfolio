import BgServices from '../../assets/images/elements/BG-Elemento.svg';

export default function ServiceBannerComponent() {
    return (
        <section id="services-section" className="relative py-32 pt-16 px-6 md:px-8 lg:px-16 flex flex-col gap-16 bg-gradient-to-b from-indigo-500 to-blue-600">
            {/* <div className='absolute top-0 bottom-0 left-0 right-0 bg-cover flex items-center justify-center'> */}
                <img src={BgServices} className="w-full h-full block absolute top-0 bottom-0 left-0 right-0 bg-cover"></img>
            {/* </div> */}

            <h3 className="relative text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider">
                Nossos Serviços
            </h3>

            <div className="relative services-list flex flex-wrap gap-8 md:gap-0">
                <div className="md:w-1/2">
                    <div className="md:mr-4 md:mb-4 flex flex-col gap-5 service-card py-10 px-7 md:p-12 bg-serviceBg2 shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-0.5 rounded-full bg-secondaryText"></div>
                            <span className="text-sm text-secondaryText">01</span>
                        </div>

                        <h4 className="text-2xl md:text-3xl text-secondaryText tracking-wider">
                            Sites <br /> Responsivos
                        </h4>

                        <p className="text-sm text-contentText tracking-wide">
                            Desenvolvemos sites responsivos que se adaptam a diferentes tamanhos de tela, garantindo uma experiência de navegação fluida e agradável para todos os usuários. Não importa em qual dispositivo estejam.
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
                            Design <br /> Personalizado
                        </h4>

                        <p className="text-sm text-contentText tracking-wide">
                            Criamos designs exclusivos e personalizados que capturam a essência do seu negócio. Trabalhamos em colaboração com você para entender suas necessidades e traduzir sua visão em um design único.
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
                            Otimização SEO <br /> para o Google
                        </h4>

                        <p className="text-sm text-contentText tracking-wide">
                            Oferecemos serviços de otimização para motores de busca (SEO), com isso, aumentamos a visibilidade do seu site no Google e outros motores de busca, atraindo mais visitantes e potencializando suas oportunidades de negócios.
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
                            Suporte <br /> Contínuo
                        </h4>

                        <p className="text-sm text-contentText tracking-wide">
                            Nosso compromisso com você não termina após a entrega do site. Oferecemos suporte contínuo para garantir que seu site esteja seguro e funcionando, mesmo após a entrega do projeto. Permitindo que você se concentre em administrar seu negócio.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative mt-6 text-center">
                <a href="https://api.whatsapp.com/send/?phone=5544999829545" target="_blank" className="md:hidden px-12 md:px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                    Entrar em Contato
                </a>

                <a href="https://web.whatsapp.com/send?phone=5544999829545" target="_blank" className="hidden md:inline px-12 md:px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                    Entrar em Contato
                </a>
            </div>
        </section>
    )
}