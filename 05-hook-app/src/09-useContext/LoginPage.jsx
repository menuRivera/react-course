import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <h1>Login page</h1>
            <hr />
            <p aria-label="p">{JSON.stringify(user)}</p>
            <button onClick={() => setUser({ id: 123, name: 'Roberto', email: 'jaja@sisi.com' })} className="btn btn-primary">
                Set User
            </button>
        </>
    )
}