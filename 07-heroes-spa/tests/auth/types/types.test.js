import { types } from "../../../src/auth/types/types"

describe('Pruebas en types.js', () => {
    test('Debe regresar estos tipes', () => {
        expect(types).toEqual({
            login: 'login',
            logout: 'logout'
        })
    })
})