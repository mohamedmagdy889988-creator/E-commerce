"use server";

import { getMyUserToken } from "@/utils/utils";
import { revalidatePath, revalidateTag } from "next/cache";

export async function addProductToCart(productId: string) {
  const token = await getMyUserToken();

  if (token) {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
      method: "POST",
      body: JSON.stringify({ productId }),
      headers: {

        "Content-Type": "application/json",
        token: token as string
      }
    });
    const FinalRes = await res.json();
    console.log("FinalRes", FinalRes);

    if (FinalRes.status === "success")
      revalidateTag("getUserCart");
    return FinalRes.numOfCartItems;
  }
  else {
    return false;
  }
}
export async function removeProductFromCart(id: string) {
  const token = await getMyUserToken();

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
      token: token as string
    }
  });
  const Final = await res.json();
  console.log("Remove Final Res", Final);
  if (Final.status === "success") {
    revalidatePath("/cart");
    return Final.numOfCartItems;
  }
  else {
    return null;
  }


}

export async function ChangeCount(id: string, count: number) {
  const token = await getMyUserToken();

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
    method: "put",
    headers: {

      token: token as string,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ count })
  });
  const Final = await res.json();
  console.log("Change Final Res", Final);
  if (Final.status === "success") {
    revalidatePath("/cart");
    return Final.numOfCartItems;
  }
  else {
    return null;
  }

}

export async function clearCart(): Promise<number | null> {
 
    const token = await getMyUserToken();

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
    });

    const Final = await res.json();
    console.log("Clear Cart Final Res", Final);

    if (Final.message === "success") {
      revalidatePath("/cart");

      return Final.numOfCartItems;
    } else {
      return null;
    }
  
}
