import { SearchPage } from '../../../src/heroes/pages/SearchPage';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));



describe('Pruebas en <SearchPage />', () => {

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostar los valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();

    });

    test('Debe mostar a batman y cambiar el input', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        const img = screen.getByRole('img');

        expect(input.value).toBe('batman');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
    });

    test('Debe mostar un error si no se encuentra el heroe', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        expect(alert).toBeTruthy()
    });

    test('Debe llamar navigate() a la pantalla nueva', () => {
        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: inputValue } })


        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)
    });


});