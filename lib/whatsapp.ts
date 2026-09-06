export function createWhatsappLink(message?: string){
    const number = 50684839670;
    const text = message ?? "Hola, quiero consultar sobre sus productos.";
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}