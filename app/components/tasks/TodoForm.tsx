import React, { useState } from "react";
import { TodoFormProps, TodoFormData } from "../../types/todo.types";
import { IoClose } from "react-icons/io5";

const TodoForm: React.FC<TodoFormProps> = ({
  onAdd,
  onClose,
  existingTodos,
}) => {
  const [data, setData] = useState<TodoFormData>({
    title: "",
    description: "",
    error: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.title.trim()) {
      setData((prev) => ({
        ...prev,
        error: "Por favor ingresa un nombre para la tarea",
      }));
      return;
    }

    const titleExists = existingTodos.some(
      (todo) =>
        todo.title.toLowerCase().trim() === data.title.toLowerCase().trim()
    );

    if (titleExists) {
      setData((prev) => ({
        ...prev,
        error: "Ya existe una tarea con este nombre",
      }));
      return;
    }

    onAdd(data.title.trim(), data.description.trim());
    setData({ title: "", description: "", error: "" });
  };

  const handleChange =
    (field: keyof TodoFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Añadir tarea</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <IoClose size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <input
              type="text"
              id="title"
              value={data.title}
              onChange={handleChange("title")}
              placeholder="Nombre"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            {data.error && (
              <p className="mt-1 text-sm text-red-600">{data.error}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Descripción
            </label>
            <textarea
              id="description"
              value={data.description}
              onChange={handleChange("description")}
              placeholder="Descripción"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#95C11F] text-white rounded-md hover:bg-[#86AD1B] transition-colors font-medium"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
