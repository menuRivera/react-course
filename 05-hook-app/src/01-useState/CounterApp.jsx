import { useState } from "react"

export const CounterApp = () => {
    const [state, setState] = useState({
        c1: 10,
        c2: 20,
        c3: 30
    })

    return (
        <>
            <h2>Counter: {state.c1}</h2>
            <h2>Counter: {state.c2}</h2>
            <h2>Counter: {state.c3}</h2>
            <hr />
            <button className="btn btn-primary" onClick={() => setState(({ c1: state.c1 + 1 , c2: state.c2 + 20, c3: state.c3+30}))}>+1</button>
        </>
    )
}
