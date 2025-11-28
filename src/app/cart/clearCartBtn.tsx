"use client";

import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/cart.context";
import { useContext } from "react";
import { toast } from "sonner";
import { clearCart } from "./cart.action";

export default function ClearCartBtn() {
    const { updateCartCount } = useContext(CartContext);


    async function handleClearCart() {
        console.log("Button clicked ✅");

        const output = await clearCart();
        console.log("output from clearCart:", output);


        if (output === null) {
            toast.error("Failed to clear cart");
        } else {
            toast.success("All items removed from cart");
            updateCartCount(0);
        }
    }

    return (
        <Button
            className="cursor-pointer"
            variant="destructive"
            onClick={handleClearCart}
        >
            Remove All
        </Button>
    );
}
