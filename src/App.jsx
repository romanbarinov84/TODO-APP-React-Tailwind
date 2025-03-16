import { useState } from "react";
import "./App.css";
import { ToDoItem } from "./Components/ToDoItem";
import { AddTodo } from "./Components/AddTodo";

function App() {
  const initialTodos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Create Todo App" },
    { id: 3, text: "Create Deploy Project" },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const [theme, setTheme] = useState(getInitialTheme());

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    if (savedTheme) {
      return savedTheme;
    } else if (prefersDark) {
      return "dark";
    } else {
      const hours = new Date().getHours();
      return hours < 6 || hours >= 21 ? "dark" : "light";
    }
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const onAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const onDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      data-theme={theme}
      className="flex flex-col min-h-screen justify-center items-center bg-page-light dark:bg-page-dark p-24"
    >
      <div className="mb-6">
        <div className="flex items-center cursor-pointer">
          <button className="relative" onClick={toggleTheme}>
            <div className="w-30 h-6 rounded-full shadow-inner transition-colors duration-300 bg-gray-400 dark:bg-btn-dark"></div>
            <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-0 dark:translate-x-20"></div>
          </button>
          <span className="ml-3 text-grey-700 dark:text-gray-300 font-medium">
            {theme === "light" ? "light" : "dark"}
          </span>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-3 ">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            My todo App
          </span>
        </h1>
        <AddTodo onAdd={onAdd} />
        <div className="flex flex-col gap-3.5">Component to create tasks</div>
        <div>
          {todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
