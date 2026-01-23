export enum TodoStatus {
  ACTIVE = "Active",
  COMPLETED = "Completed",
}

export interface TodoItemModel {
  item: string;
  status: TodoStatus;
}
