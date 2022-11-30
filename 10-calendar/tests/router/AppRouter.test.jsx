import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { AppRouter } from "../../src/router/AppRouter";

jest.mock('../../src/hooks/useAuthStore');

jest.mock('../../src/calendar/pages/CalendarPage', () => ({
    CalendarPage: () => <h1>CalendarPage</h1>
}))

describe('Pruebas en <AppRouter/>', () => {
    const mockCheckAuthToken = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('Debe mostrar la pantalla de carga y llamar checkAuthtoken', () => {
        useAuthStore.mockReturnValue({
            status: 'checking',
            checkAuthToken: mockCheckAuthToken
        });

        render(<AppRouter />)

        expect(screen.getByText('Loading...')).toBeTruthy()
        expect(mockCheckAuthToken).toHaveBeenCalled();
    })

    test('Debe mostrar el login en caso de no estar autenticado', () => {
        useAuthStore.mockReturnValue({
            status: 'not-authenticated',
            checkAuthToken: mockCheckAuthToken
        })

        const { container } = render(
            <MemoryRouter>
                <AppRouter />
            </MemoryRouter>
        )

        expect(screen.getByText('Ingreso'))
        expect(container).toMatchSnapshot()
    })

    test('Debe mostar el calend si estamos autenticados', () => {
        useAuthStore.mockReturnValue({
            status: 'authenticated',
            checkAuthToken: mockCheckAuthToken
        })

        render(
            <MemoryRouter>
                <AppRouter />
            </MemoryRouter>
        )

        expect(screen.getByText('CalendarPage')).toBeTruthy()
    })
})