import { useQuery } from "@tanstack/react-query";
import { getTask } from "../api/tasks";
import { TaskItem } from './TaskItem'; 

import React from 'react'

export const TaskList = () => {
    const { data: tasks, isLoading, isError, error } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTask
    })
    if(isLoading){
        return <p>Загрузка...</p>
    }
    if(isError){
        return <p>Ошибка при загрузке... {error.message}</p>
    }
  return (
    <div>
        {
            tasks?.map((task) => (
                <div key={task.id}>
                    <TaskItem key={task.id} task={task} />
                </div>
            ))
        }
    </div>
  )
}

