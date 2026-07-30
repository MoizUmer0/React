
import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './context/TodoContext'

function App() {
 
const [todos,setTodos] = useState([])
const addTodo=(todo)=>{
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
}
const UpdateTodo=(id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ?{ ...prevTodo, ...todo }: prevTodo))
)}

const Delete=(id)=>{
  setTodos((prev)=>prev.filter((todo) => todo.id !== id ))
}
const ToggleComplete=(id)=>{
  setTodos((prev)=>prev.map((prevTodo=>prevTodo.id ===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo)))
 }
useEffect(()=>{
 const todos =  JSON.parse(localStorage.getItem("todos"))
 if(todos && todos.length>0){
  setTodos(todos)
 }
},[]) 
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,UpdateTodo,Delete,ToggleComplete}}>
<div className="flex flex-wrap min-h-screen items-center bg-gray-700">
                <div className="w-full">
                    <div className="w-full max-w-xl mx-auto flex justify-end mb-4">
                        <TodoForm/>
                    </div>

                <div className="w-full max-w-xl mx-auto">
                  {todos.map((todo)=>(
                      <div key={todo.id}
                      className='w-full'>
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
