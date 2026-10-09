import { Products } from "@/components/products";
import { AboutUs } from "@/components/aboutUs";
import { Hero } from "@/components/hero";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Hero/>

      <Products/>

      <AboutUs/>
      
      <Contact/>

    </>
  );
}
