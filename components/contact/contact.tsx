"use client";
import { FaLocationDot } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { Redes } from "./infoCard";

const Map = dynamic(() => import("./map"), {
    ssr: false,
    loading: () => (
        <div className="h-96 w-full rounded-2xl bg-gray-100 animate-pulse flex items-center justify-center text-gray-400">
            Cargando mapa...
        </div>
    ),
});
export function Contact() {
    return (
        <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
            <div className="flex items-center w-full">
                <span className="flex flex-row items-center justify-center w-full gap-2">
                    <FaLocationDot className="text-lg" />
                    Desde nuestra colmena
                </span>
            </div>

            <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-comb/20"></div>
                <h2 className="font-quicksand text-lg sm:text-3xl font-bold text-comb text-center whitespace-nowrap">
                    Contáctanos
                </h2>
                <div className="h-px flex-1 bg-comb/20"></div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                <div>
                     <Redes />
                </div>
                
                <div className="min-h-96">
                    <Map />
                </div>
            </div>
        </section>
    );
}