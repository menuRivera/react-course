import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({ //mock parcial
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));


describe('Pruebas en <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Manuel Rivera'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());


    test('Debe mostrar el nombre del usuario', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Manuel Rivera')).toBeTruthy();
    });

    test('Debe hacer logout', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { "replace": true })
    });
});