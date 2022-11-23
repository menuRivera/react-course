import { async } from "@firebase/util"
import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}


export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await signInWithGoogle()
        // console.log({result});
        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })

        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, photoURL, email, displayName }))

    }
}

export const startLoginWithEmail = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const { ok, uid, photoURL, errorMessage, displayName } = await loginWithEmailPassword({ email, password })

        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, photoURL, email, displayName }))
    }
}