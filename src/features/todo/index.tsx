import { useState } from "react";
import TodoFilter from "./components/TodoFilterTabs";
import TodoHeaderAndForm from "./components/TodoHeaderAndForm";
import { TASK_STATUS } from "./common/enum";
import TodoList from "./components/todoList";

/* ---------- Types ---------- */

type TaskStatus = (typeof TASK_STATUS)[keyof typeof TASK_STATUS];

interface TodoItem {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
}

/* ---------- Component ---------- */

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [editTodo, setEditTodo] = useState<TodoItem | null>(null);

  const onSave = (task: TodoItem, isEdit: boolean): void => {
    setTodos((prev) =>
      isEdit ? prev.map((t) => (t.id === task.id ? task : t)) : [...prev, task],
    );
    setEditTodo(null);
  };

  const onDelete = (id: number): void => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <TodoHeaderAndForm
        isEdit={!!editTodo}
        todoItem={editTodo ?? undefined}
        onSave={onSave}
      />

      <TodoFilter />

      <TodoList todos={todos} onEdit={setEditTodo} onDelete={onDelete} />
    </div>
  );
};

export default Todo;
