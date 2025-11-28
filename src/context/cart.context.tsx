"use client";

import { createContext, ReactNode, useState } from "react";

interface ICartContext {
    cartCount: number;
    updateCartCount: (x: number) => void;
}

export const CartContext = createContext<ICartContext>({
    cartCount: 0,
    updateCartCount: () => {}
});

export function CartCountProvider({ children }: { children: ReactNode }) {
    const [cartCount, setCartCount] = useState(0);

    function updateCartCount(newCount: number) {
        setCartCount(newCount);
    }

    return (
        <CartContext.Provider value={{ cartCount, updateCartCount }}>
            {children}
        </CartContext.Provider>
    );
}
