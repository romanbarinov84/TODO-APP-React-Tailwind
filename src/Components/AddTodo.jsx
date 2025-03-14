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
    return (<form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value) } />
        <button type="submit">Added</button>
    </form>);
}