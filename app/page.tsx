import { Products } from "@/components/products";
import { AboutUs } from "@/components/aboutUs";

export default function Home() {
  return (
    <>
      <Products/>

      <AboutUs/>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <p className="text-comb/40">Sección Contacto (en construcción)</p>
      </section>

    </>
  );
}
