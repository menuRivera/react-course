import { useLayoutEffect, useRef, useState } from "react"

export const QuoteLayoutEffect = ({ quote, author }) => {
    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect()

        setBoxSize({ height, width })
    }, [quote])

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef}>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            {/* <code></code> */}
            {JSON.stringify(boxSize)}
        </>
    )
}