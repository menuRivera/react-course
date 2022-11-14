import { Counter } from '../../src/components/Counter'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Pruebas en Counter.jsx', () => {
    test('Debería hacer match con el snapshot', () => {
        const value = 10;
        const { container } = render(<Counter value={value} />)

        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar el valor inicial de 100', () => {

        const value = 100;
        render(<Counter value={value} />)

        expect(screen.getByText(value)).toBeTruthy()
    })

    test('Debe incrementar con el botón +1', () => {
        const value = 100;

        render(<Counter value={value} />)
        fireEvent.click(screen.getByText('+1'))

        expect(screen.getByText(value + 1)).toBeTruthy()
    })

    test('Debe decrementar con el botón -1', () => {
        const value = 100;

        render(<Counter value={value} />)
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))

        expect(screen.getByText(value - 1)).toBeTruthy()
    })

    test('Debe funcionar el botón de reset', () => {
        const value = 100;

        render(<Counter value={value} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('Reset'))

        expect(screen.getByText(value)).toBeTruthy()
    })
})