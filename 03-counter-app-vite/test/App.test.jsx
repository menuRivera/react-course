import { render, screen } from '@testing-library/react'
import { App } from '../src/App'


describe('Pruebas en <App />', () => {
    // test('Debe hacer match con el snapshot', () => {
    //     const title = 'Sapo'
    //     const { container } = render(<App title={title} />)

    //     expect(container).toMatchSnapshot()
    // })
    // test('Debe contener el título especificado', () => {
    //     const title = 'Sample title'
    //     const { getByText } = render(<App title={title} />)

    //     expect(getByText(title)).toBeTruthy()
    // })

    // test('Debe contener el titulo según el id del texto', () => {
    //     const title = 'Sample title'
    //     const id = 'test-title'
    //     const { getByText, getByTestId } = render(<App title={title} />)

    //     expect(getByTestId(id).innerHTML).toContain(title)
    // })

    // test('Debe contener dos subtitulos', () => {
    //     const title = 'Sample title'
    //     const subTitle = 'hola'
    //     const { getAllByText } = render(<App title={title} subTitle={subTitle} />)

    //     expect(getAllByText(subTitle).length).toBe(2)
    // })


    test('Debe contener el título especificado', () => {
        const title = 'Sample title'
        render(<App title={title} />)

        expect(screen.getByText(title)).toBeTruthy()
    })

    test('Debe contener el título especificado en un h3', () => {
        const title = 'Sample title'
        render(<App title={title} />)

        expect(screen.getByRole('heading', { level: 3 }).innerHTML).toContain(title)
    })
})