import { useCalendarStore } from "../../hooks/useCalendarStore"

export const FabDelete = () => {
    const { startDeletingEvent, hasEventSelected } = useCalendarStore()

    const handleDelete = () => {
        startDeletingEvent()
    }

    if (!hasEventSelected) return <></>

    return (
        <button className="btn btn-danger fab-danger" onClick={handleDelete}>
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}