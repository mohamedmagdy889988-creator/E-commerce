import { ProductType } from "@/app/_interfaces/products";

export async function getAllProducts(): Promise<ProductType[] | null> {
  try {

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products", { cache: "force-cache" });
    const finalRes = await res.json();
    return finalRes.data;
  }

  catch (error) {
    console.log("error", error);
    return null;
  }
}

export async function getSpecifiedProduct(id: string): Promise<ProductType | null> {
  try {


    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`, { cache: "force-cache" });
    const finalRes = await res.json();


    return finalRes.data;
  }

  catch (error) {
    console.log("error", error);
    return null;
  }
} 