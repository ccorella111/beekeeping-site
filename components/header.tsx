import { Button } from "./ui/button";
import { createWhatsappLink } from "@/lib/whatsapp";
import { MobileMenu } from "./mobileMenu";
import { sections } from "@/lib/navegation";
import Image from "next/image";

export function Header(){
    return(
        <header className="sticky top-0 bg-test/95 border-b border-comb/15 z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">

                <div className="flex flex-row justify-between items-center w-full md:w-auto">
                    <Image src="/images/LogoDV.svg" alt="Logo" width={90} height={90} />
                    
                </div>

                <nav className="hidden md:flex items-center gap-20">
                    {sections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} className="text-comb hover:text-honey transition lg:text-xl">
                            {section.name}
                        </a>
                    ))}
                </nav>
                
                <div className="flex items/center gap/3">
                    <div className="hidden sm:block">
                        <Button href={createWhatsappLink()}>Escribir por Whatsapp</Button>
                    </div>
                </div>

                <MobileMenu />

            </div>
        </header>
    )
}