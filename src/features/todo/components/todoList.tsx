import { TodoItemModel, TodoStatus } from "./todoModel";

interface TodoListProps {
  todos: TodoItemModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemModel[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const toggleStatus = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index
          ? {
              ...todo,
              status:
                todo.status === TodoStatus.ACTIVE
                  ? TodoStatus.COMPLETED
                  : TodoStatus.ACTIVE,
            }
          : todo,
      ),
    );
  };

  const clearCompleted = () => {
    setTodos((prev) =>
      prev.filter((todo) => todo.status !== TodoStatus.COMPLETED),
    );
  };

  return (
    <div>
      <button onClick={clearCompleted} style={{ marginBottom: "1rem" }}>
        Clear Completed
      </button>
      {todos.map((todo, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={todo.status === TodoStatus.COMPLETED}
              onChange={() => toggleStatus(index)}
            />
            {todo.item} - {todo.status}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
