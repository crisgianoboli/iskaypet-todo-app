"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Navigation from "../components/header/Navigation";
import TodoList from "../components/tasks/TodoList";
import TodoForm from "../components/tasks/TodoForm";
import { useTodoApi } from "../services/useTodoApi";
import { Todo } from "../types/todo.types";

const ITEMS_PER_PAGE = 3;

export default function Tasks() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const fetchTodos = async () => {
    try {
      const data = await useTodoApi.fetchTodos();
      setTodos(data);
      setError(null);
    } catch (error: unknown) {
      setError("Error al cargar las tareas. Por favor, intenta de nuevo más tarde.");
      console.error("Error al cargar tareas:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (title: string, description: string) => {
    try {
      const newTodo = await useTodoApi.addTodo(title);
      setTodos((prev) => [...prev, { ...newTodo, id: Date.now(), description }]);
      setShowForm(false);
    } catch (error: unknown) {
      setError("Error al agregar la tarea. Por favor, intenta de nuevo.");
      console.error("Error al agregar tarea:", error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await useTodoApi.deleteTodo(id);
      setTodos((prev) => {
        const newTodos = prev.filter((todo) => todo.id !== id);
        const newTotalPages = Math.ceil(newTodos.length / ITEMS_PER_PAGE);
        if (currentPage > newTotalPages && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
        return newTodos;
      });
    } catch (error: unknown) {
      setError("Error al eliminar la tarea. Por favor, intenta de nuevo.");
      console.error("Error al eliminar tarea:", error);
    }
  };

  const totalPages = Math.ceil(todos.length / ITEMS_PER_PAGE);
  const paginatedTodos = todos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) {
    return (
      <>
        <div className="border-b border-gray-200">
          <Header />
        </div>
        <Navigation />
        <div className="text-center py-10">Loading...</div>
      </>
    );
  }

  return (
    <>
      <div className="border-b border-gray-200">
        <Header />
      </div>
      <Navigation />
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mis tareas</h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-6">
              {error}
            </div>
          )}

          {showForm ? (
            <div className="mb-8">
              <TodoForm
                onAdd={handleAddTodo}
                onClose={() => setShowForm(false)}
                existingTodos={todos}
              />
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="max-h-[400px] overflow-y-auto mb-6">
                  {todos.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">
                      No hay tareas. ¡Agrega tu primera tarea!
                    </div>
                  ) : (
                    <TodoList
                      todos={paginatedTodos}
                      onDelete={handleDeleteTodo}
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  )}
                </div>
                <div className="text-center">
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                  >
                    Añadir tarea
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
} 