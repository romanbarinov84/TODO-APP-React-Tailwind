import { useState } from "react";


export function AddTodo({onAdd}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim()){
            onAdd(text);
            setText("");
        }
    }

    const[text, setText] = useState("")
    return (
        <form onSubmit={handleSubmit} className="mb-6">
          <div
            className="flex items-center bg-amber-50 rounded-lg shadow-md overflow-hidden 
              border border-gray-200 focus-within:ring-2 focus-within:ring-blue-300"
          >
            <input
              className="flex-1 p-3 text-gray-700 dark:bg-page-dark dark:text-btn-dark outline-none"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add task..."
              required
              aria-label="Add new task"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 rounded-4xl text-white font-semibold hover:bg-blue-600 transition
              cursor-pointer"
            >
              Add
            </button>
          </div>
        </form>
      );
      
}