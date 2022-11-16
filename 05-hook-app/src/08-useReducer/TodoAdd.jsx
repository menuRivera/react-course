import { useRef } from "react"

export const TodoAdd = ({ onNewTodo }) => {
    const inputRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        if (inputRef.current.value == '') return

        const newTodo = {
            id: new Date().getTime(),
            description: inputRef.current.value,
            done: false
        }

        onNewTodo(newTodo)
        inputRef.current.value = ''
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control" />
            <button type="submit" className="btn btn-primary mt-2">
                Agregar
            </button>
        </form>
    )
}