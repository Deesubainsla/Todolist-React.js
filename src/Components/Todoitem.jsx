import React, { useState } from 'react'
import { Todoinfo } from '../Context';
import toast from 'react-hot-toast';

function TodoItem({ todo }) {
    const {updateTodo,deleteTodo,toggleComplete } = Todoinfo();
    const [Todomsg, setTodomsg] = useState(todo.todo);
    const [IstodoEditable, setIstodoEditable] = useState(false);
    
    const editTodo = ()=>{
        updateTodo(todo.id, {...todo,todo:Todomsg});
        setIstodoEditable(false);
        toast.success("updated successfully");
        // console.log("here");
    }
    const toggleCompleted = (e)=>{
        toggleComplete(todo.id);
        if(document.querySelector("#checkbox").checked){
            toast.success("Task completed");
        }
        
        // console.log(document.querySelector("#checkbox").checked);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                id='checkbox'
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    IstodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={Todomsg}
                onChange={(e) => setTodomsg(e.target.value)}
                readOnly={!IstodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (IstodoEditable) {
                        editTodo();
                    } else setIstodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {IstodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() =>{ 
                    deleteTodo(todo.id);
                    toast.success("Task deleted");
                }}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
