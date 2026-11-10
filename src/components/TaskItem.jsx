import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTask } from '../api/tasks';

export const TaskItem = ({ task }) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });

    // Защита: если task не пришел, компонент не упадет
    if (!task) return null;

    const handleToggle = () => {
        mutation.mutate({
            id: task.id,
            completed: !task.completed,
        });
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
                type="checkbox"
                checked={task.completed || false}
                onChange={handleToggle}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
        </div>
    );
};