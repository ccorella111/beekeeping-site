import { Products } from "@/components/products";

export default function Home() {
  return (
    <>
      <Products/>

      <section id="aboutUs" className="min-h-screen flex items-center justify-center">
        <p className="text-comb/40">Sección Nosotros (en construcción)</p>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <p className="text-comb/40">Sección Contacto (en construcción)</p>
      </section>

    </>
  );
}
