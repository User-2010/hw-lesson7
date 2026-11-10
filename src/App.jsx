import { TaskForm } from "./components/TaskForm";
import { TaskItem } from "./components/TaskItem";
import { TaskList } from "./components/TaskList";
import { LoginForm } from "./LoginForm";

export const App = () => {
    return (
        <div>
            <LoginForm />
            <TaskForm />
            <TaskList />
            <TaskItem />
        </div>
    );
};
