import HeaderComponent from "../../components/header";
import BannerSectionComponent from "../../components/banner-section";
import ServiceBannerComponent from "../../components/service-section";
import QualitySectionComponent from "../../components/quality-section";
import ProjectsSectionComponent from "../../components/projects-section";
import ContatctSectionComponent from "../../components/contact-section";
import FaqSectionComponent from "../../components/faq-section";
import FooterComponent from "../../components/footer";

import BgFooter from '../../assets/images/banners/Background.png';
import { useEffect, useState } from "react";

export default function InitialPage() {
    const [isMobile, setIsMobile] = useState(false);

    const checkWindowSize = () => {
        let windowWidth: number | undefined = 0;

        if (typeof window !== 'undefined') {
            windowWidth = window.innerWidth;
        }

        if (windowWidth <= 600) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        checkWindowSize();
    }, [isMobile]);

    if (typeof window !== 'undefined') {
        window.addEventListener("resize", checkWindowSize);
    }

    return (
        <div className="max-w-screen-2xl mx-auto w-full">
            <HeaderComponent />
            
            <main id="main" className="main">
                <BannerSectionComponent />

                <ServiceBannerComponent />

                <QualitySectionComponent />

                <ProjectsSectionComponent />

                <ContatctSectionComponent />
            </main>

            <div className="relative">
                <img src={BgFooter} alt="Imagem de um horizonte com montanhas" className="h-full absolute top-0 right-0 left-0 bottom-0" />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-indigo-500 to-blue-600 opacity-90"></div>

                <FaqSectionComponent />

                <FooterComponent />
            </div>

            <a href="https://api.whatsapp.com/send/?phone=5544999829545" target="_blank" className="md:hidden fixed right-4 bottom-4 p-3 rounded-full bg-whatsappBg">
                <img className="w-10" src="/whatsapp-05.png" alt="Logo do WhatsApp" />
            </a>
            
            <a href="https://web.whatsapp.com/send?phone=5544999829545" target="_blank" className="hidden md:block fixed right-4 bottom-4 p-3 rounded-full bg-whatsappBg">
                <img className="w-10" src="/whatsapp-05.png" alt="Logo do WhatsApp" />
            </a>
        </div>
    )
}