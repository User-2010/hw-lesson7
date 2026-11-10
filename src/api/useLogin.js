import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../store/auth";
import { $api } from "./api";

export const useLogin = () => {
    const setToken = useAuthStore(store => store.setToken);
    const queryClient = useQueryClient();

    const handleSuccess = ({ accessToken, ...user }) => {
        setToken(accessToken);
        queryClient.setQueryData(['auth', 'me'], user);
    };

    return useMutation({
        mutationFn: async ({ username, password }) => {
            const { data } = await $api.post('/auth/login', {
                username,
                password
            });
            return data;
        },
        onSuccess: handleSuccess
    })
};