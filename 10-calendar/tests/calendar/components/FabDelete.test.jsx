import { fireEvent, render, screen } from "@testing-library/react"
import { FabDelete } from "../../../src/calendar/components/FabDelete"
import { useCalendarStore } from "../../../src/hooks/useCalendarStore"


jest.mock('../../../src/hooks/useCalendarStore')

describe('Pruebas en <FabDelete />', () => {

    beforeEach(() => jest.clearAllMocks());


    test('Debe mostrar el componente correctamente', () => {

        useCalendarStore.mockReturnValue({
            hasEventSelected: true
        });

        render(<FabDelete />);

        const btn = screen.getByLabelText('btn-delete');

        expect(btn.classList).toContain('btn');
        expect(btn.classList).toContain('btn-danger');
        expect(btn.classList).toContain('fab-danger');
    });


    test('Debe mostrar el botón si hay un evento activo', () => {
        useCalendarStore.mockReturnValue({
            hasEventSelected: true
        });

        render(<FabDelete />);

        const btn = screen.getByLabelText('btn-delete');

        expect(btn).toBeTruthy()
    });

    test('Debe llamar startDeletingEvent si hay evento activo', () => {
        const mockStartDeletingEvent = jest.fn();

        useCalendarStore.mockReturnValue({
            hasEventSelected: true,
            startDeletingEvent: mockStartDeletingEvent
        });

        render(<FabDelete />);

        const btn = screen.getByLabelText('btn-delete');
        fireEvent.click(btn);

        expect(mockStartDeletingEvent).toHaveBeenCalledWith();
    });
})