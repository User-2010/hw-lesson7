import { useState } from "react";
import { useLogin } from "./api/useLogin";
import { getMessageError } from "./api/api";

const initialState = {
    username: "emilys",
    password: "emilyspass",
};

export const LoginForm = () => {
    const [form, setForm] = useState(initialState);
    const { mutateAsync, isPending } = useLogin();

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await mutateAsync(form);
            setForm(initialState);
        } catch (err) {
            getMessageError(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                onChange={onChange}
                value={form.username}
            />
            <input
                type="text"
                name="password"
                onChange={onChange}
                value={form.password}
            />
            <button type="submit">{isPending ? "Входим..." : "Вход"}</button>
        </form>
    );
};
