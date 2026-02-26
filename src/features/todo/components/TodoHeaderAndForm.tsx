import { useRef, useEffect, FormEvent } from "react";
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

interface TodoHeaderAndFormProps {
  isEdit?: boolean;
  todoItem?: TodoItem;
  onSave: (task: TodoItem, isEdit: boolean) => any;
}

/* ---------- Component ---------- */

const TodoHeaderAndForm: React.FC<TodoHeaderAndFormProps> = ({
  isEdit = false,
  todoItem,
  onSave,
}) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const statusRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    if (isEdit && todoItem) {
      titleRef.current!.value = todoItem.title;
      descriptionRef.current!.value = todoItem.description;
      statusRef.current!.value = todoItem.status;
    } else {
      if (titleRef.current) titleRef.current.value = "";
      if (descriptionRef.current) descriptionRef.current.value = "";
      if (statusRef.current) statusRef.current.value = TASK_STATUS.PENDING;
    }
  }, [isEdit, todoItem]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!titleRef.current || !descriptionRef.current || !statusRef.current)
      return;

    const newTask: TodoItem = {
      id: isEdit && todoItem ? todoItem.id : Date.now(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      status: statusRef.current.value as TaskStatus,
      createdAt: new Date().toISOString(),
    };

    onSave(newTask, isEdit);

    // Reset form
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    statusRef.current.value = TASK_STATUS.PENDING;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleRef} placeholder="Title" required />

      <textarea ref={descriptionRef} placeholder="Description" />

      <select ref={statusRef}>
        {Object.values(TASK_STATUS).map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      <button type="submit">{isEdit ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TodoHeaderAndForm;
