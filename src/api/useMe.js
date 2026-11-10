import { useQuery } from "@tanstack/react-query"
import { useAuthStore } from "../store/auth";
import { $api } from "./api";

export const useMe = () => {
    const accessToken = useAuthStore(store => store.accessToken);

    return useQuery({
        queryKey: ['auth', 'me'],
        queryFn: async () => {
            const { data } = await $api.get('/auth/me')
            return data;
        },
        enabled: !!accessToken
    });
}