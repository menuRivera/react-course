import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"

describe('Pruebas en <HomePage />', () => {
    const user = {
        id: 1,
        name: 'Manuel'
    }
    test('Debe mostrar el componente sin usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        )
        // screen.debug()

        const pElement = screen.getByLabelText('p')
        expect(pElement.innerHTML).toBe(JSON.stringify(user))
    })
})