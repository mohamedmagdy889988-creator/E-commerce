'use server';

import { getMyUserToken } from '@/utils/utils'
import { revalidatePath } from 'next/cache';

export type ShippingAddresstype = {
    details: string,
    phone: string,
    city: string
}


export async function createCashOrder(Cartid: string, shippingAddress: ShippingAddresstype) {
    const token = await getMyUserToken()
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${Cartid}`, {

        method: 'POST',
        body: JSON.stringify({ shippingAddress }),
        headers: {
            'Content-Type': 'application/json',
            token: token as string
        }
    });
    const final = await res.json()
    console.log("Final  create order", final);
    if (final.status === "success") {
        revalidatePath('/cart');
        return true;
    }
    else {
        return false;
    }
};

export async function createCheckoutSession(Cartid: string, shippingAddress: ShippingAddresstype) {

    const token = await getMyUserToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${Cartid}?url=http://localhost:3000`
        , {
            method: "post",
            body: JSON.stringify({ shippingAddress }),
            headers: {
                'Content-Type': 'application/json',
                token: token as string
            }
        });
    const final = await res.json();
    console.log('Final create checkout', final);
    if (final.status === "success") {
        return final.session.url;
    }
    else {
        return false;
    }

};