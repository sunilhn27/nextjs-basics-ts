
import { create } from "zustand";

interface Store {
    count: number;
    increnment: () => void;
    decrenment: () => void;
}

export const useCount = create<Store>((set) => ({
    count: 0,
    increnment() {
        set((state) => ({ count: state.count + 1 }))
    },
    decrenment() {
        set((state) => ({ count: state.count - 1 }))
    },

}))

