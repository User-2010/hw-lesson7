import axios from "axios";

export const getTask = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    return response.data
};

export const createTask = async (title) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
    return response.data
}

export const updateTask = async ({ id, completed }) => {
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, { completed });
    return response.data;
};