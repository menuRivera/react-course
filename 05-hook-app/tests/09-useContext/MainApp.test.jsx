import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from '../../src/09-useContext/MainApp'

describe('Pruebas en <MainApp/>', () => {
    test('Debe mostrar el homepage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('Login page')).toBeTruthy()
    })
})