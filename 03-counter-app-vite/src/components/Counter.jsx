import PropTypes from 'prop-types'
import { useState } from 'react';

const handleEvent = (e) => {
    console.log(e);
}

export const Counter = ({ value }) => {
    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>
                +1
            </button>
        </>
    )
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}