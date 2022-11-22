import { useState } from "react"
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {
    const [todoId, setTodoId] = useState(1)

    // const { data = [], isLoading } = useGetTodosQuery()
    const { data, isLoading } = useGetTodoQuery(todoId)


    return (

        <>
            <h1>Todos - RTK query</h1>
            <hr />

            <h4>isLoading... {isLoading ? 'True' : 'False'}</h4>
            <pre>{JSON.stringify(data)}</pre>
            {/* 
            <ul>
                {data.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'done' : 'pending'} </strong>
                        {todo.title}
                    </li>
                ))}
            </ul> */}

            <button onClick={() => setTodoId(todoId - 1)}>Previous todo</button>
            <button onClick={() => setTodoId(todoId + 1)}>Next todo</button>
        </>
    )
}