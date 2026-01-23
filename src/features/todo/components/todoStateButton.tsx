import { TodoStatus } from "./todoModel";
import TodoStateSingleButton from "./todoSingleButton";

interface TodoStateButtonProps {
  filter: "ALL" | TodoStatus.ACTIVE | TodoStatus.COMPLETED;
  setFilter: React.Dispatch<
    React.SetStateAction<"ALL" | TodoStatus.ACTIVE | TodoStatus.COMPLETED>
  >;
}

const TodoStateButton = ({ filter, setFilter }: TodoStateButtonProps) => {
  const todoState = [
    { label: "All", value: "ALL" },
    { label: "Active", value: TodoStatus.ACTIVE },
    { label: "Completed", value: TodoStatus.COMPLETED },
  ];

  return (
    <div style={{ margin: "1rem 0" }}>
      {todoState.map((state) => (
        <TodoStateSingleButton
          key={state.value}
          label={state.label}
          isActive={filter === state.value}
          onClick={() => setFilter(state.value as any)}
        />
      ))}
    </div>
  );
};

export default TodoStateButton;
