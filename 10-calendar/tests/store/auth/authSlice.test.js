import { authSlice, clearErrorMessage, onLogin, onLogout } from "../../../src/store/auth/authSlice"
import { authenticatedState, initialState } from "../../fixtures/authStates"
import { testUserCreds } from "../../fixtures/testUser"

describe('Pruebas en authSlice', () => {
    test('Debe regresar el initialState', () => {
        expect(authSlice.getInitialState()).toEqual(initialState)
    })

    test('Debe realizar un login', () => {
        const state = authSlice.reducer(initialState, onLogin(testUserCreds))

        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCreds,
            errorMessage: undefined
        })
    })

    test('Debe realizar el logout', () => {
        const state = authSlice.reducer(authenticatedState, onLogout())

        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined
        })
    })

    test('Debe limpiar el mensaje de error', () => {
        const errorMessage = 'error';
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage
        })

        const newState = authSlice.reducer(state, clearErrorMessage())
        expect(newState).toEqual({
            status: 'not-authenticated',
            user: {},
            undefined
        })
    })
})