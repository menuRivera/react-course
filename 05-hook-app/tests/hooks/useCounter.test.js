import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el useCounter', () => {
    test('Debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, increment, decrement, reset } = result.current

        expect(counter).toBe(10)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })

    test('Debe generar el counter con el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100))
        const { counter } = result.current

        expect(counter).toBe(100)
    })

    test('Deben incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter, increment } = result.current

        act(() => {
            increment(2)
        })

        expect(result.current.counter).toBe(102)
        // expect(counter).toBe(102) // Esto no se hace
    })

    test('Deben decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100))
        const { decrement } = result.current

        act(() => {
            decrement(2)
        })

        expect(result.current.counter).toBe(98)
    })

    test('Deben resetear el contador', () => {
        const { result } = renderHook(() => useCounter(100))
        const { reset, decrement } = result.current

        act(() => {
            decrement(2)
            reset()
        })

        expect(result.current.counter).toBe(100)
    })
})