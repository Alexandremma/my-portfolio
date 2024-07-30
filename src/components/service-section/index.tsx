export default function ServiceBannerComponent() {
    return (
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
    )
}