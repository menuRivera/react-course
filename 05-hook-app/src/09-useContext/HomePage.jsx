import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <h1>Home page</h1>
            <hr />

            <p aria-label="p">{JSON.stringify(user)}</p>
        </>
    )
}