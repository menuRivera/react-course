import { onOpenDateModal, uiSlice } from "../../../src/store/ui/uiSlice"

describe('Pruebas en uiSlice', () => {
    test('Debe regresar el initialState', () => {
        expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false })
    })

    test('Debe cambiar isDateModal correctamente', () => {
        let state = uiSlice.getInitialState()
        state = uiSlice.reducer(state, onOpenDateModal())

        expect(state.isDateModalOpen).toBeTruthy()
    })
})