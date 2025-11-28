"use client";
import { addProductToCart } from '@/app/cart/cart.action';
import { Button } from '@/components/ui/button';
import { CartContext } from '@/context/cart.context';
import { useContext } from 'react';
import { toast } from 'sonner';

export default function AddproductBtn({ id }: { id: string }) {
    const { updateCartCount } = useContext(CartContext);

    async function handleAddToCart() {
        console.log("adding");

        const isAddedSuccessfuly = await addProductToCart(id);
        if (isAddedSuccessfuly) {
            toast.success("Product Added Sccessfuly", );
            updateCartCount(isAddedSuccessfuly);
        } 

        else {
            toast.error("Error occurred while adding", );
        }
    }

    return (

        <Button onClick={handleAddToCart} className='w-full cursor-pointer my-4'>Add to cart</Button>
    )
}
