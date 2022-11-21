import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas en authReducer.js', () => {
    const initialState = {
        logged: false,
        user: undefined
    }

    test('Debe retornar el estado por defecto', () => {
        const newState = authReducer(initialState, {})

        expect(newState).toBe(initialState)
    })

    test('Debe llamar el login, autenticar y establecer el user', () => {
        const user = {
            name: 'Manuel Rivera',
            id: 'aaa'
        }
        const action = {
            type: types.login,
            payload: user 
        }
        const newState = authReducer(initialState, action)

        expect(newState.user).toBe(user)
        expect(newState.logged).toBeTruthy()
    })

    test('Debe llamar el logout, borrar el usuario y logged en false', () => {
        const action = {
            type: types.logout,
        }
        const newState = authReducer(initialState, action)

        expect(newState.user).toBe(undefined)
        expect(newState.logged).toBeFalsy()
    })
})