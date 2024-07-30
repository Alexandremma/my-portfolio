import { CircleChevronRight } from "lucide-react";

export default function QualitySectionComponent() {
    return (
        <section id="qualities-section" className="relative py-32 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-20 bg-gradient-to-t from-indigo-500 to-blue-600">
            <div className="relative lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-[12px] md:tracking-[18px] leading-[54px] md:leading-[60px]">
                    QUALIDADE <br /> GARANTIDA
                </h3>

                <p className="mt-8 mb-10 px-6 md:px-0 text-sm md:text-base text-white">
                    Tratamos cada projeto com sua devida importância e só finalizamos <br /> o projeto quando
                    o cliente está satisfeito.
                </p>

                <button className="font-bold leading-6 tracking-wider text-buttonText bg-gradient-to-t from-indigo-400 to-blue-600 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
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
    )
}