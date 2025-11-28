import { CategoryType } from "@/app/_interfaces/products";


export async function getAllCategories(): Promise<null | CategoryType[]> {
    try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
        const finalRes = await res.json()
        return finalRes.data;
    } catch (error) {
        console.log('error', error);
        return null;

    }
}