import { AuthContext } from "../../../src/auth/context/AuthContext"
import { render, screen } from '@testing-library/react'
import { PrivateRoute } from "../../../src/router/PrivateRoute"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <PrivateRoute/>', () => {
    test('Debe mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: 'fdsafda',
                name: 'Felipe'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>hola</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('hola')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman")
    })
})