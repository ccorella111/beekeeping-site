import Image from "next/image";
import { Product } from "@/types";
import { Button } from "./ui/button";
import { createWhatsappLink } from "@/lib/whatsapp";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const message = `Hola, quiero consultar sobre ${product.description}`;

    return (
        <div className="bg-wax border border-comb/10 rounded-lg overflow-hidden flex flex-col">
            
            <div className="relative aspect-square bg-comb/5">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                />
            </div>

            <div className="p-4 flex flex-col flex-1 gap-2">
                <h3 className="font-quicksand text-lg text-comb">{product.name}</h3>
                <p className="text-sm text-comb/70 flex-1">{product.description}</p>
                <span className="font-medium text-comb">₡{product.price}</span>
                <Button href={createWhatsappLink(message)} variant="secondary">
                    Consultar por Whatsapp
                </Button>
            </div>
        </div>
    )
}