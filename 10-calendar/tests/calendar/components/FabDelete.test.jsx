import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { FabDelete } from "../../../src/calendar/components/FabDelete"
import { store } from '../../../src/store/store'

describe('Pruebas en <FabDelete />', () => {
    test('Debe mostrar el componente correctamente', () => {
        render(
            <Provider store={store}>
                <FabDelete />
            </Provider>
        )
    })
})