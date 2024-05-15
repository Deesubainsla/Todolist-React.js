import { useEffect, useState } from 'react'
import { TodoForm,TodoItem } from './Components'
import { TodoProvider,Todoinfo,container } from './Context'



function App() {
    const [Todos,setTodos] = useState([]);

    const addTodo = (todo)=>{
      // setTodos((prev)=>[{...todo,id:Date.now()} ,...prev]);
      setTodos((prev) => [{...todo}, ...prev] )
    }

    const updateTodo =(id, todo)=>{
      setTodos((prev)=> prev.map((unchngtodo)=> (unchngtodo.id === id)? todo: unchngtodo))
      // setTodos((prev)=> prev.map((unchngprev)=>{
      //   if(unchngprev.id === id)  return todo;
            
        
      //    return unchngprev
        
      //   }))
    }

    const deleteTodo = (id)=>{
      setTodos((prev)=> prev.filter((todo)=> todo.id != id));
    }

    const toggleComplete = (id)=>{
      setTodos((prev)=> prev.map((pretodo)=> (pretodo.id===id)? {...pretodo,completed:!pretodo.completed}: pretodo))
      // setTodos((prev) => 
      //   prev.map((prevTodo) => 
      //     prevTodo.id === id ? { ...prevTodo, 
      //       completed: !prevTodo.completed } : prevTodo))
    }

    useEffect(() => {
     const Todo =  JSON.parse(localStorage.getItem("Todos"));

     if(Todo && Todo.length>0) setTodos(Todo);

    }, [])


    useEffect(() => {

     localStorage.setItem("Todos", JSON.stringify(Todos));

     }, [Todos, setTodos])
    

  return (
    <TodoProvider value={{Todos,updateTodo,addTodo,toggleComplete,deleteTodo}}>
        <div className="bg-[#172842] min-h-screen py-8">
                    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg       px-4  py-3 text-white">
                        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                        <div className="mb-4">
                            {/* Todo form goes here */} 
                            <TodoForm/>
                        </div>
                        <div className="flex flex-wrap gap-y-3">
                            {/*Loop and Add TodoItem here */}
                            {Todos.map((todo)=>(
                                <div key={todo.id} className='w-full'>
                                    <TodoItem todo={todo}/>
                                </div>
                            ))}
                        </div>
                    </div>
          </div>
    </TodoProvider>
  )
}

export default App
