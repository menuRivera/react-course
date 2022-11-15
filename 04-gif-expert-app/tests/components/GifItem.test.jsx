import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem/>', () => {
    const title = 'Goku';
    const url = 'https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=5d6963d424eo07zs9ycmcc7ndeh51rmaltkmm5wsdnjyt9ht&rid=giphy.gif&ct=g'


    test('Debe evaluar el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)

        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar la imágen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url} />)

        const { src, alt } = screen.getByRole('img')

        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />)

        expect(screen.getByText(title)).toBeTruthy()
    })
})