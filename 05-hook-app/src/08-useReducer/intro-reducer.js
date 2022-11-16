import { useReducer } from "react"

const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del alma',
        done: false
    }
]

const todoReducer = (state = initialState, action = {}) => {
    if(action.type == 'add-todo') {
        return [...state, action.payload]
    }

    return state
}

let todos = todoReducer()
console.log(todos);

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: 'add-todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log(todos);