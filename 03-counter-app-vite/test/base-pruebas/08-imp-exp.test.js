import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heores'

describe('Pruebas 08-imp-exp.test.js', () => {
    test('getHeroeById debe retornar un héroe por id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('getHeroeById debe retornar undefined', () => {
        const id = 100;
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy()
    })

    test('getHeroeByOwner debe retornar sólo los héroes de DC', () => {
        const owner = 'DC';
        const data = getHeroesByOwner(owner);

        expect(data.length).toBe(3)
        expect(data).toEqual(heroes.filter(hero => hero.owner === owner))
    })
})