import { addHours } from "date-fns/esm"
import { useCalendarStore } from "../../hooks/useCalendarStore"
import { useUiStore } from "../../hooks/useUiStore"

export const FabAddNew = () => {

    const { openDateModal } = useUiStore()
    const { setActiveEvent } = useCalendarStore()

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                _id: 'fdsafa',
                name: 'Manuel'
            }
        })
        openDateModal()
    }

    return (
        <button className="btn btn-primary fab" onClick={handleClickNew}>
            <i className="fas fa-plus"></i>
        </button>
    )
}