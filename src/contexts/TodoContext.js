import {useContext, createContext} from 'react';

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo:"Test",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})


export const TodoProvidor = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}