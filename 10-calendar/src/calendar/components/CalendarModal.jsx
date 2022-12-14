import { addHours, differenceInSeconds } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import Modal from 'react-modal'
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale';
import Swal from 'sweetalert2';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';

registerLocale('es', es)

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

if (import.meta.env.MODE !== 'test')
    Modal.setAppElement('#root')

export const CalendarModal = () => {
    const { isDateModalOpen, closeDateModal } = useUiStore()
    const { activeEvent, startSavingEvent } = useCalendarStore()
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formValues, setFormValues] = useState({
        title: 'Manuel',
        notes: 'Rivera',
        start: new Date(),
        end: addHours(new Date(), 2)
    })


    const titleClass = useMemo(() => {
        if (!formSubmitted) return ''

        return (formValues.title.length > 0)
            ? ''
            : 'is-invalid'

    }, [formValues.title, formSubmitted])

    useEffect(() => {
        if (activeEvent != null) {
            setFormValues({ ...activeEvent })
        }
    }, [activeEvent])

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onCloseModal = () => {
        closeDateModal()
    }

    const onDateChanged = (e, changing) => {
        setFormValues({
            ...formValues,
            [changing]: e
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setFormSubmitted(true)

        const diff = differenceInSeconds(formValues.end, formValues.start)

        if (isNaN(diff) || diff <= 0) {
            Swal.fire('Fechas incorrectas', 'Revisar las fechas', 'error')
            return
        }
        if (formValues.title.length <= 0) return

        await startSavingEvent(formValues)
        closeDateModal()
        setFormSubmitted(false)
    }
    return (
        <Modal
            isOpen={isDateModalOpen}
            closTimeout={200}
            onRequestClose={onCloseModal}
            style={customStyles}
            overlayClassName='modal-fondo'
            className='modal'
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={formValues.start}
                        className="form-control"
                        onChange={(e) => onDateChanged(e, 'start')}
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora'
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        minDate={formValues.start}
                        selected={formValues.end}
                        className="form-control"
                        onChange={(e) => onDateChanged(e, 'end')}
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora'
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${titleClass}`}
                        placeholder="T??tulo del evento"
                        name="title"
                        autoComplete="off"
                        onChange={onInputChange}
                        value={formValues.title}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripci??n corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        onChange={onInputChange}
                        value={formValues.notes}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Informaci??n adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}