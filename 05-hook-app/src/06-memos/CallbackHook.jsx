import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)
    
    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const incrementFather = useCallback((value = 1) => {
        setCounter(count => count + value)
    }, [])

    return (
        <>
            <h1>useCallbackHook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}