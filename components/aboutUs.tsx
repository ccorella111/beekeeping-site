import Image from "next/image";
import { GiHoneyJar } from "react-icons/gi";

export function AboutUs(){
    return (
        <section id="aboutUs" className="max-w-5xl mx-auto px-4 py-16 h-3xl">

            <div className="flex items-center w-full">
                <span className="flex flex-row items-center justify-center w-full gap-2">
                    <GiHoneyJar className="text-lg"/> 
                    Cosecha Familiar
                </span> 
            </div>
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-comb/20"></div>
                    <h2 className="font-quicksand text-lg sm:text-3xl font-bold text-comb text-center whitespace-nowrap">
                    Conoce más de nosotros
                    </h2>
                <div className="h-px flex-1 bg-comb/20"></div>
            </div>

            <div className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="relative aspect-[4/3] rounded-large overflow-hidden shadow-xl">
                        <Image
                            src="/images/apiario.jpg"
                            alt="El Apiario el Dulce Vuelo"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-quicksand text-3xl text-comb">Quienes somos</h2>
                        <p className="text-comb/80 lg:text-lg text-justify">Somos un apiario familiar ubicado en La Tabla de Río Cuarto, Alajuela, donde las abejas africanizadas nos enseñan cada día el valor del trabajo en equipo, la paciencia y el respeto por la naturaleza.</p>
                        <p className="text-comb/80 lg:text-lg text-justify">Trabajamos con abejas africanizadas, una subespecie resistente y altamente productiva, adaptada al clima tropical de Costa Rica. De nuestras colmenas obtenemos miel 100% natural, jabones a base de miel y colmenas, todos elaborados con el mismo cuidado y dedicación.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-quicksand text-3xl text-comb">Nuestro objetivo</h2>
                        <p className="text-comb/80 lg:text-lg text-justify">Nuestro compromiso es con la calidad sin aditivos y con el cuidado responsable de las colmenas y su entorno. Cada producto que elaboramos, desde la miel hasta los jabones, nace de un proceso artesanal que respeta el ritmo natural de la colmena.</p>
                        <p className="text-comb/80 lg:text-lg text-justify">Buscamos que cada frasco que llega a tus manos refleje un trabajo honesto y cercano. Por eso también ofrecemos apiterapia para tratar diversas afecciones y tours al apiario, donde puedes conocer de primera mano cómo se produce todo lo que te ofrecemos.</p>
                    </div>
                    
                    <div className="relative aspect-[4/3] rounded-large overflow-hidden shadow-xl">
                        <Image
                            src="/images/proceso.jpg"
                            alt="Proceso de recolecta"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}