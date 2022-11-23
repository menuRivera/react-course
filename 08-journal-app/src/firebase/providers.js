import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)

        const { displayName, email, photoURL, uid } = result.user
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        // console.log({credentials});
    } catch (error) {
        console.error(error)

        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {

        const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = res.user
        await updateProfile(FirebaseAuth.currentUser, {
            displayName
        })

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    // signInWithEmailAndPassword
    try {
        const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = res.user

        return {
            ok: true,
            displayName, uid, photoURL, email
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}