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
        set(state => ({ cart: [...state.cart, item] }))
    },
    removeToCart(itemId) {
        set(state => ({ cart: state.cart.filter(item => item.id !== itemId) }))
    },
    clearAll() {
        set(({ cart: [] }))
    }
}))


