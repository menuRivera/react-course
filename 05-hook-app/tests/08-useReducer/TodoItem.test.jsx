import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Pruebas en <TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }

    const onDeleteTodo = jest.fn()
    const onToggleTodo = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('Debe mostrar el todo pendiente de completar', () => {
        render(<TodoItem
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
            todo={todo}
        />)

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
    })

    test('Debe mostrar el todo completado', () => {
        todo.done = true

        render(<TodoItem
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
            todo={todo}
        />)

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
    })

    test('Debe llamar el toggleTodo cuando se hace click', () => {

        render(<TodoItem
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
            todo={todo}
        />)

        const spanElement = screen.getByLabelText('span')
        fireEvent.doubleClick(spanElement)

        expect(onToggleTodo).toBeCalledWith(todo.id)
    })

    test('Debe eliminar el todo', () => {

        render(<TodoItem
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
            todo={todo}
        />)
            
        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement);

        expect(onDeleteTodo).toBeCalledWith(todo.id)
    })
})