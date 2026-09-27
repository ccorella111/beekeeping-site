"use client";

import {
    FaEnvelope,
    FaWhatsapp,
    FaFacebook,
} from "react-icons/fa";

export function Redes() {
    return (
        <div className="rounded-2xl border border-comb/20 p-6">
            <div className="mb-8">
                <h3 className="font-quicksand text-2xl font-bold text-comb mb-3">
                    Ponte en contacto
                </h3>

                <p className="text-gray-600 leading-relaxed">
                    En Dulce Vuelo nos dedicamos a la apicultura y a compartir
                    el valor de las abejas y sus productos. Si deseas conocer
                    más sobre nuestro trabajo, nuestros productos o tienes
                    alguna consulta, estaremos encantados de escucharte.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <a href="mailto:api.dulcevuelo@gmail.com" className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-comb hover:bg-comb/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-comb/10">
                        <FaEnvelope className="text-xl text-comb" />
                    </div>

                    <div>
                        <p className="font-semibold">
                            Correo electrónico
                        </p>
                        <p className="text-sm text-gray-500">
                            api.dulcevuelo@gmail.com
                        </p>
                    </div>
                </a>

                <a
                    href="https://wa.me/50672925888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-comb hover:bg-comb/5"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-comb/10">
                        <FaWhatsapp className="text-xl text-comb" />
                    </div>

                    <div>
                        <p className="font-semibold">
                            wAtsApp
                        </p>
                        <p className="text-sm text-gray-500">
                            contáctanos por WhatsApp
                        </p>
                    </div>
                </a>

                <a
                    href="https://www.facebook.com/profile.php?id=61554799323460&rdid=IMmErsYwN3urSemH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1QWpEQ4f6o%2F#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-comb hover:bg-comb/5"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-comb/10">
                        <FaFacebook className="text-xl text-comb" />
                    </div>

                    <div>
                        <p className="font-semibold">
                            Facebook
                        </p>
                        <p className="text-sm text-gray-500">
                            Síguenos en Facebook
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}