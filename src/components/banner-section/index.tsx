import InitialBannerImage from '../../assets/images/banners/web-options.svg';

export default function BannerSectionComponent() {
    return (
        <section id="initial-banner-section" className="relative w-full h-screen md:h-[640px] lg:h-[720px] flex flex-col-reverse md:flex-row items-center justify-end md:justify-center pt-16 md:pt-24 px-8 md:px-16 lg:px-28 bg-gradient-to-t from-indigo-500 to-blue-600">
            <div className="relative z-10">
                <h2 className="md:w-[640px] text-[32px] md:text-4xl lg:text-6xl text-bannerText font-bold md:leading-snug leading-normal tracking-wider">
                    Desenvolvemos soluções <br className="hidden md:block lg:hidden" /> para o seu negócio.
                </h2>

                <h5 className="mt-4 mb-10 md:mt-8 md:mb-10 text-lg md:text-xl lg:text-2xl text-bannerText font-semibold tracking-wider">
                    Soluções web personalizadas.
                </h5>
                
                <a href="#projects-section" className="px-10 py-3 md:py-4 font-bold leading-6 tracking-wider text-base md:text-lg text-buttonText bg-gradient-to-t from-indigo-400 to-blue-600 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                    Saiba Mais
                </a>
            </div>

            <div className="">
                <img className="md:block py-4 md:pt-8 md:pb-0" src={InitialBannerImage} alt="" />
            </div>
        </section>
    )
}