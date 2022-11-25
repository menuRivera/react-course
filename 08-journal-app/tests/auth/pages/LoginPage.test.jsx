import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { notAuthenticatedState } from '../../fixtures/authFixtures';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../src/store/auth/authSlice';
import { LoginPage } from '../../../src/auth/pages/LoginPage';

const mockStartLoginWithEmail = jest.fn();
const mockStartGoogleSignIn = jest.fn();


jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmail: ({ email, password }) => {
        return () => mockStartLoginWithEmail({ email, password });
    },
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})

describe('Pruebas en <LoginPage/>', () => {

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el componente', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
    });

    test('Debe llamar startGoogleSignIn', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);

        expect(mockStartGoogleSignIn).toHaveBeenCalled();
    });

    test('Debe startLoginWithEmailPassword', () => {
        const email = 'unemail@sisi.com';
        const password = 'fjdkslafjsa';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', { name: 'Correo' });
        const passwordField = screen.getByTestId('password');
        const loginForm = screen.getByLabelText('submit-form');

        fireEvent.change(emailField, { target: { name: 'email', value: email } });
        fireEvent.change(passwordField, { target: { name: 'password', value: password } });
        fireEvent.submit(loginForm);


        expect(mockStartLoginWithEmail).toHaveBeenCalledWith({
            email,
            password
        })


    });


});
