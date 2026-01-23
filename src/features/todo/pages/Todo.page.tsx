import { useEffect, useState } from "react";
import TodoHeader from "../components/TodoHeader";

import { TodoItemModel, TodoStatus } from "../components/todoModel";
import TodoStateButton from "../components/todoStateButton";
import TodoList from "../components/todoList";

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoItemModel[]>([]);
  const [filter, setFilter] = useState<
    "ALL" | TodoStatus.ACTIVE | TodoStatus.COMPLETED
  >("ALL");

  // Load todos from localStorage once
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todoList") || "[]");
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  // Filtered todos for display
  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") return true;
    return todo.status === filter;
  });

  return (
    <div style={{ width: "50%", margin: "auto", padding: "2rem" }}>
      <TodoHeader setTodos={setTodos} />
      <TodoStateButton filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
};

export default TodoPage;
