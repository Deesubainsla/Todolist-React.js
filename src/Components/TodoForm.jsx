import React, { useState } from 'react'
import { Todoinfo } from '../Context';

function TodoForm() {
    const {addTodo} = Todoinfo();
    const [todo, settodo] = useState("");

    const handler = (e)=>{

        e.preventDefault()
        // console.log("todo")
        if(!todo) return 
        // console.log(todo)

        addTodo({id:Date.now(),todo, completed:false});
        settodo("");

    }

    return (
        <form onSubmit={handler}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full  border border-black/10 focus:border-green-600 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>settodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg font-bold px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

