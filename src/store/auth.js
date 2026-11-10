import { create } from "zustand";
import { persist } from "zustand/middleware";

const authState = (set) => ({
    accessToken: null,
    setToken: (accessToken) => set({ accessToken }),
    logout: () => set({ accessToken: null })
});


export const useAuthStore = create(persist(authState, {
    name: 'auth'
}));