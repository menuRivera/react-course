import { useCounter, useFetch } from '../hooks'
import { LoadingQuote } from '../03-examples/LoadingQuote'
import { QuoteLayoutEffect } from './QuoteLayoutEffect'

export const Layout = () => {
    const { counter, increment } = useCounter(1)
    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/' + counter)


    const { quote, author } = !!data && data[0]

    return (
        <>
            <h1>Multiple custom hooks</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <QuoteLayoutEffect quote={quote} author={author} />
            }

            <button className="btn btn-primary" onClick={() => increment(1)}>
                Next quote
            </button>
        </>
    )
}