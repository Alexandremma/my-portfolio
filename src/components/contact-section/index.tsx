import FormComponent from "../form";

export default function ContatctSectionComponent() {
    return (
        <section id="contact-section" className="pt-16 pb-32 px-4 md:px-20 space-y-20 bg-gradient-to-t from-indigo-500 to-blue-600">
            <div className="py-10 px-4 flex items-center justify-center lg:gap-16">
                <div className="">
                    <img className="hidden lg:block" src="./src/assets/images/elements/Contato-Elemento.svg" alt="" />
                </div>

                <FormComponent />
            </div>
        </section>
    )
}