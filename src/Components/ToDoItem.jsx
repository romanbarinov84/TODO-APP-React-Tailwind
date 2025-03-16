import { useState } from "react";

export const ToDoItem = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div
      className={`flex items-center justify-between p-4 gap-8 rounded-lg h-20 shadow-sm hover:shadow-lg 
        ${isCompleted ? "bg-green-200 dark:bg-green-300" : "bg-amber-100 dark:bg-amber-50"}`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsCompleted(!isCompleted)}
          className={`px-3 py-1 rounded-lg transition ${
            isCompleted
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          ✅
        </button>
        <span
          className={`text-gray-800 dark:text-gray-600 ${
            isCompleted ? "line-through opacity-60" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        aria-label="Delete task"
      >
        🗑 Delete
      </button>
    </div>
  );
};
