import { number } from "zod";

export interface Product {
    id: String;
    name: String;
    description: String;
    price: number;
    image: String;
}