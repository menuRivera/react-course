import PropTypes from 'prop-types'
import { useState } from 'react';

const handleEvent = (e) => {
    console.log(e);
}

export const Counter = ({ value }) => {
    const [counter, setCounter] = useState(value)

    const handleAdd = () => setCounter(counter + 1)
    const handleSubstract = () => setCounter(counter - 1)
    const handleReset = () => setCounter(value)

    return (
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button aria-label='btn-reset' onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}