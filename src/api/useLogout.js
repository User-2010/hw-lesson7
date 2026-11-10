import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../store/auth";

export const useLogout = () => {
    const logout = useAuthStore(store => store.logout); 
    const queryClient = useQueryClient();

    const handleLogout = () => {
        logout();
        queryClient.removeQueries({
            queryKey: ['auth', 'me']
        });
    };

    return handleLogout;
};