import { useContext,createContext } from "react";


 export const container = createContext({
    
        Todos:[
            {
                id:1,
                todo:"todo msg",
                completed:false
            }
        ],
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{},
        

});

export const Todoinfo = ()=>{
    return useContext(container);
}

export const TodoProvider = container.Provider;