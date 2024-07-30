import { Github, Instagram, Linkedin } from "lucide-react";

export default function FooterComponent() {
    return (
        <footer className="relative py-24 pb-24 md:pb-16 px-4 md:px-16 lg:px-28 flex flex-col md:flex-row items-center justify-between gap-16">
            <div>
                <a href="#">
                    <img className="w-32" src="./public/logo-vertical-branca-completa-sem-fundo.png" alt="Logo AMM Web Developer" />
                </a>
            </div>
            <div className="flex flex-col items-start gap-4">
                <h5 className="text-2xl font-bold">
                    Entre em Contato
                </h5>
                <div className="contact-list flex flex-col md:items-start items-center gap-4">
                    <span>(44) 99982-9545</span>
                    <span>alexandremmac@gmail.com</span>
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4">
                <h5 className="text-2xl font-bold">
                    Redes Sociais
                </h5>
                <div className="social-media-list flex items-center justify-center gap-6">
                    <a href="https://www.linkedin.com/in/alexandre-martins-maciel-78379b152/" target="_blank">
                        <Linkedin className="text-contentText size-7" />
                    </a>
                    <a href="https://github.com/Alexandremma" target="_blank">
                        <Github className="text-contentText size-7" />
                    </a>
                    <a href="https://www.instagram.com/alexandremm3/" target="_blank">
                        <Instagram className="text-contentText size-7" />
                    </a>
                </div>
            </div>
        </footer>
    )
}