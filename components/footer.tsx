import { createWhatsappLink } from "@/lib/whatsapp";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

export function Footer(){
    return(
        <footer className="bg-comb text-wax mt-12">
            <div className="md:max-w-5xl md:mx-auto md:px-4 md:py-8 md:flex md:flex-row md:items-center md:justify-between md:text-sm grid grid-cols-2 px-2 py-6 text-xs gap-2 place-items-center">
                
                <p className="font-quicksand">Apiario el Dulce Vuelo</p>

                <p className="text-wax/80 text-sm">api.dulcevuelo@gmail.com</p>
                
                <div className="flex gap-6 text-2xl">
                    <a 
                    href={createWhatsappLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Escribenos por Whatsapp"
                    className="hover:text-honey transition">
                        <FaWhatsapp />
                    </a>

                    <a 
                    href="https://www.facebook.com/share/1QWpEQ4f6o/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visita nuestra página de Facebook"
                    className="hover:text-honey transition">
                        <FaFacebook />
                    </a>

                </div>

                <p className="text-wax/60 text-xs">
                    © {new Date().getFullYear()} Apiario el Dulce Vuelo
                </p>
            </div>

        </footer>
    );
}