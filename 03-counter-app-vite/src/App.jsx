import PropTypes from 'prop-types'
import { Counter } from './components/Counter'

const newMessage = {
    message: 'Hola mundo',
    title: 'lalala'
}

const printMessage = (msg) => {
    return msg
}


export const App = ({ title }) => {

    return (
        <>
            <h1>Fist app</h1>
            <h3>{title}</h3>
            <p>{printMessage('Sample text')}</p>

            <Counter value={2} />
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired
}