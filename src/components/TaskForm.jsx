import { useQueryClient } from '@tanstack/react-query'
import { createTask } from '../api/tasks'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

export const TaskForm = () => {
    const [title, setTitle] = useState('');
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: createTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return;
        mutation.mutate(title);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                placeholder='Задача..'
                onChange={(e) => setTitle(e.target.value)} />
                <button type="submit">Добавить</button>
        </form>
    )
}
