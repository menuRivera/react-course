import { Navbar } from "../components/Navbar"
import { Calendar } from 'react-big-calendar'
import { localizer } from "../../helper/calendarLocalizer"
import { getMessagesES } from "../../helper/getMessages"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent } from "../components/CalendarEvent"
import { useEffect, useState } from "react"
import { CalendarModal } from "../components/CalendarModal"
import { useUiStore } from "../../hooks/useUiStore"
import { useCalendarStore } from "../../hooks/useCalendarStore"
import { FabAddNew } from "../components/FabAddNew"
import { FabDelete } from "../components/FabDelete"
import { useAuthStore } from "../../hooks/useAuthStore"

export const CalendarPage = () => {
    const { user } = useAuthStore()
    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore()
    const { openDateModal } = useUiStore()
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')


    const eventStyleGetter = (event) => {
        const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid)

        const style = {
            backgroundColor: isMyEvent ? '#347CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }

        return {
            style
        }
    }

    const onSelect = (e) => setActiveEvent(e)
    const onDoubleClick = (e) => {
        openDateModal()
    }
    const onViewChanged = (e) => {
        localStorage.setItem('lastView', e)
        setLastView(e)
    }

    useEffect(() => {
        startLoadingEvents()
    }, [])

    return (
        <>
            <Navbar />
            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <CalendarModal />
            <FabAddNew />
            <FabDelete />
        </>
    )
}