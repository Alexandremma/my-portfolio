import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import LogoImage from '../../../public/logo-horizontal-branca-completa-sem-fundo.png'; 

export default function HeaderComponent() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    const changeBackground = () => {
        if (window.scrollY <= 80) {
            setIsNavbarScrolled(false);
        } else {
            setIsNavbarScrolled(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    })

    return (
        <header className={`w-full max-w-screen-2xl mx-auto fixed top-0 left-0 z-20 px-8 md:px-12 lg:px-20 py-5 flex items-center justify-between transition duration-700 ${isNavbarScrolled ? 'bg-scrollTransparent' : 'bg-bgTransparent'}`}>
            <div className="logo-container">
                <a href="#">
                    <img className="w-32 md:w-36" src={LogoImage} alt="Logo AMM Web Developer" />
                </a>
            </div>

            <div onClick={openMobileMenu} className="lg:hidden">
                <Menu className="size-8" />
            </div>

            <div className={`lg:hidden absolute ${isMobileMenuOpen ? 'right-0' : 'right-[-1000px]'} top-0 w-full pt-10 pb-12 transition-all duration-500 ease-in bg-gradient-to-b from-indigo-500 to-blue-600`}>
                <nav className="">
                    <ul className="flex flex-col items-center gap-8">
                        <li onClick={closeMobileMenu} className="py-2 text-center text-2xl text-menuText font-semibold transition hover:text-menuHighlight">
                            <a href="#initial-banner-section">Início</a>
                        </li>
                        
                        <li onClick={closeMobileMenu} className="py-2 text-center text-2xl text-menuText font-semibold transition hover:text-menuHighlight">
                            <a href="#services-section">Serviços</a>
                        </li>
                        
                        <li onClick={closeMobileMenu} className="py-2 text-center text-2xl text-menuText font-semibold transition hover:text-menuHighlight">
                            <a href="#projects-section">Projetos</a>
                        </li>
                        
                        <li onClick={closeMobileMenu} className="py-2 text-center text-2xl text-menuText font-semibold transition hover:text-menuHighlight">
                            <a href="#contact-section">Contato</a>
                        </li>
                        
                        <li onClick={closeMobileMenu} className="py-2 text-center text-2xl text-menuText font-semibold transition hover:text-menuHighlight">
                            <a href="#faq-section">Faq</a>
                        </li>

                        <a href="https://api.whatsapp.com/send/?phone=5544999829545" target="_blank" className="px-10 pt-[18px] pb-4 leading-none text-lg text-buttonText font-bold bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                            Entrar em Contato
                        </a>
                    </ul>
                </nav>

                <X onClick={closeMobileMenu} className="absolute top-7 right-8 md:right-12 size-8 text-menuText" />
            </div>

            <div className="hidden lg:flex items-center gap-20">
                <nav className="">
                    <ul className="flex items-center gap-8">
                        <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                            <a href="#initial-banner-section">Início</a>
                        </li>
                        <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                            <a href="#services-section">Serviços</a>
                        </li>
                        <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                            <a href="#projects-section">Projetos</a>
                        </li>
                        <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                            <a href="#contact-section">Contato</a>
                        </li>
                        <li className="text-menuText font-semibold transition hover:text-menuHighlight">
                            <a href="#faq-section">Faq</a>
                        </li>
                    </ul>
                </nav>

                <a href="https://web.whatsapp.com/send?phone=5544999829545" target="_blank" className="px-10 pt-3 pb-2.5 leading-none text-sm text-buttonText font-bold bg-gradient-to-t from-indigo-500 to-blue-400 rounded-full shadow-shape3 transition hover:bg-buttonHighlight">
                    Entrar em Contato
                </a>
            </div>
        </header>
    )
}