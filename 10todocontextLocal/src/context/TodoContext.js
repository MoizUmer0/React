import { createContext,useContext } from "react";

export const TodoContext = createContext({  
    todos:[
        {
            id:1,
            todo:" Todo Msg",
            completed:false
        }
    ],
    addTodo:(todo) => {},
    UpdateTodo:(id,todo) => {},
    Delete:(id) => {},
    ToggleComplete:(id) => {}

})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider =TodoContext.Provider