import { Menu } from "lucide-react";

export default function OtherPage() {
    return (
        <div className="h-screen bg-blue-300">
            <header className="bg-red-400 fixed top-0 left-0 right-0 z-10 py-4 px-8 md:py-5 md:px-20 flex items-center justify-between bg-bgTransparent">
                <div className="logo-container">
                    <a href="#">
                        <img className="w-24 md:w-32" src="./public/logo-horizontal-branca-completa-sem-fundo.png" alt="Logo AMM Web Developer" />
                    </a>
                </div>

                <div onClick={() => console.log('oi')} className="md:hidden">
                    <Menu className="size-8" />
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <nav className="">
                        <ul className="flex items-center gap-8 md:gap-4">
                            <li className="lg:text-base text-sm text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#initial-banner-section">Início</a>
                            </li>
                            <li className="lg:text-base text-sm text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#services-section">Serviços</a>
                            </li>
                            <li className="lg:text-base text-sm text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#projects-section">Projetos</a>
                            </li>
                            <li className="lg:text-base text-sm text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#contact-section">Contato</a>
                            </li>
                            <li className="lg:text-base text-sm text-menuText font-semibold transition hover:text-menuHighlight">
                                <a href="#faq-section">Faq</a>
                            </li>
                        </ul>
                    </nav>

                    <button className="lg:text-base text-sm px-10 pt-3.5 pb-3 leading-none text-buttonText font-bold bg-buttonBg rounded-full transition hover:bg-buttonHighlight">
                        Entrar em Contato
                    </button>
                </div>
            </header>
        </div>
    )
}