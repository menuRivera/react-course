import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Manuel',
        email: 'hola@sisi.com'
    }
    test('Debe regresar la información por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm))

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

    test('Debe cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange } = result.current
        act(() => {
            onInputChange({target: {name: 'name', value: 'Juan'}})
        })

        expect(result.current.name).toBe('Juan')
        expect(result.current.formState.name).toBe('Juan')
    })

    test('Debe resetear el formulario', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const { onResetForm, onInputChange } = result.current
        act(() => {
            onInputChange({target: {name: 'name', value: 'Juan'}})
            onResetForm()
        })

        // expect(result.current.name).toBe('Juan')
        // expect(result.current.formState.name).toBe('Juan')
        expect(result.current.formState).toEqual(initialForm)
    })
})