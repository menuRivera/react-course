import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from '../../../src/auth/context/AuthContext'
import { PublicRoute } from '../../../src/router/PublicRoute'
describe('Pruebas en <PublicRoute />', () => {
    test('Debe mostrar el children si no esta autenticado', () => {
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>hola</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('hola')).toBeTruthy()
    })

    test('Debe mostrar navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'fdsaf'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='marvel' element={
                            <h1>Marvel</h1>
                        } />
                        <Route path="login" element={

                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Marvel')).toBeTruthy()

    })
})