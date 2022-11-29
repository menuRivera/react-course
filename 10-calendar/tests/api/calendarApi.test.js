import calendarApi from "../../src/api/calendarApi"

describe('Pruebas en calendarApi', () => {
    test('Debe tener la configuración correcta', () => {
        expect(calendarApi.defaults.baseURL).toBe(import.meta.env.VITE_API_URL)
    })

    test('Debe tener el header x-token', async () => {
        localStorage.setItem('token', 'gato')
        const res = await calendarApi.get('/auth')

        expect(res.config.headers['x-token']).toBe('gato')
    })
})