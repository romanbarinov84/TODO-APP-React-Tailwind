

export const ToDoItem = ({todo, onDelette}) => {
    return (
        <div>
             <div>
                <button>mark as completed</button>
                <span>{todo.text}</span>
             </div>
             <button onClick={() => onDelette(todo.id)}>Delette</button>
        </div>
       
    )
}