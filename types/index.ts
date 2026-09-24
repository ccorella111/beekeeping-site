import { number } from "zod";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}