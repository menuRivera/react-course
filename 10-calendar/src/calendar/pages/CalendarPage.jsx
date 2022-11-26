import { Navbar } from "../components/Navbar"
import { Calendar } from 'react-big-calendar'
import { addHours } from "date-fns"
import { localizer } from "../../helper/calendarLocalizer"
import { getMessagesES } from "../../helper/getMessages"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent } from "../components/CalendarEvent"
import { useState } from "react"
import { CalendarModal } from "../components/CalendarModal"

const events = [{
    title: 'un titulo',
    notes: 'unas notas',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: 'ffdsafds',
        name: 'Juan'
    }
}]


export const CalendarPage = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = (event, start, end, isSelected) => {
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


    const onDoubleClick = (e) => {

    }
    const onSelect = (e) => {

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
        </>
    )
}