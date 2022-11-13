import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('Prueba sobre getSaludo', () => {
        const name = 'Manuel';
        const msg = getSaludo(name);

        expect(msg).toBe(`Hola ${name}`)
    })
})