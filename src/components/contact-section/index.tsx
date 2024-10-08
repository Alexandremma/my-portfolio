import FormComponent from "../form";

import ContatoImage from "../../assets/images/elements/Contato-Elemento.svg";

export default function ContatctSectionComponent() {
    return (
        <section id="contact-section" className="pt-16 pb-24 px-4 md:px-20 space-y-20 bg-gradient-to-t from-indigo-500 to-blue-600">
            <div className="max-w-screen-2xl mx-auto py-10 px-4 lg:px-24 flex items-center justify-center lg:gap-16">
                <div className="">
                    <img className="hidden lg:block" src={ContatoImage} alt="Imagem de ícones de comunicação online" />
                </div>

                <FormComponent />
            </div>
        </section>
    )
}