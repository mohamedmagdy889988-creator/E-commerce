'use client';
import { Button } from '@/components/ui/button';
import { CartContext } from '@/context/cart.context';
import { useContext } from 'react';
import { toast } from 'sonner';
import { ChangeCount } from './cart.action';

export default function ChangeCountBtn({ isIncrement = false, id, newCount, className }:
    {
        newCount: number;
        isIncrement?: boolean;
        id: string
        className?: string

    }) {

    const { updateCartCount } = useContext(CartContext);
    async function handleChangeCount() {
        const output = await ChangeCount(id, newCount);
        if (output === null) {
            toast.error("Failed to change count");
        } else {
            toast.success(`product Count is : ${newCount}`);
            updateCartCount(output);
        }
    }

    return (
        <Button
            onClick={handleChangeCount}
            disabled={newCount === 0}
            variant="outline"
            className='bg-black text-white '

        >
            {isIncrement ? "+" : "-"}
        </Button>
    )
}
