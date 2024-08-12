import HorizonProjectImage from '../../assets/images/projects/horizonseg-project.png';
import HelenProjectImage from '../../assets/images/projects/helen-project.png';
import BeteProjectImage from '../../assets/images/projects/betemorais-project.png';
import AnaProjectImage from '../../assets/images/projects/ana-project.png';
import BgProjects from '../../assets/images/elements/BG-Elemento-2.svg';

export default function ProjectsSectionComponent() {
    return (
        <section id="projects-section" className="relative py-24 px-5 md:px-8 lg:px-20 bg-gradient-to-b from-indigo-500 to-blue-600">
            <img className="absolute top-0 left-0" src={BgProjects}></img>
            <img className="absolute bottom-0 right-0" src={BgProjects}></img>

            <h3 className="relative text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider mb-8 md:mb-12">
                Nossos Projetos
            </h3>

            <div className="max-w-screen-2xl mx-auto relative services-list lg:px-24 flex flex-wrap pt-10 mb-10 gap-16 md:gap-0">
                <div className="md:w-1/2">
                    <a href="https://horizonseg.com.br" target="_blank" className="block md:mb-4 md:mr-4 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                        <div className="rounded-t-full bg-projectBg">
                            <img className="w-full h-72 md:h-80 rounded-3xl" src={HorizonProjectImage} alt="Projeto HorizonSeg" />
                        </div>

                        <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                            <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                Site Institucional <br /> HorizonSeg
                            </h4>

                            {/* <p className="text-sm text-contentText tracking-wide leading-6">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                            </p> */}

                            <button className="md:w-[200px] mt-2 pt-2.5 pb-2 font-bold leading-6 tracking-wider text-sm md:text-base text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                                Visitar Site
                            </button>
                        </div>
                    </a>
                </div>

                <div className="md:w-1/2">
                    <a href="https://helensantosoftalmologia.com.br" target="_blank" className="block md:mb-4 md:ml-4 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                        <div className="rounded-t-full bg-projectBg">
                            <img className="w-full h-72 md:h-80 rounded-3xl" src={HelenProjectImage} alt="Projeto Helen Santos" />
                        </div>

                        <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                            <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                Landing Page <br /> Dra Helen Santos
                            </h4>

                            {/* <p className="text-sm text-contentText tracking-wide leading-6">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                            </p> */}

                            <button className="md:w-[200px] mt-2 pt-2.5 pb-2 font-bold leading-6 tracking-wider text-sm md:text-base text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                                Visitar Site
                            </button>
                        </div>
                    </a>
                </div>

                <div className="md:w-1/2">
                    <a href="https://betemorais.com.br" target="_blank" className="block md:mt-4 md:mr-4 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                        <div className="rounded-t-full bg-projectBg">
                            <img className="w-full h-72 md:h-80 rounded-3xl" src={BeteProjectImage} alt="Projeto Bete Morais" />
                        </div>

                        <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                            <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                Site Institucional <br /> Bete Morais
                            </h4>

                            {/* <p className="text-sm text-contentText tracking-wide leading-6">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                            </p> */}

                            <button className="md:w-[200px] mt-2 pt-2.5 pb-2 font-bold leading-6 tracking-wider text-sm md:text-base text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                                Visitar Site
                            </button>
                        </div>
                    </a>
                </div>

                <div className="md:w-1/2">
                    <a href="https://www.anabeatrizdelgado.com/" target="_blank" className="block md:mt-4 md:ml-4 bg-projectBg shadow-shape border border-serviceCardBorder rounded-3xl backdrop-blur-2xl">
                        <div className="rounded-t-full bg-projectBg">
                            <img className="w-full h-72 md:h-80 rounded-3xl" src={AnaProjectImage} alt="Projeto HorizonSeg" />
                        </div>

                        <div className="flex flex-col gap-4 md:gap-5 service-card py-8 px-8 rounded-b-3xl bg-projectBg">
                            <h4 className="text-2xl md:text-3xl text-secondaryText font-semibold tracking-wider leading-8 md:leading-10">
                                Site Institucional <br /> Dra Ana Beatriz
                            </h4>

                            {/* <p className="text-sm text-contentText tracking-wide leading-6">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, maiores perferendis, ducimus eum nam nostrum.
                            </p> */}

                            <button className="md:w-[200px] mt-2 pt-2.5 pb-2 font-bold leading-6 tracking-wider text-sm md:text-base text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                                Visitar Site
                            </button>
                        </div>
                    </a>
                </div>
            </div>

            {/* <div className="relative mt-20 text-center">
                <a href="https://api.whatsapp.com/send/?phone=5544999829545" target="_blank" className="md:hidden px-12 md:px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                    Quero construir meu Site
                </a>

                <a href="https://web.whatsapp.com/send?phone=5544999829545" target="_blank" className="hidden md:inline px-12 md:px-20 pt-3.5 pb-3 font-bold leading-6 tracking-wider text-buttonText bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                    Quero construir meu Site
                </a>
            </div> */}
        </section>
    )
}