import { ProductType } from "@/app/_interfaces/products";


export type typeItems = {
    count: number;
    price: number;
    _id: string;
    product: ProductType;
}

export type typeCartResponse = {
    numOfCartItems: number,
    products: typeItems[],
    totalCartPrice: number
    cartId:string;
};
