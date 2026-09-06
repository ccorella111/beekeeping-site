import { createWhatsappLink } from "@/lib/whatsapp";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

export function Footer(){
    return(
        <footer className="bg-comb text-wax mt-12">
            <div className="max-w-5xl mx-auto px-4 py-8 flex items-center justify-between  text-sm">
                <p className="font-quicksand">Apiario el Dulce Vuelo</p>
                <p>api.dulcevuelo@gmail.com</p>

                <div className="flex gap-8 text-2xl">
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
                <p className="text-wax/60">
                    © {new Date().getFullYear()} Apiario el Dulce Vuelo
                </p>
            </div>
        </footer>
    );
}