"use server";
import { typeCartResponse } from "@/types/cart.types";
import { getMyUserToken } from "@/utils/utils";


export async function getUserCart(): Promise<typeCartResponse> {


    const token = await getMyUserToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: {
            token: token as string
        },
        cache: 'force-cache',
        next: { tags: ['getUserCart'] }

    });
    const FinalRes = await res.json();
    console.log("finalfinal", FinalRes);

    const { numOfCartItems, data: { products, totalCartPrice }, cartId } = FinalRes;


    return { numOfCartItems, products, totalCartPrice, cartId };

}