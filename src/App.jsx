
import { useState } from 'react'
import './App.css'
import { ToDoItem } from './Components/ToDoItem';
import { AddTodo } from './Components/AddTodo';



function App() {
  const initialTodos = [
    {id:1,text:"Learn React"},
    {id:2,text:"Create Todo App"},
    {id:3,text:"Create Deploy Project"},
  ];
  const [todos, setTodos] = useState(initialTodos);
  const [theme,setTheme] = useState(getInitialTheme());

  function getInitialTheme(){
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
    if(savedTheme){
      return savedTheme
    }else if(prefersDark){
      return "dark"
    }else{
      const hours = new Date().getHours();
      return hours < 6 || hours >= 21 ? "dark" : "light";
    }
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme
    });
  };

  const onAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    }
    setTodos([...todos,newTodo]);
  }
 
  const onDelette = (id) =>{
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div data-theme={theme} className='flex flex-col min-h-screen justify-center items-center bg-page-light dark:bg-page-dark p-24'>
      <div>
        <div>
          <button onClick={toggleTheme}>
            <div>Change Theme</div>
          </button>
        </div>
      </div>
      <div>
        <h1>My todo App</h1>
        <AddTodo onAdd={onAdd}/>
        <div>Component to create tasks</div>
        <div>
          {todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} onDelette={onDelette}/>
            
          ))}
        </div>
      </div>
     
      </div>
  )
}



export default App
