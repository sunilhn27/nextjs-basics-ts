import { create } from "zustand";
import { produce } from 'immer';
import { stat } from "fs";


interface User {
    id: string;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
    preferences: {
        theme: string;
        notification: boolean;
    };
}

interface UserState {
    user: User;
    updateName: (name: String) => void
    updateEmail: (email: string) => void
    updateAddress: (address: string) => void
    updateCity: (city: Partial<User>) => void
    clearAll: () => void
}


export const useNestedUser = create<UserState>(set => ({
    user: {
        id: "1",
        name: "Sunil",
        email: "sunilhn@gmail.com",
        address:
        {
            street: "123 Main St",
            city: "Bangalore",
            country: "India",
        },

        preferences: {
            theme: "light",
            notification: true,
        },
    },
    updateName(name) {
        set(produce(state => { state.user.name = name }))
    },
    updateEmail(email) {
        set(produce(state => {
            state.user.email =
                email
        }))
    },
    updateAddress(address) {
        set(produce(state => {
            state.user.address
                = address
        }))
    },
    updateCity(city) {
        set(produce(state => { state.user.address.city = city }))

    },
    clearAll() {

        set({
            user: { // Reset user object directly
                id: "1",
                name: "",
                email: "",
                address:
                {
                    street: "",
                    city: "",
                    country: "",
                },

                preferences: {
                    theme: "light",
                    notification: true,
                },
            }
        })

    },
}))
