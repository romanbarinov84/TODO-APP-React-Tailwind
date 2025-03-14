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
    return (<form onSubmit={handleSubmit} className="mb-6 ">
        <div className="flex items-center bg-amber-50 rounded-lg shadow-sky-300 overflow-hidden 
        border-gray-100 focus-within:ring-2 focus-within:ring-offset-blue-300">
            <input className="flex-1 p-3 text-gray-700 dark:bg-page-dark dark:text-btn-dark" type="text" value={text} onChange={(e) => setText(e.target.value) } placeholder="Add task..."/>
        <button type="submit">Added</button>
        </div>
        
    </form>);
}