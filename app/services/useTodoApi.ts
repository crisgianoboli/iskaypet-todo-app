import { ApiTodo, Todo } from "../types/todo.types";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const useTodoApi = {
  async fetchTodos(limit: number = 3): Promise<Todo[]> {
    const response = await fetch(`${API_URL}?_limit=${limit}`);
    if (!response.ok) throw new Error("Error al cargar las tareas");
    const data = (await response.json()) as ApiTodo[];
    return data.map(({ id, title }) => ({ id, title }));
  },

  async addTodo(title: string): Promise<Todo> {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) throw new Error("Error al agregar la tarea");
    const data = (await response.json()) as ApiTodo;
    return { id: data.id, title: data.title };
  },

  async deleteTodo(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Error al eliminar la tarea");
  },
};
