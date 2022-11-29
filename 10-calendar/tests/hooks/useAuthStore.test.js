import { configureStore } from "@reduxjs/toolkit"
import { renderHook, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { Provider } from "react-redux"
import calendarApi from "../../src/api/calendarApi"
import { useAuthStore } from "../../src/hooks/useAuthStore"
import { authSlice } from "../../src/store/auth/authSlice"
import { initialState, notAuthenticatedState } from "../fixtures/authStates"
import { testUserCreds } from "../fixtures/testUser"

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer
        },
        preloadedState: {
            auth: { ...initialState }
        }
    })
}

describe('Pruebas en useAuthStore', () => {

    beforeEach(() => localStorage.clear())
    test('Debe regresar los valores por defecto', () => {
        const mockStore = getMockStore({ ...initialState })

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        })


        expect(result.current).toEqual({
            status: 'checking',
            user: {},
            errorMessage: undefined,
            startLogin: expect.any(Function),
            startRegister: expect.any(Function),
            checkAuthToken: expect.any(Function),
            startLogout: expect.any(Function),
        })
    })

    test('Debe realizar el login correctamente', async () => {
        // localStorage.clear()
        const mockStore = getMockStore({ ...notAuthenticatedState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore} >{children}</Provider>
        });

        await act(async () => {
            await result.current.startLogin(testUserCreds)
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'testuser', uid: '638402a9354122ebd8f47bc1' }
        });
        expect(localStorage.getItem('token')).toEqual(expect.any(String));
        expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String));
    });

    test('Debe fallar la autenticación', async () => {
        // localStorage.clear()
        const mockStore = getMockStore({ ...notAuthenticatedState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore} >{children}</Provider>
        });

        await act(async () => {
            await result.current.startLogin({ email: 'fdsaf@ficticio.com', password: 'vsjklfajskl' })
        });

        const { errorMessage, status, user } = result.current;

        expect(localStorage.getItem('token')).toBe(null);
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: 'Credenciales incorrectas',
            status: 'not-authenticated',
            user: {}
        });
        await waitFor(
            () => expect(result.current.errorMessage).toBe(undefined)
        );
    });

    test('Debe de crear un usuario', async () => {
        const newUser = { email: 'test2@correo.com', password: '123456', name: 'testuser2' };

        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore} >{children}</Provider>
        });

        const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
            data: {
                ok: true,
                uid: '123456',
                name: 'testuser2',
                token: 'algun-token'
            }
        });

        await act(async () => {
            await result.current.startRegister(newUser)
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'testuser2', uid: '123456' }
        });

        spy.mockRestore();
    });

    test('Debe de fallar la creación del usuario', async () => {
        const mockStore = getMockStore({ ...notAuthenticatedState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore} >{children}</Provider>
        });

        await act(async () => {
            await result.current.startRegister(testUserCreds)
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: 'El usuario ya existe',
            status: 'not-authenticated',
            user: {}
        });
    });

     test('Debe de fallar si no hay token', async() => {
        const mockStore = getMockStore({ ...initialState });

        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={ mockStore } >{ children }</Provider>
        });

        await act(async() => {
            await result.current.checkAuthToken()
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'not-authenticated',
            user: {}
        });
    });

      test('Debe autenticar al usuario si hay token', async() => {
        const { data } = await calendarApi.post('/auth', testUserCreds );

        localStorage.setItem('token', data.token );

        const mockStore = getMockStore({ ...initialState });

        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={ mockStore } >{ children }</Provider>
        });

        await act(async() => {
            await result.current.checkAuthToken()
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'testuser', uid: '638402a9354122ebd8f47bc1' }
        });
    });
})