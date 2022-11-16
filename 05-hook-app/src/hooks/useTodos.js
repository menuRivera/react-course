import { useEffect, useMemo } from "react"
import { useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


const initialState = []
const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [])
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: 'add-todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {

        const action = {
            type: 'remove-todo',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'toggle-todo',
            payload: id
        }

        dispatch(action)
    }

    const todosCount = useMemo(() => todos.length, [todos])
    const pendingTodosCount = useMemo(() => todos.filter(todo => !todo.done).length, [todos])
    
    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    }
}