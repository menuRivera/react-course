import { useEffect } from "react"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = formState

    return (
        <>
            <h1>Formuario con custom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="hola@simon.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            {username == 'strider2' && <Message />}

            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
        </>
    )
}