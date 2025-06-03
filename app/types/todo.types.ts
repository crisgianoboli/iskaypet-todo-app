export interface Todo {
  id: number;
  title: string;
  description?: string;
}

export interface TodoFormData {
  title: string;
  description: string;
  error: string;
}

export interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface TodoItemProps {
  id: number;
  title: string;
  description?: string;
  onDelete: (id: number) => void;
}

export interface TodoFormProps {
  onAdd: (title: string, description: string) => void;
  onClose: () => void;
  existingTodos: Todo[];
}

export type ApiTodo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};
