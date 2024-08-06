import { Mail, MapPin, Smartphone, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

export default function FormComponent() {
    const [dataFormState, setDataFormState] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    })

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        
        setDataFormState({ ...dataFormState, [event.target.id]: value  });
    }

    const onTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let value = event.target.value;
        
        setDataFormState({ ...dataFormState, [event.target.id]: value  });
    }

    const sendForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('dataFormState', dataFormState);
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "efc0e2d2-1eb6-4a01-a780-9ffbea68ad3c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            console.log('success', data);
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
        }
    }

    return (
        <form onSubmit={sendForm} className="lg:w-2/3 space-y-10 md:space-y-14 bg-transparent md:bg-formBg py-12 md:py-20 px-0 md:px-10 md:rounded-2xl">
            <div className="space-y-4 md:space-y-8">
                <h3 className="relative text-[40px] md:text-5xl text-white text-center font-semibold tracking-wider">
                    Entrar Em Contato
                </h3>

                <p className="text-sm md:text-base text-center">
                    Mande uma mensagem para nós e entraremos em contato com você para conversarmos sobre o seu projeto.
                </p>
            </div>

            <div className="space-y-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="px-4 flex items-center gap-3 flex-1 bg-inputBg rounded-lg border border-white">
                        <label htmlFor="name">
                            <User className="size-5 text-inputIconBg" />
                        </label>
                        <input id="name" type="text" name="name" required placeholder="Digite seu nome" className="w-full h-11 bg-transparent text-lg outline-none placeholder-inputPlaceholderText" onChange={onInputChange} />
                    </div>
                    <div className="px-4 flex items-center gap-3 flex-1 bg-inputBg rounded-lg border border-white">
                        <label htmlFor="email">
                            <Mail className="size-5 text-inputIconBg" />
                        </label>
                        <input id="email" type="email" name="email" required placeholder="Digite seu e-mail" className="w-full h-11 bg-transparent text-lg outline-none placeholder-inputPlaceholderText" onChange={onInputChange} />
                    </div>
                </div>
                
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="px-4 flex items-center gap-3 flex-1 bg-inputBg rounded-lg border border-white">
                        <label htmlFor="phone">
                            <Smartphone className="size-5 text-inputIconBg" />
                        </label>
                        <input id="phone" type="text" name="phone" required placeholder="Digite seu celular" className="w-full h-11 bg-transparent text-lg outline-none placeholder-inputPlaceholderText" onChange={onInputChange} />
                    </div>
                    <div className="px-4 flex items-center gap-3 flex-1 bg-inputBg rounded-lg border border-white">
                        <label htmlFor="city">
                            <MapPin className="size-5 text-inputIconBg" />
                        </label>
                        <input id="city" type="text" name="city" required placeholder="Digite sua cidade" className="w-full h-11 bg-transparent text-lg outline-none placeholder-inputPlaceholderText" onChange={onInputChange} />
                    </div>
                </div>
                
                <div className="flex items-center gap-8">
                    <textarea id="message" name="message" required placeholder="Digite sua mensagem" className="w-full p-4 rounded-lg border border-white bg-inputBg text-lg outline-none placeholder-inputPlaceholderText" onChange={onTextAreaChange}></textarea>
                </div>

                <div className="text-right">
                    <button type="submit" className="w-full md:w-auto py-3 md:py-2 md:px-16 text-lg font-bold bg-gradient-to-t from-indigo-500 to-blue-400 rounded-lg shadow-shape3 transition hover:bg-buttonFormHighlight">
                        Enviar
                    </button>
                </div>
            </div>
        </form>
    )
}