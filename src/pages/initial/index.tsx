export default function InitialPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <header className="flex items-center justify-between px-10 py-6">
                <div>
                    <img className="w-32" src="../../../public/logo-horizontal-branca-completa-sem-fundo.png" alt="Logo AMM Web Developer" />
                </div>
                <div className="flex items-center gap-20">
                    <nav>
                        <ul className="flex items-center gap-6">
                            <li className="text-sm font-bold">
                                <a href="#">Início</a>
                            </li>
                            <li className="text-sm font-bold">
                                <a href="#">Sobre</a>
                            </li>
                            <li className="text-sm font-bold">
                                <a href="#">Serviços</a>
                            </li>
                            <li className="text-sm font-bold">
                                <a href="#">Portfólio</a>
                            </li>
                            <li className="text-sm font-bold">
                                <a href="#">Contato</a>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <button className="px-8 py-2 text-sm font-bold bg-green-600 rounded-full">Entrar em Contato</button>
                    </div>
                </div>
            </header>
            
            <main>
                <section >

                </section>
            </main>

            <footer>
                
            </footer>
        </div>
    )
}