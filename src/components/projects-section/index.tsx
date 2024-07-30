export default function ProjectsSectionComponent() {
    return (
        <section id="projects-section" className="relative py-32 px-5 md:px-8 lg:px-20 bg-gradient-to-b from-indigo-500 to-blue-600">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-02 bg-no-repeat bg-left-top"></div>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-element-02 bg-no-repeat bg-right-bottom"></div>

            <h3 className="relative text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider mb-8 md:mb-12">
                Nossos Projetos
            </h3>

            <div className="relative services-list flex flex-wrap pt-10 mb-10 gap-16 md:gap-0">
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
    )
}