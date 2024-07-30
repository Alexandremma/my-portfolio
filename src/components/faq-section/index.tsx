import AccordionComponent from "../accordion";

export default function FaqSectionComponent() {
    return (
        <section id="faq-section" className="relative py-32 px-4 md:px-20 space-y-12 md:space-y-20">
            <h3 className="text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider">
                Perguntas Frequentes
            </h3>

            <div className="questions-list md:px-6 space-y-4">
                <AccordionComponent question="Quanto tempo leva para desenvolver meu site?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />

                <AccordionComponent question="Quais as tecnologias utilizadas no desenvolvimento do site?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />

                <AccordionComponent question="Como é a comunicação ao longo da criação do site?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />
                
                <AccordionComponent question="Meu site irá funcionar em celulares e tablets?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />

                <AccordionComponent question="Meu site vai aparecer no Google?" answer="Depende do tamanho do projeto. Se for um projeto de uma página como uma Landing Page, leva aproximadamente 2 semanas. Para finalizar e ter mais uma linha para ver como fica." />
            </div>
        </section>
    )
}