import { useState } from "react";
import { TodoItemModel, TodoStatus } from "./todoModel";

interface TodoHeaderProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoItemModel[]>>;
}

const TodoHeader = ({ setTodos }: TodoHeaderProps) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;

    setTodos((prev) => [...prev, { item: task, status: TodoStatus.ACTIVE }]);

    setTask("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <h1>Todo List</h1>
      <textarea
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TodoHeader;
