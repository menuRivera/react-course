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

export const CalendarPage = () => {
    const { events, setActiveEvent } = useCalendarStore()
    const { openDateModal } = useUiStore()
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = () => {
        const style = {
            backgroundColor: '#347CF7',
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