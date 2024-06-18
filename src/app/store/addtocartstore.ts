import { create } from "zustand";


interface Item {
    id: string;
    name: string;
    price: number;
}

interface CartState {
    cart: Item[];
    addToCart: (item: Item) => void
    removeToCart: (itemId: string) => void
    clearAll: () => void
}


export const useAddToCart = create<CartState>(set => ({
    cart: [],
    addToCart(item) {
        set((state) => {
            // Check if the item is already in the cart
            const isItemInCart = state.cart.some(cartItem => cartItem.id === item.id);
            // If the item is not in the cart, add it
            if (!isItemInCart) {
                return { cart: [...state.cart, item] };
            }
            // Otherwise, return the current state unchanged
            return state;
        });
    },
    removeToCart(itemId) {
        set(state => ({ cart: state.cart.filter(item => item.id !== itemId) }))
    },
    clearAll() {
        set(({ cart: [] }))
    }
}))


