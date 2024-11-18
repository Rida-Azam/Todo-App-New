"use client"
import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #F5A623, #F76B1C, #F54040)",
      }}
    >
      <div className="bg-gray-900 text-white rounded-lg shadow-xl w-80 p-6">
        <h1 className="text-3xl font-bold text-center mb-4">To-Do App</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="flex-1 p-2 text-gray-900 rounded-l-lg focus:outline-none"
            placeholder="Enter a Todo..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-r-lg"
          >
            Add
          </button>
        </div>
        {/* Conditional Rendering */}
        {todos.length === 0 ? (
          <p className="text-center text-gray-400">No To-Do Yet</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between mb-2 p-2 rounded-lg ${
                  todo.completed
                    ? "bg-green-500 text-white"
                    : "bg-gray-800 text-gray-300"
                }`}
              >
                <span
                  onClick={() => toggleComplete(todo.id)}
                  className={`flex-1 cursor-pointer ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  {todo.text}
                </span>
                <FaCheck
                  className="text-green-300 hover:text-green-500 cursor-pointer mx-2"
                  onClick={() => toggleComplete(todo.id)}
                />
                <FaTrash
                  className="text-red-300 hover:text-red-500 cursor-pointer"
                  onClick={() => deleteTodo(todo.id)}
                />
              </li>
            ))}
          </ul>
        )}
        {todos.length > 0 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() =>
                setTodos(todos.filter((todo) => !todo.completed))
              }
              className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800"
            >
              Clear Completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;



























