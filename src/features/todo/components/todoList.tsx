import { TASK_STATUS } from "../common/enum";

/* ---------- Types ---------- */

type TaskStatus = (typeof TASK_STATUS)[keyof typeof TASK_STATUS];

interface TodoItem {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
}

interface TodoListProps {
  todos: TodoItem[];
  onEdit: (todo: TodoItem) => void;
  onDelete: (id: number) => void;
}

/* ---------- Component ---------- */

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, onDelete }) => {
  if (!todos.length) {
    return <p>No tasks available</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.status}</p>

          <button onClick={() => onEdit(todo)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
