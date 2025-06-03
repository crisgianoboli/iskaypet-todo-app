import { TodoItemProps } from "@/app/types/todo.types";
import React from "react";
import { FaTrash } from "react-icons/fa";

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  description,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <button
            onClick={() => onDelete(id)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Delete todo"
          >
            <FaTrash size={16} />
          </button>
        </div>
        <p className="text-gray-500 text-sm">
          {description || "Sin descripción"}
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
