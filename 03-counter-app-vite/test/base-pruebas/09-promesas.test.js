import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heores";

describe('Pruebas en 09-promesas', () => {
    test('getHeroByIdAsync debe retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBe(heroes.find(hero => hero.id == id));

                done()
            })
    })
})