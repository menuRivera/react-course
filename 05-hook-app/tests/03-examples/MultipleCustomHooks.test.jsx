import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks";
import { useCounter } from '../../src/hooks'

jest.mock('../../src/hooks/useCounter')
jest.mock('../../src/hooks/useFetch')


describe('Pruebas en <MultipleCustomHooks />', () => {
    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(()=>{
        jest.clearAllMocks()
    })

    test('Debe mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render(<MultipleCustomHooks />)

        // screen.debug()

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Multiple custom hooks'))
        const nextButton = screen.getByRole('button', { name: 'Next quote' })

        expect(nextButton.disabled).toBeTruthy()
    })

    test('Debe mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Manuel', quote: 'shalala' }],
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />)
        // screen.debug()

        expect(screen.getByText('shalala')).toBeTruthy()
        expect(screen.getByText('Manuel')).toBeTruthy()

        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        expect(nextButton.disabled).toBeFalsy()
    })

    test('Debe llamar el botón de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Manuel', quote: 'shalala' }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />)

        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        fireEvent.click(nextButton)

        expect(mockIncrement).toBeCalled()
    })
})