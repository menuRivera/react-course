import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    const memorized = useMemo(() => heavyStuff(counter), [counter])


    return (
        <>
            <h1>Memo {'->'} <small>{counter}</small></h1>
            <hr />

            <p>{memorized}</p>

            <button
                className="btn btn-primary"
                onClick={() => increment()}>
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}>
                Show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}