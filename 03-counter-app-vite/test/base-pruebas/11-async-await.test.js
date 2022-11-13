import { getPost } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
    test('getPost', async () => {
        const post = await getPost(4)
        
        expect(post).toBeTruthy()
    })
})