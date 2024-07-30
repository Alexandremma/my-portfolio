import HeaderComponent from "../../components/header";
import BannerSectionComponent from "../../components/banner-section";
import ServiceBannerComponent from "../../components/service-section";
import QualitySectionComponent from "../../components/quality-section";
import ProjectsSectionComponent from "../../components/projects-section";
import ContatctSectionComponent from "../../components/contact-section";
import FaqSectionComponent from "../../components/faq-section";
import FooterComponent from "../../components/footer";

export default function InitialPage() {
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

            <div className="relative bg-banner-image-06 bg-no-repeat bg-cover bg-center bg-fixed">
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-indigo-500 to-blue-600 opacity-90"></div>

                <FaqSectionComponent />

                <FooterComponent />
            </div>

            <a href="https://api.whatsapp.com/send/?phone=5544999829545" target="_blank" className="fixed right-4 bottom-4 p-3 rounded-full bg-whatsappBg">
                <img className="w-10" src="/whatsapp-05.png" alt="Logo do WhatsApp" />
            </a>
        </div>
    )
}