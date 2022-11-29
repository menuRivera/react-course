import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarState";

describe('Pruebas en calendarSlice', () => {
    test('Debe regresar el initialState', () => {
        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialState)
    })

    test('onSetActiveEvent debe activar el evento', () => {
        const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]))

        expect(state.activeEvent).toEqual(events[0])
    })

    test('onAddNewEvent debe agregar un evento a estado', () => {
        const newEv = {
            id: '3',
            start: new Date('2022-10-21 13:00:00'),
            end: new Date('2022-10-21 15:00:00'),
            title: 'un titulo más',
            notes: 'otra nota más',
        }

        const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEv))

        expect(state.events).toEqual([...events, newEv])
    })

    test('onUpdateEvent debe actualizar un estado', () => {
        const newEv = {
            id: '1',
            start: new Date('2022-10-21 13:00:00'),
            end: new Date('2022-10-21 15:00:00'),
            title: 'titulo editado',
            notes: 'notas editadas',
        }

        const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(newEv))

        expect(state.events).toContain(newEv)
    })

    test('onDeleteEvent debe borrar el evento activo', () => {
        const state = calendarSlice
            .reducer(calendarWithActiveEventState, onDeleteEvent())

        expect(state.activeEvent).toBeFalsy()
        expect(state.events).not.toContainEqual({ ...events[0] })
    })

    test('onLoadEvents debe establecer los eventos', () => {
        const state = calendarSlice
            .reducer(initialState, onLoadEvents(events))

        expect(state.events).toEqual(events)
    })

    test('onLogoutCalendar debe limpiar el estado', () => {
        const state = calendarSlice
            .reducer(calendarWithActiveEventState, onLogoutCalendar)

        expect(state).toEqual(initialState)
    })
})