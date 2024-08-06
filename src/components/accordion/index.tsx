import { ChevronDown, CircleHelp } from "lucide-react"
import { useState } from "react"

interface AccordionComponentProps {
    question: string,
    answer: string,
}

export default function AccordionComponent(props: AccordionComponentProps) {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false)

    const openCloseAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen)
    }
    
    return (
        <div className="question-item bg-accordionBg rounded-2xl shadow-shape2">
            <button onClick={openCloseAccordion} className={`w-full py-4 px-4 md:px-8 flex items-center gap-4 md:gap-5 transition-all duration-300`}>
                <CircleHelp className="text-accordionText size-8" />
                <span className="flex-1 md:text-lg text-left text-accordionText font-bold">
                    {props.question}
                </span>
                <ChevronDown className="size-8 text-accordionText font-bold" />
            </button>

            <div className={`overflow-hidden px-4 md:px-8 grid transition-all duration-300 ease-in-out ${isAccordionOpen ? 'grid-rows-[1fr] opacity-100 pt-4 md:pt-4 pb-4 border-t border-accordionBorder' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden pl-2 text-sm md:text-base text-left">
                    {props.answer}
                </div>
            </div>
        </div>
    )
}