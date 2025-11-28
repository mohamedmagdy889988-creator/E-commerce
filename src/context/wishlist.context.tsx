
'use client';
import { createContext, ReactNode, useState } from "react";

export type WishlistItem = {
  id: string;
  title: string;
  imageCover: string;
  price: number;
};

export const WishlistContext = createContext({
    wishlist: [] as WishlistItem[],
    addToWishlist: (item: WishlistItem) => {},
    removeFromWishlist: (id: string) => {}
});

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

    function addToWishlist(item: WishlistItem) {
        setWishlist(prev => {
            if (prev.find(p => p.id === item.id)) return prev; 
            return [...prev, item];
        });
    }

    function removeFromWishlist(id: string) {
        setWishlist(prev => prev.filter(p => p.id !== id));
    }

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}
