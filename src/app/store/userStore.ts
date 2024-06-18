import { create } from 'zustand';

interface User {
    id: string;
    name: string;
    email: string;
    address: [{
        street: string;
        city: string;
        country: string;
    }];
    preferences: {
        theme: string;
        notification: boolean;
    };
}

interface UserStore {
    users: User[];
    updateUser: (updatedUser: User) => void;
}

const initialUsers: User[] = [
    // The users array provided in the prompt
];

export const useUserStore = create<UserStore>((set) => ({
    users: initialUsers,
    updateUser: (updatedUser) => set((state) => ({
        users: state.users.map(user =>
            user.id === updatedUser.id ? updatedUser : user
        )
    })),
}));
