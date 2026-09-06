import { Button } from "./ui/button";
import { createWhatsappLink } from "@/lib/whatsapp";

const sections = [
    {id: "products", name: "Productos"},
    {id: "aboutUs", name: "Nosotros"},
    {id: "contact", name: "Contacto"},
];

export function Header(){
    return(
        <header className="sticky top-0 bg-wax border-b border-comb/15 z-50 ">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                <span className="font-quicksand text-2xl text-comb">Apiario el Dulce Vuelo</span>

                <nav className="hidden md:flex items-center gap-12">
                    {sections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} className="text-comb hover:text-honey transition">
                            {section.name}
                        </a>
                    ))}
                </nav>

                <Button href={createWhatsappLink()}>Escribir por Whatsapp</Button>
            </div>
        </header>
    )
}