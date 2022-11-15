import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en getGifs.js', () => {
    test('Debe retornar un arreglo de urls (gifs)', async () => {
        const gifs = await getGifs('One Punch')

        console.log(gifs);
    })
})