import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
    test('Debe agregar una nueva categoría', () => {
        const inputValue = 'Saitama';

        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')


        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(screen.getByText(inputValue)).toBeTruthy()
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2)
    })

    test('No debe agregar categorías repetidas', () => {
        const inputValue = 'One Punch'

        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')


        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1)
    })
})