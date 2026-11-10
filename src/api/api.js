import axios from "axios";
import { useAuthStore } from "../store/auth";

export const $api = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

const attachToken = (config) => {
    const { accessToken } = useAuthStore.getState();

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
};

const handleAccess = (response) => response;

const handleError = (error) => {
    if (error.response?.status === 401) {
        useAuthStore.getState().logout();
    };

    return Promise.reject(error);
};

$api.interceptors.request.use(attachToken);
$api.interceptors.response.use(handleAccess, handleError);

export const getMessageError = (error) => {
    return error.data?.response?.message ?? error.message
};