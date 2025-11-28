// export async function getUserOrders(token?: string) {
//   const res = await fetch("https://ecommerce.routemisr.com/api/v1/orders/user", {
//     headers: {
//       token: token ?? (localStorage.getItem("token") ?? "")
//     }
//   });

//   if (!res.ok) throw new Error("Failed to fetch user orders");

//   return res.json(); // متوقع الشكل { data: [...] }
// }

import { getMyUserToken } from "@/utils/utils"

export async function getAllUserOrders(id: string) {
    try {
        const token = await getMyUserToken()
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
            {
                cache: 'no-store',
                headers: {
                    token: token as string
                }
            }
        )
        const final = await res.json()
        console.log(final);
        return final
    } catch (error) {
        console.log(error);
    }
}