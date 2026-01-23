interface TodoStateSingleButtonProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const TodoStateSingleButton = ({
  label,
  isActive,
  onClick,
}: TodoStateSingleButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        marginRight: "0.5rem",
        padding: "0.5rem 1rem",
        backgroundColor: isActive ? "#007bff" : "#f0f0f0",
        color: isActive ? "#fff" : "#000",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default TodoStateSingleButton;
