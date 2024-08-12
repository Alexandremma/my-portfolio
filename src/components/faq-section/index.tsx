import AccordionComponent from "../accordion";

export default function FaqSectionComponent() {
    return (
        <section id="faq-section" className="relative py-24 md:py-32 px-4 md:px-20 space-y-12 md:space-y-20">
            <h3 className="text-[40px] md:text-5xl text-primaryText text-center font-semibold tracking-wider">
                Perguntas Frequentes
            </h3>

            <div className="max-w-screen-2xl mx-auto questions-list md:px-20 space-y-4">
                <AccordionComponent question="Quanto tempo leva para desenvolver meu site?" answer="O tempo necessário para construir um site pode variar dependendo da complexidade do projeto e das funcionalidades desejadas. Em geral, um site básico pode levar de 4 a 6 semanas, enquanto projetos mais complexos podem levar de 8 a 12 semanas ou mais. Durante a fase inicial, discutiremos seus requisitos específicos e forneceremos um cronograma detalhado." />

                <AccordionComponent question="Quanto custa construir um site?" answer="O custo de construir um site depende de vários fatores, incluindo o número de páginas, as funcionalidades desejadas, o design personalizado e outras necessidades específicas. Oferecemos pacotes de preços variados para atender diferentes orçamentos. Entre em contato conosco para uma consulta gratuita e um orçamento personalizado." />

                <AccordionComponent question="O site será responsivo e funcionará em dispositivos móveis?" answer="Sim, todos os sites que construímos são responsivos e otimizados para dispositivos móveis. Garantimos que seu site funcione perfeitamente em computadores, tablets e smartphones, proporcionando uma experiência de usuário consistente e agradável em todas as plataformas." />

                <AccordionComponent question="Você oferece serviços de SEO (Otimização para Motores de Busca)?" answer="Sim, oferecemos serviços de SEO para garantir que seu site seja facilmente encontrado nos motores de busca, como o Google. Implementamos práticas recomendadas de SEO on-page durante o desenvolvimento do site e também oferecemos serviços de SEO contínuos para melhorar seu ranking e atrair mais visitantes." />

                <AccordionComponent question="Vocês oferecem suporte e manutenção após a conclusão do site?" answer="Sim, oferecemos serviços de suporte contínuo e manutenção para garantir que seu site permaneça atualizado, seguro e funcionando perfeitamente. Nossos planos de suporte podem incluir atualizações de conteúdo, correções de bugs, atualizações de segurança e muito mais." />

                <AccordionComponent question="O que preciso fornecer antes de iniciar o projeto de construção do site?" answer="Antes de iniciar o projeto, precisaremos de algumas informações básicas, como detalhes sobre sua empresa, objetivos do site, conteúdo (textos, imagens, vídeos), preferências de design e funcionalidades desejadas. Trabalharemos em conjunto para coletar todas as informações necessárias durante a fase de planejamento." />

                <AccordionComponent question="Como é a comunicação ao longo da criação do site?" answer="A comunicação é uma parte fundamental do nosso processo de desenvolvimento de sites. Desde o início do projeto, mantemos um diálogo aberto e transparente com você para garantir que todas as suas necessidades e expectativas sejam atendidas." />

                <AccordionComponent question="O que acontece se eu precisar de funcionalidades adicionais no futuro?" answer="Entendemos que suas necessidades podem evoluir com o tempo. Oferecemos serviços de expansão e adição de funcionalidades para seu site. Basta nos informar sobre suas novas necessidades, e trabalharemos com você para implementar as mudanças desejadas de forma eficiente e eficaz." />
            </div>
        </section>
    )
}