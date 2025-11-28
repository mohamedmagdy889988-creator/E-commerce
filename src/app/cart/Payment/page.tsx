'use client';

import { getUserCart } from '@/_service/cart.service';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CartContext } from '@/context/cart.context';
import { Label } from '@radix-ui/react-label';
import { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { createCashOrder, createCheckoutSession } from './cash.action';
import { useRouter } from "next/navigation";


export default function Payment() {

    const cartContext = useContext(CartContext);
    if (!cartContext) throw new Error("CartContext is not provided");
    const { updateCartCount } = cartContext;


    const cityinput = useRef<HTMLInputElement>(null);
    const phoneinput = useRef<HTMLInputElement>(null);
    const detailsinput = useRef<HTMLInputElement>(null);
    const [cartId, setCartId] = useState<null | string>(null);
    const router = useRouter();

    async function handleGettingUserCart() {
        const res = await getUserCart();
        setCartId(res.cartId);

    }

    useEffect(function () {
        handleGettingUserCart();
    }, []);

    async function makeCashOrder() {
        const address = {

            city: cityinput.current?.value || "",
            phone: phoneinput.current?.value || "",
            details: detailsinput.current?.value || "",
        }
        const isSuccessed = await createCashOrder(cartId || "", address)
        if (isSuccessed) {
            toast.success("Order created successfuly");
            updateCartCount(0);
            router.push("/allorders");
        }

        else {
            toast.error('Error occurred while creating order');
        }
    }

    async function makeonlineOrder() {
        const address = {

            city: cityinput.current?.value || "",
            phone: phoneinput.current?.value || "",
            details: detailsinput.current?.value || "",
        }

        const res = await createCheckoutSession(cartId || '', address);

        if (res == false) {
            toast.error('Error occurred while creating order');
        }
        else {
            window.open(res, '_self');
        }
    }

    return (

        <div className=' w-1/2 mx-auto my-10 flex flex-col gap-5 '>
            <div className=''>
                <Label>City</Label>
                <Input ref={cityinput} />
            </div>


            <div className=''>
                <Label>Phone</Label>
                <Input ref={phoneinput} />
            </div>

            <div className=''>
                <Label>Details</Label>
                <Input ref={detailsinput} />
            </div>
            <div className='flex gap-3'>
                <Button onClick={makeCashOrder} className='cursor-pointer mt-3'>Make Cash order</Button>
                <Button onClick={makeonlineOrder} className='cursor-pointer mt-3'>Make online order</Button>

            </div>
        </div>
    )
}
