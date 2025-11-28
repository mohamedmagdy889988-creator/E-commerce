"use client";

import { Button } from '@/components/ui/button';
import { CartContext } from '@/context/cart.context';
import { useContext } from 'react';
import { toast } from 'sonner';
import { removeProductFromCart } from './cart.action';

export default function RemoveItemBtn({ id ,className}: { id: string ;  className?: string;
}) {

  const { updateCartCount } = useContext(CartContext);
  async function handleRemoveItemBtn() {
    const output = await removeProductFromCart(id);
    if (output === null) {
      toast.error("Failed to remove item from cart");
    }
    else {
      toast.success("Item removed from cart");
      updateCartCount(output);
    }
  }


  return (
    <Button onClick={handleRemoveItemBtn} 
    variant={'destructive'}
  
    className='cursor-pointer mt-1 w-full {className}'
    >
      Remove</Button>
  )
}
