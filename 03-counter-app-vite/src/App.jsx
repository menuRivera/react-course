import PropTypes from 'prop-types'
import { Counter } from './components/Counter'

const printMessage = (msg) => {
    return msg
}

export const App = ({ title, subTitle, name }) => {

    return (
        <>
            <h1>Fist app</h1>
            <h3 data-testid="test-title">{title}</h3>
            <h4>{subTitle}</h4>
            <p>{name}</p>
            <p>{printMessage('Sample text')}</p>

            <Counter value={2} />
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string
}

App.defaultProps = {
    title: 'Default title',
    subTitle: 'Default subtitle',
    name: 'Manuel Rivera'
}