import { products } from "@/data/products";
import { ProductCard } from "./productCard";
import { GiHoneycomb } from "react-icons/gi";

export function Products() {
    return (
        <section id="products" className="max-w-5xl mx-auto px-4 py-16">
            <div className="flex items-center w-full">
                <span className="flex flex-row items-center justify-center w-full gap-2">
                    <GiHoneycomb className="text-lg"/> 
                    Calidad artesanal
                </span> 
            </div>
            
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-comb/20"></div>
                    <h2 className="font-quicksand text-lg sm:text-3xl font-bold text-comb text-center whitespace-nowrap">
                    Nuestros Productos
                    </h2>
                <div className="h-px flex-1 bg-comb/20"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => ( 
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

        </section>
    );
}