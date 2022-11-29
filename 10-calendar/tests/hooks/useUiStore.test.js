import { configureStore } from "@reduxjs/toolkit"
import { renderHook } from "@testing-library/react"
import { Provider } from "react-redux"
import { useUiStore } from "../../src/hooks/useUiStore"
import { uiSlice } from "../../src/store/ui/uiSlice"

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            ui: uiSlice.reducer,
        },
        preloadedState: {
            ui: { ...initialState }
        }
    })
}

describe('Pruebas en useUiStore', () => {
    test('Debe regresar los valores por defecto', () => {

        const mockStore = getMockStore({ isDateModalOpen: false })

        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        })

        expect(result.current).toEqual({
            isDateModalOpen: false,
            closeDateModal: expect.any(Function),
            openDateModal: expect.any(Function),
        })

    })
})