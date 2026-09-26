import Image from "next/image";
import { Button } from "./ui/button";
import { createWhatsappLink } from "@/lib/whatsapp";

export function Hero(){
    return(
        <section className="max-w-full mx-auto">
            <div className="relative aspect-[4/5] md:aspect-[16/9] xl:aspect-[16/8] overflow-hidden">
                <Image 
                src="/images/abejas.jpg"
                alt="Abejas saliendo de la colmena"
                fill
                className="object-cover"
                sizes="100vw"
                />

                <div className="absolute inset-0 bg-comb/50 flex flex-col items-center justify-center text-center px-4 gap-4">
                    <h1 className="font-quicksand text-3xl md:text-5xl text-wax">
                        Apiario el Dulce Vuelo
                    </h1>
                    <p className="text-wax/90 max-w-md">
                        Miel y productos artesanales, directo de nuestras colmenas a tu mesa.
                    </p>
                    
                </div>
            </div>
        </section>
    );
}